import { createRoute, z } from '@hono/zod-openapi'

const DemographicFilterSchema = z
  .object({
    type: z.string().exactOptional().openapi({ description: 'Type of demographic filter' }),
  })
  .openapi({
    description: 'Demographic filter',
    discriminator: {
      propertyName: 'type',
      mapping: {
        age: '#/components/schemas/AgeDemographicFilter',
        appType: '#/components/schemas/AppTypeDemographicFilter',
        area: '#/components/schemas/AreaDemographicFilter',
        gender: '#/components/schemas/GenderDemographicFilter',
        operator: '#/components/schemas/OperatorDemographicFilter',
        subscriptionPeriod: '#/components/schemas/SubscriptionPeriodDemographicFilter',
      },
    },
    required: [],
  })
  .openapi('DemographicFilter')

type FilterType = { demographic?: z.infer<typeof DemographicFilterSchema> }

const GetWebhookEndpointResponseSchema = z
  .object({
    endpoint: z.url().openapi({ description: 'Webhook URL' }),
    active: z
      .boolean()
      .openapi({
        description:
          'Webhook usage status. Send a webhook event from the LINE Platform to the webhook URL only if enabled.\n\n`true`: Webhook usage is enabled.\n`false`: Webhook usage is disabled.\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-webhook-endpoint-information',
    },
    required: ['endpoint', 'active'],
  })
  .openapi('GetWebhookEndpointResponse')

const SetWebhookEndpointRequestSchema = z
  .object({ endpoint: z.url().min(0).max(500).openapi({ description: 'A valid webhook URL.' }) })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#set-webhook-endpoint-url',
    },
    required: ['endpoint'],
  })
  .openapi('SetWebhookEndpointRequest')

const TestWebhookEndpointRequestSchema = z
  .object({
    endpoint: z
      .url()
      .min(0)
      .max(500)
      .exactOptional()
      .openapi({ description: 'A webhook URL to be validated.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#test-webhook-endpoint',
    },
    required: [],
  })
  .openapi('TestWebhookEndpointRequest')

const TestWebhookEndpointResponseSchema = z
  .object({
    success: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Result of the communication from the LINE platform to the webhook URL.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Time of the event in milliseconds. Even in the case of a redelivered webhook, it represents the time the event occurred, not the time it was redelivered.\n',
      }),
    statusCode: z
      .int32()
      .openapi({
        description:
          "The HTTP status code. If the webhook response isn't received, the status code is set to zero or a negative number.",
      }),
    reason: z.string().openapi({ description: 'Reason for the response.' }),
    detail: z.string().openapi({ description: 'Details of the response.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#test-webhook-endpoint',
    },
    required: ['statusCode', 'timestamp', 'reason', 'detail'],
  })
  .openapi('TestWebhookEndpointResponse')

const GetMessageContentTranscodingResponseSchema = z
  .object({
    status: z
      .enum(['processing', 'succeeded', 'failed'])
      .openapi({
        description:
          'The preparation status. One of:\n\n`processing`: Preparing to get content.\n`succeeded`: Ready to get the content. You can get the content sent by users.\n`failed`: Failed to prepare to get the content.\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#verify-video-or-audio-preparation-status',
    },
    description: 'Transcoding response',
    required: ['status'],
  })
  .openapi('GetMessageContentTranscodingResponse')

const ActionSchema = z
  .object({
    type: z.string().exactOptional().openapi({ description: 'Type of action' }),
    label: z.string().exactOptional().openapi({ description: 'Label for the action.' }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#action-objects' },
    description: 'Action',
    discriminator: {
      propertyName: 'type',
      mapping: {
        camera: '#/components/schemas/CameraAction',
        cameraRoll: '#/components/schemas/CameraRollAction',
        clipboard: '#/components/schemas/ClipboardAction',
        datetimepicker: '#/components/schemas/DatetimePickerAction',
        location: '#/components/schemas/LocationAction',
        message: '#/components/schemas/MessageAction',
        postback: '#/components/schemas/PostbackAction',
        richmenuswitch: '#/components/schemas/RichMenuSwitchAction',
        uri: '#/components/schemas/URIAction',
      },
    },
    required: [],
  })
  .openapi('Action')

const QuickReplyItemSchema = z
  .object({
    imageUrl: z
      .url()
      .max(2000)
      .exactOptional()
      .openapi({ description: 'URL of the icon that is displayed at the beginning of the button' }),
    action: ActionSchema.exactOptional(),
    type: z.string().default('action').exactOptional().openapi({ description: '`action`' }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#items-object' },
    required: [],
  })
  .openapi('QuickReplyItem')

const QuickReplySchema = z
  .object({
    items: z
      .array(QuickReplyItemSchema)
      .max(13)
      .exactOptional()
      .openapi({ description: 'Quick reply button objects.' }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#items-object' },
    description: 'Quick reply',
    required: [],
  })
  .openapi('QuickReply')

const SenderSchema = z
  .object({
    name: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({ description: 'Display name. Certain words such as `LINE` may not be used.' }),
    iconUrl: z
      .url()
      .max(2000)
      .exactOptional()
      .openapi({ description: 'URL of the image to display as an icon when sending a message' }),
  })
  .openapi({ description: 'Change icon and display name', required: [] })
  .openapi('Sender')

const MessageSchema = z
  .object({
    type: z.string().openapi({ description: 'Type of message' }),
    quickReply: QuickReplySchema.exactOptional(),
    sender: SenderSchema.exactOptional(),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#message-common-properties',
    },
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        text: '#/components/schemas/TextMessage',
        textV2: '#/components/schemas/TextMessageV2',
        sticker: '#/components/schemas/StickerMessage',
        image: '#/components/schemas/ImageMessage',
        video: '#/components/schemas/VideoMessage',
        audio: '#/components/schemas/AudioMessage',
        location: '#/components/schemas/LocationMessage',
        imagemap: '#/components/schemas/ImagemapMessage',
        template: '#/components/schemas/TemplateMessage',
        flex: '#/components/schemas/FlexMessage',
        coupon: '#/components/schemas/CouponMessage',
      },
    },
  })
  .openapi('Message')

const NotificationDisabledSchema = z
  .boolean()
  .default(false)
  .openapi({
    description:
      '`true`: The user doesn’t receive a push notification when a message is sent.\n`false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device).\nThe default value is false.\n',
  })
  .openapi('NotificationDisabled')

const ReplyMessageRequestSchema = z
  .object({
    replyToken: z.string().openapi({ description: 'replyToken received via webhook.' }),
    messages: z.array(MessageSchema).min(1).max(5).openapi({ description: 'List of messages.' }),
    notificationDisabled: NotificationDisabledSchema.exactOptional(),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#send-reply-message',
    },
    required: ['messages', 'replyToken'],
  })
  .openapi('ReplyMessageRequest')

const SentMessageSchema = z
  .object({
    id: z.string().openapi({ description: 'ID of the sent message.' }),
    quoteToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Quote token of the message. Only included when a message object that can be specified as a quote target was sent as a push or reply message.\n',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('SentMessage')

const ReplyMessageResponseSchema = z
  .object({
    sentMessages: z
      .array(SentMessageSchema)
      .min(1)
      .max(5)
      .openapi({ description: 'Array of sent messages.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#send-reply-message-response',
    },
    required: ['sentMessages'],
  })
  .openapi('ReplyMessageResponse')

const PushMessageRequestSchema = z
  .object({
    to: z.string().openapi({ description: 'ID of the receiver.' }),
    messages: z
      .array(MessageSchema)
      .min(1)
      .max(5)
      .openapi({ description: 'List of Message objects.' }),
    notificationDisabled: NotificationDisabledSchema.exactOptional(),
    customAggregationUnits: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of aggregation unit name. Case-sensitive.\nThis functions can only be used by corporate users who have submitted the required applications.\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#send-push-message',
    },
    required: ['messages', 'to'],
  })
  .openapi('PushMessageRequest')

const PushMessageResponseSchema = z
  .object({
    sentMessages: z
      .array(SentMessageSchema)
      .min(1)
      .max(5)
      .openapi({ description: 'Array of sent messages.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#send-push-message-response',
    },
    required: ['sentMessages'],
  })
  .openapi('PushMessageResponse')

const MulticastRequestSchema = z
  .object({
    messages: z.array(MessageSchema).min(1).max(5).openapi({ description: 'Messages to send' }),
    to: z
      .array(z.string())
      .min(1)
      .max(500)
      .openapi({
        description:
          'Array of user IDs. Use userId values which are returned in webhook event objects. Do not use LINE IDs found on LINE.',
      }),
    notificationDisabled: NotificationDisabledSchema.exactOptional(),
    customAggregationUnits: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9_]{1,30}$/)
          .min(1)
          .max(30),
      )
      .max(1)
      .exactOptional()
      .openapi({ description: 'Name of aggregation unit. Case-sensitive.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#send-multicast-message',
    },
    required: ['messages', 'to'],
  })
  .openapi('MulticastRequest')

const MulticastResponseSchema = z
  .object({})
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#send-multicast-response',
    },
  })
  .openapi('MulticastResponse')

const RecipientSchema = z
  .object({ type: z.string().exactOptional().openapi({ description: 'Type of recipient' }) })
  .openapi({
    description: 'Recipient',
    discriminator: {
      propertyName: 'type',
      mapping: {
        operator: '#/components/schemas/OperatorRecipient',
        audience: '#/components/schemas/AudienceRecipient',
        redelivery: '#/components/schemas/RedeliveryRecipient',
      },
    },
    required: [],
  })
  .openapi('Recipient')

const FilterSchema: z.ZodType<FilterType> = z
  .lazy(() =>
    z
      .object({ demographic: DemographicFilterSchema.exactOptional() })
      .openapi({ description: 'Filter for narrowcast', required: [] }),
  )
  .openapi('Filter')

const LimitSchema = z
  .object({
    max: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The maximum number of narrowcast messages to send.\nUse this parameter to limit the number of narrowcast messages sent.\nThe recipients will be chosen at random.\n',
      }),
    upToRemainingQuota: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, the message will be sent within the maximum number of deliverable messages. The default value is `false`.\n\nTargets will be selected at random.\n',
      }),
    forbidPartialDelivery: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'This option prevents messages from being delivered to only a subset of the target audience.\nIf true, the narrowcast request success but fails asynchronously.\nYou can check whether message delivery was canceled by retrieving the narrowcast message progress.\n\nThis property can be set to true only if upToRemainingQuota is set to true.\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message',
    },
    description: 'Limit of the Narrowcast',
    required: [],
  })
  .openapi('Limit')

const NarrowcastRequestSchema = z
  .object({
    messages: z
      .array(MessageSchema)
      .min(1)
      .max(5)
      .openapi({ description: 'List of Message objects.' }),
    recipient: RecipientSchema.exactOptional(),
    filter: FilterSchema.exactOptional(),
    limit: LimitSchema.exactOptional(),
    notificationDisabled: NotificationDisabledSchema.exactOptional(),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message',
    },
    required: ['messages'],
  })
  .openapi('NarrowcastRequest')

const NarrowcastResponseSchema = z
  .object({})
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-response',
    },
  })
  .openapi('NarrowcastResponse')

