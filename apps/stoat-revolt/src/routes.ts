import { createRoute, z } from '@hono/zod-openapi'

const MetadataSchema = z
  .xor([
    z
      .object({ type: z.literal('File') })
      .openapi({ description: 'File is just a generic uncategorised file', required: ['type'] }),
    z
      .object({ type: z.literal('Text') })
      .openapi({
        description: 'File contains textual data and should be displayed as such',
        required: ['type'],
      }),
    z
      .object({
        type: z.literal('Image'),
        width: z.int().min(0),
        height: z.int().min(0),
        thumbhash: z.array(z.int().min(0)).nullable().exactOptional(),
        animated: z.boolean().nullable().exactOptional(),
      })
      .openapi({
        description: 'File is an image with specific dimensions, and may be animated',
        required: ['height', 'type', 'width'],
      }),
    z
      .object({ type: z.literal('Video'), width: z.int().min(0), height: z.int().min(0) })
      .openapi({
        description: 'File is a video with specific dimensions',
        required: ['height', 'type', 'width'],
      }),
    z
      .object({ type: z.literal('Audio') })
      .openapi({ description: 'File is audio', required: ['type'] }),
  ])
  .openapi({ description: 'Metadata associated with a file' })
  .openapi('Metadata')

const FileSchema = z
  .object({
    _id: z.string().openapi({ description: 'Unique Id' }),
    tag: z.string().openapi({ description: 'Tag / bucket this file was uploaded to' }),
    filename: z.string().openapi({ description: 'Original filename' }),
    metadata: MetadataSchema.openapi({ description: 'Parsed metadata of this file' }),
    content_type: z.string().openapi({ description: 'Raw content type of this file' }),
    size: z.int().openapi({ description: 'Size of this file (in bytes)' }),
    deleted: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether this file was deleted' }),
    reported: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether this file was reported' }),
    message_id: z.string().nullable().exactOptional(),
    user_id: z.string().nullable().exactOptional(),
    server_id: z.string().nullable().exactOptional(),
    object_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id of the object this file is associated with' }),
  })
  .openapi({
    description: 'File',
    required: ['_id', 'content_type', 'filename', 'metadata', 'size', 'tag'],
  })
  .openapi('File')

const RelationshipStatusSchema = z
  .xor([
    z.literal('None').openapi({ description: 'No relationship with other user' }),
    z.literal('User').openapi({ description: 'Other user is us' }),
    z.literal('Friend').openapi({ description: 'Friends with the other user' }),
    z.literal('Outgoing').openapi({ description: 'Pending friend request to user' }),
    z.literal('Incoming').openapi({ description: 'Incoming friend request from user' }),
    z.literal('Blocked').openapi({ description: 'Blocked this user' }),
    z.literal('BlockedOther').openapi({ description: 'Blocked by this user' }),
  ])
  .openapi({ description: "User's relationship with another user (or themselves)" })
  .openapi('RelationshipStatus')

const RelationshipSchema = z
  .object({
    _id: z.string().openapi({ description: "Other user's Id" }),
    status: RelationshipStatusSchema.openapi({ description: 'Relationship status with them' }),
  })
  .openapi({
    description: 'Relationship entry indicating current status with other user',
    required: ['_id', 'status'],
  })
  .openapi('Relationship')

const PresenceSchema = z
  .xor([
    z.literal('Online').openapi({ description: 'User is online' }),
    z.literal('Idle').openapi({ description: 'User is not currently available' }),
    z.literal('Focus').openapi({ description: 'User is focusing / will only receive mentions' }),
    z.literal('Busy').openapi({ description: 'User is busy / will not receive any notifications' }),
    z.literal('Invisible').openapi({ description: 'User appears to be offline' }),
  ])
  .openapi({ description: 'Presence status' })
  .openapi('Presence')

const UserStatusSchema = z
  .object({
    text: z
      .string()
      .min(0)
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom status text' }),
    presence: PresenceSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Current presence option' }),
  })
  .openapi({ description: "User's active status", required: [] })
  .openapi('UserStatus')

const BotInformationSchema = z
  .object({ owner: z.string().openapi({ description: 'Id of the owner of this bot' }) })
  .openapi({ description: 'Bot information for if the user is a bot', required: ['owner'] })
  .openapi('BotInformation')

const UserSchema = z
  .object({
    _id: z.string().openapi({ description: 'Unique Id' }),
    username: z.string().openapi({ description: 'Username' }),
    discriminator: z.string().openapi({ description: 'Discriminator' }),
    display_name: z.string().nullable().exactOptional().openapi({ description: 'Display name' }),
    pronouns: z.string().nullable().exactOptional().openapi({ description: "User's pronouns" }),
    avatar: FileSchema.nullable().exactOptional().openapi({ description: 'Avatar attachment' }),
    relations: z
      .array(RelationshipSchema)
      .exactOptional()
      .openapi({ description: 'Relationships with other users' }),
    badges: z
      .uint32()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Bitfield of user badges\n\nhttps://docs.rs/revolt-models/latest/revolt_models/v0/enum.UserBadges.html',
      }),
    status: UserStatusSchema.nullable()
      .exactOptional()
      .openapi({ description: "User's current status" }),
    flags: z
      .uint32()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Enum of user flags\n\nhttps://docs.rs/revolt-models/latest/revolt_models/v0/enum.UserFlags.html',
      }),
    privileged: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this user is privileged' }),
    bot: BotInformationSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Bot information' }),
    relationship: RelationshipStatusSchema.openapi({
      description: "Current session user's relationship with this user",
    }),
    online: z.boolean().openapi({ description: 'Whether this user is currently online' }),
  })
  .openapi({
    description: 'User',
    required: ['_id', 'discriminator', 'online', 'relationship', 'username'],
  })
  .openapi('User')

const MemberCompositeKeySchema = z
  .object({
    server: z.string().openapi({ description: 'Server Id' }),
    user: z.string().openapi({ description: 'User Id' }),
  })
  .openapi({
    description: 'Composite primary key consisting of server and user id',
    required: ['server', 'user'],
  })
  .openapi('MemberCompositeKey')

const ISO8601TimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'ISO8601 formatted timestamp', example: '1970-01-01T00:00:00Z' })
  .openapi('ISO8601Timestamp')

const MemberSchema = z
  .object({
    _id: MemberCompositeKeySchema.openapi({ description: 'Unique member id' }),
    joined_at: ISO8601TimestampSchema.openapi({
      description: 'Time at which this user joined the server',
    }),
    nickname: z.string().nullable().exactOptional().openapi({ description: "Member's nickname" }),
    pronouns: z.string().nullable().exactOptional().openapi({ description: "Member's pronouns" }),
    avatar: FileSchema.nullable().exactOptional().openapi({ description: 'Avatar attachment' }),
    roles: z.array(z.string()).exactOptional().openapi({ description: "Member's roles" }),
    timeout: ISO8601TimestampSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Timestamp this member is timed out until' }),
    can_publish: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the member is server-wide voice muted' }),
    can_receive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the member is server-wide voice deafened' }),
  })
  .openapi({ description: 'Server Member', required: ['_id', 'joined_at'] })
  .openapi('Member')

const MessageWebhookSchema = z
  .object({ name: z.string(), avatar: z.string().nullable().exactOptional() })
  .openapi({
    description: 'Information about the webhook bundled with Message',
    required: ['name'],
  })
  .openapi('MessageWebhook')

const SystemMessageSchema = z
  .xor([
    z
      .object({ type: z.literal('text'), content: z.string() })
      .openapi({ required: ['content', 'type'] }),
    z
      .object({ type: z.literal('user_added'), id: z.string(), by: z.string() })
      .openapi({ required: ['by', 'id', 'type'] }),
    z
      .object({ type: z.literal('user_remove'), id: z.string(), by: z.string() })
      .openapi({ required: ['by', 'id', 'type'] }),
    z
      .object({ type: z.literal('user_joined'), id: z.string() })
      .openapi({ required: ['id', 'type'] }),
    z
      .object({ type: z.literal('user_left'), id: z.string() })
      .openapi({ required: ['id', 'type'] }),
    z
      .object({ type: z.literal('user_kicked'), id: z.string() })
      .openapi({ required: ['id', 'type'] }),
    z
      .object({ type: z.literal('user_banned'), id: z.string() })
      .openapi({ required: ['id', 'type'] }),
    z
      .object({ type: z.literal('channel_renamed'), name: z.string(), by: z.string() })
      .openapi({ required: ['by', 'name', 'type'] }),
    z
      .object({ type: z.literal('channel_description_changed'), by: z.string() })
      .openapi({ required: ['by', 'type'] }),
    z
      .object({ type: z.literal('channel_icon_changed'), by: z.string() })
      .openapi({ required: ['by', 'type'] }),
    z
      .object({ type: z.literal('channel_ownership_changed'), from: z.string(), to: z.string() })
      .openapi({ required: ['from', 'to', 'type'] }),
    z
      .object({ type: z.literal('message_pinned'), id: z.string(), by: z.string() })
      .openapi({ required: ['by', 'id', 'type'] }),
    z
      .object({ type: z.literal('message_unpinned'), id: z.string(), by: z.string() })
      .openapi({ required: ['by', 'id', 'type'] }),
    z
      .object({
        type: z.literal('call_started'),
        by: z.string(),
        finished_at: ISO8601TimestampSchema.nullable().exactOptional(),
      })
      .openapi({ required: ['by', 'type'] }),
  ])
  .openapi({ description: 'System Event' })
  .openapi('SystemMessage')

const LightspeedTypeSchema = z
  .literal('Channel')
  .openapi({ description: 'Type of remote Lightspeed.tv content' })
  .openapi('LightspeedType')

const TwitchTypeSchema = z
  .enum(['Channel', 'Video', 'Clip'])
  .openapi({ description: 'Type of remote Twitch content' })
  .openapi('TwitchType')

const BandcampTypeSchema = z
  .enum(['Album', 'Track'])
  .openapi({ description: 'Type of remote Bandcamp content' })
  .openapi('BandcampType')

const SpecialSchema = z
  .xor([
    z
      .object({ type: z.literal('None') })
      .openapi({ description: 'No remote content', required: ['type'] }),
    z
      .object({ type: z.literal('GIF') })
      .openapi({
        description:
          'Content hint that this contains a GIF\n\nUse metadata to find video or image to play',
        required: ['type'],
      }),
    z
      .object({
        type: z.literal('YouTube'),
        id: z.string(),
        creator_name: z.string().nullable().exactOptional(),
        creator_url: z.string().nullable().exactOptional(),
        timestamp: z.string().nullable().exactOptional(),
      })
      .openapi({ description: 'YouTube video', required: ['id', 'type'] }),
    z
      .object({ type: z.literal('Lightspeed'), content_type: LightspeedTypeSchema, id: z.string() })
      .openapi({ description: 'Lightspeed.tv stream', required: ['content_type', 'id', 'type'] }),
    z
      .object({ type: z.literal('Twitch'), content_type: TwitchTypeSchema, id: z.string() })
      .openapi({ description: 'Twitch stream or clip', required: ['content_type', 'id', 'type'] }),
    z
      .object({
        type: z.literal('XApp'),
        id: z.string(),
        text: z.string(),
        author_name: z.string(),
        author_handle: z.string(),
        author_url: z.string(),
        author_avatar_url: z.string().nullable().exactOptional(),
        created_timestamp: z.int().min(0),
        quote_id: z.string().nullable().exactOptional(),
        quote_text: z.string().nullable().exactOptional(),
        quote_author_handle: z.string().nullable().exactOptional(),
        quote_author_name: z.string().nullable().exactOptional(),
        quote_author_url: z.string().nullable().exactOptional(),
        replies: z.int().min(0),
        reposts: z.int().min(0),
        likes: z.int().min(0),
        views: z.int().min(0),
      })
      .openapi({
        description: 'X/Twitter post',
        required: [
          'author_handle',
          'author_name',
          'author_url',
          'created_timestamp',
          'id',
          'likes',
          'replies',
          'reposts',
          'text',
          'type',
          'views',
        ],
      }),
    z
      .object({ type: z.literal('Spotify'), content_type: z.string(), id: z.string() })
      .openapi({ description: 'Spotify track', required: ['content_type', 'id', 'type'] }),
    z
      .object({ type: z.literal('Soundcloud') })
      .openapi({ description: 'Soundcloud track', required: ['type'] }),
    z
      .object({ type: z.literal('Bandcamp'), content_type: BandcampTypeSchema, id: z.string() })
      .openapi({ description: 'Bandcamp track', required: ['content_type', 'id', 'type'] }),
    z
      .object({
        type: z.literal('AppleMusic'),
        album_id: z.string(),
        track_id: z.string().nullable().exactOptional(),
      })
      .openapi({ required: ['album_id', 'type'] }),
    z
      .object({ type: z.literal('Streamable'), id: z.string() })
      .openapi({ description: 'Streamable Video', required: ['id', 'type'] }),
    z
      .object({ type: z.literal('Gifbox'), poster_url: z.string().nullable().exactOptional() })
      .openapi({ description: 'Gifbox', required: ['type'] }),
  ])
  .openapi({ description: 'Information about special remote content' })
  .openapi('Special')

const ImageSizeSchema = z
  .xor([
    z.literal('Large').openapi({ description: 'Show large preview at the bottom of the embed' }),
    z.literal('Preview').openapi({ description: 'Show small preview to the side of the embed' }),
  ])
  .openapi({ description: 'Image positioning and size' })
  .openapi('ImageSize')

const ImageSchema = z
  .object({
    url: z.string().openapi({ description: 'URL to the original image' }),
    width: z.int().min(0).openapi({ description: 'Width of the image' }),
    height: z.int().min(0).openapi({ description: 'Height of the image' }),
    size: ImageSizeSchema.openapi({ description: 'Positioning and size' }),
  })
  .openapi({ description: 'Image', required: ['height', 'size', 'url', 'width'] })
  .openapi('Image')

const VideoSchema = z
  .object({
    url: z.string().openapi({ description: 'URL to the original video' }),
    width: z.int().min(0).openapi({ description: 'Width of the video' }),
    height: z.int().min(0).openapi({ description: 'Height of the video' }),
  })
  .openapi({ description: 'Video', required: ['height', 'url', 'width'] })
  .openapi('Video')

const EmbedSchema = z
  .xor([
    z
      .object({
        type: z.literal('Website'),
        url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Direct URL to web page' }),
        original_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Original direct URL' }),
        special: SpecialSchema.nullable()
          .exactOptional()
          .openapi({ description: 'Remote content' }),
        title: z.string().nullable().exactOptional().openapi({ description: 'Title of website' }),
        description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Description of website' }),
        image: ImageSchema.nullable().exactOptional().openapi({ description: 'Embedded image' }),
        video: VideoSchema.nullable().exactOptional().openapi({ description: 'Embedded video' }),
        site_name: z.string().nullable().exactOptional().openapi({ description: 'Site name' }),
        icon_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'URL to site icon' }),
        colour: z.string().nullable().exactOptional().openapi({ description: 'CSS Colour' }),
      })
      .openapi({ description: 'Website metadata', required: ['type'] }),
    z
      .object({
        type: z.literal('Image'),
        url: z.string().openapi({ description: 'URL to the original image' }),
        width: z.int().min(0).openapi({ description: 'Width of the image' }),
        height: z.int().min(0).openapi({ description: 'Height of the image' }),
        size: ImageSizeSchema.openapi({ description: 'Positioning and size' }),
      })
      .openapi({ description: 'Image', required: ['height', 'size', 'type', 'url', 'width'] }),
    z
      .object({
        type: z.literal('Video'),
        url: z.string().openapi({ description: 'URL to the original video' }),
        width: z.int().min(0).openapi({ description: 'Width of the video' }),
        height: z.int().min(0).openapi({ description: 'Height of the video' }),
      })
      .openapi({ description: 'Video', required: ['height', 'type', 'url', 'width'] }),
    z
      .object({
        type: z.literal('Text'),
        icon_url: z.string().nullable().exactOptional().openapi({ description: 'URL to icon' }),
        url: z.string().nullable().exactOptional().openapi({ description: 'URL for title' }),
        title: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Title of text embed' }),
        description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Description of text embed' }),
        media: FileSchema.nullable()
          .exactOptional()
          .openapi({ description: 'ID of uploaded autumn file' }),
        colour: z.string().nullable().exactOptional().openapi({ description: 'CSS Colour' }),
      })
      .openapi({ description: 'Text Embed', required: ['type'] }),
    z.object({ type: z.literal('None') }).openapi({ required: ['type'] }),
  ])
  .openapi({ description: 'Embed' })
  .openapi('Embed')

const InteractionsSchema = z
  .object({
    reactions: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reactions which should always appear and be distinct' }),
    restrict_reactions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether reactions should be restricted to the given list\n\nCan only be set to true if reactions list is of at least length 1',
      }),
  })
  .openapi({ description: 'Information to guide interactions on this message', required: [] })
  .openapi('Interactions')

const MasqueradeSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(32)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Replace the display name shown on this message' }),
    avatar: z
      .string()
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Replace the avatar shown on this message (URL to image file)' }),
    colour: z
      .string()
      .regex(
        /^(?:[a-z ]+|var\(--[a-z\d-]+\)|rgba?\([\d, ]+\)|#[a-f0-9]+|(repeating-)?(linear|conic|radial)-gradient\(([a-z ]+|var\(--[a-z\d-]+\)|rgba?\([\d, ]+\)|#[a-f0-9]+|\d+deg)([ ]+in[ ]+[a-z-]+([ ]+(shorter|longer|increasing|decreasing)[ ]+hue)?)?([ ]+(\d{1,3}%|0))?(,[ ]*([a-z ]+|var\(--[a-z\d-]+\)|rgba?\([\d, ]+\)|#[a-f0-9]+)([ ]+(\d{1,3}%|0))?)+\))$/i,
      )
      .min(1)
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Replace the display role colour shown on this message\n\nMust have `ManageRole` permission to use',
      }),
  })
  .openapi({ description: 'Name and / or avatar override information', required: [] })
  .openapi('Masquerade')

const MessageSchema = z
  .object({
    _id: z.string().openapi({ description: 'Unique Id' }),
    nonce: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique value generated by client sending this message' }),
    channel: z.string().openapi({ description: 'Id of the channel this message was sent in' }),
    author: z.string().openapi({ description: 'Id of the user or webhook that sent this message' }),
    user: UserSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The user that sent this message' }),
    member: MemberSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The member that sent this message' }),
    webhook: MessageWebhookSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The webhook that sent this message' }),
    content: z.string().nullable().exactOptional().openapi({ description: 'Message content' }),
    system: SystemMessageSchema.nullable()
      .exactOptional()
      .openapi({ description: 'System message' }),
    attachments: z
      .array(FileSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of attachments' }),
    edited: ISO8601TimestampSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Time at which this message was last edited' }),
    embeds: z
      .array(EmbedSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Attached embeds to this message' }),
    mentions: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of user ids mentioned in this message' }),
    role_mentions: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of role ids mentioned in this message' }),
    replies: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of message ids this message is replying to' }),
    reactions: z
      .record(
        z.string(),
        z.array(z.string()).superRefine((items, ctx) => {
          const seen = new Map()
          for (const [i, val] of items.entries()) {
            const key = JSON.stringify(val)
            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
            else seen.set(key, i)
          }
        }),
      )
      .exactOptional()
      .openapi({ description: 'Hashmap of emoji IDs to array of user IDs' }),
    interactions: InteractionsSchema.exactOptional().openapi({
      description: 'Information about how this message should be interacted with',
    }),
    masquerade: MasqueradeSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Name and / or avatar overrides for this message' }),
    pinned: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether or not the message in pinned' }),
    flags: z
      .uint32()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Bitfield of message flags\n\nhttps://docs.rs/revolt-models/latest/revolt_models/v0/enum.MessageFlags.html',
      }),
  })
  .openapi({ description: 'Message', required: ['_id', 'author', 'channel'] })
  .openapi('Message')

