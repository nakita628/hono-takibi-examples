type BatchInputString = { inputs: string[] }
type AgentActor = {
  avatar?: string | undefined
  email?: string | undefined
  id: string
  name?: string | undefined
  type: 'AGENT'
}
type BotActor = { avatar?: string | undefined; id: string; name?: string | undefined; type: 'BOT' }
type IntegratorActor = { avatar?: string | undefined; id: string; name: string; type: 'INTEGRATOR' }
type SystemActor = { id: string; type: 'SYSTEM' }
type VisitorActor = {
  avatar?: string | undefined
  email?: string | undefined
  id: string
  name?: string | undefined
  type: 'VISITOR'
}
type EmailActor = { email: string; id: string; type: 'EMAIL' }
type LlmActor = { avatar?: string | undefined; id: string; name?: string | undefined; type: 'LLM' }
type PublicActor =
  | AgentActor
  | BotActor
  | IntegratorActor
  | SystemActor
  | VisitorActor
  | EmailActor
  | LlmActor
type BatchResponsePublicActor = {
  completedAt: string
  links?: { [x: string]: string } | undefined
  requestedAt?: string | undefined
  results: PublicActor[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type StandardError = {
  category: string
  context: { [x: string]: string[] }
  errors: ErrorDetail[]
  id?: string | undefined
  links: { [x: string]: string }
  message: string
  status: string
  subCategory?: { [x: string]: unknown } | undefined
}
type BatchResponsePublicActorWithErrors = {
  completedAt: string
  errors?: StandardError[] | undefined
  links?: { [x: string]: string } | undefined
  numErrors?: number | undefined
  requestedAt?: string | undefined
  results: PublicActor[]
  startedAt: string
  status: 'CANCELED' | 'COMPLETE' | 'PENDING' | 'PROCESSING'
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type NextPage = { after: string; link?: string | undefined }
type PreviousPage = { before: string; link?: string | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type PublicDeliveryIdentifier = {
  type: 'CHANNEL_SPECIFIC_OPAQUE_ID' | 'HS_EMAIL_ADDRESS' | 'HS_PHONE_NUMBER' | 'HS_SHORT_CODE'
  value: string
}
type PublicChannelAccount = {
  active: boolean
  archived: boolean
  archivedAt?: string | undefined
  authorized: boolean
  channelId: string
  createdAt: string
  deliveryIdentifier?: PublicDeliveryIdentifier | undefined
  id: string
  inboxId: string
  name: string
}
type CollectionResponseWithTotalPublicChannelAccount = {
  paging?: Paging | undefined
  results: PublicChannelAccount[]
  total: number
}
type PublicChannel = { id: string; name: string }
type CollectionResponseWithTotalPublicChannel = {
  paging?: Paging | undefined
  results: PublicChannel[]
  total: number
}
type PublicInbox = {
  archived: boolean
  archivedAt?: string | undefined
  createdAt: string
  id: string
  name: string
  type: 'HELP_DESK' | 'INBOX'
  updatedAt: string
}
type CollectionResponseWithTotalPublicInbox = {
  paging?: Paging | undefined
  results: PublicInbox[]
  total: number
}
type ForwardPaging = { next?: NextPage | undefined }
type PublicThreadAssociations = { associatedTicketId?: string | undefined }
type PublicThread = {
  archived: boolean
  assignedTo?: string | undefined
  associatedContactId: string
  closedAt?: string | undefined
  createdAt: string
  id: string
  inboxId: string
  latestMessageReceivedTimestamp?: string | undefined
  latestMessageSentTimestamp?: string | undefined
  latestMessageTimestamp?: string | undefined
  originalChannelAccountId: string
  originalChannelId: string
  spam: boolean
  status: 'CLOSED' | 'OPEN'
  threadAssociations?: PublicThreadAssociations | undefined
}
type CollectionResponsePublicThreadForwardPaging = {
  paging?: ForwardPaging | undefined
  results: PublicThread[]
}
type PublicThreadUpdateRequest = {
  archived?: boolean | undefined
  status?: 'CLOSED' | 'OPEN' | undefined
}
type PublicThreadAssignRequest = { actorId: string }
type PublicFile = {
  fileId: string
  fileUsageType: 'AUDIO' | 'IMAGE' | 'OTHER' | 'STICKER' | 'VOICE_RECORDING'
  name?: string | undefined
  type: 'FILE'
  url?: string | undefined
}
type PublicLocation = {
  address?: string | undefined
  latitude: number
  longitude: number
  name?: string | undefined
  type: 'LOCATION'
  url?: string | undefined
}
type ContactAddress = {
  city?: string | undefined
  country?: string | undefined
  countryCode?: string | undefined
  state?: string | undefined
  street?: string | undefined
  type?: 'HOME' | 'WORK' | undefined
  zip?: string | undefined
}
type ContactEmail = { email: string; type?: 'HOME' | 'WORK' | undefined }
type ContactName = {
  firstName?: string | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  prefix?: string | undefined
  suffix?: string | undefined
}
type ContactOrg = {
  company?: string | undefined
  department?: string | undefined
  title?: string | undefined
}
type ContactPhone = { phone: string; type?: 'CELL' | 'HOME' | 'MAIN' | 'WORK' | undefined }
type ContactUrl = { type?: 'HOME' | 'WORK' | undefined; url: string }
type ContactProfile = {
  addresses: ContactAddress[]
  emails: ContactEmail[]
  name?: ContactName | undefined
  org?: ContactOrg | undefined
  phones: ContactPhone[]
  urls: ContactUrl[]
}
type PublicContact = { contactProfile: ContactProfile; type: 'CONTACT' }
type PublicUnsupportedContent = { type: 'UNSUPPORTED_CONTENT' }
type PublicMessageHeader = {
  fileId?: bigint | undefined
  text?: string | undefined
  type: 'MESSAGE_HEADER'
}
type QuickReply = { label?: string | undefined; value: string; valueType: 'TEXT' | 'URL' }
type PublicQuickReplies = {
  allowMultiSelect: boolean
  allowUserInput: boolean
  quickReplies: QuickReply[]
  type: 'QUICK_REPLIES'
}
type PublicWhatsAppTemplateMetadata = {
  contentId?: bigint | undefined
  crmObjectIds: { [x: string]: bigint }
  mappedTemplateId?: bigint | undefined
  parameters: { [x: string]: string }
  rootMicId?: bigint | undefined
  type: 'WHATSAPP_TEMPLATE_METADATA'
}
type SocialMetadata = {
  description?: string | undefined
  id?: string | undefined
  mediaTitle?: string | undefined
  mediaType:
    | 'ARTICLE'
    | 'AUDIO'
    | 'CAROUSEL'
    | 'DOCUMENT'
    | 'GIF'
    | 'LINK'
    | 'NONE'
    | 'PHOTO'
    | 'POLL'
    | 'STORY'
    | 'VIDEO'
  mediaUrl?: string | undefined
  mediaUrlString?: string | undefined
  thumbnailUrl?: string | undefined
}
type PublicSocialMetadataAttachment = {
  socialMetadata: SocialMetadata
  type: 'SOCIAL_MEDIA_METADATA'
}
type PublicClient = {
  clientType: 'HUBSPOT' | 'INTEGRATION' | 'SYSTEM' | 'UNKNOWN'
  integrationAppId?: number | undefined
}
type PublicRecipient = {
  actorId?: string | undefined
  deliveryIdentifier: PublicDeliveryIdentifier
  name?: string | undefined
  recipientField?: string | undefined
}
type PublicSender = {
  actorId?: string | undefined
  deliveryIdentifier?: PublicDeliveryIdentifier | undefined
  name?: string | undefined
  senderField?: string | undefined
}
type PublicMessageFailureDetails = {
  errorMessage?: string | undefined
  errorMessageTokens: { [x: string]: string }
}
type PublicMessageStatus = {
  failureDetails?: PublicMessageFailureDetails | undefined
  statusType: 'FAILED' | 'READ' | 'RECEIVED' | 'SENT'
}
type PublicConversationsMessage = {
  archived: boolean
  attachments: (
    | PublicFile
    | PublicLocation
    | PublicContact
    | PublicUnsupportedContent
    | PublicMessageHeader
    | PublicQuickReplies
    | PublicWhatsAppTemplateMetadata
    | PublicSocialMetadataAttachment
  )[]
  channelAccountId: string
  channelId: string
  client: PublicClient
  conversationsThreadId: string
  createdAt: string
  createdBy: string
  direction: 'INCOMING' | 'OUTGOING'
  id: string
  inReplyToId?: string | undefined
  recipients: PublicRecipient[]
  richText?: string | undefined
  senders: PublicSender[]
  status?: PublicMessageStatus | undefined
  subject?: string | undefined
  text: string
  truncationStatus: 'NOT_TRUNCATED' | 'TRUNCATED' | 'TRUNCATED_TO_MOST_RECENT_REPLY'
  type: 'MESSAGE'
  updatedAt?: string | undefined
}
type PublicComment = {
  archived: boolean
  attachments: (
    | PublicFile
    | PublicLocation
    | PublicContact
    | PublicUnsupportedContent
    | PublicMessageHeader
    | PublicQuickReplies
    | PublicWhatsAppTemplateMetadata
    | PublicSocialMetadataAttachment
  )[]
  client: PublicClient
  conversationsThreadId: string
  createdAt: string
  createdBy: string
  id: string
  recipients: PublicRecipient[]
  richText: string
  senders: PublicSender[]
  text: string
  type: 'COMMENT'
  updatedAt?: string | undefined
}
type PublicWelcomeMessage = {
  archived: boolean
  channelAccountId: string
  channelId: string
  client: PublicClient
  conversationsThreadId: string
  createdAt: string
  createdBy: string
  id: string
  recipients: PublicRecipient[]
  richText?: string | undefined
  senders: PublicSender[]
  text: string
  type: 'WELCOME_MESSAGE'
  updatedAt?: string | undefined
}
type PublicAssignmentMessage = {
  archived: boolean
  assignedFrom?: string | undefined
  assignedTo?: string | undefined
  client: PublicClient
  conversationsThreadId: string
  createdAt: string
  createdBy: string
  id: string
  recipients: PublicRecipient[]
  senders: PublicSender[]
  type: 'ASSIGNMENT'
  updatedAt?: string | undefined
}
type PublicThreadStatusChange = {
  archived: boolean
  client: PublicClient
  conversationsThreadId: string
  createdAt: string
  createdBy: string
  id: string
  newStatus: 'CLOSED' | 'OPEN'
  recipients: PublicRecipient[]
  senders: PublicSender[]
  type: 'THREAD_STATUS_CHANGE'
  updatedAt?: string | undefined
}
type PublicThreadInboxChange = {
  archived: boolean
  client: PublicClient
  conversationsThreadId: string
  createdAt: string
  createdBy: string
  fromInboxId: string
  id: string
  recipients: PublicRecipient[]
  senders: PublicSender[]
  toInboxId: string
  type: 'THREAD_INBOX_CHANGE'
  updatedAt?: string | undefined
}
type CollectionResponsePublicMessageForwardPaging = {
  paging?: ForwardPaging | undefined
  results: (
    | PublicConversationsMessage
    | PublicComment
    | PublicWelcomeMessage
    | PublicAssignmentMessage
    | PublicThreadStatusChange
    | PublicThreadInboxChange
  )[]
}
type PublicFileEgg = { fileId: string; type: 'FILE' }
type PublicQuickRepliesEgg = { quickReplies: QuickReply[]; type: 'QUICK_REPLIES' }
type PublicSocialMediaEgg = { socialMetadata: SocialMetadata; type: 'SOCIAL_MEDIA_METADATA' }
type PublicRecipientEgg = {
  actorId?: string | undefined
  deliveryIdentifier?: PublicDeliveryIdentifier | undefined
  deliveryIdentifiers: PublicDeliveryIdentifier[]
  name?: string | undefined
  recipientField?: string | undefined
}
type PublicConversationsMessageEgg = {
  attachments: (PublicFileEgg | PublicQuickRepliesEgg | PublicSocialMediaEgg)[]
  channelAccountId: string
  channelId: string
  recipients: PublicRecipientEgg[]
  richText?: string | undefined
  senderActorId: string
  subject?: string | undefined
  text: string
  type: 'MESSAGE'
}
type PublicCommentEgg = {
  attachments: (PublicFileEgg | PublicQuickRepliesEgg | PublicSocialMediaEgg)[]
  richText?: string | undefined
  text: string
  type: 'COMMENT'
}
type PublicMessageEgg = PublicConversationsMessageEgg | PublicCommentEgg
type PublicMessage =
  | PublicConversationsMessage
  | PublicComment
  | PublicWelcomeMessage
  | PublicAssignmentMessage
  | PublicThreadStatusChange
  | PublicThreadInboxChange
type PublicMessageContent = { richText?: string | undefined; text?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/conversations/conversations/2026-09/actors/batch/read': {
      $post:
        | {
            input: { query: { property?: string | undefined } } & { json: BatchInputString }
            output: BatchResponsePublicActor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { property?: string | undefined } } & { json: BatchInputString }
            output: BatchResponsePublicActorWithErrors
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { query: { property?: string | undefined } } & { json: BatchInputString }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/actors/:actorId': {
      $get:
        | {
            input: { param: { actorId: string } } & { query: { property?: string | undefined } }
            output: PublicActor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actorId: string } } & { query: { property?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/channel-accounts': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                channelId?: number[] | undefined
                defaultPageLength?: number | undefined
                inboxId?: number[] | undefined
                limit?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: CollectionResponseWithTotalPublicChannelAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                channelId?: number[] | undefined
                defaultPageLength?: number | undefined
                inboxId?: number[] | undefined
                limit?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/channel-accounts/:channelAccountId': {
      $get:
        | {
            input: { param: { channelAccountId: bigint } } & {
              query: { archived?: boolean | undefined }
            }
            output: PublicChannelAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelAccountId: bigint } } & {
              query: { archived?: boolean | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/channels': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                defaultPageLength?: number | undefined
                limit?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: CollectionResponseWithTotalPublicChannel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                defaultPageLength?: number | undefined
                limit?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/channels/:channelId': {
      $get:
        | {
            input: { param: { channelId: number } }
            output: PublicChannel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelId: number } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/inboxes': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                defaultPageLength?: number | undefined
                limit?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: CollectionResponseWithTotalPublicInbox
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                defaultPageLength?: number | undefined
                limit?: number | undefined
                sort?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/inboxes/:inboxId': {
      $get:
        | {
            input: { param: { inboxId: number } } & { query: { archived?: boolean | undefined } }
            output: PublicInbox
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inboxId: number } } & { query: { archived?: boolean | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/threads': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                associatedContactId?: bigint | undefined
                associatedTicketId?: bigint | undefined
                association?: 'TICKET'[] | undefined
                inboxId?: number[] | undefined
                latestMessageTimestampAfter?: string | undefined
                limit?: number | undefined
                property?: string | undefined
                sort?: string[] | undefined
                threadStatus?: 'CLOSED' | 'OPEN' | undefined
              }
            }
            output: CollectionResponsePublicThreadForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                associatedContactId?: bigint | undefined
                associatedTicketId?: bigint | undefined
                association?: 'TICKET'[] | undefined
                inboxId?: number[] | undefined
                latestMessageTimestampAfter?: string | undefined
                limit?: number | undefined
                property?: string | undefined
                sort?: string[] | undefined
                threadStatus?: 'CLOSED' | 'OPEN' | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/threads/:threadId': {
      $get:
        | {
            input: { param: { threadId: bigint } } & {
              query: {
                archived?: boolean | undefined
                association?: 'TICKET'[] | undefined
                property?: string | undefined
              }
            }
            output: PublicThread
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { threadId: bigint } } & {
              query: {
                archived?: boolean | undefined
                association?: 'TICKET'[] | undefined
                property?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | { input: { param: { threadId: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { threadId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { threadId: bigint } } & {
              query: { archived?: boolean | undefined }
            } & { json: PublicThreadUpdateRequest }
            output: PublicThread
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { threadId: bigint } } & {
              query: { archived?: boolean | undefined }
            } & { json: PublicThreadUpdateRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/threads/:threadId/assignee': {
      $put:
        | {
            input: { param: { threadId: bigint } } & { json: PublicThreadAssignRequest }
            output: PublicThread
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { threadId: bigint } } & { json: PublicThreadAssignRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | { input: { param: { threadId: bigint } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { threadId: bigint } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/threads/:threadId/messages': {
      $get:
        | {
            input: { param: { threadId: bigint } } & {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                limit?: number | undefined
                property?: string | undefined
                sort?: string[] | undefined
              }
            }
            output: CollectionResponsePublicMessageForwardPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { threadId: bigint } } & {
              query: {
                after?: string | undefined
                archived?: boolean | undefined
                limit?: number | undefined
                property?: string | undefined
                sort?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { param: { threadId: bigint } } & { json: PublicMessageEgg }
            output: PublicMessage
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { threadId: bigint } } & { json: PublicMessageEgg }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/threads/:threadId/messages/:messageId': {
      $get:
        | {
            input: { param: { messageId: string; threadId: bigint } } & {
              query: { property?: string | undefined }
            }
            output: PublicMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageId: string; threadId: bigint } } & {
              query: { property?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/conversations/conversations/2026-09/threads/:threadId/messages/:messageId/original-content': {
      $get:
        | {
            input: { param: { messageId: string; threadId: bigint } } & {
              query: { property?: string | undefined }
            }
            output: PublicMessageContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageId: string; threadId: bigint } } & {
              query: { property?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