const OperatorRecipientSchema = RecipientSchema.and(
  z
    .object({
      and: z
        .array(RecipientSchema)
        .exactOptional()
        .openapi({
          description:
            'Create a new recipient object by taking the logical conjunction (AND) of the specified array of recipient objects.\n',
        }),
      or: z
        .array(RecipientSchema)
        .exactOptional()
        .openapi({
          description:
            'Create a new recipient object by taking the logical disjunction (OR) of the specified array of recipient objects.\n',
        }),
      not: RecipientSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('OperatorRecipient')

const AudienceRecipientSchema = RecipientSchema.and(
  z
    .object({
      audienceGroupId: z
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
).openapi('AudienceRecipient')

const RedeliveryRecipientSchema = RecipientSchema.and(
  z.object({ requestId: z.string().exactOptional() }).openapi({ required: [] }),
).openapi('RedeliveryRecipient')

const AgeDemographicSchema = z
  .enum([
    'age_15',
    'age_20',
    'age_25',
    'age_30',
    'age_35',
    'age_40',
    'age_45',
    'age_50',
    'age_55',
    'age_60',
    'age_65',
    'age_70',
  ])
  .openapi('AgeDemographic')

const AgeDemographicFilterSchema = DemographicFilterSchema.and(
  z
    .object({ gte: AgeDemographicSchema.exactOptional(), lt: AgeDemographicSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('AgeDemographicFilter')

const AppTypeDemographicSchema = z.enum(['ios', 'android']).openapi('AppTypeDemographic')

const AppTypeDemographicFilterSchema = DemographicFilterSchema.and(
  z.object({ oneOf: z.array(AppTypeDemographicSchema).exactOptional() }).openapi({ required: [] }),
).openapi('AppTypeDemographicFilter')

const AreaDemographicSchema = z
  .enum([
    'jp_01',
    'jp_02',
    'jp_03',
    'jp_04',
    'jp_05',
    'jp_06',
    'jp_07',
    'jp_08',
    'jp_09',
    'jp_10',
    'jp_11',
    'jp_12',
    'jp_13',
    'jp_14',
    'jp_15',
    'jp_16',
    'jp_17',
    'jp_18',
    'jp_19',
    'jp_20',
    'jp_21',
    'jp_22',
    'jp_23',
    'jp_24',
    'jp_25',
    'jp_26',
    'jp_27',
    'jp_28',
    'jp_29',
    'jp_30',
    'jp_31',
    'jp_32',
    'jp_33',
    'jp_34',
    'jp_35',
    'jp_36',
    'jp_37',
    'jp_38',
    'jp_39',
    'jp_40',
    'jp_41',
    'jp_42',
    'jp_43',
    'jp_44',
    'jp_45',
    'jp_46',
    'jp_47',
    'tw_01',
    'tw_02',
    'tw_03',
    'tw_04',
    'tw_05',
    'tw_06',
    'tw_07',
    'tw_08',
    'tw_09',
    'tw_10',
    'tw_11',
    'tw_12',
    'tw_13',
    'tw_14',
    'tw_15',
    'tw_16',
    'tw_17',
    'tw_18',
    'tw_19',
    'tw_20',
    'tw_21',
    'tw_22',
    'th_01',
    'th_02',
    'th_03',
    'th_04',
    'th_05',
    'th_06',
    'th_07',
    'th_08',
    'id_01',
    'id_02',
    'id_03',
    'id_04',
    'id_05',
    'id_06',
    'id_07',
    'id_08',
    'id_09',
    'id_10',
    'id_11',
    'id_12',
  ])
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message',
    },
    'x-enum-varnames': [
      'HOKKAIDO',
      'AOMORI',
      'IWATE',
      'MIYAGI',
      'AKITA',
      'YAMAGATA',
      'FUKUSHIMA',
      'IBARAKI',
      'TOCHIGI',
      'GUNMA',
      'SAITAMA',
      'CHIBA',
      'TOKYO',
      'KANAGAWA',
      'NIIGATA',
      'TOYAMA',
      'ISHIKAWA',
      'FUKUI',
      'YAMANASHI',
      'NAGANO',
      'GIFU',
      'SHIZUOKA',
      'AICHI',
      'MIE',
      'SHIGA',
      'KYOTO',
      'OSAKA',
      'HYOUGO',
      'NARA',
      'WAKAYAMA',
      'TOTTORI',
      'SHIMANE',
      'OKAYAMA',
      'HIROSHIMA',
      'YAMAGUCHI',
      'TOKUSHIMA',
      'KAGAWA',
      'EHIME',
      'KOUCHI',
      'FUKUOKA',
      'SAGA',
      'NAGASAKI',
      'KUMAMOTO',
      'OITA',
      'MIYAZAKI',
      'KAGOSHIMA',
      'OKINAWA',
      'TAIPEI_CITY',
      'NEW_TAIPEI_CITY',
      'TAOYUAN_CITY',
      'TAICHUNG_CITY',
      'TAINAN_CITY',
      'KAOHSIUNG_CITY',
      'KEELUNG_CITY',
      'HSINCHU_CITY',
      'CHIAYI_CITY',
      'HSINCHU_COUNTY',
      'MIAOLI_COUNTY',
      'CHANGHUA_COUNTY',
      'NANTOU_COUNTY',
      'YUNLIN_COUNTY',
      'CHIAYI_COUNTY',
      'PINGTUNG_COUNTY',
      'YILAN_COUNTY',
      'HUALIEN_COUNTY',
      'TAITUNG_COUNTY',
      'PENGHU_COUNTY',
      'KINMEN_COUNTY',
      'LIENCHIANG_COUNTY',
      'BANGKOK',
      'PATTAYA',
      'NORTHERN',
      'CENTRAL',
      'SOUTHERN',
      'EASTERN',
      'NORTHEASTERN',
      'WESTERN',
      'BALI',
      'BANDUNG',
      'BANJARMASIN',
      'JABODETABEK',
      'MAKASSAR',
      'MEDAN',
      'PALEMBANG',
      'SAMARINDA',
      'SEMARANG',
      'SURABAYA',
      'YOGYAKARTA',
      'LAINNYA',
    ],
    'x-enum-descriptions': [
      'jp_01: 北海道 // Hokkaido',
      'jp_02: 青森県 // Aomori',
      'jp_03: 岩手県 // Iwate',
      'jp_04: 宮城県 // Miyagi',
      'jp_05: 秋田県 // Akita',
      'jp_06: 山形県 // Yamagata',
      'jp_07: 福島県 // Fukushima',
      'jp_08: 茨城県 // Ibaraki',
      'jp_09: 栃木県 // Tochigi',
      'jp_10: 群馬県 // Gunma',
      'jp_11: 埼玉県 // Saitama',
      'jp_12: 千葉県 // Chiba',
      'jp_13: 東京都 // Tokyo',
      'jp_14: 神奈川県 // Kanagawa',
      'jp_15: 新潟県 // Niigata',
      'jp_16: 富山県 // Toyama',
      'jp_17: 石川県 // Ishikawa',
      'jp_18: 福井県 // Fukui',
      'jp_19: 山梨県 // Yamanashi',
      'jp_20: 長野県 // Nagano',
      'jp_21: 岐阜県 // Gifu',
      'jp_22: 静岡県 // Shizuoka',
      'jp_23: 愛知県 // Aichi',
      'jp_24: 三重県 // Mie',
      'jp_25: 滋賀県 // Shiga',
      'jp_26: 京都府 // Kyoto',
      'jp_27: 大阪府 // Osaka',
      'jp_28: 兵庫県 // Hyougo',
      'jp_29: 奈良県 // Nara',
      'jp_30: 和歌山県 // Wakayama',
      'jp_31: 鳥取県 // Tottori',
      'jp_32: 島根県 // Shimane',
      'jp_33: 岡山県 // Okayama',
      'jp_34: 広島県 // Hiroshima',
      'jp_35: 山口県 // Yamaguchi',
      'jp_36: 徳島県 // Tokushima',
      'jp_37: 香川県 // Kagawa',
      'jp_38: 愛媛県 // Ehime',
      'jp_39: 高知県 // Kouchi',
      'jp_40: 福岡県 // Fukuoka',
      'jp_41: 佐賀県 // Saga',
      'jp_42: 長崎県 // Nagasaki',
      'jp_43: 熊本県 // Kumamoto',
      'jp_44: 大分県 // Oita',
      'jp_45: 宮崎県 // Miyazaki',
      'jp_46: 鹿児島県 // Kagoshima',
      'jp_47: 沖縄県 // Okinawa',
      'tw_01: 台北市 // Taipei City',
      'tw_02: 新北市 // New Taipei City',
      'tw_03: 桃園市 // Taoyuan City',
      'tw_04: 台中市 // Taichung City',
      'tw_05: 台南市 // Tainan City',
      'tw_06: 高雄市 // Kaohsiung City',
      'tw_07: 基隆市 // Keelung City',
      'tw_08: 新竹市 // Hsinchu City',
      'tw_09: 嘉義市 // Chiayi City',
      'tw_10: 新竹県 // Hsinchu County',
      'tw_11: 苗栗県 // Miaoli County',
      'tw_12: 彰化県 // Changhua County',
      'tw_13: 南投県 // Nantou County',
      'tw_14: 雲林県 // Yunlin County',
      'tw_15: 嘉義県 // Chiayi County',
      'tw_16: 屏東県 // Pingtung County',
      'tw_17: 宜蘭県 // Yilan County',
      'tw_18: 花蓮県 // Hualien County',
      'tw_19: 台東県 // Taitung County',
      'tw_20: 澎湖県 // Penghu County',
      'tw_21: 金門県 // Kinmen County',
      'tw_22: 連江県 // Lienchiang County',
      'th_01: バンコク // Bangkok',
      'th_02: パタヤ // Pattaya',
      'th_03: 北部 // Northern',
      'th_04: 中央部 // Central',
      'th_05: 南部 // Southern',
      'th_06: 東部 // Eastern',
      'th_07: 東北部 // NorthEastern',
      'th_08: 西部 // Western',
      'id_01: バリ // Bali',
      'id_02: バンドン // Bandung',
      'id_03: バンジャルマシン // Banjarmasin',
      'id_04: ジャボデタベック (ジャカルタ首都圏) // Jabodetabek',
      'id_06: マカッサル // Makassar',
      'id_07: メダン // Medan',
      'id_08: パレンバン // Palembang',
      'id_09: サマリンダ // Samarinda',
      'id_10: スマラン // Semarang',
      'id_11: スラバヤ // Surabaya',
      'id_12: ジョグジャカルタ // Yogyakarta',
      'id_05: その他のエリア // Lainnya',
    ],
  })
  .openapi('AreaDemographic')

const AreaDemographicFilterSchema = DemographicFilterSchema.and(
  z.object({ oneOf: z.array(AreaDemographicSchema).exactOptional() }).openapi({ required: [] }),
).openapi('AreaDemographicFilter')

const GenderDemographicSchema = z.enum(['male', 'female']).openapi('GenderDemographic')

const GenderDemographicFilterSchema = DemographicFilterSchema.and(
  z.object({ oneOf: z.array(GenderDemographicSchema).exactOptional() }).openapi({ required: [] }),
).openapi('GenderDemographicFilter')

const OperatorDemographicFilterSchema = DemographicFilterSchema.and(
  z
    .object({
      and: z.array(DemographicFilterSchema).exactOptional(),
      or: z.array(DemographicFilterSchema).exactOptional(),
      not: DemographicFilterSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('OperatorDemographicFilter')

const SubscriptionPeriodDemographicSchema = z
  .enum(['day_7', 'day_30', 'day_90', 'day_180', 'day_365'])
  .openapi('SubscriptionPeriodDemographic')

const SubscriptionPeriodDemographicFilterSchema = DemographicFilterSchema.and(
  z
    .object({
      gte: SubscriptionPeriodDemographicSchema.exactOptional(),
      lt: SubscriptionPeriodDemographicSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('SubscriptionPeriodDemographicFilter')

const NarrowcastProgressResponseSchema = z
  .object({
    phase: z
      .enum(['waiting', 'sending', 'succeeded', 'failed'])
      .openapi({
        description:
          'The current status. One of:\n\n`waiting`: Messages are not yet ready to be sent. They are currently being filtered or processed in some way.\n`sending`: Messages are currently being sent.\n`succeeded`: Messages were sent successfully. This may not mean the messages were successfully received.\n`failed`: Messages failed to be sent. Use the failedDescription property to find the cause of the failure.\n',
      }),
    successCount: z
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
        description: 'The number of users who successfully received the message.',
      }),
    failureCount: z
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
        description: 'The number of users who failed to send the message.',
      }),
    targetCount: z
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
        description: 'The number of intended recipients of the message.',
      }),
    failedDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason the message failed to be sent. This is only included with a `phase` property value of `failed`.',
      }),
    errorCode: z
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
          "Error summary. This is only included with a phase property value of failed.\nOne of:\n\n`1`: An internal error occurred.\n`2`: An error occurred because there weren't enough recipients.\n`3`: A conflict error of requests occurs because a request that has already been accepted is retried.\n`4`: An audience of less than 50 recipients is included as a condition of sending.\n`5`: Message delivery has been canceled to prevent messages from being delivered only to a subset of the target audience.\n",
      }),
    acceptedTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Narrowcast message request accepted time in milliseconds.\n\nFormat: ISO 8601 (e.g. 2020-12-03T10:15:30.121Z)\nTimezone: UTC\n',
      }),
    completedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Processing of narrowcast message request completion time in milliseconds. Returned when the phase property is succeeded or failed.\n\nFormat: ISO 8601 (e.g. 2020-12-03T10:15:30.121Z)\nTimezone: UTC\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-narrowcast-progress-status',
    },
    required: ['phase', 'acceptedTime'],
  })
  .openapi('NarrowcastProgressResponse')

const BroadcastRequestSchema = z
  .object({
    messages: z
      .array(MessageSchema)
      .min(1)
      .max(5)
      .openapi({ description: 'List of Message objects.' }),
    notificationDisabled: NotificationDisabledSchema.exactOptional(),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message',
    },
    required: ['messages'],
  })
  .openapi('BroadcastRequest')

const BroadcastResponseSchema = z
  .object({})
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#send-broadcast-response',
    },
  })
  .openapi('BroadcastResponse')

const QuotaTypeSchema = z
  .enum(['none', 'limited'])
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-quota' },
    description: 'One of the following values to indicate whether a target limit is set or not.',
  })
  .openapi('QuotaType')

const MessageQuotaResponseSchema = z
  .object({
    type: QuotaTypeSchema,
    value: z
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
          'The target limit for sending messages in the current month. This property is returned when the `type` property has a value of `limited`.\n',
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-quota' },
    required: ['type'],
  })
  .openapi('MessageQuotaResponse')

const QuotaConsumptionResponseSchema = z
  .object({
    totalUsage: z
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
        description: 'The number of sent messages in the current month',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-consumption',
    },
    required: ['totalUsage'],
  })
  .openapi('QuotaConsumptionResponse')

const NumberOfMessagesResponseSchema = z
  .object({
    status: z
      .enum(['ready', 'unready', 'unavailable_for_privacy', 'out_of_service'])
      .openapi({
        description:
          "Aggregation process status. One of:\n\n`ready`: The number of messages can be obtained.\n`unready`: We haven't finished calculating the number of sent messages for the specified in date. For example, this property is returned when the delivery date or a future date is specified. Calculation usually takes about a day.\n`unavailable_for_privacy`: The total number of messages on the specified day is less than 20.\n`out_of_service`: The specified date is earlier than the date on which we first started calculating sent messages (March 31, 2018).\n",
      }),
    success: z
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
          'The number of messages delivered using the phone number on the date specified in `date`.\nThe response has this property only when the value of `status` is `ready`.\n\n',
      }),
  })
  .openapi({ required: ['status'] })
  .openapi('NumberOfMessagesResponse')

const ValidateMessageRequestSchema = z
  .object({
    messages: z
      .array(MessageSchema)
      .min(1)
      .max(5)
      .openapi({ description: 'Array of message objects to validate' }),
  })
  .openapi({ required: ['messages'] })
  .openapi('ValidateMessageRequest')

const GetAggregationUnitUsageResponseSchema = z
  .object({
    numOfCustomAggregationUnits: z
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
        description: 'Number of aggregation units used this month.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-number-of-units-used-this-month',
    },
    required: ['numOfCustomAggregationUnits'],
  })
  .openapi('GetAggregationUnitUsageResponse')

const GetAggregationUnitNameListResponseSchema = z
  .object({
    customAggregationUnits: z
      .array(z.string())
      .openapi({
        description:
          'An array of strings indicating the names of aggregation units used this month.',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A continuation token to get the next array of unit names.\nReturned only when there are remaining aggregation units that weren't returned in customAggregationUnits in the original request.\n\n",
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-name-list-of-units-used-this-month',
    },
    required: ['customAggregationUnits'],
  })
  .openapi('GetAggregationUnitNameListResponse')

const UserProfileResponseSchema = z
  .object({
    displayName: z.string().openapi({ description: "User's display name" }),
    userId: z.string().openapi({ description: 'User ID' }),
    pictureUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          "Profile image URL. `https` image URL. Not included in the response if the user doesn't have a profile image.",
      }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "User's status message. Not included in the response if the user doesn't have a status message.",
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "User's language, as a BCP 47 language tag. Not included in the response if the user hasn't yet consented to the LINE Privacy Policy.",
        example: 'en',
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-profile' },
    required: ['displayName', 'userId'],
  })
  .openapi('UserProfileResponse')

const GetFollowersResponseSchema = z
  .object({
    userIds: z
      .array(z.string())
      .max(1000)
      .openapi({
        description:
          'An array of strings indicating user IDs of users that have added the LINE Official Account as a friend.\nOnly users of LINE for iOS and LINE for Android are included in `userIds`.\n',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A continuation token to get the next array of user IDs.\nReturned only when there are remaining user IDs that weren't returned in `userIds` in the original request.\nThe number of user IDs in the `userIds` element doesn't have to reach the maximum number specified by `limit` for the `next` property to be included in the response.\n\n",
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-follower-ids',
    },
    required: ['userIds'],
  })
  .openapi('GetFollowersResponse')

const BotInfoResponseSchema = z
  .object({
    userId: z.string().openapi({ description: "Bot's user ID" }),
    basicId: z.string().openapi({ description: "Bot's basic ID" }),
    premiumId: z
      .string()
      .exactOptional()
      .openapi({
        description: "Bot's premium ID. Not included in the response if the premium ID isn't set.",
      }),
    displayName: z.string().openapi({ description: "Bot's display name" }),
    pictureUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          "Profile image URL. `https` image URL. Not included in the response if the bot doesn't have a profile image.",
      }),
    chatMode: z
      .enum(['chat', 'bot'])
      .openapi({
        description:
          'Chat settings set in the LINE Official Account Manager. One of:\n\n`chat`: Chat is set to "On".\n`bot`: Chat is set to "Off".\n',
      }),
    markAsReadMode: z
      .enum(['auto', 'manual'])
      .openapi({
        description:
          'Automatic read setting for messages. If the chat is set to "Off", auto is returned. If the chat is set to "On", manual is returned.\n\n`auto`: Auto read setting is enabled.\n`manual`: Auto read setting is disabled.\n\n',
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-bot-info' },
    required: ['userId', 'basicId', 'displayName', 'chatMode', 'markAsReadMode'],
  })
  .openapi('BotInfoResponse')

const GroupUserProfileResponseSchema = z
  .object({
    displayName: z.string().openapi({ description: "User's display name" }),
    userId: z.string().openapi({ description: 'User ID' }),
    pictureUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          "Profile image URL. `https` image URL. Not included in the response if the user doesn't have a profile image.",
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-group-member-profile',
    },
    required: ['displayName', 'userId'],
  })
  .openapi('GroupUserProfileResponse')

const RoomUserProfileResponseSchema = z
  .object({
    displayName: z.string().openapi({ description: "User's display name" }),
    userId: z.string().openapi({ description: 'User ID' }),
    pictureUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          "Profile image URL. `https` image URL. Not included in the response if the user doesn't have a profile image.",
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-room-member-profile',
    },
    required: ['displayName', 'userId'],
  })
  .openapi('RoomUserProfileResponse')

const MembersIdsResponseSchema = z
  .object({
    memberIds: z
      .array(z.string())
      .max(100)
      .openapi({
        description:
          'List of user IDs of members in the group chat. Only users of LINE for iOS and LINE for Android are included in `memberIds`.',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A continuation token to get the next array of user IDs of the members in the group chat.\nReturned only when there are remaining user IDs that were not returned in `memberIds` in the original request.\n',
      }),
  })
  .openapi({ required: ['memberIds'] })
  .openapi('MembersIdsResponse')

const GroupSummaryResponseSchema = z
  .object({
    groupId: z.string().openapi({ description: 'Group ID' }),
    groupName: z.string().openapi({ description: 'Group name' }),
    pictureUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          "Group icon URL. Not included in the response if the user doesn't set a group profile icon.",
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-group-summary',
    },
    required: ['groupId', 'groupName'],
  })
  .openapi('GroupSummaryResponse')

const GroupMemberCountResponseSchema = z
  .object({
    count: z
      .int32()
      .openapi({
        description:
          'The count of members in the group chat. The number returned excludes the LINE Official Account.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-members-group-count',
    },
    required: ['count'],
  })
  .openapi('GroupMemberCountResponse')

const RoomMemberCountResponseSchema = z
  .object({
    count: z
      .int32()
      .openapi({
        description:
          'The count of members in the multi-person chat. The number returned excludes the LINE Official Account.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-members-room-count',
    },
    required: ['count'],
  })
  .openapi('RoomMemberCountResponse')

const RichMenuSizeSchema = z
  .object({
    width: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 2147483647,
        description: 'width',
      }),
    height: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 2147483647,
        description: 'height',
      }),
  })
  .openapi({ description: 'Rich menu size', required: [] })
  .openapi('RichMenuSize')

const RichMenuBoundsSchema = z
  .object({
    x: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 2147483647,
        description: 'Horizontal position relative to the top-left corner of the area.',
      }),
    y: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 2147483647,
        description: 'Vertical position relative to the top-left corner of the area.',
      }),
    width: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 2147483647,
        description: 'Width of the area.',
      }),
    height: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(2147483647n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 2147483647,
        description: 'Height of the area.',
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#bounds-object' },
    description: 'Rich menu bounds',
    required: [],
  })
  .openapi('RichMenuBounds')

const RichMenuAreaSchema = z
  .object({ bounds: RichMenuBoundsSchema.exactOptional(), action: ActionSchema.exactOptional() })
  .openapi({ description: 'Rich menu area', required: [] })
  .openapi('RichMenuArea')

const RichMenuRequestSchema = z
  .object({
    size: RichMenuSizeSchema.exactOptional(),
    selected: z
      .boolean()
      .exactOptional()
      .openapi({ description: '`true` to display the rich menu by default. Otherwise, `false`.' }),
    name: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.',
      }),
    chatBarText: z
      .string()
      .max(14)
      .exactOptional()
      .openapi({ description: 'Text displayed in the chat bar' }),
    areas: z
      .array(RichMenuAreaSchema)
      .exactOptional()
      .openapi({
        description:
          'Array of area objects which define the coordinates and size of tappable areas',
      }),
  })
  .openapi({ required: [] })
  .openapi('RichMenuRequest')

const RichMenuIdResponseSchema = z
  .object({ richMenuId: z.string().openapi({ description: 'Rich menu ID' }) })
  .openapi({ required: ['richMenuId'] })
  .openapi('RichMenuIdResponse')

const RichMenuResponseSchema = z
  .object({
    richMenuId: z.string().openapi({ description: 'ID of a rich menu' }),
    size: RichMenuSizeSchema,
    selected: z
      .boolean()
      .openapi({ description: '`true` to display the rich menu by default. Otherwise, `false`.' }),
    name: z
      .string()
      .max(300)
      .openapi({
        description:
          'Name of the rich menu. This value can be used to help manage your rich menus and is not displayed to users.',
      }),
    chatBarText: z.string().max(14).openapi({ description: 'Text displayed in the chat bar' }),
    areas: z
      .array(RichMenuAreaSchema)
      .max(20)
      .openapi({
        description:
          'Array of area objects which define the coordinates and size of tappable areas',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#rich-menu-response-object',
    },
    required: ['richMenuId', 'size', 'selected', 'name', 'chatBarText', 'areas'],
  })
  .openapi('RichMenuResponse')

const RichMenuListResponseSchema = z
  .object({ richmenus: z.array(RichMenuResponseSchema).openapi({ description: 'Rich menus' }) })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-list',
    },
    required: ['richmenus'],
  })
  .openapi('RichMenuListResponse')

