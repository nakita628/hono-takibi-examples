import { createRoute, z } from '@hono/zod-openapi'

type IdType = number

const IdSchema: z.ZodType<IdType> = z.int().min(1).openapi({ example: 42 }).openapi('Id')

type UsernameType = string

const UsernameSchema: z.ZodType<UsernameType> = z
  .string()
  .regex(/\/^[a-z0-9._]+$\//)
  .min(1)
  .max(50)
  .openapi({
    description: 'immutable name of the user, used to find or mention its actor',
    example: 'chocobozzz',
  })
  .openapi('Username')

type ActorType = {
  createdAt?: string
  followersCount?: number
  followingCount?: number
  host?: string
  hostRedundancyAllowed?: boolean
  id?: z.infer<typeof IdSchema>
  name?: z.infer<typeof UsernameSchema>
  updatedAt?: string
  url?: string
}

const ActorSchema: z.ZodType<ActorType> = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    followersCount: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({ description: 'number of followers of this actor, as seen by this instance' }),
    followingCount: z
      .int()
      .min(0)
      .exactOptional()
      .openapi({
        description: 'number of actors subscribed to by this actor, as seen by this instance',
      }),
    host: z
      .hostname()
      .exactOptional()
      .openapi({ description: 'server on which the actor is resident' }),
    hostRedundancyAllowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: "whether this actor's host allows redundancy of its videos" }),
    id: IdSchema.exactOptional(),
    name: UsernameSchema.exactOptional().openapi({
      description: 'immutable name of the actor, used to find or mention it',
    }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    url: z.url().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Actor')

const UserSchema: z.ZodType<UserType> = z
  .lazy(() =>
    z
      .object({
        account: AccountSchema.exactOptional(),
        autoPlayNextVideo: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Automatically start playing the upcoming video after the currently playing video',
          }),
        autoPlayNextVideoPlaylist: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Automatically start playing the video on the playlist after the currently playing video',
          }),
        autoPlayVideo: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Automatically start playing the video on the watch page' }),
        blocked: z.boolean().exactOptional(),
        blockedReason: z.string().exactOptional(),
        createdAt: z.string().exactOptional(),
        email: z.email().exactOptional().openapi({ description: 'The user email' }),
        emailVerified: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Has the user confirmed their email address?' }),
        id: IdSchema.exactOptional().openapi({ readOnly: true }),
        lastLoginDate: z.iso.datetime({ offset: true }).exactOptional(),
        noAccountSetupWarningModal: z.boolean().exactOptional(),
        noInstanceConfigWarningModal: z.boolean().exactOptional(),
        noWelcomeModal: z.boolean().exactOptional(),
        nsfwPolicy: NSFWPolicySchema.exactOptional(),
        p2pEnabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Enable P2P in the player' }),
        pluginAuth: z
          .string()
          .exactOptional()
          .openapi({ description: 'Auth plugin to use to authenticate the user' }),
        role: z
          .object({
            id: UserRoleSchema.exactOptional(),
            label: z.enum(['User', 'Moderator', 'Administrator']).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        theme: z.string().exactOptional().openapi({ description: 'Theme enabled by this user' }),
        username: UsernameSchema.exactOptional(),
        videoChannels: z.array(VideoChannelSchema).exactOptional(),
        videoQuota: z
          .int()
          .exactOptional()
          .openapi({ description: 'The user video quota in bytes', example: -1 }),
        videoQuotaDaily: z
          .int()
          .exactOptional()
          .openapi({ description: 'The user daily video quota in bytes', example: -1 }),
      })
      .openapi({ required: [] }),
  )
  .openapi('User')

type AccountType = z.infer<typeof ActorSchema> & {
  description?: string
  displayName?: string
  userId?: z.infer<typeof UserSchema>
}

type NSFWPolicyType = 'display' | 'blur' | 'do_not_list'