type BulkMessageResponseType =
  | z.infer<typeof MessageSchema>[]
  | {
      messages: z.infer<typeof MessageSchema>[]
      users: z.infer<typeof UserSchema>[]
      members?: z.infer<typeof MemberSchema>[] | null
    }

const OverrideFieldSchema = z
  .object({
    a: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Allow bit flags' }),
    d: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Disallow bit flags' }),
  })
  .openapi({
    description:
      'Representation of a single permission override as it appears on models and in the database',
    required: ['a', 'd'],
  })
  .openapi('OverrideField')

const VoiceInformationSchema = z
  .object({
    max_users: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximium amount of users allowed in the voice channel at once' }),
  })
  .openapi({ description: 'Voice information for a channel', required: [] })
  .openapi('VoiceInformation')

const PartialChannelSchema = z
  .object({
    name: z.string().nullable().exactOptional(),
    owner: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    icon: FileSchema.nullable().exactOptional(),
    nsfw: z.boolean().nullable().exactOptional(),
    active: z.boolean().nullable().exactOptional(),
    permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    role_permissions: z.record(z.string(), OverrideFieldSchema).nullable().exactOptional(),
    default_permissions: OverrideFieldSchema.nullable().exactOptional(),
    last_message_id: z.string().nullable().exactOptional(),
    voice: VoiceInformationSchema.nullable().exactOptional(),
    slowmode: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'uint64', minimum: 0 }),
  })
  .openapi({ description: 'Partial representation of a channel', required: [] })
  .openapi('PartialChannel')

const OverrideSchema = z
  .object({
    allow: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0, description: 'Allow bit flags' }),
    deny: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description: 'Disallow bit flags',
      }),
  })
  .openapi({
    description: 'Representation of a single permission override',
    required: ['allow', 'deny'],
  })
  .openapi('Override')

const PartialMemberSchema = z
  .object({
    id: MemberCompositeKeySchema.nullable().exactOptional(),
    joined_at: ISO8601TimestampSchema.nullable().exactOptional(),
    nickname: z.string().nullable().exactOptional(),
    pronouns: z.string().nullable().exactOptional(),
    avatar: FileSchema.nullable().exactOptional(),
    roles: z.array(z.string()).nullable().exactOptional(),
    timeout: ISO8601TimestampSchema.nullable().exactOptional(),
    can_publish: z.boolean().nullable().exactOptional(),
    can_receive: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PartialMember')

const CategorySchema = z
  .object({
    id: z.string().min(1).max(32).openapi({ description: 'Unique ID for this category' }),
    title: z.string().min(1).max(32).openapi({ description: 'Title for this category' }),
    channels: z.array(z.string()).openapi({ description: 'Channels in this category' }),
  })
  .openapi({ description: 'Channel category', required: ['channels', 'id', 'title'] })
  .openapi('Category')

const SystemMessageChannelsSchema = z
  .object({
    user_joined: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID of channel to send user join messages in' }),
    user_left: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID of channel to send user left messages in' }),
    user_kicked: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID of channel to send user kicked messages in' }),
    user_banned: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID of channel to send user banned messages in' }),
  })
  .openapi({ description: 'System message channel assignments', required: [] })
  .openapi('SystemMessageChannels')

const RoleSchema = z
  .object({
    _id: z.string().openapi({ description: 'Unique Id' }),
    name: z.string().openapi({ description: 'Role name' }),
    permissions: OverrideFieldSchema.openapi({ description: 'Permissions available to this role' }),
    colour: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Colour used for this role\n\nThis can be any valid CSS colour' }),
    hoist: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this role should be shown separately on the member sidebar',
      }),
    rank: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .default(0n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        default: 0,
        description: 'Ranking of this role',
      }),
    icon: FileSchema.nullable().exactOptional().openapi({ description: 'Role icon' }),
    owner: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id of the bot that owns this role, if it is a managed role' }),
  })
  .openapi({ description: 'Role', required: ['_id', 'name', 'permissions'] })
  .openapi('Role')

const PartialServerSchema = z
  .object({
    id: z.string().nullable().exactOptional(),
    owner: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    channels: z.array(z.string()).nullable().exactOptional(),
    categories: z.array(CategorySchema).nullable().exactOptional(),
    system_messages: SystemMessageChannelsSchema.nullable().exactOptional(),
    roles: z.record(z.string(), RoleSchema).nullable().exactOptional(),
    default_permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    icon: FileSchema.nullable().exactOptional(),
    banner: FileSchema.nullable().exactOptional(),
    flags: z.uint32().min(0).nullable().exactOptional(),
    nsfw: z.boolean().nullable().exactOptional(),
    analytics: z.boolean().nullable().exactOptional(),
    discoverable: z.boolean().nullable().exactOptional(),
    approximate_member_count: z.int().min(0).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PartialServer')

const PartialRoleSchema = z
  .object({
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    permissions: OverrideFieldSchema.nullable().exactOptional(),
    colour: z.string().nullable().exactOptional(),
    hoist: z.boolean().nullable().exactOptional(),
    rank: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    icon: FileSchema.nullable().exactOptional(),
    owner: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PartialRole')

const PartialEmojiSchema = z
  .object({ name: z.string().nullable().exactOptional() })
  .openapi({ description: 'Partial emoji representation', required: [] })
  .openapi('PartialEmoji')

const AuditLogEntryActionSchema = z
  .xor([
    z
      .object({ type: z.literal('MessageDelete'), author: z.string(), channel: z.string() })
      .openapi({ required: ['author', 'channel', 'type'] }),
    z
      .object({ type: z.literal('MessageBulkDelete'), channel: z.string(), count: z.int().min(0) })
      .openapi({ required: ['channel', 'count', 'type'] }),
    z
      .object({
        type: z.literal('MessagePin'),
        message: z.string(),
        author: z.string(),
        channel: z.string(),
      })
      .openapi({ required: ['author', 'channel', 'message', 'type'] }),
    z
      .object({
        type: z.literal('MessageUnpin'),
        message: z.string(),
        author: z.string(),
        channel: z.string(),
      })
      .openapi({ required: ['author', 'channel', 'message', 'type'] }),
    z
      .object({ type: z.literal('BanCreate'), user: z.string() })
      .openapi({ required: ['type', 'user'] }),
    z
      .object({ type: z.literal('BanDelete'), user: z.string() })
      .openapi({ required: ['type', 'user'] }),
    z
      .object({ type: z.literal('ChannelCreate'), channel: z.string(), name: z.string() })
      .openapi({ required: ['channel', 'name', 'type'] }),
    z
      .object({
        type: z.literal('ChannelEdit'),
        channel: z.string(),
        before: PartialChannelSchema,
        after: PartialChannelSchema,
      })
      .openapi({ required: ['after', 'before', 'channel', 'type'] }),
    z
      .object({
        type: z.literal('ChannelRolePermissionsEdit'),
        channel: z.string(),
        role: z.string(),
        permissions: OverrideSchema,
      })
      .openapi({ required: ['channel', 'permissions', 'role', 'type'] }),
    z
      .object({ type: z.literal('ChannelDelete'), channel: z.string(), name: z.string() })
      .openapi({ required: ['channel', 'name', 'type'] }),
    z
      .object({
        type: z.literal('MemberEdit'),
        user: z.string(),
        before: PartialMemberSchema,
        after: PartialMemberSchema,
      })
      .openapi({ required: ['after', 'before', 'type', 'user'] }),
    z
      .object({ type: z.literal('MemberKick'), user: z.string() })
      .openapi({ required: ['type', 'user'] }),
    z
      .object({
        type: z.literal('ServerEdit'),
        before: PartialServerSchema,
        after: PartialServerSchema,
      })
      .openapi({ required: ['after', 'before', 'type'] }),
    z
      .object({
        type: z.literal('RoleEdit'),
        role: z.string(),
        before: PartialRoleSchema,
        after: PartialRoleSchema,
      })
      .openapi({ required: ['after', 'before', 'role', 'type'] }),
    z
      .object({ type: z.literal('RoleCreate'), role: z.string(), name: z.string() })
      .openapi({ required: ['name', 'role', 'type'] }),
    z
      .object({ type: z.literal('RoleDelete'), role: z.string(), name: z.string() })
      .openapi({ required: ['name', 'role', 'type'] }),
    z
      .object({
        type: z.literal('RolesReorder'),
        before: z.array(z.string()),
        after: z.array(z.string()),
      })
      .openapi({ required: ['after', 'before', 'type'] }),
    z
      .object({ type: z.literal('InviteCreate'), invite: z.string(), channel: z.string() })
      .openapi({ required: ['channel', 'invite', 'type'] }),
    z
      .object({ type: z.literal('InviteDelete'), invite: z.string(), channel: z.string() })
      .openapi({ required: ['channel', 'invite', 'type'] }),
    z
      .object({
        type: z.literal('WebhookCreate'),
        webhook: z.string(),
        name: z.string(),
        channel: z.string(),
      })
      .openapi({ required: ['channel', 'name', 'type', 'webhook'] }),
    z
      .object({
        type: z.literal('WebhookDelete'),
        webhook: z.string(),
        name: z.string(),
        channel: z.string(),
      })
      .openapi({ required: ['channel', 'name', 'type', 'webhook'] }),
    z
      .object({ type: z.literal('EmojiCreate'), emoji: z.string(), name: z.string() })
      .openapi({ required: ['emoji', 'name', 'type'] }),
    z
      .object({
        type: z.literal('EmojiUpdate'),
        emoji: z.string(),
        before: PartialEmojiSchema,
        after: PartialEmojiSchema,
      })
      .openapi({ required: ['after', 'before', 'emoji', 'type'] }),
    z
      .object({ type: z.literal('EmojiDelete'), emoji: z.string(), name: z.string() })
      .openapi({ required: ['emoji', 'name', 'type'] }),
  ])
  .openapi({ description: 'Indivual action stored on the audit log' })
  .openapi('AuditLogEntryAction')

type AuditLogEntryType = {
  _id: string
  server: string
  reason?: string | null
  user: string
  target?: string | null
  action: z.infer<typeof AuditLogEntryActionSchema>
}

const AuditLogEntrySchema: z.ZodType<AuditLogEntryType> = z
  .object({
    _id: z.string().openapi({ description: 'Unique ID' }),
    server: z.string().openapi({ description: 'The server the entry happened in' }),
    reason: z.string().nullable().exactOptional().openapi({ description: 'User provided reason' }),
    user: z.string().openapi({ description: 'User who ran the action' }),
    target: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'User this action is targetting' }),
    action: AuditLogEntryActionSchema.openapi({ description: 'The action ran' }),
  })
  .openapi({ description: 'Audit log entry', required: ['_id', 'action', 'server', 'user'] })
  .openapi('AuditLogEntry')

type AuditLogQueryResponseType = {
  audit_logs: z.infer<typeof AuditLogEntrySchema>[]
  users: z.infer<typeof UserSchema>[]
  members: z.infer<typeof MemberSchema>[]
}

const CaptchaFeatureSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether captcha is enabled' }),
    key: z.string().openapi({ description: 'Client key used for solving captcha' }),
  })
  .openapi({ title: 'hCaptcha Configuration', required: ['enabled', 'key'] })
  .openapi('CaptchaFeature')

const FeatureSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether the service is enabled' }),
    url: z.string().openapi({ description: 'URL pointing to the service' }),
  })
  .openapi({ title: 'Generic Service Configuration', required: ['enabled', 'url'] })
  .openapi('Feature')

const VoiceNodeSchema = z
  .object({ name: z.string(), lat: z.float64(), lon: z.float64(), public_url: z.string() })
  .openapi({
    title: 'Information about a livekit node',
    required: ['lat', 'lon', 'name', 'public_url'],
  })
  .openapi('VoiceNode')

const VoiceFeatureSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether voice is enabled' }),
    nodes: z.array(VoiceNodeSchema).openapi({ description: 'All livekit nodes' }),
  })
  .openapi({ title: 'Voice Server Configuration', required: ['enabled', 'nodes'] })
  .openapi('VoiceFeature')

const GlobalLimitsSchema = z
  .object({
    group_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'max group size' }),
    message_embeds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'max message embeds' }),
    message_replies: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'max replies' }),
    message_reactions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'max reactions per message' }),
    server_emoji: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'max server emoji' }),
    server_roles: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'max server roles' }),
    server_channels: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'max server channels' }),
    body_limit_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    restrict_server_creation: z
      .array(z.string())
      .openapi({
        description:
          'restrict server creation to these users. if blank, all users can create servers',
      }),
    new_user_hours: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'New user hours' }),
    max_invite_duration_days: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Number of days after creation before an invite expires',
      }),
  })
  .openapi({
    title: 'Global limits',
    required: [
      'body_limit_size',
      'group_size',
      'max_invite_duration_days',
      'message_embeds',
      'message_reactions',
      'message_replies',
      'new_user_hours',
      'restrict_server_creation',
      'server_channels',
      'server_emoji',
      'server_roles',
    ],
  })
  .openapi('GlobalLimits')

const UserLimitsSchema = z
  .object({
    outgoing_friend_requests: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Max Outgoing Friend Requests' }),
    bots: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Max Owned Bots' }),
    message_length: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Max message content length' }),
    message_attachments: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'max message attachments' }),
    servers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'max servers' }),
    voice_quality: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'max audio quality' }),
    video: z.boolean().openapi({ description: 'video streaming enabled' }),
    video_resolution: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .length(2)
      .openapi({ description: 'max video resolution (vertical, horizontal)' }),
    video_aspect_ratio: z
      .array(z.float64())
      .length(2)
      .openapi({ description: 'min/max aspect ratios' }),
    file_upload_size_limits: z.record(z.string(), z.int().min(0)),
  })
  .openapi({
    title: 'User Limits',
    required: [
      'bots',
      'file_upload_size_limits',
      'message_attachments',
      'message_length',
      'outgoing_friend_requests',
      'servers',
      'video',
      'video_aspect_ratio',
      'video_resolution',
      'voice_quality',
    ],
  })
  .openapi('UserLimits')

const LimitsConfigSchema = z
  .object({
    global: GlobalLimitsSchema.openapi({ description: 'Global Limits' }),
    new_user: UserLimitsSchema.openapi({ description: 'New User Limits' }),
    default: UserLimitsSchema.openapi({ description: 'Default User Limits' }),
  })
  .openapi({ title: 'Limits For Users', required: ['default', 'global', 'new_user'] })
  .openapi('LimitsConfig')

const LegalLinksSchema = z
  .object({
    terms_of_service: z.string().openapi({ description: 'Terms of Service URL' }),
    privacy_policy: z.string().openapi({ description: 'Privacy Policy URL' }),
    guidelines: z.string().openapi({ description: 'Guidelines URL' }),
  })
  .openapi({ title: 'Legal links', required: ['guidelines', 'privacy_policy', 'terms_of_service'] })
  .openapi('LegalLinks')

const RevoltFeaturesSchema = z
  .object({
    captcha: CaptchaFeatureSchema.openapi({ description: 'hCaptcha configuration' }),
    email: z.boolean().openapi({ description: 'Whether email verification is enabled' }),
    invite_only: z.boolean().openapi({ description: 'Whether this server is invite only' }),
    autumn: FeatureSchema.openapi({ description: 'File server service configuration' }),
    january: FeatureSchema.openapi({ description: 'Proxy service configuration' }),
    livekit: VoiceFeatureSchema.openapi({ description: 'Voice server configuration' }),
    limits: LimitsConfigSchema.openapi({ description: 'Limits' }),
    legal_links: LegalLinksSchema.openapi({ description: 'Legal links' }),
    assets: z.string().openapi({ description: 'Asset link' }),
  })
  .openapi({
    title: 'Feature Configuration',
    required: [
      'assets',
      'autumn',
      'captcha',
      'email',
      'invite_only',
      'january',
      'legal_links',
      'limits',
      'livekit',
    ],
  })
  .openapi('RevoltFeatures')

const RevoltConfigSchema = z
  .object({
    stoat: z.string().openapi({ description: 'Stoat API Version' }),
    revolt: z.string(),
    features: RevoltFeaturesSchema.openapi({ description: 'Features enabled on this Stoat node' }),
    ws: z.string().openapi({ description: 'WebSocket URL' }),
    app: z.string().openapi({ description: 'URL pointing to the client serving this node' }),
    vapid: z.string().openapi({ description: 'Web Push VAPID public key' }),
  })
  .openapi({
    title: 'Server Configuration',
    required: ['app', 'features', 'revolt', 'stoat', 'vapid', 'ws'],
  })
  .openapi('RevoltConfig')

