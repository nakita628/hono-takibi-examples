import { createRoute, z } from '@hono/zod-openapi'

const ActorTypesSchema = z
  .enum([
    'users',
    'groups',
    'guests',
    'emails',
    'circles',
    'bridged',
    'bots',
    'federated_users',
    'phones',
  ])
  .openapi('ActorTypes')

const BanSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Identifier of the ban' }),
    moderatorActorType: z
      .string()
      .openapi({ description: 'Actor type of the moderator that banned the participant' }),
    moderatorActorId: z
      .string()
      .openapi({ description: 'Actor id of the moderator that banned the participant' }),
    moderatorDisplayName: z
      .string()
      .openapi({ description: 'Display name of the moderator that banned the participant' }),
    bannedActorType: z.string().openapi({ description: 'Actor type of the banned participant' }),
    bannedActorId: z.string().openapi({ description: 'Actor id of the banned participant' }),
    bannedDisplayName: z
      .string()
      .openapi({ description: 'Display name of the banned participant' }),
    bannedTime: z
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
        description: 'UNIX timestamp when the participant was banned',
      }),
    internalNote: z
      .string()
      .openapi({
        description: 'Internal note for the moderator to remember the reason for the ban',
      }),
  })
  .openapi({
    required: [
      'id',
      'moderatorActorType',
      'moderatorActorId',
      'moderatorDisplayName',
      'bannedActorType',
      'bannedActorId',
      'bannedDisplayName',
      'bannedTime',
      'internalNote',
    ],
  })
  .openapi('Ban')

const RichObjectParameterSchema = z
  .object({
    type: z
      .string()
      .openapi({
        description:
          'Object type (see [Rich Object String](https://github.com/nextcloud/server/issues/1706))',
      }),
    id: z.string().openapi({ description: 'Object id' }),
    name: z.string().openapi({ description: 'Visible name' }),
    server: z.string().exactOptional().openapi({ description: 'Server URL for federated users' }),
    link: z.string().exactOptional().openapi({ description: 'URL of the object' }),
    'call-type': z
      .enum(['one2one', 'group', 'public'])
      .exactOptional()
      .openapi({ description: 'Type of the call' }),
    'icon-url': z.string().exactOptional().openapi({ description: 'URL of the icon' }),
    'message-id': z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of a message that this object refers to' }),
    boardname: z.string().exactOptional().openapi({ description: 'Name of the Deck board' }),
    stackname: z.string().exactOptional().openapi({ description: 'Name of the Deck stack' }),
    size: z.string().exactOptional().openapi({ description: 'File size in bytes' }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path of the file (for guests: relative to the folder share of the `link` when starting with a slash)',
      }),
    mimetype: z.string().exactOptional().openapi({ description: 'Mimetype of the file' }),
    'preview-available': z
      .enum(['yes', 'no'])
      .exactOptional()
      .openapi({ description: 'Whether a preview is available for the file' }),
    'hide-download': z
      .enum(['yes', 'no'])
      .exactOptional()
      .openapi({ description: 'Whether the download should be hidden for the file' }),
    mtime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Modification time of the file as UNIX timestamp' }),
    latitude: z.string().exactOptional().openapi({ description: 'Latitude of a location' }),
    longitude: z.string().exactOptional().openapi({ description: 'Longitude of a location' }),
    description: z.string().exactOptional().openapi({ description: 'Description of the object' }),
    thumb: z.string().exactOptional().openapi({ description: 'URL of a thumbnail' }),
    website: z.string().exactOptional().openapi({ description: 'Website URL' }),
    visibility: z
      .enum(['0', '1'])
      .exactOptional()
      .openapi({ description: 'Visibility of the object' }),
    assignable: z
      .enum(['0', '1'])
      .exactOptional()
      .openapi({ description: 'Whether the object is assignable' }),
    conversation: z.string().exactOptional().openapi({ description: 'Conversation token' }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the object for caching' }),
    permissions: z.string().exactOptional().openapi({ description: 'Permissions for the file' }),
    width: z
      .string()
      .exactOptional()
      .openapi({ description: 'Width of the object (e.g. image, video)' }),
    height: z
      .string()
      .exactOptional()
      .openapi({ description: 'Height of the object (e.g. image, video)' }),
    blurhash: z.string().exactOptional().openapi({ description: 'Blurhash of the image' }),
  })
  .openapi({ required: ['type', 'id', 'name'] })
  .openapi('RichObjectParameter')

const BaseMessageSchema = z
  .object({
    actorDisplayName: z
      .string()
      .openapi({
        description:
          'Display name of the message author (can be empty for type `deleted_users` and `guests`)',
      }),
    actorId: z.string().openapi({ description: 'Actor id of the message author' }),
    actorType: z
      .string()
      .openapi({
        description:
          'See [Constants - Actor types of chat messages](https://nextcloud-talk.readthedocs.io/en/latest/constants#actor-types-of-chat-messages)',
      }),
    expirationTimestamp: z
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
        description:
          'Unix time stamp when the message expires and should be removed from the clients UI without further note or warning (only available with `message-expiration` capability)',
      }),
    message: z
      .string()
      .openapi({
        description:
          'Message string with placeholders (see [Rich Object String](https://github.com/nextcloud/server/issues/1706))',
      }),
    messageParameters: z
      .record(z.string(), RichObjectParameterSchema)
      .openapi({
        description:
          'Message parameters for `message` (see [Rich Object String](https://github.com/nextcloud/server/issues/1706))',
      }),
    messageType: z
      .string()
      .openapi({
        description:
          'Currently known types are `comment`, `comment_deleted`, `system` and `command`',
      }),
    systemMessage: z
      .string()
      .openapi({
        description:
          'Empty for normal chat message or the type of the system message (untranslated)',
      }),
  })
  .openapi({
    required: [
      'actorDisplayName',
      'actorId',
      'actorType',
      'expirationTimestamp',
      'message',
      'messageParameters',
      'messageType',
      'systemMessage',
    ],
  })
  .openapi('BaseMessage')

const BotSchema = z
  .object({
    description: z
      .string()
      .nullable()
      .openapi({
        description:
          'A longer description of the bot helping moderators to decide if they want to enable this bot',
      }),
    id: z
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
        description: 'Unique numeric identifier of the bot on this server',
      }),
    name: z
      .string()
      .openapi({
        description: 'Display name of the bot shown as author when it posts a message or reaction',
      }),
    state: z
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
        description:
          'One of the [Bot states](https://nextcloud-talk.readthedocs.io/en/latest/constants#bot-states)',
      }),
  })
  .openapi({ required: ['description', 'id', 'name', 'state'] })
  .openapi('Bot')

const BotFeaturesSchema = z
  .object({
    features: z
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
        description:
          'Feature flags enabled for the bot (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#bot-features))',
      }),
  })
  .openapi({ required: ['features'] })
  .openapi('BotFeatures')

const BotWithDetailsSchema = BotSchema.and(
  z
    .object({
      error_count: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64', description: 'Number of consecutive errors' }),
      features: z
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
          description:
            'Feature flags for the bot (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#bot-features))',
        }),
      last_error_date: z
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
          description: 'UNIX timestamp of the last error',
        }),
      last_error_message: z
        .string()
        .openapi({
          description:
            'The last exception message or error response information when trying to reach the bot',
        }),
      url: z.string().openapi({ description: 'URL endpoint that is triggered by this bot' }),
      url_hash: z
        .string()
        .openapi({ description: 'Hash of the URL prefixed with `bot-` serves as `actorId`' }),
    })
    .openapi({
      required: [
        'error_count',
        'features',
        'last_error_date',
        'last_error_message',
        'url',
        'url_hash',
      ],
    }),
).openapi('BotWithDetails')

const CallPeerSchema = z
  .object({
    actorId: z
      .string()
      .openapi({ description: 'The user id, guest random id or email address of the attendee' }),
    actorType: z
      .string()
      .openapi({
        description:
          'Actor type of the attendee (see [Constants - Attendee types](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-types))',
      }),
    displayName: z.string().openapi({ description: 'The display name of the attendee' }),
    lastPing: z
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
        description: 'Timestamp of the last ping of the user (should be used for sorting)',
      }),
    sessionId: z.string().openapi({ description: 'up to 512 character long string' }),
    token: z.string().openapi({ description: 'Conversation token' }),
  })
  .openapi({ required: ['actorId', 'actorType', 'displayName', 'lastPing', 'sessionId', 'token'] })
  .openapi('CallPeer')

const CapabilitiesSchema = z
  .object({
    features: z
      .array(z.string())
      .min(1)
      .openapi({ description: 'List of features available on the server' }),
    'features-local': z
      .array(z.string())
      .min(1)
      .openapi({
        description: 'List of features only available locally (not for federated conversations)',
      }),
    config: z
      .object({
        attachments: z
          .object({
            allowed: z
              .boolean()
              .openapi({ description: 'Whether file sharing is allowed in conversations' }),
            folder: z
              .string()
              .exactOptional()
              .openapi({
                description: "User's attachment folder (only available for logged in users)",
              }),
            'conversation-subfolders': z
              .boolean()
              .openapi({
                description: 'Whether per-conversation subfolders are used for attachments',
              }),
          })
          .openapi({ required: ['allowed', 'conversation-subfolders'] }),
        call: z
          .object({
            enabled: z.boolean().openapi({ description: 'Whether calls are enabled' }),
            'breakout-rooms': z
              .boolean()
              .openapi({ description: 'Whether breakout rooms are enabled' }),
            recording: z.boolean().openapi({ description: 'Whether call recording is enabled' }),
            'recording-consent': z
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
                description:
                  'Whether recording consent is required (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#recording-consent-required))',
              }),
            'supported-reactions': z
              .array(z.string())
              .openapi({ description: 'List of supported reaction emojis during calls' }),
            'predefined-backgrounds': z
              .array(z.string())
              .openapi({
                description:
                  'List of file names relative to the spreed/img/backgrounds/ web path, e.g. `2_home.jpg`',
              }),
            'predefined-backgrounds-v2': z
              .array(z.string())
              .openapi({
                description:
                  'List of file paths relative to the server web root with leading slash, e.g. `/apps/spreed/img/backgrounds/2_home.jpg`',
              }),
            'can-upload-background': z
              .boolean()
              .openapi({ description: 'Whether the user can upload custom virtual backgrounds' }),
            'sip-enabled': z
              .boolean()
              .openapi({ description: 'Whether SIP is enabled on the server' }),
            'sip-dialout-enabled': z
              .boolean()
              .openapi({ description: 'Whether SIP dial-out is enabled on the server' }),
            'default-phone-region': z
              .string()
              .openapi({ description: 'Default phone region of the server' }),
            'can-enable-sip': z
              .boolean()
              .openapi({ description: 'Whether the user can enable SIP for conversations' }),
            'start-without-media': z
              .boolean()
              .openapi({ description: 'Whether calls start without media by default' }),
            'max-duration': z
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
                description: 'Maximum duration of a call in seconds, `0` means unlimited',
              }),
            'blur-virtual-background': z
              .boolean()
              .openapi({ description: 'Whether the blur virtual background is available' }),
            'end-to-end-encryption': z
              .boolean()
              .openapi({ description: 'Whether end-to-end encryption is available' }),
            'live-transcription': z
              .boolean()
              .openapi({ description: 'Whether live transcription is available' }),
            'live-translation': z
              .boolean()
              .openapi({ description: 'Whether live translation is available' }),
            'live-transcription-target-language-id': z
              .string()
              .openapi({ description: 'The default target language for live transcription' }),
            'play-sounds': z
              .boolean()
              .openapi({ description: 'Whether to play sounds for call events' }),
            'grid-limit': z
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
                description: 'Maximum number of participants shown in the grid view',
              }),
            'grid-limit-enforced': z
              .boolean()
              .openapi({ description: 'Whether the grid limit is enforced by the server' }),
            'external-call-service': z
              .string()
              .exactOptional()
              .openapi({ description: 'URL of an external call service if one is used' }),
          })
          .openapi({
            required: [
              'enabled',
              'breakout-rooms',
              'recording',
              'recording-consent',
              'supported-reactions',
              'predefined-backgrounds',
              'predefined-backgrounds-v2',
              'can-upload-background',
              'sip-enabled',
              'sip-dialout-enabled',
              'default-phone-region',
              'can-enable-sip',
              'start-without-media',
              'max-duration',
              'blur-virtual-background',
              'end-to-end-encryption',
              'live-transcription',
              'live-translation',
              'live-transcription-target-language-id',
              'play-sounds',
              'grid-limit',
              'grid-limit-enforced',
            ],
          }),
        chat: z
          .object({
            'max-length': z
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
                description: 'Maximum length of a chat message',
              }),
            'read-privacy': z
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
                description:
                  'Read privacy setting for the user (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#participant-read-status-privacy))',
              }),
            'has-translation-providers': z
              .boolean()
              .openapi({ description: 'Whether translation providers are available' }),
            'has-translation-task-providers': z
              .boolean()
              .openapi({ description: 'Whether translation task providers are available' }),
            'typing-privacy': z
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
                description:
                  'Typing privacy setting for the user (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#participant-typing-privacy))',
              }),
            'summary-threshold': z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 1,
                description: 'Minimum number of chat messages before a summary can be generated',
              }),
            style: z
              .enum(['split', 'unified'])
              .openapi({
                description:
                  'Chat message rendering style (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#chat-style))',
              }),
            'matterbridge-enabled': z
              .boolean()
              .openapi({ description: 'Whether Matterbridge is enabled' }),
          })
          .openapi({
            required: [
              'max-length',
              'read-privacy',
              'has-translation-providers',
              'has-translation-task-providers',
              'typing-privacy',
              'summary-threshold',
              'style',
              'matterbridge-enabled',
            ],
          }),
        conversations: z
          .object({
            'can-create': z
              .boolean()
              .openapi({ description: 'Whether the user can create conversations' }),
            'force-passwords': z
              .boolean()
              .openapi({ description: 'Whether passwords are enforced for public conversations' }),
            'list-style': z
              .enum(['two-lines', 'compact'])
              .openapi({
                description:
                  'Conversation list style (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#conversation-list-style))',
              }),
            'description-length': z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 1,
                description: 'Maximum length of a conversation description',
              }),
            'retention-event': z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(0n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                description:
                  'Retention period for event conversations in seconds, `0` means no retention',
              }),
            'retention-phone': z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(0n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                description:
                  'Retention period for phone conversations in seconds, `0` means no retention',
              }),
            'retention-instant-meetings': z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(0n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                description:
                  'Retention period for instant meetings in seconds, `0` means no retention',
              }),
            'retention-classified': z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(0n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                description:
                  'Retention period for classified conversations after a call in seconds, `0` means no retention',
              }),
            'sort-order': z
              .enum(['activity', 'alphabetical'])
              .openapi({
                description:
                  'User selected sort order for conversations (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#conversations-sort-options))',
              }),
            'group-mode': z
              .enum(['none', 'group-first', 'private-first'])
              .openapi({
                description:
                  'User selected grouping mode for conversations (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#conversations-group-mode))',
              }),
            unarchive: z
              .enum(['never', 'mention', 'always'])
              .openapi({
                description:
                  'User selected mode when archived conversations are unarchived automatically (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#conversations-unarchive-mode))',
              }),
            'tags-show-unread': z
              .enum(['never', 'mention', 'always'])
              .openapi({
                description:
                  'User selected mode when unread conversations are shown in collapsed conversation tags (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#conversation-tags-show-unread-mode))',
              }),
          })
          .openapi({
            required: [
              'can-create',
              'force-passwords',
              'list-style',
              'description-length',
              'retention-event',
              'retention-phone',
              'retention-instant-meetings',
              'retention-classified',
              'sort-order',
              'group-mode',
              'unarchive',
              'tags-show-unread',
            ],
          }),
        federation: z
          .object({
            enabled: z.boolean().openapi({ description: 'Whether federation is enabled' }),
            'incoming-enabled': z
              .boolean()
              .openapi({ description: 'Whether incoming federation is enabled' }),
            'outgoing-enabled': z
              .boolean()
              .openapi({ description: 'Whether outgoing federation is enabled' }),
            'only-trusted-servers': z
              .boolean()
              .openapi({ description: 'Whether only trusted servers are allowed for federation' }),
          })
          .openapi({
            required: ['enabled', 'incoming-enabled', 'outgoing-enabled', 'only-trusted-servers'],
          }),
        matrix: z
          .object({
            enabled: z.boolean().openapi({ description: 'Whether Matrix accounts can be linked' }),
          })
          .openapi({ required: ['enabled'] }),
        previews: z
          .object({
            'max-gif-size': z
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
                description: 'Maximum GIF file size in bytes for previews',
              }),
          })
          .openapi({ required: ['max-gif-size'] }),
        signaling: z
          .object({
            'session-ping-limit': z
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
                description: 'Maximum number of sessions that can be pinged in a single request',
              }),
            mode: z
              .enum(['internal', 'external'])
              .openapi({
                description:
                  'Signaling mode (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#signaling-modes))',
              }),
            'hello-v2-token-key': z
              .string()
              .exactOptional()
              .openapi({ description: 'Public key for hello v2 authentication' }),
          })
          .openapi({ required: ['session-ping-limit', 'mode'] }),
        experiments: z
          .object({
            enabled: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(0n),
              )
              .openapi({
                type: 'integer',
                format: 'int64',
                minimum: 0,
                description: 'Bit-flag of enabled experiments',
              }),
          })
          .openapi({ required: ['enabled'] }),
        'feature-hints': z
          .object({
            current: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(1n),
              )
              .openapi({ type: 'integer', format: 'int64', minimum: 1 }),
            hidden: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64().min(0n),
              )
              .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
          })
          .openapi({ required: ['current', 'hidden'] }),
        permissions: z
          .object({
            'max-default': z
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
                description:
                  'Maximum default permissions (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-permissions))',
              }),
            'max-custom': z
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
                description:
                  'Maximum custom permissions (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-permissions))',
              }),
            default: z
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
                description:
                  'Server default permissions (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-permissions))',
              }),
          })
          .openapi({ required: ['max-default', 'max-custom', 'default'] }),
      })
      .openapi({
        required: [
          'attachments',
          'call',
          'chat',
          'conversations',
          'federation',
          'matrix',
          'previews',
          'signaling',
          'experiments',
          'feature-hints',
          'permissions',
        ],
      }),
    'config-local': z
      .record(z.string(), z.array(z.string()))
      .openapi({
        description:
          'Map of config keys that are only available locally (not for federated conversations)',
      }),
    version: z.string().openapi({ description: 'Version of the Talk app' }),
  })
  .openapi({ required: ['features', 'features-local', 'config', 'config-local', 'version'] })
  .openapi('Capabilities')

const ChatMentionSuggestionSchema = z
  .object({
    id: z.string().openapi({ description: 'The actor id of the suggestion' }),
    label: z.string().openapi({ description: 'The display name of the suggestion' }),
    source: z
      .string()
      .openapi({ description: 'The source of the suggestion (e.g. `users`, `groups`, `calls`)' }),
    mentionId: z.string().openapi({ description: 'The mention id to use for the mention' }),
    details: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional details of the suggestion (e.g. group description)' }),
    status: z.string().exactOptional().openapi({ description: 'User status of the suggestion' }),
    statusClearAt: z
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
        description: 'UNIX timestamp when the user status will be cleared',
      }),
    statusIcon: z.string().nullable().exactOptional().openapi({ description: 'User status icon' }),
    statusMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'User status message' }),
  })
  .openapi({ required: ['id', 'label', 'source', 'mentionId'] })
  .openapi('ChatMentionSuggestion')

const ChatMessageMetaDataSchema = z
  .object({
    pinnedActorType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Actor type of the attendee that pinned the message - Required capability: `pinned-messages`',
      }),
    pinnedActorId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Actor ID of the attendee that pinned the message - Required capability: `pinned-messages`',
      }),
    pinnedActorDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display name of the attendee that pinned the message - Required capability: `pinned-messages`',
      }),
    pinnedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Timestamp when the message was pinned - Required capability: `pinned-messages`',
      }),
    pinnedUntil: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Timestamp until when the message is pinned. If missing the message is pinned infinitely - Required capability: `pinned-messages`',
      }),
    threadId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Set when a thread is created with this message. If missing, no thread creation is associated with this message',
      }),
    threadTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set when a thread is created with this message. If missing, no thread creation is associated with this message',
      }),
    replyToMessageId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Set only when a message in a convo is private replied on a 1-1 room. Represents the parent message id',
      }),
    replyToConversationToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Set only when a message in a convo is private replied on a 1-1 room. Represents the parent message's group conversation token.",
      }),
    replyToConversationName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Set only when a message in a convo is private replied on a 1-1 room. Represents the parent message's group conversation name",
      }),
    replyToActorDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Set only when a message in a convo is private replied on a 1-1 room. Represents the parent message's actor display name",
      }),
  })
  .openapi({ required: [] })
  .openapi('ChatMessageMetaData')

const ChatMessageSchema = BaseMessageSchema.and(
  z
    .object({
      deleted: z
        .literal(true)
        .exactOptional()
        .openapi({ description: 'Set to `true` when the message was deleted' }),
      id: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64', description: 'ID of the comment' }),
      isReplyable: z
        .boolean()
        .openapi({
          description:
            'True if the user can post a reply to this message (only available with `chat-replies` capability)',
        }),
      markdown: z
        .boolean()
        .openapi({
          description: 'Whether the message should be rendered as markdown or shown as plain text',
        }),
      reactions: z
        .record(
          z.string(),
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
        .openapi({
          description:
            'An array map with relation between reaction emoji and total count of reactions with this emoji',
        }),
      reactionsSelf: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description: 'When the user reacted this is the list of emojis the user reacted with',
        }),
      referenceId: z
        .string()
        .openapi({
          description:
            'A reference string that was given while posting the message to be able to identify a sent message again (only available with `chat-reference-id` capability). For grouped file uploads support, expected format is `{sha256(uploadId)}-{order}`, matching /^[a-f0-9]{60}-[0-9]{3}$/',
        }),
      timestamp: z
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
          description: 'Timestamp in seconds and UTC time zone',
        }),
      token: z.string().openapi({ description: 'Conversation token' }),
      lastEditActorDisplayName: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Display name of the last editing author (only available with `edit-messages` capability and when the message was actually edited)',
        }),
      lastEditActorId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Actor id of the last editing author (only available with `edit-messages` capability and when the message was actually edited)',
        }),
      lastEditActorType: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Actor type of the last editing author - See [Constants - Actor types of chat messages](https://nextcloud-talk.readthedocs.io/en/latest/constants#actor-types-of-chat-messages) (only available with `edit-messages` capability and when the message was actually edited)',
        }),
      lastEditTimestamp: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .exactOptional()
        .openapi({
          type: 'integer',
          format: 'int64',
          description:
            'Unix time stamp when the message was last edited (only available with `edit-messages` capability and when the message was actually edited)',
        }),
      silent: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether the message was sent silently (only available with `silent-send-state` capability)',
        }),
      threadId: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .exactOptional()
        .openapi({
          type: 'integer',
          format: 'int64',
          description: 'Thread ID if this message is part of a thread',
        }),
      isThread: z
        .boolean()
        .exactOptional()
        .openapi({ description: 'Whether this message is the root of a thread' }),
      threadTitle: z
        .string()
        .exactOptional()
        .openapi({ description: 'Title of the thread if this message is the root of a thread' }),
      threadReplies: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .exactOptional()
        .openapi({
          type: 'integer',
          format: 'int64',
          description: 'Number of replies in the thread if this message is the root of a thread',
        }),
      metaData: ChatMessageMetaDataSchema.exactOptional().openapi({
        description: 'Additional metadata of the message',
      }),
    })
    .openapi({
      required: ['id', 'isReplyable', 'markdown', 'reactions', 'referenceId', 'timestamp', 'token'],
    }),
).openapi('ChatMessage')

const DeletedChatMessageSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'ID of the parent comment' }),
    deleted: z.literal(true).openapi({ description: '`true` when the parent is deleted' }),
  })
  .openapi({ required: ['id', 'deleted'] })
  .openapi('DeletedChatMessage')

