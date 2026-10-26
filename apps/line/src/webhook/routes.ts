import { createRoute, z } from '@hono/zod-openapi'

const SourceSchema = z
  .object({ type: z.string().openapi({ description: 'source type' }) })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#source-user' },
    description: 'the source of the event.',
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        user: '#/components/schemas/UserSource',
        group: '#/components/schemas/GroupSource',
        room: '#/components/schemas/RoomSource',
      },
    },
  })
  .openapi('Source')

const EventModeSchema = z
  .enum(['active', 'standby'])
  .openapi({ description: 'Channel state.' })
  .openapi('EventMode')

const DeliveryContextSchema = z
  .object({
    isRedelivery: z
      .boolean()
      .openapi({ description: 'Whether the webhook event is a redelivered one or not.' }),
  })
  .openapi({ description: "webhook's delivery context information", required: ['isRedelivery'] })
  .openapi('DeliveryContext')

const EventSchema = z
  .object({
    type: z.string().openapi({ description: 'Type of the event' }),
    source: SourceSchema.exactOptional(),
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
        description: 'Time of the event in milliseconds.',
      }),
    mode: EventModeSchema,
    webhookEventId: z
      .string()
      .openapi({
        description:
          'Webhook Event ID. An ID that uniquely identifies a webhook event. This is a string in ULID format.',
      }),
    deliveryContext: DeliveryContextSchema,
  })
  .openapi({
    description: 'Webhook event',
    required: ['type', 'timestamp', 'mode', 'webhookEventId', 'deliveryContext'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        message: '#/components/schemas/MessageEvent',
        unsend: '#/components/schemas/UnsendEvent',
        follow: '#/components/schemas/FollowEvent',
        unfollow: '#/components/schemas/UnfollowEvent',
        join: '#/components/schemas/JoinEvent',
        leave: '#/components/schemas/LeaveEvent',
        memberJoined: '#/components/schemas/MemberJoinedEvent',
        memberLeft: '#/components/schemas/MemberLeftEvent',
        postback: '#/components/schemas/PostbackEvent',
        videoPlayComplete: '#/components/schemas/VideoPlayCompleteEvent',
        beacon: '#/components/schemas/BeaconEvent',
        accountLink: '#/components/schemas/AccountLinkEvent',
        membership: '#/components/schemas/MembershipEvent',
        module: '#/components/schemas/ModuleEvent',
        activated: '#/components/schemas/ActivatedEvent',
        deactivated: '#/components/schemas/DeactivatedEvent',
        botSuspended: '#/components/schemas/BotSuspendedEvent',
        botResumed: '#/components/schemas/BotResumedEvent',
        delivery: '#/components/schemas/PnpDeliveryCompletionEvent',
        messageEdited: '#/components/schemas/MessageEditedEvent',
      },
    },
  })
  .openapi('Event')

const CallbackRequestSchema = z
  .object({
    destination: z
      .string()
      .regex(/^U[0-9a-f]{32}$/)
      .length(33)
      .openapi({
        description:
          'User ID of a bot that should receive webhook events.\nThe user ID value is a string that matches the regular expression, `U[0-9a-f]{32}`.\n',
      }),
    events: z
      .array(EventSchema)
      .openapi({
        description:
          "Array of webhook event objects.\nThe LINE Platform may send an empty array that doesn't include a webhook event object to confirm communication.\n",
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#request-body' },
    description:
      'The request body contains a JSON object with the user ID of a bot that should receive webhook events and an array of webhook event objects.\n',
    required: ['destination', 'events'],
  })
  .openapi('CallbackRequest')

const UserSourceSchema = SourceSchema.and(
  z
    .object({
      userId: z.string().exactOptional().openapi({ description: 'ID of the source user' }),
    })
    .openapi({ required: ['type'] }),
).openapi('UserSource')

const GroupSourceSchema = SourceSchema.and(
  z
    .object({
      groupId: z.string().openapi({ description: 'Group ID of the source group chat' }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'ID of the source user. Only included in message events. Only users of LINE for iOS and LINE for Android are included in userId.',
        }),
    })
    .openapi({ required: ['type', 'groupId'] }),
).openapi('GroupSource')

const RoomSourceSchema = SourceSchema.and(
  z
    .object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'ID of the source user. Only included in message events. Only users of LINE for iOS and LINE for Android are included in userId.',
        }),
      roomId: z.string().openapi({ description: 'Room ID of the source multi-person chat' }),
    })
    .openapi({ required: ['type', 'roomId'], description: 'Source multi-person chat' }),
).openapi('RoomSource')