const ErrorSchema = z
  .xor([
    z
      .object({ type: z.literal('LabelMe') })
      .openapi({ description: 'This error was not labeled :(', required: ['type'] }),
    z
      .object({ type: z.literal('ContactSupport'), locale: z.string(), msg: z.string() })
      .openapi({ required: ['locale', 'msg', 'type'] }),
    z.object({ type: z.literal('AlreadyOnboarded') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('UsernameTaken') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('InvalidUsername') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('DiscriminatorChangeRatelimited') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('UnknownUser') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('AlreadyFriends') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('AlreadySentRequest') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('Blocked') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('BlockedByOther') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('NotFriends') }).openapi({ required: ['type'] }),
    z
      .object({ type: z.literal('TooManyPendingFriendRequests'), max: z.int().min(0) })
      .openapi({ required: ['max', 'type'] }),
    z.object({ type: z.literal('UnknownChannel') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('UnknownAttachment') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('UnknownMessage') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('CannotDeleteMessage') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('CannotEditMessage') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('CannotJoinCall') }).openapi({ required: ['type'] }),
    z
      .object({ type: z.literal('TooManyAttachments'), max: z.int().min(0) })
      .openapi({ required: ['max', 'type'] }),
    z
      .object({ type: z.literal('TooManyEmbeds'), max: z.int().min(0) })
      .openapi({ required: ['max', 'type'] }),
    z
      .object({ type: z.literal('TooManyReplies'), max: z.int().min(0) })
      .openapi({ required: ['max', 'type'] }),
    z
      .object({ type: z.literal('TooManyChannels'), max: z.int().min(0) })
      .openapi({ required: ['max', 'type'] }),
    z.object({ type: z.literal('EmptyMessage') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('PayloadTooLarge') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('CannotRemoveYourself') }).openapi({ required: ['type'] }),
    z
      .object({ type: z.literal('GroupTooLarge'), max: z.int().min(0) })
      .openapi({ required: ['max', 'type'] }),
    z.object({ type: z.literal('AlreadyInGroup') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('NotInGroup') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('AlreadyPinned') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('NotPinned') }).openapi({ required: ['type'] }),
    z
      .object({
        type: z.literal('InSlowmode'),
        retry_after: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
      })
      .openapi({ required: ['retry_after', 'type'] }),
    z.object({ type: z.literal('CantCreateServers') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('UnknownServer') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('InvalidRole') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('Banned') }).openapi({ required: ['type'] }),
    z
      .object({ type: z.literal('TooManyServers'), max: z.int().min(0) })
      .openapi({ required: ['max', 'type'] }),
    z
      .object({ type: z.literal('TooManyEmoji'), max: z.int().min(0) })
      .openapi({ required: ['max', 'type'] }),
    z
      .object({ type: z.literal('TooManyRoles'), max: z.int().min(0) })
      .openapi({ required: ['max', 'type'] }),
    z.object({ type: z.literal('AlreadyInServer') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('CannotTimeoutYourself') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('ReachedMaximumBots') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('IsBot') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('IsNotBot') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('BotIsPrivate') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('CannotReportYourself') }).openapi({ required: ['type'] }),
    z
      .object({ type: z.literal('MissingPermission'), permission: z.string() })
      .openapi({ required: ['permission', 'type'] }),
    z
      .object({ type: z.literal('MissingUserPermission'), permission: z.string() })
      .openapi({ required: ['permission', 'type'] }),
    z.object({ type: z.literal('NotElevated') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('NotPrivileged') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('CannotGiveMissingPermissions') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('NotOwner') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('IsElevated') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('CannotRemoveOwnChannelView') }).openapi({ required: ['type'] }),
    z
      .object({ type: z.literal('DatabaseError'), operation: z.string(), collection: z.string() })
      .openapi({ required: ['collection', 'operation', 'type'] }),
    z.object({ type: z.literal('InternalError') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('InvalidOperation') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('InvalidCredentials') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('InvalidProperty') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('InvalidSession') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('InvalidFlagValue') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('NotAuthenticated') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('DuplicateNonce') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('NotFound') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('NoEffect') }).openapi({ required: ['type'] }),
    z
      .object({ type: z.literal('FailedValidation'), error: z.string() })
      .openapi({ required: ['error', 'type'] }),
    z.object({ type: z.literal('HeaderTooLarge') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('OperationFailed') }).openapi({ required: ['type'] }),
    z
      .object({ type: z.literal('IncorrectData'), with: z.string() })
      .openapi({ required: ['type', 'with'] }),
    z.object({ type: z.literal('LiveKitUnavailable') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('NotAVoiceChannel') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('AlreadyConnected') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('NotConnected') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('UnknownNode') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('ProxyError') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('FileTooSmall') }).openapi({ required: ['type'] }),
    z
      .object({ type: z.literal('FileTooLarge'), max: z.int().min(0) })
      .openapi({ required: ['max', 'type'] }),
    z.object({ type: z.literal('FileTypeNotAllowed') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('ImageProcessingFailed') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('ImageResolutionNotAllowed') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('NoEmbedData') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('VosoUnavailable') }).openapi({ required: ['type'] }),
    z
      .object({ type: z.literal('FeatureDisabled'), feature: z.string() })
      .openapi({ required: ['feature', 'type'] }),
    z.object({ type: z.literal('RenderFail') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('MissingHeaders') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('CaptchaFailed') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('BlockedByShield') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('UnverifiedAccount') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('EmailFailed') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('InvalidToken') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('MissingInvite') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('InvalidInvite') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('CompromisedPassword') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('ShortPassword') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('Blacklisted') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('LockedOut') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('TotpAlreadyEnabled') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('DisallowedMFAMethod') }).openapi({ required: ['type'] }),
  ])
  .and(
    z
      .object({
        location: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Where this error occurred' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ title: 'Error', description: 'Error information' })
  .openapi('Error')

const IdSchema = z.string().openapi('Id')

const FlagResponseSchema = z
  .object({ flags: z.int32().openapi({ description: 'Flags' }) })
  .openapi({ description: 'User flag reponse', required: ['flags'] })
  .openapi('FlagResponse')

const DataUserProfileSchema = z
  .object({
    content: z
      .string()
      .min(0)
      .max(2000)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Text to set as user profile description' }),
    background: z
      .string()
      .min(1)
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Attachment Id for background' }),
  })
  .openapi({ description: 'New user profile data', required: [] })
  .openapi('DataUserProfile')

const FieldsUserSchema = z
  .xor([
    z.enum([
      'Avatar',
      'StatusText',
      'StatusPresence',
      'ProfileContent',
      'ProfileBackground',
      'DisplayName',
      'Pronouns',
    ]),
    z.literal('Internal').openapi({ description: 'Internal field, ignore this.' }),
  ])
  .openapi({ description: 'Optional fields on user object' })
  .openapi('FieldsUser')

const DataEditUserSchema = z
  .object({
    display_name: z
      .string()
      .regex(/^[^\u200B\n\r]+$/)
      .min(2)
      .max(32)
      .nullable()
      .exactOptional()
      .openapi({ description: 'New display name' }),
    pronouns: z
      .string()
      .min(1)
      .max(24)
      .nullable()
      .exactOptional()
      .openapi({ description: 'New pronouns' }),
    avatar: z
      .string()
      .min(1)
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Attachment Id for avatar' }),
    status: UserStatusSchema.nullable().exactOptional().openapi({ description: 'New user status' }),
    profile: DataUserProfileSchema.nullable()
      .exactOptional()
      .openapi({ description: 'New user profile data\n\nThis is applied as a partial.' }),
    badges: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Bitfield of user badges' }),
    flags: z.int32().nullable().exactOptional().openapi({ description: 'Enum of user flags' }),
    remove: z
      .array(FieldsUserSchema)
      .default([])
      .exactOptional()
      .openapi({ description: 'Fields to remove from user object' }),
  })
  .openapi({ description: 'New user information', required: [] })
  .openapi('DataEditUser')

const DataChangeUsernameSchema = z
  .object({
    username: z
      .string()
      .regex(/^(\p{L}|[\d_.-])+$/u)
      .min(2)
      .max(32)
      .openapi({ description: 'New username' }),
    password: z.string().min(8).max(1024).openapi({ description: 'Current account password' }),
  })
  .openapi({ title: 'Username Information', required: ['password', 'username'] })
  .openapi('DataChangeUsername')

const UserProfileSchema = z
  .object({
    content: z
      .string()
      .min(0)
      .max(2000)
      .nullable()
      .exactOptional()
      .openapi({ description: "Text content on user's profile" }),
    background: FileSchema.nullable()
      .exactOptional()
      .openapi({ description: "Background visible on user's profile" }),
  })
  .openapi({ description: "User's profile", required: [] })
  .openapi('UserProfile')

const ChannelSchema = z
  .xor([
    z
      .object({
        channel_type: z.literal('SavedMessages'),
        _id: z.string().openapi({ description: 'Unique Id' }),
        user: z.string().openapi({ description: 'Id of the user this channel belongs to' }),
      })
      .openapi({
        description: 'Personal "Saved Notes" channel which allows users to save messages',
        required: ['_id', 'channel_type', 'user'],
      }),
    z
      .object({
        channel_type: z.literal('DirectMessage'),
        _id: z.string().openapi({ description: 'Unique Id' }),
        active: z
          .boolean()
          .openapi({
            description: 'Whether this direct message channel is currently open on both sides',
          }),
        recipients: z
          .array(z.string())
          .openapi({ description: '2-tuple of user ids participating in direct message' }),
        last_message_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Id of the last message sent in this channel' }),
      })
      .openapi({
        description: 'Direct message channel between two users',
        required: ['_id', 'active', 'channel_type', 'recipients'],
      }),
    z
      .object({
        channel_type: z.literal('Group'),
        _id: z.string().openapi({ description: 'Unique Id' }),
        name: z.string().openapi({ description: 'Display name of the channel' }),
        owner: z.string().openapi({ description: 'User id of the owner of the group' }),
        description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Channel description' }),
        recipients: z
          .array(z.string())
          .openapi({ description: 'Array of user ids participating in channel' }),
        icon: FileSchema.nullable()
          .exactOptional()
          .openapi({ description: 'Custom icon attachment' }),
        last_message_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Id of the last message sent in this channel' }),
        permissions: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .nullable()
          .exactOptional()
          .openapi({
            type: ['integer', 'null'],
            format: 'int64',
            description:
              'Permissions assigned to members of this group (does not apply to the owner of the group)',
          }),
        nsfw: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether this group is marked as not safe for work' }),
      })
      .openapi({
        description: 'Group channel between 1 or more participants',
        required: ['_id', 'channel_type', 'name', 'owner', 'recipients'],
      }),
    z
      .object({
        channel_type: z.literal('TextChannel'),
        _id: z.string().openapi({ description: 'Unique Id' }),
        server: z.string().openapi({ description: 'Id of the server this channel belongs to' }),
        name: z.string().openapi({ description: 'Display name of the channel' }),
        description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Channel description' }),
        icon: FileSchema.nullable()
          .exactOptional()
          .openapi({ description: 'Custom icon attachment' }),
        last_message_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Id of the last message sent in this channel' }),
        default_permissions: OverrideFieldSchema.nullable()
          .exactOptional()
          .openapi({ description: 'Default permissions assigned to users in this channel' }),
        role_permissions: z
          .record(z.string(), OverrideFieldSchema)
          .exactOptional()
          .openapi({ description: 'Permissions assigned based on role to this channel' }),
        nsfw: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether this channel is marked as not safe for work' }),
        voice: VoiceInformationSchema.nullable()
          .exactOptional()
          .openapi({
            description: 'Voice Information for when this channel is also a voice channel',
          }),
        slowmode: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .nullable()
          .exactOptional()
          .openapi({
            type: ['integer', 'null'],
            format: 'uint64',
            minimum: 0,
            description: "The channel's slowmode delay in seconds",
          }),
      })
      .openapi({
        description: 'Text channel belonging to a server',
        required: ['_id', 'channel_type', 'name', 'server'],
      }),
  ])
  .openapi({ description: 'Channel' })
  .openapi('Channel')

const MutualResponseSchema = z
  .object({
    users: z
      .array(z.string())
      .openapi({ description: 'Array of mutual user IDs that both users are friends with' }),
    servers: z
      .array(z.string())
      .openapi({ description: 'Array of mutual server IDs that both users are in' }),
    channels: z
      .array(z.string())
      .openapi({ description: 'Array of mutual group and dm IDs that both users are in' }),
  })
  .openapi({
    description: 'Mutual friends, servers, groups and DMs response',
    required: ['channels', 'servers', 'users'],
  })
  .openapi('MutualResponse')

const DataSendFriendRequestSchema = z
  .object({
    username: z
      .string()
      .openapi({ description: 'Username and discriminator combo separated by #' }),
  })
  .openapi({ description: 'User lookup information', required: ['username'] })
  .openapi('DataSendFriendRequest')

const BotWithUserResponseSchema = z
  .object({
    user: UserSchema,
    _id: z.string().openapi({ description: 'Bot Id' }),
    owner: z.string().openapi({ description: 'User Id of the bot owner' }),
    token: z.string().openapi({ description: 'Token used to authenticate requests for this bot' }),
    public: z
      .boolean()
      .openapi({ description: 'Whether the bot is public (may be invited by anyone)' }),
    default_permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'The permissions the bot will ask to have upon being invited to a server,',
      }),
    analytics: z.boolean().exactOptional().openapi({ description: 'Whether to enable analytics' }),
    discoverable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this bot should be publicly discoverable' }),
    interactions_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reserved; URL for handling interactions' }),
    terms_of_service_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL for terms of service' }),
    privacy_policy_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL for privacy policy' }),
    flags: z.uint32().min(0).exactOptional().openapi({ description: 'Enum of bot flags' }),
  })
  .openapi({
    description: 'Bot with user response',
    required: ['_id', 'owner', 'public', 'token', 'user'],
  })
  .openapi('BotWithUserResponse')

const DataCreateBotSchema = z
  .object({
    name: z
      .string()
      .regex(/^(\p{L}|[\d_.-])+$/u)
      .min(2)
      .max(32)
      .openapi({ description: 'Bot username' }),
  })
  .openapi({ description: 'Bot Details', required: ['name'] })
  .openapi('DataCreateBot')

const InviteBotDestinationSchema = z
  .union([
    z
      .object({ server: z.string().openapi({ description: 'Server Id' }) })
      .openapi({ description: 'Invite to a server', required: ['server'] }),
    z
      .object({ group: z.string().openapi({ description: 'Group Id' }) })
      .openapi({ description: 'Invite to a group', required: ['group'] }),
  ])
  .openapi({ description: 'Where we are inviting a bot to' })
  .openapi('InviteBotDestination')

const PublicBotSchema = z
  .object({
    _id: z.string().openapi({ description: 'Bot Id' }),
    username: z.string().openapi({ description: 'Bot Username' }),
    avatar: z.string().exactOptional().openapi({ description: 'Profile Avatar' }),
    description: z.string().exactOptional().openapi({ description: 'Profile Description' }),
    privacy_policy_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL for privacy policy' }),
    terms_of_service_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL for terms of service' }),
    default_permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Permissions the bot will ask for',
      }),
  })
  .openapi({ description: 'Public Bot', required: ['_id', 'username'] })
  .openapi('PublicBot')

const BotSchema = z
  .object({
    _id: z.string().openapi({ description: 'Bot Id' }),
    owner: z.string().openapi({ description: 'User Id of the bot owner' }),
    token: z.string().openapi({ description: 'Token used to authenticate requests for this bot' }),
    public: z
      .boolean()
      .openapi({ description: 'Whether the bot is public (may be invited by anyone)' }),
    default_permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'The permissions the bot will ask to have upon being invited to a server,',
      }),
    analytics: z.boolean().exactOptional().openapi({ description: 'Whether to enable analytics' }),
    discoverable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this bot should be publicly discoverable' }),
    interactions_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reserved; URL for handling interactions' }),
    terms_of_service_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL for terms of service' }),
    privacy_policy_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL for privacy policy' }),
    flags: z.uint32().min(0).exactOptional().openapi({ description: 'Enum of bot flags' }),
  })
  .openapi({ description: 'Bot', required: ['_id', 'owner', 'public', 'token'] })
  .openapi('Bot')

const FetchBotResponseSchema = z
  .object({
    bot: BotSchema.openapi({ description: 'Bot object' }),
    user: UserSchema.openapi({ description: 'User object' }),
  })
  .openapi({ description: 'Bot Response', required: ['bot', 'user'] })
  .openapi('FetchBotResponse')

const OwnedBotsResponseSchema = z
  .object({
    bots: z.array(BotSchema).openapi({ description: 'Bot objects' }),
    users: z.array(UserSchema).openapi({ description: 'User objects' }),
  })
  .openapi({
    description:
      'Owned Bots Response\n\nBoth lists are sorted by their IDs.\n\nTODO: user should be in bot object',
    required: ['bots', 'users'],
  })
  .openapi('OwnedBotsResponse')

const FieldsBotSchema = z
  .enum(['Token', 'InteractionsURL'])
  .openapi({ description: 'Optional fields on bot object' })
  .openapi('FieldsBot')

const DataEditBotSchema = z
  .object({
    name: z
      .string()
      .regex(/^(\p{L}|[\d_.-])+$/u)
      .min(2)
      .max(32)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Bot username' }),
    public: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether the bot can be added by anyone' }),
    default_permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'The permissions the bot will ask to have upon being invited to a server,',
      }),
    analytics: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether analytics should be gathered for this bot\n\nMust be enabled in order to show up on [Revolt Discover](https://rvlt.gg).',
      }),
    interactions_url: z
      .string()
      .min(1)
      .max(2048)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Interactions URL' }),
    remove: z
      .array(FieldsBotSchema)
      .default([])
      .exactOptional()
      .openapi({ description: 'Fields to remove from bot object' }),
  })
  .openapi({ description: 'New Bot Details', required: [] })
  .openapi('DataEditBot')

const DiscoverRequestTypeSchema = z.enum(['Bot', 'Server']).openapi('DiscoverRequestType')

const DiscoverRequestStatusSchema = z
  .xor([
    z.enum(['Pending', 'UnderReview']),
    z.strictObject({ Removed: z.string().nullable() }).openapi({ required: ['Removed'] }),
    z.strictObject({ Denied: z.string().nullable() }).openapi({ required: ['Denied'] }),
    z.strictObject({ Approved: z.string().nullable() }).openapi({ required: ['Approved'] }),
  ])
  .openapi('DiscoverRequestStatus')

const DiscoverRequestSchema = z
  .object({
    type: DiscoverRequestTypeSchema.openapi({ description: 'The type of request.' }),
    id: z.string().openapi({ description: 'The ID of the bot/server' }),
    status: DiscoverRequestStatusSchema.openapi({ description: 'status of the request' }),
  })
  .openapi({ description: 'Discover request', required: ['id', 'status', 'type'] })
  .openapi('DiscoverRequest')

const FieldsChannelSchema = z
  .enum(['Description', 'Icon', 'DefaultPermissions', 'Voice', 'Slowmode'])
  .openapi({ description: 'Optional fields on channel object' })
  .openapi('FieldsChannel')

const DataEditChannelSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(32)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Channel name' }),
    description: z
      .string()
      .min(0)
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Channel description' }),
    owner: z.string().nullable().exactOptional().openapi({ description: 'Group owner' }),
    icon: z
      .string()
      .min(1)
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Icon\n\nProvide an Autumn attachment Id.' }),
    nsfw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether this channel is age-restricted' }),
    archived: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether this channel is archived' }),
    voice: VoiceInformationSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Voice Information for voice channels' }),
    slowmode: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n).max(21600n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'uint64',
        minimum: 0,
        maximum: 21600,
        description: "The channel's slow mode delay in seconds, up to 6 hours",
      }),
    remove: z
      .array(FieldsChannelSchema)
      .default([])
      .exactOptional()
      .openapi({ description: 'Fields to remove from channel' }),
  })
  .openapi({ description: 'New webhook information', required: [] })
  .openapi('DataEditChannel')

const InviteSchema = z
  .xor([
    z
      .object({
        type: z.literal('Server'),
        _id: z.string().openapi({ description: 'Invite code' }),
        server: z.string().openapi({ description: 'Id of the server this invite points to' }),
        creator: z.string().openapi({ description: 'Id of user who created this invite' }),
        channel: z
          .string()
          .openapi({ description: 'Id of the server channel this invite points to' }),
        max_uses: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .nullable()
          .exactOptional()
          .openapi({
            type: ['integer', 'null'],
            format: 'uint64',
            minimum: 0,
            description: 'Maximum number of times this invite can be used',
          }),
        uses: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .openapi({
            type: 'integer',
            format: 'uint64',
            minimum: 0,
            description: 'Number of times this invite has been used',
          }),
        expires: ISO8601TimestampSchema.nullable()
          .exactOptional()
          .openapi({ description: 'Timestamp at which this invite expires' }),
      })
      .openapi({
        description: 'Invite to a specific server channel',
        required: ['_id', 'channel', 'creator', 'server', 'type', 'uses'],
      }),
    z
      .object({
        type: z.literal('Group'),
        _id: z.string().openapi({ description: 'Invite code' }),
        creator: z.string().openapi({ description: 'Id of user who created this invite' }),
        channel: z
          .string()
          .openapi({ description: 'Id of the group channel this invite points to' }),
        max_uses: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .nullable()
          .exactOptional()
          .openapi({
            type: ['integer', 'null'],
            format: 'uint64',
            minimum: 0,
            description: 'Maximum number of times this invite can be used',
          }),
        uses: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .openapi({
            type: 'integer',
            format: 'uint64',
            minimum: 0,
            description: 'Number of times this invite has been used',
          }),
        expires: ISO8601TimestampSchema.nullable()
          .exactOptional()
          .openapi({ description: 'Timestamp at which this invite expires' }),
      })
      .openapi({
        description: 'Invite to a group channel',
        required: ['_id', 'channel', 'creator', 'type', 'uses'],
      }),
  ])
  .openapi({ description: 'Invite' })
  .openapi('Invite')

const DataCreateInviteSchema = z
  .object({
    max_uses: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(1n).max(100n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'uint64',
        minimum: 1,
        maximum: 100,
        description: 'Maximum number of times this invite can be used',
      }),
    expires: ISO8601TimestampSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Number of seconds until this invite expires' }),
  })
  .openapi({ description: 'Create Invite', required: [] })
  .openapi('DataCreateInvite')

