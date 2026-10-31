import { createRoute, z } from '@hono/zod-openapi'

const EmojiSchema = z
  .object({
    category: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used for sorting custom emoji in the picker.' }),
    shortcode: z.string().openapi({ description: 'The name of the custom emoji.' }),
    static_url: z
      .string()
      .openapi({ description: 'A link to a static copy of the custom emoji. The format is URL.' }),
    url: z.string().openapi({ description: 'A link to the custom emoji. The format is URL.' }),
    visible_in_picker: z
      .boolean()
      .openapi({ description: 'Whether this Emoji should be visible in the picker or unlisted.' }),
  })
  .openapi({
    description: 'Represents a custom emoji.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/emoji/' },
    required: ['shortcode', 'url', 'static_url', 'visible_in_picker'],
  })
  .openapi('Emoji')

const FieldSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The key of a given field's key-value pair." }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value associated with the `name` key.' }),
    verified_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Timestamp of when the server verified a URL value for a rel="me” link. If `value` is a verified URL. Otherwise, null',
      }),
  })
  .openapi({
    description: 'Represents a profile field as a name-value pair with optional verification.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/field/' },
    required: [],
  })
  .openapi('Field')

const SourceSchema = z
  .object({
    fields: z
      .array(FieldSchema)
      .exactOptional()
      .openapi({ description: 'Metadata about the account.' }),
    follow_requests_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of pending follow requests' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The default posting language for new statuses, ISO 639-1 language two-letter code.',
      }),
    note: z.string().exactOptional().openapi({ description: 'Profile bio' }),
    privacy: z
      .enum(['public', 'unlisted', 'private', 'direct'])
      .exactOptional()
      .openapi({ description: 'The default post privacy to be used for new statuses.' }),
    sensitive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether new statuses should be marked sensitive by default.' }),
  })
  .openapi({
    description:
      "Represents display or publishing preferences of user's own account. Returned as an additional entity when verifying and updated credentials, as an attribute of Account.",
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/source/' },
    required: [],
  })
  .openapi('Source')

type AccountType = {
  acct?: string
  avatar?: string
  avatar_static?: string
  bot?: boolean
  created_at?: string
  discoverable?: boolean
  display_name?: string
  emojis?: z.infer<typeof EmojiSchema>[]
  fields?: z.infer<typeof FieldSchema>[]
  followers_count?: number
  following_count?: number
  header?: string
  header_static?: string
  id?: string
  last_status_at?: string
  locked?: boolean
  moved?: AccountType
  mute_expires_at?: string
  note?: string
  source?: z.infer<typeof SourceSchema>
  statuses_count?: number
  suspended?: boolean
  url?: string
  username?: string
}

const AccountSchema: z.ZodType<AccountType> = z
  .lazy(() =>
    z
      .object({
        acct: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The Webfinger account URI. Equal to `username` for local users, or `username@domain` for',
          }),
        avatar: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'An image icon that is shown next to statuses and in the profile. The format is URL.',
          }),
        avatar_static: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A static version of the avatar. Equal to `avatar` if its value is a static image; different if `avatar` is an animated GIF. The format is URL.',
          }),
        bot: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'A presentational flag. Indicates that the account may perform automated actions, may not be monitored, or identifies as a robot.',
          }),
        created_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'When the account was created.' }),
        discoverable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the account has opted into discovery features such as the profile directory.',
          }),
        display_name: z
          .string()
          .exactOptional()
          .openapi({ description: "The profile's display name." }),
        emojis: z
          .array(EmojiSchema)
          .exactOptional()
          .openapi({
            description:
              'Custom emoji entities to be used when rendering the profile. If none, an empty array will be returned.',
          }),
        fields: z
          .array(FieldSchema)
          .exactOptional()
          .openapi({
            description: 'Additional metadata attached to a profile as name-value pairs.',
          }),
        followers_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'The reported followers of this profile.' }),
        following_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'The reported follows of this profile.' }),
        header: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'An image banner that is shown above the profile and in profile cards. The format is URL.',
          }),
        header_static: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A static version of the header. Equal to `header` if its value is a static image; different if `header` is an animated GIF. The format is URL.',
          }),
        id: z.string().exactOptional().openapi({ description: 'The account id `header`.' }),
        last_status_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'When the most recent status was posted.' }),
        locked: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the account manually approves follow requests.' }),
        moved: AccountSchema.exactOptional(),
        mute_expires_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description: 'When a timed mute will expire, if applicable. ISO 8601 Datetime.',
          }),
        note: z
          .string()
          .exactOptional()
          .openapi({ description: "The profile's bio / description." }),
        source: SourceSchema.exactOptional(),
        statuses_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'How many statuses are attached to this account.' }),
        suspended: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'An extra entity returned when an account is suspended.' }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: "The location of the user's profile page. (HTTPS URL)" }),
        username: z
          .string()
          .exactOptional()
          .openapi({ description: 'The username of the account, not including domain.' }),
      })
      .openapi({
        description: 'Represents a user of Mastodon and their associated profile.',
        externalDocs: { url: 'https://docs.joinmastodon.org/entities/account/' },
        required: [],
      }),
  )
  .openapi('Account')

const ApplicationSchema = z
  .object({
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client ID key, to be used for obtaining OAuth tokens' }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client secret key, to be used for obtaining OAuth tokens' }),
    name: z.string().openapi({ description: 'The name of your application.' }),
    vapid_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used for Push Streaming API. Returned with [POST /api/v1/apps](https://docs.joinmastodon.org/methods/apps/#create-an-application). Equivalent to [PushSubscription#server_key](https://docs.joinmastodon.org/entities/pushsubscription/#server_key)',
      }),
    website: z
      .string()
      .exactOptional()
      .openapi({ description: 'The website associated with your application. Must be URL.' }),
  })
  .openapi({
    description:
      'Represents an application that interfaces with the REST API to access accounts or post statuses.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/application/' },
    required: ['name'],
  })
  .openapi('Application')

const CardSchema = z
  .object({
    author_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The author of the original resource.' }),
    author_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A link to the author of the original resource.' }),
    blurhash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A hash computed by the [BlurHash algorithm](https://github.com/woltapp/blurhash), for generating colorful preview thumbnails when media has not been downloaded yet.',
      }),
    description: z.string().openapi({ description: 'Description of preview.' }),
    height: z.int().exactOptional().openapi({ description: 'Height of preview, in pixels.' }),
    html: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTML to be used for generating the preview card.' }),
    image: z.string().exactOptional().openapi({ description: 'Preview thumbnail (URL).' }),
    provider_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The provider of the original resource.' }),
    provider_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A link to the provider of the original resource.' }),
    title: z.string().openapi({ description: 'Title of linked resource.' }),
    type: z
      .enum(['link', 'photo', 'video', 'rich'])
      .openapi({ description: 'The type of the preview card. String (Enumerable, oneOf).' }),
    url: z.string().openapi({ description: 'Location of linked resource.' }),
    width: z.int().exactOptional().openapi({ description: 'Width of preview, in pixels.' }),
  })
  .openapi({
    description:
      'Represents a rich preview card that is generated using OpenGraph tags from a URL.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/card/' },
    required: ['url', 'title', 'description', 'type'],
  })
  .openapi('Card')

const AttachmentSchema = z
  .object({
    blurhash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A hash computed by the [BlurHash algorithm](https://github.com/woltapp/blurhash), for generating colorful preview thumbnails when media has not been downloaded yet.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Alternate text that describes what is in the media attachment, to be used for the visually impaired or when media attachments do not load.',
      }),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the attachment in the database. Cast from an integer but not guaranteed to be a number',
      }),
    meta: z.object({}).exactOptional().openapi({ description: 'Metadata returned by Paperclip.' }),
    preview_url: z
      .string()
      .openapi({ description: 'The location of a scaled-down preview of the attachment.' }),
    remote_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The location of the full-size original attachment on the remote website. String or null if the attachment is local.',
      }),
    text_url: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'A shorter URL for the attachment.' }),
    type: z
      .enum(['unknown', 'image', 'gifv', 'video', 'audio'])
      .openapi({ description: 'The type of the attachment.' }),
    url: z.string().openapi({ description: 'The location of the original full-size attachment.' }),
  })
  .openapi({
    description: 'Represents a file or media attachment that can be added to a status.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/attachment/' },
    required: ['id', 'type', 'url', 'preview_url'],
  })
  .openapi('Attachment')

const MentionSchema = z
  .object({
    acct: z
      .string()
      .openapi({
        description:
          'The webfinger acct URI of the mentioned user. Equivalent to `username` for local users, or `username@domain` for remote users.',
      }),
    id: z
      .string()
      .openapi({
        description:
          'The account id of the mentioned user. Cast from an integer, but not guaranteed to be a number',
      }),
    url: z.string().openapi({ description: "The location of the mentioned user's profile." }),
    username: z.string().openapi({ description: 'The username of the mentioned user.' }),
  })
  .openapi({
    description: 'Represents a mention of a user within the content of a status.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/mention/' },
    required: ['id', 'username', 'acct', 'url'],
  })
  .openapi('Mention')

const PollSchema = z
  .object({
    emojis: z
      .array(EmojiSchema)
      .exactOptional()
      .openapi({ description: 'Custom emoji to be used for rendering poll options.' }),
    expired: z.boolean().exactOptional().openapi({ description: 'Is the poll currently expired?' }),
    expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When the poll ends. ISO 8601 Datetime, or null if the poll does not end.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the poll in the database. Cast from an integer, but not guaranteed to be a number.',
      }),
    multiple: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Does the poll allow multiple-choice answers?' }),
    options: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'Possible answers for the poll.' }),
    own_votes: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description:
          'When called with a user token, which options has the authorized user chosen? Contains an array of index values for `options`. Array of Number, or null if no current user',
      }),
    voted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When called with a user token, has the authorized user voted? Boolean, or null if no current user',
      }),
    voters_count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'How many unique accounts have voted on a multiple-choice poll. Number, or null if `multiple` is false.',
      }),
    votes_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'How many votes have been received.' }),
  })
  .openapi({
    description: 'Represents a poll attached to a status.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/poll/' },
    required: [],
  })
  .openapi('Poll')

const HistorySchema = z
  .object({
    accounts: z
      .string()
      .openapi({
        description: 'the total of accounts using the tag within that day. Cast from an integer.',
      }),
    day: z.string().openapi({ description: 'UNIX timestamp on midnight of the given day.' }),
    uses: z
      .string()
      .openapi({
        description: 'the counted usage of the tag within that day. Cast from an integer.',
      }),
  })
  .openapi({
    description: 'Represents daily usage history of a hashtag.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/history/' },
    required: ['day', 'uses', 'accounts'],
  })
  .openapi('History')

const TagSchema = z
  .object({
    history: z
      .array(HistorySchema)
      .exactOptional()
      .openapi({ description: 'Usage statistics for given days.' }),
    name: z.string().openapi({ description: 'The value of the hashtag after the `#` sign.' }),
    url: z.string().openapi({ description: 'A link to the hashtag on the instance.' }),
  })
  .openapi({
    description: 'Represents a hashtag used within the content of a status.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/tag/' },
    required: ['name', 'url'],
  })
  .openapi('Tag')