const MessageContentSchema = z
  .object({
    type: z.string().openapi({ description: 'Type' }),
    id: z.string().openapi({ description: 'Message ID' }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#message-event' },
    required: ['type', 'id'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        text: '#/components/schemas/TextMessageContent',
        image: '#/components/schemas/ImageMessageContent',
        video: '#/components/schemas/VideoMessageContent',
        audio: '#/components/schemas/AudioMessageContent',
        file: '#/components/schemas/FileMessageContent',
        location: '#/components/schemas/LocationMessageContent',
        sticker: '#/components/schemas/StickerMessageContent',
      },
    },
  })
  .openapi('MessageContent')

const MessageEventSchema = EventSchema.and(
  z
    .object({ replyToken: z.string().exactOptional(), message: MessageContentSchema })
    .openapi({ required: ['type', 'message'] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#message-event' },
    description: 'Webhook event object which contains the sent message.',
  })
  .openapi('MessageEvent')

const ContentProviderSchema = z
  .object({
    type: z.enum(['line', 'external']).openapi({ description: 'Provider of the image file.' }),
    originalContentUrl: z
      .url()
      .exactOptional()
      .openapi({
        description: 'URL of the image file. Only included when contentProvider.type is external.',
      }),
    previewImageUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'URL of the preview image. Only included when contentProvider.type is external.',
      }),
  })
  .openapi({ description: 'Provider of the media file.', required: ['type'] })
  .openapi('ContentProvider')

const EmojiSchema = z
  .object({
    index: z
      .int()
      .openapi({
        description:
          'Index position for a character in text, with the first character being at position 0.',
      }),
    length: z
      .int()
      .openapi({
        description:
          'The length of the LINE emoji string. For LINE emoji (hello), 7 is the length.',
      }),
    productId: z.string().openapi({ description: 'Product ID for a LINE emoji set.' }),
    emojiId: z.string().openapi({ description: 'ID for a LINE emoji inside a set.' }),
  })
  .openapi({ required: ['index', 'length', 'productId', 'emojiId'] })
  .openapi('Emoji')

const MentioneeSchema = z
  .object({
    type: z.string().openapi({ description: 'Mentioned target.' }),
    index: z
      .int32()
      .openapi({
        description:
          'Index position of the user mention for a character in text, with the first character being at position 0.',
      }),
    length: z
      .int32()
      .openapi({
        description:
          'The length of the text of the mentioned user. For a mention @example, 8 is the length.',
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#wh-text' },
    required: ['type', 'index', 'length'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        user: '#/components/schemas/UserMentionee',
        all: '#/components/schemas/AllMentionee',
      },
    },
  })
  .openapi('Mentionee')

const MentionSchema = z
  .object({
    mentionees: z
      .array(MentioneeSchema)
      .openapi({ description: 'Array of one or more mention objects. Max: 20 mentions' }),
  })
  .openapi({ required: ['mentionees'] })
  .openapi('Mention')

const TextMessageContentSchema = MessageContentSchema.and(
  z
    .object({
      text: z.string().openapi({ description: 'Message text.' }),
      emojis: z
        .array(EmojiSchema)
        .exactOptional()
        .openapi({
          description:
            'Array of one or more LINE emoji objects. Only included in the message event when the text property contains a LINE emoji.',
        }),
      mention: MentionSchema.exactOptional(),
      quoteToken: z.string().openapi({ description: 'Quote token to quote this message.\n' }),
      quotedMessageId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Message ID of a quoted message. Only included when the received message quotes a past message.',
        }),
      markAsReadToken: z
        .string()
        .exactOptional()
        .openapi({ description: 'Token used to mark the message as read.\n' }),
    })
    .openapi({ required: ['text', 'quoteToken'] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#wh-text' },
  })
  .openapi('TextMessageContent')