const ChatMessageWithParentSchema = ChatMessageSchema.and(
  z
    .object({ parent: z.union([ChatMessageSchema, DeletedChatMessageSchema]).exactOptional() })
    .openapi({ required: [] }),
).openapi('ChatMessageWithParent')

const ChatProxyMessageSchema = BaseMessageSchema.openapi('ChatProxyMessage')

const ChatReminderSchema = z
  .object({
    messageId: z
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
        description: 'ID of the message the reminder is for',
      }),
    timestamp: z
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
        description: 'UNIX timestamp when the reminder should trigger',
      }),
    token: z.string().openapi({ description: 'Conversation token' }),
    userId: z.string().openapi({ description: 'User id of the user that set the reminder' }),
  })
  .openapi({ required: ['messageId', 'timestamp', 'token', 'userId'] })
  .openapi('ChatReminder')

const ChatReminderUpcomingSchema = z
  .object({
    actorDisplayName: z.string().openapi({ description: 'Display name of the message author' }),
    actorId: z.string().openapi({ description: 'Actor id of the message author' }),
    actorType: z.string().openapi({ description: 'Actor type of the message author' }),
    message: z.string().openapi({ description: 'Message string with placeholders' }),
    messageId: z
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
        description: 'ID of the message the reminder is for',
      }),
    messageParameters: z
      .record(z.string(), RichObjectParameterSchema)
      .openapi({
        description:
          'Message parameters for `message` (see [Rich Object String](https://github.com/nextcloud/server/issues/1706))',
      }),
    reminderTimestamp: z
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
        description: 'UNIX timestamp when the reminder should trigger',
      }),
    roomToken: z.string().openapi({ description: 'Conversation token' }),
  })
  .openapi({
    required: [
      'actorDisplayName',
      'actorId',
      'actorType',
      'message',
      'messageId',
      'messageParameters',
      'reminderTimestamp',
      'roomToken',
    ],
  })
  .openapi('ChatReminderUpcoming')

const ConversationPresetSchema = z
  .object({
    identifier: z
      .string()
      .openapi({
        description:
          'Identifier of the preset, currently known: default, forced, webinar, presentation, hallway',
      }),
    name: z.string().openapi({ description: "Translated name of the preset in user's language" }),
    description: z
      .string()
      .openapi({ description: "Translated description of the preset in user's language" }),
    parameters: z
      .record(
        z.string(),
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
      .openapi({ description: 'List of parameters that should be set' }),
  })
  .openapi({ required: ['identifier', 'name', 'description', 'parameters'] })
  .openapi('ConversationPreset')

const ConversationTagSchema = z
  .object({
    id: z.string().openapi({ description: 'SnowflakeID' }),
    name: z.string().openapi({ description: 'Display name' }),
    sortOrder: z
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
        description: 'Sort order from 0 (top) to higher (bottom)',
      }),
    collapsed: z
      .boolean()
      .openapi({ description: 'Whether the tag list should be open or collapsed' }),
    type: z
      .enum(['custom', 'favorites', 'other'])
      .openapi({
        description: 'favorites and other are special tags and have a fixed sorting position',
      }),
  })
  .openapi({ required: ['id', 'name', 'sortOrder', 'collapsed', 'type'] })
  .openapi('ConversationTag')

const DashboardEventCalendarSchema = z
  .object({
    principalUri: z.string().openapi({ description: 'Principal URI of the calendar owner' }),
    calendarName: z.string().openapi({ description: 'Name of the calendar' }),
    calendarColor: z.string().nullable().openapi({ description: 'Color of the calendar' }),
  })
  .openapi({ required: ['principalUri', 'calendarName', 'calendarColor'] })
  .openapi('DashboardEventCalendar')

const DashboardEventAttachmentSchema = z
  .object({
    calendars: z
      .array(z.string())
      .min(1)
      .openapi({ description: 'List of calendar principal URIs this attachment belongs to' }),
    fmttype: z.string().openapi({ description: 'MIME type of the attachment' }),
    filename: z.string().openapi({ description: 'File name of the attachment' }),
    fileid: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'File id of the attachment' }),
    preview: z
      .boolean()
      .openapi({ description: 'Whether a preview is available for the attachment' }),
    previewLink: z
      .string()
      .nullable()
      .openapi({ description: 'Link to the preview of the attachment' }),
  })
  .openapi({ required: ['calendars', 'fmttype', 'filename', 'fileid', 'preview', 'previewLink'] })
  .openapi('DashboardEventAttachment')

const DashboardEventSchema = z
  .object({
    calendars: z
      .array(DashboardEventCalendarSchema)
      .min(1)
      .openapi({ description: 'List of calendars this event belongs to' }),
    eventName: z.string().openapi({ description: 'Name of the event' }),
    eventDescription: z.string().nullable().openapi({ description: 'Description of the event' }),
    eventAttachments: z
      .record(z.string(), DashboardEventAttachmentSchema)
      .openapi({ description: 'Attachments of the event' }),
    eventLink: z.string().openapi({ description: 'Link to the event' }),
    start: z
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
        description: 'UNIX timestamp of the event start',
      }),
    end: z
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
        description: 'UNIX timestamp of the event end',
      }),
    roomToken: z.string().openapi({ description: 'Conversation token' }),
    roomAvatarVersion: z
      .string()
      .openapi({ description: 'Version of conversation avatar for caching' }),
    roomName: z.string().openapi({ description: 'Name of the conversation' }),
    roomDisplayName: z.string().openapi({ description: 'Display name of the conversation' }),
    roomType: z
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
        description:
          'Type of the conversation (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#conversation-types))',
      }),
    roomActiveSince: z
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
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'UNIX timestamp since when a call is active, or null if no call',
      }),
    invited: z
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
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of invited attendees',
      }),
    accepted: z
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
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of accepted attendees',
      }),
    tentative: z
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
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of tentative attendees',
      }),
    declined: z
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
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description: 'Number of declined attendees',
      }),
  })
  .openapi({
    required: [
      'calendars',
      'eventName',
      'eventDescription',
      'eventAttachments',
      'eventLink',
      'start',
      'end',
      'roomToken',
      'roomAvatarVersion',
      'roomName',
      'roomDisplayName',
      'roomType',
      'roomActiveSince',
      'invited',
      'accepted',
      'tentative',
      'declined',
    ],
  })
  .openapi('DashboardEvent')

const FederationInviteSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Identifier of the invitation' }),
    state: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'State of the invitation' }),
    localCloudId: z.string().openapi({ description: 'Cloud ID of the local user' }),
    localToken: z.string().openapi({ description: 'Token of the local conversation' }),
    remoteAttendeeId: z
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
        description: 'Attendee ID on the remote server',
      }),
    remoteServerUrl: z.string().openapi({ description: 'URL of the remote server' }),
    remoteToken: z.string().openapi({ description: 'Token on the remote server' }),
    roomName: z.string().openapi({ description: 'Name of the conversation on the remote server' }),
    userId: z.string().openapi({ description: 'User id of the invited user' }),
    inviterCloudId: z.string().openapi({ description: 'Cloud ID of the inviter' }),
    inviterDisplayName: z.string().openapi({ description: 'Display name of the inviter' }),
  })
  .openapi({
    required: [
      'id',
      'state',
      'localCloudId',
      'localToken',
      'remoteAttendeeId',
      'remoteServerUrl',
      'remoteToken',
      'roomName',
      'userId',
      'inviterCloudId',
      'inviterDisplayName',
    ],
  })
  .openapi('FederationInvite')

const InvitationListSchema = z
  .object({
    users: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of user ids that could not be invited' }),
    federated_users: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of federated user ids that could not be invited' }),
    groups: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of group ids that could not be invited' }),
    emails: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of email addresses that could not be invited' }),
    phones: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of phone numbers that could not be invited' }),
    teams: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of team ids that could not be invited' }),
  })
  .openapi({ required: [] })
  .openapi('InvitationList')

const LiveTranscriptionLanguageSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the language' }),
    metadata: z
      .object({
        separator: z.string().openapi({ description: 'Word separator character' }),
        rtl: z.boolean().openapi({ description: 'Whether the language is right-to-left' }),
      })
      .openapi({ description: 'Metadata of the language', required: ['separator', 'rtl'] }),
  })
  .openapi({ required: ['name', 'metadata'] })
  .openapi('LiveTranscriptionLanguage')

const MatrixAccountSchema = z
  .object({
    id: z.string().openapi({ description: 'SnowflakeID' }),
    homeserverId: z.string().openapi({ description: 'SnowflakeID of the homeserver' }),
    mxid: z.string().openapi({ description: 'Full Matrix user id, e.g. `@alice:example.org`' }),
    deviceId: z.string().openapi({ description: 'Matrix device id of Talk' }),
    status: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.union([z.literal(0n), z.literal(1n)]),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        enum: [0, 1],
        description:
          '0 = active, 1 = the homeserver rejected the access token and the user has to log in again',
      }),
    lastError: z
      .string()
      .nullable()
      .openapi({
        description:
          'Error reported by the homeserver when it rejected the access token or the last sync failed',
      }),
    lastSync: z
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
        description: 'Unix timestamp of the last sync, `0` if it never synced',
      }),
    verified: z
      .boolean()
      .nullable()
      .openapi({
        description:
          'Whether another device cross-signed the device of the server, null when encryption is not available on the server',
      }),
  })
  .openapi({
    required: [
      'id',
      'homeserverId',
      'mxid',
      'deviceId',
      'status',
      'lastError',
      'lastSync',
      'verified',
    ],
  })
  .openapi('MatrixAccount')

const MatrixHomeserverSchema = z
  .object({
    id: z.string().openapi({ description: 'SnowflakeID' }),
    name: z.string(),
    serverName: z.string(),
    baseUrl: z.string(),
    enabled: z.boolean(),
    specVersions: z.array(z.string()),
  })
  .openapi({ required: ['id', 'name', 'serverName', 'baseUrl', 'enabled', 'specVersions'] })
  .openapi('MatrixHomeserver')

const MatrixVerificationSchema = z
  .object({
    state: z
      .string()
      .openapi({
        description:
          'One of `requested`, `ready`, `started`, `accepted`, `keys_exchanged`, `mac_sent`, `done` and `cancelled`',
      }),
    emoji: z
      .array(
        z.object({ emoji: z.string(), name: z.string() }).openapi({ required: ['emoji', 'name'] }),
      )
      .openapi({
        description: 'Emoji to compare with the other device, once the keys were exchanged',
      }),
    reason: z.string().nullable().openapi({ description: 'Why the verification was cancelled' }),
  })
  .openapi({ required: ['state', 'emoji', 'reason'] })
  .openapi('MatrixVerification')

const MatterbridgeConfigFieldsSchema = z
  .array(z.record(z.string(), z.object({})))
  .openapi('MatterbridgeConfigFields')

const MatterbridgeSchema = z
  .object({
    enabled: z.boolean().openapi({ description: 'Whether the bridge is enabled' }),
    parts: MatterbridgeConfigFieldsSchema.openapi({ description: 'Bridge configuration parts' }),
    pid: z
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
        description: 'Process ID of the Matterbridge process',
      }),
  })
  .openapi({ required: ['enabled', 'parts', 'pid'] })
  .openapi('Matterbridge')

const MatterbridgeProcessStateSchema = z
  .object({
    log: z.string().openapi({ description: 'Log output of the Matterbridge process' }),
    running: z.boolean().openapi({ description: 'Whether the Matterbridge process is running' }),
  })
  .openapi({ required: ['log', 'running'] })
  .openapi('MatterbridgeProcessState')

const MatterbridgeWithProcessStateSchema = MatterbridgeSchema.and(
  MatterbridgeProcessStateSchema,
).openapi('MatterbridgeWithProcessState')

const OCSMetaSchema = z
  .object({
    status: z.string(),
    statuscode: z.int(),
    message: z.string().exactOptional(),
    totalitems: z.string().exactOptional(),
    itemsperpage: z.string().exactOptional(),
  })
  .openapi({ required: ['status', 'statuscode'] })
  .openapi('OCSMeta')

const ParticipantSchema = z
  .object({
    actorId: z.string().openapi({ description: 'The unique identifier for the given actor type' }),
    invitedActorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The cloud id of the invited user' }),
    actorType: z
      .string()
      .openapi({
        description:
          'Currently known `users|guests|emails|groups|circles` (see [Constants - Attendee types](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-types))',
      }),
    attendeeId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unique attendee id' }),
    attendeePermissions: z
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
        description:
          'Dedicated permissions for the current participant, if not `Custom` this are not the resulting permissions (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-permissions))',
      }),
    attendeePin: z
      .string()
      .openapi({
        description:
          'Unique dial-in authentication code for this user, when the conversation has SIP enabled (see `sipEnabled` attribute)',
      }),
    displayName: z.string().openapi({ description: 'Can be empty for guests' }),
    inCall: z
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
        description:
          'Call flags the user joined with (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#participant-in-call-flag))',
      }),
    lastPing: z
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
        description: 'Timestamp of the last ping of the user (should be used for sorting)',
      }),
    participantType: z
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
        description:
          'Permissions level of the participant (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#participant-types))',
      }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Combined final permissions for the participant, permissions are picked in order of attendee then call then default and the first which is `Custom` will apply (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-permissions))',
      }),
    roomToken: z
      .string()
      .openapi({ description: 'Only available with `breakout-rooms-v1` capability' }),
    sessionIds: z
      .array(z.string())
      .openapi({
        description:
          'Array of session ids, each are up to 512 character long strings, or empty if no session',
      }),
    actorAvatarVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Version of the actor's avatar, only for users. Passing it to the avatar endpoint allows a much longer cache lifetime",
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only available with `includeStatus=true`, for users with a set status and when there are less than 100 participants in the conversation',
      }),
    statusClearAt: z
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
          'Only available with `includeStatus=true`, for users with a set status and when there are less than 100 participants in the conversation',
      }),
    statusIcon: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Only available with `includeStatus=true`, for users with a set status and when there are less than 100 participants in the conversation',
      }),
    statusMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Only available with `includeStatus=true`, for users with a set status and when there are less than 100 participants in the conversation',
      }),
    phoneNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Only available with `sip-support-dialout` capability and only filled for moderators that are allowed to configure SIP for conversations',
      }),
    callId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Only available with `sip-support-dialout` capability and only filled for moderators that are allowed to configure SIP for conversations',
      }),
  })
  .openapi({
    required: [
      'actorId',
      'actorType',
      'attendeeId',
      'attendeePermissions',
      'attendeePin',
      'displayName',
      'inCall',
      'lastPing',
      'participantType',
      'permissions',
      'roomToken',
      'sessionIds',
    ],
  })
  .openapi('Participant')

const PollDraftSchema = z
  .object({
    actorDisplayName: z.string().openapi({ description: 'Display name of the poll author' }),
    actorId: z.string().min(1).openapi({ description: 'Actor ID identifying the poll author' }),
    actorType: ActorTypesSchema.openapi({
      description:
        'Actor type of the poll author (see [Constants - Attendee types](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-types))',
    }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 1, description: 'ID of the poll' }),
    maxVotes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'Maximum amount of options a user can vote for, `0` means unlimited',
      }),
    options: z.array(z.string()).openapi({ description: 'The options participants can vote for' }),
    question: z.string().min(1).openapi({ description: 'The question of the poll' }),
    resultMode: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.union([z.literal(0n), z.literal(1n)]),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        enum: [0, 1],
        description:
          'Result mode of the poll (see [Constants - Poll mode](https://nextcloud-talk.readthedocs.io/en/latest/constants#poll-mode))',
      }),
    status: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.union([z.literal(0n), z.literal(1n), z.literal(2n)]),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        enum: [0, 1, 2],
        description:
          'Status of the poll (see [Constants - Poll status](https://nextcloud-talk.readthedocs.io/en/latest/constants#poll-status))',
      }),
  })
  .openapi({
    required: [
      'actorDisplayName',
      'actorId',
      'actorType',
      'id',
      'maxVotes',
      'options',
      'question',
      'resultMode',
      'status',
    ],
  })
  .openapi('PollDraft')

const PollVoteSchema = z
  .object({
    actorDisplayName: z
      .string()
      .openapi({ description: 'The display name of the participant that voted' }),
    actorId: z.string().openapi({ description: 'The actor id of the participant that voted' }),
    actorType: z
      .string()
      .openapi({
        description:
          'The actor type of the participant that voted (see [Constants - Attendee types](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-types))',
      }),
    optionId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'The option that was voted for' }),
  })
  .openapi({ required: ['actorDisplayName', 'actorId', 'actorType', 'optionId'] })
  .openapi('PollVote')

const PollSchema = PollDraftSchema.and(
  z
    .object({
      details: z
        .array(PollVoteSchema)
        .exactOptional()
        .openapi({
          description:
            'Detailed list who voted for which option (only available for public closed polls)',
        }),
      numVoters: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64().min(0n),
        )
        .exactOptional()
        .openapi({
          type: 'integer',
          format: 'int64',
          minimum: 0,
          description:
            'The number of unique voters that voted (only available when the actor voted on public poll or the poll is closed unless for the creator and moderators)',
        }),
      votedSelf: z
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
        .exactOptional()
        .openapi({ description: 'Array of option ids the participant voted for' }),
      votes: z
        .record(
          z.string(),
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
        .exactOptional()
        .openapi({
          description:
            "Map with `'option-' + optionId` => number of votes (only available when the actor voted on public poll or the poll is closed)",
        }),
    })
    .openapi({ required: [] }),
).openapi('Poll')

const PublicCapabilitiesSchema = z
  .object({ spreed: CapabilitiesSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PublicCapabilities')

const ReactionSchema = z
  .object({
    actorDisplayName: z.string().openapi({ description: 'Display name of the reaction author' }),
    actorId: z.string().openapi({ description: 'Actor id of the reacting participant' }),
    actorType: z.string().openapi({ description: '`guests` or `users`' }),
    timestamp: z
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
        description: 'Timestamp in seconds and UTC time zone',
      }),
  })
  .openapi({ required: ['actorDisplayName', 'actorId', 'actorType', 'timestamp'] })
  .openapi('Reaction')

const RoomLastMessageSchema = z
  .union([ChatMessageSchema, BaseMessageSchema])
  .openapi('RoomLastMessage')

const RoomSchema = z
  .object({
    actorId: z.string().openapi({ description: 'The unique identifier for the given actor type' }),
    invitedActorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The cloud id of the invited user' }),
    actorType: z
      .string()
      .openapi({
        description:
          'Actor type of the current user (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-types))',
      }),
    attendeeId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Unique attendee id' }),
    attendeePermissions: z
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
        description:
          'Dedicated permissions for the current participant, if not `Custom` this are not the resulting permissions (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-permissions))',
      }),
    attendeePin: z
      .string()
      .nullable()
      .openapi({
        description:
          'Unique dial-in authentication code for this user, when the conversation has SIP enabled (see `sipEnabled` attribute)',
      }),
    avatarVersion: z
      .string()
      .openapi({
        description:
          'Version of conversation avatar used to easier expiration of the avatar in case a moderator updates it, since the avatar endpoint should be cached for 24 hours. (only available with `avatar` capability)',
      }),
    breakoutRoomMode: z
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
        description:
          'Breakout room configuration mode (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#breakout-room-modes)) (only available with `breakout-rooms-v1` capability)',
      }),
    breakoutRoomStatus: z
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
        description:
          'Breakout room status (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#breakout-room-status)) (only available with `breakout-rooms-v1` capability)',
      }),
    callFlag: z
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
        description:
          'Combined flag of all participants in the current call (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#participant-in-call-flag), only available with `conversation-call-flags` capability)',
      }),
    callPermissions: z
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
        description:
          'Call permissions, if not `Custom` this are not the resulting permissions, if set they will reset after the end of the call (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-permissions))',
      }),
    callRecording: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.union([
          z.literal(0n),
          z.literal(1n),
          z.literal(2n),
          z.literal(3n),
          z.literal(4n),
          z.literal(5n),
        ]),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        enum: [0, 1, 2, 3, 4, 5],
        description:
          'Type of call recording (see [Constants - Call recording status](https://nextcloud-talk.readthedocs.io/en/latest/constants#call-recording-status)) (only available with `recording-v1` capability)',
      }),
    callStartTime: z
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
        description:
          'Timestamp when the call was started (only available with `recording-v1` capability)',
      }),
    canDeleteConversation: z
      .boolean()
      .openapi({
        description:
          'Flag if the user can delete the conversation for everyone (not possible without moderator permissions or in one-to-one conversations)',
      }),
    canEnableSIP: z
      .boolean()
      .openapi({
        description:
          'Whether the given user can enable SIP for this conversation. Note that when the token is not-numeric only, SIP can not be enabled even if the user is permitted and a moderator of the conversation',
      }),
    canLeaveConversation: z
      .boolean()
      .openapi({
        description:
          'Flag if the user can leave the conversation (not possible for the last user with moderator permissions)',
      }),
    canStartCall: z
      .boolean()
      .openapi({
        description:
          'Flag if the user can start a new call in this conversation (joining is always possible) (only available with `start-call-flag` capability)',
      }),
    defaultPermissions: z
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
        description:
          'Default permissions for new participants (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-permissions))',
      }),
    description: z
      .string()
      .openapi({
        description:
          'Description of the conversation (can also be empty) (only available with `room-description` capability)',
      }),
    displayName: z
      .string()
      .openapi({
        description: '`name` if non-empty, otherwise it falls back to a list of participants',
      }),
    hasCall: z.boolean().openapi({ description: 'Flag if the conversation has an active call' }),
    hasPassword: z.boolean().openapi({ description: 'Flag if the conversation has a password' }),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Identifier of the conversation' }),
    isCustomAvatar: z
      .boolean()
      .openapi({
        description:
          'Flag if the conversation has a custom avatar (only available with `avatar` capability)',
      }),
    isFavorite: z
      .boolean()
      .openapi({ description: 'Flag if the conversation is favorited by the user' }),
    lastActivity: z
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
        description:
          'Timestamp of the last activity in the conversation, in seconds and UTC time zone',
      }),
    lastCommonReadMessage: z
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
        description:
          'ID of the last message read by every user that has read privacy set to public in a room. When the user themself has it set to private the value is `0` (only available with `chat-read-status` capability)',
      }),
    lastMessage: RoomLastMessageSchema.exactOptional().openapi({
      description:
        'Last message in a conversation if available, otherwise empty. **Note:** Even when given the message will not contain the `parent` or `reactionsSelf` attribute due to performance reasons',
    }),
    lastPing: z
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
        description: "Timestamp of the user's session making the request",
      }),
    lastReadMessage: z
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
        description:
          'ID of the last read message in a room (only available with `chat-read-marker` capability)',
      }),
    listable: z
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
        description:
          'Listable scope for the room (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#listable-scope)) (only available with `listable-rooms` capability)',
      }),
    liveTranscriptionLanguageId: z
      .string()
      .openapi({ description: 'ID of the language to use for live transcriptions in the room,' }),
    lobbyState: z
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
        description:
          'Webinar lobby restriction (0-1), if the participant is a moderator they can always join the conversation (only available with `webinary-lobby` capability) (See [Webinar lobby states](https://nextcloud-talk.readthedocs.io/en/latest/constants#webinar-lobby-states))',
      }),
    lobbyTimer: z
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
        description:
          'Timestamp when the lobby will be automatically disabled (only available with `webinary-lobby` capability)',
      }),
    mentionPermissions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.union([z.literal(0n), z.literal(1n)]),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        enum: [0, 1],
        description:
          'Whether all participants can mention using `@all` or only moderators (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#mention-permissions)) (only available with `mention-permissions` capability)',
      }),
    messageExpiration: z
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
        description:
          'The message expiration time in seconds in this chat. Zero if disabled. (only available with `message-expiration` capability)',
      }),
    name: z.string().openapi({ description: 'Name of the conversation (can also be empty)' }),
    notificationCalls: z
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
        description:
          'The call notification level for the user (see [Participant call notification levels](https://nextcloud-talk.readthedocs.io/en/latest/constants#participant-call-notification-levels))',
      }),
    notificationLevel: z
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
        description:
          'The notification level for the user (See [Participant notification levels](https://nextcloud-talk.readthedocs.io/en/latest/constants#participant-notification-levels))',
      }),
    objectId: z
      .string()
      .openapi({
        description:
          'See [Object types](https://nextcloud-talk.readthedocs.io/en/latest/constants#object-types) documentation for explanation',
      }),
    objectType: z
      .string()
      .openapi({
        description:
          'The type of object that the conversation is associated with (See [Object types](https://nextcloud-talk.readthedocs.io/en/latest/constants#object-types))',
      }),
    participantFlags: z
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
        description:
          '"In call" flags of the user\'s session making the request (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#participant-in-call-flag)) (only available with `in-call-flags` capability)',
      }),
    participantType: z
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
        description:
          'Permissions level of the current user (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#participant-types))',
      }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Combined final permissions for the current participant, permissions are picked in order of attendee then call then default and the first which is `Custom` will apply (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-permissions))',
      }),
    readOnly: z
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
        description:
          'Read-only state for the current user (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#read-only-states)) (only available with `read-only-rooms` capability)',
      }),
    recordingConsent: z
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
        description:
          'Whether recording consent is required before joining a call (Only 0 and 1 will be returned, see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#recording-consent-required)) (only available with `recording-consent` capability)',
      }),
    remoteServer: z.string().exactOptional(),
    remoteToken: z.string().exactOptional(),
    sessionId: z
      .string()
      .openapi({
        description:
          "`'0'` if not connected, otherwise an up to 512 character long string that is the identifier of the user's session making the request. Should only be used to pre-check if the user joined already with this session, but this might be outdated by the time of usage, so better check via [Get list of participants in a conversation](https://nextcloud-talk.readthedocs.io/en/latest/participant/#get-list-of-participants-in-a-conversation)",
      }),
    sipEnabled: z
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
        description:
          'SIP enable status (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#sip-states))',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only available for one-to-one conversations, when `includeStatus=true` is set and the user has a status',
      }),
    statusClearAt: z
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
          'Only available for one-to-one conversations, when `includeStatus=true` is set and the user has a status, can still be null even with a status',
      }),
    statusIcon: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Only available for one-to-one conversations, when `includeStatus=true` is set and the user has a status, can still be null even with a status',
      }),
    statusMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Only available for one-to-one conversations, when `includeStatus=true` is set and the user has a status, can still be null even with a status',
      }),
    token: z
      .string()
      .openapi({
        description: 'Token identifier of the conversation which is used for further interaction',
      }),
    type: z
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
        description:
          'See list of conversation types in the [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants/#conversation-types)',
      }),
    unreadMention: z
      .boolean()
      .openapi({ description: 'Flag if the user was mentioned since their last visit' }),
    unreadMentionDirect: z
      .boolean()
      .openapi({
        description:
          'Flag if the user was mentioned directly (ignoring `@all` mentions) since their last visit (only available with `direct-mention-flag` capability)',
      }),
    unreadMessages: z
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
        description:
          'Number of unread chat messages in the conversation (only available with `chat-v2` capability)',
      }),
    isArchived: z
      .boolean()
      .openapi({
        description:
          'Flag if the conversation is archived by the user (only available with `archived-conversations-v2` capability)',
      }),
    isImportant: z
      .boolean()
      .openapi({ description: 'Required capability: `important-conversations`' }),
    isSensitive: z
      .boolean()
      .openapi({ description: 'Required capability: `sensitive-conversations`' }),
    tagIds: z
      .array(z.string())
      .openapi({
        description:
          'IDs of the custom tags this conversation is marked with (only available with `conversation-tags` capability)',
      }),
    lastPinnedId: z
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
        description: 'Required capability: `pinned-messages`',
      }),
    hiddenPinnedId: z
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
        description: 'Required capability: `pinned-messages`',
      }),
    hasScheduledMessages: z
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
        description: 'Required capability: `scheduled-messages` (local)',
      }),
    attributes: z
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
        description:
          'Bit-flag of enabled attributes of this conversation (only available with capability: `conversation-attributes`). See [attributes list](https://nextcloud-talk.readthedocs.io/en/latest/constants/#conversation-attributes) for details',
      }),
  })
  .openapi({
    required: [
      'actorId',
      'actorType',
      'attendeeId',
      'attendeePermissions',
      'attendeePin',
      'avatarVersion',
      'breakoutRoomMode',
      'breakoutRoomStatus',
      'callFlag',
      'callPermissions',
      'callRecording',
      'callStartTime',
      'canDeleteConversation',
      'canEnableSIP',
      'canLeaveConversation',
      'canStartCall',
      'defaultPermissions',
      'description',
      'displayName',
      'hasCall',
      'hasPassword',
      'id',
      'isCustomAvatar',
      'isFavorite',
      'lastActivity',
      'lastCommonReadMessage',
      'lastPing',
      'lastReadMessage',
      'listable',
      'liveTranscriptionLanguageId',
      'lobbyState',
      'lobbyTimer',
      'mentionPermissions',
      'messageExpiration',
      'name',
      'notificationCalls',
      'notificationLevel',
      'objectId',
      'objectType',
      'participantFlags',
      'participantType',
      'permissions',
      'readOnly',
      'recordingConsent',
      'sessionId',
      'sipEnabled',
      'token',
      'type',
      'unreadMention',
      'unreadMentionDirect',
      'unreadMessages',
      'isArchived',
      'isImportant',
      'isSensitive',
      'tagIds',
      'lastPinnedId',
      'hiddenPinnedId',
      'hasScheduledMessages',
      'attributes',
    ],
  })
  .openapi('Room')