const CreateRichMenuAliasRequestSchema = z
  .object({
    richMenuAliasId: z
      .string()
      .regex(/^[a-z0-9_-]{1,32}$/)
      .min(1)
      .max(32)
      .openapi({
        description: 'Rich menu alias ID, which can be any ID, unique for each channel.',
      }),
    richMenuId: z
      .string()
      .openapi({ description: 'The rich menu ID to be associated with the rich menu alias.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#create-rich-menu-alias',
    },
    required: ['richMenuAliasId', 'richMenuId'],
  })
  .openapi('CreateRichMenuAliasRequest')

const RichMenuAliasResponseSchema = z
  .object({
    richMenuAliasId: z.string().openapi({ description: 'Rich menu alias ID.' }),
    richMenuId: z
      .string()
      .openapi({ description: 'The rich menu ID associated with the rich menu alias.' }),
  })
  .openapi({ required: ['richMenuAliasId', 'richMenuId'] })
  .openapi('RichMenuAliasResponse')

const UpdateRichMenuAliasRequestSchema = z
  .object({
    richMenuId: z
      .string()
      .openapi({ description: 'The rich menu ID to be associated with the rich menu alias.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#update-rich-menu-alias',
    },
    required: ['richMenuId'],
  })
  .openapi('UpdateRichMenuAliasRequest')

const RichMenuAliasListResponseSchema = z
  .object({
    aliases: z.array(RichMenuAliasResponseSchema).openapi({ description: 'Rich menu aliases.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-alias-list',
    },
    required: ['aliases'],
  })
  .openapi('RichMenuAliasListResponse')

const RichMenuBulkLinkRequestSchema = z
  .object({
    richMenuId: z.string().openapi({ description: 'ID of a rich menu' }),
    userIds: z
      .array(z.string())
      .min(1)
      .max(500)
      .openapi({
        description:
          'Array of user IDs. Found in the `source` object of webhook event objects. Do not use the LINE ID used in LINE.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-users',
    },
    required: ['richMenuId', 'userIds'],
  })
  .openapi('RichMenuBulkLinkRequest')

const RichMenuBulkUnlinkRequestSchema = z
  .object({
    userIds: z
      .array(z.string())
      .min(1)
      .max(500)
      .openapi({
        description:
          'Array of user IDs. Found in the `source` object of webhook event objects. Do not use the LINE ID used in LINE.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-users',
    },
    required: ['userIds'],
  })
  .openapi('RichMenuBulkUnlinkRequest')

const RichMenuBatchOperationSchema = z
  .object({
    type: z
      .string()
      .openapi({
        description:
          'The type of operation to the rich menu linked to the user. One of link, unlink, or unlinkAll.',
      }),
  })
  .openapi({
    description:
      'Rich menu operation object represents the batch operation to the rich menu linked to the user.',
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#batch-control-rich-menus-of-users-operations',
    },
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        link: '#/components/schemas/RichMenuBatchLinkOperation',
        unlink: '#/components/schemas/RichMenuBatchUnlinkOperation',
        unlinkAll: '#/components/schemas/RichMenuBatchUnlinkAllOperation',
      },
    },
  })
  .openapi('RichMenuBatchOperation')

const RichMenuBatchRequestSchema = z
  .object({
    operations: z
      .array(RichMenuBatchOperationSchema)
      .max(1000)
      .openapi({ description: 'Array of Rich menu operation object...' }),
    resumeRequestKey: z
      .string()
      .regex(/^[a-zA-Z0-9_-]{1,100}$/)
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description: 'Key for retry. Key value is a string matching the regular expression pattern',
      }),
  })
  .openapi({ required: ['operations'] })
  .openapi('RichMenuBatchRequest')

const RichMenuBatchLinkOperationSchema = RichMenuBatchOperationSchema.and(
  z
    .object({ from: z.string().exactOptional(), to: z.string().exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'Replace the rich menu with the rich menu specified in the `to` property for all users linked to the rich menu specified in the `from` property.',
    required: ['from', 'to'],
  })
  .openapi('RichMenuBatchLinkOperation')

const RichMenuBatchUnlinkOperationSchema = RichMenuBatchOperationSchema.and(
  z.object({ from: z.string().exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description:
      'Unlink the rich menu for all users linked to the rich menu specified in the `from` property.',
    required: ['from'],
  })
  .openapi('RichMenuBatchUnlinkOperation')

const RichMenuBatchUnlinkAllOperationSchema = RichMenuBatchOperationSchema.openapi({
  description: 'Unlink the rich menu from all users linked to the rich menu.',
}).openapi('RichMenuBatchUnlinkAllOperation')

const RichMenuBatchProgressPhaseSchema = z
  .enum(['ongoing', 'succeeded', 'failed'])
  .openapi({
    description:
      "The current status. One of:\n\n`ongoing`: Rich menu batch control is in progress.\n`succeeded`: Rich menu batch control is complete.\n`failed`: Rich menu batch control failed.\n          This means that the rich menu for one or more users couldn't be controlled.\n          There may also be users whose operations have been successfully completed.\n",
  })
  .openapi('RichMenuBatchProgressPhase')

const RichMenuBatchProgressResponseSchema = z
  .object({
    phase: RichMenuBatchProgressPhaseSchema,
    acceptedTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The accepted time in milliseconds of the request of batch control the rich menu.\n\nFormat: ISO 8601 (e.g. 2023-06-08T10:15:30.121Z)\nTimezone: UTC\n',
      }),
    completedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The completed time in milliseconds of rich menu batch control. Returned when the phase property is succeeded or failed.\n\nFormat: ISO 8601 (e.g. 2023-06-08T10:15:30.121Z)\nTimezone: UTC\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-batch-control-rich-menus-progress-status-response',
    },
    required: ['phase', 'acceptedTime'],
  })
  .openapi('RichMenuBatchProgressResponse')

const IssueLinkTokenResponseSchema = z
  .object({
    linkToken: z
      .string()
      .openapi({
        description:
          'Link token.\nLink tokens are valid for 10 minutes and can only be used once.\n\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#issue-link-token',
    },
    required: ['linkToken'],
  })
  .openapi('IssueLinkTokenResponse')

const ChatReferenceSchema = z
  .object({ userId: z.string().openapi({ description: 'The target user ID' }) })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#mark-messages-from-users-as-read',
    },
    required: ['userId'],
    description: 'Chat reference',
  })
  .openapi('ChatReference')

const MarkMessagesAsReadRequestSchema = z
  .object({ chat: ChatReferenceSchema })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#mark-messages-from-users-as-read',
    },
    required: ['chat'],
  })
  .openapi('MarkMessagesAsReadRequest')

const PnpMessagesRequestSchema = z
  .object({
    messages: z.array(MessageSchema).min(1).max(5).openapi({ description: 'Message to be sent.' }),
    to: z
      .string()
      .openapi({
        description:
          'Message destination. Specify a phone number that has been normalized to E.164 format and hashed with SHA256.',
      }),
    notificationDisabled: NotificationDisabledSchema.exactOptional(),
    customAggregationUnits: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9_]{1,30}$/)
          .min(1)
          .max(30),
      )
      .max(1)
      .exactOptional()
      .openapi({ description: 'Name of aggregation unit. Case-sensitive.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#send-line-notification-message',
    },
    required: ['messages', 'to'],
  })
  .openapi('PnpMessagesRequest')