const UserMentioneeSchema = MentioneeSchema.and(
  z
    .object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'User ID of the mentioned user. Only included if mention.mentions[].type is user and the user consents to the LINE Official Account obtaining their user profile information.',
        }),
      isSelf: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Whether the mentioned user is the bot that receives the webhook.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Mentioned target is user' })
  .openapi('UserMentionee')

const AllMentioneeSchema = MentioneeSchema.and(z.object({}))
  .openapi({ description: 'Mentioned target is entire group' })
  .openapi('AllMentionee')

const ImageSetSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'Image set ID. Only included when multiple images are sent simultaneously.',
      }),
    index: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "An index starting from 1, indicating the image number in a set of images sent simultaneously. Only included when multiple images are sent simultaneously. However, it won't be included if the sender is using LINE 11.15 or earlier for Android.",
      }),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of images sent simultaneously.' }),
  })
  .openapi({ required: ['id'] })
  .openapi('ImageSet')

const ImageMessageContentSchema = MessageContentSchema.and(
  z
    .object({
      contentProvider: ContentProviderSchema,
      imageSet: ImageSetSchema.exactOptional(),
      quoteToken: z.string().openapi({ description: 'Quote token to quote this message.\n' }),
      markAsReadToken: z
        .string()
        .exactOptional()
        .openapi({ description: 'Token used to mark the message as read.\n' }),
    })
    .openapi({ required: ['contentProvider', 'quoteToken'] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#wh-image' },
  })
  .openapi('ImageMessageContent')

const VideoMessageContentSchema = MessageContentSchema.and(
  z
    .object({
      duration: z
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
          description: 'Length of video file (milliseconds)',
        }),
      contentProvider: ContentProviderSchema,
      quoteToken: z.string().openapi({ description: 'Quote token to quote this message.\n' }),
      markAsReadToken: z
        .string()
        .exactOptional()
        .openapi({ description: 'Token used to mark the message as read.\n' }),
    })
    .openapi({
      required: ['contentProvider', 'quoteToken'],
      description:
        'Message object which contains the video content sent from the source. The preview image is displayed in the chat and the video is played when the image is tapped.',
    }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#wh-video' },
  })
  .openapi('VideoMessageContent')

const AudioMessageContentSchema = MessageContentSchema.and(
  z
    .object({
      contentProvider: ContentProviderSchema,
      duration: z
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
          description: 'Length of audio file (milliseconds)',
        }),
      markAsReadToken: z
        .string()
        .exactOptional()
        .openapi({ description: 'Token used to mark the message as read.\n' }),
    })
    .openapi({
      required: ['contentProvider'],
      description: 'Message object which contains the audio content sent from the source.',
    }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#wh-audio' },
  })
  .openapi('AudioMessageContent')

const FileMessageContentSchema = MessageContentSchema.and(
  z
    .object({
      fileName: z.string().openapi({ description: 'File name' }),
      fileSize: z.int().openapi({ description: 'File size in bytes' }),
      markAsReadToken: z
        .string()
        .exactOptional()
        .openapi({ description: 'Token used to mark the message as read.\n' }),
    })
    .openapi({
      required: ['fileName', 'fileSize'],
      description: 'Message object which contains the file sent from the source.',
    }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#wh-file' },
  })
  .openapi('FileMessageContent')

