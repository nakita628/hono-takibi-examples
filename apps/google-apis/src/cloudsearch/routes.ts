import { createRoute, z } from '@hono/zod-openapi'

const GoogleChatV1WidgetMarkupFormActionActionParameterSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the parameter for the action script.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the parameter.' }),
  })
  .openapi({
    description:
      'List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters.',
    required: [],
  })
  .openapi('GoogleChatV1WidgetMarkupFormActionActionParameter')

const GoogleChatV1WidgetMarkupFormActionSchema = z
  .object({
    actionMethodName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. The same method name can be used for several elements that trigger a common behavior if desired.',
      }),
    parameters: z
      .array(GoogleChatV1WidgetMarkupFormActionActionParameterSchema)
      .exactOptional()
      .openapi({ description: 'List of action parameters.' }),
  })
  .openapi({
    description:
      'A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.',
    required: [],
  })
  .openapi('GoogleChatV1WidgetMarkupFormAction')

const GoogleChatV1WidgetMarkupOpenLinkSchema = z
  .object({ url: z.string().exactOptional().openapi({ description: 'The URL to open.' }) })
  .openapi({ description: 'A link that opens a new window.', required: [] })
  .openapi('GoogleChatV1WidgetMarkupOpenLink')

const GoogleChatV1WidgetMarkupOnClickSchema = z
  .object({
    action: GoogleChatV1WidgetMarkupFormActionSchema.exactOptional().openapi({
      description: 'A form action will be triggered by this onclick if specified.',
    }),
    openLink: GoogleChatV1WidgetMarkupOpenLinkSchema.exactOptional().openapi({
      description: 'This onclick triggers an open link action if specified.',
    }),
  })
  .openapi({ description: 'An onclick action (e.g. open a link).', required: [] })
  .openapi('GoogleChatV1WidgetMarkupOnClick')

const GoogleChatV1ContextualAddOnMarkupCardCardActionSchema = z
  .object({
    actionLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label used to be displayed in the action menu item.' }),
    onClick: GoogleChatV1WidgetMarkupOnClickSchema.exactOptional().openapi({
      description: 'The onclick action for this action item.',
    }),
  })
  .openapi({
    description:
      'A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps.',
    required: [],
  })
  .openapi('GoogleChatV1ContextualAddOnMarkupCardCardAction')

const GoogleChatV1ContextualAddOnMarkupCardCardHeaderSchema = z
  .object({
    imageStyle: z
      .enum(['IMAGE_STYLE_UNSPECIFIED', 'IMAGE', 'AVATAR'])
      .exactOptional()
      .openapi({ description: "The image's type (e.g. square border or circular border)." }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the image in the card header.' }),
    subtitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subtitle of the card header.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each will take up 1 line. If only the title is specified, it will take up both lines.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleChatV1ContextualAddOnMarkupCardCardHeader')

const GoogleChatV1WidgetMarkupImageButtonSchema = z
  .object({
    icon: z
      .enum([
        'ICON_UNSPECIFIED',
        'AIRPLANE',
        'BOOKMARK',
        'BUS',
        'CAR',
        'CLOCK',
        'CONFIRMATION_NUMBER_ICON',
        'DOLLAR',
        'DESCRIPTION',
        'EMAIL',
        'EVENT_PERFORMER',
        'EVENT_SEAT',
        'FLIGHT_ARRIVAL',
        'FLIGHT_DEPARTURE',
        'HOTEL',
        'HOTEL_ROOM_TYPE',
        'INVITE',
        'MAP_PIN',
        'MEMBERSHIP',
        'MULTIPLE_PEOPLE',
        'OFFER',
        'PERSON',
        'PHONE',
        'RESTAURANT_ICON',
        'SHOPPING_CART',
        'STAR',
        'STORE',
        'TICKET',
        'TRAIN',
        'VIDEO_CAMERA',
        'VIDEO_PLAY',
      ])
      .exactOptional()
      .openapi({
        description: 'The icon specified by an enum that indices to an icon provided by Chat API.',
      }),
    iconUrl: z.string().exactOptional().openapi({ description: 'The icon specified by a URL.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of this image_button which will be used for accessibility. Default value will be provided if developers don't specify.",
      }),
    onClick: GoogleChatV1WidgetMarkupOnClickSchema.exactOptional().openapi({
      description: 'The onclick action.',
    }),
  })
  .openapi({ description: 'An image button with an onclick action.', required: [] })
  .openapi('GoogleChatV1WidgetMarkupImageButton')

const GoogleChatV1WidgetMarkupTextButtonSchema = z
  .object({
    onClick: GoogleChatV1WidgetMarkupOnClickSchema.exactOptional().openapi({
      description: 'The onclick action of the button.',
    }),
    text: z.string().exactOptional().openapi({ description: 'The text of the button.' }),
  })
  .openapi({ description: 'A button with text and onclick action.', required: [] })
  .openapi('GoogleChatV1WidgetMarkupTextButton')

const GoogleChatV1WidgetMarkupButtonSchema = z
  .object({
    imageButton: GoogleChatV1WidgetMarkupImageButtonSchema.exactOptional().openapi({
      description: 'A button with image and onclick action.',
    }),
    textButton: GoogleChatV1WidgetMarkupTextButtonSchema.exactOptional().openapi({
      description: 'A button with text and onclick action.',
    }),
  })
  .openapi({ description: 'A button. Can be a text button or an image button.', required: [] })
  .openapi('GoogleChatV1WidgetMarkupButton')

const GoogleChatV1WidgetMarkupImageSchema = z
  .object({
    aspectRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The aspect ratio of this image (width/height). This field allows clients to reserve the right height for the image while waiting for it to load. It's not meant to override the native aspect ratio of the image. If unset, the server fills it by prefetching the image.",
      }),
    imageUrl: z.string().exactOptional().openapi({ description: 'The URL of the image.' }),
    onClick: GoogleChatV1WidgetMarkupOnClickSchema.exactOptional().openapi({
      description: 'The onclick action.',
    }),
  })
  .openapi({
    description: 'An image that is specified by a URL and can have an onclick action.',
    required: [],
  })
  .openapi('GoogleChatV1WidgetMarkupImage')

const GoogleChatV1WidgetMarkupKeyValueSchema = z
  .object({
    bottomLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text of the bottom label. Formatted text supported.' }),
    button: GoogleChatV1WidgetMarkupButtonSchema.exactOptional().openapi({
      description: 'A button that can be clicked to trigger an action.',
    }),
    content: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The text of the content. Formatted text supported and always required.',
      }),
    contentMultiline: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the content should be multiline.' }),
    icon: z
      .enum([
        'ICON_UNSPECIFIED',
        'AIRPLANE',
        'BOOKMARK',
        'BUS',
        'CAR',
        'CLOCK',
        'CONFIRMATION_NUMBER_ICON',
        'DOLLAR',
        'DESCRIPTION',
        'EMAIL',
        'EVENT_PERFORMER',
        'EVENT_SEAT',
        'FLIGHT_ARRIVAL',
        'FLIGHT_DEPARTURE',
        'HOTEL',
        'HOTEL_ROOM_TYPE',
        'INVITE',
        'MAP_PIN',
        'MEMBERSHIP',
        'MULTIPLE_PEOPLE',
        'OFFER',
        'PERSON',
        'PHONE',
        'RESTAURANT_ICON',
        'SHOPPING_CART',
        'STAR',
        'STORE',
        'TICKET',
        'TRAIN',
        'VIDEO_CAMERA',
        'VIDEO_PLAY',
      ])
      .exactOptional()
      .openapi({
        description:
          'An enum value that will be replaced by the Chat API with the corresponding icon image.',
      }),
    iconUrl: z.string().exactOptional().openapi({ description: 'The icon specified by a URL.' }),
    onClick: GoogleChatV1WidgetMarkupOnClickSchema.exactOptional().openapi({
      description:
        'The onclick action. Only the top label, bottom label and content region are clickable.',
    }),
    topLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text of the top label. Formatted text supported.' }),
  })
  .openapi({
    description:
      'A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button.',
    required: [],
  })
  .openapi('GoogleChatV1WidgetMarkupKeyValue')

const GoogleChatV1WidgetMarkupTextParagraphSchema = z
  .object({ text: z.string().exactOptional() })
  .openapi({ description: 'A paragraph of text. Formatted text supported.', required: [] })
  .openapi('GoogleChatV1WidgetMarkupTextParagraph')

const GoogleChatV1WidgetMarkupSchema = z
  .object({
    buttons: z
      .array(GoogleChatV1WidgetMarkupButtonSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of buttons. Buttons is also oneof data and only one of these fields should be set.',
      }),
    image: GoogleChatV1WidgetMarkupImageSchema.exactOptional().openapi({
      description: 'Display an image in this widget.',
    }),
    keyValue: GoogleChatV1WidgetMarkupKeyValueSchema.exactOptional().openapi({
      description: 'Display a key value item in this widget.',
    }),
    textParagraph: GoogleChatV1WidgetMarkupTextParagraphSchema.exactOptional().openapi({
      description: 'Display a text paragraph in this widget.',
    }),
  })
  .openapi({
    description: 'A widget is a UI element that presents texts, images, etc.',
    required: [],
  })
  .openapi('GoogleChatV1WidgetMarkup')

const GoogleChatV1ContextualAddOnMarkupCardSectionSchema = z
  .object({
    header: z
      .string()
      .exactOptional()
      .openapi({ description: 'The header of the section, text formatted supported.' }),
    widgets: z
      .array(GoogleChatV1WidgetMarkupSchema)
      .exactOptional()
      .openapi({ description: 'A section must contain at least 1 widget.' }),
  })
  .openapi({
    description:
      'A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties (e.g. float).',
    required: [],
  })
  .openapi('GoogleChatV1ContextualAddOnMarkupCardSection')

const GoogleChatV1ContextualAddOnMarkupCardSchema = z
  .object({
    cardActions: z
      .array(GoogleChatV1ContextualAddOnMarkupCardCardActionSchema)
      .exactOptional()
      .openapi({ description: 'The actions of this card.' }),
    header: GoogleChatV1ContextualAddOnMarkupCardCardHeaderSchema.exactOptional().openapi({
      description: 'The header of the card. A header usually contains a title and an image.',
    }),
    name: z.string().exactOptional().openapi({ description: 'Name of the card.' }),
    sections: z
      .array(GoogleChatV1ContextualAddOnMarkupCardSectionSchema)
      .exactOptional()
      .openapi({ description: 'Sections are separated by a line divider.' }),
  })
  .openapi({
    description: 'A card is a UI element that can contain UI widgets such as texts, images.',
    required: [],
  })
  .openapi('GoogleChatV1ContextualAddOnMarkupCard')

const GoogleChatV1ContextualAddOnMarkupSchema = z
  .object({
    cards: z
      .array(GoogleChatV1ContextualAddOnMarkupCardSchema)
      .exactOptional()
      .openapi({
        description: 'A list of cards. A card must contain a header and at least 1 section.',
      }),
  })
  .openapi({
    description: 'The markup for developers to specify the contents of a contextual AddOn.',
    required: [],
  })
  .openapi('GoogleChatV1ContextualAddOnMarkup')

const AppIdSchema = z
  .object({
    appType: z
      .enum(['APP_TYPE_UNSPECIFIED', 'APP', 'GSUITE_APP', 'INCOMING_WEBHOOK'])
      .exactOptional()
      .openapi({ description: 'Enum indicating the type of App this is.' }),
    gsuiteAppType: z
      .enum([
        'GSUITE_APP_TYPE_UNSPECIFIED',
        'TASKS_APP',
        'CALENDAR_APP',
        'DOCS_APP',
        'SHEETS_APP',
        'SLIDES_APP',
        'MEET_APP',
        'ASSISTIVE_SUGGESTION_APP',
        'CONTACTS_APP',
        'ACTIVITY_FEED_APP',
        'DRIVE_APP',
        'CHAT_IN_MEET_APP',
      ])
      .exactOptional()
      .openapi({
        description:
          'Enum indicating which 1P App this is when app_type is GSUITE_APP. Determined & set by the 1P API as a convenience for all users of this identifier(Eg. clients, chime, backend etc.) to map to 1P properties.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Numeric identifier of the App. Set to Project number for 1/3P Apps. For Webhook, this is WebhookId. Determined & set by the 1P API from App credentials on the side channel.',
      }),
  })
  .openapi({ description: 'Identifier of an App.', required: [] })
  .openapi('AppId')

const UserIdSchema = z
  .object({
    actingUserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Opaque, server-assigned ID of the user profile associated with App/user acting on behalf of the human user. This is currently only set when a 3P application is acting on the user's behalf.",
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Opaque, server-assigned ID of the User.' }),
    originAppId: AppIdSchema.exactOptional().openapi({
      description:
        'Optional. Identifier of the App involved (directly or on behalf of a human creator) in creating this message. This is not set if the user posted a message directly, but is used in the case of, for example, a message being generated by a 1P integration based on a user action (creating an event, creating a task etc). This should only be used on the BE. For clients, please use the field in the FE message proto instead (google3/apps/dynamite/v1/frontend/api/message.proto?q=origin_app_id).',
    }),
    type: z
      .enum(['HUMAN', 'BOT'])
      .exactOptional()
      .openapi({
        description:
          'Clients do not need to send UserType to Backend, but Backend will always send this field to clients per the following rule: 1. For HUMAN Ids, the field is empty but by default .getType() will return HUMAN. 2. For BOT Ids, the field is ALWAYS set to BOT.',
      }),
  })
  .openapi({ description: 'Primary key for User resource.', required: [] })
  .openapi('UserId')

const AppsDynamiteStorageActionActionParameterSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the parameter for the action script.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the parameter.' }),
  })
  .openapi({
    description:
      'List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters.',
    required: [],
  })
  .openapi('AppsDynamiteStorageActionActionParameter')

const AppsDynamiteStorageActionSchema = z
  .object({
    function: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Apps Script function to invoke when the containing element is clicked/activated.',
      }),
    interaction: z.enum(['INTERACTION_UNSPECIFIED', 'OPEN_DIALOG']).exactOptional(),
    loadIndicator: z.enum(['SPINNER', 'NONE']).exactOptional(),
    parameters: z
      .array(AppsDynamiteStorageActionActionParameterSchema)
      .exactOptional()
      .openapi({ description: 'List of action parameters.' }),
    persistValues: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether form values persist after the action. The default value is `false`. If `true`, form values remain after the action is triggered. When using [LoadIndicator.NONE](workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) for actions, `persist_values` = `true`is recommended, as it ensures that any changes made by the user after form or on change actions are sent to the server are not overwritten by the response. If `false`, the form values are cleared when the action is triggered. When `persist_values` is set to `false`, it is strongly recommended that the card use [LoadIndicator.SPINNER](workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) for all actions, as this locks the UI to ensure no changes are made by the user while the action is being processed.',
      }),
  })
  .openapi({
    description:
      'An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.',
    required: [],
  })
  .openapi('AppsDynamiteStorageAction')

const AppsExtensionsMarkupCalendarClientActionMarkupAddAttachmentsActionMarkupAddonAttachmentSchema =
  z
    .object({
      iconUrl: z.string().exactOptional().openapi({ description: "Link to the resource's icon." }),
      mimeType: z
        .string()
        .exactOptional()
        .openapi({ description: 'MIME type of the content in resource_url.' }),
      resourceUrl: z.string().exactOptional(),
      title: z.string().exactOptional().openapi({ description: 'Title of the attachment.' }),
    })
    .openapi({ required: [] })
    .openapi(
      'AppsExtensionsMarkupCalendarClientActionMarkupAddAttachmentsActionMarkupAddonAttachment',
    )

const AppsExtensionsMarkupCalendarClientActionMarkupAddAttachmentsActionMarkupSchema = z
  .object({
    addonAttachments: z
      .array(
        AppsExtensionsMarkupCalendarClientActionMarkupAddAttachmentsActionMarkupAddonAttachmentSchema,
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppsExtensionsMarkupCalendarClientActionMarkupAddAttachmentsActionMarkup')

const AppsExtensionsMarkupCalendarClientActionMarkupEditAttendeesActionMarkupSchema = z
  .object({
    addAttendeeEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of attendees to add to the Google Calendar event.' }),
  })
  .openapi({ required: [] })
  .openapi('AppsExtensionsMarkupCalendarClientActionMarkupEditAttendeesActionMarkup')

const AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupEntryPointMarkupSchema = z
  .object({
    accessCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An access code for accessing the conference. Maximum 128 characters long.',
      }),
    features: z
      .array(z.enum(['UNKNOWN_FEATURE', 'TOLL', 'TOLL_FREE']))
      .exactOptional()
      .openapi({
        description:
          'Features of the entry point, such as being toll or toll-free. One entry point can have multiple features.',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The label of the entry point to display to the user. Maximum 512 characters long.',
      }),
    meetingCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A meeting code for accessing the conference. Maximum 128 characters long.',
      }),
    passcode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A passcode for accessing the conference. Maximum 128 characters long.',
      }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A password for accessing the conference. Maximum 128 characters long.',
      }),
    pin: z
      .string()
      .exactOptional()
      .openapi({ description: 'A PIN for accessing the conference. Maximum 128 characters long.' }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CLDR/ISO 3166 region code for the country associated with this entry point. Applicable only to `Type.PHONE`.',
      }),
    type: z
      .enum(['UNKNOWN', 'VIDEO', 'PHONE', 'MORE', 'SIP'])
      .exactOptional()
      .openapi({ description: 'The type of the entry point. Required.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URI for joining the conference. Supports tel: and http(s): and should be at most 1300 characters long. Required.',
      }),
  })
  .openapi({ description: 'A way to join the conference.', required: [] })
  .openapi('AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupEntryPointMarkup')

const AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupErrorSchema = z
  .object({
    authenticationUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the error type is `AUTHENTICATION`, the add-on can provide a URL allowing users to log in. Maximum 1300 characters long.',
      }),
    type: z
      .enum([
        'UNKNOWN',
        'AUTHENTICATION',
        'TEMPORARY',
        'PERMANENT',
        'PERMISSION_DENIED',
        'CONFERENCE_SOLUTION_FORBIDDEN',
      ])
      .exactOptional()
      .openapi({ description: 'The type of error. Required.' }),
  })
  .openapi({
    description: 'Represents an error that occurred during conference creation.',
    required: [],
  })
  .openapi('AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupError')

const AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupParameterSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key of the parameter. Maximum 50 characters long. Required.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The value of the parameter. Maximum 1024 characters long. Required.',
      }),
  })
  .openapi({
    description:
      "Solution-specific parameters that are persisted with the event data and, if an update or delete is needed, are passed to the add-on. For example: `[{key: 'sessionKey', value: '123'}, {key: 'meetingId', value: '456'}]`",
    required: [],
  })
  .openapi('AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupParameter')

const AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupSchema = z
  .object({
    conferenceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for this conference data. Maximum 512 characters long.',
      }),
    conferenceSolutionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An identifier of the conferencing solution. Must match a value from the deployment's `calendar.conferenceSolution.id` field.",
      }),
    entryPoints: z
      .array(
        AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupEntryPointMarkupSchema,
      )
      .exactOptional()
      .openapi({
        description: 'Entry points to the conference. Maximum 300 entry points are allowed.',
      }),
    error:
      AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupErrorSchema.exactOptional().openapi(
        { description: 'If set, it means an error occurred during conference creation.' },
      ),
    note: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional notes (such as instructions from the administrator, legal notices) to display to the user. Can contain HTML. Max length 2048 characters.',
      }),
    parameters: z
      .array(AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupParameterSchema)
      .exactOptional()
      .openapi({
        description: 'Additional add-on parameters. Maximum 300 parameters are allowed.',
      }),
  })
  .openapi({
    description: 'Markup that defines conference data associated to a Google Calendar event.',
    required: [],
  })
  .openapi('AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkup')

const AppsExtensionsMarkupCalendarClientActionMarkupEditConferenceDataActionMarkupSchema = z
  .object({
    conferenceData:
      AppsExtensionsMarkupCalendarClientActionMarkupConferenceDataMarkupSchema.exactOptional().openapi(
        { description: 'The conference data to add to the Google Calendar event.' },
      ),
  })
  .openapi({ required: [] })
  .openapi('AppsExtensionsMarkupCalendarClientActionMarkupEditConferenceDataActionMarkup')

const CalendarClientActionMarkupSchema = z
  .object({
    addAttachmentsActionMarkup:
      AppsExtensionsMarkupCalendarClientActionMarkupAddAttachmentsActionMarkupSchema.exactOptional().openapi(
        { description: 'An action that adds attachments to the Google Calendar event.' },
      ),
    editAttendeesActionMarkup:
      AppsExtensionsMarkupCalendarClientActionMarkupEditAttendeesActionMarkupSchema.exactOptional().openapi(
        { description: 'An action that adds attendees to the Google Calendar event.' },
      ),
    editConferenceDataActionMarkup:
      AppsExtensionsMarkupCalendarClientActionMarkupEditConferenceDataActionMarkupSchema.exactOptional().openapi(
        { description: 'An action that adds conference data to the Google Calendar event.' },
      ),
  })
  .openapi({ required: [] })
  .openapi('CalendarClientActionMarkup')

const ChatClientActionMarkupSchema = z
  .object({})
  .openapi({ description: 'Actions handled by Chat Clients.' })
  .openapi('ChatClientActionMarkup')

const RequestFileScopeSchema = z
  .object({ itemId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RequestFileScope')

const DriveClientActionMarkupSchema = z
  .object({ requestFileScope: RequestFileScopeSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DriveClientActionMarkup')

const RequestFileScopeForActiveDocumentSchema = z
  .object({})
  .openapi('RequestFileScopeForActiveDocument')

const EditorClientActionMarkupSchema = z
  .object({
    requestFileScopeForActiveDocument: RequestFileScopeForActiveDocumentSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EditorClientActionMarkup')

const AddonComposeUiActionMarkupSchema = z
  .object({ type: z.enum(['UNSPECIFIED', 'DISMISS']).exactOptional() })
  .openapi({ required: [] })
  .openapi('AddonComposeUiActionMarkup')

const OpenCreatedDraftActionMarkupSchema = z
  .object({
    draftId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the newly created draft in the form "r123".' }),
    draftStorageId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The server storage ID in hex format, for example,"15e9fa622ce1029d".',
      }),
    draftThreadId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the thread containing the newly created draft, for example, "15e9fa622ce1029d".',
      }),
    draftThreadServerPermId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The server permanent ID for the draft's thread. This field isn't set anywhere, and it's ignored when processing OpenCreatedDraftActionMarkup. Supply and use draftThreadStorageId instead.",
      }),
  })
  .openapi({ required: [] })
  .openapi('OpenCreatedDraftActionMarkup')

const TaskActionMarkupSchema = z
  .object({ reloadTasks: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('TaskActionMarkup')

const RecipientSchema = z
  .object({ email: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Recipient')

const UpdateBccRecipientsSchema = z
  .object({ bccRecipients: z.array(RecipientSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateBccRecipients')

const InsertContentSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'The content to be inserted.' }),
    contentType: z
      .enum(['UNSPECIFIED_CONTENT_TYPE', 'TEXT', 'MUTABLE_HTML', 'IMMUTABLE_HTML'])
      .exactOptional()
      .openapi({ description: 'The type of inserted content.' }),
    mimeType: z.enum(['UNSPECIFIED_EMAIL_MIME_TYPE', 'PLAIN_TEXT', 'HTML']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InsertContent')

const UpdateBodySchema = z
  .object({
    insertContents: z
      .array(InsertContentSchema)
      .exactOptional()
      .openapi({
        description:
          'A repeated field that contains a series of content to insert into the draft that the user is currently editing. The content can contain HTML content or plain text content.',
      }),
    type: z
      .enum([
        'UNSPECIFIED_ACTION_TYPE',
        'IN_PLACE_INSERT',
        'INSERT_AT_START',
        'INSERT_AT_END',
        'REPLACE',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateBody')

const UpdateCcRecipientsSchema = z
  .object({ ccRecipients: z.array(RecipientSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateCcRecipients')

const UpdateSubjectSchema = z
  .object({ subject: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateSubject')

const UpdateToRecipientsSchema = z
  .object({ toRecipients: z.array(RecipientSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateToRecipients')

const UpdateDraftActionMarkupSchema = z
  .object({
    updateBccRecipients: UpdateBccRecipientsSchema.exactOptional().openapi({
      description:
        'If set, replaces the existing Bcc recipients of the draft the user is currently editing.',
    }),
    updateBody: UpdateBodySchema.exactOptional().openapi({
      description:
        'A field that contains a series of update actions to perform on the draft body that the user is currently editing.',
    }),
    updateCcRecipients: UpdateCcRecipientsSchema.exactOptional().openapi({
      description:
        'If set, replaces the existing Cc recipients of the draft the user is currently editing.',
    }),
    updateSubject: UpdateSubjectSchema.exactOptional().openapi({
      description:
        'If set, replaces the existing subject of the draft the user is currently editing.',
    }),
    updateToRecipients: UpdateToRecipientsSchema.exactOptional().openapi({
      description:
        'If set, replaces the existing To recipients of the draft the user is currently editing.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateDraftActionMarkup')

const GmailClientActionMarkupSchema = z
  .object({
    addonComposeUiActionMarkup: AddonComposeUiActionMarkupSchema.exactOptional(),
    openCreatedDraftActionMarkup: OpenCreatedDraftActionMarkupSchema.exactOptional(),
    taskAction: TaskActionMarkupSchema.exactOptional(),
    updateDraftActionMarkup: UpdateDraftActionMarkupSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GmailClientActionMarkup')

const CustomFunctionReturnValueMarkupSchema = z
  .object({
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error message to show to the user if something went wrong.' }),
    value: z
      .any()
      .exactOptional()
      .openapi({ description: 'The value that resulted from running the custom function.' }),
  })
  .openapi({ description: 'The result of a user running a custom function.', required: [] })
  .openapi('CustomFunctionReturnValueMarkup')

const SheetsClientActionMarkupSchema = z
  .object({
    customFunctionReturnValueMarkup: CustomFunctionReturnValueMarkupSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SheetsClientActionMarkup')

const HostAppActionMarkupSchema = z
  .object({
    calendarAction: CalendarClientActionMarkupSchema.exactOptional().openapi({
      description: 'Actions handled by Calendar.',
    }),
    chatAction: ChatClientActionMarkupSchema.exactOptional().openapi({
      description: 'Actions handled by Chat.',
    }),
    driveAction: DriveClientActionMarkupSchema.exactOptional().openapi({
      description: 'Actions handled by Drive.',
    }),
    editorAction: EditorClientActionMarkupSchema.exactOptional().openapi({
      description: 'Actions handled by Docs, Sheets, or Slides.',
    }),
    gmailAction: GmailClientActionMarkupSchema.exactOptional().openapi({
      description: 'Actions handled by Gmail.',
    }),
    sheetsAction: SheetsClientActionMarkupSchema.exactOptional().openapi({
      description: 'Actions handled by Sheets.',
    }),
  })
  .openapi({ description: 'Actions handled by individual host apps.', required: [] })
  .openapi('HostAppActionMarkup')

const AppsDynamiteStorageOpenLinkAppUriIntentExtraDataSchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'A key for the intent extra data.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value for the given extra data key.' }),
  })
  .openapi({
    description:
      'Extra data for an android intent. Valid keys are defined in the hosting app contract.',
    required: [],
  })
  .openapi('AppsDynamiteStorageOpenLinkAppUriIntentExtraData')

const AppsDynamiteStorageOpenLinkAppUriIntentSchema = z
  .object({
    extraData: z
      .array(AppsDynamiteStorageOpenLinkAppUriIntentExtraDataSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of extra data for the android intent. For example, for a calendar event edit intent, the event title information can be passed as extra data.',
      }),
    intentAction: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An android intent action string for the {@link android.content.Intent} object. For example: for the view intent action type, a valid value will be android.content.Intent.ACTION_VIEW.',
      }),
  })
  .openapi({ description: 'Android intent.', required: [] })
  .openapi('AppsDynamiteStorageOpenLinkAppUriIntent')

const AppsDynamiteStorageOpenLinkAppUriSchema = z
  .object({
    androidIntent: AppsDynamiteStorageOpenLinkAppUriIntentSchema.exactOptional().openapi({
      description: 'An intent object to be opened in the corresponding android hosting app.',
    }),
    companionUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A companion uri string to be opened in the chat companion window. on the web.',
      }),
    iosUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'A uri string to be opened in the corresponding iOS hosting app.' }),
  })
  .openapi({
    description: 'Represents the platform specific uri/intent to open for each client.',
    required: [],
  })
  .openapi('AppsDynamiteStorageOpenLinkAppUri')

const AppsDynamiteStorageOpenLinkSchema = z
  .object({
    appUri: AppsDynamiteStorageOpenLinkAppUriSchema.exactOptional().openapi({
      description:
        "Represents the platform specific uri/intent to open on each client. For example: A companion_url will open in a companion window on the web. An iOS URL and android intent will open in the corresponding hosting apps. If these platform specific URLs can't be handled correctly, i.e. if the companion isn't supported on web and the hosting apps aren't available on the mobile platforms then the `uri` will open in a new browser window on all the platforms.",
    }),
    onClose: z.enum(['NOTHING', 'RELOAD']).exactOptional(),
    openAs: z.enum(['FULL_SIZE', 'OVERLAY']).exactOptional(),
    url: z.string().exactOptional().openapi({ description: 'The URL to open.' }),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteStorageOpenLink')

const AppsDynamiteStorageOnClickSchema = z
  .object({
    action: AppsDynamiteStorageActionSchema.exactOptional().openapi({
      description: 'If specified, an action is triggered by this onClick.',
    }),
    hostAppAction: HostAppActionMarkupSchema.exactOptional().openapi({
      description:
        'Triggers host app action on click directly without invoking form actions. This is currently not available to end-users and is used internal only.',
    }),
    openDynamicLinkAction: AppsDynamiteStorageActionSchema.exactOptional().openapi({
      description:
        'An add-on triggers this action when the action needs to open a link. This differs from the open_link above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back.',
    }),
    openLink: AppsDynamiteStorageOpenLinkSchema.exactOptional().openapi({
      description: 'If specified, this onClick triggers an open link action.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteStorageOnClick')

const AppsDynamiteStorageCardCardActionSchema = z
  .object({
    actionLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label that displays as the action menu item.' }),
    onClick: AppsDynamiteStorageOnClickSchema.exactOptional().openapi({
      description: 'The onclick action for this action item.',
    }),
  })
  .openapi({
    description:
      'A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser.',
    required: [],
  })
  .openapi('AppsDynamiteStorageCardCardAction')

const AppsDynamiteStorageCardCardHeaderSchema = z
  .object({
    imageAltText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The alternative text of this image which is used for accessibility.',
      }),
    imageType: z
      .enum(['SQUARE', 'CIRCLE'])
      .exactOptional()
      .openapi({ description: "The image's type." }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the image in the card header.' }),
    subtitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subtitle of the card header.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of the card header. The title must be specified. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteStorageCardCardHeader')

const ColorSchema = z
  .object({
    alpha: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).',
      }),
    blue: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of blue in the color as a value in the interval [0, 1].',
      }),
    green: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of green in the color as a value in the interval [0, 1].',
      }),
    red: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of red in the color as a value in the interval [0, 1].',
      }),
  })
  .openapi({
    description:
      "Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...",
    required: [],
  })
  .openapi('Color')

const AppsDynamiteStorageMaterialIconSchema = z
  .object({
    fill: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether it renders a filled icon. Default value is false. See Customization in [Google Font Icon](https://fonts.google.com/icons) for details.',
      }),
    grade: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Weight and grade affect a symbol’s thickness. Adjustments to grade are more granular than adjustments to weight and have a small impact on the size of the symbol. Choose from {-25, 0, 200}. If absent, default value is 0. If any other value is specified, a broken image icon will be displayed. See Customization in [Google Font Icon](https://fonts.google.com/icons) for details.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The icon name defined in the [Google Material Icon](https://fonts.google.com/icons) in snake_case. e.g. "check_box". Any invalid name will be trimmed as empty string result in the icon falied to render.',
      }),
    weight: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The stroke weight of the icon. Choose from {100, 200, 300, 400, 500, 600, 700}. If absent, default value is 400. If any other value is specified, a broken image icon will be displayed. See Customization in [Google Font Icon](https://fonts.google.com/icons) for details.',
      }),
  })
  .openapi({
    description:
      'A [Google Font Icon](https://fonts.google.com/icons), which includes over 2500+ options. For example, to display a [check box icon](https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck_box%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048) with customized weight and grade, write { "name": "check_box", "fill": true, "weight": 300, "grade": -25 }',
    required: [],
  })
  .openapi('AppsDynamiteStorageMaterialIcon')

const AppsDynamiteStorageIconSchema = z
  .object({
    altText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The description of the icon, used for accessibility. The default value is provided if you don't specify one.",
      }),
    iconUrl: z.string().exactOptional().openapi({ description: 'The icon specified by a URL.' }),
    imageType: z
      .enum(['SQUARE', 'CIRCLE'])
      .exactOptional()
      .openapi({
        description:
          'The crop style applied to the image. In some cases, applying a `CIRCLE` crop causes the image to be drawn larger than a standard icon.',
      }),
    knownIcon: z
      .string()
      .exactOptional()
      .openapi({ description: 'The icon specified by the string name of a list of known icons' }),
    materialIcon: AppsDynamiteStorageMaterialIconSchema.exactOptional().openapi({
      description:
        'Display one of the [Google Material Icons](https://fonts.google.com/icons). For example, to display a [check box icon](https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck_box%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048), use "material_icon": { "name": "check_box" }',
    }),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteStorageIcon')

const AppsDynamiteStorageButtonSchema = z
  .object({
    altText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The alternative text used for accessibility. Has no effect when an icon is set; use `icon.alt_text` instead.',
      }),
    color: ColorSchema.exactOptional().openapi({
      description: 'If set, the button is filled with a solid background.',
    }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true, the button is displayed in a disabled state and doesn't respond to user actions.",
      }),
    icon: AppsDynamiteStorageIconSchema.exactOptional().openapi({ description: 'The icon image.' }),
    onClick: AppsDynamiteStorageOnClickSchema.exactOptional().openapi({
      description: 'The action to perform when the button is clicked.',
    }),
    text: z.string().exactOptional().openapi({ description: 'The text of the button.' }),
  })
  .openapi({ description: 'A button. Can be a text button or an image button.', required: [] })
  .openapi('AppsDynamiteStorageButton')

const AppsDynamiteStorageButtonListSchema = z
  .object({ buttons: z.array(AppsDynamiteStorageButtonSchema).exactOptional() })
  .openapi({ description: 'A list of buttons layed out horizontally.', required: [] })
  .openapi('AppsDynamiteStorageButtonList')

const AppsDynamiteStorageDateTimePickerSchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label for the field that displays to the user.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the text input that's used in formInput, and uniquely identifies this input.",
      }),
    onChangeAction: AppsDynamiteStorageActionSchema.exactOptional().openapi({
      description:
        'Triggered when the user clicks Save or Clear from the date/time picker dialog. This is only triggered if the value changed as a result of the Save/Clear operation.',
    }),
    timezoneOffsetDate: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If not set, it uses the user's time zone setting on the client side.",
      }),
    type: z
      .enum(['DATE_AND_TIME', 'DATE_ONLY', 'TIME_ONLY'])
      .exactOptional()
      .openapi({ description: 'The type of the date/time picker.' }),
    valueMsEpoch: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value to display as the default value before user input or previous user input. It is represented in milliseconds (Epoch time). For `DATE_AND_TIME` type, the full epoch value is used. For `DATE_ONLY` type, only date of the epoch time is used. For `TIME_ONLY` type, only time of the epoch time is used. For example, you can set epoch time to `3 * 60 * 60 * 1000` to represent 3am.',
      }),
  })
  .openapi({ description: 'The widget that lets users to specify a date and time.', required: [] })
  .openapi('AppsDynamiteStorageDateTimePicker')

const AppsDynamiteStorageDecoratedTextSwitchControlSchema = z
  .object({
    controlType: z
      .enum(['SWITCH', 'CHECKBOX', 'CHECK_BOX'])
      .exactOptional()
      .openapi({ description: 'The control type, either switch or checkbox.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The name of the switch widget that's used in formInput." }),
    onChangeAction: AppsDynamiteStorageActionSchema.exactOptional().openapi({
      description: 'The action when the switch state is changed.',
    }),
    selected: z.boolean().exactOptional().openapi({ description: 'If the switch is selected.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value is what is passed back in the callback.' }),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteStorageDecoratedTextSwitchControl')

const AppsDynamiteStorageDecoratedTextSchema = z
  .object({
    bottomLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The formatted text label that shows below the main text.' }),
    button: AppsDynamiteStorageButtonSchema.exactOptional().openapi({
      description: 'A button that can be clicked to trigger an action.',
    }),
    endIcon: AppsDynamiteStorageIconSchema.exactOptional().openapi({
      description: 'An icon displayed after the text.',
    }),
    icon: AppsDynamiteStorageIconSchema.exactOptional().openapi({
      description: 'Deprecated in favor of start_icon.',
    }),
    onClick: AppsDynamiteStorageOnClickSchema.exactOptional().openapi({
      description: 'Only the top and bottom label and content region are clickable.',
    }),
    startIcon: AppsDynamiteStorageIconSchema.exactOptional().openapi({
      description: 'The icon displayed in front of the text.',
    }),
    switchControl: AppsDynamiteStorageDecoratedTextSwitchControlSchema.exactOptional().openapi({
      description: 'A switch widget can be clicked to change its state or trigger an action.',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The main widget formatted text. See Text formatting for details.',
      }),
    topLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The formatted text label that shows above the main text.' }),
    wrapText: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The wrap text setting. If `true`, the text is wrapped and displayed in multiline. Otherwise, the text is truncated.',
      }),
  })
  .openapi({
    description:
      'A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.',
    required: [],
  })
  .openapi('AppsDynamiteStorageDecoratedText')

const AppsDynamiteStorageImageSchema = z
  .object({
    altText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The alternative text of this image, used for accessibility.' }),
    imageUrl: z.string().exactOptional().openapi({ description: 'An image URL.' }),
    onClick: AppsDynamiteStorageOnClickSchema.exactOptional(),
  })
  .openapi({
    description: 'An image that is specified by a URL and can have an onClick action.',
    required: [],
  })
  .openapi('AppsDynamiteStorageImage')

const AppsDynamiteStorageSelectionInputSelectionItemSchema = z
  .object({
    selected: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If more than one item is selected for `RADIO_BUTTON` and `DROPDOWN`, the first selected item is treated as selected and the ones after are ignored.',
      }),
    text: z.string().exactOptional().openapi({ description: 'The text to be displayed.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value associated with this item. The client should use this as a form input value.',
      }),
  })
  .openapi({
    description:
      'The item in the switch control. A radio button, at most one of the items is selected.',
    required: [],
  })
  .openapi('AppsDynamiteStorageSelectionInputSelectionItem')

const AppsDynamiteStorageSelectionInputSchema = z
  .object({
    items: z.array(AppsDynamiteStorageSelectionInputSelectionItemSchema).exactOptional(),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label displayed ahead of the switch control.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the text input which is used in formInput.' }),
    onChangeAction: AppsDynamiteStorageActionSchema.exactOptional().openapi({
      description:
        'If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button.',
    }),
    type: z
      .enum(['CHECK_BOX', 'RADIO_BUTTON', 'SWITCH', 'DROPDOWN', 'MULTI_SELECT'])
      .exactOptional(),
  })
  .openapi({
    description:
      'A widget that creates a UI item (for example, a drop-down list) with options for users to select.',
    required: [],
  })
  .openapi('AppsDynamiteStorageSelectionInput')

const AppsDynamiteStorageSuggestionsSuggestionItemSchema = z
  .object({ text: z.string().exactOptional() })
  .openapi({ description: 'A suggestion item. Only supports text for now.', required: [] })
  .openapi('AppsDynamiteStorageSuggestionsSuggestionItem')

const AppsDynamiteStorageSuggestionsSchema = z
  .object({
    items: z
      .array(AppsDynamiteStorageSuggestionsSuggestionItemSchema)
      .exactOptional()
      .openapi({
        description: 'A list of suggestions items which will be used in are used in autocomplete.',
      }),
  })
  .openapi({
    description:
      'A container wrapping elements necessary for showing suggestion items used in text input autocomplete.',
    required: [],
  })
  .openapi('AppsDynamiteStorageSuggestions')

const AppsDynamiteStorageTextInputSchema = z
  .object({
    autoCompleteAction: AppsDynamiteStorageActionSchema.exactOptional().openapi({
      description:
        "The refresh function that returns suggestions based on the user's input text. If the callback is not specified, autocomplete is done in client side based on the initial suggestion items.",
    }),
    hintText: z.string().exactOptional().openapi({ description: 'The hint text.' }),
    initialSuggestions: AppsDynamiteStorageSuggestionsSchema.exactOptional().openapi({
      description: 'The initial suggestions made before any user input.',
    }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'At least one of label and hintText must be specified.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the text input which is used in formInput.' }),
    onChangeAction: AppsDynamiteStorageActionSchema.exactOptional().openapi({
      description: 'The onChange action, for example, invoke a function.',
    }),
    type: z
      .enum(['SINGLE_LINE', 'MULTIPLE_LINE'])
      .exactOptional()
      .openapi({
        description: 'The style of the text, for example, a single line or multiple lines.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default value when there is no input from the user.' }),
  })
  .openapi({
    description:
      'A text input is a UI item where users can input text. A text input can also have an onChange action and suggestions.',
    required: [],
  })
  .openapi('AppsDynamiteStorageTextInput')

const AppsDynamiteStorageTextParagraphSchema = z
  .object({
    text: z
      .string()
      .exactOptional()
      .openapi({ description: "The text that's shown in the widget." }),
  })
  .openapi({
    description:
      'A paragraph of text that supports formatting. See [Text formatting](workspace/add-ons/concepts/widgets#text_formatting") for details.',
    required: [],
  })
  .openapi('AppsDynamiteStorageTextParagraph')

const AppsDynamiteStorageColumnsColumnWidgetsSchema = z
  .object({
    buttonList: AppsDynamiteStorageButtonListSchema.exactOptional().openapi({
      description: 'ButtonList widget.',
    }),
    dateTimePicker: AppsDynamiteStorageDateTimePickerSchema.exactOptional().openapi({
      description: 'DateTimePicker widget.',
    }),
    decoratedText: AppsDynamiteStorageDecoratedTextSchema.exactOptional().openapi({
      description: 'DecoratedText widget.',
    }),
    image: AppsDynamiteStorageImageSchema.exactOptional().openapi({ description: 'Image widget.' }),
    selectionInput: AppsDynamiteStorageSelectionInputSchema.exactOptional().openapi({
      description: 'SelectionInput widget.',
    }),
    textInput: AppsDynamiteStorageTextInputSchema.exactOptional().openapi({
      description: 'TextInput widget.',
    }),
    textParagraph: AppsDynamiteStorageTextParagraphSchema.exactOptional().openapi({
      description: 'Text paragraph widget.',
    }),
  })
  .openapi({
    description: 'LINT.IfChange The `column` widget can contain these widgets.',
    required: [],
  })
  .openapi('AppsDynamiteStorageColumnsColumnWidgets')

const AppsDynamiteStorageColumnsColumnSchema = z
  .object({
    horizontalAlignment: z
      .enum(['HORIZONTAL_ALIGNMENT_UNSPECIFIED', 'START', 'CENTER', 'END'])
      .exactOptional()
      .openapi({ description: 'The horizontal alignment of the column.' }),
    horizontalSizeStyle: z
      .enum(['HORIZONTAL_SIZE_STYLE_UNSPECIFIED', 'FILL_AVAILABLE_SPACE', 'FILL_MINIMUM_SPACE'])
      .exactOptional()
      .openapi({ description: 'Specifies how the column content is sized horizontally.' }),
    verticalAlignment: z
      .enum(['VERTICAL_ALIGNMENT_UNSPECIFIED', 'CENTER', 'TOP', 'BOTTOM'])
      .exactOptional()
      .openapi({ description: 'The vertical alignment of the column.' }),
    widgets: z
      .array(AppsDynamiteStorageColumnsColumnWidgetsSchema)
      .exactOptional()
      .openapi({
        description:
          'LINT.ThenChange(//depot/google3/google/apps/card/v1/card.proto) Array of widgets included in the column.',
      }),
  })
  .openapi({
    description: 'Represents a Column that consists of widgets stacked vertically.',
    required: [],
  })
  .openapi('AppsDynamiteStorageColumnsColumn')

const AppsDynamiteStorageColumnsSchema = z
  .object({
    columnItems: z
      .array(AppsDynamiteStorageColumnsColumnSchema)
      .exactOptional()
      .openapi({ description: 'Each card supports up to 2 columns.' }),
    wrapStyle: z
      .enum(['WRAP_STYLE_UNSPECIFIED', 'NOWRAP', 'WRAP'])
      .exactOptional()
      .openapi({ description: 'Controls how the column resizes based on screen width.' }),
  })
  .openapi({
    description: 'Represents a Columns widget that displays a single row of columns.',
    required: [],
  })
  .openapi('AppsDynamiteStorageColumns')

const AppsDynamiteStorageDividerSchema = z
  .object({})
  .openapi({ description: 'A divider that appears in between widgets.' })
  .openapi('AppsDynamiteStorageDivider')

const AppsDynamiteStorageBorderStyleSchema = z
  .object({
    cornerRadius: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The corner radius for the border.' }),
    strokeColor: ColorSchema.exactOptional().openapi({
      description: 'The colors to use when the type is `BORDER_TYPE_STROKE`.',
    }),
    type: z
      .enum(['BORDER_TYPE_UNSPECIFIED', 'NO_BORDER', 'STROKE'])
      .exactOptional()
      .openapi({ description: 'The border type.' }),
  })
  .openapi({
    description: 'Represents the complete border style applied to widgets.',
    required: [],
  })
  .openapi('AppsDynamiteStorageBorderStyle')

const AppsDynamiteStorageImageCropStyleSchema = z
  .object({
    aspectRatio: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`.' }),
    type: z
      .enum([
        'IMAGE_CROP_TYPE_UNSPECIFIED',
        'SQUARE',
        'CIRCLE',
        'RECTANGLE_CUSTOM',
        'RECTANGLE_4_3',
      ])
      .exactOptional()
      .openapi({ description: 'The crop type.' }),
  })
  .openapi({ description: 'Represents the crop style applied to an image.', required: [] })
  .openapi('AppsDynamiteStorageImageCropStyle')

const AppsDynamiteStorageImageComponentSchema = z
  .object({
    altText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The accessibility label for the image.' }),
    borderStyle: AppsDynamiteStorageBorderStyleSchema.exactOptional().openapi({
      description: 'The border style to apply to the image.',
    }),
    cropStyle: AppsDynamiteStorageImageCropStyleSchema.exactOptional().openapi({
      description: 'The crop style to apply to the image.',
    }),
    imageUri: z.string().exactOptional().openapi({ description: 'The image URL.' }),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteStorageImageComponent')

const AppsDynamiteStorageGridGridItemSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A user-specified identifier for this grid item. This identifier is returned in the parent Grid's onClick callback parameters.",
      }),
    image: AppsDynamiteStorageImageComponentSchema.exactOptional().openapi({
      description: 'The image that displays in the grid item.',
    }),
    layout: z
      .enum(['GRID_ITEM_LAYOUT_UNSPECIFIED', 'TEXT_BELOW', 'TEXT_ABOVE'])
      .exactOptional()
      .openapi({ description: 'The layout to use for the grid item.' }),
    subtitle: z.string().exactOptional().openapi({ description: "The grid item's subtitle." }),
    textAlignment: z
      .enum(['HORIZONTAL_ALIGNMENT_UNSPECIFIED', 'START', 'CENTER', 'END'])
      .exactOptional()
      .openapi({ description: "The horizontal alignment of the grid item's text." }),
    title: z.string().exactOptional().openapi({ description: "The grid item's title." }),
  })
  .openapi({ description: 'Represents a single item in the grid layout.', required: [] })
  .openapi('AppsDynamiteStorageGridGridItem')

const AppsDynamiteStorageGridSchema = z
  .object({
    borderStyle: AppsDynamiteStorageBorderStyleSchema.exactOptional().openapi({
      description: 'The border style to apply to each grid item.',
    }),
    columnCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion).",
      }),
    items: z
      .array(AppsDynamiteStorageGridGridItemSchema)
      .exactOptional()
      .openapi({ description: 'The items to display in the grid.' }),
    onClick: AppsDynamiteStorageOnClickSchema.exactOptional().openapi({
      description:
        "This callback is reused by each individual grid item, but with the item's identifier and index in the items list added to the callback's parameters.",
    }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text that displays in the grid header.' }),
  })
  .openapi({
    description: 'Represents a Grid widget that displays items in a configurable grid layout.',
    required: [],
  })
  .openapi('AppsDynamiteStorageGrid')

const AppsDynamiteStorageWidgetSchema = z
  .object({
    buttonList: AppsDynamiteStorageButtonListSchema.exactOptional().openapi({
      description:
        'A list of buttons. For example, the following JSON creates two buttons. The first is a filled text button and the second is an image button that opens a link: ``` "buttonList": { "buttons": [ "button": { "text": "Edit", "Color": { "Red": 255 "Green": 255 "Blue": 255 } "disabled": true }, "button": { "icon": { "knownIcon": "INVITE" "altText": "check calendar" }, "onClick": { "openLink": { "url": "https://example.com/calendar" } } }, ] } ```',
    }),
    columns: AppsDynamiteStorageColumnsSchema.exactOptional().openapi({
      description:
        'Displays a single row of columns with widgets stacked vertically in each column. For example, the following JSON creates a 2 column widget each containing a single item. ``` "columns": { "wrapStyle": "WRAP", "columnItems": [ { "horizontalSizeStyle": "FILL_AVAILABLE_SPACE", "horizontalAlignment": "CENTER", "verticalAlignment" : "CENTER", "widgets": [ { "textParagraph": { "text": "First column text paragraph", } } ] }, { "horizontalSizeStyle": "FILL_AVAILABLE_SPACE", "horizontalAlignment": "CENTER", "verticalAlignment" : "CENTER", "widgets": [ { "textParagraph": { "text": "Second column text paragraph", } } ] }, ] } } ```',
    }),
    dateTimePicker: AppsDynamiteStorageDateTimePickerSchema.exactOptional().openapi({
      description:
        'Displays a selection/input widget for date/time. For example, the following JSON creates a date/time picker for an appointment time: ``` "date_time_picker": { "name": "appointment_time", "label": "Book your appointment at:", "type": "DateTimePickerType.DATE_AND_TIME", "valueMsEpoch": "796435200000" } ```',
    }),
    decoratedText: AppsDynamiteStorageDecoratedTextSchema.exactOptional().openapi({
      description:
        'Displays a decorated text item in this widget. For example, the following JSON creates a decorated text widget showing email address: ``` "decoratedText": { "icon": { "knownIcon": "EMAIL" }, "topLabel": "Email Address", "content": "heba.salam@example.com", "bottomLabel": "This is a new Email address!", "switchWidget": { "name": "has_send_welcome_email_to_heba_salam", "selected": false, "controlType": "ControlType.CHECKBOX" } } ```',
    }),
    divider: AppsDynamiteStorageDividerSchema.exactOptional().openapi({
      description:
        'Displays a divider. For example, the following JSON creates a divider: ``` "divider": { } ```',
    }),
    grid: AppsDynamiteStorageGridSchema.exactOptional().openapi({
      description:
        'Displays a grid with a collection of items. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "numColumns": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4.0 }, "items": [ "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" ], "onClick": { "openLink": { "url":"https://www.example.com" } } } ```',
    }),
    horizontalAlignment: z
      .enum(['HORIZONTAL_ALIGNMENT_UNSPECIFIED', 'START', 'CENTER', 'END'])
      .exactOptional()
      .openapi({ description: 'The horizontal alignment of this widget.' }),
    image: AppsDynamiteStorageImageSchema.exactOptional().openapi({
      description:
        'Displays an image in this widget. For example, the following JSON creates an image with alternative text: ``` "image": { "imageUrl": "https://example.com/heba_salam.png" "altText": "Avatar for Heba Salam" } ```',
    }),
    selectionInput: AppsDynamiteStorageSelectionInputSchema.exactOptional().openapi({
      description:
        'Displays a switch control in this widget. For example, the following JSON creates a dropdown selection for size: ``` "switchControl": { "name": "size", "label": "Size" "type": "SelectionType.DROPDOWN", "items": [ { "text": "S", "value": "small", "selected": false }, { "text": "M", "value": "medium", "selected": true }, { "text": "L", "value": "large", "selected": false }, { "text": "XL", "value": "extra_large", "selected": false } ] } ```',
    }),
    textInput: AppsDynamiteStorageTextInputSchema.exactOptional().openapi({
      description:
        'Displays a text input in this widget. For example, the following JSON creates a text input for mail address: ``` "textInput": { "name": "mailing_address", "label": "Mailing Address" } ``` As another example, the following JSON creates a text input for programming language with static suggestions: ``` "textInput": { "name": "preferred_programing_language", "label": "Preferred Language", "initialSuggestions": { "items": [ { "text": "C++" }, { "text": "Java" }, { "text": "JavaScript" }, { "text": "Python" } ] } } ```',
    }),
    textParagraph: AppsDynamiteStorageTextParagraphSchema.exactOptional().openapi({
      description:
        'Displays a text paragraph in this widget. For example, the following JSON creates a bolded text: ``` "textParagraph": { "text": " *bold text*" } ```',
    }),
  })
  .openapi({
    description: 'A widget is a UI element that presents texts, images, etc.',
    required: [],
  })
  .openapi('AppsDynamiteStorageWidget')

const AppsDynamiteStorageCardSectionSchema = z
  .object({
    collapsible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this section is collapsible. If a section is collapsible, the description must be given.',
      }),
    header: z
      .string()
      .exactOptional()
      .openapi({ description: 'The header of the section. Formatted text is supported.' }),
    uncollapsibleWidgetsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of uncollapsible widgets. For example, when a section contains five widgets and the `numUncollapsibleWidget` is set to `2`, the first two widgets are always shown and the last three are collapsed as default. The `numUncollapsibleWidget` is taken into account only when collapsible is set to `true`.',
      }),
    widgets: z
      .array(AppsDynamiteStorageWidgetSchema)
      .exactOptional()
      .openapi({ description: 'A section must contain at least 1 widget.' }),
  })
  .openapi({
    description:
      'A section contains a collection of widgets that are rendered vertically in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties, for example, float.',
    required: [],
  })
  .openapi('AppsDynamiteStorageCardSection')

const AppsDynamiteStorageCardSchema = z
  .object({
    cardActions: z
      .array(AppsDynamiteStorageCardCardActionSchema)
      .exactOptional()
      .openapi({
        description:
          'The actions of this card. They are added to a card\'s generated toolbar menu. For example, the following JSON constructs a card action menu with Settings and Send Feedback options: ``` "card_actions": [ { "actionLabel": "Setting", "onClick": { "action": { "functionName": "goToView", "parameters": [ { "key": "viewType", "value": "SETTING" } ], "loadIndicator": "LoadIndicator.SPINNER" } } }, { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" } } } ] ```',
      }),
    header: AppsDynamiteStorageCardCardHeaderSchema.exactOptional().openapi({
      description: 'The header of the card. A header usually contains a title and an image.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the card, which is used as a identifier for the card in card navigation.',
      }),
    sections: z
      .array(AppsDynamiteStorageCardSectionSchema)
      .exactOptional()
      .openapi({ description: 'Sections are separated by a line divider.' }),
  })
  .openapi({
    description:
      'A card is a UI element that can contain UI widgets such as text and images. For more information, see Cards . For example, the following JSON creates a card that has a header with the name, position, icons, and link for a contact, followed by a section with contact information like email and phone number. ``` { "header": { "title": "Heba Salam", "subtitle": "Software Engineer", "imageStyle": "ImageStyle.AVATAR", "imageUrl": "https://example.com/heba_salam.png", "imageAltText": "Avatar for Heba Salam" }, "sections" : [ { "header": "Contact Info", "widgets": [ { "decorated_text": { "icon": { "knownIcon": "EMAIL" }, "content": "heba.salam@example.com" } }, { "decoratedText": { "icon": { "knownIcon": "PERSON" }, "content": "Online" } }, { "decoratedText": { "icon": { "knownIcon": "PHONE" }, "content": "+1 (555) 555-1234" } }, { "buttons": [ { "textButton": { "text": "Share", }, "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "textButton": { "text": "Edit", }, "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ], "loadIndicator": "LoadIndicator.SPINNER" } } } ] } ], "collapsible": true, "uncollapsibleWidgetsCount": 3 } ], "cardActions": [ { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" } } } ], "name": "contact-card-K3wB6arF2H9L" } ```',
    required: [],
  })
  .openapi('AppsDynamiteStorageCard')

const ActionParameterSchema = z
  .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({
    description:
      'List of string parameters that developers can specify when the above action method (in apps script) is invoked. An example use case is for 3 snooze buttons: snooze now, snooze 1 day, snooze next week. Developers can have action method = snooze() and pass the snooze type and snooze time in list of string parameters.',
    required: [],
  })
  .openapi('ActionParameter')

const FormActionSchema = z
  .object({
    actionMethodName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Apps script function that should be invoked in the developer's apps script when the containing element is clicked/activated.",
      }),
    loadIndicator: z.enum(['SPINNER', 'NONE']).exactOptional(),
    parameters: z.array(ActionParameterSchema).exactOptional(),
    persistValues: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether form values persist after the action. When false, the Apps Script is responsible for persisting values, by setting any form field values using the formInputs in the event. Disabling this behavior can be used if the add-on needs the ability to clear form fields, for example, as with persistent values, there is no means for clearing existing values. When disabling persistent values, it is strongly recommended that the add-on use LoadIndicator.SPINNER for all events, as this locks the UI to ensure no changes are made by the user while the action is being processed. When using LoadIndicator.NONE for any of the actions, persistent values are recommended, as it ensures that any changes made by the user after form / on change actions are sent to the server are not overwritten by the response. Persistent values disabled by default. While we recommend persistent values be used in the typical use case, we do not enable by default, as doing so would change the current behavior of existing add-ons in prod.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FormAction')

const OpenLinkSchema = z
  .object({
    loadIndicator: z
      .enum(['NONE', 'SPINNER'])
      .exactOptional()
      .openapi({ description: 'Next available ID: 5' }),
    onClose: z.enum(['NOTHING', 'RELOAD_ADD_ON']).exactOptional(),
    openAs: z.enum(['FULL_SIZE', 'OVERLAY']).exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OpenLink')

const OnClickSchema = z
  .object({
    action: FormActionSchema.exactOptional(),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This can be used as a short form for OpenLink with the default OpenAs and OnClose. It may be undeprecated if this proves to be handy for developers.',
      }),
    openLink: OpenLinkSchema.exactOptional(),
    openLinkAction: FormActionSchema.exactOptional().openapi({
      description:
        'An add-on triggers this action when the form action needs to open a link. This differs from the open_link above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OnClick')

const CardActionSchema = z
  .object({
    actionLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label used to be displayed in the action menu item.' }),
    onClick: OnClickSchema.exactOptional(),
  })
  .openapi({
    description:
      'When an AddOn Card is shown in detailed view, a card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser.',
    required: [],
  })
  .openapi('CardAction')

const ButtonSchema: z.ZodType<ButtonType> = z
  .lazy(() =>
    z
      .object({
        imageButton: ImageButtonSchema.exactOptional(),
        textButton: TextButtonSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Button')

const TextButtonSchema = z
  .object({
    altText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The alternative text used for accessibility Next field number: 7.',
      }),
    backgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional color of the button's background in RAISE mode. The default is the secondary color from addon's manifest.",
      }),
    disabled: z.boolean().exactOptional(),
    onClick: OnClickSchema.exactOptional(),
    style: z.enum(['UNSPECIFIED', 'TEXT', 'FILLED']).exactOptional(),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Text color can be set via HTML markup.' }),
  })
  .openapi({ required: [] })
  .openapi('TextButton')

const FixedFooterSchema = z
  .object({
    buttons: z.array(ButtonSchema).exactOptional(),
    primaryButton: TextButtonSchema.exactOptional(),
    secondaryButton: TextButtonSchema.exactOptional(),
  })
  .openapi({
    description: 'A persistent (sticky) footer that is added to the bottom of the card.',
    required: [],
  })
  .openapi('FixedFooter')

const CardHeaderSchema = z
  .object({
    imageAltText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The alternative text of this image which will be used for accessibility.',
      }),
    imageStyle: z
      .enum(['CROP_TYPE_NOT_SET', 'SQUARE', 'CIRCLE', 'RECTANGLE_CUSTOM', 'RECTANGLE_4_3'])
      .exactOptional(),
    imageUrl: z.string().exactOptional(),
    subtitle: z.string().exactOptional(),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each will take up 1 line. If only the title is specified, it will take up both lines. The header is rendered in collapsed and detailed view.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CardHeader')

const DateTimePickerSchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label for the field, which is displayed to the user.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the text field which is used in FormInput, and uniquely identifies this input.',
      }),
    onChange: FormActionSchema.exactOptional().openapi({
      description:
        'Triggered when the user clicks on the Save, or Clear button from the date / time picker dialog. Will only be triggered if the value changed as a result of the Save / Clear operation.',
    }),
    timezoneOffsetDate: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The number representing the time-zone offset from UTC, in minutes. If set, the value_ms_epoch will be displayed in the specified time zone. If not set, it will use the user's timezone setting in client side.",
      }),
    type: z
      .enum(['UNSPECIFIED_TYPE', 'DATE_AND_TIME', 'DATE_ONLY', 'TIME_ONLY'])
      .exactOptional()
      .openapi({ description: 'The type of the DateTimePicker.' }),
    valueMsEpoch: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value to display which can be the default value before user input or previous user input. It is represented in milliseconds (Epoch time). - For DATE_AND_TIME type, the full epoch value is used. - For DATE_ONLY type, only date of the epoch time is used. - For TIME_ONLY type, only time of the epoch time is used. For example, you can set epoch time to 3 * 60 * 60 * 1000 to represent 3am.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DateTimePicker')

const DividerSchema = z.object({}).openapi('Divider')

const BorderStyleSchema = z
  .object({
    cornerRadius: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The corner radius for the border.' }),
    strokeColor: z
      .string()
      .exactOptional()
      .openapi({ description: 'The colors to use when the type is STROKE.' }),
    type: z
      .enum(['BORDER_TYPE_NOT_SET', 'NO_BORDER', 'STROKE'])
      .exactOptional()
      .openapi({ description: 'The border type.' }),
  })
  .openapi({
    description: 'Represents a complete border style that can be applied to widgets.',
    required: [],
  })
  .openapi('BorderStyle')

const ImageCropStyleSchema = z
  .object({
    aspectRatio: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The aspect ratio to use if the crop type is RECTANGLE_CUSTOM.' }),
    type: z
      .enum(['CROP_TYPE_NOT_SET', 'SQUARE', 'CIRCLE', 'RECTANGLE_CUSTOM', 'RECTANGLE_4_3'])
      .exactOptional()
      .openapi({ description: 'The crop type.' }),
  })
  .openapi({
    description: 'Represents a crop style that can be applied to an image.',
    required: [],
  })
  .openapi('ImageCropStyle')

const ImageComponentSchema = z
  .object({
    altText: z.string().exactOptional(),
    borderStyle: BorderStyleSchema.exactOptional(),
    cropStyle: ImageCropStyleSchema.exactOptional(),
    imageUrl: z.string().exactOptional(),
  })
  .openapi({
    description:
      'NOTE: Through future refactoring work, this image component will eventually be used in the Image widget, and will likely replace the Icon proto as well.',
    required: [],
  })
  .openapi('ImageComponent')

const GridItemSchema = z
  .object({
    identifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A user-specified identifier for this grid item. This identifier will be returned in the parent Grid's on_click callback's parameters.",
      }),
    image: ImageComponentSchema.exactOptional(),
    layout: z.enum(['NOT_SET', 'TEXT_BELOW', 'TEXT_ABOVE']).exactOptional(),
    subtitle: z.string().exactOptional(),
    textAlignment: z
      .enum(['HORIZONTAL_ALIGNMENT_UNSPECIFIED', 'START', 'CENTER', 'END'])
      .exactOptional(),
    title: z.string().exactOptional().openapi({ description: 'Text properties.' }),
  })
  .openapi({ required: [] })
  .openapi('GridItem')

const GridSchema = z
  .object({
    borderStyle: BorderStyleSchema.exactOptional().openapi({
      description: 'The border style to apply to each grid item.',
    }),
    items: z
      .array(GridItemSchema)
      .exactOptional()
      .openapi({ description: 'The items to display in the grid.' }),
    numColumns: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of columns to display in the grid. Note that a default value will be used if this field is not specified, and that default value will be different depending on where the grid is shown (dialog vs companion).',
      }),
    onClick: OnClickSchema.exactOptional().openapi({
      description:
        "This callback will be reused by each individual GridItem, but with the item's identifier and index in the items list added to the callback's parameters.",
    }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text to display in the grid header.' }),
  })
  .openapi({ required: [] })
  .openapi('Grid')

const ImageSchema = z
  .object({
    altText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The alternative text of this image which will be used for accessibility.',
      }),
    aspectRatio: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The aspect ratio of this image (width/height).' }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Image url specified by developers. Server side, we will wrap with FIFE so client apps can configure size/cropping/etc.',
      }),
    onClick: OnClickSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Image')

const ImageKeyValueSchema = z
  .object({
    icon: z
      .enum([
        'NONE',
        'AIRPLANE',
        'BOOKMARK',
        'BUS',
        'CAR',
        'CLOCK',
        'CONFIRMATION_NUMBER_ICON',
        'DOLLAR',
        'DESCRIPTION',
        'EDIT',
        'EDIT_NOTE',
        'EMAIL',
        'EVENT_PERFORMER',
        'EVENT_SEAT',
        'FLIGHT_ARRIVAL',
        'FLIGHT_DEPARTURE',
        'HOTEL',
        'HOTEL_ROOM_TYPE',
        'INVITE',
        'MAP_PIN',
        'MEMBERSHIP',
        'MULTIPLE_PEOPLE',
        'OFFER',
        'OPEN_IN_NEW',
        'PERSON',
        'PHONE',
        'RESTAURANT_ICON',
        'SHOPPING_CART',
        'STAR',
        'STORE',
        'TICKET',
        'TRAIN',
        'VIDEO_CAMERA',
        'VIDEO_PLAY',
      ])
      .exactOptional(),
    iconUrl: z.string().exactOptional(),
    onClick: OnClickSchema.exactOptional(),
    text: z.string().exactOptional(),
  })
  .openapi({ description: 'This is deprecated and please use KeyValue.', required: [] })
  .openapi('ImageKeyValue')

const IconImageSchema = z
  .object({
    altText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The alternative text of this icon_url which will be used for accessibility.',
      }),
    icon: z
      .enum([
        'NONE',
        'AIRPLANE',
        'BOOKMARK',
        'BUS',
        'CAR',
        'CLOCK',
        'CONFIRMATION_NUMBER_ICON',
        'DOLLAR',
        'DESCRIPTION',
        'EDIT',
        'EDIT_NOTE',
        'EMAIL',
        'EVENT_PERFORMER',
        'EVENT_SEAT',
        'FLIGHT_ARRIVAL',
        'FLIGHT_DEPARTURE',
        'HOTEL',
        'HOTEL_ROOM_TYPE',
        'INVITE',
        'MAP_PIN',
        'MEMBERSHIP',
        'MULTIPLE_PEOPLE',
        'OFFER',
        'OPEN_IN_NEW',
        'PERSON',
        'PHONE',
        'RESTAURANT_ICON',
        'SHOPPING_CART',
        'STAR',
        'STORE',
        'TICKET',
        'TRAIN',
        'VIDEO_CAMERA',
        'VIDEO_PLAY',
      ])
      .exactOptional(),
    iconUrl: z.string().exactOptional(),
    imageStyle: z
      .enum(['CROP_TYPE_NOT_SET', 'SQUARE', 'CIRCLE', 'RECTANGLE_CUSTOM', 'RECTANGLE_4_3'])
      .exactOptional()
      .openapi({
        description:
          'The image cropping style. Note that icons with a CIRCLE style are rendered larger than the default icon size.',
      }),
  })
  .openapi({ required: [] })
  .openapi('IconImage')

const SwitchWidgetSchema = z
  .object({
    controlType: z.enum(['UNSPECIFIED', 'SWITCH', 'CHECKBOX']).exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the switch widget which is will be used in FormInput.',
      }),
    onChange: FormActionSchema.exactOptional(),
    selected: z.boolean().exactOptional(),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value is what is passed back in apps script callback.' }),
  })
  .openapi({ required: [] })
  .openapi('SwitchWidget')

const KeyValueSchema = z
  .object({
    bottomLabel: z.string().exactOptional().openapi({ description: 'Formatted text supported.' }),
    button: ButtonSchema.exactOptional(),
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'Formatted text supported and always required.' }),
    contentMultiline: z.boolean().exactOptional(),
    endIcon: IconImageSchema.exactOptional(),
    icon: z
      .enum([
        'NONE',
        'AIRPLANE',
        'BOOKMARK',
        'BUS',
        'CAR',
        'CLOCK',
        'CONFIRMATION_NUMBER_ICON',
        'DOLLAR',
        'DESCRIPTION',
        'EDIT',
        'EDIT_NOTE',
        'EMAIL',
        'EVENT_PERFORMER',
        'EVENT_SEAT',
        'FLIGHT_ARRIVAL',
        'FLIGHT_DEPARTURE',
        'HOTEL',
        'HOTEL_ROOM_TYPE',
        'INVITE',
        'MAP_PIN',
        'MEMBERSHIP',
        'MULTIPLE_PEOPLE',
        'OFFER',
        'OPEN_IN_NEW',
        'PERSON',
        'PHONE',
        'RESTAURANT_ICON',
        'SHOPPING_CART',
        'STAR',
        'STORE',
        'TICKET',
        'TRAIN',
        'VIDEO_CAMERA',
        'VIDEO_PLAY',
      ])
      .exactOptional(),
    iconAltText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The alternative text of this icon_url which will be used for accessibility.',
      }),
    iconUrl: z.string().exactOptional(),
    imageStyle: z
      .enum(['CROP_TYPE_NOT_SET', 'SQUARE', 'CIRCLE', 'RECTANGLE_CUSTOM', 'RECTANGLE_4_3'])
      .exactOptional(),
    onClick: OnClickSchema.exactOptional().openapi({
      description: 'Only the top/bottom label + content region is clickable.',
    }),
    startIcon: IconImageSchema.exactOptional().openapi({
      description: 'The optional icon to display before the text content.',
    }),
    switchWidget: SwitchWidgetSchema.exactOptional(),
    topLabel: z.string().exactOptional().openapi({ description: 'Formatted text supported.' }),
  })
  .openapi({ required: [] })
  .openapi('KeyValue')

const MenuItemSchema = z
  .object({
    selected: z.boolean().exactOptional(),
    text: z.string().exactOptional().openapi({ description: 'The text to be displayed.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value associated with this item which will be sent back to app scripts. Client should use as a form input value.',
      }),
  })
  .openapi({ required: [] })
  .openapi('MenuItem')

const MenuSchema = z
  .object({
    items: z.array(MenuItemSchema).exactOptional(),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label used to be displayed ahead of the menu. It is optional.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the text field which is will be used in FormInput.' }),
    onChange: FormActionSchema.exactOptional().openapi({
      description:
        'If specified, form is submitted when selection changed. If not specified, developer will need to specify a separate button.',
    }),
  })
  .openapi({
    description: 'This is deprecated and please use SelectionControl by setting type to DROPDOWN.',
    required: [],
  })
  .openapi('Menu')

const SelectionItemSchema = z
  .object({
    selected: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If more than one items are selected for RADIO_BUTTON and DROPDOWN, the first selected item is treated as sElected and the after ones are all ignored.',
      }),
    text: z.string().exactOptional().openapi({ description: 'The text to be displayed.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value associated with this item which will be sent back to app scripts. Client should use as a form input value.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SelectionItem')

const SelectionControlSchema = z
  .object({
    items: z
      .array(SelectionItemSchema)
      .exactOptional()
      .openapi({ description: 'For radio button, at most one of the items will be selected.' }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Label used to be displayed ahead of the selection control. It is optional.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the text field which is will be used in FormInput.' }),
    onChange: FormActionSchema.exactOptional().openapi({
      description:
        'If specified, form is submitted when selection changed. If not specified, developer will need to specify a separate button.',
    }),
    type: z.enum(['CHECK_BOX', 'RADIO_BUTTON', 'SWITCH', 'DROPDOWN']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SelectionControl')

const AutoCompleteItemSchema = z
  .object({ text: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AutoCompleteItem')

const AutoCompleteSchema = z
  .object({ items: z.array(AutoCompleteItemSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('AutoComplete')

const TextFieldSchema = z
  .object({
    autoComplete: AutoCompleteSchema.exactOptional().openapi({
      description: 'The initial set of auto complete items without any user input.',
    }),
    autoCompleteCallback: FormActionSchema.exactOptional().openapi({
      description:
        "The refresh function which returns AutoComplete based on the user's input text. If the callback is not specified, auto complete will be purely done in client side based on the auto_complete items.",
    }),
    autoCompleteMultipleSelections: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'When set to true, a user can input multiple auto-complet items.' }),
    hintText: z.string().exactOptional(),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'One of label or hint_text is required to be specified by the developers.',
      }),
    maxLines: z.int32().exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the text field which is will be used in FormInput.' }),
    onChange: FormActionSchema.exactOptional(),
    type: z.enum(['SINGLE_LINE', 'MULTIPLE_LINE']).exactOptional(),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default value when no input from user.' }),
  })
  .openapi({ required: [] })
  .openapi('TextField')

const TextKeyValueSchema = z
  .object({
    key: z.string().exactOptional(),
    onClick: OnClickSchema.exactOptional(),
    text: z.string().exactOptional(),
  })
  .openapi({ description: 'This is deprecated and please use KeyValue.', required: [] })
  .openapi('TextKeyValue')

const TextParagraphSchema = z
  .object({ text: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TextParagraph')

const WidgetMarkupSchema = z
  .object({
    buttons: z
      .array(ButtonSchema)
      .exactOptional()
      .openapi({
        description: 'buttons is also oneof data and only one of these fields should be set.',
      }),
    dateTimePicker: DateTimePickerSchema.exactOptional(),
    divider: DividerSchema.exactOptional(),
    grid: GridSchema.exactOptional(),
    horizontalAlignment: z
      .enum(['HORIZONTAL_ALIGNMENT_UNSPECIFIED', 'START', 'CENTER', 'END'])
      .exactOptional()
      .openapi({ description: 'The horizontal alignment of this widget.' }),
    image: ImageSchema.exactOptional(),
    imageKeyValue: ImageKeyValueSchema.exactOptional(),
    keyValue: KeyValueSchema.exactOptional(),
    menu: MenuSchema.exactOptional().openapi({ description: 'Input Widgets' }),
    selectionControl: SelectionControlSchema.exactOptional(),
    textField: TextFieldSchema.exactOptional(),
    textKeyValue: TextKeyValueSchema.exactOptional(),
    textParagraph: TextParagraphSchema.exactOptional().openapi({
      description: 'Read-only Widgets',
    }),
  })
  .openapi({ required: [] })
  .openapi('WidgetMarkup')

const SectionSchema = z
  .object({
    collapsable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicating whether this section is collapsable. If a section is collapsable, the description must be given.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The header of the section, text formatted supported.' }),
    numUncollapsableWidgets: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of uncollapsable widgets. For example, when a section contains 5 widgets and the num_uncollapsable_widget are set to be 2, The first 2 widgets will always shown and the last 3 is collapsed as default. Only when collapsable is set to be true, the num_uncollapsable_widget will be taken into account.',
      }),
    widgets: z
      .array(WidgetMarkupSchema)
      .exactOptional()
      .openapi({ description: 'A section must contain at least 1 widget.' }),
  })
  .openapi({
    description:
      'Sections are separated by a line divider. They contain a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, AddOns have a narrow fixed width, so there is currently no need for layout properties (e.g. float).',
    required: [],
  })
  .openapi('Section')

const CardSchema = z
  .object({
    cardActions: z.array(CardActionSchema).exactOptional(),
    displayStyle: z.enum(['DISPLAY_STYLE_UNSPECIFIED', 'PEEK', 'REPLACE']).exactOptional(),
    fixedFooter: FixedFooterSchema.exactOptional(),
    header: CardHeaderSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the card used in CardNavigation.pop_to_card_name.' }),
    peekCardHeader: CardHeaderSchema.exactOptional().openapi({
      description:
        'When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.',
    }),
    sections: z.array(SectionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Card')

const ToolbarSchema = z
  .object({
    color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Background color of the toolbar in RBG hex representation.' }),
    iconUrl: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({
    description:
      'The Toolbar markup has been deprecated. The information is now specified in the manifest.',
    required: [],
  })
  .openapi('Toolbar')

const ContextualAddOnMarkupSchema = z
  .object({
    cards: z
      .array(CardSchema)
      .exactOptional()
      .openapi({ description: 'A card must contain a header and at least 1 section.' }),
    toolbar: ToolbarSchema.exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({
    description:
      'The markup for developers to specify the contents of a contextual AddOn. A contextual AddOn is triggered in context of an email. For that email, there can be N items that are associated with the email (e.g. contacts, sales lead, meeting information). Each item is represented as a "card". A card has two views, collapsed and detailed. If there are more than 1 card, the cards are show as a list of collapsed views. The end user can expand into the detailed view for each of those cards. In the detailed view, developers have the freedom to use a variety of "widgets" to construct it. The model here is to restrict (make consistent for end users) the navigation of the N cards but providing developers the freedom to build the detailed view that can best represent their use case/content. Go http://go/aoig-widgets1 to see the mocks. Post v1, we plan to support new AddOn use cases that will require different and separate \'templates\'. For example, a compose triggered AddOn which will support a new set of use cases with different user interaction patterns. As a result, we will likely need a very different template than this one.',
    required: [],
  })
  .openapi('ContextualAddOnMarkup')

const AppsDynamiteV1ApiCompatV1ActionConfirmSchema = z
  .object({
    dismiss_text: z.string().exactOptional().openapi({ description: '"Cancel" button label.' }),
    ok_text: z.string().exactOptional().openapi({ description: '"OK" button label.' }),
    text: z.string().exactOptional().openapi({ description: 'Confirmation dialog body text.' }),
    title: z.string().exactOptional().openapi({ description: 'Confirmation dialog title.' }),
  })
  .openapi({ description: 'Confirmation dialog config.', required: [] })
  .openapi('AppsDynamiteV1ApiCompatV1ActionConfirm')

const AppsDynamiteV1ApiCompatV1ActionSchema = z
  .object({
    confirm: AppsDynamiteV1ApiCompatV1ActionConfirmSchema.exactOptional().openapi({
      description: 'Confirmation dialog config.',
    }),
    name: z.string().exactOptional().openapi({ description: 'Unique identifier for this action.' }),
    style: z
      .string()
      .exactOptional()
      .openapi({ description: 'Button style ("default", "primary", or "danger").' }),
    text: z.string().exactOptional().openapi({ description: 'User-facing label for the action.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Action type - currently only "button".' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Payload for this action. Will be sent to the action handler along with name.',
      }),
  })
  .openapi({
    description:
      'Interactive objects inside a message. Documentation: - https://api.slack.com/docs/message-buttons',
    required: [],
  })
  .openapi('AppsDynamiteV1ApiCompatV1Action')

const AppsDynamiteV1ApiCompatV1FieldSchema = z
  .object({
    short: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the field can be shown side-by-side with another field.' }),
    title: z.string().exactOptional().openapi({ description: 'The heading text, shown in bold.' }),
    value: z.string().exactOptional().openapi({ description: 'The text value of the field.' }),
  })
  .openapi({
    description:
      'A column of text in an attachment. Documentation: - https://api.slack.com/docs/message-attachments',
    required: [],
  })
  .openapi('AppsDynamiteV1ApiCompatV1Field')

const AppsDynamiteV1ApiCompatV1AttachmentSchema = z
  .object({
    actions: z
      .array(AppsDynamiteV1ApiCompatV1ActionSchema)
      .exactOptional()
      .openapi({ description: 'Array of actions (currently only buttons).' }),
    attachment_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Undocumented - used in interactive button examples. The only valid value appears to be "default".',
      }),
    author_icon: z.string().exactOptional().openapi({ description: 'Avatar URL for the user.' }),
    author_link: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL that the user name should link to.' }),
    author_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'User name to display as the author of the message.' }),
    callback_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the collection of buttons within this attachment. Will be sent back to the action handler URL when a button is clicked.',
      }),
    color: z
      .string()
      .exactOptional()
      .openapi({ description: 'A color "bar" to display to the left of the attachment.' }),
    fallback: z
      .string()
      .exactOptional()
      .openapi({
        description: "Fallback plain-text string for clients that don't support attachments.",
      }),
    fields: z
      .array(AppsDynamiteV1ApiCompatV1FieldSchema)
      .exactOptional()
      .openapi({ description: 'Columns of text inside the attachment body.' }),
    footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string displayed at the bottom of the attachment.' }),
    footer_icon: z
      .string()
      .exactOptional()
      .openapi({ description: 'Avatar URL displayed to the left of the footer.' }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of an image to display in an image chip.' }),
    mrkdwn_in: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of fields to apply formatting to.' }),
    pretext: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string to show above the attachment.' }),
    text: z.string().exactOptional().openapi({ description: 'Main text.' }),
    thumb_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL of a thumbnail image to display to the right of the attachment body.',
      }),
    title: z.string().exactOptional().openapi({ description: 'Title string of this attachment.' }),
    title_link: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL that the title string should link to.' }),
    ts: z.int32().exactOptional().openapi({ description: 'UNIX timestamp of the attachment.' }),
  })
  .openapi({
    description:
      'Richly formatted attachments. Documentation: - https://api.slack.com/docs/message-attachments',
    required: [],
  })
  .openapi('AppsDynamiteV1ApiCompatV1Attachment')

type AttachmentType = {
  addOnData?: z.infer<typeof GoogleChatV1ContextualAddOnMarkupSchema>
  appId?: z.infer<typeof UserIdSchema>
  attachmentId?: string
  cardAddOnData?: z.infer<typeof AppsDynamiteStorageCardSchema>
  deprecatedAddOnData?: z.infer<typeof ContextualAddOnMarkupSchema>
  slackData?: z.infer<typeof AppsDynamiteV1ApiCompatV1AttachmentSchema>
  slackDataImageUrlHeight?: number
}

const BooleanOperatorOptionsSchema = z
  .object({
    operatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the operator name required in the query in order to isolate the boolean property. For example, if operatorName is *closed* and the property's name is *isClosed*, then queries like *closed:<value>* show results only where the value of the property named *isClosed* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.",
      }),
  })
  .openapi({
    description:
      'Used to provide a search operator for boolean properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.',
    required: [],
  })
  .openapi('BooleanOperatorOptions')

type BooleanPropertyOptionsType = { operatorOptions?: z.infer<typeof BooleanOperatorOptionsSchema> }

const ImageButtonSchema = z
  .object({
    icon: z
      .enum([
        'NONE',
        'AIRPLANE',
        'BOOKMARK',
        'BUS',
        'CAR',
        'CLOCK',
        'CONFIRMATION_NUMBER_ICON',
        'DOLLAR',
        'DESCRIPTION',
        'EDIT',
        'EDIT_NOTE',
        'EMAIL',
        'EVENT_PERFORMER',
        'EVENT_SEAT',
        'FLIGHT_ARRIVAL',
        'FLIGHT_DEPARTURE',
        'HOTEL',
        'HOTEL_ROOM_TYPE',
        'INVITE',
        'MAP_PIN',
        'MEMBERSHIP',
        'MULTIPLE_PEOPLE',
        'OFFER',
        'OPEN_IN_NEW',
        'PERSON',
        'PHONE',
        'RESTAURANT_ICON',
        'SHOPPING_CART',
        'STAR',
        'STORE',
        'TICKET',
        'TRAIN',
        'VIDEO_CAMERA',
        'VIDEO_PLAY',
      ])
      .exactOptional(),
    iconUrl: z.string().exactOptional(),
    name: z.string().exactOptional(),
    onClick: OnClickSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImageButton')

type ButtonType = {
  imageButton?: z.infer<typeof ImageButtonSchema>
  textButton?: z.infer<typeof TextButtonSchema>
}

const FilterSchema: z.ZodType<FilterType> = z
  .lazy(() =>
    z
      .object({
        compositeFilter: CompositeFilterSchema.exactOptional(),
        valueFilter: ValueFilterSchema.exactOptional(),
      })
      .openapi({
        description:
          'A generic way of expressing filters in a query, which supports two approaches: **1. Setting a ValueFilter.** The name must match an operator_name defined in the schema for your data source. **2. Setting a CompositeFilter.** The filters are evaluated using the logical operator. The top-level operators can only be either an AND or a NOT. AND can appear only at the top-most level. OR can appear only under a top-level AND.',
        required: [],
      }),
  )
  .openapi('Filter')

type CompositeFilterType = {
  logicOperator?: 'AND' | 'OR' | 'NOT'
  subFilters?: z.infer<typeof FilterSchema>[]
}

const DateOperatorOptionsSchema = z
  .object({
    greaterThanOperatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the operator name required in the query in order to isolate the date property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value>* show results only where the value of the property named *closeDate* is later than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.",
      }),
    lessThanOperatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the operator name required in the query in order to isolate the date property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value>* show results only where the value of the property named *closeDate* is earlier than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.",
      }),
    operatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the actual string required in the query in order to isolate the date property. For example, suppose an issue tracking schema object has a property named *closeDate* that specifies an operator with an operatorName of *closedon*. For searches on that data, queries like *closedon:<value>* show results only where the value of the *closeDate* property matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the indexed datasource. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.',
      }),
  })
  .openapi({
    description:
      'Optional. Provides a search operator for date properties. Search operators let users restrict the query to specific fields relevant to the type of item being searched.',
    required: [],
  })
  .openapi('DateOperatorOptions')

type DatePropertyOptionsType = { operatorOptions?: z.infer<typeof DateOperatorOptionsSchema> }

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Month of date. Must be from 1 to 12.' }),
    year: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Year of date. Must be from 1 to 9999.' }),
  })
  .openapi({
    description:
      'Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999.',
    required: [],
  })
  .openapi('Date')

type DateValuesType = { values?: z.infer<typeof DateSchema>[] }

const DoubleOperatorOptionsSchema = z
  .object({
    operatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the operator name required in the query in order to use the double property in sorting or as a facet. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.',
      }),
  })
  .openapi({
    description:
      'Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.',
    required: [],
  })
  .openapi('DoubleOperatorOptions')

type DoublePropertyOptionsType = { operatorOptions?: z.infer<typeof DoubleOperatorOptionsSchema> }

type DoubleValuesType = { values?: number[] }

const EnumOperatorOptionsSchema = z
  .object({
    operatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the operator name required in the query in order to isolate the enum property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value>* show results only where the value of the property named *priorityVal* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.",
      }),
  })
  .openapi({
    description:
      "Used to provide a search operator for enum properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched. For example, if you provide no operator for a *priority* enum property with possible values *p0* and *p1*, a query that contains the term *p0* returns items that have *p0* as the value of the *priority* property, as well as any items that contain the string *p0* in other fields. If you provide an operator name for the enum, such as *priority*, then search users can use that operator to refine results to only items that have *p0* as this property's value, with the query *priority:p0*.",
    required: [],
  })
  .openapi('EnumOperatorOptions')

const EnumValuePairSchema = z
  .object({
    integerValue: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The integer value of the EnumValuePair which must be non-negative. Optional.',
      }),
    stringValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The string value of the EnumValuePair. The maximum length is 32 characters.',
      }),
  })
  .openapi({
    description:
      'The enumeration value pair defines two things: a required string value and an optional integer value. The string value defines the necessary query term required to retrieve that item, such as *p0* for a priority item. The integer value determines the ranking of that string value relative to other enumerated values for the same property. For example, you might associate *p0* with *0* and define another enum pair such as *p1* and *1*. You must use the integer value in combination with ordered ranking to set the ranking of a given value relative to other enumerated values for the same property name. Here, a ranking order of DESCENDING for *priority* properties results in a ranking boost for items indexed with a value of *p0* compared to items indexed with a value of *p1*. Without a specified ranking order, the integer value has no effect on item ranking.',
    required: [],
  })
  .openapi('EnumValuePair')

type EnumPropertyOptionsType = {
  operatorOptions?: z.infer<typeof EnumOperatorOptionsSchema>
  orderedRanking?: 'NO_ORDER' | 'ASCENDING' | 'DESCENDING'
  possibleValues?: z.infer<typeof EnumValuePairSchema>[]
}

type EnumValuesType = { values?: string[] }

const CompositeFilterSchema: z.ZodType<CompositeFilterType> = z
  .lazy(() =>
    z
      .object({
        logicOperator: z
          .enum(['AND', 'OR', 'NOT'])
          .exactOptional()
          .openapi({ description: 'The logic operator of the sub filter.' }),
        subFilters: z.array(FilterSchema).exactOptional().openapi({ description: 'Sub filters.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CompositeFilter')

const ValueSchema = z
  .object({
    booleanValue: z.boolean().exactOptional(),
    dateValue: DateSchema.exactOptional(),
    doubleValue: z.float64().exactOptional(),
    integerValue: z.string().exactOptional(),
    stringValue: z.string().exactOptional(),
    timestampValue: z.string().exactOptional(),
  })
  .openapi({ description: 'Definition of a single value with generic type.', required: [] })
  .openapi('Value')

type ValueFilterType = { operatorName?: string; value?: z.infer<typeof ValueSchema> }

const ValueFilterSchema: z.ZodType<ValueFilterType> = z
  .object({
    operatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `operator_name` applied to the query, such as *price_greater_than*. The filter can work against both types of filters defined in the schema for your data source: 1. `operator_name`, where the query filters results by the property that matches the value. 2. `greater_than_operator_name` or `less_than_operator_name` in your schema. The query filters the results for the property values that are greater than or less than the supplied value in the query.',
      }),
    value: ValueSchema.exactOptional().openapi({ description: 'The value to be compared with.' }),
  })
  .openapi({ required: [] })
  .openapi('ValueFilter')

type FilterType = {
  compositeFilter?: z.infer<typeof CompositeFilterSchema>
  valueFilter?: z.infer<typeof ValueFilterSchema>
}

const HtmlOperatorOptionsSchema = z
  .object({
    operatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the operator name required in the query in order to isolate the html property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value>* show results only where the value of the property named *subjectLine* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator return all items where *<value>* matches the value of any html properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.",
      }),
  })
  .openapi({
    description:
      'Used to provide a search operator for html properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.',
    required: [],
  })
  .openapi('HtmlOperatorOptions')

const RetrievalImportanceSchema = z
  .object({
    importance: z
      .enum(['DEFAULT', 'HIGHEST', 'HIGH', 'LOW', 'NONE'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the ranking importance given to property when it is matched during retrieval. Once set, the token importance of a property cannot be changed.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RetrievalImportance')

type HtmlPropertyOptionsType = {
  operatorOptions?: z.infer<typeof HtmlOperatorOptionsSchema>
  retrievalImportance?: z.infer<typeof RetrievalImportanceSchema>
}

type HtmlValuesType = { values?: string[] }

const IntegerFacetingOptionsSchema = z
  .object({
    integerBuckets: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Buckets for given integer values should be in strictly ascending order. For example, if values supplied are (1,5,10,100), the following facet buckets will be formed {<1, [1,5), [5-10), [10-100), >=100}.',
      }),
  })
  .openapi({ description: 'Used to specify integer faceting options.', required: [] })
  .openapi('IntegerFacetingOptions')

const IntegerOperatorOptionsSchema = z
  .object({
    greaterThanOperatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the operator name required in the query in order to isolate the integer property using the greater-than operator. For example, if greaterThanOperatorName is *priorityabove* and the property's name is *priorityVal*, then queries like *priorityabove:<value>* show results only where the value of the property named *priorityVal* is greater than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.",
      }),
    lessThanOperatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the operator name required in the query in order to isolate the integer property using the less-than operator. For example, if lessThanOperatorName is *prioritybelow* and the property's name is *priorityVal*, then queries like *prioritybelow:<value>* show results only where the value of the property named *priorityVal* is less than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.",
      }),
    operatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the operator name required in the query in order to isolate the integer property. For example, if operatorName is *priority* and the property's name is *priorityVal*, then queries like *priority:<value>* show results only where the value of the property named *priorityVal* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.",
      }),
  })
  .openapi({
    description:
      'Used to provide a search operator for integer properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.',
    required: [],
  })
  .openapi('IntegerOperatorOptions')

type IntegerPropertyOptionsType = {
  integerFacetingOptions?: z.infer<typeof IntegerFacetingOptionsSchema>
  maximumValue?: string
  minimumValue?: string
  operatorOptions?: z.infer<typeof IntegerOperatorOptionsSchema>
  orderedRanking?: 'NO_ORDER' | 'ASCENDING' | 'DESCENDING'
}

type IntegerValuesType = { values?: string[] }

const EventAnnotationSchema = z
  .object({ type: z.int32().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('EventAnnotation')

const ChatConserverDynamitePlaceholderMetadataAttachmentMetadataSchema = z
  .object({ filename: z.string().exactOptional() })
  .openapi({ description: 'An attachment uploaded in Dynamite and its filename.', required: [] })
  .openapi('ChatConserverDynamitePlaceholderMetadataAttachmentMetadata')

const ChatConserverDynamitePlaceholderMetadataBotMessageMetadataSchema = z
  .object({})
  .openapi({ description: 'A bot sent a message in Dynamite.' })
  .openapi('ChatConserverDynamitePlaceholderMetadataBotMessageMetadata')

const ChatConserverDynamitePlaceholderMetadataCalendarEventMetadataSchema = z
  .object({})
  .openapi({ description: 'A Calendar event message in Dynamite.' })
  .openapi('ChatConserverDynamitePlaceholderMetadataCalendarEventMetadata')

const ChatConserverDynamitePlaceholderMetadataDeleteMetadataSchema = z
  .object({})
  .openapi({ description: 'A message was deleted in Dynamite.' })
  .openapi('ChatConserverDynamitePlaceholderMetadataDeleteMetadata')

const ChatConserverDynamitePlaceholderMetadataEditMetadataSchema = z
  .object({})
  .openapi({ description: 'An edit was made in Dynamite.' })
  .openapi('ChatConserverDynamitePlaceholderMetadataEditMetadata')

const ChatConserverDynamitePlaceholderMetadataTasksMetadataSchema = z
  .object({})
  .openapi({ description: 'A Tasks message in Dynamite.' })
  .openapi('ChatConserverDynamitePlaceholderMetadataTasksMetadata')

const ChatConserverDynamitePlaceholderMetadataVideoCallMetadataSchema = z
  .object({ meetingUrl: z.string().exactOptional() })
  .openapi({ description: 'A Meet initiated in Dynamite and its URL.', required: [] })
  .openapi('ChatConserverDynamitePlaceholderMetadataVideoCallMetadata')

const ChatConserverDynamitePlaceholderMetadataSchema = z
  .object({
    attachmentMetadata:
      ChatConserverDynamitePlaceholderMetadataAttachmentMetadataSchema.exactOptional(),
    botMessageMetadata:
      ChatConserverDynamitePlaceholderMetadataBotMessageMetadataSchema.exactOptional(),
    calendarEventMetadata:
      ChatConserverDynamitePlaceholderMetadataCalendarEventMetadataSchema.exactOptional(),
    deleteMetadata: ChatConserverDynamitePlaceholderMetadataDeleteMetadataSchema.exactOptional(),
    editMetadata: ChatConserverDynamitePlaceholderMetadataEditMetadataSchema.exactOptional(),
    spaceUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The space URL embedded in the localized string.' }),
    tasksMetadata: ChatConserverDynamitePlaceholderMetadataTasksMetadataSchema.exactOptional(),
    videoCallMetadata:
      ChatConserverDynamitePlaceholderMetadataVideoCallMetadataSchema.exactOptional(),
  })
  .openapi({
    description:
      'Metadata used as inputs to the localization that is performed on Dynamite-originated messages that are incompatible with Hangouts clients. See go/localization-of-system-messages for more details.',
    required: [],
  })
  .openapi('ChatConserverDynamitePlaceholderMetadata')

const GroupLinkSharingModificationEventSchema = z
  .object({
    newStatus: z
      .enum(['UNKNOWN_LINK_SHARING_STATUS', 'LINK_SHARING_ON', 'LINK_SHARING_OFF', 'NOT_AVAILABLE'])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GroupLinkSharingModificationEvent')

const StoredParticipantIdSchema = z
  .object({ gaiaId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('StoredParticipantId')

const HangoutEventSchema = z
  .object({
    hangoutDurationSecs: z.string().exactOptional(),
    mediaType: z.enum(['AUDIO_VIDEO', 'AUDIO_ONLY', 'PUSH_TO_TALK']).exactOptional(),
    participantId: z.array(StoredParticipantIdSchema).exactOptional(),
    type: z
      .enum([
        'START_HANGOUT',
        'JOIN_HANGOUT',
        'LEAVE_HANGOUT',
        'END_HANGOUT',
        'HANGOUT_COMING_SOON',
        'ONGOING_HANGOUT',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HangoutEvent')

const InviteAcceptedEventSchema = z
  .object({ participantId: z.array(StoredParticipantIdSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('InviteAcceptedEvent')

const MembershipChangeEventSchema = z
  .object({
    leaveReason: z
      .enum(['LEAVE_REASON_UNKNOWN', 'FORCE_HISTORY_POLICY_CHANGE', 'USER_INITIATED'])
      .exactOptional()
      .openapi({ description: 'This should only be set when MembershipChange type is LEAVE.' }),
    participantId: z.array(StoredParticipantIdSchema).exactOptional(),
    type: z.enum(['JOIN', 'LEAVE']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MembershipChangeEvent')

const OtrChatMessageEventSchema = z
  .object({
    expirationTimestampUsec: z.string().exactOptional(),
    kansasRowId: z.string().exactOptional(),
    kansasVersionInfo: z.string().exactOptional(),
    messageOtrStatus: z.enum(['OFF_THE_RECORD', 'ON_THE_RECORD']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OtrChatMessageEvent')

const OtrModificationEventSchema = z
  .object({
    newOtrStatus: z.enum(['OFF_THE_RECORD', 'ON_THE_RECORD']).exactOptional(),
    newOtrToggle: z.enum(['ENABLED', 'DISABLED']).exactOptional(),
    oldOtrStatus: z.enum(['OFF_THE_RECORD', 'ON_THE_RECORD']).exactOptional(),
    oldOtrToggle: z.enum(['ENABLED', 'DISABLED']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OtrModificationEvent')

const RenameEventSchema = z
  .object({ newName: z.string().exactOptional(), originalName: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RenameEvent')

const ChatContentExtensionSchema = z
  .object({
    annotation: z
      .array(EventAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Annotations to decorate this event.' }),
    dynamitePlaceholderMetadata:
      ChatConserverDynamitePlaceholderMetadataSchema.exactOptional().openapi({
        description:
          'This metadata informs how the placeholder string will be localized dynamically in Hangouts. See go/localization-of-system-messages. This is only used as part of REGULAR_CHAT_MESSAGE events.',
      }),
    eventOtrStatus: z
      .enum(['OFF_THE_RECORD', 'ON_THE_RECORD'])
      .exactOptional()
      .openapi({
        description:
          'Is this event OnTR or OffTR? Since some events can be ON_THE_RECORD and have an expiration_timestamp (for example enterprise retention users) we need to store the otr status.',
      }),
    groupLinkSharingModificationEvent:
      GroupLinkSharingModificationEventSchema.exactOptional().openapi({
        description: 'Group-link sharing toggle event.',
      }),
    hangoutEvent: HangoutEventSchema.exactOptional().openapi({
      description: 'Audio/video Hangout event.',
    }),
    inviteAcceptedEvent: InviteAcceptedEventSchema.exactOptional().openapi({
      description:
        'Invite accepted events. Note: this is only used ephemerally to sync to Gmail. No actual cent is stored in Papyrus.',
    }),
    membershipChangeEvent: MembershipChangeEventSchema.exactOptional().openapi({
      description: 'Join/leave events.',
    }),
    otrChatMessageEvent: OtrChatMessageEventSchema.exactOptional().openapi({
      description: 'Metadata for off-the-record message.',
    }),
    otrModificationEvent: OtrModificationEventSchema.exactOptional(),
    renameEvent: RenameEventSchema.exactOptional(),
  })
  .openapi({ description: 'NEXT ID: 12', required: [] })
  .openapi('ChatContentExtension')

const VoicePhoneNumberI18nDataSchema = z
  .object({
    countryCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The country calling code for this number, as defined by the ITU. For example, this would be 1 for NANPA countries, and 33 for France (for more info see i18n.phonenumbers.PhoneNumber.country_code).',
      }),
    internationalNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display number formatted using the INTERNATIONAL format.' }),
    isValid: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "When present, indicates the number is valid according to the libphonenumber's isValidNumber API (see https://code.google.com/p/libphonenumber/).",
      }),
    nationalNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display number formatted using the NATIONAL format.' }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A region (country, territory, continent, etc), as defined by Unicode\'s "CLDR", itself based on ISO 3166 (UN country codes). For details, see https://www.corp.google.com/~engdocs/java/com/google/i18n/identifiers/RegionCode.html',
      }),
    validationResult: z
      .enum([
        'UNKNOWN',
        'IS_POSSIBLE',
        'INVALID_COUNTRY_CODE',
        'TOO_SHORT',
        'TOO_LONG',
        'IS_POSSIBLE_LOCAL_ONLY',
        'INVALID_LENGTH',
      ])
      .exactOptional()
      .openapi({
        description:
          'When set to a non-default value, indicates the validation reason that is set when phone number is invalid (is_valid is false).',
      }),
  })
  .openapi({ required: [] })
  .openapi('VoicePhoneNumberI18nData')

const VoicePhoneNumberSchema = z
  .object({
    e164: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'E.164 formatted full phone number with leading +. This field also represents encoded form of short telephone numbers in E.164 format. e.g. "911" is encoded as "+1911".',
      }),
    i18nData: VoicePhoneNumberI18nDataSchema.exactOptional().openapi({
      description: 'Additional data that could be added using the libphonenumber API.',
    }),
  })
  .openapi({
    description:
      'Represents both long and short phone number that can be called or texted. Short telephone numbers are used to reach local services. Short numbers and their purpose differ from country to country. These numbers in US are in the form of N11 which is a three-digit abbreviated dialing telephone number.',
    required: [],
  })
  .openapi('VoicePhoneNumber')

const DeliveryMediumSchema = z
  .object({
    mediumType: z
      .enum(['UNKNOWN_MEDIUM', 'BABEL_MEDIUM', 'GOOGLE_VOICE_MEDIUM', 'LOCAL_SMS_MEDIUM'])
      .exactOptional()
      .openapi({
        description:
          'Describes the medium the cent was sent/received. For example, if I receive an SMS via GV, the medium_type will be GV.',
      }),
    selfPhone: VoicePhoneNumberSchema.exactOptional().openapi({
      description:
        'In the case of multiple GV/native numbers, this defines the exact number to send from. It is used to differentiate mediums that have the same type, but different addresses (e.g. two android phones).',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeliveryMedium')

const PackagingServiceClientSchema = z
  .object({
    androidPackageName: z
      .string()
      .exactOptional()
      .openapi({ description: "Android app's package name to generate the deep-link URI." }),
    iosAppStoreId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "iOS app's App Store ID to generate the App Store URL when app is not installed on device.",
      }),
    iosBundleId: z
      .string()
      .exactOptional()
      .openapi({ description: "iOS app's bundle ID to generate the deep-link URI." }),
    type: z
      .enum(['ANDROID', 'IOS'])
      .exactOptional()
      .openapi({ description: 'Type of Google API Console client.' }),
  })
  .openapi({
    description:
      'Developers register a client in Google API Console to get the deep-linking feature on Google+ posts or frames about their apps. The client data is stored in this proto.',
    required: [],
  })
  .openapi('PackagingServiceClient')

const DeepLinkDataSchema = z
  .object({
    appId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Application ID (or project ID) from Google API Console.' }),
    client: z
      .array(PackagingServiceClientSchema)
      .exactOptional()
      .openapi({
        description:
          'The data for a Google API Console client is entered by a developer during client registration and is stored in PackagingService.',
      }),
    deepLinkId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID for non-URL content. Embeds may either have no analogous web presence or prefer a native mobile experience if supported. In the case of no web presence, instead of setting the "url" field of an embed, such developers will set this field and other content fields, e.g. thumbnail, title, description. If set, this field is used to construct the deep-link URI. Note that the native experience is preferred over the web link and the web link is used as a fallback.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Analogous web presence. Used as desktop fallback or when no native link data is present.',
      }),
  })
  .openapi({
    description:
      "Deep-linking data is used to construct a deep-link URI for an activity or frame's embed, such that on click, the user is taken to the right place in a mobile app. If the app is not installed, the user is taken to the app store. If not on mobile, an analogous web uri is used.",
    required: [],
  })
  .openapi('DeepLinkData')

const ProvenanceSchema = z
  .object({
    annotationBlob: z
      .string()
      .exactOptional()
      .openapi({ description: 'Annotation blob from Annotation Service.' }),
    canonicalUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Canonical url of the retrieved_url, if one was resolved during retrieval, for example, if a rel="canonical" link tag was provided in the retrieved web page.',
      }),
    inputUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The url originally passed in the PRS request, which should be used to re-discover the content. Note that this URL may be a forwarding service or link shortener (bit.ly), so it should not be assumed to be canonical, but should be used for navigation back to the original source of the itemscope.',
      }),
    itemtype: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Contains exact types as parsed, whether or not we recognized that type at parse time. If an itemscope is created by merging SchemaOrg markup and open graph markup then the first itemtype would be schemaorg type, the second would be open graph and so on. example: http://schema.org/VideoObject, og:video.movie Plain text; usually a URL',
      }),
    retrievedTimestampMsec: z
      .string()
      .exactOptional()
      .openapi({ description: 'The server retrieved timestamp (in msec).' }),
    retrievedUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The final URL that was the actual source of the itemscope, after any redirects.',
      }),
  })
  .openapi({
    description:
      'This field records where the ItemScope was retrieved, if it was created via a web fetch.',
    required: [],
  })
  .openapi('Provenance')

const TransientDataSchema = z
  .object({})
  .openapi({ description: 'Transient generic data that will not be saved on the server.' })
  .openapi('TransientData')

const EmbedClientItemSchema = z
  .object({
    canonicalId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The canonical ID of the embed. If absent, the canonical ID is equal to the ID; if present, then the canonical ID represents an "equivalence class" of embeds which really refer to the same object. (For example, the URLs http://www.foo.com/ and http://foo.com/ refer to the same object) This field may be updated periodically by background processes.',
      }),
    deepLinkData: DeepLinkDataSchema.exactOptional().openapi({
      description:
        "Deep-linking data to take the user to the right place in a mobile app. This is only used for preview and attribution. Links that are specific to a given embed type should live on that specific embed's proto by using Link. See http://goto.google.com/mariana-design.",
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the embed. This corresponds to the schema.org ID, as represented in the ItemScope.id field.',
      }),
    provenance: ProvenanceSchema.exactOptional().openapi({
      description:
        "The provenance of the embed, populated when the embed originated from a web fetch. The provenance captures information about the web page the embed had originated, like the URL that was retrieved and the retrieved URL's canonical form. This is useful in the case where the URL shared by the URL redirects (e.g., in the case of a shortened URL).",
    }),
    renderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID used to identify the embed during rendering. This field will match ID, if set, otherwise it will be the ID of the parent activity. This field is only populated on the server for client use and is not persisted to storage.',
      }),
    signature: z
      .string()
      .exactOptional()
      .openapi({ description: 'Signature of the embed, used for verification.' }),
    transientData: TransientDataSchema.exactOptional().openapi({
      description: 'Transient generic data that will not be saved on the server.',
    }),
    type: z
      .array(
        z.enum([
          'UNKNOWN',
          'ACTION_V2',
          'ADD_ACTION_V2',
          'AGGREGATE_RATING_V2',
          'ARTICLE_V2',
          'ASSESS_ACTION_V2',
          'AUDIO_OBJECT_V2',
          'BASIC_INTERACTION_V2',
          'BLOG_POSTING_V2',
          'BLOG_V2',
          'BOOK_V2',
          'BUY_ACTION_V2',
          'CHECK_IN_ACTION_V2',
          'CHECKIN_V2',
          'COLLEXION_V2',
          'COMMENT_ACTION_V2',
          'COMMENT_V2',
          'COMMUNICATE_ACTION_V2',
          'CONSUME_ACTION_V2',
          'CREATE_ACTION_V2',
          'CREATIVE_WORK_V2',
          'DISCOVER_ACTION_V2',
          'DOCUMENT_OBJECT_V2',
          'DRAWING_OBJECT_V2',
          'DRIVE_OBJECT_V2',
          'EMOTISHARE_V2',
          'ENTRY_POINT_V2',
          'EVENT_TIME_V2',
          'EVENT_V2',
          'FILE_OBJECT_V2',
          'FIND_ACTION_V2',
          'FINANCIAL_QUOTE_V2',
          'FORM_OBJECT_V2',
          'GEO_COORDINATES_V2',
          'GOOGLE_OFFER_V2',
          'HANGOUT_CHAT_MESSAGE',
          'HANGOUT_QUOTE',
          'HANGOUT_V2',
          'HOA_PLUS_EVENT_V2',
          'IMAGE_OBJECT_V2',
          'INTERACT_ACTION_V2',
          'INTERACTION_V2',
          'LISTEN_ACTION_V2',
          'LOCAL_BUSINESS_V2',
          'LOCAL_PLUS_PHOTO_ALBUM_V2',
          'MAGAZINE_V2',
          'MEDIA_OBJECT_V2',
          'MOBILE_APPLICATION_V2',
          'MOVIE_V2',
          'MUSIC_ALBUM_V2',
          'MUSIC_GROUP_V2',
          'MUSIC_PLAYLIST_V2',
          'MUSIC_RECORDING_V2',
          'NEWS_ARTICLE_V2',
          'OFFER_V2',
          'ORGANIZATION_V2',
          'ORGANIZE_ACTION_V2',
          'PERSON_V2',
          'PLACE_REVIEW_V2',
          'PLACE_V2',
          'PLAN_ACTION_V2',
          'PLAY_MUSIC_ALBUM_V2',
          'PLAY_MUSIC_TRACK_V2',
          'PLAY_OBJECT_V2',
          'PLUS_AUDIO_V2',
          'PLUS_EVENT_V2',
          'PLUS_MEDIA_COLLECTION_V2',
          'PLUS_MEDIA_OBJECT_V2',
          'PLUS_PAGE_V2',
          'PLUS_PHOTOS_ADDED_TO_COLLECTION_V2',
          'PLUS_PHOTO_ALBUM_V2',
          'PLUS_PHOTO_COLLECTION_V2',
          'PLUS_PHOTO_V2',
          'PLUS_POST_V2',
          'PLUS_RESHARE_V2',
          'PLUS_SOFTWARE_APPLICATION_V2',
          'POLL_OPTION_V2',
          'POLL_V2',
          'POSTAL_ADDRESS_V2',
          'PRESENTATION_OBJECT_V2',
          'PRODUCT_REVIEW_V2',
          'RATING_V2',
          'REACT_ACTION_V2',
          'RESERVATION_V2',
          'RESERVE_ACTION_V2',
          'REVIEW_V2',
          'REVIEW_ACTION_V2',
          'SOFTWARE_APPLICATION_V2',
          'SPREADSHEET_OBJECT_V2',
          'SQUARE_INVITE_V2',
          'SQUARE_V2',
          'STICKER_V2',
          'STORY_V2',
          'THING_V2',
          'TRADE_ACTION_V2',
          'DEPRECATED_TOUR_OBJECT_V2',
          'TV_EPISODE_V2',
          'TV_SERIES_V2',
          'UPDATE_ACTION_V2',
          'VIEW_ACTION_V2',
          'VIDEO_OBJECT_V2',
          'VIDEO_GALLERY_V2',
          'WANT_ACTION_V2',
          'WEB_PAGE_V2',
          'WRITE_ACTION_V2',
          'YOUTUBE_CHANNEL_V2',
          'GOOGLE_USER_PHOTO_V2',
          'GOOGLE_USER_PHOTO_ALBUM',
          'GOOGLE_PHOTO_RECIPE',
          'THING',
          'CREATIVE_WORK',
          'EVENT',
          'INTANGIBLE',
          'ORGANIZATION',
          'PERSON',
          'PLACE',
          'PRODUCT',
          'ARTICLE',
          'BLOG_POSTING',
          'NEWS_ARTICLE',
          'SCHOLARLY_ARTICLE',
          'BLOG',
          'BOOK',
          'COMMENT',
          'ITEM_LIST',
          'MAP',
          'MEDIA_OBJECT',
          'AUDIO_OBJECT',
          'IMAGE_OBJECT',
          'MUSIC_VIDEO_OBJECT',
          'VIDEO_OBJECT',
          'MOVIE',
          'MUSIC_PLAYLIST',
          'MUSIC_ALBUM',
          'MUSIC_RECORDING',
          'PAINTING',
          'PHOTOGRAPH',
          'RECIPE',
          'REVIEW',
          'SCULPTURE',
          'SOFTWARE_APPLICATION',
          'MOBILE_APPLICATION',
          'WEB_APPLICATION',
          'TV_EPISODE',
          'TV_SEASON',
          'TV_SERIES',
          'WEB_PAGE',
          'ABOUT_PAGE',
          'CHECKOUT_PAGE',
          'COLLECTION_PAGE',
          'IMAGE_GALLERY',
          'VIDEO_GALLERY',
          'CONTACT_PAGE',
          'ITEM_PAGE',
          'PROFILE_PAGE',
          'SEARCH_RESULTS_PAGE',
          'WEB_PAGE_ELEMENT',
          'SITE_NAVIGATION_ELEMENT',
          'TABLE',
          'WP_AD_BLOCK',
          'WP_FOOTER',
          'WP_HEADER',
          'WP_SIDEBAR',
          'APP_INVITE',
          'EMOTISHARE',
          'BUSINESS_EVENT',
          'CHILDRENS_EVENT',
          'COMEDY_EVENT',
          'DANCE_EVENT',
          'EDUCATION_EVENT',
          'FESTIVAL',
          'FOOD_EVENT',
          'LITERARY_EVENT',
          'MUSIC_EVENT',
          'SALE_EVENT',
          'SOCIAL_EVENT',
          'SPORTS_EVENT',
          'THEATER_EVENT',
          'VISUAL_ARTS_EVENT',
          'RESERVATION',
          'TRAVEL_EVENT',
          'CORPORATION',
          'EDUCATIONAL_ORGANIZATION',
          'COLLEGE_OR_UNIVERSITY',
          'ELEMENTARY_SCHOOL',
          'HIGH_SCHOOL',
          'MIDDLE_SCHOOL',
          'PRESCHOOL',
          'SCHOOL',
          'GOVERNMENT_ORGANIZATION',
          'LOCAL_BUSINESS',
          'ANIMAL_SHELTER',
          'AUTOMOTIVE_BUSINESS',
          'AUTO_BODY_SHOP',
          'AUTO_DEALER',
          'AUTO_PARTS_STORE',
          'AUTO_RENTAL',
          'AUTO_REPAIR',
          'AUTO_WASH',
          'GAS_STATION',
          'MOTORCYCLE_DEALER',
          'MOTORCYCLE_REPAIR',
          'CHILD_CARE',
          'DRY_CLEANING_OR_LAUNDRY',
          'EMERGENCY_SERVICE',
          'FIRE_STATION',
          'HOSPITAL',
          'POLICE_STATION',
          'EMPLOYMENT_AGENGY',
          'ENTERTAINMENT_BUSINESS',
          'ADULT_ENTERTAINMENT',
          'AMUSEMENT_PARK',
          'ART_GALLERY',
          'CASINO',
          'COMEDY_CLUB',
          'MOVIE_THEATER',
          'NIGHT_CLUB',
          'FINANCIAL_SERVICE',
          'ACCOUNTING_SERVICE',
          'AUTOMATED_TELLER',
          'BANK_OR_CREDIT_UNION',
          'INSURANCE_AGENCY',
          'FOOD_ESTABLISHMENT',
          'BAKERY',
          'BAR_OR_PUB',
          'BREWERY',
          'CAFE_OR_COFFEE_SHOP',
          'FAST_FOOD_RESTAURANT',
          'ICE_CREAM_SHOP',
          'RESTAURANT',
          'WINERY',
          'GOVERNMENT_OFFICE',
          'POST_OFFICE',
          'HEALTH_AND_BEAUTY_BUSINESS',
          'BEAUTY_SALON',
          'DAY_SPA',
          'HAIR_SALON',
          'HEALTH_CLUB',
          'NAIL_SALON',
          'TATTOO_PARLOR',
          'HOME_AND_CONSTRUCTION_BUSINESS',
          'ELECTRICIAN',
          'GENERAL_CONTRACTOR',
          'HVAC_BUSINESS',
          'HOUSE_PAINTER',
          'LOCKSMITH',
          'MOVING_COMPANY',
          'PLUMBER',
          'ROOFING_CONTRACTOR',
          'INTERNET_CAFE',
          'LIBRARY',
          'LODGING_BUSINESS',
          'BED_AND_BREAKFAST',
          'HOSTEL',
          'HOTEL',
          'MOTEL',
          'MEDICAL_ORGANIZATION',
          'DENTIST',
          'MEDICAL_CLINIC',
          'OPTICIAN',
          'PHARMACY',
          'PHYSICIAN',
          'VETERINARY_CARE',
          'PROFESSIONAL_SERVICE',
          'ATTORNEY',
          'NOTARY',
          'RADIO_STATION',
          'REAL_ESTATE_AGENT',
          'RECYCLING_CENTER',
          'SELF_STORAGE',
          'SHOPPING_CENTER',
          'SPORTS_ACTIVITY_LOCATION',
          'BOWLING_ALLEY',
          'EXERCISE_GYM',
          'GOLF_COURSE',
          'PUBLIC_SWIMMING_POOL',
          'SKI_RESORT',
          'SPORTS_CLUB',
          'STADIUM_OR_ARENA',
          'TENNIS_COMPLEX',
          'STORE',
          'BIKE_STORE',
          'BOOK_STORE',
          'CLOTHING_STORE',
          'COMPUTER_STORE',
          'CONVENIENCE_STORE',
          'DEPARTMENT_STORE',
          'ELECTRONICS_STORE',
          'FLORIST',
          'FURNITURE_STORE',
          'GARDEN_STORE',
          'GROCERY_STORE',
          'HARDWARE_STORE',
          'HOBBY_SHOP',
          'HOME_GOODS_STORE',
          'JEWELRY_STORE',
          'LIQUOR_STORE',
          'MENS_CLOTHING_STORE',
          'MOBILE_PHONE_STORE',
          'MOVIE_RENTAL_STORE',
          'MUSIC_STORE',
          'OFFICE_EQUIPMENT_STORE',
          'OUTLET_STORE',
          'PAWN_SHOP',
          'PET_STORE',
          'SHOE_STORE',
          'SPORTING_GOODS_STORE',
          'TIRE_SHOP',
          'TOY_STORE',
          'WHOLESALE_STORE',
          'TELEVISION_STATION',
          'TOURIST_INFORMATION_CENTER',
          'TRAVEL_AGENCY',
          'PERFORMING_GROUP',
          'MUSIC_GROUP',
          'ADMINISTRATIVE_AREA',
          'CITY',
          'COUNTRY',
          'STATE',
          'CIVIC_STRUCTURE',
          'AIRPORT',
          'AQUARIUM',
          'BEACH',
          'BUS_STATION',
          'BUS_STOP',
          'CAMPGROUND',
          'CEMETERY',
          'CREMATORIUM',
          'EVENT_VENUE',
          'GOVERNMENT_BUILDING',
          'CITY_HALL',
          'COURTHOUSE',
          'DEFENCE_ESTABLISHMENT',
          'EMBASSY',
          'LEGISLATIVE_BUILDING',
          'MUSEUM',
          'MUSIC_VENUE',
          'PARK',
          'PARKING_FACILITY',
          'PERFORMING_ARTS_THEATER',
          'PLACE_OF_WORSHIP',
          'BUDDHIST_TEMPLE',
          'CATHOLIC_CHURCH',
          'CHURCH',
          'HINDU_TEMPLE',
          'MOSQUE',
          'SYNAGOGUE',
          'PLAYGROUND',
          'R_V_PARK',
          'RESIDENCE',
          'APARTMENT_COMPLEX',
          'GATED_RESIDENCE_COMMUNITY',
          'SINGLE_FAMILY_RESIDENCE',
          'TOURIST_ATTRACTION',
          'SUBWAY_STATION',
          'TAXI_STAND',
          'TRAIN_STATION',
          'ZOO',
          'LANDFORM',
          'BODY_OF_WATER',
          'CANAL',
          'LAKE_BODY_OF_WATER',
          'OCEAN_BODY_OF_WATER',
          'POND',
          'RESERVOIR',
          'RIVER_BODY_OF_WATER',
          'SEA_BODY_OF_WATER',
          'WATERFALL',
          'CONTINENT',
          'MOUNTAIN',
          'VOLCANO',
          'LANDMARKS_OR_HISTORICAL_BUILDINGS',
          'USER_INTERACTION',
          'USER_PLUS_ONES',
          'ENUMERATION',
          'BOOK_FORMAT_TYPE',
          'ITEM_AVAILABILITY',
          'OFFER_ITEM_CONDITION',
          'JOB_POSTING',
          'LANGUAGE',
          'OFFER',
          'QUANTITY',
          'DISTANCE',
          'DURATION',
          'ENERGY',
          'MASS',
          'RATING',
          'AGGREGATE_RATING',
          'STRUCTURED_VALUE',
          'CONTACT_POINT',
          'POSTAL_ADDRESS',
          'GEO_COORDINATES',
          'GEO_SHAPE',
          'NUTRITION_INFORMATION',
          'PRESENTATION_OBJECT',
          'DOCUMENT_OBJECT',
          'SPREADSHEET_OBJECT',
          'FORM_OBJECT',
          'DRAWING_OBJECT',
          'PLACE_REVIEW',
          'FILE_OBJECT',
          'PLAY_MUSIC_TRACK',
          'PLAY_MUSIC_ALBUM',
          'MAGAZINE',
          'CAROUSEL_FRAME',
          'PLUS_EVENT',
          'HANGOUT',
          'HANGOUT_BROADCAST',
          'HANGOUT_CONSUMER',
          'CHECKIN',
          'EXAMPLE_OBJECT',
          'SQUARE',
          'SQUARE_INVITE',
          'PLUS_PHOTO',
          'PLUS_PHOTO_ALBUM',
          'LOCAL_PLUS_PHOTO_ALBUM',
          'PRODUCT_REVIEW',
          'FINANCIAL_QUOTE',
          'DEPRECATED_TOUR_OBJECT',
          'PLUS_PAGE',
          'GOOGLE_CHART',
          'PLUS_PHOTOS_ADDED_TO_COLLECTION',
          'RECOMMENDED_PEOPLE',
          'PLUS_POST',
          'DATE',
          'DRIVE_OBJECT_COLLECTION',
          'NEWS_MEDIA_ORGANIZATION',
          'DYNAMITE_ATTACHMENT_METADATA',
          'DYNAMITE_MESSAGE_METADATA',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The first value in `type` determines which extension field will be set. When creating an EmbedClientItem, you only need to set the first (primary) type in this field. When the server receives the item, it will populate the full type list using the parent annotations in the ItemType enum.',
      }),
  })
  .openapi({
    description:
      'Represents an embedded object in an update. This is a wrapper class that can contain a single specific item proto in an extension field. Think of it as a base class like `Message` in Java. Each item proto must declare that it extends this proto: message ExampleObject { option (item_type) = EXAMPLE_OBJECT; extend EmbedClientItem { optional ExampleObject example_object = ; } } See go/es-embeds for details.',
    required: [],
  })
  .openapi('EmbedClientItem')

const SocialCommonAttachmentAttachmentSchema = z
  .object({
    embedItem: EmbedClientItemSchema.exactOptional().openapi({
      description: 'An embed represents an external entity. See go/es-embeds.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An id to uniquely identify an attachment when several attachments are in a collection.',
      }),
  })
  .openapi({
    description:
      'An Attachment represents a linked entity associated with a piece of social content. This may be a 1st-party or 3rd-party entity. In the Papyrus context, an Attachment is part of a Cent, and sits alongside the main content of the cent, which is represented as a sequence of Segments. Right now an Attachment is just a wrapper around an Embed, but we provide the extra layer of abstraction since, as Embeds move to separate storage in Briefcase, we may want to add additional fields that are not part of the Embed proper, but that (for example) relate to the usage of the linked content within the particular post/cent.',
    required: [],
  })
  .openapi('SocialCommonAttachmentAttachment')

const FormattingSchema = z
  .object({
    bold: z.boolean().exactOptional(),
    highlight: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This indicates that the segment should be rendered as highlighted or visually emphasized.',
      }),
    italics: z.boolean().exactOptional(),
    strikethrough: z.boolean().exactOptional(),
    style: z
      .enum(['UNKNOWN_STYLE', 'HEADING_1', 'HEADING_2', 'HEADING_3', 'HEADING_4'])
      .exactOptional()
      .openapi({
        description:
          'If set, this indicates that the segment should be rendered with the specified style. The absence of an explicit style represents "no style", i.e. the segment can be rendered with the default style chosen by the application.',
      }),
    underline: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Formatting information for a segment.', required: [] })
  .openapi('Formatting')

const HashtagDataSchema = z
  .object({ searchText: z.string().exactOptional() })
  .openapi({
    description:
      'Hashtag metadata, for HASHTAG segments. For a hashtag, the "text" field should contain the display text, and the search_text field should represent the topic being referenced, without the hash symbol; for example, we might have: text = "#Google" hashtag_data.search_text = "Google" Another example: text = "#pikachu" hashtag_data.search_text = "Pokemon" Both strings should be considered part of the searchable text. In go/sbe, both are indexed and searchable.',
    required: [],
  })
  .openapi('HashtagData')

const LinkDataSchema = z
  .object({
    attachment: SocialCommonAttachmentAttachmentSchema.exactOptional().openapi({
      description:
        'An Attachment represents the structured entity to which we are linking. It contains an Embed (apps/tacotown/proto/embeds/embed_client.proto) with fields specific to the appropriate type of linked entity. For example, if we are linking to a photo album, the Embed may include the album ID and gaia ID of the creator. Clients that understand the Embed type within the Attachment may construct and/or decorate their link appropriately e.g. to make use of type-specific functionality or first-party integrations. The link_target and (if appropriate) display_url fields must still be set even when an Attachment is present, so that clients who do not know how to interpret the Attachment can fall back to those fields, and render the Segment as an ordinary web link. N.B. Even when an Attachment is present, the intention of a "LINK" Segment is for the Segment to be presented inline with the rest of the text of a post or comment, with a clickable link or other UI suitable for inlining (though the client may modify the UI based on Attachment data, e.g. to add appropriate hovers, icons, etc.). When an entity is intended to be rendered separately from the main body of the post/comment, a separate Attachment proto can be added outside the set of Segments. N.B. Within the Attachment, fields of EmbedClientItem have their own visibility annotations, which should be enforced separately from Segment visibility annotations. See: apps/tacotown/proto/embeds/embed_annotations.proto',
    }),
    attachmentRenderHint: z
      .enum([
        'ATTACHMENT_RENDER_HINT_UNKNOWN',
        'ATTACHMENT_RENDER_HINT_AFTER',
        'ATTACHMENT_RENDER_HINT_INTERLEAVED',
      ])
      .exactOptional()
      .openapi({
        description:
          'The hint to use when rendering the associated attachment. Ignored if there is no associated attachment.',
      }),
    displayUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If we wish to show the user a different (e.g. shortened) version of the URL for display purposes, then that version should be set here. If this field isn't set, link_target will be used for both purposes.",
      }),
    linkTarget: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'link_target is the URL to navigate to when clicked. This could be the original URL, or a URL signed by the GWS URL signing service.',
      }),
    linkType: z
      .enum(['UNKNOWN_LINK_TYPE', 'SELF_LINK'])
      .exactOptional()
      .openapi({
        description:
          'LinkType is an optional field that provides additional information regarding link target. For example, link type can be identified as the SELF_LINK when the request was executed from the same link as the link target.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Title is an optional field that provides a short string that describes the link or its destination. User interfaces often use title as a tooltip or for accessibility purposes. However, they are of course free to present this data in any form. This field is plain text.',
      }),
  })
  .openapi({
    description:
      'Link metadata, for LINK segments. Anchor text should be stored in the "text" field of the Segment, which can also serve as a fallback.',
    required: [],
  })
  .openapi('LinkData')

const PrincipalProtoSchema: z.ZodType<PrincipalProtoType> = z
  .lazy(() =>
    z
      .object({
        allAuthenticatedUsers: AllAuthenticatedUsersProtoSchema.exactOptional().openapi({
          description: 'scope = ALL_AUTHENTICATED_USERS',
        }),
        capTokenHolder: CapTokenHolderProtoSchema.exactOptional().openapi({
          description: 'scope = CAP_TOKEN_HOLDER',
        }),
        chat: ChatProtoSchema.exactOptional().openapi({ description: 'scope = CHAT' }),
        circle: CircleProtoSchema.exactOptional().openapi({ description: 'scope = CIRCLE' }),
        cloudPrincipal: CloudPrincipalProtoSchema.exactOptional().openapi({
          description: 'scope = CLOUD_PRINCIPAL',
        }),
        contactGroup: ContactGroupProtoSchema.exactOptional().openapi({
          description: 'scope = CONTACT_GROUP',
        }),
        emailOwner: EmailOwnerProtoSchema.exactOptional().openapi({
          description: 'scope = EMAIL_OWNER',
        }),
        event: EventProtoSchema.exactOptional().openapi({ description: 'scope = EVENT' }),
        gaiaGroup: GaiaGroupProtoSchema.exactOptional().openapi({
          description: 'scope = GAIA_GROUP',
        }),
        gaiaUser: GaiaUserProtoSchema.exactOptional().openapi({ description: 'scope = GAIA_USER' }),
        host: HostProtoSchema.exactOptional().openapi({ description: 'scope = HOST' }),
        ldapGroup: LdapGroupProtoSchema.exactOptional().openapi({
          description: 'scope = LDAP_GROUP',
        }),
        ldapUser: LdapUserProtoSchema.exactOptional().openapi({ description: 'scope = LDAP_USER' }),
        mdbGroup: MdbGroupProtoSchema.exactOptional().openapi({ description: 'scope = MDB_GROUP' }),
        mdbUser: MdbUserProtoSchema.exactOptional().openapi({ description: 'scope = MDB_USER' }),
        oauthConsumer: OAuthConsumerProtoSchema.exactOptional().openapi({
          description: 'scope = OAUTH_CONSUMER;',
        }),
        postiniUser: PostiniUserProtoSchema.exactOptional().openapi({
          description: 'scope = POSTINI_USER',
        }),
        rbacRole: RbacRoleProtoSchema.exactOptional().openapi({ description: 'scope = RBAC_ROLE' }),
        rbacSubject: RbacSubjectProtoSchema.exactOptional().openapi({
          description: 'scope = RBAC_SUBJECT',
        }),
        resourceRole: ResourceRoleProtoSchema.exactOptional().openapi({
          description: 'scope = RESOURCE_ROLE',
        }),
        scope: z
          .enum([
            'INVALID',
            'GAIA_USER',
            'GAIA_GROUP',
            'LDAP_USER',
            'LDAP_GROUP',
            'MDB_USER',
            'MDB_GROUP',
            'POSTINI_USER',
            'CONTACT_GROUP',
            'SIMPLE_SECRET_HOLDER',
            'SIGNING_KEY_POSSESSOR',
            'ALL_AUTHENTICATED_USERS',
            'OAUTH_CONSUMER',
            'HOST',
            'SOCIAL_GRAPH_NODE',
            'EMAIL_OWNER',
            'CAP_TOKEN_HOLDER',
            'CIRCLE',
            'SQUARE',
            'EVENT',
            'RESOURCE_ROLE',
            'CHAT',
            'YOUTUBE_USER',
            'UNUSED_ZWIEBACK_SESSION',
            'ZWIEBACK_SESSION',
            'RBAC_ROLE',
            'RBAC_SUBJECT',
            'CLOUD_PRINCIPAL',
          ])
          .exactOptional()
          .openapi({
            description:
              'This is only optional because required enums cannot be extended. Currently required.',
          }),
        signingKeyPossessor: SigningKeyPossessorProtoSchema.exactOptional().openapi({
          description: 'scope = SIGNING_KEY_POSSESSOR',
        }),
        simpleSecretHolder: SimpleSecretHolderProtoSchema.exactOptional().openapi({
          description: 'scope = SIMPLE_SECRET_HOLDER',
        }),
        socialGraphNode: SocialGraphNodeProtoSchema.exactOptional().openapi({
          description: 'scope = SOCIAL_GRAPH_NODE',
        }),
        square: SquareProtoSchema.exactOptional().openapi({ description: 'scope = SQUARE' }),
        youtubeUser: YoutubeUserProtoSchema.exactOptional().openapi({
          description: 'scope = YOUTUBE_USER',
        }),
        zwiebackSession: ZwiebackSessionProtoSchema.exactOptional().openapi({
          description: 'scope = ZWIEBACK_SESSION',
        }),
      })
      .openapi({
        description:
          'A Principal represents something to which permissions are assigned, often but not always a user or group of some kind. It is most appropriate for use in ACLs and authorization checks. Callers should prefer to use the wrapper classes in google3/security/credentials/public/principal.h google3/java/com/google/security/credentials/Principal.java google3/security/credentials/go/principal.go unless direct proto access is essential. If you update this protocol buffer, please update the wrapper classes as well. LINT.IfChange',
        required: [],
      }),
  )
  .openapi('PrincipalProto')

const UserMentionDataSchema = z
  .object({
    email: z.string().exactOptional(),
    user: PrincipalProtoSchema.exactOptional().openapi({
      description:
        'If the principal is backed by a gaia id, DO NOT use this field. Use user_gaia_id/user_id fields instead.',
    }),
    userGaiaId: z.string().exactOptional().openapi({ description: 'An unobfuscated gaia ID:' }),
    userId: z.string().exactOptional().openapi({ description: 'An obfuscated gaia ID:' }),
  })
  .openapi({
    description:
      'Person metadata, for USER_MENTION segments. Should always contain at least one of user_gaia_id, user_id, email or user. The exact set of populated fields may differ depending on the context and the level in the serving stack; for example, emails will be elided on the viewing path. But as a general rule, a proto having any one of the four is valid, subject to the standard constraints of the applied annotations -- that is, communication between servers and clients will ignore jspb.ignore fields, and communication between servers and other servers (or between servers and storage) will ignore client_only fields. For more on the annotations, see the comments in social/common/segment_annotations.proto',
    required: [],
  })
  .openapi('UserMentionData')

const SegmentSchema = z
  .object({
    formatting: FormattingSchema.exactOptional().openapi({
      description:
        'Formatting to be applied when rendering the Segment. For all segment types, this is the standard way of representing that the Segment should be rendered in bold, italics, etc.',
    }),
    hashtagData: HashtagDataSchema.exactOptional().openapi({ description: 'For HASHTAG type:' }),
    linkData: LinkDataSchema.exactOptional().openapi({
      description:
        'Type-specific metadata. At most one of these should be populated, and the one that is populated should correspond to the type of the Segment. For LINK type:',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text content of the Segment. As a general rule, this field should contain the actual text that should be rendered in the UI. Thus, for a hashtag, it should be "#Foo", and for a link, it should be the display text. Clients that do not understand a particular segment type may use this text, along with the Formatting info below, as a fallback for display. The field is not required -- if all relevant information is carried in other metadata fields and there is no need for a fallback, or it is not practical for a fallback to be provided for any other reason, the field may be left blank. A standard example would be a user reference being transmitted between server layers, where a gaia-ID representation may be sufficient and there is no need for a textual fallback. In such a case, it would be valid and useful - though not required - for servers to compute and populate a fallback on the serving path.',
      }),
    type: z
      .enum(['TEXT', 'LINE_BREAK', 'LINK', 'USER_MENTION', 'ALL_USER_MENTION', 'HASHTAG'])
      .exactOptional()
      .openapi({ description: 'Type of Segment.' }),
    userMentionData: UserMentionDataSchema.exactOptional().openapi({
      description: 'For USER_MENTION type:',
    }),
  })
  .openapi({ required: [] })
  .openapi('Segment')

const ChatConserverMessageContentSchema = z
  .object({
    attachment: z
      .array(SocialCommonAttachmentAttachmentSchema)
      .exactOptional()
      .openapi({
        description:
          'Items attached to this message, such as photos. This should *NOT* be set by clients. It will be automatically set from media uploaded along with this request and using the information provided in existing_media.',
      }),
    segment: z
      .array(SegmentSchema)
      .exactOptional()
      .openapi({
        description:
          'The text part of the message content. Segments are concatenated together to yield the full message. A message can have zero or more segments.',
      }),
  })
  .openapi({
    description:
      'The content of a chat message, which includes 0 or more segments along with 0 or more embeds, which represent various attachment types (like photos).',
    required: [],
  })
  .openapi('ChatConserverMessageContent')

const BabelMessagePropsSchema = z
  .object({
    clientGeneratedId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Babel clients locally generate this ID to dedupe against the async fanout.',
      }),
    contentExtension: ChatContentExtensionSchema.exactOptional().openapi({
      description: 'Stores additional Babel-specific properties (such as event metadata).',
    }),
    deliveryMedium: DeliveryMediumSchema.exactOptional().openapi({
      description: 'Stores the delivery source of messages (such as phone number for SMS).',
    }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Primary identifier used by Hangouts Classic for its events (messages).',
      }),
    messageContent: ChatConserverMessageContentSchema.exactOptional().openapi({
      description: 'Stores message segments (text content) and attachments (media URLs).',
    }),
    wasUpdatedByBackfill: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not these message properties were backfilled by go/dinnertrain.',
      }),
  })
  .openapi({
    description:
      'Container for Babel (Hangouts Classic) only message properties. The properties here will not be consumed by Dynamite clients. They are relevant only for Hangouts Classic.',
    required: [],
  })
  .openapi('BabelMessageProps')

type MessagePropsType = { babelProps?: z.infer<typeof BabelMessagePropsSchema> }

const NamedPropertySchema: z.ZodType<NamedPropertyType> = z
  .lazy(() =>
    z
      .object({
        booleanValue: z.boolean().exactOptional(),
        dateValues: DateValuesSchema.exactOptional(),
        doubleValues: DoubleValuesSchema.exactOptional(),
        enumValues: EnumValuesSchema.exactOptional(),
        htmlValues: HtmlValuesSchema.exactOptional(),
        integerValues: IntegerValuesSchema.exactOptional(),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The name of the property. This name should correspond to the name of the property that was registered for object definition in the schema. The maximum allowable length for this property is 256 characters.',
          }),
        objectValues: ObjectValuesSchema.exactOptional(),
        textValues: TextValuesSchema.exactOptional(),
        timestampValues: TimestampValuesSchema.exactOptional(),
      })
      .openapi({
        description:
          'A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.',
        required: [],
      }),
  )
  .openapi('NamedProperty')

const ResultDisplayFieldSchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display label for the property.' }),
    operatorName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The operator name of the property.' }),
    property: NamedPropertySchema.exactOptional().openapi({
      description: 'The name value pair for the property.',
    }),
  })
  .openapi({ description: 'Display Fields for Search Results', required: [] })
  .openapi('ResultDisplayField')

const ResultDisplayLineSchema = z
  .object({ fields: z.array(ResultDisplayFieldSchema).exactOptional() })
  .openapi({ description: 'The collection of fields that make up a displayed line', required: [] })
  .openapi('ResultDisplayLine')

const ResultDisplayMetadataSchema = z
  .object({
    metalines: z
      .array(ResultDisplayLineSchema)
      .exactOptional()
      .openapi({ description: 'The metalines content to be displayed with the result.' }),
    objectTypeLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display label for the object.' }),
  })
  .openapi({ required: [] })
  .openapi('ResultDisplayMetadata')

const EmailAddressSchema = z
  .object({
    customType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the value of type is custom, this property contains the custom type string.',
      }),
    emailAddress: z.string().exactOptional().openapi({ description: 'The email address.' }),
    emailUrl: z.string().exactOptional().openapi({ description: 'The URL to send email.' }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates if this is the user's primary email. Only one entry can be marked as primary.",
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the email account. Acceptable values are: "custom", "home", "other", "work".',
      }),
  })
  .openapi({ description: "A person's email address.", required: [] })
  .openapi('EmailAddress')

const NameSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The read-only display name formatted according to the locale specified by the viewer's account or the `Accept-Language` HTTP header.",
      }),
  })
  .openapi({ description: "A person's name.", required: [] })
  .openapi('Name')

const PhoneNumberSchema = z
  .object({
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number of the person.' }),
    type: z.enum(['OTHER', 'MOBILE', 'OFFICE']).exactOptional(),
  })
  .openapi({ description: "A person's Phone Number", required: [] })
  .openapi('PhoneNumber')

const PhotoSchema = z
  .object({ url: z.string().exactOptional().openapi({ description: 'The URL of the photo.' }) })
  .openapi({ description: "A person's photo.", required: [] })
  .openapi('Photo')

const PersonSchema = z
  .object({
    emailAddresses: z
      .array(EmailAddressSchema)
      .exactOptional()
      .openapi({ description: "The person's email addresses" }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the person to provide information about. See [`People.get`](https://developers.google.com/people/api/rest/v1/people/get) from the Google People API.',
      }),
    obfuscatedId: z.string().exactOptional().openapi({ description: 'Obfuscated ID of a person.' }),
    personNames: z.array(NameSchema).exactOptional().openapi({ description: "The person's name" }),
    phoneNumbers: z
      .array(PhoneNumberSchema)
      .exactOptional()
      .openapi({ description: "The person's phone numbers" }),
    photos: z
      .array(PhotoSchema)
      .exactOptional()
      .openapi({
        description:
          "A person's read-only photo. A picture shown next to the person's name to help others recognize the person in search results.",
      }),
  })
  .openapi({ description: 'Object to represent a person.', required: [] })
  .openapi('Person')

const SourceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Source name for content indexed by the Indexing API.' }),
    predefinedSource: z
      .enum([
        'NONE',
        'QUERY_HISTORY',
        'PERSON',
        'GOOGLE_DRIVE',
        'GOOGLE_GMAIL',
        'GOOGLE_SITES',
        'GOOGLE_GROUPS',
        'GOOGLE_CALENDAR',
        'GOOGLE_KEEP',
      ])
      .exactOptional()
      .openapi({ description: 'Predefined content source for Google Apps.' }),
  })
  .openapi({ description: 'Defines sources for the suggest/search APIs.', required: [] })
  .openapi('Source')

type MetadataType = {
  createTime?: string
  displayOptions?: z.infer<typeof ResultDisplayMetadataSchema>
  fields?: z.infer<typeof NamedPropertySchema>[]
  mimeType?: string
  objectType?: string
  owner?: z.infer<typeof PersonSchema>
  source?: z.infer<typeof SourceSchema>
  thumbnailUrl?: string
  updateTime?: string
}

const DateValuesSchema: z.ZodType<DateValuesType> = z
  .object({ values: z.array(DateSchema).exactOptional() })
  .openapi({ description: 'List of date values.', required: [] })
  .openapi('DateValues')

const DoubleValuesSchema: z.ZodType<DoubleValuesType> = z
  .object({ values: z.array(z.float64()).exactOptional() })
  .openapi({ description: 'List of double values.', required: [] })
  .openapi('DoubleValues')

const EnumValuesSchema: z.ZodType<EnumValuesType> = z
  .object({
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The maximum allowable length for string values is 32 characters.' }),
  })
  .openapi({ description: 'List of enum values.', required: [] })
  .openapi('EnumValues')

const HtmlValuesSchema: z.ZodType<HtmlValuesType> = z
  .object({
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The maximum allowable length for html values is 2048 characters.' }),
  })
  .openapi({ description: 'List of html values.', required: [] })
  .openapi('HtmlValues')

const IntegerValuesSchema: z.ZodType<IntegerValuesType> = z
  .object({ values: z.array(z.string()).exactOptional() })
  .openapi({ description: 'List of integer values.', required: [] })
  .openapi('IntegerValues')

const ObjectValuesSchema: z.ZodType<ObjectValuesType> = z
  .lazy(() =>
    z
      .object({ values: z.array(StructuredDataObjectSchema).exactOptional() })
      .openapi({ description: 'List of object values.', required: [] }),
  )
  .openapi('ObjectValues')

type TextValuesType = { values?: string[] }

const TextValuesSchema: z.ZodType<TextValuesType> = z
  .object({
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The maximum allowable length for text values is 2048 characters.' }),
  })
  .openapi({ description: 'List of text values.', required: [] })
  .openapi('TextValues')

type TimestampValuesType = { values?: string[] }

const TimestampValuesSchema: z.ZodType<TimestampValuesType> = z
  .object({ values: z.array(z.string()).exactOptional() })
  .openapi({ description: 'List of timestamp values.', required: [] })
  .openapi('TimestampValues')

type NamedPropertyType = {
  booleanValue?: boolean
  dateValues?: z.infer<typeof DateValuesSchema>
  doubleValues?: z.infer<typeof DoubleValuesSchema>
  enumValues?: z.infer<typeof EnumValuesSchema>
  htmlValues?: z.infer<typeof HtmlValuesSchema>
  integerValues?: z.infer<typeof IntegerValuesSchema>
  name?: string
  objectValues?: z.infer<typeof ObjectValuesSchema>
  textValues?: z.infer<typeof TextValuesSchema>
  timestampValues?: z.infer<typeof TimestampValuesSchema>
}

const PropertyDefinitionSchema: z.ZodType<PropertyDefinitionType> = z
  .lazy(() =>
    z
      .object({
        booleanPropertyOptions: BooleanPropertyOptionsSchema.exactOptional(),
        datePropertyOptions: DatePropertyOptionsSchema.exactOptional(),
        displayOptions: PropertyDisplayOptionsSchema.exactOptional().openapi({
          description:
            "The options that determine how the property is displayed in the Cloud Search results page if it's specified to be displayed in the object's display options.",
        }),
        doublePropertyOptions: DoublePropertyOptionsSchema.exactOptional(),
        enumPropertyOptions: EnumPropertyOptionsSchema.exactOptional(),
        htmlPropertyOptions: HtmlPropertyOptionsSchema.exactOptional(),
        integerPropertyOptions: IntegerPropertyOptionsSchema.exactOptional(),
        isFacetable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Indicates that the property can be used for generating facets. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, enum, integer, and text properties.',
          }),
        isRepeatable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Indicates that multiple values are allowed for the property. For example, a document only has one description but can have multiple comments. Cannot be true for properties whose type is a boolean. If set to false, properties that contain more than one value cause the indexing request for that item to be rejected.',
          }),
        isReturnable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Indicates that the property identifies data that should be returned in search results via the Query API. If set to *true*, indicates that Query API users can use matching property fields in results. However, storing fields requires more space allocation and uses more bandwidth for search queries, which impacts performance over large datasets. Set to *true* here only if the field is needed for search results. Cannot be true for properties whose type is an object.',
          }),
        isSortable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Indicates that the property can be used for sorting. Cannot be true for properties that are repeatable. Cannot be true for properties whose type is object. IsReturnable must be true to set this option. Only supported for boolean, date, double, integer, and timestamp properties.',
          }),
        isSuggestable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Indicates that the property can be used for generating query suggestions.',
          }),
        isWildcardSearchable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Indicates that users can perform wildcard search for this property. Only supported for Text properties. IsReturnable must be true to set this option. In a given datasource maximum of 5 properties can be marked as is_wildcard_searchable. For more details, see [Define object properties](https://developers.google.com/cloud-search/docs/guides/schema-guide#properties)',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The name of the property. Item indexing requests sent to the Indexing API should set the property name equal to this value. For example, if name is *subject_line*, then indexing requests for document items with subject fields should set the name for that field equal to *subject_line*. Use the name as the identifier for the object property. Once registered as a property for an object, you cannot re-use this name for another property within that object. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters.',
          }),
        objectPropertyOptions: ObjectPropertyOptionsSchema.exactOptional(),
        textPropertyOptions: TextPropertyOptionsSchema.exactOptional(),
        timestampPropertyOptions: TimestampPropertyOptionsSchema.exactOptional(),
      })
      .openapi({ description: 'The definition of a property within an object.', required: [] }),
  )
  .openapi('PropertyDefinition')

type ObjectPropertyOptionsType = {
  subobjectProperties?: z.infer<typeof PropertyDefinitionSchema>[]
}

const StructuredDataObjectSchema: z.ZodType<StructuredDataObjectType> = z
  .lazy(() =>
    z
      .object({
        properties: z
          .array(NamedPropertySchema)
          .exactOptional()
          .openapi({
            description: 'The properties for the object. The maximum number of elements is 1000.',
          }),
      })
      .openapi({
        description: 'A structured data object consisting of named properties.',
        required: [],
      }),
  )
  .openapi('StructuredDataObject')

type ObjectValuesType = { values?: z.infer<typeof StructuredDataObjectSchema>[] }

const GSuitePrincipalSchema = z
  .object({
    gsuiteDomain: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This principal represents all users of the Google Workspace domain of the customer.',
      }),
    gsuiteGroupEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'This principal references a Google Workspace group name.' }),
    gsuiteUserEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'This principal references a Google Workspace user account.' }),
  })
  .openapi({ required: [] })
  .openapi('GSuitePrincipal')

type PrincipalType = {
  groupResourceName?: string
  gsuitePrincipal?: z.infer<typeof GSuitePrincipalSchema>
  userResourceName?: string
}

const AllAuthenticatedUsersProtoSchema = z
  .object({})
  .openapi({
    description:
      'Represents a principal who has authenticated as any kind of user which the application understands. This is typically used for "wiki-like" security, where anyone is allowed access so long as they can be held accountable for that access. Since the purpose is knowing whom to blame, it is up to the application to decide what kinds of users it knows how to blame. For example, an application might choose to include GAIA users in "all authenticated users", but not include MDB users. Nothing here.',
  })
  .openapi('AllAuthenticatedUsersProto')

const CapTokenHolderProtoSchema = z
  .object({
    tokenHmacSha1Prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The hash of the corresponding capability token. The value is defined to be identical to the one in acl.proto's CapTokenMetadata: 10-byte prefix of HMAC-SHA1 of the token. The HMAC key is the following fixed (non-secret) 512-bit value: 79b1c8f4 82baf523 b8a9ab4a e960f438 c45be041 11f1f222 e8a3f64d aeb05e3d c3576acc ec649194 aede422c 4e48e0d1 ff21234a a6ed6b49 a7fa592e efd7bba3",
      }),
  })
  .openapi({
    description:
      'Represents a principal which possesses a particular secret string whose cryptographic hash is specified here. CapTokens ("Capability Tokens") are used in ACLProto. It\'s expected that ACLs with CapTokenHolders will strongly enforce them by Keystore-wrapping crypto keys for the corresponding CapTokens.',
    required: [],
  })
  .openapi('CapTokenHolderProto')

const ChatProtoSchema = z
  .object({
    chatId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Chat IDs consist of alphanumeric characters and colons. Currently required.',
      }),
    memberType: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The type of Chat members to consider, e.g. "all members" vs. "invitee" These are defined by legacy_relation_id values in social.graph.storage.EdgeTypeEnum.EdgeType enum options in social/graph/storage/proto/id.proto. See chat.pb (defined in production/config/cdd/socialgraph/mixer_config/prod/node_type_config) for all valid edge types associated with chat. Currently required.',
      }),
  })
  .openapi({
    description:
      'Represents the invitees or other users associated with a Babel Chat (see http://goto/babel). Corresponds to GroupType CHAT in //social/graph/storage/proto/data.proto.',
    required: [],
  })
  .openapi('ChatProto')

const CircleProtoSchema = z
  .object({
    circleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Circle ID is unique only relative to the owner's Gaia ID. Currently required.",
      }),
    ownerGaiaId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The owner of the circle. Currently required.' }),
    requiredConsistencyTimestampUsec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If present, then tests for membership in this circle must use data known to be at least as fresh as the given (FBS-assigned) timestamp. See http://go/fbs-consistent-read-after-important-write Before using this, be sure that any service checking authorization against this circle supports checking consistency timestamps. For example, as of 12/2011, Keystore only supports this for the Moonshine configuration, and in others authorization checks will fail if the timestamp is present.',
      }),
  })
  .openapi({
    description:
      'Represents a Google+ Circle. Currently (12/2011), a Circle is identical to the ContactGroup with matching parameters, but Circle must only be used for true Circles and not other Focus groups, and should be preferred over ContactGroup where applicable. Soon it may become more efficient to check membership in a Circle than in a ContactGroup (see http://go/superglue). Support for this principal type is currently (12/2011) incomplete -- e.g., Keystore does not support it yet (see b/5703421).',
    required: [],
  })
  .openapi('CircleProto')

const CloudPrincipalProtoSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Format: "{identity-pool}:{subject}#" Details: go/cloud-principal-identifiers',
      }),
  })
  .openapi({
    description: 'Principal associated with a Cloud Principal representing third party user.',
    required: [],
  })
  .openapi('CloudPrincipalProto')

const ContactGroupProtoSchema = z
  .object({
    groupId: z
      .string()
      .exactOptional()
      .openapi({ description: "Group ID is unique only relative to the owner's Gaia ID." }),
    ownerGaiaId: z.string().exactOptional(),
    requiredConsistencyTimestampUsec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If present, then tests for membership in this ContactGroup must use data known to be at least as fresh as the given (FBS-assigned) timestamp. See http://go/fbs-consistent-read-after-important-write Before using this, be sure that any service checking authorization against this group supports checking consistency timestamps. For example, as of 12/2011, Keystore only supports this for the Moonshine configuration, and in others authorization checks will fail if the timestamp is present.',
      }),
  })
  .openapi({
    description:
      'A group of contacts for a given user, as described in http://cs/p#google3/focus/backend/proto/backend.proto Historically (and in still-existing ACLs), this was used to represent Google+ circles as well as contact groups, but this use is now deprecated. New code should use the CIRCLE principal type to represent Google+ circles.',
    required: [],
  })
  .openapi('ContactGroupProto')

const EmailOwnerProtoSchema = z
  .object({ email: z.string().exactOptional() })
  .openapi({
    description:
      'Represents a verified owner of the given email address. Note that a single address may have many owners, and a single user may own many addresses. (All lower-case, in display form -- see com.google.gaia.client.GaiaEmail)',
    required: [],
  })
  .openapi('EmailOwnerProto')

const EventProtoSchema = z
  .object({
    eventId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Event IDs consist of alphanumeric characters and colons. Currently required.',
      }),
    memberType: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The type of Event members to consider, e.g. "all members" vs. "owners" vs. "admins". These are defined by legacy_relation_id values in social.graph.storage.EdgeTypeEnum.EdgeType enum options in social/graph/storage/proto/id.proto. See event.pb (defined in production/config/cdd/socialgraph/mixer_config/prod/node_type_config) for all valid edge types associated with event. Currently required.',
      }),
  })
  .openapi({
    description:
      'Represents the invitees or other users associated with a Google+ Event (see http://goto/events-backend-design).',
    required: [],
  })
  .openapi('EventProto')

const GaiaGroupProtoSchema = z
  .object({ groupId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('GaiaGroupProto')

const GaiaUserProtoSchema = z
  .object({ userId: z.string().exactOptional() })
  .openapi({
    description:
      'A Gaia account, which may represent a user, device, service account, etc. For prod (@prod.google.com) accounts, use MdbUserProto instead.',
    required: [],
  })
  .openapi('GaiaUserProto')

const HostProtoSchema = z
  .object({
    hostName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lower-case, fully qualified hostname.' }),
    hostOwner: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If present, then any checks that compare this Principal to LOAS peer info must confirm the peer's machine owner is equal to 'host_owner'. If absent, then any peer machine owner is acceptable.",
      }),
  })
  .openapi({
    description:
      'Represents a single host. Optionally, the MDB owner of the host can be specified.',
    required: [],
  })
  .openapi('HostProto')

const LdapGroupProtoSchema = z
  .object({ groupName: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('LdapGroupProto')

const LdapUserProtoSchema = z
  .object({ userName: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('LdapUserProto')

const MdbGroupProtoSchema = z
  .object({ groupName: z.string().exactOptional() })
  .openapi({
    description:
      'An entity from the MDB namespace that is to be interpreted as a group. If using this for authorization, you should do an exact match of the peer role against group_name or any of the names in the Chubby expansion of the MDB group named group_name.',
    required: [],
  })
  .openapi('MdbGroupProto')

const MdbUserProtoSchema = z
  .object({
    gaiaId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Do not set this field. Contact credentials-eng@ if you believe you absolutely need to use it. This is the @prod.google.com Gaia ID that corresponds to the MDB user, see go/authn-merge for details. This field may always be safely ignored when performing an authorization check.',
      }),
    userName: z.string().exactOptional(),
  })
  .openapi({
    description:
      'An entity from the MDB namespace that is to be interpreted as a user. If using this for authorization, you should only do an exact match on the peer role against user_name.',
    required: [],
  })
  .openapi('MdbUserProto')

const OAuthConsumerProtoSchema = z
  .object({ domain: z.string().exactOptional() })
  .openapi({
    description:
      "Represents an OAuth consumer, a/k/a AuthSub target. These principals are identified by domain name (e.g., example.com). Historically, Dasher domain GAIA group IDs have been used instead, but that doesn't work: http://go/tricky-gaia-ids",
    required: [],
  })
  .openapi('OAuthConsumerProto')

const PostiniUserProtoSchema = z
  .object({ postiniUserId: z.string().exactOptional() })
  .openapi({
    description:
      'See http://s/?fileprint=//depot/google3/security/authentication/postini/auth_token.proto',
    required: [],
  })
  .openapi('PostiniUserProto')

const RbacRoleProtoSchema = z
  .object({
    name: z.string().exactOptional(),
    objectId: z.string().exactOptional(),
    rbacNamespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'DEPRECATED as of 01.11.2019' }),
    rbacRoleName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Format: "role/z?" - "role" is the Sphinx globally unique name of the Sphinx role that provisions the RBAC role. - "/z?" suffix indicates which Zanzibar environment stores the role membership data ("/zd": dev, "/zs": staging, "/zp": prod, "/zt": local test instance). Example: "mysystem_myrole/zp"',
      }),
  })
  .openapi({
    description:
      'Principal associated with a given RBAC role. This principal is used by Sphinx Provisioning Service for RBAC provisionable (go/sphinx-rbacz).',
    required: [],
  })
  .openapi('RbacRoleProto')

const RbacSubjectProtoSchema = z
  .object({
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Format "username" without "@domain", e.g., "bogdand".' }),
  })
  .openapi({
    description:
      'Principal associated with a given RBAC subject. This principal is used by Sphinx Provisioning Service for RBAC provisionable (go/sphinx-rbacz).',
    required: [],
  })
  .openapi('RbacSubjectProto')

const ResourceRoleProtoSchema = z
  .object({
    applicationId: z.string().exactOptional(),
    objectId: z.string().exactOptional(),
    objectPart: z.string().exactOptional(),
    roleId: z.int32().exactOptional(),
  })
  .openapi({
    description:
      "A type of sharing target that points to some resource's ACL. Used to refer to the set of Principals that have the given privilege ('role_id') for the given resource ('application_id', 'object_id', 'object_part'). The meaning of 'role_id' is interpreted only by implementations of AclRpcService and is usually dependent on 'application_id' All fields except object_part are required. If present, object_part must be non-empty.",
    required: [],
  })
  .openapi('ResourceRoleProto')

const SigningKeyPossessorProtoSchema = z
  .object({
    keymasterKeyType: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'This value must be from the KeyMetadata.Type enum in keymaster.proto.',
      }),
    serializedVerificationKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The actual verification key bytes corresponding to the above type.',
      }),
    serializedVerificationKeyset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The binary serialized Keymaster SerializedReader of a public keyset. The keyset must contain exactly one key. N.B.: If this field is populated, serialized_verification_key should be set to the empty string and keymaster_key_type should be set to zero.',
      }),
  })
  .openapi({
    description:
      'Represents a principal who possesses a signing key corresponding to the verification key or keyset described here.',
    required: [],
  })
  .openapi('SigningKeyPossessorProto')

const SimpleSecretLabelProtoSchema = z
  .object({
    capabilityId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "***DEPRECATED (3-Oct-2011) *** This field should be deleted when code stops using CAP_TOKEN labels. Used when type = CAP_TOKEN. When a CAP_TOKEN label appears in a SimpleSecretHolder Principal, |capability_id| must be filled in to identify one of the capabilities on the ACL. When a CAP_TOKEN label appears in a SimpleSecret Authenticator, it is NOT necessary to fill in |capability_id| -- ACL Service will find the ID by searching all capabilities on the ACL for one associated with the token given by the SimpleSecret's secret data. If |capability_id| is specified, though, then the Authenticator will only be accepted if it actually matches that particular token ID.",
      }),
    genericLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Used when type = GENERIC_SECRET' }),
    inviteId: z.string().exactOptional().openapi({ description: 'Used when type == INVITE.' }),
    type: z
      .enum(['INVALID', 'AUTH_KEY', 'INVITE', 'GENERIC_SECRET', 'CAP_TOKEN', 'REKE'])
      .exactOptional()
      .openapi({ description: 'This is optional because required enums cannot be extended.' }),
  })
  .openapi({
    description:
      'SimpleSecretProto (in authenticator.proto) and SimpleSecretHolderProto (below) share the notion of a "label", which identifies a particular secret without (hopefully) revealing the secret. Note that a SimpleSecretLabel only disambiguates between secrets used to get access to some particular object. Two different secrets that apply to two different objects could have the same label. For example, in the common sharing model, each object has no more than one "auth key". Therefore, the label for an auth key simply has type = AUTH_KEY with no additional information. In theory, we could add some sort of resource ID to SimpleSecretLabel to make it more explicit. However, in practice, this is never really needed. A SimpleSecret for one object is never used to authorize a request on some other object, so there is no ambiguity. Also, since SimpleSecrets must obviously be unguessable, there is no risk that a SimpleSecret intended for one object will accidentally grant access to another.',
    required: [],
  })
  .openapi('SimpleSecretLabelProto')

const SimpleSecretHolderProtoSchema = z
  .object({
    label: SimpleSecretLabelProtoSchema.exactOptional().openapi({
      description:
        'A descriptive label to help identify a relevant ACL entry or otherwise disambiguate this instance.',
    }),
  })
  .openapi({
    description:
      'Represents a principal which possesses a particular, presumably secret, string. Useful for things like "auth keys," used for anonymous sharing. Since representing this principal with the actual secret included reveals the secret, it\'s best if the requisite condition is enforced in some other way, for example via Keystore wrapping attributes (Keystore will unwrap only if the specified secret, aka "attribute", is presented). All that\'s stored here is an identifying label.',
    required: [],
  })
  .openapi('SimpleSecretHolderProto')

const SocialGraphNodeProtoSchema = z
  .object({
    sgnDomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The fields from ccc/socialgraph/socialgraphnode.proto:SgnNode that uniquely identify a social graph node. The 'ident' field is not included here because its value can be changed.",
      }),
    sgnPk: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Represents a user pseudonym. Pseudonyms are linked accounts on Google and third-party services (e.g. YouTube or Twitter) and are described by a Social Graph Node.',
    required: [],
  })
  .openapi('SocialGraphNodeProto')

const SquareProtoSchema = z
  .object({
    memberType: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The type of Square members to consider, e.g. "all members" vs. "owners" vs. "admins". These are defined by legacy_relation_id values in social.graph.storage.EdgeTypeEnum.EdgeType enum options in social/graph/storage/proto/id.proto. See square.pb (defined in production/config/cdd/socialgraph/mixer_config/prod/node_type_config) for all valid edge types associated with square. Currently required.',
      }),
    squareId: z.string().exactOptional().openapi({ description: 'Currently required.' }),
  })
  .openapi({
    description:
      'Represents the set of members (of a given type) in a Google+ Square (see http://go/squares). A Square with default member_type is currently (1/2012) identical to the GaiaGroup with the same ID, but that is expected to change soon (see http://go/superglue). Support for this principal type is currently (1/2012) incomplete -- e.g., Keystore does not support it yet (see b/5703421).',
    required: [],
  })
  .openapi('SquareProto')

const YoutubeUserProtoSchema = z
  .object({ youtubeUserId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('YoutubeUserProto')

const ZwiebackSessionProtoSchema = z
  .object({ zwiebackSessionId: z.string().exactOptional() })
  .openapi({
    description:
      'See go/zwieback. New uses of Zwieback sessions must be approved via go/zwieback-request.',
    required: [],
  })
  .openapi('ZwiebackSessionProto')

type PrincipalProtoType = {
  allAuthenticatedUsers?: z.infer<typeof AllAuthenticatedUsersProtoSchema>
  capTokenHolder?: z.infer<typeof CapTokenHolderProtoSchema>
  chat?: z.infer<typeof ChatProtoSchema>
  circle?: z.infer<typeof CircleProtoSchema>
  cloudPrincipal?: z.infer<typeof CloudPrincipalProtoSchema>
  contactGroup?: z.infer<typeof ContactGroupProtoSchema>
  emailOwner?: z.infer<typeof EmailOwnerProtoSchema>
  event?: z.infer<typeof EventProtoSchema>
  gaiaGroup?: z.infer<typeof GaiaGroupProtoSchema>
  gaiaUser?: z.infer<typeof GaiaUserProtoSchema>
  host?: z.infer<typeof HostProtoSchema>
  ldapGroup?: z.infer<typeof LdapGroupProtoSchema>
  ldapUser?: z.infer<typeof LdapUserProtoSchema>
  mdbGroup?: z.infer<typeof MdbGroupProtoSchema>
  mdbUser?: z.infer<typeof MdbUserProtoSchema>
  oauthConsumer?: z.infer<typeof OAuthConsumerProtoSchema>
  postiniUser?: z.infer<typeof PostiniUserProtoSchema>
  rbacRole?: z.infer<typeof RbacRoleProtoSchema>
  rbacSubject?: z.infer<typeof RbacSubjectProtoSchema>
  resourceRole?: z.infer<typeof ResourceRoleProtoSchema>
  scope?:
    | 'INVALID'
    | 'GAIA_USER'
    | 'GAIA_GROUP'
    | 'LDAP_USER'
    | 'LDAP_GROUP'
    | 'MDB_USER'
    | 'MDB_GROUP'
    | 'POSTINI_USER'
    | 'CONTACT_GROUP'
    | 'SIMPLE_SECRET_HOLDER'
    | 'SIGNING_KEY_POSSESSOR'
    | 'ALL_AUTHENTICATED_USERS'
    | 'OAUTH_CONSUMER'
    | 'HOST'
    | 'SOCIAL_GRAPH_NODE'
    | 'EMAIL_OWNER'
    | 'CAP_TOKEN_HOLDER'
    | 'CIRCLE'
    | 'SQUARE'
    | 'EVENT'
    | 'RESOURCE_ROLE'
    | 'CHAT'
    | 'YOUTUBE_USER'
    | 'UNUSED_ZWIEBACK_SESSION'
    | 'ZWIEBACK_SESSION'
    | 'RBAC_ROLE'
    | 'RBAC_SUBJECT'
    | 'CLOUD_PRINCIPAL'
  signingKeyPossessor?: z.infer<typeof SigningKeyPossessorProtoSchema>
  simpleSecretHolder?: z.infer<typeof SimpleSecretHolderProtoSchema>
  socialGraphNode?: z.infer<typeof SocialGraphNodeProtoSchema>
  square?: z.infer<typeof SquareProtoSchema>
  youtubeUser?: z.infer<typeof YoutubeUserProtoSchema>
  zwiebackSession?: z.infer<typeof ZwiebackSessionProtoSchema>
}

const BooleanPropertyOptionsSchema: z.ZodType<BooleanPropertyOptionsType> = z
  .object({
    operatorOptions: BooleanOperatorOptionsSchema.exactOptional().openapi({
      description: 'If set, describes how the boolean should be used as a search operator.',
    }),
  })
  .openapi({ description: 'The options for boolean properties.', required: [] })
  .openapi('BooleanPropertyOptions')

const DatePropertyOptionsSchema: z.ZodType<DatePropertyOptionsType> = z
  .object({
    operatorOptions: DateOperatorOptionsSchema.exactOptional().openapi({
      description: 'If set, describes how the date should be used as a search operator.',
    }),
  })
  .openapi({ description: 'The options for date properties.', required: [] })
  .openapi('DatePropertyOptions')

type PropertyDisplayOptionsType = { displayLabel?: string }

const PropertyDisplayOptionsSchema: z.ZodType<PropertyDisplayOptionsType> = z
  .object({
    displayLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user friendly label for the property that is used if the property is specified to be displayed in ObjectDisplayOptions. If provided, the display label is shown in front of the property values when the property is part of the object display options. For example, if the property value is '1', the value by itself may not be useful context for the user. If the display name given was 'priority', then the user sees 'priority : 1' in the search results which provides clear context to search users. This is OPTIONAL; if not given, only the property values are displayed. The maximum length is 64 characters.",
      }),
  })
  .openapi({ description: 'The display options for a property.', required: [] })
  .openapi('PropertyDisplayOptions')

const DoublePropertyOptionsSchema: z.ZodType<DoublePropertyOptionsType> = z
  .object({
    operatorOptions: DoubleOperatorOptionsSchema.exactOptional().openapi({
      description: 'If set, describes how the double should be used as a search operator.',
    }),
  })
  .openapi({ description: 'The options for double properties.', required: [] })
  .openapi('DoublePropertyOptions')

const EnumPropertyOptionsSchema: z.ZodType<EnumPropertyOptionsType> = z
  .object({
    operatorOptions: EnumOperatorOptionsSchema.exactOptional().openapi({
      description: 'If set, describes how the enum should be used as a search operator.',
    }),
    orderedRanking: z
      .enum(['NO_ORDER', 'ASCENDING', 'DESCENDING'])
      .exactOptional()
      .openapi({
        description:
          'Used to specify the ordered ranking for the enumeration that determines how the integer values provided in the possible EnumValuePairs are used to rank results. If specified, integer values must be provided for all possible EnumValuePair values given for this property. Can only be used if isRepeatable is false.',
      }),
    possibleValues: z
      .array(EnumValuePairSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of possible values for the enumeration property. All EnumValuePairs must provide a string value. If you specify an integer value for one EnumValuePair, then all possible EnumValuePairs must provide an integer value. Both the string value and integer value must be unique over all possible values. Once set, possible values cannot be removed or modified. If you supply an ordered ranking and think you might insert additional enum values in the future, leave gaps in the initial integer values to allow adding a value in between previously registered values. The maximum number of elements is 100.',
      }),
  })
  .openapi({
    description:
      'The options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*.',
    required: [],
  })
  .openapi('EnumPropertyOptions')

const HtmlPropertyOptionsSchema: z.ZodType<HtmlPropertyOptionsType> = z
  .object({
    operatorOptions: HtmlOperatorOptionsSchema.exactOptional().openapi({
      description: 'If set, describes how the property should be used as a search operator.',
    }),
    retrievalImportance: RetrievalImportanceSchema.exactOptional().openapi({
      description:
        'Indicates the search quality importance of the tokens within the field when used for retrieval. Can only be set to DEFAULT or NONE.',
    }),
  })
  .openapi({ description: 'The options for html properties.', required: [] })
  .openapi('HtmlPropertyOptions')

const IntegerPropertyOptionsSchema: z.ZodType<IntegerPropertyOptionsType> = z
  .object({
    integerFacetingOptions: IntegerFacetingOptionsSchema.exactOptional().openapi({
      description:
        'If set, describes integer faceting options for the given integer property. The corresponding integer property should be marked isFacetable.',
    }),
    maximumValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values greater than the maximum are accepted and ranked with the same weight as items indexed with the maximum value.',
      }),
    minimumValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The minimum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values less than the minimum are accepted and ranked with the same weight as items indexed with the minimum value.',
      }),
    operatorOptions: IntegerOperatorOptionsSchema.exactOptional().openapi({
      description: 'If set, describes how the integer should be used as a search operator.',
    }),
    orderedRanking: z
      .enum(['NO_ORDER', 'ASCENDING', 'DESCENDING'])
      .exactOptional()
      .openapi({
        description:
          'Used to specify the ordered ranking for the integer. Can only be used if isRepeatable is false.',
      }),
  })
  .openapi({ description: 'The options for integer properties.', required: [] })
  .openapi('IntegerPropertyOptions')

const ObjectPropertyOptionsSchema: z.ZodType<ObjectPropertyOptionsType> = z
  .lazy(() =>
    z
      .object({
        subobjectProperties: z
          .array(PropertyDefinitionSchema)
          .exactOptional()
          .openapi({
            description:
              'The properties of the sub-object. These properties represent a nested object. For example, if this property represents a postal address, the subobjectProperties might be named *street*, *city*, and *state*. The maximum number of elements is 1000.',
          }),
      })
      .openapi({ description: 'The options for object properties.', required: [] }),
  )
  .openapi('ObjectPropertyOptions')

const TextOperatorOptionsSchema = z
  .object({
    exactMatchWithOperator: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the text value is tokenized as one atomic value in operator searches and facet matches. For example, if the operator name is "genre" and the value is "science-fiction" the query restrictions "genre:science" and "genre:fiction" doesn\'t match the item; "genre:science-fiction" does. Text value matching is case-sensitive and does not remove special characters. If false, the text is tokenized. For example, if the value is "science-fiction" the queries "genre:science" and "genre:fiction" matches the item.',
      }),
    operatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the operator name required in the query in order to isolate the text property. For example, if operatorName is *subject* and the property's name is *subjectLine*, then queries like *subject:<value>* show results only where the value of the property named *subjectLine* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any text properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.",
      }),
  })
  .openapi({
    description:
      'Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.',
    required: [],
  })
  .openapi('TextOperatorOptions')

type TextPropertyOptionsType = {
  operatorOptions?: z.infer<typeof TextOperatorOptionsSchema>
  retrievalImportance?: z.infer<typeof RetrievalImportanceSchema>
}

const TextPropertyOptionsSchema: z.ZodType<TextPropertyOptionsType> = z
  .object({
    operatorOptions: TextOperatorOptionsSchema.exactOptional().openapi({
      description: 'If set, describes how the property should be used as a search operator.',
    }),
    retrievalImportance: RetrievalImportanceSchema.exactOptional().openapi({
      description:
        'Indicates the search quality importance of the tokens within the field when used for retrieval.',
    }),
  })
  .openapi({ description: 'The options for text properties.', required: [] })
  .openapi('TextPropertyOptions')

const TimestampOperatorOptionsSchema = z
  .object({
    greaterThanOperatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the operator name required in the query in order to isolate the timestamp property using the greater-than operator. For example, if greaterThanOperatorName is *closedafter* and the property's name is *closeDate*, then queries like *closedafter:<value>* show results only where the value of the property named *closeDate* is later than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.",
      }),
    lessThanOperatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the operator name required in the query in order to isolate the timestamp property using the less-than operator. For example, if lessThanOperatorName is *closedbefore* and the property's name is *closeDate*, then queries like *closedbefore:<value>* show results only where the value of the property named *closeDate* is earlier than *<value>*. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.",
      }),
    operatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Indicates the operator name required in the query in order to isolate the timestamp property. For example, if operatorName is *closedon* and the property's name is *closeDate*, then queries like *closedon:<value>* show results only where the value of the property named *closeDate* matches *<value>*. By contrast, a search that uses the same *<value>* without an operator returns all items where *<value>* matches the value of any String properties or text within the content field for the item. The operator name can only contain lowercase letters (a-z). The maximum length is 32 characters.",
      }),
  })
  .openapi({
    description:
      'Used to provide a search operator for timestamp properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.',
    required: [],
  })
  .openapi('TimestampOperatorOptions')

type TimestampPropertyOptionsType = {
  operatorOptions?: z.infer<typeof TimestampOperatorOptionsSchema>
}

const TimestampPropertyOptionsSchema: z.ZodType<TimestampPropertyOptionsType> = z
  .object({
    operatorOptions: TimestampOperatorOptionsSchema.exactOptional().openapi({
      description: 'If set, describes how the timestamp should be used as a search operator.',
    }),
  })
  .openapi({ description: 'The options for timestamp properties.', required: [] })
  .openapi('TimestampPropertyOptions')

type PropertyDefinitionType = {
  booleanPropertyOptions?: z.infer<typeof BooleanPropertyOptionsSchema>
  datePropertyOptions?: z.infer<typeof DatePropertyOptionsSchema>
  displayOptions?: z.infer<typeof PropertyDisplayOptionsSchema>
  doublePropertyOptions?: z.infer<typeof DoublePropertyOptionsSchema>
  enumPropertyOptions?: z.infer<typeof EnumPropertyOptionsSchema>
  htmlPropertyOptions?: z.infer<typeof HtmlPropertyOptionsSchema>
  integerPropertyOptions?: z.infer<typeof IntegerPropertyOptionsSchema>
  isFacetable?: boolean
  isRepeatable?: boolean
  isReturnable?: boolean
  isSortable?: boolean
  isSuggestable?: boolean
  isWildcardSearchable?: boolean
  name?: string
  objectPropertyOptions?: z.infer<typeof ObjectPropertyOptionsSchema>
  textPropertyOptions?: z.infer<typeof TextPropertyOptionsSchema>
  timestampPropertyOptions?: z.infer<typeof TimestampPropertyOptionsSchema>
}

const ResultDebugInfoSchema = z
  .object({
    formattedDebugInfo: z
      .string()
      .exactOptional()
      .openapi({ description: 'General debug info formatted for display.' }),
  })
  .openapi({ description: 'Debugging information about the result.', required: [] })
  .openapi('ResultDebugInfo')

const MetadataSchema: z.ZodType<MetadataType> = z
  .lazy(() =>
    z
      .object({
        createTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The creation time for this document or object in the search result.',
          }),
        displayOptions: ResultDisplayMetadataSchema.exactOptional().openapi({
          description: 'Options that specify how to display a structured data search result.',
        }),
        fields: z
          .array(NamedPropertySchema)
          .exactOptional()
          .openapi({
            description: 'Indexed fields in structured data, returned as a generic named property.',
          }),
        mimeType: z
          .string()
          .exactOptional()
          .openapi({ description: 'Mime type of the search result.' }),
        objectType: z
          .string()
          .exactOptional()
          .openapi({ description: 'Object type of the search result.' }),
        owner: PersonSchema.exactOptional().openapi({
          description: 'Owner (usually creator) of the document or object of the search result.',
        }),
        source: SourceSchema.exactOptional().openapi({
          description: 'The named source for the result, such as Gmail.',
        }),
        thumbnailUrl: z
          .string()
          .exactOptional()
          .openapi({ description: 'The thumbnail URL of the result.' }),
        updateTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The last modified date for the object in the search result. If not set in the item, the value returned here is empty. When `updateTime` is used for calculating freshness and is not set, this value defaults to 2 years from the current time.',
          }),
      })
      .openapi({ description: 'Metadata of a matched search result.', required: [] }),
  )
  .openapi('Metadata')

const MatchRangeSchema = z
  .object({
    end: z.int32().exactOptional().openapi({ description: 'End of the match in the snippet.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Starting position of the match in the snippet.' }),
  })
  .openapi({ description: 'Matched range of a snippet [start, end).', required: [] })
  .openapi('MatchRange')

const SnippetSchema = z
  .object({
    matchRanges: z
      .array(MatchRangeSchema)
      .exactOptional()
      .openapi({ description: 'The matched ranges in the snippet.' }),
    snippet: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The snippet of the document. The snippet of the document. May contain escaped HTML character that should be unescaped prior to rendering.',
      }),
  })
  .openapi({
    description:
      'Snippet of the search result, which summarizes the content of the resulting page.',
    required: [],
  })
  .openapi('Snippet')

type SearchResultType = {
  clusteredResults?: SearchResultType[]
  debugInfo?: z.infer<typeof ResultDebugInfoSchema>
  metadata?: z.infer<typeof MetadataSchema>
  snippet?: z.infer<typeof SnippetSchema>
  title?: string
  url?: string
}

const OsVersionSchema = z
  .object({
    majorVersion: z.int32().exactOptional(),
    minorVersion: z.int32().exactOptional(),
    tertiaryVersion: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OsVersion')

const PossiblyTrimmedModelSchema = z
  .object({ isTrimmed: z.boolean().exactOptional(), model: z.string().exactOptional() })
  .openapi({
    description:
      'This message contains either the device model, or a prefix of the device model (AKA a trimmed device model). The "is_trimmed" field indicates which one it is.',
    required: [],
  })
  .openapi('PossiblyTrimmedModel')

const ImapSessionContextSchema = z
  .object({
    app: z
      .enum([
        'OTHER_APP',
        'CHROME',
        'FIREFOX',
        'MSIE',
        'SAFARI',
        'OPERA',
        'EDGE',
        'MSIE_COMPATIBILITY',
        'OTHER_BROWSER',
        'SAMSUNG_BROWSER',
        'UC_BROWSER',
        'ANDROID_BROWSER',
        'YANDEX_BROWSER',
        'SILK_BROWSER',
        'COC_COC_BROWSER',
        'MAX_BROWSER_APP_VALUE',
        'GMAIL_APP',
        'GMAIL_INBOX_APP',
        'ANDROID_EMAIL_APP',
        'SAMSUNG_MAIL_APP',
        'MOTO_EMAIL_APP',
        'BOXER_APP',
        'LIMILABS_MAIL_DLL',
        'BIS_APP',
        'OUTLOOK_MAIL_APP',
        'APPLE_NATIVE_APP',
        'CHROME_WEBVIEW_APP',
        'SAFARI_WEBVIEW_APP',
        'CHROME_SYNC_APP',
        'GSA_APP',
        'GMM_APP',
        'CALENDAR_APP',
        'PLUS_APP',
        'HANGOUTS_APP',
        'HANGOUTS_MEET_APP',
        'JAMBOARD_APP',
        'VOICE_APP',
        'PHOTOS_APP',
        'DRIVE_SYNC_APP',
        'DRIVE_APP',
        'DOCS_APP',
        'SHEETS_APP',
        'SLIDES_APP',
        'KEEP_APP',
        'WHATS_APP_IN_DRIVE_APP',
        'TRANSLATE_APP',
        'YOUTUBE_APP',
        'YOUTUBE_MUSIC_APP',
        'YOUTUBE_GAMING_APP',
        'YOUTUBE_KIDS_APP',
        'YOUTUBE_CAPTURE_APP',
        'YOUTUBE_CREATOR_APP',
        'YOUTUBE_GO_APP',
        'YOUTUBE_TV_APP',
        'YOUTUBE_VR_APP',
        'PLAY_APP',
        'PLAY_MUSIC_APP',
        'PLAY_BOOKS_APP',
        'PLAY_MOVIES_APP',
        'PLAY_NEWSSTAND_APP',
        'PLAY_GAMES_APP',
        'POKEMON_GO_APP',
        'ALLO_APP',
        'DUO_APP',
        'CLASSROOM_APP',
        'TRIPS_APP',
        'GOOGLE_PAY_APP',
        'WAZE_APP',
        'ASSISTANT_APP',
        'GBOARD_APP',
        'NEWS_APP',
        'HOME_APP',
        'EARTH_APP',
        'STREET_VIEW_APP',
        'TEZ_APP',
        'GOOGLE_ANALYTICS_APP',
        'ADSENSE_APP',
        'ADWORDS_APP',
        'EXPRESS_APP',
        'WEAR_APP',
        'GOOGLE_MY_BUSINESS_APP',
        'FAMILY_LINK_APP',
        'OPINION_REWARDS_APP',
        'WALLET_APP',
        'ARTS_AND_CULTURE_APP',
        'ANDROID_DEVICE_MANAGER_APP',
        'GOOGLE_GO_APP',
        'FILES_GO_APP',
        'DATALLY_APP',
        'WIFI_APP',
        'STADIA_APP',
        'BATTLESTAR_APP',
        'SMART_LOCK_APP',
        'LOGDOG_APP',
        'DEPRECATED_MAC_OSX_MAIL_APP',
        'DEPRECATED_IOS_MAIL_APP',
      ])
      .exactOptional(),
    deviceType: z
      .enum([
        'UNKNOWN',
        'PC',
        'MOBILE',
        'TABLET',
        'PORTABLE_MEDIA_PLAYER',
        'TV',
        'GAME_CONSOLE',
        'MEDIA_PLAYER',
        'SMART_SPEAKER',
        'SMART_DISPLAY',
        'CONNECTED_HOME_OTHER',
        'WEARABLE',
        'GLASS',
        'CAR',
        'VR_HEADSET',
      ])
      .exactOptional()
      .openapi({ description: 'User agent information' }),
    guidFingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'As agreed with Bond team, this holds the fingerprint of any "aguid" or "guid" provided by the ID command. The fingerprint should be calculated by fingerprint2011. Note that not all clients will provide aguid or guid through ID command.',
      }),
    os: z
      .enum([
        'UNKNOWN_OS',
        'ANDROID_OS',
        'IOS_OS',
        'BLACKBERRY_OS',
        'WIN_PHONE_OS',
        'FIRE_OS',
        'MAX_MOBILE_OS_VALUE',
        'WINDOWS_OS',
        'LINUX_OS',
        'MAC_OS',
        'CHROME_OS',
        'PLAYSTATION_OS',
        'XBOX_OS',
        'TIZEN_OS',
        'APPLE_TV_OS',
        'KAI_OS',
        'ANDROID_THINGS_OS',
        'CAST_OS',
        'STADIA_OS',
      ])
      .exactOptional(),
    osVersion: OsVersionSchema.exactOptional(),
    possiblyTrimmedModel: PossiblyTrimmedModelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImapSessionContext')

type SessionContextType = {
  authTime?: string
  delegateUserId?: string
  dusi?: string
  imapSessionContext?: z.infer<typeof ImapSessionContextSchema>
  oauthLoginId?: number
  oauthProjectId?: string
}

type StructuredDataObjectType = { properties?: z.infer<typeof NamedPropertySchema>[] }

const DlpActionSchema = z
  .object({
    actionType: z.enum(['NO_ACTION', 'BLOCK', 'AUDIT_ONLY', 'WARN']).exactOptional(),
    unsafeHtmlMessageBody: z
      .string()
      .exactOptional()
      .openapi({ description: 'The custom error message defined by the customer administrator.' }),
  })
  .openapi({ required: [] })
  .openapi('DlpAction')

const DlpScanSummarySchema = z
  .object({
    dlpAction: DlpActionSchema.exactOptional(),
    scanId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The scan ID of the corresponding {@link DlpViolationScanRecord} in the {@link EphemeralDlpScans} Spanner table. This can be used to fetch additional details about the scan, e.g. for audit logging.',
      }),
    scanNotApplicableForContext: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that was no attempt to scan a message or attachment because it was not applicable in the given context (e.g. atomic mutuate). If this is true, scan_outcome should not be set. This flag is used to identify messages that DLP did not attempt to scan for monitoring scan coverage. Contents that DLP attempted to scan but skipped can be identified by DlpScanOutcome.SCAN_SKIPPED_* reasons. DEPRECATED: The prober can determine this from the context.',
      }),
    scanOutcome: z
      .enum([
        'SCAN_UNKNOWN_OUTCOME',
        'SCAN_SUCCEEDED_NO_VIOLATION',
        'SCAN_SUCCEEDED_BLOCK',
        'SCAN_SUCCEEDED_WARN',
        'SCAN_SUCCEEDED_AUDIT_ONLY',
        'SCAN_FAILURE_EXCEPTION',
        'SCAN_FAILURE_RULE_FETCH_FAILED',
        'SCAN_FAILURE_TIMEOUT',
        'SCAN_FAILURE_ALL_RULES_FAILED',
        'SCAN_FAILURE_ILLEGAL_STATE_FOR_ATTACHMENTS',
        'SCAN_SKIPPED_EXPERIMENT_DISABLED',
        'SCAN_SKIPPED_CONSUMER',
        'SCAN_SKIPPED_NON_HUMAN_USER',
        'SCAN_SKIPPED_NO_MESSAGE',
        'SCAN_SKIPPED_USER_ACKNOWLEDGED_WARNING',
        'SCAN_SKIPPED_MESSAGE_FROM_UNSUPPORTED_ORIGIN',
        'SCAN_SKIPPED_MESSAGE_SENT_DURING_SPACE_MIGRATION',
        'SCAN_RULE_EVALUATION_SKIPPED_NO_RULES_FOUND',
        'SCAN_RULE_EVALUATION_SKIPPED_NO_APPLICABLE_RULES_FOR_ACTION_PARAMS',
        'SCAN_RULE_EVALUATION_SKIPPED_NO_APPLICABLE_RULES_FOR_TRIGGER',
        'SCAN_RULE_EVALUATION_SKIPPED_CHANGELING_PERMANENT_ERROR',
        'SCAN_RULE_EVALUATION_SKIPPED_CHANGELING_EMPTY_RESPONSE',
        'SCAN_RULE_EVALUATION_SKIPPED_UNSUPPORTED_FILE_TYPE',
        'SCAN_SUCCEEDED_WITH_FAILURES_NO_VIOLATION',
        'SCAN_SUCCEEDED_WITH_FAILURES_BLOCK',
        'SCAN_SUCCEEDED_WITH_FAILURES_WARN',
        'SCAN_SUCCEEDED_WITH_FAILURES_AUDIT_ONLY',
      ])
      .exactOptional()
      .openapi({
        description:
          'The outcome of a DLP Scan. If this is set, scan_not_applicable_for_context should not be true.',
      }),
  })
  .openapi({
    description:
      'A summary of a DLP scan event. This is a summary and should contain the minimum amount of data required to identify and process DLP scans. It is written to Starcast and encoded & returned to the client on attachment upload.',
    required: [],
  })
  .openapi('DlpScanSummary')

const DmIdSchema = z
  .object({
    dmId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique server assigned Id, per Direct Message Space.' }),
  })
  .openapi({ required: [] })
  .openapi('DmId')

const SpaceIdSchema = z
  .object({
    spaceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique, immutable ID of the Space' }),
  })
  .openapi({ description: 'Primary key for Space resource.', required: [] })
  .openapi('SpaceId')

const GroupIdSchema = z
  .object({
    dmId: DmIdSchema.exactOptional().openapi({
      description: 'Unique, immutable ID of the Direct Message Space',
    }),
    spaceId: SpaceIdSchema.exactOptional().openapi({
      description: 'Unique, immutable ID of the Space',
    }),
  })
  .openapi({
    description:
      'Id representing a group that could be a space, a chat, or a direct message space. Which ID is set here will determine which group',
    required: [],
  })
  .openapi('GroupId')

const AppsDynamiteSharedDimensionSchema = z
  .object({ height: z.int32().exactOptional(), width: z.int32().exactOptional() })
  .openapi({ description: 'Dimension for the uploaded attachments.', required: [] })
  .openapi('AppsDynamiteSharedDimension')

const TopicIdSchema = z
  .object({
    groupId: GroupIdSchema.exactOptional().openapi({
      description: 'The Space or DM that the topic belongs to.',
    }),
    topicId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Opaque, server-assigned ID of the Topic. While this ID is guaranteed to be unique within the Space, it's not guaranteed to be globally unique. Internal usage: this field can be empty in the following cases: 1. To create the first message in a topic. 2. To list last N messages of a Space (regardless of topic).",
      }),
  })
  .openapi({ required: [] })
  .openapi('TopicId')

const MessageParentIdSchema = z
  .object({
    topicId: TopicIdSchema.exactOptional().openapi({
      description: 'ID of the Topic this Message is posted to. NEXT TAG : 5',
    }),
  })
  .openapi({
    description:
      "Primary key identifying Message resource's immediate parent. For top-level Messages, either topic_id or chat_id is populated. For replies, message_id is populated with the topic Message's ID.",
    required: [],
  })
  .openapi('MessageParentId')

const MessageIdSchema = z
  .object({
    messageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Opaque, server-assigned ID of the Message. While this ID is guaranteed to be unique within the Space, it's not guaranteed to be globally unique.",
      }),
    parentId: MessageParentIdSchema.exactOptional().openapi({
      description: "ID of the Message's immediate parent.",
    }),
  })
  .openapi({ description: 'Primary key for Message resource.', required: [] })
  .openapi('MessageId')

const AppsDynamiteSharedBackendUploadMetadataSchema = z
  .object({
    blobPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Blobstore path for the uploaded attachment' }),
    contentName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The original file name for the content, not the full path.' }),
    contentSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Scotty reported content size by default. http://google3/uploader/agent/scotty_agent.proto?l=101&rcl=140889785',
      }),
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Type is from Scotty's best_guess by default: http://google3/uploader/agent/scotty_agent.proto?l=51&rcl=140889785",
      }),
    dlpScanOutcome: z
      .enum([
        'SCAN_UNKNOWN_OUTCOME',
        'SCAN_SUCCEEDED_NO_VIOLATION',
        'SCAN_SUCCEEDED_BLOCK',
        'SCAN_SUCCEEDED_WARN',
        'SCAN_SUCCEEDED_AUDIT_ONLY',
        'SCAN_FAILURE_EXCEPTION',
        'SCAN_FAILURE_RULE_FETCH_FAILED',
        'SCAN_FAILURE_TIMEOUT',
        'SCAN_FAILURE_ALL_RULES_FAILED',
        'SCAN_FAILURE_ILLEGAL_STATE_FOR_ATTACHMENTS',
        'SCAN_SKIPPED_EXPERIMENT_DISABLED',
        'SCAN_SKIPPED_CONSUMER',
        'SCAN_SKIPPED_NON_HUMAN_USER',
        'SCAN_SKIPPED_NO_MESSAGE',
        'SCAN_SKIPPED_USER_ACKNOWLEDGED_WARNING',
        'SCAN_SKIPPED_MESSAGE_FROM_UNSUPPORTED_ORIGIN',
        'SCAN_SKIPPED_MESSAGE_SENT_DURING_SPACE_MIGRATION',
        'SCAN_RULE_EVALUATION_SKIPPED_NO_RULES_FOUND',
        'SCAN_RULE_EVALUATION_SKIPPED_NO_APPLICABLE_RULES_FOR_ACTION_PARAMS',
        'SCAN_RULE_EVALUATION_SKIPPED_NO_APPLICABLE_RULES_FOR_TRIGGER',
        'SCAN_RULE_EVALUATION_SKIPPED_CHANGELING_PERMANENT_ERROR',
        'SCAN_RULE_EVALUATION_SKIPPED_CHANGELING_EMPTY_RESPONSE',
        'SCAN_RULE_EVALUATION_SKIPPED_UNSUPPORTED_FILE_TYPE',
        'SCAN_SUCCEEDED_WITH_FAILURES_NO_VIOLATION',
        'SCAN_SUCCEEDED_WITH_FAILURES_BLOCK',
        'SCAN_SUCCEEDED_WITH_FAILURES_WARN',
        'SCAN_SUCCEEDED_WITH_FAILURES_AUDIT_ONLY',
      ])
      .exactOptional()
      .openapi({
        description:
          'The results of the Data Loss Prevention (DLP) scan of the attachment. DEPRECATED: use dlp_scan_summary instead.',
      }),
    dlpScanSummary: DlpScanSummarySchema.exactOptional().openapi({
      description:
        'Summary of a Data Loss Prevention (DLP) scan of the attachment. Attachments are evaluated in the backend when they are uploaded.',
    }),
    groupId: GroupIdSchema.exactOptional().openapi({
      description: 'GroupId to which this attachment is uploaded.',
    }),
    isClientSideTranscodedVideo: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the uploaded file is a video that has been transcoded on the client side Next tag: 18',
      }),
    originalDimension: AppsDynamiteSharedDimensionSchema.exactOptional().openapi({
      description: 'Original dimension of the content. Only set for image attachments.',
    }),
    quoteReplyMessageId: MessageIdSchema.exactOptional().openapi({
      description:
        'The message id of a quote reply referencing this attachment. When present, this attachment has been quoted in a reply message. Normally, the attachment is fetched through the message id in the blob_path, but in the case of a quote reply, the blob_path would contain the quoted message id. Thus this message id field is needed to fetch the quote reply message instead. This field is conditionally populated at read time for quotes and never persisted in storage. See go/message-quoting-attachments for more context.',
    }),
    sha256: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SHA256 hash of the attachment bytes.' }),
    uploadIp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User IP address at upload time. Ex. "123.1.2.3". Used by Ares abuse scanning.',
      }),
    uploadTimestampUsec: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp of when user finished uploading the content.' }),
    videoId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "VideoID of the video attachments. This ID shall meets the Youtube ID format of 16 hex characters. For example, '4c14b8825af6059b' is a valid ID.",
      }),
    videoThumbnailBlobId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full Blobstore ID for the video thumbnail.' }),
    virusScanResult: z
      .enum(['UNKNOWN_VIRUS_SCAN_RESULT', 'CLEAN', 'INFECTED', 'ERROR', 'POLICY_VIOLATION'])
      .exactOptional()
      .openapi({ description: 'Result for a virus scan.' }),
  })
  .openapi({
    description: 'Metadata used only in Dynamite backend for uploaded attachments.',
    required: [],
  })
  .openapi('AppsDynamiteSharedBackendUploadMetadata')

const AuthorizedItemIdSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Serialized ID of the Drive resource' }),
    resourceKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource key of the Drive item. This field should be unset if, depending on the context, the item does not have a resource key, or if none was specified. This must never be logged.',
      }),
  })
  .openapi({
    description:
      'A combination of an identifier for a Drive resource (e.g. file, folder, or drive) and any secrets needed to access it. The secrets should never be logged, and this proto annotates those secret fields to ensure that they are not. Clients are encouraged to use this proto rather than defining their own, to ensure that secrets are correctly annotated.',
    required: [],
  })
  .openapi('AuthorizedItemId')

const AppsDynamiteSharedDlpMetricsMetadataSchema = z
  .object({
    dlpStatus: z
      .enum([
        'DLP_STATUS_UNKNOWN',
        'DLP_DISABLED',
        'DLP_ENABLED_NO_RULE_FETCH',
        'DLP_ENABLED_RULES_FETCHED_NO_RULES',
        'DLP_ENABLED_RULES_FETCHED_NO_APPLICABLE_RULES',
        'DLP_ENABLED_RULES_FETCHED_AND_EVALUATED',
        'DLP_ENABLED_SCAN_TIMEOUT',
        'DLP_ENABLED_SCAN_FAILED',
      ])
      .exactOptional()
      .openapi({
        description:
          '[required] Describes the DLP status of message send and attachment upload events.',
      }),
  })
  .openapi({ description: 'LINT.IfChange', required: [] })
  .openapi('AppsDynamiteSharedDlpMetricsMetadata')

const AppsDynamiteSharedVideoReferenceSchema = z
  .object({
    format: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Available transcode format. Value is defined in video/storage/proto/content_header.proto',
      }),
    status: z
      .enum([
        'UNKNOWN_STATUS',
        'SUCCESS',
        'ERROR',
        'NOT_APPLICABLE',
        'THUMBNAIL_SUCCESS',
        'GO_LIVE_SUCCESS',
      ])
      .exactOptional()
      .openapi({ description: 'Transcode status' }),
  })
  .openapi({ description: 'Reference to a transcoded video attachment.', required: [] })
  .openapi('AppsDynamiteSharedVideoReference')

type UploadMetadataType = {
  attachmentToken?: string
  backendUploadMetadata?: z.infer<typeof AppsDynamiteSharedBackendUploadMetadataSchema>
  clonedAuthorizedItemId?: z.infer<typeof AuthorizedItemIdSchema>
  clonedDriveAction?:
    | 'DRIVE_ACTION_UNSPECIFIED'
    | 'ADD_TO_DRIVE'
    | 'ORGANIZE'
    | 'ADD_SHORTCUT'
    | 'ADD_ANOTHER_SHORTCUT'
  clonedDriveId?: string
  contentName?: string
  contentType?: string
  dlpMetricsMetadata?: z.infer<typeof AppsDynamiteSharedDlpMetricsMetadataSchema>
  latestVirusScanTimestamp?: string
  localId?: string
  originalDimension?: z.infer<typeof AppsDynamiteSharedDimensionSchema>
  videoReference?: z.infer<typeof AppsDynamiteSharedVideoReferenceSchema>
  virusScanResult?:
    | 'UNKNOWN_VIRUS_SCAN_RESULT'
    | 'CLEAN'
    | 'INFECTED'
    | 'ERROR'
    | 'POLICY_VIOLATION'
}

const AbuseReportingConfigSchema = z
  .object({
    recordingAllowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the current call may include video recordings in its abuse reports.',
      }),
    writtenUgcAllowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the current call may include user generated content (chat, polls, Q&A...) in its abuse reports.',
      }),
  })
  .openapi({
    description: 'Abuse reporting configuration outlining what is supported in this conference.',
    required: [],
  })
  .openapi('AbuseReportingConfig')

const AckInfoSchema = z
  .object({
    unackedDeviceCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of meeting devices that have not acked yet.',
        readOnly: true,
      }),
    unackedDeviceIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. IDs of meeting devices (at most ten are provided) that have not acked yet.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Information about how devices in a meeting have acked for a session/operation.',
    required: [],
  })
  .openapi('AckInfo')

const AclFixRequestSchema = z
  .object({
    recipientEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'For Spaces messages: This field is ignored. For DMs messages: The list of email addresses that should be added to the Drive item\'s ACL. In general, the list should not be empty when the boolean "should_fix" field is set; otherwise, the list should be empty. During transition - when clients do not specify this field but the "should_fix" is true, we follow the legacy behavior: share to all users in the DM regardless of emails. This behavior is being phased out.',
      }),
    role: z.enum(['UNKNOWN', 'READER', 'COMMENTER', 'WRITER']).exactOptional(),
    shouldFix: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether to attempt to fix the ACL by adding the room or DM members to the Drive file's ACL.",
      }),
  })
  .openapi({
    description:
      "The request set by clients to instruct Backend how the user intend to fix the ACL. Technically it's not a request to ACL Fixer, because Backend uses /DriveService.Share to modify Drive ACLs.",
    required: [],
  })
  .openapi('AclFixRequest')

const AclFixStatusSchema = z
  .object({
    fixability: z
      .enum(['UNKNOWN', 'ALREADY_ACCESSIBLE', 'CAN_FIX', 'CANNOT_FIX', 'ACL_FIXER_ERROR'])
      .exactOptional(),
    fixableEmailAddress: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of recipient email addresses for which access can be granted. This field contains the same email addresses from the GetMessagePreviewMetadata request if all recipients can be successfully added to the ACL as determined by Drive ACL Fixer. For now, the field is non-empty if and only if the "fixability" value is "CAN_FIX".',
      }),
    outOfDomainWarningEmailAddress: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of recipient email addresses for which an out-of-domain-sharing warning must be shown, stating that these email addresses are not in the Google Apps organization that the requested item belong to. Empty if all recipients are in the same Google Apps organization.',
      }),
  })
  .openapi({
    description:
      'The message reconstructed based on information in the response of /PermissionFixOptionsService.Query (or the Apiary API that wraps it). Indicates the ability of the requester to change the access to the Drive file for the room roster or the DM members. Used in GetMessagePreviewMetadataResponse only.',
    required: [],
  })
  .openapi('AclFixStatus')

const AclInfoSchema = z
  .object({
    groupsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of groups which have at least read access to the document.',
      }),
    scope: z
      .enum([
        'LIMITED',
        'DASHER_DOMAIN_WITH_LINK',
        'DASHER_DOMAIN',
        'PUBLIC_WITH_LINK',
        'PUBLIC',
        'TEAM_DRIVE',
      ])
      .exactOptional()
      .openapi({ description: 'The scope to which the content was shared.' }),
    usersCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of users which have at least read access to the document.' }),
  })
  .openapi({ description: 'Next tag: 4', required: [] })
  .openapi('AclInfo')

const RosterIdSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Opaque, server-assigned ID of the Roster.' }),
  })
  .openapi({ description: 'Primary key for Roster resource.', required: [] })
  .openapi('RosterId')

const MemberIdSchema = z
  .object({
    rosterId: RosterIdSchema.exactOptional().openapi({
      description: 'Unique, immutable ID of the Roster.',
    }),
    userId: UserIdSchema.exactOptional().openapi({
      description: 'Unique, immutable ID of the User.',
    }),
  })
  .openapi({
    description:
      'Eventually this can be updated to a oneOf User, Space (for nested spaces), Bots or Service, as and when these use cases come up.',
    required: [],
  })
  .openapi('MemberId')

const AffectedMembershipSchema = z
  .object({
    affectedMember: MemberIdSchema.exactOptional(),
    priorMembershipRole: z
      .enum(['ROLE_UNKNOWN', 'ROLE_NONE', 'ROLE_INVITEE', 'ROLE_MEMBER', 'ROLE_OWNER'])
      .exactOptional(),
    priorMembershipState: z
      .enum([
        'MEMBER_UNKNOWN',
        'MEMBER_INVITED',
        'MEMBER_JOINED',
        'MEMBER_NOT_A_MEMBER',
        'MEMBER_FAILED',
      ])
      .exactOptional(),
    targetMembershipRole: z
      .enum(['ROLE_UNKNOWN', 'ROLE_NONE', 'ROLE_INVITEE', 'ROLE_MEMBER', 'ROLE_OWNER'])
      .exactOptional(),
  })
  .openapi({
    description:
      "Earlier we used to populate just the affected_members list and inferred the new membership state (roles didn't exist back then) from the Type. go/dynamite-finra required backend to know the previous membership state to reconstruct membership history. The proper solution involved cleaning up up Type enum, but it was used in many, many places. This was added as a stop-gap solution to unblock FINRA without breaking everything. Later role update and target audience update started relying on this to communicate information to clients about what transition happened. So this is now required to be populated and should be in sync with affected_members for new messages.",
    required: [],
  })
  .openapi('AffectedMembership')

const DeleteMetadataSchema = z
  .object({})
  .openapi({
    description:
      'A message delete in Dynamite inserts a Babel-only item containing this field. This is only inserted for messages before the source-of-truth flip. See go/hsc-message-deletions for more details.',
  })
  .openapi('DeleteMetadata')

const EditMetadataSchema = z
  .object({})
  .openapi({
    description: 'A message edit in Dynamite inserts a Babel-only item containing this field.',
  })
  .openapi('EditMetadata')

const HangoutVideoEventMetadataSchema = z
  .object({
    hangoutVideoType: z
      .enum(['UNKNOWN_HANGOUT_VIDEO_EVENT_TYPE', 'VIDEO_START', 'VIDEO_END'])
      .exactOptional(),
  })
  .openapi({
    description: 'A message representing the Hangout video start/end events in Babel',
    required: [],
  })
  .openapi('HangoutVideoEventMetadata')

const BabelPlaceholderMetadataSchema = z
  .object({
    deleteMetadata: DeleteMetadataSchema.exactOptional(),
    editMetadata: EditMetadataSchema.exactOptional(),
    hangoutVideoMetadata: HangoutVideoEventMetadataSchema.exactOptional(),
  })
  .openapi({
    description:
      'Annotation metadata for Babel-only items that signals which type of placeholder message should be displayed in Babel clients.',
    required: [],
  })
  .openapi('BabelPlaceholderMetadata')

const CardCapabilityMetadataSchema = z
  .object({
    requiredCapabilities: z
      .array(z.enum(['UNKNOWN', 'SUPPORTS_BASE_CARDS']))
      .exactOptional()
      .openapi({ description: 'NEXT TAG : 2' }),
  })
  .openapi({ required: [] })
  .openapi('CardCapabilityMetadata')

const AppsDynamiteSharedTextSegmentSchema = z
  .object({
    length: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Length of the segment in the text.' }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Start index (0-indexed and inclusive) of the segment in the text.',
      }),
  })
  .openapi({ description: 'Defines a segment in a text.', required: [] })
  .openapi('AppsDynamiteSharedTextSegment')

const AppsDynamiteSharedTextSegmentsWithDescriptionSchema = z
  .object({
    descriptionType: z.enum(['DESCRIPTION_TYPE_UNSPECIFIED', 'KEYWORD_MATCH']).exactOptional(),
    textSegment: z.array(AppsDynamiteSharedTextSegmentSchema).exactOptional(),
  })
  .openapi({ description: 'Defines text segments with description type associated.', required: [] })
  .openapi('AppsDynamiteSharedTextSegmentsWithDescription')

const AppsDynamiteSharedTextWithDescriptionSchema = z
  .object({
    textBody: z.string().exactOptional(),
    textSegmentsWithDescription: z
      .array(AppsDynamiteSharedTextSegmentsWithDescriptionSchema)
      .exactOptional(),
  })
  .openapi({
    description: 'Defines a text with descriptive text segments associated.',
    required: [],
  })
  .openapi('AppsDynamiteSharedTextWithDescription')

const AppsDynamiteSharedMessageComponentSearchInfoSchema = z
  .object({
    matchedSearch: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the whole component matched the search.' }),
    titleTextWithDescription: AppsDynamiteSharedTextWithDescriptionSchema.exactOptional().openapi({
      description:
        'Backend should always set TextWithDescription.text_body based on the title (or its snippet) of the annotation or attachment.',
    }),
  })
  .openapi({
    description:
      'Metadata used to describe search information in a specific component of a chat message, for example an annotation or an attachment.',
    required: [],
  })
  .openapi('AppsDynamiteSharedMessageComponentSearchInfo')

const ConsentedAppUnfurlMetadataSchema = z
  .object({
    clientSpecifiedAppId: UserIdSchema.exactOptional().openapi({
      description: 'Client specified AppId, which will not be sanitized and is untrusted.',
    }),
  })
  .openapi({ description: 'Annotation metadata app unfurl consent.', required: [] })
  .openapi('ConsentedAppUnfurlMetadata')

const CustomerIdSchema = z
  .object({ customerId: z.string().exactOptional() })
  .openapi({
    description: 'Represents a GSuite customer ID. Obfuscated with CustomerIdObfuscator.',
    required: [],
  })
  .openapi('CustomerId')

const AppsDynamiteSharedCustomEmojiSchema = z
  .object({
    blobId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID for the underlying image data in Blobstore. This field should *only* be present in Spanner or within the server, but should not be exposed in public APIs.',
      }),
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Content type of the file used to upload the emoji. Used for takeout. Written to Spanner when the emoji is created.',
      }),
    createTimeMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time when the Emoji was created, in microseconds. This field may be present in Spanner, within the server, or in public APIs.',
      }),
    creatorUserId: UserIdSchema.exactOptional().openapi({
      description: 'This field should *never* be persisted to Spanner.',
    }),
    deleteTimeMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time when the emoji was deleted, in microseconds. This field may be present in Spanner, within the server, or in public APIs. Only present if the emoji has been deleted.',
      }),
    ephemeralUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A short-lived URL clients can use for directly accessing a custom emoji image. This field is intended for API consumption, and should *never* be persisted to Spanner.',
        readOnly: true,
      }),
    ownerCustomerId: CustomerIdSchema.exactOptional().openapi({
      description: 'This field should *never* be persisted to Spanner.',
    }),
    readToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque token that clients use to construct the URL for accessing the custom emoji’s image data. This field is intended for API consumption, and should *never* be persisted to Spanner.',
      }),
    shortcode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-provided, human-readable ID for the custom emoji. Users are expected to observe this field in the UI instead of the UUID. This shortcode should be unique within an organization, but has no global uniqueness guarantees, unlike the UUID. This field should *never* be persisted to Spanner.',
      }),
    state: z
      .enum([
        'EMOJI_STATE_UNSPECIFIED',
        'EMOJI_ENABLED',
        'EMOJI_SYSTEM_DISABLED',
        'EMOJI_HIDDEN',
        'EMOJI_DELETED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Snapshot of the current state of the emoji, which may differ from the source-of-truth in the CustomEmojis table. This field should *never* be persisted to Spanner.',
      }),
    updateTimeMicros: z.string().exactOptional(),
    uuid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique key for a custom emoji resource. Required. This field is *always* populated.',
      }),
  })
  .openapi({
    description:
      'Proto representation of a custom emoji. May be used in both APIs and in Spanner, but certain fields should be restricted to one or the other. See the per-field documentation for details. NEXT_TAG: 14',
    required: [],
  })
  .openapi('AppsDynamiteSharedCustomEmoji')

const CustomEmojiMetadataSchema = z
  .object({ customEmoji: AppsDynamiteSharedCustomEmojiSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CustomEmojiMetadata')

const DataLossPreventionMetadataSchema = z
  .object({
    dlpScanSummary: DlpScanSummarySchema.exactOptional().openapi({
      description:
        'The DLP scan summary that should only be set after the message is scanned in the Chat backend.',
    }),
    warnAcknowledged: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag set by client on message resend to bypass WARN violation.' }),
  })
  .openapi({
    description:
      'Annotation metadata for Data Loss Prevention that pertains to DLP violation on message send or edit events. It is used for client -> BE communication and other downstream process in BE (e.g. storage and audit logging), and it should never be returned to the client.',
    required: [],
  })
  .openapi('DataLossPreventionMetadata')

const TrustedResourceUrlProtoSchema = z
  .object({
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message.',
      }),
  })
  .openapi({
    description:
      'Message containing a string that is safe to use in all URL contexts in DOM APIs and HTML documents; even where the referred-to resource is interpreted as code, e.g., as the src of a script element.',
    required: [],
  })
  .openapi('TrustedResourceUrlProto')

const UploadMetadataSchema: z.ZodType<UploadMetadataType> = z
  .lazy(() =>
    z
      .object({
        attachmentToken: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Opaque token. Clients shall simply pass it back to the Backend. There is no guarantee the attachment_token returned on subsequent reads is the same even if nothing has changed. This field will NOT be saved into storage.',
          }),
        backendUploadMetadata:
          AppsDynamiteSharedBackendUploadMetadataSchema.exactOptional().openapi({
            description:
              'Information about the uploaded attachment that is only used in Backend. This field will NOT be sent out of Google.',
          }),
        clonedAuthorizedItemId: AuthorizedItemIdSchema.exactOptional().openapi({
          description:
            'The "new" secure identifier for Drive files. Should be used instead of the deprecated string drive_id field above. This should only be set if the upload file has been added to Drive. Note that older Drive files that do not have a ResourceKey should still use this field, with the resource_key field unset.',
        }),
        clonedDriveAction: z
          .enum([
            'DRIVE_ACTION_UNSPECIFIED',
            'ADD_TO_DRIVE',
            'ORGANIZE',
            'ADD_SHORTCUT',
            'ADD_ANOTHER_SHORTCUT',
          ])
          .exactOptional()
          .openapi({
            description:
              'DriveAction for organizing the cloned version of this upload in Drive, if the file has been added to Drive. This field is not set if the file has not been added to Drive. Additionally, this field is only set when part of a FileResult in a ListFilesResponse.',
          }),
        clonedDriveId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Reference to a Drive ID, if this upload file has been previously cloned to Drive. Note: this is deprecated in favor of the AuthorizedItemId below.',
          }),
        contentName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The original file name for the content, not the full path.' }),
        contentType: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Type is from Scotty's best_guess by default: http://google3/uploader/agent/scotty_agent.proto?l=51&rcl=140889785",
          }),
        dlpMetricsMetadata: AppsDynamiteSharedDlpMetricsMetadataSchema.exactOptional().openapi({
          description: 'The metrics metadata of the Data Loss Prevention attachment scan.',
        }),
        latestVirusScanTimestamp: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The timestamp of the most recent virus scan completed (in microseconds).',
          }),
        localId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A copy of the LocalId in Annotation. This field is supposed to be filled by server only.',
          }),
        originalDimension: AppsDynamiteSharedDimensionSchema.exactOptional().openapi({
          description: 'Original dimension of the content. Only set for image attachments.',
        }),
        videoReference: AppsDynamiteSharedVideoReferenceSchema.exactOptional().openapi({
          description:
            'Reference to a transcoded video attachment. Only set for video attachments.',
        }),
        virusScanResult: z
          .enum(['UNKNOWN_VIRUS_SCAN_RESULT', 'CLEAN', 'INFECTED', 'ERROR', 'POLICY_VIOLATION'])
          .exactOptional()
          .openapi({
            description:
              "Result for a virus scan. It's duplicated in the above field apps.dynamite.shared.BackendUploadMetadata",
          }),
      })
      .openapi({ description: 'Annotation metadata for user Upload artifacts.', required: [] }),
  )
  .openapi('UploadMetadata')

const LegacyUploadMetadataSchema = z
  .object({
    legacyUniqueId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique ID generated from legacy UploadMetadata. This is used for interopping URLs after uploading blob to shared drive. Links in Classic might break without this. go/drive-file-attachment-interop-from-dynamite.',
      }),
    uploadMetadata: UploadMetadataSchema.exactOptional().openapi({
      description:
        'The blob in this UploadMetadata has been uploaded to shared drive. This UploadMetadata is no longer attached to a message. go/shared-drive-data-migration.',
    }),
  })
  .openapi({
    description: 'The original UploadMetadata that this DriveMetadata was converted from.',
    required: [],
  })
  .openapi('LegacyUploadMetadata')

const WrappedResourceKeySchema = z
  .object({
    resourceKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource key of the Drive item. This field should be unset if, depending on the context, the item does not have a resource key, or if none was specified. This must never be logged.',
      }),
  })
  .openapi({
    description:
      'A wrapper around a raw resource key. The secret should never be logged, and this proto annotates those secret fields to ensure that they are not. Clients are encouraged to use this proto rather than defining their own, to ensure that secrets are correctly annotated.',
    required: [],
  })
  .openapi('WrappedResourceKey')

const DriveMetadataSchema = z
  .object({
    aclFixRequest: AclFixRequestSchema.exactOptional(),
    aclFixStatus: AclFixStatusSchema.exactOptional(),
    canEdit: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Can the current user edit this resource' }),
    canShare: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Can the current user share this resource' }),
    canView: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Can the current user view this resource' }),
    driveAction: z
      .enum([
        'DRIVE_ACTION_UNSPECIFIED',
        'ADD_TO_DRIVE',
        'ORGANIZE',
        'ADD_SHORTCUT',
        'ADD_ANOTHER_SHORTCUT',
      ])
      .exactOptional()
      .openapi({
        description:
          'DriveAction for organizing this file in Drive. If the user does not have access to the Drive file, the value will be DriveAction.DRIVE_ACTION_UNSPECIFIED. This field is only set when part of a FileResult in a ListFilesResponse.',
      }),
    driveState: z
      .enum([
        'DRIVE_STATE_UNSPECIFIED',
        'IN_MY_DRIVE',
        'IN_TEAM_DRIVE',
        'SHARED_IN_DRIVE',
        'NOT_IN_DRIVE',
      ])
      .exactOptional(),
    embedUrl: TrustedResourceUrlProtoSchema.exactOptional().openapi({
      description: 'Output only. Trusted Resource URL for drive file embedding.',
      readOnly: true,
    }),
    encryptedDocId: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the Drive link contains an encrypted doc ID. If true, Dynamite should not attempt to query the doc ID in Drive Service. See go/docid-encryption for details.',
      }),
    encryptedResourceKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'This is deprecated and unneeded. TODO (b/182479059): Remove this.',
      }),
    externalMimetype: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'External mimetype of the Drive Resource (Useful for creating Drive URL) See: http://b/35219462',
      }),
    id: z.string().exactOptional().openapi({ description: 'Drive resource ID of the artifact.' }),
    isDownloadRestricted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Whether the setting to restrict downloads is enabled for this file. This was previously used to determine whether to hide the download and print buttons in the UI, but is no longer used by clients, because Projector now independently queries Drive to ensure that we have the most up-to-date value.',
      }),
    isOwner: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If the current user is the Drive file's owner. The field is currently only set for Annotations for the ListFiles action (as opposed to fetching Topics/Messages with Drive annotations).",
      }),
    legacyUploadMetadata: LegacyUploadMetadataSchema.exactOptional().openapi({
      description: 'Only present if this DriveMetadata is converted from an UploadMetadata.',
    }),
    mimetype: z.string().exactOptional().openapi({ description: 'Mimetype of the Drive Resource' }),
    organizationDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the organization owning the Drive item.' }),
    shortcutAuthorizedItemId: AuthorizedItemIdSchema.exactOptional().openapi({
      description:
        'Shortcut ID of this drive file in the shared drive, which is associated with a named room this file was shared in. Shortcuts will not be created for DMs or unnamed rooms. This is populated after the DriveMetadata is migrated to shared drive. go/chat-shared-drive-uploads.',
    }),
    shouldNotRender: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this field is set to true, server should still contact external backends to get metadata for search but clients should not render this chip.',
      }),
    thumbnailHeight: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Thumbnail image of the Drive Resource' }),
    thumbnailUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Thumbnail image of the Drive Resource' }),
    thumbnailWidth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Thumbnail image of the Drive Resource' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the Drive Resource' }),
    urlFragment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Url string fragment that generally indicates the specific location in the linked file. Example: #header=h.123abc456. If the fragment is not present this will not be present and therefore default to an empty string. The "#" will not be included.',
      }),
    wrappedResourceKey: WrappedResourceKeySchema.exactOptional().openapi({
      description: 'This is considered SPII and should not be logged.',
    }),
  })
  .openapi({ description: 'Annotation metadata for Drive artifacts.', required: [] })
  .openapi('DriveMetadata')

const FormatMetadataSchema = z
  .object({
    fontColor: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Font color is set if and only if format_type is FONT_COLOR. The components are stored as (alpha << 24) | (red << 16) | (green << 8) | blue. Clients should always set the alpha component to 0xFF. NEXT TAG: 3',
      }),
    formatType: z
      .enum([
        'TYPE_UNSPECIFIED',
        'BOLD',
        'ITALIC',
        'STRIKE',
        'SOURCE_CODE',
        'MONOSPACE',
        'HIDDEN',
        'MONOSPACE_BLOCK',
        'UNDERLINE',
        'FONT_COLOR',
        'BULLETED_LIST',
        'BULLETED_LIST_ITEM',
        'CLIENT_HIDDEN',
      ])
      .exactOptional()
      .openapi({
        description:
          'LINT.ThenChange(//depot/google3/apps/dynamite/v1/web/datakeys/annotated_span.proto)',
      }),
  })
  .openapi({ description: 'Annotation metadata for markup formatting', required: [] })
  .openapi('FormatMetadata')

const AppsDynamiteSharedRetentionSettingsSchema = z
  .object({
    expiryTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp after which the message/topic should be removed, in microseconds since the epoch, when state == EPHEMERAL_ONE_DAY. The value should not be set in other cases.',
      }),
    state: z
      .enum(['UNKNOWN_RETENTION_STATE', 'PERMANENT', 'EPHEMERAL_ONE_DAY'])
      .exactOptional()
      .openapi({ description: 'The retention state.' }),
  })
  .openapi({ description: 'The settings of retention period of a message or topic.', required: [] })
  .openapi('AppsDynamiteSharedRetentionSettings')

const GroupRetentionSettingsUpdatedMetaDataSchema = z
  .object({
    initiator: UserIdSchema.exactOptional().openapi({
      description: 'The user who triggered the retention settings update',
    }),
    retentionSettings: AppsDynamiteSharedRetentionSettingsSchema.exactOptional().openapi({
      description: 'The updated space retention settings',
    }),
  })
  .openapi({ required: [] })
  .openapi('GroupRetentionSettingsUpdatedMetaData')

const AppsDynamiteSharedChatItemActivityInfoFeedItemNudgeSchema = z
  .object({
    nudgeType: z
      .enum(['UNDEFINED', 'REPLY', 'FOLLOW_UP'])
      .exactOptional()
      .openapi({ description: 'Nudge type of the nudge feed item.' }),
  })
  .openapi({
    description:
      'Existence of this attribute indicates that the AF item is for a message nudge item.',
    required: [],
  })
  .openapi('AppsDynamiteSharedChatItemActivityInfoFeedItemNudge')

const AppsDynamiteSharedChatItemActivityInfoFeedItemReactionsSchema = z
  .object({})
  .openapi({
    description:
      'Existence of this attribute indicates that the AF item is for message reactions, but it is intentionally left empty since the list of reactions can be found in the top-level Message.Reactions.',
  })
  .openapi('AppsDynamiteSharedChatItemActivityInfoFeedItemReactions')

const AppsDynamiteSharedChatItemActivityInfoFeedItemThreadReplySchema = z
  .object({
    replyType: z
      .enum(['UNSPECIFIED', 'ROOT', 'FOLLOWER'])
      .exactOptional()
      .openapi({
        description:
          "Reply type of the thread reply feed item. The field is not persisted in storage. It's populated when constructing Activity Feed payload.",
      }),
  })
  .openapi({
    description: 'Existence of this attribute indicates that the AF item is for thread reply.',
    required: [],
  })
  .openapi('AppsDynamiteSharedChatItemActivityInfoFeedItemThreadReply')

const AppsDynamiteSharedChatItemActivityInfoFeedItemUserMentionSchema = z
  .object({
    type: z
      .enum(['TYPE_UNSPECIFIED', 'DIRECT', 'ALL'])
      .exactOptional()
      .openapi({ description: 'User mention type' }),
  })
  .openapi({
    description:
      'Existence of this attribute indicates that the AF item is for a user mention item.',
    required: [],
  })
  .openapi('AppsDynamiteSharedChatItemActivityInfoFeedItemUserMention')

const AppsDynamiteSharedChatItemActivityInfoSchema = z
  .object({
    feedItemNudge: AppsDynamiteSharedChatItemActivityInfoFeedItemNudgeSchema.exactOptional(),
    feedItemReactions:
      AppsDynamiteSharedChatItemActivityInfoFeedItemReactionsSchema.exactOptional(),
    feedItemThreadReply:
      AppsDynamiteSharedChatItemActivityInfoFeedItemThreadReplySchema.exactOptional(),
    feedItemUserMention:
      AppsDynamiteSharedChatItemActivityInfoFeedItemUserMentionSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteSharedChatItemActivityInfo')

const AppsDynamiteSharedChatItemGroupInfoSchema = z
  .object({
    attributeCheckerGroupType: z
      .enum([
        'ATTRIBUTE_CHECKER_GROUP_TYPE_UNSPECIFIED',
        'ONE_TO_ONE_HUMAN_DM',
        'ONE_TO_ONE_BOT_DM',
        'IMMUTABLE_MEMBERSHIP_GROUP_DM',
        'FLAT_ROOM',
        'THREADED_ROOM',
        'IMMUTABLE_MEMBERSHIP_HUMAN_DM',
        'POST_ROOM',
        'ACTIVITY_FEED',
      ])
      .exactOptional()
      .openapi({
        description:
          'This is needed to determine what type of group the source message came from to support click-to-source.',
      }),
    groupName: z.string().exactOptional(),
    groupReadTimeUsec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of when the group containing the message has been read by the user.',
      }),
    inlineThreadingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the group has inline replies enabled. If enabled, clients will render the space with inline replies.',
      }),
  })
  .openapi({
    description:
      'Information about the space that the item originated from. This will be used to display Activity Feed items from rooms, and only contain the necessary information, such as the space name and group attributes. NEXT TAG: 6',
    required: [],
  })
  .openapi('AppsDynamiteSharedChatItemGroupInfo')

const AppsDynamiteSharedMessageInfoSchema = z
  .object({
    messageId: MessageIdSchema.exactOptional().openapi({
      description:
        'Id of the source chat message. This is kept here because the top-level message ID to refers the AF message ID.',
    }),
    messageType: z
      .enum(['MESSAGE_TYPE_UNSPECIFIED', 'INLINE_REPLY'])
      .exactOptional()
      .openapi({ description: 'The type of the source chat message.' }),
    topicReadTimeUsec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of when the topic containing the message has been read by the user. This is populated if the message references an inline reply, in which case the space may be marked as read but the topic still has unread messages.',
      }),
  })
  .openapi({
    description:
      'Information that references a Dynamite chat message. This is only used for Activity Feed messages.',
    required: [],
  })
  .openapi('AppsDynamiteSharedMessageInfo')

const AppsDynamiteSharedChatItemSchema = z
  .object({
    activityInfo: z
      .array(AppsDynamiteSharedChatItemActivityInfoSchema)
      .exactOptional()
      .openapi({ description: 'Information needed to render the specific type of feed item.' }),
    groupInfo: AppsDynamiteSharedChatItemGroupInfoSchema.exactOptional().openapi({
      description: 'Only populated on read path and should not be persisted in storage.',
    }),
    messageInfo: AppsDynamiteSharedMessageInfoSchema.exactOptional().openapi({
      description:
        "Additional information about the original chat message that isn't captured in the top-level message proto.",
    }),
  })
  .openapi({ description: 'Next Id: 5', required: [] })
  .openapi('AppsDynamiteSharedChatItem')

const UserInfoSchema = z
  .object({
    driveNotificationAvatarUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Avatar url of the user who triggered the Drive Notification email. This field will be populated if we can extract such information from the Drive Notification email. This should only be used to fetch user avatars when updater_to_show_email is not populated. This field is not set for non-Drive Notification items.',
      }),
    updaterCountDisplayType: z
      .enum([
        'UPDATER_COUNT_DISPLAY_TYPE_UNSPECIFIED',
        'NO_DISPLAY_COUNT',
        'EXACT_COUNT',
        'NONZERO_COUNT',
      ])
      .exactOptional()
      .openapi({ description: 'Describes how updater_count_to_show should be used.' }),
    updaterCountToShow: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of updaters for clients to show depending on UpdaterCountDisplayType.',
      }),
    updaterToShowEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email of the updater for clients to show used for Gmail items. For Drive Notifications, this is the email of the user who triggered the Drive Notification email. This field will be populated if we can extract such information from the Drive Notification email. This is not the actual sender of the email, as the sender is always comments-noreply@docs.google.com.',
      }),
    updaterToShowGaiaId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The gaia id of the updater for clients to show used for Gmail items. If the updater is an external user, the email field below should be populated.',
      }),
    updaterToShowName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the updater for clients to show used for Gmail items. For non-Drive Notification items, this field will always be populated. If the display name cannot be found for the user, the fallback string will be the email address. For Drive Notification items, this is the name of the user who triggered the Drive notification email. This field will be populated if we can extract such information from the Drive Notification email. If the name cannot be extracted, then the email will be the fallback string, which is used as the display name text in the UI when needed. This is not the actual sender of the email, as the sender is always comments-noreply@docs.google.com.',
      }),
    updaterToShowUserId: UserIdSchema.exactOptional().openapi({
      description: 'The updater for clients to show used for Dynamite Chat items.',
    }),
  })
  .openapi({
    description: 'Contains info regarding the updater of an Activity Feed item. Next Id: 8',
    required: [],
  })
  .openapi('UserInfo')

const AppsDynamiteSharedActivityFeedAnnotationDataUserInfoSchema = z
  .object({
    updaterCountDisplayType: z
      .enum(['UPDATER_COUNT_DISPLAY_TYPE_UNSPECIFIED', 'EXACT_COUNT', 'NONZERO_COUNT'])
      .exactOptional()
      .openapi({ description: 'Describes how updater_count_to_show should be used.' }),
    updaterCountToShow: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of updaters for clients to show, currently set to the total number of updaters minus the one set in updater_to_show.',
      }),
    updaterToShow: UserIdSchema.exactOptional().openapi({
      description: 'The updater for clients to show.',
    }),
  })
  .openapi({
    description: 'UserId of the AF item updater to show and the updater count to show.',
    required: [],
  })
  .openapi('AppsDynamiteSharedActivityFeedAnnotationDataUserInfo')

const AppsDynamiteSharedActivityFeedAnnotationDataSchema = z
  .object({
    activityFeedMessageCreateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of when the Activity Feed message that contains this annotation was created. This is roughly when the activity happened, such as when a reaction happened, but will have at least some small delay, since the Activity Feed message is created asynchronously after. This timestamp should only be used for display when the activity create time is not available in the Chat UI, like the time of a reaction.',
      }),
    activityFeedMessageId: MessageIdSchema.exactOptional().openapi({
      description:
        'Unique id of the Activity Feed message used by clients to implement click-to-source. This is the same messageId as the top-level id field for the Activity Feed item.',
    }),
    chatItem: AppsDynamiteSharedChatItemSchema.exactOptional(),
    sharedUserInfo: UserInfoSchema.exactOptional().openapi({
      description: 'Only populated on read path and should not be persisted in storage.',
    }),
    userInfo: AppsDynamiteSharedActivityFeedAnnotationDataUserInfoSchema.exactOptional().openapi({
      description: 'Use shared_user_info instead.',
    }),
  })
  .openapi({ description: 'Next Id: 7', required: [] })
  .openapi('AppsDynamiteSharedActivityFeedAnnotationData')

const AppsDynamiteSharedAssistantDebugContextSchema = z
  .object({
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'The query that triggered the resulting suggestion.' }),
  })
  .openapi({ description: 'Represents info regarding suggestion debug information.', required: [] })
  .openapi('AppsDynamiteSharedAssistantDebugContext')

const AppsDynamiteSharedAssistantFeedbackContextFeedbackChipSchema = z
  .object({
    feedbackChipType: z
      .enum([
        'FEEDBACK_CHIP_TYPE_UNSPECIFIED',
        'WRONG_TRIGGER',
        'WRONG_FILE',
        'CORRECT_TRIGGER',
        'CORRECT_FILE',
        'DISRUPTIVE',
        'OTHER',
      ])
      .exactOptional()
      .openapi({ description: 'What type of chip to display' }),
    state: z
      .enum(['FEEDBACK_CHIP_STATE_UNSPECIFIED', 'SELECTED', 'UNSELECTED'])
      .exactOptional()
      .openapi({ description: 'Whether the chip has been selected' }),
  })
  .openapi({
    description: 'Suggestion chips for users to indicate positive or negative feedback',
    required: [],
  })
  .openapi('AppsDynamiteSharedAssistantFeedbackContextFeedbackChip')

const AppsDynamiteSharedAssistantFeedbackContextSchema = z
  .object({
    feedbackChips: z
      .array(AppsDynamiteSharedAssistantFeedbackContextFeedbackChipSchema)
      .exactOptional()
      .openapi({ description: 'Specifies a list of feedback chips to show' }),
    thumbsFeedback: z
      .enum(['THUMBS_FEEDBACK_UNSPECIFIED', 'NONE_SELECTED', 'UP', 'DOWN'])
      .exactOptional()
      .openapi({ description: 'Whether the thumbs feedback is provided' }),
  })
  .openapi({ description: 'Data needed to render feedback on the Assistant card', required: [] })
  .openapi('AppsDynamiteSharedAssistantFeedbackContext')

const AppsDynamiteSharedJustificationPersonSchema = z
  .object({
    isRecipient: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the person is the recipient of the suggestions.' }),
    user: UserIdSchema.exactOptional().openapi({ description: 'Obfuscated user ID.' }),
  })
  .openapi({ description: 'Data for rendering a person associated with a document.', required: [] })
  .openapi('AppsDynamiteSharedJustificationPerson')

const AppsDynamiteSharedJustificationSchema = z
  .object({
    actionTime: z.string().exactOptional().openapi({ description: 'Time the action took place.' }),
    actionType: z
      .enum([
        'ACTION_TYPE_UNSPECIFIED',
        'COMMENTED',
        'CREATED',
        'EDITED',
        'PRESENTED',
        'SHARED',
        'VIEWED',
        'COMMENT_RESOLVED',
        'SENT',
      ])
      .exactOptional()
      .openapi({ description: 'Type of action performed on the document.' }),
    documentOwner: AppsDynamiteSharedJustificationPersonSchema.exactOptional().openapi({
      description: 'Owner of the document.',
    }),
    topics: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Words or phrases from the user\'s query that describes the document content. (Ex: Users query is "Can you share the document about Bullseye?" the extracted topic would be "Bullseye").',
      }),
  })
  .openapi({ description: 'Data for rendering a justification for a document.', required: [] })
  .openapi('AppsDynamiteSharedJustification')

const AppsDynamiteSharedDocumentSchema = z
  .object({
    fileId: z.string().exactOptional().openapi({ description: 'Unique file ID.' }),
    justification: AppsDynamiteSharedJustificationSchema.exactOptional().openapi({
      description: 'Justification to explain why this document is being suggested.',
    }),
    lastModifiedTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the document was last modified.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Used to determine which icon to render (e.g. docs, slides, sheets)',
      }),
    title: z.string().exactOptional().openapi({ description: 'Title of the document.' }),
    url: z.string().exactOptional().openapi({ description: 'URL of the document.' }),
  })
  .openapi({ description: 'Data for rendering a document.', required: [] })
  .openapi('AppsDynamiteSharedDocument')

const AppsDynamiteSharedFindDocumentSuggestionSchema = z
  .object({
    documentSuggestions: z
      .array(AppsDynamiteSharedDocumentSchema)
      .exactOptional()
      .openapi({ description: 'List of documents to render as suggestions.' }),
    showActionButtons: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to show the action buttons in the card for the suggestions.',
      }),
  })
  .openapi({ description: 'Data for a FindDocument suggestion type.', required: [] })
  .openapi('AppsDynamiteSharedFindDocumentSuggestion')

const AppsDynamiteSharedAssistantSessionContextSchema = z
  .object({
    contextualSessionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier populated by the contextual request handler for each vertical (Ex: File Suggestions, Smart Scheduling, etc.) that can be used to track sessions end-to-end. May span multiple users (sender-specific).',
      }),
  })
  .openapi({ description: 'Session context specific for Assistant suggestions.', required: [] })
  .openapi('AppsDynamiteSharedAssistantSessionContext')

const AppsDynamiteSharedAssistantSuggestionSchema = z
  .object({
    debugContext: AppsDynamiteSharedAssistantDebugContextSchema.exactOptional().openapi({
      description: 'Info regarding suggestion debug information.',
    }),
    feedbackContext: AppsDynamiteSharedAssistantFeedbackContextSchema.exactOptional().openapi({
      description: 'Data for rendering feedback.',
    }),
    findDocumentSuggestion: AppsDynamiteSharedFindDocumentSuggestionSchema.exactOptional().openapi({
      description: 'Suggestion type that suggests documents (docs, slides, sheets).',
    }),
    serializedSuggestions: z
      .string()
      .exactOptional()
      .openapi({ description: 'String representation of the suggestions provided.' }),
    sessionContext: AppsDynamiteSharedAssistantSessionContextSchema.exactOptional().openapi({
      description: 'Session context specific to the Assistant suggestion.',
    }),
  })
  .openapi({ description: 'Data for an Assistant suggestion.', required: [] })
  .openapi('AppsDynamiteSharedAssistantSuggestion')

const AppsDynamiteSharedAssistantUnfulfillableRequestSchema = z
  .object({})
  .openapi({ description: 'Data for a response to an unfulfillable request.' })
  .openapi('AppsDynamiteSharedAssistantUnfulfillableRequest')

const AppsDynamiteSharedAssistantAnnotationDataSchema = z
  .object({
    suggestion: AppsDynamiteSharedAssistantSuggestionSchema.exactOptional().openapi({
      description: 'The suggestion to render in the card.',
    }),
    unfulfillable: AppsDynamiteSharedAssistantUnfulfillableRequestSchema.exactOptional().openapi({
      description:
        'Set when the initial query was unfulfillable. Only an on-demand unfulfillable query will result in a response (not a proactive query). 1. On-demand: user explicitly invokes the bot 2. Proactive: bot makes proactive suggestion (when available) by listening to all user messages.',
    }),
  })
  .openapi({
    description:
      'This is the internal version of the API proto at google3/google/chat/v1/gsuite_message_integration.proto Data used to render Assistant suggestions. See go/bullseye-rendering.',
    required: [],
  })
  .openapi('AppsDynamiteSharedAssistantAnnotationData')

const AppsDynamiteSharedCalendarEventAnnotationDataCalendarEventTimeSchema = z
  .object({
    allDay: DateSchema.exactOptional().openapi({ description: 'All day event.' }),
    timed: z.string().exactOptional().openapi({ description: 'Non all day event.' }),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteSharedCalendarEventAnnotationDataCalendarEventTime')

const AppsDynamiteSharedCalendarEventAnnotationDataCalendarEventSchema = z
  .object({
    endTime:
      AppsDynamiteSharedCalendarEventAnnotationDataCalendarEventTimeSchema.exactOptional().openapi({
        description: 'The end time of the event.',
      }),
    eventId: z.string().exactOptional().openapi({ description: 'ID of the event.' }),
    startTime:
      AppsDynamiteSharedCalendarEventAnnotationDataCalendarEventTimeSchema.exactOptional().openapi({
        description: 'The start time of the event.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the event (at the time the message was generated).' }),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteSharedCalendarEventAnnotationDataCalendarEvent')

const AppsDynamiteSharedCalendarEventAnnotationDataEventCreationSchema = z
  .object({})
  .openapi({ description: 'Creation of an event (no extra data for now).' })
  .openapi('AppsDynamiteSharedCalendarEventAnnotationDataEventCreation')

const AppsDynamiteSharedCalendarEventAnnotationDataSchema = z
  .object({
    calendarEvent: AppsDynamiteSharedCalendarEventAnnotationDataCalendarEventSchema.exactOptional(),
    eventCreation:
      AppsDynamiteSharedCalendarEventAnnotationDataEventCreationSchema.exactOptional().openapi({
        description: 'Notification about the creation of an event.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteSharedCalendarEventAnnotationData')

const AppsDynamiteSharedMeetMetadataSchema = z
  .object({
    meetingCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A globally unique code (e.g. "cxv-zbgj-wzw") that points to a meeting space. Note: Meeting codes may be regenerated, which will cause old meeting codes to become invalid.',
      }),
    meetingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A URL, in the format "https://meet.google.com/*" (e.g. https://meet.google.com/cxv-zbgj-wzw), to identify and access the meeting space.',
      }),
  })
  .openapi({
    description: 'Metadata specific for a Meet call that are required to generate call artifacts.',
    required: [],
  })
  .openapi('AppsDynamiteSharedMeetMetadata')

const AppsDynamiteSharedCallMetadataSchema = z
  .object({
    meetMetadata: AppsDynamiteSharedMeetMetadataSchema.exactOptional().openapi({
      description: 'Metadata specific for the Meet call.',
    }),
  })
  .openapi({
    description:
      'Metadata required to generate call artifacts. This can either be the metadata for a Meet or, in the future, Google Voice call.',
    required: [],
  })
  .openapi('AppsDynamiteSharedCallMetadata')

const AppsDynamiteSharedCallAnnotationDataSchema = z
  .object({
    callEndedTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the call ended. Used to render the call ended system message.',
      }),
    callMetadata: AppsDynamiteSharedCallMetadataSchema.exactOptional().openapi({
      description:
        'Required. Call metadata required to create the call artifacts. For now, the metadata contains only the call id to identify the call. This field allows additional data (e.g. voice call type) to be added if needed in the future.',
    }),
    callStatus: z
      .enum(['CALL_STATUS_UNSPECIFIED', 'CALL_STARTED', 'CALL_MISSED', 'CALL_ENDED'])
      .exactOptional()
      .openapi({
        description:
          "Required. Indicates the call status for the space. Used to determine the chip's state.",
      }),
  })
  .openapi({
    description:
      'Data used to render Meet or Google Voice chips in Chat. See go/dynamite-calling-artifacts-in-chat.',
    required: [],
  })
  .openapi('AppsDynamiteSharedCallAnnotationData')

const AppsDynamiteSharedTasksAnnotationDataAssigneeChangeSchema = z
  .object({
    oldAssignee: UserIdSchema.exactOptional().openapi({
      description:
        'Obfuscated user ID of previous assignee. Not set if the task was originally not assigned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteSharedTasksAnnotationDataAssigneeChange')

const AppsDynamiteSharedTasksAnnotationDataCompletionChangeSchema = z
  .object({})
  .openapi('AppsDynamiteSharedTasksAnnotationDataCompletionChange')

const AppsDynamiteSharedTasksAnnotationDataCreationSchema = z
  .object({})
  .openapi('AppsDynamiteSharedTasksAnnotationDataCreation')

const AppsDynamiteSharedTasksAnnotationDataDeletionChangeSchema = z
  .object({})
  .openapi('AppsDynamiteSharedTasksAnnotationDataDeletionChange')

const AppsDynamiteSharedTasksAnnotationDataTaskPropertiesSchema = z
  .object({
    assignee: UserIdSchema.exactOptional().openapi({
      description:
        "Obfuscated user ID of new assignee. Not set if the task doesn't have an assignee.",
    }),
    completed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the task is marked as completed.' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the task is marked as deleted.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The description of the task. If Task original description's length is greater than 1024, then Task BE sends the truncated description to Dynamite Integration Server.",
      }),
    startDate: DateSchema.exactOptional().openapi({
      description:
        'Set if the task has a date but no time. Source of truth in Tasks BE: http://shortn/_wyT7eB4Ixv',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set if the task has both a date and a time. Source of truth in Tasks BE: http://shortn/_u6cr0F5ttE',
      }),
    title: z.string().exactOptional().openapi({ description: 'The title of the task.' }),
  })
  .openapi({ description: 'All relevant task properties for a Chat message.', required: [] })
  .openapi('AppsDynamiteSharedTasksAnnotationDataTaskProperties')

const AppsDynamiteSharedTasksAnnotationDataUserDefinedMessageSchema = z
  .object({})
  .openapi({
    description:
      "Used for task card attachments on custom user messages that should be kept as is without generating an i18n event message, e.g. the user starts a conversation from an existing task. IMPORTANT: please don't populate this field yet as it could break existing flows until it's implemented. See code at http://shortn/_CM74CdENMx used by http://shortn/_5o85POJY8Q.",
  })
  .openapi('AppsDynamiteSharedTasksAnnotationDataUserDefinedMessage')

const AppsDynamiteSharedTasksAnnotationDataSchema = z
  .object({
    assigneeChange: AppsDynamiteSharedTasksAnnotationDataAssigneeChangeSchema.exactOptional(),
    completionChange: AppsDynamiteSharedTasksAnnotationDataCompletionChangeSchema.exactOptional(),
    creation: AppsDynamiteSharedTasksAnnotationDataCreationSchema.exactOptional(),
    deletionChange: AppsDynamiteSharedTasksAnnotationDataDeletionChangeSchema.exactOptional(),
    taskId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of task. Will be used to create deep links to Tasks.' }),
    taskProperties:
      AppsDynamiteSharedTasksAnnotationDataTaskPropertiesSchema.exactOptional().openapi({
        description: 'Task properties after the update has been applied.',
      }),
    userDefinedMessage:
      AppsDynamiteSharedTasksAnnotationDataUserDefinedMessageSchema.exactOptional(),
  })
  .openapi({
    description:
      'This is the internal version of the API proto at google3/google/chat/v1/gsuite_message_integration.proto',
    required: [],
  })
  .openapi('AppsDynamiteSharedTasksAnnotationData')

const GsuiteIntegrationMetadataSchema = z
  .object({
    activityFeedData: AppsDynamiteSharedActivityFeedAnnotationDataSchema.exactOptional(),
    assistantData: AppsDynamiteSharedAssistantAnnotationDataSchema.exactOptional(),
    calendarEventData: AppsDynamiteSharedCalendarEventAnnotationDataSchema.exactOptional(),
    callData: AppsDynamiteSharedCallAnnotationDataSchema.exactOptional().openapi({
      description: 'Data used to render call artifacts.',
    }),
    clientType: z
      .enum([
        'UNKNOWN_CLIENT_TYPE',
        'MEET',
        'TASKS',
        'CALENDAR_EVENT',
        'ASSISTANT',
        'ACTIVITY_FEED_SERVICE',
      ])
      .exactOptional(),
    indexableTexts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of all strings that are to be indexed for this 1P chip. Each string in this list would be the contents of a single string field in the 1P chip. Eg. For Tasks[title = “hello world”, description = “good bye”]. If we want to index only the title, this would be set to [“hello world”]. If both title and description, then this would be [“hello world”, “good bye”]. Please make sure that the contents of this field is a subset of strings that are rendered as part of the 1P Chip.',
      }),
    tasksData: AppsDynamiteSharedTasksAnnotationDataSchema.exactOptional(),
  })
  .openapi({ description: 'Annotation metadata for a GsuiteIntegration artifact.', required: [] })
  .openapi('GsuiteIntegrationMetadata')

const AppsDynamiteSharedUserBlockRelationshipSchema = z
  .object({
    hasBlockedRequester: z.boolean().exactOptional(),
    isBlockedByRequester: z.boolean().exactOptional(),
  })
  .openapi({ description: 'User-block relationship', required: [] })
  .openapi('AppsDynamiteSharedUserBlockRelationship')

const SupportUrlsSchema = z
  .object({
    adminConfigUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Link to the admin configuration webpage for the bot. Configured by Pantheon, may be empty.',
      }),
    deletionPolicyUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Link to the deletion policy webpage for the bot. Configured by Pantheon, may be empty.',
      }),
    gwmUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to GWM page of the app. May be empty.' }),
    privacyPolicyUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to the privacy policy webpage for the bot. May be empty.' }),
    setupUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the setup webpage for the bot. Configured by Pantheon, may be empty.',
      }),
    supportUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the support webpage for the developer of the bot. May be empty.',
      }),
    tosUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to the terms of service webpage for the bot. May be empty.' }),
  })
  .openapi({ description: 'Urls with additional bot related information.', required: [] })
  .openapi('SupportUrls')

const BotInfoSchema = z
  .object({
    appAllowlistStatus: z
      .enum([
        'UNSPECIFIED_STATUS',
        'ALLOWED',
        'ALL_APPS_DISABLED_BY_ADMIN',
        'APP_NOT_ALLOWLISTED_BY_ADMIN',
      ])
      .exactOptional(),
    appId: AppIdSchema.exactOptional().openapi({
      description: 'Identifier of the application associated with the bot.',
    }),
    botAvatarUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL for the avatar picture of the User in dynamite. This field should be populated if the request is FetchBotCategories/ListBotCatalogEntries',
      }),
    botName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Non-unique, user-defined display name of the Bot. This field should be populated if the request is FetchBotCategories/ListBotCatalogEntries.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short description for the bot.' }),
    developerName: z.string().exactOptional().openapi({ description: 'Name of bot developer.' }),
    marketPlaceBannerUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL for the banner image in GSuite Market Place. The banner will be 220x140.',
      }),
    status: z
      .enum(['UNKNOWN_STATUS', 'ENABLED', 'DISABLED_BY_DEVELOPER'])
      .exactOptional()
      .openapi({ description: 'Indicates whether bot is enabled/disabled.' }),
    supportHomeScreen: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the app supports a home screen.' }),
    supportUrls: SupportUrlsSchema.exactOptional().openapi({
      description:
        'Urls with additional information related to the bot. This field should always be set even if all the fields within it are empty, so that it is convenient for clients to work with this field in javascript.',
    }),
    supportedUses: z
      .array(z.enum(['UNKNOWN', 'CAN_ADD_TO_DM', 'CAN_ADD_TO_ROOM', 'CAN_ADD_TO_HUMAN_DM']))
      .exactOptional()
      .openapi({
        description:
          'The supported uses are limited according to the user that made the request. If the user does not have permission to use the bot, the list will be empty. This could occur for non whitelisted bots in the catalog.',
      }),
  })
  .openapi({ description: 'Bot-specific profile information.', required: [] })
  .openapi('BotInfo')

const AppsDynamiteSharedOrganizationInfoConsumerInfoSchema = z
  .object({})
  .openapi({
    description:
      'Intentionally empty. Used to disambiguate consumer and customer use cases in oneof below.',
  })
  .openapi('AppsDynamiteSharedOrganizationInfoConsumerInfo')

const AppsDynamiteSharedOrganizationInfoCustomerInfoSchema = z
  .object({ customerId: CustomerIdSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AppsDynamiteSharedOrganizationInfoCustomerInfo')

const AppsDynamiteSharedOrganizationInfoSchema = z
  .object({
    consumerInfo: AppsDynamiteSharedOrganizationInfoConsumerInfoSchema.exactOptional(),
    customerInfo: AppsDynamiteSharedOrganizationInfoCustomerInfoSchema.exactOptional(),
  })
  .openapi({
    description: 'Contains info about the entity that something is, or is owned by.',
    required: [],
  })
  .openapi('AppsDynamiteSharedOrganizationInfo')

const AppsDynamiteSharedPhoneNumberSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number type, e.g., work, mobile, etc.' }),
    value: z.string().exactOptional().openapi({ description: 'The actual phone number.' }),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteSharedPhoneNumber')

const UserSchema = z
  .object({
    avatarUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL for the avatar picture of the User in dynamite' }),
    blockRelationship: AppsDynamiteSharedUserBlockRelationshipSchema.exactOptional().openapi({
      description:
        'Information about whether the user is blocked by requester and/or has blocked requester.',
    }),
    botInfo: BotInfoSchema.exactOptional().openapi({
      description: 'Bot-specific profile information. Leave it empty for human users.',
    }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Deleted flag, if true, means User has been soft-deleted/purged Deprecated. Use user_account_state field instead.',
      }),
    email: z.string().exactOptional().openapi({ description: 'Email ID of the user' }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'First or given name of the user' }),
    gender: z.string().exactOptional().openapi({ description: 'Gender of the user' }),
    id: UserIdSchema.exactOptional().openapi({ description: 'UserId' }),
    isAnonymous: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to true if none of the depending services (Gaia, PeopleApi) returns any info for this user.',
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last or family name of the user' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Non-unique, user-defined display name of the User' }),
    organizationInfo: AppsDynamiteSharedOrganizationInfoSchema.exactOptional().openapi({
      description:
        'Information about whether the user is a consumer user, or the GSuite customer that they belong to.',
    }),
    phoneNumber: z
      .array(AppsDynamiteSharedPhoneNumberSchema)
      .exactOptional()
      .openapi({ description: 'Phone number(s) of the user' }),
    userAccountState: z
      .enum([
        'UNKNOWN_USER_ACCOUNT_STATE',
        'ENABLED',
        'DISABLED',
        'DELETED',
        'TEMPORARY_UNAVAILABLE',
      ])
      .exactOptional()
      .openapi({ description: "State of user's Gaia Account" }),
    userProfileVisibility: z
      .enum([
        'UNKNOWN_USER_PROFILE_VISIBILITY',
        'FULL_PROFILE',
        'PRIMARY_MAIL',
        'INVITEE_EMAIL',
        'DELETED_USER',
        'UNKNOWN_USER',
        'FAILURE',
      ])
      .exactOptional()
      .openapi({ description: "Visibility of user's Profile" }),
  })
  .openapi({
    description: 'User profile information. This user is not necessarily member of a space.',
    required: [],
  })
  .openapi('User')

const IncomingWebhookChangedMetadataSchema = z
  .object({
    incomingWebhookName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The webhook name at the time of the change. Used in Spanner storage, BE API responses and FE API responses.',
      }),
    initiatorId: UserIdSchema.exactOptional().openapi({
      description:
        'The user id of the user whose action triggered this system message. Used in Spanner storage, BE API responses and FE API responses.',
    }),
    initiatorProfile: UserSchema.exactOptional().openapi({
      description:
        'Complete profile when ListTopicsRequest FetchOptions.USER is set. Otherwise, only the id will be filled in. Used in FE API responses.',
    }),
    obfuscatedIncomingWebhookId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The webhook id of the incoming webhook in question. This field should not be used to load webhook information dynamically and is only present for debugging purposes. Used in Spanner storage, BE API responses and FE API responses.',
      }),
    oldIncomingWebhookName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only populated for UPDATED_NAME and UPDATED_NAME_AND_AVATAR events, where the webhook name was changed. Used in Spanner storage, BE API responses and FE API responses.',
      }),
    type: z
      .enum([
        'UNSPECIFIED',
        'ADDED',
        'UPDATED',
        'REMOVED',
        'UPDATED_NAME',
        'UPDATED_AVATAR',
        'UPDATED_NAME_AND_AVATAR',
      ])
      .exactOptional()
      .openapi({ description: 'Used in Spanner storage, BE API responses and FE API responses.' }),
  })
  .openapi({
    description:
      'Annotation metadata to display system messages for incoming webhook events. Next Tag: 7',
    required: [],
  })
  .openapi('IncomingWebhookChangedMetadata')

const PinnedItemIdSchema = z
  .object({
    driveId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier for a Drive file (e.g. Docs, Sheets, Slides).' }),
  })
  .openapi({ required: [] })
  .openapi('PinnedItemId')

const IntegrationConfigMutationSchema = z
  .object({
    addApp: AppIdSchema.exactOptional().openapi({
      description: 'Add an app using its identifier.',
    }),
    addPinnedItem: PinnedItemIdSchema.exactOptional().openapi({
      description: 'Add a pinned tab using its identifier.',
    }),
    removeApp: AppIdSchema.exactOptional().openapi({
      description: 'Remove an active app using its identifier.',
    }),
    removePinnedItem: PinnedItemIdSchema.exactOptional().openapi({
      description: 'Remove an active pinned tab using its identifier.',
    }),
  })
  .openapi({ required: [] })
  .openapi('IntegrationConfigMutation')

const IntegrationConfigUpdatedMetadataSchema = z
  .object({
    initiatorId: UserIdSchema.exactOptional().openapi({
      description: 'The user whose action triggered this system message.',
    }),
    mutations: z
      .array(IntegrationConfigMutationSchema)
      .exactOptional()
      .openapi({ description: 'A list of updates applied on the integration config.' }),
  })
  .openapi({
    description:
      'Annotation metadata to display system message for integration config updated event. This metadata is stored in spanner, and can be dispatched to clients without any field modification or transformation.',
    required: [],
  })
  .openapi('IntegrationConfigUpdatedMetadata')

const SafeUrlProtoSchema = z
  .object({
    privateDoNotAccessOrElseSafeUrlWrappedValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message.',
      }),
  })
  .openapi({
    description:
      'Message containing a string that is safe to use in URL contexts in DOM APIs and HTML documents, where the URL context does not refer to a resource that loads code.',
    required: [],
  })
  .openapi('SafeUrlProto')

const InteractionDataSchema = z
  .object({
    url: SafeUrlProtoSchema.exactOptional().openapi({
      description:
        'A general navigation target associated with the annotation this message is contained in. For smart chips, this will be the destination of the tap/click target and will be returned by the server. For scenarios where the chip originated from a user-provided url, this value will be provided by clients; otherwise it will be built by the corresponding metadata parts.',
    }),
  })
  .openapi({
    description:
      'Interaction data for an annotation, which may be supplemental to the metadata oneof. For example, this will contain the fully built navigation target for smart chips. NEXT TAG: 2',
    required: [],
  })
  .openapi('InteractionData')

const AppsDynamiteSharedSegmentedMembershipCountSchema = z
  .object({
    memberType: z.enum(['MEMBER_TYPE_UNSPECIFIED', 'HUMAN_USER', 'ROSTER_MEMBER']).exactOptional(),
    membershipCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'count of members with given type and state' }),
    membershipState: z
      .enum([
        'MEMBER_UNKNOWN',
        'MEMBER_INVITED',
        'MEMBER_JOINED',
        'MEMBER_NOT_A_MEMBER',
        'MEMBER_FAILED',
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      'Contains info on membership count for member types: HUMAN_USER, APP_USER & ROSTER_MEMBER different states: INVITED, JOINED',
    required: [],
  })
  .openapi('AppsDynamiteSharedSegmentedMembershipCount')

const AppsDynamiteSharedSegmentedMembershipCountsSchema = z
  .object({ value: z.array(AppsDynamiteSharedSegmentedMembershipCountSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('AppsDynamiteSharedSegmentedMembershipCounts')

const RosterSchema = z
  .object({
    avatarUrl: z.string().exactOptional(),
    id: RosterIdSchema.exactOptional(),
    isMembershipVisibleToCaller: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether caller has visibility into members of the roster.' }),
    membershipCount: z.int32().exactOptional(),
    name: z.string().exactOptional(),
    rosterGaiaKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Roster gaia key, usually an email address. Set in looking up rosters response.',
      }),
    rosterState: z
      .enum(['ROSTER_STATE_UNKNOWN', 'ROSTER_ACTIVE', 'ROSTER_DELETED'])
      .exactOptional()
      .openapi({ description: 'Roster deletion state - considered active unless set to deleted' }),
    segmentedMembershipCounts:
      AppsDynamiteSharedSegmentedMembershipCountsSchema.exactOptional().openapi({
        description:
          'Roster membership count. May contain counts based on member type and membership state.',
      }),
  })
  .openapi({ description: 'Roster profile information.', required: [] })
  .openapi('Roster')

const MemberSchema = z
  .object({ roster: RosterSchema.exactOptional(), user: UserSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Member')

const MembershipChangedMetadataSchema = z
  .object({
    affectedMemberProfiles: z.array(MemberSchema).exactOptional(),
    affectedMembers: z
      .array(MemberIdSchema)
      .exactOptional()
      .openapi({ description: 'List of users and rosters whose membership status changed.' }),
    affectedMemberships: z.array(AffectedMembershipSchema).exactOptional(),
    initiator: UserIdSchema.exactOptional().openapi({
      description: 'The user whose action triggered this system message.',
    }),
    initiatorProfile: UserSchema.exactOptional().openapi({
      description:
        'Complete member profiles, when ListTopicsRequest FetchOptions.USER is set. Otherwise, only the id will be filled in.',
    }),
    initiatorType: z
      .enum(['INITIATOR_TYPE_UNSPECIFIED', 'INITIATOR_TYPE_END_USER', 'INITIATOR_TYPE_ADMIN'])
      .exactOptional()
      .openapi({ description: 'The type of the user who initiated this membership change.' }),
    type: z
      .enum([
        'TYPE_UNSPECIFIED',
        'INVITED',
        'JOINED',
        'ADDED',
        'REMOVED',
        'LEFT',
        'BOT_ADDED',
        'BOT_REMOVED',
        'KICKED_DUE_TO_OTR_CONFLICT',
        'ROLE_UPDATED',
        'ROLE_TARGET_AUDIENCE_UPDATED',
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      'Annotation metadata to display system messages for membership changes. Next Tag: 8',
    required: [],
  })
  .openapi('MembershipChangedMetadata')

const ReadReceiptsSettingsUpdatedMetadataSchema = z
  .object({
    readReceiptsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The new read receipts state.' }),
  })
  .openapi({ required: [] })
  .openapi('ReadReceiptsSettingsUpdatedMetadata')

const RequiredMessageFeaturesMetadataSchema = z
  .object({
    requiredFeatures: z
      .array(
        z.enum([
          'REQUIRED_FEATURE_UNSPECIFIED',
          'REQUIRED_FEATURE_MESSAGE_QUOTING',
          'REQUIRED_FEATURE_TOMBSTONES_IN_DMS_AND_UFRS',
          'REQUIRED_FEATURE_CUSTOM_HYPERLINK',
          'REQUIRED_FEATURE_SMART_CHIP',
        ]),
      )
      .exactOptional(),
  })
  .openapi({ description: 'A list of capabilities that are used in this message.', required: [] })
  .openapi('RequiredMessageFeaturesMetadata')

const AppsDynamiteSharedGroupDetailsSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A simple text that describes the purpose of a single Group, the general theme of the topics to be posted and/or the denominator of the Group participants.',
      }),
    guidelines: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A simple text describing the rules and expectations from members when participating in conversation.',
      }),
  })
  .openapi({
    description:
      'NEXT TAG: 3 A GroupDetails proto will store the information pertaining to single Group.',
    required: [],
  })
  .openapi('AppsDynamiteSharedGroupDetails')

const GroupDetailsUpdatedMetadataSchema = z
  .object({
    newGroupDetails: AppsDynamiteSharedGroupDetailsSchema.exactOptional(),
    prevGroupDetails: AppsDynamiteSharedGroupDetailsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GroupDetailsUpdatedMetadata')

const RoomRenameMetadataSchema = z
  .object({
    newName: z.string().exactOptional(),
    prevName: z.string().exactOptional().openapi({ description: 'NEXT_TAG: 3' }),
  })
  .openapi({ required: [] })
  .openapi('RoomRenameMetadata')

const AppsDynamiteSharedGroupVisibilitySchema = z
  .object({ state: z.enum(['UNKNOWN', 'PRIVATE', 'PUBLIC']).exactOptional() })
  .openapi({ required: [] })
  .openapi('AppsDynamiteSharedGroupVisibility')

const RoomUpdatedMetadataSchema = z
  .object({
    groupDetailsMetadata: GroupDetailsUpdatedMetadataSchema.exactOptional(),
    groupLinkSharingEnabled: z.boolean().exactOptional(),
    initiator: UserSchema.exactOptional().openapi({
      description:
        'The user who initiated this room update. Complete member profiles, when ListTopicsRequest FetchOptions.USER is set. Otherwise, only the id will be filled in.',
    }),
    initiatorType: z
      .enum(['INITIATOR_TYPE_UNSPECIFIED', 'INITIATOR_TYPE_END_USER', 'INITIATOR_TYPE_ADMIN'])
      .exactOptional()
      .openapi({ description: 'The type of the user who initiated this room update.' }),
    name: z.string().exactOptional().openapi({ description: 'What was updated in the room.' }),
    renameMetadata: RoomRenameMetadataSchema.exactOptional(),
    visibility: AppsDynamiteSharedGroupVisibilitySchema.exactOptional().openapi({
      description: 'DEPRECATED: See GroupVisibility proto definition.',
    }),
  })
  .openapi({ required: [] })
  .openapi('RoomUpdatedMetadata')

const SlashCommandMetadataSchema = z
  .object({
    argumentsHint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hint string for the arguments expected by the slash command.' }),
    commandId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique id for the slash command.' }),
    commandName: z.string().exactOptional().openapi({ description: 'Name of the slash command.' }),
    id: UserIdSchema.exactOptional().openapi({
      description: 'ID of the bot which owns the slash command.',
    }),
    triggersDialog: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this slash command should trigger a dialog.' }),
    type: z.enum(['TYPE_UNSPECIFIED', 'ADD', 'INVOKE', 'FAILED_TO_ADD']).exactOptional(),
  })
  .openapi({ description: 'Annotation metadata for slash commands (/).', required: [] })
  .openapi('SlashCommandMetadata')

const UrlMetadataSchema = z
  .object({
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description: "Domain for this url. If it's an IP address the address is returned.",
      }),
    gwsUrl: SafeUrlProtoSchema.exactOptional().openapi({ description: 'The signed GWS URL.' }),
    gwsUrlExpirationTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The expiration timestamp for GWS URL, only set when gws_url is set.',
      }),
    imageHeight: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Dimensions of the image: height. This field is string to match with page render service response. Deprecated. Use int_image_height instead.',
      }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Representative image of the website.' }),
    imageWidth: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Dimensions of the image: width. This field is string to match with page render service response. Deprecated. Use int_image_height instead.',
      }),
    intImageHeight: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Dimensions of the image: height.' }),
    intImageWidth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Dimensions of the image: width.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Mime type of the content (Currently mapped from Page Render Service ItemType) Note that this is not necessarily the mime type of the http resource. For example a text/html from youtube or vimeo may actually be classified as a video type. Then we shall mark it as video/* since we don't know exactly what type of video it is.",
      }),
    redirectUrl: SafeUrlProtoSchema.exactOptional().openapi({
      description: 'The stable redirect URL pointing to frontend server.',
    }),
    shouldNotRender: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the UrlMetadata is missing data for rendering a chip. Deprecated. Use Annotation.ChipRenderType instead.',
      }),
    snippet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Snippet/small description of the weblink.' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the Weblink.' }),
    url: SafeUrlProtoSchema.exactOptional().openapi({ description: 'The original URL.' }),
    urlSource: z
      .enum([
        'URL_SOURCE_UNKNOWN',
        'SERVER_SUPPLIED_POLICY_VIOLATION',
        'AUTO_DETECTED_PLAIN_TEXT',
        'RICH_TEXT',
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      "Annotation metadata for a Weblink. In case of pasted link it can qualify to be other types in addition to being a URL - like DRIVE_DOC/DRIVE_SHEET and so on. The URL metadata will also be present and it's up to the client to decide which metadata to render it with. These fields are filled in using page render service.",
    required: [],
  })
  .openapi('UrlMetadata')

const InviteeInfoSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email as typed by the user when invited to Room or DM. This value will be canonicalized and hashed before retained in storage.',
      }),
    userId: UserIdSchema.exactOptional().openapi({
      description: 'Unique, immutable ID of the User.',
    }),
  })
  .openapi({
    description: 'Invitee information from a Dynamite invitation. See go/dynamite-invitee-mgmt.',
    required: [],
  })
  .openapi('InviteeInfo')

const UserMentionMetadataSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display name of the mentioned user. This field should remain empty when clients resolve a UserMention annotation. It will be filled in when a UserMention is generated by the Integration Server.',
      }),
    gender: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Gender of the mentioned user. One of "female", "male" or "other". Used for choosing accurate translations for strings that contain the UserMention, when these need to be constructed (e.g. task assignment update message). This field should remain empty when clients resolve a UserMention. It will be filled in when a UserMention is generated by the Integration Server.',
      }),
    id: UserIdSchema.exactOptional().openapi({
      description:
        'To be deprecated. Use invitee_info field instead. ID of the User mentioned. This field should remain empty when type == MENTION_ALL.',
    }),
    inviteeInfo: InviteeInfoSchema.exactOptional().openapi({
      description:
        'Invitee UserId and email used when mentioned. This field should remain empty when type == MENTION_ALL. Invitee_info.email is only used when a user is @-mentioned with an email address, and it will be empty when clients get messages from Backend.',
    }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'INVITE', 'UNINVITE', 'MENTION', 'MENTION_ALL', 'FAILED_TO_ADD'])
      .exactOptional(),
    userMentionError: z
      .enum(['USER_MENTION_ERROR_UNSPECIFIED', 'MEMBERSHIP_LIMIT_EXCEEDED'])
      .exactOptional()
      .openapi({
        description:
          'Specific reason for the user mention failing, for fine-grained processing by clients (i.e. specific error message for space limit exceeded case) IMPORTANT: Set this only for FAILED_TO_ADD case.',
      }),
  })
  .openapi({ description: 'Annotation metadata for user mentions (+/@/-).', required: [] })
  .openapi('UserMentionMetadata')

const BroadcastAccessSchema = z
  .object({
    accessPolicy: z
      .enum(['BROADCASTING_ACCESS_POLICY_UNSPECIFIED', 'ORGANIZATION', 'PUBLIC'])
      .exactOptional()
      .openapi({ description: "The policy that controls the broadcast's viewer access." }),
    viewUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL that can be used to access the broadcast of the meeting. This field will be empty if broadcast is not enabled. It will be populated by the backend. Clients cannot modify the value.',
      }),
  })
  .openapi({ description: 'Broadcast access information of a meeting space.', required: [] })
  .openapi('BroadcastAccess')

const UserDisplayInfoSchema = z
  .object({
    avatarUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The avatar to show for this user' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name to show for this user' }),
  })
  .openapi({ description: 'Resource for displaying user info', required: [] })
  .openapi('UserDisplayInfo')

const WhiteboardInfoSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Cosmo Id of the whiteboard document (Jam).' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the whiteboard document.' }),
    uri: z.string().exactOptional().openapi({ description: 'The uri for whiteboard document.' }),
  })
  .openapi({
    description:
      'Information on a whiteboard attached to an active conference. A whiteboard is a Jam document.',
    required: [],
  })
  .openapi('WhiteboardInfo')

const DocumentInfoSchema = z
  .object({
    whiteboardInfo: WhiteboardInfoSchema.exactOptional().openapi({
      description: 'A whiteboard document.',
    }),
  })
  .openapi({
    description: 'Information on a document attached to an active conference.',
    required: [],
  })
  .openapi('DocumentInfo')

const ReactionInfoSchema = z
  .object({
    emoji: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unicode string representing a single emoji.' }),
  })
  .openapi({ description: 'Contains information about an emoji reaction.', required: [] })
  .openapi('ReactionInfo')

const BroadcastStatsSchema = z
  .object({
    estimatedViewerCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Estimated concurrent viewer count.' }),
  })
  .openapi({ description: 'Statistics of the broadcast session.', required: [] })
  .openapi('BroadcastStats')

const LanguageConfigSchema = z
  .object({
    spokenLanguages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The spoken language(s) in BCP47 language code.' }),
  })
  .openapi({ description: 'The language configuration for the session.', required: [] })
  .openapi('LanguageConfig')

const SessionStateInfoSchema = z
  .object({
    ackInfo: AckInfoSchema.exactOptional().openapi({
      description: 'Output only. The ack info of the session.',
      readOnly: true,
    }),
    languageConfig: LanguageConfigSchema.exactOptional().openapi({
      description:
        "Immutable. The language configuration used by this session. When empty, captions will be disabled. It's a required field for transcription sessions.",
    }),
    lastActorDeviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The device id of the actor is set if the current state is a result of a user action, is empty otherwise.',
        readOnly: true,
      }),
    maxEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The max end time of the session, at this time the session will be force stopped/terminated. Clients are expected to use this timestamp to warn users about the force stop.',
        readOnly: true,
      }),
    sessionState: z
      .enum(['SESSION_STATE_UNSPECIFIED', 'STARTING', 'ACTIVE', 'STOPPED'])
      .exactOptional()
      .openapi({ description: 'State of the session.' }),
    sessionStopReason: z
      .enum([
        'SESSION_STOP_REASON_UNSPECIFIED',
        'USER_ACTION',
        'STOPPED_INITIALIZATION_FAILED',
        'STOPPED_TOO_LONG',
        'STOPPED_ALL_DEVICES_LEFT',
        'STOPPED_INTERNAL_FAILURES',
        'STOPPED_YOU_TUBE_LIVE_EVENT_ENDED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The reason the session was transitioned to STOPPED state.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Information about the state of a (recording, broadcast, transcription...) session in a conference.',
    required: [],
  })
  .openapi('SessionStateInfo')

const BroadcastSessionInfoSchema = z
  .object({
    broadcastSessionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique server-generated ID for the broadcast session.' }),
    broadcastStats: BroadcastStatsSchema.exactOptional().openapi({
      description: "Output only. Current broadcast session's statistics.",
      readOnly: true,
    }),
    ingestionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Input only. Deprecated field, should not be used.' }),
    sessionStateInfo: SessionStateInfoSchema.exactOptional().openapi({
      description: "Broadcast session's state information.",
    }),
  })
  .openapi({ description: 'Information about a broadcast session.', required: [] })
  .openapi('BroadcastSessionInfo')

const CoActivitySchema = z
  .object({
    activityTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of the activity in this co-activity session. For example, this might be the title of the video being co-watched, or the name of the round of a game being co-played.',
      }),
    coActivityApp: z
      .enum([
        'CO_ACTIVITY_APP_UNSPECIFIED',
        'CO_ACTIVITY_APP_YOU_TUBE_MAIN',
        'CO_ACTIVITY_APP_SPOTIFY',
        'CO_ACTIVITY_APP_UNO',
        'CO_ACTIVITY_APP_HEADSUP',
        'CO_ACTIVITY_APP_KAHOOT',
        'CO_ACTIVITY_APP_GQUEUES',
        'CO_ACTIVITY_APP_YOU_TUBE_MUSIC',
        'CO_ACTIVITY_APP_SAMSUNG_NOTES',
        'CO_ACTIVITY_APP_HAPPY_AARDVARK',
      ])
      .exactOptional()
      .openapi({ description: 'Identifies the app handling this co-activity.' }),
  })
  .openapi({ description: 'Metadata about a co-activity session.', required: [] })
  .openapi('CoActivity')

const CollaborationSchema = z
  .object({
    attachmentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The attachment being collaborated on.' }),
    initiator: UserDisplayInfoSchema.exactOptional().openapi({
      description: 'Display info of the user who initiated the collaboration session.',
    }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The uri of the artifact being collaborated on.' }),
  })
  .openapi({ description: 'Information about a collaboration session.', required: [] })
  .openapi('Collaboration')

const CseInfoSchema = z
  .object({
    cseDomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CSE domain name claimed by the meeting owner\'s company. This field is expected to be used for display purposes only, i.e., "Extra encryption added by $cse_domain". It can differ from the `cse_domain` as defined elsewhere on the User, in the case of cross-domain meetings.',
      }),
    wrappedKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The wrapped CSE key used by this conference.' }),
  })
  .openapi({ description: 'Information needed for Client-side Encryption.', required: [] })
  .openapi('CseInfo')

const PaygateInfoSchema = z
  .object({
    callEndingSoonWarningTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time when client should show message that the call is ending soon.',
      }),
    callEndingTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time when the call will end if the user does not upgrade (after in-call upgrade support check has been implemented).',
      }),
    showUpgradePromos: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This boolean is used by clients to decide whether the user should be shown promos to upgrade.',
      }),
  })
  .openapi({
    description:
      'Information provided to clients so that they can show upgrade promos and warnings on call ending early (for non-paying users).',
    required: [],
  })
  .openapi('PaygateInfo')

const PresenterSchema = z
  .object({
    byDeviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The device resource name of the device which requested the current presenter to be set. This field can not be modified by clients.',
      }),
    copresenterDeviceIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The device resource names of other devices which can control the current presentation.',
      }),
    presenterDeviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The device resource name of the currently presenting device.' }),
  })
  .openapi({
    description:
      'Presenter contains information about which device is currently presenting as well as which device requested the presenter to be set.',
    required: [],
  })
  .openapi('Presenter')

const RecordingEventSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The initiator of the latest event of the recording. It will be set for all user events (`type` is 100-199) and unset for all server events (`type` is 200-299).',
      }),
    type: z
      .enum([
        'RECORDING_EVENT_UNSPECIFIED',
        'USER_ACTION',
        'STARTED_BY_USER',
        'STOPPED_BY_USER',
        'CANCELLED_BY_USER',
        'CANCELLED_INITIALIZATION_FAILED',
        'CANCELLED_INITIATOR_LEFT',
        'ACTIVE_ABOUT_TO_STOP_TOO_LONG',
        'STOPPED_TOO_LONG',
        'STOPPED_ALL_DEVICES_LEFT',
        'STOPPED_INTERNAL_FAILURES',
      ])
      .exactOptional()
      .openapi({ description: 'The type of event.' }),
  })
  .openapi({
    description: 'A recording event is something that happens to the recording in a conference.',
    required: [],
  })
  .openapi('RecordingEvent')

const RecordingInfoSchema = z
  .object({
    latestRecordingEvent: RecordingEventSchema.exactOptional().openapi({
      description:
        'The latest recording event. This can be used by clients to help explain what is going on, why recording stopped, etc. This will always be set if there is or was an active recording, which means there can be latest event when recording is INACTIVE.',
    }),
    ownerDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the owner of the recording output. Email notifications about uploaded recordings will also be sent to this owner.',
      }),
    producerDeviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The device resource name of the producer device for the currently active recording. Note that, after the producer drops/leaves the conference, this field will be cleaned up by the server after a delay.',
      }),
    recordingApplicationType: z
      .enum(['RECORDING_APPLICATION_TYPE_UNSPECIFIED', 'RECORDING', 'GLIVE_STREAM', 'BROADCAST'])
      .exactOptional()
      .openapi({
        description:
          'The application type of the current active recording. `RECORDING_APPLICATION_TYPE_UNSPECIFIED` if `recording_status` is inactive.',
      }),
    recordingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier for the current recording, if any. This is returned whenever recording_status is either `RECORDING_STARTING` or `RECORDING_STARTED`.',
      }),
    recordingStatus: z
      .enum([
        'RECORDING_UNSPECIFIED',
        'RECORDING_INACTIVE',
        'RECORDING_STARTING',
        'RECORDING_STARTED',
      ])
      .exactOptional()
      .openapi({
        description:
          'The current status of the recording. This can be used by clients to show a recording dot or similar to indicated to the user that a recording is taking place.',
      }),
  })
  .openapi({
    description:
      'This message is deprecated, please use RecordingSessionInfo instead. Information about recording in the current conference.',
    required: [],
  })
  .openapi('RecordingInfo')

const RecordingSessionInfoSchema = z
  .object({
    ownerEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Input only. Deprecated field, should not be used.' }),
    recordingSessionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique server-generated ID for the recording session.' }),
    sessionStateInfo: SessionStateInfoSchema.exactOptional().openapi({
      description: "Recording session's state information.",
    }),
  })
  .openapi({ description: 'Information about a recording session.', required: [] })
  .openapi('RecordingSessionInfo')

const CallSettingsSchema = z
  .object({
    accessLock: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the access lock is currently on or off.' }),
    accessType: z
      .enum([
        'ACCESS_TYPE_UNSPECIFIED',
        'ACCESS_TYPE_OPEN',
        'ACCESS_TYPE_TRUSTED',
        'ACCESS_TYPE_RESTRICTED',
        'ACCESS_TYPE_CLOSED',
      ])
      .exactOptional()
      .openapi({ description: 'The current access type of the conference.' }),
    allowJoiningBeforeHost: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether users can join this conference before a host (Host or Cohost).',
      }),
    attendanceReportEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the attendance report is currently enabled or disabled.',
      }),
    audioLock: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the audio lock is currently on or off.' }),
    chatLock: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the chat lock is currently on or off.' }),
    cseEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Client-side Encryption is enabled for this conference.' }),
    moderationEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether moderation is currently on or off.' }),
    presentLock: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the present lock is currently on or off.' }),
    reactionsLock: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the reactions lock is currently on or off.' }),
    videoLock: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the video lock is currently on or off.' }),
  })
  .openapi({ description: 'Effective settings of the ongoing conference.', required: [] })
  .openapi('CallSettings')

const SessionEventSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The initiator of the latest event of the streaming session. It will be set for all user events (`type` is 100-199) and unset for all server events(`type` is 200-299).',
      }),
    type: z
      .enum([
        'EVENT_UNSPECIFIED',
        'STARTED_BY_USER',
        'STOPPED_BY_USER',
        'CANCELLED_BY_USER',
        'CANCELLED_INITIALIZATION_FAILED',
        'CANCELLED_INITIATOR_LEFT',
        'ACTIVE_ABOUT_TO_STOP_TOO_LONG',
        'STOPPED_TOO_LONG',
        'STOPPED_ALL_DEVICES_LEFT',
        'STOPPED_INTERNAL_FAILURES',
      ])
      .exactOptional()
      .openapi({ description: 'The type of event.' }),
  })
  .openapi({
    description:
      'A session event is something that happens to the streaming session in a conference.',
    required: [],
  })
  .openapi('SessionEvent')

const StreamViewerStatsSchema = z
  .object({
    estimatedViewerCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The estimate of the current viewer count.' }),
  })
  .openapi({ description: 'Information about viewers of the stream.', required: [] })
  .openapi('StreamViewerStats')

const StreamingSessionInfoSchema = z
  .object({
    applicationType: z
      .enum(['RECORDING_APPLICATION_TYPE_UNSPECIFIED', 'RECORDING', 'GLIVE_STREAM', 'BROADCAST'])
      .exactOptional()
      .openapi({ description: 'The application type of the current streaming session.' }),
    latestSessionEvent: SessionEventSchema.exactOptional().openapi({
      description:
        'The latest streaming session event. This can be used by clients to help explain what is going on, why recording stopped, etc. This will always be set to a valid event and consistent with the status. It can be set when current session is inactive to indicate latest event that makes current session to become inactive.',
    }),
    ownerDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The display name of the owner of the recording output. It's only set when there will be uploaded recordings. Currently, it's only set when application type is RECORDING or GLIVE_STREAM.",
      }),
    sessionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the REST name and unique identifier of this streaming session and has the form `spaces//recordings/` This is returned whenever status is either `STARTING` or `STARTED`.',
      }),
    status: z
      .enum(['STATUS_UNSPECIFIED', 'INACTIVE', 'STARTING', 'LIVE'])
      .exactOptional()
      .openapi({
        description:
          'The current status of this streaming session. This can be used by clients to show session status indicator and/or notification.',
      }),
    trainingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'When true, this recording may be used for training new transcription models.',
      }),
    viewerAccessPolicy: z
      .enum(['BROADCASTING_ACCESS_POLICY_UNSPECIFIED', 'ORGANIZATION', 'PUBLIC'])
      .exactOptional()
      .openapi({
        description:
          'The policy that controls who can view the broadcast. This setting applies for broadcast session.',
      }),
    viewerStats: StreamViewerStatsSchema.exactOptional().openapi({
      description:
        'Contains information about viewers of the livestream. It is only set when application type is BROADCAST.',
    }),
  })
  .openapi({ description: 'Information about a streaming session in conference.', required: [] })
  .openapi('StreamingSessionInfo')

const TranscriptionSessionInfoSchema = z
  .object({
    sessionStateInfo: SessionStateInfoSchema.exactOptional().openapi({
      description: "Transcription session's state information.",
    }),
    transcriptionSessionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique server-generated ID for the transcription session.' }),
  })
  .openapi({ description: 'Information about a transcription session.', required: [] })
  .openapi('TranscriptionSessionInfo')

const YouTubeBroadcastStatsSchema = z
  .object({
    estimatedViewerCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Estimated concurrent viewer count.' }),
  })
  .openapi({ description: 'Statistics of the YouTube broadcast session.', required: [] })
  .openapi('YouTubeBroadcastStats')

const YouTubeLiveBroadcastEventSchema = z
  .object({
    brandAccountGaiaId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. If the channel_id is for a YouTube Channel owned by a Brand Account, client is required to populate this field with the obfuscated gaia id of the Brand account when starting the broadcast.',
      }),
    broadcastId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The broadcast id, used to control the lifecycle of the event on YouTube',
      }),
    channelId: z
      .string()
      .exactOptional()
      .openapi({ description: 'YouTube Channel associated with the broadcast.' }),
    viewUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A URL that can be used to watch the meeting broadcast. Will be populated by the backend.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Information about the broadcast to YouTube.', required: [] })
  .openapi('YouTubeLiveBroadcastEvent')

const YouTubeBroadcastSessionInfoSchema = z
  .object({
    broadcastStats: YouTubeBroadcastStatsSchema.exactOptional().openapi({
      description: "Current broadcast session's statistics.",
    }),
    sessionStateInfo: SessionStateInfoSchema.exactOptional().openapi({
      description: "YouTube broadcast session's state information.",
    }),
    youTubeBroadcastSessionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique server-generated ID for the broadcast session.' }),
    youTubeLiveBroadcastEvent: YouTubeLiveBroadcastEventSchema.exactOptional().openapi({
      description: 'The YouTube Live broadcast event that is being streamed to.',
    }),
  })
  .openapi({ description: 'Information about a YouTube broadcast session.', required: [] })
  .openapi('YouTubeBroadcastSessionInfo')

const CallInfoSchema = z
  .object({
    abuseReportingConfig: AbuseReportingConfigSchema.exactOptional().openapi({
      description: 'Abuse reporting configuration for the ongoing conference.',
    }),
    artifactOwner: UserDisplayInfoSchema.exactOptional().openapi({
      description:
        'Output only. Display name of the owner of artifacts generated in this conference. The expected use of this in clients is to present info like "This recording will be sent to John Doe\'s Drive". This field can be empty if preferred display name determination fails for any reason.',
      readOnly: true,
    }),
    attachedDocuments: z
      .array(DocumentInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Documents attached to an ongoing conference.',
        readOnly: true,
      }),
    availableAccessTypes: z
      .array(
        z.enum([
          'ACCESS_TYPE_UNSPECIFIED',
          'ACCESS_TYPE_OPEN',
          'ACCESS_TYPE_TRUSTED',
          'ACCESS_TYPE_RESTRICTED',
          'ACCESS_TYPE_CLOSED',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'List of available access types of the conference.' }),
    availableReactions: z
      .array(ReactionInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The set of reactions that clients are allowed to send and can expect to receive. Note that a device in the conference should have the MAY_SEND_REACTIONS privilege to be able to send reactions.',
        readOnly: true,
      }),
    broadcastSessionInfo: BroadcastSessionInfoSchema.exactOptional().openapi({
      description: 'Information about active broadcast session in the ongoing conference.',
    }),
    calendarEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The calendar event ID of a Google Calendar event that the meeting space is associated with. If the meeting space is not associated with an event in Google Calendar, this field is empty. For recurring events, it refers to the recurring instance associated with the current call, as determined by the server.',
        readOnly: true,
      }),
    coActivity: CoActivitySchema.exactOptional().openapi({
      description:
        'The current co-activity session, or unset if there is none in progress. A co-activity session can be initiated by devices in JOINED state . Initiator of the co-activity is expected to populate this field to start the session. Once clients detect that the co-activity has finished, any JOINED device can clear this field to end the co-activity session. In the case of switching activities, the initiator of the new activity merely needs to override this with the new co-activity data, and all connected clients are expected to handle the transition gracefully.',
    }),
    collaboration: CollaborationSchema.exactOptional().openapi({
      description:
        'The current collaboration session, or unset if no collaboration is in progress.',
    }),
    cseInfo: CseInfoSchema.exactOptional().openapi({
      description: 'CSE information for the ongoing conference.',
    }),
    maxJoinedDevices: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The maximum number of devices that may be in the joined state simultaneously in this conference. This can be used by clients to guess whether it will be possible to join, but the only way to know is to try to join. It can also be used to inform users about the limit that is in effect. This limit is normally set when the conference is created and not changed during the lifetime of the conference. But there are some cases where it may change, so clients should be aware that the information may be stale.',
        readOnly: true,
      }),
    organizationName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name or description of the organization or domain that the organizer belongs to. The expected use of this in clients is to present messages like "John Doe (outside of Google.com) is trying to join this call", where "Google.com" is the organization name. The field will be empty if the organization name could not be determined, possibly because of a backend error.',
        readOnly: true,
      }),
    paygateInfo: PaygateInfoSchema.exactOptional().openapi({
      description: 'Paygate information to clients.',
    }),
    presenter: PresenterSchema.exactOptional().openapi({
      description:
        'The current presenter in the call, or unset if there is no current presenter. Clients can set this to change the presenter.',
    }),
    recordingInfo: RecordingInfoSchema.exactOptional().openapi({
      description:
        'Deprecated, use RecordingSessionInfo instead. Info about recording for this conference. This will always be set in server responses, with a valid recording status. This is superseded by streaming_sessions field, which contains the same information about this recording as well as additional information about other application type at the same time. This will be deprecated and removed at some point.',
    }),
    recordingSessionInfo: RecordingSessionInfoSchema.exactOptional().openapi({
      description: 'Information about active recording session in the ongoing conference.',
    }),
    settings: CallSettingsSchema.exactOptional().openapi({
      description: 'Settings of the ongoing conference.',
    }),
    streamingSessions: z
      .array(StreamingSessionInfoSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Info about streaming sessions (recording or broadcast) for this conference. This should contain all active sessions. Currently, it's guaranteed to have at most one recording and at most one broadcast (at most two sessions in total). For each application type (recording or broadcast), latest inactive session is included if there's no active one.",
        readOnly: true,
      }),
    transcriptionSessionInfo: TranscriptionSessionInfoSchema.exactOptional().openapi({
      description: 'Information about active transcription session in the ongoing conference.',
    }),
    viewerCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of devices viewing the conference - MeetingDevices that are in VIEWER role and JOINED state in the conference.',
      }),
    youTubeBroadcastSessionInfos: z
      .array(YouTubeBroadcastSessionInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Information about active YouTube broadcast sessions in the ongoing conference.',
      }),
  })
  .openapi({
    description:
      'Contains information regarding an ongoing conference (aka call) for a meeting space.',
    required: [],
  })
  .openapi('CallInfo')

const GatewayAccessSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether third-party gateway accesses are enabled for this meeting space. If enabled, the actual access code can be retrieved by calling the GetGatewayAccess RPC method.',
      }),
  })
  .openapi({
    description: 'Details on the third-party interoperability settings for the meeting space.',
    required: [],
  })
  .openapi('GatewayAccess')

const GatewaySipAccessSchema = z
  .object({
    sipAccessCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Permanent numeric code for manual entry on specially configured devices, currently the same as the PSTN "Universal pin".',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SIP URI the conference can be reached through. The string is on one of the formats: "sip:@" "sips:@" where currently is the 13-digit universal pin (with the future option to support using a Meet meeting code as well), and is a valid address to be resolved using a DNS SRV lookup, or a dotted quad.',
      }),
  })
  .openapi({ description: 'Details how to join the conference via a SIP gateway.', required: [] })
  .openapi('GatewaySipAccess')

const PhoneAccessSchema = z
  .object({
    formattedPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The phone number to dial for this meeting space in INTERNATIONAL format. Full phone number with a leading '+' character and whitespace separations.",
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP 47/LDML language code for the language associated with this phone access. To be parsed by the i18n LanguageCode utility. Examples: "es-419" for Latin American Spanish, "fr-CA" for Canadian French.',
      }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The phone number to dial for this meeting space in E.164 format. Full phone number with a leading '+' character.",
      }),
    pin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The PIN that users must enter after dialing the given number. The PIN consists of only decimal digits and the length may vary.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CLDR/ISO 3166 region code for the country associated with this phone access. To be parsed by the i18n RegionCode utility. Example: "SE" for Sweden.',
      }),
  })
  .openapi({
    description:
      'Phone access contains information required to dial into a conference using a regional phone number and a PIN that is specific to that phone number.',
    required: [],
  })
  .openapi('PhoneAccess')

const SettingsSchema = z
  .object({
    accessLock: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The access lock of the meeting space that lets hosts control who can join the meeting.',
      }),
    accessType: z
      .enum([
        'ACCESS_TYPE_UNSPECIFIED',
        'ACCESS_TYPE_OPEN',
        'ACCESS_TYPE_TRUSTED',
        'ACCESS_TYPE_RESTRICTED',
        'ACCESS_TYPE_CLOSED',
      ])
      .exactOptional()
      .openapi({ description: 'The access type of the meeting space.' }),
    allowJoiningBeforeHost: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether users can join before host in the conferences of this meeting space.',
      }),
    attendanceReportEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether attendance report is enabled for the meeting space.' }),
    chatLock: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The chat lock of the meeting space that lets owner control whether the participants can send chat messages.',
      }),
    cohostArtifactSharingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether meeting artifacts will be shared with cohosts.' }),
    cseEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Client-side Encryption is enabled for the meeting space.' }),
    defaultAsViewer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the default role is viewer or not.' }),
    moderationEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the meeting space is moderated.' }),
    presentLock: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The present lock of the meeting space that lets owner control whether the participants can present their screen.',
      }),
    reactionsLock: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The reactions lock of the meeting space that lets owner control whether the participants can send reactions.',
      }),
  })
  .openapi({
    description:
      'Settings of a meeting space that can be edited by users with corresponding manage privilege. These settings are always populated in responses.',
    required: [],
  })
  .openapi('Settings')

const UniversalPhoneAccessSchema = z
  .object({
    pin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The PIN that users must enter after dialing a universal number. The pin consists of only decimal digits and the length may vary, though it generally is longer than a PhoneAccess.pin.',
      }),
    pstnInfoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field has the same contents as the MeetingSpace.more_join_url field, and is included for compatibility reasons. Clients should use the other field instead. This field is deprecated and will be removed.',
      }),
  })
  .openapi({
    description:
      'Universal phone access contains information required to dial into a conference using one of a static list of phone numbers and a universal PIN. The phone number list is distributed separately.',
    required: [],
  })
  .openapi('UniversalPhoneAccess')

const MeetingSpaceSchema = z
  .object({
    acceptedNumberClass: z
      .array(z.enum(['NUMBER_CLASS_UNSPECIFIED', 'LOW_COST', 'HIGH_COST', 'LEGACY']))
      .exactOptional()
      .openapi({
        description:
          'Which number classes are accepted by this meeting at the moment? When there is no ongoing conference, this field may change independent of the version number of the MeetingSpace. When a conference starts, this field will be locked to the value at that time, and then will be unlocked again at the end of the conference.',
      }),
    broadcastAccess: BroadcastAccessSchema.exactOptional().openapi({
      description: 'Broadcast access information for this meeting space.',
    }),
    callInfo: CallInfoSchema.exactOptional().openapi({
      description:
        'Information relevant to an ongoing conference. This field will be set in responses if the client requesting the meeting space has a device in one of the JOINED, HIDDEN, or MISSING_PREREQUISITES states. The field will also be set without a created device if the client requesting the meeting space is eligible to directly create a device in the JOINED state without knocking, eg a same-domain joiner. Can also only be updated by clients with a device in the JOINED state.',
    }),
    gatewayAccess: GatewayAccessSchema.exactOptional().openapi({
      description:
        'The interop gateway access information for the meeting space. A gateway access can be used when joining conferences from non-Google equipment through an interop gateway.',
    }),
    gatewaySipAccess: z
      .array(GatewaySipAccessSchema)
      .exactOptional()
      .openapi({
        description: 'The SIP based access methods that can be used to join the conference.',
      }),
    meetingAlias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional alias for the meeting space. The alias can in some cases be resolved to the meeting space, similar to the meeting code. The limitation is that the user needs to be in the same meeting domain as the meeting space.',
      }),
    meetingCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A meeting code is a globally unique code which points to a meeting space. Note: Meeting codes may be regenerated, which will cause old meeting codes to become invalid.',
      }),
    meetingSpaceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique server-generated ID for the meeting space. This is the resource name of the meeting space resource and has the form `spaces/`, where is a sequence of characters in the [base64url set](https://tools.ietf.org/html/rfc4648#section-5), without any `=` characters.',
      }),
    meetingUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL to identify and access the meeting space. Output only.' }),
    moreJoinUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A URL that clients (e.g. Calendar) can use to show the web page with all join methods available for this meeting space. This link is also used in iOS universal links and Android intents, used for opening the "More ways to join" view in the Meet mobile apps. Example: https://tel.meet/mee-ting-cod?pin=1234567891011 Here, "pin" is the universal phone PIN. We include it explicitly to better support the offline case on the mobile. This is set when the meeting space has either a universal PIN or an interop PIN and clients who can show a "more ways to join" button should show it whenever this field is set.',
        readOnly: true,
      }),
    phoneAccess: z
      .array(PhoneAccessSchema)
      .exactOptional()
      .openapi({
        description: 'All regional phone access methods for this meeting space. Can be empty.',
      }),
    settings: SettingsSchema.exactOptional().openapi({
      description: 'Settings of the meeting space.',
    }),
    universalPhoneAccess: UniversalPhoneAccessSchema.exactOptional().openapi({
      description: 'A universal phone access method for this meeting space. Can be unset.',
    }),
  })
  .openapi({
    description:
      ' A meeting space is a persistent object that is the context for one or more calls. The meeting space is what makes users find each other when they want to meet and to find shared resources. With two exceptions, all the fields in the meeting space resource are visible publicly to any client, even anonymous users. The exceptions are that * The call_info field is only visible to clients that have a device (as indicated by the meeting token) in the JOINED or HIDDEN state. * The meeting_alias field will only be set for users who are in the same domain as the meeting space. The meeting space resource (outside call_info) should only contain information necessary to join a call in the meeting space, and not any other metadata about the meeting space, such as what organization it belongs to or things related to ongoing calls.',
    required: [],
  })
  .openapi('MeetingSpace')

const VideoCallMetadataSchema = z
  .object({
    meetingSpace: MeetingSpaceSchema.exactOptional().openapi({
      description: 'Thor meeting space.',
    }),
    shouldNotRender: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this field is set to true, server should still contact external backends to get metadata for search but clients should not render this chip.',
      }),
    wasCreatedInCurrentGroup: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this meeting space was created via Dynamite in this Dynamite group.',
      }),
  })
  .openapi({ required: [] })
  .openapi('VideoCallMetadata')

const YoutubeMetadataSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'YouTube resource ID of the artifact.' }),
    shouldNotRender: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this field is set to true, server should still contact external backends to get metadata for search but clients should not render this chip.',
      }),
    startTime: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'YouTube query parameter for timestamp. YouTube specific flag that allows users to embed time token when sharing a link. This property contains parsed time token in seconds.',
      }),
  })
  .openapi({ description: 'Annotation metadata for YouTube artifact.', required: [] })
  .openapi('YoutubeMetadata')

const AnnotationSchema = z
  .object({
    babelPlaceholderMetadata: BabelPlaceholderMetadataSchema.exactOptional(),
    cardCapabilityMetadata: CardCapabilityMetadataSchema.exactOptional().openapi({
      description:
        'LINT.ThenChange(//depot/google3/java/com/google/apps/dynamite/v1/backend/action/common/SystemMessageHelper.java)',
    }),
    chipRenderType: z
      .enum(['CHIP_RENDER_TYPE_UNSPECIFIED', 'RENDER', 'RENDER_IF_POSSIBLE', 'DO_NOT_RENDER'])
      .exactOptional()
      .openapi({
        description:
          'Whether the annotation should be rendered as a preview chip. If this is missing or unspecified, fallback to should_not_render on the metadata.',
      }),
    componentSearchInfo: AppsDynamiteSharedMessageComponentSearchInfoSchema.exactOptional().openapi(
      {
        description:
          'Contains additional metadata that further enhances the annotation when it is returned as part of search response. For example, this can be used to define how the annotation matches the search. Information can be used to highlight in rendering search results. The following are the different annotation text fields that can be highlighted by this field: 1. DriveMetadata.title 2. UploadMetadata.content_name 3. GsuiteIntegrationMetadata.TasksMessageIntegrationRenderData.title 4. GsuiteIntegrationMetadata.CalendarEventAnnotationData.title',
      },
    ),
    consentedAppUnfurlMetadata: ConsentedAppUnfurlMetadataSchema.exactOptional(),
    customEmojiMetadata: CustomEmojiMetadataSchema.exactOptional(),
    dataLossPreventionMetadata: DataLossPreventionMetadataSchema.exactOptional(),
    driveMetadata: DriveMetadataSchema.exactOptional().openapi({ description: 'Chip annotations' }),
    formatMetadata: FormatMetadataSchema.exactOptional(),
    groupRetentionSettingsUpdated: GroupRetentionSettingsUpdatedMetaDataSchema.exactOptional(),
    gsuiteIntegrationMetadata: GsuiteIntegrationMetadataSchema.exactOptional().openapi({
      description:
        'Metadata for 1P integrations like tasks, calendar. These are supported only through integration server as 1P integrations use the integration API (which in turn uses backend API with special permissions) to post messages. Clients should never set this. LINT.IfChange',
    }),
    incomingWebhookChangedMetadata: IncomingWebhookChangedMetadataSchema.exactOptional(),
    inlineRenderFormat: z
      .enum(['INLINE_RENDER_FORMAT_UNSPECIFIED', 'SMART_CHIP'])
      .exactOptional()
      .openapi({
        description: 'The inline render format of this annotation. go/drive-smart-chips-chat-v2.',
      }),
    integrationConfigUpdated: IntegrationConfigUpdatedMetadataSchema.exactOptional().openapi({
      description:
        'LINT.ThenChange(//depot/google3/java/com/google/apps/dynamite/v1/backend/action/common/SystemMessageHelper.java)',
    }),
    interactionData: InteractionDataSchema.exactOptional().openapi({
      description: 'Additional interaction data for this annotation.',
    }),
    length: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Length of the text_body substring beginning from start_index the Annotation corresponds to.',
      }),
    localId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "* A client-assigned ID for this annotation. This is helpful in matching the back-filled annotations to the original annotations on client side, without having to re-parse the message. There is no guarantee an annotation has a local_id, it's a purely client used and controlled field with no guarantee of uniqueness.",
      }),
    membershipChanged: MembershipChangedMetadataSchema.exactOptional().openapi({
      description: 'Metadata for system messages. Clients should never set this. LINT.IfChange',
    }),
    readReceiptsSettingsMetadata: ReadReceiptsSettingsUpdatedMetadataSchema.exactOptional(),
    requiredMessageFeaturesMetadata: RequiredMessageFeaturesMetadataSchema.exactOptional().openapi({
      description:
        'Metadata that defines all of the required features that must be rendered in the message. Clients can use this to see whether they support the entire message, or show a fallback chip otherwise. See go/message-quoting-client-to-server for details. LINT.ThenChange( //depot/google3/java/com/google/apps/dynamite/v1/allshared/parser/AnnotationSanitizer.java, //depot/google3/java/com/google/apps/dynamite/v1/backend/action/common/SystemMessageHelper.java, //depot/google3/java/com/google/caribou/eli/mediation/chat/AnnotationConverter.java )',
    }),
    roomUpdated: RoomUpdatedMetadataSchema.exactOptional(),
    serverInvalidated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not the annotation is invalidated by the server. Example of situations for invalidation include: when the URL is malformed, or when Drive item ID is rejected by Drive Service.',
      }),
    slashCommandMetadata: SlashCommandMetadataSchema.exactOptional(),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Start index (0-indexed) of the Message text the Annotation corresponds to, inclusive.',
      }),
    type: z
      .enum([
        'TYPE_UNSPECIFIED',
        'URL',
        'DRIVE_FILE',
        'DRIVE_DOC',
        'DRIVE_SHEET',
        'DRIVE_SLIDE',
        'DRIVE_FORM',
        'USER_MENTION',
        'SLASH_COMMAND',
        'CONSENTED_APP_UNFURL',
        'VIDEO',
        'FORMAT_DATA',
        'IMAGE',
        'PDF',
        'VIDEO_CALL',
        'UPLOAD_METADATA',
        'GSUITE_INTEGRATION',
        'CUSTOM_EMOJI',
        'CARD_CAPABILITY',
        'DATA_LOSS_PREVENTION',
        'REQUIRED_MESSAGE_FEATURES_METADATA',
        'MEMBERSHIP_CHANGED',
        'ROOM_UPDATED',
        'GROUP_RETENTION_SETTINGS_UPDATED',
        'BABEL_PLACEHOLDER',
        'READ_RECEIPTS_SETTINGS_UPDATED',
        'INCOMING_WEBHOOK_CHANGED',
        'INTEGRATION_CONFIG_UPDATED',
        'INVITATION',
      ])
      .exactOptional()
      .openapi({ description: 'Type of the Annotation.' }),
    uniqueId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '* A unique server-assigned ID for this annotation. This is helpful in matching annotation objects when fetched from service. All uploads should have a unique_id after the message they are attached to is successfully sent. Url annotations that originally were uploads (i.e. policy violations) will have a unique_id after the message they are attached to is successfully sent. No other url annotations should have a unique_id. All drive annotations should have a unique_id after the message they are attached to is successfully sent.',
      }),
    uploadMetadata: UploadMetadataSchema.exactOptional(),
    urlMetadata: UrlMetadataSchema.exactOptional(),
    userMentionMetadata: UserMentionMetadataSchema.exactOptional().openapi({
      description:
        'Metadata that clients can set for annotations. LINT.IfChange In-text annotations',
    }),
    videoCallMetadata: VideoCallMetadataSchema.exactOptional(),
    youtubeMetadata: YoutubeMetadataSchema.exactOptional(),
  })
  .openapi({
    description:
      'NOTE WHEN ADDING NEW PROTO FIELDS: Be sure to add datapol annotations to new fields with potential PII, so they get scrubbed when logging protos for errors. NEXT TAG: 32',
    required: [],
  })
  .openapi('Annotation')

const AppsDynamiteSharedAppProfileSchema = z
  .object({
    avatarEmoji: z
      .string()
      .exactOptional()
      .openapi({ description: 'Displayed user avatar emoji.' }),
    avatarUrl: z.string().exactOptional().openapi({ description: 'Displayed user avatar url.' }),
    name: z.string().exactOptional().openapi({ description: 'Displayed user name.' }),
  })
  .openapi({ description: 'Optional field for apps overriding display info', required: [] })
  .openapi('AppsDynamiteSharedAppProfile')

const AppsDynamiteSharedEmojiSchema = z
  .object({
    customEmoji: AppsDynamiteSharedCustomEmojiSchema.exactOptional().openapi({
      description: 'A custom emoji.',
    }),
    unicode: z
      .string()
      .exactOptional()
      .openapi({ description: 'A basic emoji represented by a unicode string.' }),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteSharedEmoji')

const AppsDynamiteSharedAvatarInfoSchema = z
  .object({ emoji: AppsDynamiteSharedEmojiSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AppsDynamiteSharedAvatarInfo')

const AppsDynamiteSharedCardClickSuggestionSchema = z
  .object({
    actionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identify the button/action that created the suggestion. A simple example would be a card button within the stream, or the id which can identify a specific suggestion.',
      }),
    suggestionMessageId: MessageIdSchema.exactOptional().openapi({
      description: 'The message_id for the message that was posted by the app/bot.',
    }),
  })
  .openapi({
    description: 'Card click which identifies one suggestion provided by the app/bot.',
    required: [],
  })
  .openapi('AppsDynamiteSharedCardClickSuggestion')

const AppsDynamiteSharedContentReportTypeSchema = z
  .object({
    systemViolation: z
      .enum([
        'VIOLATION_UNSPECIFIED',
        'HARASSMENT',
        'DISCRIMINATION',
        'EXPLICIT_CONTENT',
        'SPAM',
        'CONFIDENTIAL_INFORMATION',
        'SENSITIVE_INFORMATION',
        'FRAUD',
        'MALWARE',
        'ILLEGAL_ACTIVITIES',
        'OTHER',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Google-defined system violation, covering the most common violations.',
      }),
  })
  .openapi({ description: 'Denotes a type of content report a user can send.', required: [] })
  .openapi('AppsDynamiteSharedContentReportType')

const AppsDynamiteSharedTasksMessageIntegrationPayloadSchema = z
  .object({})
  .openapi({
    description:
      'A payload containing Tasks metadata for rendering a live card. Currently not used by the Tasks integration.',
  })
  .openapi('AppsDynamiteSharedTasksMessageIntegrationPayload')

const AppsDynamiteSharedMessageIntegrationPayloadSchema = z
  .object({
    projectNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pantheon project number used to identify the calling app.' }),
    tasksMessageIntegrationPayload:
      AppsDynamiteSharedTasksMessageIntegrationPayloadSchema.exactOptional(),
    type: z
      .enum(['PAYLOAD_TYPE_UNSPECIFIED', 'TASKS'])
      .exactOptional()
      .openapi({
        description:
          "An enum indicating which 1P application's payload this is. This field is required to add 1P payload.",
      }),
  })
  .openapi({
    description: 'The payload(restricted to 1P applications) to be stored with a specific message.',
    required: [],
  })
  .openapi('AppsDynamiteSharedMessageIntegrationPayload')

const AppsDynamiteSharedOriginAppSuggestionSchema = z
  .object({
    appId: AppIdSchema.exactOptional(),
    cardClickSuggestion: AppsDynamiteSharedCardClickSuggestionSchema.exactOptional(),
  })
  .openapi({ description: 'Stores the suggestion provided by apps/bots.', required: [] })
  .openapi('AppsDynamiteSharedOriginAppSuggestion')

const AppsDynamiteSharedReactionSchema = z
  .object({
    count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of users who have reacted.' }),
    createTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the first emoji of this type was added.' }),
    currentUserParticipated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the current user reacted using this emoji. Note: Unlike most properties of messages, this is different per-user.',
      }),
    emoji: AppsDynamiteSharedEmojiSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AppsDynamiteSharedReaction')

const AppsDynamiteSharedSpaceInfoSchema = z
  .object({
    avatarInfo: AppsDynamiteSharedAvatarInfoSchema.exactOptional(),
    avatarUrl: z.string().exactOptional(),
    description: z.string().exactOptional(),
    groupId: GroupIdSchema.exactOptional(),
    inviterEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address of the user that invited the calling user to the room, if available. This field will only be populated for direct invites, it will be empty if the user was indirectly invited to the group.',
      }),
    isExternal: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this is a space that enables guest access' }),
    name: z.string().exactOptional(),
    numMembers: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Use segmented_membership_counts instead which also includes other counts such as rosters.',
      }),
    segmentedMembershipCounts:
      AppsDynamiteSharedSegmentedMembershipCountsSchema.exactOptional().openapi({
        description: 'Member counts object with types of members and their respective counts.',
      }),
    userMembershipState: z
      .enum([
        'MEMBER_UNKNOWN',
        'MEMBER_INVITED',
        'MEMBER_JOINED',
        'MEMBER_NOT_A_MEMBER',
        'MEMBER_FAILED',
      ])
      .exactOptional()
      .openapi({ description: "searching user's membership state in this space" }),
  })
  .openapi({ description: 'Defines the representation of a single matching space.', required: [] })
  .openapi('AppsDynamiteSharedSpaceInfo')

const AttachmentSchema: z.ZodType<AttachmentType> = z
  .lazy(() =>
    z
      .object({
        addOnData: GoogleChatV1ContextualAddOnMarkupSchema.exactOptional().openapi({
          description: 'Revised version of Gmail AddOn attachment approved by API design review.',
        }),
        appId: UserIdSchema.exactOptional().openapi({
          description:
            'The userId for the bot/app that created this data, to be used for attribution of attachments when the attachment was not created by the message sender.',
        }),
        attachmentId: z
          .string()
          .exactOptional()
          .openapi({ description: 'To identify an attachment within repeated in a message' }),
        cardAddOnData: AppsDynamiteStorageCardSchema.exactOptional().openapi({
          description:
            'Card AddOn attachment with the possibility for specifying editable widgets.',
        }),
        deprecatedAddOnData: ContextualAddOnMarkupSchema.exactOptional().openapi({
          description: 'Deprecated version of Gmail AddOn attachment.',
        }),
        slackData: AppsDynamiteV1ApiCompatV1AttachmentSchema.exactOptional().openapi({
          description: 'Slack attachment.',
        }),
        slackDataImageUrlHeight: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The height of image url as fetched by fife. This field is asynchronously filled.',
          }),
      })
      .openapi({ description: 'Attachments that follow the message text.', required: [] }),
  )
  .openapi('Attachment')

const CaribouAttributeValueSchema = z
  .object({
    booleanValue: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Tags 1 through 15 are reserved for the most commonly used fields.',
      }),
    intValue: z.int32().exactOptional(),
    longValue: z.string().exactOptional(),
    rawByteValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Generally, applications should avoid storing raw bytes and instead store structured data as protocol buffer extensions. This both reduces the amount of ad-hoc attribute parsing code as well as eliminates an intermediate copy of the data when deserializing the value. The rawByteValue field is mainly provided for compatibility with attributes stored before the introduction of the Attribute.Value.',
      }),
    stringValue: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CaribouAttributeValue')

const AttributeSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the attribute. Required - If a write is attempted with an empty string, the server will return an error.',
      }),
    value: CaribouAttributeValueSchema.exactOptional(),
  })
  .openapi({
    description:
      'An Attribute is a piece of data attached an Item. Attributes are opaque to the Starbox and have no effect on, nor are they effected by, message storage, indexing, or search. ',
    required: [],
  })
  .openapi('Attribute')

const MultiKeySchema = z
  .object({
    clientAssignedPermId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A client-assigned string based key.' }),
    serverId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A server-assigned ID. This ID must be used only by Gmail and is constructed using millesecond ts << 20 + randomness. The ID affects the sort order of the index.',
      }),
  })
  .openapi({
    description:
      'A union-like type for identifiying an object in storage. MultiKeys contain multiple key fields, each in a separate key space. At least one key field must be set. More than one key field may be set as long as all key values refer to the same object. All objects in storage have unique server_id keys. All MultiKeys returned from storage to storage clients will always have the server_id field set. When creating an object, if a MultiKey without a server_id is supplied to storage, the storage system will auto-assign a server ID to the new object. For all other storage requests (i.e. those not creating new objects), clients may omit server_id (as long as they supply another key). Instead of server ids, clients can specify string based client_assigned_perm_id keys. Mail message drafts are a prime example of these kinds of objects. Each time a user saves a new version of a draft, the storage system needs to create a new object with the updated draft content and needs to delete the object containing the old content. The new object gets a new SERVER_ID but should get the same CLIENT_ASSIGNED_PERM_ID as the now-deleted object containing the old content. Carrying forward the perm ID allows it to be used to consistently refer to the same logical object across revisions. These perm IDs save sync clients from having to deal with changing object IDs. For example, assume there\'s a mail message in storage with SERVER_ID = 123 and CLIENT_ASSIGNED_PERM_ID = "foo". The following are all valid ways of addressing the object using MultiKeys: 1) MultiKey { server_id = 123 } 2) MultiKey { server_id = 123, client_assigned_perm_id = "foo" } 3) MultiKey { client_assigned_perm_id = "foo" } Multikeys are never serialized in the storage. The individual keys are extracted and processed separately. Both the integer ids as well as string ids are indexed for efficient retrieval using the same fields in the backend. See go/tingle-multikeys for more information on background and motivation.',
    required: [],
  })
  .openapi('MultiKey')

const AttributeRemovedSchema = z
  .object({
    attributeId: z.string().exactOptional(),
    messageKeys: z.array(MultiKeySchema).exactOptional(),
  })
  .openapi({
    description: 'An attribute was deleted from some (subset of the) messages in this thread.',
    required: [],
  })
  .openapi('AttributeRemoved')

const AttributeSetSchema = z
  .object({
    attributeId: z.string().exactOptional(),
    attributeValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The serialized attribute_value as persisted in the storage layer. The application is responsible for deserializing it to an Attribute.Value if appropriate.',
      }),
    messageKeys: z.array(MultiKeySchema).exactOptional(),
  })
  .openapi({
    description: 'An attribute was added to some (subset of the) messages in this thread.',
    required: [],
  })
  .openapi('AttributeSet')

const AttributesSchema = z
  .object({ attribute: z.array(AttributeSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Attributes')

const AuditLoggingSettingsSchema = z
  .object({
    logAdminReadActions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether audit logging is on/off for admin activity read APIs i.e. Get/List DataSources, Get/List SearchApplications etc.',
      }),
    logDataReadActions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether audit logging is on/off for data access read APIs i.e. ListItems, GetItem etc.',
      }),
    logDataWriteActions: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether audit logging is on/off for data access write APIs i.e. IndexItem etc.',
      }),
    project: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the GCP Project to store audit logs. Cloud audit logging will be enabled after project_name has been updated through CustomerService. Format: projects/{project_id}',
      }),
  })
  .openapi({ description: 'Represents the settings for Cloud audit logging', required: [] })
  .openapi('AuditLoggingSettings')

const BotResponseSchema = z
  .object({
    botId: UserIdSchema.exactOptional(),
    requiredAction: z
      .enum(['UNKNOWN_SETUP_TYPE', 'CONFIGURATION', 'AUTHENTICATION'])
      .exactOptional(),
    responseType: z
      .enum([
        'UNKNOWN_RESPONSE_TYPE',
        'ERROR',
        'SETUP_REQUIRED',
        'DISABLED_BY_ADMIN',
        'DISABLED_BY_DEVELOPER',
        'PRIVATE',
        'APP_SUGGESTION',
      ])
      .exactOptional(),
    setupUrl: z.string().exactOptional().openapi({ description: 'URL for setting up bot.' }),
  })
  .openapi({
    description:
      'Information about a bot response, branched from shared/bot_response.proto without frontend User proto as we never store it.',
    required: [],
  })
  .openapi('BotResponse')

const CheckAccessResponseSchema = z
  .object({
    hasAccess: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Returns true if principal has access. Returns false otherwise.' }),
  })
  .openapi({ required: [] })
  .openapi('CheckAccessResponse')

const SessionContextSchema: z.ZodType<SessionContextType> = z
  .lazy(() =>
    z
      .object({
        authTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Time at which this activity's session was authenticated, in seconds since the epoch.",
          }),
        delegateUserId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Gaia ID of the authenticated user when delegate access is active. In such sessions the main gaia ID is that of the delegator, i.e. the account being accessed.',
          }),
        dusi: z
          .string()
          .exactOptional()
          .openapi({ description: 'Device User Session ID, see go/dusi.' }),
        imapSessionContext: ImapSessionContextSchema.exactOptional().openapi({
          description: 'Imap session context for Bond/Gmail integration',
        }),
        oauthLoginId: z.int32().exactOptional().openapi({ description: 'OAuth login ID.' }),
        oauthProjectId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The devconsole project ID of the developer who authenticated with OAuth.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SessionContext')

const ClientContextSchema = z
  .object({
    clientOperationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The client operation to which this history record belongs. The notion of a client operation is provided to keep track of client operations which might span multiple transactions in the lower level.',
      }),
    clientType: z
      .string()
      .exactOptional()
      .openapi({ description: 'E.g. "pinto", "imap", "bigtop", "upload"' }),
    sessionContext: SessionContextSchema.exactOptional().openapi({
      description:
        'Contains information about the session which created this history record. This will be empty if the history record was generated by an internal request.',
    }),
    userIp: z
      .string()
      .exactOptional()
      .openapi({ description: "Textual representation of the user's IP address, if available." }),
  })
  .openapi({
    description:
      'Represents the context of the client on behalf of which a HistoryRecord is produced. The ClientContext message can be used to hold context about the service client (e.g. the internal server making fusebox requests) or the user client (e.g. the IP address of the end user).',
    required: [],
  })
  .openapi('ClientContext')

const ClusterInfoSchema = z
  .object({
    clusterId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'IDs of the highest priority clusters to which the thread belongs to. If this field is not present, the thread does not belong to any cluster and would be shown in the inbox, unclustered.',
      }),
    throttled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the thread belongs to a grouped cluster and all of those clusters are throttled, then this field is set to true.',
      }),
  })
  .openapi({
    description:
      'ClusterInfo contains clustering related information for a particular thread that would be sent as part of the conversation view. Today, this information would be used by iOS notification server to identify whether the thread belongs to a cluster. If the thread belongs to a grouped cluster, it would identify whether the cluster is throttled.',
    required: [],
  })
  .openapi('ClusterInfo')

const CommunalLabelTagSchema = z
  .object({
    creatorUserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Gaia ID of the user who added the tag, if any. Not present for any tags automatically created by server-side processing.',
      }),
    labelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string ID representing the label. Possible ID values are documented at go/chat-labels-howto:ids. Example: "^*t_p" for "Pinned".',
      }),
  })
  .openapi({
    description:
      'An individual instance (or "tag") of a label configured as a communal type that\'s associated with a message.',
    required: [],
  })
  .openapi('CommunalLabelTag')

const ContentReportJustificationSchema = z
  .object({
    userJustification: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. User-generated free-text justification for the content report.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ContentReportJustification')

const ContentReportSchema = z
  .object({
    reportCreateTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time at which the report is generated. Always populated when it is in a response.',
      }),
    reportJustification: ContentReportJustificationSchema.exactOptional().openapi({
      description: 'Additional user-provided justification on the report. Optional.',
    }),
    reportType: AppsDynamiteSharedContentReportTypeSchema.exactOptional().openapi({
      description: 'Type of the report. Always populated when it is in a response.',
    }),
    reporterUserId: UserIdSchema.exactOptional().openapi({
      description: 'User ID of the reporter. Always populated when it is in a response.',
    }),
    revisionCreateTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Create timestamp of the revisions of the message when it's reported. Always populated when it is in a response.",
      }),
  })
  .openapi({ required: [] })
  .openapi('ContentReport')

const ContentReportSummarySchema = z
  .object({
    numberReports: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of reports attached to this (revision of) message.' }),
    numberReportsAllRevisions: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Totoal number of reports attached to all revisions of this message (i.e. since creation). Set only when the request asks for it.',
      }),
  })
  .openapi({
    description:
      'Summarized info of content reports. Usually less expensive to fetch than to fetch all detailed reports. Set only when the request asks for it.',
    required: [],
  })
  .openapi('ContentReportSummary')

const ContextAttributeSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the attribute. It should not be empty. The maximum length is 32 characters. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The name will be normalized (lower-cased) before being matched.',
      }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Text values of the attribute. The maximum number of elements is 10. The maximum length of an element in the array is 32 characters. The value will be normalized (lower-cased) before being matched.',
      }),
  })
  .openapi({
    description:
      'A named attribute associated with an item which can be used for influencing the ranking of the item based on the context in the request.',
    required: [],
  })
  .openapi('ContextAttribute')

const ItemCountByStatusSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of items matching the status code.' }),
    indexedItemsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of items matching the status code for which billing is done. This excludes virtual container items from the total count. This count would not be applicable for items with ERROR or NEW_ITEM status code.',
      }),
    statusCode: z
      .enum(['CODE_UNSPECIFIED', 'ERROR', 'MODIFIED', 'NEW_ITEM', 'ACCEPTED'])
      .exactOptional()
      .openapi({ description: 'Status of the items.' }),
  })
  .openapi({ required: [] })
  .openapi('ItemCountByStatus')

const CustomerIndexStatsSchema = z
  .object({
    date: DateSchema.exactOptional().openapi({
      description: 'The date for which statistics were calculated.',
    }),
    itemCountByStatus: z
      .array(ItemCountByStatusSchema)
      .exactOptional()
      .openapi({ description: 'Number of items aggregrated by status code.' }),
  })
  .openapi({
    description: 'Aggregation of items by status code as of the specified date.',
    required: [],
  })
  .openapi('CustomerIndexStats')

const QueryCountByStatusSchema = z
  .object({
    count: z.string().exactOptional(),
    statusCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'This represents the http status code.' }),
  })
  .openapi({ required: [] })
  .openapi('QueryCountByStatus')

const CustomerQueryStatsSchema = z
  .object({
    date: DateSchema.exactOptional().openapi({
      description:
        'The date for which query stats were calculated. Stats calculated on the next day close to midnight are returned.',
    }),
    queryCountByStatus: z.array(QueryCountByStatusSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomerQueryStats')

const CustomerSearchApplicationStatsSchema = z
  .object({
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of search applications for the date.' }),
    date: DateSchema.exactOptional().openapi({
      description: 'The date for which search application stats were calculated.',
    }),
  })
  .openapi({
    description: 'Search application stats for a customer for the given date.',
    required: [],
  })
  .openapi('CustomerSearchApplicationStats')

const CustomerSessionStatsSchema = z
  .object({
    date: DateSchema.exactOptional().openapi({
      description:
        'The date for which session stats were calculated. Stats are calculated on the following day, close to midnight PST, and then returned.',
    }),
    searchSessionsCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of search sessions on the day' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerSessionStats')

const VPCSettingsSchema = z
  .object({
    project: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the GCP Project to be used for VPC SC policy check. VPC security settings on this project will be honored for Cloud Search APIs after project_name has been updated through CustomerService. Format: projects/{project_id}',
      }),
  })
  .openapi({ required: [] })
  .openapi('VPCSettings')

const CustomerSettingsSchema = z
  .object({
    auditLoggingSettings: AuditLoggingSettingsSchema.exactOptional().openapi({
      description:
        'Audit Logging settings for the customer. If update_mask is empty then this field will be updated based on UpdateCustomerSettings request.',
    }),
    vpcSettings: VPCSettingsSchema.exactOptional().openapi({
      description:
        'VPC SC settings for the customer. If update_mask is empty then this field will be updated based on UpdateCustomerSettings request.',
    }),
  })
  .openapi({ description: 'Represents settings at a customer level.', required: [] })
  .openapi('CustomerSettings')

const CustomerUserStatsSchema = z
  .object({
    date: DateSchema.exactOptional().openapi({
      description:
        'The date for which session stats were calculated. Stats calculated on the next day close to midnight are returned.',
    }),
    oneDayActiveUsersCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of unique active users in the past one day' }),
    sevenDaysActiveUsersCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of unique active users in the past seven days' }),
    thirtyDaysActiveUsersCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of unique active users in the past thirty days' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerUserStats')

const DataSourceSchema = z
  .object({
    disableModifications: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, sets the datasource to read-only mode. In read-only mode, the Indexing API rejects any requests to index or delete items in this source. Enabling read-only mode does not stop the processing of previously accepted data.',
      }),
    disableServing: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Disable serving any search or assist results.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Display name of the datasource The maximum length is 300 characters.',
      }),
    indexingServiceAccounts: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of service accounts that have indexing access.' }),
    itemsVisibility: z
      .array(GSuitePrincipalSchema)
      .exactOptional()
      .openapi({
        description:
          'This field restricts visibility to items at the datasource level. Items within the datasource are restricted to the union of users and groups included in this field. Note that, this does not ensure access to a specific item, as users need to have ACL permissions on the contained items. This ensures a high level access on the entire datasource, and that the individual items are not shared outside this visibility.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource.',
      }),
    operationIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'IDs of the Long Running Operations (LROs) currently running for this schema.',
      }),
    returnThumbnailUrls: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Can a user request to get thumbnail URI for Items indexed in this data source.',
      }),
    shortName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A short name or alias for the source. This value will be used to match the 'source' operator. For example, if the short name is *<value>* then queries like *source:<value>* will only return results for this source. The value must be unique across all datasources. The value must only contain alphanumeric characters (a-zA-Z0-9). The value cannot start with 'google' and cannot be one of the following: mail, gmail, docs, drive, groups, sites, calendar, hangouts, gplus, keep, people, teams. Its maximum length is 32 characters.",
      }),
  })
  .openapi({
    description:
      'Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.',
    required: [],
  })
  .openapi('DataSource')

const DataSourceIndexStatsSchema = z
  .object({
    date: DateSchema.exactOptional().openapi({
      description:
        'The date for which index stats were calculated. If the date of request is not the current date then stats calculated on the next day are returned. Stats are calculated close to mid night in this case. If date of request is current date, then real time stats are returned.',
    }),
    itemCountByStatus: z
      .array(ItemCountByStatusSchema)
      .exactOptional()
      .openapi({ description: 'Number of items aggregrated by status code.' }),
  })
  .openapi({
    description: 'Aggregation of items by status code as of the specified date.',
    required: [],
  })
  .openapi('DataSourceIndexStats')

const FilterOptionsSchema = z
  .object({
    filter: FilterSchema.exactOptional().openapi({
      description: 'Generic filter to restrict the search, such as `lang:en`, `site:xyz`.',
    }),
    objectType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If object_type is set, only objects of that type are returned. This should correspond to the name of the object that was registered within the definition of schema. The maximum length is 256 characters.',
      }),
  })
  .openapi({ description: 'Filter options to be applied on query.', required: [] })
  .openapi('FilterOptions')

const DataSourceRestrictionSchema = z
  .object({
    filterOptions: z
      .array(FilterOptionsSchema)
      .exactOptional()
      .openapi({
        description:
          'Filter options restricting the results. If multiple filters are present, they are grouped by object type before joining. Filters with the same object type are joined conjunctively, then the resulting expressions are joined disjunctively. The maximum number of elements is 20. NOTE: Suggest API supports only few filters at the moment: "objecttype", "type" and "mimetype". For now, schema specific filters cannot be used to filter suggestions.',
      }),
    source: SourceSchema.exactOptional().openapi({ description: 'The source of restriction.' }),
  })
  .openapi({ description: 'Restriction on Datasource.', required: [] })
  .openapi('DataSourceRestriction')

const DebugOptionsSchema = z
  .object({
    enableDebugging: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
      }),
  })
  .openapi({
    description: 'Shared request debug options for all cloudsearch RPC methods.',
    required: [],
  })
  .openapi('DebugOptions')

const DeleteQueueItemsRequestSchema = z
  .object({
    connectorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}',
      }),
    debugOptions: DebugOptionsSchema.exactOptional().openapi({
      description: 'Common debug options.',
    }),
    queue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of a queue to delete items from.' }),
  })
  .openapi({ required: [] })
  .openapi('DeleteQueueItemsRequest')

const DisplayedPropertySchema = z
  .object({
    propertyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the top-level property as defined in a property definition for the object. If the name is not a defined property in the schema, an error is given when attempting to update the schema.',
      }),
  })
  .openapi({
    description:
      'A reference to a top-level property within the object that should be displayed in search results. The values of the chosen properties is displayed in the search results along with the display label for that property if one is specified. If a display label is not specified, only the values is shown.',
    required: [],
  })
  .openapi('DisplayedProperty')

const DriveFollowUpRestrictSchema = z
  .object({
    type: z.enum(['UNSPECIFIED', 'FOLLOWUP_SUGGESTIONS', 'FOLLOWUP_ACTION_ITEMS']).exactOptional(),
  })
  .openapi({
    description: 'Drive follow-up search restricts (e.g. "followup:suggestions").',
    required: [],
  })
  .openapi('DriveFollowUpRestrict')

const DriveLocationRestrictSchema = z
  .object({ type: z.enum(['UNSPECIFIED', 'TRASHED', 'STARRED']).exactOptional() })
  .openapi({ description: 'Drive location search restricts (e.g. "is:starred").', required: [] })
  .openapi('DriveLocationRestrict')

const DriveMimeTypeRestrictSchema = z
  .object({
    type: z
      .enum([
        'UNSPECIFIED',
        'PDF',
        'DOCUMENT',
        'PRESENTATION',
        'SPREADSHEET',
        'FORM',
        'DRAWING',
        'SCRIPT',
        'MAP',
        'IMAGE',
        'AUDIO',
        'VIDEO',
        'FOLDER',
        'ARCHIVE',
        'SITE',
      ])
      .exactOptional(),
  })
  .openapi({ description: 'Drive mime-type search restricts (e.g. "type:pdf").', required: [] })
  .openapi('DriveMimeTypeRestrict')

const DriveTimeSpanRestrictSchema = z
  .object({
    type: z
      .enum(['UNSPECIFIED', 'TODAY', 'YESTERDAY', 'LAST_7_DAYS', 'LAST_30_DAYS', 'LAST_90_DAYS'])
      .exactOptional(),
  })
  .openapi({
    description: 'The time span search restrict (e.g. "after:2017-09-11 before:2017-09-12").',
    required: [],
  })
  .openapi('DriveTimeSpanRestrict')

const DynamiteMessagesScoringInfoSchema = z
  .object({
    commonContactCount: z.string().exactOptional(),
    commonCountToContactListCountRatio: z.float64().exactOptional(),
    commonCountToMembershipCountRatio: z.float64().exactOptional(),
    creatorGaiaId: z.string().exactOptional(),
    creatorInSearcherContactList: z.boolean().exactOptional(),
    crowdingMultiplier: z.float64().exactOptional(),
    dasContactCount: z.string().exactOptional(),
    finalScore: z.float64().exactOptional(),
    freshnessScore: z.float64().exactOptional(),
    joinedSpaceAffinityScore: z.float64().exactOptional(),
    lastReadTimestampAgeInDays: z.float64().exactOptional(),
    messageAgeInDays: z.float64().exactOptional(),
    messageSenderAffinityScore: z.float64().exactOptional(),
    spaceId: z.string().exactOptional(),
    spaceMembershipCount: z.string().exactOptional(),
    topicalityScore: z.float64().exactOptional(),
    unjoinedSpaceAffinityScore: z.float64().exactOptional(),
  })
  .openapi({
    description:
      'This is the proto for holding message level scoring information. This data is used for logging in query-api server and for testing purposes.',
    required: [],
  })
  .openapi('DynamiteMessagesScoringInfo')

const DynamiteSpacesScoringInfoSchema = z
  .object({
    affinityScore: z.float64().exactOptional(),
    commonContactCountAffinityScore: z.float64().exactOptional(),
    contactsIntersectionCount: z.float64().exactOptional(),
    finalScore: z.float64().exactOptional(),
    freshnessScore: z.float64().exactOptional(),
    joinedSpacesAffinityScore: z.float64().exactOptional(),
    lastMessagePostedTimestampSecs: z.string().exactOptional(),
    lastReadTimestampSecs: z.string().exactOptional(),
    memberCountScore: z.float64().exactOptional(),
    memberMetadataCount: z.float64().exactOptional(),
    messageScore: z.float64().exactOptional(),
    numAucContacts: z.string().exactOptional(),
    smallContactListAffinityScore: z.float64().exactOptional(),
    smallUnjoinedSpacesAffinityScore: z.float64().exactOptional(),
    spaceAgeInDays: z.float64().exactOptional(),
    spaceCreationTimestampSecs: z.string().exactOptional(),
    topicalityScore: z.float64().exactOptional(),
  })
  .openapi({
    description:
      'This is the proto for holding space level scoring information. This data is used for logging in query-api server and for testing purposes.',
    required: [],
  })
  .openapi('DynamiteSpacesScoringInfo')

const ErrorMessageSchema = z
  .object({ errorMessage: z.string().exactOptional(), source: SourceSchema.exactOptional() })
  .openapi({ description: 'Error message per source response.', required: [] })
  .openapi('ErrorMessage')

const ErrorInfoSchema = z
  .object({ errorMessages: z.array(ErrorMessageSchema).exactOptional() })
  .openapi({ description: 'Error information about the response.', required: [] })
  .openapi('ErrorInfo')

const FacetBucketSchema = z
  .object({
    count: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of results that match the bucket value. Counts are only returned for searches when count accuracy is ensured. Cloud Search does not guarantee facet counts for any query and facet counts might be present only intermittently, even for identical queries. Do not build dependencies on facet count existence; instead use facet ount percentages which are always returned.',
      }),
    filter: FilterSchema.exactOptional().openapi({
      description:
        'Filter to be passed in the search request if the corresponding bucket is selected.',
    }),
    percentage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Percent of results that match the bucket value. The returned value is between (0-100], and is rounded down to an integer if fractional. If the value is not explicitly returned, it represents a percentage value that rounds to 0. Percentages are returned for all searches, but are an estimate. Because percentages are always returned, you should render percentages instead of counts.',
      }),
    value: ValueSchema.exactOptional(),
  })
  .openapi({
    description:
      'A bucket in a facet is the basic unit of operation. A bucket can comprise either a single value OR a contiguous range of values, depending on the type of the field bucketed. FacetBucket is currently used only for returning the response object.',
    required: [],
  })
  .openapi('FacetBucket')

const FacetOptionsSchema = z
  .object({
    integerFacetingOptions: IntegerFacetingOptionsSchema.exactOptional().openapi({
      description:
        'If set, describes integer faceting options for the given integer property. The corresponding integer property in the schema should be marked isFacetable. The number of buckets returned would be minimum of this and num_facet_buckets.',
    }),
    numFacetBuckets: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of facet buckets that should be returned for this facet. Defaults to 10. Maximum value is 100.',
      }),
    objectType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If object_type is set, only those objects of that type will be used to compute facets. If empty, then all objects will be used to compute facets.',
      }),
    operatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions',
      }),
    sourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Source name to facet on. Format: datasources/{source_id} If empty, all data sources will be used.',
      }),
  })
  .openapi({
    description:
      'Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination.',
    required: [],
  })
  .openapi('FacetOptions')

const FacetResultSchema = z
  .object({
    buckets: z
      .array(FacetBucketSchema)
      .exactOptional()
      .openapi({
        description:
          'FacetBuckets for values in response containing at least a single result with the corresponding filter.',
      }),
    objectType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object type for which facet results are returned. Can be empty.' }),
    operatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the operator chosen for faceting. @see cloudsearch.SchemaPropertyOptions',
      }),
    sourceName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Source name for which facet results are returned. Will not be empty.',
      }),
  })
  .openapi({ description: 'Source specific facet response', required: [] })
  .openapi('FacetResult')

const FieldViolationSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the error.' }),
    field: z.string().exactOptional().openapi({ description: 'Path of field with violation.' }),
  })
  .openapi({ required: [] })
  .openapi('FieldViolation')

const FilterCreatedSchema = z
  .object({})
  .openapi({ description: 'A filter was created.' })
  .openapi('FilterCreated')

const FilterDeletedSchema = z
  .object({})
  .openapi({ description: 'A filter was deleted.' })
  .openapi('FilterDeleted')

const FilterUpdateSchema = z
  .object({
    filterCreated: FilterCreatedSchema.exactOptional(),
    filterDeleted: FilterDeletedSchema.exactOptional(),
    filterId: z.string().exactOptional(),
  })
  .openapi({
    description:
      'HistoryRecord for changes associated with a filter, namely: FILTER_CREATED FILTER_DELETED',
    required: [],
  })
  .openapi('FilterUpdate')

const ImapsyncFolderAttributeFolderMessageFlagsSchema = z
  .object({
    flagged: z.boolean().exactOptional().openapi({ description: 'Flagged state of the message.' }),
    seen: z.boolean().exactOptional().openapi({ description: 'Seen state of the message.' }),
  })
  .openapi({ required: [] })
  .openapi('ImapsyncFolderAttributeFolderMessageFlags')

const ImapsyncFolderAttributeFolderMessageSchema = z
  .object({
    flags: ImapsyncFolderAttributeFolderMessageFlagsSchema.exactOptional().openapi({
      description: 'Flags of the message. Represents unseen and flagged state.',
    }),
    uid: z.string().exactOptional().openapi({ description: 'UID of the message.' }),
  })
  .openapi({ required: [] })
  .openapi('ImapsyncFolderAttributeFolderMessage')

const FolderSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Folder mapping id.' }),
    message: z
      .array(ImapsyncFolderAttributeFolderMessageSchema)
      .exactOptional()
      .openapi({ description: 'One for each copy of the message in the IMAP folder.' }),
  })
  .openapi({ required: [] })
  .openapi('Folder')

const FolderAttributeSchema = z
  .object({
    folder: z
      .array(FolderSchema)
      .exactOptional()
      .openapi({ description: 'List of all IMAP folders where the message presents.' }),
  })
  .openapi({ description: 'This is the content of //imapsync/folder attribute.', required: [] })
  .openapi('FolderAttribute')

const FreshnessOptionsSchema = z
  .object({
    freshnessDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The duration after which an object should be considered stale. The default value is 180 days (in seconds).',
      }),
    freshnessProperty: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This property indicates the freshness level of the object in the index. If set, this property must be a top-level property within the property definitions and it must be a timestamp type or date type. Otherwise, the Indexing API uses updateTime as the freshness indicator. The maximum length is 256 characters. When a property is used to calculate freshness, the value defaults to 2 years from the current time.',
      }),
  })
  .openapi({
    description:
      'Indicates which freshness property to use when adjusting search ranking for an item. Fresher, more recent dates indicate higher quality. Use the freshness option property that best works with your data. For fileshare documents, last modified time is most relevant. For calendar event data, the time when the event occurs is a more relevant freshness indicator. In this way, calendar events that occur closer to the time of the search query are considered higher quality and ranked accordingly.',
    required: [],
  })
  .openapi('FreshnessOptions')

const ImapUidsReassignSchema = z
  .object({
    labelId: z.string().exactOptional().openapi({ description: 'Label' }),
    messageId: z.array(z.string()).exactOptional().openapi({ description: 'The message Ids' }),
  })
  .openapi({ required: [] })
  .openapi('ImapUidsReassign')

const ImapUpdateSchema = z
  .object({ imapUidsReassign: ImapUidsReassignSchema.exactOptional() })
  .openapi({
    description: 'HistoryRecord for changes associated with IMAP, namely: IMAP_UIDS_REASSIGN',
    required: [],
  })
  .openapi('ImapUpdate')

const LabelCreatedSchema = z
  .object({})
  .openapi({ description: 'A label was created.' })
  .openapi('LabelCreated')

const LabelDeletedSchema = z
  .object({})
  .openapi({ description: 'A label was deleted.' })
  .openapi('LabelDeleted')

const LabelRenamedSchema = z
  .object({ oldCanonicalName: z.string().exactOptional() })
  .openapi({ description: 'A label was renamed.', required: [] })
  .openapi('LabelRenamed')

const LabelUpdatedSchema = z
  .object({})
  .openapi({ description: 'A label pref was updated outside of a rename, create, or delete.' })
  .openapi('LabelUpdated')

const LabelUpdateSchema = z
  .object({
    canonicalName: z.string().exactOptional(),
    labelCreated: LabelCreatedSchema.exactOptional(),
    labelDeleted: LabelDeletedSchema.exactOptional(),
    labelId: z.string().exactOptional(),
    labelRenamed: LabelRenamedSchema.exactOptional(),
    labelUpdated: LabelUpdatedSchema.exactOptional(),
    syncId: z.uint32().exactOptional(),
  })
  .openapi({
    description:
      'HistoryRecord for changes associated with a label, namely: LABEL_CREATED LABEL_DELETED LABEL_RENAMED LABEL_UPDATED',
    required: [],
  })
  .openapi('LabelUpdate')

const FuseboxPrefUpdatePreStateSchema = z
  .object({ value: z.string().exactOptional() })
  .openapi({
    description: 'If the Value field is not set this means the pref did not exist.',
    required: [],
  })
  .openapi('FuseboxPrefUpdatePreState')

const PrefDeletedSchema = z
  .object({})
  .openapi({ description: 'PREF_DELETED' })
  .openapi('PrefDeleted')

const PrefWrittenSchema = z
  .object({ value: z.string().exactOptional() })
  .openapi({ description: 'PREF_WRITTEN', required: [] })
  .openapi('PrefWritten')

const PrefUpdateSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the affected preference.' }),
    preState: FuseboxPrefUpdatePreStateSchema.exactOptional(),
    prefDeleted: PrefDeletedSchema.exactOptional(),
    prefWritten: PrefWrittenSchema.exactOptional(),
  })
  .openapi({
    description:
      'HistoryRecord for changes associated with prefs, namely: PREF_WRITTEN PREF_DELETED',
    required: [],
  })
  .openapi('PrefUpdate')

const LabelAddedSchema = z
  .object({
    labelId: z.string().exactOptional(),
    labelName: z.string().exactOptional(),
    messageKeys: z.array(MultiKeySchema).exactOptional(),
    syncId: z.uint32().exactOptional(),
  })
  .openapi({
    description: 'A label was added to some (subset of the) messages in this thread.',
    required: [],
  })
  .openapi('LabelAdded')

const LabelRemovedSchema = z
  .object({
    labelId: z.string().exactOptional(),
    labelName: z.string().exactOptional(),
    messageKeys: z.array(MultiKeySchema).exactOptional(),
    syncId: z.uint32().exactOptional(),
  })
  .openapi({
    description: 'A label was removed from some (subset of the) messages in this thread.',
    required: [],
  })
  .openapi('LabelRemoved')

const MessageAddedSchema = z
  .object({
    attributeIds: z.array(z.string()).exactOptional(),
    labelIds: z.array(z.string()).exactOptional(),
    messageKey: MultiKeySchema.exactOptional(),
    syncIds: z
      .array(z.uint32())
      .exactOptional()
      .openapi({ description: 'Note that there can be fewer sync ids than label ids.' }),
  })
  .openapi({ description: 'A message was added. Specifying id and initial labels.', required: [] })
  .openapi('MessageAdded')

const ImapSyncDeleteSchema = z
  .object({
    mappings: FolderAttributeSchema.exactOptional().openapi({
      description: 'Contains the value of //imapsync/folder attribute of deleted message.',
    }),
    msgId: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Message delete history record extension that exports //imapsync/folder attribute of deleted messages which have ^is label.',
    required: [],
  })
  .openapi('ImapSyncDelete')

const WonderMessageMappingSchema = z
  .object({
    wonderCardMessageId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of wonder card (client-generated) message IDs generated based on the original message.',
      }),
  })
  .openapi({
    description:
      'Card mapping attached to original message as an attribute stored at /wonder/message_mapping/{vertical} Next ID: 2',
    required: [],
  })
  .openapi('WonderMessageMapping')

const WonderCardDeleteSchema = z
  .object({
    messageMappings: z
      .record(z.string(), WonderMessageMappingSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains <{@code WonderCardType} enum value, value of /wonder/message_mapping/{vertical} attribute of deleted message> pairs.',
      }),
    msgId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Message ID of the original deleted message' }),
  })
  .openapi({
    description:
      'Message delete history record extension that exports /wonder/message_mapping/{vertical} attribute of deleted messages which have any smartmail label (eg. ^cob_sm_invoice). go/how-dd-card-deletion',
    required: [],
  })
  .openapi('WonderCardDelete')

const MessageDeletedSchema = z
  .object({
    imapSyncMappings: z
      .array(ImapSyncDeleteSchema)
      .exactOptional()
      .openapi({
        description:
          "Value of coproc's message delete history record extension that exports /imapsync/folder attribute of deleted messages which have ^is label.",
      }),
    messageKeys: z.array(MultiKeySchema).exactOptional(),
    wonderCardMappings: z
      .array(WonderCardDeleteSchema)
      .exactOptional()
      .openapi({
        description:
          "Value of coproc's message delete history record extension that exports /wonder/message_mapping/{vertical} attribute of deleted messages which have smartmail label (eg. ^cob_sm_invoice, etc).",
      }),
  })
  .openapi({
    description: 'Some (subset of the) messages in this thread were deleted.',
    required: [],
  })
  .openapi('MessageDeleted')

const PreStateSchema = z
  .object({
    labelIds: z.array(z.string()).exactOptional(),
    messageKey: MultiKeySchema.exactOptional(),
    syncIds: z
      .array(z.uint32())
      .exactOptional()
      .openapi({ description: 'Note that there can be fewer sync ids than label ids.' }),
    threadKey: MultiKeySchema.exactOptional(),
  })
  .openapi({
    description:
      'State of the thread previous to the update. This really just describes the label state of all messages before the update.',
    required: [],
  })
  .openapi('PreState')

const ThreadKeySetSchema = z
  .object({
    messageKeys: z
      .array(MultiKeySchema)
      .exactOptional()
      .openapi({ description: 'Messages on which the thread_key was changed.' }),
    newThreadKey: MultiKeySchema.exactOptional().openapi({
      description: 'The new thread_key for this thread',
    }),
  })
  .openapi({
    description: 'The ThreadKey was set on some (subset of the) messages in this thread.',
    required: [],
  })
  .openapi('ThreadKeySet')

const TopicStateSchema = z
  .object({
    labelIdMessageCount: z
      .record(z.string(), z.int32())
      .exactOptional()
      .openapi({
        description:
          'Map of label => count of topic constituent messages with label These only contain counts of labels that are relevant for topic normalization/denormalization. Eg. If a topic thread has 5 constituents, 4 of which are in inbox, this will contain ^i => 4. Some labels of interest are archive, inbox, trash, spam, etc.',
      }),
    numConstituents: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of constituents for this entity.' }),
  })
  .openapi({ description: 'State of an topic thread as maintained within Tingle.', required: [] })
  .openapi('TopicState')

const TopicStateUpdateSchema = z
  .object({ topicState: TopicStateSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('TopicStateUpdate')

const ThreadUpdateSchema = z
  .object({
    attributeRemoved: AttributeRemovedSchema.exactOptional(),
    attributeSet: AttributeSetSchema.exactOptional(),
    labelAdded: LabelAddedSchema.exactOptional(),
    labelRemoved: LabelRemovedSchema.exactOptional(),
    lastHistoryRecordId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates the record id of the last operation that modified this thread.',
      }),
    messageAdded: MessageAddedSchema.exactOptional(),
    messageDeleted: MessageDeletedSchema.exactOptional(),
    originalThreadKey: MultiKeySchema.exactOptional().openapi({
      description:
        'The first non-empty thread-key on any message in the thread (including deleted messages). This field has been introduced to maintain backward compatibility for clients that are not subthread aware.',
    }),
    preState: z
      .array(PreStateSchema)
      .exactOptional()
      .openapi({
        description:
          'The PreStates of all messages before the transaction. These are suppressed if the client requested that prestates not be included in the output of the GetHistoryRequest.',
      }),
    threadKey: MultiKeySchema.exactOptional().openapi({ description: 'Affected thread' }),
    threadKeySet: ThreadKeySetSchema.exactOptional(),
    threadLocator: z.string().exactOptional().openapi({ description: 'Thread PLID' }),
    topicStateUpdate: TopicStateUpdateSchema.exactOptional(),
  })
  .openapi({
    description:
      'HistoryRecord for changes associated with a thread, namely: MESSAGE_ADDED MESSAGE_DELETED LABEL_ADDED LABEL_REMOVED ATTRIBUTE_SET ATTRIBUTE_REMOVED THREAD_KEY_SET All label_ids refer to the (unchanging) value as defined by the Label.id field in labels.proto. In particular, it is *not* the canonical_name.',
    required: [],
  })
  .openapi('ThreadUpdate')

const TransactionContextSchema = z
  .object({
    endingRecordId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last HistoryRecord of the transaction. Note that this may correspond to a record that is filtered by Tingle (and thus not returned to the client). See http://b/9513464.',
      }),
    startingRecordId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first HistoryRecord of the transaction. Note that this may be a record of type INTERNAL.',
      }),
    writeTimestampUs: z
      .string()
      .exactOptional()
      .openapi({ description: 'The microsecond timestamp of the transaction.' }),
  })
  .openapi({
    description:
      'Storage information pertaining to the transaction with which a HistoryRecord is associated.',
    required: [],
  })
  .openapi('TransactionContext')

const TransactionDebugInfoSchema = z
  .object({})
  .openapi({
    description:
      'HistoryRecord for debug info associated with the transaction, namely: TXN_DEBUG_INFO TODO(b/143845917) This is a short-term workaround for unblocking fusebox writes migration. Clean up the code or land a long-term solution after the rollout. go/diff-to-historyrecord',
  })
  .openapi('TransactionDebugInfo')

const HistoryRecordSchema = z
  .object({
    clientContext: ClientContextSchema.exactOptional().openapi({
      description:
        'This will almost always be set, but there are corner cases in which the information is not available, and thus applications must handle its absence appropriately.',
    }),
    filterUpdate: FilterUpdateSchema.exactOptional(),
    imapUpdate: ImapUpdateSchema.exactOptional(),
    labelUpdate: LabelUpdateSchema.exactOptional(),
    prefUpdate: PrefUpdateSchema.exactOptional(),
    recordId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Each HistoryRecord has a unique id. Ids are monotonically increasing, and not necessarily contiguous.',
      }),
    threadUpdate: ThreadUpdateSchema.exactOptional(),
    transactionContext: TransactionContextSchema.exactOptional().openapi({
      description:
        'This will almost always be set, but there are corner cases in which the information is not available, and thus applications must handle its absence appropriately.',
    }),
    txnDebugInfo: TransactionDebugInfoSchema.exactOptional(),
    type: z
      .enum([
        'UNKNOWN',
        'INTERNAL',
        'MESSAGE_ADDED',
        'MESSAGE_DELETED',
        'LABEL_ADDED',
        'LABEL_REMOVED',
        'ATTRIBUTE_SET',
        'ATTRIBUTE_REMOVED',
        'THREAD_KEY_SET',
        'LABEL_CREATED',
        'LABEL_DELETED',
        'LABEL_RENAMED',
        'LABEL_UPDATED',
        'PREF_WRITTEN',
        'PREF_DELETED',
        'FILTER_CREATED',
        'FILTER_DELETED',
        'IMAP_UIDS_REASSIGN',
        'TOPIC_STATE_UPDATED',
        'TXN_DEBUG_INFO',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HistoryRecord')

const HistorySchema = z
  .object({ record: z.array(HistoryRecordSchema).exactOptional() })
  .openapi({
    description: 'The most recent history records associated with the item.',
    required: [],
  })
  .openapi('History')

const LabelsSchema = z
  .object({
    displayName: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The display name of the labels. This is populated (instead of the id) when the request fetch_spec has LABEL_DISPLAY_NAMES.',
      }),
    id: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The ids of the labels attached to the Item, e.g. "^i", "^x_1"' }),
  })
  .openapi({ required: [] })
  .openapi('Labels')

const ReferenceSchema = z
  .object({
    blobId: z.string().exactOptional(),
    contentType: z.string().exactOptional(),
    hash: z.string().exactOptional(),
    key: z.string().exactOptional().openapi({ description: 'LINT.IfChange' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'LINT.ThenChange(//depot/google3/storage/slice/production/gmail/ user_data_tables.pi)',
      }),
    size: z.string().exactOptional(),
  })
  .openapi({
    description:
      'All fields in this proto are now columns in spanner see google3/storage/slice/production/gmail/user_data_tables.pi for documentation.',
    required: [],
  })
  .openapi('Reference')

const ReferencesSchema = z
  .object({ references: z.array(ReferenceSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('References')

const MatchInfoSchema = z
  .object({
    matchingImageReferenceKey: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Reference keys for image attachments that matches search query.' }),
  })
  .openapi({ required: [] })
  .openapi('MatchInfo')

const ItemPartsSchema = z
  .object({})
  .openapi({
    description:
      'Container for type-specific extensions of an Item. This protobuf is defined in a separate file to allow types to reference/extend the message without depending on other fusebox protobufs. See items.proto.',
  })
  .openapi('ItemParts')

const JobsettedServerSpecSchema = z
  .object({
    portName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'E.g. "gateway", "stubby" etc. Leave unset to use the default unnamed port.',
      }),
    serverName: z
      .string()
      .exactOptional()
      .openapi({ description: 'E.g. "satellite-server", "bigtop-sync", etc.' }),
  })
  .openapi({
    description: 'Identifies a jobsetted server as a target for Trigger dispatch.',
    required: [],
  })
  .openapi('JobsettedServerSpec')

const MessageSetSchema = z
  .object({})
  .openapi({ description: "This is proto2's version of MessageSet." })
  .openapi('MessageSet')

const RpcOptionsSchema = z
  .object({
    requestExtensions: MessageSetSchema.exactOptional().openapi({
      description:
        "The RPC's request extensions (i.e. RPC::request_extensions(), a.k.a. the Stubby side channel) will be merged with the specified [request_extensions]. When Triggers are batched, the RPC's request extensions will be merged with all of the [request_extensions] of the Triggers in the batch. Note that merging of request extensions follows standard protocol buffer semantics; values of singular fields override previous values, and values of repeated fields are appended (In the case of Triggers, Triggers with later fire times will be merged after Triggers with earlier fire times in the same batch). It is not advised to specify extensions with repeated fields on batchable Triggers.",
    }),
  })
  .openapi({ description: 'Options for Triggers dispatched via RPC.', required: [] })
  .openapi('RpcOptions')

const TriggerActionSchema = z
  .object({
    action: z
      .enum([
        'ACTION_NONE',
        'ACTION_DELETE',
        'ACTION_CREATE_NEW_TRIGGER',
        'ACTION_MESSAGE_EXPUNGE',
        'ACTION_RETENTION_POLICY_UPDATE',
        'ACTION_UPDATE_ICEBOX_MODEL',
        'ACTION_INVOKE_CS',
        'ACTION_INVOKE_STRATUS',
        'ACTION_PDH_EXPUNGE',
        'ACTION_QUERY_RETENTION',
        'ACTION_INVOKE_JOBSETTED_PRIMARY',
        'ACTION_INVOKE_TASKS_SERVER',
        'ACTION_INVOKE_PUBLISHER',
        'ACTION_INVOKE_OBSERVER',
        'ACTION_PUSH_HISTORY_TO_PDH',
        'ACTION_INVOKE_STUBBY_DISPATCHER',
        'ACTION_PDH_BACKFILL',
        'ACTION_MESSAGE_UNDELETE',
        'ACTION_VAULT_END_USER_ACCESS',
        'ACTION_INVOKE_GROUPS',
        'ACTION_ACCOUNT_INITIALIZATION',
        'ACTION_INVOKE_OBSERVER_WIPEOUT',
        'ACTION_SERVICE_REMOVED_MESSAGE_EXPUNGE',
        'ACTION_EVERCLEAR_EXPUNGE',
        'ACTION_INVOKE_SMIME_CERTIFICATE_ISSUER',
        'ACTION_GROUPS_QUERY_RETENTION',
        'ACTION_INVOKE_SATELLITE_BACKUP',
        'ACTION_INVOKE_DEBUG_LOG',
        'ACTION_PREFERENCE_CLEANUP',
        'ACTION_CARIBOU_DATA_RETENTION',
        'ACTION_HISTORY_CLEANUP',
        'ACTION_ITEM_BULK_RELABEL',
        'ACTION_INVOKE_SATELLITE_IMAGE_PROCESSING',
        'ACTION_CARIBOU_DATA_RETENTION_DIFF',
        'ACTION_RELEVANCY_SCORE_BACKFILL',
        'ACTION_PDH_PUSH_NOTIFICATION_BACKFILL',
        'ACTION_AUTO_SAVE_DRAFT_EXPUNGE',
      ])
      .exactOptional(),
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'Clients should use extensions on the Trigger message instead.' }),
    dataInt: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TriggerAction')

const TriggerKeySchema = z
  .object({
    instanceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier to distinguish multiple Triggers of the same type (per message or per account).',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A non-empty string that identifies the type of Trigger. Triggers of the same type may be batched together. The universe of values for the type field should be finite as it is used as a stats key.',
      }),
  })
  .openapi({
    description:
      'A TriggerKey (type + instance_id) uniquely identifies a trigger within a message for a message-trigger and within an account for an account-trigger.',
    required: [],
  })
  .openapi('TriggerKey')

const TriggerSchema = z
  .object({
    actionType: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Each dispatcher should use an enum to for the actions that it supports. If a dispatcher has only one action, this does not need to be set. (It can be expanded later, defining the default behaviour as type 0.) For purposes such as batching, the type of a trigger is (dispatcher, action_type).',
      }),
    batchTimeUs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Maximum possible delay in micros that can be tolerated so triggers can be batched, which makes processing more efficient compared to firing triggers individually. Note that the actual fire time will be somewhere in the timerange interval [fire_time_us, fire_time_us + batch_time_us).',
      }),
    dispatchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Must be set for DISPATCHER_STUBBY_DISPATCHER.' }),
    dispatcher: z
      .enum([
        'DISPATCHER_COPROC',
        'DISPATCHER_JOBSETTED_PRIMARY',
        'DISPATCHER_STRATUS',
        'DISPATCHER_TASKS_SERVER',
        'DISPATCHER_STUBBY_DISPATCHER',
        'DISPATCHER_CS',
      ])
      .exactOptional()
      .openapi({ description: 'Which server should interpret action_type.' }),
    fireTimeUs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Earliest time to fire at in microseconds. The actual time that the trigger will fire will be in the timerange: [fire_time_us, fire_time_us + batch_time_us).',
      }),
    jobsettedServerSpec: JobsettedServerSpecSchema.exactOptional().openapi({
      description: 'Must be set for DISPATCHER_JOBSETTED_PRIMARY.',
    }),
    key: z.string().exactOptional().openapi({ description: 'The trigger key, if applicable.' }),
    rpcOptions: RpcOptionsSchema.exactOptional(),
    sliceFireTimeUs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The slice_fire_time_us is automatically computed and stored as part of the trigger write. It represents the exact fire time at which the trigger will be queued to fire and will satisfy fire_time_us < slice_fire_time_us <= fire_time_us + batch_time_us Triggers have an index row in the slice trigger index with the row prefix matching this time. Note that this field is internal to gmail_cp and is ignored if set by external clients when adding / updating triggers.',
      }),
    triggerAction: TriggerActionSchema.exactOptional().openapi({
      description: 'Trigger action to perform. This should always be set.',
    }),
    triggerKey: TriggerKeySchema.exactOptional().openapi({
      description:
        'The TriggerKey will uniquely determine a trigger within a given context. A context is a single message for message triggers or a single account for account triggers.',
    }),
  })
  .openapi({ required: [] })
  .openapi('Trigger')

const TriggersSchema = z
  .object({
    triggers: z
      .array(TriggerSchema)
      .exactOptional()
      .openapi({ description: 'A list of triggers.' }),
  })
  .openapi({ required: [] })
  .openapi('Triggers')

const FuseboxItemSchema = z
  .object({
    attributes: AttributesSchema.exactOptional(),
    creationTimeMicroseconds: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the Item in micro seconds.' }),
    history: HistorySchema.exactOptional(),
    itemKey: MultiKeySchema.exactOptional().openapi({
      description:
        'The key is used to refer to an item. Note that every field of the MultiKey is unique to the Item, and thus the Item can be looked up by any of the fields.',
    }),
    labels: LabelsSchema.exactOptional(),
    lastModificationTimeUs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The modification time of the Item in micro seconds. Modifications to the message include label addition, deletion, etc.',
      }),
    lockerReferences: ReferencesSchema.exactOptional().openapi({
      description: 'go/lockpicker Locker counterpart of references.',
    }),
    matchInfo: MatchInfoSchema.exactOptional(),
    parts: ItemPartsSchema.exactOptional().openapi({
      description: 'Type-specific data are represented as extensions to the ItemParts message.',
    }),
    readTs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The read timestamp at which this item was read. This is a temporary field used to check if two items streamed during dual reading were read at the same timestamp. This will be populated by Fusebox RPCs. "DO NOT USE UNLESS YOU TALK TO FUSEBOX TEAM (gmail-fusebox@)".',
      }),
    references: ReferencesSchema.exactOptional().openapi({
      description: 'References to attachments, video attachments in Youtube and Hangout messages.',
    }),
    snippet: z
      .string()
      .exactOptional()
      .openapi({ description: 'The snippet is a brief bit of text describing this item.' }),
    threadKey: MultiKeySchema.exactOptional().openapi({
      description: 'The key of the Thread with which this Item is associated.',
    }),
    threadLocator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A base64 encoded and encrypted string generated from the Gaia Id and the thread id. Used to generate the permalink for this thread, exposed from Gmail API.',
      }),
    triggers: TriggersSchema.exactOptional(),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The latest history operation id that resulted in a mutation of the item.',
      }),
  })
  .openapi({
    description:
      'The Item message is the read interface for user data (traditionally referred to as a "message", such as a mail message or a chat message, but generalized to encompass other types such as tasks) and stored in Tingle. Each Item is associated with a single Thread. An Item contains three classes of data. (1): Item "fields" are common to items of all message types (e.g. mail, chat, task, etc.) and are identified by the ItemFieldSpec.FetchType enum when fetching Items. (2): Item "attributes" represent data associated with an Item that is stored on behalf of the client but to which the fusebox and storage layers are otherwise agnostic. (3): Item "parts" are application-defined protocol buffers that affect how the Item is indexed. Item parts are referenced as extensions to the ItemParts message. By default the application specifies the index terms associated with an Item part. For performance sensitive applications, the storage layer can be modified to understand and index data types natively.',
    required: [],
  })
  .openapi('FuseboxItem')

const RankSchema = z
  .object({
    primary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The primary rank is the most significant rank member. This rank element should always be present. Items with higher primary rank are always considered of higher rank than those of lower primary rank.',
      }),
    secondary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The secondary rank may be used to rank items of identical primary rank. This rank element should always be present.',
      }),
  })
  .openapi({
    description:
      'The rank contains a tuple of numbers which may be used as a general sort order. The rank should be treated as an ordered set of numbers, where the ordering is done in descending order of the most significant rank member. For example, given the following ranks described as (primary, secondary): (1,1), (1,2), (2,2) (2,1) The descending rank-order is: (2,2) > (2,1) > (1,2) > (1,1)',
    required: [],
  })
  .openapi('Rank')

const FuseboxItemThreadMatchInfoSchema = z
  .object({
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If SearchQuery.Options.Clustering is present, the query will be treated as a cluster query, and this field may be populated with the cluster ID of the cluster to which this thread belongs, if any. The cluster ID will be a label on the message.',
      }),
    lastMatchingItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server id of the last item that matched the query. This is always set, regardless of the compute_matching_items_per_thread option. This is the value by which search results are sorted, in descending (i.e. newest first) order.',
      }),
    lastMatchingItemKey: MultiKeySchema.exactOptional().openapi({
      description:
        'The MultiKey of the last item that matched the query. This is always set, regardless of the compute_matching_items_per_thread option. This is the value by which search results are sorted, in descending (i.e. newest first) order.',
    }),
    matchingItemKey: z
      .array(MultiKeySchema)
      .exactOptional()
      .openapi({
        description:
          'If SearchQuery.Options.compute_matching_items_per_thread, this field will contain the keys of all items that matched the query, in ascending order. Note that this option requires extra computation.',
      }),
    rank: RankSchema.exactOptional().openapi({
      description:
        'The rank of this ItemThread in the result set of the query. This rank may be used to sort ItemThreads in proper order. Ranks are specific to a query, and stable for a given query at a specific time.',
    }),
  })
  .openapi({
    description:
      'In the context of a search, the MatchInfo contains information about which Items matched the query.',
    required: [],
  })
  .openapi('FuseboxItemThreadMatchInfo')

const GetCustomerIndexStatsResponseSchema = z
  .object({
    averageIndexedItemCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Average item count for the given date range for which billing is done.',
      }),
    stats: z
      .array(CustomerIndexStatsSchema)
      .exactOptional()
      .openapi({
        description: 'Summary of indexed item counts, one for each day in the requested range.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetCustomerIndexStatsResponse')

const GetCustomerQueryStatsResponseSchema = z
  .object({
    stats: z.array(CustomerQueryStatsSchema).exactOptional(),
    totalQueryCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Total successful query count (status code 200) for the given date range.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetCustomerQueryStatsResponse')

const GetCustomerSearchApplicationStatsResponseSchema = z
  .object({
    averageSearchApplicationCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Average search application count for the given date range.' }),
    stats: z
      .array(CustomerSearchApplicationStatsSchema)
      .exactOptional()
      .openapi({ description: 'Search application stats by date.' }),
  })
  .openapi({
    description: 'Response format for search application stats for a customer.',
    required: [],
  })
  .openapi('GetCustomerSearchApplicationStatsResponse')

const GetCustomerSessionStatsResponseSchema = z
  .object({ stats: z.array(CustomerSessionStatsSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('GetCustomerSessionStatsResponse')

const GetCustomerUserStatsResponseSchema = z
  .object({ stats: z.array(CustomerUserStatsSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('GetCustomerUserStatsResponse')

const GetDataSourceIndexStatsResponseSchema = z
  .object({
    averageIndexedItemCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Average item count for the given date range for which billing is done.',
      }),
    stats: z
      .array(DataSourceIndexStatsSchema)
      .exactOptional()
      .openapi({
        description: 'Summary of indexed item counts, one for each day in the requested range.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetDataSourceIndexStatsResponse')

const SearchApplicationQueryStatsSchema = z
  .object({
    date: DateSchema.exactOptional().openapi({
      description:
        'The date for which query stats were calculated. Stats calculated on the next day close to midnight are returned.',
    }),
    queryCountByStatus: z.array(QueryCountByStatusSchema).exactOptional(),
  })
  .openapi({ description: 'Search application level query stats per date', required: [] })
  .openapi('SearchApplicationQueryStats')

const GetSearchApplicationQueryStatsResponseSchema = z
  .object({
    stats: z
      .array(SearchApplicationQueryStatsSchema)
      .exactOptional()
      .openapi({ description: 'Query stats per date for a search application.' }),
    totalQueryCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Total successful query count (status code 200) for the given date range.',
      }),
  })
  .openapi({
    description:
      'Response format for getting query stats for a search application between given dates.',
    required: [],
  })
  .openapi('GetSearchApplicationQueryStatsResponse')

const SearchApplicationSessionStatsSchema = z
  .object({
    date: DateSchema.exactOptional().openapi({
      description:
        'The date for which session stats were calculated. Stats are calculated on the following day, close to midnight PST, and then returned.',
    }),
    searchSessionsCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of search sessions on the day' }),
  })
  .openapi({ required: [] })
  .openapi('SearchApplicationSessionStats')

const GetSearchApplicationSessionStatsResponseSchema = z
  .object({ stats: z.array(SearchApplicationSessionStatsSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('GetSearchApplicationSessionStatsResponse')

const SearchApplicationUserStatsSchema = z
  .object({
    date: DateSchema.exactOptional().openapi({
      description:
        'The date for which session stats were calculated. Stats calculated on the next day close to midnight are returned.',
    }),
    oneDayActiveUsersCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of unique active users in the past one day' }),
    sevenDaysActiveUsersCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of unique active users in the past seven days' }),
    thirtyDaysActiveUsersCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The count of unique active users in the past thirty days' }),
  })
  .openapi({ required: [] })
  .openapi('SearchApplicationUserStats')

const GetSearchApplicationUserStatsResponseSchema = z
  .object({ stats: z.array(SearchApplicationUserStatsSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('GetSearchApplicationUserStatsResponse')

const IdSchema = z
  .object({
    creatorUserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The User account in which the DirEntry was originally created. If name_space==GAIA, then it\'s the gaia_id of the user this id is referring to. This field should really be called the "bucket ID", not the creator ID. In some circumstances, such as copying a Google Docs file, a user can create an item in a different user\'s bucket, so it should not be relied upon for anything other than bucket location. To look up the requesting user who initially created item, use the `creator_id` DirEntry field instead.',
      }),
    localId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The local identifier for the DirEntry (local to the creator's account). local_id + app_name is guaranteed to be unique within the creator account, but not across all User accounts. The string is case sensitive. Ignore if name_space==GAIA. NB For name_space==COSMO, all local_id's should be defined in google3/java/com/google/storage/cosmo/server/api/SpecialObjectIds.java as they have a special predefined meaning. See cosmo.client.CosmoIdFactory.createObjectId(long,String) for IMPORTANT recommendations when generating IDs.",
      }),
    nameSpace: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The name space in which this id is unique (typically the application that created it). Values should be drawn from the above enum, but for experimentation, use values greater than 1000.',
      }),
  })
  .openapi({
    description:
      'Identifies a particular object, including both Users and DirEntries. This Id is unique across the entire server instance, such as the production or qa instance.',
    required: [],
  })
  .openapi('Id')

const ShareScopeSchema = z
  .object({
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If scope is DOMAIN, this field contains the dasher domain, for example "google.com".',
      }),
    scope: z
      .enum(['UNKNOWN', 'PRIVATE', 'LIMITED', 'EXTENDED', 'DASHER_DOMAIN', 'PUBLIC'])
      .exactOptional()
      .openapi({ description: 'The scope to which the content was shared.' }),
  })
  .openapi({ required: [] })
  .openapi('ShareScope')

const GoogleDocsResultInfoSchema = z
  .object({
    attachmentSha1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SHA1 hash of the object in Drive, if any.' }),
    cosmoId: IdSchema.exactOptional().openapi({
      description:
        'The storage identifier for the object in Cosmo. This field is intended to used by Stratus/Moonshine integration only. It should not be exposed externally (please refer to encrypted_id for that purpose).',
    }),
    cosmoNameSpace: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'For Cosmo objects, the Cosmo namespace the object was in. This allows downstream clients to identify whether a document was created in Writely or Kix, Presently or Punch, or whether it was uploaded from GDrive. See storage_cosmo.Id.NAME_SPACE for a list of all Cosmo name spaces.',
      }),
    encryptedId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The encrypted (user-visible) id of this object. Knowing the id is sufficient to create a canonical URL for this document.',
      }),
    mimeType: z.string().exactOptional().openapi({ description: 'The mimetype of the document.' }),
    shareScope: ShareScopeSchema.exactOptional().openapi({
      description: 'The visibility indicator in the UI will be based upon this.',
    }),
  })
  .openapi({
    description:
      'A message containing information about a specific result. This information is passed to the scorer and beyond; in particular, GWS relies on it to format the result in the UI. Split from GoogleDocsMetadata in case we later want to reuse the message.',
    required: [],
  })
  .openapi('GoogleDocsResultInfo')

const VideoInfoSchema = z
  .object({
    duration: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Duration of the video in milliseconds. This field can be absent for recently uploaded video or inaccurate sometimes.',
      }),
  })
  .openapi({ description: 'Next tag: 2', required: [] })
  .openapi('VideoInfo')

const TypeInfoSchema = z
  .object({
    videoInfo: VideoInfoSchema.exactOptional().openapi({
      description: 'Contains additional video information only if document_type is VIDEO.',
    }),
  })
  .openapi({ description: 'Next tag: 2', required: [] })
  .openapi('TypeInfo')

const GoogleDocsMetadataSchema = z
  .object({
    aclInfo: AclInfoSchema.exactOptional().openapi({
      description: 'Contains number of users and groups which can access the document.',
    }),
    documentType: z
      .enum([
        'UNKNOWN',
        'DOCUMENT',
        'PRESENTATION',
        'SPREADSHEET',
        'PDF',
        'IMAGE',
        'BINARY_BLOB',
        'FUSION_TABLE',
        'FOLDER',
        'DRAWING',
        'VIDEO',
        'FORM',
        'DRAFT_SITE',
        'DRAFT_SITE_PAGE',
        'JAM',
        'SHORTCUT',
        'SCRIPT',
      ])
      .exactOptional()
      .openapi({
        description: 'The conceptual type (presentation, document, etc.) of this document.',
      }),
    fileExtension: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The file extension of the document. NOTE: As of October 2018 this field is not backfilled for old documents.',
      }),
    lastContentModifiedTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last time this document was modified, in seconds since epoch. Only counts content modifications.',
      }),
    numSubscribers: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Contains number of subscribers for the document.' }),
    numViewers: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Size of untruncated viewers list.' }),
    resultInfo: GoogleDocsResultInfoSchema.exactOptional().openapi({
      description:
        "Additional per-result information, akin to Gmail's SingleThreadResponse. Note: GWS no longer seems to use this field, but there's still one reference to it for Scribe, so we can't remove it.",
    }),
    typeInfo: TypeInfoSchema.exactOptional().openapi({
      description: 'Contains additional information about the document depending on its type.',
    }),
  })
  .openapi({
    description:
      'The corpus specific metadata for office-type documents, from Google Docs and other sources. This message is passed to the scorer and beyond. Next tag: 9',
    required: [],
  })
  .openapi('GoogleDocsMetadata')

const IndexItemOptionsSchema = z
  .object({
    allowUnknownGsuitePrincipals: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies if the index request should allow Google Workspace principals that do not exist or are deleted.',
      }),
  })
  .openapi({ required: [] })
  .openapi('IndexItemOptions')

const PrincipalSchema: z.ZodType<PrincipalType> = z
  .lazy(() =>
    z
      .object({
        groupResourceName: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'This principal is a group identified using an external identity. The name field must specify the group resource name with this format: identitysources/{source_id}/groups/{ID}',
          }),
        gsuitePrincipal: GSuitePrincipalSchema.exactOptional().openapi({
          description: 'This principal is a Google Workspace user, group or domain.',
        }),
        userResourceName: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'This principal is a user identified using an external identity. The name field must specify the user resource name with this format: identitysources/{source_id}/users/{ID}',
          }),
      })
      .openapi({ description: 'Reference to a user, group, or domain.', required: [] }),
  )
  .openapi('Principal')

const ItemAclSchema = z
  .object({
    aclInheritanceType: z
      .enum(['NOT_APPLICABLE', 'CHILD_OVERRIDE', 'PARENT_OVERRIDE', 'BOTH_PERMIT'])
      .exactOptional()
      .openapi({
        description:
          'Sets the type of access rules to apply when an item inherits its ACL from a parent. This should always be set in tandem with the inheritAclFrom field. Also, when the inheritAclFrom field is set, this field should be set to a valid AclInheritanceType.',
      }),
    deniedReaders: z
      .array(PrincipalSchema)
      .exactOptional()
      .openapi({
        description:
          'List of principals who are explicitly denied access to the item in search results. While principals are denied access by default, use denied readers to handle exceptions and override the list allowed readers. The maximum number of elements is 100.',
      }),
    inheritAclFrom: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the item to inherit the Access Permission List (ACL) from. Note: ACL inheritance *only* provides access permissions to child items and does not define structural relationships, nor does it provide convenient ways to delete large groups of items. Deleting an ACL parent from the index only alters the access permissions of child items that reference the parent in the inheritAclFrom field. The item is still in the index, but may not visible in search results. By contrast, deletion of a container item also deletes all items that reference the container via the containerName field. The maximum length for this field is 1536 characters.',
      }),
    owners: z
      .array(PrincipalSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. List of owners for the item. This field has no bearing on document access permissions. It does, however, offer a slight ranking boosts items where the querying user is an owner. The maximum number of elements is 5.',
      }),
    readers: z
      .array(PrincipalSchema)
      .exactOptional()
      .openapi({
        description:
          'List of principals who are allowed to see the item in search results. Optional if inheriting permissions from another item or if the item is not intended to be visible, such as virtual containers. The maximum number of elements is 1000.',
      }),
  })
  .openapi({
    description:
      'Access control list information for the item. For more information see [Map ACLs](https://developers.google.com/cloud-search/docs/guides/acls).',
    required: [],
  })
  .openapi('ItemAcl')

const UploadItemRefSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the content reference. The maximum length is 2048 characters.',
      }),
  })
  .openapi({
    description:
      'Represents an upload session reference. This reference is created via upload method. This reference is valid for 30 days after its creation. Updating of item content may refer to this uploaded content via contentDataRef.',
    required: [],
  })
  .openapi('UploadItemRef')

const ItemContentSchema = z
  .object({
    contentDataRef: UploadItemRefSchema.exactOptional().openapi({
      description: 'Upload reference ID of a previously uploaded content via write method.',
    }),
    contentFormat: z.enum(['UNSPECIFIED', 'HTML', 'TEXT', 'RAW']).exactOptional(),
    hash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Hashing info calculated and provided by the API client for content. Can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.',
      }),
    inlineContent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Content that is supplied inlined within the update method. The maximum length is 102400 bytes (100 KiB).',
      }),
  })
  .openapi({
    description:
      'Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded.',
    required: [],
  })
  .openapi('ItemContent')

const InteractionSchema = z
  .object({
    interactionTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the user acted on the item. If multiple actions of the same type exist for a single user, only the most recent action is recorded.',
      }),
    principal: PrincipalSchema.exactOptional().openapi({
      description: 'The user that acted on the item.',
    }),
    type: z.enum(['UNSPECIFIED', 'VIEW', 'EDIT']).exactOptional(),
  })
  .openapi({ description: 'Represents an interaction between a user and an item.', required: [] })
  .openapi('Interaction')

const SearchQualityMetadataSchema = z
  .object({
    quality: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'An indication of the quality of the item, used to influence search quality. Value should be between 0.0 (lowest quality) and 1.0 (highest quality). The default value is 0.0.',
      }),
  })
  .openapi({ description: 'Additional search quality metadata of the item.', required: [] })
  .openapi('SearchQualityMetadata')

const ItemMetadataSchema = z
  .object({
    containerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the container for this item. Deletion of the container item leads to automatic deletion of this item. Note: ACLs are not inherited from a container item. To provide ACL inheritance for an item, use the inheritAclFrom field. The maximum length is 1536 characters.',
      }),
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code for the item, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. The maximum length is 32 characters.',
      }),
    contextAttributes: z
      .array(ContextAttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'A set of named attributes associated with the item. This can be used for influencing the ranking of the item based on the context in the request. The maximum number of elements is 10.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the item was created in the source repository.' }),
    hash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.',
      }),
    interactions: z
      .array(InteractionSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of interactions for the item. Interactions are used to improve Search quality, but are not exposed to end users. The maximum number of elements is 1000.',
      }),
    keywords: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional keywords or phrases that should match the item. Used internally for user generated content. The maximum number of elements is 100. The maximum length is 8192 characters.',
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The original mime-type of ItemContent.content in the source repository. The maximum length is 256 characters.',
      }),
    objectType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of the item. This should correspond to the name of an object definition in the schema registered for the data source. For example, if the schema for the data source contains an object definition with name 'document', then item indexing requests for objects of that type should set objectType to 'document'. The maximum length is 256 characters.",
      }),
    searchQualityMetadata: SearchQualityMetadataSchema.exactOptional().openapi({
      description: 'Additional search quality metadata of the item',
    }),
    sourceRepositoryUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Link to the source repository serving the data. Seach results apply this link to the title. Whitespace or special characters may cause Cloud Seach result links to trigger a redirect notice; to avoid this, encode the URL. The maximum length is 2048 characters.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of the item. If given, this will be the displayed title of the Search result. The maximum length is 2048 characters.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time when the item was last modified in the source repository.',
      }),
  })
  .openapi({ description: 'Available metadata fields for the item.', required: [] })
  .openapi('ItemMetadata')

const ProcessingErrorSchema = z
  .object({
    code: z
      .enum([
        'PROCESSING_ERROR_CODE_UNSPECIFIED',
        'MALFORMED_REQUEST',
        'UNSUPPORTED_CONTENT_FORMAT',
        'INDIRECT_BROKEN_ACL',
        'ACL_CYCLE',
      ])
      .exactOptional()
      .openapi({ description: 'Error code indicating the nature of the error.' }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the error.' }),
    fieldViolations: z
      .array(FieldViolationSchema)
      .exactOptional()
      .openapi({
        description:
          'In case the item fields are invalid, this field contains the details about the validation errors.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProcessingError')

const RepositoryErrorSchema = z
  .object({
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Message that describes the error. The maximum allowable length of the message is 8192 characters.',
      }),
    httpStatusCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Error codes. Matches the definition of HTTP status codes.' }),
    type: z
      .enum([
        'UNKNOWN',
        'NETWORK_ERROR',
        'DNS_ERROR',
        'CONNECTION_ERROR',
        'AUTHENTICATION_ERROR',
        'AUTHORIZATION_ERROR',
        'SERVER_ERROR',
        'QUOTA_EXCEEDED',
        'SERVICE_UNAVAILABLE',
        'CLIENT_ERROR',
      ])
      .exactOptional()
      .openapi({ description: 'The type of error.' }),
  })
  .openapi({
    description: 'Errors when the connector is communicating to the source repository.',
    required: [],
  })
  .openapi('RepositoryError')

const ItemStatusSchema = z
  .object({
    code: z
      .enum(['CODE_UNSPECIFIED', 'ERROR', 'MODIFIED', 'NEW_ITEM', 'ACCEPTED'])
      .exactOptional()
      .openapi({ description: 'Status code.' }),
    processingErrors: z
      .array(ProcessingErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error details in case the item is in ERROR state.' }),
    repositoryErrors: z
      .array(RepositoryErrorSchema)
      .exactOptional()
      .openapi({ description: 'Repository error reported by connector.' }),
  })
  .openapi({ description: "This contains item's status and any errors.", required: [] })
  .openapi('ItemStatus')

const ItemStructuredDataSchema = z
  .object({
    hash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Hashing value provided by the API caller. This can be used with the items.push method to calculate modified state. The maximum length is 2048 characters.',
      }),
    object: StructuredDataObjectSchema.exactOptional().openapi({
      description:
        'The structured data object that should conform to a registered object definition in the schema for the data source.',
    }),
  })
  .openapi({ description: 'Available structured data fields for the item.', required: [] })
  .openapi('ItemStructuredData')

const ItemSchema = z
  .object({
    acl: ItemAclSchema.exactOptional().openapi({
      description: 'Access control list for this item.',
    }),
    content: ItemContentSchema.exactOptional().openapi({
      description: 'Item content to be indexed and made text searchable.',
    }),
    itemType: z
      .enum(['UNSPECIFIED', 'CONTENT_ITEM', 'CONTAINER_ITEM', 'VIRTUAL_CONTAINER_ITEM'])
      .exactOptional()
      .openapi({ description: 'The type for this item.' }),
    metadata: ItemMetadataSchema.exactOptional().openapi({
      description: 'The metadata information.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters.',
      }),
    payload: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional state connector can store for this item. The maximum length is 10000 bytes.',
      }),
    queue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Queue this item belongs to. The maximum length is 100 characters.',
      }),
    status: ItemStatusSchema.exactOptional().openapi({
      description: 'Status of the item. Output only field.',
    }),
    structuredData: ItemStructuredDataSchema.exactOptional().openapi({
      description:
        'The structured data for the item that should conform to a registered object definition in the schema for the data source.',
    }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't index or delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations).",
      }),
  })
  .openapi({
    description:
      'Represents a single object that is an item in the search index, such as a file, folder, or a database record.',
    required: [],
  })
  .openapi('Item')

const IndexItemRequestSchema = z
  .object({
    connectorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}',
      }),
    debugOptions: DebugOptionsSchema.exactOptional().openapi({
      description: 'Common debug options.',
    }),
    indexItemOptions: IndexItemOptionsSchema.exactOptional(),
    item: ItemSchema.exactOptional().openapi({
      description: 'The name of the item. Format: datasources/{source_id}/items/{item_id}',
    }),
    mode: z
      .enum(['UNSPECIFIED', 'SYNCHRONOUS', 'ASYNCHRONOUS'])
      .exactOptional()
      .openapi({ description: 'Required. The RequestMode for this request.' }),
  })
  .openapi({ required: [] })
  .openapi('IndexItemRequest')

const InitializeCustomerRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for `InitializeCustomer` method.' })
  .openapi('InitializeCustomerRequest')

const ItemThreadSchema = z
  .object({
    clusterInfo: ClusterInfoSchema.exactOptional(),
    item: z
      .array(FuseboxItemSchema)
      .exactOptional()
      .openapi({
        description:
          'The Items in the ItemThread. In the context of a search, the list of Items may be a subset of those that logically belong to the ItemThread. The details of which items are included are available in the ItemThreadView returned in the overall rpc response.',
      }),
    lastItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server id of the last item returned in the ItemThread. This can be deduced from the [item] list but is provided for convenience. When manually constructing an ItemThreadViewSpec to perform operations on the ItemThread, this value can be used as the [high_item_id_watermark].',
      }),
    matchInfo: FuseboxItemThreadMatchInfoSchema.exactOptional(),
    snippet: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A snippet summarizing the thread. This field is only populated for searches.',
      }),
    threadKey: MultiKeySchema.exactOptional().openapi({
      description:
        'The MultiKey that identifies this thread. This value never changes, i.e. remains constant across modifications to the thread, including addition, relabeling, or deletion of contained Items. As such, the thread key may not necessarily correspond to the key of an contained Item. Legacy note: The "server_id" of the thread key is equivalent to the notion of the "original thread id" in the CSS API.',
    }),
    threadLocator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A base64 encoded and encrypted string generated from the Gaia Id and the thread id. Used to generate the permalink for this thread, exposed from Gmail API.',
      }),
    topicState: TopicStateSchema.exactOptional().openapi({ description: 'Next available id : 10' }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The latest history operation id that resulted in a mutation of any item in the thread.',
      }),
  })
  .openapi({
    description:
      'An ItemThread is an ordered list of Items. An ItemThread corresponds to a "conversation" in the context of mail. An Item belongs to exactly one ItemThread.',
    required: [],
  })
  .openapi('ItemThread')

const ListDataSourceResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    sources: z.array(DataSourceSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDataSourceResponse')

const ListItemNamesForUnmappedIdentityResponseSchema = z
  .object({
    itemNames: z.array(z.string()).exactOptional(),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListItemNamesForUnmappedIdentityResponse')

const ListItemsResponseSchema = z
  .object({
    items: z.array(ItemSchema).exactOptional(),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListItemsResponse')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const QueryOperatorSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of the operator' }),
    enumValues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Potential list of values for the opeatror field. This field is only filled when we can safely enumerate all the possible values of this operator.',
      }),
    greaterThanOperatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the operator name that can be used to isolate the property using the greater-than operator.',
      }),
    isFacetable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Can this operator be used to get facets.' }),
    isRepeatable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if multiple values can be set for this property.' }),
    isReturnable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Will the property associated with this facet be returned as part of search results.',
      }),
    isSortable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Can this operator be used to sort results.' }),
    isSuggestable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Can get suggestions for this field.' }),
    lessThanOperatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the operator name that can be used to isolate the property using the less-than operator.',
      }),
    objectType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the object corresponding to the operator. This field is only filled for schema-specific operators, and is unset for common operators.',
      }),
    operatorName: z.string().exactOptional().openapi({ description: 'The name of the operator.' }),
    type: z
      .enum([
        'UNKNOWN',
        'INTEGER',
        'DOUBLE',
        'TIMESTAMP',
        'BOOLEAN',
        'ENUM',
        'DATE',
        'TEXT',
        'HTML',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the operator.' }),
  })
  .openapi({
    description: 'The definition of a operator that can be used in a Search/Suggest request.',
    required: [],
  })
  .openapi('QueryOperator')

const QuerySourceSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of the data source.' }),
    operators: z
      .array(QueryOperatorSchema)
      .exactOptional()
      .openapi({ description: 'List of all operators applicable for this source.' }),
    shortName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A short name or alias for the source. This value can be used with the 'source' operator.",
      }),
    source: SourceSchema.exactOptional().openapi({ description: 'The name of the source' }),
  })
  .openapi({
    description: 'List of sources that the user can search using the query API.',
    required: [],
  })
  .openapi('QuerySource')

const ListQuerySourcesResponseSchema = z
  .object({
    nextPageToken: z.string().exactOptional(),
    sources: z.array(QuerySourceSchema).exactOptional(),
  })
  .openapi({ description: 'List sources response.', required: [] })
  .openapi('ListQuerySourcesResponse')

const SortOptionsSchema = z
  .object({
    operatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the operator corresponding to the field to sort on. The corresponding property must be marked as sortable.',
      }),
    sortOrder: z
      .enum(['ASCENDING', 'DESCENDING'])
      .exactOptional()
      .openapi({ description: 'Ascending is the default sort order' }),
  })
  .openapi({ required: [] })
  .openapi('SortOptions')

const QueryInterpretationConfigSchema = z
  .object({
    forceDisableSupplementalResults: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set this flag to disable supplemental results retrieval, setting a flag here will not retrieve supplemental results for queries associated with a given search application. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for supplemental results.',
      }),
    forceVerbatimMode: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental results retrieval, and usage of synonyms including custom ones. If this flag is set to True, it will take precedence over the option set at Query level. For the default value of False, query level flag will set the correct interpretation for verbatim mode.',
      }),
  })
  .openapi({ description: 'Default options to interpret user query.', required: [] })
  .openapi('QueryInterpretationConfig')

const ScoringConfigSchema = z
  .object({
    disableFreshness: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to use freshness as a ranking signal. By default, freshness is used as a ranking signal. Note that this setting is not available in the Admin UI.',
      }),
    disablePersonalization: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to personalize the results. By default, personal signals will be used to boost results.',
      }),
  })
  .openapi({
    description:
      'Scoring configurations for a source while processing a Search or Suggest request.',
    required: [],
  })
  .openapi('ScoringConfig')

const SourceCrowdingConfigSchema = z
  .object({
    numResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of results allowed from a datasource in a result page as long as results from other sources are not exhausted. Value specified must not be negative. A default value is used if this value is equal to 0. To disable crowding, set the value greater than 100.',
      }),
    numSuggestions: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of suggestions allowed from a source. No limits will be set on results if this value is less than or equal to 0.',
      }),
  })
  .openapi({
    description:
      'Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host "crowd out" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source.',
    required: [],
  })
  .openapi('SourceCrowdingConfig')

const SourceScoringConfigSchema = z
  .object({
    sourceImportance: z
      .enum(['DEFAULT', 'LOW', 'HIGH'])
      .exactOptional()
      .openapi({ description: 'Importance of the source.' }),
  })
  .openapi({
    description:
      'Set the scoring configuration. This allows modifying the ranking of results for a source.',
    required: [],
  })
  .openapi('SourceScoringConfig')

const SourceConfigSchema = z
  .object({
    crowdingConfig: SourceCrowdingConfigSchema.exactOptional().openapi({
      description: 'The crowding configuration for the source.',
    }),
    scoringConfig: SourceScoringConfigSchema.exactOptional().openapi({
      description: 'The scoring configuration for the source.',
    }),
    source: SourceSchema.exactOptional().openapi({
      description: 'The source for which this configuration is to be used.',
    }),
  })
  .openapi({
    description: 'Configurations for a source while processing a Search or Suggest request.',
    required: [],
  })
  .openapi('SourceConfig')

const SearchApplicationSchema = z
  .object({
    dataSourceRestrictions: z
      .array(DataSourceRestrictionSchema)
      .exactOptional()
      .openapi({
        description:
          'Retrictions applied to the configurations. The maximum number of elements is 10.',
      }),
    defaultFacetOptions: z
      .array(FacetOptionsSchema)
      .exactOptional()
      .openapi({
        description:
          'The default fields for returning facet results. The sources specified here also have been included in data_source_restrictions above.',
      }),
    defaultSortOptions: SortOptionsSchema.exactOptional().openapi({
      description: 'The default options for sorting the search results',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display name of the Search Application. The maximum length is 300 characters.',
      }),
    enableAuditLog: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether audit logging is on/off for requests made for the search application in query APIs.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Search Application. Format: searchapplications/{application_id}.',
      }),
    operationIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. IDs of the Long Running Operations (LROs) currently running for this schema. Output only field.',
        readOnly: true,
      }),
    queryInterpretationConfig: QueryInterpretationConfigSchema.exactOptional().openapi({
      description: 'The default options for query interpretation',
    }),
    returnResultThumbnailUrls: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'With each result we should return the URI for its thumbnail (when applicable)',
      }),
    scoringConfig: ScoringConfigSchema.exactOptional().openapi({
      description: 'Configuration for ranking results.',
    }),
    sourceConfig: z
      .array(SourceConfigSchema)
      .exactOptional()
      .openapi({
        description: 'Configuration for a sources specified in data_source_restrictions.',
      }),
  })
  .openapi({ description: 'SearchApplication', required: [] })
  .openapi('SearchApplication')

const ListSearchApplicationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    searchApplications: z.array(SearchApplicationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSearchApplicationsResponse')

const UnmappedIdentitySchema = z
  .object({
    externalIdentity: PrincipalSchema.exactOptional().openapi({
      description: 'The resource name for an external user.',
    }),
    resolutionStatusCode: z
      .enum([
        'CODE_UNSPECIFIED',
        'NOT_FOUND',
        'IDENTITY_SOURCE_NOT_FOUND',
        'IDENTITY_SOURCE_MISCONFIGURED',
        'TOO_MANY_MAPPINGS_FOUND',
        'INTERNAL_ERROR',
      ])
      .exactOptional()
      .openapi({ description: 'The resolution status for the external identity.' }),
  })
  .openapi({ required: [] })
  .openapi('UnmappedIdentity')

const ListUnmappedIdentitiesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unmappedIdentities: z.array(UnmappedIdentitySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListUnmappedIdentitiesResponse')

const MediaSchema = z
  .object({
    resourceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the media resource.' }),
  })
  .openapi({ description: 'Media resource.', required: [] })
  .openapi('Media')

const MessageAttributesSchema = z
  .object({
    isTombstone: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true: message is a tombstone in the client. Default false.' }),
  })
  .openapi({
    description: 'Stores tombstone message attributes: go/tombstone-message-attributes-overview',
    required: [],
  })
  .openapi('MessageAttributes')

const PersonalLabelTagSchema = z
  .object({
    labelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string ID representing the label. Possible ID values are documented at go/chat-labels-howto:ids. Examples: "^t" for "Starred", "^nu" for "Nudged".',
      }),
  })
  .openapi({
    description:
      'An individual instance (or "tag") of a label configured as a personal type that\'s associated with a message.',
    required: [],
  })
  .openapi('PersonalLabelTag')

const PrivateMessageInfoSchema = z
  .object({
    annotations: z
      .array(AnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Annotations private to {@code userId}.' }),
    attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({ description: 'Attachments private to {@code userId}.' }),
    contextualAddOnMarkup: z.array(GoogleChatV1ContextualAddOnMarkupSchema).exactOptional(),
    gsuiteIntegrationMetadata: z.array(GsuiteIntegrationMetadataSchema).exactOptional(),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text private to {@code user_id}. Initial restriction: Only one of public text or private text is rendered on the client. So if public text is set, private text is ignored.',
      }),
    userId: UserIdSchema.exactOptional().openapi({
      description: 'Required. The elements in this struct are visible to this user.',
    }),
  })
  .openapi({
    description:
      'Private message information specific to a given user. DEPRECATED: Use the privateMessageViewer field in CreateMessageInfo instead.',
    required: [],
  })
  .openapi('PrivateMessageInfo')

const MessagePropsSchema: z.ZodType<MessagePropsType> = z
  .lazy(() =>
    z
      .object({ babelProps: BabelMessagePropsSchema.exactOptional() })
      .openapi({
        description:
          'Container for storing properties applicable to messages. For now (until storage consolidation is complete), it will only be used for babel props. In the future it could be used to house Dynamite properties for experimenting/rapid prototyping.',
        required: [],
      }),
  )
  .openapi('MessageProps')

const QuotedMessageMetadataSchema = z
  .object({
    annotations: z
      .array(AnnotationSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Snapshot of the annotations of the quoted message.',
        readOnly: true,
      }),
    appProfile: AppsDynamiteSharedAppProfileSchema.exactOptional().openapi({
      description:
        'Output only. Custom display profile info for apps. Will be empty for real users.',
      readOnly: true,
    }),
    botAttachmentState: z
      .enum([
        'BOT_ATTACHMENT_STATE_UNSPECIFIED',
        'BOT_ATTACHMENT_STATE_HAS_BOT_ATTACHMENT',
        'BOT_ATTACHMENT_STATE_NO_BOT_ATTACHMENT',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The bot attachment state of the quoted message. Used by clients to display a bot attachment indicator in the UI.',
        readOnly: true,
      }),
    createTimeMicros: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when the quoted message was posted in microseconds.',
        readOnly: true,
      }),
    creatorId: UserIdSchema.exactOptional().openapi({
      description:
        'Output only. ID of the User who posted the quoted message. This includes information to identify if the quoted message was posted by an App on behalf of a user.',
      readOnly: true,
    }),
    lastEditTimeMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time when the quoted message was last edited by a user at the time when quoting action happens. Time is in microseconds.',
        readOnly: true,
      }),
    lastUpdateTimeWhenQuotedMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `last_update_time` of the original message when the client initiated the quote creation. This is derived from the request payload passed from clients. Used to fetch the quoted message contents at a specific time on the read path. This field is populated from storage directly.',
      }),
    messageId: MessageIdSchema.exactOptional().openapi({
      description:
        'MessageId of the original message that is being quoted. This is derived from the request payload passed from clients. This field is populated from storage directly.',
    }),
    messageState: z
      .enum([
        'MESSAGE_STATE_UNSPECIFIED',
        'MESSAGE_STATE_ACTIVE',
        'MESSAGE_STATE_DELETED',
        'MESSAGE_STATE_OTR_EDITED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The state of the quoted message. Used by clients to display tombstones for quotes that reference a deleted message.',
        readOnly: true,
      }),
    retentionSettings: AppsDynamiteSharedRetentionSettingsSchema.exactOptional().openapi({
      description: 'Output only. The retention (OTR) settings of the quoted message.',
      readOnly: true,
    }),
    textBody: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Snapshot of the text body of the quoted message.',
        readOnly: true,
      }),
    updaterId: UserIdSchema.exactOptional().openapi({
      description:
        'Output only. ID of the User who last updated (created/edited/deleted) the quoted message at the time when quoting action happens. This includes information to identify if the quoted message was posted by an App on behalf of a user.',
      readOnly: true,
    }),
    uploadMetadata: z
      .array(UploadMetadataSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Upload metadata of the quoted message.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "Quote metadata: go/message-quoting-be-dd-v2. This proto is only used on the read path. For the request proto, refer to `QuotedMessagePayload`. Fields are either derived from storage directly from the Item this metadata belongs to, or is hydrated at read time from another Item read. Note: QuotedMessageMetadata proto is similar to Message proto with less field. Reasons to differtiate QuotedMessageMetadata from Message are: 1. Not all fields for original message is applicable for quoted message. (E.g. reactions, is_inline_reply, etc.), thus separting out for confusion. 2. We don't support nested message quoting. For more detailed discussion, please see http://shortn/_VsSXQb2C7P. For future reference: if your new feature/field will be supported in message quoting feature (go/chat-quoting-prd), you will need to add that field within QuotedMessageMetadata",
    required: [],
  })
  .openapi('QuotedMessageMetadata')

const TombstoneMetadataSchema = z
  .object({
    tombstoneType: z
      .enum([
        'TOMBSTONE_UNSPECIFIED',
        'CREATOR',
        'ROOM_OWNER',
        'ADMIN',
        'APP_MESSAGE_EXPIRY',
        'CREATOR_VIA_APP',
        'ROOM_OWNER_VIA_APP',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates the type of Tombstone.' }),
  })
  .openapi({
    description:
      'Tombstoning is the act of leaving a contextual trace when deleting a message. See more: go/tombstone-prd, go/hub-dynamite-tombstones-server-design-v2.',
    required: [],
  })
  .openapi('TombstoneMetadata')

const MessageSchema = z
  .object({
    annotations: z
      .array(AnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Annotations parsed and extracted from the text body.' }),
    appProfile: AppsDynamiteSharedAppProfileSchema.exactOptional().openapi({
      description: 'Custom display profile info for apps. Leave the field empty for real users.',
    }),
    attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({ description: 'Attachments parsed from incoming webhooks' }),
    attributes: MessageAttributesSchema.exactOptional().openapi({
      description:
        'Lightweight message attributes which values are calculated and set in the servers.',
    }),
    botResponses: z
      .array(BotResponseSchema)
      .exactOptional()
      .openapi({ description: 'Responses from bots indicating if extra auth/config is needed.' }),
    communalLabels: z
      .array(CommunalLabelTagSchema)
      .exactOptional()
      .openapi({
        description:
          'Communal labels associated with a message. These exist on the message itself regardless of which user fetches them. Order of entries is arbitrary and will not list duplicates of the same label_id. See go/chat-labels-design for details.',
      }),
    contentReportSummary: ContentReportSummarySchema.exactOptional().openapi({ readOnly: true }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the Message was posted in microseconds.' }),
    creatorId: UserIdSchema.exactOptional().openapi({
      description:
        'ID of the User who posted the Message. This includes information to identify if this was posted by an App on behalf of a user.',
    }),
    deletableBy: z
      .enum([
        'PERMISSION_UNSPECIFIED',
        'PERMISSION_NO_ONE',
        'PERMISSION_CREATOR',
        'PERMISSION_MEMBER',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates who can delete the message. This field is set on the read path (e.g. ListTopics) but doesn’t have any effect on the write path (e.g. CreateMessageRequest).',
      }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time when the Message was deleted in microseconds. This field is set to nonzero value only for Messages deleted globally.',
      }),
    deleteTimeForRequester: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time when the Message was per-user deleted by the message requester in microseconds. This field is set to nonzero value only for Message per-user deleted by the requester.',
      }),
    deletedByVault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Was this message deleted by Vault (Only used for Vault support) This is false if message is live or message was deleted by user.',
      }),
    dlpScanSummary: DlpScanSummarySchema.exactOptional().openapi({
      description:
        'Data Loss Prevention scan information for this message. Messages are evaluated in the backend on create message/topic and edit message actions. DEPRECATED: Use DATA_LOSS_PREVENTION Annotation.',
    }),
    editableBy: z
      .enum([
        'PERMISSION_UNSPECIFIED',
        'PERMISSION_NO_ONE',
        'PERMISSION_CREATOR',
        'PERMISSION_MEMBER',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates who can edit the message. This field is set on the read path (e.g. ListTopics) but doesn’t have any effect on the write path (e.g. CreateMessageRequest).',
      }),
    fallbackText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A plain-text description of the attachment, used when clients cannot display formatted attachment (e.g. mobile push notifications).',
      }),
    id: MessageIdSchema.exactOptional().openapi({ description: 'ID of the resource.' }),
    isContentPurged: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the message is content purged. Content purged messages contain only data required for tombstone (see go/chat-infinite-tombstone). This field is only used by Vault to display tombstone and should only be set to true if the message is a tombstone.',
      }),
    isInlineReply: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only. Indicates if the message is an inline reply. Set to true only if the message's ParentPath is non-NULL. Currently, only inline replies have non-NULL ParentPath. See go/chat-be-inline-reply-indicator.",
        readOnly: true,
      }),
    lastEditTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the message was edited by a user, timestamp of the last edit, in microseconds.',
      }),
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the Message text was last updated in microseconds.' }),
    localId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique id specified on the client side.' }),
    messageIntegrationPayload:
      AppsDynamiteSharedMessageIntegrationPayloadSchema.exactOptional().openapi({
        description:
          'An optional payload (restricted to 1P applications) that will be stored with this message. This can only be set by the 1P API and should be used to deliver additional data such a 1P sync version, 1P entity ID to the client for more advanced functionality [Eg. inform Group Tasks tab of new version while linking, fetch & render a live Task/Meet call tile].',
      }),
    messageOrigin: z
      .enum([
        'ORIGIN_NOT_SET',
        'ORIGIN_DYNAMITE',
        'ORIGIN_BABEL_INTEROP_LIVE',
        'ORIGIN_BABEL_INTEROP_RETRY',
        'ORIGIN_BABEL',
        'ORIGIN_BABEL_DUAL_WRITE',
        'ORIGIN_BABEL_DUAL_WRITE_RETRY',
        'ORIGIN_BACKFILL_FROM_PAPYRUS',
        'ORIGIN_BACKFILL_FROM_GMAIL_ARCHIVE',
      ])
      .exactOptional()
      .openapi({ description: 'Where the message was posted from' }),
    messageState: z
      .enum(['PUBLIC', 'PRIVATE'])
      .exactOptional()
      .openapi({
        description:
          'State of the message, indicating whether the message is visible to all members in the group or is only visible to the sender only, or the private_message_viewer if it is set.',
      }),
    originAppSuggestions: z
      .array(AppsDynamiteSharedOriginAppSuggestionSchema)
      .exactOptional()
      .openapi({
        description:
          'Indicates if this message contains any suggestions that were provided by any Apps.',
      }),
    personalLabels: z
      .array(PersonalLabelTagSchema)
      .exactOptional()
      .openapi({
        description:
          'Personal labels associated with a message for the viewing user. Order of entries is arbitrary and will not list duplicates of the same label_id. See go/chat-labels-design for details. NOTE: This will be unpopulated in the case of SpaceChangelog events.',
      }),
    privateMessageInfos: z
      .array(PrivateMessageInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of per-user private information. This is deprecated, because we no longer plan to support partially private messages or private messages for multiple users. The message_state and private_message_viewer fields should be sufficient for this infrastructure.',
      }),
    privateMessageViewer: UserIdSchema.exactOptional().openapi({
      description:
        'Should only be set if the Message State is PRIVATE. If set, the message content is only visible to this user (and any apps associated with the message), as well as the message creator. If unset, a private message is visible to the message creator only.',
    }),
    props: MessagePropsSchema.exactOptional().openapi({
      description:
        'Contains additional (currently Hangouts Classic only) properties applicable to this message.',
    }),
    quotedByState: z
      .enum([
        'QUOTED_BY_STATE_UNSPECIFIED',
        'QUOTED_BY_STATE_HAS_BEEN_QUOTED',
        'QUOTED_BY_STATE_HAS_NOT_BEEN_QUOTED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether this message has been quoted by another message or not. Used by clients to handle message edit flows for messages that have been quoted.',
        readOnly: true,
      }),
    quotedMessageMetadata: QuotedMessageMetadataSchema.exactOptional().openapi({
      description: 'Output only. Metadata for a message that is quoted by this message.',
      readOnly: true,
    }),
    reactions: z
      .array(AppsDynamiteSharedReactionSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of user reactions to this message. Ordered by the timestamp of the first reaction, ascending (oldest to newest).',
      }),
    reports: z
      .array(ContentReportSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Details of content reports. Set only when the request asks for it.',
        readOnly: true,
      }),
    retentionSettings: AppsDynamiteSharedRetentionSettingsSchema.exactOptional().openapi({
      description: 'The retention settings of the message.',
    }),
    richTextFormattingType: z
      .enum([
        'NONE',
        'MARKDOWN',
        'FORMAT_ANNOTATIONS',
        'FORMAT_ANNOTATIONS_IGNORED',
        'FORMAT_ANNOTATIONS_IGNORED_WITH_MARKDOWN',
      ])
      .exactOptional()
      .openapi({
        description:
          'Used by clients to correctly log format type for message creation due to complexity with client side optimistic update (see go/content-metric-post-send-logging for details). Currently, only set by server in the message or topic creation path.',
      }),
    secondaryMessageKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A client-specified string that can be used to uniquely identify a message in a space, in lieu of `id.message_id`.',
      }),
    textBody: z.string().exactOptional().openapi({ description: 'Plaintext body of the Message.' }),
    tombstoneMetadata: TombstoneMetadataSchema.exactOptional().openapi({
      description: 'Information for the stoning of a Message.',
    }),
    updaterId: UserIdSchema.exactOptional().openapi({
      description:
        'ID of the User who last updated (created/edited/deleted) the Message. This includes information to identify if this was updated by an App on behalf of a user.',
    }),
    uploadMetadata: z
      .array(UploadMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'UploadMetadata b/36864213 is an ongoing effort to move UploadMetadata out of annotations field and save it to upload_metadata field only. After the migration, UploadMetadata will only be saved in this field.',
      }),
  })
  .openapi({ description: 'Message posted to a Space.', required: [] })
  .openapi('Message')

const MessageInfoSchema = z
  .object({
    authorUserType: z
      .enum(['HUMAN', 'BOT'])
      .exactOptional()
      .openapi({ description: 'Message author’s user type (human/bot).' }),
    message: MessageSchema.exactOptional().openapi({
      description: 'The content of a matching message.',
    }),
    searcherMembershipState: z
      .enum([
        'MEMBER_UNKNOWN',
        'MEMBER_INVITED',
        'MEMBER_JOINED',
        'MEMBER_NOT_A_MEMBER',
        'MEMBER_FAILED',
      ])
      .exactOptional()
      .openapi({
        description: "Searcher's membership state in the space where the message is posted.",
      }),
  })
  .openapi({ required: [] })
  .openapi('MessageInfo')

const MetalineSchema = z
  .object({
    properties: z
      .array(DisplayedPropertySchema)
      .exactOptional()
      .openapi({
        description:
          'The list of displayed properties for the metaline. The maximum number of properties is 5.',
      }),
  })
  .openapi({
    description:
      'A metaline is a list of properties that are displayed along with the search result to provide context.',
    required: [],
  })
  .openapi('Metaline')

const ObjectDisplayOptionsSchema = z
  .object({
    metalines: z
      .array(MetalineSchema)
      .exactOptional()
      .openapi({
        description:
          'Defines the properties that are displayed in the metalines of the search results. The property values are displayed in the order given here. If a property holds multiple values, all of the values are displayed before the next properties. For this reason, it is a good practice to specify singular properties before repeated properties in this list. All of the properties must set is_returnable to true. The maximum number of metalines is 3.',
      }),
    objectDisplayLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user friendly label to display in the search result to indicate the type of the item. This is OPTIONAL; if not provided, an object label isn't displayed on the context line of the search results. The maximum length is 64 characters.",
      }),
  })
  .openapi({ description: 'The display options for an object.', required: [] })
  .openapi('ObjectDisplayOptions')

const ObjectOptionsSchema = z
  .object({
    displayOptions: ObjectDisplayOptionsSchema.exactOptional().openapi({
      description:
        'The options that determine how the object is displayed in the Cloud Search results page.',
    }),
    freshnessOptions: FreshnessOptionsSchema.exactOptional().openapi({
      description: 'The freshness options for an object.',
    }),
    suggestionFilteringOperators: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Operators that can be used to filter suggestions. For Suggest API, only operators mentioned here will be honored in the FilterOptions. Only TEXT and ENUM operators are supported. NOTE: "objecttype", "type" and "mimetype" are already supported. This property is to configure schema specific operators. Even though this is an array, only one operator can be specified. This is an array for future extensibility. Operators mapping to multiple properties within the same object are not supported. If the operator spans across different object types, this option has to be set once for each object definition.',
      }),
  })
  .openapi({ description: 'The options for an object.', required: [] })
  .openapi('ObjectOptions')

const ObjectDefinitionSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name for the object, which then defines its type. Item indexing requests should set the objectType field equal to this value. For example, if *name* is *Document*, then indexing requests for items of type Document should set objectType equal to *Document*. Each object definition must be uniquely named within a schema. The name must start with a letter and can only contain letters (A-Z, a-z) or numbers (0-9). The maximum length is 256 characters.',
      }),
    options: ObjectOptionsSchema.exactOptional().openapi({
      description: 'The optional object-specific options.',
    }),
    propertyDefinitions: z
      .array(PropertyDefinitionSchema)
      .exactOptional()
      .openapi({
        description:
          'The property definitions for the object. The maximum number of elements is 1000.',
      }),
  })
  .openapi({ description: 'The definition for an object within a data source.', required: [] })
  .openapi('ObjectDefinition')

const PeopleSuggestionSchema = z
  .object({
    person: PersonSchema.exactOptional().openapi({
      description: 'Suggested person. All fields of the person object might not be populated.',
    }),
  })
  .openapi({
    description: 'This field contains information about the person being suggested.',
    required: [],
  })
  .openapi('PeopleSuggestion')

const PollItemsRequestSchema = z
  .object({
    connectorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}',
      }),
    debugOptions: DebugOptionsSchema.exactOptional().openapi({
      description: 'Common debug options.',
    }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of items to return. The maximum value is 100 and the default value is 20.',
      }),
    queue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Queue name to fetch items from. If unspecified, PollItems will fetch from 'default' queue. The maximum length is 100 characters.",
      }),
    statusCodes: z
      .array(z.enum(['CODE_UNSPECIFIED', 'ERROR', 'MODIFIED', 'NEW_ITEM', 'ACCEPTED']))
      .exactOptional()
      .openapi({ description: 'Limit the items polled to the ones with these statuses.' }),
  })
  .openapi({ required: [] })
  .openapi('PollItemsRequest')

const PollItemsResponseSchema = z
  .object({
    items: z
      .array(ItemSchema)
      .exactOptional()
      .openapi({
        description:
          'Set of items from the queue available for connector to process. These items have the following subset of fields populated: version metadata.hash structured_data.hash content.hash payload status queue',
      }),
  })
  .openapi({ required: [] })
  .openapi('PollItemsResponse')

const PushItemSchema = z
  .object({
    contentHash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Content hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.",
      }),
    metadataHash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The metadata hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.",
      }),
    payload: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provides additional document state information for the connector, such as an alternate repository ID and other metadata. The maximum length is 8192 bytes.',
      }),
    queue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Queue to which this item belongs. The `default` queue is chosen if this field is not specified. The maximum length is 512 characters.',
      }),
    repositoryError: RepositoryErrorSchema.exactOptional().openapi({
      description:
        'Populate this field to store Connector or repository error details. This information is displayed in the Admin Console. This field may only be populated when the Type is REPOSITORY_ERROR.',
    }),
    structuredDataHash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Structured data hash of the item according to the repository. If specified, this is used to determine how to modify this item's status. Setting this field and the type field results in argument error. The maximum length is 2048 characters.",
      }),
    type: z
      .enum(['UNSPECIFIED', 'MODIFIED', 'NOT_MODIFIED', 'REPOSITORY_ERROR', 'REQUEUE'])
      .exactOptional()
      .openapi({ description: 'The type of the push operation that defines the push behavior.' }),
  })
  .openapi({ description: 'Represents an item to be pushed to the indexing queue.', required: [] })
  .openapi('PushItem')

const PushItemRequestSchema = z
  .object({
    connectorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}',
      }),
    debugOptions: DebugOptionsSchema.exactOptional().openapi({
      description: 'Common debug options.',
    }),
    item: PushItemSchema.exactOptional().openapi({ description: 'Item to push onto the queue.' }),
  })
  .openapi({ required: [] })
  .openapi('PushItemRequest')

const QueryInterpretationSchema = z
  .object({
    interpretationType: z.enum(['NONE', 'BLEND', 'REPLACE']).exactOptional(),
    interpretedQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The interpretation of the query used in search. For example, queries with natural language intent like "email from john" will be interpreted as "from:john source:mail". This field will not be filled when the reason is NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY.',
      }),
    reason: z
      .enum([
        'UNSPECIFIED',
        'QUERY_HAS_NATURAL_LANGUAGE_INTENT',
        'NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY',
      ])
      .exactOptional()
      .openapi({
        description:
          'The reason for interpretation of the query. This field will not be UNSPECIFIED if the interpretation type is not NONE.',
      }),
  })
  .openapi({ required: [] })
  .openapi('QueryInterpretation')

const QueryInterpretationOptionsSchema = z
  .object({
    disableNlInterpretation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag to disable natural language (NL) interpretation of queries. Default is false, Set to true to disable natural language interpretation. NL interpretation only applies to predefined datasources.',
      }),
    disableSupplementalResults: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Use this flag to disable supplemental results for a query. Supplemental results setting chosen at SearchApplication level will take precedence if set to True.',
      }),
    enableVerbatimMode: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable this flag to turn off all internal optimizations like natural language (NL) interpretation of queries, supplemental result retrieval, and usage of synonyms including custom ones. Nl interpretation will be disabled if either one of the two flags is true.',
      }),
  })
  .openapi({ description: 'Options to interpret user query.', required: [] })
  .openapi('QueryInterpretationOptions')

const QueryItemSchema = z
  .object({
    isSynthetic: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the text was generated by means other than a previous user search.',
      }),
  })
  .openapi({ description: 'Information relevant only to a query entry.', required: [] })
  .openapi('QueryItem')

const QuerySuggestionSchema = z
  .object({})
  .openapi({
    description:
      'This field does not contain anything as of now and is just used as an indicator that the suggest result was a phrase completion.',
  })
  .openapi('QuerySuggestion')

const RequestOptionsSchema = z
  .object({
    debugOptions: DebugOptionsSchema.exactOptional().openapi({
      description: 'Debug options of the request',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user\'s language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. From Suggest API perspective, for 3p suggest this is used as a hint while making predictions to add language boosting.',
      }),
    searchApplicationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Current user\'s time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.',
      }),
  })
  .openapi({ description: 'Shared request options for all RPC methods.', required: [] })
  .openapi('RequestOptions')

const ResetSearchApplicationRequestSchema = z
  .object({
    debugOptions: DebugOptionsSchema.exactOptional().openapi({
      description: 'Common debug options.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ResetSearchApplicationRequest')

const ResponseDebugInfoSchema = z
  .object({
    formattedDebugInfo: z
      .string()
      .exactOptional()
      .openapi({ description: 'General debug info formatted for display.' }),
  })
  .openapi({ description: 'Debugging information about the response.', required: [] })
  .openapi('ResponseDebugInfo')

const RestrictItemSchema = z
  .object({
    driveFollowUpRestrict: DriveFollowUpRestrictSchema.exactOptional(),
    driveLocationRestrict: DriveLocationRestrictSchema.exactOptional(),
    driveMimeTypeRestrict: DriveMimeTypeRestrictSchema.exactOptional().openapi({
      description: 'Drive Types.',
    }),
    driveTimeSpanRestrict: DriveTimeSpanRestrictSchema.exactOptional(),
    searchOperator: z
      .string()
      .exactOptional()
      .openapi({ description: 'The search restrict (e.g. "after:2017-09-11 before:2017-09-12").' }),
  })
  .openapi({
    description: 'Information relevant only to a restrict entry. NextId: 12',
    required: [],
  })
  .openapi('RestrictItem')

const SourceResultCountSchema = z
  .object({
    hasMoreResults: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether there are more search results for this source.' }),
    resultCountEstimate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The estimated result count for this source.' }),
    resultCountExact: z
      .string()
      .exactOptional()
      .openapi({ description: 'The exact result count for this source.' }),
    source: SourceSchema.exactOptional().openapi({
      description: 'The source the result count information is associated with.',
    }),
  })
  .openapi({ description: 'Per source result count information.', required: [] })
  .openapi('SourceResultCount')

const ResultCountsSchema = z
  .object({
    sourceResultCounts: z
      .array(SourceResultCountSchema)
      .exactOptional()
      .openapi({ description: 'Result count information for each source with results.' }),
  })
  .openapi({ description: 'Result count information', required: [] })
  .openapi('ResultCounts')

const SchemaSchema = z
  .object({
    objectDefinitions: z
      .array(ObjectDefinitionSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of top-level objects for the data source. The maximum number of elements is 10.',
      }),
    operationIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'IDs of the Long Running Operations (LROs) currently running for this schema. After modifying the schema, wait for operations to complete before indexing additional content.',
      }),
  })
  .openapi({ description: 'The schema definition for a data source.', required: [] })
  .openapi('Schema')

const SearchItemsByViewUrlRequestSchema = z
  .object({
    debugOptions: DebugOptionsSchema.exactOptional().openapi({
      description: 'Common debug options.',
    }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The next_page_token value returned from a previous request, if any.',
      }),
    viewUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specify the full view URL to find the corresponding item. The maximum length is 2048 characters.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SearchItemsByViewUrlRequest')

const SearchItemsByViewUrlResponseSchema = z
  .object({
    items: z.array(ItemSchema).exactOptional(),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SearchItemsByViewUrlResponse')

const SearchRequestSchema = z
  .object({
    contextAttributes: z
      .array(ContextAttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'Context attributes for the request which will be used to adjust ranking of search results. The maximum number of elements is 10.',
      }),
    dataSourceRestrictions: z
      .array(DataSourceRestrictionSchema)
      .exactOptional()
      .openapi({
        description:
          'The sources to use for querying. If not specified, all data sources from the current search application are used.',
      }),
    facetOptions: z.array(FacetOptionsSchema).exactOptional(),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of search results to return in one page. Valid values are between 1 and 100, inclusive. Default value is 10. Minimum value is 50 when results beyond 2000 are requested.',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The raw query string. See supported search operators in the [Narrow your search with operators](https://support.google.com/cloudsearch/answer/6172299)',
      }),
    queryInterpretationOptions: QueryInterpretationOptionsSchema.exactOptional().openapi({
      description: 'Options to interpret the user query.',
    }),
    requestOptions: RequestOptionsSchema.exactOptional().openapi({
      description: 'Request options, such as the search application and user timezone.',
    }),
    sortOptions: SortOptionsSchema.exactOptional().openapi({
      description: 'The options for sorting the search results',
    }),
    start: z.int32().exactOptional().openapi({ description: 'Starting index of the results.' }),
  })
  .openapi({ description: 'The search API request.', required: [] })
  .openapi('SearchRequest')

const SearchResultSchema: z.ZodType<SearchResultType> = z
  .lazy(() =>
    z
      .object({
        clusteredResults: z
          .array(SearchResultSchema)
          .exactOptional()
          .openapi({
            description:
              'If source is clustered, provide list of clustered results. There will only be one level of clustered results. If current source is not enabled for clustering, this field will be empty.',
          }),
        debugInfo: ResultDebugInfoSchema.exactOptional().openapi({
          description: 'Debugging information about this search result.',
        }),
        metadata: MetadataSchema.exactOptional().openapi({
          description: 'Metadata of the search result.',
        }),
        snippet: SnippetSchema.exactOptional().openapi({
          description: 'The concatenation of all snippets (summaries) available for this result.',
        }),
        title: z.string().exactOptional().openapi({ description: 'Title of the search result.' }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The URL of the search result. The URL contains a Google redirect to the actual item. This URL is signed and shouldn't be changed.",
          }),
      })
      .openapi({
        description: 'Results containing indexed information for a document.',
        required: [],
      }),
  )
  .openapi('SearchResult')

const SpellResultSchema = z
  .object({
    suggestedQuery: z
      .string()
      .exactOptional()
      .openapi({ description: 'The suggested spelling of the query.' }),
  })
  .openapi({ required: [] })
  .openapi('SpellResult')

const StructuredResultSchema = z
  .object({
    person: PersonSchema.exactOptional().openapi({ description: 'Representation of a person' }),
  })
  .openapi({
    description: 'Structured results that are returned as part of search request.',
    required: [],
  })
  .openapi('StructuredResult')

const SearchResponseSchema = z
  .object({
    debugInfo: ResponseDebugInfoSchema.exactOptional().openapi({
      description: 'Debugging information about the response.',
    }),
    errorInfo: ErrorInfoSchema.exactOptional().openapi({
      description: 'Error information about the response.',
    }),
    facetResults: z
      .array(FacetResultSchema)
      .exactOptional()
      .openapi({ description: 'Repeated facet results.' }),
    hasMoreResults: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether there are more search results matching the query.' }),
    queryInterpretation: QueryInterpretationSchema.exactOptional().openapi({
      description:
        'Query interpretation result for user query. Empty if query interpretation is disabled.',
    }),
    resultCountEstimate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The estimated result count for this query.' }),
    resultCountExact: z
      .string()
      .exactOptional()
      .openapi({ description: 'The exact result count for this query.' }),
    resultCounts: ResultCountsSchema.exactOptional().openapi({
      description: 'Expanded result count information.',
    }),
    results: z
      .array(SearchResultSchema)
      .exactOptional()
      .openapi({ description: 'Results from a search query.' }),
    spellResults: z
      .array(SpellResultSchema)
      .exactOptional()
      .openapi({ description: 'Suggested spelling for the query.' }),
    structuredResults: z
      .array(StructuredResultSchema)
      .exactOptional()
      .openapi({
        description:
          'Structured results for the user query. These results are not counted against the page_size.',
      }),
  })
  .openapi({ description: 'The search API response.', required: [] })
  .openapi('SearchResponse')

const StartUploadItemRequestSchema = z
  .object({
    connectorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}',
      }),
    debugOptions: DebugOptionsSchema.exactOptional().openapi({
      description: 'Common debug options.',
    }),
  })
  .openapi({ description: 'Start upload file request.', required: [] })
  .openapi('StartUploadItemRequest')

const SuggestRequestSchema = z
  .object({
    dataSourceRestrictions: z
      .array(DataSourceRestrictionSchema)
      .exactOptional()
      .openapi({
        description:
          'The sources to use for suggestions. If not specified, the data sources are taken from the current search application. NOTE: Suggestions are only supported for the following sources: * Third-party data sources * PredefinedSource.PERSON * PredefinedSource.GOOGLE_DRIVE',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Partial query for which autocomplete suggestions will be shown. For example, if the query is "sea", then the server might return "season", "search", "seagull" and so on.',
      }),
    requestOptions: RequestOptionsSchema.exactOptional().openapi({
      description: 'Request options, such as the search application and user timezone.',
    }),
  })
  .openapi({ description: 'Request of suggest API.', required: [] })
  .openapi('SuggestRequest')

const SuggestResultSchema = z
  .object({
    peopleSuggestion: PeopleSuggestionSchema.exactOptional().openapi({
      description:
        'This is present when the suggestion indicates a person. It contains more information about the person - like their email ID, name etc.',
    }),
    querySuggestion: QuerySuggestionSchema.exactOptional().openapi({
      description: 'This field will be present if the suggested query is a word/phrase completion.',
    }),
    source: SourceSchema.exactOptional().openapi({ description: 'The source of the suggestion.' }),
    suggestedQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The suggested query that will be used for search, when the user clicks on the suggestion',
      }),
  })
  .openapi({ description: 'One suggestion result.', required: [] })
  .openapi('SuggestResult')

const SuggestResponseSchema = z
  .object({
    suggestResults: z
      .array(SuggestResultSchema)
      .exactOptional()
      .openapi({ description: 'List of suggestions.' }),
  })
  .openapi({ description: 'Response of the suggest API.', required: [] })
  .openapi('SuggestResponse')

const UnreserveItemsRequestSchema = z
  .object({
    connectorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}',
      }),
    debugOptions: DebugOptionsSchema.exactOptional().openapi({
      description: 'Common debug options.',
    }),
    queue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of a queue to unreserve items from.' }),
  })
  .openapi({ required: [] })
  .openapi('UnreserveItemsRequest')

const UpdateDataSourceRequestSchema = z
  .object({
    debugOptions: DebugOptionsSchema.exactOptional().openapi({
      description: 'Common debug options.',
    }),
    source: DataSourceSchema.exactOptional(),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Only applies to [`settings.datasources.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.datasources/patch). Update mask to control which fields to update. Example field paths: `name`, `displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the source, that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.",
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateDataSourceRequest')

const UpdateSchemaRequestSchema = z
  .object({
    debugOptions: DebugOptionsSchema.exactOptional().openapi({
      description: 'Common debug options.',
    }),
    schema: SchemaSchema.exactOptional().openapi({ description: 'The new schema for the source.' }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the schema will be checked for validity, but will not be registered with the data source, even if valid.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSchemaRequest')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud_search':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.debug':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.indexing':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.query':
          "Search your organization's data in the Cloud Search index",
        'https://www.googleapis.com/auth/cloud_search.settings':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.settings.indexing':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.settings.query':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.stats':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.stats.indexing':
          "Index and serve your organization's data with Cloud Search",
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud_search':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.debug':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.indexing':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.query':
          "Search your organization's data in the Cloud Search index",
        'https://www.googleapis.com/auth/cloud_search.settings':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.settings.indexing':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.settings.query':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.stats':
          "Index and serve your organization's data with Cloud Search",
        'https://www.googleapis.com/auth/cloud_search.stats.indexing':
          "Index and serve your organization's data with Cloud Search",
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1DebugNameItemsSearchByViewUrlRoute = createRoute({
  method: 'post',
  path: '/v1/debug/{name}/items:searchByViewUrl',
  tags: ['debug'],
  description:
    'Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.debug.datasources.items.searchByViewUrl',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Source name, format: datasources/{source_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchItemsByViewUrlRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchItemsByViewUrlResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.debug'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.debug'],
    },
  ],
})

export const postV1DebugNameCheckAccessRoute = createRoute({
  method: 'post',
  path: '/v1/debug/{name}:checkAccess',
  tags: ['debug'],
  description:
    "Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.",
  operationId: 'cloudsearch.debug.datasources.items.checkAccess',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Item name, format: datasources/{source_id}/items/{item_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PrincipalSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CheckAccessResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.debug'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.debug'],
    },
  ],
})

export const getV1DebugParentItemsForunmappedidentityRoute = createRoute({
  method: 'get',
  path: '/v1/debug/{parent}/items:forunmappedidentity',
  tags: ['debug'],
  description:
    'Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.debug.identitysources.items.listForunmappedidentity',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      groupResourceName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'groupResourceName',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of items to fetch in a request. Defaults to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The next_page_token value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userResourceName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'userResourceName',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the identity source, in the following format: identitysources/{source_id}}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListItemNamesForUnmappedIdentityResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.debug'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.debug'],
    },
  ],
})

export const getV1DebugParentUnmappedidsRoute = createRoute({
  method: 'get',
  path: '/v1/debug/{parent}/unmappedids',
  tags: ['debug'],
  description:
    'Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.debug.identitysources.unmappedids.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of items to fetch in a request. Defaults to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The next_page_token value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      resolutionStatusCode: z
        .enum([
          'CODE_UNSPECIFIED',
          'NOT_FOUND',
          'IDENTITY_SOURCE_NOT_FOUND',
          'IDENTITY_SOURCE_MISCONFIGURED',
          'TOO_MANY_MAPPINGS_FOUND',
          'INTERNAL_ERROR',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit users selection to this status.',
            in: 'query',
            name: 'resolutionStatusCode',
            schema: {
              enum: [
                'CODE_UNSPECIFIED',
                'NOT_FOUND',
                'IDENTITY_SOURCE_NOT_FOUND',
                'IDENTITY_SOURCE_MISCONFIGURED',
                'TOO_MANY_MAPPINGS_FOUND',
                'INTERNAL_ERROR',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the identity source, in the following format: identitysources/{source_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListUnmappedIdentitiesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.debug'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.debug'],
    },
  ],
})

export const getV1IndexingNameRoute = createRoute({
  method: 'get',
  path: '/v1/indexing/{name}',
  tags: ['indexing'],
  description:
    'Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.',
  operationId: 'cloudsearch.indexing.datasources.items.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      connectorName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}',
            in: 'query',
            name: 'connectorName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the item to get info. Format: datasources/{source_id}/items/{item_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ItemSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.indexing'],
    },
  ],
})

export const deleteV1IndexingNameRoute = createRoute({
  method: 'delete',
  path: '/v1/indexing/{name}',
  tags: ['indexing'],
  description:
    'Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.',
  operationId: 'cloudsearch.indexing.datasources.items.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      connectorName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}',
            in: 'query',
            name: 'connectorName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      mode: z
        .enum(['UNSPECIFIED', 'SYNCHRONOUS', 'ASYNCHRONOUS'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The RequestMode for this request.',
            in: 'query',
            name: 'mode',
            schema: { enum: ['UNSPECIFIED', 'SYNCHRONOUS', 'ASYNCHRONOUS'], type: 'string' },
            required: false,
          },
        }),
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations).",
            in: 'query',
            name: 'version',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the item to delete. Format: datasources/{source_id}/items/{item_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.indexing'],
    },
  ],
})

export const getV1IndexingNameItemsRoute = createRoute({
  method: 'get',
  path: '/v1/indexing/{name}/items',
  tags: ['indexing'],
  description:
    'Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.',
  operationId: 'cloudsearch.indexing.datasources.items.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      brief: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to true, the indexing system only populates the following fields: name, version, queue. metadata.hash, metadata.title, metadata.sourceRepositoryURL, metadata.objectType, metadata.createTime, metadata.updateTime, metadata.contentLanguage, metadata.mimeType, structured_data.hash, content.hash, itemType, itemStatus.code, itemStatus.processingError.code, itemStatus.repositoryError.type, If this value is false, then all the fields are populated in Item.',
            in: 'query',
            name: 'brief',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      connectorName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}',
            in: 'query',
            name: 'connectorName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of items to fetch in a request. The max value is 1000 when brief is true. The max value is 10 if brief is false. The default value is 10',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The next_page_token value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the Data Source to list Items. Format: datasources/{source_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListItemsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.indexing'],
    },
  ],
})

export const postV1IndexingNameItemsDeleteQueueItemsRoute = createRoute({
  method: 'post',
  path: '/v1/indexing/{name}/items:deleteQueueItems',
  tags: ['indexing'],
  description:
    'Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.',
  operationId: 'cloudsearch.indexing.datasources.items.deleteQueueItems',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the Data Source to delete items in a queue. Format: datasources/{source_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteQueueItemsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.indexing'],
    },
  ],
})

export const postV1IndexingNameItemsPollRoute = createRoute({
  method: 'post',
  path: '/v1/indexing/{name}/items:poll',
  tags: ['indexing'],
  description:
    'Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.',
  operationId: 'cloudsearch.indexing.datasources.items.poll',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the Data Source to poll items. Format: datasources/{source_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PollItemsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PollItemsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.indexing'],
    },
  ],
})

export const postV1IndexingNameItemsUnreserveRoute = createRoute({
  method: 'post',
  path: '/v1/indexing/{name}/items:unreserve',
  tags: ['indexing'],
  description:
    'Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.',
  operationId: 'cloudsearch.indexing.datasources.items.unreserve',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the Data Source to unreserve all items. Format: datasources/{source_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UnreserveItemsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.indexing'],
    },
  ],
})

export const getV1IndexingNameSchemaRoute = createRoute({
  method: 'get',
  path: '/v1/indexing/{name}/schema',
  tags: ['indexing'],
  description:
    'Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.',
  operationId: 'cloudsearch.indexing.datasources.getSchema',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the data source to get Schema. Format: datasources/{source_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SchemaSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
    },
  ],
})

export const putV1IndexingNameSchemaRoute = createRoute({
  method: 'put',
  path: '/v1/indexing/{name}/schema',
  tags: ['indexing'],
  description:
    'Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.',
  operationId: 'cloudsearch.indexing.datasources.updateSchema',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the data source to update Schema. Format: datasources/{source_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateSchemaRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
    },
  ],
})

export const deleteV1IndexingNameSchemaRoute = createRoute({
  method: 'delete',
  path: '/v1/indexing/{name}/schema',
  tags: ['indexing'],
  description:
    'Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.',
  operationId: 'cloudsearch.indexing.datasources.deleteSchema',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the data source to delete Schema. Format: datasources/{source_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
    },
  ],
})

export const postV1IndexingNameIndexRoute = createRoute({
  method: 'post',
  path: '/v1/indexing/{name}:index',
  tags: ['indexing'],
  description:
    'Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.',
  operationId: 'cloudsearch.indexing.datasources.items.index',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IndexItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.indexing'],
    },
  ],
})

export const postV1IndexingNamePushRoute = createRoute({
  method: 'post',
  path: '/v1/indexing/{name}:push',
  tags: ['indexing'],
  description:
    'Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.',
  operationId: 'cloudsearch.indexing.datasources.items.push',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the item to push into the indexing queue. Format: datasources/{source_id}/items/{ID} This is a required field. The maximum length is 1536 characters.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PushItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ItemSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.indexing'],
    },
  ],
})

export const postV1IndexingNameUploadRoute = createRoute({
  method: 'post',
  path: '/v1/indexing/{name}:upload',
  tags: ['indexing'],
  description:
    "Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.",
  operationId: 'cloudsearch.indexing.datasources.items.upload',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the Item to start a resumable upload. Format: datasources/{source_id}/items/{item_id}. The maximum length is 1536 bytes.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartUploadItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UploadItemRefSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.indexing'],
    },
  ],
})

export const postV1MediaResourceNameRoute = createRoute({
  method: 'post',
  path: '/v1/media/{resourceName}',
  tags: ['media'],
  description:
    'Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.',
  operationId: 'cloudsearch.media.upload',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resourceName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the media that is being downloaded. See ReadRequest.resource_name.',
            in: 'path',
            name: 'resourceName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: MediaSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MediaSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.indexing'],
    },
  ],
})

export const postV1QuerySearchRoute = createRoute({
  method: 'post',
  path: '/v1/query/search',
  tags: ['query'],
  description:
    "The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).",
  operationId: 'cloudsearch.query.search',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: SearchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.query'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.query'],
    },
  ],
})

export const getV1QuerySourcesRoute = createRoute({
  method: 'get',
  path: '/v1/query/sources',
  tags: ['query'],
  description:
    "Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).",
  operationId: 'cloudsearch.query.sources.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of sources to return in the response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'requestOptions.debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'requestOptions.debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      'requestOptions.languageCode': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user\'s language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. From Suggest API perspective, for 3p suggest this is used as a hint while making predictions to add language boosting.',
            in: 'query',
            name: 'requestOptions.languageCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'requestOptions.searchApplicationId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).',
            in: 'query',
            name: 'requestOptions.searchApplicationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'requestOptions.timeZone': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Current user\'s time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.',
            in: 'query',
            name: 'requestOptions.timeZone',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListQuerySourcesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.query'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.query'],
    },
  ],
})

export const postV1QuerySuggestRoute = createRoute({
  method: 'post',
  path: '/v1/query/suggest',
  tags: ['query'],
  description:
    "Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).",
  operationId: 'cloudsearch.query.suggest',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: SuggestRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SuggestResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.query'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.query'],
    },
  ],
})

export const getV1SettingsCustomerRoute = createRoute({
  method: 'get',
  path: '/v1/settings/customer',
  tags: ['settings'],
  description: 'Get customer settings. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.settings.getCustomer',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomerSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
    },
  ],
})

export const patchV1SettingsCustomerRoute = createRoute({
  method: 'patch',
  path: '/v1/settings/customer',
  tags: ['settings'],
  description: 'Update customer settings. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.settings.updateCustomer',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Update mask to control which fields get updated. If you specify a field in the update_mask but don't specify its value here, that field will be cleared. If the mask is not present or empty, all fields will be updated. Currently supported field paths: vpc_settings and audit_logging_settings",
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomerSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
    },
  ],
})

export const getV1SettingsDatasourcesRoute = createRoute({
  method: 'get',
  path: '/v1/settings/datasources',
  tags: ['settings'],
  description: 'Lists datasources. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.settings.datasources.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of datasources to fetch in a request. The max value is 1000. The default value is 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting index of the results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDataSourceResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
    },
  ],
})

export const postV1SettingsDatasourcesRoute = createRoute({
  method: 'post',
  path: '/v1/settings/datasources',
  tags: ['settings'],
  description: 'Creates a datasource. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.settings.datasources.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: DataSourceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
    },
  ],
})

export const getV1SettingsSearchapplicationsRoute = createRoute({
  method: 'get',
  path: '/v1/settings/searchapplications',
  tags: ['settings'],
  description:
    'Lists all search applications. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.settings.searchapplications.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of items to return.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The next_page_token value returned from a previous List request, if any. The default value is 10',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSearchApplicationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
    },
  ],
})

export const postV1SettingsSearchapplicationsRoute = createRoute({
  method: 'post',
  path: '/v1/settings/searchapplications',
  tags: ['settings'],
  description:
    'Creates a search application. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.settings.searchapplications.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: SearchApplicationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
    },
  ],
})

export const getV1SettingsNameRoute = createRoute({
  method: 'get',
  path: '/v1/settings/{name}',
  tags: ['settings'],
  description:
    'Gets the specified search application. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.settings.searchapplications.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the search application. Format: searchapplications/{application_id}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchApplicationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
    },
  ],
})

export const putV1SettingsNameRoute = createRoute({
  method: 'put',
  path: '/v1/settings/{name}',
  tags: ['settings'],
  description:
    'Updates a search application. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.settings.searchapplications.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.",
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the Search Application. Format: searchapplications/{application_id}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchApplicationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
    },
  ],
})

export const deleteV1SettingsNameRoute = createRoute({
  method: 'delete',
  path: '/v1/settings/{name}',
  tags: ['settings'],
  description:
    'Deletes a search application. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.settings.searchapplications.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'debugOptions.enableDebugging': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.',
            in: 'query',
            name: 'debugOptions.enableDebugging',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the search application to be deleted. Format: applications/{application_id}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
    },
  ],
})

export const patchV1SettingsNameRoute = createRoute({
  method: 'patch',
  path: '/v1/settings/{name}',
  tags: ['settings'],
  description:
    'Updates a search application. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.settings.searchapplications.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.",
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the Search Application. Format: searchapplications/{application_id}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchApplicationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
    },
  ],
})

export const postV1SettingsNameResetRoute = createRoute({
  method: 'post',
  path: '/v1/settings/{name}:reset',
  tags: ['settings'],
  description:
    'Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.settings.searchapplications.reset',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the search application to be reset. Format: applications/{application_id}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResetSearchApplicationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
    },
  ],
})

export const getV1StatsIndexRoute = createRoute({
  method: 'get',
  path: '/v1/stats/index',
  tags: ['stats'],
  description:
    "Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.",
  operationId: 'cloudsearch.stats.getIndex',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'fromDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'fromDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'fromDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'fromDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'toDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'toDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'toDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetCustomerIndexStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
    },
  ],
})

export const getV1StatsIndexNameRoute = createRoute({
  method: 'get',
  path: '/v1/stats/index/{name}',
  tags: ['stats'],
  description:
    'Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.',
  operationId: 'cloudsearch.stats.index.datasources.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'fromDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'fromDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'fromDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'fromDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'toDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'toDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'toDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The resource id of the data source to retrieve statistics for, in the following format: "datasources/{source_id}"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetDataSourceIndexStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
    },
  ],
})

export const getV1StatsQueryRoute = createRoute({
  method: 'get',
  path: '/v1/stats/query',
  tags: ['stats'],
  description:
    'Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.',
  operationId: 'cloudsearch.stats.getQuery',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'fromDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'fromDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'fromDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'fromDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'toDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'toDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'toDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetCustomerQueryStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
    },
  ],
})

export const getV1StatsQueryNameRoute = createRoute({
  method: 'get',
  path: '/v1/stats/query/{name}',
  tags: ['stats'],
  description:
    'Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.',
  operationId: 'cloudsearch.stats.query.searchapplications.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'fromDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'fromDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'fromDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'fromDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'toDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'toDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'toDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The resource id of the search application query stats, in the following format: searchapplications/{application_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetSearchApplicationQueryStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
    },
  ],
})

export const getV1StatsSearchapplicationRoute = createRoute({
  method: 'get',
  path: '/v1/stats/searchapplication',
  tags: ['stats'],
  description:
    'Get search application stats for customer. **Note:** This API requires a standard end user account to execute.',
  operationId: 'cloudsearch.stats.getSearchapplication',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'endDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'endDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'endDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'endDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'endDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'endDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'startDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'startDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'startDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'startDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'startDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'startDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetCustomerSearchApplicationStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
    },
  ],
})

export const getV1StatsSessionRoute = createRoute({
  method: 'get',
  path: '/v1/stats/session',
  tags: ['stats'],
  description:
    'Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.',
  operationId: 'cloudsearch.stats.getSession',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'fromDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'fromDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'fromDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'fromDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'toDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'toDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'toDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetCustomerSessionStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
    },
  ],
})

export const getV1StatsSessionNameRoute = createRoute({
  method: 'get',
  path: '/v1/stats/session/{name}',
  tags: ['stats'],
  description:
    'Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.',
  operationId: 'cloudsearch.stats.session.searchapplications.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'fromDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'fromDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'fromDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'fromDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'toDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'toDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'toDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The resource id of the search application session stats, in the following format: searchapplications/{application_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetSearchApplicationSessionStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
    },
  ],
})

export const getV1StatsUserRoute = createRoute({
  method: 'get',
  path: '/v1/stats/user',
  tags: ['stats'],
  description:
    'Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.',
  operationId: 'cloudsearch.stats.getUser',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'fromDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'fromDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'fromDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'fromDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'toDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'toDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'toDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetCustomerUserStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
    },
  ],
})

export const getV1StatsUserNameRoute = createRoute({
  method: 'get',
  path: '/v1/stats/user/{name}',
  tags: ['stats'],
  description:
    'Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.',
  operationId: 'cloudsearch.stats.user.searchapplications.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'fromDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'fromDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'fromDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'fromDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'fromDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.day': z
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
            description: 'Day of month. Must be from 1 to 31 and valid for the year and month.',
            in: 'query',
            name: 'toDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.month': z
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
            description: 'Month of date. Must be from 1 to 12.',
            in: 'query',
            name: 'toDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'toDate.year': z
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
            description: 'Year of date. Must be from 1 to 9999.',
            in: 'query',
            name: 'toDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The resource id of the search application session stats, in the following format: searchapplications/{application_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetSearchApplicationUserStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.stats.indexing'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['operations'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'cloudsearch.operations.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.debug'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.debug'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.indexing'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
    },
  ],
})

export const getV1NameLroRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/lro',
  tags: ['operations'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'cloudsearch.operations.lro.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.debug'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.debug'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.indexing'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.query'],
    },
  ],
})

export const postV1InitializeCustomerRoute = createRoute({
  method: 'post',
  path: '/v1:initializeCustomer',
  tags: ['v1'],
  description:
    'Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.',
  operationId: 'cloudsearch.initializeCustomer',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: InitializeCustomerRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud_search.settings.indexing'],
    },
  ],
})