const RoomWithInvalidInvitationsSchema = RoomSchema.and(
  z
    .object({
      invalidParticipants: InvitationListSchema.openapi({
        description: 'List of participants that could not be invited grouped by source type',
      }),
    })
    .openapi({ required: ['invalidParticipants'] }),
).openapi('RoomWithInvalidInvitations')

const ScheduledMessageSchema = z
  .object({
    id: z.string().openapi({ description: 'SnowflakeID' }),
    actorId: z.string().openapi({ description: 'Actor id of the message author' }),
    actorType: z.string().openapi({ description: 'Actor type of the message author' }),
    threadId: z
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
        description: 'Thread ID if the scheduled message is for a thread',
      }),
    threadTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the thread if the scheduled message is for a thread' }),
    parent: ChatMessageSchema.exactOptional().openapi({
      description: 'Parent message if the scheduled message is a reply',
    }),
    message: z.string().openapi({ description: 'Message string with placeholders' }),
    messageType: z
      .string()
      .openapi({
        description:
          'Currently known types are `comment`, `comment_deleted`, `system` and `command`',
      }),
    createdAt: z
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
        description: 'UNIX timestamp when the scheduled message was created',
      }),
    sendAt: z
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
        description: 'UNIX timestamp when the message should be sent',
      }),
    silent: z
      .boolean()
      .openapi({
        description:
          'Whether the message should be sent silently without creating chat notifications',
      }),
    originalSendAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Set only if sending failed to persist the original timestamp and expose it',
      }),
  })
  .openapi({
    required: [
      'id',
      'actorId',
      'actorType',
      'threadId',
      'message',
      'messageType',
      'createdAt',
      'sendAt',
      'silent',
    ],
  })
  .openapi('ScheduledMessage')

const SignalingFederationSettingsSchema = z
  .object({
    server: z.string().openapi({ description: 'URL of the signaling server for federation' }),
    nextcloudServer: z
      .string()
      .openapi({ description: 'URL of the Nextcloud server for federation' }),
    helloAuthParams: z
      .object({ token: z.string() })
      .openapi({
        description: 'Authentication parameters for the hello request',
        required: ['token'],
      }),
    roomId: z.string().openapi({ description: 'Room id on the federated server' }),
  })
  .openapi({ required: ['server', 'nextcloudServer', 'helloAuthParams', 'roomId'] })
  .openapi('SignalingFederationSettings')

const SignalingSessionSchema = z
  .object({
    actorId: z.string().openapi({ description: 'The unique identifier for the given actor type' }),
    actorType: z
      .string()
      .openapi({
        description:
          'Actor type of the attendee (see [Constants - Attendee types](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-types))',
      }),
    inCall: z
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
        description:
          'Call flags the user joined with (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#participant-in-call-flag))',
      }),
    lastPing: z
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
        description: 'Timestamp of the last ping of the user',
      }),
    participantPermissions: z
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
        description:
          'Combined final permissions for the participant (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#attendee-permissions))',
      }),
    roomId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Identifier of the conversation' }),
    sessionId: z.string().openapi({ description: 'up to 512 character long string' }),
    userId: z.string().openapi({ description: 'User id of the participant (empty for guests)' }),
  })
  .openapi({
    required: [
      'actorId',
      'actorType',
      'inCall',
      'lastPing',
      'participantPermissions',
      'roomId',
      'sessionId',
      'userId',
    ],
  })
  .openapi('SignalingSession')

const SignalingSettingsSchema = z
  .object({
    federation: SignalingFederationSettingsSchema.nullable().openapi({
      description: 'Federation signaling settings, or null if not federated',
    }),
    helloAuthParams: z
      .object({
        '1.0': z
          .object({ userid: z.string().nullable(), ticket: z.string() })
          .openapi({ required: ['userid', 'ticket'] }),
        '2.0': z.object({ token: z.string() }).openapi({ required: ['token'] }),
      })
      .exactOptional()
      .openapi({
        description: 'Authentication parameters for the hello request',
        required: ['1.0', '2.0'],
      }),
    hideWarning: z
      .boolean()
      .openapi({ description: 'Whether the warning about the signaling server should be hidden' }),
    server: z.string().openapi({ description: 'URL of the signaling server' }),
    signalingMode: z
      .string()
      .openapi({
        description:
          'Signaling mode (see [constants list](https://nextcloud-talk.readthedocs.io/en/latest/constants#signaling-modes))',
      }),
    sipDialinInfo: z.string().openapi({ description: 'SIP dial-in information' }),
    stunservers: z
      .array(z.object({ urls: z.array(z.string()) }).openapi({ required: ['urls'] }))
      .openapi({ description: 'STUN servers' }),
    ticket: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authentication ticket for the signaling server' }),
    turnservers: z
      .array(
        z
          .object({ urls: z.array(z.string()), username: z.string(), credential: z.string() })
          .openapi({ required: ['urls', 'username', 'credential'] }),
      )
      .openapi({ description: 'TURN servers' }),
    userId: z.string().nullable().openapi({ description: 'User id of the current user' }),
  })
  .openapi({
    required: [
      'federation',
      'hideWarning',
      'server',
      'signalingMode',
      'sipDialinInfo',
      'stunservers',
      'turnservers',
      'userId',
    ],
  })
  .openapi('SignalingSettings')

const ThreadSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        description: 'Identifier of the thread',
      }),
    roomToken: z.string().openapi({ description: 'Conversation token' }),
    title: z.string().openapi({ description: 'Title of the thread' }),
    lastMessageId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'ID of the last message in the thread',
      }),
    lastActivity: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'UNIX timestamp of the last activity in the thread',
      }),
    numReplies: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'Number of replies in the thread',
      }),
  })
  .openapi({
    required: ['id', 'roomToken', 'title', 'lastMessageId', 'lastActivity', 'numReplies'],
  })
  .openapi('Thread')

const ThreadAttendeeSchema = z
  .object({
    notificationLevel: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.union([z.literal(0n), z.literal(1n), z.literal(2n), z.literal(3n)]),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        enum: [0, 1, 2, 3],
        description:
          'The notification level for the user in this thread (See [Participant notification levels](https://nextcloud-talk.readthedocs.io/en/latest/constants#participant-notification-levels))',
      }),
  })
  .openapi({ required: ['notificationLevel'] })
  .openapi('ThreadAttendee')