const LocationMessageContentSchema = MessageContentSchema.and(
  z
    .object({
      title: z.string().exactOptional().openapi({ description: 'Title' }),
      address: z.string().exactOptional().openapi({ description: 'Address' }),
      latitude: z.float64().openapi({ description: 'Latitude' }),
      longitude: z.float64().openapi({ description: 'Longitude' }),
      markAsReadToken: z
        .string()
        .exactOptional()
        .openapi({ description: 'Token used to mark the message as read.\n' }),
    })
    .openapi({
      required: ['latitude', 'longitude'],
      description: 'Message object which contains the location data sent from the source.',
    }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#wh-location' },
  })
  .openapi('LocationMessageContent')

const StickerMessageContentSchema = MessageContentSchema.and(
  z
    .object({
      packageId: z.string().openapi({ description: 'Package ID' }),
      stickerId: z.string().openapi({ description: 'Sticker ID' }),
      stickerResourceType: z.enum([
        'STATIC',
        'ANIMATION',
        'SOUND',
        'ANIMATION_SOUND',
        'POPUP',
        'POPUP_SOUND',
        'CUSTOM',
        'MESSAGE',
        'NAME_TEXT',
        'PER_STICKER_TEXT',
      ]),
      keywords: z
        .array(z.string())
        .max(15)
        .exactOptional()
        .openapi({
          description:
            'Array of up to 15 keywords describing the sticker.\nIf a sticker has 16 or more keywords, a random selection of 15 keywords will be returned.\nThe keyword selection is random for each event, so different keywords may be returned for the same sticker.\n',
        }),
      text: z
        .string()
        .max(100)
        .exactOptional()
        .openapi({
          description:
            'Any text entered by the user. This property is only included for message stickers.\nMax character limit: 100\n',
        }),
      quoteToken: z.string().openapi({ description: 'Quote token to quote this message.\n' }),
      quotedMessageId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Message ID of a quoted message. Only included when the received message quotes a past message.\n',
        }),
      markAsReadToken: z
        .string()
        .exactOptional()
        .openapi({ description: 'Token used to mark the message as read.\n\n' }),
    })
    .openapi({
      required: ['packageId', 'stickerId', 'stickerResourceType', 'quoteToken'],
      description: 'Message object which contains the sticker data sent from the source.',
    }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#wh-sticker' },
  })
  .openapi('StickerMessageContent')