const PnpTemplatedEmphasizedItemSchema = z
  .object({
    itemKey: z
      .string()
      .openapi({
        description:
          'Specify the key of the item you want to include.\nFor available keys, see https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#items\n',
      }),
    content: z
      .string()
      .max(15)
      .openapi({ description: 'String to be displayed as the value of the item.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template-items',
    },
    required: ['itemKey', 'content'],
    description: 'Item to emphasize in the message.',
  })
  .openapi('PnpTemplatedEmphasizedItem')

const PnpTemplatedItemSchema = z
  .object({
    itemKey: z
      .string()
      .openapi({
        description:
          'Specify the key of the item you want to include.\nFor available keys, see https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#items\n',
      }),
    content: z
      .string()
      .max(300)
      .openapi({ description: 'String to be displayed as the value of the item.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template-items',
    },
    required: ['itemKey', 'content'],
  })
  .openapi('PnpTemplatedItem')

const PnpTemplatedButtonSchema = z
  .object({
    buttonKey: z
      .string()
      .openapi({
        description:
          'Specify the key of the button you want to include.\nFor available keys, see https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#buttons\n',
      }),
    url: z
      .string()
      .max(1000)
      .openapi({ description: 'URL of the page to be opened when the user presses the button.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template-buttons',
    },
    required: ['buttonKey', 'url'],
  })
  .openapi('PnpTemplatedButton')

const PnpTemplatedMessageBodySchema = z
  .object({
    emphasizedItem: PnpTemplatedEmphasizedItemSchema.exactOptional(),
    items: z
      .array(PnpTemplatedItemSchema)
      .max(15)
      .exactOptional()
      .openapi({
        description:
          'Array of items to include in the message. The `itemKey` must be unique across `emphasizedItem` and `items`.',
      }),
    buttons: z
      .array(PnpTemplatedButtonSchema)
      .max(2)
      .exactOptional()
      .openapi({
        description: 'Array of buttons to include in the message. The `buttonKey` must be unique.',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template',
    },
    description:
      "The body object of the template you want to send. You can't specify the same item more than once in a single message.",
    required: [],
  })
  .openapi('PnpTemplatedMessageBody')

const PnpTemplatedMessageRequestSchema = z
  .object({
    to: z
      .string()
      .openapi({
        description:
          'Message destination. Specify a phone number that has been normalized to E.164 format and hashed with SHA256.',
      }),
    templateKey: z
      .string()
      .openapi({
        description:
          'Specify the key of the template you want to send.\nFor available keys, see https://developers.line.biz/en/docs/partner-docs/line-notification-messages/template/#templates\n',
      }),
    body: PnpTemplatedMessageBodySchema.exactOptional(),
    customAggregationUnits: z
      .array(
        z
          .string()
          .regex(/^[a-zA-Z0-9_]{1,30}$/)
          .min(1)
          .max(30),
      )
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Name of aggregation unit. Case-sensitive.\nFor more information about assigning a unit name, see https://developers.line.biz/en/docs/messaging-api/unit-based-statistics-aggregation/#assign-names-to-units-when-sending-messages\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template',
    },
    required: ['to', 'templateKey'],
  })
  .openapi('PnpTemplatedMessageRequest')

const EmojiSchema = z
  .object({
    index: z.int32().exactOptional(),
    productId: z.string().exactOptional(),
    emojiId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Emoji')

const TextMessageSchema = MessageSchema.and(
  z
    .object({
      text: z.string().exactOptional(),
      emojis: z.array(EmojiSchema).exactOptional(),
      quoteToken: z
        .string()
        .exactOptional()
        .openapi({ description: 'Quote token of the message you want to quote.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#text-message' },
    required: ['text'],
  })
  .openapi('TextMessage')

const SubstitutionObjectSchema = z
  .object({ type: z.string().openapi({ description: 'Type of substitution object' }) })
  .openapi({
    description: 'An object that defines the replacement value for a placeholder in the text.',
    discriminator: {
      propertyName: 'type',
      mapping: {
        mention: '#/components/schemas/MentionSubstitutionObject',
        emoji: '#/components/schemas/EmojiSubstitutionObject',
      },
    },
    required: ['type'],
  })
  .openapi('SubstitutionObject')

const TextMessageV2Schema = MessageSchema.and(
  z
    .object({
      text: z.string().exactOptional(),
      substitution: z
        .record(z.string(), SubstitutionObjectSchema)
        .exactOptional()
        .openapi({
          description:
            'A mapping that specifies substitutions for parts enclosed in {} within the `text` field.',
        }),
      quoteToken: z
        .string()
        .exactOptional()
        .openapi({ description: 'Quote token of the message you want to quote.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#text-message-v2',
    },
    required: ['text'],
  })
  .openapi('TextMessageV2')

const MentionTargetSchema = z
  .object({ type: z.string().openapi({ description: 'Target to be mentioned' }) })
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        user: '#/components/schemas/UserMentionTarget',
        all: '#/components/schemas/AllMentionTarget',
      },
    },
    required: ['type'],
  })
  .openapi('MentionTarget')

const MentionSubstitutionObjectSchema = SubstitutionObjectSchema.and(
  z.object({ mentionee: MentionTargetSchema }).openapi({ required: ['mentionee'] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#text-message-v2-mention-object',
    },
    description: 'An object representing a mention substitution.',
  })
  .openapi('MentionSubstitutionObject')

const UserMentionTargetSchema = MentionTargetSchema.and(
  z.object({ userId: z.string() }).openapi({ required: ['userId'] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#text-message-v2-mentionee-user',
    },
  })
  .openapi('UserMentionTarget')

const AllMentionTargetSchema = MentionTargetSchema.openapi({
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#text-message-v2-mentionee-all',
  },
}).openapi('AllMentionTarget')

const EmojiSubstitutionObjectSchema = SubstitutionObjectSchema.and(
  z
    .object({ productId: z.string(), emojiId: z.string() })
    .openapi({ required: ['productId', 'emojiId'] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#text-message-v2-emoji-object',
    },
    description: 'An object representing a emoji substitution.',
  })
  .openapi('EmojiSubstitutionObject')

const StickerMessageSchema = MessageSchema.and(
  z
    .object({
      packageId: z.string().exactOptional(),
      stickerId: z.string().exactOptional(),
      quoteToken: z
        .string()
        .exactOptional()
        .openapi({ description: 'Quote token of the message you want to quote.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#sticker-message',
    },
    required: ['packageId', 'stickerId'],
  })
  .openapi('StickerMessage')

const ImageMessageSchema = MessageSchema.and(
  z
    .object({
      originalContentUrl: z.url().exactOptional(),
      previewImageUrl: z.url().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#image-message' },
    required: ['originalContentUrl', 'previewImageUrl'],
  })
  .openapi('ImageMessage')

const VideoMessageSchema = MessageSchema.and(
  z
    .object({
      originalContentUrl: z.url().exactOptional(),
      previewImageUrl: z.url().exactOptional(),
      trackingId: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#video-message' },
    required: ['originalContentUrl', 'previewImageUrl'],
  })
  .openapi('VideoMessage')

const AudioMessageSchema = MessageSchema.and(
  z
    .object({
      originalContentUrl: z.url().exactOptional(),
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
        .openapi({ type: 'integer', format: 'int64' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#audio-message' },
    required: ['originalContentUrl', 'duration'],
  })
  .openapi('AudioMessage')

const LocationMessageSchema = MessageSchema.and(
  z
    .object({
      title: z.string().exactOptional(),
      address: z.string().exactOptional(),
      latitude: z.float64().exactOptional(),
      longitude: z.float64().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#location-message',
    },
    required: ['title', 'address', 'latitude', 'longitude'],
  })
  .openapi('LocationMessage')

const ImagemapBaseSizeSchema = z
  .object({ height: z.int32(), width: z.int32() })
  .openapi({ required: ['width', 'height'] })
  .openapi('ImagemapBaseSize')

const ImagemapAreaSchema = z
  .object({ x: z.int32(), y: z.int32(), width: z.int32(), height: z.int32() })
  .openapi({ required: ['x', 'y', 'width', 'height'] })
  .openapi('ImagemapArea')

const ImagemapActionSchema = z
  .object({ type: z.string(), area: ImagemapAreaSchema })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#imagemap-action-objects',
    },
    required: ['type', 'area'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        message: '#/components/schemas/MessageImagemapAction',
        uri: '#/components/schemas/URIImagemapAction',
        clipboard: '#/components/schemas/ClipboardImagemapAction',
      },
    },
  })
  .openapi('ImagemapAction')

const ImagemapExternalLinkSchema = z
  .object({ linkUri: z.url().exactOptional(), label: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ImagemapExternalLink')

const ImagemapVideoSchema = z
  .object({
    originalContentUrl: z.url().exactOptional(),
    previewImageUrl: z.url().exactOptional(),
    area: ImagemapAreaSchema.exactOptional(),
    externalLink: ImagemapExternalLinkSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImagemapVideo')

const ImagemapMessageSchema = MessageSchema.and(
  z
    .object({
      baseUrl: z.url().exactOptional(),
      altText: z.string().exactOptional(),
      baseSize: ImagemapBaseSizeSchema.exactOptional(),
      actions: z.array(ImagemapActionSchema).exactOptional(),
      video: ImagemapVideoSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#imagemap-message',
    },
    required: ['baseUrl', 'altText', 'baseSize', 'actions'],
  })
  .openapi('ImagemapMessage')

const MessageImagemapActionSchema = ImagemapActionSchema.and(
  z
    .object({ text: z.string().exactOptional(), label: z.string().exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ required: ['text'] })
  .openapi('MessageImagemapAction')

const URIImagemapActionSchema = ImagemapActionSchema.and(
  z
    .object({ linkUri: z.string().exactOptional(), label: z.string().exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ required: ['linkUri'] })
  .openapi('URIImagemapAction')

const ClipboardImagemapActionSchema = ImagemapActionSchema.and(
  z
    .object({
      clipboardText: z
        .string()
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          description: 'Text that is copied to the clipboard.\nMax character limit: 1000\n',
        }),
      label: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#imagemap-clipboard-action-object',
    },
    required: ['clipboardText'],
  })
  .openapi('ClipboardImagemapAction')

const TemplateSchema = z
  .object({ type: z.string() })
  .openapi({
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        buttons: '#/components/schemas/ButtonsTemplate',
        confirm: '#/components/schemas/ConfirmTemplate',
        carousel: '#/components/schemas/CarouselTemplate',
        image_carousel: '#/components/schemas/ImageCarouselTemplate',
      },
    },
  })
  .openapi('Template')

const TemplateMessageSchema = MessageSchema.and(
  z
    .object({ altText: z.string().exactOptional(), template: TemplateSchema.exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#template-messages',
    },
    required: ['altText', 'template'],
  })
  .openapi('TemplateMessage')

const ButtonsTemplateSchema = TemplateSchema.and(
  z
    .object({
      thumbnailImageUrl: z.url().exactOptional(),
      imageAspectRatio: z.string().exactOptional(),
      imageSize: z.string().exactOptional(),
      imageBackgroundColor: z.string().exactOptional(),
      title: z.string().exactOptional(),
      text: z.string().exactOptional(),
      defaultAction: ActionSchema.exactOptional(),
      actions: z.array(ActionSchema).exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['text', 'actions'] })
  .openapi('ButtonsTemplate')

const TemplateImageAspectRatioSchema = z
  .enum(['rectangle', 'square'])
  .openapi({
    description:
      'Aspect ratio of the image. This is only for the `imageAspectRatio` in ButtonsTemplate.\nSpecify one of the following values:\n\n`rectangle`: 1.51:1\n`square`: 1:1\n',
  })
  .openapi('TemplateImageAspectRatio')

const TemplateImageSizeSchema = z
  .enum(['cover', 'contain'])
  .openapi({
    description:
      'Size of the image.  This is only for the `imageSize` in ButtonsTemplate.\nSpecify one of the following values:\n\n`cover`: The image fills the entire image area. Parts of the image that do not fit in the area are not displayed.\n`contain`: The entire image is displayed in the image area. A background is displayed in the unused areas to the left and right of vertical images and in the areas above and below horizontal images.\n',
  })
  .openapi('TemplateImageSize')

const ConfirmTemplateSchema = TemplateSchema.and(
  z
    .object({ text: z.string().exactOptional(), actions: z.array(ActionSchema).exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ required: ['text', 'actions'] })
  .openapi('ConfirmTemplate')

const CarouselColumnSchema = z
  .object({
    thumbnailImageUrl: z.url().exactOptional(),
    imageBackgroundColor: z.string().exactOptional(),
    title: z.string().exactOptional(),
    text: z.string(),
    defaultAction: ActionSchema.exactOptional(),
    actions: z.array(ActionSchema),
  })
  .openapi({ description: 'Column object for carousel template.', required: ['text', 'actions'] })
  .openapi('CarouselColumn')

const CarouselTemplateSchema = TemplateSchema.and(
  z
    .object({
      columns: z.array(CarouselColumnSchema).exactOptional(),
      imageAspectRatio: z.string().exactOptional(),
      imageSize: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['columns'] })
  .openapi('CarouselTemplate')

const ImageCarouselColumnSchema = z
  .object({ imageUrl: z.url(), action: ActionSchema })
  .openapi({ required: ['imageUrl', 'action'] })
  .openapi('ImageCarouselColumn')

const ImageCarouselTemplateSchema = TemplateSchema.and(
  z
    .object({ columns: z.array(ImageCarouselColumnSchema).exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ required: ['columns'] })
  .openapi('ImageCarouselTemplate')

const CouponMessageSchema = MessageSchema.and(
  z
    .object({
      couponId: z
        .string()
        .exactOptional()
        .openapi({ description: 'Unique identifier of the coupon.' }),
      deliveryTag: z
        .string()
        .max(30)
        .exactOptional()
        .openapi({
          description:
            'Delivery route tag information. It can be used for analysis in LINE OA Manager.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#coupon-message' },
    required: ['couponId'],
  })
  .openapi('CouponMessage')

const FlexContainerSchema = z
  .object({ type: z.string() })
  .openapi({
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        bubble: '#/components/schemas/FlexBubble',
        carousel: '#/components/schemas/FlexCarousel',
      },
    },
  })
  .openapi('FlexContainer')

const FlexMessageSchema = MessageSchema.and(
  z
    .object({ altText: z.string().exactOptional(), contents: FlexContainerSchema.exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#flex-message' },
    required: ['altText', 'contents'],
  })
  .openapi('FlexMessage')

const FlexBlockStyleSchema = z
  .object({
    backgroundColor: z.string().exactOptional(),
    separator: z.boolean().exactOptional(),
    separatorColor: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FlexBlockStyle')

const FlexBubbleStylesSchema = z
  .object({
    header: FlexBlockStyleSchema.exactOptional(),
    hero: FlexBlockStyleSchema.exactOptional(),
    body: FlexBlockStyleSchema.exactOptional(),
    footer: FlexBlockStyleSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FlexBubbleStyles')

const FlexComponentSchema = z
  .object({ type: z.string() })
  .openapi({
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        box: '#/components/schemas/FlexBox',
        button: '#/components/schemas/FlexButton',
        image: '#/components/schemas/FlexImage',
        video: '#/components/schemas/FlexVideo',
        icon: '#/components/schemas/FlexIcon',
        text: '#/components/schemas/FlexText',
        span: '#/components/schemas/FlexSpan',
        separator: '#/components/schemas/FlexSeparator',
        filler: '#/components/schemas/FlexFiller',
      },
    },
  })
  .openapi('FlexComponent')

const FlexBoxBackgroundSchema = z
  .object({ type: z.string() })
  .openapi({
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: { linearGradient: '#/components/schemas/FlexBoxLinearGradient' },
    },
  })
  .openapi('FlexBoxBackground')

const FlexBoxSchema = FlexComponentSchema.and(
  z
    .object({
      layout: z.enum(['horizontal', 'vertical', 'baseline']).exactOptional(),
      flex: z.int32().exactOptional(),
      contents: z.array(FlexComponentSchema).exactOptional(),
      spacing: z.string().exactOptional(),
      margin: z.string().exactOptional(),
      position: z.enum(['relative', 'absolute']).exactOptional(),
      offsetTop: z.string().exactOptional(),
      offsetBottom: z.string().exactOptional(),
      offsetStart: z.string().exactOptional(),
      offsetEnd: z.string().exactOptional(),
      backgroundColor: z.string().exactOptional(),
      borderColor: z.string().exactOptional(),
      borderWidth: z.string().exactOptional(),
      cornerRadius: z.string().exactOptional(),
      width: z.string().exactOptional(),
      maxWidth: z.string().exactOptional(),
      height: z.string().exactOptional(),
      maxHeight: z.string().exactOptional(),
      paddingAll: z.string().exactOptional(),
      paddingTop: z.string().exactOptional(),
      paddingBottom: z.string().exactOptional(),
      paddingStart: z.string().exactOptional(),
      paddingEnd: z.string().exactOptional(),
      action: ActionSchema.exactOptional(),
      justifyContent: z
        .enum(['center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly'])
        .exactOptional(),
      alignItems: z.enum(['center', 'flex-start', 'flex-end']).exactOptional(),
      background: FlexBoxBackgroundSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['layout', 'contents'] })
  .openapi('FlexBox')

const FlexBubbleSchema = FlexContainerSchema.and(
  z
    .object({
      direction: z.enum(['ltr', 'rtl']).exactOptional(),
      styles: FlexBubbleStylesSchema.exactOptional(),
      header: FlexBoxSchema.exactOptional(),
      hero: FlexComponentSchema.exactOptional(),
      body: FlexBoxSchema.exactOptional(),
      footer: FlexBoxSchema.exactOptional(),
      size: z.enum(['nano', 'micro', 'deca', 'hecto', 'kilo', 'mega', 'giga']).exactOptional(),
      action: ActionSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('FlexBubble')

const FlexCarouselSchema = FlexContainerSchema.and(
  z.object({ contents: z.array(FlexBubbleSchema).exactOptional() }).openapi({ required: [] }),
)
  .openapi({ required: ['contents'] })
  .openapi('FlexCarousel')

const FlexBoxBorderWidthSchema = z
  .enum(['none', 'light', 'normal', 'medium', 'semi-bold', 'bold'])
  .openapi({
    description:
      'Width of box border. This is only for `borderWidth` in FlexBox.\nA value of none means that borders are not rendered; the other values are listed in order of increasing width.\n',
  })
  .openapi('FlexBoxBorderWidth')

const FlexBoxCornerRadiusSchema = z
  .enum(['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
  .openapi({
    description:
      'Radius at the time of rounding the corners of the box. This is only for `cornerRadius` in FlexBox.\nA value of none means that corners are not rounded; the other values are listed in order of increasing radius.\n',
  })
  .openapi('FlexBoxCornerRadius')

const FlexBoxSpacingSchema = z
  .enum(['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
  .openapi({
    description:
      'You can specify the minimum space between two components with the `spacing` property of the parent box component, in pixels or with a keyword.\nFlexBoxSpacing just provides only keywords.\n',
  })
  .openapi('FlexBoxSpacing')

const FlexMarginSchema = z
  .enum(['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
  .openapi({
    description:
      'You can specify the minimum space before a child component with the `margin` property of the child component, in pixels or with a keyword.\nFlexMargin just provides only keywords.\n',
  })
  .openapi('FlexMargin')

const FlexBoxPaddingSchema = z
  .enum(['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
  .openapi({
    description:
      'Padding can be specified in pixels, percentage (to the parent box width) or with a keyword.\nFlexBoxPadding just provides only keywords.\n',
  })
  .openapi('FlexBoxPadding')

const FlexImageSizeSchema = z
  .enum(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl', '4xl', '5xl', 'full'])
  .openapi({
    description:
      'You can set the width of an Flex image component with the `size` property, in pixels, as a percentage, or with a keyword.\nFlexImageSize just provides only keywords.\n',
  })
  .openapi('FlexImageSize')

const FlexIconSizeSchema = z
  .enum(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl', '4xl', '5xl'])
  .openapi({
    description:
      'You can set the width of an Flex icon component with the `size` property, in pixels, as a percentage, or with a keyword.\nFlexIconSize just provides only keywords.\n',
  })
  .openapi('FlexIconSize')

const FlexTextFontSizeSchema = z
  .enum(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl', '4xl', '5xl'])
  .openapi({
    description:
      'Font size in the `size` property of the Flex text component.\nYou can specify the size in pixels or with a keyword.\nFlexTextFontSize just provides only keywords.\n',
  })
  .openapi('FlexTextFontSize')

const FlexSpanSizeSchema = z
  .enum(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl', '4xl', '5xl'])
  .openapi({
    description:
      'Font size in the `size` property of the Flex span component.\nYou can specify the size in pixels or with a keyword.\nFlexSpanSize just provides only keywords.\n',
  })
  .openapi('FlexSpanSize')

const FlexOffsetSchema = z
  .enum(['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
  .openapi({
    description:
      'You can specify the offset of a component with the `offset*` property, in pixels or with a keyword.\nYou can also specify the percentage to the box width for `offsetStart` and `offsetEnd` and to the box height for `offsetTop` and `offsetBottom`.\nFlexOffset just provides only keywords.\n',
  })
  .openapi('FlexOffset')

const FlexButtonSchema = FlexComponentSchema.and(
  z
    .object({
      flex: z.int32().exactOptional(),
      color: z.string().exactOptional(),
      style: z.enum(['primary', 'secondary', 'link']).exactOptional(),
      action: ActionSchema.exactOptional(),
      gravity: z.enum(['top', 'bottom', 'center']).exactOptional(),
      margin: z.string().exactOptional(),
      position: z.enum(['relative', 'absolute']).exactOptional(),
      offsetTop: z.string().exactOptional(),
      offsetBottom: z.string().exactOptional(),
      offsetStart: z.string().exactOptional(),
      offsetEnd: z.string().exactOptional(),
      height: z.enum(['md', 'sm']).exactOptional(),
      adjustMode: z.literal('shrink-to-fit').exactOptional(),
      scaling: z.boolean().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['action'] })
  .openapi('FlexButton')

const FlexImageSchema = FlexComponentSchema.and(
  z
    .object({
      url: z
        .url()
        .exactOptional()
        .openapi({
          description:
            'Image URL (Max character limit: 2000)\nProtocol: HTTPS (TLS 1.2 or later)\nImage format: JPEG or PNG\nMaximum image size: 1024×1024 pixels\nMaximum file size: 10 MB (300 KB when the animated property is true)\n',
        }),
      flex: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The ratio of the width or height of this component within the parent box.',
        }),
      margin: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The minimum amount of space to include before this component in its parent container.\n',
        }),
      position: z
        .enum(['relative', 'absolute'])
        .exactOptional()
        .openapi({
          description:
            'Reference for offsetTop, offsetBottom, offsetStart, and offsetEnd. Specify one of the following values:\n\n`relative`: Use the previous box as reference.\n`absolute`: Use the top left of parent element as reference. The default value is relative.\n',
        }),
      offsetTop: z.string().exactOptional().openapi({ description: 'Offset.' }),
      offsetBottom: z.string().exactOptional().openapi({ description: 'Offset.' }),
      offsetStart: z.string().exactOptional().openapi({ description: 'Offset.' }),
      offsetEnd: z.string().exactOptional().openapi({ description: 'Offset.' }),
      align: z
        .enum(['start', 'end', 'center'])
        .exactOptional()
        .openapi({ description: 'Alignment style in horizontal direction.\n' }),
      gravity: z
        .enum(['top', 'bottom', 'center'])
        .exactOptional()
        .openapi({ description: 'Alignment style in vertical direction.' }),
      size: z
        .string()
        .default('md')
        .exactOptional()
        .openapi({ description: 'The maximum image width. This is md by default.\n' }),
      aspectRatio: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Aspect ratio of the image.\n`{width}:{height}` format.\nSpecify the value of `{width}` and `{height}` in the range from `1` to `100000`.\nHowever, you cannot set `{height}` to a value that is more than three times the value of `{width}`.\nThe default value is `1:1`.\n',
        }),
      aspectMode: z
        .enum(['fit', 'cover'])
        .exactOptional()
        .openapi({
          description:
            'The display style of the image if the aspect ratio of the image and that specified by the aspectRatio property do not match.\n',
        }),
      backgroundColor: z
        .string()
        .exactOptional()
        .openapi({ description: 'Background color of the image. Use a hexadecimal color code.' }),
      action: ActionSchema.exactOptional(),
      animated: z
        .boolean()
        .default(false)
        .exactOptional()
        .openapi({
          description:
            "When this is `true`, an animated image (APNG) plays.\nYou can specify a value of true up to 10 images in a single message.\nYou can't send messages that exceed this limit.\nThis is `false` by default.\nAnimated images larger than 300 KB aren't played back.\n",
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#f-image' },
    required: ['type', 'url'],
  })
  .openapi('FlexImage')

const FlexVideoSchema = FlexComponentSchema.and(
  z
    .object({
      url: z.url().exactOptional(),
      previewUrl: z.url().exactOptional(),
      altContent: FlexComponentSchema.exactOptional(),
      aspectRatio: z.string().exactOptional(),
      action: ActionSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['url', 'previewUrl', 'altContent'] })
  .openapi('FlexVideo')

const FlexIconSchema = FlexComponentSchema.and(
  z
    .object({
      url: z.url().exactOptional(),
      size: z.string().exactOptional(),
      aspectRatio: z.string().exactOptional(),
      margin: z.string().exactOptional(),
      position: z.enum(['relative', 'absolute']).exactOptional(),
      offsetTop: z.string().exactOptional(),
      offsetBottom: z.string().exactOptional(),
      offsetStart: z.string().exactOptional(),
      offsetEnd: z.string().exactOptional(),
      scaling: z.boolean().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#icon' },
    required: ['url'],
  })
  .openapi('FlexIcon')

const FlexSpanSchema = FlexComponentSchema.and(
  z
    .object({
      text: z.string().exactOptional(),
      size: z.string().exactOptional(),
      color: z.string().exactOptional(),
      weight: z.enum(['regular', 'bold']).exactOptional(),
      style: z.enum(['normal', 'italic']).exactOptional(),
      decoration: z.enum(['none', 'underline', 'line-through']).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('FlexSpan')

const FlexTextSchema = FlexComponentSchema.and(
  z
    .object({
      flex: z.int32().exactOptional(),
      text: z.string().exactOptional(),
      size: z.string().exactOptional(),
      align: z.enum(['start', 'end', 'center']).exactOptional(),
      gravity: z.enum(['top', 'bottom', 'center']).exactOptional(),
      color: z.string().exactOptional(),
      weight: z.enum(['regular', 'bold']).exactOptional(),
      style: z.enum(['normal', 'italic']).exactOptional(),
      decoration: z.enum(['none', 'underline', 'line-through']).exactOptional(),
      wrap: z.boolean().exactOptional(),
      lineSpacing: z.string().exactOptional(),
      margin: z.string().exactOptional(),
      position: z.enum(['relative', 'absolute']).exactOptional(),
      offsetTop: z.string().exactOptional(),
      offsetBottom: z.string().exactOptional(),
      offsetStart: z.string().exactOptional(),
      offsetEnd: z.string().exactOptional(),
      action: ActionSchema.exactOptional(),
      maxLines: z.int32().exactOptional(),
      contents: z.array(FlexSpanSchema).exactOptional(),
      adjustMode: z.literal('shrink-to-fit').exactOptional(),
      scaling: z.boolean().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('FlexText')

const FlexSeparatorSchema = FlexComponentSchema.and(
  z
    .object({ margin: z.string().exactOptional(), color: z.string().exactOptional() })
    .openapi({ required: [] }),
).openapi('FlexSeparator')

const FlexFillerSchema = FlexComponentSchema.and(
  z.object({ flex: z.int32().exactOptional() }).openapi({ required: [] }),
).openapi('FlexFiller')

const FlexBoxLinearGradientSchema = FlexBoxBackgroundSchema.and(
  z
    .object({
      angle: z.string().exactOptional(),
      startColor: z.string().exactOptional(),
      endColor: z.string().exactOptional(),
      centerColor: z.string().exactOptional(),
      centerPosition: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('FlexBoxLinearGradient')

const CameraActionSchema = ActionSchema.openapi('CameraAction')

const CameraRollActionSchema = ActionSchema.openapi('CameraRollAction')

const ClipboardActionSchema = ActionSchema.and(
  z
    .object({
      clipboardText: z
        .string()
        .min(1)
        .max(1000)
        .openapi({
          description: 'Text that is copied to the clipboard.\nMax character limit: 1000\n',
        }),
    })
    .openapi({ required: ['clipboardText'] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#clipboard-action',
    },
  })
  .openapi('ClipboardAction')

const DatetimePickerActionSchema = ActionSchema.and(
  z
    .object({
      data: z.string().min(0).max(300).exactOptional(),
      mode: z.enum(['date', 'time', 'datetime']).exactOptional(),
      initial: z.string().exactOptional(),
      max: z.string().exactOptional(),
      min: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action',
    },
  })
  .openapi('DatetimePickerAction')

const LocationActionSchema = ActionSchema.openapi('LocationAction')

const MessageActionSchema = ActionSchema.and(
  z.object({ text: z.string().exactOptional() }).openapi({ required: [] }),
).openapi('MessageAction')

const PostbackActionSchema = ActionSchema.and(
  z
    .object({
      data: z.string().min(0).max(300).exactOptional(),
      displayText: z.string().exactOptional(),
      text: z.string().exactOptional(),
      inputOption: z
        .enum(['closeRichMenu', 'openRichMenu', 'openKeyboard', 'openVoice'])
        .exactOptional(),
      fillInText: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('PostbackAction')

const RichMenuSwitchActionSchema = ActionSchema.and(
  z
    .object({
      data: z.string().min(0).max(300).exactOptional(),
      richMenuAliasId: z.string().min(0).max(32).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('RichMenuSwitchAction')

const AltUriSchema = z
  .object({ desktop: z.string().min(0).max(1000).exactOptional() })
  .openapi({ required: [] })
  .openapi('AltUri')

const URIActionSchema = ActionSchema.and(
  z
    .object({ uri: z.url().exactOptional(), altUri: AltUriSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('URIAction')

const SubscribedMembershipPlanSchema = z
  .object({
    membershipId: z.int().openapi({ description: 'Membership plan ID.' }),
    title: z.string().openapi({ description: 'Membership plan name.' }),
    description: z.string().openapi({ description: 'Membership plan description.' }),
    benefits: z.array(z.string()).min(1).openapi({ description: 'List of membership plan perks.' }),
    price: z
      .float64()
      .openapi({ example: 500, description: 'Monthly fee for membership plan. (e.g. 1500.00)' }),
    currency: z
      .enum(['JPY', 'TWD', 'THB'])
      .openapi({ description: 'The currency of membership.price.' }),
  })
  .openapi({
    description: 'Object containing information about the membership plan.',
    required: ['membershipId', 'title', 'description', 'benefits', 'price', 'currency'],
  })
  .openapi('SubscribedMembershipPlan')

const SubscribedMembershipUserSchema = z
  .object({
    membershipNo: z
      .int()
      .openapi({ description: "The user's member number in the membership plan." }),
    joinedTime: z
      .int()
      .openapi({ description: 'UNIX timestamp at which the user subscribed to the membership.' }),
    nextBillingDate: z
      .string()
      .openapi({
        description:
          'Next payment date for membership plan.\n- Format: yyyy-MM-dd (e.g. 2024-02-08)\n- Timezone: UTC+9\n',
      }),
    totalSubscriptionMonths: z
      .int()
      .openapi({
        description:
          'The period of time in months that the user has been subscribed to a membership plan. If a user previously canceled and then re-subscribed to the same membership plan, only the period after the re-subscription will be counted.',
      }),
  })
  .openapi({
    description: 'Object containing user membership subscription information.',
    required: ['membershipNo', 'joinedTime', 'nextBillingDate', 'totalSubscriptionMonths'],
  })
  .openapi('SubscribedMembershipUser')

const SubscriptionSchema = z
  .object({ membership: SubscribedMembershipPlanSchema, user: SubscribedMembershipUserSchema })
  .openapi({ description: 'An array of memberships.', required: ['membership', 'user'] })
  .openapi('Subscription')

const GetMembershipSubscriptionResponseSchema = z
  .object({
    subscriptions: z
      .array(SubscriptionSchema)
      .min(0)
      .openapi({ description: 'List of subscription information' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-a-users-membership-subscription-status',
    },
    description: "A user's membership subscription status",
    required: ['subscriptions'],
  })
  .openapi('GetMembershipSubscriptionResponse')

const MembershipSchema = z
  .object({
    membershipId: z.int().openapi({ description: 'Membership plan ID.' }),
    title: z.string().openapi({ description: 'Membership plan name.' }),
    description: z.string().openapi({ description: 'Membership plan description.' }),
    benefits: z.array(z.string()).min(1).openapi({ description: 'List of membership plan perks.' }),
    price: z
      .float64()
      .openapi({ example: 500, description: 'Monthly fee for membership plan. (e.g. 1500.00)' }),
    currency: z
      .enum(['JPY', 'TWD', 'THB'])
      .openapi({ description: 'The currency of membership.price.' }),
    memberCount: z
      .int()
      .openapi({
        example: 100,
        description: 'Number of members subscribed to the membership plan.',
      }),
    memberLimit: z
      .int()
      .nullable()
      .openapi({
        example: 1000,
        description:
          'The upper limit of members who can subscribe. If no upper limit is set, it will be null.',
      }),
    isInAppPurchase: z
      .boolean()
      .openapi({ description: 'Payment method for users who subscribe to a membership plan.' }),
    isPublished: z.boolean().openapi({ description: 'Membership plan status.' }),
  })
  .openapi({
    required: [
      'membershipId',
      'title',
      'description',
      'benefits',
      'price',
      'currency',
      'memberCount',
      'memberLimit',
      'isInAppPurchase',
      'isPublished',
    ],
  })
  .openapi('Membership')

const MembershipListResponseSchema = z
  .object({
    memberships: z
      .array(MembershipSchema)
      .min(0)
      .openapi({ description: 'List of membership information' }),
  })
  .openapi({ description: 'List of memberships', required: ['memberships'] })
  .openapi('MembershipListResponse')

const GetJoinedMembershipUsersResponseSchema = z
  .object({
    userIds: z
      .array(z.string())
      .max(1000)
      .openapi({
        description:
          'A list of user IDs who joined the membership.\nUsers who have not agreed to the bot user agreement, are not following the bot, or are not active will be excluded.\nIf there are no users in the membership, an empty list will be returned.\n',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A continuation token to get next remaining membership user IDs.\nReturned only when there are remaining user IDs that weren't returned in the userIds property in the previous request.\nThe continuation token expires in 24 hours (86,400 seconds).\n\n",
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#get-membership-user-ids',
    },
    description: 'List of users who have joined the membership',
    required: ['userIds'],
  })
  .openapi('GetJoinedMembershipUsersResponse')

const AcquisitionConditionRequestSchema = z
  .object({
    type: z.string().openapi({ description: 'Determines how the coupon is distributed or used.' }),
  })
  .openapi({
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        normal: '#/components/schemas/NormalAcquisitionConditionRequest',
        lottery: '#/components/schemas/LotteryAcquisitionConditionRequest',
      },
    },
  })
  .openapi('AcquisitionConditionRequest')

const CouponRewardRequestSchema = z
  .object({
    type: z.string().openapi({ description: 'Type of coupon. Determines the benefit provided.' }),
  })
  .openapi({
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        cashBack: '#/components/schemas/CouponCashBackRewardRequest',
        discount: '#/components/schemas/CouponDiscountRewardRequest',
        free: '#/components/schemas/CouponFreeRewardRequest',
        gift: '#/components/schemas/CouponGiftRewardRequest',
        others: '#/components/schemas/CouponOthersRewardRequest',
      },
    },
  })
  .openapi('CouponRewardRequest')

const CouponCreateRequestSchema = z
  .object({
    acquisitionCondition: AcquisitionConditionRequestSchema,
    barcodeImageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL of the barcode image associated with the coupon. Used for in-store redemption.',
      }),
    couponCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique code to be presented by the user to redeem the coupon. Optional.',
      }),
    description: z
      .string()
      .min(0)
      .max(1000)
      .exactOptional()
      .openapi({ description: 'Detailed description of the coupon. Displayed to users.' }),
    endTimestamp: z
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
          'Coupon expiration time (epoch seconds). Coupon cannot be used after this time.',
      }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL of the main image representing the coupon. Displayed in the coupon list.',
      }),
    maxUseCountPerTicket: z
      .int32()
      .max(1)
      .openapi({
        description:
          'Maximum number of times a single coupon ticket can be used. Use -1 to indicate no limit.',
      }),
    startTimestamp: z
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
        description: 'Coupon start time (epoch seconds). Coupon can be used from this time.',
      }),
    title: z
      .string()
      .min(1)
      .max(60)
      .openapi({ description: 'Title of the coupon. Displayed in the coupon list.' }),
    usageCondition: z
      .string()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({ description: 'Conditions for using the coupon. Shown to users.' }),
    reward: CouponRewardRequestSchema.exactOptional(),
    visibility: z
      .enum(['UNLISTED', 'PUBLIC'])
      .openapi({
        description: 'Visibility of the coupon. Determines who can see or acquire the coupon.',
      }),
    timezone: z
      .enum([
        'ETC_GMT_MINUS_12',
        'ETC_GMT_MINUS_11',
        'PACIFIC_HONOLULU',
        'AMERICA_ANCHORAGE',
        'AMERICA_LOS_ANGELES',
        'AMERICA_PHOENIX',
        'AMERICA_CHICAGO',
        'AMERICA_NEW_YORK',
        'AMERICA_CARACAS',
        'AMERICA_SANTIAGO',
        'AMERICA_ST_JOHNS',
        'AMERICA_SAO_PAULO',
        'ETC_GMT_MINUS_2',
        'ATLANTIC_CAPE_VERDE',
        'EUROPE_LONDON',
        'EUROPE_PARIS',
        'EUROPE_ISTANBUL',
        'EUROPE_MOSCOW',
        'ASIA_TEHRAN',
        'ASIA_TBILISI',
        'ASIA_KABUL',
        'ASIA_TASHKENT',
        'ASIA_COLOMBO',
        'ASIA_KATHMANDU',
        'ASIA_ALMATY',
        'ASIA_RANGOON',
        'ASIA_BANGKOK',
        'ASIA_TAIPEI',
        'ASIA_TOKYO',
        'AUSTRALIA_DARWIN',
        'AUSTRALIA_SYDNEY',
        'ASIA_VLADIVOSTOK',
        'ETC_GMT_PLUS_12',
        'PACIFIC_TONGATAPU',
      ])
      .openapi({ description: 'Timezone for interpreting start and end timestamps.' }),
  })
  .openapi({
    description:
      'Request object for creating a coupon. Contains all configurable coupon properties.',
    required: [
      'acquisitionCondition',
      'endTimestamp',
      'maxUseCountPerTicket',
      'startTimestamp',
      'title',
      'visibility',
      'timezone',
    ],
  })
  .openapi('CouponCreateRequest')

const NormalAcquisitionConditionRequestSchema = AcquisitionConditionRequestSchema.openapi(
  'NormalAcquisitionConditionRequest',
)

const LotteryAcquisitionConditionRequestSchema = AcquisitionConditionRequestSchema.and(
  z
    .object({
      lotteryProbability: z
        .int32()
        .min(1)
        .max(99)
        .openapi({
          description: 'Probability (1-99) of winning the coupon in lottery-type campaigns.',
        }),
      maxAcquireCount: z
        .int32()
        .max(999999)
        .openapi({
          description:
            'Maximum number of coupons that can be issued in total. Use -1 to indicate no limit',
        }),
    })
    .openapi({ required: ['lotteryProbability', 'maxAcquireCount'] }),
).openapi('LotteryAcquisitionConditionRequest')

const CashBackPriceInfoRequestSchema = z
  .object({ type: z.string() })
  .openapi({
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        fixed: '#/components/schemas/CashBackFixedPriceInfoRequest',
        percentage: '#/components/schemas/CashBackPercentagePriceInfoRequest',
      },
    },
  })
  .openapi('CashBackPriceInfoRequest')

const CouponCashBackRewardRequestSchema = CouponRewardRequestSchema.and(
  z.object({ priceInfo: CashBackPriceInfoRequestSchema.exactOptional() }).openapi({ required: [] }),
).openapi('CouponCashBackRewardRequest')

const DiscountPriceInfoRequestSchema = z
  .object({ type: z.string() })
  .openapi({
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        fixed: '#/components/schemas/DiscountFixedPriceInfoRequest',
        percentage: '#/components/schemas/DiscountPercentagePriceInfoRequest',
        explicit: '#/components/schemas/DiscountExplicitPriceInfoRequest',
      },
    },
  })
  .openapi('DiscountPriceInfoRequest')

const CouponDiscountRewardRequestSchema = CouponRewardRequestSchema.and(
  z.object({ priceInfo: DiscountPriceInfoRequestSchema.exactOptional() }).openapi({ required: [] }),
).openapi('CouponDiscountRewardRequest')

const CouponFreeRewardRequestSchema = CouponRewardRequestSchema.openapi('CouponFreeRewardRequest')

const CouponGiftRewardRequestSchema = CouponRewardRequestSchema.openapi('CouponGiftRewardRequest')

const CouponOthersRewardRequestSchema = CouponRewardRequestSchema.openapi(
  'CouponOthersRewardRequest',
)

const CashBackFixedPriceInfoRequestSchema = CashBackPriceInfoRequestSchema.and(
  z
    .object({
      fixedAmount: z
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
).openapi('CashBackFixedPriceInfoRequest')

const CashBackPercentagePriceInfoRequestSchema = CashBackPriceInfoRequestSchema.and(
  z
    .object({
      percentage: z
        .int32()
        .min(1)
        .max(99)
        .exactOptional()
        .openapi({
          description:
            'Specifies the cashback rate as a percentage. Must be an integer between 1 and 99.',
        }),
    })
    .openapi({ required: [] }),
).openapi('CashBackPercentagePriceInfoRequest')

const DiscountFixedPriceInfoRequestSchema = DiscountPriceInfoRequestSchema.and(
  z
    .object({
      fixedAmount: z
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
).openapi('DiscountFixedPriceInfoRequest')

const DiscountPercentagePriceInfoRequestSchema = DiscountPriceInfoRequestSchema.and(
  z
    .object({
      percentage: z
        .int32()
        .min(1)
        .max(99)
        .exactOptional()
        .openapi({
          description:
            'Specifies the discount rate as a percentage. Must be an integer between 1 and 99.',
        }),
    })
    .openapi({ required: [] }),
).openapi('DiscountPercentagePriceInfoRequest')

const DiscountExplicitPriceInfoRequestSchema = DiscountPriceInfoRequestSchema.and(
  z
    .object({
      priceAfterDiscount: z
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
      originalPrice: z
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
).openapi('DiscountExplicitPriceInfoRequest')

const CouponCreateResponseSchema = z
  .object({ couponId: z.string().openapi({ description: 'Unique identifier of the coupon.' }) })
  .openapi({
    description: 'Response object returned after creating a coupon. Contains the coupon ID.',
    required: ['couponId'],
  })
  .openapi('CouponCreateResponse')

const AcquisitionConditionResponseSchema = z
  .object({
    type: z.string().openapi({ description: 'Determines how the coupon is distributed or used.' }),
  })
  .openapi({
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        normal: '#/components/schemas/NormalAcquisitionConditionResponse',
        lottery: '#/components/schemas/LotteryAcquisitionConditionResponse',
        referral: '#/components/schemas/ReferralAcquisitionConditionResponse',
      },
    },
  })
  .openapi('AcquisitionConditionResponse')

const CouponRewardResponseSchema = z
  .object({
    type: z.string().openapi({ description: 'Type of coupon. Determines the benefit provided.' }),
  })
  .openapi({
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        cashBack: '#/components/schemas/CouponCashBackRewardResponse',
        discount: '#/components/schemas/CouponDiscountRewardResponse',
        free: '#/components/schemas/CouponFreeRewardResponse',
        gift: '#/components/schemas/CouponGiftRewardResponse',
        others: '#/components/schemas/CouponOthersRewardResponse',
      },
    },
  })
  .openapi('CouponRewardResponse')

const CouponResponseSchema = z
  .object({
    acquisitionCondition: AcquisitionConditionResponseSchema.exactOptional(),
    barcodeImageUrl: z
      .url()
      .exactOptional()
      .openapi({
        description:
          'URL of the barcode image associated with the coupon. Used for in-store redemption.',
      }),
    couponCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique code to be presented by the user to redeem the coupon.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detailed description of the coupon. Displayed to users.' }),
    endTimestamp: z
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
          'Coupon expiration time (epoch seconds). Coupon cannot be used after this time.',
      }),
    imageUrl: z
      .url()
      .exactOptional()
      .openapi({
        description: 'URL of the main image representing the coupon. Displayed in the coupon list.',
      }),
    maxAcquireCount: z
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
        description: 'Maximum number of coupons that can be issued in total.',
      }),
    maxUseCountPerTicket: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of times a single coupon ticket can be used.' }),
    maxTicketPerUser: z
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
        description: 'Maximum number of coupon tickets a single user can acquire.',
      }),
    startTimestamp: z
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
        description: 'Coupon start time (epoch seconds). Coupon can be used from this time.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the coupon. Displayed in the coupon list.' }),
    usageCondition: z
      .string()
      .exactOptional()
      .openapi({ description: 'Conditions for using the coupon. Shown to users.' }),
    reward: CouponRewardResponseSchema.exactOptional(),
    visibility: z
      .enum(['UNLISTED', 'PUBLIC', 'PRIVATE'])
      .exactOptional()
      .openapi({
        description: 'Visibility of the coupon. Determines who can see or acquire the coupon.',
      }),
    timezone: z
      .enum([
        'ETC_GMT_MINUS_12',
        'ETC_GMT_MINUS_11',
        'PACIFIC_HONOLULU',
        'AMERICA_ANCHORAGE',
        'AMERICA_LOS_ANGELES',
        'AMERICA_PHOENIX',
        'AMERICA_CHICAGO',
        'AMERICA_NEW_YORK',
        'AMERICA_CARACAS',
        'AMERICA_SANTIAGO',
        'AMERICA_ST_JOHNS',
        'AMERICA_SAO_PAULO',
        'ETC_GMT_MINUS_2',
        'ATLANTIC_CAPE_VERDE',
        'EUROPE_LONDON',
        'EUROPE_PARIS',
        'EUROPE_ISTANBUL',
        'EUROPE_MOSCOW',
        'ASIA_TEHRAN',
        'ASIA_TBILISI',
        'ASIA_KABUL',
        'ASIA_TASHKENT',
        'ASIA_COLOMBO',
        'ASIA_KATHMANDU',
        'ASIA_ALMATY',
        'ASIA_RANGOON',
        'ASIA_BANGKOK',
        'ASIA_TAIPEI',
        'ASIA_TOKYO',
        'AUSTRALIA_DARWIN',
        'AUSTRALIA_SYDNEY',
        'ASIA_VLADIVOSTOK',
        'ETC_GMT_PLUS_12',
        'PACIFIC_TONGATAPU',
      ])
      .exactOptional()
      .openapi({ description: 'Timezone for interpreting start and end timestamps.' }),
    couponId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the coupon.' }),
    createdTimestamp: z
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
        description: 'Created timestamp (seconds) of the coupon.',
      }),
    status: z
      .enum(['DRAFT', 'RUNNING', 'CLOSED'])
      .exactOptional()
      .openapi({ description: 'Current status of the coupon.' }),
  })
  .openapi({
    description:
      'Detailed information about a coupon, including all properties and current status.',
    required: [],
  })
  .openapi('CouponResponse')

const NormalAcquisitionConditionResponseSchema = AcquisitionConditionResponseSchema.openapi(
  'NormalAcquisitionConditionResponse',
)

const LotteryAcquisitionConditionResponseSchema = AcquisitionConditionResponseSchema.and(
  z
    .object({
      lotteryProbability: z.int32().exactOptional(),
      maxAcquireCount: z.int32().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('LotteryAcquisitionConditionResponse')

const ReferralAcquisitionConditionResponseSchema = AcquisitionConditionResponseSchema.openapi(
  'ReferralAcquisitionConditionResponse',
)

const CashBackPriceInfoResponseSchema = z
  .object({ type: z.string() })
  .openapi({
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        fixed: '#/components/schemas/CashBackFixedPriceInfoResponse',
        percentage: '#/components/schemas/CashBackPercentagePriceInfoResponse',
      },
    },
  })
  .openapi('CashBackPriceInfoResponse')

const CouponCashBackRewardResponseSchema = CouponRewardResponseSchema.and(
  z
    .object({ priceInfo: CashBackPriceInfoResponseSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('CouponCashBackRewardResponse')

const DiscountPriceInfoResponseSchema = z
  .object({ type: z.string() })
  .openapi({
    required: ['type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        fixed: '#/components/schemas/DiscountFixedPriceInfoResponse',
        percentage: '#/components/schemas/DiscountPercentagePriceInfoResponse',
        explicit: '#/components/schemas/DiscountExplicitPriceInfoResponse',
      },
    },
  })
  .openapi('DiscountPriceInfoResponse')

const CouponDiscountRewardResponseSchema = CouponRewardResponseSchema.and(
  z
    .object({ priceInfo: DiscountPriceInfoResponseSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('CouponDiscountRewardResponse')

const CouponFreeRewardResponseSchema = CouponRewardResponseSchema.openapi(
  'CouponFreeRewardResponse',
)

const CouponGiftRewardResponseSchema = CouponRewardResponseSchema.openapi(
  'CouponGiftRewardResponse',
)

const CouponOthersRewardResponseSchema = CouponRewardResponseSchema.openapi(
  'CouponOthersRewardResponse',
)

const CashBackFixedPriceInfoResponseSchema = CashBackPriceInfoResponseSchema.and(
  z
    .object({
      currency: z
        .enum(['JPY', 'THB', 'TWD'])
        .exactOptional()
        .openapi({ description: 'Currency code (e.g., JPY, THB, TWD).' }),
      fixedAmount: z
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
).openapi('CashBackFixedPriceInfoResponse')

const CashBackPercentagePriceInfoResponseSchema = CashBackPriceInfoResponseSchema.and(
  z.object({ percentage: z.int32().exactOptional() }).openapi({ required: [] }),
).openapi('CashBackPercentagePriceInfoResponse')

const DiscountFixedPriceInfoResponseSchema = DiscountPriceInfoResponseSchema.and(
  z
    .object({
      currency: z
        .enum(['JPY', 'THB', 'TWD'])
        .exactOptional()
        .openapi({ description: 'Currency code (e.g., JPY, THB, TWD).' }),
      fixedAmount: z
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
).openapi('DiscountFixedPriceInfoResponse')

const DiscountPercentagePriceInfoResponseSchema = DiscountPriceInfoResponseSchema.and(
  z.object({ percentage: z.int32().exactOptional() }).openapi({ required: [] }),
).openapi('DiscountPercentagePriceInfoResponse')

const DiscountExplicitPriceInfoResponseSchema = DiscountPriceInfoResponseSchema.and(
  z
    .object({
      currency: z
        .enum(['JPY', 'THB', 'TWD'])
        .exactOptional()
        .openapi({ description: 'Currency code (e.g., JPY, THB, TWD).' }),
      priceAfterDiscount: z
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
      originalPrice: z
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
).openapi('DiscountExplicitPriceInfoResponse')

const CouponListResponseSchema = z
  .object({
    couponId: z.string().openapi({ description: 'Unique identifier of the coupon.' }),
    title: z
      .string()
      .openapi({ description: 'Title of the coupon. Displayed in the coupon list.' }),
  })
  .openapi({
    description: 'Summary information about a coupon, used in coupon lists.',
    required: ['couponId', 'title'],
  })
  .openapi('CouponListResponse')

const MessagingApiPagerCouponListResponseSchema = z
  .object({
    items: z
      .array(CouponListResponseSchema)
      .openapi({ description: 'List of coupon summary objects.' }),
    next: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token for fetching the next page of results.' }),
  })
  .openapi({
    description: 'Paginated response object containing a list of coupons.',
    required: ['items'],
  })
  .openapi('MessagingApiPagerCouponListResponse')

const ShowLoadingAnimationRequestSchema = z
  .object({
    chatId: z
      .string()
      .openapi({
        description:
          'User ID of the target user for whom the loading animation is to be displayed.',
      }),
    loadingSeconds: z
      .int32()
      .min(5)
      .max(60)
      .exactOptional()
      .openapi({
        description:
          'The number of seconds to display the loading indicator.\nIt must be a multiple of 5. The maximum value is 60 seconds.\n',
      }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#display-a-loading-indicator-request-body',
    },
    required: ['chatId'],
  })
  .openapi('ShowLoadingAnimationRequest')

const ShowLoadingAnimationResponseSchema = z
  .object({})
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#display-a-loading-indicator-response',
    },
  })
  .openapi('ShowLoadingAnimationResponse')

const MarkMessagesAsReadByTokenRequestSchema = z
  .object({
    markAsReadToken: z.string().openapi({ description: 'Token used to mark messages as read.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#mark-as-read-request-body',
    },
    required: ['markAsReadToken'],
  })
  .openapi('MarkMessagesAsReadByTokenRequest')

const ErrorDetailSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Details of the error. Not included in the response under certain situations.',
      }),
    property: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location of where the error occurred. Returns the JSON field name or query parameter name of the request. Not included in the response under certain situations.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ErrorDetail')

const ErrorResponseSchema = z
  .object({
    message: z.string().openapi({ description: 'Message containing information about the error.' }),
    details: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of error details. If the array is empty, this property will not be included in the response.',
      }),
    sentMessages: z
      .array(SentMessageSchema)
      .min(1)
      .max(5)
      .exactOptional()
      .openapi({ description: 'Array of sent messages.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/messaging-api/#error-responses',
    },
    required: ['message'],
  })
  .openapi('ErrorResponse')

const BearerSecurityScheme = { type: 'http', scheme: 'bearer', description: 'Channel access token' }

export const getV2BotChannelWebhookEndpointRoute = createRoute({
  method: 'get',
  path: '/v2/bot/channel/webhook/endpoint',
  tags: ['messaging-api'],
  description: 'Get webhook endpoint information',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-webhook-endpoint-information',
  },
  operationId: 'getWebhookEndpoint',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetWebhookEndpointResponseSchema,
          examples: {
            ACTIVE: {
              summary: 'If the webhook URL was set and the webhook usage is enabled',
              value: { endpoint: 'https://example.com/test', active: true },
            },
            INACTIVE: {
              summary: 'If the webhook URL was set and the webhook usage is disabled',
              value: { endpoint: 'https://example.com/test', active: false },
            },
          },
        },
      },
    },
  },
})

export const putV2BotChannelWebhookEndpointRoute = createRoute({
  method: 'put',
  path: '/v2/bot/channel/webhook/endpoint',
  tags: ['messaging-api'],
  description: 'Set webhook endpoint URL',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#set-webhook-endpoint-url',
  },
  operationId: 'setWebhookEndpoint',
  request: {
    body: {
      content: { 'application/json': { schema: SetWebhookEndpointRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postV2BotChannelWebhookTestRoute = createRoute({
  method: 'post',
  path: '/v2/bot/channel/webhook/test',
  tags: ['messaging-api'],
  description: 'Test webhook endpoint',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#test-webhook-endpoint',
  },
  operationId: 'testWebhookEndpoint',
  request: {
    body: { content: { 'application/json': { schema: TestWebhookEndpointRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: TestWebhookEndpointResponseSchema,
          example: {
            success: true,
            timestamp: '2020-09-30T05:38:20.031Z',
            statusCode: 200,
            reason: 'OK',
            detail: '200',
          },
        },
      },
    },
  },
})

export const getV2BotMessageMessageIdContentRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/{messageId}/content',
  tags: ['messaging-api-blob'],
  description: 'Download image, video, and audio data sent from users.',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-content' },
  operationId: 'getMessageContent',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            description: 'Message ID of video or audio',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        '*/*': {
          schema: z
            .file()
            .openapi({ type: 'string', format: 'binary', description: 'blob response' }),
        },
      },
    },
  },
  servers: [{ url: 'https://api-data.line.me' }],
})

export const getV2BotMessageMessageIdContentPreviewRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/{messageId}/content/preview',
  tags: ['messaging-api-blob'],
  description: 'Get a preview image of the image or video',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-image-or-video-preview',
  },
  operationId: 'getMessageContentPreview',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            description: 'Message ID of image or video',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        '*/*': {
          schema: z
            .file()
            .openapi({ type: 'string', format: 'binary', description: 'blob response' }),
        },
      },
    },
  },
  servers: [{ url: 'https://api-data.line.me' }],
})

export const getV2BotMessageMessageIdContentTranscodingRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/{messageId}/content/transcoding',
  tags: ['messaging-api-blob'],
  description: 'Verify the preparation status of a video or audio for getting',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#verify-video-or-audio-preparation-status',
  },
  operationId: 'getMessageContentTranscodingByMessageId',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            required: true,
            description: 'Message ID of video or audio',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetMessageContentTranscodingResponseSchema,
          example: { status: 'processing' },
        },
      },
    },
  },
  servers: [{ url: 'https://api-data.line.me' }],
})

export const postV2BotMessageReplyRoute = createRoute({
  method: 'post',
  path: '/v2/bot/message/reply',
  tags: ['messaging-api'],
  description: 'Send reply message',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#send-reply-message',
  },
  operationId: 'replyMessage',
  request: {
    body: {
      content: { 'application/json': { schema: ReplyMessageRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ReplyMessageResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postV2BotMessagePushRoute = createRoute({
  method: 'post',
  path: '/v2/bot/message/push',
  tags: ['messaging-api'],
  description: 'Sends a message to a user, group chat, or multi-person chat at any time.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#send-push-message',
  },
  operationId: 'pushMessage',
  request: {
    headers: z.object({
      'X-Line-Retry-Key': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Line-Retry-Key',
            in: 'header',
            required: false,
            schema: { type: 'string', format: 'uuid' },
            description:
              "Retry key.\nSpecifies the UUID in hexadecimal format (e.g., `123e4567-e89b-12d3-a456-426614174000`) generated by any method.\nThe retry key isn't generated by LINE. Each developer must generate their own retry key.\n",
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PushMessageRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PushMessageResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postV2BotMessageMulticastRoute = createRoute({
  method: 'post',
  path: '/v2/bot/message/multicast',
  tags: ['messaging-api'],
  description:
    "An API that efficiently sends the same message to multiple user IDs. You can't send messages to group chats or multi-person chats.",
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#send-multicast-message',
  },
  operationId: 'multicast',
  request: {
    headers: z.object({
      'X-Line-Retry-Key': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Line-Retry-Key',
            in: 'header',
            required: false,
            schema: { type: 'string', format: 'uuid' },
            description:
              "Retry key.\nSpecifies the UUID in hexadecimal format (e.g., `123e4567-e89b-12d3-a456-426614174000`) generated by any method.\nThe retry key isn't generated by LINE. Each developer must generate their own retry key.\n",
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MulticastRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MulticastResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postV2BotMessageNarrowcastRoute = createRoute({
  method: 'post',
  path: '/v2/bot/message/narrowcast',
  tags: ['messaging-api'],
  description: 'Send narrowcast message',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#send-narrowcast-message',
  },
  operationId: 'narrowcast',
  request: {
    headers: z.object({
      'X-Line-Retry-Key': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Line-Retry-Key',
            in: 'header',
            required: false,
            schema: { type: 'string', format: 'uuid' },
            description:
              "Retry key.\nSpecifies the UUID in hexadecimal format (e.g., `123e4567-e89b-12d3-a456-426614174000`) generated by any method.\nThe retry key isn't generated by LINE. Each developer must generate their own retry key.\n",
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NarrowcastRequestSchema } }, required: true },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: NarrowcastResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV2BotMessageProgressNarrowcastRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/progress/narrowcast',
  tags: ['messaging-api'],
  description: 'Gets the status of a narrowcast message.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-narrowcast-progress-status',
  },
  operationId: 'getNarrowcastProgress',
  request: {
    query: z.object({
      requestId: z
        .string()
        .openapi({
          param: {
            name: 'requestId',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            description:
              "The narrowcast message's request ID. Each Messaging API request has a request ID.",
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: NarrowcastProgressResponseSchema,
          example: { phase: 'waiting', acceptedTime: '2020-12-03T10:15:30.121Z' },
        },
      },
    },
  },
})

export const postV2BotMessageBroadcastRoute = createRoute({
  method: 'post',
  path: '/v2/bot/message/broadcast',
  tags: ['messaging-api'],
  description: 'Sends a message to multiple users at any time.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message',
  },
  operationId: 'broadcast',
  request: {
    headers: z.object({
      'X-Line-Retry-Key': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Line-Retry-Key',
            in: 'header',
            required: false,
            schema: { type: 'string', format: 'uuid' },
            description:
              "Retry key.\nSpecifies the UUID in hexadecimal format (e.g., `123e4567-e89b-12d3-a456-426614174000`) generated by any method.\nThe retry key isn't generated by LINE. Each developer must generate their own retry key.\n",
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BroadcastRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BroadcastResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    429: {
      description: 'Too Many Requests',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV2BotMessageQuotaRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/quota',
  tags: ['messaging-api'],
  description:
    'Gets the target limit for sending messages in the current month. The total number of the free messages and the additional messages is returned.',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-quota' },
  operationId: 'getMessageQuota',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MessageQuotaResponseSchema,
          example: { type: 'limited', value: 1000 },
        },
      },
    },
  },
})

export const getV2BotMessageQuotaConsumptionRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/quota/consumption',
  tags: ['messaging-api'],
  description: 'Gets the number of messages sent in the current month.',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-consumption' },
  operationId: 'getMessageQuotaConsumption',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: QuotaConsumptionResponseSchema,
          example: { totalUsage: 500 },
        },
      },
    },
  },
})

export const getV2BotMessageDeliveryReplyRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/delivery/reply',
  tags: ['messaging-api'],
  description: 'Get number of sent reply messages',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-number-of-reply-messages',
  },
  operationId: 'getNumberOfSentReplyMessages',
  request: {
    query: z.object({
      date: z
        .string()
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            description:
              'Date the messages were sent\n\nFormat: `yyyyMMdd` (e.g. `20191231`)\nTimezone: UTC+9\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: NumberOfMessagesResponseSchema,
          example: { status: 'ready', success: 10000 },
        },
      },
    },
  },
})

export const getV2BotMessageDeliveryPushRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/delivery/push',
  tags: ['messaging-api'],
  description: 'Get number of sent push messages',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-number-of-push-messages',
  },
  operationId: 'getNumberOfSentPushMessages',
  request: {
    query: z.object({
      date: z
        .string()
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            description:
              'Date the messages were sent\n\nFormat: `yyyyMMdd` (e.g. `20191231`)\nTimezone: UTC+9\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: NumberOfMessagesResponseSchema,
          example: { status: 'ready', success: 10000 },
        },
      },
    },
  },
})

export const getV2BotMessageDeliveryMulticastRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/delivery/multicast',
  tags: ['messaging-api'],
  description: 'Get number of sent multicast messages',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-number-of-multicast-messages',
  },
  operationId: 'getNumberOfSentMulticastMessages',
  request: {
    query: z.object({
      date: z
        .string()
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            description:
              'Date the messages were sent\n\nFormat: `yyyyMMdd` (e.g. `20191231`)\nTimezone: UTC+9\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: NumberOfMessagesResponseSchema,
          example: { status: 'ready', success: 10000 },
        },
      },
    },
  },
})

export const getV2BotMessageDeliveryBroadcastRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/delivery/broadcast',
  tags: ['messaging-api'],
  description: 'Get number of sent broadcast messages',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-number-of-broadcast-messages',
  },
  operationId: 'getNumberOfSentBroadcastMessages',
  request: {
    query: z.object({
      date: z
        .string()
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            required: true,
            schema: { type: 'string', format: '^[0-9]{8}$' },
            description:
              'Date the messages were sent\n\nFormat: yyyyMMdd (e.g. 20191231)\nTimezone: UTC+9\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: NumberOfMessagesResponseSchema,
          example: { status: 'ready', success: 10000 },
        },
      },
    },
  },
})

export const postV2BotMessageValidateReplyRoute = createRoute({
  method: 'post',
  path: '/v2/bot/message/validate/reply',
  tags: ['messaging-api'],
  description: 'Validate message objects of a reply message',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-reply-message',
  },
  operationId: 'validateReply',
  request: {
    body: {
      content: { 'application/json': { schema: ValidateMessageRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postV2BotMessageValidatePushRoute = createRoute({
  method: 'post',
  path: '/v2/bot/message/validate/push',
  tags: ['messaging-api'],
  description: 'Validate message objects of a push message',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-push-message',
  },
  operationId: 'validatePush',
  request: {
    body: {
      content: { 'application/json': { schema: ValidateMessageRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postV2BotMessageValidateMulticastRoute = createRoute({
  method: 'post',
  path: '/v2/bot/message/validate/multicast',
  tags: ['messaging-api'],
  description: 'Validate message objects of a multicast message',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-multicast-message',
  },
  operationId: 'validateMulticast',
  request: {
    body: {
      content: { 'application/json': { schema: ValidateMessageRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postV2BotMessageValidateNarrowcastRoute = createRoute({
  method: 'post',
  path: '/v2/bot/message/validate/narrowcast',
  tags: ['messaging-api'],
  description: 'Validate message objects of a narrowcast message',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-narrowcast-message',
  },
  operationId: 'validateNarrowcast',
  request: {
    body: {
      content: { 'application/json': { schema: ValidateMessageRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postV2BotMessageValidateBroadcastRoute = createRoute({
  method: 'post',
  path: '/v2/bot/message/validate/broadcast',
  tags: ['messaging-api'],
  description: 'Validate message objects of a broadcast message',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#validate-message-objects-of-broadcast-message',
  },
  operationId: 'validateBroadcast',
  request: {
    body: {
      content: { 'application/json': { schema: ValidateMessageRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getV2BotMessageAggregationInfoRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/aggregation/info',
  tags: ['messaging-api'],
  description: 'Get number of units used this month',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-number-of-units-used-this-month',
  },
  operationId: 'getAggregationUnitUsage',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetAggregationUnitUsageResponseSchema,
          example: { numOfCustomAggregationUnits: 22 },
        },
      },
    },
  },
})

export const getV2BotMessageAggregationListRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/aggregation/list',
  tags: ['messaging-api'],
  description: 'Get name list of units used this month',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-name-list-of-units-used-this-month',
  },
  operationId: 'getAggregationUnitNameList',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description: 'The maximum number of aggregation units you can get per request.\n',
          },
        }),
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              "Value of the continuation token found in the next property of the JSON object returned in the response.\nIf you can't get all the aggregation units in one request, include this parameter to get the remaining array.\n",
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetAggregationUnitNameListResponseSchema,
          example: { customAggregationUnits: ['promotion_a', 'promotion_b'], next: 'jxEWCEEP...' },
        },
      },
    },
  },
})

export const getV2BotProfileUserIdRoute = createRoute({
  method: 'get',
  path: '/v2/bot/profile/{userId}',
  tags: ['messaging-api'],
  description: 'Get profile',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-profile' },
  operationId: 'getProfile',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'User ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UserProfileResponseSchema,
          example: {
            displayName: 'LINE taro',
            userId: 'U4af4980629...',
            language: 'en',
            pictureUrl: 'https://obs.line-apps.com/...',
            statusMessage: 'Hello, LINE!',
          },
        },
      },
    },
  },
})

export const getV2BotFollowersIdsRoute = createRoute({
  method: 'get',
  path: '/v2/bot/followers/ids',
  tags: ['messaging-api'],
  description: 'Get a list of users who added your LINE Official Account as a friend',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-follower-ids' },
  operationId: 'getFollowers',
  request: {
    query: z.object({
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            required: false,
            description:
              'Value of the continuation token found in the next property of the JSON object returned in the response.\nInclude this parameter to get the next array of user IDs.\n',
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
          z.int32().max(1000),
        )
        .default(300)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of user IDs to retrieve in a single request.',
            schema: { type: 'integer', format: 'int32', default: 300, maximum: 1000 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetFollowersResponseSchema,
          example: {
            userIds: ['U4af4980629...', 'U0c229f96c4...', 'U95afb1d4df...'],
            next: 'yANU9IA...',
          },
        },
      },
    },
  },
})

export const getV2BotInfoRoute = createRoute({
  method: 'get',
  path: '/v2/bot/info',
  tags: ['messaging-api'],
  description: 'Get bot info',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-bot-info' },
  operationId: 'getBotInfo',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: BotInfoResponseSchema,
          example: {
            userId: 'Ub9952f8...',
            basicId: '@216ru...',
            displayName: 'Example name',
            pictureUrl: 'https://obs.line-apps.com/...',
            chatMode: 'chat',
            markAsReadMode: 'manual',
          },
        },
      },
    },
  },
})

export const getV2BotGroupGroupIdMemberUserIdRoute = createRoute({
  method: 'get',
  path: '/v2/bot/group/{groupId}/member/{userId}',
  tags: ['messaging-api'],
  description: 'Get group chat member profile',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-group-member-profile',
  },
  operationId: 'getGroupMemberProfile',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Group ID',
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'User ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GroupUserProfileResponseSchema,
          example: {
            displayName: 'LINE taro',
            userId: 'U4af4980629...',
            pictureUrl: 'https://obs.line-apps.com/...',
          },
        },
      },
    },
  },
})