type StatusType = {
  account?: z.infer<typeof AccountSchema>
  application?: z.infer<typeof ApplicationSchema>
  bookmarked?: boolean
  card?: z.infer<typeof CardSchema>
  content?: string
  created_at?: string
  emojis?: z.infer<typeof EmojiSchema>[]
  favourited?: boolean
  favourites_count?: number
  id?: string
  in_reply_to_account_id?: string
  in_reply_to_id?: string
  language?: string
  media_attachments?: z.infer<typeof AttachmentSchema>[]
  mentions?: z.infer<typeof MentionSchema>[]
  muted?: boolean
  pinned?: boolean
  poll?: z.infer<typeof PollSchema>
  reblog?: StatusType
  reblogged?: boolean
  reblogs_count?: number
  replies_count?: number
  sensitive?: boolean
  spoiler_text?: string
  tags?: z.infer<typeof TagSchema>[]
  text?: string
  uri?: string
  url?: string
  visibility?: 'public' | 'unlisted' | 'private' | 'direct'
}

const ActivitySchema = z
  .object({
    logins: z
      .string()
      .exactOptional()
      .openapi({ description: 'User logins since the week began, String (cast from an integer).' }),
    registrations: z
      .string()
      .exactOptional()
      .openapi({
        description: 'User registrations since the week began, String (cast from an integer).',
      }),
    statuses: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Statuses created since the week began, String (cast from an integer).',
      }),
    week: z
      .string()
      .exactOptional()
      .openapi({ description: 'Midnight at the first day of the week.  (UNIX Timestamp).' }),
  })
  .openapi({
    description: 'Represents a weekly bucket of instance activity.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/activity/' },
    required: [],
  })
  .openapi('Activity')

const AdminAccountSchema = z
  .object({
    account: AccountSchema.exactOptional(),
    approved: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the account is currently approved.' }),
    confirmed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the account has confirmed their email address.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the account was first discovered.' }),
    created_by_application_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the application that created this account. Cast from an integer, but not guaranteed to be a number.',
      }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the account is currently disabled.' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address associated with the account.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the account in the database. Cast from an integer, but not guaranteed to be a number.',
      }),
    invite_request: z.string().exactOptional().openapi({ description: 'Invite request text ???' }),
    invited_by_account_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the account that invited this user. Cast from an integer, but not guaranteed to be a number.',
      }),
    ip: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IP address last used to login to this account.' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The locale of the account. ISO 639 Part 1 two-letter language code.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current role of the account. Enumerable oneOf.' }),
    silenced: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the account is currently silenced.' }),
    suspended: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the account is currently suspended.' }),
    username: z.string().exactOptional().openapi({ description: 'The username of the account.' }),
  })
  .openapi({
    description: 'Admin-level information about a given account.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/admin-account/' },
    required: [],
  })
  .openapi('AdminAccount')

const StatusSchema: z.ZodType<StatusType> = z
  .lazy(() =>
    z
      .object({
        account: AccountSchema.exactOptional(),
        application: ApplicationSchema.exactOptional(),
        bookmarked: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Have you bookmarked this status?' }),
        card: CardSchema.exactOptional(),
        content: z
          .string()
          .exactOptional()
          .openapi({ description: 'HTML-encoded status content.' }),
        created_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'The date when this status was created.' }),
        emojis: z
          .array(EmojiSchema)
          .exactOptional()
          .openapi({ description: 'Custom emoji to be used when rendering status content.' }),
        favourited: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Have you favourited this status?' }),
        favourites_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'How many favourites this status has received.' }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'ID of the status in the database. Cast from an integer but not guaranteed to be a number.',
          }),
        in_reply_to_account_id: z
          .string()
          .exactOptional()
          .openapi({ description: 'ID of the account being replied to.' }),
        in_reply_to_id: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'ID of the status being replied. Cast from an integer but not guaranteed to be a number.',
          }),
        language: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Primary language of this status. ISO 639 Part 1 two-letter language code.',
          }),
        media_attachments: z
          .array(AttachmentSchema)
          .exactOptional()
          .openapi({ description: 'Media that is attached to this status.' }),
        mentions: z
          .array(MentionSchema)
          .exactOptional()
          .openapi({ description: 'Mentions of users within the status content.' }),
        muted: z
          .boolean()
          .exactOptional()
          .openapi({ description: "Have you muted notifications for this status's conversation?" }),
        pinned: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Have you pinned this status? Only appears if the status is pinnable.',
          }),
        poll: PollSchema.exactOptional(),
        reblog: StatusSchema.exactOptional(),
        reblogged: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Have you boosted this status?' }),
        reblogs_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'How many boosts this status has received.' }),
        replies_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'How many replies this status has received.' }),
        sensitive: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Is this status marked as sensitive content?' }),
        spoiler_text: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Subject or summary line, below which status content is collapsed until expanded.',
          }),
        tags: z
          .array(TagSchema)
          .exactOptional()
          .openapi({ description: 'Hashtags used within the status content.' }),
        text: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Plain-text source of a status. Returned instead of `content` when status is deleted, so the user may redraft from the source text without the client having to reverse-engineer the original text from the HTML content.',
          }),
        uri: z
          .string()
          .exactOptional()
          .openapi({ description: 'URI of the status used for federation.' }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: "A link to the status's HTML representation." }),
        visibility: z
          .enum(['public', 'unlisted', 'private', 'direct'])
          .exactOptional()
          .openapi({ description: 'Visibility of this status.' }),
      })
      .openapi({
        description: 'Represents a status posted by an account.',
        externalDocs: { url: 'https://docs.joinmastodon.org/entities/status/' },
        required: [],
      }),
  )
  .openapi('Status')

const AdminReportSchema = z
  .object({
    account: AccountSchema.exactOptional(),
    action_taken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The action taken to resolve this report. Enumerable oneOf.' }),
    assigned_account: AccountSchema.exactOptional(),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional reason for reporting.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time the report was filed.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the report in the database. Cast from an integer, but not guaranteed to be a number.',
      }),
    statuses: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({ description: 'Statuses attached to the report, for context.' }),
    target_account: AccountSchema.exactOptional(),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time of last action on this report.' }),
  })
  .openapi({
    description: 'Admin-level information about a filed report.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/admin-report/' },
    required: [],
  })
  .openapi('AdminReport')

const AnnouncementSchema = z
  .object({
    all_day: z.boolean().openapi({ description: 'Whether the announcement has a start/end time.' }),
    created_at: z.string().openapi({ description: 'When the announcement was created.' }),
    ends_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the future announcement will end. ISO 8601 Datetime.' }),
    id: z
      .string()
      .openapi({
        description:
          'The announcement id. Cast from an integer, but not guaranteed to be a number.',
      }),
    published: z
      .boolean()
      .openapi({ description: 'Whether the announcement is currently active.' }),
    read: z
      .boolean()
      .openapi({ description: 'Whether the announcement has been read by the user.' }),
    scheduled_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the future announcement was scheduled. ISO 8601 Datetime.' }),
    starts_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the future announcement will start. ISO 8601 Datetime.' }),
    text: z.string().openapi({ description: 'The content of the announcement.' }),
    updated_at: z
      .string()
      .openapi({ description: 'When the announcement was last updated. ISO 8601 Datetime.' }),
  })
  .openapi({
    description: 'Represents an announcement set by an administrator.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/announcement/' },
    required: ['id', 'text', 'published', 'all_day', 'created_at', 'updated_at', 'read'],
  })
  .openapi('Announcement')

const AnnouncementReactionSchema = z
  .object({
    count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of users who have added this reaction.' }),
    me: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the authorized user has added this reaction to the announcement.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The emoji used for the reaction. Either a unicode emoji, or a custom emoji's shortcode.",
      }),
    static_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A link to a non-animated version of the custom emoji (URL).' }),
    url: z.string().exactOptional().openapi({ description: 'A link to the custom emoji (URL).' }),
  })
  .openapi({
    description: 'Represents an emoji reaction to an Announcement.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/announcementreaction/' },
    required: [],
  })
  .openapi('AnnouncementReaction')

const ContextSchema = z
  .object({
    ancestors: z.array(StatusSchema).openapi({ description: 'Parents in the thread.' }),
    descendants: z.array(StatusSchema).openapi({ description: 'Children in the thread.' }),
  })
  .openapi({
    description:
      'Represents the tree around a given status. Used for reconstructing threads of statuses.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/context/' },
    required: ['ancestors', 'descendants'],
  })
  .openapi('Context')

const ConversationSchema = z
  .object({
    accounts: z.array(AccountSchema).openapi({ description: 'Participants in the conversation.' }),
    id: z
      .string()
      .openapi({
        description:
          'Local database ID of the conversation. Cast from an integer, but not guaranteed to be a number',
      }),
    last_status: StatusSchema.exactOptional(),
    unread: z.boolean().openapi({ description: 'Is the conversation currently marked as unread?' }),
  })
  .openapi({
    description: 'Represents a conversation with "direct message" visibility.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/conversation/' },
    required: ['id', 'accounts', 'unread'],
  })
  .openapi('Conversation')

const ErrorSchema = z
  .object({ error: z.string(), error_description: z.string().exactOptional() })
  .openapi({
    description: 'Represents an error message.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/error/' },
    required: ['error'],
  })
  .openapi('Error')

const FeaturedTagSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The internal ID of the featured tag in the database. Cast from integer but not guaranteed to be a number',
      }),
    last_status_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The timestamp of the last authored status containing this hashtag. ISO 8601 Datetime.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the hashtag being featured.' }),
    statuses_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of authored statuses containing this hashtag.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A link to all statuses by a user that contain this hashtag.' }),
  })
  .openapi({
    description: 'Represents a hashtag that is featured on a profile.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/featuredtag/' },
    required: [],
  })
  .openapi('FeaturedTag')

const FilterSchema = z
  .object({
    context: z
      .array(z.enum(['home', 'notifications', 'public', 'thread']))
      .exactOptional()
      .openapi({ description: 'The contexts in which the filter should be applied.' }),
    expires_at: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When the filter should no longer be applied. ISO 8601 Datetime, or null if the filter does not expire',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the filter in the database. Cast from an integer, but not guaranteed to be a number.',
      }),
    irreversible: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Should matching entities in home and notifications be dropped by the server?',
      }),
    phrase: z.string().exactOptional().openapi({ description: 'The text to be filtered.' }),
    whole_word: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should the filter consider word boundaries?' }),
  })
  .openapi({
    description:
      'Represents a user-defined filter for determining which statuses should not be shown to the user.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/filter/' },
    required: [],
  })
  .openapi('Filter')

const IdentityProofSchema = z
  .object({
    profile_url: z
      .string()
      .exactOptional()
      .openapi({ description: "The account owner's profile URL on the identity provider." }),
    proof_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A link to a statement of identity proof, hosted by the identity provider.',
      }),
    provider: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the identity provider.' }),
    provider_username: z
      .string()
      .exactOptional()
      .openapi({ description: "The account owner's username on the identity provider's service." }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the identity proof was last updated. ISO 8601 Datetime.' }),
  })
  .openapi({
    description: 'Represents a proof from an external identity provider.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/identityproof/' },
    required: [],
  })
  .openapi('IdentityProof')