const UnsendDetailSchema = z
  .object({
    messageId: z.string().openapi({ description: 'The message ID of the unsent message' }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#unsend-event' },
    required: ['messageId'],
  })
  .openapi('UnsendDetail')

const UnsendEventSchema = EventSchema.and(
  z.object({ unsend: UnsendDetailSchema }).openapi({ required: ['unsend'] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#unsend-event' },
    description: 'Event object for when the user unsends a message.',
  })
  .openapi('UnsendEvent')

const FollowDetailSchema = z
  .object({
    isUnblocked: z
      .boolean()
      .openapi({
        description:
          'Whether a user has added your LINE Official Account as a friend or unblocked.',
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#follow-event' },
    required: ['isUnblocked'],
  })
  .openapi('FollowDetail')

const FollowEventSchema = EventSchema.and(
  z
    .object({
      replyToken: z
        .string()
        .openapi({ description: 'Reply token used to send reply message to this event' }),
      follow: FollowDetailSchema,
    })
    .openapi({ required: ['replyToken', 'follow'] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#follow-event' },
    description:
      'Event object for when your LINE Official Account is added as a friend (or unblocked). You can reply to follow events.',
  })
  .openapi('FollowEvent')

const UnfollowEventSchema = EventSchema.and(z.object({}))
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#unfollow-event' },
    description: 'Event object for when your LINE Official Account is blocked.',
  })
  .openapi('UnfollowEvent')

const JoinEventSchema = EventSchema.and(
  z
    .object({
      replyToken: z
        .string()
        .openapi({ description: 'Reply token used to send reply message to this event' }),
    })
    .openapi({ required: ['replyToken'] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#join-event' },
    description:
      'Event object for when your LINE Official Account joins a group chat or multi-person chat. You can reply to join events.',
  })
  .openapi('JoinEvent')

const LeaveEventSchema = EventSchema.and(z.object({}))
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#leave-event' },
    description:
      'Event object for when a user removes your LINE Official Account from a group chat or when your LINE Official Account leaves a group chat or multi-person chat.',
  })
  .openapi('LeaveEvent')

const JoinedMembersSchema = z
  .object({
    members: z
      .array(UserSourceSchema)
      .openapi({ description: 'Users who joined. Array of source user objects.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#member-joined-event',
    },
    required: ['members'],
  })
  .openapi('JoinedMembers')

const MemberJoinedEventSchema = EventSchema.and(
  z
    .object({
      replyToken: z
        .string()
        .openapi({ description: 'Reply token used to send reply message to this event' }),
      joined: JoinedMembersSchema,
    })
    .openapi({ required: ['replyToken', 'joined'] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#member-joined-event',
    },
    description:
      'Event object for when a user joins a group chat or multi-person chat that the LINE Official Account is in.',
  })
  .openapi('MemberJoinedEvent')

const LeftMembersSchema = z
  .object({
    members: z
      .array(UserSourceSchema)
      .openapi({ description: 'Users who left. Array of source user objects.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#member-left-event',
    },
    required: ['members'],
  })
  .openapi('LeftMembers')

const MemberLeftEventSchema = EventSchema.and(
  z.object({ left: LeftMembersSchema }).openapi({ required: ['left'] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#member-left-event',
    },
    description:
      'Event object for when a user leaves a group chat or multi-person chat that the LINE Official Account is in.',
  })
  .openapi('MemberLeftEvent')

const PostbackContentSchema = z
  .object({
    data: z.string().openapi({ description: 'Postback data' }),
    params: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#postback-event' },
    required: ['data'],
  })
  .openapi('PostbackContent')

const PostbackEventSchema = EventSchema.and(
  z
    .object({
      replyToken: z
        .string()
        .exactOptional()
        .openapi({ description: 'Reply token used to send reply message to this event' }),
      postback: PostbackContentSchema,
    })
    .openapi({ required: ['postback'] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#postback-event' },
    description:
      'Event object for when a user performs a postback action which initiates a postback. You can reply to postback events.',
  })
  .openapi('PostbackEvent')

const VideoPlayCompleteSchema = z
  .object({
    trackingId: z
      .string()
      .openapi({
        description:
          'ID used to identify a video. Returns the same value as the trackingId assigned to the video message.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#video-viewing-complete',
    },
    required: ['trackingId'],
  })
  .openapi('VideoPlayComplete')

const VideoPlayCompleteEventSchema = EventSchema.and(
  z
    .object({
      replyToken: z
        .string()
        .openapi({ description: 'Reply token used to send reply message to this event' }),
      videoPlayComplete: VideoPlayCompleteSchema,
    })
    .openapi({ required: ['replyToken', 'videoPlayComplete'] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#video-viewing-complete',
    },
    description:
      'Event for when a user finishes viewing a video at least once with the specified trackingId sent by the LINE Official Account.',
  })
  .openapi('VideoPlayCompleteEvent')

const BeaconContentSchema = z
  .object({
    hwid: z.string().openapi({ description: 'Hardware ID of the beacon that was detected' }),
    type: z.enum(['enter', 'banner', 'stay']).openapi({ description: 'Type of beacon event.' }),
    dm: z
      .string()
      .exactOptional()
      .openapi({ description: 'Device message of beacon that was detected.' }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#beacon-event' },
    required: ['hwid', 'type'],
  })
  .openapi('BeaconContent')

const BeaconEventSchema = EventSchema.and(
  z
    .object({
      replyToken: z
        .string()
        .openapi({ description: 'Reply token used to send reply message to this event' }),
      beacon: BeaconContentSchema,
    })
    .openapi({ required: ['replyToken', 'beacon'] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#beacon-event' },
    description:
      'Event object for when a user enters the range of a LINE Beacon. You can reply to beacon events.',
  })
  .openapi('BeaconEvent')

const LinkContentSchema = z
  .object({
    result: z
      .enum(['ok', 'failed'])
      .openapi({
        description:
          'One of the following values to indicate whether linking the account was successful or not',
      }),
    nonce: z
      .string()
      .openapi({ description: 'Specified nonce (number used once) when verifying the user ID.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#account-link-event',
    },
    description: 'Content of the account link event.',
    required: ['result', 'nonce'],
  })
  .openapi('LinkContent')

const AccountLinkEventSchema = EventSchema.and(
  z
    .object({
      replyToken: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "Reply token used to send reply message to this event. This property won't be included if linking the account has failed.",
        }),
      link: LinkContentSchema,
    })
    .openapi({ required: ['link'] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#account-link-event',
    },
    description:
      "Event object for when a user has linked their LINE account with a provider's service account. You can reply to account link events.",
  })
  .openapi('AccountLinkEvent')

const MembershipContentSchema = z
  .object({ type: z.string().openapi({ description: 'Type of membership event.' }) })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#membership-event',
    },
    description: 'Content of the membership event.',
    required: ['type', 'membershipId'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        joined: '#/components/schemas/JoinedMembershipContent',
        left: '#/components/schemas/LeftMembershipContent',
        renewed: '#/components/schemas/RenewedMembershipContent',
      },
    },
  })
  .openapi('MembershipContent')

const MembershipEventSchema = EventSchema.and(
  z
    .object({
      replyToken: z
        .string()
        .openapi({ description: 'Reply token used to send reply message to this event' }),
      membership: MembershipContentSchema,
    })
    .openapi({ required: ['replyToken', 'membership'] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#membership-event',
    },
    description:
      "This event indicates that a user has subscribed (joined), unsubscribed (left), or renewed the bot's membership.",
  })
  .openapi('MembershipEvent')

const JoinedMembershipContentSchema = MembershipContentSchema.and(
  z
    .object({
      membershipId: z
        .int()
        .openapi({
          description:
            'The ID of the membership that the user joined. This is defined for each membership.',
        }),
    })
    .openapi({ required: ['membershipId'] }),
).openapi('JoinedMembershipContent')

const LeftMembershipContentSchema = MembershipContentSchema.and(
  z
    .object({
      membershipId: z
        .int()
        .openapi({
          description:
            'The ID of the membership that the user left. This is defined for each membership.',
        }),
    })
    .openapi({ required: ['membershipId'] }),
).openapi('LeftMembershipContent')

const RenewedMembershipContentSchema = MembershipContentSchema.and(
  z
    .object({
      membershipId: z
        .int()
        .openapi({
          description:
            'The ID of the membership that the user renewed. This is defined for each membership.',
        }),
    })
    .openapi({ required: ['membershipId'] }),
).openapi('RenewedMembershipContent')

const ModuleContentSchema = z
  .object({ type: z.string().openapi({ description: 'Type' }) })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#module-channel-specific-webhook-events',
    },
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        attached: '#/components/schemas/AttachedModuleContent',
        detached: '#/components/schemas/DetachedModuleContent',
      },
    },
  })
  .openapi('ModuleContent')