export const getV2BotRoomRoomIdMemberUserIdRoute = createRoute({
  method: 'get',
  path: '/v2/bot/room/{roomId}/member/{userId}',
  tags: ['messaging-api'],
  description: 'Get multi-person chat member profile',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-room-member-profile',
  },
  operationId: 'getRoomMemberProfile',
  request: {
    params: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Room ID',
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'User ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RoomUserProfileResponseSchema,
          example: {
            displayName: 'LINE taro',
            userId: 'U4af4980629...',
            pictureUrl: 'https://obs.line-apps.com/...',
          },
        },
      },
    },
  },
})

export const getV2BotGroupGroupIdMembersIdsRoute = createRoute({
  method: 'get',
  path: '/v2/bot/group/{groupId}/members/ids',
  tags: ['messaging-api'],
  description: 'Get group chat member user IDs',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-group-member-user-ids',
  },
  operationId: 'getGroupMembersIds',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Group ID',
          },
        }),
    }),
    query: z.object({
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              'Value of the continuation token found in the `next` property of the JSON object returned in the response.\nInclude this parameter to get the next array of user IDs for the members of the group.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MembersIdsResponseSchema,
          example: {
            memberIds: ['U4af4980629...', 'U0c229f96c4...', 'U95afb1d4df...'],
            next: 'jxEWCEEP...',
          },
        },
      },
    },
  },
})

