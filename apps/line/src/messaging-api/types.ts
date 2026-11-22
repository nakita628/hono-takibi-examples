type GetWebhookEndpointResponse = { endpoint: string; active: boolean }
type SetWebhookEndpointRequest = { endpoint: string }
type TestWebhookEndpointRequest = { endpoint?: string | undefined }
type TestWebhookEndpointResponse = {
  success?: boolean | undefined
  timestamp: string
  statusCode: number
  reason: string
  detail: string
}
type GetMessageContentTranscodingResponse = { status: 'processing' | 'succeeded' | 'failed' }
type Action = { type?: string | undefined; label?: string | undefined }
type QuickReplyItem = {
  imageUrl?: string | undefined
  action?: Action | undefined
  type?: string | undefined
}
type QuickReply = { items?: QuickReplyItem[] | undefined }
type Sender = { name?: string | undefined; iconUrl?: string | undefined }
type Message = { type: string; quickReply?: QuickReply | undefined; sender?: Sender | undefined }
type NotificationDisabled = boolean
type ReplyMessageRequest = {
  replyToken: string
  messages: Message[]
  notificationDisabled?: NotificationDisabled | undefined
}
type SentMessage = { id: string; quoteToken?: string | undefined }
type ReplyMessageResponse = { sentMessages: SentMessage[] }
type ErrorDetail = { message?: string | undefined; property?: string | undefined }
type ErrorResponse = {
  message: string
  details?: ErrorDetail[] | undefined
  sentMessages?: SentMessage[] | undefined
}
type PushMessageRequest = {
  to: string
  messages: Message[]
  notificationDisabled?: NotificationDisabled | undefined
  customAggregationUnits?: string[] | undefined
}
type PushMessageResponse = { sentMessages: SentMessage[] }
type MulticastRequest = {
  messages: Message[]
  to: string[]
  notificationDisabled?: NotificationDisabled | undefined
  customAggregationUnits?: string[] | undefined
}
type MulticastResponse = { [x: string]: unknown }
type Recipient = { type?: string | undefined }
type DemographicFilter = { type?: string | undefined }
type Filter = { demographic?: DemographicFilter | undefined }
type Limit = {
  max?: number | undefined
  upToRemainingQuota?: boolean | undefined
  forbidPartialDelivery?: boolean | undefined
}
type NarrowcastRequest = {
  messages: Message[]
  recipient?: Recipient | undefined
  filter?: Filter | undefined
  limit?: Limit | undefined
  notificationDisabled?: NotificationDisabled | undefined
}
type NarrowcastResponse = { [x: string]: unknown }
type NarrowcastProgressResponse = {
  phase: 'waiting' | 'sending' | 'succeeded' | 'failed'
  successCount?: bigint | undefined
  failureCount?: bigint | undefined
  targetCount?: bigint | undefined
  failedDescription?: string | undefined
  errorCode?: bigint | undefined
  acceptedTime: string
  completedTime?: string | undefined
}
type BroadcastRequest = {
  messages: Message[]
  notificationDisabled?: NotificationDisabled | undefined
}
type BroadcastResponse = { [x: string]: unknown }
type QuotaType = 'none' | 'limited'
type MessageQuotaResponse = { type: QuotaType; value?: bigint | undefined }
type QuotaConsumptionResponse = { totalUsage: bigint }
type NumberOfMessagesResponse = {
  status: 'ready' | 'unready' | 'unavailable_for_privacy' | 'out_of_service'
  success?: bigint | undefined
}
type ValidateMessageRequest = { messages: Message[] }
type GetAggregationUnitUsageResponse = { numOfCustomAggregationUnits: bigint }
type GetAggregationUnitNameListResponse = {
  customAggregationUnits: string[]
  next?: string | undefined
}
type UserProfileResponse = {
  displayName: string
  userId: string
  pictureUrl?: string | undefined
  statusMessage?: string | undefined
  language?: string | undefined
}
type GetFollowersResponse = { userIds: string[]; next?: string | undefined }
type BotInfoResponse = {
  userId: string
  basicId: string
  premiumId?: string | undefined
  displayName: string
  pictureUrl?: string | undefined
  chatMode: 'chat' | 'bot'
  markAsReadMode: 'auto' | 'manual'
}
type GroupUserProfileResponse = {
  displayName: string
  userId: string
  pictureUrl?: string | undefined
}
type RoomUserProfileResponse = {
  displayName: string
  userId: string
  pictureUrl?: string | undefined
}
type MembersIdsResponse = { memberIds: string[]; next?: string | undefined }
type GroupSummaryResponse = { groupId: string; groupName: string; pictureUrl?: string | undefined }
type GroupMemberCountResponse = { count: number }
type RoomMemberCountResponse = { count: number }
type RichMenuSize = { width?: bigint | undefined; height?: bigint | undefined }
type RichMenuBounds = {
  x?: bigint | undefined
  y?: bigint | undefined
  width?: bigint | undefined
  height?: bigint | undefined
}
type RichMenuArea = { bounds?: RichMenuBounds | undefined; action?: Action | undefined }
type RichMenuRequest = {
  size?: RichMenuSize | undefined
  selected?: boolean | undefined
  name?: string | undefined
  chatBarText?: string | undefined
  areas?: RichMenuArea[] | undefined
}
type RichMenuIdResponse = { richMenuId: string }
type RichMenuResponse = {
  richMenuId: string
  size: RichMenuSize
  selected: boolean
  name: string
  chatBarText: string
  areas: RichMenuArea[]
}
type RichMenuListResponse = { richmenus: RichMenuResponse[] }
type CreateRichMenuAliasRequest = { richMenuAliasId: string; richMenuId: string }
type RichMenuAliasResponse = { richMenuAliasId: string; richMenuId: string }
type UpdateRichMenuAliasRequest = { richMenuId: string }
type RichMenuAliasListResponse = { aliases: RichMenuAliasResponse[] }
type RichMenuBulkLinkRequest = { richMenuId: string; userIds: string[] }
type RichMenuBulkUnlinkRequest = { userIds: string[] }
type RichMenuBatchOperation = { type: string }
type RichMenuBatchRequest = {
  operations: RichMenuBatchOperation[]
  resumeRequestKey?: string | undefined
}
type RichMenuBatchProgressPhase = 'ongoing' | 'succeeded' | 'failed'
type RichMenuBatchProgressResponse = {
  phase: RichMenuBatchProgressPhase
  acceptedTime: string
  completedTime?: string | undefined
}
type IssueLinkTokenResponse = { linkToken: string }
type ChatReference = { userId: string }
type MarkMessagesAsReadRequest = { chat: ChatReference }
type PnpMessagesRequest = {
  messages: Message[]
  to: string
  notificationDisabled?: NotificationDisabled | undefined
  customAggregationUnits?: string[] | undefined
}
type PnpTemplatedEmphasizedItem = { itemKey: string; content: string }
type PnpTemplatedItem = { itemKey: string; content: string }
type PnpTemplatedButton = { buttonKey: string; url: string }
type PnpTemplatedMessageBody = {
  emphasizedItem?: PnpTemplatedEmphasizedItem | undefined
  items?: PnpTemplatedItem[] | undefined
  buttons?: PnpTemplatedButton[] | undefined
}
type PnpTemplatedMessageRequest = {
  to: string
  templateKey: string
  body?: PnpTemplatedMessageBody | undefined
  customAggregationUnits?: string[] | undefined
}
type SubscribedMembershipPlan = {
  membershipId: number
  title: string
  description: string
  benefits: string[]
  price: number
  currency: 'JPY' | 'TWD' | 'THB'
}
type SubscribedMembershipUser = {
  membershipNo: number
  joinedTime: number
  nextBillingDate: string
  totalSubscriptionMonths: number
}
type Subscription = { membership: SubscribedMembershipPlan; user: SubscribedMembershipUser }
type GetMembershipSubscriptionResponse = { subscriptions: Subscription[] }
type Membership = {
  membershipId: number
  title: string
  description: string
  benefits: string[]
  price: number
  currency: 'JPY' | 'TWD' | 'THB'
  memberCount: number
  memberLimit: number | null
  isInAppPurchase: boolean
  isPublished: boolean
}
type MembershipListResponse = { memberships: Membership[] }
type GetJoinedMembershipUsersResponse = { userIds: string[]; next?: string | undefined }
type CouponListResponse = { couponId: string; title: string }
type MessagingApiPagerCouponListResponse = {
  items: CouponListResponse[]
  next?: string | undefined
}
type AcquisitionConditionRequest = { type: string }
type CouponRewardRequest = { type: string }
type CouponCreateRequest = {
  acquisitionCondition: AcquisitionConditionRequest
  barcodeImageUrl?: string | undefined
  couponCode?: string | undefined
  description?: string | undefined
  endTimestamp: bigint
  imageUrl?: string | undefined
  maxUseCountPerTicket: number
  startTimestamp: bigint
  title: string
  usageCondition?: string | undefined
  reward?: CouponRewardRequest | undefined
  visibility: 'UNLISTED' | 'PUBLIC'
  timezone:
    | 'ETC_GMT_MINUS_12'
    | 'ETC_GMT_MINUS_11'
    | 'PACIFIC_HONOLULU'
    | 'AMERICA_ANCHORAGE'
    | 'AMERICA_LOS_ANGELES'
    | 'AMERICA_PHOENIX'
    | 'AMERICA_CHICAGO'
    | 'AMERICA_NEW_YORK'
    | 'AMERICA_CARACAS'
    | 'AMERICA_SANTIAGO'
    | 'AMERICA_ST_JOHNS'
    | 'AMERICA_SAO_PAULO'
    | 'ETC_GMT_MINUS_2'
    | 'ATLANTIC_CAPE_VERDE'
    | 'EUROPE_LONDON'
    | 'EUROPE_PARIS'
    | 'EUROPE_ISTANBUL'
    | 'EUROPE_MOSCOW'
    | 'ASIA_TEHRAN'
    | 'ASIA_TBILISI'
    | 'ASIA_KABUL'
    | 'ASIA_TASHKENT'
    | 'ASIA_COLOMBO'
    | 'ASIA_KATHMANDU'
    | 'ASIA_ALMATY'
    | 'ASIA_RANGOON'
    | 'ASIA_BANGKOK'
    | 'ASIA_TAIPEI'
    | 'ASIA_TOKYO'
    | 'AUSTRALIA_DARWIN'
    | 'AUSTRALIA_SYDNEY'
    | 'ASIA_VLADIVOSTOK'
    | 'ETC_GMT_PLUS_12'
    | 'PACIFIC_TONGATAPU'
}
type CouponCreateResponse = { couponId: string }
type AcquisitionConditionResponse = { type: string }
type CouponRewardResponse = { type: string }
type CouponResponse = {
  acquisitionCondition?: AcquisitionConditionResponse | undefined
  barcodeImageUrl?: string | undefined
  couponCode?: string | undefined
  description?: string | undefined
  endTimestamp?: bigint | undefined
  imageUrl?: string | undefined
  maxAcquireCount?: bigint | undefined
  maxUseCountPerTicket?: number | undefined
  maxTicketPerUser?: bigint | undefined
  startTimestamp?: bigint | undefined
  title?: string | undefined
  usageCondition?: string | undefined
  reward?: CouponRewardResponse | undefined
  visibility?: 'UNLISTED' | 'PUBLIC' | 'PRIVATE' | undefined
  timezone?:
    | 'ETC_GMT_MINUS_12'
    | 'ETC_GMT_MINUS_11'
    | 'PACIFIC_HONOLULU'
    | 'AMERICA_ANCHORAGE'
    | 'AMERICA_LOS_ANGELES'
    | 'AMERICA_PHOENIX'
    | 'AMERICA_CHICAGO'
    | 'AMERICA_NEW_YORK'
    | 'AMERICA_CARACAS'
    | 'AMERICA_SANTIAGO'
    | 'AMERICA_ST_JOHNS'
    | 'AMERICA_SAO_PAULO'
    | 'ETC_GMT_MINUS_2'
    | 'ATLANTIC_CAPE_VERDE'
    | 'EUROPE_LONDON'
    | 'EUROPE_PARIS'
    | 'EUROPE_ISTANBUL'
    | 'EUROPE_MOSCOW'
    | 'ASIA_TEHRAN'
    | 'ASIA_TBILISI'
    | 'ASIA_KABUL'
    | 'ASIA_TASHKENT'
    | 'ASIA_COLOMBO'
    | 'ASIA_KATHMANDU'
    | 'ASIA_ALMATY'
    | 'ASIA_RANGOON'
    | 'ASIA_BANGKOK'
    | 'ASIA_TAIPEI'
    | 'ASIA_TOKYO'
    | 'AUSTRALIA_DARWIN'
    | 'AUSTRALIA_SYDNEY'
    | 'ASIA_VLADIVOSTOK'
    | 'ETC_GMT_PLUS_12'
    | 'PACIFIC_TONGATAPU'
    | undefined
  couponId?: string | undefined
  createdTimestamp?: bigint | undefined
  status?: 'DRAFT' | 'RUNNING' | 'CLOSED' | undefined
}
type ShowLoadingAnimationRequest = { chatId: string; loadingSeconds?: number | undefined }
type ShowLoadingAnimationResponse = { [x: string]: unknown }
type MarkMessagesAsReadByTokenRequest = { markAsReadToken: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/bot/channel/webhook/endpoint': {
      $get: { input: {}; output: GetWebhookEndpointResponse; outputFormat: 'json'; status: 200 }
      $put: {
        input: { json: SetWebhookEndpointRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/channel/webhook/test': {
      $post: {
        input: { json: TestWebhookEndpointRequest }
        output: TestWebhookEndpointResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/message/:messageId/content': {
      $get: {
        input: { param: { messageId: string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/bot/message/:messageId/content/preview': {
      $get: {
        input: { param: { messageId: string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/bot/message/:messageId/content/transcoding': {
      $get: {
        input: { param: { messageId: string } }
        output: GetMessageContentTranscodingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/message/reply': {
      $post:
        | {
            input: { json: ReplyMessageRequest }
            output: ReplyMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReplyMessageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ReplyMessageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/bot/message/push': {
      $post:
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: PushMessageRequest
            }
            output: PushMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: PushMessageRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: PushMessageRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: PushMessageRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: PushMessageRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/bot/message/multicast': {
      $post:
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: MulticastRequest
            }
            output: MulticastResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: MulticastRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: MulticastRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: MulticastRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: MulticastRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/bot/message/narrowcast': {
      $post:
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: NarrowcastRequest
            }
            output: NarrowcastResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: NarrowcastRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: NarrowcastRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: NarrowcastRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: NarrowcastRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/bot/message/progress/narrowcast': {
      $get: {
        input: { query: { requestId: string } }
        output: NarrowcastProgressResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/message/broadcast': {
      $post:
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: BroadcastRequest
            }
            output: BroadcastResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: BroadcastRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: BroadcastRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: BroadcastRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'X-Line-Retry-Key'?: string | undefined } } & {
              json: BroadcastRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/bot/message/quota': {
      $get: { input: {}; output: MessageQuotaResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/bot/message/quota/consumption': {
      $get: { input: {}; output: QuotaConsumptionResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/bot/message/delivery/reply': {
      $get: {
        input: { query: { date: string } }
        output: NumberOfMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/message/delivery/push': {
      $get: {
        input: { query: { date: string } }
        output: NumberOfMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/message/delivery/multicast': {
      $get: {
        input: { query: { date: string } }
        output: NumberOfMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/message/delivery/broadcast': {
      $get: {
        input: { query: { date: string } }
        output: NumberOfMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/message/validate/reply': {
      $post: {
        input: { json: ValidateMessageRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/message/validate/push': {
      $post: {
        input: { json: ValidateMessageRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/message/validate/multicast': {
      $post: {
        input: { json: ValidateMessageRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/message/validate/narrowcast': {
      $post: {
        input: { json: ValidateMessageRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/message/validate/broadcast': {
      $post: {
        input: { json: ValidateMessageRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/message/aggregation/info': {
      $get: {
        input: {}
        output: GetAggregationUnitUsageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/message/aggregation/list': {
      $get: {
        input: { query: { limit?: string | undefined; start?: string | undefined } }
        output: GetAggregationUnitNameListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/profile/:userId': {
      $get: {
        input: { param: { userId: string } }
        output: UserProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/followers/ids': {
      $get: {
        input: { query: { start?: string | undefined; limit?: number | undefined } }
        output: GetFollowersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/info': {
      $get: { input: {}; output: BotInfoResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/bot/group/:groupId/member/:userId': {
      $get: {
        input: { param: { groupId: string; userId: string } }
        output: GroupUserProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/room/:roomId/member/:userId': {
      $get: {
        input: { param: { roomId: string; userId: string } }
        output: RoomUserProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/group/:groupId/members/ids': {
      $get: {
        input: { param: { groupId: string } } & { query: { start?: string | undefined } }
        output: MembersIdsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/room/:roomId/members/ids': {
      $get: {
        input: { param: { roomId: string } } & { query: { start?: string | undefined } }
        output: MembersIdsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/group/:groupId/leave': {
      $post:
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { groupId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { groupId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/bot/room/:roomId/leave': {
      $post: { input: { param: { roomId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v2/bot/group/:groupId/summary': {
      $get: {
        input: { param: { groupId: string } }
        output: GroupSummaryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/group/:groupId/members/count': {
      $get: {
        input: { param: { groupId: string } }
        output: GroupMemberCountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/room/:roomId/members/count': {
      $get: {
        input: { param: { roomId: string } }
        output: RoomMemberCountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/richmenu': {
      $post: {
        input: { json: RichMenuRequest }
        output: RichMenuIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/richmenu/validate': {
      $post: { input: { json: RichMenuRequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v2/bot/richmenu/:richMenuId/content': {
      $get: {
        input: { param: { richMenuId: string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { richMenuId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/richmenu/:richMenuId': {
      $get: {
        input: { param: { richMenuId: string } }
        output: RichMenuResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { richMenuId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/richmenu/list': {
      $get: { input: {}; output: RichMenuListResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/bot/user/all/richmenu/:richMenuId': {
      $post: {
        input: { param: { richMenuId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/user/all/richmenu': {
      $get: { input: {}; output: RichMenuIdResponse; outputFormat: 'json'; status: 200 }
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v2/bot/richmenu/alias': {
      $post:
        | {
            input: { json: CreateRichMenuAliasRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: CreateRichMenuAliasRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/bot/richmenu/alias/:richMenuAliasId': {
      $get: {
        input: { param: { richMenuAliasId: string } }
        output: RichMenuAliasResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { richMenuAliasId: string } } & { json: UpdateRichMenuAliasRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { richMenuAliasId: string } } & { json: UpdateRichMenuAliasRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { richMenuAliasId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { richMenuAliasId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/bot/richmenu/alias/list': {
      $get: { input: {}; output: RichMenuAliasListResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/bot/user/:userId/richmenu': {
      $get: {
        input: { param: { userId: string } }
        output: RichMenuIdResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { userId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/user/:userId/richmenu/:richMenuId': {
      $post: {
        input: { param: { userId: string; richMenuId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/richmenu/bulk/link': {
      $post: {
        input: { json: RichMenuBulkLinkRequest }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/v2/bot/richmenu/bulk/unlink': {
      $post: {
        input: { json: RichMenuBulkUnlinkRequest }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/v2/bot/richmenu/batch': {
      $post: {
        input: { json: RichMenuBatchRequest }
        output: {}
        outputFormat: string
        status: 202
      }
    }
  } & {
    '/v2/bot/richmenu/validate/batch': {
      $post: {
        input: { json: RichMenuBatchRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/bot/richmenu/progress/batch': {
      $get: {
        input: { query: { requestId: string } }
        output: RichMenuBatchProgressResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/user/:userId/linkToken': {
      $post: {
        input: { param: { userId: string } }
        output: IssueLinkTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/message/markAsRead': {
      $post: {
        input: { json: MarkMessagesAsReadRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/bot/pnp/push': {
      $post:
        | {
            input: { header: { 'X-Line-Delivery-Tag'?: string | undefined } } & {
              json: PnpMessagesRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Line-Delivery-Tag'?: string | undefined } } & {
              json: PnpMessagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/bot/message/pnp/templated/push': {
      $post:
        | {
            input: { header: { 'X-Line-Delivery-Tag'?: string | undefined } } & {
              json: PnpTemplatedMessageRequest
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { header: { 'X-Line-Delivery-Tag'?: string | undefined } } & {
              json: PnpTemplatedMessageRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/bot/message/delivery/pnp': {
      $get: {
        input: { query: { date: string } }
        output: NumberOfMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/message/delivery/pnp/templated': {
      $get: {
        input: { query: { date: string } }
        output: NumberOfMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/bot/membership/subscription/:userId': {
      $get:
        | {
            input: { param: { userId: string } }
            output: GetMembershipSubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/bot/membership/list': {
      $get:
        | { input: {}; output: MembershipListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/v2/bot/membership/:membershipId/users/ids': {
      $get:
        | {
            input: { param: { membershipId: number } } & {
              query: { start?: string | undefined; limit?: number | undefined }
            }
            output: GetJoinedMembershipUsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { membershipId: number } } & {
              query: { start?: string | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { membershipId: number } } & {
              query: { start?: string | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/bot/coupon': {
      $get:
        | {
            input: {
              query: {
                status?: ('DRAFT' | 'RUNNING' | 'CLOSED')[] | undefined
                start?: string | undefined
                limit?: number | undefined
              }
            }
            output: MessagingApiPagerCouponListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: ('DRAFT' | 'RUNNING' | 'CLOSED')[] | undefined
                start?: string | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { json: CouponCreateRequest }
            output: CouponCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CouponCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/bot/coupon/:couponId': {
      $get:
        | {
            input: { param: { couponId: string } }
            output: CouponResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { couponId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { couponId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/bot/coupon/:couponId/close': {
      $put:
        | { input: { param: { couponId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { couponId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { couponId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { couponId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
    }
  } & {
    '/v2/bot/chat/loading/start': {
      $post:
        | {
            input: { json: ShowLoadingAnimationRequest }
            output: ShowLoadingAnimationResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: ShowLoadingAnimationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/bot/chat/markAsRead': {
      $post:
        | {
            input: { json: MarkMessagesAsReadByTokenRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: MarkMessagesAsReadByTokenRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
