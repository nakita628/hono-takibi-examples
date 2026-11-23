type Media = { resourceName?: string | undefined }
type SpaceDetails = { description?: string | undefined; guidelines?: string | undefined }
type Space = {
  adminInstalled?: boolean | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  externalUserAllowed?: boolean | undefined
  importMode?: boolean | undefined
  name?: string | undefined
  singleUserBotDm?: boolean | undefined
  spaceDetails?: SpaceDetails | undefined
  spaceHistoryState?: 'HISTORY_STATE_UNSPECIFIED' | 'HISTORY_OFF' | 'HISTORY_ON' | undefined
  spaceThreadingState?:
    | 'SPACE_THREADING_STATE_UNSPECIFIED'
    | 'THREADED_MESSAGES'
    | 'GROUPED_MESSAGES'
    | 'UNTHREADED_MESSAGES'
    | undefined
  spaceType?: 'SPACE_TYPE_UNSPECIFIED' | 'SPACE' | 'GROUP_CHAT' | 'DIRECT_MESSAGE' | undefined
  threaded?: boolean | undefined
  type?: 'TYPE_UNSPECIFIED' | 'ROOM' | 'DM' | undefined
}
type ListSpacesResponse = { nextPageToken?: string | undefined; spaces?: Space[] | undefined }
type Group = { name?: string | undefined }
type User = {
  displayName?: string | undefined
  domainId?: string | undefined
  isAnonymous?: boolean | undefined
  name?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'HUMAN' | 'BOT' | undefined
}
type Membership = {
  createTime?: string | undefined
  deleteTime?: string | undefined
  groupMember?: Group | undefined
  member?: User | undefined
  name?: string | undefined
  role?: 'MEMBERSHIP_ROLE_UNSPECIFIED' | 'ROLE_MEMBER' | 'ROLE_MANAGER' | undefined
  state?: 'MEMBERSHIP_STATE_UNSPECIFIED' | 'JOINED' | 'INVITED' | 'NOT_A_MEMBER' | undefined
}
type SetUpSpaceRequest = {
  memberships?: Membership[] | undefined
  requestId?: string | undefined
  space?: Space | undefined
}
type Empty = { [x: string]: unknown }
type AttachmentDataRef = {
  attachmentUploadToken?: string | undefined
  resourceName?: string | undefined
}
type DriveDataRef = { driveFileId?: string | undefined }
type Attachment = {
  attachmentDataRef?: AttachmentDataRef | undefined
  contentName?: string | undefined
  contentType?: string | undefined
  downloadUri?: string | undefined
  driveDataRef?: DriveDataRef | undefined
  name?: string | undefined
  source?: 'SOURCE_UNSPECIFIED' | 'DRIVE_FILE' | 'UPLOADED_CONTENT' | undefined
  thumbnailUri?: string | undefined
}
type ActionStatus = {
  statusCode?:
    | 'OK'
    | 'CANCELLED'
    | 'UNKNOWN'
    | 'INVALID_ARGUMENT'
    | 'DEADLINE_EXCEEDED'
    | 'NOT_FOUND'
    | 'ALREADY_EXISTS'
    | 'PERMISSION_DENIED'
    | 'UNAUTHENTICATED'
    | 'RESOURCE_EXHAUSTED'
    | 'FAILED_PRECONDITION'
    | 'ABORTED'
    | 'OUT_OF_RANGE'
    | 'UNIMPLEMENTED'
    | 'INTERNAL'
    | 'UNAVAILABLE'
    | 'DATA_LOSS'
    | undefined
  userFacingMessage?: string | undefined
}
type GoogleAppsCardV1ActionParameter = { key?: string | undefined; value?: string | undefined }
type GoogleAppsCardV1Action = {
  function?: string | undefined
  interaction?: 'INTERACTION_UNSPECIFIED' | 'OPEN_DIALOG' | undefined
  loadIndicator?: 'SPINNER' | 'NONE' | undefined
  parameters?: GoogleAppsCardV1ActionParameter[] | undefined
  persistValues?: boolean | undefined
}
type GoogleAppsCardV1OpenLink = {
  onClose?: 'NOTHING' | 'RELOAD' | undefined
  openAs?: 'FULL_SIZE' | 'OVERLAY' | undefined
  url?: string | undefined
}
type GoogleAppsCardV1OnClick = {
  action?: GoogleAppsCardV1Action | undefined
  card?: GoogleAppsCardV1Card | undefined
  openDynamicLinkAction?: GoogleAppsCardV1Action | undefined
  openLink?: GoogleAppsCardV1OpenLink | undefined
}
type GoogleAppsCardV1CardAction = {
  actionLabel?: string | undefined
  onClick?: GoogleAppsCardV1OnClick | undefined
}
type Color = {
  alpha?: number | undefined
  blue?: number | undefined
  green?: number | undefined
  red?: number | undefined
}
type GoogleAppsCardV1Icon = {
  altText?: string | undefined
  iconUrl?: string | undefined
  imageType?: 'SQUARE' | 'CIRCLE' | undefined
  knownIcon?: string | undefined
}
type GoogleAppsCardV1Button = {
  altText?: string | undefined
  color?: Color | undefined
  disabled?: boolean | undefined
  icon?: GoogleAppsCardV1Icon | undefined
  onClick?: GoogleAppsCardV1OnClick | undefined
  text?: string | undefined
}
type GoogleAppsCardV1CardFixedFooter = {
  primaryButton?: GoogleAppsCardV1Button | undefined
  secondaryButton?: GoogleAppsCardV1Button | undefined
}
type GoogleAppsCardV1CardHeader = {
  imageAltText?: string | undefined
  imageType?: 'SQUARE' | 'CIRCLE' | undefined
  imageUrl?: string | undefined
  subtitle?: string | undefined
  title?: string | undefined
}
type GoogleAppsCardV1ButtonList = { buttons?: GoogleAppsCardV1Button[] | undefined }
type GoogleAppsCardV1DateTimePicker = {
  label?: string | undefined
  name?: string | undefined
  onChangeAction?: GoogleAppsCardV1Action | undefined
  timezoneOffsetDate?: number | undefined
  type?: 'DATE_AND_TIME' | 'DATE_ONLY' | 'TIME_ONLY' | undefined
  valueMsEpoch?: string | undefined
}
type GoogleAppsCardV1SwitchControl = {
  controlType?: 'SWITCH' | 'CHECKBOX' | 'CHECK_BOX' | undefined
  name?: string | undefined
  onChangeAction?: GoogleAppsCardV1Action | undefined
  selected?: boolean | undefined
  value?: string | undefined
}
type GoogleAppsCardV1DecoratedText = {
  bottomLabel?: string | undefined
  button?: GoogleAppsCardV1Button | undefined
  endIcon?: GoogleAppsCardV1Icon | undefined
  icon?: GoogleAppsCardV1Icon | undefined
  onClick?: GoogleAppsCardV1OnClick | undefined
  startIcon?: GoogleAppsCardV1Icon | undefined
  switchControl?: GoogleAppsCardV1SwitchControl | undefined
  text?: string | undefined
  topLabel?: string | undefined
  wrapText?: boolean | undefined
}
type GoogleAppsCardV1Image = {
  altText?: string | undefined
  imageUrl?: string | undefined
  onClick?: GoogleAppsCardV1OnClick | undefined
}
type GoogleAppsCardV1SelectionItem = {
  bottomText?: string | undefined
  selected?: boolean | undefined
  startIconUri?: string | undefined
  text?: string | undefined
  value?: string | undefined
}
type SpaceDataSource = { defaultToCurrentSpace?: boolean | undefined }
type ChatClientDataSourceMarkup = { spaceDataSource?: SpaceDataSource | undefined }
type HostAppDataSourceMarkup = { chatDataSource?: ChatClientDataSourceMarkup | undefined }
type GoogleAppsCardV1PlatformDataSource = {
  commonDataSource?: 'UNKNOWN' | 'USER' | undefined
  hostAppDataSource?: HostAppDataSourceMarkup | undefined
}
type GoogleAppsCardV1SelectionInput = {
  externalDataSource?: GoogleAppsCardV1Action | undefined
  items?: GoogleAppsCardV1SelectionItem[] | undefined
  label?: string | undefined
  multiSelectMaxSelectedItems?: number | undefined
  multiSelectMinQueryLength?: number | undefined
  name?: string | undefined
  onChangeAction?: GoogleAppsCardV1Action | undefined
  platformDataSource?: GoogleAppsCardV1PlatformDataSource | undefined
  type?: 'CHECK_BOX' | 'RADIO_BUTTON' | 'SWITCH' | 'DROPDOWN' | 'MULTI_SELECT' | undefined
}
type GoogleAppsCardV1SuggestionItem = { text?: string | undefined }
type GoogleAppsCardV1Suggestions = { items?: GoogleAppsCardV1SuggestionItem[] | undefined }
type GoogleAppsCardV1TextInput = {
  autoCompleteAction?: GoogleAppsCardV1Action | undefined
  hintText?: string | undefined
  initialSuggestions?: GoogleAppsCardV1Suggestions | undefined
  label?: string | undefined
  name?: string | undefined
  onChangeAction?: GoogleAppsCardV1Action | undefined
  placeholderText?: string | undefined
  type?: 'SINGLE_LINE' | 'MULTIPLE_LINE' | undefined
  value?: string | undefined
}
type GoogleAppsCardV1TextParagraph = { text?: string | undefined }
type GoogleAppsCardV1Widgets = {
  buttonList?: GoogleAppsCardV1ButtonList | undefined
  dateTimePicker?: GoogleAppsCardV1DateTimePicker | undefined
  decoratedText?: GoogleAppsCardV1DecoratedText | undefined
  image?: GoogleAppsCardV1Image | undefined
  selectionInput?: GoogleAppsCardV1SelectionInput | undefined
  textInput?: GoogleAppsCardV1TextInput | undefined
  textParagraph?: GoogleAppsCardV1TextParagraph | undefined
}
type GoogleAppsCardV1Column = {
  horizontalAlignment?: 'HORIZONTAL_ALIGNMENT_UNSPECIFIED' | 'START' | 'CENTER' | 'END' | undefined
  horizontalSizeStyle?:
    | 'HORIZONTAL_SIZE_STYLE_UNSPECIFIED'
    | 'FILL_AVAILABLE_SPACE'
    | 'FILL_MINIMUM_SPACE'
    | undefined
  verticalAlignment?: 'VERTICAL_ALIGNMENT_UNSPECIFIED' | 'CENTER' | 'TOP' | 'BOTTOM' | undefined
  widgets?: GoogleAppsCardV1Widgets[] | undefined
}
type GoogleAppsCardV1Columns = { columnItems?: GoogleAppsCardV1Column[] | undefined }
type GoogleAppsCardV1Divider = { [x: string]: unknown }
type GoogleAppsCardV1BorderStyle = {
  cornerRadius?: number | undefined
  strokeColor?: Color | undefined
  type?: 'BORDER_TYPE_UNSPECIFIED' | 'NO_BORDER' | 'STROKE' | undefined
}
type GoogleAppsCardV1ImageCropStyle = {
  aspectRatio?: number | undefined
  type?:
    | 'IMAGE_CROP_TYPE_UNSPECIFIED'
    | 'SQUARE'
    | 'CIRCLE'
    | 'RECTANGLE_CUSTOM'
    | 'RECTANGLE_4_3'
    | undefined
}
type GoogleAppsCardV1ImageComponent = {
  altText?: string | undefined
  borderStyle?: GoogleAppsCardV1BorderStyle | undefined
  cropStyle?: GoogleAppsCardV1ImageCropStyle | undefined
  imageUri?: string | undefined
}
type GoogleAppsCardV1GridItem = {
  id?: string | undefined
  image?: GoogleAppsCardV1ImageComponent | undefined
  layout?: 'GRID_ITEM_LAYOUT_UNSPECIFIED' | 'TEXT_BELOW' | 'TEXT_ABOVE' | undefined
  subtitle?: string | undefined
  title?: string | undefined
}
type GoogleAppsCardV1Grid = {
  borderStyle?: GoogleAppsCardV1BorderStyle | undefined
  columnCount?: number | undefined
  items?: GoogleAppsCardV1GridItem[] | undefined
  onClick?: GoogleAppsCardV1OnClick | undefined
  title?: string | undefined
}
type GoogleAppsCardV1Widget = {
  buttonList?: GoogleAppsCardV1ButtonList | undefined
  columns?: GoogleAppsCardV1Columns | undefined
  dateTimePicker?: GoogleAppsCardV1DateTimePicker | undefined
  decoratedText?: GoogleAppsCardV1DecoratedText | undefined
  divider?: GoogleAppsCardV1Divider | undefined
  grid?: GoogleAppsCardV1Grid | undefined
  horizontalAlignment?: 'HORIZONTAL_ALIGNMENT_UNSPECIFIED' | 'START' | 'CENTER' | 'END' | undefined
  image?: GoogleAppsCardV1Image | undefined
  selectionInput?: GoogleAppsCardV1SelectionInput | undefined
  textInput?: GoogleAppsCardV1TextInput | undefined
  textParagraph?: GoogleAppsCardV1TextParagraph | undefined
}
type GoogleAppsCardV1Section = {
  collapsible?: boolean | undefined
  header?: string | undefined
  uncollapsibleWidgetsCount?: number | undefined
  widgets?: GoogleAppsCardV1Widget[] | undefined
}
type GoogleAppsCardV1Card = {
  cardActions?: GoogleAppsCardV1CardAction[] | undefined
  displayStyle?: 'DISPLAY_STYLE_UNSPECIFIED' | 'PEEK' | 'REPLACE' | undefined
  fixedFooter?: GoogleAppsCardV1CardFixedFooter | undefined
  header?: GoogleAppsCardV1CardHeader | undefined
  name?: string | undefined
  peekCardHeader?: GoogleAppsCardV1CardHeader | undefined
  sectionDividerStyle?: 'DIVIDER_STYLE_UNSPECIFIED' | 'SOLID_DIVIDER' | 'NO_DIVIDER' | undefined
  sections?: GoogleAppsCardV1Section[] | undefined
}
type Dialog = { body?: GoogleAppsCardV1Card | undefined }
type DialogAction = { actionStatus?: ActionStatus | undefined; dialog?: Dialog | undefined }
type SelectionItems = { items?: GoogleAppsCardV1SelectionItem[] | undefined }
type UpdatedWidget = { suggestions?: SelectionItems | undefined; widget?: string | undefined }
type ActionResponse = {
  dialogAction?: DialogAction | undefined
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'NEW_MESSAGE'
    | 'UPDATE_MESSAGE'
    | 'UPDATE_USER_MESSAGE_CARDS'
    | 'REQUEST_CONFIG'
    | 'DIALOG'
    | 'UPDATE_WIDGET'
    | undefined
  updatedWidget?: UpdatedWidget | undefined
  url?: string | undefined
}
type SlashCommandMetadata = {
  bot?: User | undefined
  commandId?: string | undefined
  commandName?: string | undefined
  triggersDialog?: boolean | undefined
  type?: 'TYPE_UNSPECIFIED' | 'ADD' | 'INVOKE' | undefined
}
type UserMentionMetadata = {
  type?: 'TYPE_UNSPECIFIED' | 'ADD' | 'MENTION' | undefined
  user?: User | undefined
}
type Annotation = {
  length?: number | undefined
  slashCommand?: SlashCommandMetadata | undefined
  startIndex?: number | undefined
  type?: 'ANNOTATION_TYPE_UNSPECIFIED' | 'USER_MENTION' | 'SLASH_COMMAND' | undefined
  userMention?: UserMentionMetadata | undefined
}
type AttachedGif = { uri?: string | undefined }
type ActionParameter = { key?: string | undefined; value?: string | undefined }
type FormAction = {
  actionMethodName?: string | undefined
  parameters?: ActionParameter[] | undefined
}
type OpenLink = { url?: string | undefined }
type OnClick = { action?: FormAction | undefined; openLink?: OpenLink | undefined }
type CardAction = { actionLabel?: string | undefined; onClick?: OnClick | undefined }
type CardHeader = {
  imageStyle?: 'IMAGE_STYLE_UNSPECIFIED' | 'IMAGE' | 'AVATAR' | undefined
  imageUrl?: string | undefined
  subtitle?: string | undefined
  title?: string | undefined
}
type ImageButton = {
  icon?:
    | 'ICON_UNSPECIFIED'
    | 'AIRPLANE'
    | 'BOOKMARK'
    | 'BUS'
    | 'CAR'
    | 'CLOCK'
    | 'CONFIRMATION_NUMBER_ICON'
    | 'DOLLAR'
    | 'DESCRIPTION'
    | 'EMAIL'
    | 'EVENT_PERFORMER'
    | 'EVENT_SEAT'
    | 'FLIGHT_ARRIVAL'
    | 'FLIGHT_DEPARTURE'
    | 'HOTEL'
    | 'HOTEL_ROOM_TYPE'
    | 'INVITE'
    | 'MAP_PIN'
    | 'MEMBERSHIP'
    | 'MULTIPLE_PEOPLE'
    | 'OFFER'
    | 'PERSON'
    | 'PHONE'
    | 'RESTAURANT_ICON'
    | 'SHOPPING_CART'
    | 'STAR'
    | 'STORE'
    | 'TICKET'
    | 'TRAIN'
    | 'VIDEO_CAMERA'
    | 'VIDEO_PLAY'
    | undefined
  iconUrl?: string | undefined
  name?: string | undefined
  onClick?: OnClick | undefined
}
type TextButton = { onClick?: OnClick | undefined; text?: string | undefined }
type Button = { imageButton?: ImageButton | undefined; textButton?: TextButton | undefined }
type Image = {
  aspectRatio?: number | undefined
  imageUrl?: string | undefined
  onClick?: OnClick | undefined
}
type KeyValue = {
  bottomLabel?: string | undefined
  button?: Button | undefined
  content?: string | undefined
  contentMultiline?: boolean | undefined
  icon?:
    | 'ICON_UNSPECIFIED'
    | 'AIRPLANE'
    | 'BOOKMARK'
    | 'BUS'
    | 'CAR'
    | 'CLOCK'
    | 'CONFIRMATION_NUMBER_ICON'
    | 'DOLLAR'
    | 'DESCRIPTION'
    | 'EMAIL'
    | 'EVENT_PERFORMER'
    | 'EVENT_SEAT'
    | 'FLIGHT_ARRIVAL'
    | 'FLIGHT_DEPARTURE'
    | 'HOTEL'
    | 'HOTEL_ROOM_TYPE'
    | 'INVITE'
    | 'MAP_PIN'
    | 'MEMBERSHIP'
    | 'MULTIPLE_PEOPLE'
    | 'OFFER'
    | 'PERSON'
    | 'PHONE'
    | 'RESTAURANT_ICON'
    | 'SHOPPING_CART'
    | 'STAR'
    | 'STORE'
    | 'TICKET'
    | 'TRAIN'
    | 'VIDEO_CAMERA'
    | 'VIDEO_PLAY'
    | undefined
  iconUrl?: string | undefined
  onClick?: OnClick | undefined
  topLabel?: string | undefined
}
type TextParagraph = { text?: string | undefined }
type WidgetMarkup = {
  buttons?: Button[] | undefined
  image?: Image | undefined
  keyValue?: KeyValue | undefined
  textParagraph?: TextParagraph | undefined
}
type Section = { header?: string | undefined; widgets?: WidgetMarkup[] | undefined }
type Card = {
  cardActions?: CardAction[] | undefined
  header?: CardHeader | undefined
  name?: string | undefined
  sections?: Section[] | undefined
}
type CardWithId = { card?: GoogleAppsCardV1Card | undefined; cardId?: string | undefined }
type DeletionMetadata = {
  deletionType?:
    | 'DELETION_TYPE_UNSPECIFIED'
    | 'CREATOR'
    | 'SPACE_OWNER'
    | 'ADMIN'
    | 'APP_MESSAGE_EXPIRY'
    | 'CREATOR_VIA_APP'
    | 'SPACE_OWNER_VIA_APP'
    | undefined
}
type CustomEmoji = { uid?: string | undefined }
type Emoji = { customEmoji?: CustomEmoji | undefined; unicode?: string | undefined }
type EmojiReactionSummary = { emoji?: Emoji | undefined; reactionCount?: number | undefined }
type MatchedUrl = { url?: string | undefined }
type QuotedMessageMetadata = { lastUpdateTime?: string | undefined; name?: string | undefined }
type SlashCommand = { commandId?: string | undefined }
type Thread = { name?: string | undefined; threadKey?: string | undefined }
type Message = {
  actionResponse?: ActionResponse | undefined
  annotations?: Annotation[] | undefined
  argumentText?: string | undefined
  attachedGifs?: AttachedGif[] | undefined
  attachment?: Attachment[] | undefined
  cards?: Card[] | undefined
  cardsV2?: CardWithId[] | undefined
  clientAssignedMessageId?: string | undefined
  createTime?: string | undefined
  deleteTime?: string | undefined
  deletionMetadata?: DeletionMetadata | undefined
  emojiReactionSummaries?: EmojiReactionSummary[] | undefined
  fallbackText?: string | undefined
  formattedText?: string | undefined
  lastUpdateTime?: string | undefined
  matchedUrl?: MatchedUrl | undefined
  name?: string | undefined
  privateMessageViewer?: User | undefined
  quotedMessageMetadata?: QuotedMessageMetadata | undefined
  sender?: User | undefined
  slashCommand?: SlashCommand | undefined
  space?: Space | undefined
  text?: string | undefined
  thread?: Thread | undefined
  threadReply?: boolean | undefined
}
type CompleteImportSpaceRequest = { [x: string]: unknown }
type CompleteImportSpaceResponse = { space?: Space | undefined }
type UploadAttachmentRequest = { filename?: string | undefined }
type UploadAttachmentResponse = { attachmentDataRef?: AttachmentDataRef | undefined }
type ListMembershipsResponse = {
  memberships?: Membership[] | undefined
  nextPageToken?: string | undefined
}
type ListMessagesResponse = { messages?: Message[] | undefined; nextPageToken?: string | undefined }
type Reaction = { emoji?: Emoji | undefined; name?: string | undefined; user?: User | undefined }
type ListReactionsResponse = {
  nextPageToken?: string | undefined
  reactions?: Reaction[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/media/:resourceName': {
      $get: {
        input: { param: { resourceName: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Media
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/spaces': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListSpacesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            requestId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Space }
        output: Space
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/spaces:findDirectMessage': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Space
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/spaces:setup': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetUpSpaceRequest }
        output: Space
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            allowMissing?: boolean | undefined
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Message }
        output: Message
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          query: {
            allowMissing?: boolean | undefined
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Message }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:completeImport': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CompleteImportSpaceRequest }
        output: CompleteImportSpaceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/attachments:upload': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: UploadAttachmentRequest }
        output: UploadAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/members': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            showGroups?: boolean | undefined
            showInvited?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Membership }
        output: Membership
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/messages': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListMessagesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            messageId?: string | undefined
            messageReplyOption?:
              | 'MESSAGE_REPLY_OPTION_UNSPECIFIED'
              | 'REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD'
              | 'REPLY_MESSAGE_OR_FAIL'
              | undefined
            requestId?: string | undefined
            threadKey?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Message }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/reactions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListReactionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Reaction }
        output: Reaction
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