export const getV2BotRoomRoomIdMembersIdsRoute = createRoute({
  method: 'get',
  path: '/v2/bot/room/{roomId}/members/ids',
  tags: ['messaging-api'],
  description: 'Get multi-person chat member user IDs',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-room-member-user-ids',
  },
  operationId: 'getRoomMembersIds',
  request: {
    params: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Room ID',
          },
        }),
    }),
    query: z.object({
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              'Value of the continuation token found in the `next` property of the JSON object returned in the response.\nInclude this parameter to get the next array of user IDs for the members of the group.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MembersIdsResponseSchema,
          example: {
            memberIds: ['U4af4980629...', 'U0c229f96c4...', 'U95afb1d4df...'],
            next: 'jxEWCEEP...',
          },
        },
      },
    },
  },
})

export const postV2BotGroupGroupIdLeaveRoute = createRoute({
  method: 'post',
  path: '/v2/bot/group/{groupId}/leave',
  tags: ['messaging-api'],
  description: 'Leave group chat',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#leave-group' },
  operationId: 'leaveGroup',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Group ID',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postV2BotRoomRoomIdLeaveRoute = createRoute({
  method: 'post',
  path: '/v2/bot/room/{roomId}/leave',
  tags: ['messaging-api'],
  description: 'Leave multi-person chat',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#leave-room' },
  operationId: 'leaveRoom',
  request: {
    params: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Room ID',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getV2BotGroupGroupIdSummaryRoute = createRoute({
  method: 'get',
  path: '/v2/bot/group/{groupId}/summary',
  tags: ['messaging-api'],
  description: 'Get group chat summary',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-group-summary',
  },
  operationId: 'getGroupSummary',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Group ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GroupSummaryResponseSchema,
          example: {
            groupId: 'Ca56f94637c...',
            groupName: 'Group name',
            pictureUrl: 'https://profile.line-scdn.net/abcdefghijklmn',
          },
        },
      },
    },
  },
})

