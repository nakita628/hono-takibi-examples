import { createRoute, z } from '@hono/zod-openapi'

const AgoraCallSchema = z
  .object({ channel: z.string().openapi({ 'x-stream-index': '001' }) })
  .openapi({ required: ['channel'] })
  .openapi('AgoraCall')

const HMSCallSchema = z
  .object({
    room_id: z.string().openapi({ 'x-stream-index': '001' }),
    room_name: z.string().openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: ['room_id', 'room_name'] })
  .openapi('HMSCall')

type CallType = {
  agora?: z.infer<typeof AgoraCallSchema>
  hms?: z.infer<typeof HMSCallSchema>
  id: string
  provider: string
  type: string
}

const ActionSchema = z
  .object({
    name: z.string().openapi({ 'x-stream-index': '001' }),
    style: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    text: z.string().openapi({ 'x-stream-index': '002' }),
    type: z.string().openapi({ 'x-stream-index': '004' }),
    value: z.string().exactOptional().openapi({ 'x-stream-index': '005' }),
  })
  .nullable()
  .openapi({ required: ['name', 'text', 'type'] })
  .openapi('Action')

const FieldSchema = z
  .object({
    short: z.boolean().openapi({ 'x-stream-index': '003' }),
    title: z.string().openapi({ 'x-stream-index': '001' }),
    value: z.string().openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: ['title', 'value', 'short'] })
  .openapi('Field')

const ImageDataSchema = z
  .object({
    frames: z.string().openapi({ 'x-stream-index': '005' }),
    height: z.string().openapi({ 'x-stream-index': '003' }),
    size: z.string().openapi({ 'x-stream-index': '004' }),
    url: z.string().openapi({ 'x-stream-index': '001' }),
    width: z.string().openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: ['url', 'width', 'height', 'size', 'frames'] })
  .openapi('ImageData')

const ImagesSchema = z
  .object({
    fixed_height: ImageDataSchema.openapi({ 'x-stream-index': '002' }),
    fixed_height_downsampled: ImageDataSchema.openapi({ 'x-stream-index': '004' }),
    fixed_height_still: ImageDataSchema.openapi({ 'x-stream-index': '003' }),
    fixed_width: ImageDataSchema.openapi({ 'x-stream-index': '005' }),
    fixed_width_downsampled: ImageDataSchema.openapi({ 'x-stream-index': '007' }),
    fixed_width_still: ImageDataSchema.openapi({ 'x-stream-index': '006' }),
    original: ImageDataSchema.openapi({ 'x-stream-index': '001' }),
  })
  .openapi({
    required: [
      'original',
      'fixed_height',
      'fixed_height_still',
      'fixed_height_downsampled',
      'fixed_width',
      'fixed_width_still',
      'fixed_width_downsampled',
    ],
  })
  .openapi('Images')

const AttachmentSchema = z
  .looseObject({
    actions: z.array(ActionSchema).exactOptional().openapi({ 'x-stream-index': '015' }),
    asset_url: z.string().exactOptional().openapi({ 'x-stream-index': '017' }),
    author_icon: z.string().exactOptional().openapi({ 'x-stream-index': '007' }),
    author_link: z.string().exactOptional().openapi({ 'x-stream-index': '006' }),
    author_name: z.string().exactOptional().openapi({ 'x-stream-index': '005' }),
    color: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    fallback: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
    fields: z.array(FieldSchema).exactOptional().openapi({ 'x-stream-index': '016' }),
    footer: z.string().exactOptional().openapi({ 'x-stream-index': '013' }),
    footer_icon: z.string().exactOptional().openapi({ 'x-stream-index': '014' }),
    giphy: ImagesSchema.exactOptional().openapi({ 'x-stream-index': '019' }),
    image_url: z.string().exactOptional().openapi({ 'x-stream-index': '011' }),
    og_scrape_url: z.string().exactOptional().openapi({ 'x-stream-index': '020' }),
    original_height: z.number().exactOptional().openapi({ 'x-stream-index': '022' }),
    original_width: z.number().exactOptional().openapi({ 'x-stream-index': '021' }),
    pretext: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
    text: z.string().exactOptional().openapi({ 'x-stream-index': '010' }),
    thumb_url: z.string().exactOptional().openapi({ 'x-stream-index': '012' }),
    title: z.string().exactOptional().openapi({ 'x-stream-index': '008' }),
    title_link: z.string().exactOptional().openapi({ 'x-stream-index': '009' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Attachment type (e.g. image, video, url)',
        title: 'Type',
        'x-stream-index': '001',
      }),
  })
  .nullable()
  .openapi({ title: 'Attachment', 'x-stream-docs-page-id': 'file_uploads', required: [] })
  .openapi('Attachment')

const PushNotificationSettingsSchema = z
  .object({
    disabled: z.boolean().exactOptional().openapi({ 'x-stream-index': '001' }),
    disabled_until: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: [] })
  .openapi('PushNotificationSettings')

const UserObjectSchema = z
  .looseObject({
    ban_expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Expiration date of the ban',
        title: 'Ban expires',
        'x-stream-index': '015',
      }),
    banned: z
      .boolean()
      .openapi({
        description: 'Whether a user is banned or not',
        title: 'Banned',
        'x-stream-index': '014',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of creation',
        readOnly: true,
        title: 'Created at',
        'x-stream-index': '007',
      }),
    deactivated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date of deactivation',
        readOnly: true,
        title: 'Deactivated at',
        'x-stream-index': '012',
      }),
    deleted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of deletion',
        readOnly: true,
        title: 'Deleted at',
        'x-stream-index': '011',
      }),
    id: z
      .string()
      .openapi({ description: 'Unique user identifier', title: 'ID', 'x-stream-index': '003' }),
    invisible: z.boolean().exactOptional().openapi({ 'x-stream-index': '021' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Preferred language of a user',
        title: 'Language',
        'x-stream-index': '030',
      }),
    last_active: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date of last activity',
        readOnly: true,
        title: 'Last active',
        'x-stream-index': '010',
      }),
    online: z
      .boolean()
      .openapi({
        description: 'Whether a user online or not',
        readOnly: true,
        title: 'Online',
        'x-stream-index': '020',
      }),
    push_notifications: PushNotificationSettingsSchema.exactOptional().openapi({
      'x-stream-index': '023',
    }),
    revoke_tokens_issued_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Revocation date for tokens',
        title: 'Revoke tokens issued before',
        'x-stream-index': '037',
      }),
    role: z
      .string()
      .openapi({
        description: 'Determines the set of user permissions',
        title: 'Role',
        'x-stream-index': '004',
      }),
    teams: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of teams user is a part of',
        title: 'Teams',
        'x-stream-index': '031',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of the last update',
        readOnly: true,
        title: 'Updated at',
        'x-stream-index': '008',
      }),
  })
  .openapi({
    description: 'Represents chat user',
    required: ['id', 'role', 'banned', 'online'],
    title: 'User object',
  })
  .openapi('UserObject')

const ReactionSchema = z
  .looseObject({
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of creation',
        readOnly: true,
        title: 'Created at',
        'x-stream-index': '008',
      }),
    message_id: z
      .string()
      .openapi({
        description: 'ID of a message user reacted to',
        title: 'Message ID',
        'x-stream-index': '003',
      }),
    score: z
      .number()
      .openapi({
        description: 'Reaction score. If not specified reaction has score of 1',
        title: 'Score',
        'x-stream-index': '007',
      }),
    type: z
      .string()
      .max(30)
      .openapi({
        description: "The type of reaction (e.g. 'like', 'laugh', 'wow')",
        title: 'Type',
        'x-stream-index': '006',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of the last update',
        readOnly: true,
        title: 'Updated at',
        'x-stream-index': '009',
      }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '005' }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of a user who reacted to a message',
        title: 'User ID',
        'x-stream-index': '004',
      }),
  })
  .nullable()
  .openapi({
    description: 'Represents user reaction to a message',
    required: ['message_id', 'type', 'score', 'created_at', 'updated_at'],
    title: 'Reaction',
    'x-stream-docs-page-id': 'send_reaction',
  })
  .openapi('Reaction')

type MessageType = {
  attachments: z.infer<typeof AttachmentSchema>[]
  before_message_send_failed?: boolean
  cid: string
  command?: string
  created_at: string
  deleted_at?: string
  html: string
  i18n?: { [key: string]: string }
  id: string
  image_labels?: { [key: string]: string[] }
  latest_reactions: z.infer<typeof ReactionSchema>[]
  mentioned_users: z.infer<typeof UserObjectSchema>[]
  mml?: string
  own_reactions: z.infer<typeof ReactionSchema>[]
  parent_id?: string
  pin_expires?: string
  pinned: boolean
  pinned_at?: string
  pinned_by?: z.infer<typeof UserObjectSchema>
  quoted_message?: MessageType
  quoted_message_id?: string
  reaction_counts: { [key: string]: number }
  reaction_scores: { [key: string]: number }
  reply_count: number
  shadowed: boolean
  show_in_channel?: boolean
  silent: boolean
  text: string
  thread_participants?: z.infer<typeof UserObjectSchema>[]
  type: 'regular' | 'ephemeral' | 'error' | 'reply' | 'system' | 'deleted'
  updated_at: string
  user?: z.infer<typeof UserObjectSchema>
} | null

const ActionRequestSchema = z
  .object({
    name: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
    style: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    text: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
    type: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
    value: z.string().exactOptional().openapi({ 'x-stream-index': '005' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ActionRequest')

const FieldRequestSchema = z
  .object({
    short: z.boolean().exactOptional().openapi({ 'x-stream-index': '003' }),
    title: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
    value: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('FieldRequest')

const ImageDataRequestSchema = z
  .object({
    frames: z.string().exactOptional().openapi({ 'x-stream-index': '005' }),
    height: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    size: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
    url: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
    width: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: [] })
  .openapi('ImageDataRequest')

const ImagesRequestSchema = z
  .object({
    fixed_height: ImageDataRequestSchema.exactOptional().openapi({ 'x-stream-index': '002' }),
    fixed_height_downsampled: ImageDataRequestSchema.exactOptional().openapi({
      'x-stream-index': '004',
    }),
    fixed_height_still: ImageDataRequestSchema.exactOptional().openapi({ 'x-stream-index': '003' }),
    fixed_width: ImageDataRequestSchema.exactOptional().openapi({ 'x-stream-index': '005' }),
    fixed_width_downsampled: ImageDataRequestSchema.exactOptional().openapi({
      'x-stream-index': '007',
    }),
    fixed_width_still: ImageDataRequestSchema.exactOptional().openapi({ 'x-stream-index': '006' }),
    original: ImageDataRequestSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .openapi({ required: [] })
  .openapi('ImagesRequest')

const AttachmentRequestSchema = z
  .looseObject({
    actions: z.array(ActionRequestSchema).exactOptional().openapi({ 'x-stream-index': '015' }),
    asset_url: z.string().exactOptional().openapi({ 'x-stream-index': '017' }),
    author_icon: z.string().exactOptional().openapi({ 'x-stream-index': '007' }),
    author_link: z.string().exactOptional().openapi({ 'x-stream-index': '006' }),
    author_name: z.string().exactOptional().openapi({ 'x-stream-index': '005' }),
    color: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    fallback: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
    fields: z.array(FieldRequestSchema).exactOptional().openapi({ 'x-stream-index': '016' }),
    footer: z.string().exactOptional().openapi({ 'x-stream-index': '013' }),
    footer_icon: z.string().exactOptional().openapi({ 'x-stream-index': '014' }),
    giphy: ImagesRequestSchema.exactOptional().openapi({ 'x-stream-index': '019' }),
    image_url: z.string().exactOptional().openapi({ 'x-stream-index': '011' }),
    og_scrape_url: z.string().exactOptional().openapi({ 'x-stream-index': '020' }),
    original_height: z.number().exactOptional().openapi({ 'x-stream-index': '022' }),
    original_width: z.number().exactOptional().openapi({ 'x-stream-index': '021' }),
    pretext: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
    text: z.string().exactOptional().openapi({ 'x-stream-index': '010' }),
    thumb_url: z.string().exactOptional().openapi({ 'x-stream-index': '012' }),
    title: z.string().exactOptional().openapi({ 'x-stream-index': '008' }),
    title_link: z.string().exactOptional().openapi({ 'x-stream-index': '009' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Attachment type (e.g. image, video, url)',
        title: 'Type',
        'x-stream-index': '001',
      }),
  })
  .nullable()
  .openapi({ title: 'Attachment', 'x-stream-docs-page-id': 'file_uploads', required: [] })
  .openapi('AttachmentRequest')

const PushNotificationSettingsRequestSchema = z
  .object({
    disabled: z.boolean().exactOptional().openapi({ 'x-stream-index': '001' }),
    disabled_until: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: [] })
  .openapi('PushNotificationSettingsRequest')

const UserObjectRequestSchema = z
  .looseObject({
    ban_expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Expiration date of the ban',
        title: 'Ban expires',
        'x-stream-index': '015',
      }),
    banned: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether a user is banned or not',
        title: 'Banned',
        'x-stream-index': '014',
      }),
    id: z
      .string()
      .openapi({ description: 'Unique user identifier', title: 'ID', 'x-stream-index': '003' }),
    invisible: z.boolean().exactOptional().openapi({ 'x-stream-index': '021' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Preferred language of a user',
        title: 'Language',
        'x-stream-index': '030',
      }),
    push_notifications: PushNotificationSettingsRequestSchema.exactOptional().openapi({
      'x-stream-index': '023',
    }),
    revoke_tokens_issued_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Revocation date for tokens',
        title: 'Revoke tokens issued before',
        'x-stream-index': '037',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Determines the set of user permissions',
        title: 'Role',
        'x-stream-index': '004',
      }),
    teams: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of teams user is a part of',
        title: 'Teams',
        'x-stream-index': '031',
      }),
  })
  .openapi({ description: 'Represents chat user', required: ['id'], title: 'User object' })
  .openapi('UserObjectRequest')

const ReactionRequestSchema = z
  .looseObject({
    message_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of a message user reacted to',
        title: 'Message ID',
        'x-stream-index': '003',
      }),
    score: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Reaction score. If not specified reaction has score of 1',
        title: 'Score',
        'x-stream-index': '007',
      }),
    type: z
      .string()
      .max(30)
      .openapi({
        description: "The type of reaction (e.g. 'like', 'laugh', 'wow')",
        title: 'Type',
        'x-stream-index': '006',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '005' }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of a user who reacted to a message',
        title: 'User ID',
        'x-stream-index': '004',
      }),
  })
  .nullable()
  .openapi({
    description: 'Represents user reaction to a message',
    required: ['type'],
    title: 'Reaction',
    'x-stream-docs-page-id': 'send_reaction',
  })
  .openapi('ReactionRequest')

type MessageRequest_1Type = {
  attachments?: z.infer<typeof AttachmentRequestSchema>[]
  before_message_send_failed?: boolean
  cid?: string
  command?: string
  created_at?: string
  deleted_at?: string
  html?: string
  i18n?: { [key: string]: string }
  id?: string
  image_labels?: { [key: string]: string[] }
  latest_reactions?: z.infer<typeof ReactionRequestSchema>[]
  mentioned_users?: z.infer<typeof UserObjectRequestSchema>[]
  mml: string
  own_reactions?: z.infer<typeof ReactionRequestSchema>[]
  parent_id?: string
  pin_expires?: string
  pinned?: boolean
  pinned_at?: string
  pinned_by?: z.infer<typeof UserObjectRequestSchema>
  quoted_message?: MessageRequest_1Type
  quoted_message_id?: string
  reaction_counts?: { [key: string]: number }
  reaction_scores?: { [key: string]: number }
  reply_count?: number
  shadowed?: boolean
  show_in_channel?: boolean
  silent?: boolean
  text: string
  thread_participants?: z.infer<typeof UserObjectRequestSchema>[]
  type?: 'regular' | 'ephemeral' | 'error' | 'reply' | 'system' | 'deleted'
  updated_at?: string
  user?: z.infer<typeof UserObjectRequestSchema>
}

const LabelThresholdsSchema = z
  .object({
    block: z
      .float32()
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({
        description: 'Threshold for automatic message block',
        title: 'Block',
        'x-stream-index': '002',
      }),
    flag: z
      .float32()
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({
        description: 'Threshold for automatic message flag',
        title: 'Flag',
        'x-stream-index': '001',
      }),
  })
  .openapi({ required: [] })
  .openapi('LabelThresholds')

type ThresholdsType = {
  explicit?: z.infer<typeof LabelThresholdsSchema>
  spam?: z.infer<typeof LabelThresholdsSchema>
  toxic?: z.infer<typeof LabelThresholdsSchema>
}

const LabelThresholdsRequestSchema = z
  .object({
    block: z
      .float32()
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({
        description: 'Threshold for automatic message block',
        title: 'Block',
        'x-stream-index': '002',
      }),
    flag: z
      .float32()
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({
        description: 'Threshold for automatic message flag',
        title: 'Flag',
        'x-stream-index': '001',
      }),
  })
  .openapi({ required: [] })
  .openapi('LabelThresholdsRequest')

type ThresholdsRequestType = {
  explicit?: z.infer<typeof LabelThresholdsRequestSchema>
  spam?: z.infer<typeof LabelThresholdsRequestSchema>
  toxic?: z.infer<typeof LabelThresholdsRequestSchema>
}

const APIErrorSchema = z
  .object({
    StatusCode: z
      .number()
      .openapi({
        description: 'Response HTTP status code',
        title: 'Status code',
        'x-stream-index': '004',
      }),
    code: z
      .number()
      .openapi({ description: 'API error code', title: 'Code', 'x-stream-index': '001' }),
    details: z
      .array(z.number())
      .openapi({
        description: 'Additional error-specific information',
        title: 'Details',
        'x-stream-index': '007',
      }),
    duration: z
      .string()
      .openapi({ description: 'Request duration', title: 'Duration', 'x-stream-index': '005' }),
    exception_fields: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Additional error info',
        title: 'Exception fields',
        'x-stream-index': '003',
      }),
    message: z
      .string()
      .openapi({
        description: 'Message describing an error',
        title: 'Message',
        'x-stream-index': '002',
      }),
    more_info: z
      .string()
      .openapi({
        description: 'URL with additional information',
        title: 'More info',
        'x-stream-index': '006',
      }),
  })
  .nullable()
  .openapi({
    required: ['code', 'message', 'StatusCode', 'duration', 'more_info', 'details'],
    title: 'Error response',
  })
  .openapi('APIError')

const APNConfigFieldsSchema = z
  .object({
    auth_key: z.string().exactOptional().openapi({ 'x-stream-index': '009' }),
    auth_type: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    bundle_id: z.string().exactOptional().openapi({ 'x-stream-index': '006' }),
    development: z.boolean().openapi({ 'x-stream-index': '002' }),
    enabled: z.boolean().openapi({ 'x-stream-index': '001' }),
    host: z.string().exactOptional().openapi({ 'x-stream-index': '005' }),
    key_id: z.string().exactOptional().openapi({ 'x-stream-index': '008' }),
    notification_template: z.string().openapi({ 'x-stream-index': '004' }),
    p12_cert: z.string().exactOptional().openapi({ 'x-stream-index': '010' }),
    team_id: z.string().exactOptional().openapi({ 'x-stream-index': '007' }),
  })
  .openapi({ required: ['enabled', 'development', 'notification_template'] })
  .openapi('APNConfigFields')

const APNConfigRequestSchema = z
  .object({
    Disabled: z.boolean().exactOptional().openapi({ writeOnly: true, 'x-stream-index': '005' }),
    auth_key: z.string().exactOptional().openapi({ 'x-stream-index': '006.001' }),
    auth_type: z
      .enum(['certificate', 'token'])
      .exactOptional()
      .openapi({ 'x-stream-index': '001' }),
    bundle_id: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
    development: z.boolean().exactOptional().openapi({ 'x-stream-index': '002' }),
    host: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    key_id: z.string().exactOptional().openapi({ 'x-stream-index': '006.002' }),
    notification_template: z.string().exactOptional().openapi({ 'x-stream-index': '008' }),
    p12_cert: z.string().exactOptional().openapi({ 'x-stream-index': '007.001' }),
    team_id: z.string().exactOptional().openapi({ 'x-stream-index': '006.003' }),
  })
  .openapi({ required: [] })
  .openapi('APNConfigRequest')

const AnyEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({ required: ['type', 'created_at'], title: 'AnyEvent', 'x-stream-is-event': true })
  .openapi('AnyEvent')

const ConfigSchema = z
  .object({
    app_certificate: z.string().openapi({ 'x-stream-index': '002' }),
    app_id: z.string().openapi({ 'x-stream-index': '001' }),
    default_role: z
      .enum(['attendee', 'publisher', 'subscriber', 'admin'])
      .exactOptional()
      .openapi({ 'x-stream-index': '003' }),
    role_map: z.record(z.string(), z.string()).exactOptional().openapi({ 'x-stream-index': '004' }),
  })
  .openapi({ required: ['app_id', 'app_certificate'] })
  .openapi('Config')

const ThresholdsSchema: z.ZodType<ThresholdsType> = z
  .lazy(() =>
    z
      .object({
        explicit: LabelThresholdsSchema.exactOptional().openapi({
          description: 'Thresholds for explicit messages',
          title: 'Explicit',
          'x-stream-index': '001',
        }),
        spam: LabelThresholdsSchema.exactOptional().openapi({
          description: 'Thresholds for spam',
          title: 'Spam',
          'x-stream-index': '002',
        }),
        toxic: LabelThresholdsSchema.exactOptional().openapi({
          description: 'Thresholds for toxic messages',
          title: 'Toxic',
          'x-stream-index': '003',
        }),
      })
      .openapi({
        description: 'Sets thresholds for AI moderation',
        title: 'Auto moderation thresholds',
        required: [],
      }),
  )
  .openapi('Thresholds')

const ChannelConfigSchema = z
  .object({
    automod: z.enum(['disabled', 'simple', 'AI']).openapi({ 'x-stream-index': '001.017' }),
    automod_behavior: z.enum(['flag', 'block']).openapi({ 'x-stream-index': '001.018' }),
    automod_thresholds: ThresholdsSchema.exactOptional().openapi({ 'x-stream-index': '001.021' }),
    blocklist: z.string().exactOptional().openapi({ 'x-stream-index': '001.019' }),
    blocklist_behavior: z
      .enum(['flag', 'block'])
      .exactOptional()
      .openapi({ 'x-stream-index': '001.020' }),
    commands: z
      .array(z.string())
      .openapi({
        description: 'List of commands that channel supports',
        title: 'Commands',
        'x-stream-index': '003',
      }),
    connect_events: z.boolean().openapi({ 'x-stream-index': '001.004' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.003' }),
    custom_events: z.boolean().openapi({ 'x-stream-index': '001.012' }),
    max_message_length: z.number().max(20000).openapi({ 'x-stream-index': '001.016' }),
    message_retention: z.string().openapi({ 'x-stream-index': '001.015' }),
    mutes: z.boolean().openapi({ 'x-stream-index': '001.009' }),
    name: z.string().openapi({ 'x-stream-index': '001.001' }),
    push_notifications: z.boolean().openapi({ 'x-stream-index': '001.013' }),
    quotes: z.boolean().openapi({ 'x-stream-index': '001.008' }),
    reactions: z.boolean().openapi({ 'x-stream-index': '001.006' }),
    read_events: z.boolean().openapi({ 'x-stream-index': '001.003' }),
    reminders: z.boolean().openapi({ 'x-stream-index': '001.014' }),
    replies: z.boolean().openapi({ 'x-stream-index': '001.007' }),
    search: z.boolean().openapi({ 'x-stream-index': '001.005' }),
    typing_events: z.boolean().openapi({ 'x-stream-index': '001.002' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.004' }),
    uploads: z.boolean().openapi({ 'x-stream-index': '001.010' }),
    url_enrichment: z.boolean().openapi({ 'x-stream-index': '001.011' }),
  })
  .openapi({
    required: [
      'name',
      'typing_events',
      'read_events',
      'connect_events',
      'search',
      'reactions',
      'replies',
      'quotes',
      'mutes',
      'uploads',
      'url_enrichment',
      'custom_events',
      'push_notifications',
      'reminders',
      'message_retention',
      'max_message_length',
      'automod',
      'automod_behavior',
      'created_at',
      'updated_at',
      'commands',
    ],
  })
  .openapi('ChannelConfig')

const FileUploadConfigSchema = z
  .object({
    allowed_file_extensions: z.array(z.string()).openapi({ 'x-stream-index': '001' }),
    allowed_mime_types: z.array(z.string()).openapi({ 'x-stream-index': '003' }),
    blocked_file_extensions: z.array(z.string()).openapi({ 'x-stream-index': '002' }),
    blocked_mime_types: z.array(z.string()).openapi({ 'x-stream-index': '004' }),
  })
  .openapi({
    required: [
      'allowed_file_extensions',
      'blocked_file_extensions',
      'allowed_mime_types',
      'blocked_mime_types',
    ],
  })
  .openapi('FileUploadConfig')

const PolicySchema = z
  .object({
    action: z.number().openapi({ 'x-stream-index': '007' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '010' }),
    name: z.string().openapi({ 'x-stream-index': '004' }),
    owner: z.boolean().openapi({ 'x-stream-index': '008' }),
    priority: z.number().openapi({ 'x-stream-index': '009' }),
    resources: z.array(z.string()).openapi({ 'x-stream-index': '005' }),
    roles: z.array(z.string()).openapi({ 'x-stream-index': '006' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '011' }),
  })
  .openapi({
    required: [
      'name',
      'resources',
      'roles',
      'action',
      'owner',
      'priority',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('Policy')

const FirebaseConfigFieldsSchema = z
  .object({
    apn_template: z.string().openapi({ 'x-stream-index': '004' }),
    credentials_json: z.string().exactOptional().openapi({ 'x-stream-index': '006' }),
    data_template: z.string().openapi({ 'x-stream-index': '003' }),
    enabled: z.boolean().openapi({ 'x-stream-index': '001' }),
    notification_template: z.string().openapi({ 'x-stream-index': '002' }),
    server_key: z.string().exactOptional().openapi({ 'x-stream-index': '005' }),
  })
  .openapi({ required: ['enabled', 'notification_template', 'data_template', 'apn_template'] })
  .openapi('FirebaseConfigFields')

const HuaweiConfigFieldsSchema = z
  .object({
    enabled: z.boolean().openapi({ 'x-stream-index': '001' }),
    id: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
    secret: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
  })
  .openapi({ required: ['enabled'] })
  .openapi('HuaweiConfigFields')

const PushProviderSchema = z
  .object({
    apn_auth_key: z.string().exactOptional().openapi({ 'x-stream-index': '012' }),
    apn_auth_type: z.string().exactOptional().openapi({ 'x-stream-index': '017' }),
    apn_development: z.boolean().exactOptional().openapi({ 'x-stream-index': '018' }),
    apn_host: z.string().exactOptional().openapi({ 'x-stream-index': '019' }),
    apn_key_id: z.string().exactOptional().openapi({ 'x-stream-index': '013' }),
    apn_notification_template: z.string().exactOptional().openapi({ 'x-stream-index': '020' }),
    apn_p12_cert: z.string().exactOptional().openapi({ 'x-stream-index': '014' }),
    apn_team_id: z.string().exactOptional().openapi({ 'x-stream-index': '015' }),
    apn_topic: z.string().exactOptional().openapi({ 'x-stream-index': '016' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '008' }),
    description: z.string().max(128).exactOptional().openapi({ 'x-stream-index': '007' }),
    disabled_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '010' }),
    disabled_reason: z.string().max(255).exactOptional().openapi({ 'x-stream-index': '011' }),
    firebase_apn_template: z.string().exactOptional().openapi({ 'x-stream-index': '025' }),
    firebase_credentials: z.string().exactOptional().openapi({ 'x-stream-index': '022' }),
    firebase_data_template: z.string().exactOptional().openapi({ 'x-stream-index': '023' }),
    firebase_notification_template: z.string().exactOptional().openapi({ 'x-stream-index': '024' }),
    firebase_server_key: z.string().exactOptional().openapi({ 'x-stream-index': '021' }),
    huawei_app_id: z.string().exactOptional().openapi({ 'x-stream-index': '026' }),
    huawei_app_secret: z.string().exactOptional().openapi({ 'x-stream-index': '027' }),
    name: z.string().min(1).max(36).openapi({ 'x-stream-index': '005' }),
    type: z.number().openapi({ 'x-stream-index': '006' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '009' }),
    xiaomi_app_secret: z.string().exactOptional().openapi({ 'x-stream-index': '029' }),
    xiaomi_package_name: z.string().exactOptional().openapi({ 'x-stream-index': '028' }),
  })
  .nullable()
  .openapi({ required: ['name', 'type', 'created_at', 'updated_at'] })
  .openapi('PushProvider')

const XiaomiConfigFieldsSchema = z
  .object({
    enabled: z.boolean().openapi({ 'x-stream-index': '001' }),
    package_name: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
    secret: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
  })
  .openapi({ required: ['enabled'] })
  .openapi('XiaomiConfigFields')

const PushNotificationFieldsSchema = z
  .object({
    apn: APNConfigFieldsSchema.openapi({ 'x-stream-index': '002' }),
    firebase: FirebaseConfigFieldsSchema.openapi({ 'x-stream-index': '003' }),
    huawei: HuaweiConfigFieldsSchema.openapi({ 'x-stream-index': '004' }),
    offline_only: z.boolean().openapi({ 'x-stream-index': '001.002' }),
    providers: z.array(PushProviderSchema).exactOptional().openapi({ 'x-stream-index': '006' }),
    version: z.string().openapi({ 'x-stream-index': '001.001' }),
    xiaomi: XiaomiConfigFieldsSchema.openapi({ 'x-stream-index': '005' }),
  })
  .openapi({ required: ['version', 'offline_only', 'apn', 'firebase', 'huawei', 'xiaomi'] })
  .openapi('PushNotificationFields')

const AppSchema = z
  .object({
    agora_options: ConfigSchema.exactOptional().openapi({ 'x-stream-index': '001.034' }),
    async_url_enrich_enabled: z.boolean().openapi({ 'x-stream-index': '001.015' }),
    auto_translation_enabled: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.017' }),
    before_message_send_hook_url: z
      .string()
      .exactOptional()
      .openapi({ 'x-stream-index': '001.018' }),
    campaign_enabled: z.boolean().openapi({ 'x-stream-index': '001.028' }),
    cdn_expiration_seconds: z.number().openapi({ 'x-stream-index': '001.032' }),
    channel_configs: z
      .record(z.string(), ChannelConfigSchema)
      .openapi({
        description: 'Object with channel configs',
        title: 'Channel configs',
        'x-stream-index': '001.005',
        'x-stream-map': { key: 'channel_type' },
      }),
    custom_action_handler_url: z.string().openapi({ 'x-stream-index': '001.019' }),
    disable_auth_checks: z.boolean().openapi({ 'x-stream-index': '001.009' }),
    disable_permissions_checks: z.boolean().openapi({ 'x-stream-index': '001.010' }),
    enforce_unique_usernames: z.string().openapi({ 'x-stream-index': '001.020' }),
    file_upload_config: FileUploadConfigSchema.openapi({ 'x-stream-index': '001.024' }),
    grants: z.record(z.string(), z.array(z.string())).openapi({ 'x-stream-index': '001.027' }),
    hms_options: ConfigSchema.exactOptional().openapi({ 'x-stream-index': '001.035' }),
    image_moderation_enabled: z.boolean().openapi({ 'x-stream-index': '001.014' }),
    image_moderation_labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ 'x-stream-index': '001.016' }),
    image_upload_config: FileUploadConfigSchema.openapi({ 'x-stream-index': '001.025' }),
    multi_tenant_enabled: z.boolean().openapi({ 'x-stream-index': '001.013' }),
    name: z.string().openapi({ 'x-stream-index': '001.001' }),
    organization: z.string().openapi({ 'x-stream-index': '001.002' }),
    permission_version: z.string().openapi({ 'x-stream-index': '001.011' }),
    policies: z.record(z.string(), z.array(PolicySchema)).openapi({ 'x-stream-index': '001.006' }),
    push_notifications: PushNotificationFieldsSchema.openapi({ 'x-stream-index': '001.003' }),
    reminders_interval: z.number().openapi({ 'x-stream-index': '001.031' }),
    revoke_tokens_issued_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '001.026' }),
    search_backend: z
      .enum(['elasticsearch', 'postgres', 'disabled'])
      .openapi({
        description: 'Backend implementation used for search',
        title: 'Search Backend',
        'x-stream-index': '001.029',
      }),
    sqs_key: z.string().openapi({ 'x-stream-index': '001.022' }),
    sqs_secret: z.string().openapi({ 'x-stream-index': '001.023' }),
    sqs_url: z.string().openapi({ 'x-stream-index': '001.021' }),
    suspended: z.boolean().openapi({ 'x-stream-index': '001.007' }),
    suspended_explanation: z.string().openapi({ 'x-stream-index': '001.008' }),
    user_search_disallowed_roles: z.array(z.string()).openapi({ 'x-stream-index': '001.012' }),
    video_provider: z.string().openapi({ 'x-stream-index': '001.033' }),
    webhook_events: z.array(z.string()).openapi({ 'x-stream-index': '001.030' }),
    webhook_url: z.string().openapi({ 'x-stream-index': '001.004' }),
  })
  .openapi({
    required: [
      'name',
      'organization',
      'push_notifications',
      'webhook_url',
      'channel_configs',
      'policies',
      'suspended',
      'suspended_explanation',
      'disable_auth_checks',
      'disable_permissions_checks',
      'permission_version',
      'user_search_disallowed_roles',
      'multi_tenant_enabled',
      'image_moderation_enabled',
      'async_url_enrich_enabled',
      'custom_action_handler_url',
      'enforce_unique_usernames',
      'sqs_url',
      'sqs_key',
      'sqs_secret',
      'file_upload_config',
      'image_upload_config',
      'grants',
      'campaign_enabled',
      'search_backend',
      'webhook_events',
      'reminders_interval',
      'cdn_expiration_seconds',
      'video_provider',
    ],
  })
  .openapi('App')

const AsyncModerationCallbackConfigRequestSchema = z
  .object({
    mode: z
      .enum(['CALLBACK_MODE_NONE', 'CALLBACK_MODE_REST', 'CALLBACK_MODE_TWIRP'])
      .exactOptional()
      .openapi({ 'x-stream-index': '002' }),
    server_url: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .openapi({ required: [] })
  .openapi('AsyncModerationCallbackConfigRequest')

const AsyncModerationConfigurationRequestSchema = z
  .object({
    callback: AsyncModerationCallbackConfigRequestSchema.exactOptional().openapi({
      'x-stream-index': '002',
    }),
    timeout_ms: z.number().exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .openapi({ required: [] })
  .openapi('AsyncModerationConfigurationRequest')

const FlagMessageDetailsSchema = z
  .object({
    pin_changed: z.boolean().exactOptional().openapi({ 'x-stream-index': '002' }),
    should_enrich: z.boolean().exactOptional().openapi({ 'x-stream-index': '003' }),
    skip_push: z.boolean().exactOptional().openapi({ 'x-stream-index': '004' }),
    updated_by_id: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .openapi({ required: [] })
  .openapi('FlagMessageDetails')

const ModerationResponseSchema = z
  .object({
    action: z.string().openapi({ 'x-stream-index': '004' }),
    explicit: z.float32().openapi({ 'x-stream-index': '002' }),
    spam: z.float32().openapi({ 'x-stream-index': '003' }),
    toxic: z.float32().openapi({ 'x-stream-index': '001' }),
  })
  .openapi({ required: ['toxic', 'explicit', 'spam', 'action'] })
  .openapi('ModerationResponse')

const MessageModerationResultSchema = z
  .object({
    action: z.string().openapi({ 'x-stream-index': '004' }),
    ai_moderation_response: ModerationResponseSchema.exactOptional().openapi({
      'x-stream-index': '009',
    }),
    blocked_word: z.string().exactOptional().openapi({ 'x-stream-index': '006' }),
    blocklist_name: z.string().exactOptional().openapi({ 'x-stream-index': '007' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '012' }),
    message_id: z.string().openapi({ 'x-stream-index': '003' }),
    moderated_by: z.string().exactOptional().openapi({ 'x-stream-index': '005' }),
    moderation_thresholds: ThresholdsSchema.exactOptional().openapi({ 'x-stream-index': '008' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '013' }),
    user_bad_karma: z.boolean().openapi({ 'x-stream-index': '011' }),
    user_karma: z.float32().openapi({ 'x-stream-index': '010' }),
  })
  .openapi({
    required: ['message_id', 'action', 'user_karma', 'user_bad_karma', 'created_at', 'updated_at'],
  })
  .openapi('MessageModerationResult')

const AutomodDetailsSchema = z
  .object({
    action: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
    image_labels: z.array(z.string()).exactOptional().openapi({ 'x-stream-index': '005' }),
    message_details: FlagMessageDetailsSchema.exactOptional().openapi({ 'x-stream-index': '004' }),
    original_message_type: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
    result: MessageModerationResultSchema.exactOptional().openapi({ 'x-stream-index': '003' }),
  })
  .openapi({ required: [] })
  .openapi('AutomodDetails')

const BanRequestSchema = z
  .object({
    banned_by: UserObjectRequestSchema.exactOptional().openapi({
      description: 'User who issued a ban',
      title: 'Banned by',
      'x-stream-index': '009',
    }),
    banned_by_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'User ID who issued a ban',
        title: 'Banned by ID',
        'x-stream-index': '008',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel ID to ban user in', title: 'ID', 'x-stream-index': '005' }),
    ip_ban: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to perform IP ban or not',
        title: 'IP ban',
        'x-stream-index': '007',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ban reason', title: 'Reason', 'x-stream-index': '003' }),
    shadow: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to perform shadow ban or not',
        title: 'Shadow',
        'x-stream-index': '006',
      }),
    target_user_id: z
      .string()
      .openapi({
        description: 'ID of user to ban',
        title: 'Target user ID',
        'x-stream-index': '001',
      }),
    timeout: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Timeout of ban in minutes. User will be unbanned after this period of time',
        title: 'Timeout',
        'x-stream-index': '002',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Channel type to ban user in',
        title: 'Type',
        'x-stream-index': '004',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '010.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '010.001' }),
  })
  .nullable()
  .openapi({ required: ['target_user_id'] })
  .openapi('BanRequest')

const CommandSchema = z
  .object({
    args: z
      .string()
      .openapi({
        description: 'Arguments help text, shown in commands auto-completion',
        title: 'Arguments',
        'x-stream-index': '006',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of creation',
        readOnly: true,
        title: 'Created at',
        'x-stream-index': '001',
      }),
    description: z
      .string()
      .openapi({
        description: 'Description, shown in commands auto-completion',
        title: 'Description',
        'x-stream-index': '005',
      }),
    name: z
      .string()
      .openapi({ description: 'Unique command name', title: 'Name', 'x-stream-index': '004' }),
    set: z
      .string()
      .openapi({
        description: 'Set name used for grouping commands',
        title: 'Set',
        'x-stream-index': '007',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of the last update',
        readOnly: true,
        title: 'Updated at',
        'x-stream-index': '002',
      }),
  })
  .nullable()
  .openapi({
    description: 'Represents custom chat command',
    required: ['name', 'description', 'args', 'set'],
    title: 'Command',
  })
  .openapi('Command')

const ChannelConfigWithInfoSchema = z
  .object({
    automod: z.enum(['disabled', 'simple', 'AI']).openapi({ 'x-stream-index': '001.002.017' }),
    automod_behavior: z.enum(['flag', 'block']).openapi({ 'x-stream-index': '001.002.018' }),
    automod_thresholds: ThresholdsSchema.exactOptional().openapi({
      'x-stream-index': '001.002.021',
    }),
    blocklist: z.string().exactOptional().openapi({ 'x-stream-index': '001.002.019' }),
    blocklist_behavior: z
      .enum(['flag', 'block'])
      .exactOptional()
      .openapi({ 'x-stream-index': '001.002.020' }),
    commands: z.array(CommandSchema).openapi({ 'x-stream-index': '001.003' }),
    connect_events: z.boolean().openapi({ 'x-stream-index': '001.002.004' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.001.003' }),
    custom_events: z.boolean().openapi({ 'x-stream-index': '001.002.012' }),
    grants: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({
        title: 'Grants',
        'x-stream-index': '002',
        'x-stream-map': {
          description: 'List of grants modifiers that apply to a role',
          key: 'role',
          title: 'Grants',
        },
      }),
    max_message_length: z.number().max(20000).openapi({ 'x-stream-index': '001.002.016' }),
    message_retention: z.string().openapi({ 'x-stream-index': '001.002.015' }),
    mutes: z.boolean().openapi({ 'x-stream-index': '001.002.009' }),
    name: z.string().openapi({ 'x-stream-index': '001.002.001' }),
    push_notifications: z.boolean().openapi({ 'x-stream-index': '001.002.013' }),
    quotes: z.boolean().openapi({ 'x-stream-index': '001.002.008' }),
    reactions: z.boolean().openapi({ 'x-stream-index': '001.002.006' }),
    read_events: z.boolean().openapi({ 'x-stream-index': '001.002.003' }),
    reminders: z.boolean().openapi({ 'x-stream-index': '001.002.014' }),
    replies: z.boolean().openapi({ 'x-stream-index': '001.002.007' }),
    search: z.boolean().openapi({ 'x-stream-index': '001.002.005' }),
    typing_events: z.boolean().openapi({ 'x-stream-index': '001.002.002' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.001.004' }),
    uploads: z.boolean().openapi({ 'x-stream-index': '001.002.010' }),
    url_enrichment: z.boolean().openapi({ 'x-stream-index': '001.002.011' }),
  })
  .openapi({
    required: [
      'created_at',
      'updated_at',
      'name',
      'typing_events',
      'read_events',
      'connect_events',
      'search',
      'reactions',
      'replies',
      'quotes',
      'mutes',
      'uploads',
      'url_enrichment',
      'custom_events',
      'push_notifications',
      'reminders',
      'message_retention',
      'max_message_length',
      'automod',
      'automod_behavior',
      'commands',
    ],
  })
  .openapi('ChannelConfigWithInfo')

const ChannelMemberSchema = z
  .object({
    ban_expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Expiration date of the ban',
        title: 'Ban expires',
        'x-stream-index': '015',
      }),
    banned: z
      .boolean()
      .openapi({
        description: 'Whether member is banned this channel or not',
        title: 'Banned',
        'x-stream-index': '014',
      }),
    channel_role: z
      .string()
      .openapi({
        description: 'Role of the member in the channel',
        title: 'Channel Role',
        'x-stream-index': '019',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '010',
      }),
    deleted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '012' }),
    invite_accepted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date when invite was accepted',
        title: 'Invited accepted at',
        'x-stream-index': '008',
      }),
    invite_rejected_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date when invite was rejected',
        title: 'Invited rejected at',
        'x-stream-index': '009',
      }),
    invited: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether member was invited or not',
        title: 'Invited',
        'x-stream-index': '007',
      }),
    is_moderator: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether member is channel moderator or not',
        title: 'Is moderator',
        'x-stream-index': '006',
      }),
    role: z
      .enum(['member', 'moderator', 'admin', 'owner'])
      .exactOptional()
      .openapi({
        description:
          'Permission level of the member in the channel (DEPRECATED: use channel_role instead)',
        title: 'Role',
        'x-stream-index': '018',
      }),
    shadow_banned: z
      .boolean()
      .openapi({
        description: 'Whether member is shadow banned in this channel or not',
        title: 'Shadow banned',
        'x-stream-index': '017',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of the last update',
        title: 'Updated at',
        'x-stream-index': '011',
      }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '005' }),
    user_id: z.string().exactOptional().openapi({ title: 'User ID', 'x-stream-index': '004' }),
  })
  .nullable()
  .openapi({
    required: ['created_at', 'updated_at', 'banned', 'shadow_banned', 'channel_role'],
    title: 'Channel member',
  })
  .openapi('ChannelMember')