const InstanceSchema = z
  .object({
    approval_required: z
      .boolean()
      .openapi({ description: 'Whether registrations require moderator approval.' }),
    contact_account: AccountSchema.exactOptional(),
    description: z
      .string()
      .openapi({ description: 'Admin-defined description of the Mastodon site.' }),
    email: z.string().openapi({ description: 'An email that may be contacted for any inquiries.' }),
    invites_enabled: z.boolean().openapi({ description: 'Whether invites are enabled.' }),
    languages: z
      .array(z.string())
      .openapi({
        description:
          'Primary languages of the website and its staff. ISO 639 Part 1-5 language codes.',
      }),
    registrations: z.boolean().openapi({ description: 'Whether registrations are enabled.' }),
    short_description: z
      .string()
      .openapi({ description: 'A shorter description defined by the admin.' }),
    stats: z
      .object({})
      .openapi({ description: 'Statistics about how much information the instance contains.' }),
    thumbnail: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Banner image for the website.' }),
    title: z.string().openapi({ description: 'The title of the website.' }),
    uri: z.string().openapi({ description: 'The domain name of the instance.' }),
    urls: z.object({}).openapi({ description: 'URLs of interest for clients apps.' }),
    version: z
      .string()
      .openapi({ description: 'The version of Mastodon installed on the instance.' }),
  })
  .openapi({
    description: 'Represents the software instance of Mastodon running on this domain.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/instance/' },
    required: [
      'uri',
      'title',
      'description',
      'short_description',
      'email',
      'version',
      'languages',
      'registrations',
      'approval_required',
      'invites_enabled',
      'urls',
      'stats',
      'user_count',
      'status_count',
      'domain_count',
    ],
  })
  .openapi('Instance')

const ListSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The internal database ID of the list. Cast from an integer, but not guaranteed to be a number.',
      }),
    replies_policy: z
      .enum(['followed', 'list', 'none'])
      .openapi({ description: 'The user-defined title of the list.' }),
    title: z.string().openapi({ description: 'The user-defined title of the list.' }),
  })
  .openapi({
    description: 'Represents a list of some users that the authenticated user follows.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/list/' },
    required: ['id', 'title', 'replies_policy'],
  })
  .openapi('List')

const MarkerSchema = z
  .object({
    home: z
      .object({})
      .exactOptional()
      .openapi({ description: "Information about the user's position in the home timeline." }),
    last_read_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the most recently viewed entity. Cast from integer but not guaranteed to be a number',
      }),
    notifications: z
      .object({})
      .exactOptional()
      .openapi({ description: "Information about the user's position in their notifications." }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp of when the marker was set. ISO 8601 Datetime.' }),
    version: z
      .int()
      .exactOptional()
      .openapi({ description: 'Used for locking to prevent write conflicts.' }),
  })
  .openapi({
    description: "Represents the last read position within a user's timelines.",
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/marker/' },
    required: [],
  })
  .openapi('Marker')

const NotificationSchema = z
  .object({
    account: AccountSchema,
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The timestamp of the notification. ISO 8601 Datetime.' }),
    id: z
      .string()
      .openapi({
        description:
          'The id of the notification in the database. Cast from an integer, but not guaranteed to be a number.',
      }),
    status: StatusSchema.exactOptional(),
    type: z
      .enum(['follow', 'follow_request', 'mention', 'reblog', 'favourite', 'poll', 'status'])
      .openapi({ description: 'The type of event that resulted in the notification.' }),
  })
  .openapi({
    description: 'Represents a notification of an event relevant to the user.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/notification/' },
    required: ['id', 'type', 'created_at', 'account'],
  })
  .openapi('Notification')

const PreferencesSchema = z
  .object({
    'posting:default:language': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Default language for new posts. Equivalent to [Source#language](https://docs.joinmastodon.org/entities/source/#language). ISO 639-1 language two-letter code, or null',
      }),
    'posting:default:sensitive': z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default sensitivity flag for new posts. Equivalent to [Source#sensitive](https://docs.joinmastodon.org/entities/source/#sensitive).',
      }),
    'posting:default:visibility': z
      .enum(['public', 'unlisted', 'private', 'direct'])
      .exactOptional()
      .openapi({
        description:
          'Default visibility for new posts. Equivalent to [Source#privacy](https://docs.joinmastodon.org/entities/source/#privacy).',
      }),
    'reading:expand:media': z
      .enum(['default', 'show_all', 'hide_all'])
      .exactOptional()
      .openapi({
        description:
          'Whether media attachments should be automatically displayed or blurred/hidden.',
      }),
    'reading:expand:spoilers': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether CWs should be expanded by default.' }),
  })
  .openapi({
    description: "Represents a user's preferences.",
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/preferences/' },
    required: [],
  })
  .openapi('Preferences')

const PushSubscriptionSchema = z
  .object({
    alerts: z
      .object({})
      .openapi({ description: 'Which alerts should be delivered to the `endpoint`.' }),
    endpoint: z.string().openapi({ description: 'Where push alerts will be sent to.' }),
    id: z
      .string()
      .openapi({
        description:
          'The ID of the push subscription in the database. Cast from an integer, but not guaranteed to be a number.',
      }),
    server_key: z.string().openapi({ description: "The streaming server's VAPID key." }),
  })
  .openapi({
    description: 'Represents a subscription to the push streaming server.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/pushsubscription/' },
    required: ['id', 'endpoint', 'server_key', 'alerts'],
  })
  .openapi('PushSubscription')

const RelationshipSchema = z
  .object({
    blocked_by: z.boolean().openapi({ description: 'Is this user blocking you?' }),
    blocking: z.boolean().openapi({ description: 'Are you blocking this user?' }),
    domain_blocking: z.boolean().openapi({ description: "Are you blocking this user's domain?" }),
    endorsed: z.boolean().openapi({ description: 'Are you featuring this user on your profile?' }),
    followed_by: z.boolean().openapi({ description: 'Are you followed by this user?' }),
    following: z.boolean().openapi({ description: 'Are you following this user?' }),
    id: z
      .string()
      .openapi({
        description: 'The account id. Cast from an integer, but not guaranteed to be a number.',
      }),
    muting: z.boolean().openapi({ description: 'Are you muting this user?' }),
    muting_notifications: z
      .boolean()
      .openapi({ description: 'Are you muting notifications from this user?' }),
    note: z.string().openapi({ description: "This user's profile bio" }),
    notifying: z
      .boolean()
      .openapi({ description: 'Have you enabled notifications for this user?' }),
    requested: z
      .boolean()
      .openapi({ description: 'Do you have a pending follow request for this user?' }),
    showing_reblogs: z
      .boolean()
      .openapi({ description: "Are you receiving this user's boosts in your home timeline?" }),
  })
  .openapi({
    description:
      'Represents the relationship between accounts, such as following / blocking / muting / etc.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/relationship/' },
    required: [
      'id',
      'following',
      'requested',
      'endorsed',
      'followed_by',
      'muting',
      'muting_notifications',
      'showing_reblogs',
      'notifying',
      'blocking',
      'domain_blocking',
      'blocked_by',
      'note',
    ],
  })
  .openapi('Relationship')

const ReportSchema = z
  .object({
    action_taken: z.boolean().exactOptional(),
    action_taken_at: z.iso.datetime({ offset: true }).exactOptional(),
    category: z.enum(['other', 'spam', 'violation']).exactOptional(),
    comment: z.string().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    forwarded: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    rule_ids: z.array(z.int()).exactOptional(),
    status_ids: z.array(z.int()).exactOptional(),
    target_account: AccountSchema.exactOptional(),
  })
  .openapi({
    description:
      'Reports filed against users and/or statuses, to be taken action on by moderators.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/report/' },
    required: [],
  })
  .openapi('Report')

const ResultsSchema = z
  .object({
    accounts: z
      .array(AccountSchema)
      .openapi({ description: 'Accounts which match the given query.' }),
    hashtags: z.array(TagSchema).openapi({ description: 'Hashtags which match the given query.' }),
    statuses: z
      .array(StatusSchema)
      .openapi({ description: 'Statuses which match the given query.' }),
  })
  .openapi({
    description: 'Represents the results of a search.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/results/' },
    required: ['accounts', 'statuses', 'hashtags'],
  })
  .openapi('Results')

const StatusParamsSchema = z
  .object({
    application_id: z.string().exactOptional().openapi({ description: 'application_id' }),
    in_reply_to_id: z.string().exactOptional().openapi({ description: 'in_reply_to_id' }),
    media_ids: z.array(z.string()).exactOptional().openapi({ description: 'media_ids' }),
    scheduled_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'scheduled_at' }),
    sensitive: z.boolean().exactOptional().openapi({ description: 'sensitive' }),
    spoiler_text: z.string().exactOptional().openapi({ description: 'spoiler_text' }),
    text: z.string().exactOptional().openapi({ description: 'text' }),
    visibility: z.string().exactOptional().openapi({ description: 'visibility' }),
  })
  .openapi({ required: [] })
  .openapi('StatusParams')

const ScheduledStatusSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'ID of the scheduled status in the database. Cast from an integer, but not guaranteed to be a number.',
      }),
    media_attachments: z.array(AttachmentSchema).openapi({ description: 'Array of attachements' }),
    params: StatusParamsSchema,
    scheduled_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'ID of the status in the database. ISO 8601 Datetime.' }),
  })
  .openapi({
    description: 'Represents a status that will be published at a future scheduled date.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/scheduledstatus/' },
    required: ['id', 'scheduled_at', 'params', 'media_attachments'],
  })
  .openapi('ScheduledStatus')

const TokenSchema = z
  .object({
    access_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'An OAuth token to be used for authorization.' }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'When the token was generated. UNIX Timestamp.' }),
    scope: z
      .string()
      .exactOptional()
      .openapi({ description: 'The OAuth scopes granted by this token, space-separated.' }),
    token_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The OAuth token type. Mastodon uses `Bearer` tokens.' }),
  })
  .openapi({
    description:
      'Represents an OAuth token used for authenticating with the API and performing actions.',
    externalDocs: { url: 'https://docs.joinmastodon.org/entities/token/' },
    required: [],
  })
  .openapi('Token')

const BearerAuthSecurityScheme = { scheme: 'bearer', type: 'http' }

const OauthSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: '/oauth/authorize',
      scopes: {
        'admin:read': 'admin read',
        'admin:read:accounts': 'read accounts',
        'admin:read:reports': 'read reports',
        'admin:write': 'admin write',
        'admin:write:accounts': 'write accounts',
        'admin:write:reports': 'write reports',
        'read:accounts': 'read accounts',
        'read:blocks': 'read blocks',
        'read:bookmarks': 'read bookmarks',
        'read:favourites': 'read favourites',
        'read:filters': 'read filters',
        'read:follows': 'read follows',
        'read:lists': 'read lists',
        'read:mutes': 'read mutes',
        'read:notifications': 'read notifications',
        'read:search': 'read search',
        'read:statuses': 'read statuses',
        'write:accounts': 'write accounts',
        'write:blocks': 'write blocks',
        'write:bookmarks': 'write bookmarks',
        'write:conversations': 'write conversations',
        'write:favourites': 'write favourites',
        'write:filters': 'write filters',
        'write:follows': 'write follows',
        'write:lists': 'write lists',
        'write:media': 'write media',
        'write:mutes': 'write mutes',
        'write:notifications': 'write notifications',
        'write:reports': 'write reports',
        'write:statuses': 'write statuses',
      },
      tokenUrl: '/oauth/token',
    },
  },
  type: 'oauth2',
}