export const getV2BotGroupGroupIdMembersCountRoute = createRoute({
  method: 'get',
  path: '/v2/bot/group/{groupId}/members/count',
  tags: ['messaging-api'],
  description: 'Get number of users in a group chat',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-members-group-count',
  },
  operationId: 'getGroupMemberCount',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Group ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: GroupMemberCountResponseSchema, example: { count: 3 } },
      },
    },
  },
})

export const getV2BotRoomRoomIdMembersCountRoute = createRoute({
  method: 'get',
  path: '/v2/bot/room/{roomId}/members/count',
  tags: ['messaging-api'],
  description: 'Get number of users in a multi-person chat',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-members-room-count',
  },
  operationId: 'getRoomMemberCount',
  request: {
    params: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            name: 'roomId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Room ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: RoomMemberCountResponseSchema, example: { count: 3 } },
      },
    },
  },
})

export const postV2BotRichmenuRoute = createRoute({
  method: 'post',
  path: '/v2/bot/richmenu',
  tags: ['messaging-api'],
  description: 'Create rich menu',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#create-rich-menu' },
  operationId: 'createRichMenu',
  request: {
    body: { content: { 'application/json': { schema: RichMenuRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RichMenuIdResponseSchema,
          example: { richMenuId: '{richMenuId}' },
        },
      },
    },
  },
})

export const postV2BotRichmenuValidateRoute = createRoute({
  method: 'post',
  path: '/v2/bot/richmenu/validate',
  tags: ['messaging-api'],
  description: 'Validate rich menu object',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#validate-rich-menu-object',
  },
  operationId: 'validateRichMenuObject',
  request: {
    body: { content: { 'application/json': { schema: RichMenuRequestSchema } }, required: true },
  },
  responses: { 200: { description: 'OK' } },
})