const ReplyIntentSchema = z
  .object({
    id: z.string().openapi({ description: 'Message Id' }),
    mention: z
      .boolean()
      .openapi({ description: "Whether this reply should mention the message's author" }),
    fail_if_not_exists: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Whether to error if the referenced message doesn't exist. Otherwise, send a message without this reply. Default is true.",
      }),
  })
  .openapi({
    description: 'What this message should reply to and how',
    required: ['id', 'mention'],
  })
  .openapi('ReplyIntent')

const SendableEmbedSchema = z
  .object({
    icon_url: z.string().min(1).max(256).nullable().exactOptional(),
    url: z.string().min(1).max(256).nullable().exactOptional(),
    title: z.string().min(1).max(100).nullable().exactOptional(),
    description: z.string().min(1).max(2000).nullable().exactOptional(),
    media: z.string().nullable().exactOptional(),
    colour: z
      .string()
      .regex(
        /^(?:[a-z ]+|var\(--[a-z\d-]+\)|rgba?\([\d, ]+\)|#[a-f0-9]+|(repeating-)?(linear|conic|radial)-gradient\(([a-z ]+|var\(--[a-z\d-]+\)|rgba?\([\d, ]+\)|#[a-f0-9]+|\d+deg)([ ]+in[ ]+[a-z-]+([ ]+(shorter|longer|increasing|decreasing)[ ]+hue)?)?([ ]+(\d{1,3}%|0))?(,[ ]*([a-z ]+|var\(--[a-z\d-]+\)|rgba?\([\d, ]+\)|#[a-f0-9]+)([ ]+(\d{1,3}%|0))?)+\))$/i,
      )
      .min(1)
      .max(128)
      .nullable()
      .exactOptional(),
  })
  .openapi({ description: 'Representation of a text embed before it is sent.', required: [] })
  .openapi('SendableEmbed')

const DataMessageSendSchema = z
  .object({
    nonce: z
      .string()
      .min(1)
      .max(64)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Unique token to prevent duplicate message sending\n\n**This is deprecated and replaced by `Idempotency-Key`!**',
      }),
    content: z
      .string()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Message content to send' }),
    attachments: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Attachments to include in message' }),
    replies: z
      .array(ReplyIntentSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Messages to reply to' }),
    embeds: z
      .array(SendableEmbedSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Embeds to include in message\n\nText embed content contributes to the content length cap',
      }),
    masquerade: MasqueradeSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Masquerade to apply to this message' }),
    interactions: InteractionsSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Information about how this message should be interacted with' }),
    flags: z
      .uint32()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Bitfield of message flags\n\nhttps://docs.rs/revolt-models/latest/revolt_models/v0/enum.MessageFlags.html',
      }),
  })
  .openapi({ description: 'Message to send', required: [] })
  .openapi('DataMessageSend')

const BulkMessageResponseSchema: z.ZodType<BulkMessageResponseType> = z
  .union([
    z.array(MessageSchema),
    z
      .object({
        messages: z.array(MessageSchema).openapi({ description: 'List of messages' }),
        users: z.array(UserSchema).openapi({ description: 'List of users' }),
        members: z
          .array(MemberSchema)
          .nullable()
          .exactOptional()
          .openapi({ description: 'List of members' }),
      })
      .openapi({ required: ['messages', 'users'] }),
  ])
  .openapi({ description: 'Bulk Message Response' })
  .openapi('BulkMessageResponse')

const MessageSortSchema = z
  .xor([
    z.literal('Relevance').openapi({ description: 'Sort by the most relevant messages' }),
    z.literal('Latest').openapi({ description: 'Sort by the newest messages first' }),
    z.literal('Oldest').openapi({ description: 'Sort by the oldest messages first' }),
  ])
  .openapi({ description: 'Message Sort\n\nSort used for retrieving messages' })
  .openapi('MessageSort')

const DataMessageSearchSchema = z
  .object({
    query: z
      .string()
      .min(1)
      .max(64)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Full-text search query\n\nSee [MongoDB documentation](https://docs.mongodb.com/manual/text-search/#-text-operator) for more information.',
      }),
    pinned: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Whether to only search for pinned messages, cannot be sent with `query`.',
      }),
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(100n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 1,
        maximum: 100,
        description: 'Maximum number of messages to fetch',
      }),
    before: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Message id before which messages should be fetched' }),
    after: z
      .string()
      .length(26)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Message id after which messages should be fetched' }),
    sort: MessageSortSchema.default('Relevance')
      .exactOptional()
      .openapi({
        description: 'Message sort direction\n\nBy default, it will be sorted by latest.',
      }),
    include_users: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether to include user (and member, if server channel) objects' }),
  })
  .openapi({ description: 'Options for searching for messages', required: [] })
  .openapi('DataMessageSearch')

const DataEditMessageSchema = z
  .object({
    content: z
      .string()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'New message content' }),
    embeds: z
      .array(SendableEmbedSchema)
      .min(0)
      .max(10)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Embeds to include in the message' }),
  })
  .openapi({ description: 'Changes to make to message', required: [] })
  .openapi('DataEditMessage')

const OptionsBulkDeleteSchema = z
  .object({ ids: z.array(z.string()).min(1).max(100).openapi({ description: 'Message IDs' }) })
  .openapi({ description: 'Options for bulk deleting messages', required: ['ids'] })
  .openapi('OptionsBulkDelete')

const DataCreateGroupSchema = z
  .object({
    name: z.string().min(1).max(32).openapi({ description: 'Group name' }),
    description: z
      .string()
      .min(0)
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Group description' }),
    icon: z
      .string()
      .min(1)
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Group icon' }),
    users: z
      .array(z.string())
      .min(0)
      .max(49)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .default([])
      .exactOptional()
      .openapi({
        description: 'Array of user IDs to add to the group\n\nMust be friends with these users.',
      }),
    nsfw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether this group is age-restricted' }),
  })
  .openapi({ description: 'Create new group', required: ['name'] })
  .openapi('DataCreateGroup')

const CreateVoiceUserResponseSchema = z
  .object({
    token: z.string().openapi({ description: 'Token for authenticating with the voice server' }),
    url: z.string().openapi({ description: 'Url of the livekit server to connect to' }),
  })
  .openapi({ description: 'Voice server token response', required: ['token', 'url'] })
  .openapi('CreateVoiceUserResponse')

const DataJoinCallSchema = z
  .object({
    node: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the node to join' }),
    force_disconnect: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether to force disconnect any other existing voice connections\n\nUseful for disconnecting on another device and joining on a new.',
      }),
    recipients: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Users which should be notified of the call starting\n\nOnly used when the user is the first one connected.',
      }),
  })
  .openapi({ description: 'Join a voice channel', required: [] })
  .openapi('DataJoinCall')

const DataSetRolePermissionsSchema = z
  .object({
    permissions: OverrideSchema.openapi({
      description: 'Allow / deny values to set for this role',
    }),
  })
  .openapi({ description: 'New role permissions', required: ['permissions'] })
  .openapi('DataSetRolePermissions')

const DataDefaultChannelPermissionsSchema = z
  .union([
    z
      .object({
        permissions: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .openapi({
            type: 'integer',
            format: 'uint64',
            minimum: 0,
            description: 'Permission values to set for members in a `Group`',
          }),
      })
      .openapi({ required: ['permissions'] }),
    z
      .object({
        permissions: OverrideSchema.openapi({
          description: 'Allow / deny values to set for members in this server channel',
        }),
      })
      .openapi({ required: ['permissions'] }),
  ])
  .openapi({ description: 'New default permissions' })
  .openapi('DataDefaultChannelPermissions')

const WebhookSchema = z
  .object({
    id: z.string().openapi({ description: 'Webhook Id' }),
    name: z.string().openapi({ description: 'The name of the webhook' }),
    avatar: FileSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The avatar of the webhook' }),
    creator_id: z.string().openapi({ description: 'User that created this webhook' }),
    channel_id: z.string().openapi({ description: 'The channel this webhook belongs to' }),
    permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description: 'The permissions for the webhook',
      }),
    token: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The private token for the webhook' }),
  })
  .openapi({
    description: 'Webhook',
    required: ['channel_id', 'creator_id', 'id', 'name', 'permissions'],
  })
  .openapi('Webhook')

const CreateWebhookBodySchema = z
  .object({
    name: z.string().min(1).max(32),
    avatar: z.string().min(1).max(128).nullable().exactOptional(),
  })
  .openapi({ description: 'Information for the webhook', required: ['name'] })
  .openapi('CreateWebhookBody')

const ServerSchema = z
  .object({
    _id: z.string().openapi({ description: 'Unique Id' }),
    owner: z.string().openapi({ description: 'User id of the owner' }),
    name: z.string().openapi({ description: 'Name of the server' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Description for the server' }),
    channels: z.array(z.string()).openapi({ description: 'Channels within this server' }),
    categories: z
      .array(CategorySchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Categories for this server' }),
    system_messages: SystemMessageChannelsSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Configuration for sending system event messages' }),
    roles: z
      .record(z.string(), RoleSchema)
      .exactOptional()
      .openapi({ description: 'Roles for this server' }),
    default_permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Default set of server and channel permissions',
      }),
    icon: FileSchema.nullable().exactOptional().openapi({ description: 'Icon attachment' }),
    banner: FileSchema.nullable().exactOptional().openapi({ description: 'Banner attachment' }),
    flags: z.uint32().min(0).exactOptional().openapi({ description: 'Bitfield of server flags' }),
    nsfw: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this server is flagged as not safe for work' }),
    analytics: z.boolean().exactOptional().openapi({ description: 'Whether to enable analytics' }),
    discoverable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this server should be publicly discoverable' }),
    approximate_member_count: z
      .int()
      .min(0)
      .openapi({ description: 'Approximate amount of members in the server' }),
  })
  .openapi({
    description: 'Server',
    required: [
      '_id',
      'approximate_member_count',
      'channels',
      'default_permissions',
      'name',
      'owner',
    ],
  })
  .openapi('Server')

const CreateServerLegacyResponseSchema = z
  .object({
    server: ServerSchema.openapi({ description: 'Server object' }),
    channels: z.array(ChannelSchema).openapi({ description: 'Default channels' }),
  })
  .openapi({
    description: 'Information returned when creating server',
    required: ['channels', 'server'],
  })
  .openapi('CreateServerLegacyResponse')

const DataCreateServerSchema = z
  .object({
    name: z.string().min(1).max(32).openapi({ description: 'Server name' }),
    description: z
      .string()
      .min(0)
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Server description' }),
    nsfw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether this server is age-restricted' }),
  })
  .openapi({ description: 'Information about new server to create', required: ['name'] })
  .openapi('DataCreateServer')

const FetchServerResponseSchema = z
  .union([
    ServerSchema,
    z
      .object({
        channels: z.array(z.string()).openapi({ description: 'Channels within this server' }),
        _id: z.string().openapi({ description: 'Unique Id' }),
        owner: z.string().openapi({ description: 'User id of the owner' }),
        name: z.string().openapi({ description: 'Name of the server' }),
        description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Description for the server' }),
        categories: z
          .array(CategorySchema)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Categories for this server' }),
        system_messages: SystemMessageChannelsSchema.nullable()
          .exactOptional()
          .openapi({ description: 'Configuration for sending system event messages' }),
        roles: z
          .record(z.string(), RoleSchema)
          .exactOptional()
          .openapi({ description: 'Roles for this server' }),
        default_permissions: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Default set of server and channel permissions',
          }),
        icon: FileSchema.nullable().exactOptional().openapi({ description: 'Icon attachment' }),
        banner: FileSchema.nullable().exactOptional().openapi({ description: 'Banner attachment' }),
        flags: z
          .uint32()
          .min(0)
          .exactOptional()
          .openapi({ description: 'Bitfield of server flags' }),
        nsfw: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether this server is flagged as not safe for work' }),
        analytics: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether to enable analytics' }),
        discoverable: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether this server should be publicly discoverable' }),
        approximate_member_count: z
          .int()
          .min(0)
          .openapi({ description: 'Approximate amount of members in the server' }),
      })
      .openapi({
        description: 'Server',
        required: [
          '_id',
          'approximate_member_count',
          'channels',
          'default_permissions',
          'name',
          'owner',
        ],
      }),
  ])
  .openapi({ description: 'Fetch server information' })
  .openapi('FetchServerResponse')

const FieldsServerSchema = z
  .enum(['Description', 'Categories', 'SystemMessages', 'Icon', 'Banner'])
  .openapi({ description: 'Optional fields on server object' })
  .openapi('FieldsServer')

const DataEditServerSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(32)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Server name' }),
    description: z
      .string()
      .min(0)
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Server description' }),
    icon: z.string().nullable().exactOptional().openapi({ description: 'Attachment Id for icon' }),
    banner: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Attachment Id for banner' }),
    categories: z
      .array(CategorySchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Category structure for server' }),
    system_messages: SystemMessageChannelsSchema.nullable()
      .exactOptional()
      .openapi({ description: 'System message configuration' }),
    flags: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Bitfield of server flags' }),
    discoverable: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether this server is public and should show up on [Revolt Discover](https://rvlt.gg)',
      }),
    analytics: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether analytics should be collected for this server\n\nMust be enabled in order to show up on [Revolt Discover](https://rvlt.gg).',
      }),
    owner: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'User id of the new owner' }),
    remove: z
      .array(FieldsServerSchema)
      .default([])
      .exactOptional()
      .openapi({ description: 'Fields to remove from server object' }),
  })
  .openapi({ description: 'New server information', required: [] })
  .openapi('DataEditServer')

const LegacyServerChannelTypeSchema = z
  .xor([
    z.literal('Text').openapi({ description: 'Text Channel' }),
    z.literal('Voice').openapi({ description: 'Voice Channel' }),
  ])
  .openapi({ description: 'Server Channel Type' })
  .openapi('LegacyServerChannelType')

const DataCreateServerChannelSchema = z
  .object({
    type: LegacyServerChannelTypeSchema.default('Text')
      .exactOptional()
      .openapi({ description: 'Channel type' }),
    name: z.string().min(1).max(32).openapi({ description: 'Channel name' }),
    description: z
      .string()
      .min(0)
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Channel description' }),
    nsfw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether this channel is age restricted' }),
    voice: VoiceInformationSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Voice Information for when this channel is also a voice channel' }),
  })
  .openapi({ description: 'Create new server channel', required: ['name'] })
  .openapi('DataCreateServerChannel')

const AllMemberResponseSchema = z
  .object({
    members: z.array(MemberSchema).openapi({ description: 'List of members' }),
    users: z.array(UserSchema).openapi({ description: 'List of users' }),
  })
  .openapi({ description: 'Response with all members', required: ['members', 'users'] })
  .openapi('AllMemberResponse')

const MemberResponseSchema = z
  .union([
    MemberSchema,
    z
      .object({ member: MemberSchema, roles: z.record(z.string(), RoleSchema) })
      .openapi({ required: ['member', 'roles'] }),
  ])
  .openapi({ description: 'Member response' })
  .openapi('MemberResponse')

const FieldsMemberSchema = z
  .enum([
    'Nickname',
    'Pronouns',
    'Avatar',
    'Roles',
    'Timeout',
    'CanReceive',
    'CanPublish',
    'JoinedAt',
    'VoiceChannel',
  ])
  .openapi({ description: 'Optional fields on server member object' })
  .openapi('FieldsMember')

const DataMemberEditSchema = z
  .object({
    nickname: z
      .string()
      .min(1)
      .max(32)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Member nickname' }),
    pronouns: z
      .string()
      .min(1)
      .max(24)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Member pronouns' }),
    avatar: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Attachment Id to set for avatar' }),
    roles: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of role ids' }),
    timeout: ISO8601TimestampSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Timestamp this member is timed out until' }),
    can_publish: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'server-wide voice muted' }),
    can_receive: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'server-wide voice deafened' }),
    voice_channel: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'voice channel to move to if already in a voice channel' }),
    remove: z
      .array(FieldsMemberSchema)
      .default([])
      .exactOptional()
      .openapi({ description: 'Fields to remove from channel object' }),
  })
  .openapi({ description: 'New member information', required: [] })
  .openapi('DataMemberEdit')

const MemberQueryResponseSchema = z
  .object({
    members: z.array(MemberSchema).openapi({ description: 'List of members' }),
    users: z.array(UserSchema).openapi({ description: 'List of users' }),
  })
  .openapi({ title: 'Query members by name', required: ['members', 'users'] })
  .openapi('MemberQueryResponse')

const ServerBanSchema = z
  .object({
    _id: MemberCompositeKeySchema.openapi({ description: 'Unique member id' }),
    reason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reason for ban creation' }),
  })
  .openapi({ description: 'Server Ban', required: ['_id'] })
  .openapi('ServerBan')

const DataBanCreateSchema = z
  .object({
    reason: z
      .string()
      .min(0)
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Ban reason' }),
    delete_message_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(604800n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        minimum: 0,
        maximum: 604800,
        description: 'Messages to delete in seconds',
      }),
  })
  .openapi({ description: 'Information for new server ban', required: [] })
  .openapi('DataBanCreate')

const BannedUserSchema = z
  .object({
    _id: z.string().openapi({ description: 'Id of the banned user' }),
    username: z.string().openapi({ description: 'Username of the banned user' }),
    discriminator: z.string().openapi({ description: 'Discriminator of the banned user' }),
    avatar: FileSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Avatar of the banned user' }),
  })
  .openapi({
    description: 'Just enough information to list a ban',
    required: ['_id', 'discriminator', 'username'],
  })
  .openapi('BannedUser')

const BanListResultSchema = z
  .object({
    users: z.array(BannedUserSchema).openapi({ description: 'Users objects' }),
    bans: z.array(ServerBanSchema).openapi({ description: 'Ban objects' }),
  })
  .openapi({ description: 'Ban list result', required: ['bans', 'users'] })
  .openapi('BanListResult')

const NewRoleResponseSchema = z
  .object({
    id: z.string().openapi({ description: 'Id of the role' }),
    role: RoleSchema.openapi({ description: 'New role' }),
  })
  .openapi({ description: 'Response after creating new role', required: ['id', 'role'] })
  .openapi('NewRoleResponse')

const DataCreateRoleSchema = z
  .object({
    name: z.string().min(1).max(32).openapi({ description: 'Role name' }),
    rank: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Ranking position\n\nSmaller values take priority.\n\n**Removed** - no effect, use the edit server role positions route',
      }),
  })
  .openapi({ description: 'Information about new role to create', required: ['name'] })
  .openapi('DataCreateRole')

const FieldsRoleSchema = z
  .enum(['Colour', 'Icon'])
  .openapi({ description: 'Optional fields on server object' })
  .openapi('FieldsRole')

const DataEditRoleSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(32)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Role name' }),
    colour: z
      .string()
      .regex(
        /^(?:[a-z ]+|var\(--[a-z\d-]+\)|rgba?\([\d, ]+\)|#[a-f0-9]+|(repeating-)?(linear|conic|radial)-gradient\(([a-z ]+|var\(--[a-z\d-]+\)|rgba?\([\d, ]+\)|#[a-f0-9]+|\d+deg)([ ]+in[ ]+[a-z-]+([ ]+(shorter|longer|increasing|decreasing)[ ]+hue)?)?([ ]+(\d{1,3}%|0))?(,[ ]*([a-z ]+|var\(--[a-z\d-]+\)|rgba?\([\d, ]+\)|#[a-f0-9]+)([ ]+(\d{1,3}%|0))?)+\))$/i,
      )
      .min(1)
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Role colour' }),
    hoist: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether this role should be displayed separately' }),
    rank: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'Ranking position\n\n**Removed** - no effect, use the edit server role positions route',
      }),
    icon: z
      .string()
      .min(1)
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Role icon\n\nProvide an Autumn attachment Id.' }),
    remove: z
      .array(FieldsRoleSchema)
      .default([])
      .exactOptional()
      .openapi({ description: 'Fields to remove from role object' }),
  })
  .openapi({ description: 'New role information', required: [] })
  .openapi('DataEditRole')

