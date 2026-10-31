import { createRoute, z } from '@hono/zod-openapi'

const AddParticipantsSearchResultSchema = z
  .object({
    department: z
      .string()
      .exactOptional()
      .openapi({ description: 'The department of the participant' }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the participant' }),
    isMember: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'is the participant a member, true or false' }),
    jobTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The job title of the participant' }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the participant' }),
    smallImageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The uri of the small picture of the participant' }),
    tenantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'the tenant id of the participant' }),
    userId: z.string().exactOptional().openapi({ description: 'The id of the participant' }),
  })
  .openapi({ required: [] })
  .openapi('AddParticipantsSearchResult')

const AttachmentSchema = z
  .object({
    creationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'The creation time of the attachment.' }),
    creatorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the creator of the attachment.' }),
    deleteUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The delete URL of the attachment.' }),
    fileId: z.string().exactOptional().openapi({ description: 'The id of the attachment file.' }),
    fileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the attachment file.' }),
    itemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The item id to which the attachment is attached.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The mime type of the attachment file.' }),
    modificationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'The modification time of the attachment.' }),
    size: z.number().exactOptional().openapi({ description: 'The size of the attachment file.' }),
    url: z.string().exactOptional().openapi({ description: 'The URL of the attachment.' }),
  })
  .openapi({ required: [] })
  .openapi('Attachment')

const SpaceSchema = z
  .object({
    accessModeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the access mode type of the space.' }),
    creationTime: z.number().exactOptional().openapi({ description: 'The space creation time.' }),
    creatorId: z.string().exactOptional().openapi({ description: 'The ID of the space creator.' }),
    defaultRole: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the default role of a new participant.' }),
    description: z.string().exactOptional().openapi({ description: 'The space description.' }),
    largePictureBase64: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Base64 encoded image that can be set during the creation and the update of a space.',
      }),
    largePictureContentType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content type of the image.' }),
    largePictureId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file id of the large version of the picture.' }),
    lastContentCreationTime: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Time stamp when the last content (topic / reply) was created within this space.',
      }),
    lastContentCreatorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'User ID of the user which created the last content.' }),
    modificationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'The space modification time.' }),
    name: z.string().exactOptional().openapi({ description: 'The unique space name.' }),
    numberOfExternalParticipants: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of external participants in the space.' }),
    numberOfParticipants: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of participants in the space.' }),
    numberOfPinnedTopics: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of pinned topics in the space.' }),
    numberOfReplies: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of replies in the space.' }),
    numberOfTopics: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of topics in the space.' }),
    ownerId: z.string().exactOptional().openapi({ description: 'The ID of the space owner.' }),
    smallPictureBase64: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Base64 encoded image that can be set during the creation and the update of a space.',
      }),
    smallPictureContentType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content type of the image.' }),
    smallPictureId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file id of the small version of the picture.' }),
    spaceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique space ID generated by the backend during the creation of the space.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the status of the space.' }),
    tags: z.array(z.string()).exactOptional().openapi({ description: 'The list of space tags.' }),
    tenantId: z.string().exactOptional().openapi({ description: 'The ID of the space tenant.' }),
    type: z.string().exactOptional().openapi({ description: 'The name of the space type.' }),
  })
  .openapi({ required: [] })
  .openapi('Space')

const BasicSearchResultSchema = z
  .object({
    spaces: z.array(SpaceSchema).exactOptional().openapi({ description: 'List of spaces' }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status of the search (NORESULT, ERROR, TIMEOUT, MORERESULT)' }),
  })
  .openapi({ required: [] })
  .openapi('BasicSearchResult')

const BridgeNumberSchema = z
  .object({
    bridgeNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number that has to be called to join the real time session of a conversation',
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country where the bridge is hosted' }),
    isMostUsed: z.boolean().exactOptional().openapi({ description: 'Is most used' }),
    locale: z.string().exactOptional().openapi({ description: 'The locale of the bridge' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name / identifier of the bridge' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Information of the billing for the call, i.e. if the caller has to pay or not for the call',
      }),
  })
  .openapi({ required: [] })
  .openapi('BridgeNumber')

const ConversationSchema = z
  .object({
    avatar: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the small avatar image of the conversation' }),
    avatarLarge: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the large avatar image of the conversation' }),
    convId: z.string().exactOptional().openapi({ description: 'The ID of the conversation' }),
    creationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'UTC timestamp when the conversation was created' }),
    creatorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user who created the conversation' }),
    creatorTenantId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Circuit domain (tenant) where the creator of the conversation belongs to',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description of the conversation. This field is available only for conversations with type COMMUNITY',
      }),
    isGuestAccessDisabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether guest access to the conversation is disabled or not',
      }),
    isModerated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the conversation is moderated or not. In a moderated conversation only participants who have been assigned the role of a moderator are allowed to add or remove participants into the conversation',
      }),
    modificationTime: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'UTC timestamp when the conversation was modified. A conversation is modified when any of the conversation object fields change but not when conversation items are added or edited',
      }),
    participants: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of active participants' }),
    topic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of the conversation. Conversations of type DIRECT cannot have a title',
      }),
    topicPlaceholder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of the conversation. Conversations of type DIRECT cannot have a title',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the conversation. It can be one of the following: DIRECT, GROUP, COMMUNITY or LARGE',
      }),
  })
  .openapi({ required: [] })
  .openapi('Conversation')

const ConversationDetailsSchema = z
  .object({
    bridgeNumbers: z
      .array(BridgeNumberSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of bridge numbers which can be used to dial in to the real time session via phone',
      }),
    convId: z.string().exactOptional().openapi({ description: 'missing documentation' }),
    conversationCreatorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user ID of the conversation creator' }),
    isModerationAllowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the conversation is allowed to be moderated' }),
    isRecordingAllowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the conversation is allowed to be recorded' }),
    link: z
      .string()
      .exactOptional()
      .openapi({ description: 'A link that can be used in a browser to join the session' }),
    pin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PIN to join a real time session via phone' }),
  })
  .openapi({ required: [] })
  .openapi('ConversationDetails')

const RtcEndedSchema = z
  .object({
    duration: z.number().exactOptional().openapi({ description: 'The duration of the call.' }),
    maxNumberOfAttendees: z
      .number()
      .exactOptional()
      .openapi({ description: 'The maximum number of attendees during a call.' }),
    pickFromParticipant: z
      .string()
      .exactOptional()
      .openapi({ description: 'UserID of the pick from participant.' }),
  })
  .openapi({ required: [] })
  .openapi('RtcEnded')

const RtcMovedSchema = z
  .object({
    conversationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the conversation moved from or to.' }),
    direction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Moved from or to conversation.' }),
  })
  .openapi({ required: [] })
  .openapi('RtcMoved')

const RtcParticipantSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the participant.' }),
    fullyQualifiedNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'missing documentation' }),
    phoneNumber: z.string().exactOptional().openapi({ description: 'missing documentation' }),
    resolvedUser: z.any().exactOptional().openapi({ description: 'missing documentation' }),
    type: z.string().exactOptional().openapi({ description: 'The RTC type of the participant.' }),
    userId: z.string().exactOptional().openapi({ description: 'The ID of the participant.' }),
  })
  .openapi({ required: [] })
  .openapi('RtcParticipant')

const RtcItemSchema = z
  .object({
    ended: RtcEndedSchema.exactOptional(),
    missed: z.string().exactOptional().openapi({ description: 'Indicates a missed call.' }),
    moved: RtcMovedSchema.exactOptional(),
    rtcParticipants: z
      .array(RtcParticipantSchema)
      .exactOptional()
      .openapi({ description: 'Participants of the call.' }),
    type: z.string().exactOptional().openapi({ description: 'The type of the RTC item.' }),
  })
  .openapi({ required: [] })
  .openapi('RtcItem')

const SystemItemSchema = z
  .object({
    affectedParticipants: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List off affected participants (user ID of the Circuit user) in case the item type PARTICIPANT_ADDED or PARTICIPANT_REMOVED',
      }),
    newTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Filled with the new topic of a conversation if the type of the item is CONVERSATION_RENAMED.',
      }),
    oldTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Filled with the previous topic of a conversation if the type of the item is CONVERSATION_RENAMED.',
      }),
    type: z.string().exactOptional().openapi({ description: 'The type of the system item' }),
  })
  .openapi({ required: [] })
  .openapi('SystemItem')

const PreviewSchema = z
  .object({
    imageURI: z.string().exactOptional().openapi({ description: 'n/a' }),
    srcURL: z.string().exactOptional().openapi({ description: 'n/a' }),
    title: z.string().exactOptional().openapi({ description: 'n/a' }),
    type: z.string().exactOptional().openapi({ description: 'n/a' }),
  })
  .openapi({ required: [] })
  .openapi('Preview')

const ConversationTextItemSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'The content of the text item' }),
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the text item. It can be one of the following: RICH (with HTML content) or PLAIN (only text)',
      }),
    formMetaData: z.string().exactOptional().openapi({ description: 'The meta data form' }),
    isWebhookMessage: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is this a webhook message?' }),
    likedUserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of IDs of the users who liked the item' }),
    parentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the parent item of the text item. This field is optional and can be used for thread views',
      }),
    preview: PreviewSchema.exactOptional(),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The state of the text item. It can be one of the following: CREATED (which denotes that it was not modified since its creation), EDITED (which denotes that the creator of this item modified the item) or DELETED (which denotes that the item itself exists but its content was removed)',
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'TThe subject of the text item. This field is optional and maybe filled when creating the text item',
      }),
  })
  .openapi({ required: [] })
  .openapi('ConversationTextItem')

const ConversationItemSchema = z
  .object({
    attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({ description: 'Array of files attached to the item' }),
    convId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the conversation the item belongs to' }),
    creationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'UTC timestamp when the item was created' }),
    creatorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user who created the conversation item' }),
    includeInUnreadCount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the item is included in the unread message count',
      }),
    itemId: z.string().exactOptional().openapi({ description: 'The ID of the item' }),
    modificationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'UTC timestamp when the conversation was modified' }),
    rtc: RtcItemSchema.exactOptional(),
    system: SystemItemSchema.exactOptional(),
    text: ConversationTextItemSchema.exactOptional(),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the conversation item. It can be one of the following TEXT, SYSTEM or RTC',
      }),
  })
  .openapi({ required: [] })
  .openapi('ConversationItem')

const ConversationParticipantSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the participant.' }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the participant.' }),
    isDeleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the participant is deleted.' }),
    largeImageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The large image uri of the participant.' }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the participant.' }),
    smallImageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The small image uri of the participant;' }),
    type: z.string().exactOptional().openapi({ description: 'The type of the participant' }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique user id of the participant.' }),
  })
  .openapi({ required: [] })
  .openapi('ConversationParticipant')

const ConversationParticipantsListSchema = z
  .object({
    hasMore: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'are more results available, then start another search with finer query',
      }),
    participantList: z
      .array(ConversationParticipantSchema)
      .exactOptional()
      .openapi({ description: 'list of participants' }),
    searchPointer: z
      .string()
      .exactOptional()
      .openapi({ description: 'pointer for stored search ' }),
  })
  .openapi({ required: [] })
  .openapi('ConversationParticipantsList')

const ConversationSearchResultItemSchema = z
  .object({
    convId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the conversation to which the matching items belong.' }),
    itemIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The conversation items which contain the search result. The list maybe empty in case a hit was found for the conversation related data like topic or participants.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ConversationSearchResultItem')

const ConversationSearchResultSchema = z
  .object({
    matchingConversations: z
      .array(ConversationSearchResultItemSchema)
      .exactOptional()
      .openapi({
        description: 'A list of result items for conversations that match the search term.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ConversationSearchResult')

const ConversationsPageSchema = z
  .object({
    conversationList: z
      .array(ConversationSchema)
      .exactOptional()
      .openapi({ description: 'List of conversations' }),
    hasMore: z.any().exactOptional().openapi({ description: 'Has more pages of conversations' }),
    nextPagePointer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pointer to the next set page of conversations' }),
  })
  .openapi({ required: [] })
  .openapi('ConversationsPage')

const DirectoryResultSchema = z
  .object({
    hasMore: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'are more results available, than start another search' }),
    searchPointer: z
      .string()
      .exactOptional()
      .openapi({ description: 'pointer for stored search ' }),
    spaces: z.array(SpaceSchema).exactOptional().openapi({ description: 'list of spaces' }),
  })
  .openapi({ required: [] })
  .openapi('DirectoryResult')

const SpaceAttachmentSchema = z
  .object({
    creationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'time this item has been created' }),
    creatorId: z.string().exactOptional().openapi({ description: 'the id of the creator' }),
    fileId: z.string().exactOptional().openapi({ description: 'the id of the field' }),
    fileName: z.string().exactOptional().openapi({ description: 'name of the file' }),
    inlineUsage: z.boolean().exactOptional().openapi({ description: 'is inline usage allowed' }),
    itemId: z.string().exactOptional().openapi({ description: 'id of the item' }),
    layout: z.string().exactOptional().openapi({ description: 'layout' }),
    mimeType: z.string().exactOptional().openapi({ description: 'the media type' }),
    modificationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'the time this item has been ben modified' }),
    size: z.number().exactOptional().openapi({ description: 'size of this file' }),
    spaceId: z.string().exactOptional().openapi({ description: 'id of the space' }),
    thumbnailId: z.string().exactOptional().openapi({ description: 'the id of the tumbnail' }),
  })
  .openapi({ required: [] })
  .openapi('SpaceAttachment')

const SpaceExternalAttachmentSchema = z
  .object({
    attachment: SpaceAttachmentSchema.exactOptional(),
    downloadLocation: z
      .string()
      .exactOptional()
      .openapi({ description: 'the location of the download' }),
    previewLocation: z
      .string()
      .exactOptional()
      .openapi({ description: 'the location of the preview' }),
    shareLinkToken: z.string().exactOptional().openapi({ description: 'The share link token' }),
    type: z.string().exactOptional().openapi({ description: 'the type' }),
  })
  .openapi({ required: [] })
  .openapi('SpaceExternalAttachment')

const SpaceItemPreviewSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of this preview' }),
    html: z.string().exactOptional().openapi({ description: 'Html code' }),
    imageURI: z.string().exactOptional().openapi({ description: 'The URI of the image' }),
    provider: z.string().exactOptional().openapi({ description: 'the provider' }),
    srcURL: z.string().exactOptional().openapi({ description: 'The URL of the source' }),
    title: z.string().exactOptional().openapi({ description: 'The title of this preview' }),
    type: z.string().exactOptional().openapi({ description: 'The type of this preview' }),
  })
  .openapi({ required: [] })
  .openapi('SpaceItemPreview')

const SharedItemSchema = z
  .object({
    containerId: z.string().exactOptional().openapi({ description: 'The Id of the container' }),
    containerName: z.string().exactOptional().openapi({ description: 'Name of the container' }),
    containerType: z.string().exactOptional().openapi({ description: 'Type of the container' }),
    creationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'The time this Item has been created' }),
    creatorId: z.string().exactOptional().openapi({ description: 'The Id of the creator' }),
    itemId: z.string().exactOptional().openapi({ description: 'Id of the item' }),
    parentTopicId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Id of the parent topic' }),
    subType: z.string().exactOptional().openapi({ description: 'The subtype' }),
  })
  .openapi({ required: [] })
  .openapi('SharedItem')

const SpaceItemSchema = z
  .object({
    Status: z.string().exactOptional().openapi({ description: 'The Status of this item' }),
    attachments: z
      .array(SpaceAttachmentSchema)
      .exactOptional()
      .openapi({ description: 'The list of attachments' }),
    complex: z.boolean().exactOptional().openapi({ description: 'Is this item complex' }),
    content: z.string().exactOptional().openapi({ description: 'The content of this item' }),
    creationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'The time this item got created' }),
    creatorId: z.string().exactOptional().openapi({ description: 'The Id of the creator' }),
    deletedBy: z
      .string()
      .exactOptional()
      .openapi({ description: 'Incase this item got deleted, the id of the deletor' }),
    externalAttachments: z
      .array(SpaceExternalAttachmentSchema)
      .exactOptional()
      .openapi({ description: 'A list of external attachments' }),
    formMetaData: z
      .string()
      .exactOptional()
      .openapi({ description: 'Incase there is FormMetaData' }),
    itemId: z.string().exactOptional().openapi({ description: 'the Id of this item' }),
    mentionedUsers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of userIds who have been mentioned in this item' }),
    modificationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'the time this item got modified' }),
    numberOfLikes: z.number().exactOptional().openapi({ description: 'The number of likes' }),
    previews: z
      .array(SpaceItemPreviewSchema)
      .exactOptional()
      .openapi({ description: 'A list of previews' }),
    sharedItems: z
      .array(SharedItemSchema)
      .exactOptional()
      .openapi({ description: 'missing documentation' }),
    spaceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'the Id of the space containing this item' }),
    tenantId: z.string().exactOptional().openapi({ description: 'the Id of the tenant' }),
  })
  .openapi({ required: [] })
  .openapi('SpaceItem')