export const getV2BotRichmenuRichMenuIdContentRoute = createRoute({
  method: 'get',
  path: '/v2/bot/richmenu/{richMenuId}/content',
  tags: ['messaging-api-blob'],
  description: 'Download rich menu image.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#download-rich-menu-image',
  },
  operationId: 'getRichMenuImage',
  request: {
    params: z.object({
      richMenuId: z
        .string()
        .openapi({
          param: {
            name: 'richMenuId',
            in: 'path',
            required: true,
            description: 'ID of the rich menu with the image to be downloaded',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        '*/*': {
          schema: z
            .file()
            .openapi({ type: 'string', format: 'binary', description: 'blob response' }),
        },
      },
    },
  },
  servers: [{ url: 'https://api-data.line.me' }],
})

export const postV2BotRichmenuRichMenuIdContentRoute = createRoute({
  method: 'post',
  path: '/v2/bot/richmenu/{richMenuId}/content',
  tags: ['messaging-api-blob'],
  description: 'Upload rich menu image',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#upload-rich-menu-image',
  },
  operationId: 'setRichMenuImage',
  request: {
    params: z.object({
      richMenuId: z
        .string()
        .openapi({
          param: {
            name: 'richMenuId',
            in: 'path',
            required: true,
            description: 'The ID of the rich menu to attach the image to',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        '*/*': {
          schema: z
            .file()
            .openapi({ type: 'string', format: 'binary', description: 'blob request' }),
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
  servers: [{ url: 'https://api-data.line.me' }],
})

export const getV2BotRichmenuRichMenuIdRoute = createRoute({
  method: 'get',
  path: '/v2/bot/richmenu/{richMenuId}',
  tags: ['messaging-api'],
  description: 'Gets a rich menu via a rich menu ID.',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-rich-menu' },
  operationId: 'getRichMenu',
  request: {
    params: z.object({
      richMenuId: z
        .string()
        .openapi({
          param: {
            name: 'richMenuId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID of a rich menu',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RichMenuResponseSchema,
          example: {
            richMenuId: '{richMenuId}',
            size: { width: 2500, height: 1686 },
            name: 'nice rich menu',
            chatBarText: 'click',
            selected: false,
            areas: [
              {
                bounds: { x: 0, y: 0, width: 2500, height: 1686 },
                action: { type: 'postback', data: 'action=buy&itemid=123' },
              },
            ],
          },
        },
      },
    },
  },
})

export const deleteV2BotRichmenuRichMenuIdRoute = createRoute({
  method: 'delete',
  path: '/v2/bot/richmenu/{richMenuId}',
  tags: ['messaging-api'],
  description: 'Deletes a rich menu.',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu' },
  operationId: 'deleteRichMenu',
  request: {
    params: z.object({
      richMenuId: z
        .string()
        .openapi({
          param: {
            name: 'richMenuId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID of a rich menu',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getV2BotRichmenuListRoute = createRoute({
  method: 'get',
  path: '/v2/bot/richmenu/list',
  tags: ['messaging-api'],
  description: 'Get rich menu list',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-list',
  },
  operationId: 'getRichMenuList',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RichMenuListResponseSchema,
          example: {
            richmenus: [
              {
                richMenuId: '{richMenuId}',
                size: { width: 2500, height: 1686 },
                selected: false,
                name: 'nice rich menu',
                chatBarText: 'click',
                areas: [
                  {
                    bounds: { x: 0, y: 0, width: 2500, height: 1686 },
                    action: { type: 'postback', data: 'action=buy&itemid=123' },
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
})

export const postV2BotUserAllRichmenuRichMenuIdRoute = createRoute({
  method: 'post',
  path: '/v2/bot/user/all/richmenu/{richMenuId}',
  tags: ['messaging-api'],
  description: 'Set default rich menu',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#set-default-rich-menu',
  },
  operationId: 'setDefaultRichMenu',
  request: {
    params: z.object({
      richMenuId: z
        .string()
        .openapi({
          param: {
            name: 'richMenuId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID of a rich menu',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getV2BotUserAllRichmenuRoute = createRoute({
  method: 'get',
  path: '/v2/bot/user/all/richmenu',
  tags: ['messaging-api'],
  description: 'Gets the ID of the default rich menu set with the Messaging API.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-default-rich-menu-id',
  },
  operationId: 'getDefaultRichMenuId',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RichMenuIdResponseSchema,
          example: { richMenuId: '{richMenuId}' },
        },
      },
    },
  },
})

export const deleteV2BotUserAllRichmenuRoute = createRoute({
  method: 'delete',
  path: '/v2/bot/user/all/richmenu',
  tags: ['messaging-api'],
  description: 'Cancel default rich menu',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#cancel-default-rich-menu',
  },
  operationId: 'cancelDefaultRichMenu',
  responses: { 200: { description: 'OK' } },
})

export const postV2BotRichmenuAliasRoute = createRoute({
  method: 'post',
  path: '/v2/bot/richmenu/alias',
  tags: ['messaging-api'],
  description: 'Create rich menu alias',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#create-rich-menu-alias',
  },
  operationId: 'createRichMenuAlias',
  request: {
    body: {
      content: { 'application/json': { schema: CreateRichMenuAliasRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV2BotRichmenuAliasRichMenuAliasIdRoute = createRoute({
  method: 'get',
  path: '/v2/bot/richmenu/alias/{richMenuAliasId}',
  tags: ['messaging-api'],
  description: 'Get rich menu alias information',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-alias-by-id',
  },
  operationId: 'getRichMenuAlias',
  request: {
    params: z.object({
      richMenuAliasId: z
        .string()
        .openapi({
          param: {
            name: 'richMenuAliasId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The rich menu alias ID whose information you want to obtain.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RichMenuAliasResponseSchema,
          example: {
            richMenuAliasId: 'richmenu-alias-a',
            richMenuId: 'richmenu-88c05ef6921ae53f8b58a25f3a65faf7',
          },
        },
      },
    },
  },
})

export const postV2BotRichmenuAliasRichMenuAliasIdRoute = createRoute({
  method: 'post',
  path: '/v2/bot/richmenu/alias/{richMenuAliasId}',
  tags: ['messaging-api'],
  description: 'Update rich menu alias',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#update-rich-menu-alias',
  },
  operationId: 'updateRichMenuAlias',
  request: {
    params: z.object({
      richMenuAliasId: z
        .string()
        .openapi({
          param: {
            name: 'richMenuAliasId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The rich menu alias ID you want to update.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateRichMenuAliasRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteV2BotRichmenuAliasRichMenuAliasIdRoute = createRoute({
  method: 'delete',
  path: '/v2/bot/richmenu/alias/{richMenuAliasId}',
  tags: ['messaging-api'],
  description: 'Delete rich menu alias',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu-alias',
  },
  operationId: 'deleteRichMenuAlias',
  request: {
    params: z.object({
      richMenuAliasId: z
        .string()
        .openapi({
          param: {
            name: 'richMenuAliasId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'Rich menu alias ID that you want to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV2BotRichmenuAliasListRoute = createRoute({
  method: 'get',
  path: '/v2/bot/richmenu/alias/list',
  tags: ['messaging-api'],
  description: 'Get list of rich menu alias',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-alias-list',
  },
  operationId: 'getRichMenuAliasList',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RichMenuAliasListResponseSchema,
          examples: {
            TWO_ALIASES: {
              summary: 'If you have 2 rich menu aliases',
              value: {
                aliases: [
                  {
                    richMenuAliasId: 'richmenu-alias-a',
                    richMenuId: 'richmenu-862e6ad6c267d2ddf3f42bc78554f6a4',
                  },
                  {
                    richMenuAliasId: 'richmenu-alias-b',
                    richMenuId: 'richmenu-88c05ef6921ae53f8b58a25f3a65faf7',
                  },
                ],
              },
            },
            NO_ALIASES: { summary: 'If you have 0 rich menu alias', value: { aliases: [] } },
          },
        },
      },
    },
  },
})

export const getV2BotUserUserIdRichmenuRoute = createRoute({
  method: 'get',
  path: '/v2/bot/user/{userId}/richmenu',
  tags: ['messaging-api'],
  description: 'Get rich menu ID of user',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-id-of-user',
  },
  operationId: 'getRichMenuIdOfUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description:
              'User ID. Found in the `source` object of webhook event objects. Do not use the LINE ID used in LINE.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RichMenuIdResponseSchema,
          example: { richMenuId: '{richMenuId}' },
        },
      },
    },
  },
})

export const deleteV2BotUserUserIdRichmenuRoute = createRoute({
  method: 'delete',
  path: '/v2/bot/user/{userId}/richmenu',
  tags: ['messaging-api'],
  description: 'Unlink rich menu from user',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-user',
  },
  operationId: 'unlinkRichMenuIdFromUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description:
              'User ID. Found in the `source` object of webhook event objects. Do not use the LINE ID used in LINE.',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postV2BotUserUserIdRichmenuRichMenuIdRoute = createRoute({
  method: 'post',
  path: '/v2/bot/user/{userId}/richmenu/{richMenuId}',
  tags: ['messaging-api'],
  description: 'Link rich menu to user.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-user',
  },
  operationId: 'linkRichMenuIdToUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description:
              'User ID. Found in the `source` object of webhook event objects. Do not use the LINE ID used in LINE.',
          },
        }),
      richMenuId: z
        .string()
        .openapi({
          param: {
            name: 'richMenuId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID of a rich menu',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postV2BotRichmenuBulkLinkRoute = createRoute({
  method: 'post',
  path: '/v2/bot/richmenu/bulk/link',
  tags: ['messaging-api'],
  description: 'Link rich menu to multiple users',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-users',
  },
  operationId: 'linkRichMenuIdToUsers',
  request: {
    body: {
      content: { 'application/json': { schema: RichMenuBulkLinkRequestSchema } },
      required: true,
    },
  },
  responses: { 202: { description: 'Accepted' } },
})

export const postV2BotRichmenuBulkUnlinkRoute = createRoute({
  method: 'post',
  path: '/v2/bot/richmenu/bulk/unlink',
  tags: ['messaging-api'],
  description: 'Unlink rich menus from multiple users',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-users',
  },
  operationId: 'unlinkRichMenuIdFromUsers',
  request: {
    body: {
      content: { 'application/json': { schema: RichMenuBulkUnlinkRequestSchema } },
      required: true,
    },
  },
  responses: { 202: { description: 'Accepted' } },
})

export const postV2BotRichmenuBatchRoute = createRoute({
  method: 'post',
  path: '/v2/bot/richmenu/batch',
  tags: ['messaging-api'],
  description:
    'You can use this endpoint to batch control the rich menu linked to the users using the endpoint such as Link rich menu to user.\nThe following operations are available:\n\n1. Replace a rich menu with another rich menu for all users linked to a specific rich menu\n2. Unlink a rich menu for all users linked to a specific rich menu\n3. Unlink a rich menu for all users linked the rich menu\n',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#batch-control-rich-menus-of-users',
  },
  operationId: 'richMenuBatch',
  request: {
    body: {
      content: { 'application/json': { schema: RichMenuBatchRequestSchema } },
      required: true,
    },
  },
  responses: { 202: { description: 'Accepted' } },
})

export const postV2BotRichmenuValidateBatchRoute = createRoute({
  method: 'post',
  path: '/v2/bot/richmenu/validate/batch',
  tags: ['messaging-api'],
  description:
    'Validate a request body of the Replace or unlink the linked rich menus in batches endpoint.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#validate-batch-control-rich-menus-request',
  },
  operationId: 'validateRichMenuBatchRequest',
  request: {
    body: {
      content: { 'application/json': { schema: RichMenuBatchRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getV2BotRichmenuProgressBatchRoute = createRoute({
  method: 'get',
  path: '/v2/bot/richmenu/progress/batch',
  tags: ['messaging-api'],
  description: 'Get the status of Replace or unlink a linked rich menus in batches.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-batch-control-rich-menus-progress-status',
  },
  operationId: 'getRichMenuBatchProgress',
  request: {
    query: z.object({
      requestId: z
        .string()
        .openapi({
          param: {
            name: 'requestId',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            description:
              'A request ID used to batch control the rich menu linked to the user. Each Messaging API request has a request ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RichMenuBatchProgressResponseSchema,
          example: { phase: 'ongoing', acceptedTime: '2023-07-04T10:15:30.121Z' },
        },
      },
    },
  },
})

export const postV2BotUserUserIdLinkTokenRoute = createRoute({
  method: 'post',
  path: '/v2/bot/user/{userId}/linkToken',
  tags: ['messaging-api'],
  description: 'Issue link token',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#issue-link-token' },
  operationId: 'issueLinkToken',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description:
              'User ID for the LINE account to be linked.\nFound in the `source` object of account link event objects. Do not use the LINE ID used in LINE.\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: IssueLinkTokenResponseSchema,
          example: { linkToken: 'NMZTNuVrPTqlr2IF8Bnymkb7rXfYv5EY' },
        },
      },
    },
  },
})

export const postV2BotMessageMarkAsReadRoute = createRoute({
  method: 'post',
  path: '/v2/bot/message/markAsRead',
  tags: ['messaging-api'],
  description: 'Mark messages from users as read',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/partner-docs/#mark-messages-from-users-as-read',
  },
  operationId: 'markMessagesAsRead',
  request: {
    body: {
      content: {
        'application/json': {
          schema: MarkMessagesAsReadRequestSchema,
          example: { chat: { userId: 'Uxxxxxxxxxxxxxxxxxx' } },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const postBotPnpPushRoute = createRoute({
  method: 'post',
  path: '/bot/pnp/push',
  tags: ['messaging-api'],
  description: 'Send LINE notification message',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/partner-docs/#send-line-notification-message',
  },
  operationId: 'pushMessagesByPhone',
  request: {
    headers: z.object({
      'X-Line-Delivery-Tag': z
        .string()
        .min(16)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Line-Delivery-Tag',
            in: 'header',
            required: false,
            schema: { type: 'string', minLength: 16, maxLength: 100 },
            description:
              'String returned in the delivery.data property of the delivery completion event via Webhook.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PnpMessagesRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK' },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postV2BotMessagePnpTemplatedPushRoute = createRoute({
  method: 'post',
  path: '/v2/bot/message/pnp/templated/push',
  tags: ['messaging-api'],
  description: 'Send LINE notification message (template)',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/line-notification-messages/#send-line-notification-message-template',
  },
  operationId: 'pushTemplatedMessagesByPhone',
  request: {
    headers: z.object({
      'X-Line-Delivery-Tag': z
        .string()
        .min(16)
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'X-Line-Delivery-Tag',
            in: 'header',
            required: false,
            schema: { type: 'string', minLength: 16, maxLength: 100 },
            description:
              'String returned in the delivery.data property of the delivery completion event via Webhook.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PnpTemplatedMessageRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: { description: 'Accepted' },
    422: {
      description:
        "Failed to send the LINE notification message. For example, there is no LINE user associated with the specified phone number, the phone number is outside the LINE notification message service area, the user has refused to receive LINE notification messages, or the user hasn't agreed to LINE's Privacy Policy.\n",
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV2BotMessageDeliveryPnpRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/delivery/pnp',
  tags: ['messaging-api'],
  description: 'Get number of sent LINE notification messages',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/partner-docs/#get-number-of-sent-line-notification-messages',
  },
  operationId: 'getPNPMessageStatistics',
  request: {
    query: z.object({
      date: z
        .string()
        .regex(/^[0-9]{8}$/)
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            required: true,
            schema: { type: 'string', pattern: '^[0-9]{8}$' },
            description:
              'Date the message was sent\n\nFormat: `yyyyMMdd` (Example:`20211231`)\nTime zone: UTC+9\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: NumberOfMessagesResponseSchema,
          example: { status: 'ready', success: 3 },
        },
      },
    },
  },
})

export const getV2BotMessageDeliveryPnpTemplatedRoute = createRoute({
  method: 'get',
  path: '/v2/bot/message/delivery/pnp/templated',
  tags: ['messaging-api'],
  description: 'Get number of sent LINE notification messages (template)',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/line-notification-messages/#get-number-of-sent-line-notification-messages-template',
  },
  operationId: 'getPNPTemplatedMessageStatistics',
  request: {
    query: z.object({
      date: z
        .string()
        .regex(/^[0-9]{8}$/)
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            required: true,
            schema: { type: 'string', pattern: '^[0-9]{8}$' },
            description:
              'Date the message was sent\n\nFormat: `yyyyMMdd` (Example:`20211231`)\nTime zone: UTC+9\n',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: NumberOfMessagesResponseSchema,
          example: { status: 'ready', success: 3 },
        },
      },
    },
  },
})

export const getV2BotMembershipSubscriptionUserIdRoute = createRoute({
  method: 'get',
  path: '/v2/bot/membership/subscription/{userId}',
  tags: ['messaging-api'],
  description: "Get a user's membership subscription.",
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-a-users-membership-subscription-status',
  },
  operationId: 'getMembershipSubscription',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'User ID',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetMembershipSubscriptionResponseSchema,
          example: {
            subscriptions: [
              {
                membership: {
                  membershipId: 3189,
                  title: 'Basic Plan',
                  description: 'You will receive messages and photos every Saturday.',
                  benefits: ['Members Only Messages', 'Members Only Photos'],
                  price: 500,
                  currency: 'JPY',
                },
                user: {
                  membershipNo: 1,
                  joinedTime: 1707214784,
                  nextBillingDate: '2024-02-08',
                  totalSubscriptionMonths: 1,
                },
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'An invalid user ID is specified.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Unable to get information about the membership to which the user subscribes.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV2BotMembershipListRoute = createRoute({
  method: 'get',
  path: '/v2/bot/membership/list',
  tags: ['messaging-api'],
  description: 'Get a list of memberships.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-membership-plans',
  },
  operationId: 'getMembershipList',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MembershipListResponseSchema,
          example: {
            memberships: [
              {
                membershipId: 3189,
                title: 'Basic Plan',
                description: 'You will receive messages and photos every Saturday.',
                benefits: ['Members Only Messages', 'Members Only Photos'],
                price: 500,
                currency: 'JPY',
                memberCount: 1,
                memberLimit: null,
                isInAppPurchase: true,
                isPublished: true,
              },
              {
                membershipId: 3213,
                title: 'Premium Plan',
                description: 'Invitation to a special party.',
                benefits: ['Members Only Party'],
                price: 1500,
                currency: 'JPY',
                memberCount: 0,
                memberLimit: null,
                isInAppPurchase: false,
                isPublished: true,
              },
            ],
          },
        },
      },
    },
    404: {
      description: 'Unable to get information about the memberships.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV2BotMembershipMembershipIdUsersIdsRoute = createRoute({
  method: 'get',
  path: '/v2/bot/membership/{membershipId}/users/ids',
  tags: ['messaging-api'],
  description: 'Get a list of user IDs who joined the membership.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#get-membership-user-ids',
  },
  operationId: 'getJoinedMembershipUsers',
  request: {
    query: z.object({
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            required: false,
            description:
              "A continuation token to get next remaining membership user IDs.\nReturned only when there are remaining user IDs that weren't returned in the userIds property in the previous request.\nThe continuation token expires in 24 hours (86,400 seconds).\n",
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
          z.int32().min(1).max(1000),
        )
        .default(300)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The max number of items to return for this API call.\nThe value is set to 300 by default, but the max acceptable value is 1000.\n',
            schema: { type: 'integer', format: 'int32', default: 300, maximum: 1000, minimum: 1 },
          },
        }),
    }),
    params: z.object({
      membershipId: z
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
            name: 'membershipId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'Membership plan ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetJoinedMembershipUsersResponseSchema,
          example: {
            userIds: ['U4af4980629...', 'U0c229f96c4...', 'U95afb1d4df...'],
            next: 'jxEWCEEP...',
          },
        },
      },
    },
    400: {
      description: '`start` is incorrect or expired, or `limit` is under 1 or over 1000.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Membership ID is not owned by the bot or does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV2BotCouponRoute = createRoute({
  method: 'get',
  path: '/v2/bot/coupon',
  tags: ['messaging-api'],
  description: 'Get a paginated list of coupons.',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-coupons-list' },
  operationId: 'listCoupon',
  request: {
    query: z.object({
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['DRAFT', 'RUNNING', 'CLOSED'])).superRefine((items, ctx) => {
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
          param: {
            in: 'query',
            name: 'status',
            required: false,
            schema: {
              uniqueItems: true,
              type: 'array',
              items: { type: 'string', enum: ['DRAFT', 'RUNNING', 'CLOSED'] },
            },
            description: 'Filter coupons by their status.',
          },
        }),
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            required: false,
            schema: { type: 'string' },
            description: 'Pagination token to retrieve the next page of results.',
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
          z.int32().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { maximum: 100, minimum: 1, type: 'integer', format: 'int32', default: 20 },
            description: 'Maximum number of coupons to return per request.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MessagingApiPagerCouponListResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postV2BotCouponRoute = createRoute({
  method: 'post',
  path: '/v2/bot/coupon',
  tags: ['messaging-api'],
  description:
    'Create a new coupon. Define coupon details such as type, title, and validity period.',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#create-coupon' },
  operationId: 'createCoupon',
  request: { body: { content: { 'application/json': { schema: CouponCreateRequestSchema } } } },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CouponCreateResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getV2BotCouponCouponIdRoute = createRoute({
  method: 'get',
  path: '/v2/bot/coupon/{couponId}',
  tags: ['messaging-api'],
  description: 'Get coupon detail',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#get-coupon' },
  operationId: 'getCouponDetail',
  request: {
    params: z.object({
      couponId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'couponId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CouponResponseSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putV2BotCouponCouponIdCloseRoute = createRoute({
  method: 'put',
  path: '/v2/bot/coupon/{couponId}/close',
  tags: ['messaging-api'],
  description: 'Close coupon',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#discontinue-coupon',
  },
  operationId: 'closeCoupon',
  request: {
    params: z.object({
      couponId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'couponId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    410: { description: 'Gone', content: { 'application/json': { schema: ErrorResponseSchema } } },
  },
})

export const postV2BotChatLoadingStartRoute = createRoute({
  method: 'post',
  path: '/v2/bot/chat/loading/start',
  tags: ['messaging-api'],
  description:
    'Display a loading animation in one-on-one chats between users and LINE Official Accounts.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/messaging-api/#display-a-loading-indicator',
  },
  operationId: 'showLoadingAnimation',
  request: {
    body: {
      content: { 'application/json': { schema: ShowLoadingAnimationRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: ShowLoadingAnimationResponseSchema } },
    },
    400: {
      description: 'An invalid chat ID is specified, or the loadingSeconds value is invalid.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postV2BotChatMarkAsReadRoute = createRoute({
  method: 'post',
  path: '/v2/bot/chat/markAsRead',
  tags: ['messaging-api'],
  description: 'Mark messages from users as read by token',
  externalDocs: { url: 'https://developers.line.biz/en/reference/messaging-api/#mark-as-read' },
  operationId: 'markMessagesAsReadByToken',
  request: {
    body: {
      content: {
        'application/json': {
          schema: MarkMessagesAsReadByTokenRequestSchema,
          example: { markAsReadToken: 'nz0x74mZT2mRn...' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: {
      description:
        'An invalid markAsReadToken is specified. Tokens must be used by the bot that received them via Webhook.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})
