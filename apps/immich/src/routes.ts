import { createRoute, z } from '@hono/zod-openapi'

const ReactionTypeSchema = z
  .enum(['comment', 'like'])
  .openapi({ description: 'Reaction type' })
  .openapi('ReactionType')

const ActivityCreateDtoSchema = z
  .object({
    albumId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Album ID' }),
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'Asset ID (if activity is for an asset)' }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Comment text (required if type is comment)' }),
    type: ReactionTypeSchema,
  })
  .openapi({ description: 'Activity create', required: ['albumId', 'type'] })
  .openapi('ActivityCreateDto')

const UserAvatarColorSchema = z
  .enum(['primary', 'pink', 'red', 'yellow', 'blue', 'green', 'purple', 'orange', 'gray', 'amber'])
  .openapi({ description: 'User avatar color' })
  .openapi('UserAvatarColor')

const UserResponseDtoSchema = z
  .object({
    avatarColor: UserAvatarColorSchema,
    email: z
      .email()
      .regex(
        /^[\p{L}\p{M}\p{N}.!#$%&'*+\/=?^_`{|}~-]+@[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?(?:\.[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?)*$/u,
      )
      .openapi({ description: 'User email' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
    name: z.string().openapi({ description: 'User name' }),
    profileChangedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Profile change date' }),
    profileImagePath: z.string().openapi({ description: 'Profile image path' }),
  })
  .openapi({
    required: ['avatarColor', 'email', 'id', 'name', 'profileChangedAt', 'profileImagePath'],
  })
  .openapi('UserResponseDto')

const ActivityResponseDtoSchema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .nullable()
      .openapi({ description: 'Asset ID (if activity is for an asset)' }),
    comment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Comment text (for comment activities)' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Activity ID' }),
    type: ReactionTypeSchema,
    user: UserResponseDtoSchema,
  })
  .openapi({ required: ['assetId', 'createdAt', 'id', 'type', 'user'] })
  .openapi('ActivityResponseDto')

const ActivityStatisticsResponseDtoSchema = z
  .object({
    comments: z.int().min(0).max(9007199254740991).openapi({ description: 'Number of comments' }),
    likes: z.int().min(0).max(9007199254740991).openapi({ description: 'Number of likes' }),
  })
  .openapi({ required: ['comments', 'likes'] })
  .openapi('ActivityStatisticsResponseDto')

const AlbumUserRoleSchema = z
  .enum(['editor', 'owner', 'viewer'])
  .openapi({ description: 'Album user role' })
  .openapi('AlbumUserRole')

const AlbumUserAddDtoSchema = z
  .object({
    role: AlbumUserRoleSchema.default('editor')
      .exactOptional()
      .openapi({ description: 'Album user role' }),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
  })
  .openapi({ required: ['userId'] })
  .openapi('AlbumUserAddDto')

const AddUsersDtoSchema = z
  .object({
    albumUsers: z
      .array(AlbumUserAddDtoSchema)
      .min(1)
      .openapi({ description: 'Album users to add' }),
  })
  .openapi({ required: ['albumUsers'] })
  .openapi('AddUsersDto')

const AdminConfigDatabaseBackupDtoSchema = z
  .object({
    cronExpression: z.string().openapi({ description: 'Cron expression' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
    keepLastAmount: z
      .int()
      .min(1)
      .max(9007199254740991)
      .openapi({ description: 'Keep last amount' }),
  })
  .openapi({ required: ['cronExpression', 'enabled', 'keepLastAmount'] })
  .openapi('AdminConfigDatabaseBackupDto')

const AdminConfigBackupsDtoSchema = z
  .object({
    beta: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the backups feature is enabled' }),
    database: AdminConfigDatabaseBackupDtoSchema,
  })
  .openapi({ required: ['database'] })
  .openapi('AdminConfigBackupsDto')

const AdminConfigClipDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether the task is enabled' }),
    modelName: z.string().openapi({ description: 'Name of the model to use' }),
  })
  .openapi({ required: ['enabled', 'modelName'] })
  .openapi('AdminConfigClipDto')

const TranscodeHWAccelSchema = z
  .enum(['nvenc', 'qsv', 'vaapi', 'rkmpp', 'disabled'])
  .openapi({ description: 'Transcode hardware acceleration' })
  .openapi('TranscodeHWAccel')

const AudioCodecSchema = z
  .enum(['mp3', 'aac', 'opus', 'pcm_s16le'])
  .openapi({ description: 'Target audio codec' })
  .openapi('AudioCodec')

const VideoContainerSchema = z
  .enum(['mov', 'mp4', 'ogg', 'webm'])
  .openapi({ description: 'Accepted video containers' })
  .openapi('VideoContainer')

const VideoCodecSchema = z
  .enum(['h264', 'hevc', 'vp9', 'av1'])
  .openapi({ description: 'Target video codec' })
  .openapi('VideoCodec')

const CQModeSchema = z
  .enum(['auto', 'cqp', 'icq'])
  .openapi({ description: 'CQ mode' })
  .openapi('CQMode')

const HlsVideoResolutionSchema = z
  .union([z.literal(480), z.literal(720), z.literal(1080), z.literal(1440), z.literal(2160)])
  .openapi({ description: 'HLS video resolution' })
  .openapi('HlsVideoResolution')

const AdminConfigFFmpegRealtimeDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Enable real-time HLS transcoding (alpha)' }),
    resolutions: z
      .array(HlsVideoResolutionSchema)
      .openapi({ description: 'Resolutions to use for real-time HLS transcoding' }),
    videoCodecs: z
      .array(VideoCodecSchema)
      .openapi({ description: 'Video codecs to use for real-time HLS transcoding' }),
  })
  .openapi({ required: ['enabled', 'resolutions', 'videoCodecs'] })
  .openapi('AdminConfigFFmpegRealtimeDto')

const ToneMappingSchema = z
  .enum(['hable', 'mobius', 'reinhard', 'disabled'])
  .openapi({ description: 'Tone mapping' })
  .openapi('ToneMapping')

const TranscodePolicySchema = z
  .enum(['all', 'optimal', 'bitrate', 'required', 'disabled'])
  .openapi({ description: 'Transcode policy' })
  .openapi('TranscodePolicy')

const AdminConfigFFmpegDtoSchema = z
  .object({
    accel: TranscodeHWAccelSchema,
    accelDecode: z.boolean().openapi({ description: 'Accelerated decode' }),
    acceptedAudioCodecs: z
      .array(AudioCodecSchema)
      .openapi({ description: 'Accepted audio codecs' }),
    acceptedContainers: z
      .array(VideoContainerSchema)
      .openapi({ description: 'Accepted containers' }),
    acceptedVideoCodecs: z
      .array(VideoCodecSchema)
      .openapi({ description: 'Accepted video codecs' }),
    bframes: z.int().min(-1).max(16).openapi({ description: 'B-frames' }),
    cqMode: CQModeSchema,
    crf: z.int().min(0).max(51).openapi({ description: 'CRF' }),
    gopSize: z.int().min(0).max(9007199254740991).openapi({ description: 'GOP size' }),
    maxBitrate: z.string().openapi({ description: 'Max bitrate' }),
    preferredHwDevice: z.string().openapi({ description: 'Preferred hardware device' }),
    preset: z.string().openapi({ description: 'Preset' }),
    realtime: AdminConfigFFmpegRealtimeDtoSchema,
    refs: z.int().min(0).max(6).openapi({ description: 'References' }),
    targetAudioCodec: AudioCodecSchema,
    targetResolution: z.string().openapi({ description: 'Target resolution' }),
    targetVideoCodec: VideoCodecSchema,
    temporalAQ: z.boolean().openapi({ description: 'Temporal AQ' }),
    threads: z.int().min(0).max(9007199254740991).openapi({ description: 'Threads' }),
    tonemap: ToneMappingSchema,
    transcode: TranscodePolicySchema,
    twoPass: z.boolean().openapi({ description: 'Two pass' }),
  })
  .openapi({
    required: [
      'accel',
      'accelDecode',
      'acceptedAudioCodecs',
      'acceptedContainers',
      'acceptedVideoCodecs',
      'bframes',
      'cqMode',
      'crf',
      'gopSize',
      'maxBitrate',
      'preferredHwDevice',
      'preset',
      'realtime',
      'refs',
      'targetAudioCodec',
      'targetResolution',
      'targetVideoCodec',
      'temporalAQ',
      'threads',
      'tonemap',
      'transcode',
      'twoPass',
    ],
  })
  .openapi('AdminConfigFFmpegDto')

const ColorspaceSchema = z
  .enum(['srgb', 'p3'])
  .openapi({ description: 'Colorspace' })
  .openapi('Colorspace')

const ImageFormatSchema = z
  .enum(['jpeg', 'jxl', 'webp'])
  .openapi({ description: 'Image format' })
  .openapi('ImageFormat')

const AdminConfigGeneratedFullsizeImageDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Enabled' }),
    format: ImageFormatSchema,
    progressive: z.boolean().exactOptional().openapi({ description: 'Progressive' }),
    quality: z.int().min(1).max(100).openapi({ description: 'Quality' }),
  })
  .openapi({ required: ['enabled', 'format', 'quality'] })
  .openapi('AdminConfigGeneratedFullsizeImageDto')

const AdminConfigGeneratedImageDtoSchema = z
  .object({
    format: ImageFormatSchema,
    progressive: z.boolean().exactOptional().openapi({ description: 'Progressive' }),
    quality: z.int().min(1).max(100).openapi({ description: 'Quality' }),
    size: z.int().min(1).max(9007199254740991).openapi({ description: 'Size' }),
  })
  .openapi({ required: ['format', 'quality', 'size'] })
  .openapi('AdminConfigGeneratedImageDto')

const AdminConfigImageDtoSchema = z
  .object({
    colorspace: ColorspaceSchema,
    extractEmbedded: z.boolean().openapi({ description: 'Extract embedded' }),
    fullsize: AdminConfigGeneratedFullsizeImageDtoSchema,
    preview: AdminConfigGeneratedImageDtoSchema,
    thumbnail: AdminConfigGeneratedImageDtoSchema,
  })
  .openapi({ required: ['colorspace', 'extractEmbedded', 'fullsize', 'preview', 'thumbnail'] })
  .openapi('AdminConfigImageDto')

const AdminConfigIntegrityChecksumJobDtoSchema = z
  .object({
    cronExpression: z
      .string()
      .openapi({ description: 'Cron expression for when the integrity check should run' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
    percentageLimit: z
      .float64()
      .min(0)
      .max(1)
      .openapi({ description: 'Percentage limit of the integrity checksum job' }),
    timeLimit: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'How long the integrity checksum job may run for' }),
  })
  .openapi({
    description: 'Integrity checksum job config',
    required: ['cronExpression', 'enabled', 'percentageLimit', 'timeLimit'],
  })
  .openapi('AdminConfigIntegrityChecksumJobDto')

const AdminConfigIntegrityJobDtoSchema = z
  .object({
    cronExpression: z
      .string()
      .openapi({ description: 'Cron expression for when the integrity check should run' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
  })
  .openapi({ description: 'Integrity job config', required: ['cronExpression', 'enabled'] })
  .openapi('AdminConfigIntegrityJobDto')

const AdminConfigIntegrityChecksDtoSchema = z
  .object({
    checksumFiles: AdminConfigIntegrityChecksumJobDtoSchema,
    missingFiles: AdminConfigIntegrityJobDtoSchema,
    untrackedFiles: AdminConfigIntegrityJobDtoSchema,
  })
  .openapi({
    description: 'Integrity checks config',
    required: ['checksumFiles', 'missingFiles', 'untrackedFiles'],
  })
  .openapi('AdminConfigIntegrityChecksDto')

const AdminConfigJobSettingsDtoSchema = z
  .object({
    concurrency: z.int().min(1).max(9007199254740991).openapi({ description: 'Concurrency' }),
  })
  .openapi({ required: ['concurrency'] })
  .openapi('AdminConfigJobSettingsDto')

const AdminConfigJobDtoSchema = z
  .object({
    backgroundTask: AdminConfigJobSettingsDtoSchema,
    editor: AdminConfigJobSettingsDtoSchema,
    faceDetection: AdminConfigJobSettingsDtoSchema,
    integrityCheck: AdminConfigJobSettingsDtoSchema,
    library: AdminConfigJobSettingsDtoSchema,
    metadataExtraction: AdminConfigJobSettingsDtoSchema,
    migration: AdminConfigJobSettingsDtoSchema,
    notifications: AdminConfigJobSettingsDtoSchema,
    ocr: AdminConfigJobSettingsDtoSchema,
    search: AdminConfigJobSettingsDtoSchema,
    sidecar: AdminConfigJobSettingsDtoSchema,
    smartSearch: AdminConfigJobSettingsDtoSchema,
    thumbnailGeneration: AdminConfigJobSettingsDtoSchema,
    videoConversion: AdminConfigJobSettingsDtoSchema,
    workflow: AdminConfigJobSettingsDtoSchema,
  })
  .openapi({
    required: [
      'backgroundTask',
      'editor',
      'faceDetection',
      'integrityCheck',
      'library',
      'metadataExtraction',
      'migration',
      'notifications',
      'ocr',
      'search',
      'sidecar',
      'smartSearch',
      'thumbnailGeneration',
      'videoConversion',
      'workflow',
    ],
  })
  .openapi('AdminConfigJobDto')

const AdminConfigLibraryScanDtoSchema = z
  .object({
    cronExpression: z.string().openapi({ description: 'Cron expression' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
  })
  .openapi({ required: ['cronExpression', 'enabled'] })
  .openapi('AdminConfigLibraryScanDto')

const AdminConfigLibraryWatchDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('AdminConfigLibraryWatchDto')

const AdminConfigLibraryDtoSchema = z
  .object({ scan: AdminConfigLibraryScanDtoSchema, watch: AdminConfigLibraryWatchDtoSchema })
  .openapi({ required: ['scan', 'watch'] })
  .openapi('AdminConfigLibraryDto')

const LogLevelSchema = z
  .enum(['verbose', 'debug', 'log', 'warn', 'error', 'fatal'])
  .openapi({ description: 'Log level' })
  .openapi('LogLevel')

const AdminConfigLoggingDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Enabled' }), level: LogLevelSchema })
  .openapi({ required: ['enabled', 'level'] })
  .openapi('AdminConfigLoggingDto')

const AdminConfigMachineLearningAvailabilityChecksDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Enabled' }),
    interval: z.int().min(-9007199254740991).max(9007199254740991),
    timeout: z.int().min(-9007199254740991).max(9007199254740991),
  })
  .openapi({ required: ['enabled', 'interval', 'timeout'] })
  .openapi('AdminConfigMachineLearningAvailabilityChecksDto')

const AdminConfigDuplicateDetectionDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether the task is enabled' }),
    maxDistance: z
      .float64()
      .min(0.001)
      .max(0.1)
      .openapi({ description: 'Maximum distance threshold for duplicate detection' }),
  })
  .openapi({ required: ['enabled', 'maxDistance'] })
  .openapi('AdminConfigDuplicateDetectionDto')

const AdminConfigFacialRecognitionDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether the task is enabled' }),
    maxDistance: z
      .float64()
      .min(0.1)
      .max(2)
      .openapi({ description: 'Maximum distance threshold for face recognition' }),
    minFaces: z
      .int()
      .min(1)
      .max(9007199254740991)
      .openapi({ description: 'Minimum number of faces required for recognition' }),
    minScore: z
      .float64()
      .min(0.1)
      .max(1)
      .openapi({ description: 'Minimum confidence score for face detection' }),
    modelName: z.string().openapi({ description: 'Name of the model to use' }),
  })
  .openapi({ required: ['enabled', 'maxDistance', 'minFaces', 'minScore', 'modelName'] })
  .openapi('AdminConfigFacialRecognitionDto')

const AdminConfigOcrDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether the task is enabled' }),
    maxResolution: z
      .int()
      .min(1)
      .max(9007199254740991)
      .openapi({ description: 'Maximum resolution for OCR processing' }),
    minDetectionScore: z
      .float64()
      .min(0.1)
      .max(1)
      .openapi({ description: 'Minimum confidence score for text detection' }),
    minRecognitionScore: z
      .float64()
      .min(0.1)
      .max(1)
      .openapi({ description: 'Minimum confidence score for text recognition' }),
    modelName: z.string().openapi({ description: 'Name of the model to use' }),
  })
  .openapi({
    required: ['enabled', 'maxResolution', 'minDetectionScore', 'minRecognitionScore', 'modelName'],
  })
  .openapi('AdminConfigOcrDto')

const AdminConfigMachineLearningDtoSchema = z
  .object({
    availabilityChecks: AdminConfigMachineLearningAvailabilityChecksDtoSchema,
    clip: AdminConfigClipDtoSchema,
    duplicateDetection: AdminConfigDuplicateDetectionDtoSchema,
    enabled: z.boolean().openapi({ description: 'Enabled' }),
    facialRecognition: AdminConfigFacialRecognitionDtoSchema,
    ocr: AdminConfigOcrDtoSchema,
    urls: z.array(z.string()).min(1).openapi({ description: 'ML service URLs' }),
  })
  .openapi({
    required: [
      'availabilityChecks',
      'clip',
      'duplicateDetection',
      'enabled',
      'facialRecognition',
      'ocr',
      'urls',
    ],
  })
  .openapi('AdminConfigMachineLearningDto')

const AdminConfigMapDtoSchema = z
  .object({
    darkStyle: z.url().openapi({ description: 'Dark map style URL' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
    lightStyle: z.url().openapi({ description: 'Light map style URL' }),
  })
  .openapi({ required: ['darkStyle', 'enabled', 'lightStyle'] })
  .openapi('AdminConfigMapDto')

const AdminConfigFacesDtoSchema = z
  .object({ import: z.boolean().openapi({ description: 'Import' }) })
  .openapi({ required: ['import'] })
  .openapi('AdminConfigFacesDto')

const AdminConfigMetadataDtoSchema = z
  .object({ faces: AdminConfigFacesDtoSchema })
  .openapi({ required: ['faces'] })
  .openapi('AdminConfigMetadataDto')

const ReleaseChannelSchema = z
  .enum(['stable', 'releaseCandidate'])
  .openapi({ description: 'Release channel' })
  .openapi('ReleaseChannel')

const AdminConfigNewVersionCheckDtoSchema = z
  .object({
    channel: ReleaseChannelSchema,
    enabled: z.boolean().openapi({ description: 'Enabled' }),
  })
  .openapi({ required: ['channel', 'enabled'] })
  .openapi('AdminConfigNewVersionCheckDto')

const AdminConfigNightlyTasksDtoSchema = z
  .object({
    clusterNewFaces: z.boolean().openapi({ description: 'Cluster new faces' }),
    databaseCleanup: z.boolean().openapi({ description: 'Database cleanup' }),
    generateMemories: z.boolean().openapi({ description: 'Generate memories' }),
    missingThumbnails: z.boolean().openapi({ description: 'Missing thumbnails' }),
    startTime: z
      .string()
      .regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/)
      .openapi({ description: 'Start time (HH:MM)' }),
    syncQuotaUsage: z.boolean().openapi({ description: 'Sync quota usage' }),
  })
  .openapi({
    required: [
      'clusterNewFaces',
      'databaseCleanup',
      'generateMemories',
      'missingThumbnails',
      'startTime',
      'syncQuotaUsage',
    ],
  })
  .openapi('AdminConfigNightlyTasksDto')

const AdminConfigSmtpTransportDtoSchema = z
  .object({
    host: z.string().openapi({ description: 'SMTP server hostname' }),
    ignoreCert: z.boolean().openapi({ description: 'Whether to ignore SSL certificate errors' }),
    password: z.string().openapi({ description: 'SMTP password' }),
    port: z.int().min(0).max(65535).openapi({ description: 'SMTP server port' }),
    secure: z.boolean().openapi({ description: 'Whether to use secure connection (TLS/SSL)' }),
    username: z.string().openapi({ description: 'SMTP username' }),
  })
  .openapi({ required: ['host', 'ignoreCert', 'password', 'port', 'secure', 'username'] })
  .openapi('AdminConfigSmtpTransportDto')

const AdminConfigSmtpDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether SMTP email notifications are enabled' }),
    from: z.string().openapi({ description: 'Email address to send from' }),
    replyTo: z.string().openapi({ description: 'Email address for replies' }),
    transport: AdminConfigSmtpTransportDtoSchema,
  })
  .openapi({ required: ['enabled', 'from', 'replyTo', 'transport'] })
  .openapi('AdminConfigSmtpDto')

const AdminConfigNotificationsDtoSchema = z
  .object({ smtp: AdminConfigSmtpDtoSchema })
  .openapi({ required: ['smtp'] })
  .openapi('AdminConfigNotificationsDto')

const OAuthTokenEndpointAuthMethodSchema = z
  .enum(['client_secret_post', 'client_secret_basic'])
  .openapi({ description: 'OAuth token endpoint auth method' })
  .openapi('OAuthTokenEndpointAuthMethod')

const AdminConfigOAuthDtoSchema = z
  .object({
    accountManagementUrl: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ description: 'Account management URL' }),
    allowInsecureRequests: z.boolean().openapi({ description: 'Allow insecure requests' }),
    autoLaunch: z.boolean().openapi({ description: 'Auto launch' }),
    autoRegister: z.boolean().openapi({ description: 'Auto register' }),
    buttonText: z.string().openapi({ description: 'Button text' }),
    clientId: z.string().openapi({ description: 'Client ID' }),
    clientSecret: z.string().openapi({ description: 'Client secret' }),
    defaultStorageQuota: z
      .int()
      .min(0)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Default storage quota' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
    endSessionEndpoint: z.string().openapi({ description: 'End session endpoint' }),
    issuerUrl: z.string().openapi({ description: 'Issuer URL' }),
    mobileOverrideEnabled: z.boolean().openapi({ description: 'Mobile override enabled' }),
    mobileRedirectUri: z
      .string()
      .openapi({ description: 'Mobile redirect URI (set to empty string to disable)' }),
    profileSigningAlgorithm: z.string().openapi({ description: 'Profile signing algorithm' }),
    prompt: z
      .string()
      .openapi({ description: 'OAuth prompt parameter (e.g. select_account, login, consent)' }),
    roleClaim: z.string().openapi({ description: 'Role claim' }),
    scope: z.string().openapi({ description: 'Scope' }),
    signingAlgorithm: z.string().openapi({ description: 'Signing algorithm' }),
    storageLabelClaim: z.string().openapi({ description: 'Storage label claim' }),
    storageQuotaClaim: z.string().openapi({ description: 'Storage quota claim' }),
    timeout: z.int().min(1).max(9007199254740991).openapi({ description: 'Timeout' }),
    tokenEndpointAuthMethod: OAuthTokenEndpointAuthMethodSchema,
  })
  .openapi({
    required: [
      'allowInsecureRequests',
      'autoLaunch',
      'autoRegister',
      'buttonText',
      'clientId',
      'clientSecret',
      'defaultStorageQuota',
      'enabled',
      'endSessionEndpoint',
      'issuerUrl',
      'mobileOverrideEnabled',
      'mobileRedirectUri',
      'profileSigningAlgorithm',
      'prompt',
      'roleClaim',
      'scope',
      'signingAlgorithm',
      'storageLabelClaim',
      'storageQuotaClaim',
      'timeout',
      'tokenEndpointAuthMethod',
    ],
  })
  .openapi('AdminConfigOAuthDto')

const AdminConfigPasskeyDtoSchema = z
  .object({
    additionalDomains: z.array(z.url()).openapi({ description: 'Additional domains' }),
    domain: z.url().nullable().openapi({ description: 'Passkey domain' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
  })
  .openapi({ required: ['additionalDomains', 'domain', 'enabled'] })
  .openapi('AdminConfigPasskeyDto')

const AdminConfigPasswordLoginDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('AdminConfigPasswordLoginDto')

const AdminConfigReverseGeocodingDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('AdminConfigReverseGeocodingDto')

const AdminConfigServerDtoSchema = z
  .object({
    externalDomain: z.string().openapi({ description: 'External domain' }),
    loginPageMessage: z.string().openapi({ description: 'Login page message' }),
    publicUsers: z.boolean().openapi({ description: 'Public users' }),
  })
  .openapi({ required: ['externalDomain', 'loginPageMessage', 'publicUsers'] })
  .openapi('AdminConfigServerDto')

const AdminConfigStorageTemplateDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Enabled' }),
    hashVerificationEnabled: z.boolean().openapi({ description: 'Hash verification enabled' }),
    template: z.string().openapi({ description: 'Template' }),
  })
  .openapi({ required: ['enabled', 'hashVerificationEnabled', 'template'] })
  .openapi('AdminConfigStorageTemplateDto')

const AdminConfigTemplateEmailsDtoSchema = z
  .object({
    albumInviteTemplate: z.string().openapi({ description: 'Album invite template' }),
    albumUpdateTemplate: z.string().openapi({ description: 'Album update template' }),
    welcomeTemplate: z.string().openapi({ description: 'Welcome template' }),
  })
  .openapi({ required: ['albumInviteTemplate', 'albumUpdateTemplate', 'welcomeTemplate'] })
  .openapi('AdminConfigTemplateEmailsDto')

const AdminConfigTemplatesDtoSchema = z
  .object({ email: AdminConfigTemplateEmailsDtoSchema })
  .openapi({ required: ['email'] })
  .openapi('AdminConfigTemplatesDto')

const AdminConfigThemeDtoSchema = z
  .object({ customCss: z.string().openapi({ description: 'Custom CSS for theming' }) })
  .openapi({ required: ['customCss'] })
  .openapi('AdminConfigThemeDto')

const AdminConfigTrashDtoSchema = z
  .object({
    days: z.int().min(0).max(9007199254740991).openapi({ description: 'Days' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
  })
  .openapi({ required: ['days', 'enabled'] })
  .openapi('AdminConfigTrashDto')

const AdminConfigUserDtoSchema = z
  .object({
    deleteDelay: z.int().min(1).max(9007199254740991).openapi({ description: 'Delete delay' }),
  })
  .openapi({ required: ['deleteDelay'] })
  .openapi('AdminConfigUserDto')

const AdminConfigDtoSchema = z
  .object({
    backup: AdminConfigBackupsDtoSchema,
    ffmpeg: AdminConfigFFmpegDtoSchema,
    image: AdminConfigImageDtoSchema,
    integrityChecks: AdminConfigIntegrityChecksDtoSchema,
    job: AdminConfigJobDtoSchema,
    library: AdminConfigLibraryDtoSchema,
    logging: AdminConfigLoggingDtoSchema,
    machineLearning: AdminConfigMachineLearningDtoSchema,
    map: AdminConfigMapDtoSchema,
    metadata: AdminConfigMetadataDtoSchema,
    newVersionCheck: AdminConfigNewVersionCheckDtoSchema,
    nightlyTasks: AdminConfigNightlyTasksDtoSchema,
    notifications: AdminConfigNotificationsDtoSchema,
    oauth: AdminConfigOAuthDtoSchema,
    passkey: AdminConfigPasskeyDtoSchema,
    passwordLogin: AdminConfigPasswordLoginDtoSchema,
    reverseGeocoding: AdminConfigReverseGeocodingDtoSchema,
    server: AdminConfigServerDtoSchema,
    storageTemplate: AdminConfigStorageTemplateDtoSchema,
    templates: AdminConfigTemplatesDtoSchema,
    theme: AdminConfigThemeDtoSchema,
    trash: AdminConfigTrashDtoSchema,
    user: AdminConfigUserDtoSchema,
  })
  .openapi({
    description: 'Configuration properties that are visible to the admin',
    required: [
      'backup',
      'ffmpeg',
      'image',
      'integrityChecks',
      'job',
      'library',
      'logging',
      'machineLearning',
      'map',
      'metadata',
      'newVersionCheck',
      'nightlyTasks',
      'notifications',
      'oauth',
      'passkey',
      'passwordLogin',
      'reverseGeocoding',
      'server',
      'storageTemplate',
      'templates',
      'theme',
      'trash',
      'user',
    ],
  })
  .openapi('AdminConfigDto')

const AdminOnboardingUpdateDtoSchema = z
  .object({ isOnboarded: z.boolean().openapi({ description: 'Is admin onboarded' }) })
  .openapi({ required: ['isOnboarded'] })
  .openapi('AdminOnboardingUpdateDto')

const AlbumUserResponseDtoSchema = z
  .object({ role: AlbumUserRoleSchema, user: UserResponseDtoSchema })
  .openapi({ required: ['role', 'user'] })
  .openapi('AlbumUserResponseDto')

const ContributorCountResponseDtoSchema = z
  .object({
    assetCount: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Number of assets contributed' }),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
  })
  .openapi({ required: ['assetCount', 'userId'] })
  .openapi('ContributorCountResponseDto')

const AssetOrderSchema = z
  .enum(['asc', 'desc'])
  .openapi({ description: 'Asset sort order' })
  .openapi('AssetOrder')

const AlbumResponseDtoSchema = z
  .object({
    albumName: z.string().openapi({ description: 'Album name' }),
    albumThumbnailAssetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .nullable()
      .openapi({ description: 'Thumbnail asset ID' }),
    albumUsers: z
      .array(AlbumUserResponseDtoSchema)
      .min(1)
      .openapi({
        description:
          'First entry is always the album owner. Second entry is the auth user, if it differs from the owner. The rest are ordered alphabetically.',
      }),
    assetCount: z.int().min(0).max(9007199254740991).openapi({ description: 'Number of assets' }),
    contributorCounts: z.array(ContributorCountResponseDtoSchema).exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).openapi({ description: 'Creation date' }),
    description: z.string().openapi({
      description: 'Album description',
      'x-immich-history': [
        { version: 'v1', state: 'Added' },
        {
          version: 'v3',
          state: 'Updated',
          description:
            'An empty string is returned instead of null for backwards compatibility; null will be returned in v4.',
        },
      ],
    }),
    endDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UTC representation of (local) end date (latest asset)' }),
    hasSharedLink: z.boolean().openapi({ description: 'Has shared link' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Album ID' }),
    isActivityEnabled: z.boolean().openapi({ description: 'Activity feed enabled' }),
    lastModifiedAssetTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last modified asset timestamp' }),
    order: AssetOrderSchema.exactOptional(),
    shared: z.boolean().openapi({ description: 'Is shared album' }),
    startDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UTC representation of (local) start date (earliest asset)' }),
    updatedAt: z.iso.datetime({ offset: true }).openapi({ description: 'Last update date' }),
  })
  .openapi({
    required: [
      'albumName',
      'albumThumbnailAssetId',
      'albumUsers',
      'assetCount',
      'createdAt',
      'description',
      'hasSharedLink',
      'id',
      'isActivityEnabled',
      'shared',
      'updatedAt',
    ],
  })
  .openapi('AlbumResponseDto')

const AlbumStatisticsResponseDtoSchema = z
  .object({
    notShared: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Number of non-shared albums' }),
    owned: z.int().min(0).max(9007199254740991).openapi({ description: 'Number of owned albums' }),
    shared: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Number of shared albums' }),
  })
  .openapi({ required: ['notShared', 'owned', 'shared'] })
  .openapi('AlbumStatisticsResponseDto')

const AlbumUserCreateDtoSchema = z
  .object({
    role: AlbumUserRoleSchema,
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
  })
  .openapi({ required: ['role', 'userId'] })
  .openapi('AlbumUserCreateDto')

const AlbumsAddAssetsDtoSchema = z
  .object({
    albumIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Album IDs' }),
    assetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Asset IDs' }),
  })
  .openapi({ required: ['albumIds', 'assetIds'] })
  .openapi('AlbumsAddAssetsDto')

const BulkIdErrorReasonSchema = z
  .enum(['duplicate', 'no_permission', 'not_found', 'unknown', 'validation'])
  .openapi({ description: 'Error reason' })
  .openapi('BulkIdErrorReason')

const AlbumsAddAssetsResponseDtoSchema = z
  .object({
    error: BulkIdErrorReasonSchema.exactOptional(),
    success: z.boolean().openapi({ description: 'Operation success' }),
  })
  .openapi({ required: ['success'] })
  .openapi('AlbumsAddAssetsResponseDto')

const AlbumsResponseSchema = z
  .object({ defaultAssetOrder: AssetOrderSchema })
  .openapi({ required: ['defaultAssetOrder'] })
  .openapi('AlbumsResponse')

const AlbumsUpdateSchema = z
  .object({ defaultAssetOrder: AssetOrderSchema.exactOptional() })
  .openapi({ description: 'Album preferences', required: [] })
  .openapi('AlbumsUpdate')

const PermissionSchema = z
  .enum([
    'all',
    'activity.create',
    'activity.read',
    'activity.update',
    'activity.delete',
    'activity.statistics',
    'apiKey.create',
    'apiKey.read',
    'apiKey.update',
    'apiKey.delete',
    'apiKey.rotate',
    'asset.read',
    'asset.update',
    'asset.delete',
    'asset.statistics',
    'asset.share',
    'asset.view',
    'asset.download',
    'asset.upload',
    'asset.copy',
    'asset.derive',
    'assetFile.read',
    'assetFile.delete',
    'assetFile.download',
    'asset.edit.get',
    'asset.edit.create',
    'asset.edit.delete',
    'album.create',
    'album.read',
    'album.update',
    'album.delete',
    'album.statistics',
    'album.share',
    'album.download',
    'albumAsset.create',
    'albumAsset.delete',
    'albumUser.create',
    'albumUser.update',
    'albumUser.delete',
    'auth.changePassword',
    'authDevice.delete',
    'archive.read',
    'backup.list',
    'backup.download',
    'backup.upload',
    'backup.delete',
    'clusterGroup.read',
    'clusterGroup.leave',
    'clusterGroup.admin',
    'clusterGroupRequest.create',
    'clusterGroupRequest.read',
    'clusterGroupRequest.delete',
    'adminConfig.read',
    'adminConfig.update',
    'userConfig.read',
    'duplicate.read',
    'duplicate.delete',
    'face.create',
    'face.read',
    'face.update',
    'face.delete',
    'folder.read',
    'job.create',
    'job.read',
    'library.create',
    'library.read',
    'library.update',
    'library.delete',
    'library.statistics',
    'timeline.read',
    'timeline.download',
    'maintenance',
    'map.read',
    'map.search',
    'memory.create',
    'memory.read',
    'memory.update',
    'memory.delete',
    'memory.statistics',
    'memoryAsset.create',
    'memoryAsset.delete',
    'notification.create',
    'notification.read',
    'notification.update',
    'notification.delete',
    'partner.create',
    'partner.read',
    'partner.update',
    'partner.delete',
    'passkey.read',
    'passkey.update',
    'passkey.delete',
    'person.create',
    'person.read',
    'person.update',
    'person.delete',
    'person.statistics',
    'person.merge',
    'person.reassign',
    'pinCode.create',
    'pinCode.update',
    'pinCode.delete',
    'plugin.create',
    'plugin.read',
    'plugin.update',
    'plugin.delete',
    'server.about',
    'server.apkLinks',
    'server.storage',
    'server.statistics',
    'server.versionCheck',
    'serverLicense.read',
    'serverLicense.update',
    'serverLicense.delete',
    'session.create',
    'session.read',
    'session.update',
    'session.delete',
    'session.lock',
    'sharedLink.create',
    'sharedLink.read',
    'sharedLink.update',
    'sharedLink.delete',
    'stack.create',
    'stack.read',
    'stack.update',
    'stack.delete',
    'sync.stream',
    'syncCheckpoint.read',
    'syncCheckpoint.update',
    'syncCheckpoint.delete',
    'systemConfig.read',
    'systemConfig.update',
    'systemMetadata.read',
    'systemMetadata.update',
    'tag.create',
    'tag.read',
    'tag.update',
    'tag.delete',
    'tag.asset',
    'user.read',
    'user.update',
    'userLicense.create',
    'userLicense.read',
    'userLicense.update',
    'userLicense.delete',
    'userOnboarding.read',
    'userOnboarding.update',
    'userOnboarding.delete',
    'userPreference.read',
    'userPreference.update',
    'userProfileImage.create',
    'userProfileImage.read',
    'userProfileImage.update',
    'userProfileImage.delete',
    'queue.read',
    'queue.update',
    'queueJob.create',
    'queueJob.read',
    'queueJob.update',
    'queueJob.delete',
    'workflow.create',
    'workflow.read',
    'workflow.update',
    'workflow.delete',
    'workflow.logs',
    'adminUser.create',
    'adminUser.read',
    'adminUser.update',
    'adminUser.delete',
    'adminSession.read',
    'adminAuth.unlinkAll',
  ])
  .openapi({ description: 'List of permissions' })
  .openapi('Permission')

const ApiKeyCreateDtoSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'API key name' }),
    permissions: z.array(PermissionSchema).min(1).openapi({ description: 'List of permissions' }),
  })
  .openapi({ required: ['permissions'] })
  .openapi('ApiKeyCreateDto')

const ApiKeyResponseDtoSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'API key ID' }),
    name: z.string().openapi({ description: 'API key name' }),
    permissions: z.array(PermissionSchema).openapi({ description: 'List of permissions' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Last update date', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({ required: ['createdAt', 'id', 'name', 'permissions', 'updatedAt'] })
  .openapi('ApiKeyResponseDto')

const ApiKeyCreateResponseDtoSchema = z
  .object({
    apiKey: ApiKeyResponseDtoSchema.openapi({
      'x-immich-history': [
        { version: 'v1', state: 'Added' },
        { version: 'v3.2.0', state: 'Deprecated' },
      ],
      'x-immich-state': 'Deprecated',
    }),
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'API key ID' }),
    name: z.string().openapi({ description: 'API key name' }),
    permissions: z.array(PermissionSchema).openapi({ description: 'List of permissions' }),
    secret: z.string().openapi({ description: 'API key secret (only shown once)' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Last update date', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({
    required: ['apiKey', 'createdAt', 'id', 'name', 'permissions', 'secret', 'updatedAt'],
  })
  .openapi('ApiKeyCreateResponseDto')

const ApiKeyUpdateDtoSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'API key name' }),
    permissions: z
      .array(PermissionSchema)
      .min(1)
      .exactOptional()
      .openapi({ description: 'List of permissions' }),
  })
  .openapi({ required: [] })
  .openapi('ApiKeyUpdateDto')

const AssetBulkDeleteDtoSchema = z
  .object({
    force: z.boolean().exactOptional().openapi({ description: 'Force delete even if in use' }),
    ids: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'IDs to process' }),
  })
  .openapi({ required: ['ids'] })
  .openapi('AssetBulkDeleteDto')

const AssetVisibilitySchema = z
  .enum(['archive', 'timeline', 'hidden', 'locked'])
  .openapi({ description: 'Asset visibility' })
  .openapi('AssetVisibility')

const AssetBulkUpdateDtoSchema = z
  .object({
    dateTimeOriginal: z.string().exactOptional().openapi({ description: 'Original date and time' }),
    dateTimeRelative: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .exactOptional()
      .openapi({ description: 'Relative time offset in minutes' }),
    description: z.string().exactOptional().openapi({ description: 'Asset description' }),
    duplicateId: z.string().nullable().exactOptional().openapi({ description: 'Duplicate ID' }),
    ids: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Asset IDs to update' }),
    isFavorite: z.boolean().exactOptional().openapi({ description: 'Mark as favorite' }),
    latitude: z
      .float64()
      .min(-90)
      .max(90)
      .exactOptional()
      .openapi({ description: 'Latitude coordinate' }),
    longitude: z
      .float64()
      .min(-180)
      .max(180)
      .exactOptional()
      .openapi({ description: 'Longitude coordinate' }),
    rating: z
      .int()
      .min(-1)
      .max(5)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Rating in range [1-5] (starred), -1 (rejected), or null (unrated)',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          {
            version: 'v3',
            state: 'Updated',
            description: 'Using 0 as a rating is no longer valid.',
          },
        ],
        'x-immich-state': 'Stable',
      }),
    timeZone: z.string().exactOptional().openapi({ description: 'Time zone (IANA timezone)' }),
    visibility: AssetVisibilitySchema.exactOptional(),
  })
  .openapi({ required: ['ids'] })
  .openapi('AssetBulkUpdateDto')

const AssetBulkUploadCheckItemSchema = z
  .object({
    checksum: z.string().openapi({ description: 'Base64 or hex encoded SHA1 hash' }),
    id: z
      .string()
      .openapi({
        description:
          'Client-side identifier echoed in the response to match results to inputs (e.g. filename)',
      }),
  })
  .openapi({ required: ['checksum', 'id'] })
  .openapi('AssetBulkUploadCheckItem')

const AssetBulkUploadCheckDtoSchema = z
  .object({
    assets: z.array(AssetBulkUploadCheckItemSchema).openapi({ description: 'Assets to check' }),
  })
  .openapi({ required: ['assets'] })
  .openapi('AssetBulkUploadCheckDto')

const AssetUploadActionSchema = z
  .enum(['accept', 'reject'])
  .openapi({ description: 'Upload action' })
  .openapi('AssetUploadAction')

const AssetRejectReasonSchema = z
  .enum(['duplicate', 'unsupported-format'])
  .openapi({ description: 'Rejection reason if rejected' })
  .openapi('AssetRejectReason')

const AssetBulkUploadCheckResultSchema = z
  .object({
    action: AssetUploadActionSchema,
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'Existing asset ID if duplicate' }),
    id: z
      .string()
      .openapi({
        description: 'Client-side identifier echoed from the request to match results to inputs',
      }),
    isTrashed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether existing asset is trashed' }),
    reason: AssetRejectReasonSchema.exactOptional(),
  })
  .openapi({ required: ['action', 'id'] })
  .openapi('AssetBulkUploadCheckResult')

const AssetBulkUploadCheckResponseDtoSchema = z
  .object({
    results: z
      .array(AssetBulkUploadCheckResultSchema)
      .openapi({ description: 'Upload check results' }),
  })
  .openapi({ required: ['results'] })
  .openapi('AssetBulkUploadCheckResponseDto')

const AssetCopyDtoSchema = z
  .object({
    albums: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Copy album associations' }),
    favorite: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Copy favorite status' }),
    sharedLinks: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Copy shared links' }),
    sidecar: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Copy sidecar file' }),
    sourceId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Source asset ID' }),
    stack: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Copy stack association' }),
    targetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Target asset ID' }),
  })
  .openapi({ required: ['sourceId', 'targetId'] })
  .openapi('AssetCopyDto')

const AssetEditActionSchema = z
  .enum(['crop', 'rotate', 'mirror'])
  .openapi({ description: 'Type of edit action to perform' })
  .openapi('AssetEditAction')

const CropParametersSchema = z
  .object({
    height: z.int().min(1).max(9007199254740991).openapi({ description: 'Height of the crop' }),
    width: z.int().min(1).max(9007199254740991).openapi({ description: 'Width of the crop' }),
    x: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Top-Left X coordinate of crop' }),
    y: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Top-Left Y coordinate of crop' }),
  })
  .openapi({ required: ['height', 'width', 'x', 'y'] })
  .openapi('CropParameters')

const RotateParametersSchema = z
  .object({ angle: z.int().min(0).max(270).openapi({ description: 'Rotation angle in degrees' }) })
  .openapi({ required: ['angle'] })
  .openapi('RotateParameters')

const MirrorAxisSchema = z
  .enum(['horizontal', 'vertical'])
  .openapi({ description: 'Axis to mirror along' })
  .openapi('MirrorAxis')

const MirrorParametersSchema = z
  .object({ axis: MirrorAxisSchema })
  .openapi({ required: ['axis'] })
  .openapi('MirrorParameters')

const AssetEditActionItemDtoSchema = z
  .object({
    action: AssetEditActionSchema,
    parameters: z
      .union([CropParametersSchema, RotateParametersSchema, MirrorParametersSchema])
      .openapi({ description: 'List of edit actions to apply (crop, rotate, or mirror)' }),
  })
  .openapi({ required: ['action', 'parameters'] })
  .openapi('AssetEditActionItemDto')

const AssetEditActionItemResponseDtoSchema = z
  .object({
    action: AssetEditActionSchema,
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset edit ID' }),
    parameters: z
      .union([CropParametersSchema, RotateParametersSchema, MirrorParametersSchema])
      .openapi({ description: 'List of edit actions to apply (crop, rotate, or mirror)' }),
  })
  .openapi({ required: ['action', 'id', 'parameters'] })
  .openapi('AssetEditActionItemResponseDto')

const AssetEditsCreateDtoSchema = z
  .object({
    edits: z
      .array(AssetEditActionItemDtoSchema)
      .min(1)
      .openapi({ description: 'List of edit actions to apply (crop, rotate, or mirror)' }),
  })
  .openapi({ required: ['edits'] })
  .openapi('AssetEditsCreateDto')

const AssetEditsResponseDtoSchema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID these edits belong to' }),
    edits: z
      .array(AssetEditActionItemResponseDtoSchema)
      .openapi({ description: 'List of edit actions applied to the asset' }),
  })
  .openapi({ required: ['assetId', 'edits'] })
  .openapi('AssetEditsResponseDto')

const AssetFaceCreateDtoSchema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    height: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Face bounding box height' }),
    imageHeight: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Image height in pixels' }),
    imageWidth: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Image width in pixels' }),
    personId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Person ID' }),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'User ID' }),
    width: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Face bounding box width' }),
    x: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Face bounding box X coordinate' }),
    y: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Face bounding box Y coordinate' }),
  })
  .openapi({
    required: ['assetId', 'height', 'imageHeight', 'imageWidth', 'personId', 'width', 'x', 'y'],
  })
  .openapi('AssetFaceCreateDto')

const AssetFaceDeleteDtoSchema = z
  .object({
    force: z.boolean().openapi({ description: 'Force delete even if person has other faces' }),
  })
  .openapi({ required: ['force'] })
  .openapi('AssetFaceDeleteDto')

const PersonUserRoleSchema = z
  .enum(['read', 'write', 'admin'])
  .openapi({
    description: 'Levels of access for managing people resources on behalf of another user.',
  })
  .openapi('PersonUserRole')

const PersonOtherResponseDtoSchema = z
  .object({
    birthDate: z.string().nullable(),
    name: z.string(),
    role: PersonUserRoleSchema,
    sharedById: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      ),
  })
  .openapi({ required: ['birthDate', 'name', 'role', 'sharedById'] })
  .openapi('PersonOtherResponseDto')

const PeopleUserResponseDtoSchema = z
  .object({
    avatarColor: UserAvatarColorSchema,
    email: z
      .email()
      .regex(
        /^[\p{L}\p{M}\p{N}.!#$%&'*+\/=?^_`{|}~-]+@[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?(?:\.[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?)*$/u,
      )
      .openapi({ description: 'User email' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
    name: z.string().openapi({ description: 'User name' }),
    profileChangedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Profile change date' }),
    profileImagePath: z.string().openapi({ description: 'Profile image path' }),
    role: PersonUserRoleSchema.openapi({ description: 'Access role' }),
  })
  .openapi({
    required: [
      'avatarColor',
      'email',
      'id',
      'name',
      'profileChangedAt',
      'profileImagePath',
      'role',
    ],
  })
  .openapi('PeopleUserResponseDto')

const PersonResponseDtoSchema = z
  .object({
    birthDate: z.iso.date().nullable().openapi({ description: 'Person date of birth' }),
    color: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Person color (hex)',
        'x-immich-history': [
          { version: 'v1.126.0', state: 'Added' },
          { version: 'v2', state: 'Stable' },
        ],
        'x-immich-state': 'Stable',
      }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Person ID' }),
    isFavorite: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Is favorite',
        'x-immich-history': [
          { version: 'v1.126.0', state: 'Added' },
          { version: 'v2', state: 'Stable' },
        ],
        'x-immich-state': 'Stable',
      }),
    isHidden: z.boolean().openapi({ description: 'Is hidden' }),
    name: z.string().openapi({ description: 'Person name' }),
    otherPeople: z.array(PersonOtherResponseDtoSchema),
    sharedBy: z
      .array(PeopleUserResponseDtoSchema)
      .openapi({ description: 'Users that gave the current user access to this person' }),
    sharedWith: z
      .array(PeopleUserResponseDtoSchema)
      .openapi({ description: 'Users the current user gave access to this person' }),
    thumbnailPath: z.string().openapi({ description: 'Thumbnail path' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Last update date',
        'x-immich-history': [
          { version: 'v1.107.0', state: 'Added' },
          { version: 'v2', state: 'Stable' },
        ],
        'x-immich-state': 'Stable',
      }),
  })
  .openapi({
    required: [
      'birthDate',
      'id',
      'isHidden',
      'name',
      'otherPeople',
      'sharedBy',
      'sharedWith',
      'thumbnailPath',
    ],
  })
  .openapi('PersonResponseDto')

const SourceTypeSchema = z
  .enum(['machine-learning', 'exif', 'manual'])
  .openapi({ description: 'Face detection source type' })
  .openapi('SourceType')

const AssetFaceResponseDtoSchema = z
  .object({
    boundingBoxX1: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Bounding box X1 coordinate' }),
    boundingBoxX2: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Bounding box X2 coordinate' }),
    boundingBoxY1: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Bounding box Y1 coordinate' }),
    boundingBoxY2: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Bounding box Y2 coordinate' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Face ID' }),
    imageHeight: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Image height in pixels' }),
    imageWidth: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Image width in pixels' }),
    person: PersonResponseDtoSchema.nullable(),
    sourceType: SourceTypeSchema.exactOptional(),
  })
  .openapi({
    description: 'Asset face with person',
    required: [
      'boundingBoxX1',
      'boundingBoxX2',
      'boundingBoxY1',
      'boundingBoxY2',
      'id',
      'imageHeight',
      'imageWidth',
      'person',
    ],
  })
  .openapi('AssetFaceResponseDto')

const AssetFaceUpdateItemSchema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    personId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Person ID' }),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'User ID' }),
  })
  .openapi({ required: ['assetId', 'personId'] })
  .openapi('AssetFaceUpdateItem')

const AssetFaceUpdateDtoSchema = z
  .object({
    data: z.array(AssetFaceUpdateItemSchema).openapi({ description: 'Face update items' }),
  })
  .openapi({ required: ['data'] })
  .openapi('AssetFaceUpdateDto')

const AssetFileTypeSchema = z
  .enum(['fullsize', 'preview', 'thumbnail', 'sidecar', 'encoded_video'])
  .openapi({ description: 'Type of file' })
  .openapi('AssetFileType')

const AssetFileResponseDtoSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset file ID' }),
    isEdited: z.boolean().openapi({ description: 'The file was generated from an edit' }),
    isProgressive: z.boolean().openapi({ description: 'The file is a progressively encoded JPEG' }),
    isTransparent: z.boolean().openapi({ description: 'The file is transparent' }),
    path: z.string().openapi({ description: 'File path' }),
    type: AssetFileTypeSchema,
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Update date', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({
    required: [
      'createdAt',
      'id',
      'isEdited',
      'isProgressive',
      'isTransparent',
      'path',
      'type',
      'updatedAt',
    ],
  })
  .openapi('AssetFileResponseDto')

const AssetIdErrorReasonSchema = z
  .enum(['duplicate', 'no_permission', 'not_found'])
  .openapi({ description: 'Error reason if failed' })
  .openapi('AssetIdErrorReason')

const AssetIdsDtoSchema = z
  .object({
    assetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Asset IDs' }),
  })
  .openapi({ required: ['assetIds'] })
  .openapi('AssetIdsDto')

const AssetIdsResponseDtoSchema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    error: AssetIdErrorReasonSchema.exactOptional(),
    success: z.boolean().openapi({ description: 'Whether operation succeeded' }),
  })
  .openapi({ required: ['assetId', 'success'] })
  .openapi('AssetIdsResponseDto')

const AssetJobNameSchema = z
  .enum(['refresh-faces', 'refresh-metadata', 'regenerate-thumbnail', 'transcode-video'])
  .openapi({ description: 'Job name' })
  .openapi('AssetJobName')

const AssetJobsDtoSchema = z
  .object({
    assetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Asset IDs' }),
    name: AssetJobNameSchema,
  })
  .openapi({ required: ['assetIds', 'name'] })
  .openapi('AssetJobsDto')

const AssetMetadataUpsertItemDtoSchema = z
  .object({
    key: z.string().openapi({ description: 'Metadata key' }),
    value: z.record(z.string(), z.any()).openapi({ description: 'Metadata value (object)' }),
  })
  .openapi({ required: ['key', 'value'] })
  .openapi('AssetMetadataUpsertItemDto')

const AssetMediaCreateDtoSchema = z
  .object({
    assetData: z
      .file()
      .openapi({ type: 'string', format: 'binary', description: 'Asset file data' }),
    duration: z
      .int()
      .min(0)
      .max(9007199254740991)
      .exactOptional()
      .openapi({ description: 'Duration in milliseconds (for videos)' }),
    fileCreatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'File creation date', example: '2024-01-01T00:00:00.000Z' }),
    fileModifiedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'File modification date', example: '2024-01-01T00:00:00.000Z' }),
    filename: z.string().exactOptional().openapi({ description: 'Filename' }),
    isFavorite: z.boolean().exactOptional().openapi({ description: 'Mark as favorite' }),
    livePhotoVideoId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'Live photo video ID' }),
    metadata: z
      .array(AssetMetadataUpsertItemDtoSchema)
      .exactOptional()
      .openapi({ description: 'Asset metadata items' }),
    sidecarData: z
      .file()
      .exactOptional()
      .openapi({ type: 'string', format: 'binary', description: 'Sidecar file data' }),
    visibility: AssetVisibilitySchema.exactOptional(),
  })
  .openapi({ required: ['assetData', 'fileCreatedAt', 'fileModifiedAt'] })
  .openapi('AssetMediaCreateDto')

const AssetMediaStatusSchema = z
  .enum(['created', 'duplicate'])
  .openapi({ description: 'Upload status' })
  .openapi('AssetMediaStatus')

const AssetMediaResponseDtoSchema = z
  .object({
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset media ID' }),
    status: AssetMediaStatusSchema,
  })
  .openapi({ required: ['id', 'status'] })
  .openapi('AssetMediaResponseDto')

const AssetMediaSizeSchema = z
  .enum(['original', 'fullsize', 'preview', 'thumbnail'])
  .openapi({ description: 'Asset media size' })
  .openapi('AssetMediaSize')

const AssetMetadataBulkDeleteItemDtoSchema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    key: z.string().openapi({ description: 'Metadata key' }),
  })
  .openapi({ required: ['assetId', 'key'] })
  .openapi('AssetMetadataBulkDeleteItemDto')

const AssetMetadataBulkDeleteDtoSchema = z
  .object({
    items: z
      .array(AssetMetadataBulkDeleteItemDtoSchema)
      .openapi({ description: 'Metadata items to delete' }),
  })
  .openapi({ required: ['items'] })
  .openapi('AssetMetadataBulkDeleteDto')

const AssetMetadataBulkResponseDtoSchema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    key: z.string().openapi({ description: 'Metadata key' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Last update date', example: '2024-01-01T00:00:00.000Z' }),
    value: z.record(z.string(), z.any()).openapi({ description: 'Metadata value (object)' }),
  })
  .openapi({ required: ['assetId', 'key', 'updatedAt', 'value'] })
  .openapi('AssetMetadataBulkResponseDto')

const AssetMetadataBulkUpsertItemDtoSchema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    key: z.string().openapi({ description: 'Metadata key' }),
    value: z.record(z.string(), z.any()).openapi({ description: 'Metadata value (object)' }),
  })
  .openapi({ required: ['assetId', 'key', 'value'] })
  .openapi('AssetMetadataBulkUpsertItemDto')

const AssetMetadataBulkUpsertDtoSchema = z
  .object({
    items: z
      .array(AssetMetadataBulkUpsertItemDtoSchema)
      .openapi({ description: 'Metadata items to upsert' }),
  })
  .openapi({ required: ['items'] })
  .openapi('AssetMetadataBulkUpsertDto')

const AssetMetadataResponseDtoSchema = z
  .object({
    key: z.string().openapi({ description: 'Metadata key' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Last update date', example: '2024-01-01T00:00:00.000Z' }),
    value: z.record(z.string(), z.any()).openapi({ description: 'Metadata value (object)' }),
  })
  .openapi({ required: ['key', 'updatedAt', 'value'] })
  .openapi('AssetMetadataResponseDto')

const AssetMetadataUpsertDtoSchema = z
  .object({
    items: z
      .array(AssetMetadataUpsertItemDtoSchema)
      .openapi({ description: 'Metadata items to upsert' }),
  })
  .openapi({ required: ['items'] })
  .openapi('AssetMetadataUpsertDto')

const AssetOcrResponseDtoSchema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      ),
    boxScore: z.float64().openapi({ description: 'Confidence score for text detection box' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      ),
    text: z.string().openapi({ description: 'Recognized text' }),
    textScore: z.float64().openapi({ description: 'Confidence score for text recognition' }),
    x1: z.float64().openapi({ description: 'Normalized x coordinate of box corner 1 (0-1)' }),
    x2: z.float64().openapi({ description: 'Normalized x coordinate of box corner 2 (0-1)' }),
    x3: z.float64().openapi({ description: 'Normalized x coordinate of box corner 3 (0-1)' }),
    x4: z.float64().openapi({ description: 'Normalized x coordinate of box corner 4 (0-1)' }),
    y1: z.float64().openapi({ description: 'Normalized y coordinate of box corner 1 (0-1)' }),
    y2: z.float64().openapi({ description: 'Normalized y coordinate of box corner 2 (0-1)' }),
    y3: z.float64().openapi({ description: 'Normalized y coordinate of box corner 3 (0-1)' }),
    y4: z.float64().openapi({ description: 'Normalized y coordinate of box corner 4 (0-1)' }),
  })
  .openapi({
    required: [
      'assetId',
      'boxScore',
      'id',
      'text',
      'textScore',
      'x1',
      'x2',
      'x3',
      'x4',
      'y1',
      'y2',
      'y3',
      'y4',
    ],
  })
  .openapi('AssetOcrResponseDto')

const AssetOrderBySchema = z
  .enum(['takenAt', 'createdAt'])
  .openapi({ description: 'Asset sorting property' })
  .openapi('AssetOrderBy')

const ExifResponseDtoSchema = z
  .object({
    city: z.string().nullable().default(null).exactOptional().openapi({ description: 'City name' }),
    country: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Country name' }),
    dateTimeOriginal: z.iso
      .datetime({ offset: true })
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Original date/time' }),
    description: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Image description' }),
    exifImageHeight: z
      .int()
      .min(0)
      .max(9007199254740991)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Image height in pixels' }),
    exifImageWidth: z
      .int()
      .min(0)
      .max(9007199254740991)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Image width in pixels' }),
    exposureTime: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Exposure time' }),
    fNumber: z
      .float64()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'F-number (aperture)' }),
    fileSizeInByte: z
      .int()
      .min(0)
      .max(9007199254740991)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'File size in bytes' }),
    focalLength: z
      .float64()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Focal length in mm' }),
    iso: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'ISO sensitivity' }),
    latitude: z
      .float64()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'GPS latitude' }),
    lensModel: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Lens model' }),
    longitude: z
      .float64()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'GPS longitude' }),
    make: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Camera make' }),
    model: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Camera model' }),
    modifyDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Modification date/time' }),
    orientation: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Image orientation' }),
    projectionType: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Projection type' }),
    rating: z
      .int()
      .min(1)
      .max(5)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Rating' }),
    state: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'State/province name' }),
    timeZone: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Time zone' }),
  })
  .openapi({ description: 'EXIF response', required: [] })
  .openapi('ExifResponseDto')

const AssetStackResponseDtoSchema = z
  .object({
    assetCount: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Number of assets in stack' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Stack ID' }),
    primaryAssetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Primary asset ID' }),
  })
  .openapi({ required: ['assetCount', 'id', 'primaryAssetId'] })
  .openapi('AssetStackResponseDto')

const TagResponseDtoSchema = z
  .object({
    color: z.string().exactOptional().openapi({ description: 'Tag color (hex)' }),
    createdAt: z.iso.datetime({ offset: true }).openapi({ description: 'Creation date' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Tag ID' }),
    name: z.string().openapi({ description: 'Tag name' }),
    parentId: z.string().exactOptional().openapi({ description: 'Parent tag ID' }),
    updatedAt: z.iso.datetime({ offset: true }).openapi({ description: 'Last update date' }),
    value: z.string().openapi({ description: 'Tag value (full path)' }),
  })
  .openapi({ required: ['createdAt', 'id', 'name', 'updatedAt', 'value'] })
  .openapi('TagResponseDto')

const AssetTypeEnumSchema = z
  .enum(['IMAGE', 'VIDEO', 'AUDIO', 'OTHER'])
  .openapi({ description: 'Asset type' })
  .openapi('AssetTypeEnum')

const AssetResponseDtoSchema = z
  .object({
    checksum: z.string().openapi({ description: 'Base64 encoded SHA1 hash' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The UTC timestamp when the asset was originally uploaded to Immich.',
      }),
    duplicateId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'Duplicate group ID' }),
    duration: z
      .int()
      .min(0)
      .max(2147483647)
      .nullable()
      .openapi({ description: 'Video/gif duration in milliseconds (null for static images)' }),
    exifInfo: ExifResponseDtoSchema.exactOptional(),
    fileCreatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The actual UTC timestamp when the file was created/captured, preserving timezone information. This is the authoritative timestamp for chronological sorting within timeline groups. Combined with timezone data, this can be used to determine the exact moment the photo was taken.',
      }),
    fileModifiedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The UTC timestamp when the file was last modified on the filesystem. This reflects the last time the physical file was changed, which may be different from when the photo was originally taken.',
      }),
    hasMetadata: z.boolean().openapi({ description: 'Whether asset has metadata' }),
    height: z
      .int()
      .min(0)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Asset height' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    isArchived: z.boolean().openapi({ description: 'Is archived' }),
    isEdited: z.boolean().openapi({
      description: 'Is edited',
      'x-immich-history': [
        { version: 'v2.5.0', state: 'Added' },
        { version: 'v2.5.0', state: 'Beta' },
      ],
      'x-immich-state': 'Beta',
    }),
    isFavorite: z.boolean().openapi({ description: 'Is favorite' }),
    isOffline: z.boolean().openapi({ description: 'Is offline' }),
    isTrashed: z.boolean().openapi({ description: 'Is trashed' }),
    libraryId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Library ID',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v1', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    livePhotoVideoId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Live photo video ID' }),
    localDateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The local date and time when the photo/video was taken, derived from EXIF metadata. This represents the photographer\'s local time regardless of timezone, stored as a timezone-agnostic timestamp. Used for timeline grouping by "local" days and months.',
      }),
    originalFileName: z.string().openapi({ description: 'Original file name' }),
    originalMimeType: z.string().exactOptional().openapi({ description: 'Original MIME type' }),
    originalPath: z.string().openapi({ description: 'Original file path' }),
    owner: UserResponseDtoSchema.exactOptional(),
    ownerId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Owner user ID' }),
    people: z.array(PersonResponseDtoSchema).exactOptional(),
    resized: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Is resized',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v1.113.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    stack: AssetStackResponseDtoSchema.nullable().exactOptional(),
    tags: z.array(TagResponseDtoSchema).exactOptional(),
    thumbhash: z
      .string()
      .nullable()
      .openapi({
        description:
          'Thumbhash for thumbnail generation (base64) also used as the c query param for thumbnail cache busting.',
      }),
    type: AssetTypeEnumSchema,
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The UTC timestamp when the asset record was last updated in the database. This is automatically maintained by the database and reflects when any field in the asset was last modified.',
      }),
    visibility: AssetVisibilitySchema,
    width: z.int().min(0).max(9007199254740991).nullable().openapi({ description: 'Asset width' }),
  })
  .openapi({
    required: [
      'checksum',
      'createdAt',
      'duration',
      'fileCreatedAt',
      'fileModifiedAt',
      'hasMetadata',
      'height',
      'id',
      'isArchived',
      'isEdited',
      'isFavorite',
      'isOffline',
      'isTrashed',
      'localDateTime',
      'originalFileName',
      'originalPath',
      'ownerId',
      'thumbhash',
      'type',
      'updatedAt',
      'visibility',
      'width',
    ],
  })
  .openapi('AssetResponseDto')

const AssetStatsResponseDtoSchema = z
  .object({
    images: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of images' }),
    total: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Total number of assets' }),
    videos: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of videos' }),
  })
  .openapi({ required: ['images', 'total', 'videos'] })
  .openapi('AssetStatsResponseDto')

const AuthStatusResponseDtoSchema = z
  .object({
    expiresAt: z.string().exactOptional().openapi({ description: 'Session expiration date' }),
    isElevated: z.boolean().openapi({ description: 'Is elevated session' }),
    password: z.boolean().openapi({ description: 'Has password set' }),
    pinCode: z.boolean().openapi({ description: 'Has PIN code set' }),
    pinExpiresAt: z.string().exactOptional().openapi({ description: 'PIN expiration date' }),
  })
  .openapi({ required: ['isElevated', 'password', 'pinCode'] })
  .openapi('AuthStatusResponseDto')

const AvatarUpdateSchema = z
  .object({ color: UserAvatarColorSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AvatarUpdate')

const BackendTypeSchema = z.enum(['yucca', 'local', 's3']).openapi('BackendType')

const BackendDtoSchema = z
  .object({
    description: z.string(),
    error: z.string().exactOptional(),
    id: z.string(),
    isOnline: z.boolean(),
    type: BackendTypeSchema,
  })
  .openapi({ required: ['description', 'id', 'isOnline', 'type'] })
  .openapi('BackendDto')

const BackendResponseDtoSchema = z
  .object({ backend: BackendDtoSchema })
  .openapi({ required: ['backend'] })
  .openapi('BackendResponseDto')

const BackendsResponseDtoSchema = z
  .object({ backends: z.array(BackendDtoSchema) })
  .openapi({ required: ['backends'] })
  .openapi('BackendsResponseDto')

const BackupStatusSchema = z
  .enum(['incomplete', 'complete', 'warn', 'failed', 'cancelled'])
  .openapi('BackupStatus')

const BandwidthDtoSchema = z
  .object({
    bytesPerSec: z.int().min(0).max(9007199254740991),
    quietHours: z
      .string()
      .regex(/^([01]\d|2[0-3]):[0-5]\d-([01]\d|2[0-3]):[0-5]\d$/)
      .exactOptional(),
  })
  .openapi({ required: ['bytesPerSec'] })
  .openapi('BandwidthDto')

const BoolFilterSchema = z
  .object({ eq: z.boolean() })
  .openapi({ required: ['eq'] })
  .openapi('BoolFilter')

const BootstrapStatusSchema = z.enum(['not-ready', 'ready', 'error']).openapi('BootstrapStatus')

const BulkIdResponseDtoSchema = z
  .object({
    error: BulkIdErrorReasonSchema.exactOptional(),
    errorMessage: z.string().exactOptional(),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'ID' }),
    success: z.boolean().openapi({ description: 'Whether operation succeeded' }),
  })
  .openapi({ required: ['id', 'success'] })
  .openapi('BulkIdResponseDto')

const BulkIdsDtoSchema = z
  .object({
    ids: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'IDs to process' }),
  })
  .openapi({ required: ['ids'] })
  .openapi('BulkIdsDto')

const CalendarHeatmapResponseDtoSchema = z
  .object({
    from: z.string().openapi({ description: 'Start date in UTC', example: '2024-01-01' }),
    series: z.array(
      z
        .object({
          count: z.int().min(0).max(9007199254740991).openapi({ description: 'Activity count' }),
          date: z.string().openapi({ description: 'Date in UTC', example: '2024-01-01' }),
        })
        .openapi({ required: ['date', 'count'] }),
    ),
    to: z.string().openapi({ description: 'End date in UTC', example: '2024-12-31' }),
    totalCount: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Total activity count over the period' }),
  })
  .openapi({ required: ['from', 'series', 'to', 'totalCount'] })
  .openapi('CalendarHeatmapResponseDto')

const CalendarHeatmapTypeSchema = z
  .enum(['Upload', 'Taken'])
  .openapi({ description: 'Type of calendar heatmap' })
  .openapi('CalendarHeatmapType')

const CastResponseSchema = z
  .object({ gCastEnabled: z.boolean().openapi({ description: 'Whether Google Cast is enabled' }) })
  .openapi({ required: ['gCastEnabled'] })
  .openapi('CastResponse')

const CastUpdateSchema = z
  .object({
    gCastEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Google Cast is enabled' }),
  })
  .openapi({ required: [] })
  .openapi('CastUpdate')

const ChangePasswordDtoSchema = z
  .object({
    invalidateSessions: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Invalidate all other sessions' }),
    newPassword: z
      .string()
      .min(8)
      .openapi({ description: 'New password (min 8 characters)', example: 'password' }),
    password: z.string().openapi({ description: 'Current password', example: 'password' }),
  })
  .openapi({ required: ['newPassword', 'password'] })
  .openapi('ChangePasswordDto')

const ClusterGroupRequestCreateDtoSchema = z
  .object({
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User to invite into the cluster group' }),
  })
  .openapi({ required: ['userId'] })
  .openapi('ClusterGroupRequestCreateDto')

const ClusterGroupRequestResponseDtoSchema = z
  .object({
    clusterGroupId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Cluster group the user is invited to join' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Request ID' }),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User the request was created for' }),
  })
  .openapi({ required: ['clusterGroupId', 'createdAt', 'id', 'userId'] })
  .openapi('ClusterGroupRequestResponseDto')

const ConfigResponseDtoSchema = z
  .object({ bandwidth: BandwidthDtoSchema })
  .openapi({ required: ['bandwidth'] })
  .openapi('ConfigResponseDto')

const ConfigUpdateRequestDtoSchema = z
  .object({ bandwidth: BandwidthDtoSchema })
  .openapi({ required: ['bandwidth'] })
  .openapi('ConfigUpdateRequestDto')

const ConfigureImmichDatabaseDumpRequestDtoSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    keepLastAmount: z.int().min(1).max(9007199254740991).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigureImmichDatabaseDumpRequestDto')

const RetentionPolicyDtoSchema = z
  .object({
    keepLast: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
    keepWithin: z.string().exactOptional(),
    keepWithinDaily: z.string().exactOptional(),
    keepWithinHourly: z.string().exactOptional(),
    keepWithinMonthly: z.string().exactOptional(),
    keepWithinWeekly: z.string().exactOptional(),
    keepWithinYearly: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RetentionPolicyDto')

const ConfigureImmichIntegrationRequestDtoSchema = z
  .object({
    backupConfiguration: z.boolean(),
    cron: z.string(),
    dataFolders: z.array(z.string()),
    libraries: z
      .array(z.string())
      .openapi({
        description:
          'IDs of the external libraries to back up. Use ["all"] to back up every library, including ones added later.',
      }),
    name: z.string(),
    paused: z.boolean().exactOptional(),
    repositoryId: z.string().exactOptional(),
    retentionPolicy: RetentionPolicyDtoSchema.nullable().exactOptional(),
    worm: z.boolean(),
  })
  .openapi({
    required: ['backupConfiguration', 'cron', 'dataFolders', 'libraries', 'name', 'worm'],
  })
  .openapi('ConfigureImmichIntegrationRequestDto')

const ConfigureImmichIntegrationResponseDtoSchema = z
  .object({ repositoryId: z.string() })
  .openapi({ required: ['repositoryId'] })
  .openapi('ConfigureImmichIntegrationResponseDto')

const CreateAlbumDtoSchema = z
  .object({
    albumName: z.string().openapi({ description: 'Album name' }),
    albumUsers: z
      .array(AlbumUserCreateDtoSchema)
      .exactOptional()
      .openapi({ description: 'Album users' }),
    assetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .exactOptional()
      .openapi({ description: 'Initial asset IDs' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Album description',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          {
            version: 'v3',
            state: 'Updated',
            description:
              'Sending an empty string is deprecated; send null instead. Empty strings will no longer be coerced to null in v4.',
          },
        ],
      }),
  })
  .openapi({ required: ['albumName'] })
  .openapi('CreateAlbumDto')

const CreateLibraryDtoSchema = z
  .object({
    exclusionPatterns: z
      .array(z.string())
      .max(128)
      .exactOptional()
      .openapi({ description: 'Exclusion patterns (max 128)' }),
    importPaths: z
      .array(z.string())
      .max(128)
      .exactOptional()
      .openapi({ description: 'Import paths (max 128)' }),
    name: z.string().min(1).exactOptional().openapi({ description: 'Library name' }),
    ownerId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Owner user ID' }),
  })
  .openapi({ required: ['ownerId'] })
  .openapi('CreateLibraryDto')

const CreateLocalBackendRequestDtoSchema = z
  .object({ path: z.string() })
  .openapi({ required: ['path'] })
  .openapi('CreateLocalBackendRequestDto')

const CreateProfileImageDtoSchema = z
  .object({
    file: z.file().openapi({ type: 'string', format: 'binary', description: 'Profile image file' }),
  })
  .openapi({ required: ['file'] })
  .openapi('CreateProfileImageDto')

const CreateProfileImageResponseDtoSchema = z
  .object({
    profileChangedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Profile image change date', example: '2024-01-01T00:00:00.000Z' }),
    profileImagePath: z.string().openapi({ description: 'Profile image file path' }),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
  })
  .openapi({ required: ['profileChangedAt', 'profileImagePath', 'userId'] })
  .openapi('CreateProfileImageResponseDto')

const CreateSessionRequestDtoSchema = z
  .object({ token: z.string() })
  .openapi({ required: ['token'] })
  .openapi('CreateSessionRequestDto')

const CurrentRecoveryKeyResponseSchema = z
  .object({ recoveryKey: z.string() })
  .openapi({ required: ['recoveryKey'] })
  .openapi('CurrentRecoveryKeyResponse')

const DatabaseBackupDeleteDtoSchema = z
  .object({ backups: z.array(z.string()).openapi({ description: 'Backup filenames to delete' }) })
  .openapi({ required: ['backups'] })
  .openapi('DatabaseBackupDeleteDto')

const DatabaseBackupDtoSchema = z
  .object({
    filename: z.string().openapi({ description: 'Backup filename' }),
    filesize: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Backup file size' }),
    timezone: z.string().openapi({ description: 'Backup timezone' }),
  })
  .openapi({ required: ['filename', 'filesize', 'timezone'] })
  .openapi('DatabaseBackupDto')

const DatabaseBackupListResponseDtoSchema = z
  .object({ backups: z.array(DatabaseBackupDtoSchema).openapi({ description: 'List of backups' }) })
  .openapi({ required: ['backups'] })
  .openapi('DatabaseBackupListResponseDto')

const DatabaseBackupUploadDtoSchema = z
  .object({
    file: z
      .file()
      .exactOptional()
      .openapi({ type: 'string', format: 'binary', description: 'Database backup file' }),
  })
  .openapi({ required: [] })
  .openapi('DatabaseBackupUploadDto')

const DateFilterSchema = z
  .object({
    eq: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ example: '2024-01-01T00:00:00.000Z' }),
    gt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ example: '2024-01-01T00:00:00.000Z' }),
    gte: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ example: '2024-01-01T00:00:00.000Z' }),
    lt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ example: '2024-01-01T00:00:00.000Z' }),
    lte: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ example: '2024-01-01T00:00:00.000Z' }),
    ne: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({ required: [] })
  .openapi('DateFilter')

const DateFilterNullableSchema = z
  .object({
    eq: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .exactOptional()
      .openapi({ example: '2024-01-01T00:00:00.000Z' }),
    gt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ example: '2024-01-01T00:00:00.000Z' }),
    gte: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ example: '2024-01-01T00:00:00.000Z' }),
    lt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ example: '2024-01-01T00:00:00.000Z' }),
    lte: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ example: '2024-01-01T00:00:00.000Z' }),
    ne: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .exactOptional()
      .openapi({ example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({ required: [] })
  .openapi('DateFilterNullable')

const DeviceFlowFailureReasonSchema = z
  .enum(['NOT_CONNECTED', 'DEVICE_FLOW_FAILED', 'WRONG_ACCOUNT', 'UNKNOWN'])
  .openapi('DeviceFlowFailureReason')

const DeviceFlowEventTypeSchema = z
  .enum(['START', 'SUCCESS', 'FAILURE'])
  .openapi('DeviceFlowEventType')

const DeviceFlowEventDtoSchema = z
  .object({
    backendId: z.string().exactOptional(),
    reason: DeviceFlowFailureReasonSchema.exactOptional(),
    token: z.string().exactOptional(),
    type: DeviceFlowEventTypeSchema,
    userCode: z.string().exactOptional(),
    verificationUri: z.string().exactOptional(),
  })
  .openapi({ required: ['type'] })
  .openapi('DeviceFlowEventDto')

const DownloadArchiveDtoSchema = z
  .object({
    archiveName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the archive to download, without extension' }),
    assetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Asset IDs' }),
    edited: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Download edited asset if available' }),
  })
  .openapi({ required: ['assetIds'] })
  .openapi('DownloadArchiveDto')

const DownloadArchiveInfoSchema = z
  .object({
    assetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Asset IDs in this archive' }),
    size: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Archive size in bytes' }),
  })
  .openapi({ required: ['assetIds', 'size'] })
  .openapi('DownloadArchiveInfo')

const DownloadInfoDtoSchema = z
  .object({
    albumId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'Album ID to download' }),
    archiveSize: z
      .int()
      .min(1)
      .max(9007199254740991)
      .exactOptional()
      .openapi({ description: 'Archive size limit in bytes' }),
    assetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .exactOptional()
      .openapi({ description: 'Asset IDs to download' }),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'User ID to download assets from' }),
  })
  .openapi({ required: [] })
  .openapi('DownloadInfoDto')

const DownloadResponseSchema = z
  .object({
    archiveSize: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Maximum archive size in bytes' }),
    includeEmbeddedVideos: z
      .boolean()
      .openapi({ description: 'Whether to include embedded videos in downloads' }),
  })
  .openapi({ required: ['archiveSize', 'includeEmbeddedVideos'] })
  .openapi('DownloadResponse')

const DownloadResponseDtoSchema = z
  .object({
    archives: z.array(DownloadArchiveInfoSchema).openapi({ description: 'Archive information' }),
    totalSize: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Total size in bytes' }),
  })
  .openapi({ required: ['archives', 'totalSize'] })
  .openapi('DownloadResponseDto')

const DownloadUpdateSchema = z
  .object({
    archiveSize: z
      .int()
      .min(1)
      .max(9007199254740991)
      .exactOptional()
      .openapi({ description: 'Maximum archive size in bytes' }),
    includeEmbeddedVideos: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to include embedded videos in downloads' }),
  })
  .openapi({ required: [] })
  .openapi('DownloadUpdate')

const DuplicateResolveGroupDtoSchema = z
  .object({
    duplicateId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      ),
    keepAssetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Asset IDs to keep' }),
    trashAssetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Asset IDs to trash or delete' }),
  })
  .openapi({ required: ['duplicateId', 'keepAssetIds', 'trashAssetIds'] })
  .openapi('DuplicateResolveGroupDto')

const DuplicateResolveDtoSchema = z
  .object({
    groups: z
      .array(DuplicateResolveGroupDtoSchema)
      .min(1)
      .openapi({ description: 'List of duplicate groups to resolve' }),
  })
  .openapi({ required: ['groups'] })
  .openapi('DuplicateResolveDto')

const DuplicateResponseDtoSchema = z
  .object({
    assets: z.array(AssetResponseDtoSchema).openapi({ description: 'Duplicate assets' }),
    duplicateId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Duplicate group ID' }),
    suggestedKeepAssetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Suggested asset IDs to keep based on file size and EXIF data' }),
  })
  .openapi({ required: ['assets', 'duplicateId', 'suggestedKeepAssetIds'] })
  .openapi('DuplicateResponseDto')

const EmailNotificationsResponseSchema = z
  .object({
    albumInvite: z
      .boolean()
      .openapi({ description: 'Whether to receive email notifications for album invites' }),
    albumUpdate: z
      .boolean()
      .openapi({ description: 'Whether to receive email notifications for album updates' }),
    enabled: z.boolean().openapi({ description: 'Whether email notifications are enabled' }),
  })
  .openapi({ required: ['albumInvite', 'albumUpdate', 'enabled'] })
  .openapi('EmailNotificationsResponse')

const EmailNotificationsUpdateSchema = z
  .object({
    albumInvite: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to receive email notifications for album invites' }),
    albumUpdate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to receive email notifications for album updates' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether email notifications are enabled' }),
  })
  .openapi({ required: [] })
  .openapi('EmailNotificationsUpdate')

const EnumFilterAssetTypeSchema = z
  .object({
    eq: AssetTypeEnumSchema.exactOptional(),
    in: z.array(AssetTypeEnumSchema).min(1).exactOptional(),
    ne: AssetTypeEnumSchema.exactOptional(),
    notIn: z.array(AssetTypeEnumSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnumFilterAssetType')

const EnumFilterAssetVisibilitySchema = z
  .object({
    eq: AssetVisibilitySchema.exactOptional(),
    in: z.array(AssetVisibilitySchema).min(1).exactOptional(),
    ne: AssetVisibilitySchema.exactOptional(),
    notIn: z.array(AssetVisibilitySchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnumFilterAssetVisibility')

const FaceDtoSchema = z
  .object({
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Face ID' }),
  })
  .openapi({ required: ['id'] })
  .openapi('FaceDto')

const FilesystemListingItemDtoSchema = z
  .object({ isDirectory: z.boolean(), path: z.string() })
  .openapi({ required: ['isDirectory', 'path'] })
  .openapi('FilesystemListingItemDto')

const FilesystemListingResponseDtoSchema = z
  .object({ items: z.array(FilesystemListingItemDtoSchema), parent: z.string(), path: z.string() })
  .openapi({ required: ['items', 'parent', 'path'] })
  .openapi('FilesystemListingResponseDto')

const FoldersResponseSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether folders are enabled' }),
    sidebarWeb: z.boolean().openapi({ description: 'Whether folders appear in web sidebar' }),
  })
  .openapi({ required: ['enabled', 'sidebarWeb'] })
  .openapi('FoldersResponse')

const FoldersUpdateSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ description: 'Whether folders are enabled' }),
    sidebarWeb: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether folders appear in web sidebar' }),
  })
  .openapi({ required: [] })
  .openapi('FoldersUpdate')

const IdFilterSchema = z
  .object({
    eq: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional(),
    ne: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IdFilter')

const IdFilterNullableSchema = z
  .object({
    eq: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .nullable()
      .exactOptional(),
    ne: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IdFilterNullable')

const IdsFilterSchema = z
  .object({
    all: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .min(1)
      .exactOptional(),
    any: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .min(1)
      .exactOptional(),
    none: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .min(1)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IdsFilter')

const ImmichDatabaseDumpConfigDtoSchema = z
  .object({ enabled: z.boolean(), keepLastAmount: z.int().min(1).max(9007199254740991) })
  .openapi({ required: ['enabled', 'keepLastAmount'] })
  .openapi('ImmichDatabaseDumpConfigDto')

const ImmichIntegrationConfigurationDtoSchema = z
  .object({
    backupConfiguration: z.boolean(),
    dataFolders: z.array(z.string()),
    libraries: z
      .array(z.string())
      .openapi({
        description:
          'IDs of the external libraries to back up. Use ["all"] to back up every library, including ones added later.',
      }),
  })
  .openapi({ required: ['backupConfiguration', 'dataFolders', 'libraries'] })
  .openapi('ImmichIntegrationConfigurationDto')

const ImmichIntegrationDtoSchema = z
  .object({
    configuration: ImmichIntegrationConfigurationDtoSchema,
    id: z.string(),
    scheduleId: z.string(),
  })
  .openapi({ required: ['configuration', 'id', 'scheduleId'] })
  .openapi('ImmichIntegrationDto')

const YuccaJobNameSchema = z
  .enum([
    'repository-backup',
    'repository-prune',
    'repository-restore',
    'repository-restore-from-point',
    'repository-snapshot-forget',
    'repository-sync-metrics',
  ])
  .openapi('YuccaJobName')

const JobSummaryDtoSchema = z
  .xor([
    z
      .object({
        type: z.literal('backup'),
        filesNew: z.int().min(-9007199254740991).max(9007199254740991),
        filesChanged: z.int().min(-9007199254740991).max(9007199254740991),
        totalFilesProcessed: z.int().min(-9007199254740991).max(9007199254740991),
        totalBytesProcessed: z.int().min(-9007199254740991).max(9007199254740991),
        snapshotId: z.string().exactOptional(),
      })
      .openapi({
        required: [
          'type',
          'filesNew',
          'filesChanged',
          'totalFilesProcessed',
          'totalBytesProcessed',
        ],
      }),
    z
      .object({
        type: z.literal('restore'),
        filesRestored: z.int().min(-9007199254740991).max(9007199254740991),
        filesSkipped: z.int().min(-9007199254740991).max(9007199254740991),
        bytesRestored: z.int().min(-9007199254740991).max(9007199254740991),
      })
      .openapi({ required: ['type', 'filesRestored', 'filesSkipped', 'bytesRestored'] }),
    z
      .object({
        type: z.literal('prune'),
        kept: z.int().min(-9007199254740991).max(9007199254740991),
        removed: z.int().min(-9007199254740991).max(9007199254740991),
      })
      .openapi({ required: ['type', 'kept', 'removed'] }),
  ])
  .openapi('JobSummaryDto')

const JobSupportDtoSchema = z
  .object({
    droppedLines: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Log lines that could not be streamed in time' }),
    localDroppedLines: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Log lines that could not be written to the local support log' }),
    sessionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Support code to share with FUTO when the logs were streamed' }),
  })
  .openapi({ required: ['droppedLines', 'localDroppedLines'] })
  .openapi('JobSupportDto')

const JobOutcomeDtoSchema = z
  .object({
    errors: z.array(z.string()),
    summary: JobSummaryDtoSchema.exactOptional(),
    support: JobSupportDtoSchema.exactOptional(),
  })
  .openapi({ required: ['errors'] })
  .openapi('JobOutcomeDto')

const JobProgressDtoSchema = z
  .object({
    bytesDone: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
    currentFiles: z.array(z.string()),
    estimatedEndAt: z.string().exactOptional(),
    percentDone: z.float64(),
    scanning: z.boolean(),
    totalBytes: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
  })
  .openapi({ required: ['currentFiles', 'percentDone', 'scanning'] })
  .openapi('JobProgressDto')

const YuccaJobStatusSchema = z
  .enum(['queued', 'running', 'complete', 'warn', 'failed', 'cancelled', 'incomplete'])
  .openapi('YuccaJobStatus')

const JobDtoSchema = z
  .object({
    end: z.string().exactOptional(),
    id: z.string(),
    name: YuccaJobNameSchema,
    outcome: JobOutcomeDtoSchema.exactOptional(),
    progress: JobProgressDtoSchema.exactOptional(),
    queuedAt: z.string(),
    repositoryId: z.string(),
    start: z.string().exactOptional(),
    status: YuccaJobStatusSchema,
  })
  .openapi({ required: ['id', 'name', 'queuedAt', 'repositoryId', 'status'] })
  .openapi('JobDto')

const RepositoryBackendDtoSchema = z
  .object({ id: z.string(), online: z.boolean(), type: BackendTypeSchema })
  .openapi({ required: ['id', 'online', 'type'] })
  .openapi('RepositoryBackendDto')

const RepositoryBackendsDtoSchema = z
  .object({ primary: RepositoryBackendDtoSchema, secondary: z.array(RepositoryBackendDtoSchema) })
  .openapi({ required: ['primary', 'secondary'] })
  .openapi('RepositoryBackendsDto')

const RepositoryConfigurationDtoSchema = z
  .object({
    paths: z.array(z.string()),
    retentionPolicy: RetentionPolicyDtoSchema.nullable().exactOptional(),
  })
  .openapi({ required: ['paths'] })
  .openapi('RepositoryConfigurationDto')

const RepositoryMeterDtoSchema = z
  .object({
    lastUpdated: z.string().nullable().exactOptional(),
    objectCount: z.int().min(-9007199254740991).max(9007199254740991),
    sizeBytes: z.int().min(-9007199254740991).max(9007199254740991),
  })
  .openapi({ required: ['objectCount', 'sizeBytes'] })
  .openapi('RepositoryMeterDto')

const RepositoryMetricsDtoSchema = z
  .object({
    lastBackup: z.string().nullable().exactOptional(),
    lastBackupDuration: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .exactOptional(),
    lastBackupStatus: BackupStatusSchema.nullable().exactOptional(),
    lastStarted: z.string().nullable().exactOptional(),
    sizeBytes: z.int().min(-9007199254740991).max(9007199254740991),
  })
  .openapi({ required: ['sizeBytes'] })
  .openapi('RepositoryMetricsDto')

const LocalRepositoryDtoSchema = z
  .object({
    backends: RepositoryBackendsDtoSchema.exactOptional(),
    configuration: RepositoryConfigurationDtoSchema.exactOptional(),
    id: z.string(),
    meter: RepositoryMeterDtoSchema.exactOptional(),
    metrics: RepositoryMetricsDtoSchema,
    name: z.string(),
    siteCode: z.string().nullable(),
    storageClusterCode: z.string().nullable(),
    worm: z.boolean(),
  })
  .openapi({ required: ['id', 'metrics', 'name', 'siteCode', 'storageClusterCode', 'worm'] })
  .openapi('LocalRepositoryDto')

const ScheduleDtoSchema = z
  .object({
    cron: z.string(),
    id: z.string(),
    lastFinished: z.string().exactOptional(),
    lastRun: z.string().exactOptional(),
    name: z.string(),
    paused: z.boolean(),
    repositories: z.array(z.string()),
  })
  .openapi({ required: ['cron', 'id', 'name', 'paused', 'repositories'] })
  .openapi('ScheduleDto')

const ImmichBackupStatusDtoSchema = z
  .object({
    backend: BackendDtoSchema.exactOptional(),
    databaseDump: ImmichDatabaseDumpConfigDtoSchema.exactOptional(),
    databaseDumpWarningIgnored: z.boolean().exactOptional(),
    integration: ImmichIntegrationDtoSchema.exactOptional(),
    latestBackupJob: JobDtoSchema.exactOptional(),
    repository: LocalRepositoryDtoSchema.exactOptional(),
    schedule: ScheduleDtoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImmichBackupStatusDto')

const ImmichLibraryDtoSchema = z
  .object({
    exclusionPatterns: z.array(z.string()),
    id: z.string(),
    importPaths: z.array(z.string()),
    name: z.string(),
  })
  .openapi({ required: ['exclusionPatterns', 'id', 'importPaths', 'name'] })
  .openapi('ImmichLibraryDto')

const ImmichRollbackRequestDtoSchema = z
  .object({
    backupFileName: z.string().exactOptional(),
    repositoryId: z.string(),
    snapshotId: z.string(),
  })
  .openapi({ required: ['repositoryId', 'snapshotId'] })
  .openapi('ImmichRollbackRequestDto')

const ImmichStateDtoSchema = z
  .object({
    dataFolders: z.array(z.string()),
    dataPath: z.string(),
    libraries: z.array(ImmichLibraryDtoSchema),
  })
  .openapi({ required: ['dataFolders', 'dataPath', 'libraries'] })
  .openapi('ImmichStateDto')

const ImportRecoveryKeyRequestSchema = z
  .object({ recoveryKey: z.string() })
  .openapi({ required: ['recoveryKey'] })
  .openapi('ImportRecoveryKeyRequest')

const SnapshotSummaryDtoSchema = z
  .object({
    dataAdded: z.int().min(-9007199254740991).max(9007199254740991),
    filesChanged: z.int().min(-9007199254740991).max(9007199254740991),
    filesNew: z.int().min(-9007199254740991).max(9007199254740991),
    filesUnmodified: z.int().min(-9007199254740991).max(9007199254740991),
    totalBytes: z.int().min(-9007199254740991).max(9007199254740991),
    totalFiles: z.int().min(-9007199254740991).max(9007199254740991),
  })
  .openapi({
    required: [
      'dataAdded',
      'filesChanged',
      'filesNew',
      'filesUnmodified',
      'totalBytes',
      'totalFiles',
    ],
  })
  .openapi('SnapshotSummaryDto')

const SnapshotDtoSchema = z
  .object({
    id: z.string(),
    paths: z.array(z.string()),
    summary: SnapshotSummaryDtoSchema.exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    time: z.string(),
  })
  .openapi({ required: ['id', 'paths', 'time'] })
  .openapi('SnapshotDto')

const InspectedLocalRepositoryDtoSchema = z
  .object({
    backends: RepositoryBackendsDtoSchema.exactOptional(),
    configuration: RepositoryConfigurationDtoSchema.exactOptional(),
    id: z.string(),
    meter: RepositoryMeterDtoSchema.exactOptional(),
    metrics: RepositoryMetricsDtoSchema,
    name: z.string(),
    siteCode: z.string().nullable(),
    snapshots: z.array(SnapshotDtoSchema).exactOptional(),
    storageClusterCode: z.string().nullable(),
    worm: z.boolean(),
  })
  .openapi({ required: ['id', 'metrics', 'name', 'siteCode', 'storageClusterCode', 'worm'] })
  .openapi('InspectedLocalRepositoryDto')

const IntegrationsResponseDtoSchema = z
  .object({
    immichIntegration: ImmichIntegrationDtoSchema.exactOptional(),
    immichState: ImmichStateDtoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IntegrationsResponseDto')

const IntegrityReportSchema = z
  .enum(['untracked_file', 'missing_file', 'checksum_mismatch'])
  .openapi({ description: 'Integrity report type' })
  .openapi('IntegrityReport')

const IntegrityReportResponseDtoSchema = z
  .object({
    items: z.array(
      z
        .object({
          id: z
            .uuid()
            .regex(
              /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
            )
            .openapi({ description: 'Integrity report item id' }),
          path: z.string().openapi({ description: 'Integrity report item path' }),
          type: IntegrityReportSchema,
        })
        .openapi({ required: ['id', 'type', 'path'] }),
    ),
    nextCursor: z.string().exactOptional(),
  })
  .openapi({ required: ['items'] })
  .openapi('IntegrityReportResponseDto')

const IntegrityReportSummaryResponseDtoSchema = z
  .object({
    checksum_mismatch: z.int().min(0).max(9007199254740991),
    missing_file: z.int().min(0).max(9007199254740991),
    untracked_file: z.int().min(0).max(9007199254740991),
  })
  .openapi({ required: ['checksum_mismatch', 'missing_file', 'untracked_file'] })
  .openapi('IntegrityReportSummaryResponseDto')

const ManualJobNameSchema = z
  .enum([
    'person-cleanup',
    'tag-cleanup',
    'user-cleanup',
    'memory-cleanup',
    'memory-create',
    'backup-database',
    'integrity-missing-files',
    'integrity-untracked-files',
    'integrity-checksum-mismatch',
    'integrity-missing-files-refresh',
    'integrity-untracked-files-refresh',
    'integrity-checksum-mismatch-refresh',
    'integrity-missing-files-delete-all',
    'integrity-untracked-files-delete-all',
    'integrity-checksum-mismatch-delete-all',
  ])
  .openapi({ description: 'Manual job name' })
  .openapi('ManualJobName')

const JobCreateDtoSchema = z
  .object({ name: ManualJobNameSchema })
  .openapi({ required: ['name'] })
  .openapi('JobCreateDto')

const JobListResponseDtoSchema = z
  .object({ jobs: z.array(JobDtoSchema) })
  .openapi({ required: ['jobs'] })
  .openapi('JobListResponseDto')

const JobNameSchema = z
  .enum([
    'AssetDelete',
    'AssetDeleteCheck',
    'AssetDetectFacesQueueAll',
    'AssetDetectFaces',
    'AssetDetectDuplicatesQueueAll',
    'AssetDetectDuplicates',
    'AssetEditThumbnailGeneration',
    'AssetEncodeVideoQueueAll',
    'AssetEncodeVideo',
    'AssetEmptyTrash',
    'AssetExtractMetadataQueueAll',
    'AssetExtractMetadata',
    'AssetFileMigration',
    'AssetGenerateThumbnailsQueueAll',
    'AssetGenerateThumbnails',
    'AuditTableCleanup',
    'AuthChallengeCleanup',
    'DatabaseBackup',
    'FacialRecognitionQueueAll',
    'FacialRecognition',
    'FileDelete',
    'FileMigrationQueueAll',
    'LibraryDeleteCheck',
    'LibraryDelete',
    'LibraryRemoveAsset',
    'LibraryScanAssetsQueueAll',
    'LibrarySyncAssets',
    'LibrarySyncFilesQueueAll',
    'LibrarySyncFiles',
    'LibraryScanQueueAll',
    'HlsSessionCleanup',
    'MemoryCleanup',
    'MemoryGenerate',
    'NotificationsCleanup',
    'NotifyUserSignup',
    'NotifyAlbumInvite',
    'NotifyAlbumUpdate',
    'UserDelete',
    'UserDeleteCheck',
    'UserSyncUsage',
    'PersonCleanup',
    'PersonFileMigration',
    'PersonGenerateThumbnail',
    'SessionCleanup',
    'SendMail',
    'SidecarQueueAll',
    'SidecarCheck',
    'SidecarWrite',
    'SmartSearchQueueAll',
    'SmartSearch',
    'StorageTemplateMigration',
    'StorageTemplateMigrationSingle',
    'TagCleanup',
    'VersionCheck',
    'OcrQueueAll',
    'Ocr',
    'WorkflowAssetTrigger',
    'IntegrityUntrackedFilesQueueAll',
    'IntegrityUntrackedFiles',
    'IntegrityUntrackedRefresh',
    'IntegrityMissingFilesQueueAll',
    'IntegrityMissingFiles',
    'IntegrityMissingFilesRefresh',
    'IntegrityChecksumFiles',
    'IntegrityChecksumFilesRefresh',
    'IntegrityDeleteReportType',
    'IntegrityDeleteReports',
  ])
  .openapi({ description: 'Job name' })
  .openapi('JobName')

const JobResponseDtoSchema = z
  .object({ jobId: z.string() })
  .openapi({ required: ['jobId'] })
  .openapi('JobResponseDto')

const LibraryResponseDtoSchema = z
  .object({
    assetCount: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of assets' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    exclusionPatterns: z.array(z.string()).openapi({ description: 'Exclusion patterns' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Library ID' }),
    importPaths: z.array(z.string()).openapi({ description: 'Import paths' }),
    name: z.string().openapi({ description: 'Library name' }),
    ownerId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Owner user ID' }),
    refreshedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Last refresh date', example: '2024-01-01T00:00:00.000Z' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Last update date', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({
    required: [
      'assetCount',
      'createdAt',
      'exclusionPatterns',
      'id',
      'importPaths',
      'name',
      'ownerId',
      'refreshedAt',
      'updatedAt',
    ],
  })
  .openapi('LibraryResponseDto')

const LibraryStatsResponseDtoSchema = z
  .object({
    photos: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of photos' }),
    total: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Total number of assets' }),
    usage: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Storage usage in bytes' }),
    videos: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of videos' }),
  })
  .openapi({ required: ['photos', 'total', 'usage', 'videos'] })
  .openapi('LibraryStatsResponseDto')

const LicenseKeyDtoSchema = z
  .object({
    activationKey: z.string().openapi({ description: 'Activation key' }),
    licenseKey: z
      .string()
      .regex(/^IM(SV|CL)(-[\dA-Za-z]{4}){8}$/)
      .openapi({ description: 'License key (format: /^IM(SV|CL)(-[\\dA-Za-z]{4}){8}$/)' }),
  })
  .openapi({ required: ['activationKey', 'licenseKey'] })
  .openapi('LicenseKeyDto')

const UserLicenseSchema = z
  .object({
    activatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Activation date', example: '2024-01-01T00:00:00.000Z' }),
    activationKey: z.string().openapi({ description: 'Activation key' }),
    licenseKey: z
      .string()
      .regex(/^IM(SV|CL)(-[\dA-Za-z]{4}){8}$/)
      .openapi({ description: 'License key (format: /^IM(SV|CL)(-[\\dA-Za-z]{4}){8}$/)' }),
  })
  .openapi({ required: ['activatedAt', 'activationKey', 'licenseKey'] })
  .openapi('UserLicense')

const LicenseResponseDtoSchema = UserLicenseSchema.openapi('LicenseResponseDto')

const ListSnapshotsResponseDtoSchema = z
  .object({ snapshots: z.array(SnapshotDtoSchema) })
  .openapi({ required: ['snapshots'] })
  .openapi('ListSnapshotsResponseDto')

const LoginCredentialDtoSchema = z
  .object({
    email: z
      .email()
      .regex(
        /^[\p{L}\p{M}\p{N}.!#$%&'*+\/=?^_`{|}~-]+@[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?(?:\.[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?)*$/u,
      )
      .openapi({ description: 'User email', example: 'testuser@email.com' }),
    password: z.string().openapi({ description: 'User password', example: 'password' }),
  })
  .openapi({ required: ['email', 'password'] })
  .openapi('LoginCredentialDto')

const LoginResponseDtoSchema = z
  .object({
    accessToken: z.string().openapi({ description: 'Access token' }),
    isAdmin: z.boolean().openapi({ description: 'Is admin user' }),
    isOnboarded: z.boolean().openapi({ description: 'Is onboarded' }),
    name: z.string().openapi({ description: 'User name' }),
    profileImagePath: z.string().openapi({ description: 'Profile image path' }),
    shouldChangePassword: z.boolean().openapi({ description: 'Should change password' }),
    userEmail: z
      .email()
      .regex(
        /^[\p{L}\p{M}\p{N}.!#$%&'*+\/=?^_`{|}~-]+@[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?(?:\.[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?)*$/u,
      )
      .openapi({ description: 'User email' }),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
  })
  .openapi({
    required: [
      'accessToken',
      'isAdmin',
      'isOnboarded',
      'name',
      'profileImagePath',
      'shouldChangePassword',
      'userEmail',
      'userId',
    ],
  })
  .openapi('LoginResponseDto')

const LogoutResponseDtoSchema = z
  .object({
    redirectUri: z.string().openapi({ description: 'Redirect URI' }),
    successful: z.boolean().openapi({ description: 'Logout successful' }),
  })
  .openapi({ required: ['redirectUri', 'successful'] })
  .openapi('LogoutResponseDto')

const MaintenanceActionSchema = z
  .enum(['start', 'end', 'select_database_restore', 'restore_database', 'rollback'])
  .openapi({ description: 'Maintenance action' })
  .openapi('MaintenanceAction')

const MaintenanceAuthDtoSchema = z
  .object({ username: z.string().openapi({ description: 'Maintenance username' }) })
  .openapi({ required: ['username'] })
  .openapi('MaintenanceAuthDto')

const StorageFolderSchema = z
  .enum(['encoded-video', 'library', 'upload', 'profile', 'thumbs', 'backups'])
  .openapi({ description: 'Storage folder' })
  .openapi('StorageFolder')

const MaintenanceDetectInstallStorageFolderDtoSchema = z
  .object({
    files: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of files in the folder' }),
    folder: StorageFolderSchema,
    readable: z.boolean().openapi({ description: 'Whether the folder is readable' }),
    writable: z.boolean().openapi({ description: 'Whether the folder is writable' }),
  })
  .openapi({ required: ['files', 'folder', 'readable', 'writable'] })
  .openapi('MaintenanceDetectInstallStorageFolderDto')

const MaintenanceDetectInstallResponseDtoSchema = z
  .object({ storage: z.array(MaintenanceDetectInstallStorageFolderDtoSchema) })
  .openapi({ required: ['storage'] })
  .openapi('MaintenanceDetectInstallResponseDto')

const MaintenanceLoginDtoSchema = z
  .object({ token: z.string().exactOptional().openapi({ description: 'Maintenance token' }) })
  .openapi({ required: [] })
  .openapi('MaintenanceLoginDto')

const MaintenanceStatusResponseDtoSchema = z
  .object({
    action: MaintenanceActionSchema,
    active: z.boolean(),
    error: z.string().exactOptional(),
    futoBackupsJobId: z.string().exactOptional().openapi({ description: 'FUTO Backups job ID' }),
    progress: z.int().min(-9007199254740991).max(9007199254740991).exactOptional(),
    task: z.string().exactOptional(),
  })
  .openapi({ required: ['action', 'active'] })
  .openapi('MaintenanceStatusResponseDto')

const MapMarkerResponseDtoSchema = z
  .object({
    city: z.string().nullable().openapi({ description: 'City name' }),
    country: z.string().nullable().openapi({ description: 'Country name' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    lat: z.float64().openapi({ description: 'Latitude' }),
    lon: z.float64().openapi({ description: 'Longitude' }),
    state: z.string().nullable().openapi({ description: 'State/Province name' }),
  })
  .openapi({ required: ['city', 'country', 'id', 'lat', 'lon', 'state'] })
  .openapi('MapMarkerResponseDto')

const MapReverseGeocodeResponseDtoSchema = z
  .object({
    city: z.string().nullable().openapi({ description: 'City name' }),
    country: z.string().nullable().openapi({ description: 'Country name' }),
    state: z.string().nullable().openapi({ description: 'State/Province name' }),
  })
  .openapi({ required: ['city', 'country', 'state'] })
  .openapi('MapReverseGeocodeResponseDto')

const MemoriesResponseSchema = z
  .object({
    duration: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Memory duration in seconds' }),
    enabled: z.boolean().openapi({ description: 'Whether memories are enabled' }),
    sidebarWeb: z.boolean().openapi({ description: 'Whether memories appear in web sidebar' }),
  })
  .openapi({ required: ['duration', 'enabled', 'sidebarWeb'] })
  .openapi('MemoriesResponse')

const MemoriesUpdateSchema = z
  .object({
    duration: z
      .int()
      .min(1)
      .max(9007199254740991)
      .exactOptional()
      .openapi({ description: 'Memory duration in seconds' }),
    enabled: z.boolean().exactOptional().openapi({ description: 'Whether memories are enabled' }),
    sidebarWeb: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether memories appear in web sidebar' }),
  })
  .openapi({ required: [] })
  .openapi('MemoriesUpdate')

const MemoryDataDtoSchema = z
  .object({
    personId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'Person ID (birthday memories)' }),
    personName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the person when the memory was created (birthday memories)',
      }),
    year: z.int().min(1000).max(9999).openapi({ description: 'Year of the memory' }),
  })
  .openapi({ required: ['year'] })
  .openapi('MemoryDataDto')

const MemoryTypeSchema = z
  .enum(['on_this_day', 'birthday'])
  .openapi({ description: 'Memory type' })
  .openapi('MemoryType')

const MemoryCreateDtoSchema = z
  .object({
    assetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .exactOptional()
      .openapi({ description: 'Asset IDs to associate with memory' }),
    data: MemoryDataDtoSchema,
    hideAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        description: 'Date when memory should be hidden',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v2.6.0', state: 'Added' },
          { version: 'v2.6.0', state: 'Stable' },
        ],
        'x-immich-state': 'Stable',
      }),
    isSaved: z.boolean().exactOptional().openapi({ description: 'Is memory saved' }),
    memoryAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Memory date', example: '2024-01-01T00:00:00.000Z' }),
    seenAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ description: 'Date when memory was seen', example: '2024-01-01T00:00:00.000Z' }),
    showAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        description: 'Date when memory should be shown',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v2.6.0', state: 'Added' },
          { version: 'v2.6.0', state: 'Stable' },
        ],
        'x-immich-state': 'Stable',
      }),
    type: MemoryTypeSchema,
  })
  .openapi({ required: ['data', 'memoryAt', 'type'] })
  .openapi('MemoryCreateDto')

const MemoryResponseDtoSchema = z
  .object({
    assets: z.array(AssetResponseDtoSchema),
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    data: MemoryDataDtoSchema,
    deletedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ description: 'Deletion date', example: '2024-01-01T00:00:00.000Z' }),
    hideAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        description: 'Date when memory should be hidden',
        example: '2024-01-01T00:00:00.000Z',
      }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Memory ID' }),
    isSaved: z.boolean().openapi({ description: 'Is memory saved' }),
    memoryAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Memory date', example: '2024-01-01T00:00:00.000Z' }),
    ownerId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Owner user ID' }),
    seenAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ description: 'Date when memory was seen', example: '2024-01-01T00:00:00.000Z' }),
    showAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        description: 'Date when memory should be shown',
        example: '2024-01-01T00:00:00.000Z',
      }),
    type: MemoryTypeSchema,
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Last update date', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({
    required: [
      'assets',
      'createdAt',
      'data',
      'id',
      'isSaved',
      'memoryAt',
      'ownerId',
      'type',
      'updatedAt',
    ],
  })
  .openapi('MemoryResponseDto')

const MemorySearchOrderSchema = z
  .enum(['asc', 'desc', 'random'])
  .openapi({ description: 'Sort order' })
  .openapi('MemorySearchOrder')

const MemoryStatisticsResponseDtoSchema = z
  .object({
    total: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Total number of memories' }),
  })
  .openapi({ required: ['total'] })
  .openapi('MemoryStatisticsResponseDto')

const MemoryTypeV1Schema = z.literal('on_this_day').openapi('MemoryTypeV1')

const MemoryUpdateDtoSchema = z
  .object({
    isSaved: z.boolean().exactOptional().openapi({ description: 'Is memory saved' }),
    memoryAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ description: 'Memory date', example: '2024-01-01T00:00:00.000Z' }),
    seenAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({ description: 'Date when memory was seen', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({ required: [] })
  .openapi('MemoryUpdateDto')

const MergePersonDtoSchema = z
  .object({
    ids: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Person IDs to merge' }),
  })
  .openapi({ required: ['ids'] })
  .openapi('MergePersonDto')

const StringFilterSchema = z
  .object({
    eq: z.string().exactOptional(),
    in: z.array(z.string()).min(1).exactOptional(),
    ne: z.string().exactOptional(),
    notIn: z.array(z.string()).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StringFilter')

const StringFilterNullableSchema = z
  .object({
    eq: z.string().nullable().exactOptional(),
    in: z.array(z.string()).min(1).exactOptional(),
    ne: z.string().nullable().exactOptional(),
    notIn: z.array(z.string()).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StringFilterNullable')

const StringPatternFilterSchema = z
  .object({
    endsWith: z.string().min(1).exactOptional(),
    eq: z.string().nullable().exactOptional(),
    in: z.array(z.string()).min(1).exactOptional(),
    like: z.string().min(1).exactOptional(),
    ne: z.string().nullable().exactOptional(),
    notIn: z.array(z.string()).min(1).exactOptional(),
    notLike: z.string().min(1).exactOptional(),
    startsWith: z.string().min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StringPatternFilter')

const NumberFilterSchema = z
  .object({
    eq: z.float64().exactOptional(),
    gt: z.float64().exactOptional(),
    gte: z.float64().exactOptional(),
    in: z.array(z.float64()).min(1).exactOptional(),
    lt: z.float64().exactOptional(),
    lte: z.float64().exactOptional(),
    ne: z.float64().exactOptional(),
    notIn: z.array(z.float64()).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NumberFilter')

const StringSimilarityFilterSchema = z
  .object({ matches: z.string().min(1) })
  .openapi({ required: ['matches'] })
  .openapi('StringSimilarityFilter')

const NumberFilterNullableSchema = z
  .object({
    eq: z.float64().nullable().exactOptional(),
    gt: z.float64().exactOptional(),
    gte: z.float64().exactOptional(),
    in: z.array(z.float64()).min(1).exactOptional(),
    lt: z.float64().exactOptional(),
    lte: z.float64().exactOptional(),
    ne: z.float64().nullable().exactOptional(),
    notIn: z.array(z.float64()).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NumberFilterNullable')

const SearchFilterBranchSchema = z
  .strictObject({
    albumIds: IdsFilterSchema.exactOptional(),
    checksum: StringFilterSchema.exactOptional(),
    city: StringFilterNullableSchema.exactOptional(),
    country: StringFilterNullableSchema.exactOptional(),
    createdAt: DateFilterSchema.exactOptional(),
    description: StringPatternFilterSchema.exactOptional(),
    encodedVideoPath: StringFilterSchema.exactOptional(),
    fileSizeInBytes: NumberFilterSchema.exactOptional(),
    hasAlbums: BoolFilterSchema.exactOptional(),
    hasPeople: BoolFilterSchema.exactOptional(),
    hasTags: BoolFilterSchema.exactOptional(),
    id: IdFilterSchema.exactOptional(),
    isEncoded: BoolFilterSchema.exactOptional(),
    isFavorite: BoolFilterSchema.exactOptional(),
    isMotion: BoolFilterSchema.exactOptional(),
    isOffline: BoolFilterSchema.exactOptional(),
    lensModel: StringFilterNullableSchema.exactOptional(),
    libraryId: IdFilterNullableSchema.exactOptional(),
    make: StringFilterNullableSchema.exactOptional(),
    model: StringFilterNullableSchema.exactOptional(),
    ocr: StringSimilarityFilterSchema.exactOptional(),
    originalFileName: StringPatternFilterSchema.exactOptional(),
    originalPath: StringPatternFilterSchema.exactOptional(),
    personIds: IdsFilterSchema.exactOptional(),
    rating: NumberFilterNullableSchema.exactOptional(),
    state: StringFilterNullableSchema.exactOptional(),
    tagIds: IdsFilterSchema.exactOptional(),
    takenAt: DateFilterSchema.exactOptional(),
    trashedAt: DateFilterNullableSchema.exactOptional(),
    type: EnumFilterAssetTypeSchema.exactOptional(),
    updatedAt: DateFilterSchema.exactOptional(),
    visibility: EnumFilterAssetVisibilitySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchFilterBranch')

const SearchFilterSchema = z
  .strictObject({
    albumIds: IdsFilterSchema.exactOptional(),
    checksum: StringFilterSchema.exactOptional(),
    city: StringFilterNullableSchema.exactOptional(),
    country: StringFilterNullableSchema.exactOptional(),
    createdAt: DateFilterSchema.exactOptional(),
    description: StringPatternFilterSchema.exactOptional(),
    encodedVideoPath: StringFilterSchema.exactOptional(),
    fileSizeInBytes: NumberFilterSchema.exactOptional(),
    hasAlbums: BoolFilterSchema.exactOptional(),
    hasPeople: BoolFilterSchema.exactOptional(),
    hasTags: BoolFilterSchema.exactOptional(),
    id: IdFilterSchema.exactOptional(),
    isEncoded: BoolFilterSchema.exactOptional(),
    isFavorite: BoolFilterSchema.exactOptional(),
    isMotion: BoolFilterSchema.exactOptional(),
    isOffline: BoolFilterSchema.exactOptional(),
    lensModel: StringFilterNullableSchema.exactOptional(),
    libraryId: IdFilterNullableSchema.exactOptional(),
    make: StringFilterNullableSchema.exactOptional(),
    model: StringFilterNullableSchema.exactOptional(),
    ocr: StringSimilarityFilterSchema.exactOptional(),
    or: z.array(SearchFilterBranchSchema).min(1).exactOptional(),
    originalFileName: StringPatternFilterSchema.exactOptional(),
    originalPath: StringPatternFilterSchema.exactOptional(),
    personIds: IdsFilterSchema.exactOptional(),
    rating: NumberFilterNullableSchema.exactOptional(),
    state: StringFilterNullableSchema.exactOptional(),
    tagIds: IdsFilterSchema.exactOptional(),
    takenAt: DateFilterSchema.exactOptional(),
    trashedAt: DateFilterNullableSchema.exactOptional(),
    type: EnumFilterAssetTypeSchema.exactOptional(),
    updatedAt: DateFilterSchema.exactOptional(),
    visibility: EnumFilterAssetVisibilitySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchFilter')

const SearchOrderFieldSchema = z
  .enum(['fileCreatedAt', 'localDateTime', 'fileSizeInBytes', 'rating'])
  .openapi('SearchOrderField')

const SearchOrderSchema = z
  .object({
    direction: AssetOrderSchema.default('desc').exactOptional(),
    field: SearchOrderFieldSchema.default('fileCreatedAt').exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchOrder')

const MetadataSearchDtoSchema = z
  .object({
    albumIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by album IDs',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    checksum: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by file checksum',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by city name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by country name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    createdAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by creation date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    createdBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by creation date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    cursor: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Cursor for the next page of results',
        'x-immich-history': [{ version: 'v3.2.0', state: 'Added' }],
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by description text',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    encodedVideoPath: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by encoded video file path',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    filter: SearchFilterSchema.exactOptional().openapi({
      'x-immich-history': [{ version: 'v3.2.0', state: 'Added' }],
    }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by asset ID',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isEncoded: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by encoded status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isFavorite: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by favorite status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isMotion: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by motion photo status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isNotInAlbum: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter assets not in any album',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isOffline: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by offline status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    lensModel: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by lens model',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    libraryId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Library ID to filter by',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    make: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by camera make',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    model: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by camera model',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    ocr: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by OCR text content',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    order: AssetOrderSchema.exactOptional().openapi({
      deprecated: true,
      description: 'Sort order',
      'x-immich-history': [
        { version: 'v1', state: 'Added' },
        { version: 'v2', state: 'Stable' },
        { version: 'v3.2.0', state: 'Deprecated' },
      ],
      'x-immich-state': 'Deprecated',
    }),
    orderBy: SearchOrderSchema.exactOptional().openapi({
      'x-immich-history': [{ version: 'v3.2.0', state: 'Added' }],
    }),
    originalFileName: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by original file name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    originalPath: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by original file path',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    page: z
      .int()
      .min(1)
      .max(9007199254740991)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Page number',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    personIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by person IDs',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    previewPath: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by preview file path',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    rating: z
      .int()
      .min(1)
      .max(5)
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by rating [1-5], or null for unrated',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          {
            version: 'v2.6.0',
            state: 'Updated',
            description:
              'Using -1 as a rating is deprecated and will be removed in the next major version.',
          },
          {
            version: 'v3',
            state: 'Updated',
            description: 'Using -1 as a rating is no longer valid.',
          },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    size: z
      .int()
      .min(1)
      .max(1000)
      .default(250)
      .exactOptional()
      .openapi({ description: 'Number of results to return' }),
    state: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by state/province name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    tagIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by tag IDs',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    takenAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by taken date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    takenBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by taken date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    thumbnailPath: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by thumbnail file path',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    trashedAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by trash date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    trashedBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by trash date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    type: AssetTypeEnumSchema.exactOptional().openapi({
      deprecated: true,
      'x-immich-history': [
        { version: 'v1', state: 'Added' },
        { version: 'v2', state: 'Stable' },
        { version: 'v3.2.0', state: 'Deprecated' },
      ],
      'x-immich-state': 'Deprecated',
    }),
    updatedAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by update date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    updatedBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by update date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    visibility: AssetVisibilitySchema.exactOptional().openapi({
      deprecated: true,
      'x-immich-history': [
        { version: 'v1', state: 'Added' },
        { version: 'v2', state: 'Stable' },
        { version: 'v3.2.0', state: 'Deprecated' },
      ],
      'x-immich-state': 'Deprecated',
    }),
    withDeleted: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Include deleted assets',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    withExif: z.boolean().exactOptional().openapi({ description: 'Include EXIF data in response' }),
    withPeople: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Include people data in response' }),
    withStacked: z.boolean().exactOptional().openapi({ description: 'Include stacked assets' }),
  })
  .openapi({ required: [] })
  .openapi('MetadataSearchDto')

const NotificationLevelSchema = z
  .enum(['success', 'error', 'warning', 'info'])
  .openapi({ description: 'Notification level' })
  .openapi('NotificationLevel')

const NotificationTypeSchema = z
  .enum([
    'JobFailed',
    'BackupFailed',
    'SystemMessage',
    'AlbumInvite',
    'AlbumUpdate',
    'ClusterGroupRequest',
    'Custom',
  ])
  .openapi({ description: 'Notification type' })
  .openapi('NotificationType')

const NotificationCreateDtoSchema = z
  .object({
    data: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Additional notification data' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Notification description' }),
    level: NotificationLevelSchema.exactOptional(),
    readAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Date when notification was read',
        example: '2024-01-01T00:00:00.000Z',
      }),
    title: z.string().openapi({ description: 'Notification title' }),
    type: NotificationTypeSchema.exactOptional(),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID to send notification to' }),
  })
  .openapi({ required: ['title', 'userId'] })
  .openapi('NotificationCreateDto')

const NotificationDeleteAllDtoSchema = z
  .object({
    ids: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .min(1)
      .openapi({ description: 'Notification IDs to delete' }),
  })
  .openapi({ required: ['ids'] })
  .openapi('NotificationDeleteAllDto')

const NotificationDtoSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    data: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Additional notification data' }),
    description: z.string().exactOptional().openapi({ description: 'Notification description' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Notification ID' }),
    level: NotificationLevelSchema,
    readAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        description: 'Date when notification was read',
        example: '2024-01-01T00:00:00.000Z',
      }),
    title: z.string().openapi({ description: 'Notification title' }),
    type: NotificationTypeSchema,
  })
  .openapi({ required: ['createdAt', 'id', 'level', 'title', 'type'] })
  .openapi('NotificationDto')

const NotificationUpdateAllDtoSchema = z
  .object({
    ids: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .min(1)
      .openapi({ description: 'Notification IDs to update' }),
    readAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Date when notifications were read',
        example: '2024-01-01T00:00:00.000Z',
      }),
  })
  .openapi({ required: ['ids'] })
  .openapi('NotificationUpdateAllDto')

const NotificationUpdateDtoSchema = z
  .object({
    readAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Date when notification was read',
        example: '2024-01-01T00:00:00.000Z',
      }),
  })
  .openapi({ required: [] })
  .openapi('NotificationUpdateDto')

const OAuthAuthorizeResponseDtoSchema = z
  .object({ url: z.string().openapi({ description: 'OAuth authorization URL' }) })
  .openapi({ required: ['url'] })
  .openapi('OAuthAuthorizeResponseDto')

const OAuthBackchannelLogoutDtoSchema = z
  .object({ logout_token: z.string().openapi({ description: 'OAuth logout token' }) })
  .openapi({ required: ['logout_token'] })
  .openapi('OAuthBackchannelLogoutDto')

const OAuthCallbackDtoSchema = z
  .object({
    codeVerifier: z.string().exactOptional().openapi({ description: 'OAuth code verifier (PKCE)' }),
    state: z.string().exactOptional().openapi({ description: 'OAuth state parameter' }),
    url: z.string().min(1).openapi({ description: 'OAuth callback URL' }),
  })
  .openapi({ required: ['url'] })
  .openapi('OAuthCallbackDto')

const OAuthConfigDtoSchema = z
  .object({
    codeChallenge: z
      .string()
      .exactOptional()
      .openapi({ description: 'OAuth code challenge (PKCE)' }),
    redirectUri: z.string().openapi({ description: 'OAuth redirect URI' }),
    state: z.string().exactOptional().openapi({ description: 'OAuth state parameter' }),
  })
  .openapi({ required: ['redirectUri'] })
  .openapi('OAuthConfigDto')

const OnboardingDtoSchema = z
  .object({ isOnboarded: z.boolean().openapi({ description: 'Is user onboarded' }) })
  .openapi({ required: ['isOnboarded'] })
  .openapi('OnboardingDto')

const OnboardingResponseDtoSchema = z
  .object({ isOnboarded: z.boolean().openapi({ description: 'Is user onboarded' }) })
  .openapi({ required: ['isOnboarded'] })
  .openapi('OnboardingResponseDto')

const TelemetryLevelSchema = z.enum(['full', 'none']).openapi('TelemetryLevel')

const OnboardingStatusResponseDtoSchema = z
  .object({
    error: z.string().exactOptional(),
    hasBackend: z.boolean(),
    hasBackup: z.boolean(),
    hasOnboardedKey: z.boolean(),
    hasSchedule: z.boolean(),
    hasSkippedExtraConfig: z.boolean(),
    hasTelemetry: TelemetryLevelSchema,
    isAuthenticated: z.boolean(),
    requiresAuthentication: z.boolean(),
    status: BootstrapStatusSchema,
  })
  .openapi({
    required: [
      'hasBackend',
      'hasBackup',
      'hasOnboardedKey',
      'hasSchedule',
      'hasSkippedExtraConfig',
      'hasTelemetry',
      'isAuthenticated',
      'requiresAuthentication',
      'status',
    ],
  })
  .openapi('OnboardingStatusResponseDto')

const PartnerCreateDtoSchema = z
  .object({
    sharedWithId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID to share with' }),
  })
  .openapi({ required: ['sharedWithId'] })
  .openapi('PartnerCreateDto')

const PartnerDirectionSchema = z
  .enum(['shared-by', 'shared-with'])
  .openapi({ description: 'Partner direction' })
  .openapi('PartnerDirection')

const PartnerResponseDtoSchema = z
  .object({
    avatarColor: UserAvatarColorSchema,
    email: z
      .email()
      .regex(
        /^[\p{L}\p{M}\p{N}.!#$%&'*+\/=?^_`{|}~-]+@[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?(?:\.[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?)*$/u,
      )
      .openapi({ description: 'User email' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
    inTimeline: z.boolean().exactOptional().openapi({ description: 'Show in timeline' }),
    name: z.string().openapi({ description: 'User name' }),
    profileChangedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Profile change date' }),
    profileImagePath: z.string().openapi({ description: 'Profile image path' }),
  })
  .openapi({
    description: 'Partner response',
    required: ['avatarColor', 'email', 'id', 'name', 'profileChangedAt', 'profileImagePath'],
  })
  .openapi('PartnerResponseDto')

const PartnerUpdateDtoSchema = z
  .object({ inTimeline: z.boolean().openapi({ description: 'Show partner assets in timeline' }) })
  .openapi({ required: ['inTimeline'] })
  .openapi('PartnerUpdateDto')

const PasskeyAuthenticationFinishDtoSchema = z
  .object({
    response: z
      .object({
        id: z
          .base64url()
          .regex(/^[A-Za-z0-9_-]*$/)
          .openapi({ description: 'Credential ID' }),
        response: z
          .object({
            userHandle: z
              .base64url()
              .regex(/^[A-Za-z0-9_-]*$/)
              .exactOptional()
              .openapi({ description: 'User handle' }),
          })
          .catchall(z.any()),
      })
      .catchall(z.any())
      .openapi({
        description: "Response returned by @simplewebauthn/browser's `startAuthentication()`",
        required: ['id', 'response'],
      }),
  })
  .openapi({ required: ['response'] })
  .openapi('PasskeyAuthenticationFinishDto')

const PasskeyAuthenticationOptionsDtoSchema = z
  .record(z.string(), z.any())
  .openapi({
    description: "Response returned by @simplewebauthn/server's `generateAuthenticationOptions`",
  })
  .openapi('PasskeyAuthenticationOptionsDto')

const PasskeyRegistrationFinishDtoSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Passkey name' }),
    response: z
      .any()
      .openapi({
        description: "Response returned by @simplewebauthn/browser's `startAuthentication()`",
      }),
  })
  .openapi({ required: ['response'] })
  .openapi('PasskeyRegistrationFinishDto')

const PasskeyRegistrationOptionsDtoSchema = z
  .record(z.string(), z.any())
  .openapi({
    description: "Response returned by @simplewebauthn/server's `generateRegistrationOptions`",
  })
  .openapi('PasskeyRegistrationOptionsDto')

const PasskeyResponseDtoSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Passkey ID' }),
    name: z.string().nullable().openapi({ description: 'Passkey name' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Last update date', example: '2024-01-01T00:00:00.000Z' }),
    usedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Last used date', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({ required: ['createdAt', 'id', 'name', 'updatedAt', 'usedAt'] })
  .openapi('PasskeyResponseDto')

const PasskeyUpdateDtoSchema = z
  .object({ name: z.string().min(1).nullable().openapi({ description: 'Passkey name' }) })
  .openapi({ required: ['name'] })
  .openapi('PasskeyUpdateDto')

const PeopleDeleteDtoSchema = z
  .object({
    ids: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'IDs to process' }),
    userId: z.string().exactOptional(),
  })
  .openapi({ required: ['ids'], 'x-immich-history': [{ version: 'v3.3', state: 'Added' }] })
  .openapi('PeopleDeleteDto')

const PersonUpdateStrategySchema = z
  .enum(['self', 'everyone'])
  .openapi({ description: 'Which person records to update when editing a person' })
  .openapi('PersonUpdateStrategy')

const PeopleResponseSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether people are enabled' }),
    minimumFaces: z
      .int()
      .min(1)
      .max(9007199254740991)
      .exactOptional()
      .openapi({ description: 'People face threshold' }),
    sidebarWeb: z.boolean().openapi({ description: 'Whether people appear in web sidebar' }),
    updateStrategy: PersonUpdateStrategySchema,
  })
  .openapi({ required: ['enabled', 'sidebarWeb', 'updateStrategy'] })
  .openapi('PeopleResponse')

const PeopleResponseDtoSchema = z
  .object({
    hasNextPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether there are more pages',
        'x-immich-history': [
          { version: 'v1.110.0', state: 'Added' },
          { version: 'v2', state: 'Stable' },
        ],
        'x-immich-state': 'Stable',
      }),
    hidden: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Number of hidden people' }),
    people: z.array(PersonResponseDtoSchema),
    total: z.int().min(0).max(9007199254740991).openapi({ description: 'Total number of people' }),
  })
  .openapi({ description: 'People response', required: ['hidden', 'people', 'total'] })
  .openapi('PeopleResponseDto')

const PeopleUpdateSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ description: 'Whether people are enabled' }),
    minimumFaces: z
      .int()
      .min(1)
      .max(9007199254740991)
      .exactOptional()
      .openapi({ description: 'People face threshold' }),
    sidebarWeb: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether people appear in web sidebar' }),
    updateStrategy: PersonUpdateStrategySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PeopleUpdate')

const PeopleUpdateItemSchema = z
  .object({
    birthDate: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Person date of birth' }),
    color: z
      .string()
      .regex(/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Person color (hex)' }),
    featureFaceAssetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'Asset ID used for feature face thumbnail' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Person ID' }),
    isFavorite: z.boolean().exactOptional().openapi({ description: 'Mark as favorite' }),
    isHidden: z.boolean().exactOptional().openapi({ description: 'Person visibility (hidden)' }),
    name: z.string().exactOptional().openapi({ description: 'Person name' }),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      )
      .exactOptional()
      .openapi({ description: 'Restrict the update to the person record of this User ID' }),
  })
  .openapi({ required: ['id'] })
  .openapi('PeopleUpdateItem')

const PeopleUpdateDtoSchema = z
  .object({ people: z.array(PeopleUpdateItemSchema).openapi({ description: 'People to update' }) })
  .openapi({ required: ['people'] })
  .openapi('PeopleUpdateDto')

const PeopleUsersUpsertTypeSchema = z
  .literal('everyone')
  .openapi({ description: 'Which people to update when personIds is omitted' })
  .openapi('PeopleUsersUpsertType')

const PeopleUsersUpsertDtoSchema = z
  .object({
    personIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
          ),
      )
      .exactOptional()
      .openapi({ description: 'Person IDs, required when type is omitted' }),
    role: PersonUserRoleSchema.openapi({ description: 'Role that should be applied' }),
    sharedWithIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
          ),
      )
      .openapi({ description: 'User IDs that should be given access to the person' }),
    type: PeopleUsersUpsertTypeSchema.exactOptional(),
  })
  .openapi({ required: ['role', 'sharedWithIds'] })
  .openapi('PeopleUsersUpsertDto')

const PersonCreateDtoSchema = z
  .object({
    birthDate: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Person date of birth' }),
    color: z
      .string()
      .regex(/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Person color (hex)' }),
    isFavorite: z.boolean().exactOptional().openapi({ description: 'Mark as favorite' }),
    isHidden: z.boolean().exactOptional().openapi({ description: 'Person visibility (hidden)' }),
    name: z.string().exactOptional().openapi({ description: 'Person name' }),
  })
  .openapi({ required: [] })
  .openapi('PersonCreateDto')

const PersonDeleteDtoSchema = z
  .object({ userId: z.string().exactOptional() })
  .default({})
  .openapi({
    'x-immich-history': [
      { version: 'v3.3', state: 'Added' },
      { version: 'v3.3', state: 'Stable' },
    ],
    'x-immich-state': 'Stable',
    required: [],
  })
  .openapi('PersonDeleteDto')

const PersonStatisticsResponseDtoSchema = z
  .object({
    assets: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of assets' }),
  })
  .openapi({ required: ['assets'] })
  .openapi('PersonStatisticsResponseDto')

const PersonUpdateDtoSchema = z
  .object({
    birthDate: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Person date of birth' }),
    color: z
      .string()
      .regex(/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Person color (hex)' }),
    featureFaceAssetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'Asset ID used for feature face thumbnail' }),
    isFavorite: z.boolean().exactOptional().openapi({ description: 'Mark as favorite' }),
    isHidden: z.boolean().exactOptional().openapi({ description: 'Person visibility (hidden)' }),
    name: z.string().exactOptional().openapi({ description: 'Person name' }),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      )
      .exactOptional()
      .openapi({ description: 'Restrict the update to the person record of this User ID' }),
  })
  .openapi({ required: [] })
  .openapi('PersonUpdateDto')

const PersonUsersDeleteDtoSchema = z
  .array(
    z
      .object({
        personId: z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
          )
          .openapi({ description: 'Person ID' }),
        sharedById: z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
          )
          .exactOptional()
          .openapi({ description: 'User ID of the user that gave access to the person' }),
        sharedWithId: z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
          )
          .openapi({ description: 'User ID of the user that was given access to the person' }),
      })
      .openapi({ required: ['personId', 'sharedWithId'] }),
  )
  .openapi('PersonUsersDeleteDto')

const PersonUsersResponseDtoSchema = z
  .array(
    z
      .object({
        personId: z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
          )
          .openapi({ description: 'Person ID' }),
        role: PersonUserRoleSchema.openapi({ description: 'Access role' }),
        sharedBy: UserResponseDtoSchema.openapi({
          description: 'The user that gave access to this person',
        }),
        sharedById: z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
          )
          .openapi({ description: 'User ID of the user that gave access to this person' }),
        sharedWith: UserResponseDtoSchema.openapi({
          description: 'The user that was given access to this person',
        }),
        sharedWithId: z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
          )
          .openapi({ description: 'User ID of the user that was given access to this person' }),
      })
      .openapi({
        required: ['personId', 'sharedById', 'sharedWithId', 'sharedBy', 'sharedWith', 'role'],
      }),
  )
  .openapi('PersonUsersResponseDto')

const PinCodeChangeDtoSchema = z
  .object({
    newPinCode: z
      .string()
      .regex(/^\d{6}$/)
      .openapi({ description: 'New PIN code (4-6 digits)' }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description: 'User password (required if PIN code is not provided)',
        example: 'password',
      }),
    pinCode: z
      .string()
      .regex(/^\d{6}$/)
      .exactOptional()
      .openapi({ description: 'New PIN code (4-6 digits)', example: '123456' }),
  })
  .openapi({ required: ['newPinCode'] })
  .openapi('PinCodeChangeDto')

const PinCodeResetDtoSchema = z
  .object({
    password: z
      .string()
      .exactOptional()
      .openapi({
        description: 'User password (required if PIN code is not provided)',
        example: 'password',
      }),
    pinCode: z
      .string()
      .regex(/^\d{6}$/)
      .exactOptional()
      .openapi({ description: 'New PIN code (4-6 digits)', example: '123456' }),
  })
  .openapi({ required: [] })
  .openapi('PinCodeResetDto')

const PinCodeSetupDtoSchema = z
  .object({
    pinCode: z
      .string()
      .regex(/^\d{6}$/)
      .openapi({ description: 'PIN code (4-6 digits)', example: '123456' }),
  })
  .openapi({ required: ['pinCode'] })
  .openapi('PinCodeSetupDto')

const PlacesResponseDtoSchema = z
  .object({
    admin1name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Administrative level 1 name (state/province)' }),
    admin2name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Administrative level 2 name (county/district)' }),
    latitude: z.float64().openapi({ description: 'Latitude coordinate' }),
    longitude: z.float64().openapi({ description: 'Longitude coordinate' }),
    name: z.string().openapi({ description: 'Place name' }),
  })
  .openapi({ required: ['latitude', 'longitude', 'name'] })
  .openapi('PlacesResponseDto')

const WorkflowTypeSchema = z
  .literal('AssetV1')
  .openapi({ description: 'Workflow type' })
  .openapi('WorkflowType')

const PluginMethodResponseDtoSchema = z
  .object({
    description: z.string().openapi({ description: 'Description' }),
    hostFunctions: z.boolean(),
    key: z.string().openapi({ description: 'Key' }),
    name: z.string().openapi({ description: 'Name' }),
    schema: z.object({}).exactOptional(),
    title: z.string().openapi({ description: 'Title' }),
    types: z.array(WorkflowTypeSchema).openapi({ description: 'Workflow types' }),
    uiHints: z.array(z.string()).openapi({ description: 'Ui hints' }),
  })
  .openapi({
    required: ['description', 'hostFunctions', 'key', 'name', 'title', 'types', 'uiHints'],
  })
  .openapi('PluginMethodResponseDto')

const PluginResponseDtoSchema = z
  .object({
    author: z.string().openapi({ description: 'Plugin author' }),
    createdAt: z.string().openapi({ description: 'Creation date' }),
    description: z.string().openapi({ description: 'Plugin description' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Plugin ID' }),
    methods: z.array(PluginMethodResponseDtoSchema).openapi({ description: 'Plugin methods' }),
    name: z.string().openapi({ description: 'Plugin name' }),
    title: z.string().openapi({ description: 'Plugin title' }),
    updatedAt: z.string().openapi({ description: 'Last update date' }),
    version: z.string().openapi({ description: 'Plugin version' }),
  })
  .openapi({
    required: [
      'author',
      'createdAt',
      'description',
      'id',
      'methods',
      'name',
      'title',
      'updatedAt',
      'version',
    ],
  })
  .openapi('PluginResponseDto')

const PluginTemplateStepResponseDtoSchema = z
  .object({
    config: z.record(z.string(), z.any()).nullable().openapi({ description: 'Step configuration' }),
    enabled: z.boolean().exactOptional().openapi({ description: 'Whether the step is enabled' }),
    method: z.string().openapi({ description: 'Step plugin method' }),
  })
  .openapi({ required: ['config', 'method'] })
  .openapi('PluginTemplateStepResponseDto')

const WorkflowTriggerSchema = z
  .enum(['AssetCreate', 'AssetMetadataExtraction', 'AssetOcrExtraction', 'AssetTagged'])
  .openapi({ description: 'Plugin trigger type' })
  .openapi('WorkflowTrigger')

const PluginTemplateResponseDtoSchema = z
  .object({
    description: z.string().openapi({ description: 'Template description' }),
    key: z.string().openapi({ description: 'Template key (unique across all templates)' }),
    steps: z.array(PluginTemplateStepResponseDtoSchema).openapi({ description: 'Workflow steps' }),
    title: z.string().openapi({ description: 'Template title' }),
    trigger: WorkflowTriggerSchema.openapi({ description: 'Workflow trigger' }),
    uiHints: z.array(z.string()).openapi({ description: 'Ui hints, for example "smart-album"' }),
  })
  .openapi({ required: ['description', 'key', 'steps', 'title', 'trigger', 'uiHints'] })
  .openapi('PluginTemplateResponseDto')

const PublicConfigFFmpegRealtimeDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Enable real-time HLS transcoding (alpha)' }),
  })
  .openapi({ required: ['enabled'] })
  .openapi('PublicConfigFFmpegRealtimeDto')

const PublicConfigFFmpegDtoSchema = z
  .object({ realtime: PublicConfigFFmpegRealtimeDtoSchema })
  .openapi({ required: ['realtime'] })
  .openapi('PublicConfigFFmpegDto')

const PublicConfigMapDtoSchema = z
  .object({
    darkStyle: z.url().openapi({ description: 'Dark map style URL' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
    lightStyle: z.url().openapi({ description: 'Light map style URL' }),
  })
  .openapi({ required: ['darkStyle', 'enabled', 'lightStyle'] })
  .openapi('PublicConfigMapDto')

const PublicConfigOAuthDtoSchema = z
  .object({
    autoLaunch: z.boolean().openapi({ description: 'Auto launch' }),
    buttonText: z.string().openapi({ description: 'Button text' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
  })
  .openapi({ required: ['autoLaunch', 'buttonText', 'enabled'] })
  .openapi('PublicConfigOAuthDto')

const PublicConfigPasskeyDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('PublicConfigPasskeyDto')

const PublicConfigPasswordLoginDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('PublicConfigPasswordLoginDto')

const PublicConfigServerDtoSchema = z
  .object({ loginPageMessage: z.string().openapi({ description: 'Login page message' }) })
  .openapi({ required: ['loginPageMessage'] })
  .openapi('PublicConfigServerDto')

const PublicConfigDtoSchema = z
  .object({
    ffmpeg: PublicConfigFFmpegDtoSchema,
    map: PublicConfigMapDtoSchema,
    oauth: PublicConfigOAuthDtoSchema,
    passkey: PublicConfigPasskeyDtoSchema,
    passwordLogin: PublicConfigPasswordLoginDtoSchema,
    server: PublicConfigServerDtoSchema,
  })
  .openapi({
    description: 'Configuration properties that are visible to everyone',
    required: ['ffmpeg', 'map', 'oauth', 'passkey', 'passwordLogin', 'server'],
  })
  .openapi('PublicConfigDto')

const PurchaseResponseSchema = z
  .object({
    hideBuyButtonUntil: z.string().openapi({ description: 'Date until which to hide buy button' }),
    showSupportBadge: z.boolean().openapi({ description: 'Whether to show support badge' }),
  })
  .openapi({ required: ['hideBuyButtonUntil', 'showSupportBadge'] })
  .openapi('PurchaseResponse')

const PurchaseUpdateSchema = z
  .object({
    hideBuyButtonUntil: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date until which to hide buy button' }),
    showSupportBadge: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to show support badge' }),
  })
  .openapi({ required: [] })
  .openapi('PurchaseUpdate')

const QueueCommandSchema = z
  .enum(['start', 'pause', 'resume', 'empty', 'clear-failed'])
  .openapi({ description: 'Queue command to execute' })
  .openapi('QueueCommand')

const QueueCommandDtoSchema = z
  .object({
    command: QueueCommandSchema,
    force: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Force the command execution (if applicable)' }),
  })
  .openapi({ required: ['command'] })
  .openapi('QueueCommandDto')

const QueueDeleteDtoSchema = z
  .object({
    failed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, will also remove failed jobs from the queue.',
        'x-immich-history': [
          { version: 'v2.4.0', state: 'Added' },
          { version: 'v2.4.0', state: 'Alpha' },
        ],
        'x-immich-state': 'Alpha',
      }),
  })
  .openapi({ required: [] })
  .openapi('QueueDeleteDto')

const QueueJobResponseDtoSchema = z
  .object({
    data: z.record(z.string(), z.any()).openapi({ description: 'Job data payload' }),
    id: z.string().exactOptional().openapi({ description: 'Job ID' }),
    name: JobNameSchema,
    timestamp: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Job creation timestamp' }),
  })
  .openapi({ required: ['data', 'name', 'timestamp'] })
  .openapi('QueueJobResponseDto')

const QueueJobStatusSchema = z
  .enum(['active', 'failed', 'completed', 'delayed', 'waiting'])
  .openapi({ description: 'Queue job status' })
  .openapi('QueueJobStatus')

const QueueNameSchema = z
  .enum([
    'thumbnailGeneration',
    'metadataExtraction',
    'videoConversion',
    'faceDetection',
    'facialRecognition',
    'smartSearch',
    'duplicateDetection',
    'backgroundTask',
    'storageTemplateMigration',
    'migration',
    'search',
    'sidecar',
    'library',
    'notifications',
    'backupDatabase',
    'ocr',
    'workflow',
    'integrityCheck',
    'editor',
  ])
  .openapi({ description: 'Queue name' })
  .openapi('QueueName')

const QueueStatisticsDtoSchema = z
  .object({
    active: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of active jobs' }),
    completed: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of completed jobs' }),
    delayed: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of delayed jobs' }),
    failed: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of failed jobs' }),
    paused: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({
        description: 'Number of paused jobs',
        'x-immich-history': [
          { version: 'v2.0.0', state: 'Added' },
          {
            version: 'v4.0.0',
            state: 'Updated',
            description: 'A paused queue will now also shows its job as `waiting`',
          },
          { version: 'v4.0.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    waiting: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of waiting jobs' }),
  })
  .openapi({ required: ['active', 'completed', 'delayed', 'failed', 'paused', 'waiting'] })
  .openapi('QueueStatisticsDto')

const QueueResponseDtoSchema = z
  .object({
    isPaused: z.boolean().openapi({ description: 'Whether the queue is paused' }),
    name: QueueNameSchema,
    statistics: QueueStatisticsDtoSchema,
  })
  .openapi({ required: ['isPaused', 'name', 'statistics'] })
  .openapi('QueueResponseDto')

const QueueStatusLegacyDtoSchema = z
  .object({
    isActive: z
      .boolean()
      .openapi({ description: 'Whether the queue is currently active (has running jobs)' }),
    isPaused: z.boolean().openapi({ description: 'Whether the queue is paused' }),
  })
  .openapi({ required: ['isActive', 'isPaused'] })
  .openapi('QueueStatusLegacyDto')

const QueueResponseLegacyDtoSchema = z
  .object({ jobCounts: QueueStatisticsDtoSchema, queueStatus: QueueStatusLegacyDtoSchema })
  .openapi({ required: ['jobCounts', 'queueStatus'] })
  .openapi('QueueResponseLegacyDto')

const QueueUpdateDtoSchema = z
  .object({
    isPaused: z.boolean().exactOptional().openapi({ description: 'Whether to pause the queue' }),
  })
  .openapi({ required: [] })
  .openapi('QueueUpdateDto')

const QueuesResponseLegacyDtoSchema = z
  .object({
    backgroundTask: QueueResponseLegacyDtoSchema,
    backupDatabase: QueueResponseLegacyDtoSchema,
    duplicateDetection: QueueResponseLegacyDtoSchema,
    editor: QueueResponseLegacyDtoSchema,
    faceDetection: QueueResponseLegacyDtoSchema,
    facialRecognition: QueueResponseLegacyDtoSchema,
    integrityCheck: QueueResponseLegacyDtoSchema,
    library: QueueResponseLegacyDtoSchema,
    metadataExtraction: QueueResponseLegacyDtoSchema,
    migration: QueueResponseLegacyDtoSchema,
    notifications: QueueResponseLegacyDtoSchema,
    ocr: QueueResponseLegacyDtoSchema,
    search: QueueResponseLegacyDtoSchema,
    sidecar: QueueResponseLegacyDtoSchema,
    smartSearch: QueueResponseLegacyDtoSchema,
    storageTemplateMigration: QueueResponseLegacyDtoSchema,
    thumbnailGeneration: QueueResponseLegacyDtoSchema,
    videoConversion: QueueResponseLegacyDtoSchema,
    workflow: QueueResponseLegacyDtoSchema,
  })
  .openapi({
    required: [
      'backgroundTask',
      'backupDatabase',
      'duplicateDetection',
      'editor',
      'faceDetection',
      'facialRecognition',
      'integrityCheck',
      'library',
      'metadataExtraction',
      'migration',
      'notifications',
      'ocr',
      'search',
      'sidecar',
      'smartSearch',
      'storageTemplateMigration',
      'thumbnailGeneration',
      'videoConversion',
      'workflow',
    ],
  })
  .openapi('QueuesResponseLegacyDto')

const RandomSearchDtoSchema = z
  .object({
    albumIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by album IDs',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by city name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by country name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    createdAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by creation date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    createdBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by creation date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    filter: SearchFilterSchema.exactOptional().openapi({
      'x-immich-history': [{ version: 'v3.2.0', state: 'Added' }],
    }),
    isEncoded: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by encoded status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isFavorite: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by favorite status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isMotion: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by motion photo status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isNotInAlbum: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter assets not in any album',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isOffline: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by offline status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    lensModel: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by lens model',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    libraryId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Library ID to filter by',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    make: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by camera make',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    model: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by camera model',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    ocr: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by OCR text content',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    personIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by person IDs',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    rating: z
      .int()
      .min(1)
      .max(5)
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by rating [1-5], or null for unrated',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          {
            version: 'v2.6.0',
            state: 'Updated',
            description:
              'Using -1 as a rating is deprecated and will be removed in the next major version.',
          },
          {
            version: 'v3',
            state: 'Updated',
            description: 'Using -1 as a rating is no longer valid.',
          },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    size: z
      .int()
      .min(1)
      .max(1000)
      .default(250)
      .exactOptional()
      .openapi({ description: 'Number of results to return' }),
    state: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by state/province name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    tagIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by tag IDs',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    takenAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by taken date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    takenBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by taken date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    trashedAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by trash date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    trashedBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by trash date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    type: AssetTypeEnumSchema.exactOptional().openapi({
      deprecated: true,
      'x-immich-history': [
        { version: 'v1', state: 'Added' },
        { version: 'v2', state: 'Stable' },
        { version: 'v3.2.0', state: 'Deprecated' },
      ],
      'x-immich-state': 'Deprecated',
    }),
    updatedAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by update date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    updatedBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by update date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    visibility: AssetVisibilitySchema.exactOptional().openapi({
      deprecated: true,
      'x-immich-history': [
        { version: 'v1', state: 'Added' },
        { version: 'v2', state: 'Stable' },
        { version: 'v3.2.0', state: 'Deprecated' },
      ],
      'x-immich-state': 'Deprecated',
    }),
    withDeleted: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Include deleted assets',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    withExif: z.boolean().exactOptional().openapi({ description: 'Include EXIF data in response' }),
    withPeople: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Include people data in response' }),
    withStacked: z.boolean().exactOptional().openapi({ description: 'Include stacked assets' }),
  })
  .openapi({ required: [] })
  .openapi('RandomSearchDto')

const RatingsResponseSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Whether ratings are enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('RatingsResponse')

const RatingsUpdateSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ description: 'Whether ratings are enabled' }),
  })
  .openapi({ required: [] })
  .openapi('RatingsUpdate')

const ReactionLevelSchema = z
  .enum(['album', 'asset'])
  .openapi({ description: 'Reaction level' })
  .openapi('ReactionLevel')

const RecentlyAddedResponseSchema = z
  .object({
    sidebarWeb: z
      .boolean()
      .openapi({ description: 'Whether the recently added page appears in the web sidebar' }),
  })
  .openapi({ required: ['sidebarWeb'] })
  .openapi('RecentlyAddedResponse')

const RecentlyAddedUpdateSchema = z
  .object({
    sidebarWeb: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the recently added page appears in the web sidebar' }),
  })
  .openapi({ required: [] })
  .openapi('RecentlyAddedUpdate')

const ServerVersionResponseDtoSchema = z
  .object({
    featureLevel: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({
        description:
          'Highest feature level supported by the server, which increments independently of the release version',
        'x-immich-history': [{ version: 'v4.0.0', state: 'Added' }],
      }),
    major: z.int().min(0).max(9007199254740991).openapi({ description: 'Major version number' }),
    minor: z.int().min(0).max(9007199254740991).openapi({ description: 'Minor version number' }),
    patch: z.int().min(0).max(9007199254740991).openapi({ description: 'Patch version number' }),
    prerelease: z
      .int()
      .min(0)
      .max(9007199254740991)
      .nullable()
      .openapi({
        description: 'Pre-release version number',
        'x-immich-history': [{ version: 'v3.0.0', state: 'Added' }],
      }),
  })
  .openapi({ required: ['featureLevel', 'major', 'minor', 'patch', 'prerelease'] })
  .openapi('ServerVersionResponseDto')

const ReleaseTypeSchema = z
  .enum(['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'])
  .openapi('ReleaseType')

const ReleaseEventV1Schema = z
  .object({
    checkedAt: z
      .string()
      .openapi({
        description: 'When the server last checked for a latest version. As an ISO timestamp',
      }),
    isAvailable: z.boolean().openapi({ description: 'Whether a new version is available' }),
    releaseVersion: ServerVersionResponseDtoSchema,
    serverVersion: ServerVersionResponseDtoSchema,
    type: ReleaseTypeSchema.nullable().openapi({ description: 'Release type' }),
  })
  .openapi({ required: ['checkedAt', 'isAvailable', 'releaseVersion', 'serverVersion', 'type'] })
  .openapi('ReleaseEventV1')

const RepositoryCheckImportResponseDtoSchema = z
  .object({ readable: z.boolean() })
  .openapi({ required: ['readable'] })
  .openapi('RepositoryCheckImportResponseDto')

const RepositoryCreateRequestDtoSchema = z
  .object({
    name: z.string(),
    paths: z.array(z.string()).exactOptional(),
    retentionPolicy: RetentionPolicyDtoSchema.nullable().exactOptional(),
    site: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal site code from environment metadata' }),
    worm: z.boolean(),
  })
  .openapi({ required: ['name', 'worm'] })
  .openapi('RepositoryCreateRequestDto')

const RepositoryCreateResponseDtoSchema = z
  .object({ repository: LocalRepositoryDtoSchema })
  .openapi({ required: ['repository'] })
  .openapi('RepositoryCreateResponseDto')

const RepositoryInspectResponseDtoSchema = z
  .object({ repositories: z.array(InspectedLocalRepositoryDtoSchema) })
  .openapi({ required: ['repositories'] })
  .openapi('RepositoryInspectResponseDto')

const RepositoryListResponseDtoSchema = z
  .object({ repositories: z.array(LocalRepositoryDtoSchema) })
  .openapi({ required: ['repositories'] })
  .openapi('RepositoryListResponseDto')

const RepositoryPrimaryBackendReconfigureRequestDtoSchema = z
  .object({ backendId: z.string() })
  .openapi({ required: ['backendId'] })
  .openapi('RepositoryPrimaryBackendReconfigureRequestDto')

const RepositorySnapshotRestoreFromPointRequestDtoSchema = z
  .object({ include: z.array(z.string()).exactOptional(), yuccaConfig: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RepositorySnapshotRestoreFromPointRequestDto')

const RepositorySnapshotRestoreRequestDtoSchema = z
  .object({ include: z.array(z.string()).exactOptional(), target: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RepositorySnapshotRestoreRequestDto')

const RepositorySyncDeletionResponseDtoSchema = z
  .object({
    deleted: z
      .boolean()
      .openapi({
        description: 'Whether the repository was deleted remotely and removed from this server',
      }),
  })
  .openapi({ required: ['deleted'] })
  .openapi('RepositorySyncDeletionResponseDto')

const RepositoryUpdateRequestDtoSchema = z
  .object({
    name: z.string().exactOptional(),
    paths: z.array(z.string()).exactOptional(),
    retentionPolicy: RetentionPolicyDtoSchema.nullable().exactOptional(),
    worm: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RepositoryUpdateRequestDto')

const RepositoryUpdateResponseDtoSchema = z
  .object({ repository: LocalRepositoryDtoSchema })
  .openapi({ required: ['repository'] })
  .openapi('RepositoryUpdateResponseDto')

const ReverseGeocodingStateResponseDtoSchema = z
  .object({
    lastImportFileName: z.string().nullable().openapi({ description: 'Last import file name' }),
    lastUpdate: z.string().nullable().openapi({ description: 'Last update timestamp' }),
  })
  .openapi({ required: ['lastImportFileName', 'lastUpdate'] })
  .openapi('ReverseGeocodingStateResponseDto')

const ScheduleCreateRequestDtoSchema = z
  .object({
    cron: z.string(),
    name: z.string(),
    paused: z.boolean().default(false).exactOptional(),
    repositories: z.array(z.string()),
  })
  .openapi({ required: ['cron', 'name', 'repositories'] })
  .openapi('ScheduleCreateRequestDto')

const ScheduleCreateResponseDtoSchema = z
  .object({ schedule: ScheduleDtoSchema })
  .openapi({ required: ['schedule'] })
  .openapi('ScheduleCreateResponseDto')

const ScheduleListResponseDtoSchema = z
  .object({ schedules: z.array(ScheduleDtoSchema) })
  .openapi({ required: ['schedules'] })
  .openapi('ScheduleListResponseDto')

const ScheduleUpdateRequestDtoSchema = z
  .object({
    cron: z.string().exactOptional(),
    name: z.string().exactOptional(),
    paused: z.boolean().exactOptional(),
    repositories: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScheduleUpdateRequestDto')

const ScheduleUpdateResponseDtoSchema = z
  .object({ schedule: ScheduleDtoSchema })
  .openapi({ required: ['schedule'] })
  .openapi('ScheduleUpdateResponseDto')

const SearchFacetCountResponseDtoSchema = z
  .object({
    count: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Number of assets with this facet value' }),
    value: z.string().openapi({ description: 'Facet value' }),
  })
  .openapi({ required: ['count', 'value'] })
  .openapi('SearchFacetCountResponseDto')

const SearchFacetResponseDtoSchema = z
  .object({
    counts: z.array(SearchFacetCountResponseDtoSchema),
    fieldName: z.string().openapi({ description: 'Facet field name' }),
  })
  .openapi({ required: ['counts', 'fieldName'] })
  .openapi('SearchFacetResponseDto')

const SearchAlbumResponseDtoSchema = z
  .object({
    count: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Number of albums in this page' }),
    facets: z.array(SearchFacetResponseDtoSchema),
    items: z.array(AlbumResponseDtoSchema),
    total: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Total number of matching albums' }),
  })
  .openapi({ required: ['count', 'facets', 'items', 'total'] })
  .openapi('SearchAlbumResponseDto')

const SearchAssetResponseDtoSchema = z
  .object({
    count: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({ description: 'Number of assets in this page' }),
    facets: z.array(SearchFacetResponseDtoSchema),
    items: z.array(AssetResponseDtoSchema),
    nextCursor: z
      .string()
      .nullable()
      .openapi({
        description: 'Cursor for the next page of results',
        'x-immich-history': [{ version: 'v3.2.0', state: 'Added' }],
      }),
    nextPage: z
      .string()
      .nullable()
      .openapi({
        deprecated: true,
        description: 'Next page token',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    total: z
      .int()
      .min(0)
      .max(9007199254740991)
      .openapi({
        description: 'Total number of matching assets',
        'x-immich-history': [{ version: 'v3.0.0', state: 'Deprecated' }],
        'x-immich-state': 'Deprecated',
      }),
  })
  .openapi({ required: ['count', 'facets', 'items', 'nextCursor', 'nextPage', 'total'] })
  .openapi('SearchAssetResponseDto')

const SearchExploreItemSchema = z
  .object({
    data: AssetResponseDtoSchema,
    value: z.string().openapi({ description: 'Explore value' }),
  })
  .openapi({ required: ['data', 'value'] })
  .openapi('SearchExploreItem')

const SearchExploreResponseDtoSchema = z
  .object({
    fieldName: z.string().openapi({ description: 'Explore field name' }),
    items: z.array(SearchExploreItemSchema),
  })
  .openapi({ required: ['fieldName', 'items'] })
  .openapi('SearchExploreResponseDto')

const SearchResponseDtoSchema = z
  .object({ albums: SearchAlbumResponseDtoSchema, assets: SearchAssetResponseDtoSchema })
  .openapi({ required: ['albums', 'assets'] })
  .openapi('SearchResponseDto')

const SearchStatisticsResponseDtoSchema = z
  .object({
    total: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Total number of matching assets' }),
  })
  .openapi({ required: ['total'] })
  .openapi('SearchStatisticsResponseDto')

const SearchSuggestionTypeSchema = z
  .enum(['country', 'state', 'city', 'camera-make', 'camera-model', 'camera-lens-model'])
  .openapi({ description: 'Suggestion type' })
  .openapi('SearchSuggestionType')

const ServerAboutResponseDtoSchema = z
  .object({
    build: z.string().exactOptional().openapi({ description: 'Build identifier' }),
    buildImage: z.string().exactOptional().openapi({ description: 'Build image name' }),
    buildImageUrl: z.string().exactOptional().openapi({ description: 'Build image URL' }),
    buildUrl: z.string().exactOptional().openapi({ description: 'Build URL' }),
    exiftool: z.string().exactOptional().openapi({ description: 'ExifTool version' }),
    ffmpeg: z.string().exactOptional().openapi({ description: 'FFmpeg version' }),
    imagemagick: z.string().exactOptional().openapi({ description: 'ImageMagick version' }),
    libvips: z.string().exactOptional().openapi({ description: 'libvips version' }),
    licensed: z.boolean().openapi({ description: 'Whether the server is licensed' }),
    nodejs: z.string().exactOptional().openapi({ description: 'Node.js version' }),
    repository: z.string().exactOptional().openapi({ description: 'Repository name' }),
    repositoryUrl: z.string().exactOptional().openapi({ description: 'Repository URL' }),
    sourceCommit: z.string().exactOptional().openapi({ description: 'Source commit hash' }),
    sourceRef: z.string().exactOptional().openapi({ description: 'Source reference (branch/tag)' }),
    sourceUrl: z.string().exactOptional().openapi({ description: 'Source URL' }),
    thirdPartyBugFeatureUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Third-party bug/feature URL' }),
    thirdPartyDocumentationUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Third-party documentation URL' }),
    thirdPartySourceUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Third-party source URL' }),
    thirdPartySupportUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Third-party support URL' }),
    version: z.string().openapi({ description: 'Server version' }),
    versionUrl: z.string().openapi({ description: 'URL to version information' }),
  })
  .openapi({ required: ['licensed', 'version', 'versionUrl'] })
  .openapi('ServerAboutResponseDto')

const ServerApkLinksDtoSchema = z
  .object({
    arm64v8a: z.string().openapi({ description: 'APK download link for ARM64 v8a architecture' }),
    armeabiv7a: z
      .string()
      .openapi({ description: 'APK download link for ARM EABI v7a architecture' }),
    universal: z.string().openapi({ description: 'APK download link for universal architecture' }),
    x86_64: z.string().openapi({ description: 'APK download link for x86_64 architecture' }),
  })
  .openapi({ required: ['arm64v8a', 'armeabiv7a', 'universal', 'x86_64'] })
  .openapi('ServerApkLinksDto')

const ServerConfigDtoSchema = z
  .object({
    externalDomain: z.string().openapi({ description: 'External domain URL' }),
    isInitialized: z.boolean().openapi({ description: 'Whether the server has been initialized' }),
    isOnboarded: z.boolean().openapi({ description: 'Whether the admin has completed onboarding' }),
    loginPageMessage: z.string().openapi({ description: 'Login page message' }),
    maintenanceMode: z.boolean().openapi({ description: 'Whether maintenance mode is active' }),
    mapDarkStyleUrl: z.string().openapi({ description: 'Map dark style URL' }),
    mapLightStyleUrl: z.string().openapi({ description: 'Map light style URL' }),
    minFaces: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'People min faces server default' }),
    oauthAccountManagementUrl: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ description: 'OAuth account management URL' }),
    oauthButtonText: z.string().openapi({ description: 'OAuth button text' }),
    publicUsers: z
      .boolean()
      .openapi({ description: 'Whether public user registration is enabled' }),
    trashDays: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of days before trashed assets are permanently deleted' }),
    userDeleteDelay: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Delay in days before deleted users are permanently removed' }),
  })
  .openapi({
    required: [
      'externalDomain',
      'isInitialized',
      'isOnboarded',
      'loginPageMessage',
      'maintenanceMode',
      'mapDarkStyleUrl',
      'mapLightStyleUrl',
      'minFaces',
      'oauthButtonText',
      'publicUsers',
      'trashDays',
      'userDeleteDelay',
    ],
  })
  .openapi('ServerConfigDto')

const ServerFeatureLevelSchema = z
  .union([z.literal(1), z.literal(2)])
  .openapi({ description: 'Server feature level', 'x-enum-varnames': ['FeatureLevel', 'Passkeys'] })
  .openapi('ServerFeatureLevel')

const ServerFeaturesDtoSchema = z
  .object({
    backups: z.boolean().openapi({ description: 'Whether the backups feature is enabled' }),
    configFile: z.boolean().openapi({ description: 'Whether config file is available' }),
    duplicateDetection: z
      .boolean()
      .openapi({ description: 'Whether duplicate detection is enabled' }),
    email: z.boolean().openapi({ description: 'Whether email notifications are enabled' }),
    facialRecognition: z
      .boolean()
      .openapi({ description: 'Whether facial recognition is enabled' }),
    importFaces: z.boolean().openapi({ description: 'Whether face import is enabled' }),
    map: z.boolean().openapi({ description: 'Whether map feature is enabled' }),
    oauth: z.boolean().openapi({ description: 'Whether OAuth is enabled' }),
    oauthAutoLaunch: z.boolean().openapi({ description: 'Whether OAuth auto-launch is enabled' }),
    ocr: z.boolean().openapi({ description: 'Whether OCR is enabled' }),
    passwordLogin: z.boolean().openapi({ description: 'Whether password login is enabled' }),
    realtimeTranscoding: z
      .boolean()
      .openapi({ description: 'Whether real-time transcoding is enabled' }),
    reverseGeocoding: z.boolean().openapi({ description: 'Whether reverse geocoding is enabled' }),
    search: z.boolean().openapi({ description: 'Whether search is enabled' }),
    sidecar: z.boolean().openapi({ description: 'Whether sidecar files are supported' }),
    smartSearch: z.boolean().openapi({ description: 'Whether smart search is enabled' }),
    trash: z.boolean().openapi({ description: 'Whether trash feature is enabled' }),
  })
  .openapi({
    required: [
      'backups',
      'configFile',
      'duplicateDetection',
      'email',
      'facialRecognition',
      'importFaces',
      'map',
      'oauth',
      'oauthAutoLaunch',
      'ocr',
      'passwordLogin',
      'realtimeTranscoding',
      'reverseGeocoding',
      'search',
      'sidecar',
      'smartSearch',
      'trash',
    ],
  })
  .openapi('ServerFeaturesDto')

const ServerMediaTypesResponseDtoSchema = z
  .object({
    image: z.array(z.string()).openapi({ description: 'Supported image MIME types' }),
    sidecar: z.array(z.string()).openapi({ description: 'Supported sidecar MIME types' }),
    video: z.array(z.string()).openapi({ description: 'Supported video MIME types' }),
  })
  .openapi({ required: ['image', 'sidecar', 'video'] })
  .openapi('ServerMediaTypesResponseDto')

const ServerPingResponseSchema = z
  .object({ res: z.string().openapi({ example: 'pong' }) })
  .openapi({ required: ['res'] })
  .openapi('ServerPingResponse')

const UsageByUserDtoSchema = z
  .object({
    photos: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of photos' }),
    quotaSizeInBytes: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'User quota size in bytes (null if unlimited)' }),
    usage: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Total storage usage in bytes' }),
    usagePhotos: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Storage usage for photos in bytes' }),
    usageVideos: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Storage usage for videos in bytes' }),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
    userName: z.string().openapi({ description: 'User name' }),
    videos: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of videos' }),
  })
  .openapi({
    required: [
      'photos',
      'quotaSizeInBytes',
      'usage',
      'usagePhotos',
      'usageVideos',
      'userId',
      'userName',
      'videos',
    ],
  })
  .openapi('UsageByUserDto')

const ServerStatsResponseDtoSchema = z
  .object({
    photos: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Total number of photos' }),
    usage: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Total storage usage in bytes' }),
    usageByUser: z
      .array(UsageByUserDtoSchema)
      .openapi({ description: 'Array of usage for each user' }),
    usagePhotos: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Storage usage for photos in bytes' }),
    usageVideos: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Storage usage for videos in bytes' }),
    videos: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Total number of videos' }),
  })
  .openapi({ required: ['photos', 'usage', 'usageByUser', 'usagePhotos', 'usageVideos', 'videos'] })
  .openapi('ServerStatsResponseDto')

const ServerStorageResponseDtoSchema = z
  .object({
    diskAvailable: z
      .string()
      .openapi({ description: 'Available disk space (human-readable format)' }),
    diskAvailableRaw: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Available disk space in bytes' }),
    diskSize: z.string().openapi({ description: 'Total disk size (human-readable format)' }),
    diskSizeRaw: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Total disk size in bytes' }),
    diskUsagePercentage: z.float64().openapi({ description: 'Disk usage percentage (0-100)' }),
    diskUse: z.string().openapi({ description: 'Used disk space (human-readable format)' }),
    diskUseRaw: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Used disk space in bytes' }),
  })
  .openapi({
    required: [
      'diskAvailable',
      'diskAvailableRaw',
      'diskSize',
      'diskSizeRaw',
      'diskUsagePercentage',
      'diskUse',
      'diskUseRaw',
    ],
  })
  .openapi('ServerStorageResponseDto')

const ServerVersionHistoryResponseDtoSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({
        description: 'When this version was first seen',
        example: '2024-01-01T00:00:00.000Z',
      }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Version history entry ID' }),
    version: z.string().openapi({ description: 'Version string' }),
  })
  .openapi({ required: ['createdAt', 'id', 'version'] })
  .openapi('ServerVersionHistoryResponseDto')

const SessionCreateDtoSchema = z
  .object({
    deviceOS: z.string().exactOptional().openapi({ description: 'Device OS' }),
    deviceType: z.string().exactOptional().openapi({ description: 'Device type' }),
    duration: z
      .int()
      .min(1)
      .max(9007199254740991)
      .exactOptional()
      .openapi({ description: 'Session duration in seconds' }),
  })
  .openapi({ required: [] })
  .openapi('SessionCreateDto')

const SessionCreateResponseDtoSchema = z
  .object({
    appVersion: z.string().nullable().openapi({ description: 'App version' }),
    createdAt: z.string().openapi({ description: 'Creation date' }),
    current: z.boolean().openapi({ description: 'Is current session' }),
    deviceOS: z.string().openapi({ description: 'Device OS' }),
    deviceType: z.string().openapi({ description: 'Device type' }),
    expiresAt: z.string().exactOptional().openapi({ description: 'Expiration date' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Session ID' }),
    isPendingSyncReset: z.boolean().openapi({ description: 'Is pending sync reset' }),
    token: z.string().openapi({ description: 'Session token' }),
    updatedAt: z.string().openapi({ description: 'Last update date' }),
  })
  .openapi({
    required: [
      'appVersion',
      'createdAt',
      'current',
      'deviceOS',
      'deviceType',
      'id',
      'isPendingSyncReset',
      'token',
      'updatedAt',
    ],
  })
  .openapi('SessionCreateResponseDto')

const SessionResponseDtoSchema = z
  .object({
    appVersion: z.string().nullable().openapi({ description: 'App version' }),
    createdAt: z.string().openapi({ description: 'Creation date' }),
    current: z.boolean().openapi({ description: 'Is current session' }),
    deviceOS: z.string().openapi({ description: 'Device OS' }),
    deviceType: z.string().openapi({ description: 'Device type' }),
    expiresAt: z.string().exactOptional().openapi({ description: 'Expiration date' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Session ID' }),
    isPendingSyncReset: z.boolean().openapi({ description: 'Is pending sync reset' }),
    updatedAt: z.string().openapi({ description: 'Last update date' }),
  })
  .openapi({
    required: [
      'appVersion',
      'createdAt',
      'current',
      'deviceOS',
      'deviceType',
      'id',
      'isPendingSyncReset',
      'updatedAt',
    ],
  })
  .openapi('SessionResponseDto')

const SessionUnlockDtoSchema = z
  .object({
    password: z
      .string()
      .exactOptional()
      .openapi({
        description: 'User password (required if PIN code is not provided)',
        example: 'password',
      }),
    pinCode: z
      .string()
      .regex(/^\d{6}$/)
      .exactOptional()
      .openapi({ description: 'New PIN code (4-6 digits)', example: '123456' }),
  })
  .openapi({ required: [] })
  .openapi('SessionUnlockDto')

const SessionUpdateDtoSchema = z
  .object({
    isPendingSyncReset: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Reset pending sync state' }),
  })
  .openapi({ required: [] })
  .openapi('SessionUpdateDto')

const SetMaintenanceModeDtoSchema = z
  .object({
    action: MaintenanceActionSchema,
    restoreBackupFilename: z
      .string()
      .exactOptional()
      .openapi({ description: 'Restore backup filename' }),
    rollbackRepositoryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Rollback repository ID' }),
    rollbackSnapshotId: z.string().exactOptional().openapi({ description: 'Rollback snapshot ID' }),
  })
  .openapi({ required: ['action'] })
  .openapi('SetMaintenanceModeDto')

const SharedLinkTypeSchema = z
  .enum(['ALBUM', 'INDIVIDUAL'])
  .openapi({ description: 'Shared link type' })
  .openapi('SharedLinkType')

const SharedLinkCreateDtoSchema = z
  .object({
    albumId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'Album ID (for album sharing)' }),
    allowDownload: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Allow downloads' }),
    allowUpload: z.boolean().exactOptional().openapi({ description: 'Allow uploads' }),
    assetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .exactOptional()
      .openapi({ description: 'Asset IDs (for individual assets)' }),
    description: z.string().nullable().exactOptional().openapi({ description: 'Link description' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'Expiration date', example: '2024-01-01T00:00:00.000Z' }),
    password: z.string().nullable().exactOptional().openapi({ description: 'Link password' }),
    showMetadata: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Show metadata' }),
    slug: z.string().nullable().exactOptional().openapi({ description: 'Custom URL slug' }),
    type: SharedLinkTypeSchema,
  })
  .openapi({ required: ['type'] })
  .openapi('SharedLinkCreateDto')

const SharedLinkEditDtoSchema = z
  .object({
    allowDownload: z.boolean().exactOptional().openapi({ description: 'Allow downloads' }),
    allowUpload: z.boolean().exactOptional().openapi({ description: 'Allow uploads' }),
    description: z.string().nullable().exactOptional().openapi({ description: 'Link description' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'Expiration date', example: '2024-01-01T00:00:00.000Z' }),
    password: z.string().nullable().exactOptional().openapi({ description: 'Link password' }),
    showMetadata: z.boolean().exactOptional().openapi({ description: 'Show metadata' }),
    slug: z.string().nullable().exactOptional().openapi({ description: 'Custom URL slug' }),
  })
  .openapi({ required: [] })
  .openapi('SharedLinkEditDto')

const SharedLinkLoginDtoSchema = z
  .object({
    password: z.string().openapi({ description: 'Shared link password', example: 'password' }),
  })
  .openapi({ required: ['password'] })
  .openapi('SharedLinkLoginDto')

const SharedLinkResponseDtoSchema = z
  .object({
    album: AlbumResponseDtoSchema.exactOptional(),
    allowDownload: z.boolean().openapi({ description: 'Allow downloads' }),
    allowUpload: z.boolean().openapi({ description: 'Allow uploads' }),
    assets: z.array(AssetResponseDtoSchema),
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    description: z.string().nullable().openapi({ description: 'Link description' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Expiration date', example: '2024-01-01T00:00:00.000Z' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Shared link ID' }),
    key: z.string().openapi({ description: 'Encryption key (base64url)' }),
    password: z.string().nullable().openapi({ description: 'Has password' }),
    showMetadata: z.boolean().openapi({ description: 'Show metadata' }),
    slug: z.string().nullable().openapi({ description: 'Custom URL slug' }),
    type: SharedLinkTypeSchema,
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Owner user ID' }),
  })
  .openapi({
    description: 'Shared link response',
    required: [
      'allowDownload',
      'allowUpload',
      'assets',
      'createdAt',
      'description',
      'expiresAt',
      'id',
      'key',
      'password',
      'showMetadata',
      'slug',
      'type',
      'userId',
    ],
  })
  .openapi('SharedLinkResponseDto')

const SharedLinksResponseSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether shared links are enabled' }),
    sidebarWeb: z.boolean().openapi({ description: 'Whether shared links appear in web sidebar' }),
  })
  .openapi({ required: ['enabled', 'sidebarWeb'] })
  .openapi('SharedLinksResponse')

const SharedLinksUpdateSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether shared links are enabled' }),
    sidebarWeb: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether shared links appear in web sidebar' }),
  })
  .openapi({ required: [] })
  .openapi('SharedLinksUpdate')

const SharingDirectionSchema = z
  .enum(['shared-by', 'shared-with'])
  .openapi({ description: 'Sharing direction' })
  .openapi('SharingDirection')

const SignUpDtoSchema = z
  .object({
    email: z
      .email()
      .regex(
        /^[\p{L}\p{M}\p{N}.!#$%&'*+\/=?^_`{|}~-]+@[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?(?:\.[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?)*$/u,
      )
      .openapi({ description: 'User email', example: 'testuser@email.com' }),
    name: z.string().openapi({ description: 'User name', example: 'Admin' }),
    password: z.string().openapi({ description: 'User password', example: 'password' }),
  })
  .openapi({ required: ['email', 'name', 'password'] })
  .openapi('SignUpDto')

const SmartSearchDtoSchema = z
  .object({
    albumIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by album IDs',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by city name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by country name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    createdAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by creation date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    createdBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by creation date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    filter: SearchFilterSchema.exactOptional().openapi({
      'x-immich-history': [{ version: 'v3.2.0', state: 'Added' }],
    }),
    isEncoded: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by encoded status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isFavorite: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by favorite status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isMotion: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by motion photo status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isNotInAlbum: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter assets not in any album',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isOffline: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by offline status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    language: z.string().exactOptional().openapi({ description: 'Search language code' }),
    lensModel: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by lens model',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    libraryId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Library ID to filter by',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    make: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by camera make',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    model: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by camera model',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    ocr: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by OCR text content',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    page: z
      .int()
      .min(1)
      .max(9007199254740991)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Page number',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    personIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by person IDs',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    query: z.string().exactOptional().openapi({ description: 'Natural language search query' }),
    queryAssetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'Asset ID to use as search reference' }),
    rating: z
      .int()
      .min(1)
      .max(5)
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by rating [1-5], or null for unrated',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          {
            version: 'v2.6.0',
            state: 'Updated',
            description:
              'Using -1 as a rating is deprecated and will be removed in the next major version.',
          },
          {
            version: 'v3',
            state: 'Updated',
            description: 'Using -1 as a rating is no longer valid.',
          },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    size: z
      .int()
      .min(1)
      .max(1000)
      .default(100)
      .exactOptional()
      .openapi({ description: 'Number of results to return' }),
    state: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by state/province name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    tagIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by tag IDs',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    takenAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by taken date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    takenBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by taken date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    trashedAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by trash date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    trashedBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by trash date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    type: AssetTypeEnumSchema.exactOptional().openapi({
      deprecated: true,
      'x-immich-history': [
        { version: 'v1', state: 'Added' },
        { version: 'v2', state: 'Stable' },
        { version: 'v3.2.0', state: 'Deprecated' },
      ],
      'x-immich-state': 'Deprecated',
    }),
    updatedAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by update date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    updatedBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by update date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    visibility: AssetVisibilitySchema.exactOptional().openapi({
      deprecated: true,
      'x-immich-history': [
        { version: 'v1', state: 'Added' },
        { version: 'v2', state: 'Stable' },
        { version: 'v3.2.0', state: 'Deprecated' },
      ],
      'x-immich-state': 'Deprecated',
    }),
    withDeleted: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Include deleted assets',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    withExif: z.boolean().exactOptional().openapi({ description: 'Include EXIF data in response' }),
  })
  .openapi({ required: [] })
  .openapi('SmartSearchDto')

const StackCreateDtoSchema = z
  .object({
    assetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .min(2)
      .openapi({ description: 'Asset IDs (first becomes primary, min 2)' }),
  })
  .openapi({ required: ['assetIds'] })
  .openapi('StackCreateDto')

const StackResponseDtoSchema = z
  .object({
    assets: z.array(AssetResponseDtoSchema),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Stack ID' }),
    primaryAssetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Primary asset ID' }),
  })
  .openapi({ description: 'Stack response', required: ['assets', 'id', 'primaryAssetId'] })
  .openapi('StackResponseDto')

const StackUpdateDtoSchema = z
  .object({
    primaryAssetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'Primary asset ID' }),
  })
  .openapi({ required: [] })
  .openapi('StackUpdateDto')

const StatisticsSearchDtoSchema = z
  .object({
    albumIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by album IDs',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by city name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by country name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    createdAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by creation date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    createdBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by creation date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by description text',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    filter: SearchFilterSchema.exactOptional().openapi({
      'x-immich-history': [{ version: 'v3.2.0', state: 'Added' }],
    }),
    isEncoded: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by encoded status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isFavorite: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by favorite status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isMotion: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by motion photo status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isNotInAlbum: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter assets not in any album',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    isOffline: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by offline status',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    lensModel: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by lens model',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    libraryId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Library ID to filter by',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    make: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by camera make',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    model: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by camera model',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    ocr: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by OCR text content',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    personIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by person IDs',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    rating: z
      .int()
      .min(1)
      .max(5)
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by rating [1-5], or null for unrated',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          {
            version: 'v2.6.0',
            state: 'Updated',
            description:
              'Using -1 as a rating is deprecated and will be removed in the next major version.',
          },
          {
            version: 'v3',
            state: 'Updated',
            description: 'Using -1 as a rating is no longer valid.',
          },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    state: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by state/province name',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    tagIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by tag IDs',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    takenAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by taken date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    takenBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by taken date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    trashedAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by trash date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    trashedBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by trash date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    type: AssetTypeEnumSchema.exactOptional().openapi({
      deprecated: true,
      'x-immich-history': [
        { version: 'v1', state: 'Added' },
        { version: 'v2', state: 'Stable' },
        { version: 'v3.2.0', state: 'Deprecated' },
      ],
      'x-immich-state': 'Deprecated',
    }),
    updatedAfter: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by update date (after)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    updatedBefore: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Filter by update date (before)',
        example: '2024-01-01T00:00:00.000Z',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          { version: 'v3.2.0', state: 'Deprecated' },
        ],
        'x-immich-state': 'Deprecated',
      }),
    visibility: AssetVisibilitySchema.exactOptional().openapi({
      deprecated: true,
      'x-immich-history': [
        { version: 'v1', state: 'Added' },
        { version: 'v2', state: 'Stable' },
        { version: 'v3.2.0', state: 'Deprecated' },
      ],
      'x-immich-state': 'Deprecated',
    }),
  })
  .openapi({ required: [] })
  .openapi('StatisticsSearchDto')

const SupportModeResponseDtoSchema = z
  .object({
    includePaths: z
      .boolean()
      .openapi({ description: 'Send file paths as-is instead of redacted placeholders' }),
    remainingRuns: z
      .int()
      .min(0)
      .max(20)
      .openapi({
        description:
          'How many more backup, cleanup, restore and delete runs use verbose restic logging',
      }),
    streamToFuto: z
      .boolean()
      .openapi({
        description: 'Stream those runs’ logs to FUTO; requires the support-log-streaming feature',
      }),
    streamingAvailable: z
      .boolean()
      .openapi({ description: 'Whether this account may stream support logs to FUTO' }),
  })
  .openapi({ required: ['includePaths', 'remainingRuns', 'streamToFuto', 'streamingAvailable'] })
  .openapi('SupportModeResponseDto')

const SupportModeUpdateRequestDtoSchema = z
  .object({
    includePaths: z
      .boolean()
      .openapi({ description: 'Send file paths as-is instead of redacted placeholders' }),
    remainingRuns: z
      .int()
      .min(0)
      .max(20)
      .openapi({
        description:
          'How many more backup, cleanup, restore and delete runs use verbose restic logging',
      }),
    streamToFuto: z
      .boolean()
      .openapi({
        description: 'Stream those runs’ logs to FUTO; requires the support-log-streaming feature',
      }),
  })
  .openapi({ required: ['includePaths', 'remainingRuns', 'streamToFuto'] })
  .openapi('SupportModeUpdateRequestDto')

const SyncEntityTypeSchema = z
  .enum([
    'AuthUserV1',
    'AuthUserV2',
    'UserV1',
    'UserDeleteV1',
    'AssetV1',
    'AssetV2',
    'AssetDeleteV1',
    'AssetExifV1',
    'AssetEditV1',
    'AssetEditDeleteV1',
    'AssetMetadataV1',
    'AssetMetadataDeleteV1',
    'AssetOcrV1',
    'AssetOcrDeleteV1',
    'PartnerV1',
    'PartnerDeleteV1',
    'PartnerAssetV1',
    'PartnerAssetV2',
    'PartnerAssetBackfillV1',
    'PartnerAssetBackfillV2',
    'PartnerAssetDeleteV1',
    'PartnerAssetExifV1',
    'PartnerAssetExifBackfillV1',
    'PartnerStackBackfillV1',
    'PartnerStackDeleteV1',
    'PartnerStackV1',
    'AlbumV1',
    'AlbumV2',
    'AlbumDeleteV1',
    'AlbumUserV1',
    'AlbumUserBackfillV1',
    'AlbumUserDeleteV1',
    'AlbumAssetCreateV1',
    'AlbumAssetCreateV2',
    'AlbumAssetUpdateV1',
    'AlbumAssetUpdateV2',
    'AlbumAssetBackfillV1',
    'AlbumAssetBackfillV2',
    'AlbumAssetExifCreateV1',
    'AlbumAssetExifUpdateV1',
    'AlbumAssetExifBackfillV1',
    'AlbumToAssetV1',
    'AlbumToAssetDeleteV1',
    'AlbumToAssetBackfillV1',
    'MemoryV1',
    'MemoryV2',
    'MemoryDeleteV1',
    'MemoryToAssetV1',
    'MemoryToAssetV2',
    'MemoryToAssetDeleteV1',
    'StackV1',
    'StackDeleteV1',
    'PersonV1',
    'PersonDeleteV1',
    'AssetFaceV1',
    'AssetFaceV2',
    'AssetFaceV3',
    'AssetFaceDeleteV1',
    'UserMetadataV1',
    'UserMetadataDeleteV1',
    'SyncAckV1',
    'SyncResetV1',
    'SyncCompleteV1',
  ])
  .openapi({ description: 'Sync entity type' })
  .openapi('SyncEntityType')

const SyncAckDeleteDtoSchema = z
  .object({
    types: z
      .array(SyncEntityTypeSchema)
      .exactOptional()
      .openapi({ description: 'Sync entity types to delete acks for' }),
  })
  .openapi({ required: [] })
  .openapi('SyncAckDeleteDto')

const SyncAckDtoSchema = z
  .object({
    ack: z.string().openapi({ description: 'Acknowledgment ID' }),
    type: SyncEntityTypeSchema,
  })
  .openapi({ required: ['ack', 'type'] })
  .openapi('SyncAckDto')

const SyncAckSetDtoSchema = z
  .object({
    acks: z.array(z.string()).max(1000).openapi({ description: 'Acknowledgment IDs (max 1000)' }),
  })
  .openapi({ required: ['acks'] })
  .openapi('SyncAckSetDto')

const SyncAckV1Schema = z.object({}).openapi('SyncAckV1')

const SyncAlbumDeleteV1Schema = z
  .object({
    albumId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Album ID' }),
  })
  .openapi({ required: ['albumId'] })
  .openapi('SyncAlbumDeleteV1')

const SyncAlbumToAssetDeleteV1Schema = z
  .object({
    albumId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Album ID' }),
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
  })
  .openapi({ required: ['albumId', 'assetId'] })
  .openapi('SyncAlbumToAssetDeleteV1')

const SyncAlbumToAssetV1Schema = z
  .object({
    albumId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Album ID' }),
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
  })
  .openapi({ required: ['albumId', 'assetId'] })
  .openapi('SyncAlbumToAssetV1')

const SyncAlbumUserDeleteV1Schema = z
  .object({
    albumId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Album ID' }),
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
  })
  .openapi({ required: ['albumId', 'userId'] })
  .openapi('SyncAlbumUserDeleteV1')

const SyncAlbumUserV1Schema = z
  .object({
    albumId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Album ID' }),
    role: AlbumUserRoleSchema,
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
  })
  .openapi({ required: ['albumId', 'role', 'userId'] })
  .openapi('SyncAlbumUserV1')

const SyncAlbumV1Schema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Created at', example: '2024-01-01T00:00:00.000Z' }),
    description: z.string().openapi({ description: 'Album description' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Album ID' }),
    isActivityEnabled: z.boolean().openapi({ description: 'Is activity enabled' }),
    name: z.string().openapi({ description: 'Album name' }),
    order: AssetOrderSchema,
    ownerId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Owner ID' }),
    thumbnailAssetId: z.string().nullable().openapi({ description: 'Thumbnail asset ID' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Updated at', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({
    required: [
      'createdAt',
      'description',
      'id',
      'isActivityEnabled',
      'name',
      'order',
      'ownerId',
      'thumbnailAssetId',
      'updatedAt',
    ],
  })
  .openapi('SyncAlbumV1')

const SyncAlbumV2Schema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Created at', example: '2024-01-01T00:00:00.000Z' }),
    description: z.string().openapi({ description: 'Album description' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Album ID' }),
    isActivityEnabled: z.boolean().openapi({ description: 'Is activity enabled' }),
    name: z.string().openapi({ description: 'Album name' }),
    order: AssetOrderSchema,
    thumbnailAssetId: z.string().nullable().openapi({ description: 'Thumbnail asset ID' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Updated at', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({
    required: [
      'createdAt',
      'description',
      'id',
      'isActivityEnabled',
      'name',
      'order',
      'thumbnailAssetId',
      'updatedAt',
    ],
  })
  .openapi('SyncAlbumV2')

const SyncAssetDeleteV1Schema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
  })
  .openapi({ required: ['assetId'] })
  .openapi('SyncAssetDeleteV1')

const SyncAssetEditDeleteV1Schema = z
  .object({
    editId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Edit ID' }),
  })
  .openapi({ required: ['editId'] })
  .openapi('SyncAssetEditDeleteV1')

const SyncAssetEditV1Schema = z
  .object({
    action: AssetEditActionSchema,
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Edit ID' }),
    parameters: z.record(z.string(), z.any()).openapi({ description: 'Edit parameters' }),
    sequence: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Edit sequence' }),
  })
  .openapi({ required: ['action', 'assetId', 'id', 'parameters', 'sequence'] })
  .openapi('SyncAssetEditV1')

const SyncAssetExifV1Schema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    city: z.string().nullable().openapi({ description: 'City' }),
    country: z.string().nullable().openapi({ description: 'Country' }),
    dateTimeOriginal: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Date time original', example: '2024-01-01T00:00:00.000Z' }),
    description: z.string().nullable().openapi({ description: 'Description' }),
    exifImageHeight: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Exif image height' }),
    exifImageWidth: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Exif image width' }),
    exposureTime: z.string().nullable().openapi({ description: 'Exposure time' }),
    fNumber: z.float64().nullable().openapi({ description: 'F number' }),
    fileSizeInByte: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'File size in byte' }),
    focalLength: z.float64().nullable().openapi({ description: 'Focal length' }),
    fps: z.float64().nullable().openapi({ description: 'FPS' }),
    iso: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'ISO' }),
    latitude: z.float64().nullable().openapi({ description: 'Latitude' }),
    lensModel: z.string().nullable().openapi({ description: 'Lens model' }),
    longitude: z.float64().nullable().openapi({ description: 'Longitude' }),
    make: z.string().nullable().openapi({ description: 'Make' }),
    model: z.string().nullable().openapi({ description: 'Model' }),
    modifyDate: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Modify date', example: '2024-01-01T00:00:00.000Z' }),
    orientation: z.string().nullable().openapi({ description: 'Orientation' }),
    profileDescription: z.string().nullable().openapi({ description: 'Profile description' }),
    projectionType: z.string().nullable().openapi({ description: 'Projection type' }),
    rating: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Rating' }),
    state: z.string().nullable().openapi({ description: 'State' }),
    timeZone: z.string().nullable().openapi({ description: 'Time zone' }),
  })
  .openapi({
    required: [
      'assetId',
      'city',
      'country',
      'dateTimeOriginal',
      'description',
      'exifImageHeight',
      'exifImageWidth',
      'exposureTime',
      'fNumber',
      'fileSizeInByte',
      'focalLength',
      'fps',
      'iso',
      'latitude',
      'lensModel',
      'longitude',
      'make',
      'model',
      'modifyDate',
      'orientation',
      'profileDescription',
      'projectionType',
      'rating',
      'state',
      'timeZone',
    ],
  })
  .openapi('SyncAssetExifV1')

const SyncAssetFaceDeleteV1Schema = z
  .object({
    assetFaceId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset face ID' }),
  })
  .openapi({ required: ['assetFaceId'] })
  .openapi('SyncAssetFaceDeleteV1')

const SyncAssetFaceV1Schema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    boundingBoxX1: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Bounding box X1' }),
    boundingBoxX2: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Bounding box X2' }),
    boundingBoxY1: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Bounding box Y1' }),
    boundingBoxY2: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Bounding box Y2' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset face ID' }),
    imageHeight: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Image height' }),
    imageWidth: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Image width' }),
    personId: z.string().nullable().openapi({ description: 'Person ID' }),
    sourceType: z.string().openapi({ description: 'Source type' }),
  })
  .openapi({
    required: [
      'assetId',
      'boundingBoxX1',
      'boundingBoxX2',
      'boundingBoxY1',
      'boundingBoxY2',
      'id',
      'imageHeight',
      'imageWidth',
      'personId',
      'sourceType',
    ],
  })
  .openapi('SyncAssetFaceV1')

const SyncAssetFaceV3Schema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    boundingBoxX1: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Bounding box X1' }),
    boundingBoxX2: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Bounding box X2' }),
    boundingBoxY1: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Bounding box Y1' }),
    boundingBoxY2: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Bounding box Y2' }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Face deleted at', example: '2024-01-01T00:00:00.000Z' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset face ID' }),
    imageHeight: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Image height' }),
    imageWidth: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Image width' }),
    isVisible: z.boolean().openapi({ description: 'Is the face visible in the asset' }),
    personId: z.string().nullable().openapi({ description: 'Person ID' }),
    sourceType: z.string().openapi({ description: 'Source type' }),
  })
  .openapi({
    required: [
      'assetId',
      'boundingBoxX1',
      'boundingBoxX2',
      'boundingBoxY1',
      'boundingBoxY2',
      'deletedAt',
      'id',
      'imageHeight',
      'imageWidth',
      'isVisible',
      'personId',
      'sourceType',
    ],
  })
  .openapi('SyncAssetFaceV3')

const SyncAssetMetadataDeleteV1Schema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    key: z.string().openapi({ description: 'Key' }),
  })
  .openapi({ required: ['assetId', 'key'] })
  .openapi('SyncAssetMetadataDeleteV1')

const SyncAssetMetadataV1Schema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    key: z.string().openapi({ description: 'Key' }),
    value: z.record(z.string(), z.any()).openapi({ description: 'Value' }),
  })
  .openapi({ required: ['assetId', 'key', 'value'] })
  .openapi('SyncAssetMetadataV1')

const SyncAssetOcrDeleteV1Schema = z
  .object({
    assetId: z.string().openapi({ description: 'Original asset ID of the deleted OCR entry' }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({
        description: 'Timestamp when the OCR entry was deleted',
        example: '2024-01-01T00:00:00.000Z',
      }),
    id: z.string().openapi({ description: 'Audit row ID of the deleted OCR entry' }),
  })
  .openapi({ required: ['assetId', 'deletedAt', 'id'] })
  .openapi('SyncAssetOcrDeleteV1')

const SyncAssetOcrV1Schema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    boxScore: z.float64().openapi({ description: 'Confidence score of the bounding box' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'OCR entry ID' }),
    isVisible: z.boolean().openapi({ description: 'Whether the OCR entry is visible' }),
    text: z.string().openapi({ description: 'Recognized text content' }),
    textScore: z.float64().openapi({ description: 'Confidence score of the recognized text' }),
    x1: z.float64().openapi({ description: 'Top-left X coordinate (normalized 0–1)' }),
    x2: z.float64().openapi({ description: 'Top-right X coordinate (normalized 0–1)' }),
    x3: z.float64().openapi({ description: 'Bottom-right X coordinate (normalized 0–1)' }),
    x4: z.float64().openapi({ description: 'Bottom-left X coordinate (normalized 0–1)' }),
    y1: z.float64().openapi({ description: 'Top-left Y coordinate (normalized 0–1)' }),
    y2: z.float64().openapi({ description: 'Top-right Y coordinate (normalized 0–1)' }),
    y3: z.float64().openapi({ description: 'Bottom-right Y coordinate (normalized 0–1)' }),
    y4: z.float64().openapi({ description: 'Bottom-left Y coordinate (normalized 0–1)' }),
  })
  .openapi({
    required: [
      'assetId',
      'boxScore',
      'id',
      'isVisible',
      'text',
      'textScore',
      'x1',
      'x2',
      'x3',
      'x4',
      'y1',
      'y2',
      'y3',
      'y4',
    ],
  })
  .openapi('SyncAssetOcrV1')

const SyncAssetV1Schema = z
  .object({
    checksum: z.string().openapi({ description: 'Checksum' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Uploaded to Immich at', example: '2024-01-01T00:00:00.000Z' }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Deleted at', example: '2024-01-01T00:00:00.000Z' }),
    duration: z.string().nullable().openapi({ description: 'Duration' }),
    fileCreatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'File created at', example: '2024-01-01T00:00:00.000Z' }),
    fileModifiedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'File modified at', example: '2024-01-01T00:00:00.000Z' }),
    height: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Asset height' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    isEdited: z.boolean().openapi({ description: 'Is edited' }),
    isFavorite: z.boolean().openapi({ description: 'Is favorite' }),
    libraryId: z.string().nullable().openapi({ description: 'Library ID' }),
    livePhotoVideoId: z.string().nullable().openapi({ description: 'Live photo video ID' }),
    localDateTime: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Local date time', example: '2024-01-01T00:00:00.000Z' }),
    originalFileName: z.string().openapi({ description: 'Original file name' }),
    ownerId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Owner ID' }),
    stackId: z.string().nullable().openapi({ description: 'Stack ID' }),
    thumbhash: z.string().nullable().openapi({ description: 'Thumbhash' }),
    type: AssetTypeEnumSchema,
    visibility: AssetVisibilitySchema,
    width: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Asset width' }),
  })
  .openapi({
    required: [
      'checksum',
      'createdAt',
      'deletedAt',
      'duration',
      'fileCreatedAt',
      'fileModifiedAt',
      'height',
      'id',
      'isEdited',
      'isFavorite',
      'libraryId',
      'livePhotoVideoId',
      'localDateTime',
      'originalFileName',
      'ownerId',
      'stackId',
      'thumbhash',
      'type',
      'visibility',
      'width',
    ],
  })
  .openapi('SyncAssetV1')

const SyncAssetV2Schema = z
  .object({
    checksum: z.string().openapi({ description: 'Checksum' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Uploaded to Immich at', example: '2024-01-01T00:00:00.000Z' }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Deleted at', example: '2024-01-01T00:00:00.000Z' }),
    duration: z.int().min(0).max(2147483647).nullable().openapi({ description: 'Duration' }),
    fileCreatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'File created at', example: '2024-01-01T00:00:00.000Z' }),
    fileModifiedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'File modified at', example: '2024-01-01T00:00:00.000Z' }),
    height: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Asset height' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    isEdited: z.boolean().openapi({ description: 'Is edited' }),
    isFavorite: z.boolean().openapi({ description: 'Is favorite' }),
    libraryId: z.string().nullable().openapi({ description: 'Library ID' }),
    livePhotoVideoId: z.string().nullable().openapi({ description: 'Live photo video ID' }),
    localDateTime: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Local date time', example: '2024-01-01T00:00:00.000Z' }),
    originalFileName: z.string().openapi({ description: 'Original file name' }),
    ownerId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Owner ID' }),
    stackId: z.string().nullable().openapi({ description: 'Stack ID' }),
    thumbhash: z.string().nullable().openapi({ description: 'Thumbhash' }),
    type: AssetTypeEnumSchema,
    visibility: AssetVisibilitySchema,
    width: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Asset width' }),
  })
  .openapi({
    required: [
      'checksum',
      'createdAt',
      'deletedAt',
      'duration',
      'fileCreatedAt',
      'fileModifiedAt',
      'height',
      'id',
      'isEdited',
      'isFavorite',
      'libraryId',
      'livePhotoVideoId',
      'localDateTime',
      'originalFileName',
      'ownerId',
      'stackId',
      'thumbhash',
      'type',
      'visibility',
      'width',
    ],
  })
  .openapi('SyncAssetV2')

const SyncAuthUserV1Schema = z
  .object({
    avatarColor: UserAvatarColorSchema.nullable().exactOptional(),
    deletedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'User deleted at', example: '2024-01-01T00:00:00.000Z' }),
    email: z.string().openapi({ description: 'User email' }),
    hasProfileImage: z.boolean().openapi({ description: 'User has profile image' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
    isAdmin: z.boolean().openapi({ description: 'User is admin' }),
    name: z.string().openapi({ description: 'User name' }),
    oauthId: z.string().openapi({ description: 'User OAuth ID' }),
    pinCode: z.string().nullable().openapi({ description: 'User pin code' }),
    profileChangedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'User profile changed at', example: '2024-01-01T00:00:00.000Z' }),
    quotaSizeInBytes: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Quota size in bytes' }),
    quotaUsageInBytes: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Quota usage in bytes' }),
    storageLabel: z.string().nullable().openapi({ description: 'User storage label' }),
  })
  .openapi({
    required: [
      'deletedAt',
      'email',
      'hasProfileImage',
      'id',
      'isAdmin',
      'name',
      'oauthId',
      'pinCode',
      'profileChangedAt',
      'quotaSizeInBytes',
      'quotaUsageInBytes',
      'storageLabel',
    ],
  })
  .openapi('SyncAuthUserV1')

const SyncAuthUserV2Schema = z
  .object({
    avatarColor: UserAvatarColorSchema.nullable().exactOptional(),
    deletedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'User deleted at', example: '2024-01-01T00:00:00.000Z' }),
    email: z.string().openapi({ description: 'User email' }),
    hasProfileImage: z.boolean().openapi({ description: 'User has profile image' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
    isAdmin: z.boolean().openapi({ description: 'User is admin' }),
    name: z.string().openapi({ description: 'User name' }),
    oauthId: z.string().nullable().openapi({ description: 'User OAuth ID' }),
    pinCode: z.string().nullable().openapi({ description: 'User pin code' }),
    profileChangedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'User profile changed at', example: '2024-01-01T00:00:00.000Z' }),
    quotaSizeInBytes: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Quota size in bytes' }),
    quotaUsageInBytes: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Quota usage in bytes' }),
    storageLabel: z.string().nullable().openapi({ description: 'User storage label' }),
  })
  .openapi({
    required: [
      'deletedAt',
      'email',
      'hasProfileImage',
      'id',
      'isAdmin',
      'name',
      'oauthId',
      'pinCode',
      'profileChangedAt',
      'quotaSizeInBytes',
      'quotaUsageInBytes',
      'storageLabel',
    ],
  })
  .openapi('SyncAuthUserV2')

const SyncCompleteV1Schema = z.object({}).openapi('SyncCompleteV1')

const SyncMemoryAssetDeleteV1Schema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    memoryId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Memory ID' }),
  })
  .openapi({ required: ['assetId', 'memoryId'] })
  .openapi('SyncMemoryAssetDeleteV1')

const SyncMemoryAssetV1Schema = z
  .object({
    assetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Asset ID' }),
    memoryId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Memory ID' }),
  })
  .openapi({ required: ['assetId', 'memoryId'] })
  .openapi('SyncMemoryAssetV1')

const SyncMemoryDeleteV1Schema = z
  .object({
    memoryId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Memory ID' }),
  })
  .openapi({ required: ['memoryId'] })
  .openapi('SyncMemoryDeleteV1')

const SyncMemoryV1Schema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Created at', example: '2024-01-01T00:00:00.000Z' }),
    data: z.record(z.string(), z.any()).openapi({ description: 'Data' }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Deleted at', example: '2024-01-01T00:00:00.000Z' }),
    hideAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Hide at', example: '2024-01-01T00:00:00.000Z' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Memory ID' }),
    isSaved: z.boolean().openapi({ description: 'Is saved' }),
    memoryAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Memory at', example: '2024-01-01T00:00:00.000Z' }),
    ownerId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Owner ID' }),
    seenAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Seen at', example: '2024-01-01T00:00:00.000Z' }),
    showAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Show at', example: '2024-01-01T00:00:00.000Z' }),
    type: MemoryTypeV1Schema,
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Updated at', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({
    required: [
      'createdAt',
      'data',
      'deletedAt',
      'hideAt',
      'id',
      'isSaved',
      'memoryAt',
      'ownerId',
      'seenAt',
      'showAt',
      'type',
      'updatedAt',
    ],
  })
  .openapi('SyncMemoryV1')

const SyncMemoryV2Schema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Created at', example: '2024-01-01T00:00:00.000Z' }),
    data: z.record(z.string(), z.any()).openapi({ description: 'Data' }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Deleted at', example: '2024-01-01T00:00:00.000Z' }),
    hideAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Hide at', example: '2024-01-01T00:00:00.000Z' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Memory ID' }),
    isSaved: z.boolean().openapi({ description: 'Is saved' }),
    memoryAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Memory at', example: '2024-01-01T00:00:00.000Z' }),
    ownerId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Owner ID' }),
    seenAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Seen at', example: '2024-01-01T00:00:00.000Z' }),
    showAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Show at', example: '2024-01-01T00:00:00.000Z' }),
    type: MemoryTypeSchema,
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Updated at', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({
    required: [
      'createdAt',
      'data',
      'deletedAt',
      'hideAt',
      'id',
      'isSaved',
      'memoryAt',
      'ownerId',
      'seenAt',
      'showAt',
      'type',
      'updatedAt',
    ],
  })
  .openapi('SyncMemoryV2')

const SyncPartnerDeleteV1Schema = z
  .object({
    sharedById: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Shared by ID' }),
    sharedWithId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Shared with ID' }),
  })
  .openapi({ required: ['sharedById', 'sharedWithId'] })
  .openapi('SyncPartnerDeleteV1')

const SyncPartnerV1Schema = z
  .object({
    inTimeline: z.boolean().openapi({ description: 'In timeline' }),
    sharedById: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Shared by ID' }),
    sharedWithId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Shared with ID' }),
  })
  .openapi({ required: ['inTimeline', 'sharedById', 'sharedWithId'] })
  .openapi('SyncPartnerV1')

const SyncPersonDeleteV1Schema = z
  .object({
    personId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Person ID' }),
  })
  .openapi({ required: ['personId'] })
  .openapi('SyncPersonDeleteV1')

const SyncPersonV1Schema = z
  .object({
    birthDate: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Birth date', example: '2024-01-01T00:00:00.000Z' }),
    color: z.string().nullable().openapi({ description: 'Color' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Created at', example: '2024-01-01T00:00:00.000Z' }),
    faceAssetId: z.string().nullable().openapi({ description: 'Face asset ID' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Person ID' }),
    isFavorite: z.boolean().openapi({ description: 'Is favorite' }),
    isHidden: z.boolean().openapi({ description: 'Is hidden' }),
    name: z.string().openapi({ description: 'Person name' }),
    ownerId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Owner ID' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Updated at', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({
    required: [
      'birthDate',
      'color',
      'createdAt',
      'faceAssetId',
      'id',
      'isFavorite',
      'isHidden',
      'name',
      'ownerId',
      'updatedAt',
    ],
  })
  .openapi('SyncPersonV1')

const SyncRequestTypeSchema = z
  .enum([
    'AlbumsV1',
    'AlbumsV2',
    'AlbumUsersV1',
    'AlbumToAssetsV1',
    'AlbumAssetsV1',
    'AlbumAssetsV2',
    'AlbumAssetExifsV1',
    'AssetsV1',
    'AssetsV2',
    'AssetExifsV1',
    'AssetEditsV1',
    'AssetMetadataV1',
    'AssetOcrV1',
    'AuthUsersV1',
    'AuthUsersV2',
    'MemoriesV1',
    'MemoriesV2',
    'MemoryToAssetsV1',
    'MemoryToAssetsV2',
    'PartnersV1',
    'PartnerAssetsV1',
    'PartnerAssetsV2',
    'PartnerAssetExifsV1',
    'PartnerStacksV1',
    'StacksV1',
    'UsersV1',
    'PeopleV1',
    'AssetFacesV1',
    'AssetFacesV2',
    'AssetFacesV3',
    'UserMetadataV1',
  ])
  .openapi({ description: 'Sync request type' })
  .openapi('SyncRequestType')

const SyncResetV1Schema = z.object({}).openapi('SyncResetV1')

const SyncStackDeleteV1Schema = z
  .object({
    stackId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Stack ID' }),
  })
  .openapi({ required: ['stackId'] })
  .openapi('SyncStackDeleteV1')

const SyncStackV1Schema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Created at', example: '2024-01-01T00:00:00.000Z' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Stack ID' }),
    ownerId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Owner ID' }),
    primaryAssetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Primary asset ID' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Updated at', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({ required: ['createdAt', 'id', 'ownerId', 'primaryAssetId', 'updatedAt'] })
  .openapi('SyncStackV1')

const SyncStreamDtoSchema = z
  .object({
    reset: z.boolean().exactOptional().openapi({ description: 'Reset sync state' }),
    types: z.array(SyncRequestTypeSchema).openapi({ description: 'Sync request types' }),
  })
  .openapi({ required: ['types'] })
  .openapi('SyncStreamDto')

const SyncUserDeleteV1Schema = z
  .object({
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
  })
  .openapi({ required: ['userId'] })
  .openapi('SyncUserDeleteV1')

const UserMetadataKeySchema = z
  .enum(['preferences', 'license', 'onboarding'])
  .openapi({ description: 'User metadata key' })
  .openapi('UserMetadataKey')

const SyncUserMetadataDeleteV1Schema = z
  .object({
    key: UserMetadataKeySchema,
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
  })
  .openapi({ required: ['key', 'userId'] })
  .openapi('SyncUserMetadataDeleteV1')

const SyncUserMetadataV1Schema = z
  .object({
    key: UserMetadataKeySchema,
    userId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
    value: z.record(z.string(), z.any()).openapi({ description: 'User metadata value' }),
  })
  .openapi({ required: ['key', 'userId', 'value'] })
  .openapi('SyncUserMetadataV1')

const SyncUserV1Schema = z
  .object({
    avatarColor: UserAvatarColorSchema.nullable().exactOptional(),
    deletedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'User deleted at', example: '2024-01-01T00:00:00.000Z' }),
    email: z.string().openapi({ description: 'User email' }),
    hasProfileImage: z.boolean().openapi({ description: 'User has profile image' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
    name: z.string().openapi({ description: 'User name' }),
    profileChangedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'User profile changed at', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({
    required: ['deletedAt', 'email', 'hasProfileImage', 'id', 'name', 'profileChangedAt'],
  })
  .openapi('SyncUserV1')

const SystemConfigTemplateStorageOptionDtoSchema = z
  .object({
    dayOptions: z
      .array(z.string())
      .openapi({ description: 'Available day format options for storage template' }),
    hourOptions: z
      .array(z.string())
      .openapi({ description: 'Available hour format options for storage template' }),
    minuteOptions: z
      .array(z.string())
      .openapi({ description: 'Available minute format options for storage template' }),
    monthOptions: z
      .array(z.string())
      .openapi({ description: 'Available month format options for storage template' }),
    presetOptions: z
      .array(z.string())
      .openapi({ description: 'Available preset template options' }),
    secondOptions: z
      .array(z.string())
      .openapi({ description: 'Available second format options for storage template' }),
    weekOptions: z
      .array(z.string())
      .openapi({ description: 'Available week format options for storage template' }),
    yearOptions: z
      .array(z.string())
      .openapi({ description: 'Available year format options for storage template' }),
  })
  .openapi({
    required: [
      'dayOptions',
      'hourOptions',
      'minuteOptions',
      'monthOptions',
      'presetOptions',
      'secondOptions',
      'weekOptions',
      'yearOptions',
    ],
  })
  .openapi('SystemConfigTemplateStorageOptionDto')

const TagBulkAssetsDtoSchema = z
  .object({
    assetIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Asset IDs' }),
    tagIds: z
      .array(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          ),
      )
      .openapi({ description: 'Tag IDs' }),
  })
  .openapi({ required: ['assetIds', 'tagIds'] })
  .openapi('TagBulkAssetsDto')

const TagBulkAssetsResponseDtoSchema = z
  .object({
    count: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of assets tagged' }),
  })
  .openapi({ required: ['count'] })
  .openapi('TagBulkAssetsResponseDto')

const TagCreateDtoSchema = z
  .object({
    color: z
      .string()
      .regex(/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Tag color (hex)' }),
    name: z
      .string()
      .regex(/^[^\/]*$/)
      .openapi({ description: 'Tag name' }),
    parentId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'Parent tag ID' }),
  })
  .openapi({ required: ['name'] })
  .openapi('TagCreateDto')

const TagUpdateDtoSchema = z
  .object({
    color: z
      .string()
      .regex(/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Tag color (hex)' }),
    name: z
      .string()
      .regex(/^[^\/]*$/)
      .exactOptional()
      .openapi({ description: 'Tag name' }),
  })
  .openapi({ required: [] })
  .openapi('TagUpdateDto')

const TagUpsertDtoSchema = z
  .object({ tags: z.array(z.string()).openapi({ description: 'Tag names to upsert' }) })
  .openapi({ required: ['tags'] })
  .openapi('TagUpsertDto')

const TagsResponseSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether tags are enabled' }),
    sidebarWeb: z.boolean().openapi({ description: 'Whether tags appear in web sidebar' }),
  })
  .openapi({ required: ['enabled', 'sidebarWeb'] })
  .openapi('TagsResponse')

const TagsUpdateSchema = z
  .object({
    enabled: z.boolean().exactOptional().openapi({ description: 'Whether tags are enabled' }),
    sidebarWeb: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether tags appear in web sidebar' }),
  })
  .openapi({ required: [] })
  .openapi('TagsUpdate')

const TemplateDtoSchema = z
  .object({ template: z.string().openapi({ description: 'Template name' }) })
  .openapi({ required: ['template'] })
  .openapi('TemplateDto')

const TemplateResponseDtoSchema = z
  .object({
    html: z.string().openapi({ description: 'Template HTML content' }),
    name: z.string().openapi({ description: 'Template name' }),
  })
  .openapi({ required: ['html', 'name'] })
  .openapi('TemplateResponseDto')

const TestEmailResponseDtoSchema = z
  .object({ messageId: z.string().openapi({ description: 'Email message ID' }) })
  .openapi({ required: ['messageId'] })
  .openapi('TestEmailResponseDto')

const TicketActionSchema = z
  .enum(['repository.delete', 'repository.disable-worm'])
  .openapi('TicketAction')

const TicketCreateRequestDtoSchema = z
  .object({
    action: TicketActionSchema,
    repositoryId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      )
      .openapi({ description: 'Repository the ticket is bound to' }),
  })
  .openapi({ required: ['action', 'repositoryId'] })
  .openapi('TicketCreateRequestDto')

const TicketCreateResponseDtoSchema = z
  .object({
    redirectTo: z
      .string()
      .openapi({ description: 'Identity provider URL the browser must be sent to' }),
  })
  .openapi({ required: ['redirectTo'] })
  .openapi('TicketCreateResponseDto')

const TimeBucketAssetResponseDtoSchema = z
  .object({
    city: z
      .array(z.string().nullable())
      .exactOptional()
      .openapi({ description: 'Array of city names extracted from EXIF GPS data' }),
    country: z
      .array(z.string().nullable())
      .exactOptional()
      .openapi({ description: 'Array of country names extracted from EXIF GPS data' }),
    createdAt: z
      .array(z.string())
      .openapi({
        description: 'Array of UTC timestamps when each asset was originally uploaded to Immich',
      }),
    duration: z
      .array(z.int().min(0).max(2147483647).nullable())
      .openapi({
        description: 'Array of video/gif durations in milliseconds (null for static images)',
      }),
    fileCreatedAt: z
      .array(z.string())
      .openapi({ description: 'Array of file creation timestamps in UTC' }),
    id: z.array(z.string()).openapi({ description: 'Array of asset IDs in the time bucket' }),
    isFavorite: z
      .array(z.boolean())
      .openapi({ description: 'Array indicating whether each asset is favorited' }),
    isImage: z
      .array(z.boolean())
      .openapi({
        description: 'Array indicating whether each asset is an image (false for videos)',
      }),
    isTrashed: z
      .array(z.boolean())
      .openapi({ description: 'Array indicating whether each asset is in the trash' }),
    latitude: z
      .array(z.float64().nullable())
      .exactOptional()
      .openapi({ description: 'Array of latitude coordinates extracted from EXIF GPS data' }),
    livePhotoVideoId: z
      .array(z.string().nullable())
      .openapi({ description: 'Array of live photo video asset IDs (null for non-live photos)' }),
    localOffsetHours: z
      .array(z.float64())
      .openapi({
        description:
          "Array of UTC offset hours at the time each photo was taken. Positive values are east of UTC, negative values are west of UTC. Values may be fractional (e.g., 5.5 for +05:30, -9.75 for -09:45). Applying this offset to 'fileCreatedAt' will give you the time the photo was taken from the photographer's perspective.",
      }),
    longitude: z
      .array(z.float64().nullable())
      .exactOptional()
      .openapi({ description: 'Array of longitude coordinates extracted from EXIF GPS data' }),
    ownerId: z.array(z.string()).openapi({ description: 'Array of owner IDs for each asset' }),
    projectionType: z
      .array(z.string().nullable())
      .openapi({
        description:
          'Array of projection types for 360° content (e.g., "EQUIRECTANGULAR", "CUBEFACE", "CYLINDRICAL")',
      }),
    ratio: z
      .array(z.float64())
      .openapi({ description: 'Array of aspect ratios (width/height) for each asset' }),
    stack: z
      .array(z.array(z.string()).length(2).nullable())
      .exactOptional()
      .openapi({
        description:
          'Array of stack information as [stackId, assetCount] tuples (null for non-stacked assets)',
      }),
    thumbhash: z
      .array(z.string().nullable())
      .openapi({
        description: 'Array of BlurHash strings for generating asset previews (base64 encoded)',
      }),
    visibility: z
      .array(AssetVisibilitySchema)
      .openapi({
        description:
          'Array of visibility statuses for each asset (e.g., ARCHIVE, TIMELINE, HIDDEN, LOCKED)',
      }),
  })
  .openapi({
    required: [
      'createdAt',
      'duration',
      'fileCreatedAt',
      'id',
      'isFavorite',
      'isImage',
      'isTrashed',
      'livePhotoVideoId',
      'localOffsetHours',
      'ownerId',
      'projectionType',
      'ratio',
      'thumbhash',
      'visibility',
    ],
  })
  .openapi('TimeBucketAssetResponseDto')

const TimeBucketsResponseDtoSchema = z
  .object({
    count: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of assets in this time bucket', example: 42 }),
    timeBucket: z
      .string()
      .openapi({
        description:
          'Time bucket identifier in YYYY-MM-DD format representing the start of the time period',
        example: '2024-01-01',
      }),
  })
  .openapi({ required: ['count', 'timeBucket'] })
  .openapi('TimeBucketsResponseDto')

const TrashResponseDtoSchema = z
  .object({
    count: z
      .int()
      .min(-9007199254740991)
      .max(9007199254740991)
      .openapi({ description: 'Number of items in trash' }),
  })
  .openapi({ required: ['count'] })
  .openapi('TrashResponseDto')

const UpdateAlbumDtoSchema = z
  .object({
    albumName: z.string().exactOptional().openapi({ description: 'Album name' }),
    albumThumbnailAssetId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .exactOptional()
      .openapi({ description: 'Album thumbnail asset ID' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Album description',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          {
            version: 'v3',
            state: 'Updated',
            description:
              'Sending an empty string is deprecated; send null instead. Empty strings will no longer be coerced to null in v4.',
          },
        ],
      }),
    isActivityEnabled: z.boolean().exactOptional().openapi({ description: 'Enable activity feed' }),
    order: AssetOrderSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAlbumDto')

const UpdateAlbumUserDtoSchema = z
  .object({ role: AlbumUserRoleSchema })
  .openapi({ required: ['role'] })
  .openapi('UpdateAlbumUserDto')

const UpdateAssetDtoSchema = z
  .object({
    dateTimeOriginal: z.string().exactOptional().openapi({ description: 'Original date and time' }),
    description: z.string().exactOptional().openapi({ description: 'Asset description' }),
    isFavorite: z.boolean().exactOptional().openapi({ description: 'Mark as favorite' }),
    latitude: z
      .float64()
      .min(-90)
      .max(90)
      .exactOptional()
      .openapi({ description: 'Latitude coordinate' }),
    livePhotoVideoId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .nullable()
      .exactOptional()
      .openapi({ description: 'Live photo video ID' }),
    longitude: z
      .float64()
      .min(-180)
      .max(180)
      .exactOptional()
      .openapi({ description: 'Longitude coordinate' }),
    rating: z
      .int()
      .min(-1)
      .max(5)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Rating in range [1-5] (starred), -1 (rejected), or null (unrated)',
        'x-immich-history': [
          { version: 'v1', state: 'Added' },
          { version: 'v2', state: 'Stable' },
          {
            version: 'v3',
            state: 'Updated',
            description: 'Using 0 as a rating is no longer valid.',
          },
        ],
        'x-immich-state': 'Stable',
      }),
    visibility: AssetVisibilitySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAssetDto')

const UpdateLibraryDtoSchema = z
  .object({
    exclusionPatterns: z
      .array(z.string())
      .max(128)
      .exactOptional()
      .openapi({ description: 'Exclusion patterns (max 128)' }),
    importPaths: z
      .array(z.string())
      .max(128)
      .exactOptional()
      .openapi({ description: 'Import paths (max 128)' }),
    name: z.string().min(1).exactOptional().openapi({ description: 'Library name' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateLibraryDto')

const UserAdminCreateDtoSchema = z
  .object({
    avatarColor: UserAvatarColorSchema.nullable().exactOptional(),
    email: z
      .email()
      .regex(
        /^[\p{L}\p{M}\p{N}.!#$%&'*+\/=?^_`{|}~-]+@[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?(?:\.[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?)*$/u,
      )
      .openapi({ description: 'User email' }),
    isAdmin: z.boolean().exactOptional().openapi({ description: 'Grant admin privileges' }),
    name: z.string().openapi({ description: 'User name' }),
    notify: z.boolean().exactOptional().openapi({ description: 'Send notification email' }),
    password: z.string().openapi({ description: 'User password' }),
    pinCode: z
      .string()
      .regex(/^\d{6}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'PIN code', example: '123456' }),
    quotaSizeInBytes: z
      .int()
      .min(0)
      .max(9007199254740991)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Storage quota in bytes' }),
    shouldChangePassword: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Require password change on next login' }),
    storageLabel: z.string().nullable().exactOptional().openapi({ description: 'Storage label' }),
  })
  .openapi({ required: ['email', 'name', 'password'] })
  .openapi('UserAdminCreateDto')

const UserAdminDeleteDtoSchema = z
  .object({
    force: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Force delete even if user has assets' }),
  })
  .openapi({ required: [] })
  .openapi('UserAdminDeleteDto')

const UserStatusSchema = z
  .enum(['active', 'removing', 'deleted'])
  .openapi({ description: 'User status' })
  .openapi('UserStatus')

const UserAdminResponseDtoSchema = z
  .object({
    avatarColor: UserAvatarColorSchema,
    clusterGroupId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({
        description: 'Cluster group the user is a member of',
        'x-immich-history': [{ version: 'v3.2.0', state: 'Added' }],
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Creation date', example: '2024-01-01T00:00:00.000Z' }),
    deletedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .nullable()
      .openapi({ description: 'Deletion date', example: '2024-01-01T00:00:00.000Z' }),
    email: z
      .email()
      .regex(
        /^[\p{L}\p{M}\p{N}.!#$%&'*+\/=?^_`{|}~-]+@[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?(?:\.[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?)*$/u,
      )
      .openapi({ description: 'User email' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'User ID' }),
    isAdmin: z.boolean().openapi({ description: 'Is admin user' }),
    license: UserLicenseSchema.nullable(),
    name: z.string().openapi({ description: 'User name' }),
    oauthId: z.string().openapi({ description: 'OAuth ID' }),
    profileChangedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Profile change date' }),
    profileImagePath: z.string().openapi({ description: 'Profile image path' }),
    quotaSizeInBytes: z
      .int()
      .min(0)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Storage quota in bytes' }),
    quotaUsageInBytes: z
      .int()
      .min(0)
      .max(9007199254740991)
      .nullable()
      .openapi({ description: 'Storage usage in bytes' }),
    shouldChangePassword: z
      .boolean()
      .openapi({ description: 'Require password change on next login' }),
    status: UserStatusSchema,
    storageLabel: z.string().nullable().openapi({ description: 'Storage label' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Last update date', example: '2024-01-01T00:00:00.000Z' }),
  })
  .openapi({
    required: [
      'avatarColor',
      'clusterGroupId',
      'createdAt',
      'deletedAt',
      'email',
      'id',
      'isAdmin',
      'license',
      'name',
      'oauthId',
      'profileChangedAt',
      'profileImagePath',
      'quotaSizeInBytes',
      'quotaUsageInBytes',
      'shouldChangePassword',
      'status',
      'storageLabel',
      'updatedAt',
    ],
  })
  .openapi('UserAdminResponseDto')

const UserAdminUpdateDtoSchema = z
  .object({
    avatarColor: UserAvatarColorSchema.nullable().exactOptional(),
    email: z
      .email()
      .regex(
        /^[\p{L}\p{M}\p{N}.!#$%&'*+\/=?^_`{|}~-]+@[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?(?:\.[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?)*$/u,
      )
      .exactOptional()
      .openapi({ description: 'User email' }),
    isAdmin: z.boolean().exactOptional().openapi({ description: 'Grant admin privileges' }),
    name: z.string().exactOptional().openapi({ description: 'User name' }),
    password: z.string().exactOptional().openapi({ description: 'User password' }),
    pinCode: z
      .string()
      .regex(/^\d{6}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'PIN code', example: '123456' }),
    quotaSizeInBytes: z
      .int()
      .min(0)
      .max(9007199254740991)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Storage quota in bytes' }),
    shouldChangePassword: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Require password change on next login' }),
    storageLabel: z.string().nullable().exactOptional().openapi({ description: 'Storage label' }),
  })
  .openapi({ required: [] })
  .openapi('UserAdminUpdateDto')

const UserConfigClipDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Whether the task is enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('UserConfigClipDto')

const UserConfigFFmpegRealtimeDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Enable real-time HLS transcoding (alpha)' }),
    resolutions: z
      .array(HlsVideoResolutionSchema)
      .openapi({ description: 'Resolutions to use for real-time HLS transcoding' }),
    videoCodecs: z
      .array(VideoCodecSchema)
      .openapi({ description: 'Video codecs to use for real-time HLS transcoding' }),
  })
  .openapi({ required: ['enabled', 'resolutions', 'videoCodecs'] })
  .openapi('UserConfigFFmpegRealtimeDto')

const UserConfigFFmpegDtoSchema = z
  .object({ realtime: UserConfigFFmpegRealtimeDtoSchema })
  .openapi({ required: ['realtime'] })
  .openapi('UserConfigFFmpegDto')

const UserConfigGeneratedFullsizeImageDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('UserConfigGeneratedFullsizeImageDto')

const UserConfigGeneratedImageDtoSchema = z
  .object({ size: z.int().min(1).max(9007199254740991).openapi({ description: 'Size' }) })
  .openapi({ required: ['size'] })
  .openapi('UserConfigGeneratedImageDto')

const UserConfigImageDtoSchema = z
  .object({
    fullsize: UserConfigGeneratedFullsizeImageDtoSchema,
    preview: UserConfigGeneratedImageDtoSchema,
    thumbnail: UserConfigGeneratedImageDtoSchema,
  })
  .openapi({ required: ['fullsize', 'preview', 'thumbnail'] })
  .openapi('UserConfigImageDto')

const UserConfigDuplicateDetectionDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Whether the task is enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('UserConfigDuplicateDetectionDto')

const UserConfigFacialRecognitionDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether the task is enabled' }),
    minFaces: z
      .int()
      .min(1)
      .max(9007199254740991)
      .openapi({ description: 'Minimum number of faces required for recognition' }),
  })
  .openapi({ required: ['enabled', 'minFaces'] })
  .openapi('UserConfigFacialRecognitionDto')

const UserConfigOcrDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Whether the task is enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('UserConfigOcrDto')

const UserConfigMachineLearningDtoSchema = z
  .object({
    clip: UserConfigClipDtoSchema,
    duplicateDetection: UserConfigDuplicateDetectionDtoSchema,
    enabled: z.boolean().openapi({ description: 'Enabled' }),
    facialRecognition: UserConfigFacialRecognitionDtoSchema,
    ocr: UserConfigOcrDtoSchema,
  })
  .openapi({ required: ['clip', 'duplicateDetection', 'enabled', 'facialRecognition', 'ocr'] })
  .openapi('UserConfigMachineLearningDto')

const UserConfigMapDtoSchema = z
  .object({
    darkStyle: z.url().openapi({ description: 'Dark map style URL' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
    lightStyle: z.url().openapi({ description: 'Light map style URL' }),
  })
  .openapi({ required: ['darkStyle', 'enabled', 'lightStyle'] })
  .openapi('UserConfigMapDto')

const UserConfigSmtpDtoSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether SMTP email notifications are enabled' }),
  })
  .openapi({ required: ['enabled'] })
  .openapi('UserConfigSmtpDto')

const UserConfigNotificationsDtoSchema = z
  .object({ smtp: UserConfigSmtpDtoSchema })
  .openapi({ required: ['smtp'] })
  .openapi('UserConfigNotificationsDto')

const UserConfigOAuthDtoSchema = z
  .object({
    accountManagementUrl: z
      .string()
      .default('')
      .exactOptional()
      .openapi({ description: 'Account management URL' }),
    autoLaunch: z.boolean().openapi({ description: 'Auto launch' }),
    buttonText: z.string().openapi({ description: 'Button text' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
  })
  .openapi({ required: ['autoLaunch', 'buttonText', 'enabled'] })
  .openapi('UserConfigOAuthDto')

const UserConfigPasskeyDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('UserConfigPasskeyDto')

const UserConfigPasswordLoginDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('UserConfigPasswordLoginDto')

const UserConfigReverseGeocodingDtoSchema = z
  .object({ enabled: z.boolean().openapi({ description: 'Enabled' }) })
  .openapi({ required: ['enabled'] })
  .openapi('UserConfigReverseGeocodingDto')

const UserConfigServerDtoSchema = z
  .object({
    externalDomain: z.string().openapi({ description: 'External domain' }),
    loginPageMessage: z.string().openapi({ description: 'Login page message' }),
    publicUsers: z.boolean().openapi({ description: 'Public users' }),
  })
  .openapi({ required: ['externalDomain', 'loginPageMessage', 'publicUsers'] })
  .openapi('UserConfigServerDto')

const UserConfigTrashDtoSchema = z
  .object({
    days: z.int().min(0).max(9007199254740991).openapi({ description: 'Days' }),
    enabled: z.boolean().openapi({ description: 'Enabled' }),
  })
  .openapi({ required: ['days', 'enabled'] })
  .openapi('UserConfigTrashDto')

const UserConfigUserDtoSchema = z
  .object({
    deleteDelay: z.int().min(1).max(9007199254740991).openapi({ description: 'Delete delay' }),
  })
  .openapi({ required: ['deleteDelay'] })
  .openapi('UserConfigUserDto')

const UserConfigDtoSchema = z
  .object({
    ffmpeg: UserConfigFFmpegDtoSchema,
    image: UserConfigImageDtoSchema,
    machineLearning: UserConfigMachineLearningDtoSchema,
    map: UserConfigMapDtoSchema,
    notifications: UserConfigNotificationsDtoSchema,
    oauth: UserConfigOAuthDtoSchema,
    passkey: UserConfigPasskeyDtoSchema,
    passwordLogin: UserConfigPasswordLoginDtoSchema,
    reverseGeocoding: UserConfigReverseGeocodingDtoSchema,
    server: UserConfigServerDtoSchema,
    trash: UserConfigTrashDtoSchema,
    user: UserConfigUserDtoSchema,
  })
  .openapi({
    description: 'Configuration properties that are visible to a logged user',
    required: [
      'ffmpeg',
      'image',
      'machineLearning',
      'map',
      'notifications',
      'oauth',
      'passkey',
      'passwordLogin',
      'reverseGeocoding',
      'server',
      'trash',
      'user',
    ],
  })
  .openapi('UserConfigDto')

const UserPreferencesResponseDtoSchema = z
  .object({
    albums: AlbumsResponseSchema,
    cast: CastResponseSchema,
    download: DownloadResponseSchema,
    emailNotifications: EmailNotificationsResponseSchema,
    folders: FoldersResponseSchema,
    memories: MemoriesResponseSchema,
    people: PeopleResponseSchema,
    purchase: PurchaseResponseSchema,
    ratings: RatingsResponseSchema,
    recentlyAdded: RecentlyAddedResponseSchema,
    sharedLinks: SharedLinksResponseSchema,
    tags: TagsResponseSchema,
  })
  .openapi({
    required: [
      'albums',
      'cast',
      'download',
      'emailNotifications',
      'folders',
      'memories',
      'people',
      'purchase',
      'ratings',
      'recentlyAdded',
      'sharedLinks',
      'tags',
    ],
  })
  .openapi('UserPreferencesResponseDto')

const UserPreferencesUpdateDtoSchema = z
  .object({
    albums: AlbumsUpdateSchema.exactOptional(),
    avatar: AvatarUpdateSchema.exactOptional(),
    cast: CastUpdateSchema.exactOptional(),
    download: DownloadUpdateSchema.exactOptional(),
    emailNotifications: EmailNotificationsUpdateSchema.exactOptional(),
    folders: FoldersUpdateSchema.exactOptional(),
    memories: MemoriesUpdateSchema.exactOptional(),
    people: PeopleUpdateSchema.exactOptional(),
    purchase: PurchaseUpdateSchema.exactOptional(),
    ratings: RatingsUpdateSchema.exactOptional(),
    recentlyAdded: RecentlyAddedUpdateSchema.exactOptional(),
    sharedLinks: SharedLinksUpdateSchema.exactOptional(),
    tags: TagsUpdateSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserPreferencesUpdateDto')

const UserUpdateMeDtoSchema = z
  .object({
    avatarColor: UserAvatarColorSchema.nullable().exactOptional(),
    email: z
      .email()
      .regex(
        /^[\p{L}\p{M}\p{N}.!#$%&'*+\/=?^_`{|}~-]+@[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?(?:\.[\p{L}\p{N}](?:[\p{L}\p{M}\p{N}-]{0,61}[\p{L}\p{M}\p{N}])?)*$/u,
      )
      .exactOptional()
      .openapi({ description: 'User email' }),
    name: z.string().exactOptional().openapi({ description: 'User name' }),
  })
  .openapi({ required: [] })
  .openapi('UserUpdateMeDto')

const ValidateAccessTokenResponseDtoSchema = z
  .object({ authStatus: z.boolean().openapi({ description: 'Authentication status' }) })
  .openapi({ required: ['authStatus'] })
  .openapi('ValidateAccessTokenResponseDto')

const ValidateLibraryDtoSchema = z
  .object({
    exclusionPatterns: z
      .array(z.string())
      .max(128)
      .exactOptional()
      .openapi({ description: 'Exclusion patterns (max 128)' }),
    importPaths: z
      .array(z.string())
      .max(128)
      .exactOptional()
      .openapi({ description: 'Import paths to validate (max 128)' }),
  })
  .openapi({ required: [] })
  .openapi('ValidateLibraryDto')

const ValidateLibraryImportPathResponseDtoSchema = z
  .object({
    importPath: z.string().openapi({ description: 'Import path' }),
    isValid: z.boolean().openapi({ description: 'Is valid' }),
    message: z.string().exactOptional().openapi({ description: 'Validation message' }),
  })
  .openapi({ required: ['importPath', 'isValid'] })
  .openapi('ValidateLibraryImportPathResponseDto')

const ValidateLibraryResponseDtoSchema = z
  .object({
    importPaths: z
      .array(ValidateLibraryImportPathResponseDtoSchema)
      .exactOptional()
      .openapi({ description: 'Validation results for import paths' }),
  })
  .openapi({ required: [] })
  .openapi('ValidateLibraryResponseDto')

const VersionCheckStateResponseDtoSchema = z
  .object({
    checkedAt: z.string().nullable().openapi({ description: 'Last check timestamp' }),
    releaseVersion: z.string().nullable().openapi({ description: 'Release version' }),
  })
  .openapi({ required: ['checkedAt', 'releaseVersion'] })
  .openapi('VersionCheckStateResponseDto')

const WorkflowStepDtoSchema = z
  .object({
    config: z.record(z.string(), z.any()).nullable().openapi({ description: 'Step configuration' }),
    enabled: z.boolean().exactOptional().openapi({ description: 'Step is enabled' }),
    method: z.string().openapi({ description: 'Step plugin method' }),
  })
  .openapi({ required: ['config', 'method'] })
  .openapi('WorkflowStepDto')

const WorkflowCreateDtoSchema = z
  .object({
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Workflow description' }),
    enabled: z.boolean().exactOptional().openapi({ description: 'Workflow enabled' }),
    logging: z.boolean().exactOptional().openapi({ description: 'Workflow logs run results' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Workflow name' }),
    steps: z.array(WorkflowStepDtoSchema).exactOptional(),
    trigger: WorkflowTriggerSchema.openapi({ description: 'Workflow trigger type' }),
  })
  .openapi({ required: ['trigger'] })
  .openapi('WorkflowCreateDto')

const WorkflowResultSchema = z
  .enum(['completed', 'halted', 'error'])
  .openapi({ description: 'Workflow run result' })
  .openapi('WorkflowResult')

const WorkflowLogEntryDtoSchema = z
  .object({
    at: z.iso
      .datetime({ offset: true })
      .regex(
        /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
      )
      .openapi({ description: 'Workflow run date/time', example: '2024-01-01T00:00:00.000Z' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Workflow log entry ID' }),
    lastStep: z
      .object({
        index: z
          .int()
          .positive()
          .max(9007199254740991)
          .openapi({ description: 'Index of the step in the workflow' }),
        method: z.string().openapi({ description: 'Method of the step' }),
      })
      .exactOptional()
      .openapi({
        description: 'Last step ran, if the workflow ended early',
        required: ['method', 'index'],
      }),
    result: WorkflowResultSchema,
    triggerDataId: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
      )
      .exactOptional()
      .openapi({ description: 'Workflow trigger data ID' }),
  })
  .openapi({ required: ['at', 'id', 'result'] })
  .openapi('WorkflowLogEntryDto')

const WorkflowResponseDtoSchema = z
  .object({
    createdAt: z.string().openapi({ description: 'Creation date' }),
    description: z.string().nullable().openapi({ description: 'Workflow description' }),
    enabled: z.boolean().openapi({ description: 'Workflow enabled' }),
    id: z
      .uuid()
      .regex(
        /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
      )
      .openapi({ description: 'Workflow ID' }),
    logging: z.boolean().openapi({ description: 'Workflow logs run results' }),
    name: z.string().nullable().openapi({ description: 'Workflow name' }),
    steps: z.array(WorkflowStepDtoSchema).openapi({ description: 'Workflow steps' }),
    trigger: WorkflowTriggerSchema.openapi({ description: 'Workflow trigger type' }),
    updatedAt: z.string().openapi({ description: 'Update date' }),
  })
  .openapi({
    required: [
      'createdAt',
      'description',
      'enabled',
      'id',
      'logging',
      'name',
      'steps',
      'trigger',
      'updatedAt',
    ],
  })
  .openapi('WorkflowResponseDto')

const WorkflowShareStepDtoSchema = z
  .object({
    config: z.record(z.string(), z.any()).nullable().openapi({ description: 'Step configuration' }),
    enabled: z.boolean().exactOptional().openapi({ description: 'Step is enabled' }),
    method: z.string().openapi({ description: 'Step plugin method' }),
  })
  .openapi({ required: ['config', 'method'] })
  .openapi('WorkflowShareStepDto')

const WorkflowShareResponseDtoSchema = z
  .object({
    description: z.string().nullable().openapi({ description: 'Workflow description' }),
    name: z.string().nullable().openapi({ description: 'Workflow name' }),
    steps: z.array(WorkflowShareStepDtoSchema).openapi({ description: 'Workflow steps' }),
    trigger: WorkflowTriggerSchema.openapi({ description: 'Workflow trigger type' }),
  })
  .openapi({ required: ['description', 'name', 'steps', 'trigger'] })
  .openapi('WorkflowShareResponseDto')

const WorkflowTriggerResponseDtoSchema = z
  .object({
    trigger: WorkflowTriggerSchema.openapi({ description: 'Trigger type' }),
    types: z.array(WorkflowTypeSchema).openapi({ description: 'Workflow types' }),
  })
  .openapi({ required: ['trigger', 'types'] })
  .openapi('WorkflowTriggerResponseDto')

const WorkflowUpdateDtoSchema = z
  .object({
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Workflow description' }),
    enabled: z.boolean().exactOptional().openapi({ description: 'Workflow enabled' }),
    logging: z.boolean().exactOptional().openapi({ description: 'Workflow logs run results' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Workflow name' }),
    steps: z.array(WorkflowStepDtoSchema).exactOptional(),
    trigger: WorkflowTriggerSchema.exactOptional().openapi({
      description: 'Workflow trigger type',
    }),
  })
  .openapi({ required: [] })
  .openapi('WorkflowUpdateDto')

const BearerSecurityScheme = { scheme: 'Bearer', bearerFormat: 'JWT', type: 'http', in: 'header' }

const CookieSecurityScheme = { type: 'apiKey', in: 'cookie', name: 'immich_access_token' }

const ApiKeySecurityScheme = { type: 'apiKey', in: 'header', name: 'x-api-key' }

export const getActivitiesRoute = createRoute({
  method: 'get',
  path: '/activities',
  tags: ['Activities'],
  summary: 'List all activities',
  description:
    'Returns a list of activities for the selected asset or album. The activities are returned in sorted order, with the oldest activities appearing first.',
  operationId: 'getActivities',
  request: {
    query: z.object({
      albumId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'albumId',
            required: true,
            in: 'query',
            description: 'Album ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      assetId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'assetId',
            required: false,
            in: 'query',
            description: 'Asset ID (if activity is for an asset)',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      level: ReactionLevelSchema.openapi({
        param: {
          name: 'level',
          required: false,
          in: 'query',
          schema: { $ref: '#/components/schemas/ReactionLevel' },
        },
      }).exactOptional(),
      type: ReactionTypeSchema.openapi({
        param: {
          name: 'type',
          required: false,
          in: 'query',
          schema: { $ref: '#/components/schemas/ReactionType' },
        },
      }).exactOptional(),
      userId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            required: false,
            in: 'query',
            description: 'Filter by user ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(ActivityResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postActivitiesRoute = createRoute({
  method: 'post',
  path: '/activities',
  tags: ['Activities'],
  summary: 'Create an activity',
  description: 'Create a like or a comment for an album, or an asset in an album.',
  operationId: 'createActivity',
  request: {
    body: { content: { 'application/json': { schema: ActivityCreateDtoSchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: ActivityResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getActivitiesStatisticsRoute = createRoute({
  method: 'get',
  path: '/activities/statistics',
  tags: ['Activities'],
  summary: 'Retrieve activity statistics',
  description: 'Returns the number of likes and comments for a given album or asset in an album.',
  operationId: 'getActivityStatistics',
  request: {
    query: z.object({
      albumId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'albumId',
            required: true,
            in: 'query',
            description: 'Album ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      assetId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'assetId',
            required: false,
            in: 'query',
            description: 'Asset ID (if activity is for an asset)',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ActivityStatisticsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteActivitiesIdRoute = createRoute({
  method: 'delete',
  path: '/activities/{id}',
  tags: ['Activities'],
  summary: 'Delete an activity',
  description: 'Removes a like or comment from a given album or asset in an album.',
  operationId: 'deleteActivity',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAdminAuthUnlinkAllRoute = createRoute({
  method: 'post',
  path: '/admin/auth/unlink-all',
  tags: ['Authentication (admin)'],
  summary: 'Unlink all OAuth accounts',
  description: 'Unlinks all OAuth accounts associated with user accounts in the system.',
  operationId: 'unlinkAllOAuthAccountsAdmin',
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminConfigRoute = createRoute({
  method: 'get',
  path: '/admin/config',
  tags: ['Config (admin)'],
  summary: 'Get the admin configuration',
  description: 'Retrieve admin configuration.',
  operationId: 'getAdminConfig',
  responses: {
    200: { description: '', content: { 'application/json': { schema: AdminConfigDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAdminConfigRoute = createRoute({
  method: 'put',
  path: '/admin/config',
  tags: ['Config (admin)'],
  summary: 'Update the system configuration',
  description: 'Update the system configuration with a new system configuration.',
  operationId: 'updateAdminConfig',
  request: {
    body: { content: { 'application/json': { schema: AdminConfigDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AdminConfigDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminConfigDefaultsRoute = createRoute({
  method: 'get',
  path: '/admin/config/defaults',
  tags: ['Config (admin)'],
  summary: 'Get the system configuration defaults',
  description: 'Retrieve the default value of every system configuration property.',
  operationId: 'getAdminConfigDefaults',
  responses: {
    200: { description: '', content: { 'application/json': { schema: AdminConfigDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminDatabaseBackupsRoute = createRoute({
  method: 'get',
  path: '/admin/database-backups',
  tags: ['Database Backups (admin)'],
  summary: 'List database backups',
  description: 'Get the list of the successful and failed backups',
  operationId: 'listDatabaseBackups',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DatabaseBackupListResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAdminDatabaseBackupsRoute = createRoute({
  method: 'delete',
  path: '/admin/database-backups',
  tags: ['Database Backups (admin)'],
  summary: 'Delete database backup',
  description: 'Delete a backup by its filename',
  operationId: 'deleteDatabaseBackup',
  request: {
    body: {
      content: { 'application/json': { schema: DatabaseBackupDeleteDtoSchema } },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAdminDatabaseBackupsStartRestoreRoute = createRoute({
  method: 'post',
  path: '/admin/database-backups/start-restore',
  tags: ['Database Backups (admin)'],
  summary: 'Start database backup restore flow',
  description:
    'Put Immich into maintenance mode to restore a backup (Immich must not be configured)',
  operationId: 'startDatabaseRestoreFlow',
  responses: { 201: { description: '' } },
})

export const postAdminDatabaseBackupsUploadRoute = createRoute({
  method: 'post',
  path: '/admin/database-backups/upload',
  tags: ['Database Backups (admin)'],
  summary: 'Upload database backup',
  description: 'Uploads .sql/.sql.gz file to restore backup from',
  operationId: 'uploadDatabaseBackup',
  request: {
    body: {
      description: 'Backup Upload',
      content: { 'multipart/form-data': { schema: DatabaseBackupUploadDtoSchema } },
      required: true,
    },
  },
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminDatabaseBackupsFilenameRoute = createRoute({
  method: 'get',
  path: '/admin/database-backups/{filename}',
  tags: ['Database Backups (admin)'],
  summary: 'Download database backup',
  description: 'Downloads the database backup file',
  operationId: 'downloadDatabaseBackup',
  request: {
    params: z.object({
      filename: z
        .string()
        .regex(/^[a-zA-Z0-9_\-.]+$/)
        .openapi({
          param: {
            name: 'filename',
            required: true,
            in: 'path',
            schema: { pattern: '^[a-zA-Z0-9_\\-.]+$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminIntegrityReportRoute = createRoute({
  method: 'get',
  path: '/admin/integrity/report',
  tags: ['Maintenance (admin)'],
  summary: 'Get integrity report by type',
  description: 'Get all flagged items by integrity report type',
  operationId: 'getIntegrityReport',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            required: false,
            in: 'query',
            description: 'Cursor for pagination',
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(9007199254740991),
        )
        .default(500)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Number of items per page',
            schema: {
              maximum: 9007199254740991,
              exclusiveMinimum: true,
              default: 500,
              type: 'integer',
              minimum: 0,
            },
          },
        }),
      type: IntegrityReportSchema.openapi({
        param: {
          name: 'type',
          required: true,
          in: 'query',
          schema: { $ref: '#/components/schemas/IntegrityReport' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: IntegrityReportResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAdminIntegrityReportIdRoute = createRoute({
  method: 'delete',
  path: '/admin/integrity/report/{id}',
  tags: ['Maintenance (admin)'],
  summary: 'Delete integrity report item',
  description:
    'Delete a given report item and perform corresponding deletion (e.g. trash asset, delete file)',
  operationId: 'deleteIntegrityReport',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-7[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-7[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminIntegrityReportIdFileRoute = createRoute({
  method: 'get',
  path: '/admin/integrity/report/{id}/file',
  tags: ['Maintenance (admin)'],
  summary: 'Download flagged file',
  description: 'Download the untracked/broken file if one exists',
  operationId: 'getIntegrityReportFile',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-7[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-7[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminIntegrityReportTypeCsvRoute = createRoute({
  method: 'get',
  path: '/admin/integrity/report/{type}/csv',
  tags: ['Maintenance (admin)'],
  summary: 'Export integrity report by type as CSV',
  description: 'Get all integrity report entries for a given type as a CSV',
  operationId: 'getIntegrityReportCsv',
  request: {
    params: z.object({
      type: IntegrityReportSchema.openapi({
        param: {
          name: 'type',
          required: true,
          in: 'path',
          schema: { $ref: '#/components/schemas/IntegrityReport' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminIntegritySummaryRoute = createRoute({
  method: 'get',
  path: '/admin/integrity/summary',
  tags: ['Maintenance (admin)'],
  summary: 'Get integrity report summary',
  description: 'Get a count of the items flagged in each integrity report',
  operationId: 'getIntegrityReportSummary',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: IntegrityReportSummaryResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAdminMaintenanceRoute = createRoute({
  method: 'post',
  path: '/admin/maintenance',
  tags: ['Maintenance (admin)'],
  summary: 'Set maintenance mode',
  description: 'Put Immich into or take it out of maintenance mode',
  operationId: 'setMaintenanceMode',
  request: {
    body: {
      content: { 'application/json': { schema: SetMaintenanceModeDtoSchema } },
      required: true,
    },
  },
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminMaintenanceDetectInstallRoute = createRoute({
  method: 'get',
  path: '/admin/maintenance/detect-install',
  tags: ['Maintenance (admin)'],
  summary: 'Detect existing install',
  description: 'Collect integrity checks and other heuristics about local data.',
  operationId: 'detectPriorInstall',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MaintenanceDetectInstallResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAdminMaintenanceLoginRoute = createRoute({
  method: 'post',
  path: '/admin/maintenance/login',
  tags: ['Maintenance (admin)'],
  summary: 'Log into maintenance mode',
  description:
    'Login with maintenance token or cookie to receive current information and perform further actions.',
  operationId: 'maintenanceLogin',
  request: {
    body: {
      content: { 'application/json': { schema: MaintenanceLoginDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: MaintenanceAuthDtoSchema } } },
  },
})

export const getAdminMaintenanceStatusRoute = createRoute({
  method: 'get',
  path: '/admin/maintenance/status',
  tags: ['Maintenance (admin)'],
  summary: 'Get maintenance mode status',
  description: 'Fetch information about the currently running maintenance action.',
  operationId: 'getMaintenanceStatus',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MaintenanceStatusResponseDtoSchema } },
    },
  },
})

export const postAdminNotificationsRoute = createRoute({
  method: 'post',
  path: '/admin/notifications',
  tags: ['Notifications (admin)'],
  summary: 'Create a notification',
  description: 'Create a new notification for a specific user.',
  operationId: 'createNotification',
  request: {
    body: {
      content: { 'application/json': { schema: NotificationCreateDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: NotificationDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAdminNotificationsTemplatesNameRoute = createRoute({
  method: 'post',
  path: '/admin/notifications/templates/{name}',
  tags: ['Notifications (admin)'],
  summary: 'Render email template',
  description: 'Retrieve a preview of the provided email template.',
  operationId: 'getNotificationTemplateAdmin',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: TemplateDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: TemplateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAdminNotificationsTestEmailRoute = createRoute({
  method: 'post',
  path: '/admin/notifications/test-email',
  tags: ['Notifications (admin)'],
  summary: 'Send test email',
  description: 'Send a test email using the provided SMTP configuration.',
  operationId: 'sendTestEmailAdmin',
  request: {
    body: { content: { 'application/json': { schema: AdminConfigSmtpDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: TestEmailResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminUsersRoute = createRoute({
  method: 'get',
  path: '/admin/users',
  tags: ['Users (admin)'],
  summary: 'Search users',
  description: 'Search for users.',
  operationId: 'searchUsersAdmin',
  request: {
    query: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            required: false,
            in: 'query',
            description: 'User ID filter',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      withDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withDeleted',
            required: false,
            in: 'query',
            description: 'Include deleted users',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(UserAdminResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAdminUsersRoute = createRoute({
  method: 'post',
  path: '/admin/users',
  tags: ['Users (admin)'],
  summary: 'Create a user',
  description: 'Create a new user.',
  operationId: 'createUserAdmin',
  request: {
    body: { content: { 'application/json': { schema: UserAdminCreateDtoSchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: UserAdminResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminUsersIdRoute = createRoute({
  method: 'get',
  path: '/admin/users/{id}',
  tags: ['Users (admin)'],
  summary: 'Retrieve a user',
  description: 'Retrieve  a specific user by their ID.',
  operationId: 'getUserAdmin',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserAdminResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAdminUsersIdRoute = createRoute({
  method: 'put',
  path: '/admin/users/{id}',
  tags: ['Users (admin)'],
  summary: 'Update a user',
  description: 'Update an existing user.',
  operationId: 'updateUserAdmin',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserAdminUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserAdminResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAdminUsersIdRoute = createRoute({
  method: 'delete',
  path: '/admin/users/{id}',
  tags: ['Users (admin)'],
  summary: 'Delete a user',
  description: 'Delete a user.',
  operationId: 'deleteUserAdmin',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserAdminDeleteDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserAdminResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminUsersIdCalendarHeatmapRoute = createRoute({
  method: 'get',
  path: '/admin/users/{id}/calendar-heatmap',
  tags: ['Users (admin)'],
  summary: 'Retrieve calendar heatmap activity',
  description: 'Retrieve activity counts for a specified period, in a calendar heatmap format.',
  operationId: 'getUserCalendarHeatmapAdmin',
  request: {
    query: z.object({
      from: z.iso
        .date()
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'from',
            required: false,
            in: 'query',
            description: 'Start date in UTC',
            schema: {
              format: 'date',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$',
              example: '2024-01-01',
              type: 'string',
            },
          },
          example: '2024-01-01',
        }),
      to: z.iso
        .date()
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'to',
            required: false,
            in: 'query',
            description: 'End date in UTC',
            schema: {
              format: 'date',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$',
              example: '2024-01-01',
              type: 'string',
            },
          },
          example: '2024-01-01',
        }),
      type: z
        .enum(['Upload', 'Taken'])
        .default('Upload')
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            required: false,
            in: 'query',
            schema: {
              description: 'Type of calendar heatmap',
              enum: ['Upload', 'Taken'],
              type: 'string',
              default: 'Upload',
            },
          },
          description: 'Type of calendar heatmap',
        }),
    }),
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CalendarHeatmapResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminUsersIdPreferencesRoute = createRoute({
  method: 'get',
  path: '/admin/users/{id}/preferences',
  tags: ['Users (admin)'],
  summary: 'Retrieve user preferences',
  description: 'Retrieve the preferences of a specific user.',
  operationId: 'getUserPreferencesAdmin',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserPreferencesResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAdminUsersIdPreferencesRoute = createRoute({
  method: 'put',
  path: '/admin/users/{id}/preferences',
  tags: ['Users (admin)'],
  summary: 'Update user preferences',
  description: 'Update the preferences of a specific user.',
  operationId: 'updateUserPreferencesAdmin',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UserPreferencesUpdateDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserPreferencesResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAdminUsersIdRestoreRoute = createRoute({
  method: 'post',
  path: '/admin/users/{id}/restore',
  tags: ['Users (admin)'],
  summary: 'Restore a deleted user',
  description: 'Restore a previously deleted user.',
  operationId: 'restoreUserAdmin',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserAdminResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminUsersIdSessionsRoute = createRoute({
  method: 'get',
  path: '/admin/users/{id}/sessions',
  tags: ['Users (admin)'],
  summary: 'Retrieve user sessions',
  description: 'Retrieve all sessions for a specific user.',
  operationId: 'getUserSessionsAdmin',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(SessionResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAdminUsersIdStatisticsRoute = createRoute({
  method: 'get',
  path: '/admin/users/{id}/statistics',
  tags: ['Users (admin)'],
  summary: 'Retrieve user statistics',
  description: 'Retrieve asset statistics for a specific user.',
  operationId: 'getUserStatisticsAdmin',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      isFavorite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isFavorite',
            required: false,
            in: 'query',
            description: 'Filter by favorite status',
            schema: { type: 'boolean' },
          },
        }),
      isTrashed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isTrashed',
            required: false,
            in: 'query',
            description: 'Filter by trash status',
            schema: { type: 'boolean' },
          },
        }),
      visibility: AssetVisibilitySchema.openapi({
        param: {
          name: 'visibility',
          required: false,
          in: 'query',
          schema: { $ref: '#/components/schemas/AssetVisibility' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AssetStatsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAlbumsRoute = createRoute({
  method: 'get',
  path: '/albums',
  tags: ['Albums'],
  summary: 'List all albums',
  description: 'Retrieve a list of albums available to the authenticated user.',
  operationId: 'getAllAlbums',
  request: {
    query: z.object({
      assetId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'assetId',
            required: false,
            in: 'query',
            description: 'Filter albums containing this asset ID (ignores other parameters)',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            required: false,
            in: 'query',
            description: 'Album ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      isOwned: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isOwned',
            required: false,
            in: 'query',
            description:
              'Filter by ownership: true = only owned, false = only shared-with-me, undefined = no filter',
            schema: { type: 'boolean' },
          },
        }),
      isShared: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isShared',
            required: false,
            in: 'query',
            description:
              'Filter by shared status: true = only shared, false = not shared, undefined = no filter',
            schema: { type: 'boolean' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            required: false,
            in: 'query',
            description: 'Album name (exact match)',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AlbumResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAlbumsRoute = createRoute({
  method: 'post',
  path: '/albums',
  tags: ['Albums'],
  summary: 'Create an album',
  description: 'Create a new album. The album can also be created with initial users and assets.',
  operationId: 'createAlbum',
  request: {
    body: { content: { 'application/json': { schema: CreateAlbumDtoSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: AlbumResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAlbumsAssetsRoute = createRoute({
  method: 'put',
  path: '/albums/assets',
  tags: ['Albums'],
  summary: 'Add assets to albums',
  description: 'Send a list of asset IDs and album IDs to add each asset to each album.',
  operationId: 'addAssetsToAlbums',
  request: {
    body: { content: { 'application/json': { schema: AlbumsAddAssetsDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AlbumsAddAssetsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAlbumsStatisticsRoute = createRoute({
  method: 'get',
  path: '/albums/statistics',
  tags: ['Albums'],
  summary: 'Retrieve album statistics',
  description: 'Returns statistics about the albums available to the authenticated user.',
  operationId: 'getAlbumStatistics',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AlbumStatisticsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAlbumsIdRoute = createRoute({
  method: 'get',
  path: '/albums/{id}',
  tags: ['Albums'],
  summary: 'Retrieve an album',
  description: 'Retrieve information about a specific album by its ID.',
  operationId: 'getAlbumInfo',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AlbumResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAlbumsIdRoute = createRoute({
  method: 'delete',
  path: '/albums/{id}',
  tags: ['Albums'],
  summary: 'Delete an album',
  description:
    'Delete a specific album by its ID. Note the album is initially trashed and then immediately scheduled for deletion, but relies on a background job to complete the process.',
  operationId: 'deleteAlbum',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const patchAlbumsIdRoute = createRoute({
  method: 'patch',
  path: '/albums/{id}',
  tags: ['Albums'],
  summary: 'Update an album',
  description:
    'Update the information of a specific album by its ID. This endpoint can be used to update the album name, description, sort order, etc. However, it is not used to add or remove assets or users from the album.',
  operationId: 'updateAlbumInfo',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateAlbumDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AlbumResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAlbumsIdAssetsRoute = createRoute({
  method: 'put',
  path: '/albums/{id}/assets',
  tags: ['Albums'],
  summary: 'Add assets to an album',
  description: 'Add multiple assets to a specific album by its ID.',
  operationId: 'addAssetsToAlbum',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BulkIdsDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BulkIdResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAlbumsIdAssetsRoute = createRoute({
  method: 'delete',
  path: '/albums/{id}/assets',
  tags: ['Albums'],
  summary: 'Remove assets from an album',
  description: 'Remove multiple assets from a specific album by its ID.',
  operationId: 'removeAssetFromAlbum',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BulkIdsDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BulkIdResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAlbumsIdMapMarkersRoute = createRoute({
  method: 'get',
  path: '/albums/{id}/map-markers',
  tags: ['Albums'],
  summary: 'Retrieve album map markers',
  description: 'Retrieve map marker information for a specific album by its ID.',
  operationId: 'getAlbumMapMarkers',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MapMarkerResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAlbumsIdUserUserIdRoute = createRoute({
  method: 'put',
  path: '/albums/{id}/user/{userId}',
  tags: ['Albums'],
  summary: 'Update user role',
  description: 'Change the role for a specific user in a specific album.',
  operationId: 'updateAlbumUser',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            description: 'Album ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            required: true,
            in: 'path',
            description: 'Album user ID, or "me" to reference the current user.',
            'x-immich-history': [
              { version: 'v3', state: 'Updated', description: '"me" as a value is deprecated' },
            ],
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateAlbumUserDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAlbumsIdUserUserIdRoute = createRoute({
  method: 'delete',
  path: '/albums/{id}/user/{userId}',
  tags: ['Albums'],
  summary: 'Remove user from album',
  description: 'Remove a user from an album. Use an ID of "me" to leave a shared album.',
  operationId: 'removeUserFromAlbum',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            description: 'Album ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            required: true,
            in: 'path',
            description: 'Album user ID, or "me" to reference the current user.',
            'x-immich-history': [
              { version: 'v3', state: 'Updated', description: '"me" as a value is deprecated' },
            ],
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAlbumsIdUsersRoute = createRoute({
  method: 'put',
  path: '/albums/{id}/users',
  tags: ['Albums'],
  summary: 'Share album with users',
  description:
    'Share an album with multiple users. Each user can be given a specific role in the album.',
  operationId: 'addUsersToAlbum',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddUsersDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AlbumResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getApiKeysRoute = createRoute({
  method: 'get',
  path: '/api-keys',
  tags: ['API keys'],
  summary: 'List all API keys',
  description: 'Retrieve all API keys of the current user.',
  operationId: 'getApiKeys',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(ApiKeyResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postApiKeysRoute = createRoute({
  method: 'post',
  path: '/api-keys',
  tags: ['API keys'],
  summary: 'Create an API key',
  description: 'Creates a new API key. It will be limited to the permissions specified.',
  operationId: 'createApiKey',
  request: {
    body: { content: { 'application/json': { schema: ApiKeyCreateDtoSchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: ApiKeyCreateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getApiKeysMeRoute = createRoute({
  method: 'get',
  path: '/api-keys/me',
  tags: ['API keys'],
  summary: 'Retrieve the current API key',
  description: 'Retrieve the API key that is used to access this endpoint.',
  operationId: 'getMyApiKey',
  responses: {
    200: { description: '', content: { 'application/json': { schema: ApiKeyResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getApiKeysIdRoute = createRoute({
  method: 'get',
  path: '/api-keys/{id}',
  tags: ['API keys'],
  summary: 'Retrieve an API key',
  description: 'Retrieve an API key by its ID. The current user must own this API key.',
  operationId: 'getApiKey',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ApiKeyResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putApiKeysIdRoute = createRoute({
  method: 'put',
  path: '/api-keys/{id}',
  tags: ['API keys'],
  summary: 'Update an API key',
  description:
    'Updates the name and permissions of an API key by its ID. The current user must own this API key.',
  operationId: 'updateApiKey',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiKeyUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ApiKeyResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteApiKeysIdRoute = createRoute({
  method: 'delete',
  path: '/api-keys/{id}',
  tags: ['API keys'],
  summary: 'Delete an API key',
  description: 'Deletes an API key identified by its ID. The current user must own this API key.',
  operationId: 'deleteApiKey',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postApiKeysIdRotateRoute = createRoute({
  method: 'post',
  path: '/api-keys/{id}/rotate',
  tags: ['API keys'],
  summary: 'Rotate an API key',
  description:
    'Generates a new secret for an API key, immediately invalidating the previous one. The current user must own this API key.',
  operationId: 'rotateApiKey',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: ApiKeyCreateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetFilesRoute = createRoute({
  method: 'get',
  path: '/asset-files',
  tags: ['Asset files'],
  summary: 'Search asset files',
  description: 'Returns all matching asset files.',
  operationId: 'searchAssetFiles',
  request: {
    query: z.object({
      assetId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'assetId',
            required: true,
            in: 'query',
            description: 'Asset ID to filter files by',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      isEdited: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isEdited',
            required: false,
            in: 'query',
            description: 'The file was generated from an edit',
            schema: { type: 'boolean' },
          },
        }),
      isProgressive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isProgressive',
            required: false,
            in: 'query',
            description: 'The file is a progressively encoded JPEG',
            schema: { type: 'boolean' },
          },
        }),
      isTransparent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isTransparent',
            required: false,
            in: 'query',
            description: 'The file is transparent',
            schema: { type: 'boolean' },
          },
        }),
      type: AssetFileTypeSchema.openapi({
        param: {
          name: 'type',
          required: false,
          in: 'query',
          description: 'Filter by type of file',
          schema: { $ref: '#/components/schemas/AssetFileType' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AssetFileResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetFilesIdRoute = createRoute({
  method: 'get',
  path: '/asset-files/{id}',
  tags: ['Asset files'],
  summary: 'Retrieve an asset file',
  description: 'Returns metadata about a specific asset file.',
  operationId: 'getAssetFile',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AssetFileResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAssetFilesIdRoute = createRoute({
  method: 'delete',
  path: '/asset-files/{id}',
  tags: ['Asset files'],
  summary: 'Delete an asset file',
  description: 'Delete a file and remove it from the database.',
  operationId: 'deleteAssetFile',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetFilesIdDownloadRoute = createRoute({
  method: 'get',
  path: '/asset-files/{id}/download',
  tags: ['Asset files'],
  summary: 'Download an asset file',
  description: 'Serve the contents of a specific asset file.',
  operationId: 'downloadAssetFile',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAssetsRoute = createRoute({
  method: 'put',
  path: '/assets',
  tags: ['Assets'],
  summary: 'Update assets',
  description: 'Updates multiple assets at the same time.',
  operationId: 'updateAssets',
  request: {
    body: { content: { 'application/json': { schema: AssetBulkUpdateDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAssetsRoute = createRoute({
  method: 'post',
  path: '/assets',
  tags: ['Assets'],
  summary: 'Upload asset',
  description: 'Uploads a new asset to the server.',
  operationId: 'uploadAsset',
  request: {
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-immich-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-immich-checksum',
            in: 'header',
            description:
              'sha1 checksum that can be used for duplicate detection before the file is uploaded',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Asset Upload Information',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              assetData: z
                .file()
                .openapi({ type: 'string', format: 'binary', description: 'Asset file data' }),
              duration: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(0).max(9007199254740991),
                )
                .exactOptional()
                .openapi({ description: 'Duration in milliseconds (for videos)' }),
              fileCreatedAt: z.iso
                .datetime({ offset: true })
                .regex(
                  /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
                )
                .openapi({
                  description: 'File creation date',
                  example: '2024-01-01T00:00:00.000Z',
                }),
              fileModifiedAt: z.iso
                .datetime({ offset: true })
                .regex(
                  /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
                )
                .openapi({
                  description: 'File modification date',
                  example: '2024-01-01T00:00:00.000Z',
                }),
              filename: z.string().exactOptional().openapi({ description: 'Filename' }),
              isFavorite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Mark as favorite' }),
              livePhotoVideoId: z
                .uuid()
                .regex(
                  /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
                )
                .exactOptional()
                .openapi({ description: 'Live photo video ID' }),
              metadata: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(AssetMetadataUpsertItemDtoSchema),
                )
                .exactOptional()
                .openapi({ description: 'Asset metadata items' }),
              sidecarData: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'Sidecar file data' }),
              visibility: AssetVisibilitySchema.exactOptional(),
            })
            .openapi({ required: ['assetData', 'fileCreatedAt', 'fileModifiedAt'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Asset is a duplicate',
      content: { 'application/json': { schema: AssetMediaResponseDtoSchema } },
    },
    201: {
      description: 'Asset uploaded successfully',
      content: { 'application/json': { schema: AssetMediaResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAssetsRoute = createRoute({
  method: 'delete',
  path: '/assets',
  tags: ['Assets'],
  summary: 'Delete assets',
  description: 'Deletes multiple assets at the same time.',
  operationId: 'deleteAssets',
  request: {
    body: { content: { 'application/json': { schema: AssetBulkDeleteDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAssetsBulkUploadCheckRoute = createRoute({
  method: 'post',
  path: '/assets/bulk-upload-check',
  tags: ['Assets'],
  summary: 'Check bulk upload',
  description:
    'Determine which assets have already been uploaded to the server based on their SHA1 checksums.',
  operationId: 'checkBulkUpload',
  request: {
    body: {
      content: { 'application/json': { schema: AssetBulkUploadCheckDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AssetBulkUploadCheckResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAssetsCopyRoute = createRoute({
  method: 'put',
  path: '/assets/copy',
  tags: ['Assets'],
  summary: 'Copy asset',
  description: 'Copy asset information like albums, tags, etc. from one asset to another.',
  operationId: 'copyAsset',
  request: {
    body: { content: { 'application/json': { schema: AssetCopyDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAssetsJobsRoute = createRoute({
  method: 'post',
  path: '/assets/jobs',
  tags: ['Assets'],
  summary: 'Run an asset job',
  description: 'Run a specific job on a set of assets.',
  operationId: 'runAssetJobs',
  request: {
    body: { content: { 'application/json': { schema: AssetJobsDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAssetsMetadataRoute = createRoute({
  method: 'put',
  path: '/assets/metadata',
  tags: ['Assets'],
  summary: 'Upsert asset metadata',
  description: 'Upsert metadata key-value pairs for multiple assets.',
  operationId: 'updateBulkAssetMetadata',
  request: {
    body: {
      content: { 'application/json': { schema: AssetMetadataBulkUpsertDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AssetMetadataBulkResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAssetsMetadataRoute = createRoute({
  method: 'delete',
  path: '/assets/metadata',
  tags: ['Assets'],
  summary: 'Delete asset metadata',
  description: 'Delete metadata key-value pairs for multiple assets.',
  operationId: 'deleteBulkAssetMetadata',
  request: {
    body: {
      content: { 'application/json': { schema: AssetMetadataBulkDeleteDtoSchema } },
      required: true,
    },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetsStatisticsRoute = createRoute({
  method: 'get',
  path: '/assets/statistics',
  tags: ['Assets'],
  summary: 'Get asset statistics',
  description: 'Retrieve various statistics about the assets owned by the authenticated user.',
  operationId: 'getAssetStatistics',
  request: {
    query: z.object({
      isFavorite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isFavorite',
            required: false,
            in: 'query',
            description: 'Filter by favorite status',
            schema: { type: 'boolean' },
          },
        }),
      isTrashed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isTrashed',
            required: false,
            in: 'query',
            description: 'Filter by trash status',
            schema: { type: 'boolean' },
          },
        }),
      visibility: AssetVisibilitySchema.openapi({
        param: {
          name: 'visibility',
          required: false,
          in: 'query',
          schema: { $ref: '#/components/schemas/AssetVisibility' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AssetStatsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetsIdRoute = createRoute({
  method: 'get',
  path: '/assets/{id}',
  tags: ['Assets'],
  summary: 'Retrieve an asset',
  description: 'Retrieve detailed information about a specific asset.',
  operationId: 'getAssetInfo',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AssetResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAssetsIdRoute = createRoute({
  method: 'put',
  path: '/assets/{id}',
  tags: ['Assets'],
  summary: 'Update an asset',
  description: 'Update information of a specific asset.',
  operationId: 'updateAsset',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateAssetDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AssetResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetsIdEditsRoute = createRoute({
  method: 'get',
  path: '/assets/{id}/edits',
  tags: ['Assets'],
  summary: 'Retrieve edits for an existing asset',
  description:
    'Retrieve a series of edit actions (crop, rotate, mirror) associated with the specified asset.',
  operationId: 'getAssetEdits',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AssetEditsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAssetsIdEditsRoute = createRoute({
  method: 'put',
  path: '/assets/{id}/edits',
  tags: ['Assets'],
  summary: 'Apply edits to an existing asset',
  description: 'Apply a series of edit actions (crop, rotate, mirror) to the specified asset.',
  operationId: 'editAsset',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssetEditsCreateDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AssetEditsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAssetsIdEditsRoute = createRoute({
  method: 'delete',
  path: '/assets/{id}/edits',
  tags: ['Assets'],
  summary: 'Remove edits from an existing asset',
  description:
    'Removes all edit actions (crop, rotate, mirror) associated with the specified asset.',
  operationId: 'removeAssetEdits',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetsIdMetadataRoute = createRoute({
  method: 'get',
  path: '/assets/{id}/metadata',
  tags: ['Assets'],
  summary: 'Get asset metadata',
  description: 'Retrieve all metadata key-value pairs associated with the specified asset.',
  operationId: 'getAssetMetadata',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AssetMetadataResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAssetsIdMetadataRoute = createRoute({
  method: 'put',
  path: '/assets/{id}/metadata',
  tags: ['Assets'],
  summary: 'Update asset metadata',
  description: 'Update or add metadata key-value pairs for the specified asset.',
  operationId: 'updateAssetMetadata',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssetMetadataUpsertDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AssetMetadataResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetsIdMetadataKeyRoute = createRoute({
  method: 'get',
  path: '/assets/{id}/metadata/{key}',
  tags: ['Assets'],
  summary: 'Retrieve asset metadata by key',
  description: 'Retrieve the value of a specific metadata key associated with the specified asset.',
  operationId: 'getAssetMetadataByKey',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            description: 'Asset ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            required: true,
            in: 'path',
            description: 'Metadata key',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AssetMetadataResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAssetsIdMetadataKeyRoute = createRoute({
  method: 'delete',
  path: '/assets/{id}/metadata/{key}',
  tags: ['Assets'],
  summary: 'Delete asset metadata by key',
  description: 'Delete a specific metadata key-value pair associated with the specified asset.',
  operationId: 'deleteAssetMetadata',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            description: 'Asset ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            required: true,
            in: 'path',
            description: 'Metadata key',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetsIdOcrRoute = createRoute({
  method: 'get',
  path: '/assets/{id}/ocr',
  tags: ['Assets'],
  summary: 'Retrieve asset OCR data',
  description:
    'Retrieve all OCR (Optical Character Recognition) data associated with the specified asset.',
  operationId: 'getAssetOcr',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AssetOcrResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetsIdOriginalRoute = createRoute({
  method: 'get',
  path: '/assets/{id}/original',
  tags: ['Assets'],
  summary: 'Download original asset',
  description: 'Downloads the original file of the specified asset.',
  operationId: 'downloadAsset',
  request: {
    query: z.object({
      edited: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'edited',
            required: false,
            in: 'query',
            description: 'Return edited asset if available',
            schema: { type: 'boolean' },
          },
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetsIdThumbnailRoute = createRoute({
  method: 'get',
  path: '/assets/{id}/thumbnail',
  tags: ['Assets'],
  summary: 'View asset thumbnail',
  description:
    'Retrieve the thumbnail image for the specified asset. Viewing the fullsize thumbnail might redirect to downloadAsset, which requires a different permission.',
  operationId: 'viewAsset',
  request: {
    query: z.object({
      edited: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'edited',
            required: false,
            in: 'query',
            description: 'Return edited asset if available',
            schema: { type: 'boolean' },
          },
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      size: AssetMediaSizeSchema.openapi({
        param: {
          name: 'size',
          required: false,
          in: 'query',
          'x-immich-history': [
            {
              version: 'v3',
              state: 'Updated',
              description:
                "Specifying 'original' is deprecated. Use the original endpoint directly instead",
            },
          ],
          schema: { $ref: '#/components/schemas/AssetMediaSize' },
        },
      }).exactOptional(),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetsIdVideoPlaybackRoute = createRoute({
  method: 'get',
  path: '/assets/{id}/video/playback',
  tags: ['Assets'],
  summary: 'Play asset video',
  description:
    'Streams the video file for the specified asset. This endpoint also supports byte range requests.',
  operationId: 'playAssetVideo',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetsIdVideoStreamMainM3u8Route = createRoute({
  method: 'get',
  path: '/assets/{id}/video/stream/main.m3u8',
  tags: ['Assets'],
  summary: 'Get HLS main playlist',
  description: 'Returns an HLS main playlist with all available variants for the asset.',
  operationId: 'getMainPlaylist',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/vnd.apple.mpegurl': { schema: z.string() } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAssetsIdVideoStreamSessionIdRoute = createRoute({
  method: 'delete',
  path: '/assets/{id}/video/stream/{sessionId}',
  tags: ['Assets'],
  summary: 'End HLS streaming session',
  description: 'Releases server resources for the streaming session.',
  operationId: 'endSession',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      sessionId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'sessionId',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetsIdVideoStreamSessionIdVariantIndexPlaylistM3u8Route = createRoute({
  method: 'get',
  path: '/assets/{id}/video/stream/{sessionId}/{variantIndex}/playlist.m3u8',
  tags: ['Assets'],
  summary: 'Get HLS media playlist',
  description: 'Returns an HLS media playlist for one variant of the streaming session.',
  operationId: 'getMediaPlaylist',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      sessionId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'sessionId',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      variantIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9007199254740991),
        )
        .openapi({
          param: {
            name: 'variantIndex',
            required: true,
            in: 'path',
            schema: { minimum: 0, maximum: 9007199254740991, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-immich-hls-pos': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'x-immich-hls-pos',
            required: false,
            in: 'header',
            schema: { minimum: 0, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/vnd.apple.mpegurl': { schema: z.string() } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAssetsIdVideoStreamSessionIdVariantIndexFilenameRoute = createRoute({
  method: 'get',
  path: '/assets/{id}/video/stream/{sessionId}/{variantIndex}/{filename}',
  tags: ['Assets'],
  summary: 'Get HLS segment or init file',
  description: 'Streams an HLS init segment (init.mp4) or media segment (seg_N.m4s).',
  operationId: 'getSegment',
  request: {
    params: z.object({
      filename: z
        .string()
        .regex(/^(init\.mp4|seg_\d+\.m4s)$/)
        .openapi({
          param: {
            name: 'filename',
            required: true,
            in: 'path',
            schema: { pattern: '^(init\\.mp4|seg_\\d+\\.m4s)$', type: 'string' },
          },
        }),
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      sessionId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'sessionId',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      variantIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9007199254740991),
        )
        .openapi({
          param: {
            name: 'variantIndex',
            required: true,
            in: 'path',
            schema: { minimum: 0, maximum: 9007199254740991, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-immich-hls-msn': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9007199254740991),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'x-immich-hls-msn',
            required: false,
            in: 'header',
            schema: { minimum: 0, maximum: 9007199254740991, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAuthAdminSignUpRoute = createRoute({
  method: 'post',
  path: '/auth/admin-sign-up',
  tags: ['Authentication'],
  summary: 'Register admin',
  description: 'Create the first admin user in the system.',
  operationId: 'signUpAdmin',
  request: {
    body: { content: { 'application/json': { schema: SignUpDtoSchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: UserAdminResponseDtoSchema } },
    },
  },
})

export const postAuthChangePasswordRoute = createRoute({
  method: 'post',
  path: '/auth/change-password',
  tags: ['Authentication'],
  summary: 'Change password',
  description: 'Change the password of the current user.',
  operationId: 'changePassword',
  request: {
    body: { content: { 'application/json': { schema: ChangePasswordDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserAdminResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAuthLoginRoute = createRoute({
  method: 'post',
  path: '/auth/login',
  tags: ['Authentication'],
  summary: 'Login',
  description: 'Login with username and password and receive a session token.',
  operationId: 'login',
  request: {
    body: { content: { 'application/json': { schema: LoginCredentialDtoSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: LoginResponseDtoSchema } } },
  },
})

export const postAuthLogoutRoute = createRoute({
  method: 'post',
  path: '/auth/logout',
  tags: ['Authentication'],
  summary: 'Logout',
  description: 'Logout the current user and invalidate the session token.',
  operationId: 'logout',
  responses: {
    200: { description: '', content: { 'application/json': { schema: LogoutResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putAuthPinCodeRoute = createRoute({
  method: 'put',
  path: '/auth/pin-code',
  tags: ['Authentication'],
  summary: 'Change pin code',
  description: 'Change the pin code for the current user.',
  operationId: 'changePinCode',
  request: {
    body: { content: { 'application/json': { schema: PinCodeChangeDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAuthPinCodeRoute = createRoute({
  method: 'post',
  path: '/auth/pin-code',
  tags: ['Authentication'],
  summary: 'Setup pin code',
  description: 'Setup a new pin code for the current user.',
  operationId: 'setupPinCode',
  request: {
    body: { content: { 'application/json': { schema: PinCodeSetupDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteAuthPinCodeRoute = createRoute({
  method: 'delete',
  path: '/auth/pin-code',
  tags: ['Authentication'],
  summary: 'Reset pin code',
  description: 'Reset the pin code for the current user by providing the account password',
  operationId: 'resetPinCode',
  request: {
    body: { content: { 'application/json': { schema: PinCodeResetDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAuthSessionLockRoute = createRoute({
  method: 'post',
  path: '/auth/session/lock',
  tags: ['Authentication'],
  summary: 'Lock auth session',
  description: 'Remove elevated access to locked assets from the current session.',
  operationId: 'lockAuthSession',
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAuthSessionUnlockRoute = createRoute({
  method: 'post',
  path: '/auth/session/unlock',
  tags: ['Authentication'],
  summary: 'Unlock auth session',
  description:
    'Temporarily grant the session elevated access to locked assets by providing the correct PIN code.',
  operationId: 'unlockAuthSession',
  request: {
    body: { content: { 'application/json': { schema: SessionUnlockDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getAuthStatusRoute = createRoute({
  method: 'get',
  path: '/auth/status',
  tags: ['Authentication'],
  summary: 'Retrieve auth status',
  description:
    'Get information about the current session, including whether the user has a password, and if the session can access locked assets.',
  operationId: 'getAuthStatus',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AuthStatusResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postAuthValidateTokenRoute = createRoute({
  method: 'post',
  path: '/auth/validateToken',
  tags: ['Authentication'],
  summary: 'Validate access token',
  description: 'Validate the current authorization method is still valid.',
  operationId: 'validateAccessToken',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ValidateAccessTokenResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getClusterGroupsRequestsRoute = createRoute({
  method: 'get',
  path: '/cluster-groups/requests',
  tags: ['Cluster groups'],
  summary: 'Retrieve cluster group requests',
  description: 'Retrieve the pending requests for the current user to join a cluster group.',
  operationId: 'getClusterGroupRequests',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(ClusterGroupRequestResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteClusterGroupsRequestsIdRoute = createRoute({
  method: 'delete',
  path: '/cluster-groups/requests/{id}',
  tags: ['Cluster groups'],
  summary: 'Decline a cluster group request',
  description: 'Delete a pending request to join a cluster group.',
  operationId: 'deleteClusterGroupRequest',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postClusterGroupsRequestsIdAcceptRoute = createRoute({
  method: 'post',
  path: '/cluster-groups/requests/{id}/accept',
  tags: ['Cluster groups'],
  summary: 'Accept a cluster group request',
  description: 'Join the cluster group the request was created for.',
  operationId: 'acceptClusterGroupRequest',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postClusterGroupsIdLeaveRoute = createRoute({
  method: 'post',
  path: '/cluster-groups/{id}/leave',
  tags: ['Cluster groups'],
  summary: 'Leave a cluster group',
  description: 'Move the current user into a new cluster group of their own.',
  operationId: 'leaveClusterGroup',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postClusterGroupsIdRegeneratePeopleRoute = createRoute({
  method: 'post',
  path: '/cluster-groups/{id}/regenerate-people',
  tags: ['Cluster groups'],
  summary: 'Regenerate people of users in cluster group',
  description: 'Forcefully re-run facial recognition for all faces of users in this group.',
  operationId: 'clusterGroupRegeneratePeople',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getClusterGroupsIdRequestsRoute = createRoute({
  method: 'get',
  path: '/cluster-groups/{id}/requests',
  tags: ['Cluster groups'],
  summary: 'Retrieve the requests sent by a cluster group',
  description: 'Retrieve the pending requests for other users to join the cluster group.',
  operationId: 'getClusterGroupRequestsForGroup',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(ClusterGroupRequestResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putClusterGroupsIdRequestsRoute = createRoute({
  method: 'put',
  path: '/cluster-groups/{id}/requests',
  tags: ['Cluster groups'],
  summary: 'Create a cluster group request',
  description: 'Ask another user to join the cluster group of the current user.',
  operationId: 'createClusterGroupRequest',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClusterGroupRequestCreateDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ClusterGroupRequestResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getClusterGroupsIdUsersRoute = createRoute({
  method: 'get',
  path: '/cluster-groups/{id}/users',
  tags: ['Cluster groups'],
  summary: 'Retrieve the users of a cluster group',
  description: 'Retrieve the users that are a member of the cluster group.',
  operationId: 'getClusterGroupUsers',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(UserResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  tags: ['Config (user)'],
  summary: 'Get the configuration with user visibility',
  description: 'Retrieve the system configuration properties that are visible to logged in users.',
  operationId: 'getUserConfig',
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserConfigDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getConfigDefaultsRoute = createRoute({
  method: 'get',
  path: '/config/defaults',
  tags: ['Config (user)'],
  summary: 'Get the default configuration with user visibility',
  description:
    'Retrieve the default value of the configuration properties that are visible to logged in users.',
  operationId: 'getUserConfigDefaults',
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserConfigDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postDownloadArchiveRoute = createRoute({
  method: 'post',
  path: '/download/archive',
  tags: ['Download'],
  summary: 'Download asset archive',
  description:
    'Download a ZIP archive containing the specified assets. The assets must have been previously requested via the "getDownloadInfo" endpoint.',
  operationId: 'downloadArchive',
  request: {
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: DownloadArchiveDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postDownloadInfoRoute = createRoute({
  method: 'post',
  path: '/download/info',
  tags: ['Download'],
  summary: 'Retrieve download information',
  description:
    'Retrieve information about how to request a download for the specified assets or album. The response includes groups of assets that can be downloaded together.',
  operationId: 'getDownloadInfo',
  request: {
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: DownloadInfoDtoSchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: DownloadResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getDuplicatesRoute = createRoute({
  method: 'get',
  path: '/duplicates',
  tags: ['Duplicates'],
  summary: 'Retrieve duplicates',
  description: 'Retrieve a list of duplicate assets available to the authenticated user.',
  operationId: 'getAssetDuplicates',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(DuplicateResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteDuplicatesRoute = createRoute({
  method: 'delete',
  path: '/duplicates',
  tags: ['Duplicates'],
  summary: 'Delete duplicates',
  description: 'Delete multiple duplicate assets specified by their IDs.',
  operationId: 'deleteDuplicates',
  request: {
    body: { content: { 'application/json': { schema: BulkIdsDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postDuplicatesResolveRoute = createRoute({
  method: 'post',
  path: '/duplicates/resolve',
  tags: ['Duplicates'],
  summary: 'Resolve duplicate groups',
  description:
    'Resolve duplicate groups by synchronizing metadata across assets and deleting/trashing duplicates.',
  operationId: 'resolveDuplicates',
  request: {
    body: {
      content: { 'application/json': { schema: DuplicateResolveDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BulkIdResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteDuplicatesIdRoute = createRoute({
  method: 'delete',
  path: '/duplicates/{id}',
  tags: ['Duplicates'],
  summary: 'Dismiss a duplicate group',
  description:
    'Dismiss a duplicate group by its ID, unlinking all assets in the group without deleting them.',
  operationId: 'deleteDuplicate',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFacesRoute = createRoute({
  method: 'get',
  path: '/faces',
  tags: ['Faces'],
  summary: 'Retrieve faces for asset',
  description: 'Retrieve all faces belonging to an asset.',
  operationId: 'getFaces',
  request: {
    query: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'query',
            description: 'Face ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AssetFaceResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFacesRoute = createRoute({
  method: 'post',
  path: '/faces',
  tags: ['Faces'],
  summary: 'Create a face',
  description:
    'Create a new face that has not been discovered by facial recognition. The content of the bounding box is considered a face.',
  operationId: 'createFace',
  request: {
    body: { content: { 'application/json': { schema: AssetFaceCreateDtoSchema } }, required: true },
  },
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putFacesIdRoute = createRoute({
  method: 'put',
  path: '/faces/{id}',
  tags: ['Faces'],
  summary: 'Re-assign a face to another person',
  description:
    'Re-assign the face provided in the body to the person identified by the id in the path parameter.',
  operationId: 'reassignFacesById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FaceDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PersonResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteFacesIdRoute = createRoute({
  method: 'delete',
  path: '/faces/{id}',
  tags: ['Faces'],
  summary: 'Delete a face',
  description: 'Delete a face identified by the id. Optionally can be force deleted.',
  operationId: 'deleteFace',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AssetFaceDeleteDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsAuthOidcDeviceRoute = createRoute({
  method: 'get',
  path: '/futo-backups/auth/oidc/device',
  tags: ['Backups'],
  summary: 'Connect a FUTO Backups account',
  description: 'Connect an existing FUTO Backups account to this server.',
  operationId: 'futoBackupsConnectDeviceFlow',
  responses: {
    200: { description: '', content: { 'application/json': { schema: DeviceFlowEventDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsAuthSessionRoute = createRoute({
  method: 'post',
  path: '/futo-backups/auth/session',
  tags: ['Backups'],
  summary: 'Create session',
  description: 'Use existing session token to create a session on your device.',
  operationId: 'futoBackupsCreateSession',
  request: {
    body: {
      content: { 'application/json': { schema: CreateSessionRequestDtoSchema } },
      required: true,
    },
  },
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsAuthSessionDeviceRoute = createRoute({
  method: 'get',
  path: '/futo-backups/auth/session/device',
  tags: ['Backups'],
  summary: 'Sign in with FUTO Backups account',
  description: 'Log into standalone backups app using the associated cloud account.',
  operationId: 'futoBackupsSessionDeviceFlow',
  responses: {
    200: { description: '', content: { 'application/json': { schema: DeviceFlowEventDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsAuthTicketRoute = createRoute({
  method: 'post',
  path: '/futo-backups/auth/ticket',
  tags: ['Backups'],
  summary: 'Create a ticket',
  description: 'Create a ticket to perform a protected repository action.',
  operationId: 'futoBackupsCreateTicket',
  request: {
    body: {
      content: { 'application/json': { schema: TicketCreateRequestDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: TicketCreateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsBackendRoute = createRoute({
  method: 'get',
  path: '/futo-backups/backend',
  tags: ['Backups'],
  summary: 'List backends',
  description: 'List the storage backends configured on this server.',
  operationId: 'futoBackupsGetBackends',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BackendsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsBackendLocalRoute = createRoute({
  method: 'post',
  path: '/futo-backups/backend/local',
  tags: ['Backups'],
  summary: 'Create a local backend',
  description: 'Add a storage backend that writes to a local path on this server.',
  operationId: 'futoBackupsCreateLocalBackend',
  request: {
    body: {
      content: { 'application/json': { schema: CreateLocalBackendRequestDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: BackendResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsConfigRoute = createRoute({
  method: 'get',
  path: '/futo-backups/config',
  tags: ['Backups'],
  summary: 'Get backups orchestrator configuration',
  description: 'Retrieve the current backups orchestrator configuration.',
  operationId: 'futoBackupsGetConfig',
  responses: {
    200: { description: '', content: { 'application/json': { schema: ConfigResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putFutoBackupsConfigRoute = createRoute({
  method: 'put',
  path: '/futo-backups/config',
  tags: ['Backups'],
  summary: 'Update backups orchestrator configuration',
  description: 'Update the backups orchestrator configuration.',
  operationId: 'futoBackupsUpdateConfig',
  request: {
    body: {
      content: { 'application/json': { schema: ConfigUpdateRequestDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ConfigResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsDebugResetRoute = createRoute({
  method: 'post',
  path: '/futo-backups/debug/reset',
  tags: ['Backups'],
  summary: 'Reset the backups orchestrator',
  description: 'Delete all orchestrator state. Only available in development mode.',
  operationId: 'futoBackupsResetOrchestrator',
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsFsRoute = createRoute({
  method: 'get',
  path: '/futo-backups/fs',
  tags: ['Backups'],
  summary: 'List files',
  description: 'List the files and folders at a path on this server.',
  operationId: 'futoBackupsGetFileListing',
  request: {
    query: z.object({
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'path', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: FilesystemListingResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsIntegrationsRoute = createRoute({
  method: 'get',
  path: '/futo-backups/integrations',
  tags: ['Backups'],
  summary: 'Get backup integrations',
  description: 'Retrieve the configuration and state of each integration.',
  operationId: 'futoBackupsGetIntegrations',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: IntegrationsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsIntegrationsImmichRoute = createRoute({
  method: 'post',
  path: '/futo-backups/integrations/immich',
  tags: ['Backups'],
  summary: 'Configure the Immich backup integration',
  description: 'Set up backups for the Immich backup integration.',
  operationId: 'futoBackupsConfigureImmichIntegration',
  request: {
    body: {
      content: { 'application/json': { schema: ConfigureImmichIntegrationRequestDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: ConfigureImmichIntegrationResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsIntegrationsImmichDatabaseDumpRoute = createRoute({
  method: 'post',
  path: '/futo-backups/integrations/immich/database-dump',
  tags: ['Backups'],
  summary: 'Configure Immich database dumps',
  description: 'Configure the Immich database dumps included in backups.',
  operationId: 'futoBackupsConfigureImmichDatabaseDump',
  request: {
    body: {
      content: { 'application/json': { schema: ConfigureImmichDatabaseDumpRequestDtoSchema } },
      required: true,
    },
  },
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsIntegrationsImmichDatabaseDumpIgnoreWarningRoute = createRoute({
  method: 'post',
  path: '/futo-backups/integrations/immich/database-dump/ignore-warning',
  tags: ['Backups'],
  summary: 'Ignore the Immich database dump warning',
  description: 'Stop warning that Immich database dumps are not configured.',
  operationId: 'futoBackupsIgnoreImmichDatabaseDumpWarning',
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsIntegrationsImmichRollbackRoute = createRoute({
  method: 'post',
  path: '/futo-backups/integrations/immich/rollback',
  tags: ['Backups'],
  summary: 'Roll Immich back to a snapshot',
  description: 'Put Immich into maintenance mode and restore it from a snapshot.',
  operationId: 'futoBackupsStartImmichRollback',
  request: {
    body: {
      content: { 'application/json': { schema: ImmichRollbackRequestDtoSchema } },
      required: true,
    },
  },
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsIntegrationsImmichStatusRoute = createRoute({
  method: 'get',
  path: '/futo-backups/integrations/immich/status',
  tags: ['Backups'],
  summary: 'Get Immich backup status',
  description: 'Retrieve the backup status of the Immich integration.',
  operationId: 'futoBackupsGetImmichBackupStatus',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ImmichBackupStatusDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsJobsRoute = createRoute({
  method: 'get',
  path: '/futo-backups/jobs',
  tags: ['Backups'],
  summary: 'List jobs',
  description: 'List the jobs for a repository, newest first.',
  operationId: 'futoBackupsGetJobs',
  request: {
    query: z.object({
      repositoryId: z
        .string()
        .openapi({
          param: { name: 'repositoryId', required: true, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: JobListResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsJobsIdRoute = createRoute({
  method: 'get',
  path: '/futo-backups/jobs/{id}',
  tags: ['Backups'],
  summary: 'Get a job',
  description: 'Get the status of a job.',
  operationId: 'futoBackupsGetJob',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: JobDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteFutoBackupsJobsIdRoute = createRoute({
  method: 'delete',
  path: '/futo-backups/jobs/{id}',
  tags: ['Backups'],
  summary: 'Cancel a job',
  description: 'Cancel a queued job, or stop it if it is already running.',
  operationId: 'futoBackupsCancelJob',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsJobsIdDownloadRoute = createRoute({
  method: 'get',
  path: '/futo-backups/jobs/{id}/download',
  tags: ['Backups'],
  summary: 'Download a job log',
  description: 'Download the full log of a job as JSON lines.',
  operationId: 'futoBackupsDownloadJobLog',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/jsonl': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsJobsIdSupportLogDownloadRoute = createRoute({
  method: 'get',
  path: '/futo-backups/jobs/{id}/support-log/download',
  tags: ['Backups'],
  summary: 'Download a job support log',
  description:
    'Download the verbose restic output recorded while the job ran in support mode, as JSON lines.',
  operationId: 'futoBackupsDownloadJobSupportLog',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/jsonl': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsOnboardingRoute = createRoute({
  method: 'get',
  path: '/futo-backups/onboarding',
  tags: ['Backups'],
  summary: 'Get backup onboarding status',
  description: 'Retrieve which onboarding steps this server has completed.',
  operationId: 'futoBackupsOnboardingStatus',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OnboardingStatusResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsOnboardingRecoveryKeyRoute = createRoute({
  method: 'get',
  path: '/futo-backups/onboarding/recovery-key',
  tags: ['Backups'],
  summary: 'Get the backup recovery key',
  description: 'Retrieve the recovery key that encrypts the backups of this server.',
  operationId: 'futoBackupsCurrentRecoveryKey',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CurrentRecoveryKeyResponseSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putFutoBackupsOnboardingRecoveryKeyRoute = createRoute({
  method: 'put',
  path: '/futo-backups/onboarding/recovery-key',
  tags: ['Backups'],
  summary: 'Import a backup recovery key',
  description: 'Replace the recovery key with one from an earlier installation.',
  operationId: 'futoBackupsImportRecoveryKey',
  request: {
    body: {
      content: { 'application/json': { schema: ImportRecoveryKeyRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsOnboardingRecoveryKeyRoute = createRoute({
  method: 'post',
  path: '/futo-backups/onboarding/recovery-key',
  tags: ['Backups'],
  summary: 'Confirm the backup recovery key',
  description: 'Record that the user has saved the recovery key.',
  operationId: 'futoBackupsConfirmRecoveryKey',
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsOnboardingReportErrorRoute = createRoute({
  method: 'post',
  path: '/futo-backups/onboarding/report-error',
  tags: ['Backups'],
  summary: 'Report a startup error',
  description: 'Send the current startup error to telemetry.',
  operationId: 'futoBackupsReportError',
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsOnboardingSkipRoute = createRoute({
  method: 'post',
  path: '/futo-backups/onboarding/skip',
  tags: ['Backups'],
  summary: 'Skip optional backup onboarding',
  description: 'Skip the optional configuration steps of onboarding.',
  operationId: 'futoBackupsSkipOnboardingExtraConfig',
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsOnboardingTelemetryRoute = createRoute({
  method: 'post',
  path: '/futo-backups/onboarding/telemetry',
  tags: ['Backups'],
  summary: 'Enable FUTO Backups telemetry',
  description: 'Record that the user consents to sending telemetry.',
  operationId: 'futoBackupsEnableTelemetry',
  responses: { 201: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsRepositoryRoute = createRoute({
  method: 'get',
  path: '/futo-backups/repository',
  tags: ['Backups'],
  summary: 'List backups',
  description: 'List the backup repositories known to this server.',
  operationId: 'futoBackupsGetRepositories',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: RepositoryListResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsRepositoryRoute = createRoute({
  method: 'post',
  path: '/futo-backups/repository',
  tags: ['Backups'],
  summary: 'Create a new backup',
  description: 'Create a backup repository on a backend.',
  operationId: 'futoBackupsCreateRepository',
  request: {
    query: z.object({
      backend: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'backend', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RepositoryCreateRequestDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: RepositoryCreateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsRepositoryInspectRoute = createRoute({
  method: 'get',
  path: '/futo-backups/repository/inspect',
  tags: ['Backups'],
  summary: 'List remote backups',
  description: 'List repositories on a backend that are not configured on this server.',
  operationId: 'futoBackupsInspectRepositories',
  request: {
    query: z.object({
      backend: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'backend', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: RepositoryInspectResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsRepositoryIdRoute = createRoute({
  method: 'post',
  path: '/futo-backups/repository/{id}',
  tags: ['Backups'],
  summary: 'Start a backup',
  description: 'Queue a backup to a repository and return the ID of its job.',
  operationId: 'futoBackupsCreateBackup',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: JobResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteFutoBackupsRepositoryIdRoute = createRoute({
  method: 'delete',
  path: '/futo-backups/repository/{id}',
  tags: ['Backups'],
  summary: 'Remove a backup',
  description: 'Remove a repository from this server.',
  operationId: 'futoBackupsDeleteRepository',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const patchFutoBackupsRepositoryIdRoute = createRoute({
  method: 'patch',
  path: '/futo-backups/repository/{id}',
  tags: ['Backups'],
  summary: 'Update a backup',
  description: 'Update the settings of a repository.',
  operationId: 'futoBackupsUpdateRepository',
  request: {
    query: z.object({
      backend: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'backend', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
    body: {
      content: { 'application/json': { schema: RepositoryUpdateRequestDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: RepositoryUpdateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putFutoBackupsRepositoryIdBackendRoute = createRoute({
  method: 'put',
  path: '/futo-backups/repository/{id}/backend',
  tags: ['Backups'],
  summary: 'Change the primary backend',
  description:
    'Create a new empty repository on the selected backend and redirect future backups to it. Existing snapshots are not migrated.',
  operationId: 'futoBackupsReconfigureRepositoryPrimaryBackend',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
    body: {
      content: {
        'application/json': { schema: RepositoryPrimaryBackendReconfigureRequestDtoSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: RepositoryCreateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsRepositoryIdImportRoute = createRoute({
  method: 'get',
  path: '/futo-backups/repository/{id}/import',
  tags: ['Backups'],
  summary: 'Check a repository import',
  description:
    'Check that an existing repository on a backend can be opened with the recovery key.',
  operationId: 'futoBackupsCheckImportRepository',
  request: {
    query: z.object({
      backend: z
        .string()
        .openapi({
          param: { name: 'backend', required: true, in: 'query', schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: RepositoryCheckImportResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsRepositoryIdImportRoute = createRoute({
  method: 'post',
  path: '/futo-backups/repository/{id}/import',
  tags: ['Backups'],
  summary: 'Import a repository',
  description: 'Add an existing repository on a backend to this server.',
  operationId: 'futoBackupsImportRepository',
  request: {
    query: z.object({
      backend: z
        .string()
        .openapi({
          param: { name: 'backend', required: true, in: 'query', schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: RepositoryCreateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsRepositoryIdSnapshotsRoute = createRoute({
  method: 'get',
  path: '/futo-backups/repository/{id}/snapshots',
  tags: ['Backups'],
  summary: 'List snapshots',
  description: 'List the snapshots in a repository.',
  operationId: 'futoBackupsGetSnapshots',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ListSnapshotsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsRepositoryIdSnapshotsPruneRoute = createRoute({
  method: 'post',
  path: '/futo-backups/repository/{id}/snapshots/prune',
  tags: ['Backups'],
  summary: 'Prune a repository',
  description:
    'Queue the removal of snapshots outside the retention policy and return the ID of its job.',
  operationId: 'futoBackupsPruneRepository',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: JobResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsRepositoryIdSnapshotsSnapshotRoute = createRoute({
  method: 'post',
  path: '/futo-backups/repository/{id}/snapshots/{snapshot}',
  tags: ['Backups'],
  summary: 'Restore a snapshot',
  description: 'Queue a restore of files from a snapshot and return the ID of its job.',
  operationId: 'futoBackupsRestoreSnapshot',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
      snapshot: z
        .string()
        .openapi({
          param: { name: 'snapshot', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RepositorySnapshotRestoreRequestDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: JobResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteFutoBackupsRepositoryIdSnapshotsSnapshotRoute = createRoute({
  method: 'delete',
  path: '/futo-backups/repository/{id}/snapshots/{snapshot}',
  tags: ['Backups'],
  summary: 'Delete a snapshot',
  description: 'Remove a snapshot from a repository.',
  operationId: 'futoBackupsForgetSnapshot',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
      snapshot: z
        .string()
        .openapi({
          param: { name: 'snapshot', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ListSnapshotsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsRepositoryIdSnapshotsSnapshotListingRoute = createRoute({
  method: 'get',
  path: '/futo-backups/repository/{id}/snapshots/{snapshot}/listing',
  tags: ['Backups'],
  summary: 'List snapshot files',
  description: 'List the files and folders at a path in a snapshot.',
  operationId: 'futoBackupsGetSnapshotListing',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
      snapshot: z
        .string()
        .openapi({
          param: { name: 'snapshot', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'path', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: FilesystemListingResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsRepositoryIdSnapshotsSnapshotRestoreFromPointRoute = createRoute({
  method: 'post',
  path: '/futo-backups/repository/{id}/snapshots/{snapshot}/restore-from-point',
  tags: ['Backups'],
  summary: 'Restore from snapshot',
  description: 'Restore the orchestrator to a previous state, wiping the current state.',
  operationId: 'futoBackupsRestoreFromPoint',
  request: {
    query: z.object({
      backend: z
        .string()
        .openapi({
          param: { name: 'backend', required: true, in: 'query', schema: { type: 'string' } },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
      snapshot: z
        .string()
        .openapi({
          param: { name: 'snapshot', required: true, in: 'path', schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: RepositorySnapshotRestoreFromPointRequestDtoSchema },
      },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: JobResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsRepositoryIdSyncDeletionRoute = createRoute({
  method: 'post',
  path: '/futo-backups/repository/{id}/sync-deletion',
  tags: ['Backups'],
  summary: 'Sync a remote deletion',
  description: 'Remove a repository from this server once it has been deleted from its backend.',
  operationId: 'futoBackupsSyncRepositoryDeletion',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: RepositorySyncDeletionResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsScheduleRoute = createRoute({
  method: 'get',
  path: '/futo-backups/schedule',
  tags: ['Backups'],
  summary: 'List schedules',
  description: 'List the backup schedules.',
  operationId: 'futoBackupsGetSchedules',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ScheduleListResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postFutoBackupsScheduleRoute = createRoute({
  method: 'post',
  path: '/futo-backups/schedule',
  tags: ['Backups'],
  summary: 'Create a schedule',
  description: 'Create a backup schedule for one or more repositories.',
  operationId: 'futoBackupsCreateSchedule',
  request: {
    body: {
      content: { 'application/json': { schema: ScheduleCreateRequestDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: ScheduleCreateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteFutoBackupsScheduleIdRoute = createRoute({
  method: 'delete',
  path: '/futo-backups/schedule/{id}',
  tags: ['Backups'],
  summary: 'Delete a schedule',
  description: 'Delete a backup schedule.',
  operationId: 'futoBackupsRemoveSchedule',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const patchFutoBackupsScheduleIdRoute = createRoute({
  method: 'patch',
  path: '/futo-backups/schedule/{id}',
  tags: ['Backups'],
  summary: 'Update a schedule',
  description: 'Update a backup schedule.',
  operationId: 'futoBackupsUpdateSchedule',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', required: true, in: 'path', schema: { type: 'string' } } }),
    }),
    body: {
      content: { 'application/json': { schema: ScheduleUpdateRequestDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ScheduleUpdateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getFutoBackupsSupportModeRoute = createRoute({
  method: 'get',
  path: '/futo-backups/support-mode',
  tags: ['Backups'],
  summary: 'Get support mode',
  description:
    'Retrieve how many upcoming runs use verbose restic logging, and whether they stream to FUTO.',
  operationId: 'futoBackupsGetSupportMode',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SupportModeResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putFutoBackupsSupportModeRoute = createRoute({
  method: 'put',
  path: '/futo-backups/support-mode',
  tags: ['Backups'],
  summary: 'Update support mode',
  description:
    'Set how many upcoming runs use verbose restic logging, and whether they stream to FUTO.',
  operationId: 'futoBackupsUpdateSupportMode',
  request: {
    body: {
      content: { 'application/json': { schema: SupportModeUpdateRequestDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SupportModeResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getJobsRoute = createRoute({
  method: 'get',
  path: '/jobs',
  tags: ['Jobs', 'Deprecated'],
  summary: 'Retrieve queue counts and status',
  description: 'Retrieve the counts of the current queue, as well as the current status.',
  operationId: 'getQueuesLegacy',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: QueuesResponseLegacyDtoSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postJobsRoute = createRoute({
  method: 'post',
  path: '/jobs',
  tags: ['Jobs'],
  summary: 'Create a manual job',
  description:
    'Run a specific job. Most jobs are queued automatically, but this endpoint allows for manual creation of a handful of jobs, including various cleanup tasks, as well as creating a new database backup.',
  operationId: 'createJob',
  request: {
    body: { content: { 'application/json': { schema: JobCreateDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putJobsNameRoute = createRoute({
  method: 'put',
  path: '/jobs/{name}',
  tags: ['Jobs', 'Deprecated'],
  summary: 'Run jobs',
  description:
    'Queue all assets for a specific job type. Defaults to only queueing assets that have not yet been processed, but the force command can be used to re-process all assets.',
  operationId: 'runQueueCommandLegacy',
  request: {
    params: z.object({
      name: QueueNameSchema.openapi({
        param: {
          name: 'name',
          required: true,
          in: 'path',
          schema: { $ref: '#/components/schemas/QueueName' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: QueueCommandDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: QueueResponseLegacyDtoSchema } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getLibrariesRoute = createRoute({
  method: 'get',
  path: '/libraries',
  tags: ['Libraries'],
  summary: 'Retrieve libraries',
  description: 'Retrieve a list of external libraries.',
  operationId: 'getAllLibraries',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(LibraryResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postLibrariesRoute = createRoute({
  method: 'post',
  path: '/libraries',
  tags: ['Libraries'],
  summary: 'Create a library',
  description: 'Create a new external library.',
  operationId: 'createLibrary',
  request: {
    body: { content: { 'application/json': { schema: CreateLibraryDtoSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: LibraryResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getLibrariesIdRoute = createRoute({
  method: 'get',
  path: '/libraries/{id}',
  tags: ['Libraries'],
  summary: 'Retrieve a library',
  description: 'Retrieve an external library by its ID.',
  operationId: 'getLibrary',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: LibraryResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putLibrariesIdRoute = createRoute({
  method: 'put',
  path: '/libraries/{id}',
  tags: ['Libraries'],
  summary: 'Update a library',
  description: 'Update an existing external library.',
  operationId: 'updateLibrary',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateLibraryDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: LibraryResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteLibrariesIdRoute = createRoute({
  method: 'delete',
  path: '/libraries/{id}',
  tags: ['Libraries'],
  summary: 'Delete a library',
  description: 'Delete an external library by its ID.',
  operationId: 'deleteLibrary',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postLibrariesIdScanRoute = createRoute({
  method: 'post',
  path: '/libraries/{id}/scan',
  tags: ['Libraries'],
  summary: 'Scan a library',
  description: 'Queue a scan for the external library to find and import new assets.',
  operationId: 'scanLibrary',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getLibrariesIdStatisticsRoute = createRoute({
  method: 'get',
  path: '/libraries/{id}/statistics',
  tags: ['Libraries'],
  summary: 'Retrieve library statistics',
  description:
    'Retrieve statistics for a specific external library, including number of videos, images, and storage usage.',
  operationId: 'getLibraryStatistics',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: LibraryStatsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postLibrariesIdValidateRoute = createRoute({
  method: 'post',
  path: '/libraries/{id}/validate',
  tags: ['Libraries'],
  summary: 'Validate library settings',
  description: 'Validate the settings of an external library.',
  operationId: 'validate',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ValidateLibraryDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ValidateLibraryResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getMapMarkersRoute = createRoute({
  method: 'get',
  path: '/map/markers',
  tags: ['Map'],
  summary: 'Retrieve map markers',
  description:
    'Retrieve a list of latitude and longitude coordinates for every asset with location data.',
  operationId: 'getMapMarkers',
  request: {
    query: z.object({
      fileCreatedAfter: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'fileCreatedAfter',
            required: false,
            in: 'query',
            description: 'Filter assets created after this date',
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$',
              example: '2024-01-01T00:00:00.000Z',
              type: 'string',
            },
          },
          example: '2024-01-01T00:00:00.000Z',
        }),
      fileCreatedBefore: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'fileCreatedBefore',
            required: false,
            in: 'query',
            description: 'Filter assets created before this date',
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$',
              example: '2024-01-01T00:00:00.000Z',
              type: 'string',
            },
          },
          example: '2024-01-01T00:00:00.000Z',
        }),
      isArchived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isArchived',
            required: false,
            in: 'query',
            description: 'Filter by archived status',
            schema: { type: 'boolean' },
          },
        }),
      isFavorite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isFavorite',
            required: false,
            in: 'query',
            description: 'Filter by favorite status',
            schema: { type: 'boolean' },
          },
        }),
      withPartners: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withPartners',
            required: false,
            in: 'query',
            description: 'Include partner assets',
            schema: { type: 'boolean' },
          },
        }),
      withSharedAlbums: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withSharedAlbums',
            required: false,
            in: 'query',
            description: 'Include shared album assets',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MapMarkerResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getMapReverseGeocodeRoute = createRoute({
  method: 'get',
  path: '/map/reverse-geocode',
  tags: ['Map'],
  summary: 'Reverse geocode coordinates',
  description:
    'Retrieve location information (e.g., city, country) for given latitude and longitude coordinates.',
  operationId: 'reverseGeocode',
  request: {
    query: z.object({
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            name: 'lat',
            required: true,
            in: 'query',
            description: 'Latitude (-90 to 90)',
            schema: { format: 'double', type: 'number' },
          },
        }),
      lon: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            name: 'lon',
            required: true,
            in: 'query',
            description: 'Longitude (-180 to 180)',
            schema: { format: 'double', type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MapReverseGeocodeResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getMemoriesRoute = createRoute({
  method: 'get',
  path: '/memories',
  tags: ['Memories'],
  summary: 'Retrieve memories',
  description:
    'Retrieve a list of memories. Memories are sorted descending by creation date by default, although they can also be sorted in ascending order, or randomly.',
  operationId: 'searchMemories',
  request: {
    query: z.object({
      for: z.iso
        .date()
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'for',
            required: false,
            in: 'query',
            description: 'Filter by date',
            schema: {
              format: 'date',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$',
              example: '2024-01-01',
              type: 'string',
            },
          },
          example: '2024-01-01',
        }),
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            required: false,
            in: 'query',
            description: 'Memory ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      isSaved: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isSaved',
            required: false,
            in: 'query',
            description: 'Filter by saved status',
            schema: { type: 'boolean' },
          },
        }),
      isTrashed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isTrashed',
            required: false,
            in: 'query',
            description: 'Include trashed memories',
            schema: { type: 'boolean' },
          },
        }),
      isUpcoming: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isUpcoming',
            required: false,
            in: 'query',
            description: 'Filter by memories that have not been shown yet',
            schema: { type: 'boolean' },
          },
        }),
      order: MemorySearchOrderSchema.openapi({
        param: {
          name: 'order',
          required: false,
          in: 'query',
          schema: { $ref: '#/components/schemas/MemorySearchOrder' },
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(9007199254740991),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            required: false,
            in: 'query',
            description: 'Page number',
            schema: { minimum: 1, maximum: 9007199254740991, type: 'integer' },
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(9007199254740991),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            required: false,
            in: 'query',
            description: 'Number of memories to return',
            schema: { minimum: 1, maximum: 9007199254740991, type: 'integer' },
          },
        }),
      type: MemoryTypeSchema.openapi({
        param: {
          name: 'type',
          required: false,
          in: 'query',
          schema: { $ref: '#/components/schemas/MemoryType' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MemoryResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postMemoriesRoute = createRoute({
  method: 'post',
  path: '/memories',
  tags: ['Memories'],
  summary: 'Create a memory',
  description:
    'Create a new memory by providing a name, description, and a list of asset IDs to include in the memory.',
  operationId: 'createMemory',
  request: {
    body: { content: { 'application/json': { schema: MemoryCreateDtoSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: MemoryResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getMemoriesStatisticsRoute = createRoute({
  method: 'get',
  path: '/memories/statistics',
  tags: ['Memories'],
  summary: 'Retrieve memories statistics',
  description:
    'Retrieve statistics about memories, such as total count and other relevant metrics.',
  operationId: 'memoriesStatistics',
  request: {
    query: z.object({
      for: z.iso
        .date()
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'for',
            required: false,
            in: 'query',
            description: 'Filter by date',
            schema: {
              format: 'date',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$',
              example: '2024-01-01',
              type: 'string',
            },
          },
          example: '2024-01-01',
        }),
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            required: false,
            in: 'query',
            description: 'Memory ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      isSaved: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isSaved',
            required: false,
            in: 'query',
            description: 'Filter by saved status',
            schema: { type: 'boolean' },
          },
        }),
      isTrashed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isTrashed',
            required: false,
            in: 'query',
            description: 'Include trashed memories',
            schema: { type: 'boolean' },
          },
        }),
      isUpcoming: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isUpcoming',
            required: false,
            in: 'query',
            description: 'Filter by memories that have not been shown yet',
            schema: { type: 'boolean' },
          },
        }),
      order: MemorySearchOrderSchema.openapi({
        param: {
          name: 'order',
          required: false,
          in: 'query',
          schema: { $ref: '#/components/schemas/MemorySearchOrder' },
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(9007199254740991),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            required: false,
            in: 'query',
            description: 'Page number',
            schema: { minimum: 1, maximum: 9007199254740991, type: 'integer' },
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(9007199254740991),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            required: false,
            in: 'query',
            description: 'Number of memories to return',
            schema: { minimum: 1, maximum: 9007199254740991, type: 'integer' },
          },
        }),
      type: MemoryTypeSchema.openapi({
        param: {
          name: 'type',
          required: false,
          in: 'query',
          schema: { $ref: '#/components/schemas/MemoryType' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MemoryStatisticsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getMemoriesIdRoute = createRoute({
  method: 'get',
  path: '/memories/{id}',
  tags: ['Memories'],
  summary: 'Retrieve a memory',
  description: 'Retrieve a specific memory by its ID.',
  operationId: 'getMemory',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MemoryResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putMemoriesIdRoute = createRoute({
  method: 'put',
  path: '/memories/{id}',
  tags: ['Memories'],
  summary: 'Update a memory',
  description: 'Update an existing memory by its ID.',
  operationId: 'updateMemory',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MemoryUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MemoryResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteMemoriesIdRoute = createRoute({
  method: 'delete',
  path: '/memories/{id}',
  tags: ['Memories'],
  summary: 'Delete a memory',
  description: 'Delete a specific memory by its ID.',
  operationId: 'deleteMemory',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putMemoriesIdAssetsRoute = createRoute({
  method: 'put',
  path: '/memories/{id}/assets',
  tags: ['Memories'],
  summary: 'Add assets to a memory',
  description: 'Add a list of asset IDs to a specific memory.',
  operationId: 'addMemoryAssets',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BulkIdsDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BulkIdResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteMemoriesIdAssetsRoute = createRoute({
  method: 'delete',
  path: '/memories/{id}/assets',
  tags: ['Memories'],
  summary: 'Remove assets from a memory',
  description: 'Remove a list of asset IDs from a specific memory.',
  operationId: 'removeMemoryAssets',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BulkIdsDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BulkIdResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getNotificationsRoute = createRoute({
  method: 'get',
  path: '/notifications',
  tags: ['Notifications'],
  summary: 'Retrieve notifications',
  description: 'Retrieve a list of notifications.',
  operationId: 'getNotifications',
  request: {
    query: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            required: false,
            in: 'query',
            description: 'Filter by notification ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      level: NotificationLevelSchema.openapi({
        param: {
          name: 'level',
          required: false,
          in: 'query',
          schema: { $ref: '#/components/schemas/NotificationLevel' },
        },
      }).exactOptional(),
      type: NotificationTypeSchema.openapi({
        param: {
          name: 'type',
          required: false,
          in: 'query',
          schema: { $ref: '#/components/schemas/NotificationType' },
        },
      }).exactOptional(),
      unread: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'unread',
            required: false,
            in: 'query',
            description: 'Filter by unread status',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(NotificationDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putNotificationsRoute = createRoute({
  method: 'put',
  path: '/notifications',
  tags: ['Notifications'],
  summary: 'Update notifications',
  description:
    'Update a list of notifications. Allows to bulk-set the read status of notifications.',
  operationId: 'updateNotifications',
  request: {
    body: {
      content: { 'application/json': { schema: NotificationUpdateAllDtoSchema } },
      required: true,
    },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteNotificationsRoute = createRoute({
  method: 'delete',
  path: '/notifications',
  tags: ['Notifications'],
  summary: 'Delete notifications',
  description: 'Delete a list of notifications at once.',
  operationId: 'deleteNotifications',
  request: {
    body: {
      content: { 'application/json': { schema: NotificationDeleteAllDtoSchema } },
      required: true,
    },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getNotificationsIdRoute = createRoute({
  method: 'get',
  path: '/notifications/{id}',
  tags: ['Notifications'],
  summary: 'Get a notification',
  description: 'Retrieve a specific notification identified by id.',
  operationId: 'getNotification',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: NotificationDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putNotificationsIdRoute = createRoute({
  method: 'put',
  path: '/notifications/{id}',
  tags: ['Notifications'],
  summary: 'Update a notification',
  description: 'Update a specific notification to set its read status.',
  operationId: 'updateNotification',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: NotificationUpdateDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: NotificationDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteNotificationsIdRoute = createRoute({
  method: 'delete',
  path: '/notifications/{id}',
  tags: ['Notifications'],
  summary: 'Delete a notification',
  description: 'Delete a specific notification.',
  operationId: 'deleteNotification',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postOauthAuthorizeRoute = createRoute({
  method: 'post',
  path: '/oauth/authorize',
  tags: ['Authentication'],
  summary: 'Start OAuth',
  description: 'Initiate the OAuth authorization process.',
  operationId: 'startOAuth',
  request: {
    body: { content: { 'application/json': { schema: OAuthConfigDtoSchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: OAuthAuthorizeResponseDtoSchema } },
    },
  },
})

export const postOauthBackchannelLogoutRoute = createRoute({
  method: 'post',
  path: '/oauth/backchannel-logout',
  tags: ['Authentication'],
  summary: 'Backchannel OAuth logout',
  description:
    'Logout the OAuth account and invalidate the session specified by the sid claim or all sessions if the sid claim is not present.',
  operationId: 'logoutOAuth',
  request: {
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: OAuthBackchannelLogoutDtoSchema } },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const postOauthCallbackRoute = createRoute({
  method: 'post',
  path: '/oauth/callback',
  tags: ['Authentication'],
  summary: 'Finish OAuth',
  description:
    'Complete the OAuth authorization process by exchanging the authorization code for a session token.',
  operationId: 'finishOAuth',
  request: {
    body: { content: { 'application/json': { schema: OAuthCallbackDtoSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: LoginResponseDtoSchema } } },
  },
})

export const postOauthLinkRoute = createRoute({
  method: 'post',
  path: '/oauth/link',
  tags: ['Authentication'],
  summary: 'Link OAuth account',
  description: 'Link an OAuth account to the authenticated user.',
  operationId: 'linkOAuthAccount',
  request: {
    body: { content: { 'application/json': { schema: OAuthCallbackDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserAdminResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getOauthMobileRedirectRoute = createRoute({
  method: 'get',
  path: '/oauth/mobile-redirect',
  tags: ['Authentication'],
  summary: 'Redirect OAuth to mobile',
  description:
    'Requests to this URL are automatically forwarded to the mobile app, and is used in some cases for OAuth redirecting.',
  operationId: 'redirectOAuthToMobile',
  responses: { 200: { description: '' } },
})

export const postOauthUnlinkRoute = createRoute({
  method: 'post',
  path: '/oauth/unlink',
  tags: ['Authentication'],
  summary: 'Unlink OAuth account',
  description: 'Unlink the OAuth account from the authenticated user.',
  operationId: 'unlinkOAuthAccount',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserAdminResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPartnersRoute = createRoute({
  method: 'get',
  path: '/partners',
  tags: ['Partners'],
  summary: 'Retrieve partners',
  description: 'Retrieve a list of partners with whom assets are shared.',
  operationId: 'getPartners',
  request: {
    query: z.object({
      direction: PartnerDirectionSchema.openapi({
        param: {
          name: 'direction',
          required: true,
          in: 'query',
          schema: { $ref: '#/components/schemas/PartnerDirection' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PartnerResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postPartnersRoute = createRoute({
  method: 'post',
  path: '/partners',
  tags: ['Partners'],
  summary: 'Create a partner',
  description: 'Create a new partner to share assets with.',
  operationId: 'createPartner',
  request: {
    body: { content: { 'application/json': { schema: PartnerCreateDtoSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: PartnerResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putPartnersIdRoute = createRoute({
  method: 'put',
  path: '/partners/{id}',
  tags: ['Partners'],
  summary: 'Update a partner',
  description: "Specify whether a partner's assets should appear in the user's timeline.",
  operationId: 'updatePartner',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PartnerUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PartnerResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postPartnersIdRoute = createRoute({
  method: 'post',
  path: '/partners/{id}',
  tags: ['Partners', 'Deprecated'],
  summary: 'Create a partner',
  description: 'Create a new partner to share assets with.',
  operationId: 'createPartnerDeprecated',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: PartnerResponseDtoSchema } } },
  },
  deprecated: true,
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deletePartnersIdRoute = createRoute({
  method: 'delete',
  path: '/partners/{id}',
  tags: ['Partners'],
  summary: 'Remove a partner',
  description: 'Stop sharing assets with a partner.',
  operationId: 'removePartner',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPasskeysRoute = createRoute({
  method: 'get',
  path: '/passkeys',
  tags: ['Passkeys'],
  summary: 'Search passkeys',
  description: 'Search the passkeys of the current user.',
  operationId: 'searchPasskeys',
  request: {
    query: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            required: false,
            in: 'query',
            description: 'Filter by passkey ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PasskeyResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postPasskeysAuthenticationFinishRoute = createRoute({
  method: 'post',
  path: '/passkeys/authentication/finish',
  tags: ['Passkeys'],
  summary: 'Finish passkey authentication',
  description: 'Verify the response from the authenticator and receive a session token.',
  operationId: 'finishAuthentication',
  request: {
    body: {
      content: { 'application/json': { schema: PasskeyAuthenticationFinishDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: LoginResponseDtoSchema } } },
  },
})

export const postPasskeysAuthenticationStartRoute = createRoute({
  method: 'post',
  path: '/passkeys/authentication/start',
  tags: ['Passkeys'],
  summary: 'Start passkey authentication',
  description: 'Generate the options used by the browser to sign in with a passkey.',
  operationId: 'startAuthentication',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PasskeyAuthenticationOptionsDtoSchema } },
    },
  },
})

export const postPasskeysRegistrationFinishRoute = createRoute({
  method: 'post',
  path: '/passkeys/registration/finish',
  tags: ['Passkeys'],
  summary: 'Finish passkey registration',
  description:
    'Verify the response from the authenticator and save the new passkey for the current user.',
  operationId: 'finishRegistration',
  request: {
    body: {
      content: { 'application/json': { schema: PasskeyRegistrationFinishDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: PasskeyResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postPasskeysRegistrationStartRoute = createRoute({
  method: 'post',
  path: '/passkeys/registration/start',
  tags: ['Passkeys'],
  summary: 'Start passkey registration',
  description:
    'Generate the options used by the browser to create a new passkey for the current user.',
  operationId: 'startRegistration',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PasskeyRegistrationOptionsDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPasskeysIdRoute = createRoute({
  method: 'get',
  path: '/passkeys/{id}',
  tags: ['Passkeys'],
  summary: 'Retrieve a passkey',
  description: 'Retrieve a passkey by its ID. The current user must own this passkey.',
  operationId: 'getPasskey',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PasskeyResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deletePasskeysIdRoute = createRoute({
  method: 'delete',
  path: '/passkeys/{id}',
  tags: ['Passkeys'],
  summary: 'Delete a passkey',
  description: 'Delete a passkey by its ID. The current user must own this passkey.',
  operationId: 'deletePasskey',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const patchPasskeysIdRoute = createRoute({
  method: 'patch',
  path: '/passkeys/{id}',
  tags: ['Passkeys'],
  summary: 'Update a passkey',
  description: 'Update the name of a passkey by its ID. The current user must own this passkey.',
  operationId: 'updatePasskey',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PasskeyUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PasskeyResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPeopleRoute = createRoute({
  method: 'get',
  path: '/people',
  tags: ['People'],
  summary: 'Get all people',
  description: 'Retrieve a list of all people.',
  operationId: 'getAllPeople',
  request: {
    query: z.object({
      closestAssetId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'closestAssetId',
            required: false,
            in: 'query',
            description: 'Closest asset ID for similarity search',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      closestPersonId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'closestPersonId',
            required: false,
            in: 'query',
            description: 'Closest person ID for similarity search',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      isFavorite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isFavorite',
            required: false,
            in: 'query',
            description: 'Filter by favorite status',
            schema: { type: 'boolean' },
          },
        }),
      isHidden: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isHidden',
            required: false,
            in: 'query',
            description: 'Filter by hidden status',
            schema: { type: 'boolean' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            required: false,
            in: 'query',
            description: 'Filter by person name',
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(9007199254740991),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            required: false,
            in: 'query',
            description: 'Page number for pagination',
            schema: { minimum: 1, maximum: 9007199254740991, default: 1, type: 'integer' },
          },
        }),
      sharedById: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sharedById',
            required: false,
            in: 'query',
            description: 'Only include people to which the user gave access',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              type: 'string',
            },
          },
        }),
      sharedWithId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sharedWithId',
            required: false,
            in: 'query',
            description: 'Only include people to which the user was given access',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              type: 'string',
            },
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(500)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            required: false,
            in: 'query',
            description: 'Number of items per page',
            schema: { minimum: 1, maximum: 1000, default: 500, type: 'integer' },
          },
        }),
      withHidden: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withHidden',
            required: false,
            in: 'query',
            description: 'Include hidden people',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PeopleResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putPeopleRoute = createRoute({
  method: 'put',
  path: '/people',
  tags: ['People'],
  summary: 'Update people',
  description: 'Bulk update multiple people at once.',
  operationId: 'updatePeople',
  request: {
    body: { content: { 'application/json': { schema: PeopleUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BulkIdResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postPeopleRoute = createRoute({
  method: 'post',
  path: '/people',
  tags: ['People'],
  summary: 'Create a person',
  description: 'Create a new person that can have multiple faces assigned to them.',
  operationId: 'createPerson',
  request: {
    body: { content: { 'application/json': { schema: PersonCreateDtoSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: PersonResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deletePeopleRoute = createRoute({
  method: 'delete',
  path: '/people',
  tags: ['People'],
  summary: 'Delete people',
  description: 'Bulk delete a list of people at once.',
  operationId: 'deletePeople',
  request: {
    body: { content: { 'application/json': { schema: PeopleDeleteDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postPeopleMergeRoute = createRoute({
  method: 'post',
  path: '/people/merge',
  tags: ['People'],
  summary: 'Merge people',
  description:
    'Merge an ordered list of people together into a single person. The final name and birth date are always the first defined value, following the order. Also automatically merges people for other users in the cluster group, skipping people that would result in overriding a previously set name or birth date.',
  operationId: 'mergePeople',
  request: {
    body: { content: { 'application/json': { schema: MergePersonDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BulkIdResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPeopleUsersRoute = createRoute({
  method: 'get',
  path: '/people/users',
  tags: ['People'],
  summary: 'Get people access',
  description: 'Retrieve a list of users and the people to which they have been given access',
  operationId: 'getUsersForPeople',
  request: {
    query: z.object({
      direction: SharingDirectionSchema.openapi({
        param: {
          name: 'direction',
          required: false,
          in: 'query',
          schema: { $ref: '#/components/schemas/SharingDirection' },
        },
      }).exactOptional(),
      personId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'personId',
            required: false,
            in: 'query',
            description: 'Person ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              type: 'string',
            },
          },
        }),
      role: PersonUserRoleSchema.openapi({
        param: {
          name: 'role',
          required: false,
          in: 'query',
          description: 'Role of user',
          schema: { $ref: '#/components/schemas/PersonUserRole' },
        },
      }).exactOptional(),
      sharedById: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sharedById',
            required: false,
            in: 'query',
            description: 'User ID of the user that gave access',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              type: 'string',
            },
          },
        }),
      sharedWithId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'sharedWithId',
            required: false,
            in: 'query',
            description: 'User ID of the user that was given access',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PersonUsersResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putPeopleUsersRoute = createRoute({
  method: 'put',
  path: '/people/users',
  tags: ['People'],
  summary: 'Upsert user access',
  description: 'Give users access to people',
  operationId: 'upsertPeopleUsers',
  request: {
    body: {
      content: { 'application/json': { schema: PeopleUsersUpsertDtoSchema } },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deletePeopleUsersRoute = createRoute({
  method: 'delete',
  path: '/people/users',
  tags: ['People'],
  summary: 'Remove users from people',
  description: 'Remove user access to people',
  operationId: 'removeUsersFromPeople',
  request: {
    body: {
      content: { 'application/json': { schema: PersonUsersDeleteDtoSchema } },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPeopleIdRoute = createRoute({
  method: 'get',
  path: '/people/{id}',
  tags: ['People'],
  summary: 'Get a person',
  description: 'Retrieve a person by id.',
  operationId: 'getPerson',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PersonResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putPeopleIdRoute = createRoute({
  method: 'put',
  path: '/people/{id}',
  tags: ['People'],
  summary: 'Update person',
  description: 'Update an individual person.',
  operationId: 'updatePerson',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PersonUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PersonResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deletePeopleIdRoute = createRoute({
  method: 'delete',
  path: '/people/{id}',
  tags: ['People'],
  summary: 'Delete person',
  description: 'Delete an individual person.',
  operationId: 'deletePerson',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PersonDeleteDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postPeopleIdMergeRoute = createRoute({
  method: 'post',
  path: '/people/{id}/merge',
  tags: ['People', 'Deprecated'],
  summary: 'Merge people',
  description: 'Merge a list of people into the person specified in the path parameter.',
  operationId: 'mergePersonLegacy',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MergePersonDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BulkIdResponseDtoSchema) } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putPeopleIdReassignRoute = createRoute({
  method: 'put',
  path: '/people/{id}/reassign',
  tags: ['People'],
  summary: 'Reassign faces',
  description: 'Bulk reassign a list of faces to a different person.',
  operationId: 'reassignFaces',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AssetFaceUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PersonResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPeopleIdStatisticsRoute = createRoute({
  method: 'get',
  path: '/people/{id}/statistics',
  tags: ['People'],
  summary: 'Get person statistics',
  description: 'Retrieve statistics about a specific person.',
  operationId: 'getPersonStatistics',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PersonStatisticsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPeopleIdThumbnailRoute = createRoute({
  method: 'get',
  path: '/people/{id}/thumbnail',
  tags: ['People'],
  summary: 'Get person thumbnail',
  description: 'Retrieve the thumbnail file for a person.',
  operationId: 'getPersonThumbnail',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPluginsRoute = createRoute({
  method: 'get',
  path: '/plugins',
  tags: ['Plugins'],
  summary: 'List all plugins',
  description: 'Retrieve a list of plugins available to the authenticated user.',
  operationId: 'searchPlugins',
  request: {
    query: z.object({
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'description', required: false, in: 'query', schema: { type: 'string' } },
        }),
      enabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'enabled',
            required: false,
            in: 'query',
            description: 'Whether the plugin is enabled',
            schema: { type: 'boolean' },
          },
        }),
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            required: false,
            in: 'query',
            description: 'Plugin ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', required: false, in: 'query', schema: { type: 'string' } },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'title', required: false, in: 'query', schema: { type: 'string' } },
        }),
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'version', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PluginResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPluginsMethodsRoute = createRoute({
  method: 'get',
  path: '/plugins/methods',
  tags: ['Plugins'],
  summary: 'Retrieve plugin methods',
  description: 'Retrieve a list of plugin methods',
  operationId: 'searchPluginMethods',
  request: {
    query: z.object({
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'description', required: false, in: 'query', schema: { type: 'string' } },
        }),
      enabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'enabled',
            required: false,
            in: 'query',
            description: 'Whether the plugin method is enabled',
            schema: { type: 'boolean' },
          },
        }),
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            required: false,
            in: 'query',
            description: 'Plugin method ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', required: false, in: 'query', schema: { type: 'string' } },
        }),
      pluginName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pluginName',
            required: false,
            in: 'query',
            description: 'Plugin name',
            schema: { type: 'string' },
          },
        }),
      pluginVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pluginVersion',
            required: false,
            in: 'query',
            description: 'Plugin version',
            schema: { type: 'string' },
          },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'title', required: false, in: 'query', schema: { type: 'string' } },
        }),
      trigger: WorkflowTriggerSchema.openapi({
        param: {
          name: 'trigger',
          required: false,
          in: 'query',
          description: 'Workflow trigger',
          schema: { $ref: '#/components/schemas/WorkflowTrigger' },
        },
      }).exactOptional(),
      type: WorkflowTypeSchema.openapi({
        param: {
          name: 'type',
          required: false,
          in: 'query',
          description: 'Workflow types',
          schema: { $ref: '#/components/schemas/WorkflowType' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PluginMethodResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPluginsTemplatesRoute = createRoute({
  method: 'get',
  path: '/plugins/templates',
  tags: ['Plugins'],
  summary: 'Retrieve workflow templates',
  description: 'Retrieve workflow templates provided by installed plugins',
  operationId: 'searchPluginTemplates',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PluginTemplateResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPluginsIdRoute = createRoute({
  method: 'get',
  path: '/plugins/{id}',
  tags: ['Plugins'],
  summary: 'Retrieve a plugin',
  description: 'Retrieve information about a specific plugin by its ID.',
  operationId: 'getPlugin',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PluginResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getPublicConfigRoute = createRoute({
  method: 'get',
  path: '/public/config',
  tags: ['Config (public)'],
  summary: 'Get the public configuration',
  description: 'Retrieve the system configuration properties that are visible to everyone.',
  operationId: 'getPublicConfig',
  responses: {
    200: { description: '', content: { 'application/json': { schema: PublicConfigDtoSchema } } },
  },
})

export const getPublicConfigDefaultsRoute = createRoute({
  method: 'get',
  path: '/public/config/defaults',
  tags: ['Config (public)'],
  summary: 'Get the public configuration defaults',
  description:
    'Retrieve the default value of the configuration properties that are visible to everyone.',
  operationId: 'getPublicConfigDefaults',
  responses: {
    200: { description: '', content: { 'application/json': { schema: PublicConfigDtoSchema } } },
  },
})

export const getQueuesRoute = createRoute({
  method: 'get',
  path: '/queues',
  tags: ['Queues'],
  summary: 'List all queues',
  description: 'Retrieves a list of queues.',
  operationId: 'getQueues',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(QueueResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getQueuesNameRoute = createRoute({
  method: 'get',
  path: '/queues/{name}',
  tags: ['Queues'],
  summary: 'Retrieve a queue',
  description: 'Retrieves a specific queue by its name.',
  operationId: 'getQueue',
  request: {
    params: z.object({
      name: QueueNameSchema.openapi({
        param: {
          name: 'name',
          required: true,
          in: 'path',
          schema: { $ref: '#/components/schemas/QueueName' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: QueueResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putQueuesNameRoute = createRoute({
  method: 'put',
  path: '/queues/{name}',
  tags: ['Queues'],
  summary: 'Update a queue',
  description: 'Change the paused status of a specific queue.',
  operationId: 'updateQueue',
  request: {
    params: z.object({
      name: QueueNameSchema.openapi({
        param: {
          name: 'name',
          required: true,
          in: 'path',
          schema: { $ref: '#/components/schemas/QueueName' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: QueueUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: QueueResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getQueuesNameJobsRoute = createRoute({
  method: 'get',
  path: '/queues/{name}/jobs',
  tags: ['Queues'],
  summary: 'Retrieve queue jobs',
  description: 'Retrieves a list of queue jobs from the specified queue.',
  operationId: 'getQueueJobs',
  request: {
    params: z.object({
      name: QueueNameSchema.openapi({
        param: {
          name: 'name',
          required: true,
          in: 'path',
          schema: { $ref: '#/components/schemas/QueueName' },
        },
      }),
    }),
    query: z.object({
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(QueueJobStatusSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            required: false,
            in: 'query',
            description: 'Filter jobs by status',
            schema: { type: 'array', items: { $ref: '#/components/schemas/QueueJobStatus' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(QueueJobResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteQueuesNameJobsRoute = createRoute({
  method: 'delete',
  path: '/queues/{name}/jobs',
  tags: ['Queues'],
  summary: 'Empty a queue',
  description: 'Removes all jobs from the specified queue.',
  operationId: 'emptyQueue',
  request: {
    params: z.object({
      name: QueueNameSchema.openapi({
        param: {
          name: 'name',
          required: true,
          in: 'path',
          schema: { $ref: '#/components/schemas/QueueName' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: QueueDeleteDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSearchCitiesRoute = createRoute({
  method: 'get',
  path: '/search/cities',
  tags: ['Search'],
  summary: 'Retrieve assets by city',
  description:
    'Retrieve a list of assets with each asset belonging to a different city. This endpoint is used on the places pages to show a single thumbnail for each city the user has assets in.',
  operationId: 'getAssetsByCity',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AssetResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSearchExploreRoute = createRoute({
  method: 'get',
  path: '/search/explore',
  tags: ['Search'],
  summary: 'Retrieve explore data',
  description: 'Retrieve data for the explore section, such as popular people and places.',
  operationId: 'getExploreData',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(SearchExploreResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postSearchLargeAssetsRoute = createRoute({
  method: 'post',
  path: '/search/large-assets',
  tags: ['Search', 'Deprecated'],
  summary: 'Search large assets',
  description: 'Search for assets that are considered large based on specified criteria.',
  operationId: 'searchLargeAssets',
  request: {
    query: z.object({
      albumIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .uuid()
              .regex(
                /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
              ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'albumIds',
            required: false,
            in: 'query',
            description: 'Filter by album IDs',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid',
                pattern:
                  '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              },
            },
          },
        }),
      city: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'city',
            required: false,
            in: 'query',
            description: 'Filter by city name',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'string', nullable: true },
          },
        }),
      country: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'country',
            required: false,
            in: 'query',
            description: 'Filter by country name',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'string', nullable: true },
          },
        }),
      createdAfter: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            required: false,
            in: 'query',
            description: 'Filter by creation date (after)',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$',
              example: '2024-01-01T00:00:00.000Z',
              type: 'string',
            },
          },
          example: '2024-01-01T00:00:00.000Z',
        }),
      createdBefore: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            required: false,
            in: 'query',
            description: 'Filter by creation date (before)',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$',
              example: '2024-01-01T00:00:00.000Z',
              type: 'string',
            },
          },
          example: '2024-01-01T00:00:00.000Z',
        }),
      isEncoded: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isEncoded',
            required: false,
            in: 'query',
            description: 'Filter by encoded status',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'boolean' },
          },
        }),
      isFavorite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isFavorite',
            required: false,
            in: 'query',
            description: 'Filter by favorite status',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'boolean' },
          },
        }),
      isMotion: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isMotion',
            required: false,
            in: 'query',
            description: 'Filter by motion photo status',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'boolean' },
          },
        }),
      isNotInAlbum: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isNotInAlbum',
            required: false,
            in: 'query',
            description: 'Filter assets not in any album',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'boolean' },
          },
        }),
      isOffline: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isOffline',
            required: false,
            in: 'query',
            description: 'Filter by offline status',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'boolean' },
          },
        }),
      lensModel: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'lensModel',
            required: false,
            in: 'query',
            description: 'Filter by lens model',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'string', nullable: true },
          },
        }),
      libraryId: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .uuid()
          .regex(
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
          )
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'libraryId',
            required: false,
            in: 'query',
            description: 'Library ID to filter by',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: {
              type: 'string',
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              nullable: true,
            },
          },
        }),
      make: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'make',
            required: false,
            in: 'query',
            description: 'Filter by camera make',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'string', nullable: true },
          },
        }),
      minFileSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(9007199254740991),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'minFileSize',
            required: false,
            in: 'query',
            description: 'Minimum file size in bytes',
            schema: { minimum: 0, maximum: 9007199254740991, type: 'integer' },
          },
        }),
      model: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'model',
            required: false,
            in: 'query',
            description: 'Filter by camera model',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'string', nullable: true },
          },
        }),
      ocr: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ocr',
            required: false,
            in: 'query',
            description: 'Filter by OCR text content',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'string' },
          },
        }),
      personIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .uuid()
              .regex(
                /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
              ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'personIds',
            required: false,
            in: 'query',
            description: 'Filter by person IDs',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid',
                pattern:
                  '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              },
            },
          },
        }),
      rating: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(1).max(5),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'rating',
            required: false,
            in: 'query',
            description: 'Filter by rating [1-5], or null for unrated',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              {
                version: 'v2.6.0',
                state: 'Updated',
                description:
                  'Using -1 as a rating is deprecated and will be removed in the next major version.',
              },
              {
                version: 'v3',
                state: 'Updated',
                description: 'Using -1 as a rating is no longer valid.',
              },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'integer', minimum: 1, maximum: 5, nullable: true },
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(250)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            required: false,
            in: 'query',
            description: 'Number of results to return',
            schema: { minimum: 1, maximum: 1000, default: 250, type: 'integer' },
          },
        }),
      state: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            required: false,
            in: 'query',
            description: 'Filter by state/province name',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'string', nullable: true },
          },
        }),
      tagIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .uuid()
              .regex(
                /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
              ),
          ),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'tagIds',
            required: false,
            in: 'query',
            description: 'Filter by tag IDs',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                format: 'uuid',
                pattern:
                  '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              },
              nullable: true,
            },
          },
        }),
      takenAfter: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'takenAfter',
            required: false,
            in: 'query',
            description: 'Filter by taken date (after)',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$',
              example: '2024-01-01T00:00:00.000Z',
              type: 'string',
            },
          },
          example: '2024-01-01T00:00:00.000Z',
        }),
      takenBefore: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'takenBefore',
            required: false,
            in: 'query',
            description: 'Filter by taken date (before)',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$',
              example: '2024-01-01T00:00:00.000Z',
              type: 'string',
            },
          },
          example: '2024-01-01T00:00:00.000Z',
        }),
      trashedAfter: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'trashedAfter',
            required: false,
            in: 'query',
            description: 'Filter by trash date (after)',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$',
              example: '2024-01-01T00:00:00.000Z',
              type: 'string',
            },
          },
          example: '2024-01-01T00:00:00.000Z',
        }),
      trashedBefore: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'trashedBefore',
            required: false,
            in: 'query',
            description: 'Filter by trash date (before)',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$',
              example: '2024-01-01T00:00:00.000Z',
              type: 'string',
            },
          },
          example: '2024-01-01T00:00:00.000Z',
        }),
      type: AssetTypeEnumSchema.openapi({
        param: {
          name: 'type',
          required: false,
          in: 'query',
          'x-immich-history': [
            { version: 'v1', state: 'Added' },
            { version: 'v2', state: 'Stable' },
            { version: 'v3.2.0', state: 'Deprecated' },
          ],
          'x-immich-state': 'Deprecated',
          deprecated: true,
          schema: { $ref: '#/components/schemas/AssetTypeEnum' },
        },
      }).exactOptional(),
      updatedAfter: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedAfter',
            required: false,
            in: 'query',
            description: 'Filter by update date (after)',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$',
              example: '2024-01-01T00:00:00.000Z',
              type: 'string',
            },
          },
          example: '2024-01-01T00:00:00.000Z',
        }),
      updatedBefore: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedBefore',
            required: false,
            in: 'query',
            description: 'Filter by update date (before)',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$',
              example: '2024-01-01T00:00:00.000Z',
              type: 'string',
            },
          },
          example: '2024-01-01T00:00:00.000Z',
        }),
      visibility: AssetVisibilitySchema.openapi({
        param: {
          name: 'visibility',
          required: false,
          in: 'query',
          'x-immich-history': [
            { version: 'v1', state: 'Added' },
            { version: 'v2', state: 'Stable' },
            { version: 'v3.2.0', state: 'Deprecated' },
          ],
          'x-immich-state': 'Deprecated',
          deprecated: true,
          schema: { $ref: '#/components/schemas/AssetVisibility' },
        },
      }).exactOptional(),
      withDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withDeleted',
            required: false,
            in: 'query',
            description: 'Include deleted assets',
            'x-immich-history': [
              { version: 'v1', state: 'Added' },
              { version: 'v2', state: 'Stable' },
              { version: 'v3.2.0', state: 'Deprecated' },
            ],
            'x-immich-state': 'Deprecated',
            deprecated: true,
            schema: { type: 'boolean' },
          },
        }),
      withExif: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withExif',
            required: false,
            in: 'query',
            description: 'Include EXIF data in response',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AssetResponseDtoSchema) } },
    },
  },
  deprecated: true,
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postSearchMetadataRoute = createRoute({
  method: 'post',
  path: '/search/metadata',
  tags: ['Search'],
  summary: 'Search assets by metadata',
  description: 'Search for assets based on various metadata criteria.',
  operationId: 'searchAssets',
  request: {
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: MetadataSearchDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SearchResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSearchPersonRoute = createRoute({
  method: 'get',
  path: '/search/person',
  tags: ['Search'],
  summary: 'Search people',
  description: 'Search for people by name.',
  operationId: 'searchPerson',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            required: true,
            in: 'query',
            description: 'Person name to search for',
            schema: { type: 'string' },
          },
        }),
      withHidden: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withHidden',
            required: false,
            in: 'query',
            description: 'Include hidden people',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PersonResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSearchPlacesRoute = createRoute({
  method: 'get',
  path: '/search/places',
  tags: ['Search'],
  summary: 'Search places',
  description: 'Search for places by name.',
  operationId: 'searchPlaces',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            required: true,
            in: 'query',
            description: 'Place name to search for',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlacesResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postSearchRandomRoute = createRoute({
  method: 'post',
  path: '/search/random',
  tags: ['Search'],
  summary: 'Search random assets',
  description: 'Retrieve a random selection of assets based on the provided criteria.',
  operationId: 'searchRandom',
  request: {
    body: { content: { 'application/json': { schema: RandomSearchDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AssetResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postSearchSmartRoute = createRoute({
  method: 'post',
  path: '/search/smart',
  tags: ['Search'],
  summary: 'Smart asset search',
  description:
    'Perform a smart search for assets by using machine learning vectors to determine relevance.',
  operationId: 'searchSmart',
  request: {
    body: { content: { 'application/json': { schema: SmartSearchDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SearchResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postSearchStatisticsRoute = createRoute({
  method: 'post',
  path: '/search/statistics',
  tags: ['Search'],
  summary: 'Search asset statistics',
  description:
    'Retrieve statistical data about assets based on search criteria, such as the total matching count.',
  operationId: 'searchAssetStatistics',
  request: {
    body: {
      content: { 'application/json': { schema: StatisticsSearchDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SearchStatisticsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSearchSuggestionsRoute = createRoute({
  method: 'get',
  path: '/search/suggestions',
  tags: ['Search'],
  summary: 'Retrieve search suggestions',
  description:
    'Retrieve search suggestions based on partial input. This endpoint is used for typeahead search features.',
  operationId: 'getSearchSuggestions',
  request: {
    query: z.object({
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'country',
            required: false,
            in: 'query',
            description: 'Filter by country',
            schema: { type: 'string' },
          },
        }),
      includeNull: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeNull',
            required: false,
            in: 'query',
            description: 'Include null values in suggestions',
            'x-immich-history': [
              { version: 'v1.111.0', state: 'Added' },
              { version: 'v2', state: 'Stable' },
            ],
            'x-immich-state': 'Stable',
            schema: { type: 'boolean' },
          },
        }),
      lensModel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'lensModel',
            required: false,
            in: 'query',
            description: 'Filter by lens model',
            schema: { type: 'string' },
          },
        }),
      make: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'make',
            required: false,
            in: 'query',
            description: 'Filter by camera make',
            schema: { type: 'string' },
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'model',
            required: false,
            in: 'query',
            description: 'Filter by camera model',
            schema: { type: 'string' },
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            required: false,
            in: 'query',
            description: 'Filter by state/province',
            schema: { type: 'string' },
          },
        }),
      type: SearchSuggestionTypeSchema.openapi({
        param: {
          name: 'type',
          required: true,
          in: 'query',
          schema: { $ref: '#/components/schemas/SearchSuggestionType' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(z.string()) } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getServerAboutRoute = createRoute({
  method: 'get',
  path: '/server/about',
  tags: ['Server'],
  summary: 'Get server information',
  description: 'Retrieve a list of information about the server.',
  operationId: 'getAboutInfo',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ServerAboutResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getServerApkLinksRoute = createRoute({
  method: 'get',
  path: '/server/apk-links',
  tags: ['Server'],
  summary: 'Get APK links',
  description: 'Retrieve links to the APKs for the current server version.',
  operationId: 'getApkLinks',
  responses: {
    200: { description: '', content: { 'application/json': { schema: ServerApkLinksDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getServerConfigRoute = createRoute({
  method: 'get',
  path: '/server/config',
  tags: ['Server', 'Deprecated'],
  summary: 'Get config',
  description: 'Retrieve the current server configuration.',
  operationId: 'getServerConfig',
  responses: {
    200: { description: '', content: { 'application/json': { schema: ServerConfigDtoSchema } } },
  },
  deprecated: true,
})

export const getServerFeaturesRoute = createRoute({
  method: 'get',
  path: '/server/features',
  tags: ['Server', 'Deprecated'],
  summary: 'Get features',
  description: 'Retrieve available features supported by this server.',
  operationId: 'getServerFeatures',
  responses: {
    200: { description: '', content: { 'application/json': { schema: ServerFeaturesDtoSchema } } },
  },
  deprecated: true,
})

export const getServerLicenseRoute = createRoute({
  method: 'get',
  path: '/server/license',
  tags: ['Server'],
  summary: 'Get product key',
  description:
    'Retrieve information about whether the server currently has a product key registered.',
  operationId: 'getServerLicense',
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserLicenseSchema } } },
    404: { description: '' },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putServerLicenseRoute = createRoute({
  method: 'put',
  path: '/server/license',
  tags: ['Server'],
  summary: 'Set server product key',
  description: 'Validate and set the server product key if successful.',
  operationId: 'setServerLicense',
  request: {
    body: { content: { 'application/json': { schema: LicenseKeyDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserLicenseSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteServerLicenseRoute = createRoute({
  method: 'delete',
  path: '/server/license',
  tags: ['Server'],
  summary: 'Delete server product key',
  description: 'Delete the currently set server product key.',
  operationId: 'deleteServerLicense',
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getServerMediaTypesRoute = createRoute({
  method: 'get',
  path: '/server/media-types',
  tags: ['Server'],
  summary: 'Get supported media types',
  description: 'Retrieve all media types supported by the server.',
  operationId: 'getSupportedMediaTypes',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ServerMediaTypesResponseDtoSchema } },
    },
  },
})

export const getServerPingRoute = createRoute({
  method: 'get',
  path: '/server/ping',
  tags: ['Server'],
  summary: 'Ping',
  description: 'Pong',
  operationId: 'pingServer',
  responses: {
    200: { description: '', content: { 'application/json': { schema: ServerPingResponseSchema } } },
  },
})

export const getServerStatisticsRoute = createRoute({
  method: 'get',
  path: '/server/statistics',
  tags: ['Server'],
  summary: 'Get statistics',
  description: 'Retrieve statistics about the entire Immich instance such as asset counts.',
  operationId: 'getServerStatistics',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ServerStatsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getServerStorageRoute = createRoute({
  method: 'get',
  path: '/server/storage',
  tags: ['Server'],
  summary: 'Get storage',
  description: 'Retrieve the current storage utilization information of the server.',
  operationId: 'getStorage',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ServerStorageResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getServerVersionRoute = createRoute({
  method: 'get',
  path: '/server/version',
  tags: ['Server'],
  summary: 'Get server version',
  description: 'Retrieve the current server version in semantic versioning (semver) format.',
  operationId: 'getServerVersion',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ServerVersionResponseDtoSchema } },
    },
  },
})

export const getServerVersionCheckRoute = createRoute({
  method: 'get',
  path: '/server/version-check',
  tags: ['Server'],
  summary: 'Get version check status',
  description: 'Retrieve information about the last time the version check ran.',
  operationId: 'getVersionCheck',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: VersionCheckStateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getServerVersionHistoryRoute = createRoute({
  method: 'get',
  path: '/server/version-history',
  tags: ['Server'],
  summary: 'Get version history',
  description: 'Retrieve a list of past versions the server has been on.',
  operationId: 'getVersionHistory',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(ServerVersionHistoryResponseDtoSchema) } },
    },
  },
})

export const getSessionsRoute = createRoute({
  method: 'get',
  path: '/sessions',
  tags: ['Sessions'],
  summary: 'Retrieve sessions',
  description: 'Retrieve a list of sessions for the user.',
  operationId: 'getSessions',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(SessionResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postSessionsRoute = createRoute({
  method: 'post',
  path: '/sessions',
  tags: ['Sessions'],
  summary: 'Create a session',
  description:
    'Create a session as a child to the current session. This endpoint is used for casting.',
  operationId: 'createSession',
  request: {
    body: { content: { 'application/json': { schema: SessionCreateDtoSchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: SessionCreateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteSessionsRoute = createRoute({
  method: 'delete',
  path: '/sessions',
  tags: ['Sessions'],
  summary: 'Delete all sessions',
  description: 'Delete all sessions for the user. This will not delete the current session.',
  operationId: 'deleteAllSessions',
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putSessionsIdRoute = createRoute({
  method: 'put',
  path: '/sessions/{id}',
  tags: ['Sessions'],
  summary: 'Update a session',
  description: 'Update a specific session identified by id.',
  operationId: 'updateSession',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SessionUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SessionResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteSessionsIdRoute = createRoute({
  method: 'delete',
  path: '/sessions/{id}',
  tags: ['Sessions'],
  summary: 'Delete a session',
  description: 'Delete a specific session by id.',
  operationId: 'deleteSession',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postSessionsIdLockRoute = createRoute({
  method: 'post',
  path: '/sessions/{id}/lock',
  tags: ['Sessions'],
  summary: 'Lock a session',
  description: 'Lock a specific session by id.',
  operationId: 'lockSession',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSharedLinksRoute = createRoute({
  method: 'get',
  path: '/shared-links',
  tags: ['Shared links'],
  summary: 'Retrieve all shared links',
  description: 'Retrieve a list of all shared links.',
  operationId: 'getAllSharedLinks',
  request: {
    query: z.object({
      albumId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'albumId',
            required: false,
            in: 'query',
            description: 'Filter by album ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            required: false,
            in: 'query',
            description: 'Filter by shared link ID',
            'x-immich-history': [{ version: 'v2.5.0', state: 'Added' }],
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(SharedLinkResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postSharedLinksRoute = createRoute({
  method: 'post',
  path: '/shared-links',
  tags: ['Shared links'],
  summary: 'Create a shared link',
  description: 'Create a new shared link.',
  operationId: 'createSharedLink',
  request: {
    body: {
      content: { 'application/json': { schema: SharedLinkCreateDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: SharedLinkResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postSharedLinksLoginRoute = createRoute({
  method: 'post',
  path: '/shared-links/login',
  tags: ['Shared links'],
  summary: 'Shared link login',
  description: 'Login to a password protected shared link',
  operationId: 'sharedLinkLogin',
  request: {
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: SharedLinkLoginDtoSchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: SharedLinkResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSharedLinksMeRoute = createRoute({
  method: 'get',
  path: '/shared-links/me',
  tags: ['Shared links'],
  summary: 'Retrieve current shared link',
  description: 'Retrieve the current shared link associated with authentication method.',
  operationId: 'getMySharedLink',
  request: {
    query: z.object({
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SharedLinkResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSharedLinksIdRoute = createRoute({
  method: 'get',
  path: '/shared-links/{id}',
  tags: ['Shared links'],
  summary: 'Retrieve a shared link',
  description: 'Retrieve a specific shared link by its ID.',
  operationId: 'getSharedLinkById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SharedLinkResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteSharedLinksIdRoute = createRoute({
  method: 'delete',
  path: '/shared-links/{id}',
  tags: ['Shared links'],
  summary: 'Delete a shared link',
  description: 'Delete a specific shared link by its ID.',
  operationId: 'removeSharedLink',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const patchSharedLinksIdRoute = createRoute({
  method: 'patch',
  path: '/shared-links/{id}',
  tags: ['Shared links'],
  summary: 'Update a shared link',
  description: 'Update an existing shared link by its ID.',
  operationId: 'updateSharedLink',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SharedLinkEditDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SharedLinkResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putSharedLinksIdAssetsRoute = createRoute({
  method: 'put',
  path: '/shared-links/{id}/assets',
  tags: ['Shared links'],
  summary: 'Add assets to a shared link',
  description:
    'Add assets to a specific shared link by its ID. This endpoint is only relevant for shared link of type individual.',
  operationId: 'addSharedLinkAssets',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AssetIdsDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AssetIdsResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteSharedLinksIdAssetsRoute = createRoute({
  method: 'delete',
  path: '/shared-links/{id}/assets',
  tags: ['Shared links'],
  summary: 'Remove assets from a shared link',
  description:
    'Remove assets from a specific shared link by its ID. This endpoint is only relevant for shared link of type individual.',
  operationId: 'removeSharedLinkAssets',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AssetIdsDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AssetIdsResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getStacksRoute = createRoute({
  method: 'get',
  path: '/stacks',
  tags: ['Stacks'],
  summary: 'Retrieve stacks',
  description: 'Retrieve a list of stacks.',
  operationId: 'searchStacks',
  request: {
    query: z.object({
      primaryAssetId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'primaryAssetId',
            required: false,
            in: 'query',
            description: 'Filter by primary asset ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(StackResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postStacksRoute = createRoute({
  method: 'post',
  path: '/stacks',
  tags: ['Stacks'],
  summary: 'Create a stack',
  description:
    'Create a new stack by providing a name and a list of asset IDs to include in the stack. If any of the provided asset IDs are primary assets of an existing stack, the existing stack will be merged into the newly created stack.',
  operationId: 'createStack',
  request: {
    body: { content: { 'application/json': { schema: StackCreateDtoSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: StackResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteStacksRoute = createRoute({
  method: 'delete',
  path: '/stacks',
  tags: ['Stacks'],
  summary: 'Delete stacks',
  description: 'Delete multiple stacks by providing a list of stack IDs.',
  operationId: 'deleteStacks',
  request: {
    body: { content: { 'application/json': { schema: BulkIdsDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getStacksIdRoute = createRoute({
  method: 'get',
  path: '/stacks/{id}',
  tags: ['Stacks'],
  summary: 'Retrieve a stack',
  description: 'Retrieve a specific stack by its ID.',
  operationId: 'getStack',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: StackResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putStacksIdRoute = createRoute({
  method: 'put',
  path: '/stacks/{id}',
  tags: ['Stacks'],
  summary: 'Update a stack',
  description: 'Update an existing stack by its ID.',
  operationId: 'updateStack',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StackUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: StackResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteStacksIdRoute = createRoute({
  method: 'delete',
  path: '/stacks/{id}',
  tags: ['Stacks'],
  summary: 'Delete a stack',
  description: 'Delete a specific stack by its ID.',
  operationId: 'deleteStack',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteStacksIdAssetsAssetIdRoute = createRoute({
  method: 'delete',
  path: '/stacks/{id}/assets/{assetId}',
  tags: ['Stacks'],
  summary: 'Remove an asset from a stack',
  description: 'Remove a specific asset from a stack by providing the stack ID and asset ID.',
  operationId: 'removeAssetFromStack',
  request: {
    params: z.object({
      assetId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'assetId',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSyncAckRoute = createRoute({
  method: 'get',
  path: '/sync/ack',
  tags: ['Sync'],
  summary: 'Retrieve acknowledgements',
  description: 'Retrieve the synchronization acknowledgments for the current session.',
  operationId: 'getSyncAck',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(SyncAckDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postSyncAckRoute = createRoute({
  method: 'post',
  path: '/sync/ack',
  tags: ['Sync'],
  summary: 'Acknowledge changes',
  description:
    'Send a list of synchronization acknowledgements to confirm that the latest changes have been received.',
  operationId: 'sendSyncAck',
  request: {
    body: { content: { 'application/json': { schema: SyncAckSetDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteSyncAckRoute = createRoute({
  method: 'delete',
  path: '/sync/ack',
  tags: ['Sync'],
  summary: 'Delete acknowledgements',
  description: 'Delete specific synchronization acknowledgments.',
  operationId: 'deleteSyncAck',
  request: {
    body: { content: { 'application/json': { schema: SyncAckDeleteDtoSchema } }, required: true },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postSyncStreamRoute = createRoute({
  method: 'post',
  path: '/sync/stream',
  tags: ['Sync'],
  summary: 'Stream sync changes',
  description:
    'Retrieve a JSON lines streamed response of changes for synchronization. This endpoint is used by the mobile app to efficiently stay up to date with changes.',
  operationId: 'getSyncStream',
  request: {
    body: { content: { 'application/json': { schema: SyncStreamDtoSchema } }, required: true },
  },
  responses: { 200: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSystemConfigRoute = createRoute({
  method: 'get',
  path: '/system-config',
  tags: ['System config', 'Deprecated'],
  summary: 'Get system configuration',
  description: 'Retrieve the current system configuration.',
  operationId: 'getConfig',
  responses: {
    200: { description: '', content: { 'application/json': { schema: AdminConfigDtoSchema } } },
  },
  deprecated: true,
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putSystemConfigRoute = createRoute({
  method: 'put',
  path: '/system-config',
  tags: ['System config', 'Deprecated'],
  summary: 'Update system configuration',
  description: 'Update the system configuration with a new system configuration.',
  operationId: 'updateConfig',
  request: {
    body: { content: { 'application/json': { schema: AdminConfigDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AdminConfigDtoSchema } } },
  },
  deprecated: true,
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSystemConfigDefaultsRoute = createRoute({
  method: 'get',
  path: '/system-config/defaults',
  tags: ['System config', 'Deprecated'],
  summary: 'Get system configuration defaults',
  description: 'Retrieve the default values for the system configuration.',
  operationId: 'getConfigDefaults',
  responses: {
    200: { description: '', content: { 'application/json': { schema: AdminConfigDtoSchema } } },
  },
  deprecated: true,
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSystemConfigStorageTemplateOptionsRoute = createRoute({
  method: 'get',
  path: '/system-config/storage-template-options',
  tags: ['System config'],
  summary: 'Get storage template options',
  description: 'Retrieve exemplary storage template options.',
  operationId: 'getStorageTemplateOptions',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: SystemConfigTemplateStorageOptionDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSystemMetadataAdminOnboardingRoute = createRoute({
  method: 'get',
  path: '/system-metadata/admin-onboarding',
  tags: ['System metadata'],
  summary: 'Retrieve admin onboarding',
  description: 'Retrieve the current admin onboarding status.',
  operationId: 'getAdminOnboarding',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AdminOnboardingUpdateDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postSystemMetadataAdminOnboardingRoute = createRoute({
  method: 'post',
  path: '/system-metadata/admin-onboarding',
  tags: ['System metadata'],
  summary: 'Update admin onboarding',
  description: 'Update the admin onboarding status.',
  operationId: 'updateAdminOnboarding',
  request: {
    body: {
      content: { 'application/json': { schema: AdminOnboardingUpdateDtoSchema } },
      required: true,
    },
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSystemMetadataReverseGeocodingStateRoute = createRoute({
  method: 'get',
  path: '/system-metadata/reverse-geocoding-state',
  tags: ['System metadata'],
  summary: 'Retrieve reverse geocoding state',
  description: 'Retrieve the current state of the reverse geocoding import.',
  operationId: 'getReverseGeocodingState',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ReverseGeocodingStateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getSystemMetadataVersionCheckStateRoute = createRoute({
  method: 'get',
  path: '/system-metadata/version-check-state',
  tags: ['System metadata'],
  summary: 'Retrieve version check state',
  description: 'Retrieve the current state of the version check process.',
  operationId: 'getVersionCheckState',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: VersionCheckStateResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getTagsRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['Tags'],
  summary: 'Retrieve tags',
  description: 'Retrieve a list of all tags.',
  operationId: 'getAllTags',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(TagResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putTagsRoute = createRoute({
  method: 'put',
  path: '/tags',
  tags: ['Tags'],
  summary: 'Upsert tags',
  description: 'Create or update multiple tags in a single request.',
  operationId: 'upsertTags',
  request: {
    body: { content: { 'application/json': { schema: TagUpsertDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(TagResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postTagsRoute = createRoute({
  method: 'post',
  path: '/tags',
  tags: ['Tags'],
  summary: 'Create a tag',
  description: 'Create a new tag by providing a name and optional color.',
  operationId: 'createTag',
  request: {
    body: { content: { 'application/json': { schema: TagCreateDtoSchema } }, required: true },
  },
  responses: {
    201: { description: '', content: { 'application/json': { schema: TagResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putTagsAssetsRoute = createRoute({
  method: 'put',
  path: '/tags/assets',
  tags: ['Tags'],
  summary: 'Tag assets',
  description: 'Add multiple tags to multiple assets in a single request.',
  operationId: 'bulkTagAssets',
  request: {
    body: { content: { 'application/json': { schema: TagBulkAssetsDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: TagBulkAssetsResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getTagsIdRoute = createRoute({
  method: 'get',
  path: '/tags/{id}',
  tags: ['Tags'],
  summary: 'Retrieve a tag',
  description: 'Retrieve a specific tag by its ID.',
  operationId: 'getTagById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: TagResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putTagsIdRoute = createRoute({
  method: 'put',
  path: '/tags/{id}',
  tags: ['Tags'],
  summary: 'Update a tag',
  description: 'Update an existing tag identified by its ID.',
  operationId: 'updateTag',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: TagResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteTagsIdRoute = createRoute({
  method: 'delete',
  path: '/tags/{id}',
  tags: ['Tags'],
  summary: 'Delete a tag',
  description: 'Delete a specific tag by its ID.',
  operationId: 'deleteTag',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putTagsIdAssetsRoute = createRoute({
  method: 'put',
  path: '/tags/{id}/assets',
  tags: ['Tags'],
  summary: 'Tag assets',
  description: 'Add a tag to all the specified assets.',
  operationId: 'tagAssets',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BulkIdsDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BulkIdResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteTagsIdAssetsRoute = createRoute({
  method: 'delete',
  path: '/tags/{id}/assets',
  tags: ['Tags'],
  summary: 'Untag assets',
  description: 'Remove a tag from all the specified assets.',
  operationId: 'untagAssets',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BulkIdsDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BulkIdResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getTimelineBucketRoute = createRoute({
  method: 'get',
  path: '/timeline/bucket',
  tags: ['Timeline'],
  summary: 'Get time bucket',
  description: 'Retrieve a string of all asset ids in a given time bucket.',
  operationId: 'getTimeBucket',
  request: {
    query: z.object({
      albumId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'albumId',
            required: false,
            in: 'query',
            description: 'Filter assets belonging to a specific album',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      bbox: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'bbox',
            required: false,
            in: 'query',
            description: 'Bounding box coordinates as west,south,east,north (WGS84)',
            schema: { example: '11.075683,49.416711,11.117589,49.454875', type: 'string' },
          },
          example: '11.075683,49.416711,11.117589,49.454875',
        }),
      isFavorite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isFavorite',
            required: false,
            in: 'query',
            description:
              'Filter by favorite status (true for favorites only, false for non-favorites only)',
            schema: { type: 'boolean' },
          },
        }),
      isTrashed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isTrashed',
            required: false,
            in: 'query',
            description:
              'Filter by trash status (true for trashed assets only, false for non-trashed only)',
            schema: { type: 'boolean' },
          },
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      order: AssetOrderSchema.openapi({
        param: {
          name: 'order',
          required: false,
          in: 'query',
          description:
            'Sort order for assets within time buckets (ASC for oldest first, DESC for newest first)',
          schema: { $ref: '#/components/schemas/AssetOrder' },
        },
      }).exactOptional(),
      orderBy: AssetOrderBySchema.openapi({
        param: {
          name: 'orderBy',
          required: false,
          in: 'query',
          description:
            'Date to group and order assets by (takenAt for date taken, createdAt for date added to Immich)',
          schema: { $ref: '#/components/schemas/AssetOrderBy' },
        },
      }).exactOptional(),
      personId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'personId',
            required: false,
            in: 'query',
            description: 'Filter assets containing a specific person (face recognition)',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
      tagId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tagId',
            required: false,
            in: 'query',
            description: 'Filter assets with a specific tag',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      timeBucket: z
        .string()
        .openapi({
          param: {
            name: 'timeBucket',
            required: true,
            in: 'query',
            description: 'Time bucket identifier in YYYY-MM-DDT00:00:00.000Z format',
            schema: { example: '2024-01-01T00:00:00.000Z', type: 'string' },
          },
          example: '2024-01-01T00:00:00.000Z',
        }),
      userId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            required: false,
            in: 'query',
            description: 'Filter assets by specific user ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      visibility: AssetVisibilitySchema.openapi({
        param: {
          name: 'visibility',
          required: false,
          in: 'query',
          description: 'Filter by asset visibility status (ARCHIVE, TIMELINE, HIDDEN, LOCKED)',
          schema: { $ref: '#/components/schemas/AssetVisibility' },
        },
      }).exactOptional(),
      withCoordinates: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withCoordinates',
            required: false,
            in: 'query',
            description: 'Include location data in the response',
            schema: { type: 'boolean' },
          },
        }),
      withPartners: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withPartners',
            required: false,
            in: 'query',
            description: 'Include assets shared by partners',
            schema: { type: 'boolean' },
          },
        }),
      withStacked: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withStacked',
            required: false,
            in: 'query',
            description:
              'Include stacked assets in the response. When true, only primary assets from stacks are returned.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: TimeBucketAssetResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getTimelineBucketsRoute = createRoute({
  method: 'get',
  path: '/timeline/buckets',
  tags: ['Timeline'],
  summary: 'Get time buckets',
  description: 'Retrieve a list of all minimal time buckets.',
  operationId: 'getTimeBuckets',
  request: {
    query: z.object({
      albumId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'albumId',
            required: false,
            in: 'query',
            description: 'Filter assets belonging to a specific album',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      bbox: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'bbox',
            required: false,
            in: 'query',
            description: 'Bounding box coordinates as west,south,east,north (WGS84)',
            schema: { example: '11.075683,49.416711,11.117589,49.454875', type: 'string' },
          },
          example: '11.075683,49.416711,11.117589,49.454875',
        }),
      isFavorite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isFavorite',
            required: false,
            in: 'query',
            description:
              'Filter by favorite status (true for favorites only, false for non-favorites only)',
            schema: { type: 'boolean' },
          },
        }),
      isTrashed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isTrashed',
            required: false,
            in: 'query',
            description:
              'Filter by trash status (true for trashed assets only, false for non-trashed only)',
            schema: { type: 'boolean' },
          },
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'key', required: false, in: 'query', schema: { type: 'string' } },
        }),
      order: AssetOrderSchema.openapi({
        param: {
          name: 'order',
          required: false,
          in: 'query',
          description:
            'Sort order for assets within time buckets (ASC for oldest first, DESC for newest first)',
          schema: { $ref: '#/components/schemas/AssetOrder' },
        },
      }).exactOptional(),
      orderBy: AssetOrderBySchema.openapi({
        param: {
          name: 'orderBy',
          required: false,
          in: 'query',
          description:
            'Date to group and order assets by (takenAt for date taken, createdAt for date added to Immich)',
          schema: { $ref: '#/components/schemas/AssetOrderBy' },
        },
      }).exactOptional(),
      personId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'personId',
            required: false,
            in: 'query',
            description: 'Filter assets containing a specific person (face recognition)',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'slug', required: false, in: 'query', schema: { type: 'string' } },
        }),
      tagId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'tagId',
            required: false,
            in: 'query',
            description: 'Filter assets with a specific tag',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      userId: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            required: false,
            in: 'query',
            description: 'Filter assets by specific user ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      visibility: AssetVisibilitySchema.openapi({
        param: {
          name: 'visibility',
          required: false,
          in: 'query',
          description: 'Filter by asset visibility status (ARCHIVE, TIMELINE, HIDDEN, LOCKED)',
          schema: { $ref: '#/components/schemas/AssetVisibility' },
        },
      }).exactOptional(),
      withCoordinates: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withCoordinates',
            required: false,
            in: 'query',
            description: 'Include location data in the response',
            schema: { type: 'boolean' },
          },
        }),
      withPartners: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withPartners',
            required: false,
            in: 'query',
            description: 'Include assets shared by partners',
            schema: { type: 'boolean' },
          },
        }),
      withStacked: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'withStacked',
            required: false,
            in: 'query',
            description:
              'Include stacked assets in the response. When true, only primary assets from stacks are returned.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(TimeBucketsResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postTrashEmptyRoute = createRoute({
  method: 'post',
  path: '/trash/empty',
  tags: ['Trash'],
  summary: 'Empty trash',
  description: 'Permanently delete all items in the trash.',
  operationId: 'emptyTrash',
  responses: {
    200: { description: '', content: { 'application/json': { schema: TrashResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postTrashRestoreRoute = createRoute({
  method: 'post',
  path: '/trash/restore',
  tags: ['Trash'],
  summary: 'Restore trash',
  description: 'Restore all items in the trash.',
  operationId: 'restoreTrash',
  responses: {
    200: { description: '', content: { 'application/json': { schema: TrashResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postTrashRestoreAssetsRoute = createRoute({
  method: 'post',
  path: '/trash/restore/assets',
  tags: ['Trash'],
  summary: 'Restore assets',
  description: 'Restore specific assets from the trash.',
  operationId: 'restoreAssets',
  request: {
    body: { content: { 'application/json': { schema: BulkIdsDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: TrashResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'Get all users',
  description: 'Retrieve a list of all users on the server.',
  operationId: 'searchUsers',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(UserResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getUsersMeRoute = createRoute({
  method: 'get',
  path: '/users/me',
  tags: ['Users'],
  summary: 'Get current user',
  description: 'Retrieve information about the user making the API request.',
  operationId: 'getMyUser',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserAdminResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putUsersMeRoute = createRoute({
  method: 'put',
  path: '/users/me',
  tags: ['Users'],
  summary: 'Update current user',
  description: 'Update the current user making the API request.',
  operationId: 'updateMyUser',
  request: {
    body: { content: { 'application/json': { schema: UserUpdateMeDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserAdminResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getUsersMeCalendarHeatmapRoute = createRoute({
  method: 'get',
  path: '/users/me/calendar-heatmap',
  tags: ['Users'],
  summary: 'Retrieve calendar heatmap activity',
  description: 'Retrieve activity counts for a specified period, in a calendar heatmap format.',
  operationId: 'getMyCalendarHeatmap',
  request: {
    query: z.object({
      from: z.iso
        .date()
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'from',
            required: false,
            in: 'query',
            description: 'Start date in UTC',
            schema: {
              format: 'date',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$',
              example: '2024-01-01',
              type: 'string',
            },
          },
          example: '2024-01-01',
        }),
      to: z.iso
        .date()
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'to',
            required: false,
            in: 'query',
            description: 'End date in UTC',
            schema: {
              format: 'date',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))$',
              example: '2024-01-01',
              type: 'string',
            },
          },
          example: '2024-01-01',
        }),
      type: z
        .enum(['Upload', 'Taken'])
        .default('Upload')
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            required: false,
            in: 'query',
            schema: {
              description: 'Type of calendar heatmap',
              enum: ['Upload', 'Taken'],
              type: 'string',
              default: 'Upload',
            },
          },
          description: 'Type of calendar heatmap',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CalendarHeatmapResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getUsersMeLicenseRoute = createRoute({
  method: 'get',
  path: '/users/me/license',
  tags: ['Users'],
  summary: 'Retrieve user product key',
  description: 'Retrieve information about whether the current user has a registered product key.',
  operationId: 'getUserLicense',
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserLicenseSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putUsersMeLicenseRoute = createRoute({
  method: 'put',
  path: '/users/me/license',
  tags: ['Users'],
  summary: 'Set user product key',
  description: 'Register a product key for the current user.',
  operationId: 'setUserLicense',
  request: {
    body: { content: { 'application/json': { schema: LicenseKeyDtoSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserLicenseSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteUsersMeLicenseRoute = createRoute({
  method: 'delete',
  path: '/users/me/license',
  tags: ['Users'],
  summary: 'Delete user product key',
  description: 'Delete the registered product key for the current user.',
  operationId: 'deleteUserLicense',
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getUsersMeOnboardingRoute = createRoute({
  method: 'get',
  path: '/users/me/onboarding',
  tags: ['Users'],
  summary: 'Retrieve user onboarding',
  description: 'Retrieve the onboarding status of the current user.',
  operationId: 'getUserOnboarding',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OnboardingResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putUsersMeOnboardingRoute = createRoute({
  method: 'put',
  path: '/users/me/onboarding',
  tags: ['Users'],
  summary: 'Update user onboarding',
  description: 'Update the onboarding status of the current user.',
  operationId: 'setUserOnboarding',
  request: {
    body: { content: { 'application/json': { schema: OnboardingDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: OnboardingResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteUsersMeOnboardingRoute = createRoute({
  method: 'delete',
  path: '/users/me/onboarding',
  tags: ['Users'],
  summary: 'Delete user onboarding',
  description: 'Delete the onboarding status of the current user.',
  operationId: 'deleteUserOnboarding',
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getUsersMePreferencesRoute = createRoute({
  method: 'get',
  path: '/users/me/preferences',
  tags: ['Users'],
  summary: 'Get my preferences',
  description: 'Retrieve the preferences for the current user.',
  operationId: 'getMyPreferences',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserPreferencesResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putUsersMePreferencesRoute = createRoute({
  method: 'put',
  path: '/users/me/preferences',
  tags: ['Users'],
  summary: 'Update my preferences',
  description: 'Update the preferences of the current user.',
  operationId: 'updateMyPreferences',
  request: {
    body: {
      content: { 'application/json': { schema: UserPreferencesUpdateDtoSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: UserPreferencesResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postUsersProfileImageRoute = createRoute({
  method: 'post',
  path: '/users/profile-image',
  tags: ['Users'],
  summary: 'Create user profile image',
  description: 'Upload and set a new profile image for the current user.',
  operationId: 'createProfileImage',
  request: {
    body: {
      description: 'A new avatar for the user',
      content: { 'multipart/form-data': { schema: CreateProfileImageDtoSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: CreateProfileImageResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteUsersProfileImageRoute = createRoute({
  method: 'delete',
  path: '/users/profile-image',
  tags: ['Users'],
  summary: 'Delete user profile image',
  description: 'Delete the profile image of the current user.',
  operationId: 'deleteProfileImage',
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getUsersIdRoute = createRoute({
  method: 'get',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'Retrieve a user',
  description: 'Retrieve a specific user by their ID.',
  operationId: 'getUser',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserResponseDtoSchema } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getUsersIdProfileImageRoute = createRoute({
  method: 'get',
  path: '/users/{id}/profile-image',
  tags: ['Users'],
  summary: 'Retrieve user profile image',
  description: 'Retrieve the profile image file for a user.',
  operationId: 'getProfileImage',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getViewFolderRoute = createRoute({
  method: 'get',
  path: '/view/folder',
  tags: ['Views'],
  summary: 'Retrieve assets by original path',
  description: 'Retrieve assets that are children of a specific folder.',
  operationId: 'getAssetsByOriginalPath',
  request: {
    query: z.object({
      path: z
        .string()
        .openapi({
          param: { name: 'path', required: true, in: 'query', schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(AssetResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getViewFolderUniquePathsRoute = createRoute({
  method: 'get',
  path: '/view/folder/unique-paths',
  tags: ['Views'],
  summary: 'Retrieve unique paths',
  description: 'Retrieve a list of unique folder paths from asset original paths.',
  operationId: 'getUniqueOriginalPaths',
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(z.string()) } } },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getWorkflowsRoute = createRoute({
  method: 'get',
  path: '/workflows',
  tags: ['Workflows'],
  summary: 'List all workflows',
  description: 'Retrieve a list of workflows available to the authenticated user.',
  operationId: 'searchWorkflows',
  request: {
    query: z.object({
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'description',
            required: false,
            in: 'query',
            description: 'Workflow description',
            schema: { type: 'string' },
          },
        }),
      enabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'enabled',
            required: false,
            in: 'query',
            description: 'Workflow enabled',
            schema: { type: 'boolean' },
          },
        }),
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            required: false,
            in: 'query',
            description: 'Workflow ID',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
      logging: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'logging',
            required: false,
            in: 'query',
            description: 'Workflow logs run results',
            schema: { type: 'boolean' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            required: false,
            in: 'query',
            description: 'Workflow name',
            schema: { type: 'string' },
          },
        }),
      trigger: WorkflowTriggerSchema.openapi({
        param: {
          name: 'trigger',
          required: false,
          in: 'query',
          description: 'Workflow trigger type',
          schema: { $ref: '#/components/schemas/WorkflowTrigger' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(WorkflowResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const postWorkflowsRoute = createRoute({
  method: 'post',
  path: '/workflows',
  tags: ['Workflows'],
  summary: 'Create a workflow',
  description:
    'Create a new workflow, the workflow can also be created with empty filters and actions.',
  operationId: 'createWorkflow',
  request: {
    body: { content: { 'application/json': { schema: WorkflowCreateDtoSchema } }, required: true },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: WorkflowResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getWorkflowsTriggersRoute = createRoute({
  method: 'get',
  path: '/workflows/triggers',
  tags: ['Workflows'],
  summary: 'List all workflow triggers',
  description: 'Retrieve a list of all available workflow triggers.',
  operationId: 'getWorkflowTriggers',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(WorkflowTriggerResponseDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getWorkflowsIdRoute = createRoute({
  method: 'get',
  path: '/workflows/{id}',
  tags: ['Workflows'],
  summary: 'Retrieve a workflow',
  description: 'Retrieve information about a specific workflow by its ID.',
  operationId: 'getWorkflow',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: WorkflowResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const putWorkflowsIdRoute = createRoute({
  method: 'put',
  path: '/workflows/{id}',
  tags: ['Workflows'],
  summary: 'Update a workflow',
  description:
    'Update the information of a specific workflow by its ID. This endpoint can be used to update the workflow name, description, trigger type, filters and actions order, etc.',
  operationId: 'updateWorkflow',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkflowUpdateDtoSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: WorkflowResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const deleteWorkflowsIdRoute = createRoute({
  method: 'delete',
  path: '/workflows/{id}',
  tags: ['Workflows'],
  summary: 'Delete a workflow',
  description: 'Delete a workflow by its ID.',
  operationId: 'deleteWorkflow',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getWorkflowsIdLogsRoute = createRoute({
  method: 'get',
  path: '/workflows/{id}/logs',
  tags: ['Workflows'],
  summary: 'Retrieve workflow logs',
  description: 'Retrieve logs of a workflows runs by ID',
  operationId: 'getWorkflowLogs',
  request: {
    query: z.object({
      before: z.iso
        .datetime({ offset: true })
        .regex(
          /^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$/,
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            required: false,
            in: 'query',
            description: 'Filter by runs before a date/time',
            schema: {
              format: 'date-time',
              pattern:
                '^(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))T(?:(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?(?:Z|([+-](?:[01]\\d|2[0-3]):[0-5]\\d)))$',
              example: '2024-01-01T00:00:00.000Z',
              type: 'string',
            },
          },
          example: '2024-01-01T00:00:00.000Z',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().positive().max(9007199254740991),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            required: false,
            in: 'query',
            description: 'Maximum number of logs',
            schema: {
              maximum: 9007199254740991,
              exclusiveMinimum: true,
              default: 50,
              type: 'integer',
              minimum: 0,
            },
          },
        }),
      result: WorkflowResultSchema.openapi({
        param: {
          name: 'result',
          required: false,
          in: 'query',
          description: 'Filter by run result',
          schema: { $ref: '#/components/schemas/WorkflowResult' },
        },
      }).exactOptional(),
    }),
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(WorkflowLogEntryDtoSchema) } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})

export const getWorkflowsIdShareRoute = createRoute({
  method: 'get',
  path: '/workflows/{id}/share',
  tags: ['Workflows'],
  summary: 'Retrieve a workflow',
  description: 'Retrieve a workflow details without ids, default values, etc.',
  operationId: 'getWorkflowForShare',
  request: {
    params: z.object({
      id: z
        .uuid()
        .regex(
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$/,
        )
        .openapi({
          param: {
            name: 'id',
            required: true,
            in: 'path',
            schema: {
              format: 'uuid',
              pattern:
                '^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$',
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: WorkflowShareResponseDtoSchema } },
    },
  },
  security: [{ bearer: [] }, { cookie: [] }, { api_key: [] }],
})