const FlaggedItemSchema = z
  .object({ item: SpaceItemSchema.exactOptional(), parentItem: SpaceItemSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FlaggedItem')

const FlaggedItemsResultSchema = z
  .object({
    flaggedItems: z
      .array(FlaggedItemSchema)
      .exactOptional()
      .openapi({ description: 'A list of flagged items' }),
    hasMore: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'More results available (true-use searchpointer for next search/false)',
      }),
    searchPointer: z.string().exactOptional().openapi({ description: 'The searchpointer' }),
  })
  .openapi({ required: [] })
  .openapi('FlaggedItemsResult')

const GetSpacesResultSchema = z.object({}).openapi('GetSpacesResult')

const IncomingWebhookSchema = z
  .object({
    conversationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The conversation where the posts go to' }),
    creationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Milliseconds since 1.1.1900 when the hook was created' }),
    creatorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Th e user who created the webhook' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short plain text to describe the webhook' }),
    modificationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Milliseconds since 1.1.1900 when the hook was modified' }),
    name: z.string().exactOptional().openapi({ description: 'A name to identify the webhook' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Status may be ENABLED or DISABLED. A disabled hook cannot be used',
      }),
    tenantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tenant where the conversation and users belong to' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url where the webhokk can be used' }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user who will occur as author of the posts' }),
    webhookId: z.string().exactOptional().openapi({ description: 'Unique id of the webhook' }),
  })
  .openapi({ required: [] })
  .openapi('IncomingWebhook')

const IncomingWebhookSlackMessageSchema = z
  .object({
    fileURL: z.string().exactOptional().openapi({ description: 'missing documentation' }),
    filename: z.string().exactOptional().openapi({ description: 'missing documentation' }),
    markdown: z.boolean().exactOptional().openapi({ description: 'missing documentation' }),
    subject: z.string().exactOptional().openapi({ description: 'missing documentation' }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text which will occur in the conversation. May contain formats like *bold* or _italic_',
      }),
  })
  .openapi({ required: [] })
  .openapi('IncomingWebhookSlackMessage')

const LabelSchema = z
  .object({
    labelId: z.string().exactOptional().openapi({ description: 'The unique ID of the label' }),
    value: z.string().exactOptional().openapi({ description: 'The clear text value' }),
  })
  .openapi({ required: [] })
  .openapi('Label')

const LabelIdsSchema = z
  .object({
    labelIds: z.array(z.string()).exactOptional().openapi({ description: 'A list of label ids.' }),
  })
  .openapi({ required: [] })
  .openapi('LabelIds')

const ParticipantSchema = z
  .object({
    creationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Time when the participant was added to the space' }),
    labelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of label IDs of all the labels assigned to the space.' }),
    lastContentCreationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Time stamp when user last created content in the space.' }),
    lastReadTimestamp: z
      .number()
      .exactOptional()
      .openapi({ description: 'Last time stamp when the user read content in this space.' }),
    modificationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Time when the participant was changed last.' }),
    numberOfReplies: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of replies in the space created by this participant.' }),
    numberOfTopics: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of topics in the space created by this participant.' }),
    role: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the role of the participant.' }),
    spaceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the space to which the participant.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the state of the participant;' }),
    tenantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique tenant id of the participant.' }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique user id of the participant.' }),
  })
  .openapi({ required: [] })
  .openapi('Participant')

const ParticipantAddResultSchema = z.object({}).openapi('ParticipantAddResult')

const ParticipantSearchResultSchema = z
  .object({
    creationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Time when the participant was added to the space' }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the participant' }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the participant' }),
    modificationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Time when the participant was changed last.' }),
    numberOfReplies: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of replies in the space created by this participant.' }),
    numberOfTopics: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of topics in the space created by this participant.' }),
    role: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the role of the participant' }),
    smallImageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The uri of the small picture of the participant' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the state of the participant' }),
    tenantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'the tenant id of the participant' }),
    userId: z.string().exactOptional().openapi({ description: 'The id of the participant' }),
  })
  .openapi({ required: [] })
  .openapi('ParticipantSearchResult')

const ParticipantSearchResultLargeSchema = z
  .object({
    creationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Time when the participant was added to the space' }),
    department: z
      .string()
      .exactOptional()
      .openapi({ description: 'The department of the participant' }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the participant' }),
    isMember: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the participant a member of the space' }),
    jobDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The job description of the participant' }),
    lastContentCreationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'The last time the participant created content.' }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the participant' }),
    modificationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Time when the participant was changed last.' }),
    numberOfReplies: z.number().exactOptional().openapi({ description: 'The number of replies' }),
    numberOfTopics: z.number().exactOptional().openapi({ description: 'The number of topics' }),
    reason: z.string().exactOptional().openapi({ description: 'The reason of it all (42)' }),
    role: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the role of the participant' }),
    smallImageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The uri of the small picture of the participant' }),
    spaceId: z.string().exactOptional().openapi({ description: 'The id of the space' }),
    state: z.string().exactOptional().openapi({ description: 'The name of the state ' }),
    tenantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'the tenant id of the participant' }),
    userId: z.string().exactOptional().openapi({ description: 'The id of the participant' }),
  })
  .openapi({ required: [] })
  .openapi('ParticipantSearchResultLarge')

const ParticipantSpaceWrapperSchema = z.object({}).openapi('ParticipantSpaceWrapper')

const ParticipantsImportDataResultSchema = z
  .object({
    actualNumberOfImportedParticipants: z
      .number()
      .exactOptional()
      .openapi({ description: 'Actual number of imported participants' }),
    estimatedImportDuration: z
      .number()
      .exactOptional()
      .openapi({ description: 'Estimated import duration' }),
    importEndDate: z.number().exactOptional().openapi({ description: 'Import end date' }),
    importFileId: z.string().exactOptional().openapi({ description: 'The file id of the import' }),
    importFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the import file' }),
    importProgress: z
      .number()
      .exactOptional()
      .openapi({ description: 'The progress of the import' }),
    importStartDate: z.number().exactOptional().openapi({ description: 'Import start date' }),
    importStatus: z.string().exactOptional().openapi({ description: 'The status of the import' }),
    plannedNumberOfImportedParticipants: z
      .number()
      .exactOptional()
      .openapi({ description: 'Planned number of imported participants' }),
    resultFileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file id of the result file' }),
    resultFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the result file' }),
  })
  .openapi({ required: [] })
  .openapi('ParticipantsImportDataResult')

const ParticipantsLikeSchema = z
  .object({
    firstName: z.string().exactOptional().openapi({ description: 'The first name of the user' }),
    largeImageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The large image uri of the user' }),
    lastName: z.string().exactOptional().openapi({ description: 'The last name of the user' }),
    smallImageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The small image uri of the user' }),
    userId: z.string().exactOptional().openapi({ description: 'The id of the user' }),
  })
  .openapi({ required: [] })
  .openapi('ParticipantsLike')

const ParticipantsLikeResultSchema = z
  .object({
    hasMore: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'More results available (true-use searchpointer for next search/false)',
      }),
    participants: z
      .array(ParticipantsLikeSchema)
      .exactOptional()
      .openapi({ description: 'A list of participants who like the topic' }),
    searchPointer: z.string().exactOptional().openapi({ description: 'The searchpointer' }),
  })
  .openapi({ required: [] })
  .openapi('ParticipantsLikeResult')

const ParticipantsSearchResultSchema = z
  .object({
    hasMore: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'are more results available, than start another search' }),
    participants: z
      .array(ParticipantSearchResultSchema)
      .exactOptional()
      .openapi({ description: 'list of participants' }),
    searchPointer: z
      .string()
      .exactOptional()
      .openapi({ description: 'pointer for stored search ' }),
  })
  .openapi({ required: [] })
  .openapi('ParticipantsSearchResult')

const ParticipantsSearchResultLargeSchema = z
  .object({
    hasMore: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'are more results available, then start another search with finer query',
      }),
    participants: z
      .array(ParticipantSearchResultLargeSchema)
      .exactOptional()
      .openapi({ description: 'list of participants' }),
    searchPointer: z
      .string()
      .exactOptional()
      .openapi({ description: 'pointer for stored search ' }),
  })
  .openapi({ required: [] })
  .openapi('ParticipantsSearchResultLarge')

const PinnedTopicSchema = z
  .object({
    conversationId: z.string().exactOptional().openapi({ description: '"ID of the conversation"' }),
    conversationItemId: z
      .string()
      .exactOptional()
      .openapi({ description: '"ID of the pinned topic"' }),
    pinnedTime: z
      .number()
      .exactOptional()
      .openapi({ description: '"The exact moment the Pinning was happening"' }),
  })
  .openapi({ required: [] })
  .openapi('PinnedTopic')

const PresenceSchema = z
  .object({
    dndUntil: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp until the DND state of the user is active' }),
    isOptedOut: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the user has opted out of their presence' }),
    latitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The latitude of the geo location of the user' }),
    locationText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The geo location of the user in clear text' }),
    longitude: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The longitude of the geo location of the user' }),
    mobile: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies whether the presence state is based on the state information of a mobile device or not',
      }),
    poor: z.boolean().exactOptional().openapi({ description: 'n/a' }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The presence state of the user. It can be one of the following: AVAILABLE, OFFLINE, AWAY, BUSY, or DND (Do-Not-Disturb)',
      }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'A free formed status message of the user' }),
    timeZoneOffset: z
      .number()
      .exactOptional()
      .openapi({ description: 'The timezone offset of the user compared to UTC' }),
    userId: z.string().exactOptional().openapi({ description: 'The ID of the user' }),
  })
  .openapi({ required: [] })
  .openapi('Presence')

const SpacePinnedTopicSchema = z
  .object({
    position: z.number().exactOptional().openapi({ description: 'The position of a pinned topic' }),
    subject: z.string().exactOptional().openapi({ description: 'The subject of a pinned topic' }),
    topicId: z.string().exactOptional().openapi({ description: 'The id of a pinned topic' }),
  })
  .openapi({ required: [] })
  .openapi('SpacePinnedTopic')

const SpaceReplySchema = z
  .object({
    parentTopicId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Id of the parent topic' }),
    spaceItem: SpaceItemSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SpaceReply')

const SpaceSearchResultDetailedSchema = z
  .object({
    fileIds: z.array(z.string()).exactOptional().openapi({ description: '=The list of file ids' }),
    itemIds: z.array(z.string()).exactOptional().openapi({ description: '=The list of items ids' }),
    spaceId: z.string().exactOptional().openapi({ description: 'The id of the space' }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status of the search (NORESULT, ERROR, TIMEOUT, MORERESULT)' }),
  })
  .openapi({ required: [] })
  .openapi('SpaceSearchResultDetailed')

const SpaceSearchResultDetailedBackSchema = z
  .object({
    resList: z
      .array(SpaceSearchResultDetailedSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of v2restspacesearchresultdetailedback containing spaceId, item ids and file ids',
      }),
  })
  .openapi({ required: [] })
  .openapi('SpaceSearchResultDetailedBack')

const SpaceTopicSchema = z
  .object({
    lastContentCreationTime: z
      .number()
      .exactOptional()
      .openapi({ description: 'The last time new content was created' }),
    lastContentCreatorId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Id of the last content creator' }),
    numberOfReplies: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of replies this topic has' }),
    pinned: z.boolean().exactOptional().openapi({ description: 'Is this topic pinned' }),
    spaceItem: SpaceItemSchema.exactOptional(),
    subject: z.string().exactOptional().openapi({ description: 'The subject of this topic' }),
    tags: z.array(z.string()).exactOptional().openapi({ description: 'The tags ' }),
  })
  .openapi({ required: [] })
  .openapi('SpaceTopic')

const SpaceTopicWithRepliesSchema = z
  .object({
    replies: z
      .array(SpaceReplySchema)
      .exactOptional()
      .openapi({ description: 'A List holding the replies for a topic' }),
    topic: SpaceTopicSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SpaceTopicWithReplies')

const SpacesSearchTermSchema = z
  .object({
    endTime: z.any().exactOptional().openapi({ description: 'The end time' }),
    scope: z.string().exactOptional().openapi({ description: 'The scope of the search' }),
    searchTerm: z.string().exactOptional().openapi({ description: 'The search term' }),
    startTime: z.any().exactOptional().openapi({ description: 'The start time' }),
  })
  .openapi({ required: [] })
  .openapi('SpacesSearchTerm')

const SpacesSearchTermResultSchema = z
  .object({
    resList: z
      .array(SpacesSearchTermSchema)
      .exactOptional()
      .openapi({ description: 'A list of space search terms.' }),
  })
  .openapi({ required: [] })
  .openapi('SpacesSearchTermResult')

const StringSchema = z
  .object({ CASE_INSENSITIVE_ORDER: z.any().exactOptional() })
  .openapi({ required: [] })
  .openapi('String')

const SupportInfoSchema = z
  .object({
    supportEmailAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the support' }),
    supportType: z.any().exactOptional().openapi({ description: 'The type of support (a number)' }),
  })
  .openapi({ required: [] })
  .openapi('SupportInfo')

const UserEmailAddressSchema = z
  .object({
    address: z.string().exactOptional().openapi({ description: 'the email address' }),
    type: z.string().exactOptional().openapi({ description: 'the type of the email address' }),
  })
  .openapi({ required: [] })
  .openapi('UserEmailAddress')

const UserPhoneNumberSchema = z
  .object({
    phoneNumber: z.string().exactOptional().openapi({ description: 'the phone number' }),
    type: z.string().exactOptional().openapi({ description: 'the type of the phone number' }),
  })
  .openapi({ required: [] })
  .openapi('UserPhoneNumber')

const UserSchema = z
  .object({
    avatar: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the small avatar picture.' }),
    avatarLarge: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the large avatar picture.' }),
    company: z.string().exactOptional().openapi({ description: "The name of the user's company" }),
    department: z.string().exactOptional().openapi({ description: 'missing documentation' }),
    displayName: z.string().exactOptional().openapi({ description: "The user's display name" }),
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The primary email address of the user' }),
    emailAddresses: z
      .array(UserEmailAddressSchema)
      .exactOptional()
      .openapi({ description: 'additional email addresses of the user' }),
    firstName: z.string().exactOptional().openapi({ description: 'The first name of the user' }),
    jobTitle: z.string().exactOptional().openapi({ description: 'The job title of the user' }),
    lastName: z.string().exactOptional().openapi({ description: 'The last name of the user' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'The locale of the user. (E.g. en-US, de-DE)' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'provisioned phone number of the user' }),
    phoneNumbers: z
      .array(UserPhoneNumberSchema)
      .exactOptional()
      .openapi({ description: 'additional phone numbers of the user' }),
    primaryTenantId: z.string().exactOptional().openapi({ description: 'The primary tenant id' }),
    secondaryEmailAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The secondary email address' }),
    secondaryTenantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The secondary tenant id' }),
    userId: z.string().exactOptional().openapi({ description: 'The ID of the user' }),
    userState: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state of the user, e.g. deleted' }),
    userType: z.string().exactOptional().openapi({ description: 'the type of the user' }),
  })
  .openapi({ required: [] })
  .openapi('User')

const V2DistributedClientInfoSchema = z
  .object({
    clientId: z.string().exactOptional().openapi({ description: 'The client id' }),
    clientVersion: z.string().exactOptional().openapi({ description: 'The version of the client' }),
    deviceSubtype: z.string().exactOptional().openapi({ description: 'The device sub type' }),
    deviceType: z.string().exactOptional().openapi({ description: 'The devicetype' }),
    hardwareModel: z.string().exactOptional().openapi({ description: 'The hardware model' }),
    homeNode: z.string().exactOptional().openapi({ description: 'The home node name' }),
    manufacturer: z.string().exactOptional().openapi({ description: 'The manufacturer' }),
    osVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the operating system' }),
    userId: z.string().exactOptional().openapi({ description: 'The user id' }),
  })
  .openapi({ required: [] })
  .openapi('V2DistributedClientInfo')

const WebHookSchema = z
  .object({
    creationTime: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The time when this WebHook was created. This does not necessary mean the time when an manifest file was created.',
      }),
    filter: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'An optional list of filter parameters for this webhook.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for this webhook. Can be used later to unregister the webhook.',
      }),
    subscriptionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The optional list of userids for which this webhook is subscribed, i.e. presence events for the user are forwarded to the WebHook callback URL.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of a WebHook. This can either be MANUAL or EXTENSION. While manual WebHooks are only temporary and for development only use, permanent ones (EXTENSION) will bemanaged by the system.',
      }),
    url: z.string().exactOptional().openapi({ description: 'The callback URL of this webhook.' }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user ID for which this webhook is subscribed, i.e. events for this user are forwarded to the WebHook callback URL.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WebHook')

const AddParticipantCommunityRequestBody = {
  content: {
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          participants: z
            .preprocess(
              (val) => (val === undefined || Array.isArray(val) ? val : [val]),
              z.array(z.string().max(6500)),
            )
            .openapi({
              description:
                'The IDs or the unique email addresses of the Circuit users that should to be added.',
            }),
        })
        .openapi({ required: ['participants'] }),
    },
  },
  required: true,
}

