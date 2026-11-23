type Conversation = {
  avatar?: string | undefined
  avatarLarge?: string | undefined
  convId?: string | undefined
  creationTime?: number | undefined
  creatorId?: string | undefined
  creatorTenantId?: string | undefined
  description?: string | undefined
  isGuestAccessDisabled?: boolean | undefined
  isModerated?: boolean | undefined
  modificationTime?: number | undefined
  participants?: string[] | undefined
  topic?: string | undefined
  topicPlaceholder?: string | undefined
  type?: string | undefined
}
type BridgeNumber = {
  bridgeNumber?: string | undefined
  country?: string | undefined
  isMostUsed?: boolean | undefined
  locale?: string | undefined
  name?: string | undefined
  type?: string | undefined
}
type ConversationDetails = {
  bridgeNumbers?: BridgeNumber[] | undefined
  convId?: string | undefined
  conversationCreatorId?: string | undefined
  isModerationAllowed?: boolean | undefined
  isRecordingAllowed?: boolean | undefined
  link?: string | undefined
  pin?: string | undefined
}
type String = { CASE_INSENSITIVE_ORDER?: { [x: string]: unknown } | undefined }
type ConversationsPage = {
  conversationList?: Conversation[] | undefined
  hasMore?: { [x: string]: unknown } | undefined
  nextPagePointer?: string | undefined
}
type Attachment = {
  creationTime?: number | undefined
  creatorId?: string | undefined
  deleteUrl?: string | undefined
  fileId?: string | undefined
  fileName?: string | undefined
  itemId?: string | undefined
  mimeType?: string | undefined
  modificationTime?: number | undefined
  size?: number | undefined
  url?: string | undefined
}
type RtcEnded = {
  duration?: number | undefined
  maxNumberOfAttendees?: number | undefined
  pickFromParticipant?: string | undefined
}
type RtcMoved = { conversationId?: string | undefined; direction?: string | undefined }
type RtcParticipant = {
  displayName?: string | undefined
  fullyQualifiedNumber?: string | undefined
  phoneNumber?: string | undefined
  resolvedUser?: { [x: string]: unknown } | undefined
  type?: string | undefined
  userId?: string | undefined
}
type RtcItem = {
  ended?: RtcEnded | undefined
  missed?: string | undefined
  moved?: RtcMoved | undefined
  rtcParticipants?: RtcParticipant[] | undefined
  type?: string | undefined
}
type SystemItem = {
  affectedParticipants?: string[] | undefined
  newTopic?: string | undefined
  oldTopic?: string | undefined
  type?: string | undefined
}
type Preview = {
  imageURI?: string | undefined
  srcURL?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type ConversationTextItem = {
  content?: string | undefined
  contentType?: string | undefined
  formMetaData?: string | undefined
  isWebhookMessage?: boolean | undefined
  likedUserIds?: string[] | undefined
  parentId?: string | undefined
  preview?: Preview | undefined
  state?: string | undefined
  subject?: string | undefined
}
type ConversationItem = {
  attachments?: Attachment[] | undefined
  convId?: string | undefined
  creationTime?: number | undefined
  creatorId?: string | undefined
  includeInUnreadCount?: boolean | undefined
  itemId?: string | undefined
  modificationTime?: number | undefined
  rtc?: RtcItem | undefined
  system?: SystemItem | undefined
  text?: ConversationTextItem | undefined
  type?: string | undefined
}
type ConversationSearchResultItem = { convId?: string | undefined; itemIds?: string[] | undefined }
type ConversationSearchResult = {
  matchingConversations?: ConversationSearchResultItem[] | undefined
}
type Label = { labelId?: string | undefined; value?: string | undefined }
type ConversationParticipant = {
  displayName?: string | undefined
  firstName?: string | undefined
  isDeleted?: boolean | undefined
  largeImageUri?: string | undefined
  lastName?: string | undefined
  smallImageUri?: string | undefined
  type?: string | undefined
  userId?: string | undefined
}
type ConversationParticipantsList = {
  hasMore?: boolean | undefined
  participantList?: ConversationParticipant[] | undefined
  searchPointer?: string | undefined
}
type PinnedTopic = {
  conversationId?: string | undefined
  conversationItemId?: string | undefined
  pinnedTime?: number | undefined
}
type GetSpacesResult = { [x: string]: unknown }
type ParticipantSpaceWrapper = { [x: string]: unknown }
type Space = {
  accessModeType?: string | undefined
  creationTime?: number | undefined
  creatorId?: string | undefined
  defaultRole?: string | undefined
  description?: string | undefined
  largePictureBase64?: string | undefined
  largePictureContentType?: string | undefined
  largePictureId?: string | undefined
  lastContentCreationTime?: number | undefined
  lastContentCreatorId?: string | undefined
  modificationTime?: number | undefined
  name?: string | undefined
  numberOfExternalParticipants?: number | undefined
  numberOfParticipants?: number | undefined
  numberOfPinnedTopics?: number | undefined
  numberOfReplies?: number | undefined
  numberOfTopics?: number | undefined
  ownerId?: string | undefined
  smallPictureBase64?: string | undefined
  smallPictureContentType?: string | undefined
  smallPictureId?: string | undefined
  spaceId?: string | undefined
  status?: string | undefined
  tags?: string[] | undefined
  tenantId?: string | undefined
  type?: string | undefined
}
type DirectoryResult = {
  hasMore?: boolean | undefined
  searchPointer?: string | undefined
  spaces?: Space[] | undefined
}
type SpaceAttachment = {
  creationTime?: number | undefined
  creatorId?: string | undefined
  fileId?: string | undefined
  fileName?: string | undefined
  inlineUsage?: boolean | undefined
  itemId?: string | undefined
  layout?: string | undefined
  mimeType?: string | undefined
  modificationTime?: number | undefined
  size?: number | undefined
  spaceId?: string | undefined
  thumbnailId?: string | undefined
}
type SpaceExternalAttachment = {
  attachment?: SpaceAttachment | undefined
  downloadLocation?: string | undefined
  previewLocation?: string | undefined
  shareLinkToken?: string | undefined
  type?: string | undefined
}
type SpaceItemPreview = {
  description?: string | undefined
  html?: string | undefined
  imageURI?: string | undefined
  provider?: string | undefined
  srcURL?: string | undefined
  title?: string | undefined
  type?: string | undefined
}
type SharedItem = {
  containerId?: string | undefined
  containerName?: string | undefined
  containerType?: string | undefined
  creationTime?: number | undefined
  creatorId?: string | undefined
  itemId?: string | undefined
  parentTopicId?: string | undefined
  subType?: string | undefined
}
type SpaceItem = {
  Status?: string | undefined
  attachments?: SpaceAttachment[] | undefined
  complex?: boolean | undefined
  content?: string | undefined
  creationTime?: number | undefined
  creatorId?: string | undefined
  deletedBy?: string | undefined
  externalAttachments?: SpaceExternalAttachment[] | undefined
  formMetaData?: string | undefined
  itemId?: string | undefined
  mentionedUsers?: string[] | undefined
  modificationTime?: number | undefined
  numberOfLikes?: number | undefined
  previews?: SpaceItemPreview[] | undefined
  sharedItems?: SharedItem[] | undefined
  spaceId?: string | undefined
  tenantId?: string | undefined
}
type FlaggedItem = { item?: SpaceItem | undefined; parentItem?: SpaceItem | undefined }
type FlaggedItemsResult = {
  flaggedItems?: FlaggedItem[] | undefined
  hasMore?: boolean | undefined
  searchPointer?: string | undefined
}
type ParticipantsLike = {
  firstName?: string | undefined
  largeImageUri?: string | undefined
  lastName?: string | undefined
  smallImageUri?: string | undefined
  userId?: string | undefined
}
type ParticipantsLikeResult = {
  hasMore?: boolean | undefined
  participants?: ParticipantsLike[] | undefined
  searchPointer?: string | undefined
}
type SpacesSearchTerm = {
  endTime?: { [x: string]: unknown } | undefined
  scope?: string | undefined
  searchTerm?: string | undefined
  startTime?: { [x: string]: unknown } | undefined
}
type SpacesSearchTermResult = { resList?: SpacesSearchTerm[] | undefined }
type BasicSearchResult = { spaces?: Space[] | undefined; status?: string | undefined }
type SpaceSearchResultDetailed = {
  fileIds?: string[] | undefined
  itemIds?: string[] | undefined
  spaceId?: string | undefined
  status?: string | undefined
}
type SpaceSearchResultDetailedBack = { resList?: SpaceSearchResultDetailed[] | undefined }
type SpaceTopic = {
  lastContentCreationTime?: number | undefined
  lastContentCreatorId?: string | undefined
  numberOfReplies?: number | undefined
  pinned?: boolean | undefined
  spaceItem?: SpaceItem | undefined
  subject?: string | undefined
  tags?: string[] | undefined
}
type LabelIds = { labelIds?: string[] | undefined }
type ParticipantAddResult = { [x: string]: unknown }
type ParticipantSearchResult = {
  creationTime?: number | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  modificationTime?: number | undefined
  numberOfReplies?: number | undefined
  numberOfTopics?: number | undefined
  role?: string | undefined
  smallImageUri?: string | undefined
  state?: string | undefined
  tenantId?: string | undefined
  userId?: string | undefined
}
type ParticipantsSearchResult = {
  hasMore?: boolean | undefined
  participants?: ParticipantSearchResult[] | undefined
  searchPointer?: string | undefined
}
type SpacePinnedTopic = {
  position?: number | undefined
  subject?: string | undefined
  topicId?: string | undefined
}
type AddParticipantsSearchResult = {
  department?: string | undefined
  firstName?: string | undefined
  isMember?: boolean | undefined
  jobTitle?: string | undefined
  lastName?: string | undefined
  smallImageUri?: string | undefined
  tenantId?: string | undefined
  userId?: string | undefined
}
type ParticipantSearchResultLarge = {
  creationTime?: number | undefined
  department?: string | undefined
  firstName?: string | undefined
  isMember?: boolean | undefined
  jobDescription?: string | undefined
  lastContentCreationTime?: number | undefined
  lastName?: string | undefined
  modificationTime?: number | undefined
  numberOfReplies?: number | undefined
  numberOfTopics?: number | undefined
  reason?: string | undefined
  role?: string | undefined
  smallImageUri?: string | undefined
  spaceId?: string | undefined
  state?: string | undefined
  tenantId?: string | undefined
  userId?: string | undefined
}
type ParticipantsSearchResultLarge = {
  hasMore?: boolean | undefined
  participants?: ParticipantSearchResultLarge[] | undefined
  searchPointer?: string | undefined
}
type ParticipantsImportDataResult = {
  actualNumberOfImportedParticipants?: number | undefined
  estimatedImportDuration?: number | undefined
  importEndDate?: number | undefined
  importFileId?: string | undefined
  importFileName?: string | undefined
  importProgress?: number | undefined
  importStartDate?: number | undefined
  importStatus?: string | undefined
  plannedNumberOfImportedParticipants?: number | undefined
  resultFileId?: string | undefined
  resultFileName?: string | undefined
}
type SpaceReply = { parentTopicId?: string | undefined; spaceItem?: SpaceItem | undefined }
type SpaceTopicWithReplies = { replies?: SpaceReply[] | undefined; topic?: SpaceTopic | undefined }
type V2DistributedClientInfo = {
  clientId?: string | undefined
  clientVersion?: string | undefined
  deviceSubtype?: string | undefined
  deviceType?: string | undefined
  hardwareModel?: string | undefined
  homeNode?: string | undefined
  manufacturer?: string | undefined
  osVersion?: string | undefined
  userId?: string | undefined
}
type UserEmailAddress = { address?: string | undefined; type?: string | undefined }
type UserPhoneNumber = { phoneNumber?: string | undefined; type?: string | undefined }
type User = {
  avatar?: string | undefined
  avatarLarge?: string | undefined
  company?: string | undefined
  department?: string | undefined
  displayName?: string | undefined
  emailAddress?: string | undefined
  emailAddresses?: UserEmailAddress[] | undefined
  firstName?: string | undefined
  jobTitle?: string | undefined
  lastName?: string | undefined
  locale?: string | undefined
  phoneNumber?: string | undefined
  phoneNumbers?: UserPhoneNumber[] | undefined
  primaryTenantId?: string | undefined
  secondaryEmailAddress?: string | undefined
  secondaryTenantId?: string | undefined
  userId?: string | undefined
  userState?: string | undefined
  userType?: string | undefined
}
type Presence = {
  dndUntil?: number | undefined
  isOptedOut?: boolean | undefined
  latitude?: number | undefined
  locationText?: string | undefined
  longitude?: number | undefined
  mobile?: boolean | undefined
  poor?: boolean | undefined
  state?: string | undefined
  statusMessage?: string | undefined
  timeZoneOffset?: number | undefined
  userId?: string | undefined
}
type SupportInfo = {
  supportEmailAddress?: string | undefined
  supportType?: { [x: string]: unknown } | undefined
}
type WebHook = {
  creationTime?: number | undefined
  filter?: string[] | undefined
  id?: string | undefined
  subscriptionIds?: string[] | undefined
  type?: string | undefined
  url?: string | undefined
  userId?: string | undefined
}
type IncomingWebhook = {
  conversationId?: string | undefined
  creationTime?: number | undefined
  creatorId?: string | undefined
  description?: string | undefined
  modificationTime?: number | undefined
  name?: string | undefined
  status?: string | undefined
  tenantId?: string | undefined
  url?: string | undefined
  userId?: string | undefined
  webhookId?: string | undefined
}
type IncomingWebhookSlackMessage = {
  fileURL?: string | undefined
  filename?: string | undefined
  markdown?: boolean | undefined
  subject?: string | undefined
  text?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/conversations': {
      $get:
        | {
            input: {
              query: {
                modTime?: string | undefined
                direction?: 'BEFORE' | 'AFTER' | undefined
                results?: number | undefined
              }
            }
            output: Conversation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                modTime?: string | undefined
                direction?: 'BEFORE' | 'AFTER' | undefined
                results?: number | undefined
              }
            }
            output: Conversation[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                modTime?: string | undefined
                direction?: 'BEFORE' | 'AFTER' | undefined
                results?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                modTime?: string | undefined
                direction?: 'BEFORE' | 'AFTER' | undefined
                results?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                modTime?: string | undefined
                direction?: 'BEFORE' | 'AFTER' | undefined
                results?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                modTime?: string | undefined
                direction?: 'BEFORE' | 'AFTER' | undefined
                results?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/byIds': {
      $get:
        | {
            input: { query: { convIds: string[] } }
            output: Conversation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { convIds: string[] } }
            output: Conversation[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { query: { convIds: string[] } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { convIds: string[] } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { convIds: string[] } }; output: {}; outputFormat: string; status: 500 }
        | { input: { query: { convIds: string[] } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/community': {
      $get:
        | {
            input: {
              query: {
                sort?: 'ALPHABETICALLY' | 'RECENT_ACTIVITY' | 'POPULARITY' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                includeOwn?: boolean | undefined
                startIndex?: number | undefined
                results?: number | undefined
              }
            }
            output: Conversation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'ALPHABETICALLY' | 'RECENT_ACTIVITY' | 'POPULARITY' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                includeOwn?: boolean | undefined
                startIndex?: number | undefined
                results?: number | undefined
              }
            }
            output: Conversation[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'ALPHABETICALLY' | 'RECENT_ACTIVITY' | 'POPULARITY' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                includeOwn?: boolean | undefined
                startIndex?: number | undefined
                results?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                sort?: 'ALPHABETICALLY' | 'RECENT_ACTIVITY' | 'POPULARITY' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                includeOwn?: boolean | undefined
                startIndex?: number | undefined
                results?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                sort?: 'ALPHABETICALLY' | 'RECENT_ACTIVITY' | 'POPULARITY' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                includeOwn?: boolean | undefined
                startIndex?: number | undefined
                results?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                sort?: 'ALPHABETICALLY' | 'RECENT_ACTIVITY' | 'POPULARITY' | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                includeOwn?: boolean | undefined
                startIndex?: number | undefined
                results?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
      $post:
        | {
            input: {
              json: {
                description?: string | undefined
                participants?: string[] | undefined
                topic: string
              }
            } & {
              form: {
                description?: string | undefined
                participants?: string[] | undefined
                topic: string
              }
            }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                description?: string | undefined
                participants?: string[] | undefined
                topic: string
              }
            } & {
              form: {
                description?: string | undefined
                participants?: string[] | undefined
                topic: string
              }
            }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                description?: string | undefined
                participants?: string[] | undefined
                topic: string
              }
            } & {
              form: {
                description?: string | undefined
                participants?: string[] | undefined
                topic: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                description?: string | undefined
                participants?: string[] | undefined
                topic: string
              }
            } & {
              form: {
                description?: string | undefined
                participants?: string[] | undefined
                topic: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                description?: string | undefined
                participants?: string[] | undefined
                topic: string
              }
            } & {
              form: {
                description?: string | undefined
                participants?: string[] | undefined
                topic: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              json: {
                description?: string | undefined
                participants?: string[] | undefined
                topic: string
              }
            } & {
              form: {
                description?: string | undefined
                participants?: string[] | undefined
                topic: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/community/:convId': {
      $put:
        | {
            input: { param: { convId: string } } & {
              json: { description?: string | undefined; topic?: string | undefined }
            } & { form: { description?: string | undefined; topic?: string | undefined } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } } & {
              json: { description?: string | undefined; topic?: string | undefined }
            } & { form: { description?: string | undefined; topic?: string | undefined } }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string } } & {
              json: { description?: string | undefined; topic?: string | undefined }
            } & { form: { description?: string | undefined; topic?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string } } & {
              json: { description?: string | undefined; topic?: string | undefined }
            } & { form: { description?: string | undefined; topic?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string } } & {
              json: { description?: string | undefined; topic?: string | undefined }
            } & { form: { description?: string | undefined; topic?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string } } & {
              json: { description?: string | undefined; topic?: string | undefined }
            } & { form: { description?: string | undefined; topic?: string | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/community/:convId/join': {
      $post:
        | {
            input: { param: { convId: string } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/community/:convId/participants': {
      $delete:
        | {
            input: { param: { convId: string } } & { query: { participants: string[] } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } } & { query: { participants: string[] } }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string } } & { query: { participants: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string } } & { query: { participants: string[] } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string } } & { query: { participants: string[] } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string } } & { query: { participants: string[] } }
            output: {}
            outputFormat: string
            status: 503
          }
      $post:
        | {
            input: { param: { convId: string } } & { json: { participants: string[] } } & {
              form: { participants: string[] }
            }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } } & { json: { participants: string[] } } & {
              form: { participants: string[] }
            }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string } } & { json: { participants: string[] } } & {
              form: { participants: string[] }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string } } & { json: { participants: string[] } } & {
              form: { participants: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string } } & { json: { participants: string[] } } & {
              form: { participants: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string } } & { json: { participants: string[] } } & {
              form: { participants: string[] }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/conversationdetails': {
      $get:
        | {
            input: { query: { convIds: string[] } }
            output: ConversationDetails[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { convIds: string[] } }
            output: ConversationDetails[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { query: { convIds: string[] } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { convIds: string[] } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { convIds: string[] } }; output: {}; outputFormat: string; status: 500 }
        | { input: { query: { convIds: string[] } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/direct': {
      $get:
        | {
            input: { query: { participant: string } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { participant: string } }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { participant: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { participant: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { participant: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { participant: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $post:
        | {
            input: { json: { participant: string } } & { form: { participant: string } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { participant: string } } & { form: { participant: string } }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { participant: string } } & { form: { participant: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { participant: string } } & { form: { participant: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: { participant: string } } & { form: { participant: string } }
            output: Conversation
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: { participant: string } } & { form: { participant: string } }
            output: Conversation
            outputFormat: 'text'
            status: 409
          }
        | {
            input: { json: { participant: string } } & { form: { participant: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { json: { participant: string } } & { form: { participant: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/favorite': {
      $get:
        | { input: {}; output: String[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/group': {
      $post:
        | {
            input: { json: { participants: string[]; topic?: string | undefined } } & {
              form: { participants: string[]; topic?: string | undefined }
            }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { participants: string[]; topic?: string | undefined } } & {
              form: { participants: string[]; topic?: string | undefined }
            }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { participants: string[]; topic?: string | undefined } } & {
              form: { participants: string[]; topic?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { participants: string[]; topic?: string | undefined } } & {
              form: { participants: string[]; topic?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: { participants: string[]; topic?: string | undefined } } & {
              form: { participants: string[]; topic?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { json: { participants: string[]; topic?: string | undefined } } & {
              form: { participants: string[]; topic?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/group/:convId': {
      $put:
        | {
            input: { param: { convId: string } } & { json: { topic?: string | undefined } } & {
              form: { topic?: string | undefined }
            }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } } & { json: { topic?: string | undefined } } & {
              form: { topic?: string | undefined }
            }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string } } & { json: { topic?: string | undefined } } & {
              form: { topic?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string } } & { json: { topic?: string | undefined } } & {
              form: { topic?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string } } & { json: { topic?: string | undefined } } & {
              form: { topic?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string } } & { json: { topic?: string | undefined } } & {
              form: { topic?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/group/:convId/participants': {
      $delete:
        | {
            input: { param: { convId: string } } & { query: { participants: string[] } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } } & { query: { participants: string[] } }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string } } & { query: { participants: string[] } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string } } & { query: { participants: string[] } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string } } & { query: { participants: string[] } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string } } & { query: { participants: string[] } }
            output: {}
            outputFormat: string
            status: 503
          }
      $post:
        | {
            input: { param: { convId: string } } & { json: { participants: string[] } } & {
              form: { participants: string[] }
            }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } } & { json: { participants: string[] } } & {
              form: { participants: string[] }
            }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string } } & { json: { participants: string[] } } & {
              form: { participants: string[] }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string } } & { json: { participants: string[] } } & {
              form: { participants: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string } } & { json: { participants: string[] } } & {
              form: { participants: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string } } & { json: { participants: string[] } } & {
              form: { participants: string[] }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/label/:labelId': {
      $get:
        | {
            input: { param: { labelId: string } } & {
              query: { nextPagePointer?: string | undefined; pageSize?: number | undefined }
            }
            output: ConversationsPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { labelId: string } } & {
              query: { nextPagePointer?: string | undefined; pageSize?: number | undefined }
            }
            output: ConversationsPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { labelId: string } } & {
              query: { nextPagePointer?: string | undefined; pageSize?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { labelId: string } } & {
              query: { nextPagePointer?: string | undefined; pageSize?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { labelId: string } } & {
              query: { nextPagePointer?: string | undefined; pageSize?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { labelId: string } } & {
              query: { nextPagePointer?: string | undefined; pageSize?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/messages/flag': {
      $get:
        | { input: {}; output: ConversationItem[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/messages/:itemId': {
      $get:
        | {
            input: { param: { itemId: string } }
            output: ConversationItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } }
            output: ConversationItem
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/moderate/:convId': {
      $post:
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/resolveinvitetoken': {
      $get:
        | {
            input: { query: { token: string } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { token: string } }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | { input: { query: { token: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { token: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { token: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { token: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { query: { token: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/search': {
      $get:
        | {
            input: {
              query: {
                term: string
                includeItemIds?: boolean | undefined
                scope?:
                  | 'FILES'
                  | 'PEOPLE'
                  | 'MEMBERS'
                  | 'MESSAGES'
                  | 'SENTBY'
                  | 'ALL'
                  | 'CONVERSATIONS'
                  | 'LABEL'
                  | 'FILTER'
                  | undefined
              }
            }
            output: ConversationSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                term: string
                includeItemIds?: boolean | undefined
                scope?:
                  | 'FILES'
                  | 'PEOPLE'
                  | 'MEMBERS'
                  | 'MESSAGES'
                  | 'SENTBY'
                  | 'ALL'
                  | 'CONVERSATIONS'
                  | 'LABEL'
                  | 'FILTER'
                  | undefined
              }
            }
            output: ConversationSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                term: string
                includeItemIds?: boolean | undefined
                scope?:
                  | 'FILES'
                  | 'PEOPLE'
                  | 'MEMBERS'
                  | 'MESSAGES'
                  | 'SENTBY'
                  | 'ALL'
                  | 'CONVERSATIONS'
                  | 'LABEL'
                  | 'FILTER'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                term: string
                includeItemIds?: boolean | undefined
                scope?:
                  | 'FILES'
                  | 'PEOPLE'
                  | 'MEMBERS'
                  | 'MESSAGES'
                  | 'SENTBY'
                  | 'ALL'
                  | 'CONVERSATIONS'
                  | 'LABEL'
                  | 'FILTER'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                term: string
                includeItemIds?: boolean | undefined
                scope?:
                  | 'FILES'
                  | 'PEOPLE'
                  | 'MEMBERS'
                  | 'MESSAGES'
                  | 'SENTBY'
                  | 'ALL'
                  | 'CONVERSATIONS'
                  | 'LABEL'
                  | 'FILTER'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                term: string
                includeItemIds?: boolean | undefined
                scope?:
                  | 'FILES'
                  | 'PEOPLE'
                  | 'MEMBERS'
                  | 'MESSAGES'
                  | 'SENTBY'
                  | 'ALL'
                  | 'CONVERSATIONS'
                  | 'LABEL'
                  | 'FILTER'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/unmoderate/:convId': {
      $post:
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/:convId': {
      $get:
        | {
            input: { param: { convId: string } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/:convId/archive': {
      $delete:
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 503 }
      $post:
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/:convId/conversationdetails': {
      $get:
        | {
            input: { param: { convId: string } }
            output: ConversationDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } }
            output: ConversationDetails
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/:convId/favorite': {
      $delete:
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 503 }
      $post:
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/:convId/items': {
      $get:
        | {
            input: { param: { convId: string } } & {
              query: {
                modTime?: string | undefined
                direction?: 'BEFORE' | 'AFTER' | undefined
                results?: number | undefined
              }
            }
            output: ConversationItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } } & {
              query: {
                modTime?: string | undefined
                direction?: 'BEFORE' | 'AFTER' | undefined
                results?: number | undefined
              }
            }
            output: ConversationItem[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string } } & {
              query: {
                modTime?: string | undefined
                direction?: 'BEFORE' | 'AFTER' | undefined
                results?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string } } & {
              query: {
                modTime?: string | undefined
                direction?: 'BEFORE' | 'AFTER' | undefined
                results?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string } } & {
              query: {
                modTime?: string | undefined
                direction?: 'BEFORE' | 'AFTER' | undefined
                results?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string } } & {
              query: {
                modTime?: string | undefined
                direction?: 'BEFORE' | 'AFTER' | undefined
                results?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/:convId/label': {
      $post:
        | {
            input: { param: { convId: string } } & { json: { label: string } } & {
              form: { label: string }
            }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } } & { json: { label: string } } & {
              form: { label: string }
            }
            output: Label
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string } } & { json: { label: string } } & {
              form: { label: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string } } & { json: { label: string } } & {
              form: { label: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string } } & { json: { label: string } } & {
              form: { label: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string } } & { json: { label: string } } & {
              form: { label: string }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/:convId/label/:labelId': {
      $delete:
        | {
            input: { param: { convId: string; labelId: string } }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string; labelId: string } }
            output: Label
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string; labelId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string; labelId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string; labelId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string; labelId: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/:convId/messages': {
      $post:
        | {
            input: { param: { convId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: ConversationItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: ConversationItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/:convId/messages/flag': {
      $get:
        | {
            input: { param: { convId: string } }
            output: ConversationItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } }
            output: ConversationItem[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/:convId/messages/:itemId': {
      $delete:
        | {
            input: { param: { convId: string; itemId: string } }
            output: ConversationItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: ConversationItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $post:
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: ConversationItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: ConversationItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
      $put:
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: ConversationItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: ConversationItem
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                subject?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/:convId/messages/:itemId/flag': {
      $delete:
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $post:
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: { itemCreationTime?: string | undefined; parentId?: string | undefined }
            } & { form: { itemCreationTime?: string | undefined; parentId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: { itemCreationTime?: string | undefined; parentId?: string | undefined }
            } & { form: { itemCreationTime?: string | undefined; parentId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: { itemCreationTime?: string | undefined; parentId?: string | undefined }
            } & { form: { itemCreationTime?: string | undefined; parentId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: { itemCreationTime?: string | undefined; parentId?: string | undefined }
            } & { form: { itemCreationTime?: string | undefined; parentId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string; itemId: string } } & {
              json: { itemCreationTime?: string | undefined; parentId?: string | undefined }
            } & { form: { itemCreationTime?: string | undefined; parentId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/:convId/messages/:itemId/like': {
      $delete:
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $post:
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/:convId/moderators': {
      $delete:
        | {
            input: { param: { convId: string } } & { json: { moderators: string[] } } & {
              form: { moderators: string[] }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { convId: string } } & { json: { moderators: string[] } } & {
              form: { moderators: string[] }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string } } & { json: { moderators: string[] } } & {
              form: { moderators: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string } } & { json: { moderators: string[] } } & {
              form: { moderators: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string } } & { json: { moderators: string[] } } & {
              form: { moderators: string[] }
            }
            output: {}
            outputFormat: string
            status: 503
          }
      $post:
        | {
            input: { param: { convId: string } } & { json: { moderators: string[] } } & {
              form: { moderators: string[] }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { convId: string } } & { json: { moderators: string[] } } & {
              form: { moderators: string[] }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string } } & { json: { moderators: string[] } } & {
              form: { moderators: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string } } & { json: { moderators: string[] } } & {
              form: { moderators: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string } } & { json: { moderators: string[] } } & {
              form: { moderators: string[] }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/:convId/participants': {
      $get:
        | {
            input: { param: { convId: string } } & {
              query: {
                pageSize: number
                name?: string | undefined
                type?: 'REGULAR' | 'MODERATOR' | 'GUEST' | 'FORMER' | 'BOT' | undefined
                searchPointer?: string | undefined
              }
            }
            output: ConversationParticipantsList[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } } & {
              query: {
                pageSize: number
                name?: string | undefined
                type?: 'REGULAR' | 'MODERATOR' | 'GUEST' | 'FORMER' | 'BOT' | undefined
                searchPointer?: string | undefined
              }
            }
            output: ConversationParticipantsList[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string } } & {
              query: {
                pageSize: number
                name?: string | undefined
                type?: 'REGULAR' | 'MODERATOR' | 'GUEST' | 'FORMER' | 'BOT' | undefined
                searchPointer?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string } } & {
              query: {
                pageSize: number
                name?: string | undefined
                type?: 'REGULAR' | 'MODERATOR' | 'GUEST' | 'FORMER' | 'BOT' | undefined
                searchPointer?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string } } & {
              query: {
                pageSize: number
                name?: string | undefined
                type?: 'REGULAR' | 'MODERATOR' | 'GUEST' | 'FORMER' | 'BOT' | undefined
                searchPointer?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string } } & {
              query: {
                pageSize: number
                name?: string | undefined
                type?: 'REGULAR' | 'MODERATOR' | 'GUEST' | 'FORMER' | 'BOT' | undefined
                searchPointer?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/conversations/:convId/pins': {
      $get:
        | {
            input: { param: { convId: string } }
            output: PinnedTopic[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string } }
            output: PinnedTopic[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { convId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/conversations/:convId/pins/:itemId': {
      $delete:
        | {
            input: { param: { convId: string; itemId: string } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 503
          }
      $post:
        | {
            input: { param: { convId: string; itemId: string } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: Conversation
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { convId: string; itemId: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/rtc/sessions': {
      $get:
        | { input: {}; output: Label; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces': {
      $get:
        | {
            input: {
              query: { timestamp?: string | undefined; numberOfResults?: number | undefined }
            }
            output: GetSpacesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { timestamp?: string | undefined; numberOfResults?: number | undefined }
            }
            output: GetSpacesResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { timestamp?: string | undefined; numberOfResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { timestamp?: string | undefined; numberOfResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: { timestamp?: string | undefined; numberOfResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/create': {
      $post:
        | {
            input: {
              json: {
                accessModeType: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL'
                description?: string | undefined
                largePictureBase64?: string | undefined
                name: string
                role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                smallPictureBase64?: string | undefined
                status: 'ENABLED' | 'DISABLED'
                tags?: string[] | undefined
                type: 'OPEN' | 'CLOSED' | 'SECRET'
              }
            } & {
              form: {
                accessModeType: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL'
                description?: string | undefined
                largePictureBase64?: string | undefined
                name: string
                role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                smallPictureBase64?: string | undefined
                status: 'ENABLED' | 'DISABLED'
                tags?: string[] | undefined
                type: 'OPEN' | 'CLOSED' | 'SECRET'
              }
            }
            output: ParticipantSpaceWrapper
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                accessModeType: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL'
                description?: string | undefined
                largePictureBase64?: string | undefined
                name: string
                role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                smallPictureBase64?: string | undefined
                status: 'ENABLED' | 'DISABLED'
                tags?: string[] | undefined
                type: 'OPEN' | 'CLOSED' | 'SECRET'
              }
            } & {
              form: {
                accessModeType: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL'
                description?: string | undefined
                largePictureBase64?: string | undefined
                name: string
                role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                smallPictureBase64?: string | undefined
                status: 'ENABLED' | 'DISABLED'
                tags?: string[] | undefined
                type: 'OPEN' | 'CLOSED' | 'SECRET'
              }
            }
            output: ParticipantSpaceWrapper
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                accessModeType: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL'
                description?: string | undefined
                largePictureBase64?: string | undefined
                name: string
                role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                smallPictureBase64?: string | undefined
                status: 'ENABLED' | 'DISABLED'
                tags?: string[] | undefined
                type: 'OPEN' | 'CLOSED' | 'SECRET'
              }
            } & {
              form: {
                accessModeType: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL'
                description?: string | undefined
                largePictureBase64?: string | undefined
                name: string
                role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                smallPictureBase64?: string | undefined
                status: 'ENABLED' | 'DISABLED'
                tags?: string[] | undefined
                type: 'OPEN' | 'CLOSED' | 'SECRET'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                accessModeType: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL'
                description?: string | undefined
                largePictureBase64?: string | undefined
                name: string
                role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                smallPictureBase64?: string | undefined
                status: 'ENABLED' | 'DISABLED'
                tags?: string[] | undefined
                type: 'OPEN' | 'CLOSED' | 'SECRET'
              }
            } & {
              form: {
                accessModeType: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL'
                description?: string | undefined
                largePictureBase64?: string | undefined
                name: string
                role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                smallPictureBase64?: string | undefined
                status: 'ENABLED' | 'DISABLED'
                tags?: string[] | undefined
                type: 'OPEN' | 'CLOSED' | 'SECRET'
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              json: {
                accessModeType: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL'
                description?: string | undefined
                largePictureBase64?: string | undefined
                name: string
                role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                smallPictureBase64?: string | undefined
                status: 'ENABLED' | 'DISABLED'
                tags?: string[] | undefined
                type: 'OPEN' | 'CLOSED' | 'SECRET'
              }
            } & {
              form: {
                accessModeType: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL'
                description?: string | undefined
                largePictureBase64?: string | undefined
                name: string
                role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                smallPictureBase64?: string | undefined
                status: 'ENABLED' | 'DISABLED'
                tags?: string[] | undefined
                type: 'OPEN' | 'CLOSED' | 'SECRET'
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/directory': {
      $get:
        | {
            input: {
              query: {
                sortBy: 'LAST_CONTENT' | 'NAME' | 'NUMBER_OF_USERS' | 'CREATION_DATE'
                sortOrder: 'ASCENDING' | 'DESCENDING'
                filter: 'NONE' | 'JOINED' | 'REQUESTED' | 'OPEN' | 'CLOSED' | 'NOT_JOINED_REQUESTED'
                query?: string | undefined
                pagePointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: DirectoryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sortBy: 'LAST_CONTENT' | 'NAME' | 'NUMBER_OF_USERS' | 'CREATION_DATE'
                sortOrder: 'ASCENDING' | 'DESCENDING'
                filter: 'NONE' | 'JOINED' | 'REQUESTED' | 'OPEN' | 'CLOSED' | 'NOT_JOINED_REQUESTED'
                query?: string | undefined
                pagePointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: DirectoryResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                sortBy: 'LAST_CONTENT' | 'NAME' | 'NUMBER_OF_USERS' | 'CREATION_DATE'
                sortOrder: 'ASCENDING' | 'DESCENDING'
                filter: 'NONE' | 'JOINED' | 'REQUESTED' | 'OPEN' | 'CLOSED' | 'NOT_JOINED_REQUESTED'
                query?: string | undefined
                pagePointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                sortBy: 'LAST_CONTENT' | 'NAME' | 'NUMBER_OF_USERS' | 'CREATION_DATE'
                sortOrder: 'ASCENDING' | 'DESCENDING'
                filter: 'NONE' | 'JOINED' | 'REQUESTED' | 'OPEN' | 'CLOSED' | 'NOT_JOINED_REQUESTED'
                query?: string | undefined
                pagePointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                sortBy: 'LAST_CONTENT' | 'NAME' | 'NUMBER_OF_USERS' | 'CREATION_DATE'
                sortOrder: 'ASCENDING' | 'DESCENDING'
                filter: 'NONE' | 'JOINED' | 'REQUESTED' | 'OPEN' | 'CLOSED' | 'NOT_JOINED_REQUESTED'
                query?: string | undefined
                pagePointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/exists/:name': {
      $get:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/flag/:itemId': {
      $put:
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/flagged': {
      $get:
        | {
            input: {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp: string
                searchPointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: FlaggedItemsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp: string
                searchPointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: FlaggedItemsResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp: string
                searchPointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp: string
                searchPointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp: string
                searchPointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/ids': {
      $get:
        | {
            input: { query: { ids: string[] } }
            output: GetSpacesResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string[] } }
            output: GetSpacesResult
            outputFormat: 'text'
            status: 200
          }
        | { input: { query: { ids: string[] } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { ids: string[] } }; output: {}; outputFormat: string; status: 500 }
        | { input: { query: { ids: string[] } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/item/:itemId': {
      $delete:
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/like/:itemId': {
      $put:
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/likes/:itemId': {
      $get:
        | {
            input: { param: { itemId: string } } & {
              query: { searchPointer?: string | undefined; numberOfResults?: number | undefined }
            }
            output: ParticipantsLikeResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: { searchPointer?: string | undefined; numberOfResults?: number | undefined }
            }
            output: ParticipantsLikeResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { itemId: string } } & {
              query: { searchPointer?: string | undefined; numberOfResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { itemId: string } } & {
              query: { searchPointer?: string | undefined; numberOfResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { itemId: string } } & {
              query: { searchPointer?: string | undefined; numberOfResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/search/add/recent': {
      $put:
        | {
            input: {
              json: {
                endTime?: string | undefined
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
              }
            } & {
              form: {
                endTime?: string | undefined
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                endTime?: string | undefined
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
              }
            } & {
              form: {
                endTime?: string | undefined
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                endTime?: string | undefined
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
              }
            } & {
              form: {
                endTime?: string | undefined
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              json: {
                endTime?: string | undefined
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
              }
            } & {
              form: {
                endTime?: string | undefined
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/search/cancel/:searchId': {
      $put:
        | { input: { param: { searchId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { searchId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { searchId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { searchId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/search/recent': {
      $get:
        | { input: {}; output: SpacesSearchTermResult[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/search/startBasic': {
      $get:
        | {
            input: {
              query: {
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
                endTime?: string | undefined
                prioritySpaces?: string[] | undefined
              }
            }
            output: BasicSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
                endTime?: string | undefined
                prioritySpaces?: string[] | undefined
              }
            }
            output: BasicSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
                endTime?: string | undefined
                prioritySpaces?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
                endTime?: string | undefined
                prioritySpaces?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
                endTime?: string | undefined
                prioritySpaces?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/search/startDetailed': {
      $get:
        | {
            input: {
              query: {
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
                endTime?: string | undefined
                spaceId: string
                searchId?: string | undefined
              }
            }
            output: SpaceSearchResultDetailedBack[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
                endTime?: string | undefined
                spaceId: string
                searchId?: string | undefined
              }
            }
            output: SpaceSearchResultDetailedBack[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
                endTime?: string | undefined
                spaceId: string
                searchId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
                endTime?: string | undefined
                spaceId: string
                searchId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                scope: 'ALL' | 'SPACES' | 'TOPICBY' | 'FILES' | 'TAGS' | 'LABELS' | 'DATE'
                searchTerm: string
                startTime?: string | undefined
                endTime?: string | undefined
                spaceId: string
                searchId?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/topic/:topicId/updateTags': {
      $put:
        | {
            input: { param: { topicId: string } } & { json: { tags: string[] } } & {
              form: { tags: string[] }
            }
            output: SpaceTopic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicId: string } } & { json: { tags: string[] } } & {
              form: { tags: string[] }
            }
            output: SpaceTopic
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { topicId: string } } & { json: { tags: string[] } } & {
              form: { tags: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { topicId: string } } & { json: { tags: string[] } } & {
              form: { tags: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { topicId: string } } & { json: { tags: string[] } } & {
              form: { tags: string[] }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/unflag/:itemId': {
      $put:
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/unlike/:itemId': {
      $put:
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { itemId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 503 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                accessModeType?: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL' | 'NO_CHANGE' | undefined
                description?: string | undefined
                largePictureBase64?: string | undefined
                name?: string | undefined
                ownerId?: string | undefined
                role?: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER' | 'NO_CHANGE' | undefined
                smallPictureBase64?: string | undefined
                status?: 'ENABLED' | 'DISABLED' | undefined
                tags?: string[] | undefined
                type?: 'OPEN' | 'CLOSED' | 'SECRET' | 'NO_CHANGE' | undefined
              }
            } & {
              form: {
                accessModeType?: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL' | 'NO_CHANGE' | undefined
                description?: string | undefined
                largePictureBase64?: string | undefined
                name?: string | undefined
                ownerId?: string | undefined
                role?: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER' | 'NO_CHANGE' | undefined
                smallPictureBase64?: string | undefined
                status?: 'ENABLED' | 'DISABLED' | undefined
                tags?: string[] | undefined
                type?: 'OPEN' | 'CLOSED' | 'SECRET' | 'NO_CHANGE' | undefined
              }
            }
            output: ParticipantSpaceWrapper
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                accessModeType?: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL' | 'NO_CHANGE' | undefined
                description?: string | undefined
                largePictureBase64?: string | undefined
                name?: string | undefined
                ownerId?: string | undefined
                role?: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER' | 'NO_CHANGE' | undefined
                smallPictureBase64?: string | undefined
                status?: 'ENABLED' | 'DISABLED' | undefined
                tags?: string[] | undefined
                type?: 'OPEN' | 'CLOSED' | 'SECRET' | 'NO_CHANGE' | undefined
              }
            } & {
              form: {
                accessModeType?: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL' | 'NO_CHANGE' | undefined
                description?: string | undefined
                largePictureBase64?: string | undefined
                name?: string | undefined
                ownerId?: string | undefined
                role?: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER' | 'NO_CHANGE' | undefined
                smallPictureBase64?: string | undefined
                status?: 'ENABLED' | 'DISABLED' | undefined
                tags?: string[] | undefined
                type?: 'OPEN' | 'CLOSED' | 'SECRET' | 'NO_CHANGE' | undefined
              }
            }
            output: ParticipantSpaceWrapper
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                accessModeType?: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL' | 'NO_CHANGE' | undefined
                description?: string | undefined
                largePictureBase64?: string | undefined
                name?: string | undefined
                ownerId?: string | undefined
                role?: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER' | 'NO_CHANGE' | undefined
                smallPictureBase64?: string | undefined
                status?: 'ENABLED' | 'DISABLED' | undefined
                tags?: string[] | undefined
                type?: 'OPEN' | 'CLOSED' | 'SECRET' | 'NO_CHANGE' | undefined
              }
            } & {
              form: {
                accessModeType?: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL' | 'NO_CHANGE' | undefined
                description?: string | undefined
                largePictureBase64?: string | undefined
                name?: string | undefined
                ownerId?: string | undefined
                role?: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER' | 'NO_CHANGE' | undefined
                smallPictureBase64?: string | undefined
                status?: 'ENABLED' | 'DISABLED' | undefined
                tags?: string[] | undefined
                type?: 'OPEN' | 'CLOSED' | 'SECRET' | 'NO_CHANGE' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                accessModeType?: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL' | 'NO_CHANGE' | undefined
                description?: string | undefined
                largePictureBase64?: string | undefined
                name?: string | undefined
                ownerId?: string | undefined
                role?: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER' | 'NO_CHANGE' | undefined
                smallPictureBase64?: string | undefined
                status?: 'ENABLED' | 'DISABLED' | undefined
                tags?: string[] | undefined
                type?: 'OPEN' | 'CLOSED' | 'SECRET' | 'NO_CHANGE' | undefined
              }
            } & {
              form: {
                accessModeType?: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL' | 'NO_CHANGE' | undefined
                description?: string | undefined
                largePictureBase64?: string | undefined
                name?: string | undefined
                ownerId?: string | undefined
                role?: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER' | 'NO_CHANGE' | undefined
                smallPictureBase64?: string | undefined
                status?: 'ENABLED' | 'DISABLED' | undefined
                tags?: string[] | undefined
                type?: 'OPEN' | 'CLOSED' | 'SECRET' | 'NO_CHANGE' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              json: {
                accessModeType?: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL' | 'NO_CHANGE' | undefined
                description?: string | undefined
                largePictureBase64?: string | undefined
                name?: string | undefined
                ownerId?: string | undefined
                role?: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER' | 'NO_CHANGE' | undefined
                smallPictureBase64?: string | undefined
                status?: 'ENABLED' | 'DISABLED' | undefined
                tags?: string[] | undefined
                type?: 'OPEN' | 'CLOSED' | 'SECRET' | 'NO_CHANGE' | undefined
              }
            } & {
              form: {
                accessModeType?: 'INTERNAL_ONLY' | 'INTERNAL_EXTERNAL' | 'NO_CHANGE' | undefined
                description?: string | undefined
                largePictureBase64?: string | undefined
                name?: string | undefined
                ownerId?: string | undefined
                role?: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER' | 'NO_CHANGE' | undefined
                smallPictureBase64?: string | undefined
                status?: 'ENABLED' | 'DISABLED' | undefined
                tags?: string[] | undefined
                type?: 'OPEN' | 'CLOSED' | 'SECRET' | 'NO_CHANGE' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:id/join': {
      $post:
        | {
            input: { param: { id: string } }
            output: ParticipantSpaceWrapper
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ParticipantSpaceWrapper
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/:id/labels/assign': {
      $post:
        | {
            input: { param: { id: string } } & { json: { labels: string[] } } & {
              form: { labels: string[] }
            }
            output: LabelIds[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { labels: string[] } } & {
              form: { labels: string[] }
            }
            output: LabelIds[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { labels: string[] } } & {
              form: { labels: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { labels: string[] } } & {
              form: { labels: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: { labels: string[] } } & {
              form: { labels: string[] }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:id/labels/unassign': {
      $delete:
        | {
            input: { param: { id: string } } & { json: { labelIds: string[] } } & {
              form: { labelIds: string[] }
            }
            output: LabelIds[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { labelIds: string[] } } & {
              form: { labelIds: string[] }
            }
            output: LabelIds[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { labelIds: string[] } } & {
              form: { labelIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { labelIds: string[] } } & {
              form: { labelIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: { labelIds: string[] } } & {
              form: { labelIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:id/leave': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/:id/participant': {
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                role: 'DEFAULT' | 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                userId: string[]
              }
            } & {
              form: {
                role: 'DEFAULT' | 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                userId: string[]
              }
            }
            output: ParticipantAddResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                role: 'DEFAULT' | 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                userId: string[]
              }
            } & {
              form: {
                role: 'DEFAULT' | 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                userId: string[]
              }
            }
            output: ParticipantAddResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                role: 'DEFAULT' | 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                userId: string[]
              }
            } & {
              form: {
                role: 'DEFAULT' | 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                userId: string[]
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                role: 'DEFAULT' | 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                userId: string[]
              }
            } & {
              form: {
                role: 'DEFAULT' | 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                userId: string[]
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              json: {
                role: 'DEFAULT' | 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                userId: string[]
              }
            } & {
              form: {
                role: 'DEFAULT' | 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'
                userId: string[]
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:id/participant/remove': {
      $post:
        | {
            input: { param: { id: string } } & { json: { userIds: string[] } } & {
              form: { userIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { userIds: string[] } } & {
              form: { userIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { userIds: string[] } } & {
              form: { userIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: { userIds: string[] } } & {
              form: { userIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:id/participants': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                sortBy: 'DISPLAY_NAME' | 'NAME' | 'FIRST_NAME'
                sortOrder: 'ASCENDING' | 'DESCENDING'
                filterType: 'NONE' | 'ACCESS_TYPE' | 'ROLE' | 'STATE'
                filterValue?: string | undefined
                query?: string | undefined
                searchPointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: ParticipantsSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                sortBy: 'DISPLAY_NAME' | 'NAME' | 'FIRST_NAME'
                sortOrder: 'ASCENDING' | 'DESCENDING'
                filterType: 'NONE' | 'ACCESS_TYPE' | 'ROLE' | 'STATE'
                filterValue?: string | undefined
                query?: string | undefined
                searchPointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: ParticipantsSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                sortBy: 'DISPLAY_NAME' | 'NAME' | 'FIRST_NAME'
                sortOrder: 'ASCENDING' | 'DESCENDING'
                filterType: 'NONE' | 'ACCESS_TYPE' | 'ROLE' | 'STATE'
                filterValue?: string | undefined
                query?: string | undefined
                searchPointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                sortBy: 'DISPLAY_NAME' | 'NAME' | 'FIRST_NAME'
                sortOrder: 'ASCENDING' | 'DESCENDING'
                filterType: 'NONE' | 'ACCESS_TYPE' | 'ROLE' | 'STATE'
                filterValue?: string | undefined
                query?: string | undefined
                searchPointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: {
                sortBy: 'DISPLAY_NAME' | 'NAME' | 'FIRST_NAME'
                sortOrder: 'ASCENDING' | 'DESCENDING'
                filterType: 'NONE' | 'ACCESS_TYPE' | 'ROLE' | 'STATE'
                filterValue?: string | undefined
                query?: string | undefined
                searchPointer?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:id/participants/pending': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { searchPointer?: string | undefined; numberOfResults?: number | undefined }
            }
            output: ParticipantsSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { searchPointer?: string | undefined; numberOfResults?: number | undefined }
            }
            output: ParticipantsSearchResult
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { searchPointer?: string | undefined; numberOfResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { searchPointer?: string | undefined; numberOfResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              query: { searchPointer?: string | undefined; numberOfResults?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:id/pinnedTopics': {
      $get:
        | {
            input: { param: { id: string } }
            output: SpacePinnedTopic[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: SpacePinnedTopic[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/:id/searchParticipantsToAdd': {
      $get:
        | {
            input: { param: { id: string } } & { query: { query: string } }
            output: AddParticipantsSearchResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { query: string } }
            output: AddParticipantsSearchResult[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { query: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { query: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { query: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:id/searchSpaceParticipants': {
      $get:
        | {
            input: { param: { id: string } } & { query: { query: string } }
            output: ParticipantsSearchResultLarge[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { query: string } }
            output: ParticipantsSearchResultLarge[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { query: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { query: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { query: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:id/updateTimestamp': {
      $put:
        | {
            input: { param: { id: string } } & { json: { timestamp: string } } & {
              form: { timestamp: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { timestamp: string } } & {
              form: { timestamp: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { timestamp: string } } & {
              form: { timestamp: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: { timestamp: string } } & {
              form: { timestamp: string }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:spaceId/participant': {
      $put:
        | {
            input: { param: { spaceId: string } } & {
              json: { role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'; userId: string }
            } & {
              form: { role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'; userId: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { spaceId: string } } & {
              json: { role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'; userId: string }
            } & {
              form: { role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'; userId: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceId: string } } & {
              json: { role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'; userId: string }
            } & {
              form: { role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'; userId: string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { spaceId: string } } & {
              json: { role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'; userId: string }
            } & {
              form: { role: 'MODERATOR' | 'AUTHOR' | 'PARTICIPANT' | 'READER'; userId: string }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:spaceId/participant/import/': {
      $get:
        | {
            input: { param: { spaceId: string } }
            output: ParticipantsImportDataResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceId: string } }
            output: ParticipantsImportDataResult
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { spaceId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { spaceId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { spaceId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/spaces/:spaceId/participant/request': {
      $post:
        | {
            input: { param: { spaceId: string } } & { json: { reason?: string | undefined } } & {
              form: { reason?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { spaceId: string } } & { json: { reason?: string | undefined } } & {
              form: { reason?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceId: string } } & { json: { reason?: string | undefined } } & {
              form: { reason?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceId: string } } & { json: { reason?: string | undefined } } & {
              form: { reason?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { spaceId: string } } & { json: { reason?: string | undefined } } & {
              form: { reason?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:spaceId/participant/:participantId/deny': {
      $post:
        | {
            input: { param: { spaceId: string; participantId: string } } & {
              json: { reason?: string | undefined }
            } & { form: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { spaceId: string; participantId: string } } & {
              json: { reason?: string | undefined }
            } & { form: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceId: string; participantId: string } } & {
              json: { reason?: string | undefined }
            } & { form: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceId: string; participantId: string } } & {
              json: { reason?: string | undefined }
            } & { form: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { spaceId: string; participantId: string } } & {
              json: { reason?: string | undefined }
            } & { form: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:spaceId/participant/:participantId/grant': {
      $post:
        | {
            input: { param: { spaceId: string; participantId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { spaceId: string; participantId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceId: string; participantId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceId: string; participantId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { spaceId: string; participantId: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:spaceId/topic': {
      $post:
        | {
            input: { param: { spaceId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
                subject: string
                tags?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
                subject: string
                tags?: string[] | undefined
              }
            }
            output: SpaceTopic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
                subject: string
                tags?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
                subject: string
                tags?: string[] | undefined
              }
            }
            output: SpaceTopic
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { spaceId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
                subject: string
                tags?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
                subject: string
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
                subject: string
                tags?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
                subject: string
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
                subject: string
                tags?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
                subject: string
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { spaceId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
                subject: string
                tags?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
                subject: string
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:spaceId/topic/:topicId': {
      $get:
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              query: { numberOfReplies?: number | undefined }
            }
            output: SpaceTopicWithReplies
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              query: { numberOfReplies?: number | undefined }
            }
            output: SpaceTopicWithReplies
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              query: { numberOfReplies?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              query: { numberOfReplies?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              query: { numberOfReplies?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 503
          }
      $put:
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
                subject?: string | undefined
                tags?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
                subject?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: SpaceTopic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
                subject?: string | undefined
                tags?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
                subject?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: SpaceTopic
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
                subject?: string | undefined
                tags?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
                subject?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
                subject?: string | undefined
                tags?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
                subject?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
                subject?: string | undefined
                tags?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
                subject?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
                subject?: string | undefined
                tags?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                contentTags?: string[] | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
                subject?: string | undefined
                tags?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:spaceId/topic/:topicId/reply': {
      $get:
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: SpaceReply
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: SpaceReply
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
      $post:
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
              }
            }
            output: SpaceReply
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
              }
            }
            output: SpaceReply
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { spaceId: string; topicId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUser?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:spaceId/topic/:topicId/reply/:replyId': {
      $put:
        | {
            input: { param: { spaceId: string; topicId: string; replyId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
              }
            }
            output: SpaceReply
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceId: string; topicId: string; replyId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
              }
            }
            output: SpaceReply
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { spaceId: string; topicId: string; replyId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { spaceId: string; topicId: string; replyId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceId: string; topicId: string; replyId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { spaceId: string; topicId: string; replyId: string } } & {
              json: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
              }
            } & {
              form: {
                attachments?: string[] | undefined
                complex?: boolean | undefined
                content?: string | undefined
                formMetaData?: string | undefined
                mentionedUsers?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:spaceId/topics': {
      $get:
        | {
            input: { param: { spaceId: string } } & {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: SpaceTopic[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { spaceId: string } } & {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: SpaceTopic[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { spaceId: string } } & {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceId: string } } & {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { spaceId: string } } & {
              query: {
                searchDirection: 'BEFORE' | 'AFTER'
                timestamp?: string | undefined
                numberOfResults?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:spaceId/welcomebox/:content': {
      $put:
        | {
            input: { param: { spaceId: string; content: string } } & {
              json: { displayWelcomeBox?: boolean | undefined }
            } & { form: { displayWelcomeBox?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { spaceId: string; content: string } } & {
              json: { displayWelcomeBox?: boolean | undefined }
            } & { form: { displayWelcomeBox?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { spaceId: string; content: string } } & {
              json: { displayWelcomeBox?: boolean | undefined }
            } & { form: { displayWelcomeBox?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { spaceId: string; content: string } } & {
              json: { displayWelcomeBox?: boolean | undefined }
            } & { form: { displayWelcomeBox?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:topicId/pin': {
      $put:
        | {
            input: { param: { topicId: string } } & { json: { position: number } } & {
              form: { position: number }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { topicId: string } } & { json: { position: number } } & {
              form: { position: number }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { topicId: string } } & { json: { position: number } } & {
              form: { position: number }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { topicId: string } } & { json: { position: number } } & {
              form: { position: number }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/spaces/:topicId/unpin': {
      $put:
        | { input: { param: { topicId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { topicId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { topicId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { topicId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/telephony/deviceInfos': {
      $get:
        | { input: {}; output: V2DistributedClientInfo[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/telephony/telephonyConversationId': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/telephony/:telephonyConversationId/journal': {
      $get:
        | {
            input: { param: { telephonyConversationId: string } } & {
              query: {
                timestamp?: number | undefined
                numberOfEntries?: number | undefined
                direction?: 'AFTER' | 'BEFORE' | 'BOTH' | undefined
                journalFilter?:
                  | 'ALL'
                  | 'MISSED'
                  | 'DIALED'
                  | 'RECEIVED'
                  | 'DIVERTED'
                  | 'VOICEMAILS'
                  | 'UNHERAD_VOICEMAILS'
                  | undefined
              }
            }
            output: ConversationItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { telephonyConversationId: string } } & {
              query: {
                timestamp?: number | undefined
                numberOfEntries?: number | undefined
                direction?: 'AFTER' | 'BEFORE' | 'BOTH' | undefined
                journalFilter?:
                  | 'ALL'
                  | 'MISSED'
                  | 'DIALED'
                  | 'RECEIVED'
                  | 'DIVERTED'
                  | 'VOICEMAILS'
                  | 'UNHERAD_VOICEMAILS'
                  | undefined
              }
            }
            output: ConversationItem[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { telephonyConversationId: string } } & {
              query: {
                timestamp?: number | undefined
                numberOfEntries?: number | undefined
                direction?: 'AFTER' | 'BEFORE' | 'BOTH' | undefined
                journalFilter?:
                  | 'ALL'
                  | 'MISSED'
                  | 'DIALED'
                  | 'RECEIVED'
                  | 'DIVERTED'
                  | 'VOICEMAILS'
                  | 'UNHERAD_VOICEMAILS'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { telephonyConversationId: string } } & {
              query: {
                timestamp?: number | undefined
                numberOfEntries?: number | undefined
                direction?: 'AFTER' | 'BEFORE' | 'BOTH' | undefined
                journalFilter?:
                  | 'ALL'
                  | 'MISSED'
                  | 'DIALED'
                  | 'RECEIVED'
                  | 'DIVERTED'
                  | 'VOICEMAILS'
                  | 'UNHERAD_VOICEMAILS'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { telephonyConversationId: string } } & {
              query: {
                timestamp?: number | undefined
                numberOfEntries?: number | undefined
                direction?: 'AFTER' | 'BEFORE' | 'BOTH' | undefined
                journalFilter?:
                  | 'ALL'
                  | 'MISSED'
                  | 'DIALED'
                  | 'RECEIVED'
                  | 'DIVERTED'
                  | 'VOICEMAILS'
                  | 'UNHERAD_VOICEMAILS'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users': {
      $get:
        | { input: { query: { name: string } }; output: User[]; outputFormat: 'json'; status: 200 }
        | { input: { query: { name: string } }; output: User[]; outputFormat: 'text'; status: 200 }
        | { input: { query: { name: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { name: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { name: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { name: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { query: { name: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/users/labels': {
      $get:
        | { input: {}; output: Label[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
      $post:
        | {
            input: { json: { label: string } } & { form: { label: string } }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { label: string } } & { form: { label: string } }
            output: Label
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: { label: string } } & { form: { label: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: { label: string } } & { form: { label: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { json: { label: string } } & { form: { label: string } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/labels/:labelId': {
      $delete:
        | {
            input: { param: { labelId: string } }
            output: Label
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { labelId: string } }
            output: Label
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { labelId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { labelId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { labelId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { labelId: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/users/list': {
      $get:
        | {
            input: {
              query: {
                name: string[]
                returnFullUserInfo?: boolean | undefined
                secondaryLookup?: boolean | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name: string[]
                returnFullUserInfo?: boolean | undefined
                secondaryLookup?: boolean | undefined
              }
            }
            output: User[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name: string[]
                returnFullUserInfo?: boolean | undefined
                secondaryLookup?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                name: string[]
                returnFullUserInfo?: boolean | undefined
                secondaryLookup?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                name: string[]
                returnFullUserInfo?: boolean | undefined
                secondaryLookup?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                name: string[]
                returnFullUserInfo?: boolean | undefined
                secondaryLookup?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                name: string[]
                returnFullUserInfo?: boolean | undefined
                secondaryLookup?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/presence': {
      $get:
        | {
            input: { query: { userIds: string[] } }
            output: Presence[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userIds: string[] } }
            output: Presence[]
            outputFormat: 'text'
            status: 200
          }
        | { input: { query: { userIds: string[] } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { userIds: string[] } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { userIds: string[] } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { userIds: string[] } }; output: {}; outputFormat: string; status: 500 }
        | { input: { query: { userIds: string[] } }; output: {}; outputFormat: string; status: 503 }
      $put:
        | {
            input: {
              json: {
                clearDND?: boolean | undefined
                dndUntil?: string | undefined
                state: string
                statusMessage?: string | undefined
              }
            } & {
              form: {
                clearDND?: boolean | undefined
                dndUntil?: string | undefined
                state: string
                statusMessage?: string | undefined
              }
            }
            output: Presence
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                clearDND?: boolean | undefined
                dndUntil?: string | undefined
                state: string
                statusMessage?: string | undefined
              }
            } & {
              form: {
                clearDND?: boolean | undefined
                dndUntil?: string | undefined
                state: string
                statusMessage?: string | undefined
              }
            }
            output: Presence
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                clearDND?: boolean | undefined
                dndUntil?: string | undefined
                state: string
                statusMessage?: string | undefined
              }
            } & {
              form: {
                clearDND?: boolean | undefined
                dndUntil?: string | undefined
                state: string
                statusMessage?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                clearDND?: boolean | undefined
                dndUntil?: string | undefined
                state: string
                statusMessage?: string | undefined
              }
            } & {
              form: {
                clearDND?: boolean | undefined
                dndUntil?: string | undefined
                state: string
                statusMessage?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                clearDND?: boolean | undefined
                dndUntil?: string | undefined
                state: string
                statusMessage?: string | undefined
              }
            } & {
              form: {
                clearDND?: boolean | undefined
                dndUntil?: string | undefined
                state: string
                statusMessage?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              json: {
                clearDND?: boolean | undefined
                dndUntil?: string | undefined
                state: string
                statusMessage?: string | undefined
              }
            } & {
              form: {
                clearDND?: boolean | undefined
                dndUntil?: string | undefined
                state: string
                statusMessage?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/profile': {
      $get:
        | { input: {}; output: User; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
      $put:
        | {
            input: {
              json: {
                firstname?: string | undefined
                jobTitle?: string | undefined
                lastname?: string | undefined
                locale?:
                  | 'EN_US'
                  | 'DE_DE'
                  | 'EN_GB'
                  | 'ES_ES'
                  | 'FR_FR'
                  | 'IT_IT'
                  | 'RU_RU'
                  | 'ZH_HANS_CN'
                  | 'PT_BR'
                  | 'NL_NL'
                  | 'CA_ES'
                  | undefined
              }
            } & {
              form: {
                firstname?: string | undefined
                jobTitle?: string | undefined
                lastname?: string | undefined
                locale?:
                  | 'EN_US'
                  | 'DE_DE'
                  | 'EN_GB'
                  | 'ES_ES'
                  | 'FR_FR'
                  | 'IT_IT'
                  | 'RU_RU'
                  | 'ZH_HANS_CN'
                  | 'PT_BR'
                  | 'NL_NL'
                  | 'CA_ES'
                  | undefined
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                firstname?: string | undefined
                jobTitle?: string | undefined
                lastname?: string | undefined
                locale?:
                  | 'EN_US'
                  | 'DE_DE'
                  | 'EN_GB'
                  | 'ES_ES'
                  | 'FR_FR'
                  | 'IT_IT'
                  | 'RU_RU'
                  | 'ZH_HANS_CN'
                  | 'PT_BR'
                  | 'NL_NL'
                  | 'CA_ES'
                  | undefined
              }
            } & {
              form: {
                firstname?: string | undefined
                jobTitle?: string | undefined
                lastname?: string | undefined
                locale?:
                  | 'EN_US'
                  | 'DE_DE'
                  | 'EN_GB'
                  | 'ES_ES'
                  | 'FR_FR'
                  | 'IT_IT'
                  | 'RU_RU'
                  | 'ZH_HANS_CN'
                  | 'PT_BR'
                  | 'NL_NL'
                  | 'CA_ES'
                  | undefined
              }
            }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              json: {
                firstname?: string | undefined
                jobTitle?: string | undefined
                lastname?: string | undefined
                locale?:
                  | 'EN_US'
                  | 'DE_DE'
                  | 'EN_GB'
                  | 'ES_ES'
                  | 'FR_FR'
                  | 'IT_IT'
                  | 'RU_RU'
                  | 'ZH_HANS_CN'
                  | 'PT_BR'
                  | 'NL_NL'
                  | 'CA_ES'
                  | undefined
              }
            } & {
              form: {
                firstname?: string | undefined
                jobTitle?: string | undefined
                lastname?: string | undefined
                locale?:
                  | 'EN_US'
                  | 'DE_DE'
                  | 'EN_GB'
                  | 'ES_ES'
                  | 'FR_FR'
                  | 'IT_IT'
                  | 'RU_RU'
                  | 'ZH_HANS_CN'
                  | 'PT_BR'
                  | 'NL_NL'
                  | 'CA_ES'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                firstname?: string | undefined
                jobTitle?: string | undefined
                lastname?: string | undefined
                locale?:
                  | 'EN_US'
                  | 'DE_DE'
                  | 'EN_GB'
                  | 'ES_ES'
                  | 'FR_FR'
                  | 'IT_IT'
                  | 'RU_RU'
                  | 'ZH_HANS_CN'
                  | 'PT_BR'
                  | 'NL_NL'
                  | 'CA_ES'
                  | undefined
              }
            } & {
              form: {
                firstname?: string | undefined
                jobTitle?: string | undefined
                lastname?: string | undefined
                locale?:
                  | 'EN_US'
                  | 'DE_DE'
                  | 'EN_GB'
                  | 'ES_ES'
                  | 'FR_FR'
                  | 'IT_IT'
                  | 'RU_RU'
                  | 'ZH_HANS_CN'
                  | 'PT_BR'
                  | 'NL_NL'
                  | 'CA_ES'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                firstname?: string | undefined
                jobTitle?: string | undefined
                lastname?: string | undefined
                locale?:
                  | 'EN_US'
                  | 'DE_DE'
                  | 'EN_GB'
                  | 'ES_ES'
                  | 'FR_FR'
                  | 'IT_IT'
                  | 'RU_RU'
                  | 'ZH_HANS_CN'
                  | 'PT_BR'
                  | 'NL_NL'
                  | 'CA_ES'
                  | undefined
              }
            } & {
              form: {
                firstname?: string | undefined
                jobTitle?: string | undefined
                lastname?: string | undefined
                locale?:
                  | 'EN_US'
                  | 'DE_DE'
                  | 'EN_GB'
                  | 'ES_ES'
                  | 'FR_FR'
                  | 'IT_IT'
                  | 'RU_RU'
                  | 'ZH_HANS_CN'
                  | 'PT_BR'
                  | 'NL_NL'
                  | 'CA_ES'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              json: {
                firstname?: string | undefined
                jobTitle?: string | undefined
                lastname?: string | undefined
                locale?:
                  | 'EN_US'
                  | 'DE_DE'
                  | 'EN_GB'
                  | 'ES_ES'
                  | 'FR_FR'
                  | 'IT_IT'
                  | 'RU_RU'
                  | 'ZH_HANS_CN'
                  | 'PT_BR'
                  | 'NL_NL'
                  | 'CA_ES'
                  | undefined
              }
            } & {
              form: {
                firstname?: string | undefined
                jobTitle?: string | undefined
                lastname?: string | undefined
                locale?:
                  | 'EN_US'
                  | 'DE_DE'
                  | 'EN_GB'
                  | 'ES_ES'
                  | 'FR_FR'
                  | 'IT_IT'
                  | 'RU_RU'
                  | 'ZH_HANS_CN'
                  | 'PT_BR'
                  | 'NL_NL'
                  | 'CA_ES'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/supportinfo': {
      $get:
        | { input: {}; output: SupportInfo; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/users/:emailAddress/getUserByEmail': {
      $get:
        | {
            input: { param: { emailAddress: string } } & {
              query: { secondaryLookup?: boolean | undefined }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { emailAddress: string } } & {
              query: { secondaryLookup?: boolean | undefined }
            }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { emailAddress: string } } & {
              query: { secondaryLookup?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { emailAddress: string } } & {
              query: { secondaryLookup?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { emailAddress: string } } & {
              query: { secondaryLookup?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { emailAddress: string } } & {
              query: { secondaryLookup?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/users/:id': {
      $get:
        | { input: { param: { id: string } }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: User; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/users/:id/presence': {
      $get:
        | { input: { param: { id: string } }; output: Presence; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Presence; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/webhooks': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
      $get:
        | { input: {}; output: WebHook[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
      $post:
        | {
            input: {
              json: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            } & {
              form: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            }
            output: WebHook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            } & {
              form: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            }
            output: WebHook
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              json: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            } & {
              form: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            } & {
              form: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            } & {
              form: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            } & {
              form: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              json: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            } & {
              form: {
                filter: (
                  | 'CONVERSATION.CREATE'
                  | 'CONVERSATION.UPDATE'
                  | 'CONVERSATION.ADD_ITEM'
                  | 'CONVERSATION.UPDATE_ITEM'
                  | 'USER.INCOMING_CALL'
                  | 'USER.USER_UPDATED'
                  | 'USER.USER_SETTING_UPDATED'
                  | 'USER.SUBMIT_FORM_DATA'
                )[]
                url: string
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/webhooks/incoming/create/:conversationId': {
      $post:
        | {
            input: { param: { conversationId: string } } & {
              query: {
                name?: string | undefined
                userId?: string | undefined
                description?: string | undefined
              }
            }
            output: IncomingWebhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversationId: string } } & {
              query: {
                name?: string | undefined
                userId?: string | undefined
                description?: string | undefined
              }
            }
            output: IncomingWebhook
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { conversationId: string } } & {
              query: {
                name?: string | undefined
                userId?: string | undefined
                description?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { conversationId: string } } & {
              query: {
                name?: string | undefined
                userId?: string | undefined
                description?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { conversationId: string } } & {
              query: {
                name?: string | undefined
                userId?: string | undefined
                description?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { conversationId: string } } & {
              query: {
                name?: string | undefined
                userId?: string | undefined
                description?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/webhooks/incoming/user/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & {
              query: { pagesize?: number | undefined; searchpointer?: string | undefined }
            }
            output: IncomingWebhook[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { pagesize?: number | undefined; searchpointer?: string | undefined }
            }
            output: IncomingWebhook[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              query: { pagesize?: number | undefined; searchpointer?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              query: { pagesize?: number | undefined; searchpointer?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { userId: string } } & {
              query: { pagesize?: number | undefined; searchpointer?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { userId: string } } & {
              query: { pagesize?: number | undefined; searchpointer?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/webhooks/incoming/:webhookId': {
      $delete:
        | { input: { param: { webhookId: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { webhookId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { webhookId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { webhookId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { webhookId: string } }; output: {}; outputFormat: string; status: 503 }
      $post:
        | {
            input: { param: { webhookId: string } } & { json: IncomingWebhookSlackMessage } & {
              form: IncomingWebhookSlackMessage
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { webhookId: string } } & { json: IncomingWebhookSlackMessage } & {
              form: IncomingWebhookSlackMessage
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { webhookId: string } } & { json: IncomingWebhookSlackMessage } & {
              form: IncomingWebhookSlackMessage
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { webhookId: string } } & { json: IncomingWebhookSlackMessage } & {
              form: IncomingWebhookSlackMessage
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { webhookId: string } } & { json: IncomingWebhookSlackMessage } & {
              form: IncomingWebhookSlackMessage
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/webhooks/presence': {
      $post:
        | {
            input: { json: { url: string; userIds: string[] } } & {
              form: { url: string; userIds: string[] }
            }
            output: WebHook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { url: string; userIds: string[] } } & {
              form: { url: string; userIds: string[] }
            }
            output: WebHook
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: { url: string; userIds: string[] } } & {
              form: { url: string; userIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { url: string; userIds: string[] } } & {
              form: { url: string; userIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: { url: string; userIds: string[] } } & {
              form: { url: string; userIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: { url: string; userIds: string[] } } & {
              form: { url: string; userIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { json: { url: string; userIds: string[] } } & {
              form: { url: string; userIds: string[] }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/webhooks/presence/:id': {
      $put:
        | {
            input: { param: { id: string } } & {
              json: { url?: string | undefined; userIds?: string[] | undefined }
            } & { form: { url?: string | undefined; userIds?: string[] | undefined } }
            output: WebHook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { url?: string | undefined; userIds?: string[] | undefined }
            } & { form: { url?: string | undefined; userIds?: string[] | undefined } }
            output: WebHook
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { url?: string | undefined; userIds?: string[] | undefined }
            } & { form: { url?: string | undefined; userIds?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { url?: string | undefined; userIds?: string[] | undefined }
            } & { form: { url?: string | undefined; userIds?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { url?: string | undefined; userIds?: string[] | undefined }
            } & { form: { url?: string | undefined; userIds?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: { url?: string | undefined; userIds?: string[] | undefined }
            } & { form: { url?: string | undefined; userIds?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: { url?: string | undefined; userIds?: string[] | undefined }
            } & { form: { url?: string | undefined; userIds?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              json: { url?: string | undefined; userIds?: string[] | undefined }
            } & { form: { url?: string | undefined; userIds?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/webhooks/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 503 }
      $get:
        | { input: { param: { id: string } }; output: WebHook; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: WebHook; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 503 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            } & {
              form: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            }
            output: WebHook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            } & {
              form: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            }
            output: WebHook
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            } & {
              form: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            } & {
              form: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            } & {
              form: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            } & {
              form: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              json: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            } & {
              form: {
                filter?:
                  | (
                      | 'CONVERSATION.CREATE'
                      | 'CONVERSATION.UPDATE'
                      | 'CONVERSATION.ADD_ITEM'
                      | 'CONVERSATION.UPDATE_ITEM'
                      | 'USER.INCOMING_CALL'
                      | 'USER.USER_UPDATED'
                      | 'USER.USER_SETTING_UPDATED'
                      | 'USER.SUBMIT_FORM_DATA'
                    )[]
                  | undefined
                url?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  },
  '/'
>
export default routes