const AccountSchema: z.ZodType<AccountType> = z
  .lazy(() =>
    ActorSchema.and(
      z
        .object({
          description: z
            .string()
            .exactOptional()
            .openapi({ description: "text or bio displayed on the account's profile" }),
          displayName: z
            .string()
            .min(3)
            .max(120)
            .exactOptional()
            .openapi({
              description: 'editable name of the account, displayed in its representations',
            }),
          userId: z
            .lazy(() => UserSchema)
            .exactOptional()
            .openapi({ description: 'object id for the user tied to this account' }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('Account')

const NSFWPolicySchema: z.ZodType<NSFWPolicyType> = z
  .enum(['display', 'blur', 'do_not_list'])
  .openapi('NSFWPolicy')

type UserRoleType = 0 | 1 | 2

const UserRoleSchema: z.ZodType<UserRoleType> = z
  .union([z.literal(0), z.literal(1), z.literal(2)])
  .openapi({ description: 'The user role (Admin = `0`, Moderator = `1`, User = `2`)', example: 2 })
  .openapi('UserRole')

const ActorImageSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    path: z.string().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    width: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActorImage')

const UUIDv4Schema = z
  .uuid()
  .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
  .length(36)
  .openapi({ example: '9c9de5e8-0a1e-484a-b099-e80766180a6d' })
  .openapi('UUIDv4')

type VideoChannelType = z.infer<typeof ActorSchema> & {
  banners?: z.infer<typeof ActorImageSchema>[]
  description?: string
  displayName?: string
  isLocal?: boolean
  ownerAccount?: { id?: number; uuid?: z.infer<typeof UUIDv4Schema> } | null
  support?: string
  updatedAt?: string
}

const VideoChannelSchema: z.ZodType<VideoChannelType> = ActorSchema.and(
  z
    .object({
      banners: z.array(ActorImageSchema).exactOptional(),
      description: z
        .string()
        .min(3)
        .max(1000)
        .exactOptional()
        .openapi({ example: 'Videos made with <3 by Framasoft' }),
      displayName: z
        .string()
        .min(1)
        .max(120)
        .exactOptional()
        .openapi({
          description: 'editable name of the channel, displayed in its representations',
          example: 'Videos of Framasoft',
        }),
      isLocal: z.boolean().exactOptional().openapi({ readOnly: true }),
      ownerAccount: z
        .object({ id: z.int().exactOptional(), uuid: UUIDv4Schema.exactOptional() })
        .nullable()
        .exactOptional()
        .openapi({ readOnly: true, required: [] }),
      support: z
        .string()
        .min(3)
        .max(1000)
        .exactOptional()
        .openapi({
          description:
            'text shown by default on all videos of this channel, to tell the audience how to support it',
          example: 'Please support our work on https://soutenir.framasoft.org/en/ <3',
        }),
      updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    })
    .openapi({ required: [] }),
).openapi('VideoChannel')

type UserType = {
  account?: z.infer<typeof AccountSchema>
  autoPlayNextVideo?: boolean
  autoPlayNextVideoPlaylist?: boolean
  autoPlayVideo?: boolean
  blocked?: boolean
  blockedReason?: string
  createdAt?: string
  email?: string
  emailVerified?: boolean
  id?: z.infer<typeof IdSchema>
  lastLoginDate?: string
  noAccountSetupWarningModal?: boolean
  noInstanceConfigWarningModal?: boolean
  noWelcomeModal?: boolean
  nsfwPolicy?: z.infer<typeof NSFWPolicySchema>
  p2pEnabled?: boolean
  pluginAuth?: string
  role?: { id?: z.infer<typeof UserRoleSchema>; label?: 'User' | 'Moderator' | 'Administrator' }
  theme?: string
  username?: z.infer<typeof UsernameSchema>
  videoChannels?: z.infer<typeof VideoChannelSchema>[]
  videoQuota?: number
  videoQuotaDaily?: number
}

const AccountSummarySchema = z
  .object({
    avatars: z.array(ActorImageSchema).exactOptional(),
    displayName: z.string().exactOptional(),
    host: z.hostname().exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    url: z.url().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccountSummary')

const VideoCategorySetSchema = z
  .int()
  .openapi({
    description: 'category id of the video (see [/videos/categories](#operation/getCategories))',
    example: 15,
  })
  .openapi('VideoCategorySet')

const VideoConstantNumberCategorySchema = z
  .object({
    id: VideoCategorySetSchema.exactOptional(),
    label: z.string().exactOptional().openapi({ example: 'Science & Technology' }),
  })
  .openapi({ required: [] })
  .openapi('VideoConstantNumberCategory')

const VideoChannelSummarySchema = z
  .object({
    avatars: z.array(ActorImageSchema).exactOptional(),
    displayName: z.string().exactOptional(),
    host: z.hostname().exactOptional(),
    id: IdSchema.exactOptional(),
    name: z.string().exactOptional(),
    url: z.url().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoChannelSummary')

const VideoLanguageSetSchema = z
  .string()
  .openapi({
    description: 'language id of the video (see [/videos/languages](#operation/getLanguages))',
    example: 'en',
  })
  .openapi('VideoLanguageSet')

const VideoConstantStringLanguageSchema = z
  .object({
    id: VideoLanguageSetSchema.exactOptional(),
    label: z.string().exactOptional().openapi({ example: 'English' }),
  })
  .openapi({ required: [] })
  .openapi('VideoConstantStringLanguage')

const VideoLicenceSetSchema = z
  .int()
  .openapi({
    description: 'licence id of the video (see [/videos/licences](#operation/getLicences))',
    example: 2,
  })
  .openapi('VideoLicenceSet')

const VideoConstantNumberLicenceSchema = z
  .object({
    id: VideoLicenceSetSchema.exactOptional(),
    label: z.string().exactOptional().openapi({ example: 'Attribution - Share Alike' }),
  })
  .openapi({ required: [] })
  .openapi('VideoConstantNumberLicence')

const VideoPrivacySetSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi({
    description: 'privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))',
  })
  .openapi('VideoPrivacySet')

const VideoPrivacyConstantSchema = z
  .object({ id: VideoPrivacySetSchema.exactOptional(), label: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('VideoPrivacyConstant')

const VideoScheduledUpdateSchema = z
  .object({
    privacy: VideoPrivacySetSchema.exactOptional(),
    updateAt: z.iso.date().openapi({ description: 'When to update the video' }),
  })
  .openapi({ required: ['updateAt'] })
  .openapi('VideoScheduledUpdate')

const ShortUUIDSchema = z
  .string()
  .openapi({
    description: 'translation of a uuid v4 with a bigger alphabet to have a shorter uuid',
    example: '2y84q2MQUMWPbiEcxNXMgC',
  })
  .openapi('ShortUUID')

const VideoStateConstantSchema = z
  .object({
    id: z
      .union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
        z.literal(8),
        z.literal(9),
      ])
      .exactOptional()
      .openapi({
        description:
          'The video state:\n- `1`: Published\n- `2`: To transcode\n- `3`: To import\n- `4`: Waiting for live stream\n- `5`: Live ended\n- `6`: To move to an external storage (object storage...)\n- `7`: Transcoding failed\n- `8`: Moving to an external storage failed\n- `9`: To edit using studio edition feature\n',
      }),
    label: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoStateConstant')

const VideoSchema = z
  .object({
    account: AccountSummarySchema.exactOptional(),
    blacklisted: z.boolean().nullable().exactOptional(),
    blacklistedReason: z.string().nullable().exactOptional(),
    category: VideoConstantNumberCategorySchema.exactOptional().openapi({
      description: 'category in which the video is classified',
    }),
    channel: VideoChannelSummarySchema.exactOptional(),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'time at which the video object was first drafted',
        example: '2017-10-01T10:52:46.396Z',
      }),
    description: z
      .string()
      .min(3)
      .max(250)
      .exactOptional()
      .openapi({
        description:
          'truncated description of the video, written in Markdown.\nResolve `descriptionPath` to get the full description of maximum `10000` characters.\n',
        example:
          '**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\\r\\n*A decentralized video hosting network, based on fr...\n',
      }),
    dislikes: z.int().exactOptional().openapi({ example: 7 }),
    duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'duration of the video in seconds', example: 1419 }),
    embedPath: z
      .string()
      .exactOptional()
      .openapi({ example: '/videos/embed/a65bc12f-9383-462e-81ae-8207e8b434ee' }),
    id: IdSchema.exactOptional().openapi({ description: 'object id for the video' }),
    isLive: z.boolean().exactOptional(),
    isLocal: z.boolean().exactOptional(),
    language: VideoConstantStringLanguageSchema.exactOptional().openapi({
      description: 'main language used in the video',
    }),
    licence: VideoConstantNumberLicenceSchema.exactOptional().openapi({
      description: 'licence under which the video is distributed',
    }),
    likes: z.int().exactOptional().openapi({ example: 42 }),
    name: z
      .string()
      .min(3)
      .max(120)
      .exactOptional()
      .openapi({ description: 'title of the video', example: 'What is PeerTube?' }),
    nsfw: z.boolean().exactOptional(),
    originallyPublishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'used to represent a date of first publication, prior to the practical publication date of `publishedAt`',
        example: '2010-10-01T10:52:46.396Z',
      }),
    previewPath: z
      .string()
      .exactOptional()
      .openapi({ example: '/lazy-static/previews/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg' }),
    privacy: VideoPrivacyConstantSchema.exactOptional().openapi({
      description: 'privacy policy used to distribute the video',
    }),
    publishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'time at which the video was marked as ready for playback (with restrictions depending on `privacy`). Usually set after a `state` evolution.',
        example: '2018-10-01T10:52:46.396Z',
      }),
    scheduledUpdate: VideoScheduledUpdateSchema.nullable().exactOptional(),
    shortUUID: ShortUUIDSchema.exactOptional(),
    state: VideoStateConstantSchema.exactOptional().openapi({
      description:
        'represents the internal state of the video processing within the PeerTube instance',
    }),
    thumbnailPath: z
      .string()
      .exactOptional()
      .openapi({ example: '/static/thumbnails/a65bc12f-9383-462e-81ae-8207e8b434ee.jpg' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "last time the video's metadata was modified",
        example: '2021-05-04T08:01:01.502Z',
      }),
    userHistory: z
      .object({ currentTime: z.int().exactOptional() })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
    uuid: UUIDv4Schema.exactOptional().openapi({
      description: 'universal identifier for the video, that can be used across instances',
    }),
    views: z.int().exactOptional().openapi({ example: 1337 }),
    waitTranscoding: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Video')

const VideoCommentSchema = z
  .object({
    account: AccountSchema.exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    deletedAt: z.iso.datetime({ offset: true }).nullable().default(null).exactOptional(),
    id: IdSchema.exactOptional(),
    inReplyToCommentId: IdSchema.nullable().exactOptional(),
    isDeleted: z.boolean().default(false).exactOptional(),
    text: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Text of the comment', example: 'This video is wonderful!' }),
    threadId: IdSchema.exactOptional(),
    totalReplies: z.int().min(0).exactOptional(),
    totalRepliesFromVideoAuthor: z.int().min(0).exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    url: z.url().exactOptional(),
    videoId: z.lazy(() => VideoSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoComment')

type VideoCommentThreadTreeType = {
  children?: VideoCommentThreadTreeType[]
  comment?: z.infer<typeof VideoCommentSchema>
}

const AbusePredefinedReasonsSchema = z
  .array(
    z.enum([
      'violentOrAbusive',
      'hatefulOrAbusive',
      'spamOrMisleading',
      'privacy',
      'rights',
      'serverRules',
      'thumbnails',
      'captions',
    ]),
  )
  .openapi({ example: ['spamOrMisleading'] })
  .openapi('AbusePredefinedReasons')

const AbuseStateSetSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3)])
  .openapi({ description: 'The abuse state (Pending = `1`, Rejected = `2`, Accepted = `3`)' })
  .openapi('AbuseStateSet')

const AbuseStateConstantSchema = z
  .object({ id: AbuseStateSetSchema.exactOptional(), label: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AbuseStateConstant')

const VideoInfoSchema = z
  .object({
    id: z.lazy(() => VideoSchema).exactOptional(),
    name: z.lazy(() => VideoSchema).exactOptional(),
    uuid: z.lazy(() => VideoSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoInfo')

const AbuseSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    id: IdSchema.exactOptional(),
    moderationComment: z
      .string()
      .min(2)
      .max(3000)
      .exactOptional()
      .openapi({ example: 'Decided to ban the server since it spams us regularly' }),
    predefinedReasons: AbusePredefinedReasonsSchema.exactOptional(),
    reason: z.string().min(2).max(3000).exactOptional().openapi({ example: 'The video is a spam' }),
    reporterAccount: AccountSchema.exactOptional(),
    state: AbuseStateConstantSchema.exactOptional(),
    video: VideoInfoSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Abuse')

const AbuseMessageSchema = z
  .object({
    account: AccountSummarySchema.exactOptional(),
    byModerator: z.boolean().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    id: IdSchema.exactOptional(),
    message: z.string().min(2).max(3000).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AbuseMessage')

const ActorInfoSchema = z
  .object({
    avatars: z.array(ActorImageSchema).exactOptional(),
    displayName: z.string().exactOptional(),
    host: z.hostname().exactOptional(),
    id: IdSchema.exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActorInfo')

const UserAdminFlagsSchema = z
  .union([z.literal(0), z.literal(1)])
  .openapi({
    description: 'Admin flags for the user (None = `0`, Bypass video blocklist = `1`)',
    example: 1,
  })
  .openapi('UserAdminFlags')

const UsernameChannelSchema = z
  .string()
  .regex(/\/^[a-zA-Z0-9\\-_.:]+$\//)
  .min(1)
  .max(50)
  .openapi({
    description: 'immutable name of the channel, used to interact with its actor',
    example: 'framasoft_videos',
  })
  .openapi('UsernameChannel')

const PasswordSchema = z.string().min(6).max(255).openapi('Password')

const AddUserSchema = z
  .object({
    adminFlags: UserAdminFlagsSchema.exactOptional(),
    channelName: UsernameChannelSchema.exactOptional(),
    email: z.email().openapi({ description: 'The user email' }),
    password: PasswordSchema,
    role: UserRoleSchema,
    username: UsernameSchema,
    videoQuota: z.int().openapi({ description: 'The user video quota in bytes', example: -1 }),
    videoQuotaDaily: z
      .int()
      .openapi({ description: 'The user daily video quota in bytes', example: -1 }),
  })
  .openapi({ required: ['username', 'password', 'email', 'videoQuota', 'videoQuotaDaily', 'role'] })
  .openapi('AddUser')

const AddUserResponseSchema = z
  .object({
    user: z
      .object({
        account: z
          .object({ id: IdSchema.exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        id: IdSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('AddUserResponse')

const BlockStatusSchema = z
  .object({
    accounts: z
      .record(
        z.string(),
        z
          .object({
            blockedByServer: z.boolean().exactOptional(),
            blockedByUser: z.boolean().exactOptional(),
          })
          .openapi({ 'x-additionalPropertiesName': 'account', required: [] }),
      )
      .exactOptional(),
    hosts: z
      .record(
        z.string(),
        z
          .object({
            blockedByServer: z.boolean().exactOptional(),
            blockedByUser: z.boolean().exactOptional(),
          })
          .openapi({ 'x-additionalPropertiesName': 'host', required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BlockStatus')

const CommentThreadPostResponseSchema = z
  .object({ comment: VideoCommentSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CommentThreadPostResponse')

const CommentThreadResponseSchema = z
  .object({
    data: z.array(VideoCommentSchema).max(100).exactOptional(),
    total: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('CommentThreadResponse')

const CustomHomepageSchema = z
  .object({ content: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('CustomHomepage')

const FileRedundancyInformationSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    expiresOn: z.iso.datetime({ offset: true }).exactOptional(),
    fileUrl: z.url().exactOptional(),
    id: IdSchema.exactOptional(),
    size: z.int().exactOptional(),
    strategy: z.enum(['manual', 'most-views', 'trending', 'recently-added']).exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FileRedundancyInformation')

const FollowSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    follower: ActorSchema.exactOptional(),
    following: ActorSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    score: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'score reflecting the reachability of the actor, with steps of `10` and a base score of `1000`.',
      }),
    state: z.enum(['pending', 'accepted']).exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Follow')

const GetMeVideoRatingSchema = z
  .object({
    id: IdSchema,
    rating: z.enum(['like', 'dislike', 'none']).openapi({ description: 'Rating of the video' }),
  })
  .openapi({ required: ['id', 'rating'] })
  .openapi('GetMeVideoRating')

const ImportVideosInChannelCreateSchema = z
  .object({
    externalChannelUrl: z.string().openapi({ example: 'https://youtube.com/c/UC_myfancychannel' }),
    videoChannelSyncId: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'If part of a channel sync process, specify its id to assign video imports to this channel synchronization',
      }),
  })
  .openapi({ required: ['externalChannelUrl'] })
  .openapi('ImportVideosInChannelCreate')

const JobSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    data: z.looseObject({}).exactOptional(),
    error: z.looseObject({}).exactOptional(),
    finishedOn: z.iso.datetime({ offset: true }).exactOptional(),
    id: IdSchema.exactOptional(),
    processedOn: z.iso.datetime({ offset: true }).exactOptional(),
    state: z.enum(['active', 'completed', 'failed', 'waiting', 'delayed']).exactOptional(),
    type: z
      .enum([
        'activitypub-http-unicast',
        'activitypub-http-broadcast',
        'activitypub-http-fetcher',
        'activitypub-follow',
        'video-file-import',
        'video-transcoding',
        'email',
        'video-import',
        'videos-views-stats',
        'activitypub-refresher',
        'video-redundancy',
        'video-channel-import',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Job')

const LiveVideoLatencyModeSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3)])
  .openapi({
    description: 'The live latency mode (Default = `1`, High latency = `2`, Small Latency = `3`)',
  })
  .openapi('LiveVideoLatencyMode')

const LiveVideoResponseSchema = z
  .object({
    latencyMode: LiveVideoLatencyModeSchema.exactOptional().openapi({
      description: 'User can select live latency mode if enabled by the instance',
    }),
    permanentLive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'User can stream multiple times in a permanent live' }),
    rtmpUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Included in the response if an appropriate token is provided' }),
    rtmpsUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Included in the response if an appropriate token is provided' }),
    saveReplay: z.boolean().exactOptional(),
    streamKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'RTMP stream key to use to stream into this live video. Included in the response if an appropriate token is provided',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiveVideoResponse')

const LiveVideoSessionResponseSchema = z
  .object({
    endDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'End date of the live session' }),
    error: z
      .union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Error type if an error occurred during the live session:\n  - `1`: Bad socket health (transcoding is too slow)\n  - `2`: Max duration exceeded\n  - `3`: Quota exceeded\n  - `4`: Quota FFmpeg error\n  - `5`: Video has been blacklisted during the live\n',
      }),
    id: z.int().exactOptional(),
    replayVideo: z
      .object({
        id: z.number().exactOptional(),
        shortUUID: ShortUUIDSchema.exactOptional(),
        uuid: UUIDv4Schema.exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Video replay information', required: [] }),
    startDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Start date of the live session' }),
  })
  .openapi({ required: [] })
  .openapi('LiveVideoSessionResponse')

const LiveVideoUpdateSchema = z
  .object({
    latencyMode: LiveVideoLatencyModeSchema.exactOptional().openapi({
      description: 'User can select live latency mode if enabled by the instance',
    }),
    permanentLive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'User can stream multiple times in a permanent live' }),
    saveReplay: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LiveVideoUpdate')

const MRSSGroupContentSchema = z
  .object({
    duration: z
      .int()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    fileSize: z
      .int()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    framerate: z
      .int()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    height: z
      .int()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    lang: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    type: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    url: z
      .url()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({ xml: { name: 'media:content' }, required: [] })
  .openapi('MRSSGroupContent')

const MRSSPeerLinkSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
    type: z
      .literal('application/x-bittorrent')
      .exactOptional()
      .openapi({ xml: { attribute: true } }),
  })
  .openapi({ xml: { name: 'media:peerLink' }, required: [] })
  .openapi('MRSSPeerLink')

const VideoImportStateConstantSchema = z
  .object({
    id: z
      .union([z.literal(1), z.literal(2), z.literal(3)])
      .exactOptional()
      .openapi({
        description: 'The video import state (Pending = `1`, Success = `2`, Failed = `3`)',
      }),
    label: z.string().exactOptional().openapi({ example: 'Pending' }),
  })
  .openapi({ required: [] })
  .openapi('VideoImportStateConstant')

const VideoImportSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    error: z.string().exactOptional().openapi({ readOnly: true }),
    id: IdSchema.exactOptional().openapi({ readOnly: true }),
    magnetUri: z
      .url()
      .regex(/\/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}\/i/)
      .exactOptional()
      .openapi({ description: "magnet URI allowing to resolve the import's source video" }),
    state: VideoImportStateConstantSchema.exactOptional().openapi({ readOnly: true }),
    targetUrl: z
      .url()
      .exactOptional()
      .openapi({
        description: "remote URL where to find the import's source video",
        example: 'https://framatube.org/videos/watch/9c9de5e8-0a1e-484a-b099-e80766180a6d',
      }),
    torrentName: z.string().exactOptional().openapi({ readOnly: true }),
    torrentfile: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'Torrent file containing only the video file',
        writeOnly: true,
      }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    video: VideoSchema.nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('VideoImport')

const NotificationSchema = z
  .object({
    account: ActorInfoSchema.nullable().exactOptional(),
    actorFollow: z
      .object({
        follower: ActorInfoSchema.exactOptional(),
        following: z
          .object({
            displayName: z.string().exactOptional(),
            host: z.hostname().exactOptional(),
            name: z.string().exactOptional(),
            type: z.enum(['account', 'channel', 'instance']).exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        id: IdSchema.exactOptional(),
        state: z.enum(['pending', 'accepted']).exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
    comment: z
      .object({
        account: ActorInfoSchema.exactOptional(),
        id: IdSchema.exactOptional(),
        threadId: z.int().exactOptional(),
        video: VideoInfoSchema.exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    id: IdSchema.exactOptional(),
    read: z.boolean().exactOptional(),
    type: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Notification type, following the `UserNotificationType` enum:\n- `1` NEW_VIDEO_FROM_SUBSCRIPTION\n- `2` NEW_COMMENT_ON_MY_VIDEO\n- `3` NEW_ABUSE_FOR_MODERATORS\n- `4` BLACKLIST_ON_MY_VIDEO\n- `5` UNBLACKLIST_ON_MY_VIDEO\n- `6` MY_VIDEO_PUBLISHED\n- `7` MY_VIDEO_IMPORT_SUCCESS\n- `8` MY_VIDEO_IMPORT_ERROR\n- `9` NEW_USER_REGISTRATION\n- `10` NEW_FOLLOW\n- `11` COMMENT_MENTION\n- `12` VIDEO_AUTO_BLACKLIST_FOR_MODERATORS\n- `13` NEW_INSTANCE_FOLLOWER\n- `14` AUTO_INSTANCE_FOLLOWING\n- `15` ABUSE_STATE_CHANGE\n- `16` ABUSE_NEW_MESSAGE\n- `17` NEW_PLUGIN_VERSION\n- `18` NEW_PEERTUBE_VERSION\n',
      }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    video: VideoInfoSchema.and(
      z.object({ channel: ActorInfoSchema.exactOptional() }).openapi({ required: [] }),
    )
      .nullable()
      .exactOptional(),
    videoAbuse: z
      .object({ id: IdSchema.exactOptional(), video: VideoInfoSchema.exactOptional() })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
    videoBlacklist: z
      .object({ id: IdSchema.exactOptional(), video: VideoInfoSchema.exactOptional() })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
    videoImport: z
      .object({
        id: IdSchema.exactOptional(),
        magnetUri: z.lazy(() => VideoImportSchema).exactOptional(),
        targetUri: z.url().nullable().exactOptional(),
        torrentName: z.string().nullable().exactOptional(),
        video: VideoInfoSchema.nullable().exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Notification')

const NotificationListResponseSchema = z
  .object({
    data: z.array(NotificationSchema).max(100).exactOptional(),
    total: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('NotificationListResponse')

const NotificationSettingValueSchema = z
  .int()
  .openapi({
    description:
      'Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n',
  })
  .openapi('NotificationSettingValue')

const OAuthClientSchema = z
  .object({
    client_id: z
      .string()
      .regex(/\/^[a-z0-9]$\//)
      .length(32)
      .exactOptional()
      .openapi({ example: 'v1ikx5hnfop4mdpnci8nsqh93c45rldf' }),
    client_secret: z
      .string()
      .regex(/\/^[a-zA-Z0-9]$\//)
      .length(32)
      .exactOptional()
      .openapi({ example: 'AjWiOapPltI6EnsWQwlFarRtLh4u8tDt' }),
  })
  .openapi({ required: [] })
  .openapi('OAuthClient')

const OAuthTokenPasswordSchema = OAuthClientSchema.and(
  z
    .object({
      grant_type: z.enum(['password', 'refresh_token']).default('password').exactOptional(),
      password: PasswordSchema.exactOptional(),
      username: UsernameSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['client_id', 'client_secret', 'grant_type', 'username', 'password'] })
  .openapi('OAuthTokenPassword')

const OAuthTokenRefreshTokenSchema = OAuthClientSchema.and(
  z
    .object({
      grant_type: z.enum(['password', 'refresh_token']).default('password').exactOptional(),
      refresh_token: z
        .string()
        .exactOptional()
        .openapi({ example: '2e0d675df9fc96d2e4ec8a3ebbbf45eca9137bb7' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['client_id', 'client_secret', 'grant_type', 'refresh_token'] })
  .openapi('OAuthTokenRefreshToken')

const PlaybackMetricCreateSchema = z
  .object({
    downloadedBytesHTTP: z
      .number()
      .openapi({
        description: 'How many bytes were downloaded with HTTP since the last metric creation',
      }),
    downloadedBytesP2P: z
      .number()
      .openapi({
        description: 'How many bytes were downloaded with P2P since the last metric creation',
      }),
    errors: z
      .number()
      .openapi({ description: 'How many errors occured since the last metric creation' }),
    fps: z.number().exactOptional().openapi({ description: 'Current player video fps' }),
    playerMode: z.enum(['p2p-media-loader', 'webtorrent']),
    resolution: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current player video resolution' }),
    resolutionChanges: z
      .number()
      .openapi({
        description: 'How many resolution changes occured since the last metric creation',
      }),
    uploadedBytesP2P: z
      .number()
      .openapi({
        description: 'How many bytes were uploaded with P2P since the last metric creation',
      }),
    videoId: z.xor([IdSchema, UUIDv4Schema, ShortUUIDSchema]),
  })
  .openapi({
    required: [
      'playerMode',
      'resolutionChanges',
      'errors',
      'downloadedBytesP2P',
      'downloadedBytesHTTP',
      'uploadedBytesP2P',
      'videoId',
    ],
  })
  .openapi('PlaybackMetricCreate')

const PlaylistElementSchema = z
  .object({
    position: z.int().exactOptional(),
    startTimestamp: z.int().exactOptional(),
    stopTimestamp: z.int().exactOptional(),
    video: VideoSchema.nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlaylistElement')

const PluginSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    homepage: z
      .url()
      .exactOptional()
      .openapi({
        example:
          'https://framagit.org/framasoft/peertube/official-plugins/tree/master/peertube-plugin-auth-ldap',
      }),
    latestVersion: z.string().exactOptional().openapi({ example: '0.0.3' }),
    name: z.string().exactOptional().openapi({ example: 'peertube-plugin-auth-ldap' }),
    peertubeEngine: z.string().exactOptional().openapi({ example: '2.2.0' }),
    settings: z.looseObject({}).exactOptional(),
    type: z
      .union([z.literal(1), z.literal(2)])
      .exactOptional()
      .openapi({ description: '- `1`: PLUGIN\n- `2`: THEME\n' }),
    uninstalled: z.boolean().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    version: z.string().exactOptional().openapi({ example: '0.0.1' }),
  })
  .openapi({ required: [] })
  .openapi('Plugin')

const PluginResponseSchema = z
  .object({
    data: z.array(PluginSchema).max(100).exactOptional(),
    total: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('PluginResponse')

const PredefinedAbuseReasonsSchema = z
  .array(
    z.enum([
      'violentOrAbusive',
      'hatefulOrAbusive',
      'spamOrMisleading',
      'privacy',
      'rights',
      'serverRules',
      'thumbnails',
      'captions',
    ]),
  )
  .max(8)
  .openapi({ description: 'Reason categories that help triage reports' })
  .openapi('PredefinedAbuseReasons')

const RegisterUserSchema = z
  .object({
    channel: z
      .object({
        displayName: z.string().exactOptional(),
        name: UsernameChannelSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'channel base information used to create the first channel of the user',
        required: [],
      }),
    displayName: z
      .string()
      .min(1)
      .max(120)
      .exactOptional()
      .openapi({ description: 'editable name of the user, displayed in its representations' }),
    email: z
      .email()
      .openapi({ description: 'email of the user, used for login or service communications' }),
    password: PasswordSchema,
    username: UsernameSchema.openapi({
      description: 'immutable name of the user, used to find or mention its actor',
    }),
  })
  .openapi({ required: ['username', 'password', 'email'] })
  .openapi('RegisterUser')

const RequestTwoFactorResponseSchema = z
  .object({
    otpRequest: z
      .object({
        requestToken: z
          .string()
          .exactOptional()
          .openapi({ description: 'The token to send to confirm this request' }),
        secret: z.string().exactOptional().openapi({ description: 'The OTP secret' }),
        uri: z.string().exactOptional().openapi({ description: 'The OTP URI' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('RequestTwoFactorResponse')

const SendClientLogSchema = z
  .object({
    level: z.enum(['error', 'warn']),
    message: z.string(),
    meta: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information regarding this log' }),
    stackTrace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stack trace of the error if there is one' }),
    url: z.string().openapi({ description: 'URL of the current user page' }),
    userAgent: z
      .string()
      .exactOptional()
      .openapi({ description: 'User agent of the web browser that sends the message' }),
  })
  .openapi({ required: ['message', 'url', 'level'] })
  .openapi('SendClientLog')

const VideoResolutionSetSchema = z
  .int()
  .openapi({
    description:
      'Video resolution (`0`, `240`, `360`, `720`, `1080`, `1440` or `2160`)\n\n`0` is used as a special value for stillimage videos dedicated to audio, a.k.a. audio-only videos.\n',
    example: 240,
  })
  .openapi('VideoResolutionSet')

const ServerConfigSchema = z
  .object({
    autoBlacklist: z
      .object({
        videos: z
          .object({
            ofUsers: z
              .object({ enabled: z.boolean().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    avatar: z
      .object({
        extensions: z.array(z.string()).exactOptional(),
        file: z
          .object({
            size: z
              .object({ max: z.int().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    contactForm: z
      .object({ enabled: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    email: z
      .object({ enabled: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    followings: z
      .object({
        instance: z
          .object({
            autoFollowIndex: z
              .object({ indexUrl: z.url().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    homepage: z
      .object({ enabled: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    import: z
      .object({
        videoChannelSynchronization: z
          .object({ enabled: z.boolean().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        videos: z
          .object({
            http: z
              .object({ enabled: z.boolean().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            torrent: z
              .object({ enabled: z.boolean().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    instance: z
      .object({
        customizations: z
          .object({ css: z.string().exactOptional(), javascript: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        defaultClientRoute: z.string().exactOptional(),
        defaultNSFWPolicy: z.string().exactOptional(),
        isNSFW: z.boolean().exactOptional(),
        name: z.string().exactOptional(),
        shortDescription: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    plugin: z
      .object({ registered: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    search: z
      .object({
        remoteUri: z
          .object({ anonymous: z.boolean().exactOptional(), users: z.boolean().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    serverCommit: z.string().exactOptional(),
    serverVersion: z.string().exactOptional(),
    signup: z
      .object({
        allowed: z.boolean().exactOptional(),
        allowedForCurrentIP: z.boolean().exactOptional(),
        requiresEmailVerification: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    theme: z
      .object({ registered: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    tracker: z
      .object({ enabled: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    transcoding: z
      .object({
        enabledResolutions: z.array(VideoResolutionSetSchema).exactOptional(),
        hls: z
          .object({ enabled: z.boolean().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        webtorrent: z
          .object({ enabled: z.boolean().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    trending: z
      .object({
        videos: z
          .object({ intervalDays: z.int().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    user: z
      .object({
        videoQuota: z.int().exactOptional().openapi({ example: 16810141515 }),
        videoQuotaDaily: z.int().exactOptional().openapi({ example: 1681014151 }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    video: z
      .object({
        file: z
          .object({ extensions: z.array(z.string()).exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        image: z
          .object({
            extensions: z.array(z.string()).exactOptional(),
            size: z
              .object({ max: z.int().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    videoCaption: z
      .object({
        file: z
          .object({
            extensions: z.array(z.string()).exactOptional(),
            size: z
              .object({ max: z.int().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ServerConfig')

const ServerConfigAboutSchema = z
  .object({
    instance: z
      .object({
        description: z.string().exactOptional(),
        name: z.string().exactOptional(),
        shortDescription: z.string().exactOptional(),
        terms: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ServerConfigAbout')

const ServerConfigCustomSchema = z
  .object({
    admin: z.object({ email: z.email().exactOptional() }).exactOptional().openapi({ required: [] }),
    autoBlacklist: z
      .object({
        videos: z
          .object({
            ofUsers: z
              .object({ enabled: z.boolean().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    cache: z
      .object({
        captions: z
          .object({ size: z.int().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        previews: z
          .object({ size: z.int().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    contactForm: z
      .object({ enabled: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    followers: z
      .object({
        instance: z
          .object({
            enabled: z.boolean().exactOptional(),
            manualApproval: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    import: z
      .object({
        video_channel_synchronization: z
          .object({ enabled: z.boolean().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        videos: z
          .object({
            http: z
              .object({ enabled: z.boolean().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            torrent: z
              .object({ enabled: z.boolean().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    instance: z
      .object({
        customizations: z
          .object({ css: z.string().exactOptional(), javascript: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        defaultClientRoute: z.string().exactOptional(),
        defaultNSFWPolicy: z.string().exactOptional(),
        description: z.string().exactOptional(),
        isNSFW: z.boolean().exactOptional(),
        name: z.string().exactOptional(),
        shortDescription: z.string().exactOptional(),
        terms: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    services: z
      .object({
        twitter: z
          .object({
            username: z.string().exactOptional(),
            whitelisted: z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    signup: z
      .object({
        enabled: z.boolean().exactOptional(),
        limit: z.int().exactOptional(),
        requiresEmailVerification: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    theme: z
      .object({ default: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    transcoding: z
      .object({
        allowAdditionalExtensions: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Allow your users to upload .mkv, .mov, .avi, .wmv, .flv, .f4v, .3g2, .3gp, .mts, m2ts, .mxf, .nut videos',
          }),
        allowAudioFiles: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If a user uploads an audio file, PeerTube will create a video by merging the preview file and the audio file',
          }),
        concurrency: z
          .number()
          .exactOptional()
          .openapi({ description: 'Amount of transcoding jobs to execute in parallel' }),
        enabled: z.boolean().exactOptional(),
        hls: z
          .object({ enabled: z.boolean().exactOptional() })
          .exactOptional()
          .openapi({ description: 'HLS-specific settings', required: [] }),
        profile: z
          .literal('default')
          .exactOptional()
          .openapi({
            description:
              "New profiles can be added by plugins ; available in core PeerTube: 'default'.\n",
          }),
        resolutions: z
          .object({
            '0p': z.boolean().exactOptional(),
            '1080p': z.boolean().exactOptional(),
            '1440p': z.boolean().exactOptional(),
            '144p': z.boolean().exactOptional(),
            '2160p': z.boolean().exactOptional(),
            '240p': z.boolean().exactOptional(),
            '360p': z.boolean().exactOptional(),
            '480p': z.boolean().exactOptional(),
            '720p': z.boolean().exactOptional(),
          })
          .exactOptional()
          .openapi({ description: 'Resolutions to transcode _new videos_ to', required: [] }),
        threads: z
          .int()
          .exactOptional()
          .openapi({ description: 'Amount of threads used by ffmpeg for 1 transcoding job' }),
        webtorrent: z
          .object({ enabled: z.boolean().exactOptional() })
          .exactOptional()
          .openapi({ description: 'WebTorrent-specific settings', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'Settings pertaining to transcoding jobs', required: [] }),
    user: z
      .object({
        videoQuota: z.int().exactOptional().openapi({ example: 16810141515 }),
        videoQuotaDaily: z.int().exactOptional().openapi({ example: 1681014151 }),
      })
      .exactOptional()
      .openapi({
        description: 'Settings that apply to new users, if registration is enabled',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('ServerConfigCustom')

const ServerStatsSchema = z
  .object({
    activityPubMessagesProcessedPerSecond: z.number().exactOptional(),
    totalActivityPubMessagesErrors: z.number().exactOptional(),
    totalActivityPubMessagesProcessed: z.number().exactOptional(),
    totalActivityPubMessagesSuccesses: z.number().exactOptional(),
    totalActivityPubMessagesWaiting: z.number().exactOptional(),
    totalDailyActiveUsers: z.number().exactOptional(),
    totalInstanceFollowers: z.number().exactOptional(),
    totalInstanceFollowing: z.number().exactOptional(),
    totalLocalDailyActiveVideoChannels: z.number().exactOptional(),
    totalLocalMonthlyActiveVideoChannels: z.number().exactOptional(),
    totalLocalPlaylists: z.number().exactOptional(),
    totalLocalVideoChannels: z.number().exactOptional(),
    totalLocalVideoComments: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total comments made by local users' }),
    totalLocalVideoFilesSize: z.number().exactOptional(),
    totalLocalVideoViews: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total video views made on the instance' }),
    totalLocalVideos: z.number().exactOptional(),
    totalLocalWeeklyActiveVideoChannels: z.number().exactOptional(),
    totalMonthlyActiveUsers: z.number().exactOptional(),
    totalUsers: z.number().exactOptional(),
    totalVideoComments: z.number().exactOptional(),
    totalVideos: z.number().exactOptional(),
    totalWeeklyActiveUsers: z.number().exactOptional(),
    videosRedundancy: z
      .array(
        z
          .object({
            strategy: z.string().exactOptional(),
            totalSize: z.number().exactOptional(),
            totalUsed: z.number().exactOptional(),
            totalVideoFiles: z.number().exactOptional(),
            totalVideos: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServerStats')

const UpdateMeSchema = z
  .object({
    autoPlayNextVideo: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'new preference regarding playing following videos automatically' }),
    autoPlayNextVideoPlaylist: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'new preference regarding playing following playlist videos automatically',
      }),
    autoPlayVideo: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'new preference regarding playing videos automatically' }),
    currentPassword: PasswordSchema.exactOptional(),
    displayNSFW: z
      .enum(['true', 'false', 'both'])
      .exactOptional()
      .openapi({ description: 'new NSFW display policy' }),
    displayName: z
      .string()
      .min(3)
      .max(120)
      .exactOptional()
      .openapi({ description: 'new name of the user in its representations' }),
    email: z
      .lazy(() => UserSchema)
      .exactOptional()
      .openapi({ description: 'new email used for login and service communications' }),
    noAccountSetupWarningModal: z.boolean().exactOptional(),
    noInstanceConfigWarningModal: z.boolean().exactOptional(),
    noWelcomeModal: z.boolean().exactOptional(),
    p2pEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'whether to enable P2P in the player or not' }),
    password: PasswordSchema.exactOptional(),
    theme: z.string().exactOptional(),
    videoLanguages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'list of languages to filter videos down to' }),
    videosHistoryEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'whether to keep track of watched history or not' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateMe')

const UpdateUserSchema = z
  .object({
    adminFlags: UserAdminFlagsSchema.exactOptional(),
    email: z
      .lazy(() => UserSchema)
      .exactOptional()
      .openapi({ description: 'The updated email of the user' }),
    emailVerified: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Set the email as verified' }),
    password: PasswordSchema.exactOptional(),
    pluginAuth: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The auth plugin to use to authenticate the user',
        example: 'peertube-plugin-auth-saml2',
      }),
    role: UserRoleSchema.exactOptional(),
    videoQuota: z
      .int()
      .exactOptional()
      .openapi({ description: 'The updated video quota of the user in bytes' }),
    videoQuotaDaily: z
      .int()
      .exactOptional()
      .openapi({ description: 'The updated daily video quota of the user in bytes' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateUser')

const UserRegistrationSchema = z
  .object({
    accountDisplayName: z.string().exactOptional(),
    channelDisplayName: z.string().exactOptional(),
    channelHandle: z.string().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    email: z.email().exactOptional(),
    emailVerified: z.boolean().exactOptional(),
    id: IdSchema.exactOptional(),
    moderationResponse: z.string().nullable().exactOptional(),
    registrationReason: z.string().exactOptional(),
    state: z
      .object({
        id: z
          .union([z.literal(1), z.literal(2), z.literal(3)])
          .exactOptional()
          .openapi({
            description: 'The registration state (Pending = `1`, Rejected = `2`, Accepted = `3`)',
          }),
        label: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    user: z
      .object({ id: IdSchema.exactOptional() })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If the registration has been accepted, this is a partial user object created by the registration',
        required: [],
      }),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserRegistration')

const UserRegistrationAcceptOrRejectSchema = z
  .object({
    moderationResponse: z
      .string()
      .openapi({ description: 'Moderation response to send to the user' }),
    preventEmailDelivery: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Set it to true if you don't want PeerTube to send an email to the user",
      }),
  })
  .openapi({ required: ['moderationResponse'] })
  .openapi('UserRegistrationAcceptOrReject')

const UserRegistrationRequestSchema = RegisterUserSchema.and(
  z
    .object({
      registrationReason: z
        .string()
        .openapi({ description: 'reason for the user to register on the instance' }),
    })
    .openapi({ required: ['registrationReason'] }),
).openapi('UserRegistrationRequest')

const UserViewingVideoSchema = z
  .object({
    currentTime: z
      .int()
      .openapi({ description: 'timestamp within the video, in seconds', example: 5 }),
    viewEvent: z
      .literal('seek')
      .exactOptional()
      .openapi({
        description: 'Event since last viewing call:\n * `seek` - If the user seeked the video\n',
      }),
  })
  .openapi({ required: ['currentTime'] })
  .openapi('UserViewingVideo')

const UserWithStatsSchema = UserSchema.and(
  z
    .object({
      abusesAcceptedCount: z
        .int()
        .exactOptional()
        .openapi({
          description:
            'Count of reports/abuses created by the user and accepted/acted upon by the moderation team',
        }),
      abusesCount: z
        .int()
        .exactOptional()
        .openapi({ description: 'Count of reports/abuses of which the user is a target' }),
      abusesCreatedCount: z
        .int()
        .exactOptional()
        .openapi({ description: 'Count of reports/abuses created by the user' }),
      videoCommentsCount: z
        .int()
        .exactOptional()
        .openapi({ description: 'Count of comments published' }),
      videosCount: z.int().exactOptional().openapi({ description: 'Count of videos published' }),
    })
    .openapi({ required: [] }),
).openapi('UserWithStats')

const VideoBlacklistSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().min(3).max(10000).exactOptional(),
    dislikes: z.int().exactOptional(),
    duration: z.int().exactOptional(),
    id: IdSchema.exactOptional(),
    likes: z.int().exactOptional(),
    name: z.string().min(3).max(120).exactOptional(),
    nsfw: z.boolean().exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    uuid: UUIDv4Schema.exactOptional(),
    videoId: z.lazy(() => VideoSchema).exactOptional(),
    views: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoBlacklist')

const VideoCaptionSchema = z
  .object({
    captionPath: z.string().exactOptional(),
    language: VideoConstantStringLanguageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoCaption')

const VideoChannelEditSchema = z
  .object({
    description: z.any().exactOptional().openapi({ description: 'Channel description' }),
    displayName: z.any().exactOptional().openapi({ description: 'Channel display name' }),
    support: z.any().exactOptional().openapi({ description: 'How to support/fund the channel' }),
  })
  .openapi({ required: [] })
  .openapi('VideoChannelEdit')

const VideoChannelCreateSchema = VideoChannelEditSchema.and(
  z
    .object({
      name: UsernameChannelSchema.exactOptional().openapi({
        description: 'username of the channel to create',
      }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['name', 'displayName'] })
  .openapi('VideoChannelCreate')

const VideoChannelListSchema = z
  .object({
    data: z.array(VideoChannelSchema.and(ActorSchema)).exactOptional(),
    total: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('VideoChannelList')

const VideoChannelSyncSchema = z
  .object({
    channel: VideoChannelSchema.exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    externalChannelUrl: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://youtube.com/c/UC_myfancychannel' }),
    id: IdSchema.exactOptional(),
    lastSyncAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    state: z
      .object({
        id: z.int().exactOptional().openapi({ example: 2 }),
        label: z.string().exactOptional().openapi({ example: 'PROCESSING' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('VideoChannelSync')

const VideoChannelSyncCreateSchema = z
  .object({
    externalChannelUrl: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://youtube.com/c/UC_myfancychannel' }),
    videoChannelId: IdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoChannelSyncCreate')

const VideoChannelSyncListSchema = z
  .object({
    data: z.array(VideoChannelSyncSchema).exactOptional(),
    total: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('VideoChannelSyncList')

const VideoChannelUpdateSchema = VideoChannelEditSchema.and(
  z
    .object({
      bulkVideosSupportUpdate: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Update the support field for all videos of this channel' }),
    })
    .openapi({ required: [] }),
).openapi('VideoChannelUpdate')

const VideoCommentThreadTreeSchema: z.ZodType<VideoCommentThreadTreeType> = z
  .lazy(() =>
    z
      .object({
        children: z.array(VideoCommentThreadTreeSchema).exactOptional(),
        comment: VideoCommentSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('VideoCommentThreadTree')

const VideoCommentsForXMLSchema = z
  .array(
    z
      .object({
        'content:encoded': z.string().exactOptional(),
        'dc:creator': z.string().exactOptional(),
        guid: z.string().exactOptional(),
        link: z.url().exactOptional(),
        pubDate: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .openapi({ xml: { name: 'item' }, required: [] }),
  )
  .openapi({ xml: { name: 'channel', wrapped: true } })
  .openapi('VideoCommentsForXML')

const VideoUploadRequestCommonSchema = z
  .object({
    category: VideoCategorySetSchema.exactOptional(),
    channelId: z
      .int()
      .min(1)
      .openapi({ description: 'Channel id that will contain this video', example: 3 }),
    commentsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable or disable comments for this video' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Video description',
        example:
          '**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n',
      }),
    downloadEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable or disable downloading for this video' }),
    language: VideoLanguageSetSchema.exactOptional(),
    licence: VideoLicenceSetSchema.exactOptional(),
    name: z
      .string()
      .min(3)
      .max(120)
      .openapi({ description: 'Video name', example: 'What is PeerTube?' }),
    nsfw: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this video contains sensitive content' }),
    originallyPublishedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date when the content was originally published' }),
    previewfile: z
      .file()
      .exactOptional()
      .openapi({ type: 'string', format: 'binary', description: 'Video preview file' }),
    privacy: VideoPrivacySetSchema.exactOptional(),
    scheduleUpdate: VideoScheduledUpdateSchema.exactOptional(),
    support: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A text tell the audience how to support the video creator',
        example: 'Please support our work on https://soutenir.framasoft.org/en/ <3',
      }),
    tags: z
      .array(z.string().min(2).max(30))
      .min(1)
      .max(5)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description: 'Video tags (maximum 5 tags each between 2 and 30 characters)',
        example: ['framasoft', 'peertube'],
      }),
    thumbnailfile: z
      .file()
      .exactOptional()
      .openapi({ type: 'string', format: 'binary', description: 'Video thumbnail file' }),
    waitTranscoding: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not we wait transcoding before publish the video' }),
  })
  .openapi({ required: ['channelId', 'name'] })
  .openapi('VideoUploadRequestCommon')

const VideoCreateImportSchema = z
  .xor([
    z.object({ targetUrl: z.lazy(() => VideoImportSchema) }).openapi({ required: ['targetUrl'] }),
    z.object({ magnetUri: z.lazy(() => VideoImportSchema) }).openapi({ required: ['magnetUri'] }),
    z
      .object({ torrentfile: z.lazy(() => VideoImportSchema) })
      .openapi({ required: ['torrentfile'] }),
  ])
  .and(VideoUploadRequestCommonSchema)
  .openapi({ required: ['channelId', 'name'] })
  .openapi('VideoCreateImport')

const VideoResolutionConstantSchema = z
  .object({
    id: VideoResolutionSetSchema.exactOptional(),
    label: z.string().exactOptional().openapi({ example: '240p' }),
  })
  .openapi({ description: 'resolutions and their labels for the video', required: [] })
  .openapi('VideoResolutionConstant')

const VideoFileSchema = z
  .object({
    fileDownloadUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'URL endpoint that transfers the video file as an attachment (so that the browser opens a download dialog)',
      }),
    fileUrl: z.url().exactOptional().openapi({ description: 'Direct URL of the video' }),
    fps: z.number().exactOptional().openapi({ description: 'Frames per second of the video file' }),
    id: IdSchema.exactOptional(),
    magnetUri: z
      .url()
      .regex(/\/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}\/i/)
      .exactOptional()
      .openapi({
        description:
          'magnet URI allowing to resolve the video via BitTorrent without a metainfo file',
      }),
    metadataUrl: z
      .url()
      .exactOptional()
      .openapi({ description: 'URL dereferencing the output of ffprobe on the file' }),
    resolution: VideoResolutionConstantSchema.exactOptional(),
    size: z.int().exactOptional().openapi({ description: 'Video file size in bytes' }),
    torrentDownloadUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'URL endpoint that transfers the torrent file as an attachment (so that the browser opens a download dialog)',
      }),
    torrentUrl: z.url().exactOptional().openapi({ description: 'Direct URL of the torrent file' }),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('VideoFile')

const VideoStreamingPlaylistsHLSSchema = z
  .object({
    files: z
      .array(VideoFileSchema)
      .exactOptional()
      .openapi({
        description:
          'Video files associated to this playlist.\n\nThe difference with the root `files` property is that these files are fragmented, so they can be used in this streaming playlist (HLS, etc.)\n',
      }),
    playlistUrl: z.url().exactOptional(),
    redundancies: z
      .array(z.object({ baseUrl: z.url().exactOptional() }).openapi({ required: [] }))
      .exactOptional(),
    segmentsSha256Url: z.url().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoStreamingPlaylistsHLS')

const VideoStreamingPlaylistsSchema = z
  .object({
    id: IdSchema.exactOptional(),
    type: z.literal(1).exactOptional().openapi({ description: 'Playlist type:\n- `1`: HLS\n' }),
  })
  .openapi({ required: [] })
  .and(VideoStreamingPlaylistsHLSSchema)
  .openapi('VideoStreamingPlaylists')

const VideoDetailsSchema = VideoSchema.and(
  z
    .object({
      account: AccountSchema.exactOptional(),
      channel: VideoChannelSchema.exactOptional(),
      commentsEnabled: z.boolean().exactOptional(),
      descriptionPath: z
        .string()
        .exactOptional()
        .openapi({
          description: 'path at which to get the full description of maximum `10000` characters',
          example: '/api/v1/videos/9c9de5e8-0a1e-484a-b099-e80766180a6d/description',
        }),
      downloadEnabled: z.boolean().exactOptional(),
      files: z
        .array(VideoFileSchema)
        .exactOptional()
        .openapi({
          description:
            'WebTorrent/raw video files. If WebTorrent is disabled on the server:\n\n- field will be empty\n- video files will be found in `streamingPlaylists[].files` field\n',
        }),
      streamingPlaylists: z
        .array(VideoStreamingPlaylistsSchema)
        .exactOptional()
        .openapi({
          description:
            'HLS playlists/manifest files. If HLS is disabled on the server:\n\n- field will be empty\n- video files will be found in `files` field\n',
        }),
      support: z
        .string()
        .min(3)
        .max(1000)
        .exactOptional()
        .openapi({
          description: 'A text tell the audience how to support the video creator',
          example: 'Please support our work on https://soutenir.framasoft.org/en/ <3',
        }),
      tags: z
        .array(z.string().min(2).max(30))
        .min(1)
        .max(5)
        .exactOptional()
        .openapi({ example: ['flowers', 'gardening'] }),
      trackerUrls: z
        .array(z.url())
        .exactOptional()
        .openapi({
          example: [
            'https://peertube2.cpy.re/tracker/announce',
            'wss://peertube2.cpy.re/tracker/socket',
          ],
        }),
      viewers: z
        .int()
        .exactOptional()
        .openapi({ description: 'If the video is a live, you have the amount of current viewers' }),
    })
    .openapi({ required: [] }),
).openapi('VideoDetails')

const VideoImportsListSchema = z
  .object({
    data: z.array(VideoImportSchema).max(100).exactOptional(),
    total: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('VideoImportsList')

const VideoListResponseSchema = z
  .object({
    data: z.array(VideoSchema).max(100).exactOptional(),
    total: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('VideoListResponse')

const VideoPlaylistPrivacySetSchema = z
  .union([z.literal(1), z.literal(2), z.literal(3)])
  .openapi({ description: 'Video playlist privacy policy (see [/video-playlists/privacies])' })
  .openapi('VideoPlaylistPrivacySet')

const VideoPlaylistPrivacyConstantSchema = z
  .object({ id: VideoPlaylistPrivacySetSchema.exactOptional(), label: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('VideoPlaylistPrivacyConstant')

const VideoPlaylistTypeSetSchema = z
  .union([z.literal(1), z.literal(2)])
  .openapi({ description: 'The video playlist type (Regular = `1`, Watch Later = `2`)' })
  .openapi('VideoPlaylistTypeSet')

const VideoPlaylistTypeConstantSchema = z
  .object({ id: VideoPlaylistTypeSetSchema.exactOptional(), label: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('VideoPlaylistTypeConstant')

const VideoPlaylistSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().min(3).max(1000).exactOptional(),
    displayName: z.string().min(1).max(120).exactOptional(),
    id: IdSchema.exactOptional(),
    isLocal: z.boolean().exactOptional(),
    ownerAccount: AccountSummarySchema.exactOptional(),
    privacy: VideoPlaylistPrivacyConstantSchema.exactOptional(),
    shortUUID: ShortUUIDSchema.exactOptional(),
    thumbnailPath: z.string().exactOptional(),
    type: VideoPlaylistTypeConstantSchema.exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    uuid: UUIDv4Schema.exactOptional(),
    videoChannel: VideoChannelSummarySchema.exactOptional(),
    videoLength: z.int().min(0).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoPlaylist')

const VideoRatingSchema = z
  .object({
    rating: z.enum(['like', 'dislike', 'none']).openapi({ description: 'Rating of the video' }),
    video: VideoSchema,
  })
  .openapi({ required: ['video', 'rating'] })
  .openapi('VideoRating')

const VideoRedundancySchema = z
  .object({
    id: IdSchema.exactOptional(),
    name: z.string().exactOptional(),
    redundancies: z
      .object({
        files: z.array(FileRedundancyInformationSchema).exactOptional(),
        streamingPlaylists: z.array(FileRedundancyInformationSchema).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    url: z.url().exactOptional(),
    uuid: UUIDv4Schema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoRedundancy')

const VideoSourceSchema = z
  .object({ filename: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('VideoSource')

const VideoStatsOverallSchema = z
  .object({
    averageWatchTime: z.number().exactOptional(),
    countries: z
      .array(
        z
          .object({ isoCode: z.string().exactOptional(), viewers: z.number().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    totalWatchTime: z.number().exactOptional(),
    viewersPeak: z.number().exactOptional(),
    viewersPeakDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoStatsOverall')

const VideoStatsRetentionSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            retentionPercent: z.number().exactOptional(),
            second: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoStatsRetention')

const VideoStatsTimeserieSchema = z
  .object({
    data: z
      .array(
        z
          .object({ date: z.string().exactOptional(), value: z.number().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VideoStatsTimeserie')

const VideoStudioCreateTaskSchema = z
  .array(
    z.union([
      z
        .object({
          name: z.literal('cut').exactOptional(),
          options: z
            .object({ end: z.int().exactOptional(), start: z.int().exactOptional() })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ title: 'cut', required: [] }),
      z
        .object({
          name: z.literal('add-intro').exactOptional(),
          options: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ title: 'add-intro', required: [] }),
      z
        .object({
          name: z.literal('add-outro').exactOptional(),
          options: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ title: 'add-outro', required: [] }),
      z
        .object({
          name: z.literal('add-watermark').exactOptional(),
          options: z
            .object({
              file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({ title: 'add-watermark', required: [] }),
    ]),
  )
  .openapi('VideoStudioCreateTask')

const VideoTokenResponseSchema = z
  .object({
    files: z
      .object({
        expires: z.iso.datetime({ offset: true }).exactOptional(),
        token: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('VideoTokenResponse')

const VideoUploadRequestLegacySchema = VideoUploadRequestCommonSchema.and(
  z
    .object({
      videofile: z.file().openapi({ type: 'string', format: 'binary', description: 'Video file' }),
    })
    .openapi({ required: ['videofile'] }),
).openapi('VideoUploadRequestLegacy')

const VideoUploadRequestResumableSchema = VideoUploadRequestCommonSchema.and(
  z
    .object({
      filename: z
        .string()
        .openapi({
          description: 'Video filename including extension',
          example: 'what_is_peertube.mp4',
        }),
      previewfile: z
        .file()
        .exactOptional()
        .openapi({ type: 'string', format: 'binary', description: 'Video preview file' }),
      thumbnailfile: z
        .file()
        .exactOptional()
        .openapi({ type: 'string', format: 'binary', description: 'Video thumbnail file' }),
    })
    .openapi({ required: ['filename'] }),
).openapi('VideoUploadRequestResumable')

const VideoUploadResponseSchema = z
  .object({
    video: z
      .object({
        id: z.lazy(() => VideoSchema).exactOptional(),
        shortUUID: z.lazy(() => VideoSchema).exactOptional(),
        uuid: z.lazy(() => VideoSchema).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('VideoUploadResponse')

const VideosForXMLSchema = z
  .array(
    z
      .object({
        'content:encoded': z.string().exactOptional().openapi({ description: 'video description' }),
        'dc:creator': z.string().exactOptional().openapi({ description: 'publisher user name' }),
        description: z.string().exactOptional().openapi({ description: 'video description' }),
        enclosure: z
          .object({
            length: z
              .int()
              .exactOptional()
              .openapi({ xml: { attribute: true } }),
            type: z
              .literal('application/x-bittorrent')
              .exactOptional()
              .openapi({ xml: { attribute: true } }),
            url: z
              .url()
              .exactOptional()
              .openapi({ xml: { attribute: true } }),
          })
          .exactOptional()
          .openapi({ description: 'main streamable file for the video', required: [] }),
        guid: z.string().exactOptional().openapi({ description: 'video canonical URL' }),
        link: z.url().exactOptional().openapi({ description: 'video watch page URL' }),
        'media:category': z.int().exactOptional().openapi({ description: 'video category (MRSS)' }),
        'media:community': z
          .object({
            'media:statistics': z
              .object({
                views: z
                  .int()
                  .exactOptional()
                  .openapi({ xml: { attribute: true } }),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({
            description:
              'see [media:community](https://www.rssboard.org/media-rss#media-community) (MRSS)',
            required: [],
          }),
        'media:description': z.string().exactOptional(),
        'media:embed': z
          .object({
            url: z
              .url()
              .exactOptional()
              .openapi({
                description: 'video embed path, relative to the canonical URL domain (MRSS)',
                xml: { attribute: true },
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        'media:group': z
          .array(z.union([MRSSPeerLinkSchema, MRSSGroupContentSchema]))
          .exactOptional()
          .openapi({
            description:
              'list of streamable files for the video. see [media:peerLink](https://www.rssboard.org/media-rss#media-peerlink) and [media:content](https://www.rssboard.org/media-rss#media-content) or  (MRSS)',
          }),
        'media:player': z
          .object({
            url: z
              .url()
              .exactOptional()
              .openapi({
                description: 'video watch path, relative to the canonical URL domain (MRSS)',
                xml: { attribute: true },
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        'media:rating': z
          .enum(['nonadult', 'adult'])
          .exactOptional()
          .openapi({
            description:
              'see [media:rating](https://www.rssboard.org/media-rss#media-rating) (MRSS)',
          }),
        'media:thumbnail': z
          .object({
            height: z
              .int()
              .exactOptional()
              .openapi({ xml: { attribute: true } }),
            url: z
              .url()
              .exactOptional()
              .openapi({ xml: { attribute: true } }),
            width: z
              .int()
              .exactOptional()
              .openapi({ xml: { attribute: true } }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        'media:title': z
          .string()
          .exactOptional()
          .openapi({
            description:
              'see [media:title](https://www.rssboard.org/media-rss#media-title) (MRSS). We only use `plain` titles.',
          }),
        pubDate: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'video publication date' }),
      })
      .openapi({ xml: { name: 'item' }, required: [] }),
  )
  .openapi({ xml: { name: 'channel', wrapped: true } })
  .openapi('VideosForXML')

const AbuseIdParamsSchema = z.preprocess(
  (val) =>
    typeof val === 'string' &&
    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
      ? Number(val)
      : val,
  IdSchema.openapi({
    param: {
      description: 'Abuse id',
      in: 'path',
      name: 'abuseId',
      required: true,
      schema: { $ref: '#/components/schemas/id' },
    },
  }),
)

const AbuseMessageIdParamsSchema = z.preprocess(
  (val) =>
    typeof val === 'string' &&
    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
      ? Number(val)
      : val,
  IdSchema.openapi({
    param: {
      description: 'Abuse message id',
      in: 'path',
      name: 'abuseMessageId',
      required: true,
      schema: { $ref: '#/components/schemas/id' },
    },
  }),
)

const AbusesSortParamsSchema = z
  .enum(['-id', '-createdAt', '-state'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort abuses by criteria',
      in: 'query',
      name: 'sort',
      required: false,
      schema: { enum: ['-id', '-createdAt', '-state'], type: 'string' },
    },
  })

const ActorTypeParamsSchema = z
  .enum(['Person', 'Application', 'Group', 'Service', 'Organization'])
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'actorType',
      schema: {
        enum: ['Person', 'Application', 'Group', 'Service', 'Organization'],
        type: 'string',
      },
      required: false,
    },
  })

const BlacklistsSortParamsSchema = z
  .enum(['-id', 'name', '-duration', '-views', '-likes', '-dislikes', '-uuid', '-createdAt'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort blocklists by criteria',
      in: 'query',
      name: 'sort',
      required: false,
      schema: {
        enum: ['-id', 'name', '-duration', '-views', '-likes', '-dislikes', '-uuid', '-createdAt'],
        type: 'string',
      },
    },
  })

const CaptionLanguageParamsSchema = VideoLanguageSetSchema.openapi({
  param: {
    description: 'The caption language',
    in: 'path',
    name: 'captionLanguage',
    required: true,
    schema: { $ref: '#/components/schemas/VideoLanguageSet' },
  },
})

const CategoryOneOfParamsSchema = z
  .xor([
    z.preprocess(
      (val) =>
        typeof val === 'string' &&
        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
          ? Number(val)
          : val,
      VideoCategorySetSchema,
    ),
    z.array(
      z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        VideoCategorySetSchema,
      ),
    ),
  ])
  .exactOptional()
  .openapi({
    param: {
      description: 'category id of the video (see [/videos/categories](#operation/getCategories))',
      explode: false,
      in: 'query',
      name: 'categoryOneOf',
      required: false,
      schema: {
        oneOf: [
          { $ref: '#/components/schemas/VideoCategorySet' },
          { items: { $ref: '#/components/schemas/VideoCategorySet' }, type: 'array' },
        ],
      },
      style: 'form',
    },
  })

const ChannelHandleParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The video channel handle',
      in: 'path',
      name: 'channelHandle',
      required: true,
      schema: { example: 'my_username | my_username@example.com', type: 'string' },
    },
    example: 'my_username | my_username@example.com',
  })

const ChannelSyncIdParamsSchema = z.preprocess(
  (val) =>
    typeof val === 'string' &&
    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
      ? Number(val)
      : val,
  IdSchema.openapi({
    param: {
      description: 'Channel Sync id',
      in: 'path',
      name: 'channelSyncId',
      required: true,
      schema: { $ref: '#/components/schemas/id' },
    },
  }),
)

const CommentIdParamsSchema = z.preprocess(
  (val) =>
    typeof val === 'string' &&
    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
      ? Number(val)
      : val,
  IdSchema.openapi({
    param: {
      description: 'The comment id',
      in: 'path',
      name: 'commentId',
      required: true,
      schema: { $ref: '#/components/schemas/id' },
    },
  }),
)

const CommentsSortParamsSchema = z
  .enum(['-createdAt', '-totalReplies'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort comments by criteria',
      in: 'query',
      name: 'sort',
      required: false,
      schema: { enum: ['-createdAt', '-totalReplies'], type: 'string' },
    },
  })

const CountParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(100),
  )
  .default(15)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of items to return',
      in: 'query',
      name: 'count',
      required: false,
      schema: { default: 15, maximum: 100, minimum: 1, type: 'integer' },
    },
  })

const FollowStateParamsSchema = z
  .enum(['pending', 'accepted'])
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'state',
      schema: { enum: ['pending', 'accepted'], type: 'string' },
      required: false,
    },
  })

const FollowersSortParamsSchema = z
  .literal('createdAt')
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort followers by criteria',
      in: 'query',
      name: 'sort',
      required: false,
      schema: { enum: ['createdAt'], type: 'string' },
    },
  })

const HasHLSFilesParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: '**PeerTube >= 4.0** Display only videos that have HLS files',
      in: 'query',
      name: 'hasHLSFiles',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const HasWebtorrentFilesParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: '**PeerTube >= 4.0** Display only videos that have WebTorrent files',
      in: 'query',
      name: 'hasWebtorrentFiles',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const IdParamsSchema = z.preprocess(
  (val) =>
    typeof val === 'string' &&
    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
      ? Number(val)
      : val,
  IdSchema.openapi({
    param: {
      description: 'Entity id',
      in: 'path',
      name: 'id',
      required: true,
      schema: { $ref: '#/components/schemas/id' },
    },
  }),
)

const IdOrUUIDParamsSchema = ((schema) =>
  z.union([
    z.preprocess(
      (val) =>
        typeof val === 'string' &&
        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
          ? Number(val)
          : val,
      schema,
    ),
    schema,
  ]))(z.xor([IdSchema, UUIDv4Schema, ShortUUIDSchema])).openapi({
  param: {
    description: 'The object id, uuid or short uuid',
    in: 'path',
    name: 'id',
    required: true,
    schema: {
      oneOf: [
        { $ref: '#/components/schemas/id' },
        { $ref: '#/components/schemas/UUIDv4' },
        { $ref: '#/components/schemas/shortUUID' },
      ],
    },
  },
})

const IncludeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(4), z.literal(8)]),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        '**PeerTube >= 4.0** Include additional videos in results (can be combined using bitwise or operator)\n- `0` NONE\n- `1` NOT_PUBLISHED_STATE\n- `2` BLACKLISTED\n- `4` BLOCKED_OWNER\n- `8` FILES\n',
      in: 'query',
      name: 'include',
      required: false,
      schema: { enum: [0, 1, 2, 4, 8], type: 'integer' },
    },
  })

const IsLiveParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'whether or not the video is a live',
      in: 'query',
      name: 'isLive',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const IsLocalParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: '**PeerTube >= 4.0** Display only local or remote videos',
      in: 'query',
      name: 'isLocal',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const JobTypeParamsSchema = z
  .enum([
    'activitypub-follow',
    'activitypub-http-broadcast',
    'activitypub-http-fetcher',
    'activitypub-http-unicast',
    'email',
    'video-transcoding',
    'video-file-import',
    'video-import',
    'videos-views-stats',
    'activitypub-refresher',
    'video-redundancy',
    'video-live-ending',
    'video-channel-import',
  ])
  .exactOptional()
  .openapi({
    param: {
      description: 'job type',
      in: 'query',
      name: 'jobType',
      required: false,
      schema: {
        enum: [
          'activitypub-follow',
          'activitypub-http-broadcast',
          'activitypub-http-fetcher',
          'activitypub-http-unicast',
          'email',
          'video-transcoding',
          'video-file-import',
          'video-import',
          'videos-views-stats',
          'activitypub-refresher',
          'video-redundancy',
          'video-live-ending',
          'video-channel-import',
        ],
        type: 'string',
      },
    },
  })

const LanguageOneOfParamsSchema = z
  .xor([VideoLanguageSetSchema, z.array(VideoLanguageSetSchema)])
  .exactOptional()
  .openapi({
    param: {
      description:
        "language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language",
      explode: false,
      in: 'query',
      name: 'languageOneOf',
      required: false,
      schema: {
        oneOf: [
          { $ref: '#/components/schemas/VideoLanguageSet' },
          { items: { $ref: '#/components/schemas/VideoLanguageSet' }, type: 'array' },
        ],
      },
      style: 'form',
    },
  })

const LicenceOneOfParamsSchema = z
  .xor([
    z.preprocess(
      (val) =>
        typeof val === 'string' &&
        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
          ? Number(val)
          : val,
      VideoLicenceSetSchema,
    ),
    z.array(
      z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        VideoLicenceSetSchema,
      ),
    ),
  ])
  .exactOptional()
  .openapi({
    param: {
      description: 'licence id of the video (see [/videos/licences](#operation/getLicences))',
      explode: false,
      in: 'query',
      name: 'licenceOneOf',
      required: false,
      schema: {
        oneOf: [
          { $ref: '#/components/schemas/VideoLicenceSet' },
          { items: { $ref: '#/components/schemas/VideoLicenceSet' }, type: 'array' },
        ],
      },
      style: 'form',
    },
  })

const NameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The username or handle of the account',
      in: 'path',
      name: 'name',
      required: true,
      schema: { example: 'chocobozzz | chocobozzz@example.org', type: 'string' },
    },
    example: 'chocobozzz | chocobozzz@example.org',
  })

const NpmNameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'name of the plugin/theme on npmjs.com or in its package.json',
      in: 'path',
      name: 'npmName',
      required: true,
      schema: { example: 'peertube-plugin-auth-ldap', type: 'string' },
    },
    example: 'peertube-plugin-auth-ldap',
  })

const NsfwParamsSchema = z
  .enum(['true', 'false'])
  .exactOptional()
  .openapi({
    param: {
      description: 'whether to include nsfw videos, if any',
      in: 'query',
      name: 'nsfw',
      required: false,
      schema: { enum: ['true', 'false'], type: 'string' },
    },
  })

const PlaylistElementIdParamsSchema = z.preprocess(
  (val) =>
    typeof val === 'string' &&
    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
      ? Number(val)
      : val,
  IdSchema.openapi({
    param: {
      description: 'Playlist element id',
      in: 'path',
      name: 'playlistElementId',
      required: true,
      schema: { $ref: '#/components/schemas/id' },
    },
  }),
)

const PlaylistIdParamsSchema = z.preprocess(
  (val) =>
    typeof val === 'string' &&
    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
      ? Number(val)
      : val,
  IdSchema.openapi({
    param: {
      description: 'Playlist id',
      in: 'path',
      name: 'playlistId',
      required: true,
      schema: { $ref: '#/components/schemas/id' },
    },
  }),
)

const PrivacyOneOfParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    VideoPrivacySetSchema.openapi({
      param: {
        description: '**PeerTube >= 4.0** Display only videos in this specific privacy/privacies',
        in: 'query',
        name: 'privacyOneOf',
        required: false,
        schema: { $ref: '#/components/schemas/VideoPrivacySet' },
      },
    }),
  )
  .exactOptional()

const RegistrationIdParamsSchema = z.preprocess(
  (val) =>
    typeof val === 'string' &&
    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
      ? Number(val)
      : val,
  IdSchema.openapi({
    param: {
      description: 'Registration ID',
      in: 'path',
      name: 'registrationId',
      required: true,
      schema: { $ref: '#/components/schemas/id' },
    },
  }),
)

const ReinjectVideoFileTokenParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Ask the server to reinject videoFileToken in URLs in m3u8 playlist',
      in: 'query',
      name: 'reinjectVideoFileToken',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const SearchParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Plain text search, applied to various parts of the model depending on endpoint',
      in: 'query',
      name: 'search',
      required: false,
      schema: { type: 'string' },
    },
  })

const SearchTargetParamsSchema = z
  .enum(['local', 'search-index'])
  .exactOptional()
  .openapi({
    param: {
      description:
        "If the administrator enabled search index support, you can override the default search target.\n\n**Warning**: If you choose to make an index search, PeerTube will get results from a third party service. It means the instance may not yet know the objects you fetched. If you want to load video/channel information:\n  * If the current user has the ability to make a remote URI search (this information is available in the config endpoint),\n  then reuse the search API to make a search using the object URI so PeerTube instance fetches the remote object and fill its database.\n  After that, you can use the classic REST API endpoints to fetch the complete object or interact with it\n  * If the current user doesn't have the ability to make a remote URI search, then redirect the user on the origin instance or fetch\n  the data from the origin instance API\n",
      in: 'query',
      name: 'searchTarget',
      required: false,
      schema: { enum: ['local', 'search-index'], type: 'string' },
    },
  })

const SkipCountParamsSchema = z
  .enum(['true', 'false'])
  .default('false')
  .exactOptional()
  .openapi({
    param: {
      description: "if you don't need the `total` in the response",
      in: 'query',
      name: 'skipCount',
      required: false,
      schema: { default: 'false', enum: ['true', 'false'], type: 'string' },
    },
  })

const SortParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort column',
      in: 'query',
      name: 'sort',
      required: false,
      schema: { example: '-createdAt', type: 'string' },
    },
    example: '-createdAt',
  })

const StartParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Offset used to paginate results',
      in: 'query',
      name: 'start',
      required: false,
      schema: { minimum: 0, type: 'integer' },
    },
  })

const StaticFilenameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Filename',
      in: 'path',
      name: 'filename',
      required: true,
      schema: { type: 'string' },
    },
  })

const SubscriptionHandleParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The subscription handle',
      in: 'path',
      name: 'subscriptionHandle',
      required: true,
      schema: { example: 'my_username | my_username@example.com', type: 'string' },
    },
    example: 'my_username | my_username@example.com',
  })

const SubscriptionsUrisParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.url()))
  .openapi({
    param: {
      description: 'list of uris to check if each is part of the user subscriptions',
      in: 'query',
      name: 'uris',
      required: true,
      schema: { items: { format: 'uri', type: 'string' }, type: 'array' },
    },
  })

const TagsAllOfParamsSchema = z
  .xor([z.string(), z.array(z.string())])
  .exactOptional()
  .openapi({
    param: {
      description: 'tag(s) of the video, where all should be present in the video',
      explode: false,
      in: 'query',
      name: 'tagsAllOf',
      required: false,
      schema: { oneOf: [{ type: 'string' }, { items: { type: 'string' }, type: 'array' }] },
      style: 'form',
    },
  })

const TagsOneOfParamsSchema = z
  .xor([z.string(), z.array(z.string()).max(5)])
  .exactOptional()
  .openapi({
    param: {
      description: 'tag(s) of the video',
      explode: false,
      in: 'query',
      name: 'tagsOneOf',
      required: false,
      schema: {
        oneOf: [{ type: 'string' }, { items: { type: 'string' }, maxItems: 5, type: 'array' }],
      },
      style: 'form',
    },
  })

const ThreadIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'The thread id (root comment id)',
      in: 'path',
      name: 'threadId',
      required: true,
      schema: { type: 'integer' },
    },
  })

const UsersBlockedParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter results down to (un)banned users',
      in: 'query',
      name: 'blocked',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const UsersSearchParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Plain text search that will match with user usernames or emails',
      in: 'query',
      name: 'search',
      required: false,
      schema: { type: 'string' },
    },
  })

const UsersSortParamsSchema = z
  .enum(['-id', '-username', '-createdAt'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort users by criteria',
      in: 'query',
      name: 'sort',
      required: false,
      schema: { enum: ['-id', '-username', '-createdAt'], type: 'string' },
    },
  })

const UuidsParamsSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (Array.isArray(val)) {
      {
        const Schema = z.string()
        for (let i = 0; i < val.length; i++) {
          if (!Schema.safeParse(val[i]).success) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      }
    }
  })
  .exactOptional()
  .openapi({
    param: {
      description: 'Find videos with specific UUIDs',
      in: 'query',
      name: 'uuids',
      required: false,
      schema: { items: { type: 'string' } },
    },
  })

const VideoFileTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "Video file token [generated](#operation/requestVideoToken) by PeerTube so you don't need to provide an OAuth token in the request header.",
      in: 'query',
      name: 'videoFileToken',
      required: false,
      schema: { type: 'string' },
    },
  })

const VideoPlaylistTypeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    VideoPlaylistTypeSetSchema.openapi({
      param: {
        in: 'query',
        name: 'playlistType',
        required: false,
        schema: { $ref: '#/components/schemas/VideoPlaylistTypeSet' },
      },
    }),
  )
  .exactOptional()

const VideoRedundanciesSortParamsSchema = z
  .literal('name')
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort abuses by criteria',
      in: 'query',
      name: 'sort',
      required: false,
      schema: { enum: ['name'], type: 'string' },
    },
  })

const VideosSearchSortParamsSchema = z
  .enum(['name', '-duration', '-createdAt', '-publishedAt', '-views', '-likes', '-match'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Sort videos by criteria (prefixing with `-` means `DESC` order):\n',
      in: 'query',
      name: 'sort',
      required: false,
      schema: {
        enum: ['name', '-duration', '-createdAt', '-publishedAt', '-views', '-likes', '-match'],
        type: 'string',
      },
    },
  })

const VideosSortParamsSchema = z
  .enum([
    'name',
    '-duration',
    '-createdAt',
    '-publishedAt',
    '-views',
    '-likes',
    '-trending',
    '-hot',
    '-best',
  ])
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'sort',
      required: false,
      schema: {
        description:
          'Sort videos by criteria (prefixing with `-` means `DESC` order):\n  * `hot` - Adaptation of Reddit "hot" algorithm taking into account video views, likes, dislikes and comments and publication date\n  * `best` - Same than `hot`, but also takes into account user video history\n  * `trending` - Sort videos by recent views ("recent" is defined by the admin)\n  * `views` - Sort videos using their `views` counter\n  * `publishedAt` - Sort by video publication date (when it became publicly available)\n',
        enum: [
          'name',
          '-duration',
          '-createdAt',
          '-publishedAt',
          '-views',
          '-likes',
          '-trending',
          '-hot',
          '-best',
        ],
        type: 'string',
      },
    },
    description:
      'Sort videos by criteria (prefixing with `-` means `DESC` order):\n  * `hot` - Adaptation of Reddit "hot" algorithm taking into account video views, likes, dislikes and comments and publication date\n  * `best` - Same than `hot`, but also takes into account user video history\n  * `trending` - Sort videos by recent views ("recent" is defined by the admin)\n  * `views` - Sort videos using their `views` counter\n  * `publishedAt` - Sort by video publication date (when it became publicly available)\n',
  })

const OAuth2SecurityScheme = {
  description:
    'Authenticating via OAuth requires the following steps:\n- Have an activated account\n- [Generate] an access token for that account at `/api/v1/users/token`.\n- Make requests with the *Authorization: Bearer <token\\>* header\n- Profit, depending on the role assigned to the account\n\nNote that the __access token is valid for 1 day__ and is given\nalong with a __refresh token valid for 2 weeks__.\n\n[Generate]: https://docs.joinpeertube.org/api/rest-getting-started\n',
  flows: {
    password: {
      scopes: { admin: 'Admin scope', moderator: 'Moderator scope', user: 'User scope' },
      tokenUrl: '/api/v1/users/token',
    },
  },
  type: 'oauth2',
}

const SearchIndexCallback = {
  'https://search.example.org/api/v1/search/videos': {
    post: {
      summary:
        'third-party search index MAY be used instead of the local index, if enabled by the instance admin. see `searchTarget`',
      responses: {
        200: {
          description: 'successful operation',
          content: { 'application/json': { schema: VideoListResponseSchema } },
        },
      },
    },
  },
}

export const getApiV1AbusesRoute = createRoute({
  method: 'get',
  path: '/api/v1/abuses',
  tags: ['Abuses'],
  summary: 'List abuses',
  operationId: 'getAbuses',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'only list the report with this id',
            in: 'query',
            name: 'id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      predefinedReason: PredefinedAbuseReasonsSchema.openapi({
        param: {
          description: 'predefined reason the listed reports should contain',
          in: 'query',
          name: 'predefinedReason',
          schema: { $ref: '#/components/schemas/PredefinedAbuseReasons' },
          required: false,
        },
      }).exactOptional(),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'plain search that will match with video titles, reporter names and more',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      state: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          AbuseStateSetSchema.openapi({
            param: {
              in: 'query',
              name: 'state',
              schema: { $ref: '#/components/schemas/AbuseStateSet' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      searchReporter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'only list reports of a specific reporter',
            in: 'query',
            name: 'searchReporter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchReportee: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'only list reports of a specific reportee',
            in: 'query',
            name: 'searchReportee',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchVideo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'only list reports of a specific video',
            in: 'query',
            name: 'searchVideo',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchVideoChannel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'only list reports of a specific video channel',
            in: 'query',
            name: 'searchVideoChannel',
            schema: { type: 'string' },
            required: false,
          },
        }),
      videoIs: z
        .enum(['deleted', 'blacklisted'])
        .exactOptional()
        .openapi({
          param: {
            description: 'only list deleted or blocklisted videos',
            in: 'query',
            name: 'videoIs',
            schema: { enum: ['deleted', 'blacklisted'], type: 'string' },
            required: false,
          },
        }),
      filter: z
        .enum(['video', 'comment', 'account'])
        .exactOptional()
        .openapi({
          param: {
            description: 'only list account, comment or video reports',
            in: 'query',
            name: 'filter',
            schema: { enum: ['video', 'comment', 'account'], type: 'string' },
            required: false,
          },
        }),
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: AbusesSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(AbuseSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['admin', 'moderator'] }],
})

export const postApiV1AbusesRoute = createRoute({
  method: 'post',
  path: '/api/v1/abuses',
  tags: ['Abuses'],
  summary: 'Report an abuse',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              account: z
                .object({
                  id: z.int().exactOptional().openapi({ description: 'Account id to report' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              comment: z
                .object({
                  id: IdSchema.exactOptional().openapi({ description: 'Comment id to report' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              predefinedReasons: PredefinedAbuseReasonsSchema.exactOptional(),
              reason: z
                .string()
                .min(2)
                .max(3000)
                .openapi({ description: 'Reason why the user reports this video' }),
              video: z
                .object({
                  endAt: z
                    .int()
                    .min(0)
                    .exactOptional()
                    .openapi({
                      description: 'Timestamp in the video that marks the ending of the report',
                    }),
                  id: z
                    .lazy(() => VideoSchema)
                    .exactOptional()
                    .openapi({ description: 'Video id to report' }),
                  startAt: z
                    .int()
                    .min(0)
                    .exactOptional()
                    .openapi({
                      description: 'Timestamp in the video that marks the beginning of the report',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['reason'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              abuse: z
                .object({ id: IdSchema.exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'incorrect request parameters' },
  },
  security: [{ OAuth2: [] }],
})

export const putApiV1AbusesAbuseIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/abuses/{abuseId}',
  tags: ['Abuses'],
  summary: 'Update an abuse',
  request: {
    params: z.object({ abuseId: AbuseIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              moderationComment: z
                .string()
                .min(2)
                .max(3000)
                .exactOptional()
                .openapi({
                  description: 'Update the report comment visible only to the moderation team',
                }),
              state: AbuseStateSetSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'abuse not found' },
  },
  security: [{ OAuth2: ['admin', 'moderator'] }],
})

export const deleteApiV1AbusesAbuseIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/abuses/{abuseId}',
  tags: ['Abuses'],
  summary: 'Delete an abuse',
  request: { params: z.object({ abuseId: AbuseIdParamsSchema }) },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'block not found' },
  },
  security: [{ OAuth2: ['admin', 'moderator'] }],
})

export const getApiV1AbusesAbuseIdMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/abuses/{abuseId}/messages',
  tags: ['Abuses'],
  summary: 'List messages of an abuse',
  request: { params: z.object({ abuseId: AbuseIdParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(AbuseMessageSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const postApiV1AbusesAbuseIdMessagesRoute = createRoute({
  method: 'post',
  path: '/api/v1/abuses/{abuseId}/messages',
  tags: ['Abuses'],
  summary: 'Add message to an abuse',
  request: {
    params: z.object({ abuseId: AbuseIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().min(2).max(3000).openapi({ description: 'Message to send' }),
            })
            .openapi({ required: ['message'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'successful operation' },
    400: { description: 'incorrect request parameters' },
  },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1AbusesAbuseIdMessagesAbuseMessageIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/abuses/{abuseId}/messages/{abuseMessageId}',
  tags: ['Abuses'],
  summary: 'Delete an abuse message',
  request: {
    params: z.object({ abuseId: AbuseIdParamsSchema, abuseMessageId: AbuseMessageIdParamsSchema }),
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const getApiV1AccountsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts',
  tags: ['Accounts'],
  summary: 'List accounts',
  operationId: 'getAccounts',
  request: {
    query: z.object({ start: StartParamsSchema, count: CountParamsSchema, sort: SortParamsSchema }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
  },
})

export const getApiV1AccountsNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{name}',
  tags: ['Accounts'],
  summary: 'Get an account',
  operationId: 'getAccount',
  request: { params: z.object({ name: NameParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: AccountSchema } },
    },
    404: { description: 'account not found' },
  },
})

export const getApiV1AccountsNameFollowersRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{name}/followers',
  tags: ['Accounts'],
  summary: 'List followers of an account',
  operationId: 'getAccountFollowers',
  request: {
    params: z.object({ name: NameParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: FollowersSortParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(FollowSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1AccountsNameRatingsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{name}/ratings',
  tags: ['Accounts'],
  summary: 'List ratings of an account',
  request: {
    params: z.object({ name: NameParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      rating: z
        .enum(['like', 'dislike'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optionally filter which ratings to retrieve',
            in: 'query',
            name: 'rating',
            required: false,
            schema: { enum: ['like', 'dislike'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(VideoRatingSchema) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1AccountsNameVideoChannelSyncsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{name}/video-channel-syncs',
  tags: ['Video Channels', 'Channels Sync', 'Accounts'],
  summary: 'List the synchronizations of video channels of an account',
  request: {
    params: z.object({ name: NameParamsSchema }),
    query: z.object({ start: StartParamsSchema, count: CountParamsSchema, sort: SortParamsSchema }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoChannelSyncListSchema } },
    },
  },
})

export const getApiV1AccountsNameVideoChannelsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{name}/video-channels',
  tags: ['Video Channels', 'Accounts'],
  summary: 'List video channels of an account',
  request: {
    params: z.object({ name: NameParamsSchema }),
    query: z.object({
      withStats: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'include daily view statistics for the last 30 days and total views (only if authentified as the account user)',
            in: 'query',
            name: 'withStats',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoChannelListSchema } },
    },
  },
})

export const getApiV1AccountsNameVideoPlaylistsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{name}/video-playlists',
  tags: ['Video Playlists', 'Accounts'],
  summary: 'List playlists of an account',
  request: {
    params: z.object({ name: NameParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      search: SearchParamsSchema,
      playlistType: VideoPlaylistTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(VideoPlaylistSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getApiV1AccountsNameVideosRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{name}/videos',
  tags: ['Accounts', 'Video'],
  summary: 'List videos of an account',
  operationId: 'getAccountVideos',
  request: {
    params: z.object({ name: NameParamsSchema }),
    query: z.object({
      categoryOneOf: CategoryOneOfParamsSchema,
      isLive: IsLiveParamsSchema,
      tagsOneOf: TagsOneOfParamsSchema,
      tagsAllOf: TagsAllOfParamsSchema,
      licenceOneOf: LicenceOneOfParamsSchema,
      languageOneOf: LanguageOneOfParamsSchema,
      nsfw: NsfwParamsSchema,
      isLocal: IsLocalParamsSchema,
      include: IncludeParamsSchema,
      privacyOneOf: PrivacyOneOfParamsSchema,
      hasHLSFiles: HasHLSFilesParamsSchema,
      hasWebtorrentFiles: HasWebtorrentFilesParamsSchema,
      skipCount: SkipCountParamsSchema,
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: VideosSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoListResponseSchema } },
    },
  },
})

export const getApiV1BlocklistStatusRoute = createRoute({
  method: 'get',
  path: '/api/v1/blocklist/status',
  tags: ['Account Blocks', 'Server Blocks'],
  summary: 'Get block status of accounts/hosts',
  request: {
    query: z.object({
      accounts: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Check if these accounts are blocked',
            example: ['goofy@example.com', 'donald@example.com'],
            in: 'query',
            name: 'accounts',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      hosts: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Check if these hosts are blocked',
            example: ['example.com'],
            in: 'query',
            name: 'hosts',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: BlockStatusSchema } },
    },
  },
})

export const getApiV1ConfigRoute = createRoute({
  method: 'get',
  path: '/api/v1/config',
  tags: ['Config'],
  summary: 'Get instance public configuration',
  operationId: 'getConfig',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ServerConfigSchema,
          examples: { nightly: { externalValue: 'https://peertube2.cpy.re/api/v1/config' } },
        },
      },
    },
  },
})

export const getApiV1ConfigAboutRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/about',
  tags: ['Config'],
  summary: 'Get instance "About" information',
  operationId: 'getAbout',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: ServerConfigAboutSchema,
          examples: { nightly: { externalValue: 'https://peertube2.cpy.re/api/v1/config/about' } },
        },
      },
    },
  },
})

export const getApiV1ConfigCustomRoute = createRoute({
  method: 'get',
  path: '/api/v1/config/custom',
  tags: ['Config'],
  summary: 'Get instance runtime configuration',
  operationId: 'getCustomConfig',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ServerConfigCustomSchema } },
    },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const putApiV1ConfigCustomRoute = createRoute({
  method: 'put',
  path: '/api/v1/config/custom',
  tags: ['Config'],
  summary: 'Set instance runtime configuration',
  operationId: 'putCustomConfig',
  responses: {
    200: { description: 'successful operation' },
    400: {
      description:
        'Arises when:\n  - the emailer is disabled and the instance is open to registrations\n  - webtorrent and hls are disabled with transcoding enabled - you need at least one enabled\n',
    },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const deleteApiV1ConfigCustomRoute = createRoute({
  method: 'delete',
  path: '/api/v1/config/custom',
  tags: ['Config'],
  summary: 'Delete instance runtime configuration',
  operationId: 'delCustomConfig',
  responses: { 200: { description: 'successful operation' } },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1CustomPagesHomepageInstanceRoute = createRoute({
  method: 'get',
  path: '/api/v1/custom-pages/homepage/instance',
  tags: ['Homepage'],
  summary: 'Get instance custom homepage',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: CustomHomepageSchema } },
    },
    404: { description: 'No homepage set' },
  },
})

export const putApiV1CustomPagesHomepageInstanceRoute = createRoute({
  method: 'put',
  path: '/api/v1/custom-pages/homepage/instance',
  tags: ['Homepage'],
  summary: 'Set instance custom homepage',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              content: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'content of the homepage, that will be injected in the client',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1JobsPauseRoute = createRoute({
  method: 'post',
  path: '/api/v1/jobs/pause',
  tags: ['Job'],
  summary: 'Pause job queue',
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1JobsResumeRoute = createRoute({
  method: 'post',
  path: '/api/v1/jobs/resume',
  tags: ['Job'],
  summary: 'Resume job queue',
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1JobsStateRoute = createRoute({
  method: 'get',
  path: '/api/v1/jobs/{state}',
  tags: ['Job'],
  summary: 'List instance jobs',
  operationId: 'getJobs',
  request: {
    params: z.object({
      state: z
        .enum(['', 'active', 'completed', 'failed', 'waiting', 'delayed'])
        .openapi({
          param: {
            description: "The state of the job ('' for for no filter)",
            in: 'path',
            name: 'state',
            required: true,
            schema: {
              enum: ['', 'active', 'completed', 'failed', 'waiting', 'delayed'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      jobType: JobTypeParamsSchema,
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(JobSchema).max(100).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1MetricsPlaybackRoute = createRoute({
  method: 'post',
  path: '/api/v1/metrics/playback',
  tags: ['Stats'],
  summary: 'Create playback metrics',
  description: 'These metrics are exposed by OpenTelemetry metrics exporter if enabled.',
  request: { body: { content: { 'application/json': { schema: PlaybackMetricCreateSchema } } } },
  responses: { 204: { description: 'successful operation' } },
})

export const getApiV1OauthClientsLocalRoute = createRoute({
  method: 'get',
  path: '/api/v1/oauth-clients/local',
  tags: ['Session'],
  summary: 'Login prerequisite',
  description:
    'You need to retrieve a client id and secret before [logging in](#operation/getOAuthToken).',
  operationId: 'getOAuthClient',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: OAuthClientSchema } },
      links: {
        UseOAuthClientToLogin: {
          operationId: 'getOAuthToken',
          parameters: {
            client_id: '$response.body#/client_id',
            client_secret: '$response.body#/client_secret',
          },
        },
      },
    },
  },
})

export const getApiV1PluginsRoute = createRoute({
  method: 'get',
  path: '/api/v1/plugins',
  tags: ['Plugins'],
  summary: 'List plugins',
  operationId: 'getPlugins',
  request: {
    query: z.object({
      pluginType: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pluginType', schema: { type: 'integer' }, required: false },
        }),
      uninstalled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'uninstalled', schema: { type: 'boolean' }, required: false },
        }),
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PluginResponseSchema } },
    },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1PluginsAvailableRoute = createRoute({
  method: 'get',
  path: '/api/v1/plugins/available',
  tags: ['Plugins'],
  summary: 'List available plugins',
  operationId: 'getAvailablePlugins',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', schema: { type: 'string' }, required: false },
        }),
      pluginType: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pluginType', schema: { type: 'integer' }, required: false },
        }),
      currentPeerTubeEngine: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'currentPeerTubeEngine',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PluginResponseSchema } },
    },
    503: { description: 'plugin index unavailable' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1PluginsInstallRoute = createRoute({
  method: 'post',
  path: '/api/v1/plugins/install',
  tags: ['Plugins'],
  summary: 'Install a plugin',
  operationId: 'addPlugin',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .strictObject({
                npmName: z.string().openapi({ example: 'peertube-plugin-auth-ldap' }),
              })
              .openapi({ required: ['npmName'] }),
            z.strictObject({ path: z.string() }).openapi({ required: ['path'] }),
          ]),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: 'should have either `npmName` or `path` set' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1PluginsUninstallRoute = createRoute({
  method: 'post',
  path: '/api/v1/plugins/uninstall',
  tags: ['Plugins'],
  summary: 'Uninstall a plugin',
  operationId: 'uninstallPlugin',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              npmName: z
                .string()
                .openapi({
                  description: 'name of the plugin/theme in its package.json',
                  example: 'peertube-plugin-auth-ldap',
                }),
            })
            .openapi({ required: ['npmName'] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'existing plugin not found' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1PluginsUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/plugins/update',
  tags: ['Plugins'],
  summary: 'Update a plugin',
  operationId: 'updatePlugin',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .strictObject({
                npmName: z.string().openapi({ example: 'peertube-plugin-auth-ldap' }),
              })
              .openapi({ required: ['npmName'] }),
            z.strictObject({ path: z.string() }).openapi({ required: ['path'] }),
          ]),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: 'should have either `npmName` or `path` set' },
    404: { description: 'existing plugin not found' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1PluginsNpmNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/plugins/{npmName}',
  tags: ['Plugins'],
  summary: 'Get a plugin',
  operationId: 'getPlugin',
  request: { params: z.object({ npmName: NpmNameParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PluginSchema } },
    },
    404: { description: 'plugin not found' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1PluginsNpmNamePublicSettingsRoute = createRoute({
  method: 'get',
  path: '/api/v1/plugins/{npmName}/public-settings',
  tags: ['Plugins'],
  summary: "Get a plugin's public settings",
  request: { params: z.object({ npmName: NpmNameParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    404: { description: 'plugin not found' },
  },
})

export const getApiV1PluginsNpmNameRegisteredSettingsRoute = createRoute({
  method: 'get',
  path: '/api/v1/plugins/{npmName}/registered-settings',
  tags: ['Plugins'],
  summary: "Get a plugin's registered settings",
  request: { params: z.object({ npmName: NpmNameParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
    404: { description: 'plugin not found' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const putApiV1PluginsNpmNameSettingsRoute = createRoute({
  method: 'put',
  path: '/api/v1/plugins/{npmName}/settings',
  tags: ['Plugins'],
  summary: "Set a plugin's settings",
  request: {
    params: z.object({ npmName: NpmNameParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ settings: z.looseObject({}).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'plugin not found' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1SearchVideoChannelsRoute = createRoute({
  method: 'get',
  path: '/api/v1/search/video-channels',
  tags: ['Search'],
  summary: 'Search channels',
  operationId: 'searchChannels',
  request: {
    query: z.object({
      search: z
        .string()
        .openapi({
          param: {
            description:
              'String to search. If the user can make a remote URI search, and the string is an URI then the PeerTube instance will fetch the remote object and add it to its database. Then, you can use the REST API to fetch the complete channel information and interact with it.\n',
            in: 'query',
            name: 'search',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: StartParamsSchema,
      count: CountParamsSchema,
      searchTarget: SearchTargetParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoChannelListSchema } },
    },
    500: { description: 'search index unavailable' },
  },
  callbacks: { 'searchTarget === search-index': SearchIndexCallback },
})

export const getApiV1SearchVideoPlaylistsRoute = createRoute({
  method: 'get',
  path: '/api/v1/search/video-playlists',
  tags: ['Search'],
  summary: 'Search playlists',
  operationId: 'searchPlaylists',
  request: {
    query: z.object({
      search: z
        .string()
        .openapi({
          param: {
            description:
              'String to search. If the user can make a remote URI search, and the string is an URI then the PeerTube instance will fetch the remote object and add it to its database. Then, you can use the REST API to fetch the complete playlist information and interact with it.\n',
            in: 'query',
            name: 'search',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: StartParamsSchema,
      count: CountParamsSchema,
      searchTarget: SearchTargetParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(VideoPlaylistSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    500: { description: 'search index unavailable' },
  },
  callbacks: { 'searchTarget === search-index': SearchIndexCallback },
})

export const getApiV1SearchVideosRoute = createRoute({
  method: 'get',
  path: '/api/v1/search/videos',
  tags: ['Search'],
  summary: 'Search videos',
  operationId: 'searchVideos',
  request: {
    query: z.object({
      search: z
        .string()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'String to search. If the user can make a remote URI search, and the string is an URI then the PeerTube instance will fetch the remote object and add it to its database. Then, you can use the REST API to fetch the complete video information and interact with it.\n',
            in: 'query',
            name: 'search',
            required: true,
            schema: { type: 'string' },
          },
        }),
      categoryOneOf: CategoryOneOfParamsSchema,
      isLive: IsLiveParamsSchema,
      tagsOneOf: TagsOneOfParamsSchema,
      tagsAllOf: TagsAllOfParamsSchema,
      licenceOneOf: LicenceOneOfParamsSchema,
      languageOneOf: LanguageOneOfParamsSchema,
      nsfw: NsfwParamsSchema,
      isLocal: IsLocalParamsSchema,
      include: IncludeParamsSchema,
      privacyOneOf: PrivacyOneOfParamsSchema,
      uuids: UuidsParamsSchema,
      hasHLSFiles: HasHLSFilesParamsSchema,
      hasWebtorrentFiles: HasWebtorrentFilesParamsSchema,
      skipCount: SkipCountParamsSchema,
      start: StartParamsSchema,
      count: CountParamsSchema,
      searchTarget: SearchTargetParamsSchema,
      sort: VideosSearchSortParamsSchema,
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Get videos that are published after this date',
            in: 'query',
            name: 'startDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Get videos that are published before this date',
            in: 'query',
            name: 'endDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      originallyPublishedStartDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Get videos that are originally published after this date',
            in: 'query',
            name: 'originallyPublishedStartDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      originallyPublishedEndDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Get videos that are originally published before this date',
            in: 'query',
            name: 'originallyPublishedEndDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      durationMin: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get videos that have this minimum duration',
            in: 'query',
            name: 'durationMin',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      durationMax: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get videos that have this maximum duration',
            in: 'query',
            name: 'durationMax',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoListResponseSchema } },
    },
    500: { description: 'search index unavailable' },
  },
  callbacks: { 'searchTarget === search-index': SearchIndexCallback },
})

export const getApiV1ServerAuditLogsRoute = createRoute({
  method: 'get',
  path: '/api/v1/server/audit-logs',
  tags: ['Logs'],
  summary: 'Get instance audit logs',
  operationId: 'getInstanceAuditLogs',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1ServerBlocklistAccountsRoute = createRoute({
  method: 'get',
  path: '/api/v1/server/blocklist/accounts',
  tags: ['Account Blocks'],
  summary: 'List account blocks',
  request: {
    query: z.object({ start: StartParamsSchema, count: CountParamsSchema, sort: SortParamsSchema }),
  },
  responses: { 200: { description: 'successful operation' } },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1ServerBlocklistAccountsRoute = createRoute({
  method: 'post',
  path: '/api/v1/server/blocklist/accounts',
  tags: ['Account Blocks'],
  summary: 'Block an account',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accountName: z
                .string()
                .openapi({
                  description: 'account to block, in the form `username@domain`',
                  example: 'chocobozzz@example.org',
                }),
            })
            .openapi({ required: ['accountName'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'successful operation' },
    409: { description: 'self-blocking forbidden' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const deleteApiV1ServerBlocklistAccountsAccountNameRoute = createRoute({
  method: 'delete',
  path: '/api/v1/server/blocklist/accounts/{accountName}',
  tags: ['Account Blocks'],
  summary: 'Unblock an account by its handle',
  request: {
    params: z.object({
      accountName: z
        .string()
        .openapi({
          param: {
            description: 'account to unblock, in the form `username@domain`',
            in: 'path',
            name: 'accountName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: { description: 'successful operation' },
    404: { description: 'account or account block does not exist' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1ServerBlocklistServersRoute = createRoute({
  method: 'get',
  path: '/api/v1/server/blocklist/servers',
  tags: ['Server Blocks'],
  summary: 'List server blocks',
  request: {
    query: z.object({ start: StartParamsSchema, count: CountParamsSchema, sort: SortParamsSchema }),
  },
  responses: { 200: { description: 'successful operation' } },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1ServerBlocklistServersRoute = createRoute({
  method: 'post',
  path: '/api/v1/server/blocklist/servers',
  tags: ['Server Blocks'],
  summary: 'Block a server',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ host: z.hostname().openapi({ description: 'server domain to block' }) })
            .openapi({ required: ['host'] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    409: { description: 'self-blocking forbidden' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const deleteApiV1ServerBlocklistServersHostRoute = createRoute({
  method: 'delete',
  path: '/api/v1/server/blocklist/servers/{host}',
  tags: ['Server Blocks'],
  summary: 'Unblock a server by its domain',
  request: {
    params: z.object({
      host: z
        .hostname()
        .openapi({
          param: {
            description: 'server domain to unblock',
            in: 'path',
            name: 'host',
            required: true,
            schema: { format: 'hostname', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'account block does not exist' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1ServerFollowersRoute = createRoute({
  method: 'get',
  path: '/api/v1/server/followers',
  tags: ['Instance Follows'],
  summary: 'List instances following the server',
  request: {
    query: z.object({
      state: FollowStateParamsSchema,
      actorType: ActorTypeParamsSchema,
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(FollowSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteApiV1ServerFollowersNameWithHostRoute = createRoute({
  method: 'delete',
  path: '/api/v1/server/followers/{nameWithHost}',
  tags: ['Instance Follows'],
  summary: 'Remove or reject a follower to your server',
  request: {
    params: z.object({
      nameWithHost: z
        .email()
        .openapi({
          param: {
            description: 'The remote actor handle to remove from your followers',
            in: 'path',
            name: 'nameWithHost',
            required: true,
            schema: { format: 'email', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'follower not found' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1ServerFollowersNameWithHostAcceptRoute = createRoute({
  method: 'post',
  path: '/api/v1/server/followers/{nameWithHost}/accept',
  tags: ['Instance Follows'],
  summary: 'Accept a pending follower to your server',
  request: {
    params: z.object({
      nameWithHost: z
        .email()
        .openapi({
          param: {
            description: 'The remote actor handle to remove from your followers',
            in: 'path',
            name: 'nameWithHost',
            required: true,
            schema: { format: 'email', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'follower not found' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1ServerFollowersNameWithHostRejectRoute = createRoute({
  method: 'post',
  path: '/api/v1/server/followers/{nameWithHost}/reject',
  tags: ['Instance Follows'],
  summary: 'Reject a pending follower to your server',
  request: {
    params: z.object({
      nameWithHost: z
        .email()
        .openapi({
          param: {
            description: 'The remote actor handle to remove from your followers',
            in: 'path',
            name: 'nameWithHost',
            required: true,
            schema: { format: 'email', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'follower not found' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1ServerFollowingRoute = createRoute({
  method: 'get',
  path: '/api/v1/server/following',
  tags: ['Instance Follows'],
  summary: 'List instances followed by the server',
  request: {
    query: z.object({
      state: FollowStateParamsSchema,
      actorType: ActorTypeParamsSchema,
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(FollowSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postApiV1ServerFollowingRoute = createRoute({
  method: 'post',
  path: '/api/v1/server/following',
  tags: ['Instance Follows'],
  summary: 'Follow a list of actors (PeerTube instance, channel or account)',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              handles: z
                .array(z.string())
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              hosts: z
                .array(z.hostname())
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    500: { description: 'cannot follow a non-HTTPS server' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const deleteApiV1ServerFollowingHostOrHandleRoute = createRoute({
  method: 'delete',
  path: '/api/v1/server/following/{hostOrHandle}',
  tags: ['Instance Follows'],
  summary: 'Unfollow an actor (PeerTube instance, channel or account)',
  request: {
    params: z.object({
      hostOrHandle: z
        .string()
        .openapi({
          param: {
            description: 'The hostOrHandle to unfollow',
            in: 'path',
            name: 'hostOrHandle',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'host or handle not found' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1ServerLogsRoute = createRoute({
  method: 'get',
  path: '/api/v1/server/logs',
  tags: ['Logs'],
  summary: 'Get instance logs',
  operationId: 'getInstanceLogs',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1ServerLogsClientRoute = createRoute({
  method: 'post',
  path: '/api/v1/server/logs/client',
  tags: ['Logs'],
  summary: 'Send client log',
  operationId: 'sendClientLog',
  request: { body: { content: { 'application/json': { schema: SendClientLogSchema } } } },
  responses: { 204: { description: 'successful operation' } },
})

export const getApiV1ServerRedundancyVideosRoute = createRoute({
  method: 'get',
  path: '/api/v1/server/redundancy/videos',
  tags: ['Video Mirroring'],
  summary: 'List videos being mirrored',
  operationId: 'getMirroredVideos',
  request: {
    query: z.object({
      target: z
        .enum(['my-videos', 'remote-videos'])
        .openapi({
          param: {
            description: 'direction of the mirror',
            in: 'query',
            name: 'target',
            required: true,
            schema: { enum: ['my-videos', 'remote-videos'], type: 'string' },
          },
        }),
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: VideoRedundanciesSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(VideoRedundancySchema) } },
    },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1ServerRedundancyVideosRoute = createRoute({
  method: 'post',
  path: '/api/v1/server/redundancy/videos',
  tags: ['Video Mirroring'],
  summary: 'Mirror a video',
  operationId: 'putMirroredVideo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ videoId: z.lazy(() => VideoSchema) })
            .openapi({ required: ['videoId'] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: 'cannot mirror a local video' },
    404: { description: 'video does not exist' },
    409: { description: 'video is already mirrored' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const deleteApiV1ServerRedundancyVideosRedundancyIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/server/redundancy/videos/{redundancyId}',
  tags: ['Video Mirroring'],
  summary: 'Delete a mirror done on a video',
  operationId: 'delMirroredVideo',
  request: {
    params: z.object({
      redundancyId: z
        .string()
        .openapi({
          param: {
            description: 'id of an existing redundancy on a video',
            in: 'path',
            name: 'redundancyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'video redundancy not found' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const putApiV1ServerRedundancyHostRoute = createRoute({
  method: 'put',
  path: '/api/v1/server/redundancy/{host}',
  tags: ['Instance Redundancy'],
  summary: 'Update a server redundancy policy',
  request: {
    params: z.object({
      host: z
        .hostname()
        .openapi({
          param: {
            description: 'server domain to mirror',
            in: 'path',
            name: 'host',
            required: true,
            schema: { format: 'hostname', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              redundancyAllowed: z
                .boolean()
                .openapi({ description: "allow mirroring of the host's local videos" }),
            })
            .openapi({ required: ['redundancyAllowed'] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'server is not already known' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1ServerStatsRoute = createRoute({
  method: 'get',
  path: '/api/v1/server/stats',
  tags: ['Stats'],
  summary: 'Get instance stats',
  description: 'Get instance public statistics. This endpoint is cached.',
  operationId: 'getInstanceStats',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ServerStatsSchema } },
    },
  },
})

export const getApiV1UsersRoute = createRoute({
  method: 'get',
  path: '/api/v1/users',
  tags: ['Users'],
  summary: 'List users',
  operationId: 'getUsers',
  request: {
    query: z.object({
      search: UsersSearchParamsSchema,
      blocked: UsersBlockedParamsSchema,
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: UsersSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(UserSchema) } },
    },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1UsersRoute = createRoute({
  method: 'post',
  path: '/api/v1/users',
  tags: ['Users'],
  summary: 'Create a user',
  operationId: 'addUser',
  request: {
    body: {
      description:
        'If the smtp server is configured, you can leave the password empty and an email will be sent\nasking the user to set it first.\n',
      content: { 'application/json': { schema: AddUserSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'user created',
      content: { 'application/json': { schema: AddUserResponseSchema } },
      links: {
        DelUser: { operationId: 'delUser', parameters: { id: '$response.body#/user/id' } },
        GetUser: { operationId: 'getUser', parameters: { id: '$response.body#/user/id' } },
        PutUser: { operationId: 'putUser', parameters: { id: '$response.body#/user/id' } },
      },
    },
    403: { description: 'insufficient authority to create an admin or moderator' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1UsersAskSendVerifyEmailRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/ask-send-verify-email',
  tags: ['Users', 'Register'],
  summary: 'Resend user verification link',
  operationId: 'resendEmailToVerifyUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ email: z.string().openapi({ description: 'User email' }) })
            .openapi({ required: ['email'] }),
        },
      },
    },
  },
  responses: { 204: { description: 'successful operation' } },
})

export const getApiV1UsersMeRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me',
  tags: ['My User'],
  summary: 'Get my user information',
  operationId: 'getUserInfo',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(UserSchema) } },
    },
  },
  security: [{ OAuth2: ['user'] }],
})

export const putApiV1UsersMeRoute = createRoute({
  method: 'put',
  path: '/api/v1/users/me',
  tags: ['My User'],
  summary: 'Update my user information',
  operationId: 'putUserInfo',
  request: {
    body: { content: { 'application/json': { schema: UpdateMeSchema } }, required: true },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: ['user'] }],
})

export const getApiV1UsersMeAbusesRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me/abuses',
  tags: ['Abuses', 'My User'],
  summary: 'List my abuses',
  operationId: 'getMyAbuses',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'only list the report with this id',
            in: 'query',
            name: 'id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      state: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          AbuseStateSetSchema.openapi({
            param: {
              in: 'query',
              name: 'state',
              schema: { $ref: '#/components/schemas/AbuseStateSet' },
              required: false,
            },
          }),
        )
        .exactOptional(),
      sort: AbusesSortParamsSchema,
      start: StartParamsSchema,
      count: CountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(AbuseSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1UsersMeAvatarRoute = createRoute({
  method: 'delete',
  path: '/api/v1/users/me/avatar',
  tags: ['My User'],
  summary: 'Delete my avatar',
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const postApiV1UsersMeAvatarPickRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/me/avatar/pick',
  tags: ['My User'],
  summary: 'Update my user avatar',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              avatarfile: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'The file to upload' }),
            })
            .openapi({ required: [] }),
          encoding: { avatarfile: { contentType: 'image/png, image/jpeg' } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ avatars: z.array(ActorImageSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    413: {
      description: 'image file too large',
      headers: z.object({
        'X-File-Maximum-Size': {
          description: 'Maximum file size for the avatar',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Maximum file size for the avatar',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1UsersMeHistoryVideosRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me/history/videos',
  tags: ['My History'],
  summary: 'List watched videos history',
  request: {
    query: z.object({
      start: StartParamsSchema,
      count: CountParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoListResponseSchema } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const postApiV1UsersMeHistoryVideosRemoveRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/me/history/videos/remove',
  tags: ['My History'],
  summary: 'Clear video history',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              beforeDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'history before this date will be deleted' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1UsersMeHistoryVideosVideoIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/users/me/history/videos/{videoId}',
  tags: ['My History'],
  summary: 'Delete history element',
  request: {
    params: z.object({
      videoId: z
        .lazy(() => VideoSchema)
        .openapi({
          param: {
            in: 'path',
            name: 'videoId',
            required: true,
            schema: { $ref: '#/components/schemas/Video/properties/id' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const putApiV1UsersMeNotificationSettingsRoute = createRoute({
  method: 'put',
  path: '/api/v1/users/me/notification-settings',
  tags: ['My Notifications'],
  summary: 'Update my notification settings',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              abuseAsModerator: NotificationSettingValueSchema.exactOptional(),
              autoInstanceFollowing: NotificationSettingValueSchema.exactOptional(),
              blacklistOnMyVideo: NotificationSettingValueSchema.exactOptional(),
              commentMention: NotificationSettingValueSchema.exactOptional(),
              myVideoImportFinished: NotificationSettingValueSchema.exactOptional(),
              myVideoPublished: NotificationSettingValueSchema.exactOptional(),
              newCommentOnMyVideo: NotificationSettingValueSchema.exactOptional(),
              newFollow: NotificationSettingValueSchema.exactOptional(),
              newInstanceFollower: NotificationSettingValueSchema.exactOptional(),
              newUserRegistration: NotificationSettingValueSchema.exactOptional(),
              newVideoFromSubscription: NotificationSettingValueSchema.exactOptional(),
              videoAutoBlacklistAsModerator: NotificationSettingValueSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const getApiV1UsersMeNotificationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me/notifications',
  tags: ['My Notifications'],
  summary: 'List my notifications',
  request: {
    query: z.object({
      unread: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'only list unread notifications',
            in: 'query',
            name: 'unread',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: NotificationListResponseSchema } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const postApiV1UsersMeNotificationsReadRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/me/notifications/read',
  tags: ['My Notifications'],
  summary: 'Mark notifications as read by their id',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ids: z
                .array(z.int())
                .openapi({ description: 'ids of the notifications to mark as read' }),
            })
            .openapi({ required: ['ids'] }),
        },
      },
    },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const postApiV1UsersMeNotificationsReadAllRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/me/notifications/read-all',
  tags: ['My Notifications'],
  summary: 'Mark all my notification as read',
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const getApiV1UsersMeSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me/subscriptions',
  tags: ['My Subscriptions'],
  summary: 'Get my user subscriptions',
  request: {
    query: z.object({ start: StartParamsSchema, count: CountParamsSchema, sort: SortParamsSchema }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoChannelListSchema } },
    },
  },
  security: [{ OAuth2: ['user'] }],
})

export const postApiV1UsersMeSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/me/subscriptions',
  tags: ['My Subscriptions'],
  summary: 'Add subscription to my user',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              uri: z.url().openapi({ description: 'uri of the video channels to subscribe to' }),
            })
            .openapi({ required: ['uri'] }),
          examples: {
            default: { value: { uri: '008a0e54-375d-49d0-8379-143202e24152@video.lqdn.fr' } },
          },
        },
      },
    },
  },
  responses: { 200: { description: 'successful operation' } },
  security: [{ OAuth2: ['user'] }],
})

export const getApiV1UsersMeSubscriptionsExistRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me/subscriptions/exist',
  tags: ['My Subscriptions'],
  summary: 'Get if subscriptions exist for my user',
  request: { query: z.object({ uris: SubscriptionsUrisParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
  security: [{ OAuth2: ['user'] }],
})

export const getApiV1UsersMeSubscriptionsVideosRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me/subscriptions/videos',
  tags: ['My Subscriptions', 'Videos'],
  summary: 'List videos of subscriptions of my user',
  request: {
    query: z.object({
      categoryOneOf: CategoryOneOfParamsSchema,
      isLive: IsLiveParamsSchema,
      tagsOneOf: TagsOneOfParamsSchema,
      tagsAllOf: TagsAllOfParamsSchema,
      licenceOneOf: LicenceOneOfParamsSchema,
      languageOneOf: LanguageOneOfParamsSchema,
      nsfw: NsfwParamsSchema,
      isLocal: IsLocalParamsSchema,
      include: IncludeParamsSchema,
      privacyOneOf: PrivacyOneOfParamsSchema,
      hasHLSFiles: HasHLSFilesParamsSchema,
      hasWebtorrentFiles: HasWebtorrentFilesParamsSchema,
      skipCount: SkipCountParamsSchema,
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: VideosSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoListResponseSchema } },
    },
  },
  security: [{ OAuth2: ['user'] }],
})

export const getApiV1UsersMeSubscriptionsSubscriptionHandleRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me/subscriptions/{subscriptionHandle}',
  tags: ['My Subscriptions'],
  summary: 'Get subscription of my user',
  request: { params: z.object({ subscriptionHandle: SubscriptionHandleParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoChannelSchema } },
    },
  },
  security: [{ OAuth2: ['user'] }],
})

export const deleteApiV1UsersMeSubscriptionsSubscriptionHandleRoute = createRoute({
  method: 'delete',
  path: '/api/v1/users/me/subscriptions/{subscriptionHandle}',
  tags: ['My Subscriptions'],
  summary: 'Delete subscription of my user',
  request: { params: z.object({ subscriptionHandle: SubscriptionHandleParamsSchema }) },
  responses: { 200: { description: 'successful operation' } },
  security: [{ OAuth2: ['user'] }],
})

export const getApiV1UsersMeVideoPlaylistsVideosExistRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me/video-playlists/videos-exist',
  tags: ['Video Playlists'],
  summary: 'Check video exists in my playlists',
  request: {
    query: z.object({
      videoIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.lazy(() => VideoSchema)),
        )
        .openapi({
          param: {
            description: 'The video ids to check',
            in: 'query',
            name: 'videoIds',
            required: true,
            schema: { items: { $ref: '#/components/schemas/Video/properties/id' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              videoId: z
                .array(
                  z
                    .object({
                      playlistElementId: z.int().exactOptional(),
                      playlistId: z.int().exactOptional(),
                      startTimestamp: z.int().exactOptional(),
                      stopTimestamp: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1UsersMeVideoQuotaUsedRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me/video-quota-used',
  tags: ['My User'],
  summary: 'Get my user used quota',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              videoQuotaUsed: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The user video quota used so far in bytes',
                  example: 16810141515,
                }),
              videoQuotaUsedDaily: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The user video quota used today in bytes',
                  example: 1681014151,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['user'] }],
})

export const getApiV1UsersMeVideosRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me/videos',
  tags: ['My User', 'Videos'],
  summary: 'Get videos of my user',
  request: {
    query: z.object({ start: StartParamsSchema, count: CountParamsSchema, sort: SortParamsSchema }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoListResponseSchema } },
    },
  },
  security: [{ OAuth2: ['user'] }],
})

export const getApiV1UsersMeVideosImportsRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me/videos/imports',
  tags: ['Videos', 'My User'],
  summary: 'Get video imports of my user',
  request: {
    query: z.object({
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      targetUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on import target URL',
            in: 'query',
            name: 'targetUrl',
            required: false,
            schema: { type: 'string' },
          },
        }),
      videoChannelSyncId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter on imports created by a specific channel synchronization',
            in: 'query',
            name: 'videoChannelSyncId',
            required: false,
            schema: { type: 'number' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search in video names',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoImportsListSchema } },
    },
  },
  security: [{ OAuth2: ['user'] }],
})

export const getApiV1UsersMeVideosVideoIdRatingRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me/videos/{videoId}/rating',
  tags: ['My User', 'Video Rates'],
  summary: 'Get rate of my user for a video',
  request: {
    params: z.object({
      videoId: z
        .lazy(() => VideoSchema)
        .openapi({
          param: {
            description: 'The video id',
            in: 'path',
            name: 'videoId',
            required: true,
            schema: { $ref: '#/components/schemas/Video/properties/id' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: GetMeVideoRatingSchema } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const postApiV1UsersRegisterRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/register',
  tags: ['Register'],
  summary: 'Register a user',
  description: 'Signup has to be enabled and signup approval is not required',
  operationId: 'registerUser',
  request: {
    body: { content: { 'application/json': { schema: RegisterUserSchema } }, required: true },
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: 'request error' },
    403: {
      description:
        'user registration is not enabled, user limit is reached, registration is not allowed for the ip, requires approval or blocked by a plugin',
    },
    409: { description: 'a user with this username, channel name or email already exists' },
  },
})

export const getApiV1UsersRegistrationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/registrations',
  tags: ['Register'],
  summary: 'List registrations',
  operationId: 'listRegistrations',
  request: {
    query: z.object({
      start: StartParamsSchema,
      count: CountParamsSchema,
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'search', required: false, schema: { type: 'string' } },
        }),
      sort: z
        .enum(['-createdAt', 'createdAt', 'state', '-state'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            required: false,
            schema: { enum: ['-createdAt', 'createdAt', 'state', '-state'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(UserRegistrationSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['admin', 'moderator'] }],
})

export const postApiV1UsersRegistrationsAskSendVerifyEmailRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/registrations/ask-send-verify-email',
  tags: ['Register'],
  summary: 'Resend verification link to registration email',
  operationId: 'resendEmailToVerifyRegistration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ email: z.string().openapi({ description: 'Registration email' }) })
            .openapi({ required: ['email'] }),
        },
      },
    },
  },
  responses: { 204: { description: 'successful operation' } },
})

export const postApiV1UsersRegistrationsRequestRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/registrations/request',
  tags: ['Register'],
  summary: 'Request registration',
  description: 'Signup has to be enabled and require approval on the instance',
  operationId: 'requestRegistration',
  request: { body: { content: { 'application/json': { schema: UserRegistrationRequestSchema } } } },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: UserRegistrationSchema } },
    },
    400: { description: 'request error or signup approval is not enabled on the instance' },
    403: {
      description:
        'user registration is not enabled, user limit is reached, registration is not allowed for the ip or blocked by a plugin',
    },
    409: {
      description:
        'a user or registration with this username, channel name or email already exists',
    },
  },
})

export const deleteApiV1UsersRegistrationsRegistrationIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/users/registrations/{registrationId}',
  tags: ['Register'],
  summary: 'Delete registration',
  description:
    'Delete the registration entry. It will not remove the user associated with this registration (if any)',
  operationId: 'deleteRegistration',
  request: { params: z.object({ registrationId: RegistrationIdParamsSchema }) },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: ['admin', 'moderator'] }],
})

export const postApiV1UsersRegistrationsRegistrationIdAcceptRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/registrations/{registrationId}/accept',
  tags: ['Register'],
  summary: 'Accept registration',
  operationId: 'acceptRegistration',
  request: {
    params: z.object({ registrationId: RegistrationIdParamsSchema }),
    body: { content: { 'application/json': { schema: UserRegistrationAcceptOrRejectSchema } } },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: ['admin', 'moderator'] }],
})

export const postApiV1UsersRegistrationsRegistrationIdRejectRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/registrations/{registrationId}/reject',
  tags: ['Register'],
  summary: 'Reject registration',
  operationId: 'rejectRegistration',
  request: {
    params: z.object({ registrationId: RegistrationIdParamsSchema }),
    body: { content: { 'application/json': { schema: UserRegistrationAcceptOrRejectSchema } } },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: ['admin', 'moderator'] }],
})

export const postApiV1UsersRegistrationsRegistrationIdVerifyEmailRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/registrations/{registrationId}/verify-email',
  tags: ['Register'],
  summary: 'Verify a registration email',
  description:
    'Following a user registration request, the user will receive an email asking to click a link\ncontaining a secret.\n',
  operationId: 'verifyRegistrationEmail',
  request: {
    params: z.object({ registrationId: RegistrationIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ verificationString: z.url() })
            .openapi({ required: ['verificationString'] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    403: { description: 'invalid verification string' },
    404: { description: 'registration not found' },
  },
})

export const postApiV1UsersRevokeTokenRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/revoke-token',
  tags: ['Session'],
  summary: 'Logout',
  description:
    'Revokes your access token and its associated refresh token, destroying your current session.',
  operationId: 'revokeOAuthToken',
  responses: { 200: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const postApiV1UsersTokenRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/token',
  tags: ['Session'],
  summary: 'Login',
  description:
    'With your [client id and secret](#operation/getOAuthClient), you can retrieve an access and refresh tokens.',
  operationId: 'getOAuthToken',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .xor([OAuthTokenPasswordSchema, OAuthTokenRefreshTokenSchema])
            .openapi({
              discriminator: {
                mapping: {
                  password: '#/components/schemas/OAuthToken-password',
                  refresh_token: '#/components/schemas/OAuthToken-refresh_token',
                },
                propertyName: 'grant_type',
              },
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'valid for 1 day',
                  example: '90286a0bdf0f7315d9d3fe8dabf9e1d2be9c97d0',
                }),
              expires_in: z.int().min(0).exactOptional().openapi({ example: 14399 }),
              refresh_token: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'valid for 2 weeks',
                  example: '2e0d675df9fc96d2e4ec8a3ebbbf45eca9137bb7',
                }),
              refresh_token_expires_in: z
                .int()
                .min(0)
                .exactOptional()
                .openapi({ example: 1209600 }),
              token_type: z.string().exactOptional().openapi({ example: 'Bearer' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'Disambiguate via `type`:\n- `invalid_client` for an unmatched `client_id`\n- `invalid_grant` for unmatched credentials\n',
    },
    401: {
      description:
        'Disambiguate via `type`:\n- default value for a regular authentication failure\n- `invalid_token` for an expired token\n',
    },
  },
})

export const getApiV1UsersIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/{id}',
  tags: ['Users'],
  summary: 'Get a user',
  operationId: 'getUser',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({
      withStats: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'include statistics about the user (only available as a moderator/admin)',
            in: 'query',
            name: 'withStats',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "As an admin/moderator, you can request a response augmented with statistics about the user's\nmoderation relations and videos usage, by using the `withStats` parameter.\n",
      content: { 'application/json': { schema: z.xor([UserSchema, UserWithStatsSchema]) } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const putApiV1UsersIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/users/{id}',
  tags: ['Users'],
  summary: 'Update a user',
  operationId: 'putUser',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: { content: { 'application/json': { schema: UpdateUserSchema } }, required: true },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1UsersIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/users/{id}',
  tags: ['Users'],
  summary: 'Delete a user',
  operationId: 'delUser',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1UsersIdTwoFactorConfirmRequestRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{id}/two-factor/confirm-request',
  tags: ['Users'],
  summary: 'Confirm two factor auth',
  description: 'Confirm a two factor authentication request',
  operationId: 'confirmTwoFactorRequest',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              otpToken: z.string().openapi({ description: 'OTP token generated by the app' }),
              requestToken: z
                .string()
                .openapi({ description: 'Token to identify the two factor request' }),
            })
            .openapi({ required: ['requestToken', 'otpToken'] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    403: { description: 'invalid request token or OTP token' },
    404: { description: 'user not found' },
  },
})

export const postApiV1UsersIdTwoFactorDisableRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{id}/two-factor/disable',
  tags: ['Users'],
  summary: 'Disable two factor auth',
  description: 'Disable two factor authentication of a user',
  operationId: 'disableTwoFactor',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currentPassword: z
                .string()
                .exactOptional()
                .openapi({ description: 'Password of the currently authenticated user' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    403: { description: 'invalid password' },
    404: { description: 'user not found' },
  },
})

export const postApiV1UsersIdTwoFactorRequestRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{id}/two-factor/request',
  tags: ['Users'],
  summary: 'Request two factor auth',
  description: 'Request two factor authentication for a user',
  operationId: 'requestTwoFactor',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currentPassword: z
                .string()
                .exactOptional()
                .openapi({ description: 'Password of the currently authenticated user' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.array(RequestTwoFactorResponseSchema) } },
    },
    403: { description: 'invalid password' },
    404: { description: 'user not found' },
  },
})

export const postApiV1UsersIdVerifyEmailRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{id}/verify-email',
  tags: ['Users', 'Register'],
  summary: 'Verify a user',
  description:
    'Following a user registration, the new user will receive an email asking to click a link\ncontaining a secret.\nThis endpoint can also be used to verify a new email set in the user account.\n',
  operationId: 'verifyUser',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ isPendingEmail: z.boolean().exactOptional(), verificationString: z.url() })
            .openapi({ required: ['verificationString'] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    403: { description: 'invalid verification string' },
    404: { description: 'user not found' },
  },
})

export const postApiV1VideoChannelSyncsRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-channel-syncs',
  tags: ['Channels Sync'],
  summary: 'Create a synchronization for a video channel',
  operationId: 'addVideoChannelSync',
  request: { body: { content: { 'application/json': { schema: VideoChannelSyncCreateSchema } } } },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ videoChannelSync: VideoChannelSyncSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1VideoChannelSyncsChannelSyncIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/video-channel-syncs/{channelSyncId}',
  tags: ['Channels Sync'],
  summary: 'Delete a video channel synchronization',
  operationId: 'delVideoChannelSync',
  request: { params: z.object({ channelSyncId: ChannelSyncIdParamsSchema }) },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideoChannelSyncsChannelSyncIdSyncRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-channel-syncs/{channelSyncId}/sync',
  tags: ['Channels Sync'],
  summary:
    'Triggers the channel synchronization job, fetching all the videos from the remote channel',
  operationId: 'triggerVideoChannelSync',
  request: { params: z.object({ channelSyncId: ChannelSyncIdParamsSchema }) },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideoChannelsRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-channels',
  tags: ['Video Channels'],
  summary: 'List video channels',
  operationId: 'getVideoChannels',
  request: {
    query: z.object({ start: StartParamsSchema, count: CountParamsSchema, sort: SortParamsSchema }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoChannelListSchema } },
    },
  },
})

export const postApiV1VideoChannelsRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-channels',
  tags: ['Video Channels'],
  summary: 'Create a video channel',
  operationId: 'addVideoChannel',
  request: { body: { content: { 'application/json': { schema: VideoChannelCreateSchema } } } },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              videoChannel: z
                .object({ id: IdSchema.exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideoChannelsChannelHandleRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-channels/{channelHandle}',
  tags: ['Video Channels'],
  summary: 'Get a video channel',
  operationId: 'getVideoChannel',
  request: { params: z.object({ channelHandle: ChannelHandleParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoChannelSchema } },
    },
  },
})

export const putApiV1VideoChannelsChannelHandleRoute = createRoute({
  method: 'put',
  path: '/api/v1/video-channels/{channelHandle}',
  tags: ['Video Channels'],
  summary: 'Update a video channel',
  operationId: 'putVideoChannel',
  request: {
    params: z.object({ channelHandle: ChannelHandleParamsSchema }),
    body: { content: { 'application/json': { schema: VideoChannelUpdateSchema } } },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1VideoChannelsChannelHandleRoute = createRoute({
  method: 'delete',
  path: '/api/v1/video-channels/{channelHandle}',
  tags: ['Video Channels'],
  summary: 'Delete a video channel',
  operationId: 'delVideoChannel',
  request: { params: z.object({ channelHandle: ChannelHandleParamsSchema }) },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1VideoChannelsChannelHandleAvatarRoute = createRoute({
  method: 'delete',
  path: '/api/v1/video-channels/{channelHandle}/avatar',
  tags: ['Video Channels'],
  summary: 'Delete channel avatar',
  request: { params: z.object({ channelHandle: ChannelHandleParamsSchema }) },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideoChannelsChannelHandleAvatarPickRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-channels/{channelHandle}/avatar/pick',
  tags: ['Video Channels'],
  summary: 'Update channel avatar',
  request: {
    params: z.object({ channelHandle: ChannelHandleParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              avatarfile: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'The file to upload.' }),
            })
            .openapi({ required: [] }),
          encoding: { avatarfile: { contentType: 'image/png, image/jpeg' } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ avatars: z.array(ActorImageSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    413: {
      description: 'image file too large',
      headers: z.object({
        'X-File-Maximum-Size': {
          description: 'Maximum file size for the avatar',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Maximum file size for the avatar',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1VideoChannelsChannelHandleBannerRoute = createRoute({
  method: 'delete',
  path: '/api/v1/video-channels/{channelHandle}/banner',
  tags: ['Video Channels'],
  summary: 'Delete channel banner',
  request: { params: z.object({ channelHandle: ChannelHandleParamsSchema }) },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideoChannelsChannelHandleBannerPickRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-channels/{channelHandle}/banner/pick',
  tags: ['Video Channels'],
  summary: 'Update channel banner',
  request: {
    params: z.object({ channelHandle: ChannelHandleParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              bannerfile: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'The file to upload.' }),
            })
            .openapi({ required: [] }),
          encoding: { bannerfile: { contentType: 'image/png, image/jpeg' } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ banners: z.array(ActorImageSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    413: {
      description: 'image file too large',
      headers: z.object({
        'X-File-Maximum-Size': {
          description: 'Maximum file size for the banner',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Maximum file size for the banner',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideoChannelsChannelHandleFollowersRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-channels/{channelHandle}/followers',
  tags: ['Video Channels'],
  summary: 'List followers of a video channel',
  operationId: 'getVideoChannelFollowers',
  request: {
    params: z.object({ channelHandle: ChannelHandleParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: FollowersSortParamsSchema,
      search: SearchParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(FollowSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideoChannelsChannelHandleImportVideosRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-channels/{channelHandle}/import-videos',
  tags: ['Video Channels', 'Channels Sync'],
  summary: 'Import videos in channel',
  description: 'Import a remote channel/playlist videos into a channel',
  request: {
    params: z.object({ channelHandle: ChannelHandleParamsSchema }),
    body: { content: { 'application/json': { schema: ImportVideosInChannelCreateSchema } } },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideoChannelsChannelHandleVideoPlaylistsRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-channels/{channelHandle}/video-playlists',
  tags: ['Video Playlists', 'Video Channels'],
  summary: 'List playlists of a channel',
  request: {
    params: z.object({ channelHandle: ChannelHandleParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      playlistType: VideoPlaylistTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(VideoPlaylistSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getApiV1VideoChannelsChannelHandleVideosRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-channels/{channelHandle}/videos',
  tags: ['Video', 'Video Channels'],
  summary: 'List videos of a video channel',
  operationId: 'getVideoChannelVideos',
  request: {
    params: z.object({ channelHandle: ChannelHandleParamsSchema }),
    query: z.object({
      categoryOneOf: CategoryOneOfParamsSchema,
      isLive: IsLiveParamsSchema,
      tagsOneOf: TagsOneOfParamsSchema,
      tagsAllOf: TagsAllOfParamsSchema,
      licenceOneOf: LicenceOneOfParamsSchema,
      languageOneOf: LanguageOneOfParamsSchema,
      nsfw: NsfwParamsSchema,
      isLocal: IsLocalParamsSchema,
      include: IncludeParamsSchema,
      privacyOneOf: PrivacyOneOfParamsSchema,
      hasHLSFiles: HasHLSFilesParamsSchema,
      hasWebtorrentFiles: HasWebtorrentFilesParamsSchema,
      skipCount: SkipCountParamsSchema,
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: VideosSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoListResponseSchema } },
    },
  },
})

export const getApiV1VideoPlaylistsRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-playlists',
  tags: ['Video Playlists'],
  summary: 'List video playlists',
  operationId: 'getPlaylists',
  request: {
    query: z.object({
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      playlistType: VideoPlaylistTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(VideoPlaylistSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postApiV1VideoPlaylistsRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-playlists',
  tags: ['Video Playlists'],
  summary: 'Create a video playlist',
  description: 'If the video playlist is set as public, `videoChannelId` is mandatory.',
  operationId: 'addPlaylist',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              description: z
                .string()
                .min(3)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'Video playlist description' }),
              displayName: z
                .string()
                .min(1)
                .max(120)
                .openapi({ description: 'Video playlist display name' }),
              privacy: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  VideoPlaylistPrivacySetSchema,
                )
                .exactOptional(),
              thumbnailfile: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Video playlist thumbnail file',
                }),
              videoChannelId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  IdSchema,
                )
                .exactOptional()
                .openapi({ description: 'Video channel in which the playlist will be published' }),
            })
            .openapi({ required: ['displayName'] }),
          encoding: { thumbnailfile: { contentType: 'image/jpeg' } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              videoPlaylist: z
                .object({
                  id: IdSchema.exactOptional(),
                  shortUUID: z.lazy(() => VideoPlaylistSchema).exactOptional(),
                  uuid: UUIDv4Schema.exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideoPlaylistsPrivaciesRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-playlists/privacies',
  tags: ['Video Playlists'],
  summary: 'List available playlist privacy policies',
  operationId: 'getPlaylistPrivacyPolicies',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z.array(z.string()),
          examples: {
            nightly: { externalValue: 'https://peertube2.cpy.re/api/v1/video-playlists/privacies' },
          },
        },
      },
    },
  },
})

export const getApiV1VideoPlaylistsPlaylistIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-playlists/{playlistId}',
  tags: ['Video Playlists'],
  summary: 'Get a video playlist',
  request: { params: z.object({ playlistId: PlaylistIdParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoPlaylistSchema } },
    },
  },
})

export const putApiV1VideoPlaylistsPlaylistIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/video-playlists/{playlistId}',
  tags: ['Video Playlists'],
  summary: 'Update a video playlist',
  description: 'If the video playlist is set as public, the playlist must have a assigned channel.',
  request: {
    params: z.object({ playlistId: PlaylistIdParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Video playlist description' }),
              displayName: z
                .string()
                .min(1)
                .max(120)
                .exactOptional()
                .openapi({ description: 'Video playlist display name' }),
              privacy: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  VideoPlaylistPrivacySetSchema,
                )
                .exactOptional(),
              thumbnailfile: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Video playlist thumbnail file',
                }),
              videoChannelId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  IdSchema,
                )
                .exactOptional()
                .openapi({ description: 'Video channel in which the playlist will be published' }),
            })
            .openapi({ required: [] }),
          encoding: { thumbnailfile: { contentType: 'image/jpeg' } },
        },
      },
    },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1VideoPlaylistsPlaylistIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/video-playlists/{playlistId}',
  tags: ['Video Playlists'],
  summary: 'Delete a video playlist',
  request: { params: z.object({ playlistId: PlaylistIdParamsSchema }) },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideoPlaylistsPlaylistIdVideosRoute = createRoute({
  method: 'get',
  path: '/api/v1/video-playlists/{playlistId}/videos',
  tags: ['Videos', 'Video Playlists'],
  summary: 'List videos of a playlist',
  operationId: 'getVideoPlaylistVideos',
  request: {
    params: z.object({ playlistId: PlaylistIdParamsSchema }),
    query: z.object({ start: StartParamsSchema, count: CountParamsSchema }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoListResponseSchema } },
    },
  },
})

export const postApiV1VideoPlaylistsPlaylistIdVideosRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-playlists/{playlistId}/videos',
  tags: ['Videos', 'Video Playlists'],
  summary: 'Add a video in a playlist',
  operationId: 'addVideoPlaylistVideo',
  request: {
    params: z.object({ playlistId: PlaylistIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              startTimestamp: z
                .int()
                .exactOptional()
                .openapi({ description: 'Start the video at this specific timestamp' }),
              stopTimestamp: z
                .int()
                .exactOptional()
                .openapi({ description: 'Stop the video at this specific timestamp' }),
              videoId: z
                .xor([z.lazy(() => VideoSchema), z.lazy(() => VideoSchema)])
                .openapi({ description: 'Video to add in the playlist' }),
            })
            .openapi({ required: ['videoId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              videoPlaylistElement: z
                .object({ id: z.int().exactOptional().openapi({ example: 2 }) })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideoPlaylistsPlaylistIdVideosReorderRoute = createRoute({
  method: 'post',
  path: '/api/v1/video-playlists/{playlistId}/videos/reorder',
  tags: ['Video Playlists'],
  summary: 'Reorder a playlist',
  operationId: 'reorderVideoPlaylist',
  request: {
    params: z.object({ playlistId: PlaylistIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              insertAfterPosition: z
                .int()
                .min(0)
                .openapi({
                  description:
                    'New position for the block to reorder, to add the block before the first element',
                }),
              reorderLength: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'How many element from `startPosition` to reorder' }),
              startPosition: z
                .int()
                .min(1)
                .openapi({ description: 'Start position of the element to reorder' }),
            })
            .openapi({ required: ['startPosition', 'insertAfterPosition'] }),
        },
      },
    },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/video-playlists/{playlistId}/videos/{playlistElementId}',
  tags: ['Video Playlists'],
  summary: 'Update a playlist element',
  operationId: 'putVideoPlaylistVideo',
  request: {
    params: z.object({
      playlistId: PlaylistIdParamsSchema,
      playlistElementId: PlaylistElementIdParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              startTimestamp: z
                .int()
                .exactOptional()
                .openapi({ description: 'Start the video at this specific timestamp' }),
              stopTimestamp: z
                .int()
                .exactOptional()
                .openapi({ description: 'Stop the video at this specific timestamp' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/video-playlists/{playlistId}/videos/{playlistElementId}',
  tags: ['Video Playlists'],
  summary: 'Delete an element from a playlist',
  operationId: 'delVideoPlaylistVideo',
  request: {
    params: z.object({
      playlistId: PlaylistIdParamsSchema,
      playlistElementId: PlaylistElementIdParamsSchema,
    }),
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideosRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos',
  tags: ['Video'],
  summary: 'List videos',
  operationId: 'getVideos',
  request: {
    query: z.object({
      categoryOneOf: CategoryOneOfParamsSchema,
      isLive: IsLiveParamsSchema,
      tagsOneOf: TagsOneOfParamsSchema,
      tagsAllOf: TagsAllOfParamsSchema,
      licenceOneOf: LicenceOneOfParamsSchema,
      languageOneOf: LanguageOneOfParamsSchema,
      nsfw: NsfwParamsSchema,
      isLocal: IsLocalParamsSchema,
      include: IncludeParamsSchema,
      privacyOneOf: PrivacyOneOfParamsSchema,
      hasHLSFiles: HasHLSFilesParamsSchema,
      hasWebtorrentFiles: HasWebtorrentFilesParamsSchema,
      skipCount: SkipCountParamsSchema,
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: VideosSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoListResponseSchema } },
    },
  },
})

export const getApiV1VideosBlacklistRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/blacklist',
  tags: ['Video Blocks'],
  summary: 'List video blocks',
  operationId: 'getVideoBlocks',
  request: {
    query: z.object({
      type: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(2)]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'list only blocks that match this type:\n- `1`: manual block\n- `2`: automatic block that needs review\n',
            in: 'query',
            name: 'type',
            schema: { enum: [1, 2], type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'plain search that will match with video titles, and more',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: BlacklistsSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(VideoBlacklistSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: ['admin', 'moderator'] }],
})

export const getApiV1VideosCategoriesRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/categories',
  tags: ['Video'],
  summary: 'List available video categories',
  operationId: 'getCategories',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z.array(z.string()),
          examples: {
            nightly: { externalValue: 'https://peertube2.cpy.re/api/v1/videos/categories' },
          },
        },
      },
    },
  },
})

export const postApiV1VideosImportsRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/imports',
  tags: ['Video Imports', 'Video Upload'],
  summary: 'Import a video',
  description:
    'Import a torrent or magnetURI or HTTP resource (if enabled by the instance administrator)',
  operationId: 'importVideo',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .xor([
              z
                .object({ targetUrl: z.lazy(() => VideoImportSchema) })
                .openapi({ required: ['targetUrl'] }),
              z
                .object({ magnetUri: z.lazy(() => VideoImportSchema) })
                .openapi({ required: ['magnetUri'] }),
              z
                .object({ torrentfile: z.lazy(() => VideoImportSchema) })
                .openapi({ required: ['torrentfile'] }),
            ])
            .and(
              z
                .object({
                  category: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      VideoCategorySetSchema,
                    )
                    .exactOptional(),
                  channelId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      z.int().min(1),
                    )
                    .openapi({
                      description: 'Channel id that will contain this video',
                      example: 3,
                    }),
                  commentsEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({ description: 'Enable or disable comments for this video' }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Video description',
                      example:
                        '**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n',
                    }),
                  downloadEnabled: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({ description: 'Enable or disable downloading for this video' }),
                  language: VideoLanguageSetSchema.exactOptional(),
                  licence: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      VideoLicenceSetSchema,
                    )
                    .exactOptional(),
                  name: z
                    .string()
                    .min(3)
                    .max(120)
                    .openapi({ description: 'Video name', example: 'What is PeerTube?' }),
                  nsfw: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'Whether or not this video contains sensitive content',
                    }),
                  originallyPublishedAt: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'Date when the content was originally published' }),
                  previewfile: z
                    .file()
                    .exactOptional()
                    .openapi({
                      type: 'string',
                      format: 'binary',
                      description: 'Video preview file',
                    }),
                  privacy: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      VideoPrivacySetSchema,
                    )
                    .exactOptional(),
                  scheduleUpdate: z
                    .object({
                      privacy: z
                        .preprocess(
                          (val) =>
                            typeof val === 'string' &&
                            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                              ? Number(val)
                              : val,
                          VideoPrivacySetSchema,
                        )
                        .exactOptional(),
                      updateAt: z.iso.date().openapi({ description: 'When to update the video' }),
                    })
                    .exactOptional()
                    .openapi({ required: ['updateAt'] }),
                  support: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'A text tell the audience how to support the video creator',
                      example: 'Please support our work on https://soutenir.framasoft.org/en/ <3',
                    }),
                  tags: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z
                        .array(z.string().min(2).max(30))
                        .min(1)
                        .max(5)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'Video tags (maximum 5 tags each between 2 and 30 characters)',
                      example: ['framasoft', 'peertube'],
                    }),
                  thumbnailfile: z
                    .file()
                    .exactOptional()
                    .openapi({
                      type: 'string',
                      format: 'binary',
                      description: 'Video thumbnail file',
                    }),
                  waitTranscoding: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'Whether or not we wait transcoding before publish the video',
                    }),
                })
                .openapi({ required: ['channelId', 'name'] }),
            )
            .openapi({ required: ['channelId', 'name'] }),
          encoding: {
            previewfile: { contentType: 'image/jpeg' },
            thumbnailfile: { contentType: 'image/jpeg' },
            torrentfile: { contentType: 'application/x-bittorrent' },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoUploadResponseSchema } },
    },
    400: { description: '`magnetUri` or `targetUrl` or a torrent file missing' },
    403: { description: "video didn't pass pre-import filter" },
    409: { description: 'HTTP or Torrent/magnetURI import not enabled' },
  },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1VideosImportsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/videos/imports/{id}',
  tags: ['Video Imports'],
  summary: 'Delete video import',
  description: 'Delete ended video import',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideosImportsIdCancelRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/imports/{id}/cancel',
  tags: ['Video Imports'],
  summary: 'Cancel video import',
  description: 'Cancel a pending video import',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideosLanguagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/languages',
  tags: ['Video'],
  summary: 'List available video languages',
  operationId: 'getLanguages',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z.array(z.string()),
          examples: {
            nightly: { externalValue: 'https://peertube2.cpy.re/api/v1/videos/languages' },
          },
        },
      },
    },
  },
})

export const getApiV1VideosLicencesRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/licences',
  tags: ['Video'],
  summary: 'List available video licences',
  operationId: 'getLicences',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z.array(z.string()),
          examples: {
            nightly: { externalValue: 'https://peertube2.cpy.re/api/v1/videos/licences' },
          },
        },
      },
    },
  },
})

export const postApiV1VideosLiveRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/live',
  tags: ['Live Videos', 'Video'],
  summary: 'Create a live',
  operationId: 'addLive',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              category: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  VideoCategorySetSchema,
                )
                .exactOptional(),
              channelId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .openapi({ description: 'Channel id that will contain this live video' }),
              commentsEnabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Enable or disable comments for this live video/replay' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Live video/replay description' }),
              downloadEnabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Enable or disable downloading for the replay of this live video',
                }),
              language: VideoLanguageSetSchema.exactOptional(),
              latencyMode: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  LiveVideoLatencyModeSchema,
                )
                .exactOptional()
                .openapi({
                  description: 'User can select live latency mode if enabled by the instance',
                }),
              licence: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  VideoLicenceSetSchema,
                )
                .exactOptional(),
              name: z.string().min(3).max(120).openapi({ description: 'Live video/replay name' }),
              nsfw: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether or not this live video/replay contains sensitive content',
                }),
              permanentLive: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'User can stream multiple times in a permanent live' }),
              previewfile: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Live video/replay preview file',
                }),
              privacy: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  VideoPrivacySetSchema,
                )
                .exactOptional(),
              saveReplay: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              support: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A text tell the audience how to support the creator',
                  example: 'Please support our work on https://soutenir.framasoft.org/en/ <3',
                }),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().min(2).max(30)).min(1).max(5),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Live video/replay tags (maximum 5 tags each between 2 and 30 characters)',
                }),
              thumbnailfile: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'Live video/replay thumbnail file',
                }),
            })
            .openapi({ required: ['channelId', 'name'] }),
          encoding: {
            previewfile: { contentType: 'image/jpeg' },
            thumbnailfile: { contentType: 'image/jpeg' },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoUploadResponseSchema } },
    },
    400: {
      description:
        'Disambiguate via `type`:\n- default type for a validation error\n- `live_conflicting_permanent_and_save_replay` for conflicting parameters set\n',
    },
    403: {
      description:
        'Disambiguate via `type`:\n- `live_not_enabled` for a disabled live feature\n- `live_not_allowing_replay` for a disabled replay feature\n- `max_instance_lives_limit_reached` for the absolute concurrent live limit\n- `max_user_lives_limit_reached` for the user concurrent live limit\n',
    },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideosLiveIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/live/{id}',
  tags: ['Live Videos', 'Video'],
  summary: 'Get information about a live',
  operationId: 'getLiveId',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: LiveVideoResponseSchema } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const putApiV1VideosLiveIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/videos/live/{id}',
  tags: ['Live Videos', 'Video'],
  summary: 'Update information about a live',
  operationId: 'updateLiveId',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema }),
    body: { content: { 'application/json': { schema: LiveVideoUpdateSchema } } },
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: 'bad parameters or trying to update a live that has already started' },
    403: {
      description:
        'trying to save replay of the live but saving replay is not enabled on the instance',
    },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideosLiveIdSessionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/live/{id}/sessions',
  tags: ['Live Videos'],
  summary: 'List live sessions',
  description: 'List all sessions created in a particular live',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(LiveVideoSessionResponseSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideosOwnershipRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/ownership',
  tags: ['Video Ownership Change'],
  summary: 'List video ownership changes',
  responses: { 200: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideosOwnershipIdAcceptRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/ownership/{id}/accept',
  tags: ['Video Ownership Change'],
  summary: 'Accept ownership change request',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    204: { description: 'successful operation' },
    403: { description: 'cannot terminate an ownership change of another user' },
    404: { description: 'video ownership change not found' },
  },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideosOwnershipIdRefuseRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/ownership/{id}/refuse',
  tags: ['Video Ownership Change'],
  summary: 'Refuse ownership change request',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    204: { description: 'successful operation' },
    403: { description: 'cannot terminate an ownership change of another user' },
    404: { description: 'video ownership change not found' },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideosPrivaciesRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/privacies',
  tags: ['Video'],
  summary: 'List available video privacy policies',
  operationId: 'getPrivacyPolicies',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z.array(z.string()),
          examples: {
            nightly: { externalValue: 'https://peertube2.cpy.re/api/v1/videos/privacies' },
          },
        },
      },
    },
  },
})

export const postApiV1VideosUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/upload',
  tags: ['Video', 'Video Upload'],
  summary: 'Upload a video',
  description: 'Uses a single request to upload a video.',
  operationId: 'uploadLegacy',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              category: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  VideoCategorySetSchema,
                )
                .exactOptional(),
              channelId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(1),
                )
                .openapi({ description: 'Channel id that will contain this video', example: 3 }),
              commentsEnabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Enable or disable comments for this video' }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Video description',
                  example:
                    '**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n',
                }),
              downloadEnabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Enable or disable downloading for this video' }),
              language: VideoLanguageSetSchema.exactOptional(),
              licence: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  VideoLicenceSetSchema,
                )
                .exactOptional(),
              name: z
                .string()
                .min(3)
                .max(120)
                .openapi({ description: 'Video name', example: 'What is PeerTube?' }),
              nsfw: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether or not this video contains sensitive content' }),
              originallyPublishedAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Date when the content was originally published' }),
              previewfile: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'Video preview file' }),
              privacy: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  VideoPrivacySetSchema,
                )
                .exactOptional(),
              scheduleUpdate: z
                .object({
                  privacy: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      VideoPrivacySetSchema,
                    )
                    .exactOptional(),
                  updateAt: z.iso.date().openapi({ description: 'When to update the video' }),
                })
                .exactOptional()
                .openapi({ required: ['updateAt'] }),
              support: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A text tell the audience how to support the video creator',
                  example: 'Please support our work on https://soutenir.framasoft.org/en/ <3',
                }),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z
                    .array(z.string().min(2).max(30))
                    .min(1)
                    .max(5)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                )
                .exactOptional()
                .openapi({
                  description: 'Video tags (maximum 5 tags each between 2 and 30 characters)',
                  example: ['framasoft', 'peertube'],
                }),
              thumbnailfile: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'Video thumbnail file' }),
              waitTranscoding: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether or not we wait transcoding before publish the video',
                }),
            })
            .openapi({ required: ['channelId', 'name'] })
            .and(
              z
                .object({
                  videofile: z
                    .file()
                    .openapi({ type: 'string', format: 'binary', description: 'Video file' }),
                })
                .openapi({ required: ['videofile'] }),
            ),
          encoding: {
            previewfile: { contentType: 'image/jpeg' },
            thumbnailfile: { contentType: 'image/jpeg' },
            videofile: {
              contentType:
                'video/mp4, video/webm, video/ogg, video/avi, video/quicktime, video/x-msvideo, video/x-flv, video/x-matroska, application/octet-stream',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoUploadResponseSchema } },
    },
    403: { description: "video didn't pass upload filter" },
    408: { description: 'upload has timed out' },
    413: {
      description:
        "If the response has no body, it means the reverse-proxy didn't let it through. Otherwise disambiguate via `type`:\n- `quota_reached` for quota limits whether daily or global\n",
      headers: z.object({
        'X-File-Maximum-Size': {
          description: 'Maximum file size for the video',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Maximum file size for the video',
              param: { required: false },
            }),
        },
      }),
    },
    415: { description: 'video type unsupported' },
    422: { description: 'video unreadable' },
  },
  security: [{ OAuth2: [] }],
})

export const putApiV1VideosUploadResumableRoute = createRoute({
  method: 'put',
  path: '/api/v1/videos/upload-resumable',
  tags: ['Video', 'Video Upload'],
  summary: 'Send chunk for the resumable upload of a video',
  description:
    'Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to continue, pause or resume the upload of a video',
  operationId: 'uploadResumable',
  request: {
    query: z.object({
      upload_id: z
        .string()
        .openapi({
          param: {
            description:
              "Created session id to proceed with. If you didn't send chunks in the last hour, it is\nnot valid anymore and you need to initialize a new upload.\n",
            in: 'query',
            name: 'upload_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Range': z
        .string()
        .openapi({
          param: {
            description:
              'Specifies the bytes in the file that the request is uploading.\n\nFor example, a value of `bytes 0-262143/1000000` shows that the request is sending the first\n262144 bytes (256 x 1024) in a 2,469,036 byte file.\n',
            in: 'header',
            name: 'Content-Range',
            required: true,
            schema: { example: 'bytes 0-262143/2469036', type: 'string' },
          },
          example: 'bytes 0-262143/2469036',
        }),
      'Content-Length': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description:
              "Size of the chunk that the request is sending.\n\nRemember that larger chunks are more efficient. PeerTube's web client uses chunks varying from\n1048576 bytes (~1MB) and increases or reduces size depending on connection health.\n",
            in: 'header',
            name: 'Content-Length',
            required: true,
            schema: { example: 262144, type: 'number' },
          },
          example: 262144,
        }),
    }),
    body: {
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'last chunk received',
      content: { 'application/json': { schema: VideoUploadResponseSchema } },
      headers: z.object({
        'Content-Length': {
          schema: z
            .number()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    308: {
      description: 'resume incomplete',
      headers: z.object({
        'Content-Length': {
          schema: z
            .number()
            .exactOptional()
            .openapi({ param: { required: false }, example: 0 }),
        },
        Range: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'bytes=0-262143' }),
        },
      }),
    },
    403: { description: "video didn't pass upload filter" },
    404: { description: 'upload not found' },
    409: { description: "chunk doesn't match range" },
    422: { description: 'video unreadable' },
    429: { description: 'too many concurrent requests' },
    503: {
      description: 'upload is already being processed',
      headers: z.object({
        'Retry-After': {
          schema: z
            .number()
            .exactOptional()
            .openapi({ param: { required: false }, example: 300 }),
        },
      }),
    },
  },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideosUploadResumableRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/upload-resumable',
  tags: ['Video', 'Video Upload'],
  summary: 'Initialize the resumable upload of a video',
  description:
    'Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to initialize the upload of a video',
  operationId: 'uploadResumableInit',
  request: {
    headers: z.object({
      'X-Upload-Content-Length': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description:
              'Number of bytes that will be uploaded in subsequent requests. Set this value to the size of the file you are uploading.',
            in: 'header',
            name: 'X-Upload-Content-Length',
            required: true,
            schema: { example: 2469036, type: 'number' },
          },
          example: 2469036,
        }),
      'X-Upload-Content-Type': z
        .string()
        .openapi({
          param: {
            description:
              'MIME type of the file that you are uploading. Depending on your instance settings, acceptable values might vary.',
            in: 'header',
            name: 'X-Upload-Content-Type',
            required: true,
            schema: { example: 'video/mp4', format: 'mimetype', type: 'string' },
          },
          example: 'video/mp4',
        }),
    }),
    body: { content: { 'application/json': { schema: VideoUploadRequestResumableSchema } } },
  },
  responses: {
    200: {
      description:
        'file already exists, send a [`resume`](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) request instead',
    },
    201: {
      description: 'created',
      headers: z.object({
        'Content-Length': {
          schema: z
            .number()
            .exactOptional()
            .openapi({ param: { required: false }, example: 0 }),
        },
        Location: {
          schema: z
            .url()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: '/api/v1/videos/upload-resumable?upload_id=471e97554f21dec3b8bb5d4602939c51',
            }),
        },
      }),
    },
    413: {
      description:
        'Disambiguate via `type`:\n- `max_file_size_reached` for the absolute file size limit\n- `quota_reached` for quota limits whether daily or global\n',
    },
    415: { description: 'video type unsupported' },
  },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1VideosUploadResumableRoute = createRoute({
  method: 'delete',
  path: '/api/v1/videos/upload-resumable',
  tags: ['Video', 'Video Upload'],
  summary: 'Cancel the resumable upload of a video, deleting any data uploaded so far',
  description:
    'Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to cancel the upload of a video',
  operationId: 'uploadResumableCancel',
  request: {
    query: z.object({
      upload_id: z
        .string()
        .openapi({
          param: {
            description:
              "Created session id to proceed with. If you didn't send chunks in the last 12 hours, it is\nnot valid anymore and the upload session has already been deleted with its data ;-)\n",
            in: 'query',
            name: 'upload_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Length': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Length',
            required: true,
            schema: { example: 0, type: 'number' },
          },
          example: 0,
        }),
    }),
  },
  responses: {
    204: {
      description: 'upload cancelled',
      headers: z.object({
        'Content-Length': {
          schema: z
            .number()
            .exactOptional()
            .openapi({ param: { required: false }, example: 0 }),
        },
      }),
    },
    404: { description: 'upload not found' },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideosIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/{id}',
  tags: ['Video'],
  summary: 'Get a video',
  operationId: 'getVideo',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoDetailsSchema } },
    },
  },
})

export const putApiV1VideosIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/videos/{id}',
  tags: ['Video'],
  summary: 'Update a video',
  operationId: 'putVideo',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              category: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  VideoCategorySetSchema,
                )
                .exactOptional(),
              commentsEnabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Enable or disable comments for this video' }),
              description: z.string().exactOptional().openapi({ description: 'Video description' }),
              downloadEnabled: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Enable or disable downloading for this video' }),
              language: VideoLanguageSetSchema.exactOptional(),
              licence: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  VideoLicenceSetSchema,
                )
                .exactOptional(),
              name: z
                .string()
                .min(3)
                .max(120)
                .exactOptional()
                .openapi({ description: 'Video name' }),
              nsfw: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Whether or not this video contains sensitive content' }),
              originallyPublishedAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'Date when the content was originally published' }),
              previewfile: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'Video preview file' }),
              privacy: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  VideoPrivacySetSchema,
                )
                .exactOptional(),
              scheduleUpdate: z
                .object({
                  privacy: z
                    .preprocess(
                      (val) =>
                        typeof val === 'string' &&
                        /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                        (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                          ? Number(val)
                          : val,
                      VideoPrivacySetSchema,
                    )
                    .exactOptional(),
                  updateAt: z.iso.date().openapi({ description: 'When to update the video' }),
                })
                .exactOptional()
                .openapi({ required: ['updateAt'] }),
              support: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A text tell the audience how to support the video creator',
                  example: 'Please support our work on https://soutenir.framasoft.org/en/ <3',
                }),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().min(2).max(30)).min(1).max(5),
                )
                .exactOptional()
                .openapi({
                  description: 'Video tags (maximum 5 tags each between 2 and 30 characters)',
                }),
              thumbnailfile: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'Video thumbnail file' }),
              waitTranscoding: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Whether or not we wait transcoding before publish the video',
                }),
            })
            .openapi({ required: [] }),
          encoding: {
            previewfile: { contentType: 'image/jpeg' },
            thumbnailfile: { contentType: 'image/jpeg' },
          },
        },
      },
    },
  },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1VideosIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/videos/{id}',
  tags: ['Video'],
  summary: 'Delete a video',
  operationId: 'delVideo',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideosIdBlacklistRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/{id}/blacklist',
  tags: ['Video Blocks'],
  summary: 'Block a video',
  operationId: 'addVideoBlock',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: { 204: { description: 'successful operation' } },
  security: [{ OAuth2: ['admin', 'moderator'] }],
})

export const deleteApiV1VideosIdBlacklistRoute = createRoute({
  method: 'delete',
  path: '/api/v1/videos/{id}/blacklist',
  tags: ['Video Blocks'],
  summary: 'Unblock a video by its id',
  operationId: 'delVideoBlock',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'block not found' },
  },
  security: [{ OAuth2: ['admin', 'moderator'] }],
})

export const getApiV1VideosIdCaptionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/{id}/captions',
  tags: ['Video Captions'],
  summary: 'List captions of a video',
  operationId: 'getVideoCaptions',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(VideoCaptionSchema).exactOptional(),
              total: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const putApiV1VideosIdCaptionsCaptionLanguageRoute = createRoute({
  method: 'put',
  path: '/api/v1/videos/{id}/captions/{captionLanguage}',
  tags: ['Video Captions'],
  summary: 'Add or replace a video caption',
  operationId: 'addVideoCaption',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema, captionLanguage: CaptionLanguageParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              captionfile: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'The file to upload.' }),
            })
            .openapi({ required: [] }),
          encoding: { captionfile: { contentType: 'text/vtt, application/x-subrip, text/plain' } },
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'video or language not found' },
  },
  security: [{ OAuth2: ['user'] }],
})

export const deleteApiV1VideosIdCaptionsCaptionLanguageRoute = createRoute({
  method: 'delete',
  path: '/api/v1/videos/{id}/captions/{captionLanguage}',
  tags: ['Video Captions'],
  summary: 'Delete a video caption',
  operationId: 'delVideoCaption',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema, captionLanguage: CaptionLanguageParamsSchema }),
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'video or language or caption for that language not found' },
  },
  security: [{ OAuth2: ['user'] }],
})

export const getApiV1VideosIdCommentThreadsRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/{id}/comment-threads',
  tags: ['Video Comments'],
  summary: 'List threads of a video',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      count: CountParamsSchema,
      sort: CommentsSortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: CommentThreadResponseSchema } },
    },
  },
})

export const postApiV1VideosIdCommentThreadsRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/{id}/comment-threads',
  tags: ['Video Comments'],
  summary: 'Create a thread',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ text: z.lazy(() => VideoCommentSchema) })
            .openapi({ required: ['text'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: CommentThreadPostResponseSchema } },
    },
    404: { description: 'video does not exist' },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideosIdCommentThreadsThreadIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/{id}/comment-threads/{threadId}',
  tags: ['Video Comments'],
  summary: 'Get a thread',
  request: { params: z.object({ id: IdOrUUIDParamsSchema, threadId: ThreadIdParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoCommentThreadTreeSchema } },
    },
  },
})

export const postApiV1VideosIdCommentsCommentIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/{id}/comments/{commentId}',
  tags: ['Video Comments'],
  summary: 'Reply to a thread of a video',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema, commentId: CommentIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ text: z.lazy(() => VideoCommentSchema) })
            .openapi({ required: ['text'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: CommentThreadPostResponseSchema } },
    },
    404: { description: 'thread or video does not exist' },
  },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1VideosIdCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/videos/{id}/comments/{commentId}',
  tags: ['Video Comments'],
  summary: 'Delete a comment or a reply',
  request: { params: z.object({ id: IdOrUUIDParamsSchema, commentId: CommentIdParamsSchema }) },
  responses: {
    204: { description: 'successful operation' },
    403: { description: 'cannot remove comment of another user' },
    404: { description: 'comment or video does not exist' },
    409: { description: 'comment is already deleted' },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideosIdDescriptionRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/{id}/description',
  tags: ['Video'],
  summary: 'Get complete video description',
  operationId: 'getVideoDesc',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .string()
            .min(3)
            .max(10000)
            .nullable()
            .openapi({
              example:
                '**[Want to help to translate this video?](https://weblate.framasoft.org/projects/what-is-peertube-video/)**\\r\\n\\r\\n**Take back the control of your videos! [#JoinPeertube](https://joinpeertube.org)**\n',
            }),
        },
      },
    },
  },
})

export const postApiV1VideosIdGiveOwnershipRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/{id}/give-ownership',
  tags: ['Video Ownership Change'],
  summary: 'Request ownership change',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.object({ username: z.string() }).openapi({ required: ['username'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: 'changing video ownership to a remote account is not supported yet' },
    404: { description: 'video not found' },
  },
  security: [{ OAuth2: [] }],
})

export const deleteApiV1VideosIdHlsRoute = createRoute({
  method: 'delete',
  path: '/api/v1/videos/{id}/hls',
  tags: ['Video Files'],
  summary: 'Delete video HLS files',
  operationId: 'delVideoHLS',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'video does not exist' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const getApiV1VideosIdLiveSessionRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/{id}/live-session',
  tags: ['Live Videos'],
  summary: 'Get live session of a replay',
  description:
    'If the video is a replay of a live, you can find the associated live session using this endpoint',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: LiveVideoSessionResponseSchema } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const putApiV1VideosIdRateRoute = createRoute({
  method: 'put',
  path: '/api/v1/videos/{id}/rate',
  tags: ['Video Rates'],
  summary: 'Like/dislike a video',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ rating: z.enum(['like', 'dislike']) })
            .openapi({ required: ['rating'] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'video does not exist' },
  },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideosIdSourceRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/{id}/source',
  tags: ['Video'],
  summary: 'Get video source file metadata',
  operationId: 'getVideoSource',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoSourceSchema } },
    },
  },
})

export const getApiV1VideosIdStatsOverallRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/{id}/stats/overall',
  tags: ['Video Stats'],
  summary: 'Get overall stats of a video',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema }),
    query: z.object({
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter stats by start date',
            in: 'query',
            name: 'startDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter stats by end date',
            in: 'query',
            name: 'endDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoStatsOverallSchema } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideosIdStatsRetentionRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/{id}/stats/retention',
  tags: ['Video Stats'],
  summary: 'Get retention stats of a video',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoStatsRetentionSchema } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const getApiV1VideosIdStatsTimeseriesMetricRoute = createRoute({
  method: 'get',
  path: '/api/v1/videos/{id}/stats/timeseries/{metric}',
  tags: ['Video Stats'],
  summary: 'Get timeserie stats of a video',
  request: {
    params: z.object({
      id: IdOrUUIDParamsSchema,
      metric: z
        .enum(['viewers', 'aggregateWatchTime'])
        .openapi({
          param: {
            description: 'The metric to get',
            in: 'path',
            name: 'metric',
            required: true,
            schema: { enum: ['viewers', 'aggregateWatchTime'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      startDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter stats by start date',
            in: 'query',
            name: 'startDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      endDate: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter stats by end date',
            in: 'query',
            name: 'endDate',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoStatsTimeserieSchema } },
    },
  },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideosIdStudioEditRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/{id}/studio/edit',
  tags: ['Video Transcoding', 'Video'],
  summary: 'Create a studio task',
  description: 'Create a task to edit a video  (cut, add intro/outro etc)',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(
              z.union([
                z
                  .object({
                    name: z.literal('cut').exactOptional(),
                    options: z
                      .object({
                        end: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int(),
                          )
                          .exactOptional(),
                        start: z
                          .preprocess(
                            (val) =>
                              typeof val === 'string' &&
                              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                                ? Number(val)
                                : val,
                            z.int(),
                          )
                          .exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .openapi({ title: 'cut', required: [] }),
                z
                  .object({
                    name: z.literal('add-intro').exactOptional(),
                    options: z
                      .object({
                        file: z
                          .file()
                          .exactOptional()
                          .openapi({ type: 'string', format: 'binary' }),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .openapi({ title: 'add-intro', required: [] }),
                z
                  .object({
                    name: z.literal('add-outro').exactOptional(),
                    options: z
                      .object({
                        file: z
                          .file()
                          .exactOptional()
                          .openapi({ type: 'string', format: 'binary' }),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .openapi({ title: 'add-outro', required: [] }),
                z
                  .object({
                    name: z.literal('add-watermark').exactOptional(),
                    options: z
                      .object({
                        file: z
                          .file()
                          .exactOptional()
                          .openapi({ type: 'string', format: 'binary' }),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .openapi({ title: 'add-watermark', required: [] }),
              ]),
            ),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'successful operation' },
    400: { description: 'incorrect parameters' },
    404: { description: 'video not found' },
  },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideosIdTokenRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/{id}/token',
  tags: ['Video'],
  summary: 'Request video token',
  description:
    'Request special tokens that expire quickly to use them in some context (like accessing private static files)',
  operationId: 'requestVideoToken',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: VideoTokenResponseSchema } },
    },
    400: { description: 'incorrect parameters' },
    404: { description: 'video not found' },
  },
  security: [{ OAuth2: [] }],
})

export const postApiV1VideosIdTranscodingRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/{id}/transcoding',
  tags: ['Video Transcoding'],
  summary: 'Create a transcoding job',
  operationId: 'createVideoTranscoding',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ transcodingType: z.enum(['hls', 'webtorrent']) })
            .openapi({ required: ['transcodingType'] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'video does not exist' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const postApiV1VideosIdViewsRoute = createRoute({
  method: 'post',
  path: '/api/v1/videos/{id}/views',
  tags: ['Video'],
  summary: 'Notify user is watching a video',
  description:
    "Call this endpoint regularly (every 5-10 seconds for example) to notify the server the user is watching the video. After a while, PeerTube will increase video's viewers counter. If the user is authenticated, PeerTube will also store the current player time.",
  operationId: 'addView',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema }),
    body: { content: { 'application/json': { schema: UserViewingVideoSchema } }, required: true },
  },
  responses: { 204: { description: 'successful operation' } },
})

export const putApiV1VideosIdWatchingRoute = createRoute({
  method: 'put',
  path: '/api/v1/videos/{id}/watching',
  tags: ['Video'],
  summary: 'Set watching progress of a video',
  description: 'This endpoint has been deprecated. Use `/videos/{id}/views` instead',
  request: {
    params: z.object({ id: IdOrUUIDParamsSchema }),
    body: { content: { 'application/json': { schema: UserViewingVideoSchema } }, required: true },
  },
  responses: { 204: { description: 'successful operation' } },
  deprecated: true,
  security: [{ OAuth2: [] }],
})

export const deleteApiV1VideosIdWebtorrentRoute = createRoute({
  method: 'delete',
  path: '/api/v1/videos/{id}/webtorrent',
  tags: ['Video Files'],
  summary: 'Delete video WebTorrent files',
  operationId: 'delVideoWebTorrent',
  request: { params: z.object({ id: IdOrUUIDParamsSchema }) },
  responses: {
    204: { description: 'successful operation' },
    404: { description: 'video does not exist' },
  },
  security: [{ OAuth2: ['admin'] }],
})

export const getFeedsSubscriptionsFormatRoute = createRoute({
  method: 'get',
  path: '/feeds/subscriptions.{format}',
  tags: ['Video Feeds'],
  summary: 'List videos of subscriptions tied to a token',
  operationId: 'getSyndicatedSubscriptionVideos',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'rss', 'rss2', 'atom', 'atom1', 'json', 'json1'])
        .openapi({
          param: {
            description:
              'format expected (we focus on making `rss` the most featureful ; it serves [Media RSS](https://www.rssboard.org/media-rss))',
            in: 'path',
            name: 'format',
            required: true,
            schema: {
              enum: ['xml', 'rss', 'rss2', 'atom', 'atom1', 'json', 'json1'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'limit listing to a specific account',
            in: 'query',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            description: 'private token allowing access',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sort: SortParamsSchema,
      nsfw: NsfwParamsSchema,
      isLocal: IsLocalParamsSchema,
      include: IncludeParamsSchema,
      privacyOneOf: PrivacyOneOfParamsSchema,
      hasHLSFiles: HasHLSFilesParamsSchema,
      hasWebtorrentFiles: HasWebtorrentFilesParamsSchema,
    }),
  },
  responses: {
    204: {
      description: 'successful operation',
      content: {
        'application/atom+xml': { schema: VideosForXMLSchema },
        'application/json': { schema: z.object({}) },
        'application/rss+xml': { schema: VideosForXMLSchema },
        'application/xml': { schema: VideosForXMLSchema },
        'text/xml': { schema: VideosForXMLSchema },
      },
      headers: z.object({
        'Cache-Control': {
          schema: z
            .string()
            .default('max-age=900')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    406: { description: 'accept header unsupported' },
  },
})

export const getFeedsVideoCommentsFormatRoute = createRoute({
  method: 'get',
  path: '/feeds/video-comments.{format}',
  tags: ['Video Feeds'],
  summary: 'List comments on videos',
  operationId: 'getSyndicatedComments',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'rss', 'rss2', 'atom', 'atom1', 'json', 'json1'])
        .openapi({
          param: {
            description:
              'format expected (we focus on making `rss` the most featureful ; it serves [Media RSS](https://www.rssboard.org/media-rss))',
            in: 'path',
            name: 'format',
            required: true,
            schema: {
              enum: ['xml', 'rss', 'rss2', 'atom', 'atom1', 'json', 'json1'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      videoId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'limit listing to a specific video',
            in: 'query',
            name: 'videoId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'limit listing to a specific account',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      accountName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'limit listing to a specific account',
            in: 'query',
            name: 'accountName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      videoChannelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'limit listing to a specific video channel',
            in: 'query',
            name: 'videoChannelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      videoChannelName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'limit listing to a specific video channel',
            in: 'query',
            name: 'videoChannelName',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'successful operation',
      content: {
        'application/atom+xml': {
          schema: VideoCommentsForXMLSchema,
          examples: {
            nightly: {
              externalValue: 'https://peertube2.cpy.re/feeds/video-comments.atom?filter=local',
            },
          },
        },
        'application/json': {
          schema: z.object({}),
          examples: {
            nightly: {
              externalValue: 'https://peertube2.cpy.re/feeds/video-comments.json?filter=local',
            },
          },
        },
        'application/rss+xml': {
          schema: VideoCommentsForXMLSchema,
          examples: {
            nightly: {
              externalValue: 'https://peertube2.cpy.re/feeds/video-comments.rss?filter=local',
            },
          },
        },
        'application/xml': {
          schema: VideoCommentsForXMLSchema,
          examples: {
            nightly: {
              externalValue: 'https://peertube2.cpy.re/feeds/video-comments.xml?filter=local',
            },
          },
        },
        'text/xml': {
          schema: VideoCommentsForXMLSchema,
          examples: {
            nightly: {
              externalValue: 'https://peertube2.cpy.re/feeds/video-comments.xml?filter=local',
            },
          },
        },
      },
      headers: z.object({
        'Cache-Control': {
          schema: z
            .string()
            .default('max-age=900')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: { description: 'Arises when:\n  - videoId filter is mixed with a channel filter\n' },
    404: { description: 'video, video channel or account not found' },
    406: { description: 'accept header unsupported' },
  },
})

export const getFeedsVideosFormatRoute = createRoute({
  method: 'get',
  path: '/feeds/videos.{format}',
  tags: ['Video Feeds'],
  summary: 'List videos',
  operationId: 'getSyndicatedVideos',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'rss', 'rss2', 'atom', 'atom1', 'json', 'json1'])
        .openapi({
          param: {
            description:
              'format expected (we focus on making `rss` the most featureful ; it serves [Media RSS](https://www.rssboard.org/media-rss))',
            in: 'path',
            name: 'format',
            required: true,
            schema: {
              enum: ['xml', 'rss', 'rss2', 'atom', 'atom1', 'json', 'json1'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'limit listing to a specific account',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      accountName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'limit listing to a specific account',
            in: 'query',
            name: 'accountName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      videoChannelId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'limit listing to a specific video channel',
            in: 'query',
            name: 'videoChannelId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      videoChannelName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'limit listing to a specific video channel',
            in: 'query',
            name: 'videoChannelName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: SortParamsSchema,
      nsfw: NsfwParamsSchema,
      isLocal: IsLocalParamsSchema,
      include: IncludeParamsSchema,
      privacyOneOf: PrivacyOneOfParamsSchema,
      hasHLSFiles: HasHLSFilesParamsSchema,
      hasWebtorrentFiles: HasWebtorrentFilesParamsSchema,
    }),
  },
  responses: {
    204: {
      description: 'successful operation',
      content: {
        'application/atom+xml': {
          schema: VideosForXMLSchema,
          examples: {
            nightly: { externalValue: 'https://peertube2.cpy.re/feeds/videos.atom?filter=local' },
          },
        },
        'application/json': {
          schema: z.object({}),
          examples: {
            nightly: { externalValue: 'https://peertube2.cpy.re/feeds/videos.json?filter=local' },
          },
        },
        'application/rss+xml': {
          schema: VideosForXMLSchema,
          examples: {
            nightly: { externalValue: 'https://peertube2.cpy.re/feeds/videos.rss?filter=local' },
          },
        },
        'application/xml': {
          schema: VideosForXMLSchema,
          examples: {
            nightly: { externalValue: 'https://peertube2.cpy.re/feeds/videos.xml?filter=local' },
          },
        },
        'text/xml': {
          schema: VideosForXMLSchema,
          examples: {
            nightly: { externalValue: 'https://peertube2.cpy.re/feeds/videos.xml?filter=local' },
          },
        },
      },
      headers: z.object({
        'Cache-Control': {
          schema: z
            .string()
            .default('max-age=900')
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: { description: 'video channel or account not found' },
    406: { description: 'accept header unsupported' },
  },
})

export const getStaticStreamingPlaylistsHlsPrivateFilenameRoute = createRoute({
  method: 'get',
  path: '/static/streaming-playlists/hls/private/{filename}',
  tags: ['Static Video Files'],
  summary: 'Get private HLS video file',
  request: {
    params: z.object({ filename: StaticFilenameParamsSchema }),
    query: z.object({
      videoFileToken: VideoFileTokenParamsSchema,
      reinjectVideoFileToken: ReinjectVideoFileTokenParamsSchema,
    }),
  },
  responses: {
    200: { description: 'successful operation' },
    403: { description: 'invalid auth' },
    404: { description: 'not found' },
  },
  security: [{ OAuth2: [] }],
})

export const getStaticStreamingPlaylistsHlsFilenameRoute = createRoute({
  method: 'get',
  path: '/static/streaming-playlists/hls/{filename}',
  tags: ['Static Video Files'],
  summary: 'Get public HLS video file',
  request: { params: z.object({ filename: StaticFilenameParamsSchema }) },
  responses: {
    200: { description: 'successful operation' },
    403: { description: 'invalid auth' },
    404: { description: 'not found' },
  },
  security: [{ OAuth2: [] }],
})

export const getStaticWebseedPrivateFilenameRoute = createRoute({
  method: 'get',
  path: '/static/webseed/private/{filename}',
  tags: ['Static Video Files'],
  summary: 'Get private WebTorrent video file',
  request: {
    params: z.object({ filename: StaticFilenameParamsSchema }),
    query: z.object({ videoFileToken: VideoFileTokenParamsSchema }),
  },
  responses: {
    200: { description: 'successful operation' },
    403: { description: 'invalid auth' },
    404: { description: 'not found' },
  },
  security: [{ OAuth2: [] }],
})

export const getStaticWebseedFilenameRoute = createRoute({
  method: 'get',
  path: '/static/webseed/{filename}',
  tags: ['Static Video Files'],
  summary: 'Get public WebTorrent video file',
  request: { params: z.object({ filename: StaticFilenameParamsSchema }) },
  responses: { 200: { description: 'successful operation' }, 404: { description: 'not found' } },
})