const OauthSecurityScheme = {
  flows: {
    implicit: {
      authorizationUrl: 'https://circuitsandbox.net/oauth/authorize',
      scopes: {
        ALL: 'allows full access to all functionalities of the REST API',
        CALLS: 'allows to start or join real time collaboration session',
        CALL_RECORDING: 'allows to record a call',
        CREATE_CONVERSATIONS_CONTENT: 'Create content of conversations',
        CREATE_SPACE_CONTENT: '*Originally missing*',
        DELETE_CONVERSATIONS_CONTENT: 'Delete content of conversations',
        DELETE_SPACE_CONTENT: '*Originally missing*',
        MANAGE_CONVERSATIONS: 'Manage conversations',
        MANAGE_PRESENCE: 'Manage presence state',
        MANAGE_SPACE: '*Originally missing*',
        MENTION_EVENT: 'allows to receive text item events in which the user was mentioned',
        MODERATE_CONVERSATIONS: 'MOderate conversations',
        ORGANIZE_CONVERSATIONS: 'Organize conversations',
        ORGANIZE_SPACE: '*Originally missing*',
        READ_CONVERSATIONS: 'allows to read conversations of the authenticated user',
        READ_SPACE: '*Originally missing*',
        READ_USER:
          'allows to read user information for all users that belong to the tenant of the authenticated user',
        READ_USER_PROFILE: 'allows to read the user profile of the authenticated user',
        SEARCH_CONVERSATIONS: 'Search conversations',
        UPDATE_CONVERSATION_CONTENT: 'Update content of conversations',
        UPDATE_SPACE_CONTENT: '*Originally missing*',
        USER_MANAGEMENT: 'allows to create, update and delete users',
        USER_TO_USER: 'User2User',
        WRITE_CONVERSATIONS:
          'allows to create and update conversations of the authenticated user or to post messages',
        WRITE_SPACE: '*Originally missing*',
        WRITE_USER_PROFILE: 'allows to update the user profile of the authenticated user',
      },
    },
  },
  type: 'oauth2',
}