const ThreadInfoSchema = z
  .object({
    thread: ThreadSchema.openapi({ description: 'Thread details' }),
    attendee: ThreadAttendeeSchema.openapi({
      description: 'Attendee details for the current user in this thread',
    }),
    first: ChatMessageSchema.nullable().openapi({
      description: 'First message in the thread (root message)',
    }),
    last: ChatMessageSchema.nullable().openapi({ description: 'Last message in the thread' }),
  })
  .openapi({ required: ['thread', 'attendee', 'first', 'last'] })
  .openapi('ThreadInfo')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/avatar',
  tags: ['avatar'],
  summary: 'Get the avatar of a room',
  operationId: 'avatar-get-avatar',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      darkTheme: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'darkTheme',
            in: 'query',
            description: 'Theme used for background',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Room avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/avatar',
  tags: ['avatar'],
  summary: 'Upload an avatar for a room',
  operationId: 'avatar-upload-avatar',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Avatar uploaded successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Avatar invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/avatar',
  tags: ['avatar'],
  summary: 'Delete the avatar of a room',
  operationId: 'avatar-delete-avatar',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Avatar removed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarEmojiRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/avatar/emoji',
  tags: ['avatar'],
  summary: 'Set an emoji as avatar',
  operationId: 'avatar-emoji-avatar',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              emoji: z.string().openapi({ description: 'Emoji' }),
              color: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Color of the emoji' }),
            })
            .openapi({ required: ['emoji'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Avatar set successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Setting emoji avatar is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenAvatarDarkRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/avatar/dark',
  tags: ['avatar'],
  summary: 'Get the dark mode avatar of a room',
  operationId: 'avatar-get-avatar-dark',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Room avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMatrixAvatarSizeRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/matrix-avatar/{size}',
  tags: ['avatar'],
  summary:
    'Get the avatar of a Matrix user in a Matrix conversation, loaded with the Matrix account of the current user',
  operationId: 'avatar-get-matrix-user-avatar',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      size: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(64n), z.literal(512n)]),
        )
        .openapi({
          param: {
            name: 'size',
            in: 'path',
            description: 'Avatar size',
            required: true,
            schema: { type: 'integer', format: 'int64', enum: [64, 512] },
          },
        }),
    }),
    query: z.object({
      mxid: z
        .string()
        .openapi({
          param: {
            name: 'mxid',
            in: 'query',
            description: 'Matrix user id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      darkTheme: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'darkTheme',
            in: 'query',
            description: 'Theme used for the placeholder',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User avatar returned, or a placeholder when it is not available',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionBanTokenRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/ban/{token}',
  tags: ['ban'],
  summary: 'List the bans of a conversation',
  description: 'Required capability: `ban-v1`',
  operationId: 'ban-list-bans',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List all bans',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(BanSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionBanTokenRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/ban/{token}',
  tags: ['ban'],
  summary: 'Ban an actor or IP address',
  description: 'Required capability: `ban-v1`',
  operationId: 'ban-ban-actor',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              actorType: z
                .enum(['users', 'guests', 'emails', 'ip'])
                .openapi({
                  description:
                    'Type of actor to ban, or `ip` when banning a clients remote address',
                }),
              actorId: z
                .string()
                .openapi({
                  description: 'Actor ID or the IP address or range in case of type `ip`',
                }),
              internalNote: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Optional internal note (max. 4000 characters)' }),
            })
            .openapi({ required: ['actorType', 'actorId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Ban successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: BanSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Actor information is invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['bannedActor', 'internalNote', 'moderator', 'self', 'room']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionBanTokenBanIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/ban/{token}/{banId}',
  tags: ['ban'],
  summary: 'Unban an actor or IP address',
  description: 'Required capability: `ban-v1`',
  operationId: 'ban-unban-actor',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      banId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'banId',
            in: 'path',
            description: 'ID of the ban to be removed',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Unban successfully or not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionBotTokenRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bot/{token}',
  tags: ['bot'],
  summary: 'List bots',
  operationId: 'bot-list-bots',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Bot list returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(BotSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bot/{token}/{botId}',
  tags: ['bot'],
  summary: 'Enables a bot',
  operationId: 'bot-enable-bot',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      botId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            description: 'ID of the bot',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Bot already enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: BotSchema.nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    201: {
      description: 'Bot enabled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: BotSchema.nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Enabling bot errored, e.g. when the conversation is classified',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenBotIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bot/{token}/{botId}',
  tags: ['bot'],
  summary: 'Disables a bot',
  operationId: 'bot-disable-bot',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      botId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'botId',
            in: 'path',
            description: 'ID of the bot',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Bot disabled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: BotSchema.nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Disabling bot errored',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/breakout-rooms/{token}',
  tags: ['breakout_room'],
  summary: 'Configure the breakout rooms',
  operationId: 'breakout_room-configure-breakout-rooms',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mode: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n), z.literal(2n), z.literal(3n)]),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1, 2, 3],
                  description: 'Mode of the breakout rooms',
                }),
              amount: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n).max(20n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  maximum: 20,
                  description:
                    'Number of breakout rooms - Constants {@see BreakoutRoom::MINIMUM_ROOM_AMOUNT} and {@see BreakoutRoom::MAXIMUM_ROOM_AMOUNT}',
                }),
              attendeeMap: z
                .string()
                .default('[]')
                .exactOptional()
                .openapi({ description: 'Mapping of the attendees to breakout rooms' }),
            })
            .openapi({ required: ['mode', 'amount'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Breakout rooms configured successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(RoomSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Configuring breakout rooms errored, e.g. when the conversation is classified',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/breakout-rooms/{token}',
  tags: ['breakout_room'],
  summary: 'Remove the breakout rooms',
  operationId: 'breakout_room-remove-breakout-rooms',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Breakout rooms removed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/breakout-rooms/{token}/broadcast',
  tags: ['breakout_room'],
  summary: 'Broadcast a chat message to all breakout rooms',
  operationId: 'breakout_room-broadcast-chat-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'Message to broadcast' }) })
            .openapi({ required: ['message'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Chat message broadcasted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(RoomSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Broadcasting chat message is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    413: {
      description: 'Chat message too long',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/breakout-rooms/{token}/attendees',
  tags: ['breakout_room'],
  summary: 'Apply an attendee map to the breakout rooms',
  operationId: 'breakout_room-apply-attendee-map',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attendeeMap: z
                .string()
                .openapi({
                  description:
                    'JSON encoded mapping of the attendees to breakout rooms `array<int, int>`',
                }),
            })
            .openapi({ required: ['attendeeMap'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Attendee map applied successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(RoomSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Applying attendee map is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRoute =
  createRoute({
    method: 'post',
    path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/breakout-rooms/{token}/request-assistance',
    tags: ['breakout_room'],
    summary: 'Request assistance',
    operationId: 'breakout_room-request-assistance',
    request: {
      params: z.object({
        apiVersion: z
          .literal('v1')
          .default('v1')
          .openapi({
            param: {
              name: 'apiVersion',
              in: 'path',
              required: true,
              schema: { type: 'string', enum: ['v1'], default: 'v1' },
            },
          }),
        token: z
          .string()
          .regex(/^[a-z0-9]{4,30}$/)
          .openapi({
            param: {
              name: 'token',
              in: 'path',
              required: true,
              schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
            },
          }),
      }),
      headers: z.object({
        'OCS-APIRequest': z
          .stringbool()
          .default(true)
          .openapi({
            param: {
              name: 'OCS-APIRequest',
              in: 'header',
              description: 'Required to be true for the API request to pass',
              required: true,
              schema: { type: 'boolean', default: true },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Assistance requested successfully',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: RoomSchema })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      400: {
        description: 'Requesting assistance is not possible',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      401: {
        description: 'Current user is not logged in',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
    },
    security: [{ bearer_auth: [] }, { basic_auth: [] }],
  })

export const deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRoute =
  createRoute({
    method: 'delete',
    path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/breakout-rooms/{token}/request-assistance',
    tags: ['breakout_room'],
    summary: 'Reset the request for assistance',
    operationId: 'breakout_room-reset-request-for-assistance',
    request: {
      params: z.object({
        apiVersion: z
          .literal('v1')
          .default('v1')
          .openapi({
            param: {
              name: 'apiVersion',
              in: 'path',
              required: true,
              schema: { type: 'string', enum: ['v1'], default: 'v1' },
            },
          }),
        token: z
          .string()
          .regex(/^[a-z0-9]{4,30}$/)
          .openapi({
            param: {
              name: 'token',
              in: 'path',
              required: true,
              schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
            },
          }),
      }),
      headers: z.object({
        'OCS-APIRequest': z
          .stringbool()
          .default(true)
          .openapi({
            param: {
              name: 'OCS-APIRequest',
              in: 'header',
              description: 'Required to be true for the API request to pass',
              required: true,
              schema: { type: 'boolean', default: true },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Request for assistance reset successfully',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: RoomSchema })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      400: {
        description: 'Resetting the request for assistance is not possible',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      401: {
        description: 'Current user is not logged in',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
    },
    security: [{ bearer_auth: [] }, { basic_auth: [] }],
  })

export const postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/breakout-rooms/{token}/rooms',
  tags: ['breakout_room'],
  summary: 'Start the breakout rooms',
  operationId: 'breakout_room-start-breakout-rooms',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Breakout rooms started successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(RoomSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Starting breakout rooms is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/breakout-rooms/{token}/rooms',
  tags: ['breakout_room'],
  summary: 'Stop the breakout rooms',
  operationId: 'breakout_room-stop-breakout-rooms',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Breakout rooms stopped successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(RoomSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Stopping breakout rooms is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/breakout-rooms/{token}/switch',
  tags: ['breakout_room'],
  summary: 'Switch to another breakout room',
  operationId: 'breakout_room-switch-breakout-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ target: z.string().openapi({ description: 'Target breakout room' }) })
            .openapi({ required: ['target'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Switched to breakout room successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Switching to breakout room is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionDashboardEventsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/dashboard/events',
  tags: ['calendar_integration'],
  summary:
    'Get up to 10 rooms that have events in the next 7 days sorted by their start timestamp ascending',
  description: 'Required capability: `dashboard-event-rooms`',
  operationId: 'calendar_integration-get-dashboard-events',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of dashboard entries or an empty array',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(DashboardEventSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenMutualEventsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/mutual-events',
  tags: ['calendar_integration'],
  summary: 'Get up to 3 events in the next 7 days sorted by their start timestamp ascending',
  description: 'Required capability: `mutual-calendar-events`',
  operationId: 'calendar_integration-get-mutual-events',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of dashboard entries or an empty array',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(DashboardEventSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Room is not a 1 to 1 room, room is invalid, or user is not participant',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/call/{token}',
  tags: ['call'],
  summary: 'Get the peers for a call',
  operationId: 'call-get-peers-for-call',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of peers in the call returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(CallPeerSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/call/{token}',
  tags: ['call'],
  summary: 'Update the in-call flags',
  operationId: 'call-update-call-flags',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              flags: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n).max(15n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  maximum: 15,
                  description: 'New flags',
                }),
            })
            .openapi({ required: ['flags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'In-call flags updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating in-call flags is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Call session not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/call/{token}',
  tags: ['call'],
  summary: 'Join a call',
  operationId: 'call-join-call',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              flags: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n).max(15n),
                )
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  minimum: 0,
                  maximum: 15,
                  default: null,
                  description: 'In-Call flags',
                }),
              silent: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Join the call silently' }),
              recordingConsent: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'When the user ticked a checkbox and agreed with being recorded (Only needed when the `config => call => recording-consent` capability is set to {@see RecordingService::CONSENT_REQUIRED_YES} or the capability is {@see RecordingService::CONSENT_REQUIRED_OPTIONAL} and the conversation `recordingConsent` value is {@see RecordingService::CONSENT_REQUIRED_YES} )',
                }),
              silentFor: z
                .array(z.string())
                .default([])
                .exactOptional()
                .openapi({ description: 'Send no call notification for previous participants' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Call joined successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'No recording consent was given',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Host server of the federated conversation does not allow joining the call',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Call not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/call/{token}',
  tags: ['call'],
  summary: 'Leave a call',
  operationId: 'call-leave-call',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      all: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'all',
            in: 'query',
            description: 'whether to also terminate the call for all participants',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Call left successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Call session not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionCallTokenDownloadRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/call/{token}/download',
  tags: ['call'],
  summary: 'Download the list of current call participants',
  description: 'Required capability: `download-call-participants`',
  operationId: 'call-download-participants-for-call',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      format: z
        .literal('csv')
        .default('csv')
        .exactOptional()
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            description: 'Download format',
            schema: { type: 'string', default: 'csv', enum: ['csv'] },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of participants in the call downloaded in the requested format',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: { description: 'No call in progress' },
    403: {
      description:
        'Downloading the participants list is not allowed (e.g. classified conversation)',
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/call/{token}/federation',
  tags: ['call'],
  summary: 'Update the in-call flags on the host server using the session id of the federated user',
  operationId: 'call-update-federated-call-flags',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sessionId: z
                .string()
                .openapi({ description: 'Federated session id to update the flags with' }),
              flags: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n).max(15n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  maximum: 15,
                  description: 'New flags',
                }),
            })
            .openapi({ required: ['sessionId', 'flags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'In-call flags updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating in-call flags is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Call session not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/call/{token}/federation',
  tags: ['call'],
  summary: 'Join call on the host server using the session id of the federated user',
  operationId: 'call-join-federated-call',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sessionId: z.string().openapi({ description: 'Federated session id to join with' }),
              flags: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n).max(15n),
                )
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  minimum: 0,
                  maximum: 15,
                  default: null,
                  description: 'In-Call flags',
                }),
              silent: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Join the call silently' }),
              recordingConsent: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Agreement to be recorded' }),
            })
            .openapi({ required: ['sessionId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Call joined successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Conditions to join not met',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Call not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionCallTokenFederationRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/call/{token}/federation',
  tags: ['call'],
  summary: 'Leave a call on the host server using the session id of the federated user',
  operationId: 'call-leave-federated-call',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'query',
            description: 'Federated session id to leave with',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Call left successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Call session not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionCallTokenRingAttendeeIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/call/{token}/ring/{attendeeId}',
  tags: ['call'],
  summary: 'Ring an attendee',
  operationId: 'call-ring-attendee',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      attendeeId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'attendeeId',
            in: 'path',
            description: 'ID of the attendee to ring',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Attendee rang successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Ringing attendee is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Attendee could not be found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionCallTokenDialoutAttendeeIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/call/{token}/dialout/{attendeeId}',
  tags: ['call'],
  summary: 'Call a SIP dial-out attendee',
  operationId: 'call-sip-dial-out',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      attendeeId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'attendeeId',
            in: 'path',
            description: 'ID of the attendee to call',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Dial-out initiated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'SIP dial-out not possible, e.g. when the conversation is classified',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Participant could not be found or is a wrong type',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    501: {
      description: 'SIP dial-out is not configured on the server',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.string(), message: z.string().exactOptional() })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionCallTokenNotificationStateRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/call/{token}/notification-state',
  tags: ['call'],
  summary: 'Check the expected state of a call notification',
  description: 'Required capability: `call-notification-state-api`',
  operationId: 'call_notification-state',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Conversation token to check',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Notification should be kept alive',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    201: {
      description: 'Dismiss call notification and show "Missed call"-notification instead',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Not logged in, try again with auth data sent',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Dismiss call notification',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}',
  tags: ['chat'],
  summary: 'Receives chat messages from the given room',
  description:
    '- Receiving the history ($lookIntoFuture=0): The next $limit messages after $lastKnownMessageId will be returned. The new $lastKnownMessageId for the follow up query is available as `X-Chat-Last-Given` header.\n- Looking into the future ($lookIntoFuture=1): If there are currently no messages the response will not be sent immediately. Instead, HTTP connection will be kept open waiting for new messages to arrive and, when they do, then the response will be sent. The connection will not be kept open indefinitely, though; the number of seconds to wait for new messages to arrive can be set using the timeout parameter; the default timeout is 30 seconds, maximum timeout is 60 seconds. If the timeout ends a successful but empty response will be sent. If messages have been returned (status=200) the new $lastKnownMessageId for the follow up query is available as `X-Chat-Last-Given` header.\nThe limit specifies the maximum number of messages that will be returned, although the actual number of returned messages could be lower if some messages are not visible to the participant. Note that if none of the messages are visible to the participant the returned number of messages will be 0, yet the status will still be 200. Also note that `X-Chat-Last-Given` may reference a message not visible and thus not returned, but it should be used nevertheless as the $lastKnownMessageId for the follow-up query.',
  operationId: 'chat-receive-messages',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      lookIntoFuture: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(0n), z.literal(1n)]),
        )
        .openapi({
          param: {
            name: 'lookIntoFuture',
            in: 'query',
            description: 'Polling for new messages (1) or getting the history of the chat (0)',
            required: true,
            schema: { type: 'integer', format: 'int64', enum: [0, 1] },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(200n))
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Number of chat messages to receive (100 by default, 200 at most)',
            schema: { type: 'integer', format: 'int64', default: 100, minimum: 1, maximum: 200 },
            required: false,
          },
        }),
      lastKnownMessageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'lastKnownMessageId',
            in: 'query',
            description: 'The last known message (serves as offset)',
            schema: { type: 'integer', format: 'int64', default: 0, minimum: 0 },
            required: false,
          },
        }),
      lastCommonReadId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'lastCommonReadId',
            in: 'query',
            description:
              'The last known common read message (so the response is 200 instead of 304 when it changes even when there are no messages)',
            schema: { type: 'integer', format: 'int64', default: 0, minimum: 0 },
            required: false,
          },
        }),
      timeout: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(30n))
        .default(30n)
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Number of seconds to wait for new messages (30 by default, 30 at most)',
            schema: { type: 'integer', format: 'int64', default: 30, minimum: 0, maximum: 30 },
            required: false,
          },
        }),
      setReadMarker: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(0n), z.literal(1n)]),
        )
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            name: 'setReadMarker',
            in: 'query',
            description:
              'Automatically set the last read marker when 1, if your client does this itself via chat/{token}/read set to 0',
            schema: { type: 'integer', format: 'int64', default: 1, enum: [0, 1] },
            required: false,
          },
        }),
      includeLastKnown: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(0n), z.literal(1n)]),
        )
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeLastKnown',
            in: 'query',
            description: 'Include the $lastKnownMessageId in the messages when 1 (default 0)',
            schema: { type: 'integer', format: 'int64', default: 0, enum: [0, 1] },
            required: false,
          },
        }),
      noStatusUpdate: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(0n), z.literal(1n)]),
        )
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'noStatusUpdate',
            in: 'query',
            description:
              'When the user status should not be automatically set to online set to 1 (default 0)',
            schema: { type: 'integer', format: 'int64', default: 0, enum: [0, 1] },
            required: false,
          },
        }),
      markNotificationsAsRead: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(0n), z.literal(1n)]),
        )
        .default(1n)
        .exactOptional()
        .openapi({
          param: {
            name: 'markNotificationsAsRead',
            in: 'query',
            description: 'Set to 0 when notifications should not be marked as read (default 1)',
            schema: { type: 'integer', format: 'int64', default: 1, enum: [0, 1] },
            required: false,
          },
        }),
      threadId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'threadId',
            in: 'query',
            description: 'Limit the chat message list to a given thread',
            schema: { type: 'integer', format: 'int64', default: 0, minimum: 0 },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Messages returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ChatMessageWithParentSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Chat-Last-Given': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    304: { description: 'No messages' },
    404: {
      description: 'Thread not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('thread') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}',
  tags: ['chat'],
  summary: 'Sends a new chat message to the given room',
  description: 'The author and timestamp are automatically set to the current user/guest and time.',
  operationId: 'chat-send-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().openapi({ description: 'the message to send' }),
              actorDisplayName: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'for guests' }),
              referenceId: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'for the message to be able to later identify it again' }),
              replyTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .default(0n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  default: 0,
                  description: 'Parent id which this message is a reply to',
                }),
              replyToToken: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Parent token to which reply is initiated' }),
              silent: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'If sent silent the chat message will not create any notifications',
                }),
              threadTitle: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'Only supported when not replying, when given will create a thread (requires `threads` capability)',
                }),
              threadId: z
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
                  description:
                    'Thread id which this message is a reply to without quoting a specific message (ignored when $replyTo is given, also requires `threads` capability)',
                }),
            })
            .openapi({ required: ['message'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Message sent successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ChatMessageWithParentSchema.nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Sending message is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description:
        'When trying to cross reference wrongly on a reply-private, or the Matrix account of the user can not send to the Matrix room',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Actor not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    413: {
      description: 'Message too long',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    429: {
      description: 'Mention rate limit exceeded (guests only)',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected the message or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}',
  tags: ['chat'],
  summary: 'Clear the chat history',
  operationId: 'chat-clear-history',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'History cleared successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ChatMessageSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    202: {
      description:
        'History cleared successfully, but Federation or Matterbridge is configured, so the information can be replicated elsewhere',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ChatMessageSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Missing permissions to clear history',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/schedule',
  tags: ['chat'],
  summary: 'Get all scheduled messages of a given room and participant',
  description:
    'The author and timestamp are automatically set to the current user and time.\nRequired capability: `scheduled-messages`',
  operationId: 'chat-get-scheduled-messages',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All scheduled messages for this room and participant',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ScheduledMessageSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Actor not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('actor') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/schedule',
  tags: ['chat'],
  summary: 'Schedules the sending of a new chat message to the given room',
  description:
    'The author and timestamp are automatically set to the current user and time.\nRequired capability: `scheduled-messages`',
  operationId: 'chat-schedule-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().openapi({ description: 'The message to send' }),
              sendAt: z
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
                  description: 'When to send the scheduled message',
                }),
              replyTo: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .default(0n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  default: 0,
                  description: 'Parent id which this scheduled message is a reply to',
                }),
              silent: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If sent silent the scheduled message will not create any notifications when sent',
                }),
              threadTitle: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'Only supported when not replying, when given will create a thread (requires `threads` capability)',
                }),
              threadId: z
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
                  description:
                    'Thread id without quoting a specific message (requires `threads` capability)',
                }),
            })
            .openapi({ required: ['message', 'sendAt'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Message scheduled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ScheduledMessageSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Scheduling the message is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['message', 'reply-to', 'send-at']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'When trying to cross reference wrongly on a reply-private',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('reply-to') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Actor not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('actor') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    413: {
      description: 'Message too long',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('message') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/schedule/{messageId}',
  tags: ['chat'],
  summary: 'Update a scheduled message',
  description: 'Required capability: `scheduled-messages`',
  operationId: 'chat-edit-scheduled-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'The scheduled message id',
            required: true,
            schema: { type: 'string', pattern: '^[0-9]+$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().openapi({ description: 'The scheduled message to send' }),
              sendAt: z
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
                  description: 'When to send the scheduled message',
                }),
              silent: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If sent silent the scheduled message will not create any notifications',
                }),
              threadTitle: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description: 'The thread title if scheduled message is creating a thread',
                }),
            })
            .openapi({ required: ['message', 'sendAt'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Message updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ScheduledMessageSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Editing scheduled message is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['message', 'send-at', 'thread-title']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Actor not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['actor', 'message']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    413: {
      description: 'Message too long',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('message') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenScheduleMessageIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/schedule/{messageId}',
  tags: ['chat'],
  summary: 'Delete a scheduled message',
  description: 'Required capability: `scheduled-messages`',
  operationId: 'chat-delete-schedule-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'The scheduled message id',
            required: true,
            schema: { type: 'string', pattern: '^[0-9]+$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Message deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.object({}) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Message not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['actor', 'message']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/share',
  tags: ['chat'],
  summary: 'Get objects that are shared in the room',
  description: 'Federated conversations are supported with the `federated-shared-items` capability',
  operationId: 'chat-get-objects-shared-in-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      objectType: z
        .string()
        .openapi({
          param: {
            name: 'objectType',
            in: 'query',
            description: 'Type of the objects',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lastKnownMessageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'lastKnownMessageId',
            in: 'query',
            description: 'ID of the last known message',
            schema: { type: 'integer', format: 'int64', default: 0, minimum: 0 },
            required: false,
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(200n))
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of objects',
            schema: { type: 'integer', format: 'int64', default: 100, minimum: 1, maximum: 200 },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of shared objects messages returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), ChatMessageSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Given': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenShareRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/share',
  tags: ['chat'],
  summary: 'Sends a rich-object to the given room',
  description: 'The author and timestamp are automatically set to the current user/guest and time.',
  operationId: 'chat-share-object-to-chat',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              objectType: z.string().openapi({ description: 'Type of the object' }),
              objectId: z.string().openapi({ description: 'ID of the object' }),
              metaData: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'Additional metadata, sample value: `{\\"type\\":\\"geo-location\\",\\"id\\":\\"geo:52.5450511,13.3741463\\",\\"name\\":\\"Nextcloud Berlin Office\\",\\"latitude\\":\\"52.5450511\\",\\"longitude\\":\\"13.3741463\\"}`',
                }),
              actorDisplayName: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Guest name' }),
              referenceId: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Reference ID' }),
              threadId: z
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
                  description:
                    'Thread id which this message is a reply to without quoting a specific message (also requires `threads` capability)',
                }),
            })
            .openapi({ required: ['objectType', 'objectId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Object shared successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ChatMessageWithParentSchema.nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Sharing object is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Actor not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    413: {
      description: 'Message too long',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenSummarizeRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/summarize',
  tags: ['chat'],
  summary: 'Summarize the next bunch of chat messages from a given offset',
  description: 'Required capability: `chat-summary-api`',
  operationId: 'chat-summarize-chat',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fromMessageId: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(1n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  description: 'Offset from where on the summary should be generated',
                }),
            })
            .openapi({ required: ['fromMessageId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        'Summary was scheduled, use the returned taskId to get the status information and output from the TaskProcessing API: [OCS TaskProcessing API](https://docs.nextcloud.com/server/latest/developer_manual/client_apis/OCS/ocs-taskprocessing-api.html#fetch-a-task-by-id). If the response data contains nextOffset, not all messages could be handled in a single request. After receiving the response a second summary should be requested with the provided nextOffset.',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      taskId: z
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
                      nextOffset: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64' }),
                    })
                    .openapi({ required: ['taskId'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    204: { description: 'No messages found to summarize' },
    400: {
      description: 'The conversation is classified',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['ai-no-provider', 'ai-error', 'classified']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: { description: '', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdContextRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/{messageId}/context',
  tags: ['chat'],
  summary: 'Get the context of a message',
  operationId: 'chat-get-message-context',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description:
              'The focused message which should be in the "middle" of the returned context',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n).max(100n))
        .default(50n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'Number of chat messages to receive in both directions (50 by default, 100 at most, might return 201 messages)',
            schema: { type: 'integer', format: 'int64', default: 50, minimum: 0, maximum: 100 },
            required: false,
          },
        }),
      threadId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'threadId',
            in: 'query',
            description: 'Limit the chat message list to a given thread',
            schema: { type: 'integer', format: 'int64', default: 0, minimum: 0 },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Message context returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ChatMessageWithParentSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Chat-Last-Given': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    304: { description: 'No messages' },
    404: {
      description: 'Thread not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('thread') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/{messageId}',
  tags: ['chat'],
  summary: 'Edit a chat message',
  operationId: 'chat-edit-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().openapi({ description: 'the message to send' }) })
            .openapi({ required: ['message'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Message edited successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ChatMessageWithParentSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    202: {
      description:
        'Message edited successfully, but a bot or Matterbridge is configured, so the information can be replicated to other services',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ChatMessageWithParentSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description:
        'Editing message is not possible, e.g. when the new message is empty or the message is too old',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Missing permissions to edit message',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Message not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    405: {
      description: 'Editing this message type is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    413: {
      description: 'Message too long',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected the edit or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/{messageId}',
  tags: ['chat'],
  summary: 'Delete a chat message',
  operationId: 'chat-delete-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Message deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ChatMessageWithParentSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    202: {
      description:
        'Message deleted successfully, but a bot or Matterbridge is configured, so the information can be replicated elsewhere',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ChatMessageWithParentSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Deleting message is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Missing permissions to delete message',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Message not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    405: {
      description: 'Deleting this message type is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected the deletion or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/{messageId}/reminder',
  tags: ['chat'],
  summary: 'Get the reminder for a chat message',
  operationId: 'chat-get-reminder',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reminder returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ChatReminderSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'No reminder found or message not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string().exactOptional() }).openapi({ required: [] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/{messageId}/reminder',
  tags: ['chat'],
  summary: 'Set a reminder for a chat message',
  operationId: 'chat-set-reminder',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              timestamp: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  description: 'Timestamp of the reminder',
                }),
            })
            .openapi({ required: ['timestamp'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Reminder created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ChatReminderSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Message not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string().exactOptional() }).openapi({ required: [] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdReminderRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/{messageId}/reminder',
  tags: ['chat'],
  summary: 'Delete a chat reminder',
  operationId: 'chat-delete-reminder',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reminder deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string().exactOptional() }).openapi({ required: [] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Message not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string().exactOptional() }).openapi({ required: [] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionChatUpcomingRemindersRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/upcoming-reminders',
  tags: ['chat'],
  summary: 'Get all upcoming reminders',
  description: 'Required capability: `upcoming-reminders`',
  operationId: 'chat-get-upcoming-reminders',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reminders returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ChatReminderUpcomingSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenReadRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/read',
  tags: ['chat'],
  summary: 'Set the read marker to a specific message',
  operationId: 'chat-set-read-marker',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              lastReadMessage: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(-2n),
                )
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  minimum: -2,
                  default: null,
                  description:
                    'ID if the last read message (Optional only with `chat-read-last` capability)',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Read marker set successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenReadRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/read',
  tags: ['chat'],
  summary: 'Mark a chat as unread',
  operationId: 'chat-mark-unread',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Read marker set successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenShareOverviewRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/share/overview',
  tags: ['chat'],
  summary: 'Get objects that are shared in the room overview',
  description: 'Federated conversations are supported with the `federated-shared-items` capability',
  operationId: 'chat-get-objects-shared-in-room-overview',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(20n))
        .default(7n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of objects',
            schema: { type: 'integer', format: 'int64', default: 7, minimum: 1, maximum: 20 },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of shared objects messages of each type returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.record(z.string(), z.array(ChatMessageSchema)),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/{messageId}/pin',
  tags: ['chat'],
  summary: 'Pin a message in a chat as a moderator',
  description: 'Required capability: `pinned-messages`',
  operationId: 'chat-pin-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              pinUntil: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .default(0n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  default: 0,
                  description: 'Unix timestamp when to unpin the message',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Message was pinned successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ChatMessageWithParentSchema.nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Message could not be pinned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['message', 'until', 'status']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Message was not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['message', 'until', 'status']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/{messageId}/pin',
  tags: ['chat'],
  summary: 'Unpin a message in a chat as a moderator',
  description: 'Required capability: `pinned-messages`',
  operationId: 'chat-unpin-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Message is not pinned now',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ChatMessageWithParentSchema.nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Chat-Last-Common-Read': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Federation request answered with an unknown status code',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('status') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Message was not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('message') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionChatTokenMessageIdPinSelfRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/{messageId}/pin/self',
  tags: ['chat'],
  summary: 'Hide a message in a chat as a user',
  description: 'Required capability: `pinned-messages`',
  operationId: 'chat-hide-pinned-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Pinned message is now hidden',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Message was not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenMentionsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/mentions',
  tags: ['chat'],
  summary: 'Search for mentions',
  operationId: 'chat-mentions',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'Text to search for',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(20n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of results',
            schema: { type: 'integer', format: 'int64', default: 20 },
            required: false,
          },
        }),
      includeStatus: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeStatus',
            in: 'query',
            description: 'Include the user statuses',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of mention suggestions returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ChatMentionSuggestionSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentFolderRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/attachment/folder',
  tags: ['chat'],
  summary: 'Prepare the conversation attachment folder and probe filename conflicts',
  description:
    "Creates the caller's conversation subfolder (and the room share) if not yet present, then creates or returns a Draft folder for staging uploads. Simulates the rename-on-conflict logic for each requested filename without requiring the files to already exist.\nThe returned `folder` is the Draft path — a staging area that is NOT shared with the room, so other participants cannot see in-progress uploads or files from aborted messages. Files are moved into the shared subfolder atomically when the attachment endpoint is called.\nRecommended client flow: 1. Call this endpoint to obtain the Draft folder path and predicted final names. 2. Display the predicted names as accessibility placeholders immediately. 3. Upload each file to a random temporary name (e.g. a UUID) inside the returned Draft folder — do NOT upload to the predicted final name. 4. Call the attachment endpoint with the temp path as `filePath` and the original desired name as `fileName`. The server moves the file from Draft into the shared subfolder, resolves any conflicts, and posts the message.",
  operationId: 'chat-probe-attachment-folder',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fileNames: z
                .array(z.string())
                .default([])
                .exactOptional()
                .openapi({ description: 'Desired filenames to probe' }),
              allowUpdate: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Allow recipients to modify shared files' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Draft folder path and rename map returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      folder: z.string(),
                      renames: z.array(z.record(z.string(), z.string())),
                    })
                    .openapi({ required: ['folder', 'renames'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: 'Could not prepare the conversation folder',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    501: {
      description: 'Conversation subfolders feature is disabled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    507: {
      description: 'User storage quota exceeded',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenAttachmentRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/attachment',
  tags: ['chat'],
  summary: 'Post a file from the conversation Draft folder as a chat message',
  description:
    'The file must be inside the Draft folder returned by the probe endpoint. This endpoint moves the file from Draft into the shared conversation subfolder (resolving any name conflicts), creates the chat message, and returns the actual final filename. The subfolder is shared with the room via a folder-level TYPE_ROOM share — no per-file share is created, keeping the Share Overview clean.',
  operationId: 'chat-post-attachment-to-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              filePath: z
                .string()
                .openapi({
                  description:
                    'Path of the file relative to the user\'s home root (e.g. "Talk/Group Chat-abc123/Draft/uuid.jpg")',
                }),
              referenceId: z
                .string()
                .openapi({ description: 'Client-generated reference ID for the message' }),
              talkMetaData: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description: 'JSON-encoded metadata (caption, messageType, silent, …)',
                }),
              fileName: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'Desired final file name; the service resolves conflicts by appending " (1)", " (2)", … if already taken',
                }),
              allowUpdate: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Allow recipients to modify shared files' }),
            })
            .openapi({ required: ['filePath', 'referenceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'File moved from Draft and posted as chat message',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ renames: z.array(z.record(z.string(), z.string())) })
                    .openapi({ required: ['renames'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Path does not point to a file',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'File not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    422: {
      description: 'File is not inside the conversation Draft folder for this room',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: 'Could not prepare the conversation folder',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    501: {
      description: 'Conversation subfolders feature is disabled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    507: {
      description: 'User storage quota exceeded',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionTagsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/tags',
  tags: ['conversation_tag'],
  summary: 'Get all conversation tags for the current user',
  description: 'Required capability: `conversation-tags`',
  operationId: 'conversation_tag-get-tags',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tags returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ConversationTagSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionTagsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/tags',
  tags: ['conversation_tag'],
  summary: 'Create a new conversation tag',
  description: 'Required capability: `conversation-tags`',
  operationId: 'conversation_tag-create-tag',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ name: z.string().openapi({ description: 'Name of the tag' }) })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Tag created',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ConversationTagSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid or duplicate name, or the user has reached the tag limit',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['name', 'limit']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/tags/{tagId}',
  tags: ['conversation_tag'],
  summary: 'Update a conversation tag',
  description: 'Required capability: `conversation-tags`',
  operationId: 'conversation_tag-update-tag',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      tagId: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            name: 'tagId',
            in: 'path',
            description: 'ID of the tag',
            required: true,
            schema: { type: 'string', pattern: '^\\d+$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ name: z.string().openapi({ description: 'New name for the tag' }) })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Tag updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ConversationTagSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid or duplicate name, or the tag is a built-in and cannot be renamed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['name', 'type']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Tag not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/tags/{tagId}',
  tags: ['conversation_tag'],
  summary: 'Delete a conversation tag',
  description: 'Required capability: `conversation-tags`',
  operationId: 'conversation_tag-delete-tag',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      tagId: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            name: 'tagId',
            in: 'path',
            description: 'ID of the tag',
            required: true,
            schema: { type: 'string', pattern: '^\\d+$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tag deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'The tag is a built-in and cannot be deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('type') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Tag not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionTagsReorderRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/tags/reorder',
  tags: ['conversation_tag'],
  summary: 'Reorder conversation tags',
  description: 'Required capability: `conversation-tags`',
  operationId: 'conversation_tag-reorder-tags',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              orderedIds: z.array(z.string()).openapi({ description: 'Ordered list of tag IDs' }),
            })
            .openapi({ required: ['orderedIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Tags reordered',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ConversationTagSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/tags/{tagId}/collapsed',
  tags: ['conversation_tag'],
  summary: 'Set the collapsed state of a conversation tag',
  description: 'Required capability: `conversation-tags`',
  operationId: 'conversation_tag-update-tag-collapsed',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      tagId: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            name: 'tagId',
            in: 'path',
            description: 'ID of the tag',
            required: true,
            schema: { type: 'string', pattern: '^\\d+$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              collapsed: z
                .boolean()
                .openapi({ description: 'Whether the tag should be collapsed' }),
            })
            .openapi({ required: ['collapsed'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Collapsed state updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ConversationTagSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Tag not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionFileFileIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/file/{fileId}',
  tags: ['files_integration'],
  summary: 'Get the token of the room associated to the given file id',
  description:
    'This is the counterpart of self::getRoomByShareToken() for file ids instead of share tokens, although both return the same room token if the given file id and share token refer to the same file.\nIf there is no room associated to the given file id a new room is created; the new room is a public room associated with a "file" object with the given file id. Unlike normal rooms in which the owner is the user that created the room these are special rooms without owner (although self joined users with direct access to the file become persistent participants automatically when they join until they explicitly leave or no longer have access to the file).\nIn any case, to create or even get the token of the room, the file must be shared and the user must be the owner of a public share of the file (like a link share, for example) or have direct access to that file; an error is returned otherwise. A user has direct access to a file if they have access to it (or to an ancestor) through a user, group, circle or room share (but not through a link share, for example), or if they are the owner of such a file.',
  operationId: 'files_integration-get-room-by-file-id',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      fileId: z
        .string()
        .regex(/^.+$/)
        .openapi({
          param: {
            name: 'fileId',
            in: 'path',
            description: 'ID of the file',
            required: true,
            schema: { type: 'string', pattern: '^.+$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Room token returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ token: z.string() }).openapi({ required: ['token'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Rooms not allowed for shares',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionPublicshareShareTokenRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/publicshare/{shareToken}',
  tags: ['files_integration'],
  summary: 'Returns the token of the room associated to the file of the given share token',
  description:
    'This is the counterpart of self::getRoomByFileId() for share tokens instead of file ids, although both return the same room token if the given file id and share token refer to the same file.\nIf there is no room associated to the file id of the given share token a new room is created; the new room is a public room associated with a "file" object with the file id of the given share token. Unlike normal rooms in which the owner is the user that created the room these are special rooms without owner (although self joined users with direct access to the file become persistent participants automatically when they join until they explicitly leave or no longer have access to the file).\nIn any case, to create or even get the token of the room, the file must be publicly shared (like a link share, for example); an error is returned otherwise.\nBesides the token of the room this also returns the current user ID and display name, if any; this is needed by the Talk sidebar to know the actual current user, as the public share page uses the incognito mode and thus logged-in users as seen as guests.',
  operationId: 'files_integration-get-room-by-share-token',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      shareToken: z
        .string()
        .regex(/^.+$/)
        .openapi({
          param: {
            name: 'shareToken',
            in: 'path',
            description: 'Token of the file share',
            required: true,
            schema: { type: 'string', pattern: '^.+$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Room token and user info returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ token: z.string(), userId: z.string(), userDisplayName: z.string() })
                    .openapi({ required: ['token', 'userId', 'userDisplayName'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Rooms not allowed for shares',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionGuestTokenNameRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/guest/{token}/name',
  tags: ['guest'],
  summary: 'Set the display name as a guest',
  operationId: 'guest-set-display-name',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ displayName: z.string().openapi({ description: 'New display name' }) })
            .openapi({ required: ['displayName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Display name updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Not a guest',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Not a participant',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/live-transcription/{token}',
  tags: ['live_transcription'],
  summary: 'Enable the live transcription',
  operationId: 'live_transcription-enable',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Live transcription enabled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'The conversation is classified',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['app', 'classified', 'in-call']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/live-transcription/{token}',
  tags: ['live_transcription'],
  summary: 'Disable the live transcription',
  operationId: 'live_transcription-disable',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Live transcription stopped successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'The participant is not in the call',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['app', 'in-call']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionLanguagesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/live-transcription/languages',
  tags: ['live_transcription'],
  summary: 'Get available languages for live transcriptions',
  operationId: 'live_transcription-get-available-languages',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Available languages got successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.record(z.string(), LiveTranscriptionLanguageSchema),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'The external app "live_transcription" is not available',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('app') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTranslationLanguagesRoute =
  createRoute({
    method: 'get',
    path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/live-transcription/translation-languages',
    tags: ['live_transcription'],
    summary: 'Get available languages for live translations',
    description:
      'The returned array provides a list of origin languages ("originLanguages") and a list of target languages ("targetLanguages"). Any origin language can be translated to any target language.\nThe origin language list can contain "detect_language" as a special value indicating auto-detection support.\ntranslations are not supported.',
    operationId: 'live_transcription-get-available-translation-languages',
    request: {
      params: z.object({
        apiVersion: z
          .literal('v1')
          .default('v1')
          .openapi({
            param: {
              name: 'apiVersion',
              in: 'path',
              required: true,
              schema: { type: 'string', enum: ['v1'], default: 'v1' },
            },
          }),
      }),
      headers: z.object({
        'OCS-APIRequest': z
          .stringbool()
          .default(true)
          .openapi({
            param: {
              name: 'OCS-APIRequest',
              in: 'header',
              description: 'Required to be true for the API request to pass',
              required: true,
              schema: { type: 'boolean', default: true },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Available languages got successfully',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        originLanguages: z.record(z.string(), LiveTranscriptionLanguageSchema),
                        targetLanguages: z.record(z.string(), LiveTranscriptionLanguageSchema),
                        defaultTargetLanguageId: z.string(),
                      })
                      .openapi({
                        required: ['originLanguages', 'targetLanguages', 'defaultTargetLanguageId'],
                      }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      400: {
        description: 'The external app "live_transcription" is not available or',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({ error: z.enum(['app', 'translations']) })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
    },
    security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
  })

export const postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenLanguageRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/live-transcription/{token}/language',
  tags: ['live_transcription'],
  summary: 'Set language for live transcriptions',
  operationId: 'live_transcription-set-language',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              languageId: z.string().openapi({ description: 'the ID of the language to set' }),
            })
            .openapi({ required: ['languageId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Language set successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'The conversation is classified',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['app', 'classified']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Participant is not a moderator',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('app') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionLiveTranscriptionTokenTargetLanguageRoute =
  createRoute({
    method: 'post',
    path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/live-transcription/{token}/target-language',
    tags: ['live_transcription'],
    summary: 'Set target language for live translations',
    description:
      'Each participant can set the language in which they want to receive the translations.\nSetting the target language is possible only during a call and immediately enables the translations. Translations can be disabled by sending a null value as the language id.\ntranslations are not supported.',
    operationId: 'live_transcription-set-target-language',
    request: {
      params: z.object({
        apiVersion: z
          .literal('v1')
          .default('v1')
          .openapi({
            param: {
              name: 'apiVersion',
              in: 'path',
              required: true,
              schema: { type: 'string', enum: ['v1'], default: 'v1' },
            },
          }),
        token: z
          .string()
          .regex(/^[a-z0-9]{4,30}$/)
          .openapi({
            param: {
              name: 'token',
              in: 'path',
              required: true,
              schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
            },
          }),
      }),
      headers: z.object({
        'OCS-APIRequest': z
          .stringbool()
          .default(true)
          .openapi({
            param: {
              name: 'OCS-APIRequest',
              in: 'header',
              description: 'Required to be true for the API request to pass',
              required: true,
              schema: { type: 'boolean', default: true },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                targetLanguageId: z
                  .string()
                  .openapi({ description: 'the ID of the language to set' }),
              })
              .openapi({ required: ['targetLanguageId'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Target language set successfully',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      400: {
        description: 'The conversation is classified',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({ error: z.enum(['app', 'classified', 'translations', 'in-call']) })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
    },
    security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
  })

export const getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/account',
  tags: ['matrix_account'],
  summary: 'Get the linked Matrix account and the homeservers an account can be linked on',
  description:
    'The access token of the linked account is checked with the homeserver, the result is reused for 5 minutes.',
  operationId: 'matrix_account-get-account',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Account information returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      canLink: z.boolean(),
                      account: MatrixAccountSchema.nullable(),
                      connected: z.boolean(),
                      homeservers: z.array(MatrixHomeserverSchema),
                    })
                    .openapi({ required: ['canLink', 'account', 'connected', 'homeservers'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/account',
  tags: ['matrix_account'],
  summary: 'Log in again after the homeserver rejected the access token',
  operationId: 'matrix_account-relogin-account',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ password: z.string().openapi({ description: 'Matrix password' }) })
            .openapi({ required: ['password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Logged in again',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: MatrixAccountSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description:
        'Homeserver is not available anymore, the login belongs to another Matrix user or was rejected by the homeserver',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Wrong credentials',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    403: {
      description: 'User is not allowed to link an account',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'No linked account',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'Homeserver unreachable',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/account',
  tags: ['matrix_account'],
  summary: 'Link a Matrix account with a password login, the password is not stored',
  operationId: 'matrix_account-link-account',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              homeserverId: z.string().openapi({ description: 'Id of the homeserver' }),
              user: z.string().openapi({ description: 'Matrix localpart or full user id' }),
              password: z.string().openapi({ description: 'Matrix password' }),
            })
            .openapi({ required: ['homeserverId', 'user', 'password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Account linked',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: MatrixAccountSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description:
        'Invalid homeserver or user, account already linked or login rejected by the homeserver',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Wrong credentials',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    403: {
      description: 'User is not allowed to link an account',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'Homeserver unreachable',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/account',
  tags: ['matrix_account'],
  summary: 'Unlink the Matrix account and log Talk out on the homeserver',
  operationId: 'matrix_account-unlink-account',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Account unlinked',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'No linked account',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('account') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/account/check',
  tags: ['matrix_account'],
  summary: 'Check the connection to the homeserver again',
  operationId: 'matrix_account-check-connection',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Connection checked',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ account: MatrixAccountSchema, connected: z.boolean() })
                    .openapi({ required: ['account', 'connected'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'No linked account',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('account') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/account/verification',
  tags: ['matrix_account'],
  summary:
    'Get the state of the verification, after checking the homeserver for answers of the other device',
  operationId: 'matrix_account-get-verification',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Verification returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: MatrixVerificationSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'No active linked account or no verification',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'verification']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/account/verification',
  tags: ['matrix_account'],
  summary: 'Confirm that the emoji match the ones of the other device',
  operationId: 'matrix_account-confirm-verification',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Verification confirmed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: MatrixVerificationSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'There is nothing to confirm',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'state', 'matrix']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'No active linked account',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'state', 'matrix']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The homeserver could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'state', 'matrix']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/account/verification',
  tags: ['matrix_account'],
  summary: 'Verify the device of Talk with another device of the user',
  description:
    'The other devices are asked to verify, the user accepts on one of them and compares the emoji. That device then cross-signs the device of Talk, so clients share the keys of encrypted rooms with it.',
  operationId: 'matrix_account-start-verification',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Verification requested',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: MatrixVerificationSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description:
        'Encryption is not available on the server or the device of Talk could not publish its keys',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'keys', 'matrix', 'unavailable']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'No active linked account',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'keys', 'matrix', 'unavailable']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The homeserver could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'keys', 'matrix', 'unavailable']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/account/verification',
  tags: ['matrix_account'],
  summary: 'Cancel the verification, for example because the emoji do not match',
  operationId: 'matrix_account-cancel-verification',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Verification cancelled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'No active linked account',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'matrix']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The homeserver could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'matrix']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/account/backup',
  tags: ['matrix_account'],
  summary: 'Restore the keys of encrypted messages from the key backup of the Matrix account',
  description:
    'The recovery key (security key) unlocks the key backup. The key of the backup is kept, so keys that are missing later are looked up in it.',
  operationId: 'matrix_account-restore-backup',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              recoveryKey: z
                .string()
                .openapi({ description: 'Recovery key as shown by Matrix clients' }),
            })
            .openapi({ required: ['recoveryKey'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Keys restored',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      restored: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                    })
                    .openapi({ required: ['restored'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Encryption is not available on the server or the recovery key is wrong',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'backup', 'matrix', 'recovery-key', 'unavailable']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'No active linked account or no key backup',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'backup', 'matrix', 'recovery-key', 'unavailable']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The homeserver could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'backup', 'matrix', 'recovery-key', 'unavailable']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/invite/{id}',
  tags: ['matrix_room'],
  summary: 'Accept an invite to a Matrix room',
  operationId: 'matrix_room-accept-invite',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      id: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the invite',
            required: true,
            schema: { type: 'string', pattern: '^\\d+$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Invite accepted, the token is null when the conversation is still created by another sync',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ token: z.string().nullable() }).openapi({ required: ['token'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Invite or Matrix account not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'invitation', 'matrix']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected joining the room or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'invitation', 'matrix']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/invite/{id}',
  tags: ['matrix_room'],
  summary: 'Decline an invite to a Matrix room',
  operationId: 'matrix_room-decline-invite',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      id: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the invite',
            required: true,
            schema: { type: 'string', pattern: '^\\d+$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Invite declined',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Invite or Matrix account not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'invitation', 'matrix']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected declining or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'invitation', 'matrix']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/room',
  tags: ['matrix_room'],
  summary: 'Create a Matrix room or a direct chat with a Matrix user',
  operationId: 'matrix_room-create-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Name of the room, ignored for direct chats' }),
              topic: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Topic of the room' }),
              invites: z
                .array(z.string())
                .default([])
                .exactOptional()
                .openapi({ description: 'Matrix user ids to invite' }),
              direct: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Create a direct chat with the only invited user' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description:
        'Room created, the token is null when the conversation is still created by another sync',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ token: z.string().nullable() }).openapi({ required: ['token'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Name or invited users are invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'invite', 'matrix', 'name']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Matrix account not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'invite', 'matrix', 'name']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected the room or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'invite', 'matrix', 'name']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/room/join',
  tags: ['matrix_room'],
  summary: 'Join a Matrix room by its address',
  operationId: 'matrix_room-join-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              reference: z
                .string()
                .openapi({
                  description: 'Room alias like `#room:example.org`, room id or a matrix.to link',
                }),
            })
            .openapi({ required: ['reference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Room joined, the token is null when the conversation is still created by another sync',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ token: z.string().nullable() }).openapi({ required: ['token'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'The reference is not a Matrix room',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'matrix', 'reference', 'room']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Matrix account not found, or the room does not exist or can not be joined',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'matrix', 'reference', 'room']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['account', 'matrix', 'reference', 'room']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bridge/{token}',
  tags: ['matterbridge'],
  summary: 'Get bridge information of one room',
  operationId: 'matterbridge-get-bridge-of-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return list of configured bridges',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: MatterbridgeWithProcessStateSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bridge/{token}',
  tags: ['matterbridge'],
  summary: 'Edit bridge information of one room',
  operationId: 'matterbridge-edit-bridge-of-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enabled: z.boolean().openapi({ description: 'If the bridge should be enabled' }),
              parts: MatterbridgeConfigFieldsSchema.default([])
                .exactOptional()
                .openapi({ description: 'New parts' }),
            })
            .openapi({ required: ['enabled'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Bridge edited successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: MatterbridgeProcessStateSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    406: {
      description: 'Editing bridge is not possible, e.g. when the conversation is classified',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionBridgeTokenRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bridge/{token}',
  tags: ['matterbridge'],
  summary: 'Delete bridge of one room',
  operationId: 'matterbridge-delete-bridge-of-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Bridge deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.boolean() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    406: {
      description: 'Deleting bridge is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionBridgeTokenProcessRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bridge/{token}/process',
  tags: ['matterbridge'],
  summary: 'Get bridge process information',
  operationId: 'matterbridge-get-bridge-process-state',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return list of running processes',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: MatterbridgeProcessStateSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionPollTokenRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/poll/{token}',
  tags: ['poll'],
  summary: 'Create a poll',
  operationId: 'poll-create-poll',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              question: z.string().openapi({ description: 'Question of the poll' }),
              options: z.array(z.string()).openapi({ description: 'Options of the poll' }),
              resultMode: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n)]),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1],
                  description: 'Mode how the results will be shown',
                }),
              maxVotes: z
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
                  description: 'Number of maximum votes per voter',
                }),
              draft: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether the poll should be saved as a draft (only allowed for moderators and with `talk-polls-drafts` capability)',
                }),
              threadId: z
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
                  description:
                    'Thread id which this poll should be posted into (also requires `threads` capability)',
                }),
            })
            .openapi({ required: ['question', 'options', 'resultMode', 'maxVotes'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Draft created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: PollDraftSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    201: {
      description: 'Poll created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: PollSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Creating poll is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['draft', 'options', 'poll', 'question', 'room']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftPollIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/poll/{token}/draft/{pollId}',
  tags: ['poll'],
  summary: 'Modify a draft poll',
  description: 'Required capability: `edit-draft-poll`',
  operationId: 'poll-update-draft-poll',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      pollId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'pollId',
            in: 'path',
            description: 'The poll id',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              question: z.string().openapi({ description: 'Question of the poll' }),
              options: z.array(z.string()).openapi({ description: 'Options of the poll' }),
              resultMode: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n)]),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1],
                  description: 'Mode how the results will be shown',
                }),
              maxVotes: z
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
                  description: 'Number of maximum votes per voter',
                }),
            })
            .openapi({ required: ['question', 'options', 'resultMode', 'maxVotes'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Draft modified successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: PollDraftSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Modifying poll is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['draft', 'options', 'poll', 'question', 'room']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'No permission to modify this poll',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['draft', 'options', 'poll', 'question', 'room']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'No draft poll exists',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['draft', 'options', 'poll', 'question', 'room']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionPollTokenDraftsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/poll/{token}/drafts',
  tags: ['poll'],
  summary: 'Get all drafted polls',
  description: 'Required capability: `talk-polls-drafts`',
  operationId: 'poll-get-all-draft-polls',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Poll returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(PollDraftSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'User is not a moderator',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Poll not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/poll/{token}/{pollId}',
  tags: ['poll'],
  summary: 'Get a poll',
  operationId: 'poll-show-poll',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      pollId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'pollId',
            in: 'path',
            description: 'ID of the poll',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Poll returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: PollSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Poll not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/poll/{token}/{pollId}',
  tags: ['poll'],
  summary: 'Vote on a poll',
  operationId: 'poll-vote-poll',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      pollId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'pollId',
            in: 'path',
            description: 'ID of the poll',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              optionIds: z
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
                .default([])
                .exactOptional()
                .openapi({ description: 'IDs of the selected options' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Voted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: PollSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Voting is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Poll not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/poll/{token}/{pollId}',
  tags: ['poll'],
  summary: 'Close a poll',
  operationId: 'poll-close-poll',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      pollId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'pollId',
            in: 'path',
            description: 'ID of the poll',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Poll closed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: PollSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    202: {
      description: 'Poll draft was deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Poll already closed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['draft', 'options', 'poll', 'question', 'room']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Missing permissions to close poll',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['draft', 'options', 'poll', 'question', 'room']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Poll not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['draft', 'options', 'poll', 'question', 'room']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionPollTokenPollIdExportFormatRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/poll/{token}/{pollId}/export/{format}',
  tags: ['poll'],
  summary: 'Export poll results as a spreadsheet',
  operationId: 'poll-export-poll',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      pollId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'pollId',
            in: 'path',
            description: 'ID of the poll',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
      format: z
        .enum(['ods', 'csv'])
        .openapi({
          param: {
            name: 'format',
            in: 'path',
            description: 'Export format',
            required: true,
            schema: { type: 'string', enum: ['ods', 'csv'], pattern: '^(ods|csv)$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Poll exported successfully',
      content: {
        'application/vnd.oasis.opendocument.spreadsheet': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
        'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    403: {
      description: 'Missing permissions to export poll',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Poll not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/presets/room',
  tags: ['preset'],
  summary: 'Get the list of available presets',
  description:
    'Required capability: `conversation-presets`\nPresets come with 2 special presets: `forced` and `default`: - The default contains the before "presets" state by default, but administration can set different default values, which will then be preselected, but can still be changed by users. - If a parameter is listed in forced, the value will always be used, independent of the user selection or the value from the preset. So order of applying is: "default" preset > selected preset > user selection > "forced" preset',
  operationId: 'preset-get-presets',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully got presets',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ConversationPresetSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionPublicshareauthRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/publicshareauth',
  tags: ['files_integration'],
  summary: 'Creates a new room for video verification (requesting the password of a share)',
  description:
    'The new room is a public room associated with a "share:password" object with the ID of the share token. Unlike normal rooms in which the owner is the user that created the room these are special rooms always created by a guest or user on behalf of a registered user, the sharer, who will be the owner of the room.\nThe share must have "send password by Talk" enabled; an error is returned otherwise.',
  operationId: 'public_share_auth-create-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ shareToken: z.string().openapi({ description: 'Token of the file share' }) })
            .openapi({ required: ['shareToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Room created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ token: z.string(), name: z.string(), displayName: z.string() })
                    .openapi({ required: ['token', 'name', 'displayName'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Share not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/reaction/{token}/{messageId}',
  tags: ['reaction'],
  summary: 'Get a list of reactions for a message',
  operationId: 'reaction-get-reactions',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    query: z.object({
      reaction: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            name: 'reaction',
            in: 'query',
            description: 'Emoji to filter',
            schema: { type: 'string', nullable: true },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reactions returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.record(z.string(), z.array(ReactionSchema)),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Message or reaction not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/reaction/{token}/{messageId}',
  tags: ['reaction'],
  summary: 'Add a reaction to a message',
  operationId: 'reaction-react',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ reaction: z.string().openapi({ description: 'Emoji to add' }) })
            .openapi({ required: ['reaction'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Reaction already existed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.record(z.string(), z.array(ReactionSchema)),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    201: {
      description: 'Reaction added successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.record(z.string(), z.array(ReactionSchema)),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Adding reaction is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'The Matrix account of the user can not react in the Matrix room',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Message not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected the reaction or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionReactionTokenMessageIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/reaction/{token}/{messageId}',
  tags: ['reaction'],
  summary: 'Delete a reaction from a message',
  operationId: 'reaction-delete',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    query: z.object({
      reaction: z
        .string()
        .openapi({
          param: {
            name: 'reaction',
            in: 'query',
            description: 'Emoji to remove',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reaction deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.record(z.string(), z.array(ReactionSchema)),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Deleting reaction is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'The Matrix account of the user can not remove the reaction in the Matrix room',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Message not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected the removal or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/{token}',
  tags: ['recording'],
  summary: 'Start the recording',
  description: 'Required capability: `recording-v1`',
  operationId: 'recording-start',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
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
                  description: 'Type of the recording',
                }),
            })
            .openapi({ required: ['status'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Recording started successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Starting recording is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/{token}',
  tags: ['recording'],
  summary: 'Stop the recording',
  description: 'Required capability: `recording-v1`',
  operationId: 'recording-stop',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Recording stopped successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Stopping recording is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRecordingTokenNotificationRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/{token}/notification',
  tags: ['recording'],
  summary: 'Dismiss the store call recording notification',
  operationId: 'recording-notification-dismiss',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'timestamp',
            in: 'query',
            description: 'Timestamp of the notification to be dismissed',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Notification dismissed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Dismissing notification is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenShareChatRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/{token}/share-chat',
  tags: ['recording'],
  summary: 'Share the recorded file to the chat',
  operationId: 'recording-share-to-chat',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fileId: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  description: 'ID of the file',
                }),
              timestamp: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  description: 'Timestamp of the notification to be dismissed',
                }),
            })
            .openapi({ required: ['fileId', 'timestamp'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Recording shared to chat successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Sharing recording to chat is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionRoomRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room',
  tags: ['room'],
  summary: 'Get all currently existent rooms which the user has joined',
  operationId: 'room-get-rooms',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
    }),
    query: z.object({
      noStatusUpdate: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(0n), z.literal(1n)]),
        )
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'noStatusUpdate',
            in: 'query',
            description:
              'When the user status should not be automatically set to online set to 1 (default 0)',
            schema: { type: 'integer', format: 'int64', default: 0, enum: [0, 1] },
            required: false,
          },
        }),
      includeStatus: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeStatus',
            in: 'query',
            description: 'Include the user status',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      modifiedSince: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'modifiedSince',
            in: 'query',
            description: 'Filter rooms modified after a timestamp',
            schema: { type: 'integer', format: 'int64', default: 0, minimum: 0 },
            required: false,
          },
        }),
      includeLastMessage: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeLastMessage',
            in: 'query',
            description:
              'Include the last message, clients should opt-out when only rendering a compact list',
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return list of rooms',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(RoomSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Nextcloud-Talk-Hash': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Nextcloud-Talk-Modified-Before': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Nextcloud-Talk-Federation-Invites': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room',
  tags: ['room'],
  summary: 'Create a room with a user, a group or a circle',
  description:
    'With the `conversation-creation-all` capability a lot of new options where introduced. Before that only `$roomType`, `$roomName`, `$objectType` and `$objectId` were supported all the time, and `$password` with the `conversation-creation-password` capability In case the `$roomType` is {@see Room::TYPE_ONE_TO_ONE} only the `$invite` or `$participants` parameter is supported.\nThe endpoint can also be used unauthenticated by an external call service by signing the request with the configured shared secret via the `x-nextcloud-talk-external-service-random` and `x-nextcloud-talk-external-service-checksum` headers (SHA256-HMAC of the random seed and the `$owner` user ID).',
  operationId: 'room-create-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-talk-external-service-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-external-service-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the owner user ID to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-nextcloud-talk-external-service-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-external-service-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the owner user ID, signed with the shared external call service secret, to verify authenticity from the external call service',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomType: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64', description: 'Type of the room' }),
              invite: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'User, group, … ID to invite Deprecated: Use the `$participants` array instead',
                }),
              roomName: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'Name of the room, unless the legacy mode providing `$invite` and `$source` is used, the name must no longer be empty with the `conversation-creation-all` capability (Ignored if `$roomType` is {@see Room::TYPE_ONE_TO_ONE})',
                }),
              source: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    "Source of the invite ID ('circles' to create a room with a circle, etc.) Deprecated: Use the `$participants` array instead",
                }),
              objectType: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'Type of the object (Ignored if `$roomType` is {@see Room::TYPE_ONE_TO_ONE})',
                }),
              objectId: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'ID of the object (Ignored if `$roomType` is {@see Room::TYPE_ONE_TO_ONE})',
                }),
              password: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'The room password (only available with `conversation-creation-password` capability) (Ignored if `$roomType` is not {@see Room::TYPE_PUBLIC})',
                }),
              readOnly: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n)]),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1],
                  description:
                    'Read only state of the conversation (Default writable) (only available with `conversation-creation-all` capability)',
                }),
              listable: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n), z.literal(2n)]),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1, 2],
                  description:
                    'Scope where the conversation is listable (Default not listable for anyone) (only available with `conversation-creation-all` capability)',
                }),
              messageExpiration: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .default(0n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  default: 0,
                  description:
                    'Seconds after which messages will disappear, 0 disables expiration (Default 0) (only available with `conversation-creation-all` capability)',
                }),
              lobbyState: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n)]),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1],
                  description:
                    'Lobby state of the conversation (Default lobby is disabled) (only available with `conversation-creation-all` capability)',
                }),
              lobbyTimer: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  minimum: 0,
                  default: null,
                  description:
                    'Timer when the lobby will be removed (Default null, will not be disabled automatically) (only available with `conversation-creation-all` capability)',
                }),
              sipEnabled: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n), z.literal(2n)]),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1, 2],
                  description:
                    'Whether SIP dial-in shall be enabled (only available with `conversation-creation-all` capability)',
                }),
              permissions: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n).max(511n),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  maximum: 511,
                  description:
                    'Default permissions for participants (only available with `conversation-creation-all` capability)',
                }),
              recordingConsent: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n)]),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1],
                  description:
                    'Whether participants need to agree to a recording before joining a call (only available with `conversation-creation-all` capability)',
                }),
              mentionPermissions: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n)]),
                )
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1],
                  description:
                    'Who can mention at-all in the chat (only available with `conversation-creation-all` capability)',
                }),
              description: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'Description for the conversation (limited to 2.000 characters) (only available with `conversation-creation-all` capability)',
                }),
              emoji: z
                .string()
                .min(1)
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'Emoji for the avatar of the conversation (only available with `conversation-creation-all` capability)',
                }),
              avatarColor: z
                .string()
                .min(1)
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'Background color of the avatar (Only considered when an emoji was provided) (only available with `conversation-creation-all` capability)',
                }),
              participants: InvitationListSchema.default([])
                .exactOptional()
                .openapi({
                  description:
                    'List of participants to add grouped by type (only available with `conversation-creation-all` capability)',
                }),
              owner: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'User ID that will be used as actor and made owner of the conversation. Required when the request is authenticated via the `x-nextcloud-talk-external-service-random` and `x-nextcloud-talk-external-service-checksum` headers, otherwise ignored.',
                }),
              preset: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'Identifier of the preset that was used (only available with `conversation-preset` capability)',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Room already existed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    201: {
      description: 'Room created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    202: {
      description: 'Room created successfully but not all participants could be added',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomWithInvalidInvitationsSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Room type invalid or missing or invalid password',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum([
                        'avatar',
                        'classified',
                        'description',
                        'invite',
                        'listable',
                        'lobby',
                        'lobby-timer',
                        'mention-permissions',
                        'message-expiration',
                        'name',
                        'object',
                        'object-id',
                        'object-type',
                        'owner',
                        'password',
                        'permissions',
                        'preset',
                        'read-only',
                        'recording-consent',
                        'sip-enabled',
                        'type',
                      ]),
                      message: z.string().exactOptional(),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description:
        'Request not authenticated (missing user session or invalid external call service secret)',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('auth') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Missing permissions to create room',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum([
                        'avatar',
                        'classified',
                        'description',
                        'invite',
                        'listable',
                        'lobby',
                        'lobby-timer',
                        'mention-permissions',
                        'message-expiration',
                        'name',
                        'object',
                        'object-id',
                        'object-type',
                        'owner',
                        'password',
                        'permissions',
                        'preset',
                        'read-only',
                        'recording-consent',
                        'sip-enabled',
                        'type',
                      ]),
                      message: z.string().exactOptional(),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'User, group or other target to invite was not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum([
                        'avatar',
                        'classified',
                        'description',
                        'invite',
                        'listable',
                        'lobby',
                        'lobby-timer',
                        'mention-permissions',
                        'message-expiration',
                        'name',
                        'object',
                        'object-id',
                        'object-type',
                        'owner',
                        'password',
                        'permissions',
                        'preset',
                        'read-only',
                        'recording-consent',
                        'sip-enabled',
                        'type',
                      ]),
                      message: z.string().exactOptional(),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionListedRoomRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/listed-room',
  tags: ['room'],
  summary: 'Get listed rooms with optional search term',
  operationId: 'room-get-listed-rooms',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
    }),
    query: z.object({
      searchTerm: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'searchTerm',
            in: 'query',
            description: 'search term',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return list of matching rooms',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(RoomSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/breakout-rooms',
  tags: ['room'],
  summary: 'Get breakout rooms',
  description:
    'All for moderators and in case of "free selection", or the assigned breakout room for other participants',
  operationId: 'room-get-breakout-rooms',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Breakout rooms returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(RoomSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Getting breakout rooms is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}',
  tags: ['room'],
  summary: 'Get a room',
  operationId: 'room-get-single-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Token of the room',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-sipbridge-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the room token to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-sipbridge-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the room token, signed with the shared SIP bridge secret, to verify authenticity from the SIP bridge',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Room returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Nextcloud-Talk-Hash': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    401: {
      description: 'SIP request invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Room not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}',
  tags: ['room'],
  summary: 'Rename a room',
  operationId: 'room-rename-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ roomName: z.string().openapi({ description: 'New name' }) })
            .openapi({ required: ['roomName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Room renamed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Renaming room is not possible',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({ error: z.enum(['event', 'type', 'value']) })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    403: {
      description: 'The Matrix account of the user can not rename the Matrix room',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'The Matrix room or the linked Matrix account of the user was not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected the change or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}',
  tags: ['room'],
  summary: 'Delete a room',
  operationId: 'room-delete-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Room successfully deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Deleting room is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Conversation is preserved',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.literal('preserved') })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionRoomNoteToSelfRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/note-to-self',
  tags: ['room'],
  summary: 'Get the "Note to self" conversation for the user',
  description: 'It will be automatically created when it is currently missing',
  operationId: 'room-get-note-to-self-conversation',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Room returned successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Nextcloud-Talk-Hash': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/participants',
  tags: ['room'],
  summary: 'Get a list of participants for a room',
  operationId: 'room-get-participants',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      includeStatus: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeStatus',
            in: 'query',
            description: 'Include the user statuses',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Participants returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ParticipantSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Nextcloud-Has-User-Statuses': {
          schema: z
            .boolean()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    403: {
      description: 'Missing permissions for getting participants',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/participants',
  tags: ['room'],
  summary: 'Synchronize the participants of a conversation with the given list',
  description:
    'Only available for the external call service. Participants missing from the list are removed (except owners), participants new in the list are added.',
  operationId: 'room-sync-participants',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Token of the room',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-talk-external-service-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-external-service-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the owner user ID to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-nextcloud-talk-external-service-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-external-service-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the owner user ID, signed with the shared external call service secret, to verify authenticity from the external call service',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              participants: InvitationListSchema.default([])
                .exactOptional()
                .openapi({
                  description: 'List of participants the conversation should have grouped by type',
                }),
              owner: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description: 'User ID of an owner of the conversation that will be used as actor',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Participants synchronized successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    202: {
      description: 'Participants synchronized but not all participants could be added',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomWithInvalidInvitationsSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Room is not an external call service conversation',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['owner', 'room', 'room-type']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Invalid external call service secret',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('auth') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Owner is not an owner of the conversation',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['owner', 'room', 'room-type']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Room or owner not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['owner', 'room', 'room-type']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/participants',
  tags: ['room'],
  summary: 'Add a participant to a room',
  operationId: 'room-add-participant-to-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              newParticipant: z.string().openapi({ description: 'New participant' }),
              source: z
                .enum([
                  'users',
                  'groups',
                  'circles',
                  'emails',
                  'federated_users',
                  'phones',
                  'teams',
                ])
                .default('users')
                .exactOptional()
                .openapi({ description: 'Source of the participant' }),
            })
            .openapi({ required: ['newParticipant'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Participant successfully added, in Matrix conversations the user is invited and added once they accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      type: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64' }),
                    })
                    .openapi({ required: [] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description:
        'Adding participant is not possible, e.g. when the user is banned or an email, phone number or federated user is added to a classified conversation (check error attribute of response for detail key)',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum([
                          'ban',
                          'classified',
                          'cloud-id',
                          'federation',
                          'moderator',
                          'new-participant',
                          'outgoing',
                          'reach-remote',
                          'room-type',
                          'sip',
                          'source',
                          'trusted-servers',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'The Matrix account of the user can not invite to the Matrix room',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'User, group or other target to invite was not found',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum([
                          'ban',
                          'classified',
                          'cloud-id',
                          'federation',
                          'moderator',
                          'new-participant',
                          'outgoing',
                          'reach-remote',
                          'room-type',
                          'sip',
                          'source',
                          'trusted-servers',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    501: {
      description: 'SIP dial-out is not configured',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum([
                        'ban',
                        'classified',
                        'cloud-id',
                        'federation',
                        'moderator',
                        'new-participant',
                        'outgoing',
                        'reach-remote',
                        'room-type',
                        'sip',
                        'source',
                        'trusted-servers',
                      ]),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected the invite or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/favorite',
  tags: ['room'],
  summary: 'Add a room to the favorites',
  operationId: 'room-add-to-favorites',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully added room to favorites',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFavoriteRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/favorite',
  tags: ['room'],
  summary: 'Remove a room from the favorites',
  operationId: 'room-remove-from-favorites',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully removed room from favorites',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/notify',
  tags: ['room'],
  summary: 'Update the notification level for a room',
  operationId: 'room-set-notification-level',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              level: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({ type: 'integer', format: 'int64', description: 'New level' }),
            })
            .openapi({ required: ['level'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Notification level updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating notification level is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('level') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenNotifyCallsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/notify-calls',
  tags: ['room'],
  summary: 'Update call notifications',
  operationId: 'room-set-notification-calls',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              level: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({ type: 'integer', format: 'int64', description: 'New level' }),
            })
            .openapi({ required: ['level'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Call notification level updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating call notification level is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('level') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenDescriptionRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/description',
  tags: ['room'],
  summary: 'Update the description of a room',
  operationId: 'room-set-description',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .openapi({
                  description:
                    'New description for the conversation (limited to 2.000 characters, was 500 before Talk 21)',
                }),
            })
            .openapi({ required: ['description'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Description updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating description is not possible',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({ error: z.enum(['event', 'type', 'value']) })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    403: {
      description: 'The Matrix account of the user can not change the topic of the Matrix room',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'The Matrix room or the linked Matrix account of the user was not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected the change or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenObjectRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/object',
  tags: ['room'],
  summary: 'Unbind a room from its object to prevent automatic retention',
  description: 'Required capability: `unbind-conversation`',
  operationId: 'room-unbind-room-from-object',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Room successfully unbound',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Unbinding room is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.literal('object-type') })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenBreakoutRoomsParticipantsRoute =
  createRoute({
    method: 'get',
    path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/breakout-rooms/participants',
    tags: ['room'],
    summary: 'Get the breakout room participants for a room',
    operationId: 'room-get-breakout-room-participants',
    request: {
      params: z.object({
        apiVersion: z
          .literal('v4')
          .default('v4')
          .openapi({
            param: {
              name: 'apiVersion',
              in: 'path',
              required: true,
              schema: { type: 'string', enum: ['v4'], default: 'v4' },
            },
          }),
        token: z
          .string()
          .regex(/^[a-z0-9]{4,30}$/)
          .openapi({
            param: {
              name: 'token',
              in: 'path',
              required: true,
              schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
            },
          }),
      }),
      query: z.object({
        includeStatus: z
          .stringbool()
          .default(false)
          .exactOptional()
          .openapi({
            param: {
              name: 'includeStatus',
              in: 'query',
              description: 'Include the user statuses',
              schema: { type: 'boolean', default: false },
              required: false,
            },
          }),
      }),
      headers: z.object({
        'OCS-APIRequest': z
          .stringbool()
          .default(true)
          .openapi({
            param: {
              name: 'OCS-APIRequest',
              in: 'header',
              description: 'Required to be true for the API request to pass',
              required: true,
              schema: { type: 'boolean', default: true },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Breakout room participants returned',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.array(ParticipantSchema) })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
        headers: z.object({
          'X-Nextcloud-Has-User-Statuses': {
            schema: z
              .boolean()
              .exactOptional()
              .openapi({ param: { required: false } }),
          },
        }),
      },
      400: {
        description: 'Getting breakout room participants is not possible',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      403: {
        description: 'Missing permissions to get breakout room participants',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
    },
    security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
  })

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsSelfRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/participants/self',
  tags: ['room'],
  summary: 'Remove the current user from a room',
  operationId: 'room-remove-self-from-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Participant removed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Removing participant is not possible',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({ error: z.enum(['announcement', 'last-moderator', 'participant']) })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'The Matrix account of the user is not active anymore',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Participant not found',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({ error: z.enum(['announcement', 'last-moderator', 'participant']) })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected leaving the Matrix room or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/attendees',
  tags: ['room'],
  summary: 'Remove an attendee from a room',
  operationId: 'room-remove-attendee-from-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      attendeeId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'attendeeId',
            in: 'query',
            description: 'ID of the attendee',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Attendee removed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Removing attendee is not possible',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum([
                          'announcement',
                          'last-moderator',
                          'owner',
                          'participant',
                          'room-type',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    403: {
      description: 'Removing attendee is not allowed',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum([
                          'announcement',
                          'last-moderator',
                          'owner',
                          'participant',
                          'room-type',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    404: {
      description: 'Attendee not found',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum([
                          'announcement',
                          'last-moderator',
                          'owner',
                          'participant',
                          'room-type',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected the removal or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/public',
  tags: ['room'],
  summary: 'Allowed guests to join conversation',
  description:
    'Required capability: `conversation-creation-password` for `string $password` parameter',
  operationId: 'room-make-public',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'New password (only available with `conversation-creation-password` capability)',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Allowed guests successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Allowing guests is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['breakout-room', 'classified', 'type', 'value', 'password']),
                      message: z.string().exactOptional(),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Conversation is preserved',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.literal('preserved') })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPublicRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/public',
  tags: ['room'],
  summary: 'Disallowed guests to join conversation',
  operationId: 'room-make-private',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Room unpublished Disallowing guests successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Disallowing guests is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['breakout-room', 'classified', 'type', 'value']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Conversation is preserved',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.literal('preserved') })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenReadOnlyRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/read-only',
  tags: ['room'],
  summary: 'Set read-only state of a room',
  operationId: 'room-set-read-only',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              state: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n)]),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1],
                  description: 'New read-only state',
                }),
            })
            .openapi({ required: ['state'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Read-only state updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating read-only state is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['type', 'value']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenListableRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/listable',
  tags: ['room'],
  summary: 'Make a room listable',
  operationId: 'room-set-listable',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              scope: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n), z.literal(2n)]),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1, 2],
                  description: 'Scope where the room is listable',
                }),
            })
            .openapi({ required: ['scope'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Made room listable successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Making room listable is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.union([
                    z
                      .object({ error: z.enum(['breakout-room', 'classified', 'type', 'value']) })
                      .openapi({ required: ['error'] }),
                    z
                      .object({
                        error: z.literal('forced'),
                        forced: z
                          .preprocess(
                            (val) =>
                              typeof val === 'number' && Number.isSafeInteger(val)
                                ? BigInt(val)
                                : typeof val === 'string' && /^-?\d+$/.test(val)
                                  ? BigInt(val)
                                  : val,
                            z.union([z.literal(0n), z.literal(1n), z.literal(2n)]),
                          )
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64', enum: [0, 1, 2] }),
                      })
                      .openapi({ required: ['error'] }),
                  ]),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Conversation is preserved',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.literal('preserved') })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenMentionPermissionsRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/mention-permissions',
  tags: ['room'],
  summary: 'Update the mention permissions for a room',
  operationId: 'room-set-mention-permissions',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mentionPermissions: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n)]),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1],
                  description: 'New mention permissions',
                }),
            })
            .openapi({ required: ['mentionPermissions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Permissions updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating permissions is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.union([
                    z
                      .object({ error: z.enum(['breakout-room', 'type', 'value']) })
                      .openapi({ required: ['error'] }),
                    z
                      .object({
                        error: z.literal('forced'),
                        forced: z
                          .preprocess(
                            (val) =>
                              typeof val === 'number' && Number.isSafeInteger(val)
                                ? BigInt(val)
                                : typeof val === 'string' && /^-?\d+$/.test(val)
                                  ? BigInt(val)
                                  : val,
                            z.union([z.literal(0n), z.literal(1n)]),
                          )
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64', enum: [0, 1] }),
                      })
                      .openapi({ required: ['error'] }),
                  ]),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPasswordRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/password',
  tags: ['room'],
  summary: 'Set a password for a room',
  operationId: 'room-set-password',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ password: z.string().openapi({ description: 'New password' }) })
            .openapi({ required: ['password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Password set successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Setting password is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['breakout-room', 'type', 'value']),
                      message: z.string().exactOptional(),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/archive',
  tags: ['room'],
  summary: 'Archive a conversation',
  description: 'Required capability: `archived-conversations-v2`',
  operationId: 'room-archive-conversation',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Conversation was archived',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenArchiveRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/archive',
  tags: ['room'],
  summary: 'Unarchive a conversation',
  description: 'Required capability: `archived-conversations-v2`',
  operationId: 'room-unarchive-conversation',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Conversation was unarchived',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/preserve',
  tags: ['room'],
  summary: 'Preserve a conversation',
  description:
    'While preserved the conversation can not be deleted, its chat history can not be cleared and the guests (public link) and joinable (listable) settings can not be changed.\nRequired capability: `preserve-conversation`',
  operationId: 'room-preserve-conversation',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Conversation was preserved',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Only the owner can preserve a conversation',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.literal('permissions') })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenPreserveRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/preserve',
  tags: ['room'],
  summary: 'Stop preserving a conversation',
  description: 'Required capability: `preserve-conversation`',
  operationId: 'room-unpreserve-conversation',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Conversation is not preserved anymore',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Only the owner can stop preserving a conversation',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.literal('permissions') })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenTagsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/tags',
  tags: ['room'],
  summary: 'Assign conversation tags',
  description: 'Required capability: `conversation-tags`',
  operationId: 'room-assign-tags',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tagIds: z
                .array(z.string())
                .default([])
                .exactOptional()
                .openapi({ description: 'IDs of tags to assign (empty array to unassign all)' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Conversation tags updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/important',
  tags: ['room'],
  summary: 'Mark a conversation as important (still sending notifications while on DND)',
  description: 'Required capability: `important-conversations`',
  operationId: 'room-mark-conversation-as-important',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Conversation was marked as important',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportantRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/important',
  tags: ['room'],
  summary: 'Mark a conversation as unimportant (no longer sending notifications while on DND)',
  description: 'Required capability: `important-conversations`',
  operationId: 'room-mark-conversation-as-unimportant',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Conversation was marked as unimportant',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/sensitive',
  tags: ['room'],
  summary:
    'Mark a conversation as sensitive (no last message is visible / no push preview is shown)',
  description: 'Required capability: `sensitive-conversations`',
  operationId: 'room-mark-conversation-as-sensitive',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Conversation was marked as sensitive',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenSensitiveRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/sensitive',
  tags: ['room'],
  summary: 'Mark a conversation as insensitive (last message is visible / push preview is shown)',
  description: 'Required capability: `sensitive-conversations`',
  operationId: 'room-mark-conversation-as-insensitive',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Conversation was marked as insensitive',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description:
        'Marking the conversation as insensitive is not possible (e.g. classified conversation)',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.literal('classified') })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/participants/active',
  tags: ['room'],
  summary: 'Join a room',
  operationId: 'room-join-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Token of the room',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Password of the room' }),
              force: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({ description: 'Create a new session if necessary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Room joined successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Nextcloud-Talk-Proxy-Hash': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Bad request when the external call access check failed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['field', 'response']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Joining room is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['ban', 'password']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Room not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    409: {
      description: 'Session already exists',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      sessionId: z.string(),
                      inCall: z
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
                      lastPing: z
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
                    })
                    .openapi({ required: ['sessionId', 'inCall', 'lastPing'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsActiveRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/participants/active',
  tags: ['room'],
  summary: 'Leave a room',
  operationId: 'room-leave-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Token of the room',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully left the room',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsStateRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/participants/state',
  tags: ['room'],
  summary: 'Set active state for a session',
  operationId: 'room-set-session-state',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              state: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n)]),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1],
                  description: 'of the room',
                }),
            })
            .openapi({ required: ['state'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Session state set successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'The provided new state was invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'The participant did not have a session',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/moderators',
  tags: ['room'],
  summary: 'Promote an attendee to moderator or owner',
  description: 'Required capability: `promote-demote-owner` for `int $participantType`',
  operationId: 'room-promote-moderator',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attendeeId: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  description: 'ID of the attendee',
                }),
              participantType: z
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
                  description:
                    'Level to promote the attendee to: owner (`1`) or moderator (`2`), `0` to only grant moderator permissions. Guests are promoted to guest moderator (`6`) and can never become owners.',
                }),
            })
            .openapi({ required: ['attendeeId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Attendee promoted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Promoting attendee is not possible',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum([
                          'actor-type',
                          'last-moderator',
                          'moderator',
                          'participant',
                          'participant-type',
                          'room-type',
                          'self',
                          'type',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    403: {
      description: 'Promoting attendee is not allowed',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum([
                          'actor-type',
                          'last-moderator',
                          'moderator',
                          'participant',
                          'participant-type',
                          'room-type',
                          'self',
                          'type',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    404: {
      description: 'Attendee not found',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum([
                          'actor-type',
                          'last-moderator',
                          'moderator',
                          'participant',
                          'participant-type',
                          'room-type',
                          'self',
                          'type',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected the change or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenModeratorsRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/moderators',
  tags: ['room'],
  summary: 'Demote an attendee from moderator or owner',
  description: 'Required capability: `promote-demote-owner` for `int $participantType`',
  operationId: 'room-demote-moderator',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      attendeeId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'attendeeId',
            in: 'query',
            description: 'ID of the attendee',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
      participantType: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'participantType',
            in: 'query',
            description:
              'Level to demote the attendee to: moderator (`2`) or user (`3`), `0` to only revoke moderator permissions. Guest moderators are demoted to guest (`4`).',
            schema: { type: 'integer', format: 'int64', default: 0 },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Attendee demoted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Demoting attendee is not possible',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum([
                          'actor-type',
                          'last-moderator',
                          'moderator',
                          'participant',
                          'participant-type',
                          'room-type',
                          'self',
                          'type',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    403: {
      description: 'Demoting attendee is not allowed',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum([
                          'actor-type',
                          'last-moderator',
                          'moderator',
                          'participant',
                          'participant-type',
                          'room-type',
                          'self',
                          'type',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    404: {
      description: 'Attendee not found',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum([
                          'actor-type',
                          'last-moderator',
                          'moderator',
                          'participant',
                          'participant-type',
                          'room-type',
                          'self',
                          'type',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z
                      .object({
                        error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                      })
                      .openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    502: {
      description: 'The Matrix homeserver rejected the change or could not be reached',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['account', 'encrypted', 'matrix', 'message', 'permission']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenPermissionsModeRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/permissions/{mode}',
  tags: ['room'],
  summary: 'Update the permissions of a room',
  operationId: 'room-set-permissions',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      mode: z
        .enum(['call', 'default'])
        .openapi({
          param: {
            name: 'mode',
            in: 'path',
            description: "Level of the permissions ('call' (removed in Talk 20), 'default')",
            required: true,
            schema: { type: 'string', enum: ['call', 'default'], pattern: '^(call|default)$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              permissions: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n).max(511n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  maximum: 511,
                  description: 'New permissions',
                }),
            })
            .openapi({ required: ['permissions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Permissions updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating permissions is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.union([
                    z
                      .object({ error: z.enum(['breakout-room', 'mode', 'type', 'value']) })
                      .openapi({ required: ['error'] }),
                    z
                      .object({
                        error: z.literal('forced'),
                        forced: z
                          .preprocess(
                            (val) =>
                              typeof val === 'number' && Number.isSafeInteger(val)
                                ? BigInt(val)
                                : typeof val === 'string' && /^-?\d+$/.test(val)
                                  ? BigInt(val)
                                  : val,
                            z.int64().min(0n).max(511n),
                          )
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64', minimum: 0, maximum: 511 }),
                      })
                      .openapi({ required: ['error'] }),
                  ]),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/attendees/permissions',
  tags: ['room'],
  summary: 'Update the permissions of an attendee',
  operationId: 'room-set-attendee-permissions',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attendeeId: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  description: 'ID of the attendee',
                }),
              method: z
                .enum(['set', 'remove', 'add'])
                .openapi({
                  description: "Method of updating permissions ('set', 'remove', 'add')",
                }),
              permissions: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n).max(511n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  maximum: 511,
                  description: 'New permissions',
                }),
            })
            .openapi({ required: ['attendeeId', 'method', 'permissions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Permissions updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ParticipantSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Nextcloud-Has-User-Statuses': {
          schema: z
            .literal(true)
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Updating permissions is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.union([
                    z
                      .object({
                        error: z.enum([
                          'participant',
                          'method',
                          'moderator',
                          'room-type',
                          'type',
                          'value',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                    z
                      .object({
                        error: z.literal('forced'),
                        forced: z
                          .preprocess(
                            (val) =>
                              typeof val === 'number' && Number.isSafeInteger(val)
                                ? BigInt(val)
                                : typeof val === 'string' && /^-?\d+$/.test(val)
                                  ? BigInt(val)
                                  : val,
                            z.int64().min(0n).max(511n),
                          )
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64', minimum: 0, maximum: 511 }),
                      })
                      .openapi({ required: ['error'] }),
                  ]),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Missing permissions to update permissions',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.union([
                    z
                      .object({
                        error: z.enum([
                          'participant',
                          'method',
                          'moderator',
                          'room-type',
                          'type',
                          'value',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                    z
                      .object({
                        error: z.literal('forced'),
                        forced: z
                          .preprocess(
                            (val) =>
                              typeof val === 'number' && Number.isSafeInteger(val)
                                ? BigInt(val)
                                : typeof val === 'string' && /^-?\d+$/.test(val)
                                  ? BigInt(val)
                                  : val,
                            z.int64().min(0n).max(511n),
                          )
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64', minimum: 0, maximum: 511 }),
                      })
                      .openapi({ required: ['error'] }),
                  ]),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Attendee not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.union([
                    z
                      .object({
                        error: z.enum([
                          'participant',
                          'method',
                          'moderator',
                          'room-type',
                          'type',
                          'value',
                        ]),
                      })
                      .openapi({ required: ['error'] }),
                    z
                      .object({
                        error: z.literal('forced'),
                        forced: z
                          .preprocess(
                            (val) =>
                              typeof val === 'number' && Number.isSafeInteger(val)
                                ? BigInt(val)
                                : typeof val === 'string' && /^-?\d+$/.test(val)
                                  ? BigInt(val)
                                  : val,
                            z.int64().min(0n).max(511n),
                          )
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64', minimum: 0, maximum: 511 }),
                      })
                      .openapi({ required: ['error'] }),
                  ]),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenAttendeesPermissionsAllRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/attendees/permissions/all',
  tags: ['room'],
  summary: 'Update the permissions of all attendees',
  operationId: 'room-set-all-attendees-permissions',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              method: z
                .enum(['set', 'remove', 'add'])
                .openapi({
                  description: "Method of updating permissions ('set', 'remove', 'add')",
                }),
              permissions: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n).max(511n),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 0,
                  maximum: 511,
                  description: 'New permissions',
                }),
            })
            .openapi({ required: ['method', 'permissions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Permissions updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating permissions is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  deprecated: true,
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarLobbyRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/webinar/lobby',
  tags: ['room'],
  summary: 'Update the lobby state for a room',
  operationId: 'room-set-lobby',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              state: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n)]),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1],
                  description: 'New state',
                }),
              timer: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  minimum: 0,
                  default: null,
                  description: 'Timer when the lobby will be removed',
                }),
            })
            .openapi({ required: ['state'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Lobby state updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating lobby state is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['breakout-room', 'object', 'type', 'value']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenWebinarSipRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/webinar/sip',
  tags: ['room'],
  summary: 'Update SIP enabled state',
  operationId: 'room-setsip-enabled',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              state: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.union([z.literal(0n), z.literal(1n), z.literal(2n)]),
                )
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  enum: [0, 1, 2],
                  description: 'New state',
                }),
            })
            .openapi({ required: ['state'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'SIP enabled state updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating SIP enabled state is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.union([
                    z
                      .object({
                        error: z.enum(['breakout-room', 'classified', 'token', 'type', 'value']),
                      })
                      .openapi({ required: ['error'] }),
                    z
                      .object({
                        error: z.literal('forced'),
                        forced: z
                          .preprocess(
                            (val) =>
                              typeof val === 'number' && Number.isSafeInteger(val)
                                ? BigInt(val)
                                : typeof val === 'string' && /^-?\d+$/.test(val)
                                  ? BigInt(val)
                                  : val,
                            z.union([z.literal(0n), z.literal(1n), z.literal(2n)]),
                          )
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64', enum: [0, 1, 2] }),
                      })
                      .openapi({ required: ['error'] }),
                  ]),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z.object({ error: z.literal('config') }).openapi({ required: ['error'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
    403: {
      description: 'Missing permissions to update SIP enabled state',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('config') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    412: {
      description: 'SIP not configured',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('config') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionRoomTokenRecordingConsentRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/recording-consent',
  tags: ['room'],
  summary: 'Set recording consent requirement for this conversation',
  operationId: 'room-set-recording-consent',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              recordingConsent: z
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
                  description:
                    'New consent setting for the conversation (Only {@see RecordingService::CONSENT_REQUIRED_NO} and {@see RecordingService::CONSENT_REQUIRED_YES} are allowed here.)',
                }),
            })
            .openapi({ required: ['recordingConsent'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Recording consent requirement set successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Setting recording consent requirement is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['breakout-room', 'call', 'classified', 'value']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    412: {
      description: 'No recording server is configured',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('config') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenParticipantsResendInvitationsRoute =
  createRoute({
    method: 'post',
    path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/participants/resend-invitations',
    tags: ['room'],
    summary: 'Resend invitations',
    operationId: 'room-resend-invitations',
    request: {
      params: z.object({
        apiVersion: z
          .literal('v4')
          .default('v4')
          .openapi({
            param: {
              name: 'apiVersion',
              in: 'path',
              required: true,
              schema: { type: 'string', enum: ['v4'], default: 'v4' },
            },
          }),
        token: z
          .string()
          .regex(/^[a-z0-9]{4,30}$/)
          .openapi({
            param: {
              name: 'token',
              in: 'path',
              required: true,
              schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
            },
          }),
      }),
      headers: z.object({
        'OCS-APIRequest': z
          .stringbool()
          .default(true)
          .openapi({
            param: {
              name: 'OCS-APIRequest',
              in: 'header',
              description: 'Required to be true for the API request to pass',
              required: true,
              schema: { type: 'boolean', default: true },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                attendeeId: z
                  .preprocess(
                    (val) =>
                      typeof val === 'number' && Number.isSafeInteger(val)
                        ? BigInt(val)
                        : typeof val === 'string' && /^-?\d+$/.test(val)
                          ? BigInt(val)
                          : val,
                    z.int64().min(0n),
                  )
                  .nullable()
                  .exactOptional()
                  .openapi({
                    type: ['integer', 'null'],
                    format: 'int64',
                    minimum: 0,
                    description: 'ID of the attendee',
                  }),
              })
              .openapi({ required: [] }),
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Invitation resent successfully',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      401: {
        description: 'Current user is not logged in',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      404: {
        description: 'Attendee not found',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
    },
    security: [{ bearer_auth: [] }, { basic_auth: [] }],
  })

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMessageExpirationRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/message-expiration',
  tags: ['room'],
  summary: 'Update message expiration time',
  operationId: 'room-set-message-expiration',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              seconds: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64().min(0n),
                )
                .openapi({ type: 'integer', format: 'int64', minimum: 0, description: 'New time' }),
            })
            .openapi({ required: ['seconds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Message expiration time updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating message expiration time is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.union([
                    z
                      .object({
                        error: z.enum(['breakout-room', 'type', 'value']),
                        forced: z
                          .preprocess(
                            (val) =>
                              typeof val === 'number' && Number.isSafeInteger(val)
                                ? BigInt(val)
                                : typeof val === 'string' && /^-?\d+$/.test(val)
                                  ? BigInt(val)
                                  : val,
                            z.int64().min(0n),
                          )
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                      })
                      .openapi({ required: ['error'] }),
                    z
                      .object({
                        error: z.literal('forced'),
                        forced: z
                          .preprocess(
                            (val) =>
                              typeof val === 'number' && Number.isSafeInteger(val)
                                ? BigInt(val)
                                : typeof val === 'string' && /^-?\d+$/.test(val)
                                  ? BigInt(val)
                                  : val,
                            z.int64().min(0n),
                          )
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                      })
                      .openapi({ required: ['error'] }),
                  ]),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenImportEmailsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/import-emails',
  tags: ['room'],
  summary: 'Import a list of email attendees',
  description:
    'Content format is comma separated values: - Header line is required and must match `"email","name"` or `"email"` - One entry per line (e.g. `"John Doe","john@example.tld"`)\nRequired capability: `email-csv-import`',
  operationId: 'room-import-emails-as-participants',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              testRun: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'When set to true, the file is validated and no email is actually sent nor any participant added to the conversation',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'All entries imported successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      invites: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                      duplicates: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                      invalid: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                      invalidLines: z
                        .array(
                          z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                        )
                        .exactOptional(),
                      type: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(-1n).max(6n),
                        )
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64', minimum: -1, maximum: 6 }),
                    })
                    .openapi({ required: ['invites', 'duplicates'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description:
        'Import was not successful, e.g. when the conversation is classified. When message is provided the string is in user language and should be displayed as an error.',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum([
                        'classified',
                        'room',
                        'file',
                        'header-email',
                        'header-name',
                        'rows',
                      ]),
                      message: z.string().exactOptional(),
                      invites: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                      duplicates: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                      invalid: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(0n),
                        )
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                      invalidLines: z
                        .array(
                          z
                            .preprocess(
                              (val) =>
                                typeof val === 'number' && Number.isSafeInteger(val)
                                  ? BigInt(val)
                                  : typeof val === 'string' && /^-?\d+$/.test(val)
                                    ? BigInt(val)
                                    : val,
                              z.int64().min(0n),
                            )
                            .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
                        )
                        .exactOptional(),
                      type: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64().min(-1n).max(6n),
                        )
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64', minimum: -1, maximum: 6 }),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenCapabilitiesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/capabilities',
  tags: ['room'],
  summary: 'Get capabilities for a room',
  description:
    'See "Capability handling in federated conversations" in https://github.com/nextcloud/spreed/issues/10680 to learn which capabilities should be considered from the local server or from the remote server.',
  operationId: 'room-get-capabilities',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get capabilities successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.union([CapabilitiesSchema, z.looseObject({})]),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Nextcloud-Talk-Hash': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Nextcloud-Talk-Proxy-Hash': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenMeetingRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/meeting',
  tags: ['room'],
  summary: 'Schedule a meeting for a conversation',
  description: 'Required capability: `schedule-meeting`',
  operationId: 'room-schedule-meeting',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              calendarUri: z
                .string()
                .openapi({
                  description:
                    "Last part of the calendar URI as seen by the participant e.g. 'personal' or 'company_shared_by_other_user'",
                }),
              start: z
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
                  description: 'Unix timestamp when the meeting starts',
                }),
              attendeeIds: z
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
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'List of attendee ids to invite, if null everyone will be invited, if empty array only the actor will receive the event',
                }),
              end: z
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
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  default: null,
                  description:
                    'Unix timestamp when the meeting ends, falls back to 60 minutes after start',
                }),
              title: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'Title or summary of the event, falling back to the conversation name if none is given',
                }),
              description: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'Description of the event, falling back to the conversation description if none is given',
                }),
            })
            .openapi({ required: ['calendarUri', 'start'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Meeting scheduled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Meeting could not be created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      error: z.enum(['calendar', 'conversation', 'email', 'end', 'start']),
                    })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionSettingsUserRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/settings/user',
  tags: ['settings'],
  summary: 'Update user setting',
  operationId: 'settings-set-user-setting',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              key: z
                .enum(['attachment_folder', 'read_status_privacy', 'typing_privacy', 'play_sounds'])
                .openapi({ description: 'Key to update' }),
              value: z
                .xor([
                  z.string(),
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
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'New value for the key' }),
            })
            .openapi({ required: ['key'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User setting updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating user setting is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionSignalingSettingsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/signaling/settings',
  tags: ['internal_signaling', 'external_signaling'],
  summary: 'Get the signaling settings',
  operationId: 'signaling-get-settings',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v3')
        .default('v3')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v3'], default: 'v3' },
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'Token of the room',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'talk-recording-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-recording-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-recording-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-recording-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the random seed, signed with the shared recording secret, to verify authenticity from the recording backend',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-sipbridge-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the room token to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-sipbridge-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the room token, signed with the shared SIP bridge secret, to verify authenticity from the SIP bridge',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Signaling settings returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: SignalingSettingsSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Recording request invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Room not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/signaling/{token}',
  tags: ['internal_signaling'],
  summary: 'Get signaling messages',
  operationId: 'signaling-pull-messages',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v3')
        .default('v3')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v3'], default: 'v3' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Token of the room',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Signaling messages returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.array(
                    z
                      .object({
                        type: z.string(),
                        data: z.xor([z.array(SignalingSessionSchema), z.string()]),
                      })
                      .openapi({ required: ['type', 'data'] }),
                  ),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Getting signaling messages is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Session, room or participant not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.array(
                    z
                      .object({
                        type: z.string(),
                        data: z.xor([z.array(SignalingSessionSchema), z.string()]),
                      })
                      .openapi({ required: ['type', 'data'] }),
                  ),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    409: {
      description: 'Session killed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.array(
                    z
                      .object({
                        type: z.string(),
                        data: z.xor([z.array(SignalingSessionSchema), z.string()]),
                      })
                      .openapi({ required: ['type', 'data'] }),
                  ),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionSignalingTokenRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/signaling/{token}',
  tags: ['internal_signaling'],
  summary: 'Send signaling messages',
  operationId: 'signaling-send-messages',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v3')
        .default('v3')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v3'], default: 'v3' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Token of the room',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ messages: z.string().openapi({ description: 'JSON encoded messages' }) })
            .openapi({ required: ['messages'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Signaling message sent successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Sending signaling message is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.string() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedTempUserAvatarRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/temp-user-avatar',
  tags: ['user_avatar'],
  summary: 'Upload your avatar as a user',
  operationId: 'temp_avatar-post-avatar',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Avatar uploaded successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Uploading avatar is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedTempUserAvatarRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/temp-user-avatar',
  tags: ['user_avatar'],
  summary: 'Delete your avatar as a user',
  operationId: 'temp_avatar-delete-avatar',
  request: {
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Avatar deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Deleting avatar is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('avatar') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/threads/recent',
  tags: ['thread'],
  summary: 'Get recent active threads in a conversation',
  description: 'Required capability: `threads`',
  operationId: 'thread-get-recent-active-threads',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(50n))
        .default(50n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Number of threads to return',
            schema: { type: 'integer', format: 'int64', default: 50, minimum: 1, maximum: 50 },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of threads returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ThreadInfoSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/subscribed-threads',
  tags: ['thread'],
  summary: 'Get subscribed threads for a user',
  description: 'Required capability: `threads`',
  operationId: 'thread-get-subscribed-threads',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n).max(100n))
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Number of threads to return',
            schema: { type: 'integer', format: 'int64', default: 100, minimum: 1, maximum: 100 },
            required: false,
          },
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'Offset in the threads list',
            schema: { type: 'integer', format: 'int64', default: 0, minimum: 0 },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of threads returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ThreadInfoSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/threads/{threadId}',
  tags: ['thread'],
  summary: 'Get thread info of a single thread',
  description: 'Required capability: `threads`',
  operationId: 'thread-get-thread',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      threadId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'threadId',
            in: 'path',
            description: 'The thread ID to get the info for',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Thread info returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ThreadInfoSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Thread not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['thread', 'status']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/threads/{threadId}',
  tags: ['thread'],
  summary: 'Rename a thread',
  description: 'Required capability: `threads`',
  operationId: 'thread-rename-thread',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      threadId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'threadId',
            in: 'path',
            description: 'The thread ID to get the info for',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              threadTitle: z
                .string()
                .openapi({ description: 'New thread title, must not be empty' }),
            })
            .openapi({ required: ['threadTitle'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Thread renamed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ThreadInfoSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'When the provided title is empty',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('title') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Not allowed, either not the original author or not a moderator',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.literal('permission') })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Thread not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.literal('thread') }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/chat/{token}/threads/{messageId}/notify',
  tags: ['thread'],
  summary: 'Set notification level for a specific thread',
  description: 'Required capability: `threads`',
  operationId: 'thread-set-notification-level',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: "The message to create a thread for (Doesn't have to be the root)",
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              level: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .openapi({ type: 'integer', format: 'int64', description: 'New level' }),
            })
            .openapi({ required: ['level'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully set notification level for thread',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ThreadInfoSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Notification level was invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['level', 'message', 'status', 'top-most']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Message or top most message not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['level', 'message', 'status', 'top-most']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/proxy/new/user-avatar/{size}',
  tags: ['avatar'],
  summary: 'Get the avatar of a cloudId user when inviting users while creating a conversation',
  operationId: 'avatar-get-user-proxy-avatar-without-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      size: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(64n), z.literal(512n)]),
        )
        .openapi({
          param: {
            name: 'size',
            in: 'path',
            description: 'Avatar size',
            required: true,
            schema: { type: 'integer', format: 'int64', enum: [64, 512] },
          },
        }),
    }),
    query: z.object({
      cloudId: z
        .string()
        .openapi({
          param: {
            name: 'cloudId',
            in: 'query',
            description: 'Federation CloudID to get the avatar for',
            required: true,
            schema: { type: 'string' },
          },
        }),
      darkTheme: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'darkTheme',
            in: 'query',
            description: 'Theme used for background',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionProxyNewUserAvatarSizeDarkRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/proxy/new/user-avatar/{size}/dark',
  tags: ['avatar'],
  summary:
    'Get the dark mode avatar of a cloudId user when inviting users while creating a conversation',
  operationId: 'avatar-get-user-proxy-avatar-dark-without-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      size: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(64n), z.literal(512n)]),
        )
        .openapi({
          param: {
            name: 'size',
            in: 'path',
            description: 'Avatar size',
            required: true,
            schema: { type: 'integer', format: 'int64', enum: [64, 512] },
          },
        }),
    }),
    query: z.object({
      cloudId: z
        .string()
        .openapi({
          param: {
            name: 'cloudId',
            in: 'query',
            description: 'Federation CloudID to get the avatar for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/proxy/{token}/user-avatar/{size}',
  tags: ['avatar'],
  summary: 'Get the avatar of a cloudId user',
  operationId: 'avatar-get-user-proxy-avatar',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      size: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(64n), z.literal(512n)]),
        )
        .openapi({
          param: {
            name: 'size',
            in: 'path',
            description: 'Avatar size',
            required: true,
            schema: { type: 'integer', format: 'int64', enum: [64, 512] },
          },
        }),
    }),
    query: z.object({
      cloudId: z
        .string()
        .openapi({
          param: {
            name: 'cloudId',
            in: 'query',
            description: 'Federation CloudID to get the avatar for',
            required: true,
            schema: { type: 'string' },
          },
        }),
      darkTheme: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'darkTheme',
            in: 'query',
            description: 'Theme used for background',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionProxyTokenUserAvatarSizeDarkRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/proxy/{token}/user-avatar/{size}/dark',
  tags: ['avatar'],
  summary: 'Get the dark mode avatar of a cloudId user',
  operationId: 'avatar-get-user-proxy-avatar-dark',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      size: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          },
          z.union([z.literal(64n), z.literal(512n)]),
        )
        .openapi({
          param: {
            name: 'size',
            in: 'path',
            description: 'Avatar size',
            required: true,
            schema: { type: 'integer', format: 'int64', enum: [64, 512] },
          },
        }),
    }),
    query: z.object({
      cloudId: z
        .string()
        .openapi({
          param: {
            name: 'cloudId',
            in: 'query',
            description: 'Federation CloudID to get the avatar for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User avatar returned',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/federation/invitation/{id}',
  tags: ['federation'],
  summary: 'Accept a federation invites',
  description: '🚧 Draft: Still work in progress',
  operationId: 'federation-accept-share',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Invite accepted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invite can not be accepted (maybe it was accepted already)',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Invite can not be found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    410: {
      description: 'Remote server could not be reached to notify about the acceptance',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/federation/invitation/{id}',
  tags: ['federation'],
  summary: 'Decline a federation invites',
  description: '🚧 Draft: Still work in progress',
  operationId: 'federation-reject-share',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the share',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Invite declined successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description:
        'Invite was already accepted, use the "Remove the current user from a room" endpoint instead',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Invite can not be found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/federation/invitation',
  tags: ['federation'],
  summary: 'Get a list of federation invites',
  description: '🚧 Draft: Still work in progress',
  operationId: 'federation-get-shares',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get list of received federation invites successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(FederationInviteSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/federation/active',
  tags: ['room'],
  summary: 'Join room on the host server using the session id of the federated user',
  description: 'The session id can be null only for requests from Talk < 20.',
  operationId: 'room-join-federated-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Token of the room',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sessionId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Federated session id to join with' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Federated user joined the room',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        'X-Nextcloud-Talk-Hash': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    404: {
      description: 'Room not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenFederationActiveRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/federation/active',
  tags: ['room'],
  summary: 'Leave room on the host server using the session id of the federated user',
  operationId: 'room-leave-federated-room',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Token of the room',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'query',
            description: 'Federated session id to leave with',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-federation': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-federation',
            in: 'header',
            description:
              'Set to 1 when the request is performed by another Nextcloud Server to indicate a federation request',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully left the room',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Room not found (non-federation request)',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionBotTokenMessageRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bot/{token}/message',
  tags: ['bot'],
  summary: 'Sends a new chat message to the given room',
  description: 'The author and timestamp are automatically set to the current user/guest and time.',
  operationId: 'bot-send-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Conversation token',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-talk-bot-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-bot-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the message to generate the SHA256-HMAC request signature',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-nextcloud-talk-bot-signature': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-bot-signature',
            in: 'header',
            description:
              'SHA256-HMAC signature over the concatenation of the random seed and the message, signed with the shared bot secret, to verify authenticity',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().openapi({ description: 'The message to send' }),
              referenceId: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'For the message to be able to later identify it again' }),
              replyTo: z
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
                  description: 'Parent id which this message is a reply to',
                }),
              silent: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'If sent silent the chat message will not create any notifications',
                }),
              threadTitle: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    'Only supported when not replying, when given will create a thread (requires `threads` capability)',
                }),
              threadId: z
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
                  description:
                    'Thread id which this message is a reply to without quoting a specific message (ignored when $replyTo is given, also requires `threads` capability)',
                }),
            })
            .openapi({ required: ['message'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Message sent successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'When the replyTo is invalid or message is empty',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Sending message is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    413: {
      description: 'Message too long',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bot/{token}/reaction/{messageId}',
  tags: ['bot'],
  summary: 'Adds a reaction to a chat message',
  operationId: 'bot-react',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Conversation token',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-talk-bot-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-bot-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the reaction to generate the SHA256-HMAC request signature',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-nextcloud-talk-bot-signature': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-bot-signature',
            in: 'header',
            description:
              'SHA256-HMAC signature over the concatenation of the random seed and the reaction, signed with the shared bot secret, to verify authenticity',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ reaction: z.string().openapi({ description: 'Reaction to add' }) })
            .openapi({ required: ['reaction'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Reaction already exists',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    201: {
      description: 'Reacted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Reacting is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Reacting is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Reaction not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionBotTokenReactionMessageIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bot/{token}/reaction/{messageId}',
  tags: ['bot'],
  summary: 'Deletes a reaction from a chat message',
  operationId: 'bot-delete-reaction',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'Conversation token',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      messageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    query: z.object({
      reaction: z
        .string()
        .openapi({
          param: {
            name: 'reaction',
            in: 'query',
            description: 'Reaction to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-talk-bot-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-bot-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the reaction to generate the SHA256-HMAC request signature',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-nextcloud-talk-bot-signature': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-bot-signature',
            in: 'header',
            description:
              'SHA256-HMAC signature over the concatenation of the random seed and the reaction, signed with the shared bot secret, to verify authenticity',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reaction deleted successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Reacting is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Reacting is not allowed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Reaction not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionBotAskFeaturesRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bot/ask-features',
  tags: ['bot'],
  summary: 'Get the features that are enabled for the requesting bot',
  description:
    'Allows bots to check which features an administrator has enabled for them, without requiring administrator credentials. The request is signed with the shared bot secret like all other bot requests: the signature is computed over the random seed and the conversation token sent in the request body, which is used to look the bot up. Keeping the token in the signed body binds the request to the conversation, so the signature headers on their own cannot be replayed.\nRequired capability: `bot-features-api`',
  operationId: 'bot-get-bot-features',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-talk-bot-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-bot-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the conversation token to generate the SHA256-HMAC request signature',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-nextcloud-talk-bot-signature': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-bot-signature',
            in: 'header',
            description:
              'SHA256-HMAC signature over the concatenation of the random seed and the conversation token, signed with the shared bot secret, to verify authenticity',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ token: z.string().openapi({ description: 'Conversation token' }) })
            .openapi({ required: ['token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Bot features returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: BotFeaturesSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Missing or malformed signature headers',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Bot could not be verified for the conversation',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionBotAdminRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bot/admin',
  tags: ['settings'],
  summary: 'List admin bots',
  description: 'This endpoint requires admin access',
  operationId: 'bot-admin-list-bots',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Bot list returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(BotWithDetailsSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionCertificateExpirationRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/certificate/expiration',
  tags: ['settings'],
  summary:
    'Get the certificate expiration for a configured TURN, STUN, signaling or recording server',
  description: 'This endpoint requires admin access',
  operationId: 'certificate-get-certificate-expiration',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    query: z.object({
      host: z
        .string()
        .openapi({
          param: {
            name: 'host',
            in: 'query',
            description: 'Host to check',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Certificate expiration returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      expiration_in_days: z
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
                        .openapi({ type: ['integer', 'null'], format: 'int64' }),
                    })
                    .openapi({ required: ['expiration_in_days'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Getting certificate expiration is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverRequesttrialRoute =
  createRoute({
    method: 'post',
    path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/hostedsignalingserver/requesttrial',
    tags: ['hosted_signaling_server'],
    summary: 'Request a trial account',
    description: 'This endpoint requires admin access',
    operationId: 'hosted_signaling_server-request-trial',
    request: {
      params: z.object({
        apiVersion: z
          .literal('v1')
          .default('v1')
          .openapi({
            param: {
              name: 'apiVersion',
              in: 'path',
              required: true,
              schema: { type: 'string', enum: ['v1'], default: 'v1' },
            },
          }),
      }),
      headers: z.object({
        'OCS-APIRequest': z
          .stringbool()
          .default(true)
          .openapi({
            param: {
              name: 'OCS-APIRequest',
              in: 'header',
              description: 'Required to be true for the API request to pass',
              required: true,
              schema: { type: 'boolean', default: true },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                url: z.string().openapi({ description: 'Server URL' }),
                name: z.string().openapi({ description: 'Display name of the user' }),
                email: z.string().openapi({ description: 'Email of the user' }),
                language: z.string().openapi({ description: 'Language of the user' }),
                country: z.string().openapi({ description: 'Country of the user' }),
              })
              .openapi({ required: ['url', 'name', 'email', 'language', 'country'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Trial requested successfully',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.record(z.string(), z.object({})) })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      400: {
        description: 'Requesting trial is not possible',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      401: {
        description: 'Current user is not logged in',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      403: {
        description: 'Logged in account must be an admin',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
      500: {
        description: '',
        content: {
          'application/json': {
            schema: z
              .object({
                ocs: z
                  .object({
                    meta: OCSMetaSchema,
                    data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                  })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          },
        },
      },
    },
    security: [{ bearer_auth: [] }, { basic_auth: [] }],
  })

export const deleteOcsV2PhpAppsSpreedApiApiVersionHostedsignalingserverDeleteRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/hostedsignalingserver/delete',
  tags: ['hosted_signaling_server'],
  summary: 'Delete the account',
  description: 'This endpoint requires admin access',
  operationId: 'hosted_signaling_server-delete-account',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Account deleted successfully' },
    400: {
      description: 'Deleting account is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ message: z.string() }).openapi({ required: ['message'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/admin/homeserver',
  tags: ['matrix_admin'],
  summary: 'List configured homeservers',
  description: 'This endpoint requires admin access',
  operationId: 'matrix_admin-list-homeservers',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Homeservers returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(MatrixHomeserverSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/admin/homeserver',
  tags: ['matrix_admin'],
  summary: 'Add a homeserver (resolves .well-known and validates /versions)',
  description: 'This endpoint requires admin access',
  operationId: 'matrix_admin-add-homeserver',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              serverName: z
                .string()
                .openapi({ description: 'Matrix server name, e.g. example.org' }),
              name: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Label shown to users' }),
              baseUrl: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Optional client API base URL override' }),
            })
            .openapi({ required: ['serverName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Homeserver added',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: MatrixHomeserverSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Invalid or duplicate server name',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'Server unreachable or not a Matrix homeserver',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/admin/homeserver/{id}',
  tags: ['matrix_admin'],
  summary: 'Update a homeserver',
  description: 'This endpoint requires admin access',
  operationId: 'matrix_admin-update-homeserver',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      id: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Homeserver id',
            required: true,
            schema: { type: 'string', pattern: '^\\d+$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New label' }),
              enabled: z
                .boolean()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'Whether users may link accounts on it' }),
              baseUrl: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({ description: 'New client API base URL' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Homeserver updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: MatrixHomeserverSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Homeserver not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'New base URL is not a Matrix homeserver',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/admin/homeserver/{id}',
  tags: ['matrix_admin'],
  summary: 'Remove a homeserver',
  description: 'This endpoint requires admin access',
  operationId: 'matrix_admin-remove-homeserver',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      id: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Homeserver id',
            required: true,
            schema: { type: 'string', pattern: '^\\d+$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Homeserver removed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Users still have accounts linked on the homeserver',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['accounts', 'homeserver']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Homeserver not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.enum(['accounts', 'homeserver']) })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionMatrixAdminHomeserverIdTestRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/matrix/admin/homeserver/{id}/test',
  tags: ['matrix_admin'],
  summary: 'Test the connection to a homeserver (re-fetches /versions)',
  description: 'This endpoint requires admin access',
  operationId: 'matrix_admin-test-homeserver',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      id: z
        .string()
        .regex(/^\d+$/)
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Homeserver id',
            required: true,
            schema: { type: 'string', pattern: '^\\d+$' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Connection works',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: MatrixHomeserverSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Homeserver not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    502: {
      description: 'Server unreachable',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionBridgeVersionRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bridge/version',
  tags: ['matterbridge'],
  summary: 'Get Matterbridge version',
  description: 'This endpoint requires admin access',
  operationId: 'matterbridge_settings-get-matterbridge-version',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Bridge version returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ version: z.string() }).openapi({ required: ['version'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Getting bridge version is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionBridgeRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/bridge',
  tags: ['matterbridge'],
  summary: 'Stop all bridges',
  description: 'This endpoint requires admin access',
  operationId: 'matterbridge_settings-stop-all-bridges',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'All bridges stopped successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.boolean() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    406: {
      description: 'Stopping all bridges is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionRecordingWelcomeServerIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/welcome/{serverId}',
  tags: ['settings'],
  summary: 'Get the welcome message of a recording server',
  description: 'This endpoint requires admin access',
  operationId: 'recording-get-welcome-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      serverId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'serverId',
            in: 'path',
            description: 'ID of the server',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Welcome message returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ version: z.float64() }).openapi({ required: ['version'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Recording server not found or not configured',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionSettingsSipRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/settings/sip',
  tags: ['settings'],
  summary: 'Update SIP bridge settings',
  description: 'This endpoint requires admin access',
  operationId: 'settings-setsip-settings',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sipGroups: z
                .array(z.string())
                .default([])
                .exactOptional()
                .openapi({ description: 'New SIP groups' }),
              dialInInfo: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'New dial info' }),
              sharedSecret: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'New shared secret' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully set new SIP settings',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionSignalingWelcomeServerIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/signaling/welcome/{serverId}',
  tags: ['settings'],
  summary: 'Get the welcome message from a signaling server',
  description:
    'Only available for logged-in users because guests can not use the apps right now.\nThis endpoint requires admin access',
  operationId: 'signaling-get-welcome-message',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v3')
        .default('v3')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v3'], default: 'v3' },
          },
        }),
      serverId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .openapi({
          param: {
            name: 'serverId',
            in: 'path',
            description: 'ID of the signaling server',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 0 },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Welcome message returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      version: z.string(),
                      warning: z.string().exactOptional(),
                      features: z.array(z.string()).min(1).exactOptional(),
                    })
                    .openapi({ required: ['version'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Signaling server not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ error: z.string(), version: z.string().exactOptional() })
                    .openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRecordingBackendRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/backend',
  tags: ['recording'],
  summary: 'Update the recording status as a backend',
  operationId: 'recording-backend',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
    }),
    headers: z.object({
      'talk-recording-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-recording-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the request body to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-recording-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-recording-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the request body, signed with the shared recording secret, to verify authenticity from the recording backend',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Recording status updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Updating recording status is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      type: z.string(),
                      error: z
                        .object({ code: z.string(), message: z.string() })
                        .openapi({ required: ['code', 'message'] }),
                    })
                    .openapi({ required: ['type', 'error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Missing permissions to update recording status',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      type: z.string(),
                      error: z
                        .object({ code: z.string(), message: z.string() })
                        .openapi({ required: ['code', 'message'] }),
                    })
                    .openapi({ required: ['type', 'error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Room not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      type: z.string(),
                      error: z
                        .object({ code: z.string(), message: z.string() })
                        .openapi({ required: ['code', 'message'] }),
                    })
                    .openapi({ required: ['type', 'error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenRequestUploadRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/{token}/request-upload',
  tags: ['recording'],
  summary: 'Request a temporary upload share for a recording',
  description:
    'Creates a password-protected public link share with create-only permissions on the per-room recording folder, so the recording backend can upload a large recording via the chunked public WebDAV API.\nChunked uploading works the same way as it does for clients, documented in https://docs.nextcloud.com/server/latest/developer_manual/client_apis/WebDAV/chunking.html#chunked-upload-v2\n- Base URL: `public.php/dav/uploads/$SHARETOKEN` - HTTP user: share token - HTTP password: share password\nAfter the upload and assembling is finished call the `/api/{apiVersion}/recording/{token}/store` endpoint {@see self::store()} and provide the file name, to trigger the notification for the moderator.\nRequired capability: `recording-chunked-upload`',
  operationId: 'recording-request-upload',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'talk-recording-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-recording-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the room token to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-recording-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-recording-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the room token, signed with the shared recording secret, to verify authenticity from the recording backend',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              owner: z.string().openapi({ description: 'User that will own the recording file.' }),
              fileName: z
                .string()
                .openapi({
                  description:
                    'Suggested file name of the recording. The extension must be one of the allowed recording formats.',
                }),
            })
            .openapi({ required: ['owner', 'fileName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Upload share created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ token: z.string(), password: z.string(), fileName: z.string() })
                    .openapi({ required: ['token', 'password', 'fileName'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Creating the upload share is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Missing permissions to request the upload share',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      type: z.string(),
                      error: z
                        .object({ code: z.string(), message: z.string() })
                        .openapi({ required: ['code', 'message'] }),
                    })
                    .openapi({ required: ['type', 'error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRecordingTokenStoreRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/{token}/store',
  tags: ['recording'],
  summary: 'Store the recording',
  description:
    'When a `fileName` is provided the recording is expected to have been uploaded already through a share requested with {@see self::requestUpload()}, and only the post-processing is run. Otherwise the recording is read from the multipart `file` upload.\nRequired capability: `recording-v1`',
  operationId: 'recording-store',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v1')
        .default('v1')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v1'], default: 'v1' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'talk-recording-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-recording-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the room token to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-recording-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-recording-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the room token, signed with the shared recording secret, to verify authenticity from the recording backend',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              owner: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'User that will own the recording file. `null` is actually not allowed and will always result in a "400 Bad Request". It\'s only allowed code-wise to handle requests where the post data exceeded the limits, so we can return a proper error instead of "500 Internal Server Error".',
                }),
              fileName: z
                .string()
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'The sanitized file name returned by the request-upload request. When provided, no multipart `file` is expected.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Recording stored successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Storing recording is not possible',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.object({ error: z.string() }).openapi({ required: ['error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Missing permissions to store recording',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      type: z.string(),
                      error: z
                        .object({ code: z.string(), message: z.string() })
                        .openapi({ required: ['code', 'message'] }),
                    })
                    .openapi({ required: ['type', 'error'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsSpreedApiApiVersionRoomTokenPinPinRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/pin/{pin}',
  tags: ['room'],
  summary: 'Verify a dial-in PIN (SIP bridge)',
  operationId: 'room-verify-dial-in-pin-deprecated',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
      pin: z
        .string()
        .regex(/^\d{7,32}$/)
        .openapi({
          param: {
            name: 'pin',
            in: 'path',
            description: 'PIN the participant used to dial-in',
            required: true,
            schema: { type: 'string', pattern: '^\\d{7,32}$' },
          },
        }),
    }),
    headers: z.object({
      'talk-sipbridge-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the room token to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-sipbridge-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the room token, signed with the shared SIP bridge secret, to verify authenticity from the SIP bridge',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Participant returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'SIP request invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Participant not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    501: {
      description: 'SIP dial-in is not configured',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialinRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/verify-dialin',
  tags: ['room'],
  summary: 'Verify a dial-in PIN (SIP bridge)',
  operationId: 'room-verify-dial-in-pin',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'talk-sipbridge-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the room token to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-sipbridge-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the room token, signed with the shared SIP bridge secret, to verify authenticity from the SIP bridge',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              pin: z.string().openapi({ description: 'PIN the participant used to dial-in' }),
            })
            .openapi({ required: ['pin'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Participant returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'SIP request invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Participant not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    501: {
      description: 'SIP dial-in is not configured',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomDirectDialInRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/direct-dial-in',
  tags: ['room'],
  summary: 'Direct dial-in (SIP bridge)',
  description: 'Required capability: `sip-direct-dialin`',
  operationId: 'room-direct-dial-in',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
    }),
    headers: z.object({
      'talk-sipbridge-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the phone number to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-sipbridge-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the phone number, signed with the shared SIP bridge secret, to verify authenticity from the SIP bridge',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              phoneNumber: z.string().openapi({ description: 'Phone number that is called' }),
              caller: z.string().openapi({ description: 'Phone number of the person calling in' }),
            })
            .openapi({ required: ['phoneNumber', 'caller'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Call conversation created',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'SIP request invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Number is not assigned to any user',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    500: {
      description: 'Error occurred while creating conversation',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    501: {
      description: 'SIP dial-in is not configured',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenVerifyDialoutRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/verify-dialout',
  tags: ['room'],
  summary: 'Verify a dial-out number (SIP bridge)',
  operationId: 'room-verify-dial-out-number',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'talk-sipbridge-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the room token to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-sipbridge-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the room token, signed with the shared SIP bridge secret, to verify authenticity from the SIP bridge',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              number: z.string().openapi({ description: 'E164 formatted phone number' }),
              options: z
                .object({
                  actorId: z.string().exactOptional(),
                  actorType: z.string().exactOptional(),
                  attendeeId: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64(),
                    )
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64' }),
                })
                .default({})
                .exactOptional()
                .openapi({
                  description: 'Additional details to verify the validity of the request',
                  required: [],
                }),
            })
            .openapi({ required: ['number'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Participant created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Phone number and details could not be confirmed',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'SIP request invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Phone number is not invited as a participant',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    501: {
      description: 'SIP dial-out is not configured',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionRoomTokenOpenDialInRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/open-dial-in',
  tags: ['room'],
  summary: 'Create a guest by their dial-in',
  operationId: 'room-create-guest-by-dial-in',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    headers: z.object({
      'talk-sipbridge-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the room token to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-sipbridge-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the room token, signed with the shared SIP bridge secret, to verify authenticity from the SIP bridge',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Participant created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RoomSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'SIP not enabled',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'SIP request invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsSpreedApiApiVersionRoomTokenRejectedDialoutRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/room/{token}/rejected-dialout',
  tags: ['room'],
  summary: 'Reset call ID of a dial-out participant when the SIP gateway rejected it',
  operationId: 'room-rejected-dial-out-request',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v4')
        .default('v4')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v4'], default: 'v4' },
          },
        }),
      token: z
        .string()
        .regex(/^[a-z0-9]{4,30}$/)
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            required: true,
            schema: { type: 'string', pattern: '^[a-z0-9]{4,30}$' },
          },
        }),
    }),
    query: z.object({
      callId: z
        .string()
        .openapi({
          param: {
            name: 'callId',
            in: 'query',
            description:
              'The call ID provided by the SIP bridge earlier to uniquely identify the call to terminate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      options: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'options',
            in: 'query',
            description: 'Additional details to verify the validity of the request',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'talk-sipbridge-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the room token to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'talk-sipbridge-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'talk-sipbridge-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the room token, signed with the shared SIP bridge secret, to verify authenticity from the SIP bridge',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Call ID reset',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Call ID mismatch or attendeeId not found in $options',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'SIP request invalid',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Participant was not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    501: {
      description: 'SIP dial-out is not configured',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any().nullable() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsSpreedApiApiVersionSignalingBackendRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/spreed/api/{apiVersion}/signaling/backend',
  tags: ['signaling'],
  summary: 'Backend API to query information required for standalone signaling servers',
  description:
    'See sections "Backend validation" in https://nextcloud-spreed-signaling.readthedocs.io/en/latest/standalone-signaling-api-v1/#backend-requests',
  operationId: 'signaling-backend',
  request: {
    params: z.object({
      apiVersion: z
        .literal('v3')
        .default('v3')
        .openapi({
          param: {
            name: 'apiVersion',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['v3'], default: 'v3' },
          },
        }),
    }),
    headers: z.object({
      'spreed-signaling-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'spreed-signaling-random',
            in: 'header',
            description:
              'Random seed (at least 32 bytes) used together with the request body to generate the SHA256-HMAC request checksum',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'spreed-signaling-checksum': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'spreed-signaling-checksum',
            in: 'header',
            description:
              'SHA256-HMAC checksum over the concatenation of the random seed and the request body, signed with the shared signaling secret, to verify authenticity from the signaling backend',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Always, sorry about that',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({
                      type: z.string(),
                      error: z
                        .object({ code: z.string(), message: z.string() })
                        .exactOptional()
                        .openapi({ required: ['code', 'message'] }),
                      auth: z
                        .object({
                          version: z.string(),
                          userid: z.string().exactOptional(),
                          user: z.record(z.string(), z.object({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: ['version'] }),
                      room: z
                        .object({
                          version: z.string(),
                          roomid: z.string().exactOptional(),
                          properties: z.record(z.string(), z.object({})).exactOptional(),
                          permissions: z.array(z.string()).exactOptional(),
                          session: z.record(z.string(), z.object({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: ['version'] }),
                    })
                    .openapi({ required: ['type'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})