const ChannelResponseSchema = z
  .looseObject({
    auto_translation_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether auto translation is enabled or not',
        title: 'Auto translation',
        'x-stream-index': '021',
      }),
    auto_translation_language: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Language to translate to when auto translation is active',
        title: 'Auto translation language',
        'x-stream-index': '022',
      }),
    cid: z
      .string()
      .openapi({ description: 'Channel CID (<type>:<id>)', title: 'CID', 'x-stream-index': '005' }),
    config: ChannelConfigWithInfoSchema.exactOptional().openapi({
      description: 'Channel configuration',
      title: 'Config',
      'x-stream-index': '017',
    }),
    cooldown: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Cooldown period after sending each message',
        title: 'Cooldown',
        'x-stream-index': '024',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '008',
      }),
    created_by: UserObjectSchema.exactOptional().openapi({
      description: 'Creator of the channel',
      title: 'Created by',
      'x-stream-index': '011',
    }),
    deleted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of deletion',
        title: 'Deleted at',
        'x-stream-index': '010',
      }),
    disabled: z.boolean().openapi({ 'x-stream-index': '013' }),
    frozen: z
      .boolean()
      .openapi({
        description: 'Whether channel is frozen or not',
        title: 'Frozen',
        'x-stream-index': '012',
      }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this channel is hidden by current user or not',
        title: 'Hidden',
        'x-stream-index': '026',
      }),
    hide_messages_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date since when the message history is accessible',
        title: 'Hide messages before',
        'x-stream-index': '023',
      }),
    id: z
      .string()
      .openapi({ description: 'Channel unique ID', title: 'ID', 'x-stream-index': '003' }),
    last_message_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date of the last message sent',
        title: 'Last message at',
        'x-stream-index': '006',
      }),
    member_count: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Number of members in the channel',
        title: 'Member count',
        'x-stream-index': '015',
      }),
    members: z
      .array(ChannelMemberSchema)
      .exactOptional()
      .openapi({
        description: 'List of channel members (max 100)',
        title: 'Members',
        'x-stream-index': '014',
      }),
    mute_expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date of mute expiration',
        title: 'Mute expires at',
        'x-stream-index': '019',
      }),
    muted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this channel is muted or not',
        title: 'Muted',
        'x-stream-index': '018',
      }),
    own_capabilities: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of channel capabilities of authenticated user',
        title: 'Own Capabilities',
        'x-stream-index': '025',
      }),
    team: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Team the channel belongs to (multi-tenant only)',
        title: 'Team',
        'x-stream-index': '020',
      }),
    truncated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date of the latest truncation of the channel',
        title: 'Truncated At',
        'x-stream-index': '027',
      }),
    truncated_by: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '028' }),
    type: z
      .string()
      .openapi({
        description: 'Type of the channel',
        title: 'Type',
        'x-stream-docs-page-id': 'channel_features',
        'x-stream-index': '004',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of the last update',
        title: 'Updated at',
        'x-stream-index': '009',
      }),
  })
  .openapi({
    description: 'Represents channel in chat',
    required: ['id', 'type', 'cid', 'frozen', 'disabled'],
    title: 'Channel',
  })
  .openapi('ChannelResponse')

const BanResponseSchema = z
  .object({
    banned_by: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '006' }),
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '007' }),
    expires: z.iso.datetime({ offset: true }).exactOptional().openapi({ 'x-stream-index': '003' }),
    reason: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
    shadow: z.boolean().exactOptional().openapi({ 'x-stream-index': '005' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: ['created_at'] })
  .openapi('BanResponse')

const BlockListSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '004',
      }),
    name: z
      .string()
      .openapi({ description: 'Block list name', title: 'Name', 'x-stream-index': '006' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of the last update',
        title: 'Updated at',
        'x-stream-index': '005',
      }),
    words: z
      .array(z.string())
      .openapi({ description: 'List of words to block', title: 'Words', 'x-stream-index': '007' }),
  })
  .openapi({
    description: 'Block list contains restricted words',
    required: ['name', 'words'],
    title: 'Block list',
    'x-stream-docs-page-id': 'block_lists',
  })
  .openapi('BlockList')

const CallSchema: z.ZodType<CallType> = z
  .lazy(() =>
    z
      .object({
        agora: AgoraCallSchema.exactOptional().openapi({ 'x-stream-index': '005' }),
        hms: HMSCallSchema.exactOptional().openapi({ 'x-stream-index': '004' }),
        id: z.string().openapi({ 'x-stream-index': '002' }),
        provider: z.string().openapi({ 'x-stream-index': '001' }),
        type: z.string().openapi({ 'x-stream-index': '003' }),
      })
      .openapi({ required: ['provider', 'id', 'type'] }),
  )
  .openapi('Call')

const CampaignSchema = z
  .object({
    attachments: z.array(AttachmentSchema).openapi({ 'x-stream-index': '005.007' }),
    channel_type: z.string().max(64).openapi({ 'x-stream-index': '005.008' }),
    completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '006.004' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '007' }),
    defaults: z.record(z.string(), z.string()).openapi({ 'x-stream-index': '005.006' }),
    description: z.string().max(1024).openapi({ 'x-stream-index': '005.002' }),
    details: z.string().exactOptional().openapi({ 'x-stream-index': '006.011' }),
    errored_messages: z.number().exactOptional().openapi({ 'x-stream-index': '006.009' }),
    failed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '006.005' }),
    id: z.string().openapi({ 'x-stream-index': '003' }),
    name: z.string().max(256).openapi({ 'x-stream-index': '005.001' }),
    resumed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '006.007' }),
    scheduled_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '006.003' }),
    scheduled_for: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '006.002' }),
    segment_id: z.string().openapi({ 'x-stream-index': '005.004' }),
    sender_id: z.string().openapi({ 'x-stream-index': '005.005' }),
    sent_messages: z.number().exactOptional().openapi({ 'x-stream-index': '006.008' }),
    status: z.string().exactOptional().openapi({ 'x-stream-index': '006.001' }),
    stopped_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '006.006' }),
    task_id: z.string().exactOptional().openapi({ 'x-stream-index': '006.010' }),
    text: z.string().openapi({ 'x-stream-index': '005.003' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '008' }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'description',
      'text',
      'segment_id',
      'sender_id',
      'defaults',
      'attachments',
      'channel_type',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('Campaign')

const CampaignDataRequestSchema = z
  .object({
    attachments: z
      .array(AttachmentRequestSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '007' }),
    channel_type: z.string().max(64).exactOptional().openapi({ 'x-stream-index': '008' }),
    defaults: z.record(z.string(), z.string()).exactOptional().openapi({ 'x-stream-index': '006' }),
    description: z.string().max(1024).exactOptional().openapi({ 'x-stream-index': '002' }),
    name: z.string().max(256).openapi({ 'x-stream-index': '001' }),
    segment_id: z.string().openapi({ 'x-stream-index': '004' }),
    sender_id: z.string().openapi({ 'x-stream-index': '005' }),
    text: z.string().openapi({ 'x-stream-index': '003' }),
  })
  .openapi({ required: ['name', 'text', 'segment_id', 'sender_id'] })
  .openapi('CampaignDataRequest')

const CampaignSortFieldSchema = z
  .object({
    field: z.string().openapi({ 'x-stream-index': '001' }),
    value: z.any().openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: ['field', 'value'] })
  .openapi('CampaignSortField')

const CampaignSortSchema = z
  .object({
    direction: z.enum(['asc', 'desc']).exactOptional().openapi({ 'x-stream-index': '001' }),
    fields: z.array(CampaignSortFieldSchema).openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: ['fields'] })
  .openapi('CampaignSort')

const CampaignUpdateableFieldsRequestSchema = z
  .object({
    attachments: z
      .array(AttachmentRequestSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '007' }),
    channel_type: z.string().max(64).exactOptional().openapi({ 'x-stream-index': '008' }),
    defaults: z.record(z.string(), z.string()).exactOptional().openapi({ 'x-stream-index': '006' }),
    description: z.string().max(1024).exactOptional().openapi({ 'x-stream-index': '002' }),
    name: z.string().max(256).exactOptional().openapi({ 'x-stream-index': '001' }),
    segment_id: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
    sender_id: z.string().exactOptional().openapi({ 'x-stream-index': '005' }),
    text: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
  })
  .openapi({ required: [] })
  .openapi('CampaignUpdateableFieldsRequest')

const ChannelSchema = z
  .looseObject({
    auto_translation_enabled: z.boolean().exactOptional().openapi({ 'x-stream-index': '027' }),
    auto_translation_language: z.string().openapi({ 'x-stream-index': '028' }),
    cid: z.string().openapi({ 'x-stream-index': '003' }),
    config: ChannelConfigSchema.exactOptional().openapi({ 'x-stream-index': '024' }),
    config_overrides: ChannelConfigSchema.exactOptional().openapi({ 'x-stream-index': '025' }),
    cooldown: z.number().exactOptional().openapi({ 'x-stream-index': '029' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '009' }),
    created_by: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '008' }),
    deleted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '011' }),
    disabled: z.boolean().openapi({ 'x-stream-index': '016' }),
    frozen: z.boolean().openapi({ 'x-stream-index': '015' }),
    id: z.string().openapi({ 'x-stream-index': '004' }),
    invites: z.array(ChannelMemberSchema).exactOptional().openapi({ 'x-stream-index': '020' }),
    last_message_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '006' }),
    member_count: z.number().exactOptional().openapi({ 'x-stream-index': '019' }),
    members: z.array(ChannelMemberSchema).exactOptional().openapi({ 'x-stream-index': '018' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '026' }),
    truncated_by: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '014' }),
    type: z.string().openapi({ 'x-stream-index': '005' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '010' }),
  })
  .openapi({
    required: [
      'cid',
      'id',
      'type',
      'created_at',
      'updated_at',
      'frozen',
      'disabled',
      'auto_translation_language',
    ],
  })
  .openapi('Channel')

const ChannelConfigRequestSchema = z
  .object({
    blocklist: z.string().exactOptional().openapi({ 'x-stream-index': '008' }),
    blocklist_behavior: z
      .enum(['flag', 'block'])
      .exactOptional()
      .openapi({ 'x-stream-index': '009' }),
    commands: z.array(z.string()).exactOptional().openapi({ 'x-stream-index': '011' }),
    grants: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({
        title: 'Grants',
        'x-stream-index': '010',
        'x-stream-map': {
          description: 'List of grants modifiers that apply to a role',
          key: 'role',
          title: 'Grants',
        },
      }),
    max_message_length: z
      .number()
      .max(20000)
      .exactOptional()
      .openapi({
        description: 'Overrides max message length',
        title: 'Max Message Length',
        'x-stream-index': '007',
      }),
    quotes: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables message quotes', title: 'Quotes', 'x-stream-index': '004' }),
    reactions: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enables or disables reactions',
        title: 'Reactions',
        'x-stream-index': '002',
      }),
    replies: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enables message replies (threads)',
        title: 'Replies',
        'x-stream-index': '003',
      }),
    typing_events: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enables or disables typing events',
        title: 'Typing events',
        'x-stream-index': '001',
      }),
    uploads: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enables or disables file uploads',
        title: 'Uploads',
        'x-stream-index': '005',
      }),
    url_enrichment: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enables or disables URL enrichment',
        title: 'URL Enrichment',
        'x-stream-index': '006',
      }),
  })
  .openapi({ description: 'Channel configuration overrides', required: [] })
  .openapi('ChannelConfigRequest')

const ThresholdsRequestSchema: z.ZodType<ThresholdsRequestType> = z
  .lazy(() =>
    z
      .object({
        explicit: LabelThresholdsRequestSchema.exactOptional().openapi({
          description: 'Thresholds for explicit messages',
          title: 'Explicit',
          'x-stream-index': '001',
        }),
        spam: LabelThresholdsRequestSchema.exactOptional().openapi({
          description: 'Thresholds for spam',
          title: 'Spam',
          'x-stream-index': '002',
        }),
        toxic: LabelThresholdsRequestSchema.exactOptional().openapi({
          description: 'Thresholds for toxic messages',
          title: 'Toxic',
          'x-stream-index': '003',
        }),
      })
      .openapi({
        description: 'Sets thresholds for AI moderation',
        title: 'Auto moderation thresholds',
        required: [],
      }),
  )
  .openapi('ThresholdsRequest')

const CommandRequestSchema = z
  .object({
    args: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Arguments help text, shown in commands auto-completion',
        title: 'Arguments',
        'x-stream-index': '006',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description, shown in commands auto-completion',
        title: 'Description',
        'x-stream-index': '005',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique command name', title: 'Name', 'x-stream-index': '004' }),
    set: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Set name used for grouping commands',
        title: 'Set',
        'x-stream-index': '007',
      }),
  })
  .nullable()
  .openapi({ description: 'Represents custom chat command', title: 'Command', required: [] })
  .openapi('CommandRequest')

const ChannelConfigWithInfoRequestSchema = z
  .object({
    automod: z.enum(['disabled', 'simple', 'AI']).openapi({ 'x-stream-index': '001.002.017' }),
    automod_behavior: z
      .enum(['flag', 'block'])
      .exactOptional()
      .openapi({ 'x-stream-index': '001.002.018' }),
    automod_thresholds: ThresholdsRequestSchema.exactOptional().openapi({
      'x-stream-index': '001.002.021',
    }),
    blocklist: z.string().exactOptional().openapi({ 'x-stream-index': '001.002.019' }),
    blocklist_behavior: z
      .enum(['flag', 'block'])
      .exactOptional()
      .openapi({ 'x-stream-index': '001.002.020' }),
    commands: z
      .array(CommandRequestSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '001.003' }),
    connect_events: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.004' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '001.001.003' }),
    custom_events: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.012' }),
    grants: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({
        title: 'Grants',
        'x-stream-index': '002',
        'x-stream-map': {
          description: 'List of grants modifiers that apply to a role',
          key: 'role',
          title: 'Grants',
        },
      }),
    max_message_length: z
      .number()
      .max(20000)
      .exactOptional()
      .openapi({ 'x-stream-index': '001.002.016' }),
    message_retention: z.string().exactOptional().openapi({ 'x-stream-index': '001.002.015' }),
    mutes: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.009' }),
    name: z.string().exactOptional().openapi({ 'x-stream-index': '001.002.001' }),
    push_notifications: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.013' }),
    quotes: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.008' }),
    reactions: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.006' }),
    read_events: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.003' }),
    reminders: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.014' }),
    replies: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.007' }),
    search: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.005' }),
    typing_events: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.002' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '001.001.004' }),
    uploads: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.010' }),
    url_enrichment: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.002.011' }),
  })
  .openapi({ required: ['automod'] })
  .openapi('ChannelConfigWithInfoRequest')

const ChannelCreatedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at'],
    title: 'ChannelCreatedEvent',
    'x-stream-is-event': true,
  })
  .openapi('ChannelCreatedEvent')

const ChannelDeletedEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '003.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '003.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '003.003' }),
    cid: z.string().openapi({ 'x-stream-index': '003.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.002' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '001.001' }),
    type: z.string().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'ChannelDeletedEvent',
    'x-stream-is-event': true,
  })
  .openapi('ChannelDeletedEvent')

const ChannelExportRequestSchema = z
  .object({
    cid: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel ID', title: 'ID', 'x-stream-index': '002' }),
    messages_since: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date to export messages since',
        title: 'Messages since',
        'x-stream-index': '004',
      }),
    messages_until: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date to export messages until',
        title: 'Messages until',
        'x-stream-index': '005',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel type', title: 'Type', 'x-stream-index': '001' }),
  })
  .openapi({ title: 'Channel Export', required: [] })
  .openapi('ChannelExportRequest')

const ChannelFrozenEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '002.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '002.003' }),
    cid: z.string().openapi({ 'x-stream-index': '002.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
  })
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'ChannelFrozenEvent',
    'x-stream-is-event': true,
  })
  .openapi('ChannelFrozenEvent')

const ChannelMemberRequestSchema = z
  .object({
    ban_expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Expiration date of the ban',
        title: 'Ban expires',
        'x-stream-index': '015',
      }),
    banned: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether member is banned this channel or not',
        title: 'Banned',
        'x-stream-index': '014',
      }),
    channel_role: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Role of the member in the channel',
        title: 'Channel Role',
        'x-stream-index': '019',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '010',
      }),
    deleted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '012' }),
    invite_accepted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date when invite was accepted',
        title: 'Invited accepted at',
        'x-stream-index': '008',
      }),
    invite_rejected_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date when invite was rejected',
        title: 'Invited rejected at',
        'x-stream-index': '009',
      }),
    invited: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether member was invited or not',
        title: 'Invited',
        'x-stream-index': '007',
      }),
    is_moderator: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether member is channel moderator or not',
        title: 'Is moderator',
        'x-stream-index': '006',
      }),
    role: z
      .enum(['member', 'moderator', 'admin', 'owner'])
      .exactOptional()
      .openapi({
        description:
          'Permission level of the member in the channel (DEPRECATED: use channel_role instead)',
        title: 'Role',
        'x-stream-index': '018',
      }),
    shadow_banned: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether member is shadow banned in this channel or not',
        title: 'Shadow banned',
        'x-stream-index': '017',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of the last update',
        title: 'Updated at',
        'x-stream-index': '011',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '005' }),
    user_id: z.string().exactOptional().openapi({ title: 'User ID', 'x-stream-index': '004' }),
  })
  .nullable()
  .openapi({ title: 'Channel member', required: [] })
  .openapi('ChannelMemberRequest')

const ChannelRequestSchema = z
  .looseObject({
    auto_translation_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enable or disable auto translation',
        title: 'Auto translation',
        'x-stream-index': '007',
      }),
    auto_translation_language: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Switch auto translation language',
        title: 'Auto translation language',
        'x-stream-index': '008',
      }),
    config_overrides: ChannelConfigRequestSchema.exactOptional().openapi({
      'x-stream-index': '026',
    }),
    created_by: UserObjectRequestSchema.exactOptional(),
    disabled: z.boolean().exactOptional().openapi({ 'x-stream-index': '016' }),
    frozen: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Freeze or unfreeze the channel',
        title: 'Frozen',
        'x-stream-index': '015',
      }),
    members: z
      .array(ChannelMemberRequestSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '020' }),
    own_capabilities: z.array(z.number()).exactOptional().openapi({ 'x-stream-index': '027' }),
    team: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Team the channel belongs to (if multi-tenant mode is enabled)',
        title: 'Team',
        'x-stream-index': '006',
      }),
    truncated_at: z.array(z.number()).exactOptional().openapi({ 'x-stream-index': '014' }),
    truncated_by: z.array(z.number()).exactOptional().openapi({ 'x-stream-index': '013' }),
    truncated_by_id: z.string().exactOptional().openapi({ 'x-stream-index': '012' }),
  })
  .openapi({ required: [] })
  .openapi('ChannelRequest')

const PaginationParamsRequestSchema = z
  .object({
    id_gt: z.number().exactOptional().openapi({ 'x-stream-index': '004' }),
    id_gte: z.number().exactOptional().openapi({ 'x-stream-index': '003' }),
    id_lt: z.number().exactOptional().openapi({ 'x-stream-index': '006' }),
    id_lte: z.number().exactOptional().openapi({ 'x-stream-index': '005' }),
    limit: z.number().min(0).exactOptional().openapi({ 'x-stream-index': '001' }),
    offset: z.number().exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: [] })
  .openapi('PaginationParamsRequest')

const MessagePaginationParamsRequestSchema = z
  .object({
    created_at_after: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '008' }),
    created_at_after_or_equal: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '007' }),
    created_at_around: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '012' }),
    created_at_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '010' }),
    created_at_before_or_equal: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '009' }),
    id_around: z.string().exactOptional().openapi({ 'x-stream-index': '011' }),
    id_gt: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
    id_gte: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    id_lt: z.string().exactOptional().openapi({ 'x-stream-index': '006' }),
    id_lte: z.string().exactOptional().openapi({ 'x-stream-index': '005' }),
    limit: z.number().min(0).exactOptional().openapi({ 'x-stream-index': '001' }),
    offset: z.number().exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: [] })
  .openapi('MessagePaginationParamsRequest')

const ChannelGetOrCreateRequestSchema = z
  .object({
    client_id: z.string().exactOptional().openapi({ 'x-stream-index': '001.002' }),
    connection_id: z.string().exactOptional().openapi({ 'x-stream-index': '001.003' }),
    data: ChannelRequestSchema.exactOptional().openapi({ 'x-stream-index': '004' }),
    members: PaginationParamsRequestSchema.exactOptional().openapi({ 'x-stream-index': '009' }),
    messages: MessagePaginationParamsRequestSchema.exactOptional().openapi({
      'x-stream-index': '008',
    }),
    presence: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Fetch user presence info',
        title: 'Presence',
        'x-stream-index': '007',
      }),
    state: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Refresh channel state', title: 'State', 'x-stream-index': '006' }),
    watch: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Start watching the channel',
        title: 'Watch',
        'x-stream-index': '005',
      }),
    watchers: PaginationParamsRequestSchema.exactOptional().openapi({ 'x-stream-index': '010' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ChannelGetOrCreateRequest')

const ChannelHiddenEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '003.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '003.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '003.003' }),
    cid: z.string().openapi({ 'x-stream-index': '003.001' }),
    clear_history: z.boolean().openapi({ 'x-stream-index': '001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '004.002' }),
    type: z.string().openapi({ 'x-stream-index': '004.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({
    required: ['clear_history', 'cid', 'channel_id', 'channel_type', 'type', 'created_at'],
    title: 'ChannelHiddenEvent',
    'x-stream-is-event': true,
  })
  .openapi('ChannelHiddenEvent')

const ChannelKickedEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '002.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '002.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '002.003' }),
    cid: z.string().openapi({ 'x-stream-index': '002.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
  })
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'ChannelKickedEvent',
    'x-stream-is-event': true,
  })
  .openapi('ChannelKickedEvent')

const MessageSchema: z.ZodType<MessageType> = z
  .lazy(() =>
    z
      .looseObject({
        attachments: z
          .array(AttachmentSchema)
          .openapi({
            description: 'Array of message attachments',
            title: 'Message attachments',
            'x-stream-docs-page-id': 'message_format#attachment-format',
            'x-stream-index': '011',
          }),
        before_message_send_failed: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether `before_message_send webhook` failed or not. Field is only accessible in push webhook',
            title: 'Before Message Send Failed',
            'x-stream-docs-page-id': 'before_message_send_webhook',
            'x-stream-index': '041',
          }),
        cid: z
          .string()
          .openapi({
            description: 'Channel unique identifier in <type>:<id> format',
            title: 'Channel CID',
            'x-stream-index': '025',
          }),
        command: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Contains provided slash command',
            title: 'Command',
            'x-stream-docs-page-id': 'custom_commands_webhook',
            'x-stream-index': '006',
          }),
        created_at: z.iso
          .datetime({ offset: true })
          .openapi({
            description: 'Date/time of creation',
            title: 'Created at',
            'x-stream-index': '027',
          }),
        deleted_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'Date/time of deletion',
            title: 'Deleted at',
            'x-stream-index': '029',
          }),
        html: z
          .string()
          .openapi({
            description:
              'Contains HTML markup of the message. Can only be set when using server-side API',
            title: 'HTML content',
            'x-stream-index': '007',
          }),
        i18n: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              'Object with translations. Key `language` contains the original language key. Other keys contain translations',
            title: 'Internationalization info',
            'x-stream-docs-page-id': 'translation',
            'x-stream-index': '039',
          }),
        id: z
          .string()
          .openapi({
            description: 'Message ID is unique string identifier of the message',
            title: 'ID',
            'x-stream-index': '002',
          }),
        image_labels: z
          .record(z.string(), z.array(z.string()))
          .exactOptional()
          .openapi({
            description: 'Contains image moderation information',
            title: 'Image moderation labels',
            'x-stream-index': '035',
          }),
        latest_reactions: z
          .array(ReactionSchema)
          .openapi({
            description: 'List of 10 latest reactions to this message',
            title: 'Latest reactions',
            'x-stream-index': '012',
          }),
        mentioned_users: z
          .array(UserObjectSchema)
          .openapi({
            description: 'List of mentioned users',
            title: 'Mentioned Users',
            'x-stream-index': '038',
          }),
        mml: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Should be empty if `text` is provided. Can only be set when using server-side API',
            title: 'Messaging Markup Language',
            'x-stream-docs-page-id': 'mml_overview',
            'x-stream-index': '005',
          }),
        own_reactions: z
          .array(ReactionSchema)
          .openapi({
            description: 'List of 10 latest reactions of authenticated user to this message',
            title: 'Own reactions',
            'x-stream-index': '013',
          }),
        parent_id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'ID of parent message (thread)',
            title: 'Parent message ID',
            'x-stream-docs-page-id': 'threads',
            'x-stream-index': '017',
          }),
        pin_expires: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'Date when pinned message expires',
            title: 'Pin expiration date',
            'x-stream-docs-page-id': 'pinned_messages',
            'x-stream-index': '046',
          }),
        pinned: z
          .boolean()
          .openapi({
            description: 'Whether message is pinned or not',
            title: 'Pinned',
            'x-stream-docs-page-id': 'pinned_messages',
            'x-stream-index': '042',
          }),
        pinned_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'Date when message got pinned',
            title: 'Pinned at',
            'x-stream-docs-page-id': 'pinned_messages',
            'x-stream-index': '043',
          }),
        pinned_by: UserObjectSchema.exactOptional().openapi({
          description: 'Contains user who pinned the message',
          title: 'Pinned by',
          'x-stream-docs-page-id': 'pinned_messages',
          'x-stream-index': '045',
        }),
        quoted_message: MessageSchema.exactOptional().openapi({
          description: 'Contains quoted message',
          title: 'Quoted message',
          'x-stream-docs-page-id': 'threads#quote-message',
          'x-stream-index': '022',
        }),
        quoted_message_id: z
          .string()
          .exactOptional()
          .openapi({
            title: 'ID of quoted message',
            'x-stream-docs-page-id': 'threads#quote-message',
            'x-stream-index': '021',
          }),
        reaction_counts: z
          .record(z.string(), z.number())
          .openapi({
            description:
              'An object containing number of reactions of each type. Key: reaction type (string), value: number of reactions (int)',
            title: 'Reaction counts',
            'x-stream-index': '014',
          }),
        reaction_scores: z
          .record(z.string(), z.number())
          .openapi({
            description:
              'An object containing scores of reactions of each type. Key: reaction type (string), value: total score of reactions (int)',
            title: 'Reaction scores',
            'x-stream-index': '015',
          }),
        reply_count: z
          .number()
          .openapi({
            description: 'Number of replies to this message',
            title: 'Reply count',
            'x-stream-index': '020',
          }),
        shadowed: z
          .boolean()
          .openapi({
            description: 'Whether the message was shadowed or not',
            title: 'Shadowed',
            'x-stream-docs-page-id': 'moderation#shadow-ban',
            'x-stream-index': '031',
          }),
        show_in_channel: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether thread reply should be shown in the channel as well',
            title: 'Show in channel',
            'x-stream-docs-page-id': 'threads',
            'x-stream-index': '019',
          }),
        silent: z
          .boolean()
          .openapi({
            description: 'Whether message is silent or not',
            title: 'Silent',
            'x-stream-index': '040',
          }),
        text: z
          .string()
          .openapi({
            description: 'Text of the message. Should be empty if `mml` is provided',
            title: 'Text',
            'x-stream-index': '004',
          }),
        thread_participants: z
          .array(UserObjectSchema)
          .exactOptional()
          .openapi({
            description: 'List of users who participate in thread',
            title: 'Thread participants',
            'x-stream-docs-page-id': 'threads#quote-message',
            'x-stream-index': '024',
          }),
        type: z
          .enum(['regular', 'ephemeral', 'error', 'reply', 'system', 'deleted'])
          .openapi({
            description: 'Contains type of the message',
            title: 'Message Type',
            'x-stream-docs-page-id': 'message_format#message-types',
            'x-stream-index': '008',
          }),
        updated_at: z.iso
          .datetime({ offset: true })
          .openapi({
            description: 'Date/time of the last update',
            title: 'Updated at',
            'x-stream-index': '028',
          }),
        user: UserObjectSchema.exactOptional().openapi({
          description: 'Sender of the message. Required when using server-side API',
          title: 'User object',
          'x-stream-index': '010',
        }),
      })
      .nullable()
      .openapi({
        description: 'Represents any chat message',
        required: [
          'id',
          'text',
          'html',
          'type',
          'attachments',
          'latest_reactions',
          'own_reactions',
          'reaction_counts',
          'reaction_scores',
          'reply_count',
          'cid',
          'created_at',
          'updated_at',
          'shadowed',
          'mentioned_users',
          'silent',
          'pinned',
        ],
        title: 'Message',
        'x-stream-docs-page-id': 'send_message',
      }),
  )
  .openapi('Message')

const ChannelMessagesSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    messages: z.array(MessageSchema).openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: ['messages'] })
  .openapi('ChannelMessages')

const ChannelMuteSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '007' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '009',
      }),
    expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of mute expiration',
        title: 'Expires',
        'x-stream-index': '008',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of the last update',
        title: 'Updated at',
        'x-stream-index': '010',
      }),
    user: UserObjectSchema.exactOptional().openapi({
      description: 'Owner of channel mute',
      title: 'User',
      'x-stream-index': '005',
    }),
  })
  .nullable()
  .openapi({ required: ['created_at', 'updated_at'] })
  .openapi('ChannelMute')

const ChannelResponseRequestSchema = z
  .looseObject({
    auto_translation_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether auto translation is enabled or not',
        title: 'Auto translation',
        'x-stream-index': '021',
      }),
    auto_translation_language: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Language to translate to when auto translation is active',
        title: 'Auto translation language',
        'x-stream-index': '022',
      }),
    cid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel CID (<type>:<id>)', title: 'CID', 'x-stream-index': '005' }),
    config: ChannelConfigWithInfoRequestSchema.exactOptional().openapi({
      description: 'Channel configuration',
      title: 'Config',
      'x-stream-index': '017',
    }),
    cooldown: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Cooldown period after sending each message',
        title: 'Cooldown',
        'x-stream-index': '024',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '008',
      }),
    created_by: UserObjectRequestSchema.exactOptional().openapi({
      description: 'Creator of the channel',
      title: 'Created by',
      'x-stream-index': '011',
    }),
    deleted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of deletion',
        title: 'Deleted at',
        'x-stream-index': '010',
      }),
    disabled: z.boolean().exactOptional().openapi({ 'x-stream-index': '013' }),
    frozen: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether channel is frozen or not',
        title: 'Frozen',
        'x-stream-index': '012',
      }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this channel is hidden by current user or not',
        title: 'Hidden',
        'x-stream-index': '026',
      }),
    hide_messages_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date since when the message history is accessible',
        title: 'Hide messages before',
        'x-stream-index': '023',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel unique ID', title: 'ID', 'x-stream-index': '003' }),
    last_message_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date of the last message sent',
        title: 'Last message at',
        'x-stream-index': '006',
      }),
    member_count: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Number of members in the channel',
        title: 'Member count',
        'x-stream-index': '015',
      }),
    members: z
      .array(ChannelMemberRequestSchema)
      .exactOptional()
      .openapi({
        description: 'List of channel members (max 100)',
        title: 'Members',
        'x-stream-index': '014',
      }),
    mute_expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date of mute expiration',
        title: 'Mute expires at',
        'x-stream-index': '019',
      }),
    muted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this channel is muted or not',
        title: 'Muted',
        'x-stream-index': '018',
      }),
    own_capabilities: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of channel capabilities of authenticated user',
        title: 'Own Capabilities',
        'x-stream-index': '025',
      }),
    team: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Team the channel belongs to (multi-tenant only)',
        title: 'Team',
        'x-stream-index': '020',
      }),
    truncated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date of the latest truncation of the channel',
        title: 'Truncated At',
        'x-stream-index': '027',
      }),
    truncated_by: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '028' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Type of the channel',
        title: 'Type',
        'x-stream-docs-page-id': 'channel_features',
        'x-stream-index': '004',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of the last update',
        title: 'Updated at',
        'x-stream-index': '009',
      }),
  })
  .openapi({ description: 'Represents channel in chat', title: 'Channel', required: [] })
  .openapi('ChannelResponseRequest')

const ChannelMuteRequestSchema = z
  .object({
    channel: ChannelResponseRequestSchema.exactOptional().openapi({ 'x-stream-index': '007' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '009',
      }),
    expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of mute expiration',
        title: 'Expires',
        'x-stream-index': '008',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of the last update',
        title: 'Updated at',
        'x-stream-index': '010',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({
      description: 'Owner of channel mute',
      title: 'User',
      'x-stream-index': '005',
    }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ChannelMuteRequest')

const ChannelMutedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at'],
    title: 'ChannelMutedEvent',
    'x-stream-is-event': true,
  })
  .openapi('ChannelMutedEvent')

const PendingMessageSchema = z
  .object({
    channel: ChannelSchema.exactOptional().openapi({ 'x-stream-index': '007' }),
    message: MessageSchema.exactOptional().openapi({
      description: 'The message',
      title: 'Message',
      'x-stream-index': '009',
    }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional data attached to the pending message. This data is discarded once the pending message is committed.',
        title: 'Metadata',
        'x-stream-index': '010',
      }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('PendingMessage')

const ReadSchema = z
  .object({
    last_read: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002' }),
    unread_messages: z.number().openapi({ 'x-stream-index': '003' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['last_read', 'unread_messages'] })
  .openapi('Read')

const ChannelStateResponseSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
    duration: z.string().openapi({ 'x-stream-index': '002.001' }),
    hidden: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.009' }),
    hide_messages_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '001.010' }),
    members: z.array(ChannelMemberSchema).openapi({ 'x-stream-index': '001.007' }),
    membership: ChannelMemberSchema.exactOptional().openapi({ 'x-stream-index': '001.008' }),
    messages: z.array(MessageSchema).openapi({ 'x-stream-index': '001.002' }),
    pending_messages: z
      .array(PendingMessageSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '001.011' }),
    pinned_messages: z.array(MessageSchema).openapi({ 'x-stream-index': '001.003' }),
    read: z.array(ReadSchema).exactOptional().openapi({ 'x-stream-index': '001.006' }),
    watcher_count: z.number().exactOptional().openapi({ 'x-stream-index': '001.004' }),
    watchers: z.array(UserObjectSchema).exactOptional().openapi({ 'x-stream-index': '001.005' }),
  })
  .nullable()
  .openapi({ required: ['messages', 'pinned_messages', 'members', 'duration'] })
  .openapi('ChannelStateResponse')

const ChannelStateResponseFieldsSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    hidden: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this channel is hidden or not',
        title: 'Hidden',
        'x-stream-index': '009',
      }),
    hide_messages_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Messages before this date are hidden from the user',
        title: 'Hide messages before',
        'x-stream-index': '010',
      }),
    members: z
      .array(ChannelMemberSchema)
      .openapi({
        description: 'List of channel members',
        title: 'Members',
        'x-stream-index': '007',
      }),
    membership: ChannelMemberSchema.exactOptional().openapi({
      description: 'Current user membership object',
      title: 'Membership',
      'x-stream-index': '008',
    }),
    messages: z
      .array(MessageSchema)
      .openapi({
        description: 'List of channel messages',
        title: 'Message',
        'x-stream-index': '002',
      }),
    pending_messages: z
      .array(PendingMessageSchema)
      .exactOptional()
      .openapi({
        description: 'Pending messages that this user has sent',
        title: 'Pending messages',
        'x-stream-index': '011',
      }),
    pinned_messages: z
      .array(MessageSchema)
      .openapi({
        description: 'List of pinned messages in the channel',
        title: 'Pinned messages',
        'x-stream-docs-page-id': 'pinned_messages',
        'x-stream-index': '003',
      }),
    read: z
      .array(ReadSchema)
      .exactOptional()
      .openapi({ description: 'List of read states', title: 'Read', 'x-stream-index': '006' }),
    watcher_count: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Number of channel watchers',
        title: 'Watcher count',
        'x-stream-index': '004',
      }),
    watchers: z
      .array(UserObjectSchema)
      .exactOptional()
      .openapi({
        description: 'List of user who is watching the channel',
        title: 'Watchers',
        'x-stream-index': '005',
      }),
  })
  .openapi({ required: ['messages', 'pinned_messages', 'members'] })
  .openapi('ChannelStateResponseFields')

const ChannelStopWatchingRequestSchema = z
  .object({
    client_id: z.string().exactOptional().openapi({ 'x-stream-index': '001.002' }),
    connection_id: z.string().exactOptional().openapi({ 'x-stream-index': '001.003' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ChannelStopWatchingRequest')

const ChannelTruncatedEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '001.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '001.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '001.003' }),
    cid: z.string().openapi({ 'x-stream-index': '001.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.002' }),
    type: z.string().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({
    required: ['cid', 'channel_id', 'channel_type', 'type', 'created_at'],
    title: 'ChannelTruncatedEvent',
    'x-stream-is-event': true,
  })
  .openapi('ChannelTruncatedEvent')

const PolicyRequest_1Schema = z
  .object({
    action: z.enum(['Deny', 'Allow']).openapi({ title: 'Action', 'x-stream-index': '001' }),
    name: z
      .string()
      .openapi({
        description: 'User-friendly policy name',
        title: 'Name',
        'x-stream-index': '002',
      }),
    owner: z
      .boolean()
      .openapi({
        description: 'Whether policy applies to resource owner or not',
        title: 'Owner',
        'x-stream-index': '005',
      }),
    priority: z
      .number()
      .min(1)
      .max(999)
      .openapi({ description: 'Policy priority', title: 'Priority', 'x-stream-index': '006' }),
    resources: z
      .array(z.string())
      .openapi({
        description: 'List of resources to apply policy to',
        title: 'Resources',
        'x-stream-index': '003',
      }),
    roles: z
      .array(z.string())
      .openapi({
        description: 'List of roles to apply policy to',
        title: 'Roles',
        'x-stream-index': '004',
      }),
  })
  .openapi({ required: ['action', 'name', 'resources', 'roles', 'owner', 'priority'] })
  .openapi('PolicyRequest_1')

const ChannelTypeConfigSchema = z
  .object({
    automod: z.enum(['disabled', 'simple', 'AI']).openapi({ 'x-stream-index': '003.002.017' }),
    automod_behavior: z.enum(['flag', 'block']).openapi({ 'x-stream-index': '003.002.018' }),
    automod_thresholds: ThresholdsSchema.exactOptional().openapi({
      'x-stream-index': '003.002.021',
    }),
    blocklist: z.string().exactOptional().openapi({ 'x-stream-index': '003.002.019' }),
    blocklist_behavior: z
      .enum(['flag', 'block'])
      .exactOptional()
      .openapi({ 'x-stream-index': '003.002.020' }),
    commands: z
      .array(CommandSchema)
      .openapi({
        description: 'List of commands that channel supports',
        title: 'Commands',
        'x-stream-index': '003.003',
      }),
    connect_events: z.boolean().openapi({ 'x-stream-index': '003.002.004' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '003.001.003' }),
    custom_events: z.boolean().openapi({ 'x-stream-index': '003.002.012' }),
    grants: z.record(z.string(), z.array(z.string())).openapi({ 'x-stream-index': '002' }),
    max_message_length: z.number().max(20000).openapi({ 'x-stream-index': '003.002.016' }),
    message_retention: z.string().openapi({ 'x-stream-index': '003.002.015' }),
    mutes: z.boolean().openapi({ 'x-stream-index': '003.002.009' }),
    name: z.string().openapi({ 'x-stream-index': '003.002.001' }),
    permissions: z.array(PolicyRequest_1Schema).openapi({ 'x-stream-index': '001' }),
    push_notifications: z.boolean().openapi({ 'x-stream-index': '003.002.013' }),
    quotes: z.boolean().openapi({ 'x-stream-index': '003.002.008' }),
    reactions: z.boolean().openapi({ 'x-stream-index': '003.002.006' }),
    read_events: z.boolean().openapi({ 'x-stream-index': '003.002.003' }),
    reminders: z.boolean().openapi({ 'x-stream-index': '003.002.014' }),
    replies: z.boolean().openapi({ 'x-stream-index': '003.002.007' }),
    search: z.boolean().openapi({ 'x-stream-index': '003.002.005' }),
    typing_events: z.boolean().openapi({ 'x-stream-index': '003.002.002' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '003.001.004' }),
    uploads: z.boolean().openapi({ 'x-stream-index': '003.002.010' }),
    url_enrichment: z.boolean().openapi({ 'x-stream-index': '003.002.011' }),
  })
  .nullable()
  .openapi({
    required: [
      'permissions',
      'grants',
      'created_at',
      'updated_at',
      'name',
      'typing_events',
      'read_events',
      'connect_events',
      'search',
      'reactions',
      'replies',
      'quotes',
      'mutes',
      'uploads',
      'url_enrichment',
      'custom_events',
      'push_notifications',
      'reminders',
      'message_retention',
      'max_message_length',
      'automod',
      'automod_behavior',
      'commands',
    ],
  })
  .openapi('ChannelTypeConfig')

const ChannelUnFrozenEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '002.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '002.003' }),
    cid: z.string().openapi({ 'x-stream-index': '002.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
  })
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'ChannelUnFrozenEvent',
    'x-stream-is-event': true,
  })
  .openapi('ChannelUnFrozenEvent')

const ChannelUnmutedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at'],
    title: 'ChannelUnmutedEvent',
    'x-stream-is-event': true,
  })
  .openapi('ChannelUnmutedEvent')

const ChannelUpdatedEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '004.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '004.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '004.003' }),
    cid: z.string().openapi({ 'x-stream-index': '004.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '003.002' }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
    type: z.string().openapi({ 'x-stream-index': '003.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '005.001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'ChannelUpdatedEvent',
    'x-stream-is-event': true,
  })
  .openapi('ChannelUpdatedEvent')

const ChannelVisibleEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '001.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '001.003' }),
    cid: z.string().openapi({ 'x-stream-index': '001.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '003.002' }),
    type: z.string().openapi({ 'x-stream-index': '003.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({
    required: ['cid', 'channel_id', 'channel_type', 'type', 'created_at'],
    title: 'ChannelVisibleEvent',
    'x-stream-is-event': true,
  })
  .openapi('ChannelVisibleEvent')

const ChannelsResponseSchema = z
  .object({
    channels: z
      .array(ChannelStateResponseFieldsSchema)
      .openapi({ description: 'List of channels', title: 'Channels', 'x-stream-index': '001' }),
    duration: z.string().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({ required: ['channels', 'duration'], title: 'Channels list' })
  .openapi('ChannelsResponse')

const CheckPushRequestSchema = z
  .object({
    apn_template: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Push message template for APN',
        title: 'APN template',
        'x-stream-docs-page-id': 'push_template',
        'x-stream-index': '002',
      }),
    firebase_data_template: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Push message data template for Firebase',
        title: 'Firebase data template',
        'x-stream-docs-page-id': 'push_template',
        'x-stream-index': '004',
      }),
    firebase_template: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Push message template for Firebase',
        title: 'Firebase template',
        'x-stream-docs-page-id': 'push_template',
        'x-stream-index': '003',
      }),
    message_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Message ID to send push notification for',
        title: 'Message ID',
        'x-stream-index': '001',
      }),
    push_provider_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of push provider',
        title: 'Name of push provider',
        'x-stream-index': '007',
      }),
    push_provider_type: z
      .enum(['firebase', 'apn', 'huawei', 'xiaomi'])
      .exactOptional()
      .openapi({
        description: 'Push provider type',
        title: 'Type of push provider',
        'x-stream-index': '006',
      }),
    skip_devices: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Don't require existing devices to render templates",
        title: 'Skip devices',
        'x-stream-index': '005',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '008.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '008.001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('CheckPushRequest')

const DeviceErrorInfoSchema = z
  .object({
    error_message: z.string().openapi({ 'x-stream-index': '003' }),
    provider: z.string().openapi({ 'x-stream-index': '001' }),
    provider_name: z.string().openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: ['provider', 'provider_name', 'error_message'] })
  .openapi('DeviceErrorInfo')

const CheckPushResponseSchema = z
  .object({
    device_errors: z
      .record(z.string(), DeviceErrorInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Object with device errors',
        title: 'Device errors',
        'x-stream-index': '001',
        'x-stream-map': { key: 'device_id' },
      }),
    duration: z.string().openapi({ 'x-stream-index': '007.001' }),
    general_errors: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of general errors',
        title: 'General errors',
        'x-stream-index': '002',
      }),
    rendered_apn_template: z
      .string()
      .exactOptional()
      .openapi({ title: 'Rendered APN template', 'x-stream-index': '004' }),
    rendered_firebase_template: z
      .string()
      .exactOptional()
      .openapi({ title: 'Rendered Firebase template', 'x-stream-index': '005' }),
    rendered_message: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ title: 'Rendered message', 'x-stream-index': '006' }),
    skip_devices: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Don't require existing devices to render templates",
        title: 'Skip devices',
        'x-stream-index': '003',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('CheckPushResponse')

const CheckSQSRequestSchema = z
  .object({
    sqs_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'AWS SQS access key', title: 'SQS key', 'x-stream-index': '002' }),
    sqs_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'AWS SQS key secret', title: 'SQS secret', 'x-stream-index': '003' }),
    sqs_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'AWS SQS endpoint URL', title: 'SQS URL', 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('CheckSQSRequest')

const CheckSQSResponseSchema = z
  .object({
    data: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'Error data', title: 'Data', 'x-stream-index': '003' }),
    duration: z.string().openapi({ 'x-stream-index': '004.001' }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error text', title: 'Error', 'x-stream-index': '002' }),
    status: z
      .enum(['ok', 'error'])
      .openapi({ description: 'Validation result', title: 'Status', 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['status', 'duration'] })
  .openapi('CheckSQSResponse')

const CommitMessageRequestSchema = z.object({}).nullable().openapi('CommitMessageRequest')

const ConfigRequestSchema = z
  .object({
    app_certificate: z.string().openapi({ 'x-stream-index': '002' }),
    app_id: z.string().openapi({ 'x-stream-index': '001' }),
    default_role: z
      .enum(['attendee', 'publisher', 'subscriber', 'admin'])
      .exactOptional()
      .openapi({ 'x-stream-index': '003' }),
    role_map: z.record(z.string(), z.string()).exactOptional().openapi({ 'x-stream-index': '004' }),
  })
  .openapi({ required: ['app_id', 'app_certificate'] })
  .openapi('ConfigRequest')

const DeviceFieldsSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Device ID', title: 'ID', 'x-stream-index': '004' }),
    push_provider: z
      .enum(['firebase', 'apn', 'huawei', 'xiaomi'])
      .exactOptional()
      .openapi({ title: 'Push provider', 'x-stream-index': '001' }),
    push_provider_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the push provider configuration',
        title: 'Push provider name',
        'x-stream-index': '003',
      }),
  })
  .openapi({ required: [] })
  .openapi('DeviceFields')

const ConnectRequestSchema = z
  .object({
    device: DeviceFieldsSchema.exactOptional().openapi({ 'x-stream-index': '001.002' }),
    user_details: UserObjectSchema.openapi({ 'x-stream-index': '001.001' }),
  })
  .openapi({ required: ['user_details'] })
  .openapi('ConnectRequest')

const CreateBlockListRequestSchema = z
  .object({
    name: z
      .string()
      .max(255)
      .openapi({ description: 'Block list name', title: 'Name', 'x-stream-index': '001' }),
    words: z
      .array(z.string())
      .openapi({ description: 'List of words to block', title: 'Words', 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({
    description: 'Block list contains restricted words',
    required: ['name', 'words'],
    title: 'Block list',
    'x-stream-docs-page-id': 'block_lists',
  })
  .openapi('CreateBlockListRequest')

const CreateCallRequestSchema = z
  .object({
    id: z.string().openapi({ 'x-stream-index': '004' }),
    options: z.record(z.string(), z.any()).exactOptional().openapi({ 'x-stream-index': '005' }),
    type: z.enum(['audio', 'video']).openapi({ 'x-stream-index': '003' }),
    user: UserObjectRequestSchema.exactOptional().openapi({
      description: '**Server-side only**. User object which server acts upon',
      title: 'User',
      'x-stream-index': '006.002',
    }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: '**Server-side only**. User ID which server acts upon',
        title: 'User ID',
        'x-stream-index': '006.001',
      }),
  })
  .nullable()
  .openapi({ required: ['type', 'id'] })
  .openapi('CreateCallRequest')

const CreateCallResponseSchema = z
  .object({
    agora_app_id: z.string().exactOptional().openapi({ 'x-stream-index': '002.003' }),
    agora_uid: z.number().exactOptional().openapi({ 'x-stream-index': '002.002' }),
    call: CallSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '003.001',
      }),
    token: z.string().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({ required: ['token', 'duration'] })
  .openapi('CreateCallResponse')

const CreateCampaignRequestSchema = z
  .object({ campaign: CampaignDataRequestSchema.openapi({ 'x-stream-index': '001' }) })
  .nullable()
  .openapi({ required: ['campaign'] })
  .openapi('CreateCampaignRequest')

const CreateCampaignResponseSchema = z
  .object({
    campaign: CampaignSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('CreateCampaignResponse')

const PolicyRequestSchema = z
  .object({
    action: z
      .enum(['Deny', 'Allow'])
      .exactOptional()
      .openapi({ title: 'Action', 'x-stream-index': '001' }),
    name: z
      .string()
      .openapi({
        description: 'User-friendly policy name',
        title: 'Name',
        'x-stream-index': '002',
      }),
    owner: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether policy applies to resource owner or not',
        title: 'Owner',
        'x-stream-index': '005',
      }),
    priority: z
      .number()
      .min(1)
      .max(999)
      .openapi({ description: 'Policy priority', title: 'Priority', 'x-stream-index': '006' }),
    resources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of resources to apply policy to',
        title: 'Resources',
        'x-stream-index': '003',
      }),
    roles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of roles to apply policy to',
        title: 'Roles',
        'x-stream-index': '004',
      }),
  })
  .openapi({ required: ['name', 'priority'] })
  .openapi('PolicyRequest')

const CreateChannelTypeRequestSchema = z
  .object({
    automod: z
      .enum(['disabled', 'simple', 'AI'])
      .openapi({
        description: 'Enables automatic message moderation',
        title: 'Auto moderation',
        'x-stream-index': '015',
      }),
    automod_behavior: z
      .enum(['flag', 'block'])
      .exactOptional()
      .openapi({
        description: 'Sets behavior of automatic moderation',
        title: 'Auto moderation behavior',
        'x-stream-index': '016',
      }),
    blocklist: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the blocklist to use',
        title: 'Blocklist',
        'x-stream-index': '020',
      }),
    blocklist_behavior: z
      .enum(['flag', 'block'])
      .exactOptional()
      .openapi({
        description: 'Sets behavior of blocklist',
        title: 'Blocklist behavior',
        'x-stream-index': '021',
      }),
    commands: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of commands that channel supports',
        title: 'Commands',
        'x-stream-index': '017',
      }),
    connect_events: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Connect events support',
        title: 'Connect events',
        'x-stream-index': '004',
      }),
    custom_events: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enables custom events',
        title: 'Custom events',
        'x-stream-index': '011',
      }),
    grants: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ 'x-stream-index': '019' }),
    max_message_length: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Number of maximum message characters',
        title: 'Maximum message length',
        'x-stream-index': '014',
      }),
    message_retention: z
      .string()
      .exactOptional()
      .openapi({
        description: "Number of days to keep messages. 'infinite' disables retention",
        title: 'Message retention',
        'x-stream-index': '013',
      }),
    mutes: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables mutes', title: 'Mutes', 'x-stream-index': '008' }),
    name: z
      .string()
      .openapi({ description: 'Channel type name', title: 'Name', 'x-stream-index': '001' }),
    permissions: z
      .array(PolicyRequestSchema)
      .exactOptional()
      .openapi({
        description: 'List of permissions for the channel type',
        title: 'Permissions',
        'x-stream-index': '018',
      }),
    push_notifications: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enables push notifications',
        title: 'Push notifications',
        'x-stream-index': '012',
      }),
    reactions: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enables message reactions',
        title: 'Reactions',
        'x-stream-index': '005',
      }),
    read_events: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Read events support',
        title: 'Read events',
        'x-stream-index': '003',
      }),
    replies: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enables message replies (threads)',
        title: 'Replies',
        'x-stream-index': '006',
      }),
    search: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables message search', title: 'Search', 'x-stream-index': '007' }),
    typing_events: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Typing events support',
        title: 'Typing events',
        'x-stream-index': '002',
      }),
    uploads: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables file uploads', title: 'Uploads', 'x-stream-index': '009' }),
    url_enrichment: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enables URL enrichment',
        title: 'URL enrichment',
        'x-stream-index': '010',
      }),
  })
  .nullable()
  .openapi({ required: ['name', 'automod'] })
  .openapi('CreateChannelTypeRequest')

const CreateChannelTypeResponseSchema = z
  .object({
    automod: z.enum(['disabled', 'simple', 'AI']).openapi({ 'x-stream-index': '001.001.017' }),
    automod_behavior: z.enum(['flag', 'block']).openapi({ 'x-stream-index': '001.001.018' }),
    automod_thresholds: ThresholdsSchema.exactOptional().openapi({
      'x-stream-index': '001.001.021',
    }),
    blocklist: z.string().exactOptional().openapi({ 'x-stream-index': '001.001.019' }),
    blocklist_behavior: z
      .enum(['flag', 'block'])
      .exactOptional()
      .openapi({ 'x-stream-index': '001.001.020' }),
    commands: z.array(z.string()).openapi({ 'x-stream-index': '001.003' }),
    connect_events: z.boolean().openapi({ 'x-stream-index': '001.001.004' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002.003' }),
    custom_events: z.boolean().openapi({ 'x-stream-index': '001.001.012' }),
    duration: z.string().openapi({ 'x-stream-index': '004.001' }),
    grants: z.record(z.string(), z.array(z.string())).openapi({ 'x-stream-index': '003' }),
    max_message_length: z.number().max(20000).openapi({ 'x-stream-index': '001.001.016' }),
    message_retention: z.string().openapi({ 'x-stream-index': '001.001.015' }),
    mutes: z.boolean().openapi({ 'x-stream-index': '001.001.009' }),
    name: z.string().openapi({ 'x-stream-index': '001.001.001' }),
    permissions: z.array(PolicyRequest_1Schema).openapi({ 'x-stream-index': '002' }),
    push_notifications: z.boolean().openapi({ 'x-stream-index': '001.001.013' }),
    quotes: z.boolean().openapi({ 'x-stream-index': '001.001.008' }),
    reactions: z.boolean().openapi({ 'x-stream-index': '001.001.006' }),
    read_events: z.boolean().openapi({ 'x-stream-index': '001.001.003' }),
    reminders: z.boolean().openapi({ 'x-stream-index': '001.001.014' }),
    replies: z.boolean().openapi({ 'x-stream-index': '001.001.007' }),
    search: z.boolean().openapi({ 'x-stream-index': '001.001.005' }),
    typing_events: z.boolean().openapi({ 'x-stream-index': '001.001.002' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002.004' }),
    uploads: z.boolean().openapi({ 'x-stream-index': '001.001.010' }),
    url_enrichment: z.boolean().openapi({ 'x-stream-index': '001.001.011' }),
  })
  .nullable()
  .openapi({
    required: [
      'name',
      'typing_events',
      'read_events',
      'connect_events',
      'search',
      'reactions',
      'replies',
      'quotes',
      'mutes',
      'uploads',
      'url_enrichment',
      'custom_events',
      'push_notifications',
      'reminders',
      'message_retention',
      'max_message_length',
      'automod',
      'automod_behavior',
      'created_at',
      'updated_at',
      'commands',
      'permissions',
      'grants',
      'duration',
    ],
  })
  .openapi('CreateChannelTypeResponse')

const CreateCommandRequestSchema = z
  .object({
    args: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: 'Arguments help text, shown in commands auto-completion',
        title: 'Arguments',
        'x-stream-index': '003',
      }),
    description: z
      .string()
      .max(255)
      .openapi({
        description: 'Description, shown in commands auto-completion',
        title: 'Description',
        'x-stream-index': '002',
      }),
    name: z
      .string()
      .min(1)
      .max(255)
      .openapi({ description: 'Unique command name', title: 'Name', 'x-stream-index': '001' }),
    set: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: 'Set name used for grouping commands',
        title: 'Set',
        'x-stream-index': '004',
      }),
  })
  .nullable()
  .openapi({
    description: 'Represents custom chat command',
    required: ['name', 'description'],
    title: 'Command',
  })
  .openapi('CreateCommandRequest')

const CreateCommandResponseSchema = z
  .object({
    command: CommandSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('CreateCommandResponse')

const CreateDeviceRequestSchema = z
  .object({
    id: z.string().min(1).max(255).exactOptional().openapi({ 'x-stream-index': '001' }),
    push_provider: z
      .enum(['firebase', 'apn', 'huawei', 'xiaomi'])
      .exactOptional()
      .openapi({ 'x-stream-index': '002' }),
    push_provider_name: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    user: UserObjectRequestSchema.exactOptional().openapi({
      description: '**Server-side only**. User object which server acts upon',
      title: 'User',
      'x-stream-index': '004.002',
    }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: '**Server-side only**. User ID which server acts upon',
        title: 'User ID',
        'x-stream-index': '004.001',
      }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('CreateDeviceRequest')

const CreateImportRequestSchema = z
  .object({
    mode: z.enum(['insert', 'upsert']).exactOptional().openapi({ 'x-stream-index': '002' }),
    path: z.string().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['path'] })
  .openapi('CreateImportRequest')

const ImportTaskHistorySchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '007' }),
    next_state: z.string().openapi({ 'x-stream-index': '006' }),
    prev_state: z.string().openapi({ 'x-stream-index': '005' }),
  })
  .nullable()
  .openapi({ required: ['prev_state', 'next_state', 'created_at'] })
  .openapi('ImportTaskHistory')

const ImportTaskSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '011' }),
    history: z.array(ImportTaskHistorySchema).openapi({ 'x-stream-index': '010' }),
    id: z.string().openapi({ 'x-stream-index': '003' }),
    mode: z.string().openapi({ 'x-stream-index': '006' }),
    path: z.string().openapi({ 'x-stream-index': '005' }),
    result: z.any().exactOptional().openapi({ 'x-stream-index': '009' }),
    size: z.number().exactOptional().openapi({ 'x-stream-index': '007' }),
    state: z.string().openapi({ 'x-stream-index': '008' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '012' }),
  })
  .openapi({ required: ['id', 'path', 'mode', 'state', 'history', 'created_at', 'updated_at'] })
  .openapi('ImportTask')

const CreateImportResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    import_task: ImportTaskSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('CreateImportResponse')

const CreateImportURLRequestSchema = z
  .object({ filename: z.string().exactOptional().openapi({ 'x-stream-index': '001' }) })
  .nullable()
  .openapi({ required: [] })
  .openapi('CreateImportURLRequest')

const CreateImportURLResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '003.001',
      }),
    path: z.string().openapi({ 'x-stream-index': '001' }),
    upload_url: z.string().openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: ['path', 'upload_url', 'duration'] })
  .openapi('CreateImportURLResponse')

const CreateRoleRequestSchema = z
  .object({
    name: z
      .string()
      .max(64)
      .openapi({ description: 'Role name', title: 'Name', 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['name'] })
  .openapi('CreateRoleRequest')

const RoleSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '004',
      }),
    custom: z
      .boolean()
      .openapi({
        description: 'Whether this is a custom role or built-in',
        title: 'Custom',
        'x-stream-index': '002',
      }),
    name: z
      .string()
      .openapi({ description: 'Unique role name', title: 'Name', 'x-stream-index': '001' }),
    scopes: z
      .array(z.string())
      .openapi({
        description:
          'List of scopes where this role is currently present. `.app` means that role is present in app-level grants',
        title: 'Scopes',
        'x-stream-index': '003',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of the last update',
        title: 'Updated at',
        'x-stream-index': '005',
      }),
  })
  .openapi({ required: ['name', 'custom', 'scopes', 'created_at', 'updated_at'] })
  .openapi('Role')

const CreateRoleResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001.001',
      }),
    role: RoleSchema.openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: ['duration', 'role'] })
  .openapi('CreateRoleResponse')

const SegmentDataRequestSchema = z
  .object({
    description: z.string().max(256).exactOptional().openapi({ 'x-stream-index': '002' }),
    filter: z.record(z.string(), z.any()).openapi({ 'x-stream-index': '003.002' }),
    name: z.string().max(128).openapi({ 'x-stream-index': '001' }),
    type: z.enum(['user', 'channel']).openapi({ 'x-stream-index': '003.001' }),
  })
  .openapi({ required: ['name', 'type', 'filter'] })
  .openapi('SegmentDataRequest')

const CreateSegmentRequestSchema = z
  .object({ segment: SegmentDataRequestSchema.openapi({ 'x-stream-index': '001' }) })
  .nullable()
  .openapi({ required: ['segment'] })
  .openapi('CreateSegmentRequest')

const SegmentSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '005' }),
    description: z.string().max(256).openapi({ 'x-stream-index': '010.002' }),
    filter: z.record(z.string(), z.any()).openapi({ 'x-stream-index': '010.003.002' }),
    id: z.string().openapi({ 'x-stream-index': '003' }),
    in_use: z.boolean().openapi({ 'x-stream-index': '009' }),
    name: z.string().max(128).openapi({ 'x-stream-index': '010.001' }),
    size: z.number().openapi({ 'x-stream-index': '008' }),
    status: z.string().openapi({ 'x-stream-index': '007' }),
    type: z.enum(['user', 'channel']).openapi({ 'x-stream-index': '010.003.001' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '006' }),
  })
  .openapi({
    required: [
      'id',
      'created_at',
      'updated_at',
      'status',
      'size',
      'in_use',
      'name',
      'description',
      'type',
      'filter',
    ],
  })
  .openapi('Segment')

const CreateSegmentResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    segment: SegmentSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('CreateSegmentResponse')

const DeactivateUserRequestSchema = z
  .object({
    created_by_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the user who deactivated the user',
        title: 'Created by ID',
        'x-stream-index': '003',
      }),
    mark_messages_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Makes messages appear to be deleted',
        title: 'Mark messages deleted',
        'x-stream-index': '002',
      }),
    user_id: z.string().openapi({ title: 'User ID', 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['user_id'] })
  .openapi('DeactivateUserRequest')

const DeactivateUserResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('DeactivateUserResponse')

const DeactivateUsersRequestSchema = z
  .object({
    created_by_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the user who deactivated the users',
        title: 'Created by ID',
        'x-stream-index': '003',
      }),
    mark_messages_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Makes messages appear to be deleted',
        title: 'Mark messages deleted',
        'x-stream-index': '002',
      }),
    user_ids: z
      .array(z.string())
      .openapi({
        description: 'User IDs to deactivate',
        title: 'User IDs',
        'x-stream-index': '001',
      }),
  })
  .nullable()
  .openapi({ required: ['user_ids'] })
  .openapi('DeactivateUsersRequest')

const DeactivateUsersResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    task_id: z.string().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['task_id', 'duration'] })
  .openapi('DeactivateUsersResponse')

const DeleteCampaignResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('DeleteCampaignResponse')

const DeleteChannelResponseSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '002' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('DeleteChannelResponse')

const DeleteChannelsRequestSchema = z
  .object({
    cids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'All channels that should be deleted',
        title: 'Channels CID',
        'x-stream-index': '001',
      }),
    hard_delete: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Specify if channels and all ressources should be hard deleted',
        title: 'Hard delete',
        'x-stream-index': '002',
      }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('DeleteChannelsRequest')

const DeleteChannelsResultSchema = z
  .object({
    error: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    status: z.string().openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: ['status'] })
  .openapi('DeleteChannelsResult')

const DeleteChannelsResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '003.001',
      }),
    result: z
      .record(z.string(), DeleteChannelsResultSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '001' }),
    task_id: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('DeleteChannelsResponse')

const DeleteCommandResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    name: z.string().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['name', 'duration'] })
  .openapi('DeleteCommandResponse')

const DeleteSegmentResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('DeleteSegmentResponse')

const DeleteUserResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '003.001',
      }),
    task_id: z.string().openapi({ 'x-stream-index': '002' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['task_id', 'duration'] })
  .openapi('DeleteUserResponse')

const DeleteUsersRequestSchema = z
  .object({
    conversations: z
      .enum(['soft', 'hard'])
      .exactOptional()
      .openapi({
        description:
          "Conversation channels delete mode.\nConversation channel is any channel which only has two members one of which is the user being deleted.\n\n* null or empty string - doesn't delete any conversation channels\n* soft - marks all conversation channels as deleted (same effect as Delete Channels with 'hard' option disabled)\n* hard - deletes channel and all its data completely including messages (same effect as Delete Channels with 'hard' option enabled)\n",
        title: 'Delete Conversations',
        'x-stream-index': '001.002.003',
      }),
    messages: z
      .enum(['soft', 'pruning', 'hard'])
      .exactOptional()
      .openapi({
        description:
          "Message delete mode.\n\n* null or empty string - doesn't delete user messages\n* soft - marks all user messages as deleted without removing any related message data\n* pruning - marks all user messages as deleted, nullifies message information and removes some message data such as reactions and flags\n* hard - deletes messages completely with all related information\n",
        title: 'Delete Messages',
        'x-stream-index': '001.002.002',
      }),
    new_channel_owner_id: z.string().exactOptional().openapi({ 'x-stream-index': '001.002.004' }),
    user: z
      .enum(['soft', 'pruning', 'hard'])
      .exactOptional()
      .openapi({
        description:
          "User delete mode.\n\n* soft - marks user as deleted and retains all user data\n* pruning - marks user as deleted and nullifies user information\n* hard - deletes user completely. Requires 'hard' option for messages and conversations as well\n",
        title: 'Delete User',
        'x-stream-index': '001.002.001',
      }),
    user_ids: z
      .array(z.string())
      .openapi({
        description: 'IDs of users to delete',
        title: 'User IDs',
        'x-stream-index': '001.001',
      }),
  })
  .nullable()
  .openapi({ required: ['user_ids'] })
  .openapi('DeleteUsersRequest')

const DeleteUsersResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    task_id: z.string().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['task_id', 'duration'] })
  .openapi('DeleteUsersResponse')

const DeviceSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '002.002',
      }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether device is disabled or not',
        title: 'Disabled',
        'x-stream-index': '002.003',
      }),
    disabled_reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Reason explaining why device had been disabled',
        title: 'Reason',
        'x-stream-index': '002.004',
      }),
    id: z.string().openapi({ 'x-stream-index': '002.001.004' }),
    push_provider: z.string().openapi({ 'x-stream-index': '002.001.001' }),
    push_provider_name: z.string().exactOptional().openapi({ 'x-stream-index': '002.001.003' }),
    user_id: z.string().openapi({ 'x-stream-index': '004' }),
  })
  .nullable()
  .openapi({ required: ['push_provider', 'id', 'created_at', 'user_id'], title: 'Device' })
  .openapi('Device')

const DeviceRequestSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '002.002',
      }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether device is disabled or not',
        title: 'Disabled',
        'x-stream-index': '002.003',
      }),
    disabled_reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Reason explaining why device had been disabled',
        title: 'Reason',
        'x-stream-index': '002.004',
      }),
    id: z.string().exactOptional().openapi({ 'x-stream-index': '002.001.004' }),
    push_provider: z.string().exactOptional().openapi({ 'x-stream-index': '002.001.001' }),
    push_provider_name: z.string().exactOptional().openapi({ 'x-stream-index': '002.001.003' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
  })
  .nullable()
  .openapi({ title: 'Device', required: [] })
  .openapi('DeviceRequest')

const ErrorResultSchema = z
  .object({
    description: z.any().openapi({ 'x-stream-index': '002' }),
    stacktrace: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    type: z.string().openapi({ 'x-stream-index': '001' }),
    version: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
  })
  .openapi({ required: ['type', 'description'] })
  .openapi('ErrorResult')

const UserMuteSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '009',
      }),
    expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of mute expiration',
        title: 'Expires',
        'x-stream-index': '008',
      }),
    target: UserObjectSchema.exactOptional().openapi({
      description: "User who's muted",
      title: 'Target',
      'x-stream-index': '007',
    }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of the last update',
        title: 'Updated at',
        'x-stream-index': '010',
      }),
    user: UserObjectSchema.exactOptional().openapi({
      description: 'Owner of channel mute',
      title: 'User',
      'x-stream-index': '005',
    }),
  })
  .nullable()
  .openapi({ required: ['created_at', 'updated_at'] })
  .openapi('UserMute')

const OwnUserSchema = z
  .looseObject({
    banned: z.boolean().openapi({ 'x-stream-index': '014' }),
    channel_mutes: z.array(ChannelMuteSchema).openapi({ 'x-stream-index': '026' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '007' }),
    deactivated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '012' }),
    deleted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '011' }),
    devices: z.array(DeviceSchema).openapi({ 'x-stream-index': '024' }),
    id: z.string().openapi({ 'x-stream-index': '003' }),
    invisible: z.boolean().exactOptional().openapi({ 'x-stream-index': '021' }),
    language: z.string().openapi({ 'x-stream-index': '030' }),
    last_active: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '010' }),
    latest_hidden_channels: z
      .array(z.string())
      .exactOptional()
      .openapi({ 'x-stream-index': '032' }),
    mutes: z.array(UserMuteSchema).openapi({ 'x-stream-index': '025' }),
    online: z.boolean().openapi({ 'x-stream-index': '020' }),
    push_notifications: PushNotificationSettingsSchema.exactOptional().openapi({
      'x-stream-index': '023',
    }),
    role: z.string().openapi({ 'x-stream-index': '004' }),
    teams: z.array(z.string()).exactOptional().openapi({ 'x-stream-index': '031' }),
    total_unread_count: z.number().openapi({ 'x-stream-index': '028' }),
    unread_channels: z.number().openapi({ 'x-stream-index': '029' }),
    unread_count: z.number().openapi({ 'x-stream-index': '027' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '008' }),
  })
  .openapi({
    required: [
      'id',
      'role',
      'created_at',
      'updated_at',
      'banned',
      'online',
      'devices',
      'mutes',
      'channel_mutes',
      'unread_count',
      'total_unread_count',
      'unread_channels',
      'language',
    ],
  })
  .openapi('OwnUser')

const EventSchema = z
  .looseObject({
    automoderation: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Only applicable to `message.flagged` BaseEvent.',
        title: 'Auto moderation',
        'x-stream-index': '016',
      }),
    automoderation_scores: ModerationResponseSchema.exactOptional().openapi({
      description: 'Only applicable to `message.flagged` BaseEvent.',
      title: 'Auto moderation scores',
      'x-stream-index': '017',
    }),
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '008' }),
    channel_id: z
      .string()
      .exactOptional()
      .openapi({ title: 'Channel ID', 'x-stream-index': '004' }),
    channel_type: z
      .string()
      .exactOptional()
      .openapi({ title: 'Channel type', 'x-stream-index': '005' }),
    cid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel CID (<type>:<id>)', title: 'CID', 'x-stream-index': '003' }),
    connection_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Only applicable to `health.check` BaseEvent',
        title: 'Connection ID',
        'x-stream-index': '002',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '021',
      }),
    created_by: UserObjectSchema.exactOptional().openapi({
      description:
        'User who issued moderation action. Only applicable to moderation-related events',
      title: 'Created by',
      'x-stream-index': '015',
    }),
    me: OwnUserSchema.exactOptional().openapi({ 'x-stream-index': '012' }),
    member: ChannelMemberSchema.exactOptional().openapi({ 'x-stream-index': '009' }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '006' }),
    parent_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of thread. Used in typing events',
        title: 'Parent ID',
        'x-stream-index': '018',
      }),
    reaction: ReactionSchema.exactOptional().openapi({ 'x-stream-index': '007' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Ban reason. Only applicable to `user.banned` BaseEvent',
        title: 'Reason',
        'x-stream-index': '014',
      }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '019' }),
    type: z
      .string()
      .openapi({
        description: 'Event type. To use custom BaseEvent types see Custom Events documentation',
        title: 'Type',
        'x-stream-docs-page-id': 'custom_events',
        'x-stream-index': '001',
      }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '010' }),
    user_id: z.string().exactOptional().openapi({ title: 'User ID', 'x-stream-index': '011' }),
    watcher_count: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Number of watchers who received this BaseEvent',
        title: 'Watcher count',
        'x-stream-index': '013',
      }),
  })
  .openapi({
    description: 'Represents an BaseEvent that happened in Stream Chat',
    required: ['type', 'created_at'],
    title: 'Event',
    'x-stream-docs-page-id': 'event_object',
  })
  .openapi('Event')

const ModerationResponseRequestSchema = z
  .object({
    action: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
    explicit: z.float32().exactOptional().openapi({ 'x-stream-index': '002' }),
    spam: z.float32().exactOptional().openapi({ 'x-stream-index': '003' }),
    toxic: z.float32().exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .openapi({ required: [] })
  .openapi('ModerationResponseRequest')

const UserMuteRequestSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '009',
      }),
    expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of mute expiration',
        title: 'Expires',
        'x-stream-index': '008',
      }),
    target: UserObjectRequestSchema.exactOptional().openapi({
      description: "User who's muted",
      title: 'Target',
      'x-stream-index': '007',
    }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of the last update',
        title: 'Updated at',
        'x-stream-index': '010',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({
      description: 'Owner of channel mute',
      title: 'User',
      'x-stream-index': '005',
    }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('UserMuteRequest')

const OwnUserRequestSchema = z
  .looseObject({
    banned: z.boolean().exactOptional().openapi({ 'x-stream-index': '014' }),
    channel_mutes: z
      .array(ChannelMuteRequestSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '026' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '007' }),
    deactivated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '012' }),
    deleted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '011' }),
    devices: z.array(DeviceRequestSchema).exactOptional().openapi({ 'x-stream-index': '024' }),
    id: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    invisible: z.boolean().exactOptional().openapi({ 'x-stream-index': '021' }),
    language: z.string().exactOptional().openapi({ 'x-stream-index': '030' }),
    last_active: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '010' }),
    latest_hidden_channels: z
      .array(z.string())
      .exactOptional()
      .openapi({ 'x-stream-index': '032' }),
    mutes: z.array(UserMuteRequestSchema).exactOptional().openapi({ 'x-stream-index': '025' }),
    online: z.boolean().exactOptional().openapi({ 'x-stream-index': '020' }),
    push_notifications: PushNotificationSettingsRequestSchema.exactOptional().openapi({
      'x-stream-index': '023',
    }),
    role: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
    teams: z.array(z.string()).exactOptional().openapi({ 'x-stream-index': '031' }),
    total_unread_count: z.number().exactOptional().openapi({ 'x-stream-index': '028' }),
    unread_channels: z.number().exactOptional().openapi({ 'x-stream-index': '029' }),
    unread_count: z.number().exactOptional().openapi({ 'x-stream-index': '027' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '008' }),
  })
  .openapi({ required: [] })
  .openapi('OwnUserRequest')

const MessageRequest_1Schema: z.ZodType<MessageRequest_1Type> = z
  .lazy(() =>
    z
      .looseObject({
        attachments: z
          .array(AttachmentRequestSchema)
          .exactOptional()
          .openapi({
            description: 'Array of message attachments',
            title: 'Message attachments',
            'x-stream-docs-page-id': 'message_format#attachment-format',
            'x-stream-index': '011',
          }),
        before_message_send_failed: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether `before_message_send webhook` failed or not. Field is only accessible in push webhook',
            title: 'Before Message Send Failed',
            'x-stream-docs-page-id': 'before_message_send_webhook',
            'x-stream-index': '041',
          }),
        cid: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Channel unique identifier in <type>:<id> format',
            title: 'Channel CID',
            'x-stream-index': '025',
          }),
        command: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Contains provided slash command',
            title: 'Command',
            'x-stream-docs-page-id': 'custom_commands_webhook',
            'x-stream-index': '006',
          }),
        created_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'Date/time of creation',
            title: 'Created at',
            'x-stream-index': '027',
          }),
        deleted_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'Date/time of deletion',
            title: 'Deleted at',
            'x-stream-index': '029',
          }),
        html: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Contains HTML markup of the message. Can only be set when using server-side API',
            title: 'HTML content',
            'x-stream-index': '007',
          }),
        i18n: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              'Object with translations. Key `language` contains the original language key. Other keys contain translations',
            title: 'Internationalization info',
            'x-stream-docs-page-id': 'translation',
            'x-stream-index': '039',
          }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Message ID is unique string identifier of the message',
            title: 'ID',
            'x-stream-index': '002',
          }),
        image_labels: z
          .record(z.string(), z.array(z.string()))
          .exactOptional()
          .openapi({
            description: 'Contains image moderation information',
            title: 'Image moderation labels',
            'x-stream-index': '035',
          }),
        latest_reactions: z
          .array(ReactionRequestSchema)
          .exactOptional()
          .openapi({
            description: 'List of 10 latest reactions to this message',
            title: 'Latest reactions',
            'x-stream-index': '012',
          }),
        mentioned_users: z
          .array(UserObjectRequestSchema)
          .exactOptional()
          .openapi({
            description: 'List of mentioned users',
            title: 'Mentioned Users',
            'x-stream-index': '038',
          }),
        mml: z
          .string()
          .openapi({
            description:
              'Should be empty if `text` is provided. Can only be set when using server-side API',
            title: 'Messaging Markup Language',
            'x-stream-docs-page-id': 'mml_overview',
            'x-stream-index': '005',
          }),
        own_reactions: z
          .array(ReactionRequestSchema)
          .exactOptional()
          .openapi({
            description: 'List of 10 latest reactions of authenticated user to this message',
            title: 'Own reactions',
            'x-stream-index': '013',
          }),
        parent_id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'ID of parent message (thread)',
            title: 'Parent message ID',
            'x-stream-docs-page-id': 'threads',
            'x-stream-index': '017',
          }),
        pin_expires: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'Date when pinned message expires',
            title: 'Pin expiration date',
            'x-stream-docs-page-id': 'pinned_messages',
            'x-stream-index': '046',
          }),
        pinned: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether message is pinned or not',
            title: 'Pinned',
            'x-stream-docs-page-id': 'pinned_messages',
            'x-stream-index': '042',
          }),
        pinned_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'Date when message got pinned',
            title: 'Pinned at',
            'x-stream-docs-page-id': 'pinned_messages',
            'x-stream-index': '043',
          }),
        pinned_by: UserObjectRequestSchema.exactOptional().openapi({
          description: 'Contains user who pinned the message',
          title: 'Pinned by',
          'x-stream-docs-page-id': 'pinned_messages',
          'x-stream-index': '045',
        }),
        quoted_message: MessageRequest_1Schema.exactOptional().openapi({
          description: 'Contains quoted message',
          title: 'Quoted message',
          'x-stream-docs-page-id': 'threads#quote-message',
          'x-stream-index': '022',
        }),
        quoted_message_id: z
          .string()
          .exactOptional()
          .openapi({
            title: 'ID of quoted message',
            'x-stream-docs-page-id': 'threads#quote-message',
            'x-stream-index': '021',
          }),
        reaction_counts: z
          .record(z.string(), z.number())
          .exactOptional()
          .openapi({
            description:
              'An object containing number of reactions of each type. Key: reaction type (string), value: number of reactions (int)',
            title: 'Reaction counts',
            'x-stream-index': '014',
          }),
        reaction_scores: z
          .record(z.string(), z.number())
          .exactOptional()
          .openapi({
            description:
              'An object containing scores of reactions of each type. Key: reaction type (string), value: total score of reactions (int)',
            title: 'Reaction scores',
            'x-stream-index': '015',
          }),
        reply_count: z
          .number()
          .exactOptional()
          .openapi({
            description: 'Number of replies to this message',
            title: 'Reply count',
            'x-stream-index': '020',
          }),
        shadowed: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether the message was shadowed or not',
            title: 'Shadowed',
            'x-stream-docs-page-id': 'moderation#shadow-ban',
            'x-stream-index': '031',
          }),
        show_in_channel: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether thread reply should be shown in the channel as well',
            title: 'Show in channel',
            'x-stream-docs-page-id': 'threads',
            'x-stream-index': '019',
          }),
        silent: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether message is silent or not',
            title: 'Silent',
            'x-stream-index': '040',
          }),
        text: z
          .string()
          .openapi({
            description: 'Text of the message. Should be empty if `mml` is provided',
            title: 'Text',
            'x-stream-index': '004',
          }),
        thread_participants: z
          .array(UserObjectRequestSchema)
          .exactOptional()
          .openapi({
            description: 'List of users who participate in thread',
            title: 'Thread participants',
            'x-stream-docs-page-id': 'threads#quote-message',
            'x-stream-index': '024',
          }),
        type: z
          .enum(['regular', 'ephemeral', 'error', 'reply', 'system', 'deleted'])
          .exactOptional()
          .openapi({
            description: 'Contains type of the message',
            title: 'Message Type',
            'x-stream-docs-page-id': 'message_format#message-types',
            'x-stream-index': '008',
          }),
        updated_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'Date/time of the last update',
            title: 'Updated at',
            'x-stream-index': '028',
          }),
        user: UserObjectRequestSchema.exactOptional().openapi({
          description: 'Sender of the message. Required when using server-side API',
          title: 'User object',
          'x-stream-index': '010',
        }),
      })
      .openapi({
        description: 'Represents any chat message',
        required: ['text', 'mml'],
        title: 'Message',
        'x-stream-docs-page-id': 'send_message',
      }),
  )
  .openapi('MessageRequest_1')

const EventRequestSchema = z
  .looseObject({
    automoderation: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Only applicable to `message.flagged` BaseEvent.',
        title: 'Auto moderation',
        'x-stream-index': '016',
      }),
    automoderation_scores: ModerationResponseRequestSchema.exactOptional().openapi({
      description: 'Only applicable to `message.flagged` BaseEvent.',
      title: 'Auto moderation scores',
      'x-stream-index': '017',
    }),
    channel: ChannelResponseRequestSchema.exactOptional().openapi({ 'x-stream-index': '008' }),
    channel_id: z
      .string()
      .exactOptional()
      .openapi({ title: 'Channel ID', 'x-stream-index': '004' }),
    channel_type: z
      .string()
      .exactOptional()
      .openapi({ title: 'Channel type', 'x-stream-index': '005' }),
    cid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel CID (<type>:<id>)', title: 'CID', 'x-stream-index': '003' }),
    connection_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Only applicable to `health.check` BaseEvent',
        title: 'Connection ID',
        'x-stream-index': '002',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '021',
      }),
    created_by: UserObjectRequestSchema.exactOptional().openapi({
      description:
        'User who issued moderation action. Only applicable to moderation-related events',
      title: 'Created by',
      'x-stream-index': '015',
    }),
    me: OwnUserRequestSchema.exactOptional().openapi({ 'x-stream-index': '012' }),
    member: ChannelMemberRequestSchema.exactOptional().openapi({ 'x-stream-index': '009' }),
    message: MessageRequest_1Schema.exactOptional().openapi({ 'x-stream-index': '006' }),
    parent_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of thread. Used in typing events',
        title: 'Parent ID',
        'x-stream-index': '018',
      }),
    reaction: ReactionRequestSchema.exactOptional().openapi({ 'x-stream-index': '007' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Ban reason. Only applicable to `user.banned` BaseEvent',
        title: 'Reason',
        'x-stream-index': '014',
      }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '019' }),
    type: z
      .string()
      .openapi({
        description: 'Event type. To use custom BaseEvent types see Custom Events documentation',
        title: 'Type',
        'x-stream-docs-page-id': 'custom_events',
        'x-stream-index': '001',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '010' }),
    user_id: z.string().exactOptional().openapi({ title: 'User ID', 'x-stream-index': '011' }),
    watcher_count: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Number of watchers who received this BaseEvent',
        title: 'Watcher count',
        'x-stream-index': '013',
      }),
  })
  .openapi({
    description: 'Represents an BaseEvent that happened in Stream Chat',
    required: ['type'],
    title: 'Event',
    'x-stream-docs-page-id': 'event_object',
  })
  .openapi('EventRequest')

const EventResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    event: EventSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('EventResponse')

const ExportChannelsRequestSchema = z
  .object({
    channels: z
      .array(ChannelExportRequestSchema)
      .exactOptional()
      .openapi({
        description: 'Export options for channels',
        title: 'Channels',
        'x-stream-index': '002.001',
      }),
    clear_deleted_message_text: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Set if deleted message text should be cleared',
        title: 'Clear deleted message text',
        'x-stream-index': '002.002',
      }),
    export_users: z.boolean().exactOptional().openapi({ 'x-stream-index': '002.004' }),
    include_truncated_messages: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Set if you want to include truncated messages',
        title: 'Include truncated messages',
        'x-stream-index': '002.003',
      }),
    version: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ExportChannelsRequest')

const ExportChannelsResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    task_id: z.string().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['task_id', 'duration'] })
  .openapi('ExportChannelsResponse')

const ExportChannelsResultSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'S3 path of result', title: 'Path', 'x-stream-index': '002' }),
    s3_bucket_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'S3 bucket name result',
        title: 'S3 bucket name',
        'x-stream-index': '003',
      }),
    url: z
      .string()
      .openapi({ description: 'URL of result', title: 'URL', 'x-stream-index': '001' }),
  })
  .openapi({ required: ['url'] })
  .openapi('ExportChannelsResult')

const ExportUserResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '004.001',
      }),
    messages: z.array(MessageSchema).exactOptional().openapi({ 'x-stream-index': '002' }),
    reactions: z.array(ReactionSchema).exactOptional().openapi({ 'x-stream-index': '003' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('ExportUserResponse')

const ExportUsersRequestSchema = z
  .object({ user_ids: z.array(z.string()).openapi({ 'x-stream-index': '001' }) })
  .nullable()
  .openapi({ required: ['user_ids'] })
  .openapi('ExportUsersRequest')

const ExportUsersResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    task_id: z.string().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['task_id', 'duration'] })
  .openapi('ExportUsersResponse')

const FileDeleteResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('FileDeleteResponse')

const FileUploadConfigRequestSchema = z
  .object({
    allowed_file_extensions: z
      .array(z.string())
      .exactOptional()
      .openapi({ 'x-stream-index': '001' }),
    allowed_mime_types: z.array(z.string()).exactOptional().openapi({ 'x-stream-index': '003' }),
    blocked_file_extensions: z
      .array(z.string())
      .exactOptional()
      .openapi({ 'x-stream-index': '002' }),
    blocked_mime_types: z.array(z.string()).exactOptional().openapi({ 'x-stream-index': '004' }),
  })
  .openapi({ required: [] })
  .openapi('FileUploadConfigRequest')

const OnlyUserIDRequestSchema = z
  .object({ id: z.string().openapi({ 'x-stream-index': '001' }) })
  .openapi({ required: ['id'] })
  .openapi('OnlyUserIDRequest')

const FileUploadRequestSchema = z
  .object({
    file: z
      .string()
      .exactOptional()
      .openapi({ description: 'file field', title: 'File', 'x-stream-index': '002' }),
    user: OnlyUserIDRequestSchema.exactOptional().openapi({
      description: 'user for the request **server side only**',
      title: 'User',
      'x-stream-index': '003',
    }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('FileUploadRequest')

const FileUploadResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '001.001' }),
    file: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to the uploaded asset. Should be used to put to `asset_url` attachment field',
        title: 'File',
        'x-stream-index': '002',
      }),
    thumb_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL of the file thumbnail for supported file formats. Should be put to `thumb_url` attachment field',
        title: 'Thumbnail URL',
        'x-stream-index': '003',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('FileUploadResponse')

const FirebaseConfigRequestSchema = z
  .object({
    Disabled: z.boolean().exactOptional().openapi({ writeOnly: true, 'x-stream-index': '001' }),
    apn_template: z.string().exactOptional().openapi({ 'x-stream-index': '005' }),
    credentials_json: z.string().exactOptional().openapi({ 'x-stream-index': '006' }),
    data_template: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
    notification_template: z.string().exactOptional().openapi({ 'x-stream-index': '003' }),
    server_key: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: [] })
  .openapi('FirebaseConfigRequest')

const FlagDetailsSchema = z
  .looseObject({
    automod: AutomodDetailsSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .openapi({ required: [] })
  .openapi('FlagDetails')

const FlagSchema = z
  .object({
    approved_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date of the approval',
        title: 'Approved at',
        'x-stream-index': '015',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of creation',
        title: 'Created at',
        'x-stream-index': '011',
      }),
    created_by_automod: z.boolean().openapi({ 'x-stream-index': '004' }),
    details: FlagDetailsSchema.exactOptional().openapi({ 'x-stream-index': '020' }),
    rejected_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date of the rejection',
        title: 'Rejected at',
        'x-stream-index': '016',
      }),
    reviewed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date of the review',
        title: 'Reviewed at',
        'x-stream-index': '013',
      }),
    target_message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '008' }),
    target_message_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of flagged message',
        title: 'Target Message ID',
        'x-stream-index': '007',
      }),
    target_user: UserObjectSchema.exactOptional().openapi({
      description: 'Flagged user',
      title: 'User',
      'x-stream-index': '010',
    }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date/time of the last update',
        title: 'Updated at',
        'x-stream-index': '012',
      }),
    user: UserObjectSchema.exactOptional().openapi({
      description: 'User who flagged a message or a user',
      title: 'User',
      'x-stream-index': '006',
    }),
  })
  .openapi({
    description: 'Contains information about flagged user or message',
    required: ['created_by_automod', 'created_at', 'updated_at'],
    title: 'Flag',
  })
  .openapi('Flag')

const FlagRequestSchema = z
  .object({
    target_message_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the message when reporting a message',
        title: 'Target Message ID',
        'x-stream-index': '001',
      }),
    target_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the user when reporting a user',
        title: 'Target User ID',
        'x-stream-index': '002',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '003.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('FlagRequest')

const FlagResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    flag: FlagSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('FlagResponse')

const GetApplicationResponseSchema = z
  .object({
    app: AppSchema.openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
  })
  .nullable()
  .openapi({ required: ['app', 'duration'] })
  .openapi('GetApplicationResponse')

const GetBlockListResponseSchema = z
  .object({
    blocklist: BlockListSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('GetBlockListResponse')

const GetCallTokenRequestSchema = z
  .object({
    user: UserObjectRequestSchema.exactOptional().openapi({
      description: '**Server-side only**. User object which server acts upon',
      title: 'User',
      'x-stream-index': '002.002',
    }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: '**Server-side only**. User ID which server acts upon',
        title: 'User ID',
        'x-stream-index': '002.001',
      }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('GetCallTokenRequest')

const GetCallTokenResponseSchema = z
  .object({
    agora_app_id: z.string().exactOptional().openapi({ 'x-stream-index': '001.003' }),
    agora_uid: z.number().exactOptional().openapi({ 'x-stream-index': '001.002' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    token: z.string().openapi({ 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({ required: ['token', 'duration'] })
  .openapi('GetCallTokenResponse')

const GetCommandResponseSchema = z
  .object({
    args: z.string().openapi({ 'x-stream-index': '001.006' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, 'x-stream-index': '001.001' }),
    description: z.string().openapi({ 'x-stream-index': '001.005' }),
    duration: z.string().openapi({ 'x-stream-index': '002.001' }),
    name: z.string().openapi({ 'x-stream-index': '001.004' }),
    set: z.string().openapi({ 'x-stream-index': '001.007' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, 'x-stream-index': '001.002' }),
  })
  .nullable()
  .openapi({ required: ['name', 'description', 'args', 'set', 'duration'] })
  .openapi('GetCommandResponse')

const PermissionSchema = z
  .object({
    action: z
      .string()
      .openapi({
        description: 'Action name this permission is for (e.g. SendMessage)',
        title: 'Action',
        'x-stream-index': '004',
      }),
    condition: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'MongoDB style condition which decides whether or not the permission is granted',
        title: 'Condition',
        'x-stream-index': '007',
      }),
    custom: z
      .boolean()
      .openapi({
        description: 'Whether this is a custom permission or built-in',
        title: 'Custom',
        'x-stream-index': '009',
      }),
    description: z
      .string()
      .openapi({
        description: 'Description of the permission',
        title: 'Description',
        'x-stream-index': '003',
      }),
    id: z
      .string()
      .openapi({ description: 'Unique permission ID', title: 'ID', 'x-stream-index': '001' }),
    level: z
      .enum(['app', 'channel'])
      .openapi({
        description: 'Level at which permission could be applied (app or channel)',
        title: 'Level',
        'x-stream-index': '010',
      }),
    name: z
      .string()
      .openapi({ description: 'Name of the permission', title: 'Name', 'x-stream-index': '002' }),
    owner: z
      .boolean()
      .openapi({
        description: 'Whether this permission applies to resource owner or not',
        title: 'Owner',
        'x-stream-index': '005',
      }),
    same_team: z
      .boolean()
      .openapi({
        description: 'Whether this permission applies to teammates (multi-tenancy mode only)',
        title: 'Same team',
        'x-stream-index': '006',
      }),
    tags: z
      .array(z.string())
      .openapi({
        description: 'List of tags of the permission',
        title: 'Tags',
        'x-stream-index': '011',
      }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'description',
      'action',
      'owner',
      'same_team',
      'custom',
      'level',
      'tags',
    ],
  })
  .openapi('Permission')

const GetCustomPermissionResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    permission: PermissionSchema.openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['permission', 'duration'] })
  .openapi('GetCustomPermissionResponse')

const GetExportChannelsStatusResponseSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.003' }),
    duration: z.string().openapi({ 'x-stream-index': '001.007.001' }),
    error: ErrorResultSchema.exactOptional().openapi({
      description: 'Contains task error in case of failure',
      title: 'Error',
      'x-stream-index': '003',
    }),
    result: ExportChannelsResultSchema.exactOptional().openapi({
      description: 'Contains task result in case of success',
      title: 'Result',
      'x-stream-index': '002',
    }),
    status: z.string().openapi({ 'x-stream-index': '001.002' }),
    task_id: z.string().openapi({ 'x-stream-index': '001.001' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.004' }),
  })
  .nullable()
  .openapi({ required: ['task_id', 'status', 'created_at', 'updated_at', 'duration'] })
  .openapi('GetExportChannelsStatusResponse')

const GetImportResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    import_task: ImportTaskSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('GetImportResponse')

const GetManyMessagesResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '001.002.001' }),
    messages: z
      .array(MessageSchema)
      .openapi({ description: 'List of messages', title: 'Messages', 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({ required: ['messages', 'duration'] })
  .openapi('GetManyMessagesResponse')

const GetOGResponseSchema = z
  .looseObject({
    actions: z.array(ActionSchema).exactOptional().openapi({ 'x-stream-index': '001.015' }),
    asset_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL of detected video or audio',
        title: 'Image URL',
        'x-stream-index': '001.017',
      }),
    author_icon: z.string().exactOptional().openapi({ 'x-stream-index': '001.007' }),
    author_link: z
      .string()
      .exactOptional()
      .openapi({ description: 'og:site', title: 'Author Link', 'x-stream-index': '001.006' }),
    author_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'og:site_name', title: 'Author Name', 'x-stream-index': '001.005' }),
    color: z.string().exactOptional().openapi({ 'x-stream-index': '001.003' }),
    duration: z.string().openapi({ 'x-stream-index': '002.001' }),
    fallback: z.string().exactOptional().openapi({ 'x-stream-index': '001.002' }),
    fields: z.array(FieldSchema).exactOptional().openapi({ 'x-stream-index': '001.016' }),
    footer: z.string().exactOptional().openapi({ 'x-stream-index': '001.013' }),
    footer_icon: z.string().exactOptional().openapi({ 'x-stream-index': '001.014' }),
    giphy: ImagesSchema.exactOptional().openapi({ 'x-stream-index': '001.019' }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL of detected image',
        title: 'Image URL',
        'x-stream-index': '001.011',
      }),
    og_scrape_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'extracted url from the text',
        title: 'OG Scrape URL',
        'x-stream-index': '001.020',
      }),
    original_height: z.number().exactOptional().openapi({ 'x-stream-index': '001.022' }),
    original_width: z.number().exactOptional().openapi({ 'x-stream-index': '001.021' }),
    pretext: z.string().exactOptional().openapi({ 'x-stream-index': '001.004' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'og:description', title: 'Text', 'x-stream-index': '001.010' }),
    thumb_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL of detected thumb image',
        title: 'Image URL',
        'x-stream-index': '001.012',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'og:title', title: 'Title', 'x-stream-index': '001.008' }),
    title_link: z
      .string()
      .exactOptional()
      .openapi({ description: 'og:url', title: 'Title Link', 'x-stream-index': '001.009' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Attachment type, could be empty, image, audio or video',
        title: 'Type',
        'x-stream-index': '001.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'], title: 'Get OG Attachment', 'x-stream-docs-page-id': 'og' })
  .openapi('GetOGResponse')