export const getConversationsRoute = createRoute({
  method: 'get',
  path: '/conversations',
  tags: ['Conversations'],
  summary: 'Gets a list of conversations',
  description:
    'Gets a list of conversations and communities the authenticated user participates in.\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getConversations',
  request: {
    query: z.object({
      modTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'The modification time of the conversation in UTC format. During the query the conversations before (<i>default</i>) or after this timestamp are returned. In case no timestamp is specified the current server time in UTC is used, i.e. the last 25 modified conversations are returned',
            in: 'query',
            name: 'modTime',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      direction: z
        .enum(['BEFORE', 'AFTER'])
        .default('BEFORE')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The direction of the search based on the modification time. Valid values are either BEFORE (default) or AFTER',
            in: 'query',
            name: 'direction',
            required: false,
            schema: {
              default: 'BEFORE',
              enum: ['BEFORE', 'AFTER'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of returned results (default 25). The maximum allowed value is 100.',
            in: 'query',
            name: 'results',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The matching conversations',
      content: {
        'application/json': { schema: z.array(ConversationSchema) },
        'application/xml': { schema: z.array(ConversationSchema) },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const getConversationsByIdsRoute = createRoute({
  method: 'get',
  path: '/conversations/byIds',
  tags: ['Conversations'],
  summary: 'Gets conversations',
  description: 'Gets conversation based on the given IDs.\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getConversationsById',
  request: {
    query: z.object({
      convIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().max(2048)),
        )
        .openapi({
          param: {
            description: 'The array of IDs of the conversations which should be retrieved',
            explode: true,
            in: 'query',
            name: 'convIds',
            required: true,
            schema: { items: { maxLength: 2048, type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of existing conversations successfully retrieved.',
      content: {
        'application/json': { schema: z.array(ConversationSchema) },
        'application/xml': { schema: z.array(ConversationSchema) },
      },
    },
    400: { description: 'missing documentation' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const getConversationsCommunityRoute = createRoute({
  method: 'get',
  path: '/conversations/community',
  tags: ['Conversations'],
  summary: 'Gets a list of communities',
  description:
    'Gets a list of communities. This endpoint can be used to explore the communities the authenticated user could join.\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getCommunityConversations',
  request: {
    query: z.object({
      sort: z
        .enum(['ALPHABETICALLY', 'RECENT_ACTIVITY', 'POPULARITY'])
        .default('ALPHABETICALLY')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Defines the type of sorting for the community conversations (default is alphabetical)',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'ALPHABETICALLY',
              enum: ['ALPHABETICALLY', 'RECENT_ACTIVITY', 'POPULARITY'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      order: z
        .enum(['ASCENDING', 'DESCENDING'])
        .default('ASCENDING')
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines the ordering of the conversations (default is ascending)',
            in: 'query',
            name: 'order',
            required: false,
            schema: {
              default: 'ASCENDING',
              enum: ['ASCENDING', 'DESCENDING'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      includeOwn: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to false only conversations are returned where the user is no member of, otherwise all community conversations are returned',
            in: 'query',
            name: 'includeOwn',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(255),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The index of the conversation that is the first one that has to be returned. E.g. if a request starts with startIndex 40 and results 20 the conversations 40 to 60 are returned',
            in: 'query',
            name: 'startIndex',
            required: false,
            schema: { default: 0, format: 'int32', maximum: 255, minimum: 0, type: 'number' },
          },
        }),
      results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of returned results (default 25). The maximum allowed value is 100.',
            in: 'query',
            name: 'results',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The matching conversations',
      content: {
        'application/json': { schema: z.array(ConversationSchema) },
        'application/xml': { schema: z.array(ConversationSchema) },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul>a field constraint is violated</ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const postConversationsCommunityRoute = createRoute({
  method: 'post',
  path: '/conversations/community',
  tags: ['Conversations'],
  summary: 'Creates a community conversation',
  description:
    'Creates a community. Communities are open conversations that anyone in a Circuit domain (tenant) can join without having to be added by another user.\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'createCommunityConversation',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'An optional description for the community conversation' }),
              participants: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .exactOptional()
                .openapi({
                  description:
                    'list of participants that will be part of this conversation, specified by the Circuit user ID or the unique email address. At least one participant needs to be added',
                }),
              topic: z
                .string()
                .max(2048)
                .openapi({
                  description:
                    'An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)',
                }),
            })
            .openapi({ required: ['topic'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'The conversation was created successfully and can be accessed via the conversation ID',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const putConversationsCommunityConvIdRoute = createRoute({
  method: 'put',
  path: '/conversations/community/{convId}',
  tags: ['Conversations'],
  summary: 'Updates the information of a community',
  description:
    'Updates the information of the given community.\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'updateConversationCommunity',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation which should be updated',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'An optional description for the community conversation' }),
              topic: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Gets the updated conversation object with the new topic / description',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the conversation is not of type COMMUNITY</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const postConversationsCommunityConvIdJoinRoute = createRoute({
  method: 'post',
  path: '/conversations/community/{convId}/join',
  tags: ['Conversations'],
  summary: 'Adds the authenticated user to a community',
  description:
    'Adds the authenticated user to the given community (i.e., allows the user to join this community). Contrary to the operation of adding a new participant, this operation can only be performed by a user who is not yet a member of the community.\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'joinCommunityConversation',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation which the user will join',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Gets the conversation object to which the participants was added',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>the conversation does not exist</li><li>the conversation is not of type COMMUNITY</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const postConversationsCommunityConvIdParticipantsRoute = createRoute({
  method: 'post',
  path: '/conversations/community/{convId}/participants',
  tags: ['Conversations'],
  summary: 'Adds participants to a community',
  description:
    'Adds one or more participants to the given community. This operation can only be performed by a user who is already a member of the community.\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'addParticipantCommunity',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the participant has to be added.',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: AddParticipantCommunityRequestBody,
  },
  responses: {
    200: {
      description: 'Gets the conversation object to which the participants were added.',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>the conversation does not exist</li><li>the conversation is not of type COMMUNITY</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const deleteConversationsCommunityConvIdParticipantsRoute = createRoute({
  method: 'delete',
  path: '/conversations/community/{convId}/participants',
  tags: ['Conversations'],
  summary: 'Removes participants from a community',
  description:
    'Removes one or more participants from the given community. The last participant of a community cannot be removed. This operation can only be performed by a user who is already a member of the community.\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'removeParticipantCommunity',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation from which the participant have to be removed',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      participants: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().max(6500)),
        )
        .openapi({
          param: {
            description:
              'The IDs or the unique email addresses of the Circuit users that have to be removed',
            explode: true,
            in: 'query',
            name: 'participants',
            required: true,
            schema: { items: { maxLength: 6500, type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Gets the conversation object from which the participants were removed.',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul></li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>the conversation does not exist</li><li>the conversation is not of type COMMUNITY</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const getConversationsConversationdetailsRoute = createRoute({
  method: 'get',
  path: '/conversations/conversationdetails',
  tags: ['Conversations'],
  summary: 'Gets the conference details for multiple conversations',
  description:
    'Gets the conference details of the given conversations. Conference details include the URL, which is used to join the conference through a web or mobile application, as well as the dial-in phone numbers and conference PIN, which are used to join the conference by phone.\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getJoinDetailsMultiple',
  request: {
    query: z.object({
      convIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().max(2048)),
        )
        .openapi({
          param: {
            description:
              'An array of IDs of the conversations for which the join details should be returned',
            explode: true,
            in: 'query',
            name: 'convIds',
            required: true,
            schema: { items: { maxLength: 2048, type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The join details.',
      content: {
        'application/json': { schema: z.array(ConversationDetailsSchema) },
        'application/xml': { schema: z.array(ConversationDetailsSchema) },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const getConversationsDirectRoute = createRoute({
  method: 'get',
  path: '/conversations/direct',
  tags: ['Conversations'],
  summary: 'Checks for a 1-to-1 conversation',
  description:
    'Checks if a 1-to-1 conversation between the authenticated user and the user with the provided userId exists.\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getDirectConversation',
  request: {
    query: z.object({
      participant: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description:
              'The participant that will be part of this conversation together with the creator, specified by the Circuit user ID or the unique email address',
            in: 'query',
            name: 'participant',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The conversation was found and can be accessed via the conversation ID',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the data format of the passed user does not match either a UUID (user primary key)</li><li> or an valid email address</li><li>or the user does not exist</li><li>or the user is the same who initiates the request</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const postConversationsDirectRoute = createRoute({
  method: 'post',
  path: '/conversations/direct',
  tags: ['Conversations'],
  summary: 'Creates a 1-to-1 conversation',
  description:
    'Creates a 1-to-1 conversation between the authenticated user and the user with the provided userId. In case there is already an existing 1-to-1 conversation between these users, the endpoint returns the existing conversation.\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'createDirectConversation',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              participant: z
                .string()
                .max(2048)
                .openapi({
                  description:
                    'The participant that will be part of this conversation together with the creator, specified by the Circuit user ID or the unique email address',
                }),
            })
            .openapi({ required: ['participant'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'The conversation was created successfully and can be accessed via the conversation ID',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the data format of the passed user does not match either a UUID (user primary key)</li><li> or an valid email address</li><li>or the user does not exist</li><li>or the user is the same who initiates the request</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    409: {
      description: 'A conversation already exists. The response contains this conversation.',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const getConversationsFavoriteRoute = createRoute({
  method: 'get',
  path: '/conversations/favorite',
  tags: ['Conversations'],
  summary: 'Gets favorite conversations',
  description:
    'Gets the conversationIds which are marked as favorites.\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getFavoriteConversations',
  responses: {
    200: {
      description: 'A list of marked conversations or an empty response.',
      content: { '*/*': { schema: z.array(StringSchema) } },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const postConversationsGroupRoute = createRoute({
  method: 'post',
  path: '/conversations/group',
  tags: ['Conversations'],
  summary: 'Creates a group conversation',
  description:
    'Creates a group conversation between three or more users. The authenticated user is directly added to this conversation.\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'createGroupConversation',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              participants: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .openapi({
                  description:
                    'A list of participants that will be part of this conversation, specified by the Circuit user ID or the unique email address. At least one participant needs to be added',
                }),
              topic: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)',
                }),
            })
            .openapi({ required: ['participants'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'The conversation was created successfully and can be accessed via the conversation ID',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const putConversationsGroupConvIdRoute = createRoute({
  method: 'put',
  path: '/conversations/group/{convId}',
  tags: ['Conversations'],
  summary: 'Updates the information of a group conversation',
  description:
    'Updates the information of the given group conversation.\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'updateConversationGroup',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation which should be updated',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              topic: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'An optional topic of the conversation. If not set the Circuit client will render the names of the participants as topic of the conversation (the first 4 names will be used)',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Gets the updated conversation object with the new topic',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the conversation is not of type GROUP</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const postConversationsGroupConvIdParticipantsRoute = createRoute({
  method: 'post',
  path: '/conversations/group/{convId}/participants',
  tags: ['Conversations'],
  summary: 'Adds participants to a group conversation',
  description:
    'Adds one or more participants to the given group conversation. This operation can only be performed by a user who is already a member of the conversation.\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'addParticipantGroup',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the participant has to be added.',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: AddParticipantCommunityRequestBody,
  },
  responses: {
    200: {
      description: 'Gets the conversation object to which the participants were added.',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>the conversation does not exist</li><li>the conversation is not of type GROUP</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const deleteConversationsGroupConvIdParticipantsRoute = createRoute({
  method: 'delete',
  path: '/conversations/group/{convId}/participants',
  tags: ['Conversations'],
  summary: 'Removes participants from a group conversation',
  description:
    'Removes one or more participants from the given group conversation. The last participant of a group conversation cannot be removed. This operation can only be performed on behalf of a user who is already a member of the conversation.\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'removeParticipantGroup',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation from which the participant have to be removed',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      participants: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().max(6500)),
        )
        .openapi({
          param: {
            description:
              'The IDs or the unique email addresses of the Circuit users that have to be removed',
            explode: true,
            in: 'query',
            name: 'participants',
            required: true,
            schema: { items: { maxLength: 6500, type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Gets the conversation object from which the participants were removed.',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or an valid email address</li><li>or one or more of the user do not exist</li><li>the conversation does not exist</li><li>the conversation is not of type GROUP</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const getConversationsLabelLabelIdRoute = createRoute({
  method: 'get',
  path: '/conversations/label/{labelId}',
  tags: ['Conversations'],
  summary: 'Returns conversations with a certain label',
  description:
    'Returns conversations with matching labels and paginated \nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getConversationsByLabel',
  request: {
    params: z.object({
      labelId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the label to look for',
            in: 'path',
            name: 'labelId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      nextPagePointer: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'Pointer to the next page of conversations if there are any',
            in: 'query',
            name: 'nextPagePointer',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'Numbers of max conversations per page',
            in: 'query',
            name: 'pageSize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of conversations that are tagged with a certain label',
      content: {
        'application/json': { schema: ConversationsPageSchema },
        'application/xml': { schema: ConversationsPageSchema },
      },
    },
    400: { description: 'he request cannot be fulfilled due to bad syntax' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const getConversationsMessagesFlagRoute = createRoute({
  method: 'get',
  path: '/conversations/messages/flag',
  tags: ['Conversations'],
  summary: 'Gets a list of the flagged messages',
  description:
    'Gets a list of all the messages the authenticated user has flagged. This endpoint should be used carefully in case where the authenticated user has a lot of flagged messages.\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getFlagItemConv',
  responses: {
    200: {
      description: 'Gets the list of flagged items',
      content: { '*/*': { schema: z.array(ConversationItemSchema) } },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const getConversationsMessagesItemIdRoute = createRoute({
  method: 'get',
  path: '/conversations/messages/{itemId}',
  tags: ['Conversations'],
  summary: 'Returns a text item',
  description: 'Returns a text item for a given item id\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getSingleConversationtem',
  request: {
    params: z.object({
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the item that will be returned',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The item was successful returned',
      content: {
        'application/json': { schema: ConversationItemSchema },
        'application/xml': { schema: ConversationItemSchema },
      },
    },
    400: { description: 'The item with the given id was not found' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const postConversationsModerateConvIdRoute = createRoute({
  method: 'post',
  path: '/conversations/moderate/{convId}',
  tags: ['Conversations'],
  summary: 'Set conversation moderated',
  description:
    'Set a conversation in moderatd mode. Moderators can be added and removed\nOauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS',
  operationId: 'moderateConversation',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation which will be set to moderated state',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The conversation is in moderated mode' },
    401: { description: 'Permission denied' },
    403: { description: 'Forbidden to edit this conversation' },
    500: { description: 'Internal server error' },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MODERATE_CONVERSATIONS'] }],
})

export const getConversationsResolveinvitetokenRoute = createRoute({
  method: 'get',
  path: '/conversations/resolveinvitetoken',
  tags: ['Conversations'],
  summary: 'Resolves an invite token to a conversation',
  description: 'Resolves an invite token to a conversation\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'resolveInvitationToken',
  request: {
    query: z.object({
      token: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The invite token to resolve',
            in: 'query',
            name: 'token',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns the conversation object that belongs to the invite token if you are member of the conversation',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: { description: 'In case no invitation token was send' },
    401: { description: 'The authentication was not successful' },
    404: { description: 'If the token does not exist or you are not member of the conversation ' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const getConversationsSearchRoute = createRoute({
  method: 'get',
  path: '/conversations/search',
  tags: ['Conversations'],
  summary: 'Performs a conversation search',
  description:
    'Performs a search for conversation content. A maximum of 100 conversations is returned. If you hit this limit you should refine the search term.\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'searchConversations',
  request: {
    query: z.object({
      term: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The search term',
            in: 'query',
            name: 'term',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      includeItemIds: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional parameter to specify if a deep or normal search is executed. In a deep search all matching item IDs inside every conversation are returned (up to a maximum of 100). For a normal search only the conversation IDs are returned. Default is a normal search (without item IDs).',
            in: 'query',
            name: 'includeItemIds',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      scope: z
        .enum([
          'FILES',
          'PEOPLE',
          'MEMBERS',
          'MESSAGES',
          'SENTBY',
          'ALL',
          'CONVERSATIONS',
          'LABEL',
          'FILTER',
        ])
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The search scope, FILES||PEOPLE||MEMBERS||MESSAGES||SENTBY||ALL||CONVERSATIONS||LABEL||FILTER',
            in: 'query',
            name: 'scope',
            required: false,
            schema: {
              default: 'ALL',
              enum: [
                'FILES',
                'PEOPLE',
                'MEMBERS',
                'MESSAGES',
                'SENTBY',
                'ALL',
                'CONVERSATIONS',
                'LABEL',
                'FILTER',
              ],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of conversations and items that match the term',
      content: {
        'application/json': { schema: ConversationSearchResultSchema },
        'application/xml': { schema: ConversationSearchResultSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const postConversationsUnmoderateConvIdRoute = createRoute({
  method: 'post',
  path: '/conversations/unmoderate/{convId}',
  tags: ['Conversations'],
  summary: 'Set conversation unmoderated',
  description:
    'Set a conversation to unmoderatd mode\nOauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS',
  operationId: 'unmoderateConversation',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation which will be set to unmoderated state',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The conversation is in unmoderated mode' },
    401: { description: 'Forbidden to edit this conversation' },
    403: { description: 'Permission denied' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MODERATE_CONVERSATIONS'] }],
})

export const getConversationsConvIdRoute = createRoute({
  method: 'get',
  path: '/conversations/{convId}',
  tags: ['Conversations'],
  summary: 'Gets a conversation',
  description: 'Gets a conversation based on the given ID.\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getConversationbyId',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation which should be updated',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Gets the conversation object',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const postConversationsConvIdArchiveRoute = createRoute({
  method: 'post',
  path: '/conversations/{convId}/archive',
  tags: ['Conversations'],
  summary: 'Archives conversation',
  description: 'Archives a conversation by muting it\nOauthScopes: WRITE_CONVERSATIONS',
  operationId: 'archiveConversation',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation which will be archived',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The conversation was successfully archived' },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS'] }],
})

export const deleteConversationsConvIdArchiveRoute = createRoute({
  method: 'delete',
  path: '/conversations/{convId}/archive',
  tags: ['Conversations'],
  summary: 'Unmute conversation',
  description:
    'The conversation will no longer be archived but active again\nOauthScopes: WRITE_CONVERSATIONS',
  operationId: 'undoArchiveConversation',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation which will be unmarked as muted',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The conversation was successfully unmarked' },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li><li>the conversation was not marked before</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS'] }],
})

export const getConversationsConvIdConversationdetailsRoute = createRoute({
  method: 'get',
  path: '/conversations/{convId}/conversationdetails',
  tags: ['Conversations'],
  summary: 'Gets the conference details of a conversation',
  description:
    'Gets the conference details of the given conversation. Conference details include the URL, which is used to join the conference through a web or mobile application, as well as the dial-in phone numbers and conference PIN, which are used to join the conference by phone.\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getJoinDetails',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation for which the join details should be returned',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The join details.',
      content: {
        'application/json': { schema: ConversationDetailsSchema },
        'application/xml': { schema: ConversationDetailsSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const postConversationsConvIdFavoriteRoute = createRoute({
  method: 'post',
  path: '/conversations/{convId}/favorite',
  tags: ['Conversations'],
  summary: 'Adds a conversation to the favorites',
  description:
    'Adds a conversation to the favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations.\nOauthScopes: WRITE_CONVERSATIONS',
  operationId: 'addFavorite',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation which will be marked as favorite',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The conversation was successfully marked' },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS'] }],
})

export const deleteConversationsConvIdFavoriteRoute = createRoute({
  method: 'delete',
  path: '/conversations/{convId}/favorite',
  tags: ['Conversations'],
  summary: 'Removes a conversation from favorites',
  description:
    'Removes a conversation from favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations.\nOauthScopes: WRITE_CONVERSATIONS',
  operationId: 'deleteFavorite',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation which will be unmarked as favorite',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The conversation was successfully unmarked' },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li><li>the conversation was not marked before</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS'] }],
})

export const getConversationsConvIdItemsRoute = createRoute({
  method: 'get',
  path: '/conversations/{convId}/items',
  tags: ['Conversations'],
  summary: 'Gets a list of conversation items',
  description: 'Gets a list of conversation items.\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getConversationItems',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the items belong',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      modTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'The modification time of the item in UTC format. During the query the items before (default) or after this timestamps are returned. In case no timestamp is specified the current server time in UTC is used, i.e. the last 25 modified items are returned',
            in: 'query',
            name: 'modTime',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      direction: z
        .enum(['BEFORE', 'AFTER'])
        .default('BEFORE')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The direction of the search based on the modification time. Valid values are either BEFORE (default) or AFTER',
            in: 'query',
            name: 'direction',
            required: false,
            schema: {
              default: 'BEFORE',
              enum: ['BEFORE', 'AFTER'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of returned results (default 25). The maximum allowed value is 100.',
            in: 'query',
            name: 'results',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The matching conversation items',
      content: {
        'application/json': { schema: z.array(ConversationItemSchema) },
        'application/xml': { schema: z.array(ConversationItemSchema) },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const postConversationsConvIdLabelRoute = createRoute({
  method: 'post',
  path: '/conversations/{convId}/label',
  tags: ['Conversations'],
  summary: 'Adds a label to a conversation',
  description:
    'Adds a label to a conversation, you can search and organize your conversations based on these labels\nOauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS',
  operationId: 'assignLabel',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the label is added',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ label: z.string().max(2048).openapi({ description: 'The actual label ' }) })
            .openapi({ required: ['label'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The label was successfully added',
      content: {
        'application/json': { schema: LabelSchema },
        'application/xml': { schema: LabelSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>a field constraint is violated</li><li>you reached the maximum of 250 labels</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'ORGANIZE_CONVERSATIONS'] }],
})

export const deleteConversationsConvIdLabelLabelIdRoute = createRoute({
  method: 'delete',
  path: '/conversations/{convId}/label/{labelId}',
  tags: ['Conversations'],
  summary: 'Removes a label from a conversation',
  description:
    'Removes a label from a conversation, you can search and organize your conversations based on these labels\nOauthScopes: WRITE_CONVERSATIONS',
  operationId: 'unassignLabel',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation from which the label is removed',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      labelId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The actual label ',
            in: 'path',
            name: 'labelId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The label was successfully removed',
      content: {
        'application/json': { schema: LabelSchema },
        'application/xml': { schema: LabelSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>a field constraint is violated</li><li>the label was not assigned to the conversation</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS'] }],
})

export const postConversationsConvIdMessagesRoute = createRoute({
  method: 'post',
  path: '/conversations/{convId}/messages',
  tags: ['Conversations'],
  summary: 'Adds a message to a conversation',
  description:
    'Adds a message to the given conversation. This operation can be only performed on behalf of a user who is already a member of the conversation.\nOauthScopes: WRITE_CONVERSATIONS, CREATE_CONVERSATIONS_CONTENT',
  operationId: 'addTextItem',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the new item has to be added',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(16000)),
                )
                .exactOptional()
                .openapi({
                  description: 'A comma separated list of attachment IDs from the file API.',
                }),
              content: z
                .string()
                .max(16384)
                .exactOptional()
                .openapi({
                  description:
                    'The actual content of the item, is mandatory unless an attachment is added',
                }),
              formMetaData: z
                .string()
                .max(32768)
                .exactOptional()
                .openapi({ description: 'The form meta data of the new text item' }),
              subject: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'The subject (headline) of the new text item' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Gets the new text item object',
      content: {
        'application/json': { schema: ConversationItemSchema },
        'application/xml': { schema: ConversationItemSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'CREATE_CONVERSATIONS_CONTENT'] }],
})

export const getConversationsConvIdMessagesFlagRoute = createRoute({
  method: 'get',
  path: '/conversations/{convId}/messages/flag',
  tags: ['Conversations'],
  summary: 'Gets a list of the flagged messages of a conversation',
  description:
    'Gets a list of all the flagged messages in the given conversation.\nOauthScopes: READ_CONVERSATIONS, ORGANIZE_CONVERSATIONS',
  operationId: 'getFlagItem',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the item belongs',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Gets the list of flagged items',
      content: {
        'application/json': { schema: z.array(ConversationItemSchema) },
        'application/xml': { schema: z.array(ConversationItemSchema) },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS', 'ORGANIZE_CONVERSATIONS'] }],
})

export const putConversationsConvIdMessagesItemIdRoute = createRoute({
  method: 'put',
  path: '/conversations/{convId}/messages/{itemId}',
  tags: ['Conversations'],
  summary: 'Updates a message',
  description:
    'Updates the content or subject of the existing message. Only the creator of the message is allowed to perform this operation.\nOauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT',
  operationId: 'updateTextItem',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the item belongs',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the item to update',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(16000)),
                )
                .exactOptional()
                .openapi({
                  description: 'A comma separated list of attachment IDs from the file API.',
                }),
              content: z
                .string()
                .max(16384)
                .exactOptional()
                .openapi({ description: 'The actual content of the item' }),
              formMetaData: z
                .string()
                .max(32768)
                .exactOptional()
                .openapi({ description: 'The form meta data of the new text item' }),
              subject: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'The subject (headline) of the new text item' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Gets the modified text item object',
      content: {
        'application/json': { schema: ConversationItemSchema },
        'application/xml': { schema: ConversationItemSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'UPDATE_CONVERSATION_CONTENT'] }],
})

export const postConversationsConvIdMessagesItemIdRoute = createRoute({
  method: 'post',
  path: '/conversations/{convId}/messages/{itemId}',
  tags: ['Conversations'],
  summary: 'Adds a message to an item',
  description:
    'Adds a message to the existing item. The added message will be a child item of the message with the given itemId.\nOauthScopes: WRITE_CONVERSATIONS',
  operationId: 'addTextItemWithParent',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the new item has to be added',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the item to which the new one has to be added as child',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(4096)),
                )
                .exactOptional()
                .openapi({
                  description: 'A comma separated list of attachment IDs from the file API.',
                }),
              content: z
                .string()
                .max(16384)
                .exactOptional()
                .openapi({ description: 'The actual content of the item' }),
              formMetaData: z
                .string()
                .max(32768)
                .exactOptional()
                .openapi({ description: 'The form meta data of the new text item' }),
              subject: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({ description: 'The subject (headline) of the new text item' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Gets the new text item object',
      content: {
        'application/json': { schema: ConversationItemSchema },
        'application/xml': { schema: ConversationItemSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the parent item does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS'] }],
})

export const deleteConversationsConvIdMessagesItemIdRoute = createRoute({
  method: 'delete',
  path: '/conversations/{convId}/messages/{itemId}',
  tags: ['Conversations'],
  summary: 'Deletes a message from a conversation',
  description:
    "Marks a message in the given conversation as deleted. Deleted messages are still part of the conversation, but their content is no more visible. This operation can only be performed on behalf of the message's creator.\nOauthScopes: WRITE_CONVERSATIONS, DELETE_CONVERSATIONS_CONTENT",
  operationId: 'deleteTextItem',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the item belongs',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the item that will be deleted',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Gets the deleted text item object',
      content: {
        'application/json': { schema: ConversationItemSchema },
        'application/xml': { schema: ConversationItemSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the item does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'DELETE_CONVERSATIONS_CONTENT'] }],
})

export const postConversationsConvIdMessagesItemIdFlagRoute = createRoute({
  method: 'post',
  path: '/conversations/{convId}/messages/{itemId}/flag',
  tags: ['Conversations'],
  summary: 'Adds a flag to a message in a conversation',
  description:
    'Adds a flag to the given message in the given conversation.\nOauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS',
  operationId: 'flagItem',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the item belongs',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the item that will be flagged',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              itemCreationTime: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The time when the item was created' }),
              parentId: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: "The ID of the item's parent" }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'The item was successful flagged' },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the item does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'ORGANIZE_CONVERSATIONS'] }],
})

export const deleteConversationsConvIdMessagesItemIdFlagRoute = createRoute({
  method: 'delete',
  path: '/conversations/{convId}/messages/{itemId}/flag',
  tags: ['Conversations'],
  summary: 'Removes the flag from a message',
  description:
    'Removes the flag from a given message that is posted to the given conversation.\nOauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS',
  operationId: 'unFlagItem',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the item belongs',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the item that will be flagged',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The flagged state of item was successfully removed' },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the item does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'ORGANIZE_CONVERSATIONS'] }],
})

export const postConversationsConvIdMessagesItemIdLikeRoute = createRoute({
  method: 'post',
  path: '/conversations/{convId}/messages/{itemId}/like',
  tags: ['Conversations'],
  summary: 'Adds a "like" to a message',
  description:
    'Adds a "like" to the given message in the given conversation\nOauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT',
  operationId: 'likeItem',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the item belongs',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the item that will be liked',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The item was successful liked' },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the item does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'UPDATE_CONVERSATION_CONTENT'] }],
})

export const deleteConversationsConvIdMessagesItemIdLikeRoute = createRoute({
  method: 'delete',
  path: '/conversations/{convId}/messages/{itemId}/like',
  tags: ['Conversations'],
  summary: 'Removes a "like" from a message',
  description:
    'Removes a "like" from the given message in the given conversation\nOauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT',
  operationId: 'unlikeItem',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the item belongs',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the item that will be unliked',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The item was successful unliked' },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the conversation does not exist</li><li>the item does not exist</li><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'UPDATE_CONVERSATION_CONTENT'] }],
})

export const postConversationsConvIdModeratorsRoute = createRoute({
  method: 'post',
  path: '/conversations/{convId}/moderators',
  tags: ['Conversations'],
  summary: 'Add moderators',
  description:
    'Adds a list of moderators to a conversation\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'addModerators',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation to which the moderators are added',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              moderators: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(6500)),
                )
                .openapi({ description: 'The list of moderator ids to add ' }),
            })
            .openapi({ required: ['moderators'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'The moderators were successfully added' },
    400: { description: 'Error reading list of moderators to add' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const deleteConversationsConvIdModeratorsRoute = createRoute({
  method: 'delete',
  path: '/conversations/{convId}/moderators',
  tags: ['Conversations'],
  summary: 'Remove moderators',
  description:
    'Removes a list of moderators from a conversation\nOauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS',
  operationId: 'removeModerators',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation where the moderators are removed',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              moderators: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(6500)),
                )
                .openapi({ description: 'The list of moderator ids to remove' }),
            })
            .openapi({ required: ['moderators'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'The moderators were successfully removed' },
    400: { description: 'Failure in moderators list' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MODERATE_CONVERSATIONS'] }],
})

export const getConversationsConvIdParticipantsRoute = createRoute({
  method: 'get',
  path: '/conversations/{convId}/participants',
  tags: ['Conversations'],
  summary: 'Performs a list of participants',
  description:
    'Performs a search for participants. The max number of participants is configurable. If more participants are available a search pointer is returned for consecutive calls.\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getParticipantsByConvId',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the conversation the participants are searched for.',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(25),
        )
        .openapi({
          param: {
            description: 'The page size of the hit list',
            in: 'query',
            name: 'pageSize',
            required: true,
            schema: { format: 'int32', maximum: 25, minimum: 1, type: 'number' },
          },
        }),
      name: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'Part of name to filter the results',
            in: 'query',
            name: 'name',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      type: z
        .enum(['REGULAR', 'MODERATOR', 'GUEST', 'FORMER', 'BOT'])
        .default('REGULAR')
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of participant to filter the results',
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              default: 'REGULAR',
              enum: ['REGULAR', 'MODERATOR', 'GUEST', 'FORMER', 'BOT'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      searchPointer: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'Pointer for paged output. Add to consecutive request to get next page',
            in: 'query',
            name: 'searchPointer',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of conversations and items that match the term',
      content: {
        'application/json': { schema: z.array(ConversationParticipantsListSchema) },
        'application/xml': { schema: z.array(ConversationParticipantsListSchema) },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the user is no participant of the conversation</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const getConversationsConvIdPinsRoute = createRoute({
  method: 'get',
  path: '/conversations/{convId}/pins',
  tags: ['Conversations'],
  summary: 'Returns pinned topics of a conversation',
  description: 'Returns pinned topics of a conversation\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getPinnedConversations',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'ID of the conversation',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The pinned topics',
      content: {
        'application/json': { schema: z.array(PinnedTopicSchema) },
        'application/xml': { schema: z.array(PinnedTopicSchema) },
      },
    },
    400: { description: 'The request cannot be fulfilled due to bad syntax' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const postConversationsConvIdPinsItemIdRoute = createRoute({
  method: 'post',
  path: '/conversations/{convId}/pins/{itemId}',
  tags: ['Conversations'],
  summary: 'Pins a topic of a conversation',
  description: 'Pins a topic of a conversation\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'pinAConversation',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the topic',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the pinned conversation conversation after pinning a topic',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: { description: 'The request cannot be fulfilled due to bad syntax' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const deleteConversationsConvIdPinsItemIdRoute = createRoute({
  method: 'delete',
  path: '/conversations/{convId}/pins/{itemId}',
  tags: ['Conversations'],
  summary: 'Unpins a topic of a conversation',
  description: 'Unpins a topic of a conversation\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'unPinAConversation',
  request: {
    params: z.object({
      convId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the conversation',
            in: 'path',
            name: 'convId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the topic',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the pinned conversation conversation after unpinning a topic',
      content: {
        'application/json': { schema: ConversationSchema },
        'application/xml': { schema: ConversationSchema },
      },
    },
    400: { description: 'The request cannot be fulfilled due to bad syntax' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const getRtcSessionsRoute = createRoute({
  method: 'get',
  path: '/rtc/sessions',
  tags: ['RTC'],
  summary: 'Gets a list of active sessions',
  description: 'Gets a list of active RTCsessions\nOauthScopes: CALLS',
  operationId: 'getActiveSessions',
  responses: {
    200: {
      description: 'The list of active RTCsessions was returned',
      content: { '*/*': { schema: LabelSchema } },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'CALLS'] }],
})

export const getSpacesRoute = createRoute({
  method: 'get',
  path: '/spaces',
  tags: ['Spaces'],
  summary: 'Get the spaces',
  description: 'Get the spaces\nOauthScopes: READ_SPACE',
  operationId: 'getSpaces',
  request: {
    query: z.object({
      timestamp: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'a beautiful timestamp',
            in: 'query',
            name: 'timestamp',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      numberOfResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(255),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'the number of results you want',
            in: 'query',
            name: 'numberOfResults',
            required: false,
            schema: { format: 'int32', maximum: 255, minimum: 0, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Spaces successfully retrieved.',
      content: {
        'application/json': { schema: GetSpacesResultSchema },
        'application/xml': { schema: GetSpacesResultSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const postSpacesCreateRoute = createRoute({
  method: 'post',
  path: '/spaces/create',
  tags: ['Spaces'],
  summary: 'Create a space',
  description: 'Create a space\nOauthScopes: WRITE_SPACE, MANAGE_SPACE, CREATE_SPACE_CONTENT',
  operationId: 'createSpace',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              accessModeType: z
                .enum(['INTERNAL_ONLY', 'INTERNAL_EXTERNAL'])
                .default('INTERNAL_ONLY')
                .openapi({ description: 'Access mode' }),
              description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'description of the space' }),
              largePictureBase64: z
                .string()
                .max(256000)
                .exactOptional()
                .openapi({ description: 'large picture' }),
              name: z.string().max(2048).openapi({ description: 'name of the space' }),
              role: z
                .enum(['MODERATOR', 'AUTHOR', 'PARTICIPANT', 'READER'])
                .default('AUTHOR')
                .openapi({ description: 'role' }),
              smallPictureBase64: z
                .string()
                .max(256000)
                .exactOptional()
                .openapi({ description: 'small picture' }),
              status: z
                .enum(['ENABLED', 'DISABLED'])
                .default('ENABLED')
                .openapi({ description: 'status' }),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .exactOptional()
                .openapi({ description: 'tags of the space' }),
              type: z
                .enum(['OPEN', 'CLOSED', 'SECRET'])
                .default('SECRET')
                .openapi({ description: 'type' }),
            })
            .openapi({ required: ['name', 'accessModeType', 'status', 'role', 'type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Space successfully created.',
      content: {
        'application/json': { schema: ParticipantSpaceWrapperSchema },
        'application/xml': { schema: ParticipantSpaceWrapperSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE', 'CREATE_SPACE_CONTENT'] }],
})

export const getSpacesDirectoryRoute = createRoute({
  method: 'get',
  path: '/spaces/directory',
  tags: ['Spaces'],
  summary: 'Get the directory',
  description: 'Get the directory by a search query in ordered way\nOauthScopes: READ_SPACE',
  operationId: 'getDirectory',
  request: {
    query: z.object({
      sortBy: z
        .enum(['LAST_CONTENT', 'NAME', 'NUMBER_OF_USERS', 'CREATION_DATE'])
        .default('LAST_CONTENT')
        .openapi({
          param: {
            description: 'sort the spaces by LAST_CONTENT, NAME, NUMBER_OF_USERS or CREATION_DATE',
            in: 'query',
            name: 'sortBy',
            required: true,
            schema: {
              default: 'LAST_CONTENT',
              enum: ['LAST_CONTENT', 'NAME', 'NUMBER_OF_USERS', 'CREATION_DATE'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .default('ASCENDING')
        .openapi({
          param: {
            description: 'ascending or descending',
            in: 'query',
            name: 'sortOrder',
            required: true,
            schema: {
              default: 'ASCENDING',
              enum: ['ASCENDING', 'DESCENDING'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      filter: z
        .enum(['NONE', 'JOINED', 'REQUESTED', 'OPEN', 'CLOSED', 'NOT_JOINED_REQUESTED'])
        .default('NONE')
        .openapi({
          param: {
            description:
              'filter for spaces (JOINED, REQUESTED, OPEN, CLOSED or NOT_JOINED_REQUESTED)',
            in: 'query',
            name: 'filter',
            required: true,
            schema: {
              default: 'NONE',
              enum: ['NONE', 'JOINED', 'REQUESTED', 'OPEN', 'CLOSED', 'NOT_JOINED_REQUESTED'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      query: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'some sort of query',
            in: 'query',
            name: 'query',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      pagePointer: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'page pointer, start with nothing and for next query use returned pointer',
            in: 'query',
            name: 'pagePointer',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      numberOfResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(255),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results to return, 25 by default.',
            in: 'query',
            name: 'numberOfResults',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 255, minimum: 0, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Spaces successfully retrieved.',
      content: {
        'application/json': { schema: DirectoryResultSchema },
        'application/xml': { schema: DirectoryResultSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const getSpacesExistsNameRoute = createRoute({
  method: 'get',
  path: '/spaces/exists/{name}',
  tags: ['Spaces'],
  summary: 'Space name exists',
  description:
    'Find out if a space name already exists for non-secret spaces.\nOauthScopes: READ_SPACE',
  operationId: 'existsSpaceName',
  request: {
    params: z.object({
      name: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The name to check for existence.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Check performed successfully, returning true if found, false if not found.',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const putSpacesFlagItemIdRoute = createRoute({
  method: 'put',
  path: '/spaces/flag/{itemId}',
  tags: ['Spaces'],
  summary: 'flag a space item',
  description: 'flag a space item\nOauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT',
  operationId: 'flagSpaceItem',
  request: {
    params: z.object({
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'the id of the item you want to flag',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Space item successfully flagged' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'UPDATE_SPACE_CONTENT'] }],
})

export const getSpacesFlaggedRoute = createRoute({
  method: 'get',
  path: '/spaces/flagged',
  tags: ['Spaces'],
  summary: 'Get flagged items',
  description: 'Get flagged items\nOauthScopes: READ_SPACE',
  operationId: 'getFlaggedItems',
  request: {
    query: z.object({
      searchDirection: z
        .enum(['BEFORE', 'AFTER'])
        .default('BEFORE')
        .openapi({
          param: {
            description: 'before or after the time stamp',
            in: 'query',
            name: 'searchDirection',
            required: true,
            schema: {
              default: 'BEFORE',
              enum: ['BEFORE', 'AFTER'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      timestamp: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'The timestamp according to which you want to retrieve the flagged items',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      searchPointer: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'The searchpointer for the search (initially not set).',
            in: 'query',
            name: 'searchPointer',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      numberOfResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(255),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results you want to retrieve.',
            in: 'query',
            name: 'numberOfResults',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 255, minimum: 0, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Flagged items successfully retrieved',
      content: {
        'application/json': { schema: FlaggedItemsResultSchema },
        'application/xml': { schema: FlaggedItemsResultSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const getSpacesIdsRoute = createRoute({
  method: 'get',
  path: '/spaces/ids',
  tags: ['Spaces'],
  summary: 'Get the spaces by their ids',
  description: 'Get the spaces by their ids\nOauthScopes: READ_SPACE',
  operationId: 'getSpacesByIds',
  request: {
    query: z.object({
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().max(2048)),
        )
        .openapi({
          param: {
            description: 'an array of ids',
            explode: true,
            in: 'query',
            name: 'ids',
            required: true,
            schema: { items: { maxLength: 2048, type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Spaces successfully retrieved.',
      content: {
        'application/json': { schema: GetSpacesResultSchema },
        'application/xml': { schema: GetSpacesResultSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const deleteSpacesItemItemIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/item/{itemId}',
  tags: ['Spaces'],
  summary: 'deletes a space item',
  description: 'deletes a space item\nOauthScopes: WRITE_SPACE, DELETE_SPACE_CONTENT',
  operationId: 'deleteSpaceItem',
  request: {
    params: z.object({
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'the id of the spaceItem',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'the deletion was a success' },
    400: { description: 'invalid itemid' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'DELETE_SPACE_CONTENT'] }],
})

export const putSpacesLikeItemIdRoute = createRoute({
  method: 'put',
  path: '/spaces/like/{itemId}',
  tags: ['Spaces'],
  summary: 'Like a space item',
  description: 'Like a space item\nOauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT',
  operationId: 'likeSpaceItem',
  request: {
    params: z.object({
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the item you want to like',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Space item successfully liked' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'UPDATE_SPACE_CONTENT'] }],
})

export const getSpacesLikesItemIdRoute = createRoute({
  method: 'get',
  path: '/spaces/likes/{itemId}',
  tags: ['Spaces'],
  summary: 'Get the likes of an item',
  description: 'Get the likes of an item\nOauthScopes: READ_SPACE',
  operationId: 'getLikes',
  request: {
    params: z.object({
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the item to retrieve the likes from',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      searchPointer: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'The searchpointer for the search (initially not set).',
            in: 'query',
            name: 'searchPointer',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      numberOfResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(255),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results you want to retrieve.',
            in: 'query',
            name: 'numberOfResults',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 255, minimum: 0, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Likes successfully retrieved',
      content: {
        'application/json': { schema: ParticipantsLikeResultSchema },
        'application/xml': { schema: ParticipantsLikeResultSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const putSpacesSearchAddRecentRoute = createRoute({
  method: 'put',
  path: '/spaces/search/add/recent',
  tags: ['Spaces'],
  summary: 'Add recent search ',
  description:
    'Add recent search of a client to search controller.\nOauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE',
  operationId: 'addRecentSpaceSearch',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              endTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'The end time.' }),
              scope: z
                .enum(['ALL', 'SPACES', 'TOPICBY', 'FILES', 'TAGS', 'LABELS', 'DATE'])
                .openapi({ description: 'The scope of the search.' }),
              searchTerm: z.string().max(2048).openapi({ description: 'The term to search for.' }),
              startTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'The start time.' }),
            })
            .openapi({ required: ['scope', 'searchTerm'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Search successfully added.' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE', 'ORGANIZE_SPACE'] }],
})

export const putSpacesSearchCancelSearchIdRoute = createRoute({
  method: 'put',
  path: '/spaces/search/cancel/{searchId}',
  tags: ['Spaces'],
  summary: 'Cancels a space search of a client.',
  description: 'Cancels a space search of a client.\nOauthScopes: WRITE_SPACE, MANAGE_SPACE',
  operationId: 'cancelSpaceSearch',
  request: {
    params: z.object({
      searchId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the search to cancel',
            in: 'path',
            name: 'searchId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Search successfully cancelled.' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE'] }],
})

export const getSpacesSearchRecentRoute = createRoute({
  method: 'get',
  path: '/spaces/search/recent',
  tags: ['Spaces'],
  summary: 'Retrieve recent space searches',
  description: 'Retrieve recent space searches for a user.\nOauthScopes: READ_SPACE',
  operationId: 'getRecentSearches',
  responses: {
    200: {
      description: 'Recent searches successfully retrieved (or none available).',
      content: { '*/*': { schema: z.array(SpacesSearchTermResultSchema) } },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const getSpacesSearchStartBasicRoute = createRoute({
  method: 'get',
  path: '/spaces/search/startBasic',
  tags: ['Spaces'],
  summary: 'starts a basic search in spaces',
  description: 'starts a basic search in spaces\nOauthScopes: READ_SPACE',
  operationId: 'startBasicSpacesSearch',
  request: {
    query: z.object({
      scope: z
        .enum(['ALL', 'SPACES', 'TOPICBY', 'FILES', 'TAGS', 'LABELS', 'DATE'])
        .openapi({
          param: {
            description: 'the scope of the search',
            in: 'query',
            name: 'scope',
            required: true,
            schema: {
              enum: ['ALL', 'SPACES', 'TOPICBY', 'FILES', 'TAGS', 'LABELS', 'DATE'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      searchTerm: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'the term to search for',
            in: 'query',
            name: 'searchTerm',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      startTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'the starttime',
            in: 'query',
            name: 'startTime',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      endTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'the end time',
            in: 'query',
            name: 'endTime',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      prioritySpaces: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().max(2048)),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'list of prioritized spaces',
            explode: true,
            in: 'query',
            name: 'prioritySpaces',
            required: false,
            schema: { items: { maxLength: 2048, type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search successfully executed',
      content: {
        'application/json': { schema: BasicSearchResultSchema },
        'application/xml': { schema: BasicSearchResultSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const getSpacesSearchStartDetailedRoute = createRoute({
  method: 'get',
  path: '/spaces/search/startDetailed',
  tags: ['Spaces'],
  summary: 'starts a detailed search in a space',
  description: 'starts a detailed search in a space\nOauthScopes: READ_SPACE',
  operationId: 'startDetailedSpaceSearch',
  request: {
    query: z.object({
      scope: z
        .enum(['ALL', 'SPACES', 'TOPICBY', 'FILES', 'TAGS', 'LABELS', 'DATE'])
        .openapi({
          param: {
            description: 'the scope of the search',
            in: 'query',
            name: 'scope',
            required: true,
            schema: {
              enum: ['ALL', 'SPACES', 'TOPICBY', 'FILES', 'TAGS', 'LABELS', 'DATE'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      searchTerm: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'the term to search for',
            in: 'query',
            name: 'searchTerm',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      startTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'the starttime',
            in: 'query',
            name: 'startTime',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      endTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'the end time',
            in: 'query',
            name: 'endTime',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'missing documentation',
            in: 'query',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      searchId: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'missing documentation',
            in: 'query',
            name: 'searchId',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search successfully executed',
      content: {
        'application/json': { schema: z.array(SpaceSearchResultDetailedBackSchema) },
        'application/xml': { schema: z.array(SpaceSearchResultDetailedBackSchema) },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const putSpacesTopicTopicIdUpdateTagsRoute = createRoute({
  method: 'put',
  path: '/spaces/topic/{topicId}/updateTags',
  tags: ['Spaces'],
  summary: 'Update tags',
  description: 'Update the tags of a topic  \nOauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT',
  operationId: 'updateTopicTags',
  request: {
    params: z.object({
      topicId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the topic',
            in: 'path',
            name: 'topicId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .openapi({ description: 'The tags to update' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'tags successfully updated',
      content: {
        'application/json': { schema: SpaceTopicSchema },
        'application/xml': { schema: SpaceTopicSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'UPDATE_SPACE_CONTENT'] }],
})

export const putSpacesUnflagItemIdRoute = createRoute({
  method: 'put',
  path: '/spaces/unflag/{itemId}',
  tags: ['Spaces'],
  summary: 'Unflag a space item',
  description: 'Unflag a space item\nOauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT',
  operationId: 'unflagSpaceItem',
  request: {
    params: z.object({
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'the id of the item you want to unflag',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Space item successfully unflagged.' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'UPDATE_SPACE_CONTENT'] }],
})

export const putSpacesUnlikeItemIdRoute = createRoute({
  method: 'put',
  path: '/spaces/unlike/{itemId}',
  tags: ['Spaces'],
  summary: 'Unlike a space item',
  description: 'Unlike a space item\nOauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT',
  operationId: 'unlikeSpaceItem',
  request: {
    params: z.object({
      itemId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the item you want to unlike',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Space item successfully unliked.' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'UPDATE_SPACE_CONTENT'] }],
})

export const putSpacesIdRoute = createRoute({
  method: 'put',
  path: '/spaces/{id}',
  tags: ['Spaces'],
  summary: 'Update a space',
  description: 'Update a space\nOauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT',
  operationId: 'updateSpace',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              accessModeType: z
                .enum(['INTERNAL_ONLY', 'INTERNAL_EXTERNAL', 'NO_CHANGE'])
                .default('NO_CHANGE')
                .exactOptional()
                .openapi({ description: 'Access mode' }),
              description: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'description of the space' }),
              largePictureBase64: z
                .string()
                .max(256000)
                .exactOptional()
                .openapi({ description: 'large picture' }),
              name: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'name of the space' }),
              ownerId: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'ownerid of the space' }),
              role: z
                .enum(['MODERATOR', 'AUTHOR', 'PARTICIPANT', 'READER', 'NO_CHANGE'])
                .default('NO_CHANGE')
                .exactOptional()
                .openapi({ description: 'role' }),
              smallPictureBase64: z
                .string()
                .max(256000)
                .exactOptional()
                .openapi({ description: 'small picture' }),
              status: z
                .enum(['ENABLED', 'DISABLED'])
                .default('ENABLED')
                .exactOptional()
                .openapi({ description: 'status' }),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .exactOptional()
                .openapi({ description: 'tags of the space' }),
              type: z
                .enum(['OPEN', 'CLOSED', 'SECRET', 'NO_CHANGE'])
                .default('NO_CHANGE')
                .exactOptional()
                .openapi({ description: 'type' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Space successfully updated.',
      content: {
        'application/json': { schema: ParticipantSpaceWrapperSchema },
        'application/xml': { schema: ParticipantSpaceWrapperSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'UPDATE_SPACE_CONTENT'] }],
})

export const deleteSpacesIdRoute = createRoute({
  method: 'delete',
  path: '/spaces/{id}',
  tags: ['Spaces'],
  summary: 'Delete a space',
  description: 'Delete a space\nOauthScopes: WRITE_SPACE, MANAGE_SPACE, DELETE_SPACE_CONTENT',
  operationId: 'deleteSpace',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Space successfully deleted.' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE', 'DELETE_SPACE_CONTENT'] }],
})

export const postSpacesIdJoinRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/join',
  tags: ['Spaces'],
  summary: 'Join a space',
  description: 'Join a space\nOauthScopes: WRITE_SPACE',
  operationId: 'joinSpace',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Space successfully joined',
      content: {
        'application/json': { schema: ParticipantSpaceWrapperSchema },
        'application/xml': { schema: ParticipantSpaceWrapperSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE'] }],
})

export const postSpacesIdLabelsAssignRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/labels/assign',
  tags: ['Spaces'],
  summary: 'Assign labels',
  description: 'Assign labels to space\nOauthScopes: WRITE_SPACE, ORGANIZE_SPACE',
  operationId: 'assignLabels',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the space.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              labels: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .openapi({ description: 'The labels to assign to the space' }),
            })
            .openapi({ required: ['labels'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Labels successfully assigned',
      content: {
        'application/json': { schema: z.array(LabelIdsSchema) },
        'application/xml': { schema: z.array(LabelIdsSchema) },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'ORGANIZE_SPACE'] }],
})

export const deleteSpacesIdLabelsUnassignRoute = createRoute({
  method: 'delete',
  path: '/spaces/{id}/labels/unassign',
  tags: ['Spaces'],
  summary: 'Unassign labels',
  description: 'Unassign labels from a space\nOauthScopes: WRITE_SPACE, ORGANIZE_SPACE',
  operationId: 'unassignLabels',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the space.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              labelIds: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .openapi({ description: 'missing documentation' }),
            })
            .openapi({ required: ['labelIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Labels successfully unassigned',
      content: {
        'application/json': { schema: z.array(LabelIdsSchema) },
        'application/xml': { schema: z.array(LabelIdsSchema) },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'ORGANIZE_SPACE'] }],
})

export const postSpacesIdLeaveRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/leave',
  tags: ['Spaces'],
  summary: 'Leave a space',
  description: 'Leave a space\nOauthScopes: WRITE_SPACE',
  operationId: 'leaveSpace',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Space successfully left' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE'] }],
})

export const postSpacesIdParticipantRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/participant',
  tags: ['Spaces'],
  summary: 'Add Participant to Space',
  description: 'Add a participant to a space\nOauthScopes: WRITE_SPACE, MANAGE_SPACE',
  operationId: 'addParticipantsToSpace',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              role: z
                .enum(['DEFAULT', 'MODERATOR', 'AUTHOR', 'PARTICIPANT', 'READER'])
                .default('DEFAULT')
                .openapi({ description: 'The name of the role of the participant' }),
              userId: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .openapi({ description: 'The user id of the participant' }),
            })
            .openapi({ required: ['userId', 'role'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added participant.',
      content: {
        'application/json': { schema: z.array(ParticipantAddResultSchema) },
        'application/xml': { schema: z.array(ParticipantAddResultSchema) },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE'] }],
})

export const postSpacesIdParticipantRemoveRoute = createRoute({
  method: 'post',
  path: '/spaces/{id}/participant/remove',
  tags: ['Spaces'],
  summary: 'Removes participants from a space',
  description:
    'removes Participants from a space\nOauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE',
  operationId: 'v2RemoveParticipantsFromSpace',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              userIds: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .openapi({ description: 'The ids of the participants to remove ' }),
            })
            .openapi({ required: ['userIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'participants successfully removed' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE', 'ORGANIZE_SPACE'] }],
})

export const getSpacesIdParticipantsRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/participants',
  tags: ['Spaces'],
  summary: 'Get the participants of a space',
  description: 'Get the participants of a space\nOauthScopes: READ_SPACE',
  operationId: 'getSpaceParticipants',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the space.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      sortBy: z
        .enum(['DISPLAY_NAME', 'NAME', 'FIRST_NAME'])
        .default('NAME')
        .openapi({
          param: {
            description: 'sort the spaces by LAST_CONTENT, NAME, NUMBER_OF_USERS or CREATION_DATE',
            in: 'query',
            name: 'sortBy',
            required: true,
            schema: {
              default: 'NAME',
              enum: ['DISPLAY_NAME', 'NAME', 'FIRST_NAME'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .default('ASCENDING')
        .openapi({
          param: {
            description: 'ascending or descending',
            in: 'query',
            name: 'sortOrder',
            required: true,
            schema: {
              default: 'ASCENDING',
              enum: ['ASCENDING', 'DESCENDING'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      filterType: z
        .enum(['NONE', 'ACCESS_TYPE', 'ROLE', 'STATE'])
        .openapi({
          param: {
            description: 'filtertype for participants (ACCESS_TYPE, ROLE or STATE)',
            in: 'query',
            name: 'filterType',
            required: true,
            schema: {
              enum: ['NONE', 'ACCESS_TYPE', 'ROLE', 'STATE'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      filterValue: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'value for the filter',
            in: 'query',
            name: 'filterValue',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      query: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'some sort of query',
            in: 'query',
            name: 'query',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      searchPointer: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'The search pointer (leave empty initially).',
            in: 'query',
            name: 'searchPointer',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      numberOfResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(255),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results to return, 25 by default.',
            in: 'query',
            name: 'numberOfResults',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 255, minimum: 0, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Participants successfully retrieved',
      content: {
        'application/json': { schema: ParticipantsSearchResultSchema },
        'application/xml': { schema: ParticipantsSearchResultSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const getSpacesIdParticipantsPendingRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/participants/pending',
  tags: ['Spaces'],
  summary: 'Get the pending participants of a space',
  description: 'Get the pending participants of a space\nOauthScopes: WRITE_SPACE, MANAGE_SPACE',
  operationId: 'getPendingParticipants',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the space.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      searchPointer: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'The search pointer (leave empty initially).',
            in: 'query',
            name: 'searchPointer',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      numberOfResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(255),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results to return, 25 by default.',
            in: 'query',
            name: 'numberOfResults',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 255, minimum: 0, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Pending participants successfully retrieved',
      content: {
        'application/json': { schema: ParticipantsSearchResultSchema },
        'application/xml': { schema: ParticipantsSearchResultSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE'] }],
})

export const getSpacesIdPinnedTopicsRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/pinnedTopics',
  tags: ['Spaces'],
  summary: 'Retrieve pinned topics',
  description: 'Retrieve pinned topics of a space\nOauthScopes: READ_SPACE',
  operationId: 'getPinnedTopics',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the space.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Pinned topics successfully retrieved (or none available). ',
      content: {
        'application/json': { schema: z.array(SpacePinnedTopicSchema) },
        'application/xml': { schema: z.array(SpacePinnedTopicSchema) },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const getSpacesIdSearchParticipantsToAddRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/searchParticipantsToAdd',
  tags: ['Spaces'],
  summary: 'Finds participants to add to add to a space ',
  description:
    'Finds participants to add to a space \nOauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE',
  operationId: 'searchParticipantsToAdd',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The query ',
            in: 'query',
            name: 'query',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'participants successfully found',
      content: {
        'application/json': { schema: z.array(AddParticipantsSearchResultSchema) },
        'application/xml': { schema: z.array(AddParticipantsSearchResultSchema) },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE', 'ORGANIZE_SPACE'] }],
})

export const getSpacesIdSearchSpaceParticipantsRoute = createRoute({
  method: 'get',
  path: '/spaces/{id}/searchSpaceParticipants',
  tags: ['Spaces'],
  summary: 'Get the participants of a space',
  description: 'Get the participants of a space\nOauthScopes: READ_SPACE',
  operationId: 'searchSpaceParticipants',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the space.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description:
              'The query to search with. If searchpointer/hasMotre is returned, refine query.',
            in: 'query',
            name: 'query',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Participants successfully retrieved',
      content: {
        'application/json': { schema: z.array(ParticipantsSearchResultLargeSchema) },
        'application/xml': { schema: z.array(ParticipantsSearchResultLargeSchema) },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const putSpacesIdUpdateTimestampRoute = createRoute({
  method: 'put',
  path: '/spaces/{id}/updateTimestamp',
  tags: ['Spaces'],
  summary: 'Update read timestamp',
  description: 'Update read timestamp\nOauthScopes: READ_SPACE, WRITE_SPACE',
  operationId: 'updateReadTimestamp',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of a space',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              timestamp: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The new timestamp' }),
            })
            .openapi({ required: ['timestamp'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Read timestamp successfully updated.' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE', 'WRITE_SPACE'] }],
})

export const putSpacesSpaceIdParticipantRoute = createRoute({
  method: 'put',
  path: '/spaces/{spaceId}/participant',
  tags: ['Spaces'],
  summary: 'Update participant',
  description:
    'Update participant in space\nOauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE',
  operationId: 'updateParticipantInSpace',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              role: z
                .enum(['MODERATOR', 'AUTHOR', 'PARTICIPANT', 'READER'])
                .openapi({ description: 'updated role of participant' }),
              userId: z
                .string()
                .max(2048)
                .openapi({ description: 'The id of the participant to update' }),
            })
            .openapi({ required: ['userId', 'role'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Role successfully updated' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE', 'ORGANIZE_SPACE'] }],
})

export const getSpacesSpaceIdParticipantImportIndexRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/participant/import/',
  tags: ['Spaces'],
  summary: 'missing documentation',
  description: 'missing documentation\nOauthScopes: READ_SPACE',
  operationId: 'getParticipantsImportData',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'missing documentation',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'missing documentation',
      content: {
        'application/json': { schema: ParticipantsImportDataResultSchema },
        'application/xml': { schema: ParticipantsImportDataResultSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const postSpacesSpaceIdParticipantRequestRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/participant/request',
  tags: ['Spaces'],
  summary: 'request access for a space',
  description: 'request access for a space\nOauthScopes: READ_SPACE',
  operationId: 'requestSpaceAcces',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              reason: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'Reason why the Access has been requested' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'request is recieved' },
    400: { description: 'invalid parameter' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const postSpacesSpaceIdParticipantParticipantIdDenyRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/participant/{participantId}/deny',
  tags: ['Spaces'],
  summary: 'Deny access for a space',
  description: 'Deny access for a space\nOauthScopes: WRITE_SPACE, MANAGE_SPACE',
  operationId: 'denySpaceAcces',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      participantId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the participant',
            in: 'path',
            name: 'participantId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              reason: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'Reason why the request has been denied' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Access denied' },
    400: { description: 'Invalid parameter' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE'] }],
})

export const postSpacesSpaceIdParticipantParticipantIdGrantRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/participant/{participantId}/grant',
  tags: ['Spaces'],
  summary: 'grant access for a space',
  description: 'grant access for a space\nOauthScopes: WRITE_SPACE, MANAGE_SPACE',
  operationId: 'grantSpaceAcces',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      participantId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the participant',
            in: 'path',
            name: 'participantId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'access granted' },
    400: { description: 'invalid parameter' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE'] }],
})

export const postSpacesSpaceIdTopicRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/topic',
  tags: ['Spaces'],
  summary: 'creates a new space topic',
  description:
    'creates a new space topic\nOauthScopes: WRITE_SPACE, MANAGE_SPACE, CREATE_SPACE_CONTENT',
  operationId: 'createSpaceTopic',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The ID of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(16000)),
                )
                .exactOptional()
                .openapi({ description: 'the attached files' }),
              complex: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'complex or not' }),
              content: z
                .string()
                .max(200000)
                .exactOptional()
                .openapi({ description: 'The content of this topic' }),
              contentTags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .exactOptional()
                .openapi({ description: 'the content tags' }),
              formMetaData: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The formMetaData' }),
              mentionedUser: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'A list of mentioned users' }),
              subject: z.string().max(2048).openapi({ description: 'The subject of the topic' }),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .exactOptional()
                .openapi({ description: 'the tags' }),
            })
            .openapi({ required: ['subject'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'returns the created topic',
      content: {
        'application/json': { schema: SpaceTopicSchema },
        'application/xml': { schema: SpaceTopicSchema },
      },
    },
    400: { description: 'something went wrong' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE', 'CREATE_SPACE_CONTENT'] }],
})

export const getSpacesSpaceIdTopicTopicIdRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/topic/{topicId}',
  tags: ['Spaces'],
  summary: 'Gets space replies and a topic',
  description: 'Gets a number of Space replies with a matching topic\nOauthScopes: READ_SPACE',
  operationId: 'v2GetTopicWithReplies',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the topic',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      topicId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'ID of the topic',
            in: 'path',
            name: 'topicId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      numberOfReplies: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(255),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of replies',
            in: 'query',
            name: 'numberOfReplies',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 255, minimum: 0, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the replies with a topic',
      content: {
        'application/json': { schema: SpaceTopicWithRepliesSchema },
        'application/xml': { schema: SpaceTopicWithRepliesSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const putSpacesSpaceIdTopicTopicIdRoute = createRoute({
  method: 'put',
  path: '/spaces/{spaceId}/topic/{topicId}',
  tags: ['Spaces'],
  summary: 'Updates a topic',
  description: 'Updates a topic\nOauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT',
  operationId: 'updateSpaceTopic',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'ID of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      topicId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the topic to update',
            in: 'path',
            name: 'topicId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(16000)),
                )
                .exactOptional()
                .openapi({ description: 'the attached files' }),
              complex: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'complex or not' }),
              content: z
                .string()
                .max(200000)
                .exactOptional()
                .openapi({ description: 'content of the topic' }),
              contentTags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .exactOptional()
                .openapi({ description: 'the content tags' }),
              formMetaData: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'formMetaData to update' }),
              mentionedUsers: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .exactOptional()
                .openapi({ description: 'the updated mentioned users' }),
              subject: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'the subject of the topic' }),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .exactOptional()
                .openapi({ description: 'the tags' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Returns the updated space topic',
      content: {
        'application/json': { schema: SpaceTopicSchema },
        'application/xml': { schema: SpaceTopicSchema },
      },
    },
    400: { description: 'Http_bad_request' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'UPDATE_SPACE_CONTENT'] }],
})

export const getSpacesSpaceIdTopicTopicIdReplyRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/topic/{topicId}/reply',
  tags: ['Spaces'],
  summary: 'Gets space replies',
  description: 'Gets a number of Space replies\nOauthScopes: READ_SPACE',
  operationId: 'getSpaceReplies',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the containing space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      topicId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the topic',
            in: 'path',
            name: 'topicId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      searchDirection: z
        .enum(['BEFORE', 'AFTER'])
        .default('BEFORE')
        .openapi({
          param: {
            description: 'Search before or after a certain timestamp',
            in: 'query',
            name: 'searchDirection',
            required: true,
            schema: {
              default: 'BEFORE',
              enum: ['BEFORE', 'AFTER'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      timestamp: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Timestamp to start the search from',
            in: 'query',
            name: 'timestamp',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      numberOfResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(255),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results that should be returned',
            in: 'query',
            name: 'numberOfResults',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 255, minimum: 0, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the replies',
      content: {
        'application/json': { schema: SpaceReplySchema },
        'application/xml': { schema: SpaceReplySchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const postSpacesSpaceIdTopicTopicIdReplyRoute = createRoute({
  method: 'post',
  path: '/spaces/{spaceId}/topic/{topicId}/reply',
  tags: ['Spaces'],
  summary: 'creates a reply to a topic',
  description: 'creates a reply to a topic\nOauthScopes: WRITE_SPACE',
  operationId: 'createReply',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'ID of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      topicId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'ID of the topic',
            in: 'path',
            name: 'topicId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(16000)),
                )
                .exactOptional()
                .openapi({ description: 'the attached files' }),
              complex: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'complex or not' }),
              content: z
                .string()
                .max(200000)
                .exactOptional()
                .openapi({ description: 'Content of the reply' }),
              formMetaData: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'formMetaData used in the reply' }),
              mentionedUser: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'the user mentioned in the reply' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'returns the created reply',
      content: {
        'application/json': { schema: SpaceReplySchema },
        'application/xml': { schema: SpaceReplySchema },
      },
    },
    400: { description: 'invalid input' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE'] }],
})

export const putSpacesSpaceIdTopicTopicIdReplyReplyIdRoute = createRoute({
  method: 'put',
  path: '/spaces/{spaceId}/topic/{topicId}/reply/{replyId}',
  tags: ['Spaces'],
  summary: 'Updates a space reply',
  description: 'Updates a space reply\nOauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT',
  operationId: 'updateSpaceReply',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'ID of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      topicId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'ID of the topic',
            in: 'path',
            name: 'topicId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      replyId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'id of the reply',
            in: 'path',
            name: 'replyId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              attachments: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(16000)),
                )
                .exactOptional()
                .openapi({ description: 'the attached files' }),
              complex: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'complex or not' }),
              content: z
                .string()
                .max(200000)
                .exactOptional()
                .openapi({ description: 'the content of the reply' }),
              formMetaData: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'formMetaData of the reply' }),
              mentionedUsers: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(2048)),
                )
                .exactOptional()
                .openapi({ description: 'the mentioned users in the reply' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The updated space reply',
      content: {
        'application/json': { schema: SpaceReplySchema },
        'application/xml': { schema: SpaceReplySchema },
      },
    },
    400: { description: 'Invalid input' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'UPDATE_SPACE_CONTENT'] }],
})

export const getSpacesSpaceIdTopicsRoute = createRoute({
  method: 'get',
  path: '/spaces/{spaceId}/topics',
  tags: ['Spaces'],
  summary: 'Gets space topics',
  description: 'Gets a number of Space topics\nOauthScopes: READ_SPACE',
  operationId: 'getSpaceTopics',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      searchDirection: z
        .enum(['BEFORE', 'AFTER'])
        .default('BEFORE')
        .openapi({
          param: {
            description: 'Search before or after a certain timestamp',
            in: 'query',
            name: 'searchDirection',
            required: true,
            schema: {
              default: 'BEFORE',
              enum: ['BEFORE', 'AFTER'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      timestamp: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Timestamp to start the search from',
            in: 'query',
            name: 'timestamp',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      numberOfResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(255),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results that should be returned',
            in: 'query',
            name: 'numberOfResults',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 255, minimum: 0, type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the the topics',
      content: {
        'application/json': { schema: z.array(SpaceTopicSchema) },
        'application/xml': { schema: z.array(SpaceTopicSchema) },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_SPACE'] }],
})

export const putSpacesSpaceIdWelcomeboxContentRoute = createRoute({
  method: 'put',
  path: '/spaces/{spaceId}/welcomebox/{content}',
  tags: ['Spaces'],
  summary: 'Update content of welcome box',
  description:
    'Update content of the welcome box of a space\nOauthScopes: MANAGE_SPACE, WRITE_SPACE',
  operationId: 'v2UpdateWelcomeBoxContent',
  request: {
    params: z.object({
      spaceId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Id of the space',
            in: 'path',
            name: 'spaceId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      content: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The new content',
            in: 'path',
            name: 'content',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              displayWelcomeBox: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({ description: 'True, false, default:false' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'missing documentation' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'MANAGE_SPACE', 'WRITE_SPACE'] }],
})

export const putSpacesTopicIdPinRoute = createRoute({
  method: 'put',
  path: '/spaces/{topicId}/pin',
  tags: ['Spaces'],
  summary: 'Pin a topic',
  description: 'Pin a topic\nOauthScopes: WRITE_SPACE, MANAGE_SPACE',
  operationId: 'pinTopic',
  request: {
    params: z.object({
      topicId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the topic',
            in: 'path',
            name: 'topicId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              position: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number().min(0).max(255),
                )
                .openapi({ description: 'The position to pin to' }),
            })
            .openapi({ required: ['position'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Topic successfully pinned.' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE'] }],
})

export const putSpacesTopicIdUnpinRoute = createRoute({
  method: 'put',
  path: '/spaces/{topicId}/unpin',
  tags: ['Spaces'],
  summary: 'Unpin a topic',
  description: 'Unpin a topic\nOauthScopes: WRITE_SPACE, MANAGE_SPACE',
  operationId: 'unpinTopic',
  request: {
    params: z.object({
      topicId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the topic to unpin',
            in: 'path',
            name: 'topicId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Topic successfully unpinned.' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_SPACE', 'MANAGE_SPACE'] }],
})

export const getTelephonyDeviceInfosRoute = createRoute({
  method: 'get',
  path: '/telephony/deviceInfos',
  tags: ['Telephony'],
  summary: 'Get devices infos',
  description: 'Get the device infos of the requesting user\nOauthScopes: READ_USER_PROFILE',
  operationId: 'v2GetDeviceInfos',
  responses: {
    200: {
      description: 'Device infos successfully retrieved',
      content: { '*/*': { schema: z.array(V2DistributedClientInfoSchema) } },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_USER_PROFILE'] }],
})

export const getTelephonyTelephonyConversationIdRoute = createRoute({
  method: 'get',
  path: '/telephony/telephonyConversationId',
  tags: ['Telephony'],
  summary: 'Get telephony conversation id',
  description:
    'Get telephony conversation id for requesting client\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'v2GetTelephonyConversationId',
  responses: {
    200: { description: 'Telephony conversation id successfully retrieved' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const getTelephonyTelephonyConversationIdJournalRoute = createRoute({
  method: 'get',
  path: '/telephony/{telephonyConversationId}/journal',
  tags: ['Telephony'],
  summary: 'Get journal',
  description: 'Get telephony journal\nOauthScopes: READ_CONVERSATIONS',
  operationId: 'getJournalEntries',
  request: {
    params: z.object({
      telephonyConversationId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the telephony conversation',
            in: 'path',
            name: 'telephonyConversationId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      timestamp: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(0).max(9223372036854776000),
        )
        .default(0n)
        .exactOptional()
        .openapi({
          param: {
            description: 'A timestamp, default = 0',
            in: 'query',
            name: 'timestamp',
            required: false,
            schema: {
              default: 0,
              format: 'int64',
              maximum: 9223372036854776000,
              minimum: 0,
              type: 'number',
            },
          },
        }),
      numberOfEntries: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of entries, between 1 and 100, default = 25',
            in: 'query',
            name: 'numberOfEntries',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'number' },
          },
        }),
      direction: z
        .enum(['AFTER', 'BEFORE', 'BOTH'])
        .default('AFTER')
        .exactOptional()
        .openapi({
          param: {
            description: 'The direction (BEFORE||AFTER||BOTH), default = AFTER',
            in: 'query',
            name: 'direction',
            required: false,
            schema: {
              default: 'AFTER',
              enum: ['AFTER', 'BEFORE', 'BOTH'],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
      journalFilter: z
        .enum([
          'ALL',
          'MISSED',
          'DIALED',
          'RECEIVED',
          'DIVERTED',
          'VOICEMAILS',
          'UNHERAD_VOICEMAILS',
        ])
        .default('ALL')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The filter, ALL||MISSED||DIALED||RECEIVED||DIVERTED||VOICEMAILS||UNHERAD_VOICEMAILS. default = ALL',
            in: 'query',
            name: 'journalFilter',
            required: false,
            schema: {
              default: 'ALL',
              enum: [
                'ALL',
                'MISSED',
                'DIALED',
                'RECEIVED',
                'DIVERTED',
                'VOICEMAILS',
                'UNHERAD_VOICEMAILS',
              ],
              maxLength: 2048,
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Journal successfully retrieved',
      content: {
        'application/json': { schema: z.array(ConversationItemSchema) },
        'application/xml': { schema: z.array(ConversationItemSchema) },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS'] }],
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Users'],
  summary: 'Search for users',
  description: 'Search for users based on an email address or username\nOauthScopes: READ_USER',
  operationId: 'searchUser',
  request: {
    query: z.object({
      name: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'Search for a user by name',
            in: 'query',
            name: 'name',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The users which match the search criteria',
      content: {
        'application/json': { schema: z.array(UserSchema) },
        'application/xml': { schema: z.array(UserSchema) },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    404: { description: 'The search term did not much any results' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_USER'] }],
})

export const getUsersLabelsRoute = createRoute({
  method: 'get',
  path: '/users/labels',
  tags: ['Users'],
  summary: 'Returns all user labels',
  description:
    'Returns all labels of the user that were defined either explicit or implicit via assignment to conversations.\nOauthScopes: READ_USER_PROFILE, ORGANIZE_CONVERSATIONS',
  operationId: 'getLabel',
  responses: {
    200: { description: 'List of labels', content: { '*/*': { schema: z.array(LabelSchema) } } },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_USER_PROFILE', 'ORGANIZE_CONVERSATIONS'] }],
})

export const postUsersLabelsRoute = createRoute({
  method: 'post',
  path: '/users/labels',
  tags: ['Conversations'],
  summary: 'Add a user label',
  description:
    'Add a label to the list of user labels\nOauthScopes: WRITE_USER_PROFILE, ORGANIZE_CONVERSATIONS',
  operationId: 'addLabel',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              label: z.string().max(2048).openapi({ description: 'The label value to add' }),
            })
            .openapi({ required: ['label'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The label was successfully added',
      content: {
        'application/json': { schema: LabelSchema },
        'application/xml': { schema: LabelSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_USER_PROFILE', 'ORGANIZE_CONVERSATIONS'] }],
})

export const deleteUsersLabelsLabelIdRoute = createRoute({
  method: 'delete',
  path: '/users/labels/{labelId}',
  tags: ['Conversations'],
  summary: 'Remove a user label',
  description:
    'Remove a label from the list of user labels\nOauthScopes: WRITE_USER_PROFILE, ORGANIZE_CONVERSATIONS',
  operationId: 'removeLabel',
  request: {
    params: z.object({
      labelId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The label value to remove, either the unique ID or the label value',
            in: 'path',
            name: 'labelId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The label was successfully removed',
      content: {
        'application/json': { schema: LabelSchema },
        'application/xml': { schema: LabelSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>a field constraint is violated</li><li>the label does not exist</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_USER_PROFILE', 'ORGANIZE_CONVERSATIONS'] }],
})

export const getUsersListRoute = createRoute({
  method: 'get',
  path: '/users/list',
  tags: ['Users'],
  summary: 'Search multiple users.',
  description: 'Search multiple users given by id or email address.\nOauthScopes: READ_USER',
  operationId: 'searchUsersList',
  request: {
    query: z.object({
      name: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().max(2048)),
        )
        .openapi({
          param: {
            description: 'Multiple email addresses or UUIDs.',
            explode: true,
            in: 'query',
            name: 'name',
            required: true,
            schema: { items: { maxLength: 2048, type: 'string' }, type: 'array' },
          },
        }),
      returnFullUserInfo: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean, return full user info?',
            in: 'query',
            name: 'returnFullUserInfo',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      secondaryLookup: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean, lookup secondary email?',
            in: 'query',
            name: 'secondaryLookup',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'At least one user was found and returned in a list',
      content: {
        'application/json': { schema: z.array(UserSchema) },
        'application/xml': { schema: z.array(UserSchema) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'The authentication was not successful' },
    404: { description: 'No user was found' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_USER'] }],
})

export const getUsersPresenceRoute = createRoute({
  method: 'get',
  path: '/users/presence',
  tags: ['Users'],
  summary: 'Gets the presence status',
  description:
    'Gets the presence status of the users whose IDs or email addresses are given.\nOauthScopes: READ_USER',
  operationId: 'getPresence',
  request: {
    query: z.object({
      userIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().max(6500)),
        )
        .openapi({
          param: {
            description:
              'A list of unique user IDs or email addresses of the users you want to query the presence state for',
            explode: true,
            in: 'query',
            name: 'userIds',
            required: true,
            schema: { items: { maxLength: 6500, type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The presence states',
      content: {
        'application/json': { schema: z.array(PresenceSchema) },
        'application/xml': { schema: z.array(PresenceSchema) },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the userIds passed as parameter are not provided in the correct format</li><li> or a valid email address</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    404: { description: 'One or more of the users do not exist' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_USER'] }],
})

export const putUsersPresenceRoute = createRoute({
  method: 'put',
  path: '/users/presence',
  tags: ['Users'],
  summary: 'Updates the presence status',
  description:
    'Updates the presence status of the authenticated user.\nOauthScopes: WRITE_USER_PROFILE, MANAGE_PRESENCE',
  operationId: 'setUserPresence',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              clearDND: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({ description: 'Clear the DND of the user.' }),
              dndUntil: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Timestamp until the DND state of the user is active. This field is mandatory when the state is set to DND.',
                }),
              state: z.string().max(2048).openapi({ description: "The user's presence." }),
              statusMessage: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'An optional status message that is displayed instead of the location',
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
      description: 'The presence states',
      content: {
        'application/json': { schema: PresenceSchema },
        'application/xml': { schema: PresenceSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the presence state is DND and the data format of the passed dndUntil is missing </li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_USER_PROFILE', 'MANAGE_PRESENCE'] }],
})

export const getUsersProfileRoute = createRoute({
  method: 'get',
  path: '/users/profile',
  tags: ['Users'],
  summary: "Gets the authenticated user's profile information",
  description: "Gets the authenticated user's profile information.\nOauthScopes: READ_USER_PROFILE",
  operationId: 'getProfile',
  responses: {
    200: {
      description: "Gets the authenticated user's profile information",
      content: { '*/*': { schema: UserSchema } },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_USER_PROFILE'] }],
})

export const putUsersProfileRoute = createRoute({
  method: 'put',
  path: '/users/profile',
  tags: ['Conversations'],
  summary: 'Updates the user profile',
  description:
    'Updates the user profile of the authenticated user\nOauthScopes: WRITE_USER_PROFILE',
  operationId: 'updateProfile',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              firstname: z
                .string()
                .max(128)
                .exactOptional()
                .openapi({ description: 'The new firstname of the user' }),
              jobTitle: z
                .string()
                .max(128)
                .exactOptional()
                .openapi({ description: 'The new job title of the user' }),
              lastname: z
                .string()
                .max(128)
                .exactOptional()
                .openapi({ description: 'The new lastname of the user' }),
              locale: z
                .enum([
                  'EN_US',
                  'DE_DE',
                  'EN_GB',
                  'ES_ES',
                  'FR_FR',
                  'IT_IT',
                  'RU_RU',
                  'ZH_HANS_CN',
                  'PT_BR',
                  'NL_NL',
                  'CA_ES',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'The new locale of the user. One of EN_US, DE_DE, EN_GB, ES_ES, FR_FR, IT_IT, RU_RU, ZH_HANS_CN.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The modified user object.',
      content: {
        'application/json': { schema: UserSchema },
        'application/xml': { schema: UserSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the user does not exist</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_USER_PROFILE'] }],
})

export const getUsersSupportinfoRoute = createRoute({
  method: 'get',
  path: '/users/supportinfo',
  tags: ['Users'],
  summary: 'Gets the support information',
  description:
    'Gets the support information for the tenant of the requesting user\nOauthScopes: READ_USER_PROFILE',
  operationId: 'getSupportInfo',
  responses: {
    200: {
      description: 'The operation was successful, the support information returned',
      content: { '*/*': { schema: SupportInfoSchema } },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_USER_PROFILE'] }],
})

export const getUsersEmailAddressGetUserByEmailRoute = createRoute({
  method: 'get',
  path: '/users/{emailAddress}/getUserByEmail',
  tags: ['Users'],
  summary: 'Get user by email',
  description: 'Get user by first or secondary email address\nOauthScopes: READ_USER_PROFILE',
  operationId: 'getUserByEmailAddress',
  request: {
    params: z.object({
      emailAddress: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The main or secondary email address of a user.',
            in: 'path',
            name: 'emailAddress',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      secondaryLookup: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'secondaryLookup enabled (default = false)',
            in: 'query',
            name: 'secondaryLookup',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User successfully retrieved',
      content: {
        'application/json': { schema: UserSchema },
        'application/xml': { schema: UserSchema },
      },
    },
    401: { description: 'The authentication was not successful' },
    404: { description: 'User not found or not a session guest. ' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_USER_PROFILE'] }],
})

export const getUsersIdRoute = createRoute({
  method: 'get',
  path: '/users/{id}',
  tags: ['Users'],
  summary: "Gets the user's profile information",
  description:
    'Gets the profile information of the user with the given ID.\nOauthScopes: READ_USER',
  operationId: 'getUserById',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The unique ID or the email address of the user to fetch',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The operation was successful, the user profile is returned',
      content: {
        'application/json': { schema: UserSchema },
        'application/xml': { schema: UserSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the data format of the passed user does not match either a UUID (user primary key)</li><li> or an valid email address</li><li>or a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    404: { description: 'The user does not exist' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_USER'] }],
})

export const getUsersIdPresenceRoute = createRoute({
  method: 'get',
  path: '/users/{id}/presence',
  tags: ['Users'],
  summary: 'Gets the presence status',
  description:
    'Gets the presence status of the users whose ID or email address is given.\nOauthScopes: READ_USER',
  operationId: 'getUserPresence',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The unique ID or the email address of the user to fetch.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The presence state',
      content: {
        'application/json': { schema: PresenceSchema },
        'application/xml': { schema: PresenceSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the data format of the passed user does not match either a UUID (user primary key)</li><li> or a valid email address</li><li>or a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    404: { description: 'The user does not exist' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_USER'] }],
})

export const getWebhooksRoute = createRoute({
  method: 'get',
  path: '/webhooks',
  tags: ['Outgoing Webhooks'],
  summary: 'Gets a list of webHooks',
  description:
    'Gets the list of webHooks registered for this user or API.\nOauthScopes: READ_CONVERSATIONS, READ_USER',
  operationId: 'getWebHook',
  responses: {
    200: {
      description: 'The list of registered webHooks',
      content: { '*/*': { schema: z.array(WebHookSchema) } },
    },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS', 'READ_USER'] }],
})

export const postWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhooks',
  tags: ['Outgoing Webhooks'],
  summary: 'Registers a WebHook',
  description:
    'Registers the webHook with the given filter and callback URL.\nOauthScopes: READ_CONVERSATIONS, READ_USER',
  operationId: 'addWebHook',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              filter: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z.enum([
                      'CONVERSATION.CREATE',
                      'CONVERSATION.UPDATE',
                      'CONVERSATION.ADD_ITEM',
                      'CONVERSATION.UPDATE_ITEM',
                      'USER.INCOMING_CALL',
                      'USER.USER_UPDATED',
                      'USER.USER_SETTING_UPDATED',
                      'USER.SUBMIT_FORM_DATA',
                    ]),
                  ),
                )
                .openapi({
                  description:
                    'A filter for WebHooks that checks for a list of configured events. This filter will use a regular expression to determine if it is interested in the events or not. The event itself is converted into a string of format AREA.EVENT. Examples: CONVERSATION.CREATE / USER.UPDATE',
                }),
              url: z.string().max(2048).openapi({ description: 'WebHook callback URL' }),
            })
            .openapi({ required: ['url', 'filter'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The webHook was successfully registered',
      content: {
        'application/json': { schema: WebHookSchema },
        'application/xml': { schema: WebHookSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>an invalid URL</li><li>an invalid event filter</li><li>an unsupported event filter</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    403: { description: 'The maximum number of allowed webHook is reached' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS', 'READ_USER'] }],
})

export const deleteWebhooksRoute = createRoute({
  method: 'delete',
  path: '/webhooks',
  tags: ['Outgoing Webhooks'],
  summary: 'Removes all webHooks',
  description:
    'Unregisters all webHooks of the authenticated user\nOauthScopes: READ_CONVERSATIONS, READ_USER',
  operationId: 'removeWebHooks',
  responses: {
    204: { description: 'The operation was successful' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS', 'READ_USER'] }],
})

export const postWebhooksIncomingCreateConversationIdRoute = createRoute({
  method: 'post',
  path: '/webhooks/incoming/create/{conversationId}',
  tags: ['Incoming Webhooks'],
  summary: 'Create a new webhook for existing conversation.',
  description:
    'Create a new webhook. Conversation must exist and creater has to be participant.\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'createIncomingWebhook',
  request: {
    params: z.object({
      conversationId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the conversation.',
            in: 'path',
            name: 'conversationId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'The name of the webhook',
            in: 'query',
            name: 'name',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      userId: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the user of the webhook',
            in: 'query',
            name: 'userId',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
      description: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'A short description of the webhook',
            in: 'query',
            name: 'description',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The created webhook object as JSON string.',
      content: {
        'application/json': { schema: IncomingWebhookSchema },
        'application/xml': { schema: IncomingWebhookSchema },
      },
    },
    400: { description: 'Could not create webhook.' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const getWebhooksIncomingUserUserIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/incoming/user/{userId}',
  tags: ['Incoming Webhooks'],
  summary: 'Get all webhooks of a special user.',
  description:
    'Get all webhooks of a special user.\nOauthScopes: READ_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'getIncomingWebhookByUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    query: z.object({
      pagesize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'Max number of hooks per request. Default is 25',
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { default: 25, format: 'int32', maximum: 100, minimum: 1, type: 'number' },
          },
        }),
      searchpointer: z
        .string()
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            description: 'Start of search if consequtive call.',
            in: 'query',
            name: 'searchpointer',
            required: false,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Result successful',
      content: {
        'application/json': { schema: z.array(IncomingWebhookSchema) },
        'application/xml': { schema: z.array(IncomingWebhookSchema) },
      },
    },
    400: { description: 'The request cannot be fulfilled due to bad syntax' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const postWebhooksIncomingWebhookIdRoute = createRoute({
  method: 'post',
  path: '/webhooks/incoming/{webhookId}',
  tags: ['Incoming Webhooks'],
  summary: 'Post text item for conversation via webhook.',
  description: 'Post text items to conversations via slack apps.',
  operationId: 'postWebhookAsSlackMessage',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the webhook.',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Attached JSON object in slack format.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              fileURL: z.string().exactOptional().openapi({ description: 'missing documentation' }),
              filename: z
                .string()
                .exactOptional()
                .openapi({ description: 'missing documentation' }),
              markdown: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'missing documentation' }),
              subject: z.string().exactOptional().openapi({ description: 'missing documentation' }),
              text: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The text which will occur in the conversation. May contain formats like *bold* or _italic_',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Message was posted to conversation' },
    400: { description: 'The request cannot be fulfilled due to bad syntax' },
    401: { description: 'The authentication was not successful' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
})

export const deleteWebhooksIncomingWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/incoming/{webhookId}',
  tags: ['Incoming Webhooks'],
  summary: 'Delete an existing webhook',
  description:
    'Delete a new webhook. Webhook must exist\nOauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS',
  operationId: 'deleteIncomingWebhook',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The id of the webhook',
            in: 'path',
            name: 'webhookId',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The webhook was deleted' },
    401: { description: 'The authentication was not successful' },
    404: { description: 'Could not find webhook' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'WRITE_CONVERSATIONS', 'MANAGE_CONVERSATIONS'] }],
})

export const postWebhooksPresenceRoute = createRoute({
  method: 'post',
  path: '/webhooks/presence',
  tags: ['Outgoing Webhooks'],
  summary: 'Registers Presence WebHook registration',
  description:
    'Registers a webHook that has a presence filter with the given URL and userIds. There is a maximum number of userIds allowed\nOauthScopes: READ_USER',
  operationId: 'addPresenceWebHook',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              url: z.string().max(2048).openapi({ description: 'WebHook callback URL' }),
              userIds: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(6500)),
                )
                .openapi({ description: 'The IDs of the users to subscribe for their presence' }),
            })
            .openapi({ required: ['url', 'userIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The webHook was successfully registered',
      content: {
        'application/json': { schema: WebHookSchema },
        'application/xml': { schema: WebHookSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>an invalid URL</li><li>one or more invalid userIds</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    403: {
      description:
        'The maximum number of allowed userIds is reached or the maximum number of allowed webHook is reached',
    },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_USER'] }],
})

export const putWebhooksPresenceIdRoute = createRoute({
  method: 'put',
  path: '/webhooks/presence/{id}',
  tags: ['Outgoing Webhooks'],
  summary: 'Updates a Presence WebHook registration',
  description:
    'Updates a registration of a webHook that has a presence filter. The update can be performed either on the URL and/or the userIds. The new userIds, if any, will override any existing userIds.\nOauthScopes: READ_USER',
  operationId: 'updatePresenceWebHook',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The unique ID of the webHook to update',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              url: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'WebHook callback URL' }),
              userIds: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().max(6500)),
                )
                .exactOptional()
                .openapi({ description: 'The IDs of the users to subscribe for their presence' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The webHook registration was successfully updated',
      content: {
        'application/json': { schema: WebHookSchema },
        'application/xml': { schema: WebHookSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>an invalid URL</li><li>one or more invalid userIds</li><li>no input parameter is provided</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    403: { description: 'The maximum number of allowed userIds is reached' },
    404: { description: 'The webHook does not exist' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_USER'] }],
})

export const getWebhooksIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/{id}',
  tags: ['Outgoing Webhooks'],
  summary: 'Gets a webHook',
  description:
    'Gets the registered webHook with the given ID.\nOauthScopes: READ_CONVERSATIONS, READ_USER',
  operationId: 'getWebHookById',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The unique ID of the webHook to fetch',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The registered webHook with the given ID',
      content: {
        'application/json': { schema: WebHookSchema },
        'application/xml': { schema: WebHookSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the data format of the given id does not match a UUID</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    404: { description: 'The webHook does not exist' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS', 'READ_USER'] }],
})

export const putWebhooksIdRoute = createRoute({
  method: 'put',
  path: '/webhooks/{id}',
  tags: ['Outgoing Webhooks'],
  summary: 'Updates a WebHook registration',
  description:
    'Updates a webHook registration with the given filter and callback URL.\nOauthScopes: READ_CONVERSATIONS, READ_USER',
  operationId: 'updateWebHook',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The unique ID of the webHook to update',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              filter: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z.enum([
                      'CONVERSATION.CREATE',
                      'CONVERSATION.UPDATE',
                      'CONVERSATION.ADD_ITEM',
                      'CONVERSATION.UPDATE_ITEM',
                      'USER.INCOMING_CALL',
                      'USER.USER_UPDATED',
                      'USER.USER_SETTING_UPDATED',
                      'USER.SUBMIT_FORM_DATA',
                    ]),
                  ),
                )
                .exactOptional()
                .openapi({
                  description:
                    'A filter for WebHooks that checks for a list of configured events. This filter will use a regular expression to determine if it is interested in the events or not. The event itself is converted into a string of format AREA.EVENT. Examples: CONVERSATION.CREATE / USER.UPDATE',
                }),
              url: z
                .string()
                .max(2048)
                .exactOptional()
                .openapi({ description: 'WebHook callback URL' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The webHook registration was successfully updated',
      content: {
        'application/json': { schema: WebHookSchema },
        'application/xml': { schema: WebHookSchema },
      },
    },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>an invalid URL</li><li>an invalid event filter</li><li>an unsupported event filter</li><li>no input parameter is provided</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    404: { description: 'The webHook does not exist' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS', 'READ_USER'] }],
})

export const deleteWebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{id}',
  tags: ['Outgoing Webhooks'],
  summary: 'Removes a registered webHook',
  description:
    'Unregisters the webHook with the given ID.\nOauthScopes: READ_CONVERSATIONS, READ_USER',
  operationId: 'removeWebHook',
  request: {
    params: z.object({
      id: z
        .string()
        .max(2048)
        .openapi({
          param: {
            description: 'The unique ID of the webHook to remove',
            in: 'path',
            name: 'id',
            required: true,
            schema: { maxLength: 2048, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The operation was successful' },
    400: {
      description:
        'The request cannot be fulfilled due to bad syntax: <ul><li>the data format of the given id does not match a UUID</li><li>a field constraint is violated</li></ul>',
    },
    401: { description: 'The authentication was not successful' },
    404: { description: 'The webHook does not exist' },
    500: {
      description:
        'The server encountered an internal error and the operation could not be completed.',
    },
    503: { description: 'The server is currently unable to receive requests.' },
  },
  security: [{ oauth: ['ALL', 'READ_CONVERSATIONS', 'READ_USER'] }],
})