export const getApiOembedRoute = createRoute({
  method: 'get',
  path: '/api/oembed',
  description: 'OEmbed as JSON',
  request: {
    query: z.object({
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'URL of a status',
            in: 'query',
            name: 'url',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxwidth: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(400)
        .exactOptional()
        .openapi({
          param: {
            description: 'width of the iframe. Defaults to 400',
            in: 'query',
            name: 'maxwidth',
            schema: { default: 400, type: 'integer' },
            required: false,
          },
        }),
      maxheight: z
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
            description: 'height of the iframe. Defaults to null',
            in: 'query',
            name: 'maxheight',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CardSchema } } },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getApiProofsRoute = createRoute({
  method: 'get',
  path: '/api/proofs',
  description: 'View identity proof',
  request: {
    query: z.object({
      provider: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The identity provider to be looked up. Currently only supports keybase (case-sensitive)',
            in: 'query',
            name: 'provider',
            schema: { type: 'string' },
            required: false,
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The username on the selected identity provider',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProofSchema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postApiV1AccountsRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts',
  tags: ['TODOSecurity', 'accounts'],
  description:
    'Creates a user and account records. Returns an account access token for the app that initiated the request. The app should save this token for later, and should wait for the user to confirm their account by clicking a link in their email inbox.',
  request: {
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({
              agreement: z
                .boolean()
                .openapi({
                  description:
                    'Whether the user agrees to the local rules, terms, and policies. These should be presented to the user in order to allow them to consent before setting this parameter to TRUE.',
                }),
              email: z.string().openapi({ description: 'The email address to be used for login' }),
              locale: z
                .string()
                .openapi({
                  description: 'The language of the confirmation email that will be sent',
                }),
              password: z.string().openapi({ description: 'The password to be used for login' }),
              reason: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Text that will be reviewed by moderators if registrations require manual approval.',
                }),
              username: z.string().openapi({ description: 'The desired username for the account' }),
            })
            .openapi({
              required: ['username', 'email', 'token', 'password', 'agreement', 'locale'],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'Success' }, 401: { description: 'Unauthorized' } },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AccountsRelationshipsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/relationships',
  tags: ['accounts'],
  description: 'Sets a private note on a user.',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'Array of account IDs to check',
            in: 'query',
            name: 'id',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: z.array(RelationshipSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AccountsSearchRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/search',
  tags: ['accounts'],
  description: 'Search for matching accounts by username or display name.',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'What to search for',
            in: 'query',
            name: 'q',
            required: true,
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
          z.int(),
        )
        .default(40)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results. Defaults to 40.',
            in: 'query',
            name: 'limit',
            schema: { default: 40, type: 'integer' },
            required: false,
          },
        }),
      resolve: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Attempt WebFinger lookup. Defaults to false. Use this when `q` is an exact address.',
            in: 'query',
            name: 'resolve',
            schema: { type: 'string' },
            required: false,
          },
        }),
      following: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only who the user is following. Defaults to false.',
            in: 'query',
            name: 'following',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Accounts matching `q` in username or display name',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
    503: {
      description:
        'resolve=true, but the domain part of the user@domain address is not a currently live website',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const patchApiV1AccountsUpdateCredentialsRoute = createRoute({
  method: 'patch',
  path: '/api/v1/accounts/update_credentials',
  tags: ['accounts'],
  description: "Update the user's display and preferences.",
  request: {
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({
              avatar: z
                .string()
                .exactOptional()
                .openapi({ description: 'Avatar image encoded using multipart/form-data' }),
              bot: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether the account has a bot flag.' }),
              discoverable: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Whether the account should be shown in the profile directory.',
                }),
              display_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The display name to use for the profile.' }),
              fields_attributes: z
                .object({})
                .exactOptional()
                .openapi({
                  description:
                    'Profile metadata `name` and `value`. (By default, max 4 fields and 255 characters per property/value)',
                }),
              header: z
                .string()
                .exactOptional()
                .openapi({ description: 'Header image encoded using multipart/form-data' }),
              locked: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether manual approval of follow requests is required.',
                }),
              note: z.string().exactOptional().openapi({ description: 'The account bio.' }),
              source: z
                .object({
                  language: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Default language to use for authored statuses. (ISO 6391)',
                    }),
                  privacy: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Default post privacy for authored statuses.' }),
                  sensitive: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Whether to mark authored statuses as sensitive by default.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'You should use `accounts/verify_credentials` to first obtain plaintext representations from within the `source` parameter, then allow the user to edit these plaintext representations before submitting them through this API. The server will generate the corresponding HTML.',
      content: { 'application/json': { schema: AccountSchema } },
    },
    401: { description: 'Unauthorized', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AccountsVerifyCredentialsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/verify_credentials',
  tags: ['accounts'],
  description: 'Test to make sure that the user token works.',
  responses: {
    200: {
      description:
        'Note the extra `source` property, which is not visible on accounts other than your own. Also note that plain-text is used within `source` and HTML is used for their corresponding properties such as `note` and `fields`.',
      content: { 'application/json': { schema: AccountSchema } },
    },
    401: {
      description: 'Your credential verification will fail if the token is invalid or incorrect.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description:
        'Your user account is currently disabled, missing a confirmed email address, or pending approval.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AccountsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{id}',
  tags: ['accounts'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description:
        'Account record will be returned. Note that `acct` of local users does not include the domain name.',
      content: { 'application/json': { schema: AccountSchema } },
    },
    401: {
      description:
        'If the instance is in whitelist mode and the Authorization header is missing or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Account does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    410: { description: 'Account is suspended' },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AccountsIdBlockRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{id}/block',
  tags: ['accounts'],
  description:
    'Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description: 'Successfully blocked, or account was already blocked',
      content: { 'application/json': { schema: RelationshipSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AccountsIdFeaturedTagsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{id}/featured_tags',
  tags: ['accounts'],
  description: 'Tags featured by this account.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description: 'Success',
      content: { 'application/json': { schema: z.array(FeaturedTagSchema) } },
    },
    401: {
      description:
        'Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AccountsIdFollowRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{id}/follow',
  tags: ['accounts'],
  description:
    'Follow the given account. Can also be used to update whether to show reblogs or enable notifications.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({
              notify: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Receive notifications when this account posts a status? Defaults to false.',
                }),
              reblogs: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description: "Receive this account's reblogs in home timeline? Defaults to true.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully followed, or account was already followed',
      content: { 'application/json': { schema: RelationshipSchema } },
    },
    403: {
      description: 'Trying to follow someone that you block or that blocks you',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AccountsIdFollowersRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{id}/followers',
  tags: ['accounts'],
  description:
    'Accounts which follow the given account, if network is not hidden by the account owner.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Internal parameter. Use HTTP `Link` header for pagination.',
            in: 'query',
            name: 'max_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Internal parameter. Use HTTP `Link` header for pagination.',
            in: 'query',
            name: 'since_id',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .default(40)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return. Defaults to 40.',
            in: 'query',
            name: 'limit',
            schema: { default: 40, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
    401: {
      description:
        'Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Account is deleted or does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    410: { description: 'Account is suspended' },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AccountsIdFollowingRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{id}/following',
  tags: ['accounts'],
  description:
    'Accounts which the given account is following, if network is not hidden by the account owner.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Internal parameter. Use HTTP `Link` header for pagination.',
            in: 'query',
            name: 'max_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Internal parameter. Use HTTP `Link` header for pagination.',
            in: 'query',
            name: 'since_id',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .default(40)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return. Defaults to 40.',
            in: 'query',
            name: 'limit',
            schema: { default: 40, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
    401: {
      description:
        'Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Account is deleted or does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    410: { description: 'Account is suspended' },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AccountsIdIdentityProofsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{id}/identity_proofs',
  tags: ['accounts'],
  description: 'Array of IdentityProof',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description: 'Success',
      content: { 'application/json': { schema: z.array(IdentityProofSchema) } },
    },
    404: {
      description: 'Account is deleted or does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    410: { description: 'Account with given id is suspended' },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AccountsIdListsRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{id}/lists',
  tags: ['accounts'],
  description: 'User lists that you have added this account to.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description: 'Success',
      content: { 'application/json': { schema: z.array(ListSchema) } },
    },
    401: {
      description:
        'Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Account is deleted or does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    410: { description: 'Account is suspended' },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AccountsIdMuteRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{id}/mute',
  tags: ['accounts'],
  description:
    'Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({
              duration: z
                .int()
                .default(0)
                .exactOptional()
                .openapi({
                  description:
                    'How long the mute should last, in seconds. Defaults to 0 (indefinite).',
                }),
              notifications: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description: 'Mute notifications in addition to statuses? Defaults to true.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Successfully muted, or account was already muted. Note that you can call this API method again with notifications=false to update the relationship so that only statuses are muted.',
      content: { 'application/json': { schema: RelationshipSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AccountsIdNoteRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{id}/note',
  tags: ['accounts'],
  description: 'Sets a private note on a user.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({
              comment: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The comment to be set on that user. Provide an empty string or leave out this parameter to clear the currently set note.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully unmuted, or account was already unmuted.',
      content: { 'application/json': { schema: RelationshipSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: { description: 'Unprocessable Entity' },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AccountsIdPinRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{id}/pin',
  tags: ['accounts'],
  description:
    "Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description: 'Successfully unmuted, or account was already unmuted.',
      content: { 'application/json': { schema: RelationshipSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Token is not authorized with a valid user or is missing a required scope',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'You are not following this account',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'Account already endorsed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AccountsIdStatusesRoute = createRoute({
  method: 'get',
  path: '/api/v1/accounts/{id}/statuses',
  tags: ['accounts'],
  description: 'Statuses posted to the given account.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description:
        'Statuses posted to the given account. Public (for public statuses only), or user token + read:statuses (for private statuses the user is authorized to see)',
      content: { 'application/json': { schema: z.array(StatusSchema) } },
    },
    401: {
      description:
        'Instance is in whitelist mode or running a version of Mastodon older than 2.7.0, and the Authorization header is invalid or missing',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Account is deleted or does not exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    410: { description: 'Account is suspended' },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AccountsIdUnblockRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{id}/unblock',
  tags: ['accounts'],
  description:
    'Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline).',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description: 'Successfully unblocked, or account was already not blocked',
      content: { 'application/json': { schema: RelationshipSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AccountsIdUnfollowRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{id}/unfollow',
  tags: ['accounts'],
  description: 'Unfollow the given account.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description: 'Successfully unfollowed, or account was already not followed',
      content: { 'application/json': { schema: RelationshipSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AccountsIdUnmuteRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{id}/unmute',
  tags: ['accounts'],
  description: 'Unmute the given account.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description: 'Successfully unmuted, or account was already unmuted.',
      content: { 'application/json': { schema: RelationshipSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AccountsIdUnpinRoute = createRoute({
  method: 'post',
  path: '/api/v1/accounts/{id}/unpin',
  tags: ['accounts'],
  description: "Remove the given account from the user's featured profiles.",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description: 'Successfully unmuted, or account was already unmuted.',
      content: { 'application/json': { schema: RelationshipSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: { description: 'Unprocessable Entity' },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AdminAccountsRoute = createRoute({
  method: 'get',
  path: '/api/v1/admin/accounts',
  description:
    'View accounts matching certain criteria for filtering, up to 100 at a time. Pagination may be done with the HTTP Link header in the response.',
  request: {
    query: z.object({
      local: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter for local accounts?',
            in: 'query',
            name: 'local',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      remote: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter for remote accounts?',
            in: 'query',
            name: 'remote',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      by_domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by the given domain',
            in: 'query',
            name: 'by_domain',
            schema: { type: 'string' },
            required: false,
          },
        }),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter for currently active accounts?',
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      pending: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter for currently pending accounts?',
            in: 'query',
            name: 'pending',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      disabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter for currently disabled accounts?',
            in: 'query',
            name: 'disabled',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      silenced: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter for currently silenced accounts?',
            in: 'query',
            name: 'silenced',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      suspended: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter for currently suspended accounts?',
            in: 'query',
            name: 'suspended',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      staff: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter for staff accounts?',
            in: 'query',
            name: 'staff',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Username to search for',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            required: false,
          },
        }),
      display_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Display name to search for',
            in: 'query',
            name: 'display_name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Lookup a user with this email',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Lookup a user with this IP',
            in: 'query',
            name: 'ip',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AdminAccountSchema) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AdminAccountsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/admin/accounts/{id}',
  description: 'View admin-level information about the given account.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the account',
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
      description: 'Success',
      content: { 'application/json': { schema: AdminAccountSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AdminAccountsIdActionRoute = createRoute({
  method: 'post',
  path: '/api/v1/admin/accounts/{id}/action',
  description:
    'Perform an action against an account and log this action in the moderation history.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the account',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              report_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'ID of an associated report that caused this action to be taken',
                }),
              send_email_notification: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether an email should be sent to the user with the above information.',
                }),
              text: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Additional text for clarification of why this action was taken',
                }),
              type: z
                .enum(['none', 'disable', 'silence', 'suspend'])
                .exactOptional()
                .openapi({
                  description:
                    'Type of action to be taken. Enumerable oneOf: none disable silence suspend',
                }),
              warning_preset_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'ID of a preset warning' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Success' } },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AdminAccountsIdApproveRoute = createRoute({
  method: 'post',
  path: '/api/v1/admin/accounts/{id}/approve',
  description: 'Approve the given local account if it is currently pending approval.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the account',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AdminAccountsIdEnableRoute = createRoute({
  method: 'post',
  path: '/api/v1/admin/accounts/{id}/enable',
  description: 'Re-enable a local account whose login is currently disabled.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the account',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AdminAccountsIdRejectRoute = createRoute({
  method: 'post',
  path: '/api/v1/admin/accounts/{id}/reject',
  description: 'Reject the given local account if it is currently pending approval.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the account',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AdminAccountsIdUnsilenceRoute = createRoute({
  method: 'post',
  path: '/api/v1/admin/accounts/{id}/unsilence',
  description: 'Unsilence a currently silenced account.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the account',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AdminAccountsIdUnsuspendRoute = createRoute({
  method: 'post',
  path: '/api/v1/admin/accounts/{id}/unsuspend',
  description: 'Unsuspend a currently suspended account.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the account',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AdminReportsRoute = createRoute({
  method: 'get',
  path: '/api/v1/admin/reports',
  description: 'View all reports. Pagination may be done with HTTP Link header in the response.',
  request: {
    query: z.object({
      resolved: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'resolved', schema: { type: 'boolean' }, required: false },
        }),
      account_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'account_id', schema: { type: 'string' }, required: false },
        }),
      target_account_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'target_account_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AdminReportSchema) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AdminReportsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/admin/reports/{id}',
  description: 'View information about the report with the given ID.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the report',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AdminReportSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AdminReportsIdAssignToSelfRoute = createRoute({
  method: 'post',
  path: '/api/v1/admin/reports/{id}/assign_to_self',
  description: 'Claim the handling of this report to yourself.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the report',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AdminReportSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AdminReportsIdReopenRoute = createRoute({
  method: 'post',
  path: '/api/v1/admin/reports/{id}/reopen',
  description: 'Mark a report as resolved with no further action taken.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the report',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AdminReportSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AdminReportsIdResolveRoute = createRoute({
  method: 'post',
  path: '/api/v1/admin/reports/{id}/resolve',
  description: 'Mark a report as resolved with no further action taken.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the report',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AdminReportSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AdminReportsIdUnassignRoute = createRoute({
  method: 'post',
  path: '/api/v1/admin/reports/{id}/unassign',
  description: 'Unassign a report so that someone else can claim it.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the report',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AdminReportSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1AnnouncementsRoute = createRoute({
  method: 'get',
  path: '/api/v1/announcements',
  description: 'See all currently active announcements set by admins.',
  request: {
    query: z.object({
      with_dismissed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, response will include announcements dismissed by the user. Defaults to false.',
            in: 'query',
            name: 'with_dismissed',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AnnouncementSchema) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AnnouncementsIdDismissRoute = createRoute({
  method: 'post',
  path: '/api/v1/announcements/{id}/dismiss',
  description: 'Allows a user to mark the announcement as read.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of an announcement in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ bearerAuth: [] }],
})

export const putApiV1AnnouncementsIdReactionsNameRoute = createRoute({
  method: 'put',
  path: '/api/v1/announcements/{id}/reactions/{name}',
  description: 'Allows a user to mark the announcement as read.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of an announcement in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'Unicode emoji, or shortcode of custom emoji',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: z.object({}) } } },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteApiV1AnnouncementsIdReactionsNameRoute = createRoute({
  method: 'delete',
  path: '/api/v1/announcements/{id}/reactions/{name}',
  description: 'Undo a react emoji to an announcement.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of an announcement in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'Unicode emoji, or shortcode of custom emoji',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: z.object({}) } } },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1AppsRoute = createRoute({
  method: 'post',
  path: '/api/v1/apps',
  tags: ['apps'],
  description: 'Create a new application to obtain OAuth2 credentials.',
  request: {
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({
              client_name: z.string().openapi({ description: 'A name for your application' }),
              redirect_uris: z
                .string()
                .openapi({
                  description:
                    'Where the user should be redirected after authorization. To display the authorization code to the user instead of redirecting to a web page, use urn:ietf:wg:oauth:2.0:oob in this parameter.',
                }),
              scopes: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Space separated list of scopes. If none is provided, defaults to read.',
                }),
              website: z
                .string()
                .exactOptional()
                .openapi({ description: 'A URL to the homepage of your app' }),
            })
            .openapi({ required: ['client_name', 'redirect_uris'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              client_id: z.string().exactOptional(),
              client_secret: z.string().exactOptional(),
              id: z.string().exactOptional(),
              name: z.string().exactOptional(),
              redirect_uri: z.string().exactOptional(),
              vapid_key: z.string().exactOptional(),
              website: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    422: {
      description:
        'If a required parameter is missing or improperly formatted, the request will fail.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getApiV1AppsVerifyCredentialsRoute = createRoute({
  method: 'get',
  path: '/api/v1/apps/verify_credentials',
  tags: ['apps'],
  description: "Confirm that the app's OAuth2 credentials work.",
  responses: {
    200: {
      description:
        'If the Authorization header was provided with a valid token, you should see your app returned as an Application entity.',
      content: { 'application/json': { schema: ApplicationSchema } },
    },
    401: {
      description:
        'If the Authorization header contains an invalid token, is malformed, or is not present, an error will be returned indicating an authorization failure.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1BlocksRoute = createRoute({
  method: 'get',
  path: '/api/v1/blocks',
  description: 'Get blocked users.',
  request: {
    query: z.object({
      limit: z
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
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'max_id', schema: { type: 'string' }, required: false },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'since_id', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1BookmarksRoute = createRoute({
  method: 'get',
  path: '/api/v1/bookmarks',
  description: 'Statuses the user has bookmarked.',
  request: {
    query: z.object({
      limit: z
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
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'max_id', schema: { type: 'string' }, required: false },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'since_id', schema: { type: 'string' }, required: false },
        }),
      min_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'min_id', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: z.array(StatusSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1ConversationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/conversations',
  description: 'Show conversation.',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max number of results to return. Defaults to 20.',
            in: 'query',
            name: 'limit',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results older than ID',
            in: 'query',
            name: 'max_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results newer than ID',
            in: 'query',
            name: 'since_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      min_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results immediately newer than ID',
            in: 'query',
            name: 'min_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: z.array(ConversationSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteApiV1ConversationsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/conversations/{id}',
  description: 'Remove converstation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the conversation in the database',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: z.object({}) } } },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1ConversationsIdReadRoute = createRoute({
  method: 'post',
  path: '/api/v1/conversations/{id}/read',
  description: 'Remove converstation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the conversation in the database',
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
      description: 'The value of unread has been changed to false..',
      content: { 'application/json': { schema: ConversationSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1CustomEmojisRoute = createRoute({
  method: 'get',
  path: '/api/v1/custom_emojis',
  description: 'Returns custom emojis that are available on the server.',
  responses: {
    200: {
      description: 'List of Emojis',
      content: { 'application/json': { schema: z.array(EmojiSchema) } },
    },
  },
})

export const getApiV1DirectoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/directory',
  description: 'List accounts visible in the directory.',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(40)
        .exactOptional()
        .openapi({
          param: {
            description: 'How many accounts to load. Default 40.',
            in: 'query',
            name: 'limit',
            schema: { default: 40, type: 'integer' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'How many accounts to skip before returning results. Default 0.',
            in: 'query',
            name: 'offset',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      order: z
        .enum(['active', 'new'])
        .default('active')
        .exactOptional()
        .openapi({
          param: {
            description:
              'the `active` to sort by most recently posted statuses (default) or `new` to sort by most recently created profiles.',
            in: 'query',
            name: 'order',
            schema: { default: 'active', enum: ['active', 'new'], type: 'string' },
            required: false,
          },
        }),
      local: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return local accounts.',
            in: 'query',
            name: 'local',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of accounts',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
  },
})

export const getApiV1DomainBlocksRoute = createRoute({
  method: 'get',
  path: '/api/v1/domain_blocks',
  description: 'View domains the user has blocked.',
  request: {
    query: z.object({
      limit: z
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
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'max_id', schema: { type: 'string' }, required: false },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'since_id', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1DomainBlocksRoute = createRoute({
  method: 'post',
  path: '/api/v1/domain_blocks',
  description:
    '"Block a domain to:\n- hide all public posts from it\n- hide all notifications from it\n- remove all followers from it\n- prevent following new users from it (but does not remove existing follows)"\n',
  request: {
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({ domain: z.string().openapi({ description: 'Domain to block.' }) })
            .openapi({ required: ['domain'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'success', content: { 'application/json': { schema: z.object({}) } } },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'If `domain` is not provided or contains spaces, the request will fail.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteApiV1DomainBlocksRoute = createRoute({
  method: 'delete',
  path: '/api/v1/domain_blocks',
  description: "Remove a domain block, if it exists in the user's array of blocked domains.",
  request: {
    query: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain to unblock.',
            in: 'query',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'success', content: { 'application/json': { schema: z.object({}) } } },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'If `domain` is not provided or contains spaces, the request will fail.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1EndorsementsRoute = createRoute({
  method: 'get',
  path: '/api/v1/endorsements',
  description: 'Accounts that the user is currently featuring on their profile.',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(40)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of results to return. Defaults to 40. Paginate using the HTTP Link header.',
            in: 'query',
            name: 'limit',
            schema: { default: 40, type: 'integer' },
            required: false,
          },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Internal parameter. Use HTTP Link header from response for pagination',
            in: 'query',
            name: 'max_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Internal parameter. Use HTTP Link header from response for pagination.',
            in: 'query',
            name: 'since_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success. Because endorsement ids are private, you must parse the HTTP Link header to find next and previous pages.',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1FavouritesRoute = createRoute({
  method: 'get',
  path: '/api/v1/favourites',
  description: 'Statuses the user has favourited.',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'string' }, required: false },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'max_id', schema: { type: 'string' }, required: false },
        }),
      min_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'min_id', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: z.array(StatusSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1FeaturedTagsRoute = createRoute({
  method: 'get',
  path: '/api/v1/featured_tags',
  description: 'View your featured tags.',
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: z.array(FeaturedTagSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1FeaturedTagsRoute = createRoute({
  method: 'post',
  path: '/api/v1/featured_tags',
  description: 'Create a feature a tag.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ name: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: FeaturedTagSchema } },
    },
    422: {
      description:
        'If name is not a valid hashtag, e.g. contains illegal characters or only numbers',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1FeaturedTagsSuggestionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/featured_tags/suggestions',
  description: 'Shows your 10 most-used tags, with usage history for the past week.',
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: z.array(FeaturedTagSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteApiV1FeaturedTagsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/featured_tags/{id}',
  description: 'Unfeature a tag',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the FeaturedTag to be unfeatured.',
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
      description: 'An empty object will be returned if the featured tag was successfully deleted.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    404: {
      description: 'If the ID does not exist or is not owned by you',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1FiltersRoute = createRoute({
  method: 'get',
  path: '/api/v1/filters',
  responses: {
    200: {
      description: 'Excerpts of various filters in different contexts.',
      content: { 'application/json': { schema: z.array(FilterSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1FiltersRoute = createRoute({
  method: 'post',
  path: '/api/v1/filters',
  request: {
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({
              context: z
                .array(z.enum(['home', 'notifications', 'public', 'thread']))
                .openapi({
                  description:
                    'Array of enumerable strings `home`, `notifications`, `public`, `thread`. At least one context must be specified.',
                }),
              expires_in: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "Number of seconds from now the filter should expire. Otherwise, null for a filter that doesn't expire.",
                }),
              irreversible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Should the server irreversibly drop matching entities from home and notifications?',
                }),
              phrase: z.string().openapi({ description: 'Text to be filtered.' }),
              whole_word: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Consider word boundaries?' }),
            })
            .openapi({ required: ['phrase', 'context'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The newly-created filter will be returned.',
      content: { 'application/json': { schema: FilterSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'If phrase or context are not provided properly',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1FiltersIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/filters/{id}',
  description: 'Get one filter.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description: 'Filter returned successfully.',
      content: { 'application/json': { schema: FilterSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Filter ID does not exist, or is not owned by you',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const putApiV1FiltersIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/filters/{id}',
  description: 'Update a filter.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({
              context: z
                .array(z.enum(['home', 'notifications', 'public', 'thread']))
                .openapi({
                  description:
                    'Array of enumerable strings `home`, `notifications`, `public`, `thread`. At least one context must be specified.',
                }),
              expires_in: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "Number of seconds from now the filter should expire. Otherwise, null for a filter that doesn't expire.",
                }),
              irreversible: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Should the server irreversibly drop matching entities from home and notifications?',
                }),
              phrase: z.string().openapi({ description: 'Text to be filtered.' }),
              whole_word: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Consider word boundaries?' }),
            })
            .openapi({ required: ['phrase', 'context'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Filter updated successfully.',
      content: { 'application/json': { schema: FilterSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Filter ID does not exist, or is not owned by you',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'If phrase or context are not provided properly',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteApiV1FiltersIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/filters/{id}',
  description: 'Delete a filter.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description: 'The filter has been deleted successfully, so an empty object will be returned.',
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Filter ID does not exist, or is not owned by you',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1FollowRequestsRoute = createRoute({
  method: 'get',
  path: '/api/v1/follow_requests',
  description: 'Pending Follows',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(40)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of results to return. Defaults to 40. Paginate using the HTTP Link header.',
            in: 'query',
            name: 'limit',
            schema: { default: 40, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Accounts that are requesting a follow.',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1FollowRequestsIdAuthorizeRoute = createRoute({
  method: 'post',
  path: '/api/v1/follow_requests/{id}/authorize',
  description: 'Accept Follow',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description:
        'Your Relationship with this account should be updated so that you are followed_by this account.',
      content: { 'application/json': { schema: RelationshipSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'No pending follow request from that user ID',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1FollowRequestsIdRejectRoute = createRoute({
  method: 'post',
  path: '/api/v1/follow_requests/{id}/reject',
  description: 'Accept Follow',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the account in the database',
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
      description: 'Your Relationship with this Account should be unchanged.',
      content: { 'application/json': { schema: RelationshipSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'No pending follow request from that user ID',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1InstanceRoute = createRoute({
  method: 'get',
  path: '/api/v1/instance',
  description: 'Information about the server.',
  responses: {
    200: { description: 'Result', content: { 'application/json': { schema: InstanceSchema } } },
  },
})

export const getApiV1InstanceActivityRoute = createRoute({
  method: 'get',
  path: '/api/v1/instance/activity',
  description: 'Instance activity over the last 3 months, binned weekly.',
  responses: {
    200: {
      description: 'Domains that this instance is aware of.',
      content: { 'application/json': { schema: z.array(ActivitySchema) } },
    },
  },
})

export const getApiV1InstancePeersRoute = createRoute({
  method: 'get',
  path: '/api/v1/instance/peers',
  description: 'Information about the server.',
  responses: {
    200: {
      description: 'Domains that this instance is aware of.',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getApiV1ListsRoute = createRoute({
  method: 'get',
  path: '/api/v1/lists',
  description: 'Fetch all lists that the user owns.',
  responses: {
    200: {
      description: 'Use id as a parameter for related API calls.',
      content: { 'application/json': { schema: z.array(ListSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const putApiV1ListsRoute = createRoute({
  method: 'put',
  path: '/api/v1/lists',
  description: 'Change the title of a list, or which replies to show.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              replies_policy: z
                .enum(['followed', 'list', 'none'])
                .default('list')
                .exactOptional()
                .openapi({ description: 'Enumerable oneOf followed list none. Defaults to list.' }),
              title: z
                .string()
                .exactOptional()
                .openapi({ description: 'The title of the list to be created.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'A list was updated successfully',
      content: { 'application/json': { schema: ListSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1ListsRoute = createRoute({
  method: 'post',
  path: '/api/v1/lists',
  description: 'Create a new list.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              replies_policy: z
                .enum(['followed', 'list', 'none'])
                .default('list')
                .exactOptional()
                .openapi({ description: 'Enumerable oneOf followed list none. Defaults to list.' }),
              title: z.string().openapi({ description: 'The title of the list to be created.' }),
            })
            .openapi({ required: ['title'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'A list was created successfully',
      content: { 'application/json': { schema: ListSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteApiV1ListsRoute = createRoute({
  method: 'delete',
  path: '/api/v1/lists',
  description: 'Delete a list',
  responses: {
    200: {
      description: 'A list was deleted successfully',
      content: { 'application/json': { schema: z.object({}) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not found', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1ListsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/lists/{id}',
  description: 'Remove converstation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the list in the database',
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
      description: 'The value of unread has been changed to false..',
      content: { 'application/json': { schema: ListSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1ListsIdAccountsRoute = createRoute({
  method: 'get',
  path: '/api/v1/lists/{id}/accounts',
  description: 'View accounts in List',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the list in the database',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(40)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of results. Defaults to 40. Max 40. Set to 0 in order to get all accounts without pagination. Pagination is done with the HTTP Link header.',
            in: 'query',
            name: 'limit',
            schema: { default: 40, type: 'integer' },
            required: false,
          },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results older than ID',
            in: 'query',
            name: 'max_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results newer than ID',
            in: 'query',
            name: 'since_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1ListsIdAccountsRoute = createRoute({
  method: 'post',
  path: '/api/v1/lists/{id}/accounts',
  description:
    'Add accounts to the given list. Note that the user must be following these accounts.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the list in the database',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              account_ids: z
                .array(z.string())
                .openapi({ description: 'Array of account IDs to add to the list.' }),
            })
            .openapi({ required: ['account_ids'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: z.object({}) } } },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteApiV1ListsIdAccountsRoute = createRoute({
  method: 'delete',
  path: '/api/v1/lists/{id}/accounts',
  description: 'Remove accounts from the given list.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the list in the database',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      account_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'Array of account IDs to add to the list.',
            in: 'query',
            name: 'account_ids',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Account was successfully removed from the list, or it was already not in the list.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1MarkersRoute = createRoute({
  method: 'get',
  path: '/api/v1/markers',
  description: 'Get saved timeline position',
  request: {
    query: z.object({
      timeline: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.object({})),
        )
        .openapi({
          param: {
            description:
              'Array of markers to fetch. String enum anyOf home, notifications. If not provided, an empty object will be returned.',
            in: 'query',
            name: 'timeline',
            required: true,
            schema: { items: { type: 'object' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Account was successfully removed from the list, or it was already not in the list.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1MarkersRoute = createRoute({
  method: 'post',
  path: '/api/v1/markers',
  description: 'Get saved timeline position',
  request: { body: { content: { 'application/json': { schema: z.object({}) } } } },
  responses: {
    200: {
      description:
        'Account was successfully removed from the list, or it was already not in the list.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Conflict, If object is stale while being updated, an error will occur.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1MediaRoute = createRoute({
  method: 'post',
  path: '/api/v1/media',
  description: 'Creates an attachment to be used with a new status.',
  request: {
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A plain-text description of the media, for accessibility purposes.',
                }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The file to be attached, using multipart form data.',
                }),
              focus: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0 (see “Focal points” below)',
                }),
              thumbnail: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The custom thumbnail of the media to be attached, using multipart form data.',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Attachment created successfully. Note that the Attachment will be created even if the file is not understood correctly.',
      content: { 'application/json': { schema: AttachmentSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'File or file type is unsupported or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1MediaIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/media/{id}',
  description: 'Get an attachement.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the Attachment entity to be updated.',
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
      description:
        'Attachment created successfully. Note that the Attachment will be created even if the file is not understood correctly.',
      content: { 'application/json': { schema: AttachmentSchema } },
    },
    206: {
      description: 'Attachment is not yet ready.',
      content: { 'application/json': { schema: AttachmentSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Attachment does not exist, is deleted, or was not created by you',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'File or file type is unsupported or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1MediaIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/media/{id}',
  description: 'Update an Attachment, before it is attached to a status and posted.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of the Attachment entity to be updated.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A plain-text description of the media, for accessibility purposes.',
                }),
              file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The file to be attached, using multipart form data.',
                }),
              focus: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0 (see “Focal points” below)',
                }),
              thumbnail: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description:
                    'The custom thumbnail of the media to be attached, using multipart form data.',
                }),
            })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Attachment updated successfully.',
      content: { 'application/json': { schema: AttachmentSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Attachment does not exist, is deleted, or was not created by you',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'File or file type is unsupported or invalid',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1MutesRoute = createRoute({
  method: 'get',
  path: '/api/v1/mutes',
  description: 'Accounts the user has muted.',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'string' }, required: false },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'max_id', schema: { type: 'string' }, required: false },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'since_id', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: z.array(AccountSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1NotificationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/notifications',
  description:
    'Notifications concerning the user. This API returns Link headers containing links to the next/previous page. However, the links can also be constructed dynamically using query params and id values.',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max number of results to return. Defaults to 20.',
            in: 'query',
            name: 'limit',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results older than ID',
            in: 'query',
            name: 'max_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results newer than ID',
            in: 'query',
            name: 'since_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      min_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results immediately newer than ID',
            in: 'query',
            name: 'min_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      exclude_types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Array of types to exclude (follow, favourite, reblog, mention, poll, follow_request)',
            in: 'query',
            name: 'exclude_types',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      account_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return only notifications received from this account',
            in: 'query',
            name: 'account_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(NotificationSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1NotificationsClearRoute = createRoute({
  method: 'post',
  path: '/api/v1/notifications/clear',
  description: 'Clear all notifications from the server.',
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: z.object({}) } } },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1NotificationsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/notifications/{id}',
  description: 'View information about a notification with a given ID.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the notification in the database.',
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
      description: 'Success',
      content: { 'application/json': { schema: NotificationSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1NotificationsIdDismissRoute = createRoute({
  method: 'post',
  path: '/api/v1/notifications/{id}/dismiss',
  description: 'Clear a single notification from the server.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the notification in the database.',
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
      description: 'Notification with given ID successfully dismissed',
      content: { 'application/json': { schema: NotificationSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1PollsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/polls/{id}',
  description: 'View a poll.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the poll in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Get one poll.', content: { 'application/json': { schema: PollSchema } } },
    404: {
      description: "Poll does not exist, or poll's parent status is private",
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postApiV1PollsIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/polls/{id}',
  description: 'Vote on a poll.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the poll in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ choices: z.array(z.string()) }).openapi({ required: ['choices'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Get one poll.', content: { 'application/json': { schema: PollSchema } } },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: "Poll does not exist, or poll's parent status is private.",
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'Already voted or poll is expired.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1PreferencesRoute = createRoute({
  method: 'get',
  path: '/api/v1/preferences',
  description: 'Shows your 10 most-used tags, with usage history for the past week.',
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: PreferencesSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1PushSubscriptionRoute = createRoute({
  method: 'get',
  path: '/api/v1/push/subscription',
  description: 'View the PushSubscription currently associated with this access token.',
  responses: {
    200: {
      description: 'Get one PushSubscription',
      content: { 'application/json': { schema: PushSubscriptionSchema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const putApiV1PushSubscriptionRoute = createRoute({
  method: 'put',
  path: '/api/v1/push/subscription',
  description:
    'Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ data: z.string() }).openapi({ required: ['data'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Updating a PushSubscription to only receive mention alerts',
      content: { 'application/json': { schema: PushSubscriptionSchema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1PushSubscriptionRoute = createRoute({
  method: 'post',
  path: '/api/v1/push/subscription',
  description:
    'Add a Web Push API subscription to receive notifications. Each access token can have one push subscription. If you create a new subscription, the old subscription is deleted.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ data: z.string(), subscription: z.string() })
            .openapi({ required: ['subscription', 'data'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'PushSubscription created',
      content: { 'application/json': { schema: PushSubscriptionSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteApiV1PushSubscriptionRoute = createRoute({
  method: 'delete',
  path: '/api/v1/push/subscription',
  description:
    'Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.',
  responses: {
    200: {
      description: 'Updating a PushSubscription to only receive mention alerts',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1ReportsRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports',
  description: 'File a report.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              account_id: z.string().openapi({ description: 'ID of the account to report' }),
              comment: z
                .string()
                .exactOptional()
                .openapi({ description: 'Reason for the report (default max 1000 characters)' }),
              forward: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If the account is remote, should the report be forwarded to the remote admin?',
                }),
              status_ids: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Array of Statuses to attach to the report, for context' }),
            })
            .openapi({ required: ['account_id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully reported.',
      content: { 'application/json': { schema: ReportSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1ScheduledStatusesRoute = createRoute({
  method: 'get',
  path: '/api/v1/scheduled_statuses',
  description: 'View scheduled statuses',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max number of results to return. Defaults to 20.',
            in: 'query',
            name: 'limit',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results older than ID',
            in: 'query',
            name: 'max_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results newer than ID',
            in: 'query',
            name: 'since_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      min_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results immediately newer than ID',
            in: 'query',
            name: 'min_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get scheduled statuses.',
      content: { 'application/json': { schema: z.array(ScheduledStatusSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1ScheduledStatusesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/scheduled_statuses/{id}',
  description: 'View a single scheduled status',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the scheduled status in the database.',
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
      description: 'Success.',
      content: { 'application/json': { schema: ScheduledStatusSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const putApiV1ScheduledStatusesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/scheduled_statuses/{id}',
  description: 'View a single scheduled status',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the scheduled status in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              scheduled_at: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'ISO 8601 Datetime at which the status will be published. Must be at least 5 minutes into the future.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: { 'application/json': { schema: ScheduledStatusSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteApiV1ScheduledStatusesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/scheduled_statuses/{id}',
  description: 'Cancel a scheduled status',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the scheduled status in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: z.object({}) } } },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorSchema } } },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1StatusesRoute = createRoute({
  method: 'post',
  path: '/api/v1/statuses',
  request: {
    headers: z.object({
      'Idempotency-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Prevent duplicate submissions of the same status. Idempotency keys are stored for up to 1 hour, and can be any arbitrary string. Consider using a hash or UUID generated client-side.',
            in: 'header',
            name: 'Idempotency-Key',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                in_reply_to_id: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'ID of the status being replied to, if status is a reply',
                  }),
                language: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'ISO 639 language code for this status.' }),
                media_ids: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({
                    description:
                      'Array of Attachment ids to be attached as media. If provided, `status` becomes optional, and `poll` cannot be used.',
                  }),
                poll: z.array(z.object({})).exactOptional(),
                scheduled_at: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'ISO 8601 Datetime at which to schedule a status. Providing this paramter will cause ScheduledStatus to be returned instead of Status. Must be at least 5 minutes in the future.',
                  }),
                sensitive: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Mark status and attached media as sensitive?' }),
                spoiler_text: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Text to be shown as a warning or subject before the actual content. Statuses are generally collapsed behind this field.',
                  }),
                status: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Text content of the status. If `media_ids` is provided, this becomes optional. Attaching a `poll` is optional while `status` is provided.',
                  }),
                visibility: z
                  .enum(['public', 'unlisted', 'private', 'direct'])
                  .exactOptional()
                  .openapi({
                    description:
                      'Visibility of the posted status. Enumerable oneOf public, unlisted, private, direct.',
                  }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Status will be posted with chosen parameters. If scheduled_at is provided, then a ScheduledStatus will be returned instead.',
      content: { 'application/json': { schema: z.xor([StatusSchema, ScheduledStatusSchema]) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1StatusesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/statuses/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
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
      description:
        'Status will be posted with chosen parameters. If scheduled_at is provided, then a ScheduledStatus will be returned instead.',
      content: { 'application/json': { schema: StatusSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Status does not exist, is deleted, or is private.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteApiV1StatusesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/statuses/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
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
      description:
        'Status will be posted with chosen parameters. If scheduled_at is provided, then a ScheduledStatus will be returned instead.',
      content: { 'application/json': { schema: StatusSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Status does not exist, is deleted, or is private.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1StatusesIdBookmarkRoute = createRoute({
  method: 'post',
  path: '/api/v1/statuses/{id}/bookmark',
  description: 'Privately bookmark a status.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
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
      description: 'Status bookmarked',
      content: { 'application/json': { schema: StatusSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1StatusesIdContextRoute = createRoute({
  method: 'get',
  path: '/api/v1/statuses/{id}/context',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ContextSchema } } },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1StatusesIdFavouriteRoute = createRoute({
  method: 'post',
  path: '/api/v1/statuses/{id}/favourite',
  description: 'Add a status to your favourites list.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: StatusSchema } } },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1StatusesIdFavouritedByRoute = createRoute({
  method: 'get',
  path: '/api/v1/statuses/{id}/favourited_by',
  description: 'View who favourited a given status.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AccountSchema } } },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postApiV1StatusesIdMuteRoute = createRoute({
  method: 'post',
  path: '/api/v1/statuses/{id}/mute',
  description:
    'Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
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
      description: "Status's conversation muted, or was already muted",
      content: { 'application/json': { schema: StatusSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1StatusesIdPinRoute = createRoute({
  method: 'post',
  path: '/api/v1/statuses/{id}/pin',
  description: 'Feature one of your own public statuses at the top of your profile.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
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
      description:
        'Status pinned. Note the status is not a reblog and its authoring account is your own.',
      content: { 'application/json': { schema: StatusSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'Status is not owned by you, or is not public. You cannot pin one of your private statuses because private statuses cannot be fetched from remote sites, and must be delivered.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1StatusesIdReblogRoute = createRoute({
  method: 'post',
  path: '/api/v1/statuses/{id}/reblog',
  description: 'Reshare a status.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              visibility: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'any visibility except limited or direct (i.e. public, unlisted, private). Defaults to public. Currently unused in UI.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Status has been reblogged. Note that the top-level id has changed. The id of the boosted status is now inside the reblog property. The top-level id is the id of the reblog itself. Also note that reblogs cannot be pinned.',
      content: { 'application/json': { schema: StatusSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1StatusesIdRebloggedByRoute = createRoute({
  method: 'get',
  path: '/api/v1/statuses/{id}/reblogged_by',
  description: 'View who boosted a given status.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AccountSchema } } },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postApiV1StatusesIdUnbookmarkRoute = createRoute({
  method: 'post',
  path: '/api/v1/statuses/{id}/unbookmark',
  description: 'Remove a status from your private bookmarks.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
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
      description: 'Status unbookmarked',
      content: { 'application/json': { schema: StatusSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1StatusesIdUnfavouriteRoute = createRoute({
  method: 'post',
  path: '/api/v1/statuses/{id}/unfavourite',
  description: 'Remove a status from your favourites list.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: StatusSchema } } },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1StatusesIdUnmuteRoute = createRoute({
  method: 'post',
  path: '/api/v1/statuses/{id}/unmute',
  description: "Status's conversation unmuted, or was already unmuted",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
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
      description: "Status's conversation muted, or was already muted",
      content: { 'application/json': { schema: StatusSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1StatusesIdUnpinRoute = createRoute({
  method: 'post',
  path: '/api/v1/statuses/{id}/unpin',
  description: 'Unfeature a status from the top of your profile.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
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
      description: 'Status unpinned, or was already not pinned',
      content: { 'application/json': { schema: StatusSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postApiV1StatusesIdUnreblogRoute = createRoute({
  method: 'post',
  path: '/api/v1/statuses/{id}/unreblog',
  description: 'Undo a reshare of a status.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of a status in the database.',
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
      description: 'Status no longer reblogged',
      content: { 'application/json': { schema: StatusSchema } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Status does not exist, is deleted, or is private',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1SuggestionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/suggestions',
  description:
    'Accounts the user has had past positive interactions with, but is not yet following.',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(40)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return. Defaults to 40.',
            in: 'query',
            name: 'limit',
            schema: { default: 40, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success.', content: { 'application/json': { schema: AccountSchema } } },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteApiV1SuggestionsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/suggestions/{id}',
  description: 'Delete user suggestion',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of the account in the database to be removed from suggestions',
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
      description: 'Successfully removed',
      content: { 'application/json': { schema: z.object({}) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1TimelinesHomeRoute = createRoute({
  method: 'get',
  path: '/api/v1/timelines/home',
  description: 'View statuses from followed users.',
  request: {
    query: z.object({
      local: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only local statuses? Defaults to false.',
            in: 'query',
            name: 'local',
            schema: { default: false, type: 'boolean' },
            required: false,
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
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max number of results to return. Defaults to 20.',
            in: 'query',
            name: 'limit',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results older than ID',
            in: 'query',
            name: 'max_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results newer than ID',
            in: 'query',
            name: 'since_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      min_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results immediately newer than ID',
            in: 'query',
            name: 'min_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get statuses for home.',
      content: { 'application/json': { schema: z.array(StatusSchema) } },
    },
    206: { description: 'Home feed is regenerating' },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1TimelinesListListIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/timelines/list/{list_id}',
  description: 'View statuses in the given list timeline.',
  request: {
    params: z.object({
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Local ID of the list in the database.',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max number of results to return. Defaults to 20.',
            in: 'query',
            name: 'limit',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results older than ID',
            in: 'query',
            name: 'max_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results newer than ID',
            in: 'query',
            name: 'since_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      min_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results immediately newer than ID',
            in: 'query',
            name: 'min_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Statuses in this list will be returned..',
      content: { 'application/json': { schema: z.array(StatusSchema) } },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getApiV1TimelinesPublicRoute = createRoute({
  method: 'get',
  path: '/api/v1/timelines/public',
  description: 'Public timeline',
  request: {
    query: z.object({
      local: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only local statuses? Defaults to false.',
            in: 'query',
            name: 'local',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      remote: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only local statuses? Defaults to false.',
            in: 'query',
            name: 'remote',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      only_media: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only statuses with media attached? Defaults to false..',
            in: 'query',
            name: 'only_media',
            schema: { default: false, type: 'boolean' },
            required: false,
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
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max number of results to return. Defaults to 20.',
            in: 'query',
            name: 'limit',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results older than ID',
            in: 'query',
            name: 'max_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results newer than ID',
            in: 'query',
            name: 'since_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      min_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results immediately newer than ID',
            in: 'query',
            name: 'min_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'get statuses.',
      content: { 'application/json': { schema: z.array(StatusSchema) } },
    },
  },
})

export const getApiV1TimelinesTagHashtagRoute = createRoute({
  method: 'get',
  path: '/api/v1/timelines/tag/{hashtag}',
  description: 'View public statuses containing the given hashtag.',
  request: {
    params: z.object({
      hashtag: z
        .string()
        .openapi({
          param: {
            description: 'Content of a `#hashtag``, not including `#` symbol..',
            in: 'path',
            name: 'hashtag',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      local: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only local statuses? Defaults to false.',
            in: 'query',
            name: 'local',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      remote: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only local statuses? Defaults to false.',
            in: 'query',
            name: 'remote',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      only_media: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only statuses with media attached? Defaults to false..',
            in: 'query',
            name: 'only_media',
            schema: { default: false, type: 'boolean' },
            required: false,
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
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max number of results to return. Defaults to 20.',
            in: 'query',
            name: 'limit',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results older than ID',
            in: 'query',
            name: 'max_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      since_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results newer than ID',
            in: 'query',
            name: 'since_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      min_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results immediately newer than ID',
            in: 'query',
            name: 'min_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get statuses.',
      content: { 'application/json': { schema: z.array(StatusSchema) } },
    },
  },
})

export const getApiV1TrendsRoute = createRoute({
  method: 'get',
  path: '/api/v1/trends',
  description: 'Tags that are being used more frequently within the past week.',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max number of results to return. Defaults to 10.',
            in: 'query',
            name: 'limit',
            schema: { default: 10, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Domains that this instance is aware of.',
      content: { 'application/json': { schema: z.array(TagSchema) } },
    },
  },
})

export const getApiV2SearchRoute = createRoute({
  method: 'get',
  path: '/api/v2/search',
  description: 'Search results',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'What to search for',
            in: 'query',
            name: 'q',
            required: true,
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
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results. Defaults to 40.',
            in: 'query',
            name: 'limit',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
      resolve: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Attempt WebFinger lookup.',
            in: 'query',
            name: 'resolve',
            schema: { type: 'string' },
            required: false,
          },
        }),
      following: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only who the user is following. Defaults to false.',
            in: 'query',
            name: 'following',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      account_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If provided, statuses returned will be authored only by this account',
            in: 'query',
            name: 'account_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      max_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results older than this id',
            in: 'query',
            name: 'max_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      min_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return results immediately newer than this id',
            in: 'query',
            name: 'min_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .enum(['accounts', 'hashtags', 'statuses'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Enum(accounts, hashtags, statuses)',
            in: 'query',
            name: 'type',
            schema: { enum: ['accounts', 'hashtags', 'statuses'], type: 'string' },
            required: false,
          },
        }),
      exclude_unreviewed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter out unreviewed tags? Defaults to false. Use true when trying to find trending tags.',
            in: 'query',
            name: 'exclude_unreviewed',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      offset: z
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
            description: 'Offset in search results. Used for pagination. Defaults to 0.',
            in: 'query',
            name: 'offset',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Result',
      content: {
        'application/json': {
          schema: z
            .object({
              accounts: z.array(AccountSchema).exactOptional(),
              hashtags: z.array(StatusSchema).exactOptional(),
              statuses: z.array(TagSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Invalid or missing Authorization header',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getOauthAuthorizeRoute = createRoute({
  method: 'get',
  path: '/oauth/authorize',
  tags: ['oauth'],
  description:
    'Displays an authorization form to the user. If approved, it will create and return an authorization code, then redirect to the desired redirect_uri, or show the authorization code if urn:ietf:wg:oauth:2.0:oob was requested. The authorization code can be used while requesting a token to obtain access to user-level methods.',
  request: {
    query: z.object({
      response_type: z
        .string()
        .openapi({
          param: {
            description: 'Should be set equal to code.',
            in: 'query',
            name: 'response_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      client_id: z
        .string()
        .openapi({
          param: {
            description: 'Client ID, obtained during app registration.',
            in: 'query',
            name: 'client_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      redirect_uri: z
        .string()
        .openapi({
          param: {
            description:
              'Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the authorization code will be shown instead. Must match one of the redirect URIs declared during app registration.',
            in: 'query',
            name: 'redirect_uri',
            required: true,
            schema: { type: 'string' },
          },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of requested OAuth scopes, separated by spaces (or by pluses, if using query parameters). Must be a subset of scopes declared during app registration. If not provided, defaults to read.',
            in: 'query',
            name: 'scope',
            schema: { type: 'string' },
            required: false,
          },
        }),
      force_login: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Added in 2.6.0. Forces the user to re-login, which is necessary for authorizing with multiple accounts from the same instance.',
            in: 'query',
            name: 'force_login',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The authorization code will be returned as a query parameter named code.',
    },
    400: {
      description:
        'If the authorization code is incorrect or has been used already, the request will fail.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postOauthRevokeRoute = createRoute({
  method: 'post',
  path: '/oauth/revoke',
  tags: ['oauth'],
  description: 'Revoke an access token to make it no longer valid for use.',
  request: {
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({
              client_id: z
                .string()
                .openapi({ description: 'Client ID, obtained during app registration' }),
              client_secret: z
                .string()
                .openapi({ description: 'Client secret, obtained during app registration' }),
              token: z
                .string()
                .openapi({ description: 'The previously obtained token, to be invalidated' }),
            })
            .openapi({ required: ['client_id', 'client_secret', 'token'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'If you own the provided token, the API call will provide an empty response. This operation is idempotent, so calling this API multiple times will still return OK.',
    },
    403: {
      description:
        'If you provide a token you do not own, or no token at all, the API call will return a 403 error.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postOauthTokenRoute = createRoute({
  method: 'post',
  path: '/oauth/token',
  tags: ['oauth'],
  description: 'Returns an access token, to be used during API calls that are not public.',
  request: {
    body: {
      content: {
        'application/form-data': {
          schema: z
            .object({
              client_id: z
                .string()
                .openapi({ description: 'Client ID, obtained during app registration' }),
              client_secret: z
                .string()
                .openapi({ description: 'Client secret, obtained during app registration' }),
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A user authorization code, obtained via /oauth/authorize',
                }),
              grant_type: z
                .string()
                .openapi({
                  description:
                    'Set equal to authorization_code if code is provided in order to gain user-level access. Otherwise, set equal to client_credentials to obtain app-level access only.',
                }),
              redirect_uri: z
                .string()
                .openapi({
                  description:
                    'Set a URI to redirect the user to. If this parameter is set to urn:ietf:wg:oauth:2.0:oob then the token will be shown instead. Must match one of the redirect URIs declared during app registration.',
                }),
              scopes: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'List of requested OAuth scopes, separated by spaces. Must be a subset of scopes declared during app registration. If not provided, defaults to read.',
                }),
            })
            .openapi({ required: ['grant_type', 'client_id', 'client_secret', 'redirect_uri'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Store this access_token for later use with auth-required methods. The token should be passed as an HTTP Authorization header when making API calls, with the value Bearer access_token',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z
                .string()
                .exactOptional()
                .openapi({ example: 'ZA-Yj3aBD8U8Cm7lKUp-lm9O9BmDgdhHzDeqsY8tlL0' }),
              created_at: z
                .int()
                .exactOptional()
                .openapi({ description: 'UNIX timestamp', example: 1573979017 }),
              scope: z.string().exactOptional().openapi({ example: 'read write follow push' }),
              token_type: z.string().exactOptional().openapi({ example: 'Bearer' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description:
        'If you try to request a scope that was not included when registering the app, the request will fail.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description:
        'If client_id and client_secret do not match or are invalid, the request will fail.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