const LimitInfoSchema = z
  .object({
    limit: z
      .number()
      .openapi({
        description: 'The maximum number of calls allowed for the time window',
        title: 'Limit',
        'x-stream-index': '001',
      }),
    remaining: z
      .number()
      .openapi({
        description: 'The number of remaining calls in the current window',
        title: 'Remaining',
        'x-stream-index': '002',
      }),
    reset: z
      .number()
      .openapi({
        description: 'The Unix timestamp of the next window',
        title: 'Reset',
        'x-stream-index': '003',
      }),
  })
  .openapi({
    required: ['limit', 'remaining', 'reset'],
    title: 'Rate Limit info',
    'x-stream-docs-page-id': 'rate_limits',
  })
  .openapi('LimitInfo')

const GetRateLimitsResponseSchema = z
  .object({
    android: z
      .record(z.string(), LimitInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Map of endpoint rate limits for the Android platform',
        title: 'Android',
        'x-stream-index': '002',
        'x-stream-map': {
          description: 'The name of the endpoint for which the limits apply',
          key: 'endpoint',
          title: 'Endpoint name',
        },
      }),
    duration: z.string().openapi({ 'x-stream-index': '005.001' }),
    ios: z
      .record(z.string(), LimitInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Map of endpoint rate limits for the iOS platform',
        title: 'iOS',
        'x-stream-index': '003',
        'x-stream-map': {
          description: 'The name of the endpoint for which the limits apply',
          key: 'endpoint',
          title: 'Endpoint name',
        },
      }),
    server_side: z
      .record(z.string(), LimitInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Map of endpoint rate limits for the server-side platform',
        title: 'Server-side',
        'x-stream-index': '001',
        'x-stream-map': {
          description: 'The name of the endpoint for which the limits apply',
          key: 'endpoint',
          title: 'Endpoint name',
        },
      }),
    web: z
      .record(z.string(), LimitInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Map of endpoint rate limits for the web platform',
        title: 'Web',
        'x-stream-index': '004',
        'x-stream-map': {
          description: 'The name of the endpoint for which the limits apply',
          key: 'endpoint',
          title: 'Endpoint name',
        },
      }),
  })
  .nullable()
  .openapi({
    required: ['duration'],
    title: 'Get Rate Limits Response',
    'x-stream-docs-page-id': 'rate_limits',
  })
  .openapi('GetRateLimitsResponse')

const GetReactionsResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '002.001' }),
    reactions: z
      .array(ReactionSchema)
      .openapi({ description: 'List of reactions', title: 'Reactions', 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['reactions', 'duration'] })
  .openapi('GetReactionsResponse')

const GetRepliesResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '001.002.001' }),
    messages: z
      .array(MessageSchema)
      .openapi({ description: 'List of messages', title: 'Messages', 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({ required: ['messages', 'duration'] })
  .openapi('GetRepliesResponse')

const GetTaskResponseSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.003' }),
    duration: z.string().openapi({ 'x-stream-index': '004.001' }),
    error: ErrorResultSchema.exactOptional().openapi({
      description: 'Error produced by task',
      title: 'Error',
      'x-stream-index': '003',
    }),
    result: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description: 'Result produced by task after completion',
        title: 'Result',
        'x-stream-index': '002',
      }),
    status: z
      .string()
      .openapi({
        description: 'Current status of task',
        title: 'Status',
        'x-stream-index': '001.002',
      }),
    task_id: z
      .string()
      .openapi({ description: 'ID of task', title: 'Task ID', 'x-stream-index': '001.001' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.004' }),
  })
  .nullable()
  .openapi({
    required: ['task_id', 'status', 'created_at', 'updated_at', 'duration'],
    title: 'Get Task Response',
    'x-stream-docs-page-id': 'tasks',
  })
  .openapi('GetTaskResponse')

const GuestRequestSchema = z
  .object({ user: UserObjectRequestSchema.openapi({ 'x-stream-index': '001' }) })
  .nullable()
  .openapi({ required: ['user'] })
  .openapi('GuestRequest')

const GuestResponseSchema = z
  .object({
    access_token: z
      .string()
      .openapi({
        description: 'Authentication token to use for guest user',
        title: 'Access token',
        'x-stream-index': '002',
      }),
    duration: z.string().openapi({ 'x-stream-index': '003.001' }),
    user: UserObjectSchema.exactOptional().openapi({
      description: 'Created user object',
      title: 'User',
      'x-stream-index': '001',
    }),
  })
  .nullable()
  .openapi({ required: ['access_token', 'duration'] })
  .openapi('GuestResponse')

const HealthCheckEventSchema = z
  .object({
    cid: z.string().openapi({ 'x-stream-index': '001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '003.002' }),
    me: OwnUserSchema.exactOptional().openapi({ 'x-stream-index': '002' }),
    type: z.string().openapi({ 'x-stream-index': '003.001' }),
  })
  .openapi({
    required: ['cid', 'type', 'created_at'],
    title: 'HealthCheckEvent',
    'x-stream-is-event': true,
  })
  .openapi('HealthCheckEvent')

const HideChannelRequestSchema = z
  .object({
    clear_history: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to clear message history of the channel or not',
        title: 'Clear history',
        'x-stream-index': '001',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '003.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('HideChannelRequest')

const HideChannelResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('HideChannelResponse')

const HuaweiConfigRequestSchema = z
  .object({
    Disabled: z.boolean().exactOptional().openapi({ writeOnly: true, 'x-stream-index': '003' }),
    id: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
    secret: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: [] })
  .openapi('HuaweiConfigRequest')

const ImageSizeSchema = z
  .object({
    crop: z
      .enum(['top', 'bottom', 'left', 'right', 'center'])
      .openapi({ description: 'Crop mode', title: 'Crop', 'x-stream-index': '001' }),
    height: z
      .number()
      .openapi({ description: 'Target image height', title: 'Height', 'x-stream-index': '003' }),
    resize: z
      .enum(['clip', 'crop', 'scale', 'fill'])
      .openapi({ description: 'Resize method', title: 'Resize', 'x-stream-index': '002' }),
    width: z
      .number()
      .openapi({ description: 'Target image width', title: 'Width', 'x-stream-index': '004' }),
  })
  .openapi({ required: ['crop', 'resize', 'height', 'width'], title: 'Image size configuration' })
  .openapi('ImageSize')

const ImageSizeRequestSchema = z
  .object({
    crop: z
      .enum(['top', 'bottom', 'left', 'right', 'center'])
      .exactOptional()
      .openapi({ description: 'Crop mode', title: 'Crop', 'x-stream-index': '001' }),
    height: z
      .number()
      .exactOptional()
      .openapi({ description: 'Target image height', title: 'Height', 'x-stream-index': '003' }),
    resize: z
      .enum(['clip', 'crop', 'scale', 'fill'])
      .exactOptional()
      .openapi({ description: 'Resize method', title: 'Resize', 'x-stream-index': '002' }),
    width: z
      .number()
      .exactOptional()
      .openapi({ description: 'Target image width', title: 'Width', 'x-stream-index': '004' }),
  })
  .openapi({ title: 'Image size configuration', required: [] })
  .openapi('ImageSizeRequest')

const ImageUploadRequestSchema = z
  .object({
    file: z.string().exactOptional().openapi({ 'x-stream-index': '001.002' }),
    upload_sizes: z
      .array(ImageSizeRequestSchema)
      .exactOptional()
      .openapi({
        description: 'field with JSON-encoded array of image size configurations',
        title: 'Upload sizes',
        'x-stream-index': '002',
      }),
    user: OnlyUserIDRequestSchema.exactOptional().openapi({ 'x-stream-index': '001.003' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ImageUploadRequest')

const ImageUploadResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '001.001.001' }),
    file: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to the uploaded asset. Should be used to put to `asset_url` attachment field',
        title: 'File',
        'x-stream-index': '001.002',
      }),
    thumb_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL of the file thumbnail for supported file formats. Should be put to `thumb_url` attachment field',
        title: 'Thumbnail URL',
        'x-stream-index': '001.003',
      }),
    upload_sizes: z.array(ImageSizeSchema).exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('ImageUploadResponse')

const ListBlockListResponseSchema = z
  .object({
    blocklists: z.array(BlockListSchema).openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
  })
  .nullable()
  .openapi({ required: ['blocklists', 'duration'] })
  .openapi('ListBlockListResponse')

const ListChannelTypesResponseSchema = z
  .object({
    channel_types: z
      .record(z.string(), ChannelTypeConfigSchema)
      .openapi({
        description: 'Object with all channel types',
        title: 'Channel types',
        'x-stream-index': '001',
        'x-stream-map': {
          description: 'Channel type config object',
          key: 'channel_type',
          title: 'Channel type',
        },
      }),
    duration: z.string().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({ required: ['channel_types', 'duration'] })
  .openapi('ListChannelTypesResponse')

const ListCommandsResponseSchema = z
  .object({
    commands: z.array(CommandSchema).openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
  })
  .nullable()
  .openapi({ required: ['commands', 'duration'] })
  .openapi('ListCommandsResponse')

const ListDevicesResponseSchema = z
  .object({
    devices: z
      .array(DeviceSchema)
      .openapi({ description: 'List of devices', title: 'Devices', 'x-stream-index': '001' }),
    duration: z.string().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({ required: ['devices', 'duration'] })
  .openapi('ListDevicesResponse')

const ListImportsResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    import_tasks: z.array(ImportTaskSchema).openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['import_tasks', 'duration'] })
  .openapi('ListImportsResponse')

const ListPermissionsResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    permissions: z.array(PermissionSchema).openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['permissions', 'duration'] })
  .openapi('ListPermissionsResponse')

const ListPushProvidersResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    push_providers: z.array(PushProviderSchema).openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['push_providers', 'duration'] })
  .openapi('ListPushProvidersResponse')

const ListRolesResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    roles: z.array(RoleSchema).openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['roles', 'duration'] })
  .openapi('ListRolesResponse')

const MarkChannelsReadRequestSchema = z
  .object({
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '002.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('MarkChannelsReadRequest')

const MarkReadRequestSchema = z
  .object({
    message_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the message that is considered last read by client',
        title: 'Message ID',
        'x-stream-index': '001',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '003.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('MarkReadRequest')

const MarkReadResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '002.001' }),
    event: EventSchema.exactOptional().openapi({
      description: 'Mark read event',
      title: 'Event',
      'x-stream-index': '001',
    }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('MarkReadResponse')

const MarkUnreadRequestSchema = z
  .object({
    message_id: z
      .string()
      .openapi({
        description: 'ID of the message from where the channel is marked unread',
        title: 'Message ID',
        'x-stream-index': '001',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '003.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .nullable()
  .openapi({ required: ['message_id'] })
  .openapi('MarkUnreadRequest')

const MemberAddedEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '004.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '004.003' }),
    cid: z.string().openapi({ 'x-stream-index': '004.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '003.002' }),
    member: ChannelMemberSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
    type: z.string().openapi({ 'x-stream-index': '003.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '005.001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'MemberAddedEvent',
    'x-stream-is-event': true,
  })
  .openapi('MemberAddedEvent')

const MemberRemovedEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '003.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '003.003' }),
    cid: z.string().openapi({ 'x-stream-index': '003.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.002' }),
    member: ChannelMemberSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
    type: z.string().openapi({ 'x-stream-index': '002.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '004.001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'MemberRemovedEvent',
    'x-stream-is-event': true,
  })
  .openapi('MemberRemovedEvent')

const MemberUpdatedEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '005.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '005.003' }),
    cid: z.string().openapi({ 'x-stream-index': '005.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '003.002' }),
    member: ChannelMemberSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
    type: z.string().openapi({ 'x-stream-index': '003.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '004.001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'MemberUpdatedEvent',
    'x-stream-is-event': true,
  })
  .openapi('MemberUpdatedEvent')

const MembersResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '002.001' }),
    members: z
      .array(ChannelMemberSchema)
      .openapi({ description: 'List of found members', title: 'Members', 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['members', 'duration'] })
  .openapi('MembersResponse')

const MessageActionRequestSchema = z
  .object({
    ID: z.string().exactOptional().openapi({ writeOnly: true, 'x-stream-index': '001' }),
    form_data: z
      .record(z.string(), z.string())
      .openapi({
        description: 'Data to execute command with',
        title: 'Form data',
        'x-stream-index': '002',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '003.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .nullable()
  .openapi({ required: ['form_data'] })
  .openapi('MessageActionRequest')

const MessageDeletedEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '003.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '003.003' }),
    cid: z.string().openapi({ 'x-stream-index': '003.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '006.002' }),
    hard_delete: z.boolean().openapi({ 'x-stream-index': '002.001' }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '005.001' }),
    thread_participants: z
      .array(UserObjectSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '006.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '004.001' }),
  })
  .nullable()
  .openapi({
    required: ['hard_delete', 'cid', 'channel_id', 'channel_type', 'type', 'created_at'],
    title: 'MessageDeletedEvent',
    'x-stream-is-event': true,
  })
  .openapi('MessageDeletedEvent')

const MessageFlagSchema = z
  .object({
    approved_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '009' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '005' }),
    created_by_automod: z.boolean().openapi({ 'x-stream-index': '001' }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '004' }),
    moderation_result: MessageModerationResultSchema.exactOptional().openapi({
      'x-stream-index': '002',
    }),
    rejected_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '010' }),
    reviewed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '007' }),
    reviewed_by: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '008' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '006' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003' }),
  })
  .nullable()
  .openapi({ required: ['created_by_automod', 'created_at', 'updated_at'] })
  .openapi('MessageFlag')

const MessageFlaggedEventSchema = z
  .object({
    cid: z.string().openapi({ 'x-stream-index': '001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '005.002' }),
    flag: FlagSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '002.001' }),
    thread_participants: z
      .array(UserObjectSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '002.002' }),
    type: z.string().openapi({ 'x-stream-index': '005.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '004' }),
  })
  .nullable()
  .openapi({
    required: ['cid', 'type', 'created_at'],
    title: 'MessageFlaggedEvent',
    'x-stream-is-event': true,
  })
  .openapi('MessageFlaggedEvent')

const MessageNewEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '005.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '005.003' }),
    cid: z.string().openapi({ 'x-stream-index': '005.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '004.002' }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '006.001' }),
    thread_participants: z
      .array(UserObjectSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '004.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
    watcher_count: z.number().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({
    required: ['watcher_count', 'type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'MessageNewEvent',
    'x-stream-is-event': true,
  })
  .openapi('MessageNewEvent')

const MessageReadEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '002.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '002.003' }),
    cid: z.string().openapi({ 'x-stream-index': '002.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '004.002' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '003.001' }),
    type: z.string().openapi({ 'x-stream-index': '004.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({
    required: ['cid', 'channel_id', 'channel_type', 'type', 'created_at'],
    title: 'MessageReadEvent',
    'x-stream-is-event': true,
  })
  .openapi('MessageReadEvent')

const MessageRequestSchema = z
  .looseObject({
    attachments: z
      .array(AttachmentRequestSchema)
      .openapi({
        description: 'Array of message attachments',
        title: 'Message attachments',
        'x-stream-docs-page-id': 'message_format#attachment-format',
        'x-stream-index': '005',
      }),
    cid: z
      .array(z.number())
      .exactOptional()
      .openapi({
        description: 'Channel unique identifier in <type>:<id> format',
        title: 'Channel CID',
        'x-stream-index': '027',
      }),
    html: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains HTML markup of the message. Can only be set when using server-side API',
        title: 'HTML content',
        'x-stream-index': '016',
      }),
    id: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: 'Message ID is unique string identifier of the message',
        title: 'ID',
        'x-stream-index': '001',
      }),
    mentioned_users: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of mentioned users',
        title: 'Mentioned Users',
        'x-stream-index': '009',
      }),
    mml: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Should be empty if `text` is provided. Can only be set when using server-side API',
        title: 'Messaging Markup Language',
        'x-stream-docs-page-id': 'mml_overview',
        'x-stream-index': '003',
      }),
    parent: z.array(z.number()).exactOptional().openapi({ 'x-stream-index': '007' }),
    parent_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of parent message (thread)',
        title: 'Parent message ID',
        'x-stream-docs-page-id': 'threads',
        'x-stream-index': '006',
      }),
    pin_expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date when pinned message expires',
        title: 'Pin expiration date',
        'x-stream-docs-page-id': 'pinned_messages',
        'x-stream-index': '035',
      }),
    pinned: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether message is pinned or not',
        title: 'Pinned',
        'x-stream-docs-page-id': 'pinned_messages',
        'x-stream-index': '034',
      }),
    pinned_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Date when message got pinned',
        title: 'Pinned at',
        'x-stream-docs-page-id': 'pinned_messages',
        'x-stream-index': '037',
      }),
    pinned_by: z
      .array(z.number())
      .exactOptional()
      .openapi({
        description: 'Contains user who pinned the message',
        title: 'Pinned by',
        'x-stream-docs-page-id': 'pinned_messages',
        'x-stream-index': '036',
      }),
    quoted_message_id: z
      .string()
      .exactOptional()
      .openapi({
        title: 'ID of quoted message',
        'x-stream-docs-page-id': 'threads#quote-message',
        'x-stream-index': '024',
      }),
    reaction_scores: z
      .array(z.number())
      .exactOptional()
      .openapi({
        description:
          'An object containing scores of reactions of each type. Key: reaction type (string), value: total score of reactions (int)',
        title: 'Reaction scores',
        'x-stream-index': '022',
      }),
    show_in_channel: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether thread reply should be shown in the channel as well',
        title: 'Show in channel',
        'x-stream-docs-page-id': 'threads',
        'x-stream-index': '008',
      }),
    silent: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether message is silent or not',
        title: 'Silent',
        'x-stream-index': '032',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Text of the message. Should be empty if `mml` is provided',
        title: 'Text',
        'x-stream-index': '002',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({
      description: 'Sender of the message. Required when using server-side API',
      title: 'User object',
      'x-stream-index': '004',
    }),
    user_id: z.string().exactOptional().openapi({ title: 'User ID', 'x-stream-index': '012' }),
  })
  .openapi({
    description: 'Represents any chat message',
    required: ['attachments'],
    title: 'Message',
    'x-stream-docs-page-id': 'send_message',
  })
  .openapi('MessageRequest')

const MessageResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('MessageResponse')

const MessageUnblockedEventSchema = z
  .object({
    cid: z.string().openapi({ 'x-stream-index': '001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '004.002' }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '002.001' }),
    thread_participants: z
      .array(UserObjectSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '002.002' }),
    type: z.string().openapi({ 'x-stream-index': '004.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .openapi({
    required: ['cid', 'type', 'created_at'],
    title: 'MessageUnblockedEvent',
    'x-stream-is-event': true,
  })
  .openapi('MessageUnblockedEvent')

const MessageUpdatedEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '005.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '005.003' }),
    cid: z.string().openapi({ 'x-stream-index': '005.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '004.002' }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
    thread_participants: z
      .array(UserObjectSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '004.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'MessageUpdatedEvent',
    'x-stream-is-event': true,
  })
  .openapi('MessageUpdatedEvent')

const MessageWithPendingMetadataResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '001.002.001' }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
    pending_message_metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Metadata attached to a message while it is pending',
        title: 'Pending message metadata',
        'x-stream-index': '002',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('MessageWithPendingMetadataResponse')

const MuteChannelRequestSchema = z
  .object({
    channel_cids: z
      .array(z.string())
      .openapi({
        description: 'Channel CIDs to mute (if multiple channels)',
        title: 'Channel CIDs',
        'x-stream-index': '002',
      }),
    expiration: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Duration of mute in milliseconds',
        title: 'Expiration',
        'x-stream-index': '003',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '004.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '004.001' }),
  })
  .nullable()
  .openapi({ required: ['channel_cid', 'channel_cids'] })
  .openapi('MuteChannelRequest')

const MuteChannelResponseSchema = z
  .object({
    channel_mute: ChannelMuteSchema.exactOptional().openapi({
      description: 'Object with channel mute (if one channel was muted)',
      title: 'Channel mute',
      'x-stream-index': '001',
    }),
    channel_mutes: z
      .array(ChannelMuteSchema)
      .exactOptional()
      .openapi({
        description: 'Object with mutes (if multiple channels were muted)',
        title: 'Channel mutes',
        'x-stream-index': '002',
      }),
    duration: z.string().openapi({ 'x-stream-index': '004.001' }),
    own_user: OwnUserSchema.exactOptional().openapi({
      description: 'Authorized user object with fresh mutes information',
      title: 'Own user',
      'x-stream-index': '003',
    }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('MuteChannelResponse')

const MuteUserRequestSchema = z
  .object({
    target_ids: z
      .array(z.string())
      .openapi({
        description: 'User IDs to mute (if multiple users)',
        title: 'Target IDs',
        'x-stream-index': '002',
      }),
    timeout: z
      .number()
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Duration of mute in minutes',
        title: 'Timeout',
        'x-stream-index': '003',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '004.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '004.001' }),
  })
  .nullable()
  .openapi({ required: ['target_id', 'target_ids'] })
  .openapi('MuteUserRequest')

const MuteUserResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '004.001' }),
    mute: UserMuteSchema.exactOptional().openapi({
      description: 'Object with user mute (if one user was muted)',
      title: 'Mute',
      'x-stream-index': '001',
    }),
    mutes: z
      .array(UserMuteSchema)
      .exactOptional()
      .openapi({
        description: 'Object with mutes (if multiple users were muted)',
        title: 'Mutes',
        'x-stream-index': '002',
      }),
    own_user: OwnUserSchema.exactOptional().openapi({
      description: 'Authorized user object with fresh mutes information',
      title: 'Own user',
      'x-stream-index': '003',
    }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('MuteUserResponse')

const NotificationAddedToChannelEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '003.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '003.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '003.003' }),
    cid: z.string().openapi({ 'x-stream-index': '003.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.002' }),
    member: ChannelMemberSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
    type: z.string().openapi({ 'x-stream-index': '002.001' }),
  })
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'NotificationAddedToChannelEvent',
    'x-stream-is-event': true,
  })
  .openapi('NotificationAddedToChannelEvent')

const NotificationChannelDeletedEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '003.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '003.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '003.003' }),
    cid: z.string().openapi({ 'x-stream-index': '003.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.002' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '001.001' }),
    type: z.string().openapi({ 'x-stream-index': '002.001' }),
  })
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'NotificationChannelDeletedEvent',
    'x-stream-is-event': true,
  })
  .openapi('NotificationChannelDeletedEvent')

const NotificationChannelMutesUpdatedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.002' }),
    me: OwnUserSchema.openapi({ 'x-stream-index': '001' }),
    type: z.string().openapi({ 'x-stream-index': '002.001' }),
  })
  .openapi({
    required: ['me', 'type', 'created_at'],
    title: 'NotificationChannelMutesUpdatedEvent',
    'x-stream-is-event': true,
  })
  .openapi('NotificationChannelMutesUpdatedEvent')

const NotificationChannelTruncatedEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '002.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '002.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '002.003' }),
    cid: z.string().openapi({ 'x-stream-index': '002.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
  })
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'NotificationChannelTruncatedEvent',
    'x-stream-is-event': true,
  })
  .openapi('NotificationChannelTruncatedEvent')

const NotificationInviteAcceptedEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '002.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '002.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '002.003' }),
    cid: z.string().openapi({ 'x-stream-index': '002.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    member: ChannelMemberSchema.exactOptional().openapi({ 'x-stream-index': '004.001' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'NotificationInviteAcceptedEvent',
    'x-stream-is-event': true,
  })
  .openapi('NotificationInviteAcceptedEvent')

const NotificationInviteRejectedEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '002.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '002.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '002.003' }),
    cid: z.string().openapi({ 'x-stream-index': '002.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    member: ChannelMemberSchema.exactOptional().openapi({ 'x-stream-index': '004.001' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'NotificationInviteRejectedEvent',
    'x-stream-is-event': true,
  })
  .openapi('NotificationInviteRejectedEvent')

const NotificationInvitedEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '002.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '002.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '002.003' }),
    cid: z.string().openapi({ 'x-stream-index': '002.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    member: ChannelMemberSchema.exactOptional().openapi({ 'x-stream-index': '004.001' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'NotificationInvitedEvent',
    'x-stream-is-event': true,
  })
  .openapi('NotificationInvitedEvent')

const NotificationMarkReadEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '003.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '003.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '003.003' }),
    cid: z.string().openapi({ 'x-stream-index': '003.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
    total_unread_count: z.number().openapi({ 'x-stream-index': '006' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
    unread_channels: z.number().openapi({ 'x-stream-index': '007' }),
    unread_count: z.number().openapi({ 'x-stream-index': '005' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '004.001' }),
  })
  .openapi({
    required: [
      'type',
      'created_at',
      'cid',
      'channel_id',
      'channel_type',
      'unread_count',
      'total_unread_count',
      'unread_channels',
    ],
    title: 'NotificationMarkReadEvent',
    'x-stream-is-event': true,
  })
  .openapi('NotificationMarkReadEvent')

const NotificationMarkUnreadEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '003.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '003.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '003.003' }),
    cid: z.string().openapi({ 'x-stream-index': '003.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
    total_unread_count: z.number().openapi({ 'x-stream-index': '006' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
    unread_channels: z.number().openapi({ 'x-stream-index': '007' }),
    unread_count: z.number().openapi({ 'x-stream-index': '005' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '004.001' }),
  })
  .openapi({
    required: [
      'type',
      'created_at',
      'cid',
      'channel_id',
      'channel_type',
      'unread_count',
      'total_unread_count',
      'unread_channels',
    ],
    title: 'NotificationMarkUnreadEvent',
    'x-stream-is-event': true,
  })
  .openapi('NotificationMarkUnreadEvent')

const NotificationMutesUpdatedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.002' }),
    me: OwnUserSchema.openapi({ 'x-stream-index': '001' }),
    type: z.string().openapi({ 'x-stream-index': '002.001' }),
  })
  .openapi({
    required: ['me', 'type', 'created_at'],
    title: 'NotificationMutesUpdatedEvent',
    'x-stream-is-event': true,
  })
  .openapi('NotificationMutesUpdatedEvent')

const NotificationNewMessageEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '004.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '004.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '004.003' }),
    cid: z.string().openapi({ 'x-stream-index': '004.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '003.002' }),
    message: MessageSchema.openapi({ 'x-stream-index': '001' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
    type: z.string().openapi({ 'x-stream-index': '003.001' }),
  })
  .openapi({
    required: ['message', 'type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'NotificationNewMessageEvent',
    'x-stream-is-event': true,
  })
  .openapi('NotificationNewMessageEvent')

const NotificationRemovedFromChannelEventSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '002.004' }),
    channel_id: z.string().openapi({ 'x-stream-index': '002.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '002.003' }),
    cid: z.string().openapi({ 'x-stream-index': '002.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    member: ChannelMemberSchema.exactOptional().openapi({ 'x-stream-index': '004.001' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .openapi({
    required: ['type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'NotificationRemovedFromChannelEvent',
    'x-stream-is-event': true,
  })
  .openapi('NotificationRemovedFromChannelEvent')

const PushConfigRequestSchema = z
  .object({
    offline_only: z.boolean().exactOptional().openapi({ 'x-stream-index': '002' }),
    version: z.enum(['v1', 'v2']).exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .openapi({ required: [] })
  .openapi('PushConfigRequest')

const PushProviderRequestSchema = z
  .object({
    apn_auth_key: z.string().exactOptional().openapi({ 'x-stream-index': '012' }),
    apn_auth_type: z.string().exactOptional().openapi({ 'x-stream-index': '017' }),
    apn_development: z.boolean().exactOptional().openapi({ 'x-stream-index': '018' }),
    apn_host: z.string().exactOptional().openapi({ 'x-stream-index': '019' }),
    apn_key_id: z.string().exactOptional().openapi({ 'x-stream-index': '013' }),
    apn_notification_template: z.string().exactOptional().openapi({ 'x-stream-index': '020' }),
    apn_p12_cert: z.string().exactOptional().openapi({ 'x-stream-index': '014' }),
    apn_team_id: z.string().exactOptional().openapi({ 'x-stream-index': '015' }),
    apn_topic: z.string().exactOptional().openapi({ 'x-stream-index': '016' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '008' }),
    description: z.string().max(128).exactOptional().openapi({ 'x-stream-index': '007' }),
    disabled_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '010' }),
    disabled_reason: z.string().max(255).exactOptional().openapi({ 'x-stream-index': '011' }),
    firebase_apn_template: z.string().exactOptional().openapi({ 'x-stream-index': '025' }),
    firebase_credentials: z.string().exactOptional().openapi({ 'x-stream-index': '022' }),
    firebase_data_template: z.string().exactOptional().openapi({ 'x-stream-index': '023' }),
    firebase_notification_template: z.string().exactOptional().openapi({ 'x-stream-index': '024' }),
    firebase_server_key: z.string().exactOptional().openapi({ 'x-stream-index': '021' }),
    huawei_app_id: z.string().exactOptional().openapi({ 'x-stream-index': '026' }),
    huawei_app_secret: z.string().exactOptional().openapi({ 'x-stream-index': '027' }),
    name: z.string().min(1).max(36).openapi({ 'x-stream-index': '005' }),
    type: z.number().exactOptional().openapi({ 'x-stream-index': '006' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '009' }),
    xiaomi_app_secret: z.string().exactOptional().openapi({ 'x-stream-index': '029' }),
    xiaomi_package_name: z.string().exactOptional().openapi({ 'x-stream-index': '028' }),
  })
  .openapi({ required: ['name'] })
  .openapi('PushProviderRequest')

const SortParamSchema = z
  .object({
    direction: z.number().exactOptional().openapi({ 'x-stream-index': '002' }),
    field: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('SortParam')

const QueryBannedUsersRequestSchema = z
  .object({
    created_at_after: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '003.006' }),
    created_at_after_or_equal: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '003.005' }),
    created_at_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '003.008' }),
    created_at_before_or_equal: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '003.007' }),
    filter_conditions: z.record(z.string(), z.any()).openapi({ 'x-stream-index': '001' }),
    limit: z.number().max(300).exactOptional().openapi({ 'x-stream-index': '004' }),
    offset: z.number().max(10000).exactOptional().openapi({ 'x-stream-index': '005' }),
    sort: z.array(SortParamSchema).exactOptional().openapi({ 'x-stream-index': '002' }),
    user: UserObjectSchema.exactOptional().openapi({
      description: '**Server-side only**. User object which server acts upon',
      title: 'User',
      'x-stream-index': '006.002',
    }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: '**Server-side only**. User ID which server acts upon',
        title: 'User ID',
        'x-stream-index': '006.001',
      }),
  })
  .openapi({ required: ['filter_conditions'] })
  .openapi('QueryBannedUsersRequest')

const QueryBannedUsersResponseSchema = z
  .object({
    bans: z.array(BanResponseSchema).openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
  })
  .nullable()
  .openapi({ required: ['bans', 'duration'] })
  .openapi('QueryBannedUsersResponse')

const QueryCampaignsRequestSchema = z
  .object({
    filter_conditions: z.record(z.string(), z.any()).openapi({ 'x-stream-index': '001' }),
    limit: z.number().min(1).max(20).exactOptional().openapi({ 'x-stream-index': '002.002' }),
    sort: CampaignSortSchema.exactOptional().openapi({ 'x-stream-index': '002.001' }),
  })
  .openapi({ required: ['filter_conditions'] })
  .openapi('QueryCampaignsRequest')

const QueryCampaignsResponseSchema = z
  .object({
    campaigns: z.array(CampaignSchema).openapi({ 'x-stream-index': '001' }),
    channels: z.record(z.string(), ChannelSchema).openapi({ 'x-stream-index': '004' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '005.001',
      }),
    segments: z.record(z.string(), SegmentSchema).openapi({ 'x-stream-index': '002' }),
    users: z.record(z.string(), UserObjectSchema).openapi({ 'x-stream-index': '003' }),
  })
  .nullable()
  .openapi({ required: ['campaigns', 'segments', 'users', 'channels', 'duration'] })
  .openapi('QueryCampaignsResponse')

const SortParamRequestSchema = z
  .object({
    direction: z.number().exactOptional().openapi({ 'x-stream-index': '002' }),
    field: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('SortParamRequest')

const QueryChannelsRequestSchema = z
  .object({
    client_id: z.string().exactOptional().openapi({ 'x-stream-index': '011.002' }),
    connection_id: z.string().exactOptional().openapi({ 'x-stream-index': '011.003' }),
    filter_conditions: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ 'x-stream-index': '001' }),
    limit: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Number of channels to limit',
        title: 'Limit',
        'x-stream-index': '008',
      }),
    member_limit: z
      .number()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description: 'Number of members to limit',
        title: 'Member limit',
        'x-stream-index': '007',
      }),
    message_limit: z
      .number()
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Number of messages to limit',
        title: 'Message limit',
        'x-stream-index': '006',
      }),
    offset: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Channel pagination offset',
        title: 'Offset',
        'x-stream-index': '009',
      }),
    presence: z.boolean().exactOptional().openapi({ title: 'Presence', 'x-stream-index': '005' }),
    sort: z
      .array(SortParamRequestSchema)
      .openapi({ description: 'List of sort parameters', title: 'Sort', 'x-stream-index': '002' }),
    state: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to update channel state or not',
        title: 'State',
        'x-stream-index': '004',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '010.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '010.001' }),
    watch: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to start watching found channels or not',
        title: 'Watch',
        'x-stream-index': '003',
      }),
  })
  .nullable()
  .openapi({
    required: ['sort'],
    title: 'Query Channels Request',
    'x-stream-docs-page-id': 'query_channels',
  })
  .openapi('QueryChannelsRequest')

const QueryMembersRequestSchema = z
  .object({
    created_at_after: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '006.010' }),
    created_at_after_or_equal: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '006.009' }),
    created_at_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '006.012' }),
    created_at_before_or_equal: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '006.011' }),
    filter_conditions: z
      .record(z.string(), z.any())
      .openapi({
        description: 'Filter to apply to members',
        title: 'Filter conditions',
        'x-stream-index': '004',
      }),
    id: z
      .string()
      .max(64)
      .exactOptional()
      .openapi({
        description: 'Channel ID to interact with',
        title: 'Channel ID',
        'x-stream-index': '002',
      }),
    limit: z
      .number()
      .min(0)
      .max(300)
      .exactOptional()
      .openapi({
        description: 'Number of records to return',
        title: 'Limit',
        'x-stream-index': '006.003',
      }),
    members: z
      .array(ChannelMemberSchema)
      .exactOptional()
      .openapi({
        description: 'List of members to search in distinct channels',
        title: 'Members',
        'x-stream-index': '003',
      }),
    offset: z
      .number()
      .max(10000)
      .exactOptional()
      .openapi({
        description: 'Number of records to offset',
        title: 'Offset',
        'x-stream-index': '006.004',
      }),
    sort: z
      .array(SortParamSchema)
      .exactOptional()
      .openapi({ description: 'Array of sort parameters', title: 'Sort', 'x-stream-index': '005' }),
    type: z
      .string()
      .max(64)
      .openapi({
        description: 'Channel type to interact with',
        title: 'Channel type',
        'x-stream-index': '001',
      }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '007.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '007.001' }),
    user_id_gt: z.string().exactOptional().openapi({ 'x-stream-index': '006.006' }),
    user_id_gte: z.string().exactOptional().openapi({ 'x-stream-index': '006.005' }),
    user_id_lt: z.string().exactOptional().openapi({ 'x-stream-index': '006.008' }),
    user_id_lte: z.string().exactOptional().openapi({ 'x-stream-index': '006.007' }),
  })
  .openapi({ required: ['type', 'filter_conditions'] })
  .openapi('QueryMembersRequest')