const DataSetServerRolePermissionSchema = z
  .object({
    permissions: OverrideSchema.openapi({
      description: 'Allow / deny values for the role in this server.',
    }),
  })
  .openapi({ description: 'New role permissions', required: ['permissions'] })
  .openapi('DataSetServerRolePermission')

const DataPermissionsValueSchema = z
  .object({
    permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
  })
  .openapi({ description: 'Data permissions Value - contains allow', required: ['permissions'] })
  .openapi('DataPermissionsValue')

const EmojiParentSchema = z
  .xor([
    z.object({ type: z.literal('Server'), id: z.string() }).openapi({ required: ['id', 'type'] }),
    z.object({ type: z.literal('Detached') }).openapi({ required: ['type'] }),
  ])
  .openapi({ description: 'Parent Id of the emoji' })
  .openapi('EmojiParent')

const EmojiSchema = z
  .object({
    _id: z.string().openapi({ description: 'Unique Id' }),
    parent: EmojiParentSchema.openapi({ description: 'What owns this emoji' }),
    creator_id: z.string().openapi({ description: 'Uploader user id' }),
    name: z.string().openapi({ description: 'Emoji name' }),
    animated: z.boolean().exactOptional().openapi({ description: 'Whether the emoji is animated' }),
    nsfw: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the emoji is marked as nsfw' }),
  })
  .openapi({ description: 'Emoji', required: ['_id', 'creator_id', 'name', 'parent'] })
  .openapi('Emoji')

const DataEditRoleRanksSchema = z
  .object({ ranks: z.array(z.string()) })
  .openapi({ description: 'New role positions', required: ['ranks'] })
  .openapi('DataEditRoleRanks')

const AuditLogQueryResponseSchema: z.ZodType<AuditLogQueryResponseType> = z
  .object({
    audit_logs: z.array(AuditLogEntrySchema).openapi({ description: 'List of audit logs' }),
    users: z.array(UserSchema).openapi({ description: 'List of users' }),
    members: z.array(MemberSchema).openapi({ description: 'List of members' }),
  })
  .openapi({
    description: 'Response containing the audit log entries and the users involved',
    required: ['audit_logs', 'members', 'users'],
  })
  .openapi('AuditLogQueryResponse')

const InviteResponseSchema = z
  .xor([
    z
      .object({
        type: z.literal('Server'),
        code: z.string().openapi({ description: 'Invite code' }),
        server_id: z.string().openapi({ description: 'Id of the server' }),
        server_name: z.string().openapi({ description: 'Name of the server' }),
        server_icon: FileSchema.nullable()
          .exactOptional()
          .openapi({ description: 'Attachment for server icon' }),
        server_banner: FileSchema.nullable()
          .exactOptional()
          .openapi({ description: 'Attachment for server banner' }),
        server_flags: z
          .int32()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Enum of server flags' }),
        channel_id: z.string().openapi({ description: 'Id of server channel' }),
        channel_name: z.string().openapi({ description: 'Name of server channel' }),
        channel_description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Description of server channel' }),
        user_name: z.string().openapi({ description: 'Name of user who created the invite' }),
        user_avatar: FileSchema.nullable()
          .exactOptional()
          .openapi({ description: 'Avatar of the user who created the invite' }),
        member_count: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Number of members in this server',
          }),
      })
      .openapi({
        description: 'Server channel invite',
        required: [
          'channel_id',
          'channel_name',
          'code',
          'member_count',
          'server_id',
          'server_name',
          'type',
          'user_name',
        ],
      }),
    z
      .object({
        type: z.literal('Group'),
        code: z.string().openapi({ description: 'Invite code' }),
        channel_id: z.string().openapi({ description: 'Id of group channel' }),
        channel_name: z.string().openapi({ description: 'Name of group channel' }),
        channel_description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Description of group channel' }),
        user_name: z.string().openapi({ description: 'Name of user who created the invite' }),
        user_avatar: FileSchema.nullable()
          .exactOptional()
          .openapi({ description: 'Avatar of the user who created the invite' }),
      })
      .openapi({
        description: 'Group channel invite',
        required: ['channel_id', 'channel_name', 'code', 'type', 'user_name'],
      }),
  ])
  .openapi({ description: 'Public invite response' })
  .openapi('InviteResponse')

const InviteJoinResponseSchema = z
  .xor([
    z
      .object({
        type: z.literal('Server'),
        channels: z.array(ChannelSchema).openapi({ description: 'Channels in the server' }),
        server: ServerSchema.openapi({ description: 'Server we are joining' }),
      })
      .openapi({ required: ['channels', 'server', 'type'] }),
    z
      .object({
        type: z.literal('Group'),
        channel: ChannelSchema.openapi({ description: 'Group channel we are joining' }),
        users: z.array(UserSchema).openapi({ description: 'Members of this group' }),
      })
      .openapi({ required: ['channel', 'type', 'users'] }),
  ])
  .openapi({ description: 'Invite join response' })
  .openapi('InviteJoinResponse')

const DataCreateEmojiSchema = z
  .object({
    name: z
      .string()
      .regex(/^[a-z0-9_]+$/)
      .min(1)
      .max(32)
      .openapi({ description: 'Server name' }),
    parent: EmojiParentSchema.openapi({ description: 'Parent information' }),
    nsfw: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether the emoji is mature' }),
  })
  .openapi({ description: 'Create a new emoji', required: ['name', 'parent'] })
  .openapi('DataCreateEmoji')

const DataEditEmojiSchema = z
  .object({
    name: z
      .string()
      .regex(/^[a-z0-9_]+$/)
      .min(1)
      .max(32)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Emoji name' }),
  })
  .openapi({ description: 'Edit emoji information', required: [] })
  .openapi('DataEditEmoji')

const ContentReportReasonSchema = z
  .xor([
    z.literal('NoneSpecified').openapi({ description: 'No reason has been specified' }),
    z.literal('Illegal').openapi({ description: 'Illegal content catch-all reason' }),
    z
      .literal('IllegalGoods')
      .openapi({ description: 'Selling or facilitating use of drugs or other illegal goods' }),
    z.literal('IllegalExtortion').openapi({ description: 'Extortion or blackmail' }),
    z.literal('IllegalPornography').openapi({ description: 'Revenge or child pornography' }),
    z.literal('IllegalHacking').openapi({ description: 'Illegal hacking activity' }),
    z
      .literal('ExtremeViolence')
      .openapi({
        description:
          'Extreme violence, gore, or animal cruelty With exception to violence potrayed in media / creative arts',
      }),
    z
      .literal('PromotesHarm')
      .openapi({ description: 'Content that promotes harm to others / self' }),
    z.literal('UnsolicitedSpam').openapi({ description: 'Unsolicited advertisements' }),
    z.literal('Raid').openapi({ description: 'This is a raid' }),
    z.literal('SpamAbuse').openapi({ description: 'Spam or platform abuse' }),
    z.literal('ScamsFraud').openapi({ description: 'Scams or fraud' }),
    z.literal('Malware').openapi({ description: 'Distribution of malware or malicious links' }),
    z
      .literal('Harassment')
      .openapi({ description: 'Harassment or abuse targeted at another user' }),
  ])
  .openapi({ description: 'Reason for reporting content (message or server)' })
  .openapi('ContentReportReason')

const UserReportReasonSchema = z
  .xor([
    z.literal('NoneSpecified').openapi({ description: 'No reason has been specified' }),
    z.literal('UnsolicitedSpam').openapi({ description: 'Unsolicited advertisements' }),
    z
      .literal('SpamAbuse')
      .openapi({ description: 'User is sending spam or otherwise abusing the platform' }),
    z
      .literal('InappropriateProfile')
      .openapi({
        description: "User's profile contains inappropriate content for a general audience",
      }),
    z.literal('Impersonation').openapi({ description: 'User is impersonating another user' }),
    z.literal('BanEvasion').openapi({ description: 'User is evading a ban' }),
    z
      .literal('Underage')
      .openapi({ description: 'User is not of minimum age to use the platform' }),
  ])
  .openapi({ description: 'Reason for reporting a user' })
  .openapi('UserReportReason')

const ReportedContentSchema = z
  .xor([
    z
      .object({
        type: z.literal('Message'),
        id: z.string().openapi({ description: 'ID of the message' }),
        report_reason: ContentReportReasonSchema.openapi({
          description: 'Reason for reporting message',
        }),
      })
      .openapi({ description: 'Report a message', required: ['id', 'report_reason', 'type'] }),
    z
      .object({
        type: z.literal('Server'),
        id: z.string().openapi({ description: 'ID of the server' }),
        report_reason: ContentReportReasonSchema.openapi({
          description: 'Reason for reporting server',
        }),
      })
      .openapi({ description: 'Report a server', required: ['id', 'report_reason', 'type'] }),
    z
      .object({
        type: z.literal('User'),
        id: z.string().openapi({ description: 'ID of the user' }),
        report_reason: UserReportReasonSchema.openapi({
          description: 'Reason for reporting a user',
        }),
        message_id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Message context' }),
      })
      .openapi({ description: 'Report a user', required: ['id', 'report_reason', 'type'] }),
  ])
  .openapi({ description: 'The content being reported' })
  .openapi('ReportedContent')

const DataReportContentSchema = z
  .object({
    content: ReportedContentSchema.openapi({ description: 'Content being reported' }),
    additional_context: z
      .string()
      .min(0)
      .max(1000)
      .default('')
      .exactOptional()
      .openapi({ description: 'Additional report description' }),
  })
  .openapi({ title: 'Report Data', required: ['content'] })
  .openapi('DataReportContent')

const DataCreateAccountSchema = z
  .object({
    email: z.string().openapi({ description: 'Valid email address' }),
    password: z.string().openapi({ description: 'Password' }),
    invite: z.string().nullable().exactOptional().openapi({ description: 'Invite code' }),
    captcha: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Captcha verification code' }),
  })
  .openapi({ title: 'Account Data', required: ['email', 'password'] })
  .openapi('DataCreateAccount')

const DataResendVerificationSchema = z
  .object({
    email: z.string().openapi({ description: 'Email associated with the account' }),
    captcha: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Captcha verification code' }),
  })
  .openapi({ title: 'Resend Information', required: ['email'] })
  .openapi('DataResendVerification')

const DataAccountDeletionSchema = z
  .object({ token: z.string().openapi({ description: 'Deletion token' }) })
  .openapi({ title: 'Account Deletion Token', required: ['token'] })
  .openapi('DataAccountDeletion')

const AccountInfoSchema = z
  .object({ _id: z.string(), email: z.string() })
  .openapi({ required: ['_id', 'email'] })
  .openapi('AccountInfo')

const DataChangePasswordSchema = z
  .object({
    password: z.string().openapi({ description: 'New password' }),
    current_password: z.string().openapi({ description: 'Current password' }),
  })
  .openapi({ title: 'Change Data', required: ['current_password', 'password'] })
  .openapi('DataChangePassword')

const DataChangeEmailSchema = z
  .object({
    email: z.string().openapi({ description: 'Valid email address' }),
    current_password: z.string().openapi({ description: 'Current password' }),
  })
  .openapi({ title: 'Change Email Data', required: ['current_password', 'email'] })
  .openapi('DataChangeEmail')

const MFATicketSchema = z
  .object({
    _id: z.string().openapi({ description: 'Unique Id' }),
    account_id: z.string().openapi({ description: 'Account Id' }),
    token: z.string().openapi({ description: 'Unique Token' }),
    validated: z
      .boolean()
      .openapi({
        description: 'Whether this ticket has been validated (can be used for account actions)',
      }),
    authorised: z
      .boolean()
      .openapi({ description: 'Whether this ticket is authorised (can be used to log a user in)' }),
    last_totp_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'TOTP code at time of ticket creation' }),
  })
  .openapi({ required: ['_id', 'account_id', 'authorised', 'token', 'validated'] })
  .openapi('MFATicket')

const ResponseVerifySchema = z
  .union([
    z.null().nullable(),
    z
      .object({
        ticket: MFATicketSchema.openapi({
          description: 'Authorised MFA ticket, can be used to log in',
        }),
      })
      .openapi({ required: ['ticket'] }),
  ])
  .openapi('ResponseVerify')

const DataPasswordResetSchema = z
  .object({
    token: z.string().openapi({ description: 'Reset token' }),
    password: z.string().openapi({ description: 'New password' }),
    remove_sessions: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether to logout all sessions' }),
  })
  .openapi({ title: 'Password Reset', required: ['password', 'token'] })
  .openapi('DataPasswordReset')

const DataSendPasswordResetSchema = z
  .object({
    email: z.string().openapi({ description: 'Email associated with the account' }),
    captcha: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Captcha verification code' }),
  })
  .openapi({ title: 'Reset Information', required: ['email'] })
  .openapi('DataSendPasswordReset')

const WebPushSubscriptionSchema = z
  .object({ endpoint: z.string(), p256dh: z.string(), auth: z.string() })
  .openapi({ description: 'Web Push subscription', required: ['auth', 'endpoint', 'p256dh'] })
  .openapi('WebPushSubscription')

const MFAMethodSchema = z.enum(['Password', 'Recovery', 'Totp']).openapi('MFAMethod')

const ResponseLoginSchema = z
  .xor([
    z
      .object({
        result: z.literal('Success'),
        _id: z.string().openapi({ description: 'Unique Id' }),
        user_id: z.string().openapi({ description: 'User Id' }),
        token: z.string().openapi({ description: 'Session token' }),
        name: z.string().openapi({ description: 'Display name' }),
        last_seen: ISO8601TimestampSchema.openapi({
          description: 'When the session was last logged in',
        }),
        origin: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Where the session is originating from' }),
        subscription: WebPushSubscriptionSchema.nullable()
          .exactOptional()
          .openapi({ description: 'Web Push subscription' }),
      })
      .openapi({ required: ['_id', 'last_seen', 'name', 'result', 'token', 'user_id'] }),
    z
      .object({
        result: z.literal('MFA'),
        ticket: z.string(),
        allowed_methods: z.array(MFAMethodSchema),
      })
      .openapi({ required: ['allowed_methods', 'result', 'ticket'] }),
    z
      .object({ result: z.literal('Disabled'), user_id: z.string() })
      .openapi({ required: ['result', 'user_id'] }),
  ])
  .openapi('ResponseLogin')

const MFAResponseSchema = z
  .union([
    z.object({ password: z.string() }).openapi({ required: ['password'] }),
    z.object({ recovery_code: z.string() }).openapi({ required: ['recovery_code'] }),
    z.object({ totp_code: z.string() }).openapi({ required: ['totp_code'] }),
  ])
  .openapi({ description: 'MFA response' })
  .openapi('MFAResponse')

const DataLoginSchema = z
  .union([
    z
      .object({
        email: z.string().openapi({ description: 'Email' }),
        password: z.string().openapi({ description: 'Password' }),
        friendly_name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Friendly name used for the session' }),
      })
      .openapi({ required: ['email', 'password'] }),
    z
      .object({
        mfa_ticket: z
          .string()
          .openapi({
            description:
              'Unvalidated or authorised MFA ticket\n\nUsed to resolve the correct account',
          }),
        mfa_response: MFAResponseSchema.nullable()
          .exactOptional()
          .openapi({
            description:
              'Valid MFA response\n\nThis will take precedence over the `password` field where applicable',
          }),
        friendly_name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Friendly name used for the session' }),
      })
      .openapi({ required: ['mfa_ticket'] }),
  ])
  .openapi({ title: 'Login Data' })
  .openapi('DataLogin')

const SessionInfoSchema = z
  .object({ _id: z.string(), name: z.string() })
  .openapi({ required: ['_id', 'name'] })
  .openapi('SessionInfo')

const DataEditSessionSchema = z
  .object({ friendly_name: z.string().openapi({ description: 'Session friendly name' }) })
  .openapi({ title: 'Edit Data', required: ['friendly_name'] })
  .openapi('DataEditSession')

const MultiFactorStatusSchema = z
  .object({
    email_otp: z.boolean().exactOptional(),
    trusted_handover: z.boolean().exactOptional(),
    email_mfa: z.boolean().exactOptional(),
    totp_mfa: z.boolean().exactOptional(),
    security_key_mfa: z.boolean().exactOptional(),
    recovery_active: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MultiFactorStatus')

const ResponseTotpSecretSchema = z
  .object({ secret: z.string() })
  .openapi({ title: 'Totp Secret', required: ['secret'] })
  .openapi('ResponseTotpSecret')

const DataHelloSchema = z
  .object({ onboarding: z.boolean().openapi({ description: 'Whether onboarding is required' }) })
  .openapi({ title: 'Onboarding Status', required: ['onboarding'] })
  .openapi('DataHello')

const DataOnboardSchema = z
  .object({
    username: z
      .string()
      .regex(/^(\p{L}|[\d_.-])+$/u)
      .min(2)
      .max(32)
      .openapi({
        description: 'New username which will be used to identify the user on the platform',
      }),
  })
  .openapi({ title: 'New User Data', required: ['username'] })
  .openapi('DataOnboard')

const OptionsFetchSettingsSchema = z
  .object({ keys: z.array(z.string()).openapi({ description: 'Keys to fetch' }) })
  .openapi({ description: 'Options for fetching settings', required: ['keys'] })
  .openapi('OptionsFetchSettings')

const ChannelCompositeKeySchema = z
  .object({
    channel: z.string().openapi({ description: 'Channel Id' }),
    user: z.string().openapi({ description: 'User Id' }),
  })
  .openapi({
    description: 'Composite primary key consisting of channel and user id',
    required: ['channel', 'user'],
  })
  .openapi('ChannelCompositeKey')

const ChannelUnreadSchema = z
  .object({
    _id: ChannelCompositeKeySchema.openapi({
      description: "Composite key pointing to a user's view of a channel",
    }),
    last_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Id of the last message read in this channel by a user' }),
    mentions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of message ids that mention the user' }),
  })
  .openapi({ description: 'Channel Unread', required: ['_id'] })
  .openapi('ChannelUnread')

const FieldsWebhookSchema = z
  .literal('Avatar')
  .openapi({ description: 'Optional fields on webhook object' })
  .openapi('FieldsWebhook')

const DataEditWebhookSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(32)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Webhook name' }),
    avatar: z
      .string()
      .min(1)
      .max(128)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Avatar ID' }),
    permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'uint64',
        minimum: 0,
        description: 'Webhook permissions',
      }),
    remove: z
      .array(FieldsWebhookSchema)
      .default([])
      .exactOptional()
      .openapi({ description: 'Fields to remove from webhook' }),
  })
  .openapi({ description: 'New webhook information', required: [] })
  .openapi('DataEditWebhook')

const ResponseWebhookSchema = z
  .object({
    id: z.string().openapi({ description: 'Webhook Id' }),
    name: z.string().openapi({ description: 'Webhook name' }),
    avatar: z.string().nullable().exactOptional().openapi({ description: 'Avatar ID' }),
    channel_id: z.string().openapi({ description: 'The channel this webhook belongs to' }),
    permissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description: 'The permissions for the webhook',
      }),
  })
  .openapi({
    description: 'Webhook information',
    required: ['channel_id', 'id', 'name', 'permissions'],
  })
  .openapi('ResponseWebhook')