const ModuleEventSchema = EventSchema.and(
  z.object({ module: ModuleContentSchema }).openapi({ required: ['module'] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#module-channel-specific-webhook-events',
    },
    description:
      'This event indicates that the module channel has been attached to the LINE Official Account. Sent to the webhook URL server of the module channel.',
  })
  .openapi('ModuleEvent')

const AttachedModuleContentSchema = ModuleContentSchema.and(
  z
    .object({
      botId: z
        .string()
        .openapi({ description: 'User ID of the bot on the attached LINE Official Account' }),
      scopes: z
        .array(z.string())
        .openapi({
          description:
            'An array of strings indicating the scope permitted by the admin of the LINE Official Account.',
        }),
    })
    .openapi({ required: ['botId', 'scopes'] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/partner-docs/#attached-event' },
  })
  .openapi('AttachedModuleContent')

const DetachedModuleContentSchema = ModuleContentSchema.and(
  z
    .object({
      botId: z.string().openapi({ description: 'Detached LINE Official Account bot user ID' }),
      reason: z.literal('bot_deleted').openapi({ description: 'Reason for detaching' }),
    })
    .openapi({ required: ['botId', 'reason'] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/partner-docs/#detached-event' },
  })
  .openapi('DetachedModuleContent')

const ChatControlSchema = z
  .object({
    expireAt: z
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
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/partner-docs/#activated-event' },
    required: ['expireAt'],
  })
  .openapi('ChatControl')

const ActivatedEventSchema = EventSchema.and(
  z.object({ chatControl: ChatControlSchema }).openapi({ required: ['chatControl'] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/partner-docs/#activated-event' },
    description:
      'This event indicates that the module channel has been switched to Active Channel by calling the Acquire Control API. Sent to the webhook URL server of the module channel.',
  })
  .openapi('ActivatedEvent')

const DeactivatedEventSchema = EventSchema.and(z.object({}))
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#deactivated-event',
    },
    description:
      'This event indicates that the module channel has been switched to Standby Channel by calling Acquire Control API or Release Control API. Sent to the webhook URL server of the module channel.',
  })
  .openapi('DeactivatedEvent')