const QueryMessageFlagsRequestSchema = z
  .object({
    filter_conditions: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ 'x-stream-index': '001' }),
    limit: z.number().min(0).max(300).exactOptional().openapi({ 'x-stream-index': '002.003' }),
    offset: z.number().max(10000).exactOptional().openapi({ 'x-stream-index': '002.004' }),
    user: UserObjectSchema.exactOptional().openapi({
      description: '**Server-side only**. User object which server acts upon',
      title: 'User',
      'x-stream-index': '003.002',
    }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: '**Server-side only**. User ID which server acts upon',
        title: 'User ID',
        'x-stream-index': '003.001',
      }),
  })
  .openapi({ required: [] })
  .openapi('QueryMessageFlagsRequest')

const QueryMessageFlagsResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    flags: z.array(MessageFlagSchema).openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['flags', 'duration'] })
  .openapi('QueryMessageFlagsResponse')

const QueryRecipientsRequestSchema = z
  .object({
    filter_conditions: z.record(z.string(), z.any()).openapi({ 'x-stream-index': '001' }),
    limit: z.number().min(1).max(20).exactOptional().openapi({ 'x-stream-index': '002.002' }),
    sort: CampaignSortSchema.exactOptional().openapi({ 'x-stream-index': '002.001' }),
  })
  .openapi({ required: ['filter_conditions'] })
  .openapi('QueryRecipientsRequest')

const RecipientSchema = z
  .object({
    campaign_id: z.string().openapi({ 'x-stream-index': '004' }),
    channel_cid: z.string().openapi({ 'x-stream-index': '005' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '010' }),
    details: z.string().openapi({ 'x-stream-index': '009' }),
    message_id: z.string().openapi({ 'x-stream-index': '007' }),
    receiver_id: z.string().openapi({ 'x-stream-index': '006' }),
    status: z.string().openapi({ 'x-stream-index': '008' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '011' }),
  })
  .nullable()
  .openapi({
    required: [
      'campaign_id',
      'channel_cid',
      'receiver_id',
      'message_id',
      'status',
      'details',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('Recipient')

const QueryRecipientsResponseSchema = z
  .object({
    campaigns: z.record(z.string(), CampaignSchema).openapi({ 'x-stream-index': '001' }),
    channels: z.record(z.string(), ChannelSchema).openapi({ 'x-stream-index': '004' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '006.001',
      }),
    recipients: z.array(RecipientSchema).openapi({ 'x-stream-index': '005' }),
    segments: z.record(z.string(), SegmentSchema).openapi({ 'x-stream-index': '002' }),
    users: z.record(z.string(), UserObjectSchema).openapi({ 'x-stream-index': '003' }),
  })
  .nullable()
  .openapi({ required: ['campaigns', 'segments', 'users', 'channels', 'recipients', 'duration'] })
  .openapi('QueryRecipientsResponse')

const QuerySegmentsRequestSchema = z
  .object({
    filter_conditions: z.record(z.string(), z.any()).openapi({ 'x-stream-index': '001' }),
    limit: z.number().min(1).max(20).exactOptional().openapi({ 'x-stream-index': '002.002' }),
    sort: CampaignSortSchema.exactOptional().openapi({ 'x-stream-index': '002.001' }),
  })
  .openapi({ required: ['filter_conditions'] })
  .openapi('QuerySegmentsRequest')

const QuerySegmentsResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    segments: z.array(SegmentSchema).openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['segments', 'duration'] })
  .openapi('QuerySegmentsResponse')

const QueryUsersRequestSchema = z
  .object({
    client_id: z.string().exactOptional().openapi({ 'x-stream-index': '006.002' }),
    connection_id: z.string().exactOptional().openapi({ 'x-stream-index': '006.003' }),
    filter_conditions: z
      .record(z.string(), z.any())
      .openapi({
        description: 'User filters',
        title: 'Filter conditions',
        'x-stream-docs-page-id': 'query_users',
        'x-stream-index': '001',
      }),
    id_gt: z.string().exactOptional().openapi({ 'x-stream-index': '004.006' }),
    id_gte: z.string().exactOptional().openapi({ 'x-stream-index': '004.005' }),
    id_lt: z.string().exactOptional().openapi({ 'x-stream-index': '004.008' }),
    id_lte: z.string().exactOptional().openapi({ 'x-stream-index': '004.007' }),
    limit: z.number().min(0).max(100).exactOptional().openapi({ 'x-stream-index': '004.003' }),
    offset: z.number().max(1000).exactOptional().openapi({ 'x-stream-index': '004.004' }),
    presence: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Request user presence status',
        title: 'Presence',
        'x-stream-index': '003',
      }),
    sort: z
      .array(SortParamSchema)
      .openapi({ description: 'Array of sort parameters', title: 'Sort', 'x-stream-index': '002' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '005.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '005.001' }),
  })
  .openapi({ required: ['filter_conditions', 'sort'] })
  .openapi('QueryUsersRequest')

const ReactionDeletedEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '003.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '003.003' }),
    cid: z.string().openapi({ 'x-stream-index': '003.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '006.002' }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
    reaction: ReactionSchema.exactOptional().openapi({ 'x-stream-index': '002' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '005.001' }),
    thread_participants: z
      .array(UserObjectSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '006.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '004.001' }),
  })
  .nullable()
  .openapi({
    required: ['cid', 'channel_id', 'channel_type', 'type', 'created_at'],
    title: 'ReactionDeletedEvent',
    'x-stream-is-event': true,
  })
  .openapi('ReactionDeletedEvent')

const ReactionNewEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '004.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '004.003' }),
    cid: z.string().openapi({ 'x-stream-index': '004.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '006.002' }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
    reaction: ReactionSchema.exactOptional().openapi({ 'x-stream-index': '002' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '005.001' }),
    thread_participants: z
      .array(UserObjectSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '006.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .nullable()
  .openapi({
    required: ['cid', 'channel_id', 'channel_type', 'type', 'created_at'],
    title: 'ReactionNewEvent',
    'x-stream-is-event': true,
  })
  .openapi('ReactionNewEvent')

const ReactionRemovalResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '003.001',
      }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    reaction: ReactionSchema.exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('ReactionRemovalResponse')

const ReactionResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '003.001',
      }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    reaction: ReactionSchema.exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('ReactionResponse')

const ReactionUpdatedEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '004.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '004.003' }),
    cid: z.string().openapi({ 'x-stream-index': '004.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '006.002' }),
    message: MessageSchema.openapi({ 'x-stream-index': '001' }),
    reaction: ReactionSchema.openapi({ 'x-stream-index': '002' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '005.001' }),
    type: z.string().openapi({ 'x-stream-index': '006.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .nullable()
  .openapi({
    required: ['message', 'reaction', 'cid', 'channel_id', 'channel_type', 'type', 'created_at'],
    title: 'ReactionUpdatedEvent',
    'x-stream-is-event': true,
  })
  .openapi('ReactionUpdatedEvent')

const ReactivateUserRequestSchema = z
  .object({
    created_by_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "ID of the user who's reactivating the user",
        title: 'Created by ID',
        'x-stream-index': '004',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Set this field to put new name for the user',
        title: 'Name',
        'x-stream-index': '003',
      }),
    restore_messages: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Restore previously deleted messages',
        title: 'Restore messages',
        'x-stream-index': '002',
      }),
    user_id: z.string().openapi({ title: 'User ID', 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['user_id'] })
  .openapi('ReactivateUserRequest')

const ReactivateUserResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001.002.001',
      }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('ReactivateUserResponse')

const ReactivateUsersRequestSchema = z
  .object({
    created_by_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "ID of the user who's reactivating the users",
        title: 'Created by ID',
        'x-stream-index': '003',
      }),
    restore_messages: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Restore previously deleted messages',
        title: 'Restore messages',
        'x-stream-index': '002',
      }),
    user_ids: z
      .array(z.string())
      .openapi({
        description: 'User IDs to reactivate',
        title: 'User IDs',
        'x-stream-index': '001',
      }),
  })
  .nullable()
  .openapi({ required: ['user_ids'] })
  .openapi('ReactivateUsersRequest')

const ReactivateUsersResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001.002.001',
      }),
    task_id: z.string().openapi({ 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({ required: ['task_id', 'duration'] })
  .openapi('ReactivateUsersResponse')

const ResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('Response')

const RestoreUsersRequestSchema = z
  .object({ user_ids: z.array(z.string()).openapi({ 'x-stream-index': '001' }) })
  .nullable()
  .openapi({ required: ['user_ids'] })
  .openapi('RestoreUsersRequest')

const ResumeCampaignRequestSchema = z.object({}).openapi('ResumeCampaignRequest')

const ResumeCampaignResponseSchema = z
  .object({
    campaign: CampaignSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('ResumeCampaignResponse')

const ScheduleCampaignRequestSchema = z
  .object({ scheduled_for: z.number().min(0).exactOptional().openapi({ 'x-stream-index': '001' }) })
  .nullable()
  .openapi({ required: [] })
  .openapi('ScheduleCampaignRequest')

const ScheduleCampaignResponseSchema = z
  .object({
    campaign: CampaignSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('ScheduleCampaignResponse')

const SearchRequestSchema = z
  .object({
    filter_conditions: z
      .record(z.string(), z.any())
      .openapi({
        description: 'Channel filter conditions',
        title: 'Channel filter',
        'x-stream-docs-page-id': 'query_channels',
        'x-stream-index': '002',
      }),
    limit: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Number of messages to return',
        title: 'Limit',
        'x-stream-index': '004',
      }),
    message_filter_conditions: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description: 'Message filter conditions',
        title: 'Message filter',
        'x-stream-index': '003',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Pagination parameter. Cannot be used with non-zero offset.',
        title: 'Next',
        'x-stream-index': '007',
      }),
    offset: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Pagination offset. Cannot be used with sort or next.',
        title: 'Offset',
        'x-stream-index': '005',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'Search phrase', title: 'Query', 'x-stream-index': '001' }),
    sort: z
      .array(SortParamSchema)
      .exactOptional()
      .openapi({
        description: 'Sort parameters. Cannot be used with non-zero offset',
        title: 'Sort',
        'x-stream-index': '006',
      }),
  })
  .openapi({ required: ['filter_conditions'] })
  .openapi('SearchRequest')

const SearchResultMessageSchema = z
  .looseObject({
    attachments: z.array(AttachmentSchema).openapi({ 'x-stream-index': '001.011' }),
    before_message_send_failed: z
      .boolean()
      .exactOptional()
      .openapi({ 'x-stream-index': '001.041' }),
    channel: ChannelResponseSchema.exactOptional().openapi({
      description: 'Channel object',
      title: 'Channel',
      'x-stream-index': '002',
    }),
    cid: z.string().openapi({ 'x-stream-index': '001.025' }),
    command: z.string().exactOptional().openapi({ 'x-stream-index': '001.006' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.027' }),
    deleted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '001.029' }),
    html: z.string().openapi({ 'x-stream-index': '001.007' }),
    i18n: z.record(z.string(), z.string()).exactOptional().openapi({ 'x-stream-index': '001.039' }),
    id: z.string().openapi({ 'x-stream-index': '001.002' }),
    image_labels: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ 'x-stream-index': '001.035' }),
    latest_reactions: z.array(ReactionSchema).openapi({ 'x-stream-index': '001.012' }),
    mentioned_users: z.array(UserObjectSchema).openapi({ 'x-stream-index': '001.038' }),
    mml: z.string().exactOptional().openapi({ 'x-stream-index': '001.005' }),
    own_reactions: z.array(ReactionSchema).openapi({ 'x-stream-index': '001.013' }),
    parent_id: z.string().exactOptional().openapi({ 'x-stream-index': '001.017' }),
    pin_expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '001.046' }),
    pinned: z.boolean().openapi({ 'x-stream-index': '001.042' }),
    pinned_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '001.043' }),
    pinned_by: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001.045' }),
    quoted_message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '001.022' }),
    quoted_message_id: z.string().exactOptional().openapi({ 'x-stream-index': '001.021' }),
    reaction_counts: z.record(z.string(), z.number()).openapi({ 'x-stream-index': '001.014' }),
    reaction_scores: z.record(z.string(), z.number()).openapi({ 'x-stream-index': '001.015' }),
    reply_count: z.number().openapi({ 'x-stream-index': '001.020' }),
    shadowed: z.boolean().openapi({ 'x-stream-index': '001.031' }),
    show_in_channel: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.019' }),
    silent: z.boolean().openapi({ 'x-stream-index': '001.040' }),
    text: z.string().openapi({ 'x-stream-index': '001.004' }),
    thread_participants: z
      .array(UserObjectSchema)
      .exactOptional()
      .openapi({ 'x-stream-index': '001.024' }),
    type: z.string().openapi({ 'x-stream-index': '001.008' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.028' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001.010' }),
  })
  .openapi({
    required: [
      'id',
      'text',
      'html',
      'type',
      'attachments',
      'latest_reactions',
      'own_reactions',
      'reaction_counts',
      'reaction_scores',
      'reply_count',
      'cid',
      'created_at',
      'updated_at',
      'shadowed',
      'mentioned_users',
      'silent',
      'pinned',
    ],
  })
  .openapi('SearchResultMessage')

const SearchResultSchema = z
  .object({
    message: SearchResultMessageSchema.exactOptional().openapi({
      description: 'Found message',
      title: 'Message',
      'x-stream-index': '001',
    }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('SearchResult')

const SearchWarningSchema = z
  .object({
    channel_search_cids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Channel CIDs for the searched channels',
        title: 'Channel Search CIDs',
        'x-stream-index': '004',
      }),
    channel_search_count: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Number of channels searched',
        title: 'Channel Search Count',
        'x-stream-index': '003',
      }),
    warning_code: z
      .number()
      .openapi({
        description: 'Code corresponding to the warning',
        title: 'Warning Code',
        'x-stream-index': '002',
      }),
    warning_description: z
      .string()
      .openapi({
        description: 'Description of the warning',
        title: 'Warning Description',
        'x-stream-index': '001',
      }),
  })
  .openapi({ required: ['warning_description', 'warning_code'] })
  .openapi('SearchWarning')

const SearchResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '005.001' }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Value to pass to the next search query in order to paginate',
        title: 'Next',
        'x-stream-index': '003',
      }),
    previous: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value that points to the previous page. Pass as the next value in a search query to paginate backwards',
        title: 'Previous',
        'x-stream-index': '004',
      }),
    results: z
      .array(SearchResultSchema)
      .openapi({ description: 'Search results', title: 'Results', 'x-stream-index': '001' }),
    results_warning: SearchWarningSchema.exactOptional().openapi({
      description: 'Warning about the search results',
      title: 'Results Warning',
      'x-stream-index': '002',
    }),
  })
  .nullable()
  .openapi({ required: ['results', 'duration'] })
  .openapi('SearchResponse')

const SegmentUpdateableFieldsRequestSchema = z
  .object({
    description: z.string().max(256).exactOptional().openapi({ 'x-stream-index': '002' }),
    filter: z.record(z.string(), z.any()).exactOptional().openapi({ 'x-stream-index': '004' }),
    name: z.string().max(128).exactOptional().openapi({ 'x-stream-index': '001' }),
    type: z.enum(['user', 'channel']).exactOptional().openapi({ 'x-stream-index': '003' }),
  })
  .openapi({ required: [] })
  .openapi('SegmentUpdateableFieldsRequest')

const SendEventRequestSchema = z
  .object({ event: EventRequestSchema.openapi({ 'x-stream-index': '001' }) })
  .nullable()
  .openapi({ required: ['event'] })
  .openapi('SendEventRequest')

const SendMessageRequestSchema = z
  .object({
    force_moderation: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Enable moderation on server-side requests',
        title: 'Force moderation',
        'x-stream-index': '005',
      }),
    is_pending_message: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Make the message a pending message. This message will not be viewable to others until it is committed.',
        title: 'Is pending message',
        'x-stream-index': '004',
      }),
    message: MessageRequestSchema.openapi({ 'x-stream-index': '001.001' }),
    pending_message_metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ 'x-stream-index': '001.002' }),
    skip_enrich_url: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Do not try to enrich the links within message',
        title: 'Skip Enrich URL',
        'x-stream-index': '003',
      }),
    skip_push: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Disables all push notifications for this message',
        title: 'Skip push notifications',
        'x-stream-index': '002',
      }),
  })
  .nullable()
  .openapi({
    description: 'Contains all information needed to send new message',
    required: ['message'],
    title: 'Send Message Request',
  })
  .openapi('SendMessageRequest')

const SendReactionRequestSchema = z
  .object({
    ID: z.string().exactOptional().openapi({ writeOnly: true, 'x-stream-index': '001' }),
    enforce_unique: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to replace all existing user reactions',
        title: 'Enforce unique',
        'x-stream-index': '003',
      }),
    reaction: ReactionRequestSchema.openapi({ 'x-stream-index': '002' }),
    skip_push: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Skips any mobile push notifications',
        title: 'Skip push',
        'x-stream-index': '004',
      }),
  })
  .nullable()
  .openapi({ required: ['reaction'] })
  .openapi('SendReactionRequest')

const UserCustomEventRequestSchema = z
  .looseObject({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '005' }),
    type: z.string().openapi({ 'x-stream-index': '001' }),
  })
  .openapi({ required: ['type'] })
  .openapi('UserCustomEventRequest')

const SendUserCustomEventRequestSchema = z
  .object({ event: UserCustomEventRequestSchema.openapi({ 'x-stream-index': '002' }) })
  .nullable()
  .openapi({ required: ['event'] })
  .openapi('SendUserCustomEventRequest')

const ShowChannelRequestSchema = z
  .object({
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '002.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('ShowChannelRequest')

const ShowChannelResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('ShowChannelResponse')

const StopCampaignRequestSchema = z.object({}).nullable().openapi('StopCampaignRequest')

const StopCampaignResponseSchema = z
  .object({
    campaign: CampaignSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('StopCampaignResponse')

const StopWatchingResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('StopWatchingResponse')

const SyncRequestSchema = z
  .object({
    channel_cids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of channel CIDs to sync',
        title: 'Channel CIDs',
        'x-stream-index': '001',
      }),
    client_id: z.string().exactOptional().openapi({ 'x-stream-index': '006.002' }),
    connection_id: z.string().exactOptional().openapi({ 'x-stream-index': '006.003' }),
    last_sync_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date from which synchronization should happen',
        title: 'Last sync at',
        'x-stream-index': '002',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '005.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '005.001' }),
    watch: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true this will start watching requested and newly added channels that user has access to. If error occurred with this option enabled and it is not an input error - channels will still be watched.',
        title: 'Watch synced channels',
        'x-stream-index': '004',
      }),
    with_inaccessible_cids: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "If set to true this will add 'inaccessible_cids' to response type",
        title: 'With inaccessible CIDs',
        'x-stream-index': '003',
      }),
  })
  .nullable()
  .openapi({ required: ['last_sync_at'] })
  .openapi('SyncRequest')

const SyncResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '003.001' }),
    events: z
      .array(EventSchema)
      .openapi({ description: 'List of events', title: 'Events', 'x-stream-index': '001' }),
    inaccessible_cids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: "List of CIDs that user can't access",
        title: 'Inaccessible CIDs',
        'x-stream-index': '002',
      }),
  })
  .nullable()
  .openapi({ required: ['events', 'duration'] })
  .openapi('SyncResponse')

const TestCampaignRequestSchema = z
  .object({ users: z.array(z.string()).openapi({ 'x-stream-index': '002' }) })
  .nullable()
  .openapi({ required: ['users'] })
  .openapi('TestCampaignRequest')

const TestCampaignResponseSchema = z
  .object({
    details: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
    duration: z.string().openapi({ 'x-stream-index': '004.001' }),
    results: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Result of the test per user',
        title: 'Results',
        'x-stream-index': '003',
      }),
    status: z.string().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['status', 'duration'], title: 'Test campaign response' })
  .openapi('TestCampaignResponse')

const TranslateMessageRequestSchema = z
  .object({
    language: z
      .enum([
        'af',
        'sq',
        'am',
        'ar',
        'az',
        'bn',
        'bs',
        'bg',
        'zh',
        'zh-TW',
        'hr',
        'cs',
        'da',
        'fa-AF',
        'nl',
        'en',
        'et',
        'fi',
        'fr',
        'fr-CA',
        'ka',
        'de',
        'el',
        'ha',
        'he',
        'hi',
        'hu',
        'id',
        'it',
        'ja',
        'ko',
        'lv',
        'ms',
        'no',
        'fa',
        'ps',
        'pl',
        'pt',
        'ro',
        'ru',
        'sr',
        'sk',
        'sl',
        'so',
        'es',
        'es-MX',
        'sw',
        'sv',
        'tl',
        'ta',
        'th',
        'tr',
        'uk',
        'ur',
        'vi',
      ])
      .openapi({
        description: 'Language to translate message to',
        title: 'Language',
        'x-stream-index': '001',
      }),
  })
  .nullable()
  .openapi({ required: ['language'] })
  .openapi('TranslateMessageRequest')

const TruncateChannelRequestSchema = z
  .object({
    hard_delete: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Permanently delete channel data (messages, reactions, etc.)',
        title: 'Hard delete',
        'x-stream-index': '002',
      }),
    message: MessageRequestSchema.exactOptional().openapi({ 'x-stream-index': '004' }),
    skip_push: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'When `message` is set disables all push notifications for it',
        title: 'Skip push',
        'x-stream-index': '005',
      }),
    truncated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Truncate channel data up to `truncated_at`. The system message (if provided) creation time is always greater than `truncated_at`',
        title: 'Truncated at',
        'x-stream-index': '006',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '007.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '007.001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('TruncateChannelRequest')

const TruncateChannelResponseSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '002' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001.001',
      }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '003' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('TruncateChannelResponse')

const TypingStartEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '003.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '003.003' }),
    cid: z.string().openapi({ 'x-stream-index': '003.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '004.002' }),
    parent_id: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
    type: z.string().openapi({ 'x-stream-index': '004.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '002.001' }),
  })
  .openapi({
    required: ['cid', 'channel_id', 'channel_type', 'type', 'created_at'],
    title: 'TypingStartEvent',
    'x-stream-is-event': true,
  })
  .openapi('TypingStartEvent')

const TypingStopEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '002.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '002.003' }),
    cid: z.string().openapi({ 'x-stream-index': '002.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '004.002' }),
    parent_id: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
    type: z.string().openapi({ 'x-stream-index': '004.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .openapi({
    required: ['cid', 'channel_id', 'channel_type', 'type', 'created_at'],
    title: 'TypingStopEvent',
    'x-stream-is-event': true,
  })
  .openapi('TypingStopEvent')

const UnmuteChannelRequestSchema = z
  .object({
    channel_cid: z.string().openapi({ 'x-stream-index': '001.001' }),
    channel_cids: z.array(z.string()).openapi({ 'x-stream-index': '001.002' }),
    expiration: z.number().exactOptional().openapi({ 'x-stream-index': '001.003' }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '002.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({ required: ['channel_cid', 'channel_cids'] })
  .openapi('UnmuteChannelRequest')

const UnmuteResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '001.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('UnmuteResponse')

const UnmuteUserRequestSchema = z
  .object({
    target_id: z.string().openapi({ 'x-stream-index': '001.001' }),
    target_ids: z.array(z.string()).openapi({ 'x-stream-index': '001.002' }),
    timeout: z.number().min(0).exactOptional().openapi({ 'x-stream-index': '001.003' }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '002.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({ required: ['target_id', 'target_ids'] })
  .openapi('UnmuteUserRequest')

const XiaomiConfigRequestSchema = z
  .object({
    Disabled: z.boolean().exactOptional().openapi({ writeOnly: true, 'x-stream-index': '003' }),
    package_name: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
    secret: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .openapi({ required: [] })
  .openapi('XiaomiConfigRequest')

const UpdateAppRequestSchema = z
  .object({
    agora_options: ConfigRequestSchema.exactOptional().openapi({ 'x-stream-index': '001.033' }),
    apn_config: APNConfigRequestSchema.exactOptional().openapi({ 'x-stream-index': '001.003' }),
    async_moderation_config: AsyncModerationConfigurationRequestSchema.exactOptional().openapi({
      'x-stream-index': '001.035',
    }),
    async_url_enrich_enabled: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.016' }),
    auto_translation_enabled: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.015' }),
    before_message_send_hook_url: z
      .string()
      .exactOptional()
      .openapi({ 'x-stream-index': '001.017' }),
    cdn_expiration_seconds: z
      .number()
      .min(14400)
      .max(1209600)
      .exactOptional()
      .openapi({ 'x-stream-index': '001.031' }),
    channel_hide_members_only: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.027' }),
    custom_action_handler_url: z.string().exactOptional().openapi({ 'x-stream-index': '001.018' }),
    disable_auth_checks: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.001' }),
    disable_permissions_checks: z
      .boolean()
      .exactOptional()
      .openapi({ 'x-stream-index': '001.002' }),
    enforce_unique_usernames: z
      .enum(['no', 'app', 'team'])
      .exactOptional()
      .openapi({ 'x-stream-index': '001.019' }),
    file_upload_config: FileUploadConfigRequestSchema.exactOptional().openapi({
      'x-stream-index': '001.024',
    }),
    firebase_config: FirebaseConfigRequestSchema.exactOptional().openapi({
      'x-stream-index': '001.004',
    }),
    grants: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ 'x-stream-index': '001.028' }),
    hms_options: ConfigRequestSchema.exactOptional().openapi({ 'x-stream-index': '001.034' }),
    huawei_config: HuaweiConfigRequestSchema.exactOptional().openapi({
      'x-stream-index': '001.005',
    }),
    image_moderation_block_labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ 'x-stream-index': '001.013' }),
    image_moderation_enabled: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.014' }),
    image_moderation_labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ 'x-stream-index': '001.012' }),
    image_upload_config: FileUploadConfigRequestSchema.exactOptional().openapi({
      'x-stream-index': '001.023',
    }),
    migrate_permissions_to_v2: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.029' }),
    multi_tenant_enabled: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.011' }),
    permission_version: z
      .enum(['v1', 'v2'])
      .exactOptional()
      .openapi({ 'x-stream-index': '001.009' }),
    push_config: PushConfigRequestSchema.exactOptional().openapi({ 'x-stream-index': '001.007' }),
    reminders_interval: z
      .number()
      .min(60)
      .max(86400)
      .exactOptional()
      .openapi({ 'x-stream-index': '001.030' }),
    revoke_tokens_issued_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '001.025' }),
    sqs_key: z.string().exactOptional().openapi({ 'x-stream-index': '001.021' }),
    sqs_secret: z.string().exactOptional().openapi({ 'x-stream-index': '001.022' }),
    sqs_url: z.string().exactOptional().openapi({ 'x-stream-index': '001.020' }),
    user_search_disallowed_roles: z
      .array(z.string())
      .exactOptional()
      .openapi({ 'x-stream-index': '001.010' }),
    video_provider: z
      .enum(['agora', 'hms'])
      .exactOptional()
      .openapi({ 'x-stream-index': '001.032' }),
    webhook_events: z.array(z.string()).exactOptional().openapi({ 'x-stream-index': '001.026' }),
    webhook_url: z.string().exactOptional().openapi({ 'x-stream-index': '001.008' }),
    xiaomi_config: XiaomiConfigRequestSchema.exactOptional().openapi({
      'x-stream-index': '001.006',
    }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('UpdateAppRequest')

const UpdateBlockListRequestSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ writeOnly: true, 'x-stream-index': '001' }),
    words: z.array(z.string()).exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('UpdateBlockListRequest')

const UpdateCampaignRequestSchema = z
  .object({ campaign: CampaignUpdateableFieldsRequestSchema.openapi({ 'x-stream-index': '001' }) })
  .nullable()
  .openapi({ required: ['campaign'] })
  .openapi('UpdateCampaignRequest')

const UpdateCampaignResponseSchema = z
  .object({
    campaign: CampaignSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('UpdateCampaignResponse')

const UpdateChannelPartialRequestSchema = z
  .object({
    set: z.record(z.string(), z.any()).openapi({ 'x-stream-index': '002.001' }),
    unset: z.array(z.string()).openapi({ 'x-stream-index': '002.002' }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '003.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .nullable()
  .openapi({ required: ['set', 'unset'] })
  .openapi('UpdateChannelPartialRequest')

const UpdateChannelPartialResponseSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '003.001',
      }),
    members: z.array(ChannelMemberSchema).openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: ['members', 'duration'] })
  .openapi('UpdateChannelPartialResponse')

const UpdateChannelRequestSchema = z
  .object({
    accept_invite: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Set to `true` to accept the invite',
        title: 'Accept invite',
        'x-stream-index': '008',
      }),
    add_members: z
      .array(ChannelMemberRequestSchema)
      .exactOptional()
      .openapi({
        description: 'List of user IDs to add to the channel',
        title: 'Add members',
        'x-stream-index': '001',
      }),
    add_moderators: z
      .array(z.string())
      .openapi({
        description: 'List of user IDs to make channel moderators',
        title: 'Add moderators',
        'x-stream-index': '003',
      }),
    assign_roles: z
      .array(ChannelMemberRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'List of channel member role assignments. If any specified user is not part of the channel, the request will fail',
        title: 'Assign roles',
        'x-stream-index': '006',
      }),
    cooldown: z
      .number()
      .min(0)
      .max(120)
      .exactOptional()
      .openapi({
        description: 'Sets cool down period for the channel in seconds',
        title: 'Cool down',
        'x-stream-index': '007',
      }),
    data: ChannelRequestSchema.exactOptional().openapi({ 'x-stream-index': '013.001' }),
    demote_moderators: z
      .array(z.string())
      .openapi({
        description: 'List of user IDs to take away moderators status from',
        title: 'Demote moderators',
        'x-stream-index': '004',
      }),
    hide_history: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Set to `true` to hide channel's history when adding new members",
        title: 'Hide history',
        'x-stream-index': '012',
      }),
    invites: z
      .array(ChannelMemberRequestSchema)
      .exactOptional()
      .openapi({
        description: 'List of user IDs to invite to the channel',
        title: 'Invites',
        'x-stream-index': '005',
      }),
    message: MessageRequestSchema.exactOptional().openapi({
      description: 'Message to send to the chat when channel is successfully updated',
      title: 'Message',
      'x-stream-index': '010',
    }),
    reject_invite: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Set to `true` to reject the invite',
        title: 'Reject invite',
        'x-stream-index': '009',
      }),
    remove_members: z
      .array(z.string())
      .openapi({
        description: 'List of user IDs to remove from the channel',
        title: 'Remove members',
        'x-stream-index': '002',
      }),
    skip_push: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'When `message` is set disables all push notifications for it',
        title: 'Skip push',
        'x-stream-index': '011',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '014.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '014.001' }),
  })
  .nullable()
  .openapi({
    required: ['remove_members', 'add_moderators', 'demote_moderators'],
    title: 'Channel update request',
    'x-stream-docs-page-id': 'channel_update',
  })
  .openapi('UpdateChannelRequest')

const UpdateChannelResponseSchema = z
  .object({
    channel: ChannelResponseSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '004.001',
      }),
    members: z.array(ChannelMemberSchema).openapi({ 'x-stream-index': '003' }),
    message: MessageSchema.exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .nullable()
  .openapi({ required: ['members', 'duration'] })
  .openapi('UpdateChannelResponse')

const UpdateChannelTypeRequestSchema = z
  .object({
    NameFromPath: z.string().exactOptional().openapi({ writeOnly: true, 'x-stream-index': '001' }),
    automod: z.enum(['disabled', 'simple', 'AI']).openapi({ 'x-stream-index': '007.001.017' }),
    automod_behavior: z
      .enum(['flag', 'block'])
      .exactOptional()
      .openapi({ 'x-stream-index': '007.001.018' }),
    automod_thresholds: ThresholdsRequestSchema.exactOptional().openapi({
      'x-stream-index': '007.001.021',
    }),
    blocklist: z.string().exactOptional().openapi({ 'x-stream-index': '007.001.019' }),
    blocklist_behavior: z
      .enum(['flag', 'block'])
      .exactOptional()
      .openapi({ 'x-stream-index': '007.001.020' }),
    commands: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of commands that channel supports',
        title: 'Commands',
        'x-stream-index': '007.003',
      }),
    connect_events: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.004' }),
    custom_events: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.012' }),
    grants: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ 'x-stream-index': '004' }),
    max_message_length: z
      .number()
      .max(20000)
      .exactOptional()
      .openapi({ 'x-stream-index': '007.001.016' }),
    message_retention: z.string().exactOptional().openapi({ 'x-stream-index': '007.001.015' }),
    mutes: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.009' }),
    permissions: z.array(PolicyRequestSchema).exactOptional().openapi({ 'x-stream-index': '003' }),
    push_notifications: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.013' }),
    quotes: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.008' }),
    reactions: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.006' }),
    read_events: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.003' }),
    reminders: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.014' }),
    replies: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.007' }),
    search: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.005' }),
    typing_events: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.002' }),
    uploads: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.010' }),
    url_enrichment: z.boolean().exactOptional().openapi({ 'x-stream-index': '007.001.011' }),
  })
  .nullable()
  .openapi({ required: ['automod'] })
  .openapi('UpdateChannelTypeRequest')

const UpdateChannelTypeResponseSchema = z
  .object({
    automod: z.enum(['disabled', 'simple', 'AI']).openapi({ 'x-stream-index': '003.001.017' }),
    automod_behavior: z.enum(['flag', 'block']).openapi({ 'x-stream-index': '003.001.018' }),
    automod_thresholds: ThresholdsSchema.exactOptional().openapi({
      'x-stream-index': '003.001.021',
    }),
    blocklist: z.string().exactOptional().openapi({ 'x-stream-index': '003.001.019' }),
    blocklist_behavior: z
      .enum(['flag', 'block'])
      .exactOptional()
      .openapi({ 'x-stream-index': '003.001.020' }),
    commands: z.array(z.string()).openapi({ 'x-stream-index': '003.003' }),
    connect_events: z.boolean().openapi({ 'x-stream-index': '003.001.004' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '003.002.003' }),
    custom_events: z.boolean().openapi({ 'x-stream-index': '003.001.012' }),
    duration: z.string().openapi({ 'x-stream-index': '004.001' }),
    grants: z.record(z.string(), z.array(z.string())).openapi({ 'x-stream-index': '002' }),
    max_message_length: z.number().max(20000).openapi({ 'x-stream-index': '003.001.016' }),
    message_retention: z.string().openapi({ 'x-stream-index': '003.001.015' }),
    mutes: z.boolean().openapi({ 'x-stream-index': '003.001.009' }),
    name: z.string().openapi({ 'x-stream-index': '003.001.001' }),
    permissions: z.array(PolicyRequest_1Schema).openapi({ 'x-stream-index': '001' }),
    push_notifications: z.boolean().openapi({ 'x-stream-index': '003.001.013' }),
    quotes: z.boolean().openapi({ 'x-stream-index': '003.001.008' }),
    reactions: z.boolean().openapi({ 'x-stream-index': '003.001.006' }),
    read_events: z.boolean().openapi({ 'x-stream-index': '003.001.003' }),
    reminders: z.boolean().openapi({ 'x-stream-index': '003.001.014' }),
    replies: z.boolean().openapi({ 'x-stream-index': '003.001.007' }),
    search: z.boolean().openapi({ 'x-stream-index': '003.001.005' }),
    typing_events: z.boolean().openapi({ 'x-stream-index': '003.001.002' }),
    updated_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '003.002.004' }),
    uploads: z.boolean().openapi({ 'x-stream-index': '003.001.010' }),
    url_enrichment: z.boolean().openapi({ 'x-stream-index': '003.001.011' }),
  })
  .nullable()
  .openapi({
    required: [
      'permissions',
      'grants',
      'name',
      'typing_events',
      'read_events',
      'connect_events',
      'search',
      'reactions',
      'replies',
      'quotes',
      'mutes',
      'uploads',
      'url_enrichment',
      'custom_events',
      'push_notifications',
      'reminders',
      'message_retention',
      'max_message_length',
      'automod',
      'automod_behavior',
      'created_at',
      'updated_at',
      'commands',
      'duration',
    ],
  })
  .openapi('UpdateChannelTypeResponse')

const UpdateCommandRequestSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ writeOnly: true, 'x-stream-index': '001' }),
    args: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: 'Arguments help text, shown in commands auto-completion',
        title: 'Arguments',
        'x-stream-index': '003',
      }),
    description: z
      .string()
      .max(255)
      .openapi({
        description: 'Description, shown in commands auto-completion',
        title: 'Description',
        'x-stream-index': '002',
      }),
    set: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: 'Set name used for grouping commands',
        title: 'Set',
        'x-stream-index': '004',
      }),
  })
  .nullable()
  .openapi({
    description: 'Represents custom chat command',
    required: ['description'],
    title: 'Command',
  })
  .openapi('UpdateCommandRequest')

const UpdateCommandResponseSchema = z
  .object({
    command: CommandSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
    duration: z.string().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('UpdateCommandResponse')

const UpdateMessagePartialRequestSchema = z
  .object({
    set: z
      .record(z.string(), z.any())
      .openapi({
        description: 'Sets new field values',
        title: 'Set',
        'x-stream-index': '001.001',
        'x-stream-map': { description: 'New value to set', key: 'field', title: 'Value' },
      }),
    skip_enrich_url: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Do not try to enrich the links within message',
        title: 'Skip Enrich URL',
        'x-stream-index': '004',
      }),
    unset: z
      .array(z.string())
      .openapi({
        description: 'Array of field names to unset',
        title: 'Unset',
        'x-stream-index': '001.002',
      }),
    user: UserObjectRequestSchema.exactOptional().openapi({ 'x-stream-index': '002.002' }),
    user_id: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({ required: ['set', 'unset'] })
  .openapi('UpdateMessagePartialRequest')

const UpdateMessageRequestSchema = z
  .object({
    message: MessageRequestSchema.openapi({ 'x-stream-index': '001.001' }),
    pending_message_metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ 'x-stream-index': '001.002' }),
    skip_enrich_url: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Do not try to enrich the links within message',
        title: 'Skip Enrich URL',
        'x-stream-index': '002',
      }),
  })
  .nullable()
  .openapi({
    description: 'Contains all information needed to update a message',
    required: ['message'],
    title: 'Update Message Request',
  })
  .openapi('UpdateMessageRequest')

const UpdateSegmentRequestSchema = z
  .object({ segment: SegmentUpdateableFieldsRequestSchema.openapi({ 'x-stream-index': '001' }) })
  .nullable()
  .openapi({ required: ['segment'] })
  .openapi('UpdateSegmentRequest')

const UpdateSegmentResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    segment: SegmentSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['duration'] })
  .openapi('UpdateSegmentResponse')

const UpdateUserPartialRequestSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'User ID to update', title: 'ID', 'x-stream-index': '001' }),
    set: z.record(z.string(), z.any()).openapi({ 'x-stream-index': '002.001' }),
    unset: z.array(z.string()).openapi({ 'x-stream-index': '002.002' }),
  })
  .nullable()
  .openapi({ required: ['id', 'set', 'unset'] })
  .openapi('UpdateUserPartialRequest')

const UpdateUsersRequestSchema = z
  .object({
    users: z
      .record(z.string(), UserObjectRequestSchema)
      .openapi({
        description: 'Object containing users',
        title: 'Users',
        'x-stream-index': '001',
        'x-stream-map': { key: 'user_id' },
      }),
  })
  .nullable()
  .openapi({ required: ['users'] })
  .openapi('UpdateUsersRequest')

const UpdateUsersResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '002.001' }),
    users: z
      .record(z.string(), UserObjectSchema)
      .openapi({
        description: 'Object containing users',
        title: 'Users',
        'x-stream-index': '001',
        'x-stream-map': { key: 'user_id' },
      }),
  })
  .nullable()
  .openapi({ required: ['users', 'duration'] })
  .openapi('UpdateUsersResponse')

const UpsertPushProviderRequestSchema = z
  .object({
    push_provider: PushProviderRequestSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('UpsertPushProviderRequest')

const UpsertPushProviderResponseSchema = z
  .object({
    duration: z
      .string()
      .openapi({
        description: 'Duration of the request in human-readable format',
        title: 'Duration',
        'x-stream-index': '002.001',
      }),
    push_provider: PushProviderSchema.openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['push_provider', 'duration'] })
  .openapi('UpsertPushProviderResponse')

const UserBannedEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '006.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '006.003' }),
    cid: z.string().openapi({ 'x-stream-index': '006.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '008.002' }),
    created_by: UserObjectSchema.openapi({ 'x-stream-index': '001' }),
    expiration: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '003' }),
    reason: z.string().exactOptional().openapi({ 'x-stream-index': '004' }),
    shadow: z.boolean().openapi({ 'x-stream-index': '002' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '005.001' }),
    type: z.string().openapi({ 'x-stream-index': '008.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '007.001' }),
  })
  .nullable()
  .openapi({
    required: ['created_by', 'shadow', 'cid', 'channel_id', 'channel_type', 'type', 'created_at'],
    title: 'UserBannedEvent',
    'x-stream-is-event': true,
  })
  .openapi('UserBannedEvent')

const UserDeactivatedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '003.002' }),
    created_by: UserObjectSchema.openapi({ 'x-stream-index': '001' }),
    type: z.string().openapi({ 'x-stream-index': '003.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '002.001' }),
  })
  .nullable()
  .openapi({
    required: ['created_by', 'type', 'created_at'],
    title: 'UserDeactivatedEvent',
    'x-stream-is-event': true,
  })
  .openapi('UserDeactivatedEvent')

const UserDeletedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.002' }),
    delete_conversation_channels: z.boolean().openapi({ 'x-stream-index': '005' }),
    hard_delete: z.boolean().openapi({ 'x-stream-index': '003.001' }),
    mark_messages_deleted: z.boolean().openapi({ 'x-stream-index': '004' }),
    type: z.string().openapi({ 'x-stream-index': '002.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({
    required: [
      'type',
      'created_at',
      'hard_delete',
      'mark_messages_deleted',
      'delete_conversation_channels',
    ],
    title: 'UserDeletedEvent',
    'x-stream-is-event': true,
  })
  .openapi('UserDeletedEvent')

const UserFlaggedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '004.002' }),
    target_user: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
    target_users: z.array(z.string()).exactOptional().openapi({ 'x-stream-index': '003' }),
    type: z.string().openapi({ 'x-stream-index': '004.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at'],
    title: 'UserFlaggedEvent',
    'x-stream-is-event': true,
  })
  .openapi('UserFlaggedEvent')

const UserMutedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '004.002' }),
    target_user: z.string().exactOptional().openapi({ 'x-stream-index': '001' }),
    target_users: z.array(z.string()).exactOptional().openapi({ 'x-stream-index': '002' }),
    type: z.string().openapi({ 'x-stream-index': '004.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .nullable()
  .openapi({ required: ['type', 'created_at'], title: 'UserMutedEvent', 'x-stream-is-event': true })
  .openapi('UserMutedEvent')

const UserPresenceChangedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.002' }),
    type: z.string().openapi({ 'x-stream-index': '002.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at'],
    title: 'UserPresenceChangedEvent',
    'x-stream-is-event': true,
  })
  .openapi('UserPresenceChangedEvent')

const UserReactivatedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.002' }),
    type: z.string().openapi({ 'x-stream-index': '002.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at'],
    title: 'UserReactivatedEvent',
    'x-stream-is-event': true,
  })
  .openapi('UserReactivatedEvent')

const UserResponseSchema = z
  .looseObject({
    ban_expires: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '001.015' }),
    banned: z.boolean().openapi({ 'x-stream-index': '001.014' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, 'x-stream-index': '001.007' }),
    deactivated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, 'x-stream-index': '001.012' }),
    deleted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, 'x-stream-index': '001.011' }),
    id: z.string().openapi({ 'x-stream-index': '001.003' }),
    invisible: z.boolean().exactOptional().openapi({ 'x-stream-index': '001.021' }),
    language: z.string().exactOptional().openapi({ 'x-stream-index': '001.030' }),
    last_active: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, 'x-stream-index': '001.010' }),
    online: z.boolean().openapi({ readOnly: true, 'x-stream-index': '001.020' }),
    push_notifications: PushNotificationSettingsSchema.exactOptional().openapi({
      'x-stream-index': '001.023',
    }),
    revoke_tokens_issued_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ 'x-stream-index': '001.037' }),
    role: z.string().openapi({ 'x-stream-index': '001.004' }),
    shadow_banned: z
      .boolean()
      .openapi({
        description: 'Whether user is shadow banned or not',
        title: 'Shadow banned',
        'x-stream-index': '002',
      }),
    teams: z.array(z.string()).exactOptional().openapi({ 'x-stream-index': '001.031' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, 'x-stream-index': '001.008' }),
  })
  .nullable()
  .openapi({ required: ['id', 'role', 'banned', 'online', 'shadow_banned'] })
  .openapi('UserResponse')

const UserUnbannedEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '002.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '002.003' }),
    cid: z.string().openapi({ 'x-stream-index': '002.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '005.002' }),
    shadow: z.boolean().openapi({ 'x-stream-index': '001' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '004.001' }),
    type: z.string().openapi({ 'x-stream-index': '005.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
  })
  .nullable()
  .openapi({
    required: ['shadow', 'cid', 'channel_id', 'channel_type', 'type', 'created_at'],
    title: 'UserUnbannedEvent',
    'x-stream-is-event': true,
  })
  .openapi('UserUnbannedEvent')

const UserUnmutedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '004.002' }),
    target_user: z.string().exactOptional().openapi({ 'x-stream-index': '002' }),
    target_users: z.array(z.string()).exactOptional().openapi({ 'x-stream-index': '003' }),
    type: z.string().openapi({ 'x-stream-index': '004.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at'],
    title: 'UserUnmutedEvent',
    'x-stream-is-event': true,
  })
  .openapi('UserUnmutedEvent')