const SessionTokenSecurityScheme = {
  description: 'Used to authenticate as a user.',
  type: 'apiKey',
  name: 'x-session-token',
  in: 'header',
}

const ValidMFATicketSecurityScheme = {
  description: 'Used to authorise a request.',
  type: 'apiKey',
  name: 'x-mfa-ticket',
  in: 'header',
}

const UnvalidatedMFATicketSecurityScheme = {
  description: 'Used to authorise a request.',
  type: 'apiKey',
  name: 'x-mfa-ticket',
  in: 'header',
}

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Core'],
  summary: 'Query Node',
  description: 'Fetch the server configuration for this Revolt instance.',
  operationId: 'root_root',
  responses: {
    200: { description: '', content: { 'application/json': { schema: RevoltConfigSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getUsersMeRoute = createRoute({
  method: 'get',
  path: '/users/@me',
  tags: ['User Information'],
  summary: 'Fetch Self',
  description: 'Retrieve your user information.',
  operationId: 'fetch_self_fetch',
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getUsersTargetRoute = createRoute({
  method: 'get',
  path: '/users/{target}',
  tags: ['User Information'],
  summary: 'Fetch User',
  description: "Retrieve a user's information.",
  operationId: 'fetch_user_fetch',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const patchUsersTargetRoute = createRoute({
  method: 'patch',
  path: '/users/{target}',
  tags: ['User Information'],
  summary: 'Edit User',
  description: 'Edit currently authenticated user.',
  operationId: 'edit_user_edit',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: DataEditUserSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getUsersTargetFlagsRoute = createRoute({
  method: 'get',
  path: '/users/{target}/flags',
  tags: ['User Information'],
  summary: 'Fetch User Flags',
  description: "Retrieve a user's flags.",
  operationId: 'fetch_user_flags_fetch_user_flags',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: FlagResponseSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchUsersMeUsernameRoute = createRoute({
  method: 'patch',
  path: '/users/@me/username',
  tags: ['User Information'],
  summary: 'Change Username',
  description: 'Change your username.',
  operationId: 'change_username_change_username',
  request: {
    body: { content: { 'application/json': { schema: DataChangeUsernameSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }, { 'Session Token': [] }],
})

export const getUsersTargetDefaultAvatarRoute = createRoute({
  method: 'get',
  path: '/users/{target}/default_avatar',
  tags: ['User Information'],
  summary: 'Fetch Default Avatar',
  description: 'This returns a default avatar based on the given id.',
  operationId: 'get_default_avatar_default_avatar',
  request: {
    params: z.object({
      target: z
        .string()
        .openapi({
          param: { name: 'target', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default Avatar Picture',
      content: { 'image/png': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
})

export const getUsersTargetProfileRoute = createRoute({
  method: 'get',
  path: '/users/{target}/profile',
  tags: ['User Information'],
  summary: 'Fetch User Profile',
  description:
    "Retrieve a user's profile data.\n\nWill fail if you do not have permission to access the other user's profile.",
  operationId: 'fetch_profile_profile',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserProfileSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getUsersDmsRoute = createRoute({
  method: 'get',
  path: '/users/dms',
  tags: ['Direct Messaging'],
  summary: 'Fetch Direct Message Channels',
  description: 'This fetches your direct messages, including any DM and group DM conversations.',
  operationId: 'fetch_dms_direct_messages',
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(ChannelSchema) } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getUsersTargetDmRoute = createRoute({
  method: 'get',
  path: '/users/{target}/dm',
  tags: ['Direct Messaging'],
  summary: 'Open Direct Message',
  description:
    'Open a DM with another user.\n\nIf the target is oneself, a saved messages channel is returned.',
  operationId: 'open_dm_open_dm',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ChannelSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getUsersTargetMutualRoute = createRoute({
  method: 'get',
  path: '/users/{target}/mutual',
  tags: ['Relationships'],
  summary: 'Fetch Mutual Friends, Servers, Groups and DMs',
  description: 'Retrieve a list of mutual friends, servers, groups and DMs with another user.',
  operationId: 'find_mutual_mutual',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MutualResponseSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putUsersTargetFriendRoute = createRoute({
  method: 'put',
  path: '/users/{target}/friend',
  tags: ['Relationships'],
  summary: 'Accept Friend Request',
  description: "Accept another user's friend request.",
  operationId: 'add_friend_add',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteUsersTargetFriendRoute = createRoute({
  method: 'delete',
  path: '/users/{target}/friend',
  tags: ['Relationships'],
  summary: 'Deny Friend Request / Remove Friend',
  description: "Denies another user's friend request or removes an existing friend.",
  operationId: 'remove_friend_remove',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putUsersTargetBlockRoute = createRoute({
  method: 'put',
  path: '/users/{target}/block',
  tags: ['Relationships'],
  summary: 'Block User',
  description: 'Block another user by their id.',
  operationId: 'block_user_block',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteUsersTargetBlockRoute = createRoute({
  method: 'delete',
  path: '/users/{target}/block',
  tags: ['Relationships'],
  summary: 'Unblock User',
  description: 'Unblock another user by their id.',
  operationId: 'unblock_user_unblock',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postUsersFriendRoute = createRoute({
  method: 'post',
  path: '/users/friend',
  tags: ['Relationships'],
  summary: 'Send Friend Request',
  description: 'Send a friend request to another user.',
  operationId: 'send_friend_request_send_friend_request',
  request: {
    body: {
      content: { 'application/json': { schema: DataSendFriendRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postBotsCreateRoute = createRoute({
  method: 'post',
  path: '/bots/create',
  tags: ['Bots'],
  summary: 'Create Bot',
  description: 'Create a new Revolt bot.',
  operationId: 'create_create_bot',
  request: {
    body: { content: { 'application/json': { schema: DataCreateBotSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BotWithUserResponseSchema } },
    },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getBotsTargetInviteRoute = createRoute({
  method: 'get',
  path: '/bots/{target}/invite',
  tags: ['Bots'],
  summary: 'Fetch Public Bot',
  description: 'Fetch details of a public (or owned) bot by its id.',
  operationId: 'fetch_public_fetch_public_bot',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PublicBotSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postBotsTargetInviteRoute = createRoute({
  method: 'post',
  path: '/bots/{target}/invite',
  tags: ['Bots'],
  summary: 'Invite Bot',
  description: 'Invite a bot to a server or group by its id.`',
  operationId: 'invite_invite_bot',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    query: z.object({
      permissions: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'permissions',
            in: 'query',
            schema: { type: 'integer', format: 'int64', nullable: true },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: InviteBotDestinationSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getBotsBotIdRoute = createRoute({
  method: 'get',
  path: '/bots/{bot_id}',
  tags: ['Bots'],
  summary: 'Fetch Bot',
  description: 'Fetch details of a bot you own by its id.',
  operationId: 'fetch_fetch_bot',
  request: {
    params: z.object({
      bot_id: IdSchema.openapi({
        param: {
          name: 'bot_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: FetchBotResponseSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteBotsBotIdRoute = createRoute({
  method: 'delete',
  path: '/bots/{bot_id}',
  tags: ['Bots'],
  summary: 'Delete Bot',
  description: 'Delete a bot by its id.',
  operationId: 'delete_delete_bot',
  request: {
    params: z.object({
      bot_id: IdSchema.openapi({
        param: {
          name: 'bot_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }, { 'Session Token': [] }, { 'Valid MFA Ticket': [] }],
})

export const patchBotsBotIdRoute = createRoute({
  method: 'patch',
  path: '/bots/{bot_id}',
  tags: ['Bots'],
  summary: 'Edit Bot',
  description: 'Edit bot details by its id.',
  operationId: 'edit_edit_bot',
  request: {
    params: z.object({
      bot_id: IdSchema.openapi({
        param: {
          name: 'bot_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: DataEditBotSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BotWithUserResponseSchema } },
    },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getBotsMeRoute = createRoute({
  method: 'get',
  path: '/bots/@me',
  tags: ['Bots'],
  summary: 'Fetch Owned Bots',
  description: 'Fetch all of the bots that you have control over.',
  operationId: 'fetch_owned_fetch_owned_bots',
  responses: {
    200: { description: '', content: { 'application/json': { schema: OwnedBotsResponseSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getBotsBotIdDiscoverRoute = createRoute({
  method: 'get',
  path: '/bots/{bot_id}/discover',
  tags: ['Discover'],
  summary: 'Get Discover request status',
  description:
    'Fetches the status of your Discover request. If it has been approved or denied, the reason will be provided (if applicable). This endpoint is ONLY USEFUL in production on stoat.chat/app .',
  operationId: 'discover_discover_get_bot_discover_get_bot',
  request: {
    params: z.object({
      bot_id: IdSchema.openapi({
        param: {
          name: 'bot_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: DiscoverRequestSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putBotsBotIdDiscoverRoute = createRoute({
  method: 'put',
  path: '/bots/{bot_id}/discover',
  tags: ['Discover'],
  summary: 'Add bot to Discover',
  description:
    'This puts your bot into the Discover request queue. This endpoint is ONLY USEFUL in production on stoat.chat/app .',
  operationId: 'discover_discover_add_bot_discover_add_bot',
  request: {
    params: z.object({
      bot_id: IdSchema.openapi({
        param: {
          name: 'bot_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteBotsBotIdDiscoverRoute = createRoute({
  method: 'delete',
  path: '/bots/{bot_id}/discover',
  tags: ['Discover'],
  summary: 'Delete Discover request',
  description:
    'This cannot be used if your request is no longer in the queue (ie approved or rejected). If you wish to reapply after a rejection, submit another POST. This endpoint is ONLY USEFUL in production on stoat.chat/app .',
  operationId: 'discover_discover_remove_bot_discover_remove_bot',
  request: {
    params: z.object({
      bot_id: IdSchema.openapi({
        param: {
          name: 'bot_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putChannelsTargetAckMessageRoute = createRoute({
  method: 'put',
  path: '/channels/{target}/ack/{message}',
  tags: ['Messaging'],
  summary: 'Acknowledge Message',
  description:
    "Lets the server and all other clients know that we've seen this message id in this channel.",
  operationId: 'channel_ack_ack',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      message: IdSchema.openapi({
        param: {
          name: 'message',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getChannelsTargetRoute = createRoute({
  method: 'get',
  path: '/channels/{target}',
  tags: ['Channel Information'],
  summary: 'Fetch Channel',
  description: 'Fetch channel by its id.',
  operationId: 'channel_fetch_fetch',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ChannelSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteChannelsTargetRoute = createRoute({
  method: 'delete',
  path: '/channels/{target}',
  tags: ['Channel Information'],
  summary: 'Close Channel',
  description: 'Deletes a server channel, leaves a group or closes a group.',
  operationId: 'channel_delete_delete',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    query: z.object({
      leave_silently: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            name: 'leave_silently',
            in: 'query',
            description: 'Whether to not send a leave message',
            schema: {
              description: 'Whether to not send a leave message',
              type: 'boolean',
              nullable: true,
            },
            required: false,
          },
          description: 'Whether to not send a leave message',
        }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const patchChannelsTargetRoute = createRoute({
  method: 'patch',
  path: '/channels/{target}',
  tags: ['Channel Information'],
  summary: 'Edit Channel',
  description: 'Edit a channel object by its id.',
  operationId: 'channel_edit_edit',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataEditChannelSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ChannelSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getChannelsTargetMembersRoute = createRoute({
  method: 'get',
  path: '/channels/{target}/members',
  tags: ['Groups'],
  summary: 'Fetch Group Members',
  description:
    'Retrieves all users who are part of this group.\n\nThis may not return full user information if users are not friends but have mutual connections.',
  operationId: 'members_fetch_fetch_members',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(UserSchema) } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postChannelsTargetInvitesRoute = createRoute({
  method: 'post',
  path: '/channels/{target}/invites',
  tags: ['Channel Invites'],
  summary: 'Create Invite',
  description: 'Creates an invite to this channel.\n\nChannel must be a `TextChannel`.',
  operationId: 'invite_create_create_invite',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataCreateInviteSchema } } },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: InviteSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getChannelsTargetMessagesRoute = createRoute({
  method: 'get',
  path: '/channels/{target}/messages',
  tags: ['Messaging'],
  summary: 'Fetch Messages',
  description: 'Fetch multiple messages.',
  operationId: 'message_query_query',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64().min(1n).max(100n))
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'Maximum number of messages to fetch\n\nFor fetching nearby messages, this is \\`(limit + 2)\\`.',
            schema: {
              description:
                'Maximum number of messages to fetch\n\nFor fetching nearby messages, this is \\`(limit + 2)\\`.',
              type: 'integer',
              format: 'int64',
              maximum: 100,
              minimum: 1,
              nullable: true,
            },
            required: false,
          },
          description:
            'Maximum number of messages to fetch\n\nFor fetching nearby messages, this is \\`(limit + 2)\\`.',
        }),
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.string().length(26).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description: 'Message id before which messages should be fetched',
            schema: {
              description: 'Message id before which messages should be fetched',
              type: 'string',
              maxLength: 26,
              minLength: 26,
              nullable: true,
            },
            required: false,
          },
          description: 'Message id before which messages should be fetched',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.string().length(26).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description: 'Message id after which messages should be fetched',
            schema: {
              description: 'Message id after which messages should be fetched',
              type: 'string',
              maxLength: 26,
              minLength: 26,
              nullable: true,
            },
            required: false,
          },
          description: 'Message id after which messages should be fetched',
        }),
      sort: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .xor([
            z.literal('Relevance').openapi({ description: 'Sort by the most relevant messages' }),
            z.literal('Latest').openapi({ description: 'Sort by the newest messages first' }),
            z.literal('Oldest').openapi({ description: 'Sort by the oldest messages first' }),
          ])
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Message sort direction',
            schema: {
              description: 'Message sort direction',
              oneOf: [
                {
                  description: 'Sort by the most relevant messages',
                  type: 'string',
                  enum: ['Relevance'],
                },
                {
                  description: 'Sort by the newest messages first',
                  type: 'string',
                  enum: ['Latest'],
                },
                {
                  description: 'Sort by the oldest messages first',
                  type: 'string',
                  enum: ['Oldest'],
                },
              ],
              nullable: true,
            },
            required: false,
          },
          description: 'Message sort direction',
        }),
      nearby: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.string().length(26).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'nearby',
            in: 'query',
            description:
              "Message id to search around\n\nSpecifying 'nearby' ignores 'before', 'after' and 'sort'. It will also take half of limit rounded as the limits to each side. It also fetches the message ID specified.",
            schema: {
              description:
                "Message id to search around\n\nSpecifying 'nearby' ignores 'before', 'after' and 'sort'. It will also take half of limit rounded as the limits to each side. It also fetches the message ID specified.",
              type: 'string',
              maxLength: 26,
              minLength: 26,
              nullable: true,
            },
            required: false,
          },
          description:
            "Message id to search around\n\nSpecifying 'nearby' ignores 'before', 'after' and 'sort'. It will also take half of limit rounded as the limits to each side. It also fetches the message ID specified.",
        }),
      include_users: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            name: 'include_users',
            in: 'query',
            description: 'Whether to include user (and member, if server channel) objects',
            schema: {
              description: 'Whether to include user (and member, if server channel) objects',
              type: 'boolean',
              nullable: true,
            },
            required: false,
          },
          description: 'Whether to include user (and member, if server channel) objects',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BulkMessageResponseSchema } },
    },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postChannelsTargetMessagesRoute = createRoute({
  method: 'post',
  path: '/channels/{target}/messages',
  tags: ['Messaging'],
  summary: 'Send Message',
  description: 'Sends a message to the given channel.',
  operationId: 'message_send_message_send',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'Idempotency-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Idempotency-Key',
            in: 'header',
            description: 'Unique key to prevent duplicate requests',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataMessageSendSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MessageSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postChannelsTargetSearchRoute = createRoute({
  method: 'post',
  path: '/channels/{target}/search',
  tags: ['Messaging'],
  summary: 'Search for Messages',
  description: 'This route searches for messages within the given parameters.',
  operationId: 'message_search_search',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: DataMessageSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: BulkMessageResponseSchema } },
    },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postChannelsTargetMessagesMsgPinRoute = createRoute({
  method: 'post',
  path: '/channels/{target}/messages/{msg}/pin',
  tags: ['Messaging'],
  summary: 'Pins a message',
  description: 'Pins a message by its id.',
  operationId: 'message_pin_message_pin',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      msg: IdSchema.openapi({
        param: {
          name: 'msg',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteChannelsTargetMessagesMsgPinRoute = createRoute({
  method: 'delete',
  path: '/channels/{target}/messages/{msg}/pin',
  tags: ['Messaging'],
  summary: 'Unpins a message',
  description: 'Unpins a message by its id.',
  operationId: 'message_unpin_message_unpin',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      msg: IdSchema.openapi({
        param: {
          name: 'msg',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getChannelsTargetMessagesMsgRoute = createRoute({
  method: 'get',
  path: '/channels/{target}/messages/{msg}',
  tags: ['Messaging'],
  summary: 'Fetch Message',
  description: 'Retrieves a message by its id.',
  operationId: 'message_fetch_fetch',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      msg: IdSchema.openapi({
        param: {
          name: 'msg',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MessageSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteChannelsTargetMessagesMsgRoute = createRoute({
  method: 'delete',
  path: '/channels/{target}/messages/{msg}',
  tags: ['Messaging'],
  summary: 'Delete Message',
  description: "Delete a message you've sent or one you have permission to delete.",
  operationId: 'message_delete_delete',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      msg: IdSchema.openapi({
        param: {
          name: 'msg',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const patchChannelsTargetMessagesMsgRoute = createRoute({
  method: 'patch',
  path: '/channels/{target}/messages/{msg}',
  tags: ['Messaging'],
  summary: 'Edit Message',
  description: "Edits a message that you've previously sent.",
  operationId: 'message_edit_edit',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      msg: IdSchema.openapi({
        param: {
          name: 'msg',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: DataEditMessageSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MessageSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteChannelsTargetMessagesBulkRoute = createRoute({
  method: 'delete',
  path: '/channels/{target}/messages/bulk',
  tags: ['Messaging'],
  summary: 'Bulk Delete Messages',
  description:
    "Delete multiple messages you've sent or one you have permission to delete.\n\nThis will always require `ManageMessages` permission regardless of whether you own the message or not.\n\nMessages must have been sent within the past 1 week.",
  operationId: 'message_bulk_delete_bulk_delete_messages',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OptionsBulkDeleteSchema } }, required: true },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postChannelsCreateRoute = createRoute({
  method: 'post',
  path: '/channels/create',
  tags: ['Groups'],
  summary: 'Create Group',
  description: 'Create a new group channel.',
  operationId: 'group_create_create_group',
  request: {
    body: { content: { 'application/json': { schema: DataCreateGroupSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ChannelSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putChannelsGroupIdRecipientsMemberIdRoute = createRoute({
  method: 'put',
  path: '/channels/{group_id}/recipients/{member_id}',
  tags: ['Groups'],
  summary: 'Add Member to Group',
  description: 'Adds another user to the group.',
  operationId: 'group_add_member_add_member',
  request: {
    params: z.object({
      group_id: IdSchema.openapi({
        param: {
          name: 'group_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      member_id: IdSchema.openapi({
        param: {
          name: 'member_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteChannelsGroupIdRecipientsMemberIdRoute = createRoute({
  method: 'delete',
  path: '/channels/{group_id}/recipients/{member_id}',
  tags: ['Groups'],
  summary: 'Remove Member from Group',
  description: 'Removes a user from the group.',
  operationId: 'group_remove_member_remove_member',
  request: {
    params: z.object({
      group_id: IdSchema.openapi({
        param: {
          name: 'group_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      member_id: IdSchema.openapi({
        param: {
          name: 'member_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postChannelsTargetJoinCallRoute = createRoute({
  method: 'post',
  path: '/channels/{target}/join_call',
  tags: ['Voice'],
  summary: 'Join Call',
  description: 'Asks the voice server for a token to join the call.',
  operationId: 'voice_join_call',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: DataJoinCallSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CreateVoiceUserResponseSchema } },
    },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putChannelsTargetEndRingTargetUserRoute = createRoute({
  method: 'put',
  path: '/channels/{target}/end_ring/{target_user}',
  tags: ['Voice'],
  summary: 'Stop Ring',
  description:
    'Stops ringing a specific user in a dm call. You must be in the call to use this endpoint, returns NotConnected otherwise. Only valid in DM/Group channels, will return NoEffect in servers. Returns NotFound if the user is not in the dm/group channel',
  operationId: 'voice_stop_ring_stop_ring',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      target_user: IdSchema.openapi({
        param: {
          name: 'target_user',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putChannelsTargetPermissionsRoleIdRoute = createRoute({
  method: 'put',
  path: '/channels/{target}/permissions/{role_id}',
  tags: ['Channel Permissions'],
  summary: 'Set Role Permission',
  description:
    'Sets permissions for the specified role in this channel.\n\nChannel must be a `TextChannel`.',
  operationId: 'permissions_set_set_role_permissions',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      role_id: z
        .string()
        .openapi({
          param: { name: 'role_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DataSetRolePermissionsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ChannelSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putChannelsTargetPermissionsDefaultRoute = createRoute({
  method: 'put',
  path: '/channels/{target}/permissions/default',
  tags: ['Channel Permissions'],
  summary: 'Set Default Permission',
  description:
    'Sets permissions for the default role in this channel.\n\nChannel must be a `Group` or `TextChannel`.',
  operationId: 'permissions_set_default_set_default_channel_permissions',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DataDefaultChannelPermissionsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ChannelSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putChannelsTargetMessagesMsgReactionsEmojiRoute = createRoute({
  method: 'put',
  path: '/channels/{target}/messages/{msg}/reactions/{emoji}',
  tags: ['Interactions'],
  summary: 'Add Reaction to Message',
  description: 'React to a given message.',
  operationId: 'message_react_react_message',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      msg: IdSchema.openapi({
        param: {
          name: 'msg',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      emoji: IdSchema.openapi({
        param: {
          name: 'emoji',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteChannelsTargetMessagesMsgReactionsEmojiRoute = createRoute({
  method: 'delete',
  path: '/channels/{target}/messages/{msg}/reactions/{emoji}',
  tags: ['Interactions'],
  summary: 'Remove Reaction(s) to Message',
  description:
    "Remove your own, someone else's or all of a given reaction.\n\nRequires `ManageMessages` if changing others' reactions.",
  operationId: 'message_unreact_unreact_message',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      msg: IdSchema.openapi({
        param: {
          name: 'msg',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      emoji: IdSchema.openapi({
        param: {
          name: 'emoji',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    query: z.object({
      user_id: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'user_id',
            in: 'query',
            description: "Remove a specific user's reaction",
            schema: {
              description: "Remove a specific user's reaction",
              type: 'string',
              nullable: true,
            },
            required: false,
          },
          description: "Remove a specific user's reaction",
        }),
      remove_all: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            name: 'remove_all',
            in: 'query',
            description: 'Remove all reactions',
            schema: { description: 'Remove all reactions', type: 'boolean', nullable: true },
            required: false,
          },
          description: 'Remove all reactions',
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteChannelsTargetMessagesMsgReactionsRoute = createRoute({
  method: 'delete',
  path: '/channels/{target}/messages/{msg}/reactions',
  tags: ['Interactions'],
  summary: 'Remove All Reactions from Message',
  description:
    "Remove your own, someone else's or all of a given reaction.\n\nRequires `ManageMessages` permission.",
  operationId: 'message_clear_reactions_clear_reactions',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      msg: IdSchema.openapi({
        param: {
          name: 'msg',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getChannelsChannelIdWebhooksRoute = createRoute({
  method: 'get',
  path: '/channels/{channel_id}/webhooks',
  tags: ['Webhooks'],
  summary: 'Gets all webhooks',
  description: 'Gets all webhooks inside the channel',
  operationId: 'webhook_fetch_all_fetch_webhooks',
  request: {
    params: z.object({
      channel_id: IdSchema.openapi({
        param: {
          name: 'channel_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(WebhookSchema) } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postChannelsChannelIdWebhooksRoute = createRoute({
  method: 'post',
  path: '/channels/{channel_id}/webhooks',
  tags: ['Webhooks'],
  summary: 'Creates a webhook',
  description: 'Creates a webhook which 3rd party platforms can use to send messages',
  operationId: 'webhook_create_create_webhook',
  request: {
    params: z.object({
      channel_id: IdSchema.openapi({
        param: {
          name: 'channel_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateWebhookBodySchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: WebhookSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postServersCreateRoute = createRoute({
  method: 'post',
  path: '/servers/create',
  tags: ['Server Information'],
  summary: 'Create Server',
  description: 'Create a new server.',
  operationId: 'server_create_create_server',
  request: {
    body: { content: { 'application/json': { schema: DataCreateServerSchema } }, required: true },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CreateServerLegacyResponseSchema } },
    },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getServersTargetRoute = createRoute({
  method: 'get',
  path: '/servers/{target}',
  tags: ['Server Information'],
  summary: 'Fetch Server',
  description: 'Fetch a server by its id.',
  operationId: 'server_fetch_fetch',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    query: z.object({
      include_channels: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            name: 'include_channels',
            in: 'query',
            description: 'Whether to include channels',
            schema: { description: 'Whether to include channels', type: 'boolean', nullable: true },
            required: false,
          },
          description: 'Whether to include channels',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: FetchServerResponseSchema } },
    },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteServersTargetRoute = createRoute({
  method: 'delete',
  path: '/servers/{target}',
  tags: ['Server Information'],
  summary: 'Delete / Leave Server',
  description: 'Deletes a server if owner otherwise leaves.',
  operationId: 'server_delete_delete',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    query: z.object({
      leave_silently: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            name: 'leave_silently',
            in: 'query',
            description: 'Whether to not send a leave message',
            schema: {
              description: 'Whether to not send a leave message',
              type: 'boolean',
              nullable: true,
            },
            required: false,
          },
          description: 'Whether to not send a leave message',
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }, { 'Session Token': [] }, { 'Valid MFA Ticket': [] }],
})

export const patchServersTargetRoute = createRoute({
  method: 'patch',
  path: '/servers/{target}',
  tags: ['Server Information'],
  summary: 'Edit Server',
  description: 'Edit a server by its id.',
  operationId: 'server_edit_edit',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataEditServerSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ServerSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }, { 'Valid MFA Ticket': [] }],
})

export const putServersTargetAckRoute = createRoute({
  method: 'put',
  path: '/servers/{target}/ack',
  tags: ['Server Information'],
  summary: 'Mark Server As Read',
  description: 'Mark all channels in a server as read.',
  operationId: 'server_ack_ack',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postServersServerChannelsRoute = createRoute({
  method: 'post',
  path: '/servers/{server}/channels',
  tags: ['Server Information'],
  summary: 'Create Channel',
  description: 'Create a new Text or Voice channel.',
  operationId: 'channel_create_create_server_channel',
  request: {
    params: z.object({
      server: IdSchema.openapi({
        param: {
          name: 'server',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DataCreateServerChannelSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ChannelSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getServersTargetMembersRoute = createRoute({
  method: 'get',
  path: '/servers/{target}/members',
  tags: ['Server Members'],
  summary: 'Fetch Members',
  description: 'Fetch all server members.',
  operationId: 'member_fetch_all_fetch_all',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    query: z.object({
      exclude_offline: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            name: 'exclude_offline',
            in: 'query',
            description: 'Whether to exclude offline users',
            schema: {
              description: 'Whether to exclude offline users',
              type: 'boolean',
              nullable: true,
            },
            required: false,
          },
          description: 'Whether to exclude offline users',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AllMemberResponseSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getServersServerIdMembersMemberIdRoute = createRoute({
  method: 'get',
  path: '/servers/{server_id}/members/{member_id}',
  tags: ['Server Members'],
  summary: 'Fetch Member',
  description: 'Retrieve a member.',
  operationId: 'member_fetch_fetch',
  request: {
    params: z.object({
      server_id: IdSchema.openapi({
        param: {
          name: 'server_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      member_id: IdSchema.openapi({
        param: {
          name: 'member_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    query: z.object({
      roles: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            name: 'roles',
            in: 'query',
            schema: { type: 'boolean', nullable: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MemberResponseSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteServersServerIdMembersMemberIdRoute = createRoute({
  method: 'delete',
  path: '/servers/{server_id}/members/{member_id}',
  tags: ['Server Members'],
  summary: 'Kick Member',
  description: 'Removes a member from the server.',
  operationId: 'member_remove_kick',
  request: {
    params: z.object({
      server_id: IdSchema.openapi({
        param: {
          name: 'server_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      member_id: IdSchema.openapi({
        param: {
          name: 'member_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const patchServersServerIdMembersMemberIdRoute = createRoute({
  method: 'patch',
  path: '/servers/{server_id}/members/{member_id}',
  tags: ['Server Members'],
  summary: 'Edit Member',
  description: 'Edit a member by their id.',
  operationId: 'member_edit_edit',
  request: {
    params: z.object({
      server_id: IdSchema.openapi({
        param: {
          name: 'server_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      member_id: IdSchema.openapi({
        param: {
          name: 'member_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataMemberEditSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MemberSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getServersTargetMembersExperimentalQueryRoute = createRoute({
  method: 'get',
  path: '/servers/{target}/members_experimental_query',
  tags: ['Server Members'],
  summary: 'Query members by name',
  description:
    'Query members by a given name, this API is not stable and will be removed in the future.',
  operationId: 'member_experimental_query_member_experimental_query',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'String to search for',
            required: true,
            schema: { description: 'String to search for', type: 'string' },
          },
          description: 'String to search for',
        }),
      experimental_api: z
        .stringbool()
        .openapi({
          param: {
            name: 'experimental_api',
            in: 'query',
            description: 'Discourage use of this API',
            required: true,
            schema: { description: 'Discourage use of this API', type: 'boolean' },
          },
          description: 'Discourage use of this API',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MemberQueryResponseSchema } },
    },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putServersServerBansTargetRoute = createRoute({
  method: 'put',
  path: '/servers/{server}/bans/{target}',
  tags: ['Server Members'],
  summary: 'Ban User',
  description: 'Ban a user by their id.',
  operationId: 'ban_create_ban',
  request: {
    params: z.object({
      server: IdSchema.openapi({
        param: {
          name: 'server',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataBanCreateSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ServerBanSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteServersServerBansTargetRoute = createRoute({
  method: 'delete',
  path: '/servers/{server}/bans/{target}',
  tags: ['Server Members'],
  summary: 'Unban user',
  description: "Remove a user's ban.",
  operationId: 'ban_remove_unban',
  request: {
    params: z.object({
      server: IdSchema.openapi({
        param: {
          name: 'server',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getServersTargetBansRoute = createRoute({
  method: 'get',
  path: '/servers/{target}/bans',
  tags: ['Server Members'],
  summary: 'Fetch Bans',
  description: 'Fetch all bans on a server.',
  operationId: 'ban_list_list',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: BanListResultSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getServersTargetInvitesRoute = createRoute({
  method: 'get',
  path: '/servers/{target}/invites',
  tags: ['Server Members'],
  summary: 'Fetch Invites',
  description: 'Fetch all server invites.',
  operationId: 'invites_fetch_invites',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(InviteSchema) } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postServersTargetRolesRoute = createRoute({
  method: 'post',
  path: '/servers/{target}/roles',
  tags: ['Server Permissions'],
  summary: 'Create Role',
  description: 'Creates a new server role.',
  operationId: 'roles_create_create',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataCreateRoleSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: NewRoleResponseSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getServersTargetRolesRoleIdRoute = createRoute({
  method: 'get',
  path: '/servers/{target}/roles/{role_id}',
  tags: ['Server Permissions'],
  summary: 'Fetch Role',
  description: 'Fetch a role by its id.',
  operationId: 'roles_fetch_fetch',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      role_id: z
        .string()
        .openapi({
          param: { name: 'role_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RoleSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteServersTargetRolesRoleIdRoute = createRoute({
  method: 'delete',
  path: '/servers/{target}/roles/{role_id}',
  tags: ['Server Permissions'],
  summary: 'Delete Role',
  description: 'Delete a server role by its id.',
  operationId: 'roles_delete_delete',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      role_id: z
        .string()
        .openapi({
          param: { name: 'role_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const patchServersTargetRolesRoleIdRoute = createRoute({
  method: 'patch',
  path: '/servers/{target}/roles/{role_id}',
  tags: ['Server Permissions'],
  summary: 'Edit Role',
  description: 'Edit a role by its id.',
  operationId: 'roles_edit_edit',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      role_id: z
        .string()
        .openapi({
          param: { name: 'role_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataEditRoleSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RoleSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putServersTargetPermissionsRoleIdRoute = createRoute({
  method: 'put',
  path: '/servers/{target}/permissions/{role_id}',
  tags: ['Server Permissions'],
  summary: 'Set Role Permission',
  description: 'Sets permissions for the specified role in the server.',
  operationId: 'permissions_set_set_role_permission',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      role_id: z
        .string()
        .openapi({
          param: { name: 'role_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DataSetServerRolePermissionSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ServerSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putServersTargetPermissionsDefaultRoute = createRoute({
  method: 'put',
  path: '/servers/{target}/permissions/default',
  tags: ['Server Permissions'],
  summary: 'Set Default Permission',
  description: 'Sets permissions for the default role in this server.',
  operationId: 'permissions_set_default_set_default_server_permissions',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DataPermissionsValueSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ServerSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getServersTargetEmojisRoute = createRoute({
  method: 'get',
  path: '/servers/{target}/emojis',
  tags: ['Server Customisation'],
  summary: 'Fetch Server Emoji',
  description: 'Fetch all emoji on a server.',
  operationId: 'emoji_list_list_emoji',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(EmojiSchema) } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const patchServersTargetRolesRanksRoute = createRoute({
  method: 'patch',
  path: '/servers/{target}/roles/ranks',
  tags: ['Server Permissions'],
  summary: 'Edits server roles ranks',
  description: "Edit's server role's ranks.",
  operationId: 'roles_edit_positions_edit_role_ranks',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataEditRoleRanksSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ServerSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getServersTargetAuditLogsRoute = createRoute({
  method: 'get',
  path: '/servers/{target}/audit_logs',
  tags: ['Audit Logs'],
  summary: 'Audit Log Query',
  description: "Queries a server's audit logs.",
  operationId: 'audit_log_query_query',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    query: z.object({
      user: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.string().length(26).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'user',
            in: 'query',
            description: 'Filter by who ran the action',
            schema: {
              description: 'Filter by who ran the action',
              type: 'string',
              maxLength: 26,
              minLength: 26,
              nullable: true,
            },
            required: false,
          },
          description: 'Filter by who ran the action',
        }),
      target: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.string().length(26).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'target',
            in: 'query',
            description: 'Filter by who the action is targetting',
            schema: {
              description: 'Filter by who the action is targetting',
              type: 'string',
              maxLength: 26,
              minLength: 26,
              nullable: true,
            },
            required: false,
          },
          description: 'Filter by who the action is targetting',
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Filter by the action type',
            schema: {
              description: 'Filter by the action type',
              type: 'array',
              items: { type: 'string' },
              nullable: true,
            },
            required: false,
          },
          description: 'Filter by the action type',
        }),
      before: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.string().length(26).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            description: 'Entries before a certain entry id',
            schema: {
              description: 'Entries before a certain entry id',
              type: 'string',
              maxLength: 26,
              minLength: 26,
              nullable: true,
            },
            required: false,
          },
          description: 'Entries before a certain entry id',
        }),
      after: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.string().length(26).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            description: 'Entries after a certain entry id',
            schema: {
              description: 'Entries after a certain entry id',
              type: 'string',
              maxLength: 26,
              minLength: 26,
              nullable: true,
            },
            required: false,
          },
          description: 'Entries after a certain entry id',
        }),
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64().min(1n).max(100n))
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of entries to fetch',
            schema: {
              description: 'Maximum number of entries to fetch',
              type: 'integer',
              format: 'int64',
              maximum: 100,
              minimum: 1,
              nullable: true,
            },
            required: false,
          },
          description: 'Maximum number of entries to fetch',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: AuditLogQueryResponseSchema } },
    },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getServersServerDiscoverRoute = createRoute({
  method: 'get',
  path: '/servers/{server}/discover',
  tags: ['Discover'],
  summary: 'Get Discover request status',
  description:
    'Fetches the status of your Discover request. If it has been approved or denied, the reason will be provided (if applicable). This endpoint is ONLY USEFUL in production on stoat.chat/app .',
  operationId: 'discover_discover_get_discover_get',
  request: {
    params: z.object({
      server: IdSchema.openapi({
        param: {
          name: 'server',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: DiscoverRequestSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putServersServerDiscoverRoute = createRoute({
  method: 'put',
  path: '/servers/{server}/discover',
  tags: ['Discover'],
  summary: 'Add server to Discover',
  description:
    'This puts your server into the Discover request queue. This endpoint is ONLY USEFUL in production on stoat.chat/app .',
  operationId: 'discover_discover_add_discover_add',
  request: {
    params: z.object({
      server: IdSchema.openapi({
        param: {
          name: 'server',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteServersServerDiscoverRoute = createRoute({
  method: 'delete',
  path: '/servers/{server}/discover',
  tags: ['Discover'],
  summary: 'Delete Discover request',
  description:
    'This cannot be used if your request is no longer in the queue (ie approved or rejected). If you wish to reapply after a rejection, submit another POST. This endpoint is ONLY USEFUL in production on stoat.chat/app .',
  operationId: 'discover_discover_remove_discover_remove',
  request: {
    params: z.object({
      server: IdSchema.openapi({
        param: {
          name: 'server',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getInvitesTargetRoute = createRoute({
  method: 'get',
  path: '/invites/{target}',
  tags: ['Invites'],
  summary: 'Fetch Invite',
  description: 'Fetch an invite by its id.',
  operationId: 'invite_fetch_fetch',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: InviteResponseSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postInvitesTargetRoute = createRoute({
  method: 'post',
  path: '/invites/{target}',
  tags: ['Invites'],
  summary: 'Join Invite',
  description: 'Join an invite by its ID',
  operationId: 'invite_join_join',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: InviteJoinResponseSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteInvitesTargetRoute = createRoute({
  method: 'delete',
  path: '/invites/{target}',
  tags: ['Invites'],
  summary: 'Delete Invite',
  description: 'Delete an invite by its id.',
  operationId: 'invite_delete_delete',
  request: {
    params: z.object({
      target: IdSchema.openapi({
        param: {
          name: 'target',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getCustomEmojiEmojiIdRoute = createRoute({
  method: 'get',
  path: '/custom/emoji/{emoji_id}',
  tags: ['Emojis'],
  summary: 'Fetch Emoji',
  description: 'Fetch an emoji by its id.',
  operationId: 'emoji_fetch_fetch_emoji',
  request: {
    params: z.object({
      emoji_id: IdSchema.openapi({
        param: {
          name: 'emoji_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EmojiSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putCustomEmojiEmojiIdRoute = createRoute({
  method: 'put',
  path: '/custom/emoji/{emoji_id}',
  tags: ['Emojis'],
  summary: 'Create New Emoji',
  description: 'Create an emoji by its Autumn upload id.',
  operationId: 'emoji_create_create_emoji',
  request: {
    params: z.object({
      emoji_id: z
        .string()
        .openapi({
          param: { name: 'emoji_id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataCreateEmojiSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EmojiSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteCustomEmojiEmojiIdRoute = createRoute({
  method: 'delete',
  path: '/custom/emoji/{emoji_id}',
  tags: ['Emojis'],
  summary: 'Delete Emoji',
  description: 'Delete an emoji by its id.',
  operationId: 'emoji_delete_delete_emoji',
  request: {
    params: z.object({
      emoji_id: IdSchema.openapi({
        param: {
          name: 'emoji_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const patchCustomEmojiEmojiIdRoute = createRoute({
  method: 'patch',
  path: '/custom/emoji/{emoji_id}',
  tags: ['Emojis'],
  summary: 'Edit Emoji',
  description: 'Edit an emoji by its id.',
  operationId: 'emoji_edit_edit_emoji',
  request: {
    params: z.object({
      emoji_id: IdSchema.openapi({
        param: {
          name: 'emoji_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataEditEmojiSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: EmojiSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postSafetyReportRoute = createRoute({
  method: 'post',
  path: '/safety/report',
  tags: ['User Safety'],
  summary: 'Report Content',
  description: 'Report a piece of content to the moderation team.',
  operationId: 'report_content_report_content',
  request: {
    body: { content: { 'application/json': { schema: DataReportContentSchema } }, required: true },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postAuthAccountCreateRoute = createRoute({
  method: 'post',
  path: '/auth/account/create',
  tags: ['Account'],
  summary: 'Create Account',
  description: 'Create a new account.',
  operationId: 'create_account_create_account',
  request: {
    body: { content: { 'application/json': { schema: DataCreateAccountSchema } }, required: true },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postAuthAccountReverifyRoute = createRoute({
  method: 'post',
  path: '/auth/account/reverify',
  tags: ['Account'],
  summary: 'Resend Verification',
  description: 'Resend account creation verification email.',
  operationId: 'resend_verification_resend_verification',
  request: {
    body: {
      content: { 'application/json': { schema: DataResendVerificationSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const putAuthAccountDeleteRoute = createRoute({
  method: 'put',
  path: '/auth/account/delete',
  tags: ['Account'],
  summary: 'Confirm Account Deletion',
  description: 'Schedule an account for deletion by confirming the received token.',
  operationId: 'confirm_deletion_confirm_deletion',
  request: {
    body: {
      content: { 'application/json': { schema: DataAccountDeletionSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postAuthAccountDeleteRoute = createRoute({
  method: 'post',
  path: '/auth/account/delete',
  tags: ['Account'],
  summary: 'Delete Account',
  description: 'Request to have an account deleted.',
  operationId: 'delete_account_delete_account',
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }, { 'Valid MFA Ticket': [] }],
})

export const getAuthAccountIndexRoute = createRoute({
  method: 'get',
  path: '/auth/account/',
  tags: ['Account'],
  summary: 'Fetch Account',
  description: 'Fetch account information from the current session.',
  operationId: 'fetch_account_fetch_account',
  responses: {
    200: { description: '', content: { 'application/json': { schema: AccountInfoSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postAuthAccountDisableRoute = createRoute({
  method: 'post',
  path: '/auth/account/disable',
  tags: ['Account'],
  summary: 'Disable Account',
  description: 'Disable an account.',
  operationId: 'disable_account_disable_account',
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }, { 'Valid MFA Ticket': [] }],
})

export const patchAuthAccountChangePasswordRoute = createRoute({
  method: 'patch',
  path: '/auth/account/change/password',
  tags: ['Account'],
  summary: 'Change Password',
  description: 'Change the current account password.',
  operationId: 'change_password_change_password',
  request: {
    body: { content: { 'application/json': { schema: DataChangePasswordSchema } }, required: true },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }, { 'Valid MFA Ticket': [] }],
})

export const patchAuthAccountChangeEmailRoute = createRoute({
  method: 'patch',
  path: '/auth/account/change/email',
  tags: ['Account'],
  summary: 'Change Email',
  description: 'Change the associated account email.',
  operationId: 'change_email_change_email',
  request: {
    body: { content: { 'application/json': { schema: DataChangeEmailSchema } }, required: true },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }, { 'Valid MFA Ticket': [] }],
})

export const postAuthAccountVerifyCodeRoute = createRoute({
  method: 'post',
  path: '/auth/account/verify/{code}',
  tags: ['Account'],
  summary: 'Verify Email',
  description: 'Verify an email address.',
  operationId: 'verify_email_verify_email',
  request: {
    params: z.object({
      code: z
        .string()
        .openapi({
          param: { name: 'code', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ResponseVerifySchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postAuthAccountResetPasswordRoute = createRoute({
  method: 'post',
  path: '/auth/account/reset_password',
  tags: ['Account'],
  summary: 'Send Password Reset',
  description: 'Send an email to reset account password.',
  operationId: 'send_password_reset_send_password_reset',
  request: {
    body: {
      content: { 'application/json': { schema: DataSendPasswordResetSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchAuthAccountResetPasswordRoute = createRoute({
  method: 'patch',
  path: '/auth/account/reset_password',
  tags: ['Account'],
  summary: 'Password Reset',
  description: 'Confirm password reset and change the password.',
  operationId: 'password_reset_password_reset',
  request: {
    body: { content: { 'application/json': { schema: DataPasswordResetSchema } }, required: true },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postAuthSessionLoginRoute = createRoute({
  method: 'post',
  path: '/auth/session/login',
  tags: ['Session'],
  summary: 'Login',
  description: 'Login to an account.',
  operationId: 'login_login',
  request: {
    body: { content: { 'application/json': { schema: DataLoginSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ResponseLoginSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postAuthSessionLogoutRoute = createRoute({
  method: 'post',
  path: '/auth/session/logout',
  tags: ['Session'],
  summary: 'Logout',
  description: 'Delete current session.',
  operationId: 'logout_logout',
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getAuthSessionAllRoute = createRoute({
  method: 'get',
  path: '/auth/session/all',
  tags: ['Session'],
  summary: 'Fetch Sessions',
  description: 'Fetch all sessions associated with this account.',
  operationId: 'fetch_all_fetch_all',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(SessionInfoSchema) } },
    },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteAuthSessionAllRoute = createRoute({
  method: 'delete',
  path: '/auth/session/all',
  tags: ['Session'],
  summary: 'Delete All Sessions',
  description: 'Delete all active sessions, optionally including current one.',
  operationId: 'revoke_all_revoke_all',
  request: {
    query: z.object({
      revoke_self: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .exactOptional()
        .openapi({
          param: {
            name: 'revoke_self',
            in: 'query',
            schema: { type: 'boolean', nullable: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Valid MFA Ticket': [] }, { 'Session Token': [] }, { 'Session Token': [] }],
})

export const deleteAuthSessionIdRoute = createRoute({
  method: 'delete',
  path: '/auth/session/{id}',
  tags: ['Session'],
  summary: 'Revoke Session',
  description: 'Delete a specific active session.',
  operationId: 'revoke_revoke',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Valid MFA Ticket': [] }, { 'Session Token': [] }],
})

export const patchAuthSessionIdRoute = createRoute({
  method: 'patch',
  path: '/auth/session/{id}',
  tags: ['Session'],
  summary: 'Edit Session',
  description: 'Edit current session information.',
  operationId: 'edit_edit',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: DataEditSessionSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: SessionInfoSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const putAuthMfaTicketRoute = createRoute({
  method: 'put',
  path: '/auth/mfa/ticket',
  tags: ['MFA'],
  summary: 'Create MFA ticket',
  description: 'Create a new MFA ticket or validate an existing one.',
  operationId: 'create_ticket_create_ticket',
  request: {
    body: { content: { 'application/json': { schema: MFAResponseSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MFATicketSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }, { 'Unvalidated MFA Ticket': [] }],
})

export const getAuthMfaIndexRoute = createRoute({
  method: 'get',
  path: '/auth/mfa/',
  tags: ['MFA'],
  summary: 'MFA Status',
  description: 'Fetch MFA status of an account.',
  operationId: 'fetch_status_fetch_status',
  responses: {
    200: { description: '', content: { 'application/json': { schema: MultiFactorStatusSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postAuthMfaRecoveryRoute = createRoute({
  method: 'post',
  path: '/auth/mfa/recovery',
  tags: ['MFA'],
  summary: 'Fetch Recovery Codes',
  description: 'Fetch recovery codes for an account.',
  operationId: 'fetch_recovery_fetch_recovery',
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(z.string()) } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Valid MFA Ticket': [] }, { 'Session Token': [] }],
})

export const patchAuthMfaRecoveryRoute = createRoute({
  method: 'patch',
  path: '/auth/mfa/recovery',
  tags: ['MFA'],
  summary: 'Generate Recovery Codes',
  description: 'Re-generate recovery codes for an account.',
  operationId: 'generate_recovery_generate_recovery',
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(z.string()) } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Valid MFA Ticket': [] }, { 'Session Token': [] }],
})

export const getAuthMfaMethodsRoute = createRoute({
  method: 'get',
  path: '/auth/mfa/methods',
  tags: ['MFA'],
  summary: 'Get MFA Methods',
  description: 'Fetch available MFA methods.',
  operationId: 'get_mfa_methods_get_mfa_methods',
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(MFAMethodSchema) } } },
  },
  security: [{ 'Session Token': [] }],
})

export const putAuthMfaTotpRoute = createRoute({
  method: 'put',
  path: '/auth/mfa/totp',
  tags: ['MFA'],
  summary: 'Enable TOTP 2FA',
  description: 'Generate a new secret for TOTP.',
  operationId: 'totp_enable_totp_enable',
  request: {
    body: { content: { 'application/json': { schema: MFAResponseSchema } }, required: true },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postAuthMfaTotpRoute = createRoute({
  method: 'post',
  path: '/auth/mfa/totp',
  tags: ['MFA'],
  summary: 'Generate TOTP Secret',
  description: 'Generate a new secret for TOTP.',
  operationId: 'totp_generate_secret_totp_generate_secret',
  responses: {
    200: { description: '', content: { 'application/json': { schema: ResponseTotpSecretSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Valid MFA Ticket': [] }, { 'Session Token': [] }],
})

export const deleteAuthMfaTotpRoute = createRoute({
  method: 'delete',
  path: '/auth/mfa/totp',
  tags: ['MFA'],
  summary: 'Disable TOTP 2FA',
  description: 'Disable TOTP 2FA for an account.',
  operationId: 'totp_disable_totp_disable',
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Valid MFA Ticket': [] }, { 'Session Token': [] }],
})

export const getOnboardHelloRoute = createRoute({
  method: 'get',
  path: '/onboard/hello',
  tags: ['Onboarding'],
  summary: 'Check Onboarding Status',
  description:
    "This will tell you whether the current account requires onboarding or whether you can continue to send requests as usual. You may skip calling this if you're restoring an existing session.",
  operationId: 'hello_hello',
  responses: {
    200: { description: '', content: { 'application/json': { schema: DataHelloSchema } } },
  },
  security: [{ 'Session Token': [] }, { 'Session Token': [] }],
})

export const postOnboardCompleteRoute = createRoute({
  method: 'post',
  path: '/onboard/complete',
  tags: ['Onboarding'],
  summary: 'Complete Onboarding',
  description:
    'This sets a new username, completes onboarding and allows a user to start using Revolt.',
  operationId: 'complete_complete',
  request: {
    body: { content: { 'application/json': { schema: DataOnboardSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }, { 'Session Token': [] }],
})

export const postPolicyAcknowledgeRoute = createRoute({
  method: 'post',
  path: '/policy/acknowledge',
  tags: ['Policy'],
  summary: 'Acknowledge Policy Changes',
  description: 'Accept/acknowledge changes to platform policy.',
  operationId: 'acknowledge_policy_changes_acknowledge_policy_changes',
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postPushSubscribeRoute = createRoute({
  method: 'post',
  path: '/push/subscribe',
  tags: ['Web Push'],
  summary: 'Push Subscribe',
  description:
    'Create a new Web Push subscription.\n\nIf an existing subscription exists on this session, it will be removed.',
  operationId: 'subscribe_subscribe',
  request: {
    body: {
      content: { 'application/json': { schema: WebPushSubscriptionSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postPushUnsubscribeRoute = createRoute({
  method: 'post',
  path: '/push/unsubscribe',
  tags: ['Web Push'],
  summary: 'Unsubscribe',
  description: 'Remove the Web Push subscription associated with the current session.',
  operationId: 'unsubscribe_unsubscribe',
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postSyncSettingsFetchRoute = createRoute({
  method: 'post',
  path: '/sync/settings/fetch',
  tags: ['Sync'],
  summary: 'Fetch Settings',
  description:
    'Fetch settings from server filtered by keys.\n\nThis will return an object with the requested keys, each value is a tuple of `(timestamp, value)`, the value is the previously uploaded data.',
  operationId: 'get_settings_fetch',
  request: {
    body: {
      content: { 'application/json': { schema: OptionsFetchSettingsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.record(
            z.string(),
            z
              .array(
                z
                  .preprocess(
                    (val) =>
                      typeof val === 'number' && Number.isSafeInteger(val)
                        ? BigInt(val)
                        : typeof val === 'string' && /^-?\d+$/.test(val)
                          ? BigInt(val)
                          : val,
                    z.int64(),
                  )
                  .openapi({ type: 'integer', format: 'int64' }),
              )
              .length(2),
          ),
        },
      },
    },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postSyncSettingsSetRoute = createRoute({
  method: 'post',
  path: '/sync/settings/set',
  tags: ['Sync'],
  summary: 'Set Settings',
  description: 'Upload data to save to settings.',
  operationId: 'set_settings_set',
  request: {
    query: z.object({
      timestamp: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timestamp',
            in: 'query',
            description: 'Timestamp of settings change.\n\nUsed to avoid feedback loops.',
            schema: {
              description: 'Timestamp of settings change.\n\nUsed to avoid feedback loops.',
              type: 'integer',
              format: 'int64',
              nullable: true,
            },
            required: false,
          },
          description: 'Timestamp of settings change.\n\nUsed to avoid feedback loops.',
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.record(z.string(), z.string()) } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const getSyncUnreadsRoute = createRoute({
  method: 'get',
  path: '/sync/unreads',
  tags: ['Sync'],
  summary: 'Fetch Unreads',
  description: 'Fetch information about unread state on channels.',
  operationId: 'get_unreads_unreads',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(ChannelUnreadSchema) } },
    },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteWebhooksWebhookIdTokenMessageIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{webhook_id}/{token}/{message_id}',
  tags: ['Webhooks'],
  summary: 'Deletes a webhook message',
  description: 'Deletes a message sent by a webhook',
  operationId: 'webhook_delete_message_webhook_delete_message',
  request: {
    params: z.object({
      webhook_id: IdSchema.openapi({
        param: {
          name: 'webhook_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'path', required: true, schema: { type: 'string' } },
        }),
      message_id: IdSchema.openapi({
        param: {
          name: 'message_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchWebhooksWebhookIdTokenMessageIdRoute = createRoute({
  method: 'patch',
  path: '/webhooks/{webhook_id}/{token}/{message_id}',
  tags: ['Webhooks'],
  summary: 'Edits a webhook message',
  description: 'Edits a message sent by a webhook',
  operationId: 'webhook_edit_message_webhook_edit_message',
  request: {
    params: z.object({
      webhook_id: IdSchema.openapi({
        param: {
          name: 'webhook_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'path', required: true, schema: { type: 'string' } },
        }),
      message_id: IdSchema.openapi({
        param: {
          name: 'message_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: DataEditMessageSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MessageSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getWebhooksWebhookIdTokenRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhook_id}/{token}',
  tags: ['Webhooks'],
  summary: 'Gets a webhook',
  description: 'Gets a webhook with a token',
  operationId: 'webhook_fetch_token_webhook_fetch_token',
  request: {
    params: z.object({
      webhook_id: IdSchema.openapi({
        param: {
          name: 'webhook_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: WebhookSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postWebhooksWebhookIdTokenRoute = createRoute({
  method: 'post',
  path: '/webhooks/{webhook_id}/{token}',
  tags: ['Webhooks'],
  summary: 'Executes a webhook',
  description: 'Executes a webhook and sends a message',
  operationId: 'webhook_execute_webhook_execute',
  request: {
    params: z.object({
      webhook_id: IdSchema.openapi({
        param: {
          name: 'webhook_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'Idempotency-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Idempotency-Key',
            in: 'header',
            description: 'Unique key to prevent duplicate requests',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DataMessageSendSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: MessageSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const deleteWebhooksWebhookIdTokenRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{webhook_id}/{token}',
  tags: ['Webhooks'],
  summary: 'Deletes a webhook',
  description: 'Deletes a webhook with a token',
  operationId: 'webhook_delete_token_webhook_delete_token',
  request: {
    params: z.object({
      webhook_id: IdSchema.openapi({
        param: {
          name: 'webhook_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const patchWebhooksWebhookIdTokenRoute = createRoute({
  method: 'patch',
  path: '/webhooks/{webhook_id}/{token}',
  tags: ['Webhooks'],
  summary: 'Edits a webhook',
  description: 'Edits a webhook with a token',
  operationId: 'webhook_edit_token_webhook_edit_token',
  request: {
    params: z.object({
      webhook_id: IdSchema.openapi({
        param: {
          name: 'webhook_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: DataEditWebhookSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: WebhookSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getWebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Gets a webhook',
  description: 'Gets a webhook',
  operationId: 'webhook_fetch_webhook_fetch',
  request: {
    params: z.object({
      webhook_id: IdSchema.openapi({
        param: {
          name: 'webhook_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ResponseWebhookSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const deleteWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Deletes a webhook',
  description: 'Deletes a webhook',
  operationId: 'webhook_delete_webhook_delete',
  request: {
    params: z.object({
      webhook_id: IdSchema.openapi({
        param: {
          name: 'webhook_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    headers: z.object({
      'X-Audit-Log-Reason': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Audit-Log-Reason',
            in: 'header',
            description: 'Reason for action which is stored in the audit log.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const patchWebhooksWebhookIdRoute = createRoute({
  method: 'patch',
  path: '/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Edits a webhook',
  description: 'Edits a webhook',
  operationId: 'webhook_edit_webhook_edit',
  request: {
    params: z.object({
      webhook_id: IdSchema.openapi({
        param: {
          name: 'webhook_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
    }),
    body: { content: { 'application/json': { schema: DataEditWebhookSchema } }, required: true },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: WebhookSchema } } },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ 'Session Token': [] }],
})

export const postWebhooksWebhookIdTokenGithubRoute = createRoute({
  method: 'post',
  path: '/webhooks/{webhook_id}/{token}/github',
  tags: ['Webhooks'],
  summary: 'Executes a webhook specific to github',
  description:
    'Executes a webhook specific to github and sends a message containing the relevant info about the event',
  operationId: 'webhook_execute_github_webhook_execute_github',
  request: {
    params: z.object({
      webhook_id: IdSchema.openapi({
        param: {
          name: 'webhook_id',
          in: 'path',
          required: true,
          schema: { $ref: '#/components/schemas/Id' },
        },
      }),
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'X-Github-Event': z
        .any()
        .openapi({
          param: {
            name: 'X-Github-Event',
            in: 'header',
            description: 'The name of the github event',
            required: true,
            content: { 'X-Github-Event': { schema: {} } },
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: z.string() } }, required: true },
  },
  responses: {
    200: { description: '' },
    default: {
      description: 'An error occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