const BotSuspendedEventSchema = EventSchema.and(z.object({}))
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#botsuspend-event',
    },
    description:
      'This event indicates that the LINE Official Account has been suspended (Suspend). Sent to the webhook URL server of the module channel.',
  })
  .openapi('BotSuspendedEvent')

const BotResumedEventSchema = EventSchema.and(z.object({}))
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#botresumed-event',
    },
    description:
      'This event indicates that the LINE Official Account has returned from the suspended state. Sent to the webhook URL server of the module channel.',
  })
  .openapi('BotResumedEvent')

const PnpDeliverySchema = z
  .object({
    data: z
      .string()
      .openapi({
        description:
          'A hashed phone number string or a string specified by `X-Line-Delivery-Tag` header',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#overview-delivery-webhook-event',
    },
    description:
      'A delivery object containing a hashed phone number string or a string specified by `X-Line-Delivery-Tag` header',
    required: ['data'],
  })
  .openapi('PnpDelivery')

const PnpDeliveryCompletionEventSchema = EventSchema.and(
  z.object({ delivery: PnpDeliverySchema }).openapi({ required: ['delivery'] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#overview-delivery-webhook-event',
    },
    description:
      'When a request is made to the LINE notification messages API and delivery of the LINE notification message to the user is completed, a dedicated webhook event (delivery completion event) is sent from the LINE Platform to the webhook URL of the bot server.',
  })
  .openapi('PnpDeliveryCompletionEvent')

const MessageEditedEventSchema = EventSchema.and(
  z
    .object({ replyToken: z.string().exactOptional(), message: MessageContentSchema })
    .openapi({ required: ['type', 'message'] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#edit-event' },
    description:
      'Webhook event object which contains the edited message. This event is triggered when a user edits a text message.\nCurrently, message editing is not available in one-on-one chats with LINE Official Accounts, so this event is only triggered in group chats.\nMultiple messageEdited webhook events may arrive out of order. The event with the largest timestamp represents the latest edit state.\n',
  })
  .openapi('MessageEditedEvent')

export const postCallbackRoute = createRoute({
  method: 'post',
  path: '/callback',
  tags: ['dummy'],
  description: 'This is the dummy endpoint to generate the model classes',
  operationId: 'callback',
  request: {
    body: { content: { 'application/json': { schema: CallbackRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.string().openapi({ description: 'dummy response', example: 'OK' }),
        },
      },
    },
  },
})