const UserUnreadReminderEventSchema = z
  .object({
    channels: z.record(z.string(), ChannelMessagesSchema).openapi({ 'x-stream-index': '003' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '001.002' }),
    type: z.string().openapi({ 'x-stream-index': '001.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '002' }),
  })
  .openapi({
    required: ['type', 'created_at', 'channels'],
    title: 'UserUnreadReminderEvent',
    'x-stream-is-event': true,
  })
  .openapi('UserUnreadReminderEvent')

const UserUpdatedEventSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.002' }),
    type: z.string().openapi({ 'x-stream-index': '002.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({
    required: ['type', 'created_at'],
    title: 'UserUpdatedEvent',
    'x-stream-is-event': true,
  })
  .openapi('UserUpdatedEvent')

const UserWatchingStartEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '004.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '004.003' }),
    cid: z.string().openapi({ 'x-stream-index': '004.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '003.002' }),
    team: z.string().exactOptional().openapi({ 'x-stream-index': '002.001' }),
    type: z.string().openapi({ 'x-stream-index': '003.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '005.001' }),
    watcher_count: z.number().openapi({ 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({
    required: ['watcher_count', 'type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'UserWatchingStartEvent',
    'x-stream-is-event': true,
  })
  .openapi('UserWatchingStartEvent')

const UserWatchingStopEventSchema = z
  .object({
    channel_id: z.string().openapi({ 'x-stream-index': '004.002' }),
    channel_type: z.string().openapi({ 'x-stream-index': '004.003' }),
    cid: z.string().openapi({ 'x-stream-index': '004.001' }),
    created_at: z.iso.datetime({ offset: true }).openapi({ 'x-stream-index': '002.002' }),
    type: z.string().openapi({ 'x-stream-index': '002.001' }),
    user: UserObjectSchema.exactOptional().openapi({ 'x-stream-index': '003.001' }),
    watcher_count: z.number().openapi({ 'x-stream-index': '001.001' }),
  })
  .nullable()
  .openapi({
    required: ['watcher_count', 'type', 'created_at', 'cid', 'channel_id', 'channel_type'],
    title: 'UserWatchingStopEvent',
    'x-stream-is-event': true,
  })
  .openapi('UserWatchingStopEvent')

const UsersResponseSchema = z
  .object({
    duration: z.string().openapi({ 'x-stream-index': '002.001' }),
    users: z
      .array(UserResponseSchema)
      .openapi({ description: 'List of found users', title: 'Users', 'x-stream-index': '001' }),
  })
  .nullable()
  .openapi({ required: ['users', 'duration'] })
  .openapi('UsersResponse')

const JWTSecurityScheme = {
  description:
    'JWT should be always provided when stream-auth-type=jwt.\n\nUsing JWT auth request could be authenticated as user or as server-side.\n\nWhen using user authentication permission checking is going to be applied to requests based on the user that is\nperforming a request.\n\nThe `authorization` header should be a JWT string signed using the secret attached to the API key used to perform\nrequests.\n\n**WARNING** all client-side official SDK do not ship with token generation; this is to make sure that the API secret is not\nshared with an untrusted party such as a browser or a iOS/Android application. Tokens **must** be generated server-side.\nIf you wish, you can configure your application to ignore authentication (see `disable_auth_check`)\nThe JWT string must include only the user_id claim and can include any built-in JWT claim such as iat, exp as well.\n',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

const ApiKeySecurityScheme = {
  description: 'Application API key should be always set in order to authenticate the request.',
  in: 'query',
  name: 'api_key',
  type: 'apiKey',
}

const StreamAuthTypeSecurityScheme = {
  description:
    'Stream-Auth-Type should be always set in order to authenticate the request. Possible\nvalues: `jwt` or `anonymous`.\n\n`jwt` allows you to authenticate as a user. With this auth type you should also provide valid JWT in Authorization\nheader.\n\n`anonymous` allows you to authenticate as anonymous user. Please note that most advanced features are not available\nto anonymous users.',
  in: 'header',
  name: 'Stream-Auth-Type',
  type: 'apiKey',
}

export const getAppRoute = createRoute({
  method: 'get',
  path: '/app',
  tags: ['Settings'],
  summary: 'Get App Settings',
  description: 'This method returns the application settings',
  operationId: 'GetApp',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetApplicationResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const patchAppRoute = createRoute({
  method: 'patch',
  path: '/app',
  tags: ['Settings'],
  summary: 'Update App Settings',
  description: 'This method updates one or more application settings',
  operationId: 'UpdateApp',
  request: {
    body: { content: { 'application/json': { schema: UpdateAppRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getBlocklistsRoute = createRoute({
  method: 'get',
  path: '/blocklists',
  tags: ['Settings', 'Moderation'],
  summary: 'List block lists',
  description: 'Returns all available block lists',
  operationId: 'ListBlockLists',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListBlockListResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postBlocklistsRoute = createRoute({
  method: 'post',
  path: '/blocklists',
  tags: ['Settings', 'Moderation'],
  summary: 'Create block list',
  description:
    'Creates a new application blocklist, once created the blocklist can be used by any channel type',
  operationId: 'CreateBlockList',
  request: {
    body: {
      description: 'Block list',
      content: { 'application/json': { schema: CreateBlockListRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getBlocklistsNameRoute = createRoute({
  method: 'get',
  path: '/blocklists/{name}',
  tags: ['Settings', 'Moderation'],
  summary: 'Get block list',
  description: 'Returns block list by given name',
  operationId: 'GetBlockList',
  request: {
    params: z.object({
      name: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Block list name',
                  title: 'Name',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'name',
            required: true,
          },
          description: 'Block list name',
          title: 'Name',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetBlockListResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putBlocklistsNameRoute = createRoute({
  method: 'put',
  path: '/blocklists/{name}',
  tags: ['Settings', 'Moderation'],
  summary: 'Update block list',
  description: 'Updates contents of the block list',
  operationId: 'UpdateBlockList',
  request: {
    params: z.object({
      name: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001' },
              },
            },
            in: 'path',
            name: 'name',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateBlockListRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteBlocklistsNameRoute = createRoute({
  method: 'delete',
  path: '/blocklists/{name}',
  tags: ['Settings', 'Moderation'],
  summary: 'Delete block list',
  description: 'Deletes previously created application blocklist',
  operationId: 'DeleteBlockList',
  request: {
    params: z.object({
      name: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Block list name',
                  title: 'Name',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'name',
            required: true,
          },
          description: 'Block list name',
          title: 'Name',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postCallsIndexRoute = createRoute({
  method: 'post',
  path: '/calls/',
  summary: 'Get Call Token ()',
  description: 'Retrieves the token to join a call',
  operationId: 'GetCallToken__1',
  request: {
    body: {
      content: { 'application/json': { schema: GetCallTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetCallTokenResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postCallsCallIdRoute = createRoute({
  method: 'post',
  path: '/calls/{call_id}',
  summary: 'Get Call Token (call_id)',
  description: 'Retrieves the token to join a call',
  operationId: 'GetCallToken_call_id_0',
  request: {
    params: z.object({
      call_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001' },
              },
            },
            in: 'path',
            name: 'call_id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCallTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetCallTokenResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getCampaignsRoute = createRoute({
  method: 'get',
  path: '/campaigns',
  tags: ['Campaigns'],
  summary: 'Query campaigns',
  description: 'Query campaigns',
  operationId: 'QueryCampaigns',
  request: {
    query: z.object({
      payload: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          QueryCampaignsRequestSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/QueryCampaignsRequest',
                    'x-stream-index': '001',
                  },
                },
              },
              in: 'query',
              name: 'payload',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QueryCampaignsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postCampaignsRoute = createRoute({
  method: 'post',
  path: '/campaigns',
  tags: ['Campaigns'],
  summary: 'Create campaign',
  description: 'Creates a new campaign',
  operationId: 'CreateCampaign',
  request: {
    body: {
      content: { 'application/json': { schema: CreateCampaignRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateCampaignResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putCampaignsIdRoute = createRoute({
  method: 'put',
  path: '/campaigns/{id}',
  tags: ['Campaigns'],
  summary: 'Update campaign',
  description: 'Update an existing campaign',
  operationId: 'UpdateCampaign',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.001' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.001',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateCampaignRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: UpdateCampaignResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteCampaignsIdRoute = createRoute({
  method: 'delete',
  path: '/campaigns/{id}',
  tags: ['Campaigns'],
  summary: 'Delete campaign',
  description: 'Delete a campaign',
  operationId: 'DeleteCampaign',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.001' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.001',
        }),
    }),
    query: z.object({
      recipients: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.boolean())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'boolean', writeOnly: true, 'x-stream-index': '001' },
              },
            },
            in: 'query',
            name: 'recipients',
            required: false,
          },
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeleteCampaignResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const patchCampaignsIdResumeRoute = createRoute({
  method: 'patch',
  path: '/campaigns/{id}/resume',
  tags: ['Campaigns'],
  summary: 'Resume campaign',
  description: 'Resume a stopped campaign',
  operationId: 'ResumeCampaign',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.001' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResumeCampaignResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const patchCampaignsIdScheduleRoute = createRoute({
  method: 'patch',
  path: '/campaigns/{id}/schedule',
  tags: ['Campaigns'],
  summary: 'Schedule campaign',
  description: 'Schedule a campaign',
  operationId: 'ScheduleCampaign',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.001' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.001',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ScheduleCampaignRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ScheduleCampaignResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const patchCampaignsIdStopRoute = createRoute({
  method: 'patch',
  path: '/campaigns/{id}/stop',
  tags: ['Campaigns'],
  summary: 'Stop campaign',
  description: 'Stop a running campaign',
  operationId: 'StopCampaign',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.001' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StopCampaignResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postCampaignsIdTestRoute = createRoute({
  method: 'post',
  path: '/campaigns/{id}/test',
  tags: ['Campaigns'],
  summary: 'Test campaign',
  description: 'Test a campaign',
  operationId: 'TestCampaign',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    body: {
      content: { 'application/json': { schema: TestCampaignRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Test campaign response',
      content: { 'application/json': { schema: TestCampaignResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsRoute = createRoute({
  method: 'post',
  path: '/channels',
  tags: ['Channels'],
  summary: 'Query channels',
  description: 'Query channels with filter query',
  operationId: 'QueryChannels',
  request: {
    query: z.object({
      client_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '011.002' } },
            },
            in: 'query',
            name: 'client_id',
            required: false,
          },
          'x-stream-index': '011.002',
        }),
      connection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '011.003' } },
            },
            in: 'query',
            name: 'connection_id',
            required: false,
          },
          'x-stream-index': '011.003',
        }),
    }),
    body: {
      description: 'Query Channels Request',
      content: { 'application/json': { schema: QueryChannelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Channels list',
      content: { 'application/json': { schema: ChannelsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsDeleteRoute = createRoute({
  method: 'post',
  path: '/channels/delete',
  tags: ['Channels', 'GDPR'],
  summary: 'Deletes channels asynchronously',
  description: 'Allows to delete several channels at once asynchronously',
  operationId: 'DeleteChannels',
  request: {
    body: {
      content: { 'application/json': { schema: DeleteChannelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeleteChannelsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsReadRoute = createRoute({
  method: 'post',
  path: '/channels/read',
  tags: ['Channels', 'Messages'],
  summary: 'Mark channels as read',
  description:
    'Marks channels as read up to the specific message. If no channels is given, mark all channel as read',
  operationId: 'MarkChannelsRead',
  request: {
    body: {
      content: { 'application/json': { schema: MarkChannelsReadRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: MarkReadResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeQueryRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/query',
  tags: ['Channels'],
  summary: 'Get or create channel (type)',
  description: 'This method creates a channel or returns an existing one with matching attributes',
  operationId: 'GetOrCreateChannel_type_1',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string().max(64))
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Channel type',
                  maxLength: 64,
                  title: 'Type',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '002',
                },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          description: 'Channel type',
          title: 'Type',
          writeOnly: true,
          'x-stream-index': '002',
        }),
    }),
    query: z.object({
      client_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '001.002' } },
            },
            in: 'query',
            name: 'client_id',
            required: false,
          },
          'x-stream-index': '001.002',
        }),
      connection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '001.003' } },
            },
            in: 'query',
            name: 'connection_id',
            required: false,
          },
          'x-stream-index': '001.003',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ChannelGetOrCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelStateResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}',
  tags: ['Channels'],
  summary: 'Update channel',
  description: 'Change channel data',
  operationId: 'UpdateChannel',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '013.002.001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '013.002.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '013.002.002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '013.002.002',
        }),
    }),
    body: {
      description: 'Channel update request',
      content: { 'application/json': { schema: UpdateChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: UpdateChannelResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteChannelsTypeIdRoute = createRoute({
  method: 'delete',
  path: '/channels/{type}/{id}',
  tags: ['Channels'],
  summary: 'Delete channel',
  description: 'Deletes channel',
  operationId: 'DeleteChannel',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Channel type to interact with',
                  title: 'Channel type',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001.001',
                },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          description: 'Channel type to interact with',
          title: 'Channel type',
          writeOnly: true,
          'x-stream-index': '001.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Channel ID to interact with',
                  title: 'Channel ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001.002',
                },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          description: 'Channel ID to interact with',
          title: 'Channel ID',
          writeOnly: true,
          'x-stream-index': '001.002',
        }),
    }),
    query: z.object({
      hard_delete: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.boolean())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'boolean', 'x-stream-index': '002' } },
            },
            in: 'query',
            name: 'hard_delete',
            required: false,
          },
          'x-stream-index': '002',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeleteChannelResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const patchChannelsTypeIdRoute = createRoute({
  method: 'patch',
  path: '/channels/{type}/{id}',
  tags: ['Channels'],
  summary: 'Partially update channel',
  description: 'Updates certain fields of the channel',
  operationId: 'UpdateChannelPartial',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.002',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateChannelPartialRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UpdateChannelPartialResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdCallRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}/call',
  summary: 'Create a call',
  description: 'Creates a call',
  operationId: 'CreateCall',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002',
        }),
    }),
    body: { content: { 'application/json': { schema: CreateCallRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateCallResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdEventRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}/event',
  tags: ['Events'],
  summary: 'Send event',
  description: 'Sends event to the channel',
  operationId: 'SendEvent',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Channel type to interact with',
                  title: 'Channel type',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '002.001',
                },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          description: 'Channel type to interact with',
          title: 'Channel type',
          writeOnly: true,
          'x-stream-index': '002.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Channel ID to interact with',
                  title: 'Channel ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '002.002',
                },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          description: 'Channel ID to interact with',
          title: 'Channel ID',
          writeOnly: true,
          'x-stream-index': '002.002',
        }),
    }),
    body: { content: { 'application/json': { schema: SendEventRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdFileRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}/file',
  tags: ['Messages', 'Files'],
  summary: 'Upload file',
  description: 'Uploads file',
  operationId: 'UploadFile',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.002',
        }),
    }),
    body: {
      content: { 'multipart/form-data': { schema: FileUploadRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileUploadResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteChannelsTypeIdFileRoute = createRoute({
  method: 'delete',
  path: '/channels/{type}/{id}/file',
  tags: ['Messages', 'Files'],
  summary: 'Delete file',
  description: 'Deletes previously uploaded file',
  operationId: 'DeleteFile',
  request: {
    query: z.object({
      url: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'File URL to delete',
                  title: 'URL',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'query',
            name: 'url',
            required: false,
          },
          description: 'File URL to delete',
          title: 'URL',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileDeleteResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdHideRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}/hide',
  tags: ['Channels'],
  summary: 'Hide channel',
  description: 'Marks channel as hidden for current user',
  operationId: 'HideChannel',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.002',
        }),
    }),
    body: { content: { 'application/json': { schema: HideChannelRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: HideChannelResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdImageRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}/image',
  tags: ['Messages', 'Files'],
  summary: 'Upload image',
  description: 'Uploads image',
  operationId: 'UploadImage',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.001.001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.001.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.001.002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.001.002',
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.string().exactOptional().openapi({ 'x-stream-index': '001.002' }),
              upload_sizes: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        crop: z
                          .enum(['top', 'bottom', 'left', 'right', 'center'])
                          .exactOptional()
                          .openapi({
                            description: 'Crop mode',
                            title: 'Crop',
                            'x-stream-index': '001',
                          }),
                        height: z
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
                            description: 'Target image height',
                            title: 'Height',
                            'x-stream-index': '003',
                          }),
                        resize: z
                          .enum(['clip', 'crop', 'scale', 'fill'])
                          .exactOptional()
                          .openapi({
                            description: 'Resize method',
                            title: 'Resize',
                            'x-stream-index': '002',
                          }),
                        width: z
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
                            description: 'Target image width',
                            title: 'Width',
                            'x-stream-index': '004',
                          }),
                      })
                      .openapi({ title: 'Image size configuration', required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description: 'field with JSON-encoded array of image size configurations',
                  title: 'Upload sizes',
                  'x-stream-index': '002',
                }),
              user: OnlyUserIDRequestSchema.exactOptional().openapi({
                'x-stream-index': '001.003',
              }),
            })
            .nullable()
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ImageUploadResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteChannelsTypeIdImageRoute = createRoute({
  method: 'delete',
  path: '/channels/{type}/{id}/image',
  tags: ['Messages', 'Files'],
  summary: 'Delete image',
  description: 'Deletes previously uploaded image',
  operationId: 'DeleteImage',
  request: {
    query: z.object({
      url: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'File URL to delete',
                  title: 'URL',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'query',
            name: 'url',
            required: false,
          },
          description: 'File URL to delete',
          title: 'URL',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileDeleteResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdMessageRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}/message',
  tags: ['Messages'],
  summary: 'Send new message',
  description: 'Sends new message to the specified channel',
  operationId: 'SendMessage',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '006.001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '006.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '006.002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '006.002',
        }),
    }),
    body: {
      description: 'Send Message Request',
      content: { 'application/json': { schema: SendMessageRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageWithPendingMetadataResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getChannelsTypeIdMessagesRoute = createRoute({
  method: 'get',
  path: '/channels/{type}/{id}/messages',
  tags: ['Messages'],
  summary: 'Get many messages',
  description: 'Returns list messages found by IDs',
  operationId: 'GetManyMessages',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.002',
        }),
    }),
    query: z.object({
      ids: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.array(z.string()))
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'List of comma-separated IDs',
                  items: { type: 'string' },
                  maximum: 50,
                  minimum: 1,
                  title: 'IDs',
                  type: 'array',
                  'x-stream-index': '001',
                },
              },
            },
            in: 'query',
            name: 'ids',
            required: false,
          },
          description: 'List of comma-separated IDs',
          title: 'IDs',
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetManyMessagesResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdQueryRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}/query',
  tags: ['Channels'],
  summary: 'Get or create channel (type, id)',
  description: 'This method creates a channel or returns an existing one with matching attributes',
  operationId: 'GetOrCreateChannel_type_id_0',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string().max(64))
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Channel type',
                  maxLength: 64,
                  title: 'Type',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '002',
                },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          description: 'Channel type',
          title: 'Type',
          writeOnly: true,
          'x-stream-index': '002',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string().max(64))
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Channel ID',
                  maxLength: 64,
                  title: 'ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '003',
                },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          description: 'Channel ID',
          title: 'ID',
          writeOnly: true,
          'x-stream-index': '003',
        }),
    }),
    query: z.object({
      client_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '001.002' } },
            },
            in: 'query',
            name: 'client_id',
            required: false,
          },
          'x-stream-index': '001.002',
        }),
      connection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '001.003' } },
            },
            in: 'query',
            name: 'connection_id',
            required: false,
          },
          'x-stream-index': '001.003',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ChannelGetOrCreateRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelStateResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdReadRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}/read',
  tags: ['Channels', 'Messages'],
  summary: 'Mark read',
  description: 'Marks channel as read up to the specific message',
  operationId: 'MarkRead',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.002',
        }),
    }),
    body: { content: { 'application/json': { schema: MarkReadRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: MarkReadResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdShowRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}/show',
  tags: ['Channels'],
  summary: 'Show channel',
  description: 'Shows previously hidden channel',
  operationId: 'ShowChannel',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.002',
        }),
    }),
    body: { content: { 'application/json': { schema: ShowChannelRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ShowChannelResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdStopWatchingRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}/stop-watching',
  tags: ['Channels'],
  summary: 'Stop watching channel',
  description: 'Call this method to stop receiving channel events',
  operationId: 'StopWatchingChannel',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.002',
        }),
    }),
    query: z.object({
      client_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '001.002' } },
            },
            in: 'query',
            name: 'client_id',
            required: false,
          },
          'x-stream-index': '001.002',
        }),
      connection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '001.003' } },
            },
            in: 'query',
            name: 'connection_id',
            required: false,
          },
          'x-stream-index': '001.003',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ChannelStopWatchingRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: StopWatchingResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdTruncateRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}/truncate',
  tags: ['Channels'],
  summary: 'Truncate channel',
  description: 'Truncates channel',
  operationId: 'TruncateChannel',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.002',
        }),
    }),
    body: {
      content: { 'application/json': { schema: TruncateChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: TruncateChannelResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChannelsTypeIdUnreadRoute = createRoute({
  method: 'post',
  path: '/channels/{type}/{id}/unread',
  tags: ['Channels', 'Messages'],
  summary: 'Mark unread',
  description: 'Marks channel as unread from a specific message',
  operationId: 'MarkUnread',
  request: {
    params: z.object({
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.001' },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.001',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.002' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.002',
        }),
    }),
    body: { content: { 'application/json': { schema: MarkUnreadRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getChanneltypesRoute = createRoute({
  method: 'get',
  path: '/channeltypes',
  tags: ['Settings', 'Channel types'],
  summary: 'List channel types',
  description: 'Lists all available channel types',
  operationId: 'ListChannelTypes',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListChannelTypesResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postChanneltypesRoute = createRoute({
  method: 'post',
  path: '/channeltypes',
  tags: ['Settings', 'Channel types'],
  summary: 'Create channel type',
  description: 'Creates new channel type',
  operationId: 'CreateChannelType',
  request: {
    body: {
      content: { 'application/json': { schema: CreateChannelTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateChannelTypeResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getChanneltypesNameRoute = createRoute({
  method: 'get',
  path: '/channeltypes/{name}',
  tags: ['Settings', 'Channel types'],
  summary: 'Get channel type',
  description: 'Gets channel type',
  operationId: 'GetChannelType',
  request: {
    params: z.object({
      name: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Channel type name',
                  title: 'Name',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'name',
            required: true,
          },
          description: 'Channel type name',
          title: 'Name',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putChanneltypesNameRoute = createRoute({
  method: 'put',
  path: '/channeltypes/{name}',
  tags: ['Settings', 'Channel types'],
  summary: 'Update channel type',
  description: 'Updates channel type',
  operationId: 'UpdateChannelType',
  request: {
    params: z.object({
      name: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001' },
              },
            },
            in: 'path',
            name: 'name',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateChannelTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: UpdateChannelTypeResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteChanneltypesNameRoute = createRoute({
  method: 'delete',
  path: '/channeltypes/{name}',
  tags: ['Settings', 'Channel types'],
  summary: 'Delete channel type',
  description: 'Deletes channel type',
  operationId: 'DeleteChannelType',
  request: {
    params: z.object({
      name: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Channel type name',
                  title: 'Name',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'name',
            required: true,
          },
          description: 'Channel type name',
          title: 'Name',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postCheckPushRoute = createRoute({
  method: 'post',
  path: '/check_push',
  tags: ['Settings', 'Testing'],
  summary: 'Check push',
  description:
    'Sends a test message via push, this is a test endpoint to verify your push settings',
  operationId: 'CheckPush',
  request: {
    body: { content: { 'application/json': { schema: CheckPushRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: CheckPushResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postCheckSqsRoute = createRoute({
  method: 'post',
  path: '/check_sqs',
  tags: ['Settings', 'Testing'],
  summary: 'Check SQS',
  description: 'Validates Amazon SQS credentials',
  operationId: 'CheckSQS',
  request: {
    body: { content: { 'application/json': { schema: CheckSQSRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: CheckSQSResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getCommandsRoute = createRoute({
  method: 'get',
  path: '/commands',
  tags: ['Custom commands'],
  summary: 'List commands',
  description: 'Returns all custom commands',
  operationId: 'ListCommands',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCommandsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postCommandsRoute = createRoute({
  method: 'post',
  path: '/commands',
  tags: ['Custom commands'],
  summary: 'Create command',
  description: 'Creates custom chat command',
  operationId: 'CreateCommand',
  request: {
    body: {
      description: 'Command',
      content: { 'application/json': { schema: CreateCommandRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateCommandResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getCommandsNameRoute = createRoute({
  method: 'get',
  path: '/commands/{name}',
  tags: ['Custom commands'],
  summary: 'Get command',
  description: 'Returns custom command by its name',
  operationId: 'GetCommand',
  request: {
    params: z.object({
      name: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '001' } },
            },
            in: 'path',
            name: 'name',
            required: true,
          },
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetCommandResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putCommandsNameRoute = createRoute({
  method: 'put',
  path: '/commands/{name}',
  tags: ['Custom commands'],
  summary: 'Update command',
  description: 'Updates custom chat command',
  operationId: 'UpdateCommand',
  request: {
    params: z.object({
      name: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Unique command name',
                  title: 'Name',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'name',
            required: true,
          },
          description: 'Unique command name',
          title: 'Name',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    body: {
      description: 'Command',
      content: { 'application/json': { schema: UpdateCommandRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: UpdateCommandResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteCommandsNameRoute = createRoute({
  method: 'delete',
  path: '/commands/{name}',
  tags: ['Custom commands'],
  summary: 'Delete command',
  description: 'Deletes custom chat command',
  operationId: 'DeleteCommand',
  request: {
    params: z.object({
      name: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '001' } },
            },
            in: 'path',
            name: 'name',
            required: true,
          },
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeleteCommandResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getConnectRoute = createRoute({
  method: 'get',
  path: '/connect',
  tags: ['Users'],
  summary: 'Connect (WebSocket)',
  description: 'Establishes WebSocket connection for user',
  operationId: 'Connect',
  request: {
    query: z.object({
      json: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          ConnectRequestSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ConnectRequest', 'x-stream-index': '001' },
                },
              },
              in: 'query',
              name: 'json',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getDevicesRoute = createRoute({
  method: 'get',
  path: '/devices',
  tags: ['Devices'],
  summary: 'List devices',
  description: 'Returns all available devices',
  operationId: 'ListDevices',
  request: {
    query: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: '**Server-side only**. User ID which server acts upon',
                  title: 'User ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'query',
            name: 'user_id',
            required: false,
          },
          description: '**Server-side only**. User ID which server acts upon',
          title: 'User ID',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDevicesResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postDevicesRoute = createRoute({
  method: 'post',
  path: '/devices',
  tags: ['Devices', 'Push'],
  summary: 'Create device',
  description:
    'Adds a new device to a user, if the same device already exists the call will have no effect',
  operationId: 'CreateDevice',
  request: {
    body: {
      content: { 'application/json': { schema: CreateDeviceRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteDevicesRoute = createRoute({
  method: 'delete',
  path: '/devices',
  tags: ['Devices'],
  summary: 'Delete device',
  description: 'Deletes device',
  operationId: 'DeleteDevice',
  request: {
    query: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Device ID to delete',
                  title: 'ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'query',
            name: 'id',
            required: false,
          },
          description: 'Device ID to delete',
          title: 'ID',
          writeOnly: true,
          'x-stream-index': '001',
        }),
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: '**Server-side only**. User ID which server acts upon',
                  title: 'User ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '002',
                },
              },
            },
            in: 'query',
            name: 'user_id',
            required: false,
          },
          description: '**Server-side only**. User ID which server acts upon',
          title: 'User ID',
          writeOnly: true,
          'x-stream-index': '002',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postExportUsersRoute = createRoute({
  method: 'post',
  path: '/export/users',
  tags: ['Users'],
  summary: 'Export users',
  description: 'Exports user profile, reactions and messages for list of given users',
  operationId: 'ExportUser',
  request: {
    body: { content: { 'application/json': { schema: ExportUsersRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExportUsersResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postExportChannelsRoute = createRoute({
  method: 'post',
  path: '/export_channels',
  tags: ['Channels'],
  summary: 'Export channels',
  description: 'Exports channel data to JSON file',
  operationId: 'ExportChannels',
  request: {
    body: {
      content: { 'application/json': { schema: ExportChannelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExportChannelsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getExportChannelsIdRoute = createRoute({
  method: 'get',
  path: '/export_channels/{id}',
  tags: ['Channels'],
  summary: 'Export channels status',
  operationId: 'GetExportChannelsStatus',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Task ID',
                  title: 'ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          description: 'Task ID',
          title: 'ID',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetExportChannelsStatusResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postGuestRoute = createRoute({
  method: 'post',
  path: '/guest',
  tags: ['Users'],
  summary: 'Create guest',
  description: 'Creates guest user',
  operationId: 'CreateGuest',
  request: {
    body: { content: { 'application/json': { schema: GuestRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: GuestResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postImportUrlsRoute = createRoute({
  method: 'post',
  path: '/import_urls',
  tags: ['Imports'],
  summary: 'Create import URL',
  description: 'Creates a new import URL',
  operationId: 'CreateImportURL',
  request: {
    body: {
      content: { 'application/json': { schema: CreateImportURLRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateImportURLResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getImportsRoute = createRoute({
  method: 'get',
  path: '/imports',
  tags: ['Imports'],
  summary: 'Get import',
  description: 'Gets an import',
  operationId: 'ListImports',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListImportsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postImportsRoute = createRoute({
  method: 'post',
  path: '/imports',
  tags: ['Imports'],
  summary: 'Create import',
  description: 'Creates a new import',
  operationId: 'CreateImport',
  request: {
    body: {
      content: { 'application/json': { schema: CreateImportRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateImportResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getImportsIdRoute = createRoute({
  method: 'get',
  path: '/imports/{id}',
  tags: ['Imports'],
  summary: 'Get import',
  description: 'Gets an import',
  operationId: 'GetImport',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetImportResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getLongpollRoute = createRoute({
  method: 'get',
  path: '/longpoll',
  tags: ['Users'],
  summary: 'Long Poll (Transport)',
  description: 'WebSocket fallback transport endpoint',
  operationId: 'LongPoll',
  request: {
    query: z.object({
      json: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          ConnectRequestSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/ConnectRequest', 'x-stream-index': '001' },
                },
              },
              in: 'query',
              name: 'json',
              required: false,
            },
          }),
        )
        .exactOptional(),
      connection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string().max(36))
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { maxLength: 36, type: 'string', writeOnly: true, 'x-stream-index': '002' },
              },
            },
            in: 'query',
            name: 'connection_id',
            required: false,
          },
          writeOnly: true,
          'x-stream-index': '002',
        }),
    }),
  },
  responses: {
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getMembersRoute = createRoute({
  method: 'get',
  path: '/members',
  tags: ['Channels'],
  summary: 'Query members',
  description: 'Find and filter channel members',
  operationId: 'QueryMembers',
  request: {
    query: z.object({
      payload: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          QueryMembersRequestSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/QueryMembersRequest',
                    'x-stream-index': '001',
                  },
                },
              },
              in: 'query',
              name: 'payload',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MembersResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getMessagesIdRoute = createRoute({
  method: 'get',
  path: '/messages/{id}',
  tags: ['Messages'],
  summary: 'Get message',
  description: 'Returns message by ID',
  operationId: 'GetMessage',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Message ID',
                  title: 'ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          description: 'Message ID',
          title: 'ID',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageWithPendingMetadataResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putMessagesIdRoute = createRoute({
  method: 'put',
  path: '/messages/{id}',
  tags: ['Messages'],
  summary: 'Partially message update',
  description: 'Updates certain fields of the message',
  operationId: 'UpdateMessagePartial',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateMessagePartialRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postMessagesIdRoute = createRoute({
  method: 'post',
  path: '/messages/{id}',
  tags: ['Messages'],
  summary: 'Update message',
  description: 'Updates message with new data',
  operationId: 'UpdateMessage',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Update Message Request',
      content: { 'application/json': { schema: UpdateMessageRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteMessagesIdRoute = createRoute({
  method: 'delete',
  path: '/messages/{id}',
  tags: ['Messages'],
  summary: 'Delete message',
  description: 'Deletes message',
  operationId: 'DeleteMessage',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Message ID to delete',
                  title: 'ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          description: 'Message ID to delete',
          title: 'ID',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    query: z.object({
      hard: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.boolean())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Delete all message reactions and replies as well',
                  title: 'Hard',
                  type: 'boolean',
                  writeOnly: true,
                  'x-stream-index': '002',
                },
              },
            },
            in: 'query',
            name: 'hard',
            required: false,
          },
          description: 'Delete all message reactions and replies as well',
          title: 'Hard',
          writeOnly: true,
          'x-stream-index': '002',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postMessagesIdActionRoute = createRoute({
  method: 'post',
  path: '/messages/{id}/action',
  tags: ['Messages'],
  summary: 'Run message command action',
  description: 'Executes message command action with given parameters',
  operationId: 'RunMessageAction',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Message ID',
                  title: 'ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          description: 'Message ID',
          title: 'ID',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    body: {
      content: { 'application/json': { schema: MessageActionRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postMessagesIdCommitRoute = createRoute({
  method: 'post',
  path: '/messages/{id}/commit',
  summary: 'Commit message',
  description: 'Commits a pending message, which will make it visible in the channel',
  operationId: 'CommitMessage',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postMessagesIdReactionRoute = createRoute({
  method: 'post',
  path: '/messages/{id}/reaction',
  tags: ['Messages', 'Reactions'],
  summary: 'Send reaction',
  description: 'Sends reaction to specified message',
  operationId: 'SendReaction',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Message ID to send reaction for',
                  title: 'ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          description: 'Message ID to send reaction for',
          title: 'ID',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    body: {
      content: { 'application/json': { schema: SendReactionRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReactionResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteMessagesIdReactionTypeRoute = createRoute({
  method: 'delete',
  path: '/messages/{id}/reaction/{type}',
  tags: ['Messages', 'Reactions'],
  summary: 'Delete reaction',
  description: 'Removes user reaction from the message',
  operationId: 'DeleteReaction',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Message ID to remove reaction from',
                  title: 'ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          description: 'Message ID to remove reaction from',
          title: 'ID',
          writeOnly: true,
          'x-stream-index': '001',
        }),
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Reaction type to remove',
                  title: 'Type',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '002',
                },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          description: 'Reaction type to remove',
          title: 'Type',
          writeOnly: true,
          'x-stream-index': '002',
        }),
    }),
    query: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: '**Server-side only**. User ID which server acts upon',
                  title: 'User ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '003',
                },
              },
            },
            in: 'query',
            name: 'user_id',
            required: false,
          },
          description: '**Server-side only**. User ID which server acts upon',
          title: 'User ID',
          writeOnly: true,
          'x-stream-index': '003',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReactionRemovalResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getMessagesIdReactionsRoute = createRoute({
  method: 'get',
  path: '/messages/{id}/reactions',
  tags: ['Messages', 'Reactions'],
  summary: 'Get reactions',
  description: 'Returns list of reactions of specific message',
  operationId: 'GetReactions',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Message ID',
                  title: 'ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          description: 'Message ID',
          title: 'ID',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.number())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Number of records to return',
                  title: 'Limit',
                  type: 'number',
                  writeOnly: true,
                  'x-stream-index': '002',
                },
              },
            },
            in: 'query',
            name: 'limit',
            required: false,
          },
          description: 'Number of records to return',
          title: 'Limit',
          writeOnly: true,
          'x-stream-index': '002',
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.number())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Number of records to offset',
                  title: 'Offset',
                  type: 'number',
                  writeOnly: true,
                  'x-stream-index': '003',
                },
              },
            },
            in: 'query',
            name: 'offset',
            required: false,
          },
          description: 'Number of records to offset',
          title: 'Offset',
          writeOnly: true,
          'x-stream-index': '003',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetReactionsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postMessagesIdTranslateRoute = createRoute({
  method: 'post',
  path: '/messages/{id}/translate',
  tags: ['Messages'],
  summary: 'Translate message',
  description: 'Translates message to a given language using automated translation software',
  operationId: 'TranslateMessage',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TranslateMessageRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: MessageResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getMessagesParentIdRepliesRoute = createRoute({
  method: 'get',
  path: '/messages/{parent_id}/replies',
  tags: ['Messages'],
  summary: 'Get replies',
  description: 'Returns replies (thread) of the message',
  operationId: 'GetReplies',
  request: {
    params: z.object({
      parent_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'ID of a message which replies to return',
                  title: 'Parent ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'parent_id',
            required: true,
          },
          description: 'ID of a message which replies to return',
          title: 'Parent ID',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    query: z.object({
      id_gte: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '002.001.003' } },
            },
            in: 'query',
            name: 'id_gte',
            required: false,
          },
          'x-stream-index': '002.001.003',
        }),
      id_gt: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '002.001.004' } },
            },
            in: 'query',
            name: 'id_gt',
            required: false,
          },
          'x-stream-index': '002.001.004',
        }),
      id_lte: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '002.001.005' } },
            },
            in: 'query',
            name: 'id_lte',
            required: false,
          },
          'x-stream-index': '002.001.005',
        }),
      id_lt: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '002.001.006' } },
            },
            in: 'query',
            name: 'id_lt',
            required: false,
          },
          'x-stream-index': '002.001.006',
        }),
      created_at_after_or_equal: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          z.iso.datetime({ offset: true }),
        )
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { format: 'date-time', type: 'string', 'x-stream-index': '002.001.007' },
              },
            },
            in: 'query',
            name: 'created_at_after_or_equal',
            required: false,
          },
          'x-stream-index': '002.001.007',
        }),
      created_at_after: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          z.iso.datetime({ offset: true }),
        )
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { format: 'date-time', type: 'string', 'x-stream-index': '002.001.008' },
              },
            },
            in: 'query',
            name: 'created_at_after',
            required: false,
          },
          'x-stream-index': '002.001.008',
        }),
      created_at_before_or_equal: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          z.iso.datetime({ offset: true }),
        )
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { format: 'date-time', type: 'string', 'x-stream-index': '002.001.009' },
              },
            },
            in: 'query',
            name: 'created_at_before_or_equal',
            required: false,
          },
          'x-stream-index': '002.001.009',
        }),
      created_at_before: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          z.iso.datetime({ offset: true }),
        )
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { format: 'date-time', type: 'string', 'x-stream-index': '002.001.010' },
              },
            },
            in: 'query',
            name: 'created_at_before',
            required: false,
          },
          'x-stream-index': '002.001.010',
        }),
      id_around: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '002.001.011' } },
            },
            in: 'query',
            name: 'id_around',
            required: false,
          },
          'x-stream-index': '002.001.011',
        }),
      created_at_around: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          z.iso.datetime({ offset: true }),
        )
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { format: 'date-time', type: 'string', 'x-stream-index': '002.001.012' },
              },
            },
            in: 'query',
            name: 'created_at_around',
            required: false,
          },
          'x-stream-index': '002.001.012',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetRepliesResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postModerationBanRoute = createRoute({
  method: 'post',
  path: '/moderation/ban',
  tags: ['Users', 'Moderation'],
  summary: 'Ban user',
  description: 'Restricts user activity either in specific channel or globally',
  operationId: 'Ban',
  request: {
    body: { content: { 'application/json': { schema: BanRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteModerationBanRoute = createRoute({
  method: 'delete',
  path: '/moderation/ban',
  tags: ['Users', 'Moderation'],
  summary: 'Unban user',
  description: 'Removes previously applied ban',
  operationId: 'Unban',
  request: {
    query: z.object({
      target_user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '001' } },
            },
            in: 'query',
            name: 'target_user_id',
            required: false,
          },
          'x-stream-index': '001',
        }),
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '002' } },
            },
            in: 'query',
            name: 'type',
            required: false,
          },
          'x-stream-index': '002',
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '003' } },
            },
            in: 'query',
            name: 'id',
            required: false,
          },
          'x-stream-index': '003',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postModerationFlagRoute = createRoute({
  method: 'post',
  path: '/moderation/flag',
  tags: ['Moderation', 'Messages', 'Users'],
  summary: 'Flag',
  description: 'Reports message or user for review by moderators',
  operationId: 'Flag',
  request: {
    body: { content: { 'application/json': { schema: FlagRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlagResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getModerationFlagsMessageRoute = createRoute({
  method: 'get',
  path: '/moderation/flags/message',
  tags: ['Messages', 'Moderation'],
  summary: 'Query Message Flags',
  description: 'Find and filter message flags',
  operationId: 'QueryMessageFlags',
  request: {
    query: z.object({
      payload: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          QueryMessageFlagsRequestSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/QueryMessageFlagsRequest',
                    'x-stream-index': '001',
                  },
                },
              },
              in: 'query',
              name: 'payload',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QueryMessageFlagsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postModerationMuteRoute = createRoute({
  method: 'post',
  path: '/moderation/mute',
  tags: ['Users', 'Moderation'],
  summary: 'Mute user',
  description: 'Mutes one or several users',
  operationId: 'MuteUser',
  request: {
    body: { content: { 'application/json': { schema: MuteUserRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: MuteUserResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postModerationMuteChannelRoute = createRoute({
  method: 'post',
  path: '/moderation/mute/channel',
  tags: ['Channels'],
  summary: 'Mute channel',
  description: 'Mutes channel for user',
  operationId: 'MuteChannel',
  request: {
    body: { content: { 'application/json': { schema: MuteChannelRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: MuteChannelResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postModerationUnflagRoute = createRoute({
  method: 'post',
  path: '/moderation/unflag',
  tags: ['Moderation', 'Messages', 'Users'],
  summary: 'Unflag',
  description: 'Removes previously created user or message flag',
  operationId: 'Unflag',
  request: {
    body: { content: { 'application/json': { schema: FlagRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlagResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postModerationUnmuteRoute = createRoute({
  method: 'post',
  path: '/moderation/unmute',
  tags: ['Users', 'Moderation'],
  summary: 'Unmute user',
  description: 'Unmutes previously muted user',
  operationId: 'UnmuteUser',
  request: {
    body: { content: { 'application/json': { schema: UnmuteUserRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: UnmuteResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postModerationUnmuteChannelRoute = createRoute({
  method: 'post',
  path: '/moderation/unmute/channel',
  tags: ['Channels'],
  summary: 'Unmute channel',
  description: 'Unmutes channel for user',
  operationId: 'UnmuteChannel',
  request: {
    body: {
      content: { 'application/json': { schema: UnmuteChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: UnmuteResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getOgRoute = createRoute({
  method: 'get',
  path: '/og',
  tags: ['Messages'],
  summary: 'Get OG',
  description: 'Get an OpenGraph attachment for a link',
  operationId: 'GetOG',
  request: {
    query: z.object({
      url: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'URL to be scraped',
                  title: 'URL',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'query',
            name: 'url',
            required: false,
          },
          description: 'URL to be scraped',
          title: 'URL',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get OG Attachment',
      content: { 'application/json': { schema: GetOGResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getPermissionsRoute = createRoute({
  method: 'get',
  path: '/permissions',
  tags: ['Permissions V2'],
  summary: 'List permissions',
  description: 'Lists all available permissions',
  operationId: 'ListPermissions',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListPermissionsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getPermissionsIdRoute = createRoute({
  method: 'get',
  path: '/permissions/{id}',
  tags: ['Permissions V2'],
  summary: 'Get permission',
  description: 'Gets custom permission',
  operationId: 'GetPermission',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Permission ID',
                  title: 'ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          description: 'Permission ID',
          title: 'ID',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetCustomPermissionResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getPushProvidersRoute = createRoute({
  method: 'get',
  path: '/push_providers',
  tags: ['Push', 'Settings'],
  summary: 'List push providers',
  description: 'List details of all push providers.',
  operationId: 'ListPushProviders',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListPushProvidersResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postPushProvidersRoute = createRoute({
  method: 'post',
  path: '/push_providers',
  tags: ['Push', 'Settings'],
  summary: 'Upsert a push provider',
  description: 'Upsert a push provider for v2 with multi bundle/package support',
  operationId: 'UpsertPushProvider',
  request: {
    body: {
      content: { 'application/json': { schema: UpsertPushProviderRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: UpsertPushProviderResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deletePushProvidersTypeNameRoute = createRoute({
  method: 'delete',
  path: '/push_providers/{type}/{name}',
  tags: ['Push', 'Settings'],
  summary: 'Delete a push provider',
  description:
    "Delete a push provider from v2 with multi bundle/package support. v1 isn't supported in this endpoint",
  operationId: 'DeletePushProvider',
  request: {
    params: z.object({
      type: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          z.enum(['apn', 'firebase', 'huawei', 'xiaomi']),
        )
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  enum: ['apn', 'firebase', 'huawei', 'xiaomi'],
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'type',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001',
        }),
      name: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string().min(1).max(36))
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  maxLength: 36,
                  minLength: 1,
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '002',
                },
              },
            },
            in: 'path',
            name: 'name',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getQueryBannedUsersRoute = createRoute({
  method: 'get',
  path: '/query_banned_users',
  tags: ['Users', 'Moderation'],
  summary: 'Query Banned Users',
  description: 'Find and filter channel scoped or global user bans',
  operationId: 'QueryBannedUsers',
  request: {
    query: z.object({
      payload: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          QueryBannedUsersRequestSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/QueryBannedUsersRequest',
                    'x-stream-index': '001',
                  },
                },
              },
              in: 'query',
              name: 'payload',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QueryBannedUsersResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getRateLimitsRoute = createRoute({
  method: 'get',
  path: '/rate_limits',
  tags: ['Settings'],
  summary: 'Get rate limits',
  description: 'Get rate limits usage and quotas',
  operationId: 'GetRateLimits',
  request: {
    query: z.object({
      server_side: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.boolean())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Whether to include server-side platform limits or not',
                  title: 'Server-side',
                  type: 'boolean',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'query',
            name: 'server_side',
            required: false,
          },
          description: 'Whether to include server-side platform limits or not',
          title: 'Server-side',
          writeOnly: true,
          'x-stream-index': '001',
        }),
      android: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.boolean())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Whether to include Android platform limits or not',
                  title: 'Android',
                  type: 'boolean',
                  writeOnly: true,
                  'x-stream-index': '002',
                },
              },
            },
            in: 'query',
            name: 'android',
            required: false,
          },
          description: 'Whether to include Android platform limits or not',
          title: 'Android',
          writeOnly: true,
          'x-stream-index': '002',
        }),
      ios: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.boolean())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Whether to include iOS platform limits or not',
                  title: 'iOS',
                  type: 'boolean',
                  writeOnly: true,
                  'x-stream-index': '003',
                },
              },
            },
            in: 'query',
            name: 'ios',
            required: false,
          },
          description: 'Whether to include iOS platform limits or not',
          title: 'iOS',
          writeOnly: true,
          'x-stream-index': '003',
        }),
      web: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.boolean())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Whether to include web platform limits or not',
                  title: 'Web',
                  type: 'boolean',
                  writeOnly: true,
                  'x-stream-index': '004',
                },
              },
            },
            in: 'query',
            name: 'web',
            required: false,
          },
          description: 'Whether to include web platform limits or not',
          title: 'Web',
          writeOnly: true,
          'x-stream-index': '004',
        }),
      endpoints: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description:
                    'Specific endpoints to show limits for, as a comma-separated list of values',
                  title: 'Endpoints',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '005',
                },
              },
            },
            in: 'query',
            name: 'endpoints',
            required: false,
          },
          description: 'Specific endpoints to show limits for, as a comma-separated list of values',
          title: 'Endpoints',
          writeOnly: true,
          'x-stream-index': '005',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get Rate Limits Response',
      content: { 'application/json': { schema: GetRateLimitsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getRecipientsRoute = createRoute({
  method: 'get',
  path: '/recipients',
  tags: ['Campaigns'],
  summary: 'Query recipients',
  description: 'Query recipients',
  operationId: 'QueryRecipients',
  request: {
    query: z.object({
      payload: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          QueryRecipientsRequestSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/QueryRecipientsRequest',
                    'x-stream-index': '001',
                  },
                },
              },
              in: 'query',
              name: 'payload',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QueryRecipientsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getRolesRoute = createRoute({
  method: 'get',
  path: '/roles',
  tags: ['Permissions V2'],
  summary: 'List roles',
  description: 'Lists all available roles',
  operationId: 'ListRoles',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListRolesResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postRolesRoute = createRoute({
  method: 'post',
  path: '/roles',
  tags: ['Permissions V2'],
  summary: 'Create role',
  description: 'Creates custom role',
  operationId: 'CreateRole',
  request: {
    body: { content: { 'application/json': { schema: CreateRoleRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateRoleResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteRolesNameRoute = createRoute({
  method: 'delete',
  path: '/roles/{name}',
  tags: ['Permissions V2'],
  summary: 'Delete role',
  description: 'Deletes custom role',
  operationId: 'DeleteRole',
  request: {
    params: z.object({
      name: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Role name',
                  title: 'Name',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'name',
            required: true,
          },
          description: 'Role name',
          title: 'Name',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['Channels', 'Messages'],
  summary: 'Search messages',
  description: 'Search messages across channels',
  operationId: 'Search',
  request: {
    query: z.object({
      payload: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          SearchRequestSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/SearchRequest',
                    description: 'JSON object with search payload',
                    title: 'Payload',
                    'x-stream-index': '001',
                  },
                },
              },
              in: 'query',
              name: 'payload',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getSegmentsRoute = createRoute({
  method: 'get',
  path: '/segments',
  tags: ['Campaigns'],
  summary: 'Query segments',
  description: 'Query segments',
  operationId: 'QuerySegments',
  request: {
    query: z.object({
      payload: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          QuerySegmentsRequestSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/QuerySegmentsRequest',
                    'x-stream-index': '001',
                  },
                },
              },
              in: 'query',
              name: 'payload',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QuerySegmentsResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postSegmentsRoute = createRoute({
  method: 'post',
  path: '/segments',
  tags: ['Campaigns'],
  summary: 'Create segment',
  description: 'Create a segment',
  operationId: 'CreateSegment',
  request: {
    body: {
      content: { 'application/json': { schema: CreateSegmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateSegmentResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const putSegmentsIdRoute = createRoute({
  method: 'put',
  path: '/segments/{id}',
  tags: ['Campaigns'],
  summary: 'Update segment',
  description: 'Update an existing segment',
  operationId: 'UpdateSegment',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '002.001' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '002.001',
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSegmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: UpdateSegmentResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteSegmentsIdRoute = createRoute({
  method: 'delete',
  path: '/segments/{id}',
  tags: ['Campaigns'],
  summary: 'Delete segment',
  description: 'Delete a segment',
  operationId: 'DeleteSegment',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001.001' },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001.001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeleteSegmentResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postSyncRoute = createRoute({
  method: 'post',
  path: '/sync',
  tags: ['Channels', 'Events'],
  summary: 'Sync',
  description: 'Returns all events happened since client disconnect in specified channels',
  operationId: 'Sync',
  request: {
    query: z.object({
      with_inaccessible_cids: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.boolean())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: "If set to true this will add 'inaccessible_cids' to response type",
                  title: 'With inaccessible CIDs',
                  type: 'boolean',
                  'x-stream-index': '003',
                },
              },
            },
            in: 'query',
            name: 'with_inaccessible_cids',
            required: false,
          },
          description: "If set to true this will add 'inaccessible_cids' to response type",
          title: 'With inaccessible CIDs',
          'x-stream-index': '003',
        }),
      watch: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.boolean())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description:
                    'If set to true this will start watching requested and newly added channels that user has access to. If error occurred with this option enabled and it is not an input error - channels will still be watched.',
                  title: 'Watch synced channels',
                  type: 'boolean',
                  'x-stream-index': '004',
                },
              },
            },
            in: 'query',
            name: 'watch',
            required: false,
          },
          description:
            'If set to true this will start watching requested and newly added channels that user has access to. If error occurred with this option enabled and it is not an input error - channels will still be watched.',
          title: 'Watch synced channels',
          'x-stream-index': '004',
        }),
      client_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '006.002' } },
            },
            in: 'query',
            name: 'client_id',
            required: false,
          },
          'x-stream-index': '006.002',
        }),
      connection_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '006.003' } },
            },
            in: 'query',
            name: 'connection_id',
            required: false,
          },
          'x-stream-index': '006.003',
        }),
    }),
    body: { content: { 'application/json': { schema: SyncRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: SyncResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getTasksIdRoute = createRoute({
  method: 'get',
  path: '/tasks/{id}',
  tags: ['Tasks'],
  summary: 'Get status of a task',
  description: 'Gets status of a task',
  operationId: 'GetTask',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Task ID',
                  title: 'ID',
                  type: 'string',
                  writeOnly: true,
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'id',
            required: true,
          },
          description: 'Task ID',
          title: 'ID',
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get Task Response',
      content: { 'application/json': { schema: GetTaskResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'Query users',
  description: 'Find and filter users',
  operationId: 'QueryUsers',
  request: {
    query: z.object({
      payload: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          QueryUsersRequestSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/QueryUsersRequest',
                    'x-stream-index': '001',
                  },
                },
              },
              in: 'query',
              name: 'payload',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UsersResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['Users'],
  summary: 'Upsert users',
  description: 'Update or create users in bulk',
  operationId: 'UpdateUsers',
  request: {
    body: { content: { 'application/json': { schema: UpdateUsersRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: UpdateUsersResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const patchUsersRoute = createRoute({
  method: 'patch',
  path: '/users',
  tags: ['Users'],
  summary: 'Partially update user',
  description: 'Updates certain fields of the user',
  operationId: 'UpdateUsersPartial',
  request: {
    body: {
      content: { 'application/json': { schema: UpdateUserPartialRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UpdateUsersResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postUsersDeactivateRoute = createRoute({
  method: 'post',
  path: '/users/deactivate',
  tags: ['Users', 'GDPR', 'Moderation'],
  summary: 'Deactivate users',
  description: 'Deactivate users in batches',
  operationId: 'DeactivateUsers',
  request: {
    body: {
      content: { 'application/json': { schema: DeactivateUsersRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeactivateUsersResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postUsersDeleteRoute = createRoute({
  method: 'post',
  path: '/users/delete',
  tags: ['Users', 'GDPR', 'Moderation'],
  summary: 'Delete Users',
  description: 'Deletes users and optionally all their belongings asynchronously.',
  operationId: 'DeleteUsers',
  request: {
    body: { content: { 'application/json': { schema: DeleteUsersRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeleteUsersResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postUsersReactivateRoute = createRoute({
  method: 'post',
  path: '/users/reactivate',
  tags: ['Users', 'GDPR', 'Moderation'],
  summary: 'Reactivate users',
  description: 'Reactivate users in batches',
  operationId: 'ReactivateUsers',
  request: {
    body: {
      content: { 'application/json': { schema: ReactivateUsersRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReactivateUsersResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postUsersRestoreRoute = createRoute({
  method: 'post',
  path: '/users/restore',
  tags: ['Users'],
  summary: 'Restore users',
  description: 'Restore soft deleted users',
  operationId: 'RestoreUsers',
  request: {
    body: {
      content: { 'application/json': { schema: RestoreUsersRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const deleteUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/users/{user_id}',
  tags: ['Users', 'GDPR', 'Moderation'],
  summary: 'Delete user',
  description:
    "Deletes user and optionally all their belongings. The Endpoint is deprecated, please use 'Delete Users' endpoint instead",
  operationId: 'DeleteUser',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'ID of user to delete',
                  title: 'User ID',
                  type: 'string',
                  'x-stream-index': '001',
                },
              },
            },
            in: 'path',
            name: 'user_id',
            required: true,
          },
          description: 'ID of user to delete',
          title: 'User ID',
          'x-stream-index': '001',
        }),
    }),
    query: z.object({
      mark_messages_deleted: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.boolean())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Delete user messages',
                  title: 'Mark messages deleted',
                  type: 'boolean',
                  'x-stream-index': '002',
                },
              },
            },
            in: 'query',
            name: 'mark_messages_deleted',
            required: false,
          },
          description: 'Delete user messages',
          title: 'Mark messages deleted',
          'x-stream-index': '002',
        }),
      hard_delete: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.boolean())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Delete all user data (messages, reactions, etc.)',
                  title: 'Hard delete',
                  type: 'boolean',
                  'x-stream-index': '003',
                },
              },
            },
            in: 'query',
            name: 'hard_delete',
            required: false,
          },
          description: 'Delete all user data (messages, reactions, etc.)',
          title: 'Hard delete',
          'x-stream-index': '003',
        }),
      delete_conversation_channels: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.boolean())
        .exactOptional()
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: {
                  description: 'Delete all one-to-one channels of the user',
                  title: 'Delete conversations',
                  type: 'boolean',
                  'x-stream-index': '004',
                },
              },
            },
            in: 'query',
            name: 'delete_conversation_channels',
            required: false,
          },
          description: 'Delete all one-to-one channels of the user',
          title: 'Delete conversations',
          'x-stream-index': '004',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeleteUserResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postUsersUserIdDeactivateRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/deactivate',
  tags: ['Users', 'GDPR', 'Moderation'],
  summary: 'Deactivate user',
  description: 'Deactivates user with possibility to activate it back',
  operationId: 'DeactivateUser',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { title: 'User ID', type: 'string', 'x-stream-index': '001' },
              },
            },
            in: 'path',
            name: 'user_id',
            required: true,
          },
          title: 'User ID',
          'x-stream-index': '001',
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeactivateUserRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeactivateUserResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postUsersUserIdEventRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/event',
  tags: ['Events'],
  summary: 'Send user event',
  description: 'Sends a custom event to a user',
  operationId: 'SendUserCustomEvent',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { type: 'string', writeOnly: true, 'x-stream-index': '001' },
              },
            },
            in: 'path',
            name: 'user_id',
            required: true,
          },
          writeOnly: true,
          'x-stream-index': '001',
        }),
    }),
    body: {
      content: { 'application/json': { schema: SendUserCustomEventRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const getUsersUserIdExportRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/export',
  tags: ['Users'],
  summary: 'Export user',
  description:
    "Exports the user's profile, reactions and messages. Raises an error if a user has more than 10k messages or reactions",
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': { schema: { type: 'string', 'x-stream-index': '001' } },
            },
            in: 'path',
            name: 'user_id',
            required: true,
          },
          'x-stream-index': '001',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExportUserResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})

export const postUsersUserIdReactivateRoute = createRoute({
  method: 'post',
  path: '/users/{user_id}/reactivate',
  tags: ['Users', 'GDPR', 'Moderation'],
  summary: 'Reactivate user',
  description: "Activates user who's been deactivated previously",
  operationId: 'ReactivateUser',
  request: {
    params: z.object({
      user_id: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          try {
            return JSON.parse(val)
          } catch {
            return val
          }
        }, z.string())
        .openapi({
          param: {
            content: {
              'application/json': {
                schema: { title: 'User ID', type: 'string', 'x-stream-index': '001' },
              },
            },
            in: 'path',
            name: 'user_id',
            required: true,
          },
          title: 'User ID',
          'x-stream-index': '001',
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReactivateUserRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReactivateUserResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: APIErrorSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: APIErrorSchema } },
      headers: z.object({
        'X-RateLimit-Limit': {
          description: 'The number of allowed requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of allowed requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of remaining requests in the current period',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'The number of remaining requests in the current period',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'Timestamp when number of requests will be reset',
          schema: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Timestamp when number of requests will be reset',
              param: { required: false },
            }),
        },
      }),
    },
  },
})
