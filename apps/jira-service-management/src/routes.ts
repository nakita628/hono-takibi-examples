import { createRoute, z } from '@hono/zod-openapi'

const SimpleLinkSchema = z
  .strictObject({
    href: z.string().exactOptional(),
    iconClass: z.string().exactOptional(),
    id: z.string().exactOptional(),
    label: z.string().exactOptional(),
    styleClass: z.string().exactOptional(),
    title: z.string().exactOptional(),
    weight: z.int32().exactOptional(),
  })
  .openapi({
    description: 'Details about the operations available in this version.',
    xml: { name: 'link' },
    required: [],
  })
  .openapi('SimpleLink')

type LinkGroupType = {
  groups?: LinkGroupType[]
  header?: z.infer<typeof SimpleLinkSchema>
  id?: string
  links?: z.infer<typeof SimpleLinkSchema>[]
  styleClass?: string
  weight?: number
}

type RequestTypeFieldValueDTOType = {
  children?: RequestTypeFieldValueDTOType[]
  label?: string
  value?: string
}

const AdditionalCommentDTOSchema = z
  .strictObject({
    body: z.string().exactOptional().openapi({ description: 'Content of the comment.' }),
  })
  .openapi({ required: [] })
  .openapi('AdditionalCommentDTO')

const SelfLinkDTOSchema = z
  .strictObject({ self: z.url().exactOptional() })
  .openapi({ required: [] })
  .openapi('SelfLinkDTO')

const UserLinkDTOSchema = z
  .strictObject({
    avatarUrls: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Links to the various sizes of the customer's avatar. Note that this property is deprecated, and will be removed in future versions.",
      }),
    jiraRest: z.url().exactOptional().openapi({ description: 'REST API URL for the customer.' }),
    self: z.url().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserLinkDTO')

const UserDTOSchema = z
  .strictObject({
    _links: UserLinkDTOSchema.exactOptional().openapi({
      description: 'URLs for the customer record and related items.',
    }),
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.',
      }),
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the customer is active (true) or inactive (false)' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Customer's name for display in a UI. Depending on the customer’s privacy settings, this may return an alternative value.",
      }),
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Customer's email address. Depending on the customer’s privacy settings, this may be returned as null.",
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Customer time zone. Depending on the customer’s privacy settings, this may be returned as null.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UserDTO')

const ApproverDTOSchema = z
  .strictObject({
    approver: UserDTOSchema.exactOptional().openapi({
      description: 'Details of the User who is providing approval.',
    }),
    approverDecision: z
      .enum(['approved', 'declined', 'pending'])
      .exactOptional()
      .openapi({ description: 'Decision made by the approver.' }),
  })
  .openapi({ required: [] })
  .openapi('ApproverDTO')

const DateDTOSchema = z
  .strictObject({
    epochMillis: z
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
          'Date as the number of milliseconds that have elapsed since 00:00:00 Coordinated Universal Time (UTC), 1 January 1970.',
      }),
    friendly: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date in a user-friendly text format.' }),
    iso8601: z.string().exactOptional().openapi({ description: 'Date in ISO8601 format.' }),
    jira: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date in the format used in the Jira REST APIs, which is ISO8601 format but extended with milliseconds. For example, 2016-09-28T23:08:32.097+1000.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DateDTO')

const ApprovalDTOSchema = z
  .strictObject({
    _links: SelfLinkDTOSchema.exactOptional().openapi({
      description: 'The REST API URL of the approval.',
    }),
    approvers: z
      .array(ApproverDTOSchema)
      .exactOptional()
      .openapi({
        description: 'Detailed list of the users who must provide a response to the approval.',
      }),
    canAnswerApproval: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the user making the request is one of the approvers and can respond to the approval (true) or not (false).',
      }),
    completedDate: DateDTOSchema.exactOptional().openapi({
      description: 'Date the approval was completed.',
    }),
    createdDate: DateDTOSchema.exactOptional().openapi({
      description: 'Date the approval was created.',
    }),
    finalDecision: z
      .enum(['approved', 'declined', 'pending'])
      .exactOptional()
      .openapi({
        description: 'Outcome of the approval, based on the approvals provided by all approvers.',
      }),
    id: z.string().exactOptional().openapi({ description: 'ID of the approval.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the approval being sought or provided.' }),
  })
  .openapi({ required: [] })
  .openapi('ApprovalDTO')

const ApprovalDecisionRequestDTOSchema = z
  .strictObject({
    decision: z
      .enum(['approve', 'decline'])
      .exactOptional()
      .openapi({ description: 'Response to the approval request.' }),
  })
  .openapi({ required: [] })
  .openapi('ApprovalDecisionRequestDTO')

const ContentDTOSchema = z
  .strictObject({
    iframeSrc: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Url containing the body of the article (without title), suitable for rendering in an iframe',
      }),
  })
  .openapi({ required: [] })
  .openapi('ContentDTO')

const SourceDTOSchema = z
  .looseObject({
    type: z
      .literal('confluence')
      .exactOptional()
      .openapi({ description: 'Type of the knowledge base source' }),
  })
  .openapi({ required: [] })
  .openapi('SourceDTO')

const ArticleDTOSchema = z
  .strictObject({
    content: ContentDTOSchema.exactOptional(),
    excerpt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Excerpt of the article which matches the given query string.' }),
    source: SourceDTOSchema.exactOptional().openapi({ description: 'Source of the article.' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the article.' }),
  })
  .openapi({ required: [] })
  .openapi('ArticleDTO')

const AssetsWorkspaceDTOSchema = z
  .strictObject({
    workspaceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The workspace ID used as the identifier to access the Assets REST API.',
      }),
  })
  .openapi({ description: 'Details of an Assets workspace ID.', required: [] })
  .openapi('AssetsWorkspaceDTO')

const AttachmentCreateDTOSchema = z
  .strictObject({
    additionalComment: AdditionalCommentDTOSchema.exactOptional().openapi({
      description: 'Additional content of the comment',
    }),
    public: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Controls whether the comment and its attachments are visible to customers',
      }),
    temporaryAttachmentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of IDs for the temporary attachments to be added to the customer request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AttachmentCreateDTO')

const PagedLinkDTOSchema = z
  .strictObject({
    base: z.url().exactOptional().openapi({ description: 'Base URL for the REST API calls.' }),
    context: z.string().exactOptional(),
    next: z
      .url()
      .exactOptional()
      .openapi({ description: 'REST API URL for the next page, if there is one.' }),
    prev: z
      .url()
      .exactOptional()
      .openapi({ description: 'REST API URL for the previous page, if there is one.' }),
    self: z.url().exactOptional().openapi({ description: 'REST API URL for the current page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedLinkDTO')

const AttachmentLinkDTOSchema = z
  .strictObject({
    content: z.url().exactOptional().openapi({ description: 'URL for the attachment.' }),
    jiraRest: z.url().exactOptional().openapi({ description: 'REST API URL for the attachment' }),
    self: z.url().exactOptional(),
    thumbnail: z
      .url()
      .exactOptional()
      .openapi({ description: "URL for the attachment's thumbnail image." }),
  })
  .openapi({ required: [] })
  .openapi('AttachmentLinkDTO')

const AttachmentDTOSchema = z
  .strictObject({
    _links: AttachmentLinkDTOSchema.exactOptional().openapi({
      description: 'Various URLs for the attachment.',
    }),
    author: UserDTOSchema.exactOptional().openapi({
      description: 'Details of the user who attached the file.',
    }),
    created: DateDTOSchema.exactOptional().openapi({
      description: 'Date the attachment was added.',
    }),
    filename: z.string().exactOptional().openapi({ description: 'Filename of the item attached.' }),
    mimeType: z.string().exactOptional().openapi({ description: 'MIME type of the attachment.' }),
    size: z
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
        description: 'Size of the attachment in bytes.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AttachmentDTO')

const PagedDTOAttachmentDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(AttachmentDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOAttachmentDTO')

const RenderedValueDTOSchema = z
  .strictObject({ html: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RenderedValueDTO')

const CommentDTOSchema = z
  .strictObject({
    _expands: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of items that can be expanded in the response by specifying the expand query parameter.',
      }),
    _links: SelfLinkDTOSchema.exactOptional().openapi({
      description: 'REST API URL link to the comment.',
    }),
    attachments: PagedDTOAttachmentDTOSchema.exactOptional().openapi({
      description: 'List of the attachments included in the comment.',
    }),
    author: UserDTOSchema.exactOptional().openapi({
      description: 'Details of the customer who authored the comment.',
    }),
    body: z.string().exactOptional().openapi({ description: 'Content of the comment.' }),
    created: DateDTOSchema.exactOptional().openapi({
      description: 'Date the comment was created.',
    }),
    id: z.string().exactOptional().openapi({ description: 'ID of the comment.' }),
    public: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the comment is public (true) or private/internal (false).',
      }),
    renderedBody: RenderedValueDTOSchema.exactOptional().openapi({
      description: 'The rendered body of the comment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CommentDTO')

const AttachmentCreateResultDTOSchema = z
  .strictObject({
    attachments: PagedDTOAttachmentDTOSchema.exactOptional().openapi({
      description: 'List of the attachments added.',
    }),
    comment: CommentDTOSchema.exactOptional().openapi({
      description: 'Details of the comment included with the attachments.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AttachmentCreateResultDTO')

const AvatarUrlsBeanSchema = z
  .strictObject({
    '16x16': z
      .url()
      .exactOptional()
      .openapi({ description: "The URL of the item's 16x16 pixel avatar." }),
    '24x24': z
      .url()
      .exactOptional()
      .openapi({ description: "The URL of the item's 24x24 pixel avatar." }),
    '32x32': z
      .url()
      .exactOptional()
      .openapi({ description: "The URL of the item's 32x32 pixel avatar." }),
    '48x48': z
      .url()
      .exactOptional()
      .openapi({ description: "The URL of the item's 48x48 pixel avatar." }),
  })
  .openapi({ required: [] })
  .openapi('AvatarUrlsBean')

const CSATFeedbackFullDTOSchema = z
  .strictObject({
    comment: AdditionalCommentDTOSchema.exactOptional().openapi({
      description: '(Optional) The comment provided with this feedback.',
    }),
    rating: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A numeric representation of the rating, this must be an integer value between 1 and 5.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates the type of feedback, supported values: `csat`.' }),
  })
  .openapi({ required: [] })
  .openapi('CSATFeedbackFullDTO')

const ChangeDetailsSchema = z
  .strictObject({
    field: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the field changed.', readOnly: true }),
    fieldId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the field changed.', readOnly: true }),
    fieldtype: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the field changed.', readOnly: true }),
    from: z
      .string()
      .exactOptional()
      .openapi({ description: 'The details of the original value.', readOnly: true }),
    fromString: z
      .string()
      .exactOptional()
      .openapi({ description: 'The details of the original value as a string.', readOnly: true }),
    to: z
      .string()
      .exactOptional()
      .openapi({ description: 'The details of the new value.', readOnly: true }),
    toString: z
      .preprocess(
        (val) => (typeof val === 'function' || val === Object.prototype ? undefined : val),
        z.string().optional(),
      )
      .exactOptional()
      .openapi({ description: 'The details of the new value as a string.', readOnly: true }),
  })
  .openapi({ description: 'A change item.', required: [] })
  .openapi('ChangeDetails')

const UserDetailsSchema = z
  .strictObject({
    accountId: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.',
      }),
    accountType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)",
        readOnly: true,
      }),
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user is active.', readOnly: true }),
    avatarUrls: AvatarUrlsBeanSchema.exactOptional().openapi({
      description: 'The avatars of the user.',
      readOnly: true,
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.',
        readOnly: true,
      }),
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address of the user. Depending on the user’s privacy settings, this may be returned as null.',
        readOnly: true,
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.',
        readOnly: true,
      }),
    self: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the user.', readOnly: true }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.",
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "User details permitted by the user's Atlassian Account privacy settings. However, be aware of these exceptions:\n\n *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, `displayName` provides an indication and other parameters have default values or are blank (for example, email is blank).\n *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, `accountId` returns *unknown* and all other parameters have fallback values.\n *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values.",
    required: [],
  })
  .openapi('UserDetails')

const HistoryMetadataParticipantSchema = z
  .looseObject({
    avatarUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to an avatar for the user or system associated with a history record.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The display name of the user or system associated with a history record.',
      }),
    displayNameKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key of the display name of the user or system associated with a history record.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user or system associated with a history record.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the user or system associated with a history record.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the user or system associated with a history record.' }),
  })
  .openapi({
    description: 'Details of user or system associated with a issue history metadata item.',
    required: [],
  })
  .openapi('HistoryMetadataParticipant')

const HistoryMetadataSchema = z
  .looseObject({
    activityDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The activity described in the history record.' }),
    activityDescriptionKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key of the activity described in the history record.' }),
    actor: HistoryMetadataParticipantSchema.exactOptional().openapi({
      description: 'Details of the user whose action created the history record.',
    }),
    cause: HistoryMetadataParticipantSchema.exactOptional().openapi({
      description: 'Details of the cause that triggered the creation the history record.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the history record.' }),
    descriptionKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description key of the history record.' }),
    emailDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the email address associated the history record.',
      }),
    emailDescriptionKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description key of the email address associated the history record.',
      }),
    extraData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Additional arbitrary information about the history record.' }),
    generator: HistoryMetadataParticipantSchema.exactOptional().openapi({
      description: 'Details of the system that generated the history record.',
    }),
    type: z.string().exactOptional().openapi({ description: 'The type of the history record.' }),
  })
  .openapi({ description: 'Details of issue history metadata.', required: [] })
  .openapi('HistoryMetadata')

const ChangelogSchema = z
  .strictObject({
    author: UserDetailsSchema.exactOptional().openapi({
      description: 'The user who made the change.',
      readOnly: true,
    }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date on which the change took place.', readOnly: true }),
    historyMetadata: HistoryMetadataSchema.exactOptional().openapi({
      description: 'The history metadata associated with the changed.',
      readOnly: true,
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the changelog.', readOnly: true }),
    items: z
      .array(ChangeDetailsSchema)
      .exactOptional()
      .openapi({ description: 'The list of items changed.', readOnly: true }),
  })
  .openapi({
    description:
      'A log of changes made to issue fields. Changelogs related to workflow associations are currently being deprecated.',
    required: [],
  })
  .openapi('Changelog')

const CommentCreateDTOSchema = z
  .strictObject({
    body: z.string().exactOptional().openapi({ description: 'Content of the comment.' }),
    public: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the comment is public (true) or private/internal (false).',
      }),
  })
  .openapi({ required: [] })
  .openapi('CommentCreateDTO')

const CustomerCreateDTOSchema = z
  .strictObject({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: "Customer's name for display in the UI." }),
    email: z.string().exactOptional().openapi({ description: "Customer's email address." }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({ description: "Deprecated, please use 'displayName'." }),
  })
  .openapi({ required: [] })
  .openapi('CustomerCreateDTO')

const CustomerRequestActionDTOSchema = z
  .strictObject({
    allowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the user can undertake the action (true) or not (false).',
      }),
  })
  .openapi({ required: [] })
  .openapi('CustomerRequestActionDTO')

const CustomerRequestActionsDTOSchema = z
  .strictObject({
    addAttachment: CustomerRequestActionDTOSchema.exactOptional().openapi({
      description: 'Action of adding attachments to a request.',
    }),
    addComment: CustomerRequestActionDTOSchema.exactOptional().openapi({
      description: 'Action of adding comments to a request.',
    }),
    addParticipant: CustomerRequestActionDTOSchema.exactOptional().openapi({
      description: 'Action of adding participants to a request.',
    }),
    removeParticipant: CustomerRequestActionDTOSchema.exactOptional().openapi({
      description: 'Action of removing participants from a request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CustomerRequestActionsDTO')

const RequestTypeFieldValueDTOSchema: z.ZodType<RequestTypeFieldValueDTOType> = z
  .lazy(() =>
    z
      .strictObject({
        children: z
          .array(RequestTypeFieldValueDTOSchema)
          .exactOptional()
          .openapi({ description: 'List of child fields.' }),
        label: z.string().exactOptional().openapi({ description: 'Label for the field.' }),
        value: z.string().exactOptional().openapi({ description: 'Value of the field.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('RequestTypeFieldValueDTO')

const JsonTypeBeanSchema = z
  .strictObject({
    configuration: z
      .record(z.string(), z.any().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({
        description: 'If the field is a custom field, the configuration of the field.',
        readOnly: true,
      }),
    custom: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the field is a custom field, the URI of the field.',
        readOnly: true,
      }),
    customId: z
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
        description: 'If the field is a custom field, the custom ID of the field.',
        readOnly: true,
      }),
    items: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When the data type is an array, the name of the field items within the array.',
        readOnly: true,
      }),
    system: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the field is a system field, the name of the field.',
        readOnly: true,
      }),
    type: z.string().openapi({ description: 'The data type of the field.', readOnly: true }),
  })
  .openapi({ description: 'The schema of a field.', required: ['type'] })
  .openapi('JsonTypeBean')

const RequestTypeFieldDTOSchema = z
  .strictObject({
    defaultValues: z
      .array(RequestTypeFieldValueDTOSchema)
      .exactOptional()
      .openapi({ description: 'List of default values for the field.' }),
    description: z.string().exactOptional().openapi({ description: 'Description of the field.' }),
    fieldId: z.string().exactOptional().openapi({ description: 'ID of the field.' }),
    jiraSchema: JsonTypeBeanSchema.exactOptional().openapi({
      description: 'Jira specific implementation details for the field in the UI.',
    }),
    name: z.string().exactOptional().openapi({ description: 'Name of the field.' }),
    presetValues: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of preset values for the field.' }),
    required: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the field is required (true) or not (false).' }),
    validValues: z
      .array(RequestTypeFieldValueDTOSchema)
      .exactOptional()
      .openapi({ description: 'List of valid values for the field.' }),
    visible: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RequestTypeFieldDTO')

const CustomerRequestCreateMetaDTOSchema = z
  .strictObject({
    canAddRequestParticipants: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag indicating if participants can be added to a request (true) or not.',
      }),
    canRaiseOnBehalfOf: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag indicating if a request can be raised on behalf of another user (true) or not.',
      }),
    requestTypeFields: z
      .array(RequestTypeFieldDTOSchema)
      .exactOptional()
      .openapi({ description: 'List of the fields included in this request.' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerRequestCreateMetaDTO')

const CustomerRequestLinkDTOSchema = z
  .strictObject({
    agent: z.url().exactOptional().openapi({ description: 'Jira agent view URL for the request.' }),
    jiraRest: z.url().exactOptional().openapi({ description: 'REST API URL for the request.' }),
    self: z.url().exactOptional(),
    web: z.url().exactOptional().openapi({ description: 'Web URL for the request.' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerRequestLinkDTO')

const PagedDTOCommentDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(CommentDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOCommentDTO')

const CustomerRequestStatusDTOSchema = z
  .strictObject({
    status: z.string().exactOptional().openapi({ description: 'Name of the status condition.' }),
    statusCategory: z
      .enum(['UNDEFINED', 'NEW', 'INDETERMINATE', 'DONE'])
      .exactOptional()
      .openapi({ description: 'Status category the status belongs to.' }),
    statusDate: DateDTOSchema.exactOptional().openapi({
      description: 'Date on which the status was attained.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CustomerRequestStatusDTO')

const PagedDTOUserDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(UserDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOUserDTO')

const CustomerRequestFieldValueDTOSchema = z
  .strictObject({
    fieldId: z.string().exactOptional().openapi({ description: 'ID of the field.' }),
    label: z.string().exactOptional().openapi({ description: 'Text label for the field.' }),
    renderedValue: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Value of the field rendered in the UI.' }),
    value: z.any().exactOptional().openapi({ description: 'Value of the field.' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerRequestFieldValueDTO')

const RequestTypeIconLinkDTOSchema = z
  .strictObject({
    iconUrls: z
      .record(z.string(), z.url())
      .exactOptional()
      .openapi({ description: 'URLs for the request type icons.' }),
  })
  .openapi({ required: [] })
  .openapi('RequestTypeIconLinkDTO')

const RequestTypeIconDTOSchema = z
  .strictObject({
    _links: RequestTypeIconLinkDTOSchema.exactOptional().openapi({
      description: 'Map of the URLs for the request type icons.',
    }),
    id: z.string().exactOptional().openapi({ description: 'ID of the request type icon.' }),
  })
  .openapi({ required: [] })
  .openapi('RequestTypeIconDTO')

const RequestTypeDTOSchema = z
  .strictObject({
    _expands: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of items that can be expanded in the response by specifying the expand query parameter.',
      }),
    _links: SelfLinkDTOSchema.exactOptional().openapi({
      description: 'REST API URL for the request type.',
    }),
    canCreateRequest: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the user has permission to create a request with this request type.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the request type.' }),
    fields: CustomerRequestCreateMetaDTOSchema.exactOptional().openapi({
      description:
        'Fields and additional metadata for creating a request that uses the request type',
    }),
    groupIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of the request type groups the request type belongs to.' }),
    helpText: z
      .string()
      .exactOptional()
      .openapi({ description: 'Help text for the request type.' }),
    icon: RequestTypeIconDTOSchema.exactOptional().openapi({
      description: "Links to the request type's icons.",
    }),
    id: z.string().exactOptional().openapi({ description: 'ID for the request type.' }),
    issueTypeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the issue type the request type is based upon.' }),
    name: z.string().exactOptional().openapi({ description: 'Short name for the request type.' }),
    portalId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the customer portal associated with the service desk project.',
      }),
    practice: z.string().exactOptional().openapi({ description: "The request type's practice" }),
    restrictionStatus: z
      .enum(['OPEN', 'RESTRICTED'])
      .exactOptional()
      .openapi({ description: 'Whether request type is restricted or not.' }),
    serviceDeskId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the service desk the request type belongs to.' }),
  })
  .openapi({ required: [] })
  .openapi('RequestTypeDTO')

const ServiceDeskDTOSchema = z
  .strictObject({
    _links: SelfLinkDTOSchema.exactOptional().openapi({
      description: 'REST API URL to the service desk.',
    }),
    id: z.string().exactOptional().openapi({ description: 'ID of the service desk.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the peer project for the service desk.' }),
    projectKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Key of the peer project of the service desk.' }),
    projectName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the project and service desk.' }),
    projectTypeKey: z.string().exactOptional().openapi({ description: 'Key of the project type.' }),
  })
  .openapi({ required: [] })
  .openapi('ServiceDeskDTO')

const DurationDTOSchema = z
  .strictObject({
    friendly: z
      .string()
      .exactOptional()
      .openapi({ description: 'Duration in a user-friendly text format.' }),
    millis: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Duration in milliseconds.' }),
  })
  .openapi({ required: [] })
  .openapi('DurationDTO')

const SlaInformationCompletedCycleDTOSchema = z
  .strictObject({
    breachTime: DateDTOSchema.exactOptional().openapi({
      description:
        'Time and date at which the SLA cycle breached in case of completed breached cycle or would have breached in case of non-breached completed cycle.',
    }),
    breached: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the SLA (duration) was exceeded (true) or not (false).',
      }),
    elapsedTime: DurationDTOSchema.exactOptional().openapi({
      description: 'Duration in which the service was completed.',
    }),
    goalDuration: DurationDTOSchema.exactOptional().openapi({
      description: 'Duration within which the service should have been completed.',
    }),
    remainingTime: DurationDTOSchema.exactOptional().openapi({
      description: 'Duration remaining after the service was completed.',
    }),
    startTime: DateDTOSchema.exactOptional().openapi({
      description: 'Time and date at which the SLA cycle started.',
    }),
    stopTime: DateDTOSchema.exactOptional().openapi({
      description: 'Time and date at which the SLA cycle completed.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SlaInformationCompletedCycleDTO')

const SlaInformationOngoingCycleDTOSchema = z
  .strictObject({
    breachTime: DateDTOSchema.exactOptional().openapi({
      description: 'Time and date at which the SLA cycle would have breached its limit.',
    }),
    breached: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the SLA has been breached (true) or not (false).',
      }),
    elapsedTime: DurationDTOSchema.exactOptional().openapi({
      description: 'Duration of the service.',
    }),
    goalDuration: DurationDTOSchema.exactOptional().openapi({
      description: 'Duration within which the service should be completed.',
    }),
    paused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the SLA is paused (true) or not (false).' }),
    remainingTime: DurationDTOSchema.exactOptional().openapi({
      description: 'Duration remaining in which to complete the service.',
    }),
    startTime: DateDTOSchema.exactOptional().openapi({
      description: 'Time and date at which the SLA cycle started.',
    }),
    withinCalendarHours: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the SLA it timed during calendared working hours only (true) or not (false).',
      }),
  })
  .openapi({ required: [] })
  .openapi('SlaInformationOngoingCycleDTO')

const SlaInformationDTOSchema = z
  .strictObject({
    _links: SelfLinkDTOSchema.exactOptional().openapi({ description: 'REST API URL for the SLA.' }),
    completedCycles: z
      .array(SlaInformationCompletedCycleDTOSchema)
      .exactOptional()
      .openapi({ description: 'List of completed cycles for the SLA.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the Service Level Agreement (SLA).' }),
    name: z.string().exactOptional().openapi({ description: 'Description of the SLA.' }),
    ongoingCycle: SlaInformationOngoingCycleDTOSchema.exactOptional().openapi({
      description: 'Details of the active cycle for the SLA.',
    }),
    slaDisplayFormat: z
      .string()
      .exactOptional()
      .openapi({ description: 'Format in which SLA is to be displayed in the UI' }),
  })
  .openapi({ required: [] })
  .openapi('SlaInformationDTO')

const PagedDTOSlaInformationDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(SlaInformationDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOSlaInformationDTO')

const PagedDTOCustomerRequestStatusDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(CustomerRequestStatusDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOCustomerRequestStatusDTO')

const CustomerRequestDTOSchema = z
  .strictObject({
    _expands: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of items that can be expanded in the response by specifying the expand query parameter.',
      }),
    _links: CustomerRequestLinkDTOSchema.exactOptional().openapi({
      description: 'List of links associated with the request.',
    }),
    actions: CustomerRequestActionsDTOSchema.exactOptional().openapi({
      description: 'List of actions that the user can take on the request.',
    }),
    attachments: PagedDTOAttachmentDTOSchema.exactOptional().openapi({
      description: 'List of attachments included with the request.',
    }),
    comments: PagedDTOCommentDTOSchema.exactOptional().openapi({
      description: 'List of comments included with the request.',
    }),
    createdDate: DateDTOSchema.exactOptional().openapi({
      description: 'Date on which the request was created.',
    }),
    currentStatus: CustomerRequestStatusDTOSchema.exactOptional().openapi({
      description: 'Status of the request.',
    }),
    issueId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the request, as the peer issue ID.' }),
    issueKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Key of the request, as the peer issue key.' }),
    participants: PagedDTOUserDTOSchema.exactOptional().openapi({
      description: 'Expandable details of the customers participating in the request.',
    }),
    reporter: UserDTOSchema.exactOptional().openapi({
      description: 'Details of the customer reporting the request.',
    }),
    requestFieldValues: z
      .array(CustomerRequestFieldValueDTOSchema)
      .exactOptional()
      .openapi({
        description:
          'JSON map of Jira field IDs and their values representing the content of the request. This list does not include hidden fields.',
      }),
    requestType: RequestTypeDTOSchema.exactOptional().openapi({
      description: 'Expandable details of the request type.',
    }),
    requestTypeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the request type for the request.' }),
    serviceDesk: ServiceDeskDTOSchema.exactOptional().openapi({
      description: 'Expandable details of the service desk.',
    }),
    serviceDeskId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the service desk the request belongs to.' }),
    sla: PagedDTOSlaInformationDTOSchema.exactOptional().openapi({
      description: 'Expandable details of the SLAs relating to the request.',
    }),
    status: PagedDTOCustomerRequestStatusDTOSchema.exactOptional().openapi({
      description: "Expandable details of the request's status history.",
    }),
    summary: z.string().exactOptional().openapi({ description: 'Summary of the request created' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerRequestDTO')

const CustomerTransitionDTOSchema = z
  .strictObject({
    id: z.string().exactOptional().openapi({ description: 'ID of the transition.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the transition.' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerTransitionDTO')

const CustomerTransitionExecutionDTOSchema = z
  .strictObject({
    additionalComment: AdditionalCommentDTOSchema.exactOptional().openapi({
      description: 'Comment explaining the reason for the transition.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the transition to be performed.' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerTransitionExecutionDTO')

const EntityPropertySchema = z
  .strictObject({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key of the property. Required on create and update.' }),
    value: z
      .any()
      .exactOptional()
      .openapi({ description: 'The value of the property. Required on create and update.' }),
  })
  .openapi({
    description:
      'An entity property, for more information see [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).',
    required: [],
  })
  .openapi('EntityProperty')

const I18nErrorMessageSchema = z
  .strictObject({
    i18nKey: z.string().exactOptional(),
    parameters: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('I18nErrorMessage')

const ErrorResponseSchema = z
  .strictObject({
    errorMessage: z.string().exactOptional(),
    i18nErrorMessage: I18nErrorMessageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const ExpandableSchema = z
  .strictObject({ _expands: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('Expandable')

const FieldMetadataSchema = z
  .strictObject({
    allowedValues: z
      .array(z.any().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({ description: 'The list of values allowed in the field.', readOnly: true }),
    autoCompleteUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL that can be used to automatically complete the field.',
        readOnly: true,
      }),
    configuration: z
      .record(z.string(), z.any().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({ description: 'The configuration properties.', readOnly: true }),
    defaultValue: z
      .any()
      .exactOptional()
      .openapi({ description: 'The default value of the field.', readOnly: true }),
    hasDefaultValue: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the field has a default value.', readOnly: true }),
    key: z.string().openapi({ description: 'The key of the field.', readOnly: true }),
    name: z.string().openapi({ description: 'The name of the field.', readOnly: true }),
    operations: z
      .array(z.string().openapi({ readOnly: true }))
      .openapi({
        description: 'The list of operations that can be performed on the field.',
        readOnly: true,
      }),
    required: z
      .boolean()
      .openapi({ description: 'Whether the field is required.', readOnly: true }),
    schema: JsonTypeBeanSchema.openapi({
      description: 'The data type of the field.',
      readOnly: true,
    }),
  })
  .openapi({
    description: 'The metadata describing an issue field.',
    required: ['key', 'name', 'operations', 'required', 'schema'],
    xml: { name: 'availableField' },
  })
  .openapi('FieldMetadata')

const JsonNodeSchema = z
  .strictObject({
    array: z.boolean().exactOptional(),
    bigDecimal: z.boolean().exactOptional(),
    bigInteger: z.boolean().exactOptional(),
    bigIntegerValue: z.int().exactOptional(),
    binary: z.boolean().exactOptional(),
    binaryValue: z.array(z.string()).exactOptional(),
    boolean: z.boolean().exactOptional(),
    booleanValue: z.boolean().exactOptional(),
    containerNode: z.boolean().exactOptional(),
    decimalValue: z.number().exactOptional(),
    double: z.boolean().exactOptional(),
    doubleValue: z.float64().exactOptional(),
    elements: z.object({}).exactOptional(),
    fieldNames: z.object({}).exactOptional(),
    fields: z.object({}).exactOptional(),
    floatingPointNumber: z.boolean().exactOptional(),
    int: z.boolean().exactOptional(),
    intValue: z.int32().exactOptional(),
    integralNumber: z.boolean().exactOptional(),
    long: z.boolean().exactOptional(),
    longValue: z
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
    missingNode: z.boolean().exactOptional(),
    null: z.boolean().exactOptional(),
    number: z.boolean().exactOptional(),
    numberType: z
      .enum(['INT', 'LONG', 'BIG_INTEGER', 'FLOAT', 'DOUBLE', 'BIG_DECIMAL'])
      .exactOptional(),
    numberValue: z.number().exactOptional(),
    object: z.boolean().exactOptional(),
    pojo: z.boolean().exactOptional(),
    textValue: z.string().exactOptional(),
    textual: z.boolean().exactOptional(),
    valueAsBoolean: z.boolean().exactOptional(),
    valueAsDouble: z.float64().exactOptional(),
    valueAsInt: z.int32().exactOptional(),
    valueAsLong: z
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
    valueAsText: z.string().exactOptional(),
    valueNode: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JsonNode')

const FormAnswerSchema = z
  .strictObject({
    adf: JsonNodeSchema.exactOptional().openapi({
      description: 'Answer in Atlassian Document Format (ADF)',
    }),
    choices: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IDs of selected choices' }),
    date: z.string().exactOptional().openapi({ description: 'Answer in date format (yyyy-MM-dd)' }),
    files: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The IDs of files to be attached to the form that are obtained by calling the ‘attach temporary file’ endpoint on the corresponding service desk.',
      }),
    text: z.string().exactOptional().openapi({ description: 'Answer in free text format' }),
    time: z.string().exactOptional().openapi({ description: 'Answer in timestamp format (HH:mm)' }),
    users: z.array(z.string()).exactOptional().openapi({ description: 'IDs of selected users' }),
  })
  .openapi({ required: [] })
  .openapi('FormAnswer')

const FormSchema = z
  .looseObject({
    answers: z
      .record(z.string(), FormAnswerSchema)
      .exactOptional()
      .openapi({
        description:
          'JSON mapping of form field answers containing form field IDs and corresponding values.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Form')

const FormValidationErrorContextDTOSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the form entity related to the validation error.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of form entity related to the validation error.' }),
  })
  .openapi({ required: [] })
  .openapi('FormValidationErrorContextDTO')

const FormValidationErrorDTOSchema = z
  .strictObject({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Machine-readable validation error code.' }),
    context: z
      .array(FormValidationErrorContextDTOSchema)
      .exactOptional()
      .openapi({ description: 'Identifies the form entity that caused the validation error.' }),
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detailed validation error message.' }),
    status: z.int32().exactOptional().openapi({ description: 'The HTTP status code.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short summary of the validation error.' }),
  })
  .openapi({ required: [] })
  .openapi('FormValidationErrorDTO')

const I18nErrorMessageDTOSchema = z
  .strictObject({
    i18nKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internationalization key for the error message.' }),
    parameters: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Parameters used to render the internationalized error message.' }),
  })
  .openapi({ required: [] })
  .openapi('I18nErrorMessageDTO')

const FormValidationErrorResponseDTOSchema = z
  .strictObject({
    errorMessage: z.string().exactOptional().openapi({ description: 'Description of the error.' }),
    errors: z
      .array(FormValidationErrorDTOSchema)
      .exactOptional()
      .openapi({ description: 'A list of validation errors.' }),
    i18nErrorMessage: I18nErrorMessageDTOSchema.exactOptional().openapi({
      description: 'Internationalized error message details.',
    }),
  })
  .openapi({ required: [] })
  .openapi('FormValidationErrorResponseDTO')

const IncludedFieldsSchema = z
  .strictObject({
    actuallyIncluded: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    excluded: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    included: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IncludedFields')

const InputStreamSourceSchema = z
  .strictObject({ inputStream: z.object({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('InputStreamSource')

const InsightWorkspaceDTOSchema = z
  .strictObject({
    workspaceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The workspace ID used as the identifier to access the Insight REST API.',
      }),
  })
  .openapi({ description: 'Details of an insight workspace ID.', required: [] })
  .openapi('InsightWorkspaceDTO')

const PageOfChangelogsSchema = z
  .strictObject({
    histories: z
      .array(ChangelogSchema)
      .exactOptional()
      .openapi({ description: 'The list of changelogs.', readOnly: true }),
    maxResults: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The maximum number of results that could be on the page.',
        readOnly: true,
      }),
    startAt: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The index of the first item returned on the page.',
        readOnly: true,
      }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of results on the page.', readOnly: true }),
  })
  .openapi({ description: 'A page of changelogs.', required: [] })
  .openapi('PageOfChangelogs')

const IssueUpdateMetadataSchema = z
  .object({
    fields: z.record(z.string(), FieldMetadataSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ description: 'A list of editable field details.', required: [] })
  .openapi('IssueUpdateMetadata')

const LinkGroupSchema: z.ZodType<LinkGroupType> = z
  .lazy(() =>
    z
      .strictObject({
        groups: z.array(LinkGroupSchema).exactOptional(),
        header: SimpleLinkSchema.exactOptional(),
        id: z.string().exactOptional(),
        links: z.array(SimpleLinkSchema).exactOptional(),
        styleClass: z.string().exactOptional(),
        weight: z.int32().exactOptional(),
      })
      .openapi({
        description: 'Details a link group, which defines issue operations.',
        required: [],
      }),
  )
  .openapi('LinkGroup')

const OperationsSchema = z
  .looseObject({
    linkGroups: z
      .array(LinkGroupSchema)
      .exactOptional()
      .openapi({
        description: 'Details of the link groups defining issue operations.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Details of the operations that can be performed on the issue.',
    required: [],
  })
  .openapi('Operations')

const UpdatedProjectCategorySchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the project category.', readOnly: true }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the project category.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the project category.', readOnly: true }),
    self: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the project category.', readOnly: true }),
  })
  .openapi({ description: 'A project category.', required: [] })
  .openapi('UpdatedProjectCategory')

const ProjectDetailsSchema = z
  .strictObject({
    avatarUrls: AvatarUrlsBeanSchema.exactOptional().openapi({
      description: "The URLs of the project's avatars.",
      readOnly: true,
    }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the project.' }),
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key of the project.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the project.', readOnly: true }),
    projectCategory: UpdatedProjectCategorySchema.exactOptional().openapi({
      description: 'The category the project belongs to.',
      readOnly: true,
    }),
    projectTypeKey: z
      .enum(['software', 'service_desk', 'business', 'product_discovery'])
      .exactOptional()
      .openapi({
        description:
          'The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.',
        readOnly: true,
      }),
    self: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the project details.', readOnly: true }),
    simplified: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the project is simplified.', readOnly: true }),
  })
  .openapi({ description: 'Details about a project.', required: [] })
  .openapi('ProjectDetails')

const ScopeSchema = z
  .looseObject({
    project: ProjectDetailsSchema.exactOptional().openapi({
      description: 'The project the item has scope in.',
      readOnly: true,
    }),
    type: z
      .enum(['PROJECT', 'TEMPLATE'])
      .exactOptional()
      .openapi({ description: 'The type of scope.', readOnly: true }),
  })
  .openapi({
    description:
      'The projects the item is associated with. Indicated for items associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).',
    required: [],
  })
  .openapi('Scope')

const StatusCategorySchema = z
  .looseObject({
    colorName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the color used to represent the status category.',
        readOnly: true,
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
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The ID of the status category.',
        readOnly: true,
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key of the status category.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the status category.', readOnly: true }),
    self: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the status category.', readOnly: true }),
  })
  .openapi({ description: 'A status category.', required: [] })
  .openapi('StatusCategory')

const StatusDetailsSchema = z
  .looseObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the status.', readOnly: true }),
    iconUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL of the icon used to represent the status.',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the status.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the status.', readOnly: true }),
    scope: ScopeSchema.exactOptional().openapi({
      description: 'The scope of the field.',
      readOnly: true,
    }),
    self: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the status.', readOnly: true }),
    statusCategory: StatusCategorySchema.exactOptional().openapi({
      description: 'The category assigned to the status.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'A status.', required: [] })
  .openapi('StatusDetails')

const IssueTransitionSchema = z
  .looseObject({
    expand: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Expand options that include additional transition details in the response.',
        readOnly: true,
      }),
    fields: z
      .record(z.string(), FieldMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request.',
        readOnly: true,
      }),
    hasScreen: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether there is a screen associated with the issue transition.',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the issue transition. Required when specifying a transition to undertake.',
      }),
    isAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the transition is available to be performed.',
        readOnly: true,
      }),
    isConditional: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the issue has to meet criteria before the issue transition is applied.',
        readOnly: true,
      }),
    isGlobal: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the issue transition is global, that is, the transition is applied to issues regardless of their status.',
        readOnly: true,
      }),
    isInitial: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this is the initial issue transition for the workflow.',
        readOnly: true,
      }),
    looped: z.boolean().exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the issue transition.', readOnly: true }),
    to: StatusDetailsSchema.exactOptional().openapi({
      description: 'Details of the issue status after the transition.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'Details of an issue transition.', required: [] })
  .openapi('IssueTransition')

const IssueBeanSchema = z
  .strictObject({
    changelog: PageOfChangelogsSchema.exactOptional().openapi({
      description: 'Details of changelogs associated with the issue.',
      readOnly: true,
    }),
    editmeta: IssueUpdateMetadataSchema.exactOptional().openapi({
      description: 'The metadata for the fields on the issue that can be amended.',
      readOnly: true,
    }),
    expand: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Expand options that include additional issue details in the response.',
        readOnly: true,
        xml: { attribute: true },
      }),
    fields: z.record(z.string(), z.any()).exactOptional(),
    fieldsToInclude: IncludedFieldsSchema.exactOptional(),
    id: z.string().exactOptional().openapi({ description: 'The ID of the issue.', readOnly: true }),
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key of the issue.', readOnly: true }),
    names: z
      .record(z.string(), z.string().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({
        description: 'The ID and name of each field present on the issue.',
        readOnly: true,
      }),
    operations: OperationsSchema.exactOptional().openapi({
      description: 'The operations that can be performed on the issue.',
      readOnly: true,
    }),
    properties: z
      .record(z.string(), z.any().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({
        description: 'Details of the issue properties identified in the request.',
        readOnly: true,
      }),
    renderedFields: z
      .record(z.string(), z.any().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({
        description: 'The rendered value of each field present on the issue.',
        readOnly: true,
      }),
    schema: z
      .record(z.string(), JsonTypeBeanSchema)
      .exactOptional()
      .openapi({
        description: 'The schema describing each field present on the issue.',
        readOnly: true,
      }),
    self: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL of the issue details.', readOnly: true }),
    transitions: z
      .array(IssueTransitionSchema)
      .exactOptional()
      .openapi({
        description: 'The transitions that can be performed on the issue.',
        readOnly: true,
      }),
    versionedRepresentations: z
      .record(
        z.string(),
        z.record(z.string(), z.any().openapi({ readOnly: true })).openapi({ readOnly: true }),
      )
      .exactOptional()
      .openapi({ description: 'The versions of each field on the issue.', readOnly: true }),
  })
  .openapi({ description: 'Details about an issue.', xml: { name: 'issue' }, required: [] })
  .openapi('IssueBean')

const LinkableSchema = z
  .strictObject({ _links: SelfLinkDTOSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Linkable')

const LinkableAttachmentLinkDTOSchema = z
  .strictObject({ _links: AttachmentLinkDTOSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('LinkableAttachmentLinkDTO')

const LinkableCustomerRequestLinkDTOSchema = z
  .strictObject({ _links: CustomerRequestLinkDTOSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('LinkableCustomerRequestLinkDTO')

const LinkableUserLinkDTOSchema = z
  .strictObject({ _links: UserLinkDTOSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('LinkableUserLinkDTO')

const ResourceSchema = z
  .strictObject({
    contentAsByteArray: z.array(z.string()).exactOptional(),
    description: z.string().exactOptional(),
    file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
    filename: z.string().exactOptional(),
    inputStream: z.object({}).exactOptional(),
    open: z.boolean().exactOptional(),
    readable: z.boolean().exactOptional(),
    uri: z.url().exactOptional(),
    url: z.url().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Resource')

const MultipartFileSchema = z
  .strictObject({
    bytes: z.array(z.string()).exactOptional(),
    contentType: z.string().exactOptional(),
    empty: z.boolean().exactOptional(),
    inputStream: z.object({}).exactOptional(),
    name: z.string().exactOptional(),
    originalFilename: z.string().exactOptional(),
    resource: ResourceSchema.exactOptional(),
    size: z
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
  .openapi({ required: [] })
  .openapi('MultipartFile')

const OrganizationCreateDTOSchema = z
  .strictObject({
    name: z
      .string()
      .openapi({ description: 'Name of the organization. Must contain 1-200 characters.' }),
  })
  .openapi({ required: ['name'] })
  .openapi('OrganizationCreateDTO')

const OrganizationDTOSchema = z
  .strictObject({
    _links: SelfLinkDTOSchema.exactOptional().openapi({
      description: 'REST API URL to the organization.',
    }),
    created: DateDTOSchema.exactOptional().openapi({
      description:
        'Date the organization was created. This field may not be present in some older organizations.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique system generated ID for the organization.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the organization.' }),
    scimManaged: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Returns if an organization is managed by scim. This field may not be present in some older organizations',
      }),
    uuid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique system generated ID for the organization. This is identity from the group directory id',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrganizationDTO')

const OrganizationServiceDeskUpdateDTOSchema = z
  .looseObject({
    organizationId: z
      .int32()
      .openapi({
        description:
          "List of organizations, specified by 'ID' field values, to add to or remove from the service desk.",
      }),
    serviceDeskId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Service desk Id for which, organization needs to be updated' }),
  })
  .openapi({ required: ['organizationId'] })
  .openapi('OrganizationServiceDeskUpdateDTO')

const PagedDTOApprovalDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(ApprovalDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOApprovalDTO')

const PagedDTOArticleDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(ArticleDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOArticleDTO')

const PagedDTOAssetsWorkspaceDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(AssetsWorkspaceDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOAssetsWorkspaceDTO')

const PagedDTOCustomerRequestDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(CustomerRequestDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOCustomerRequestDTO')

const PagedDTOCustomerTransitionDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(CustomerTransitionDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOCustomerTransitionDTO')

const PagedDTOInsightWorkspaceDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(InsightWorkspaceDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOInsightWorkspaceDTO')

const PagedDTOIssueBeanSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(IssueBeanSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOIssueBean')

const PagedDTOOrganizationDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(OrganizationDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOOrganizationDTO')

const QueueDTOSchema = z
  .strictObject({
    _links: SelfLinkDTOSchema.exactOptional().openapi({
      description: 'REST API URL to the queue.',
    }),
    fields: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Fields returned for each request in the queue.' }),
    id: z.string().exactOptional().openapi({ description: 'ID for the queue.' }),
    issueCount: z
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
        description: 'The count of customer requests in the queue.',
      }),
    jql: z
      .string()
      .exactOptional()
      .openapi({ description: 'JQL query that filters reqeusts for the queue.' }),
    name: z.string().exactOptional().openapi({ description: 'Short name for the queue.' }),
  })
  .openapi({ required: [] })
  .openapi('QueueDTO')

const PagedDTOQueueDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(QueueDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOQueueDTO')

const PagedDTORequestTypeDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(RequestTypeDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTORequestTypeDTO')

const RequestTypeGroupDTOSchema = z
  .strictObject({
    id: z.string().exactOptional().openapi({ description: 'ID of the request type group' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the request type group.' }),
  })
  .openapi({ required: [] })
  .openapi('RequestTypeGroupDTO')

const PagedDTORequestTypeGroupDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(RequestTypeGroupDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTORequestTypeGroupDTO')

const PagedDTOServiceDeskDTOSchema = z
  .strictObject({
    _expands: z.array(z.string()).exactOptional(),
    _links: PagedLinkDTOSchema.exactOptional().openapi({
      description: 'List of the links relating to the page.',
    }),
    isLastPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if this is the last page of records (true) or not (false).',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of items to be returned per page, up to the maximum set for these objects in the current implementation.',
      }),
    size: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items returned in the page.' }),
    start: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first item returned in the page.' }),
    values: z
      .array(ServiceDeskDTOSchema)
      .exactOptional()
      .openapi({ description: 'Details of the items included in the page.' }),
  })
  .openapi({ required: [] })
  .openapi('PagedDTOServiceDeskDTO')

const PropertyKeySchema = z
  .strictObject({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key of the property.', readOnly: true }),
    self: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the property.', readOnly: true }),
  })
  .openapi({ description: 'Property key details.', required: [] })
  .openapi('PropertyKey')

const PropertyKeysSchema = z
  .strictObject({
    keys: z
      .array(PropertyKeySchema)
      .exactOptional()
      .openapi({ description: 'Property key details.', readOnly: true }),
  })
  .openapi({ description: 'List of property keys.', required: [] })
  .openapi('PropertyKeys')

const RequestCreateDTOSchema = z
  .strictObject({
    channel: z
      .string()
      .exactOptional()
      .openapi({ description: '(Experimental) Shows extra information for the request channel.' }),
    form: FormSchema.exactOptional().openapi({
      description:
        "Provides answers to the form associated with a request type. Omit Jira fields from `requestFieldValues` if they're linked to form answers. For form answers in ADF format, set `isAdfRequest` to true.",
    }),
    isAdfRequest: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '(Experimental) Whether to accept rich text fields in Atlassian Document Format (ADF).',
      }),
    raiseOnBehalfOf: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `accountId` of the customer that the request is being raised on behalf of.',
      }),
    requestFieldValues: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'JSON map of Jira field IDs and their values representing the content of the request.',
      }),
    requestParticipants: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of customers to participate in the request, as a list of `accountId` values.',
      }),
    requestTypeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the request type for the request.' }),
    serviceDeskId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the service desk in which to create the request.' }),
  })
  .openapi({ required: [] })
  .openapi('RequestCreateDTO')

const RequestFieldValidationErrorDTOSchema = z
  .strictObject({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The id of the request field that failed validation (matches a key in 'requestFieldValues').",
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation of why this field failed validation.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RequestFieldValidationErrorDTO')

const RequestNotificationSubscriptionDTOSchema = z
  .strictObject({
    subscribed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether the user is subscribed (true) or not (false) to the request's notifications.",
      }),
  })
  .openapi({ required: [] })
  .openapi('RequestNotificationSubscriptionDTO')

const RequestParticipantUpdateDTOSchema = z
  .strictObject({
    accountIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of users, specified by account IDs, to add to or remove as participants in the request.',
      }),
    usernames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RequestParticipantUpdateDTO')

const RequestTypeCreateDTOSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the request type on the service desk.' }),
    helpText: z
      .string()
      .exactOptional()
      .openapi({ description: 'Help text for the request type on the service desk.' }),
    issueTypeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the request type to add to the service desk.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the request type on the service desk.' }),
  })
  .openapi({ required: [] })
  .openapi('RequestTypeCreateDTO')

const RequestTypePermissionCheckRequestDTOSchema = z
  .strictObject({
    accountId: z.string().exactOptional().openapi({ description: 'The account ID of a user.' }),
    permissions: z
      .array(z.enum(['canCreateRequest', 'canAdminister']))
      .exactOptional()
      .openapi({ description: 'List of requested permissions.' }),
    requestTypeIds: z
      .array(z.int32())
      .exactOptional()
      .openapi({ description: 'List of request type IDs.' }),
  })
  .openapi({ required: [] })
  .openapi('RequestTypePermissionCheckRequestDTO')

const RequestTypePermissionCheckResponseSchema = z
  .strictObject({
    canAdminister: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description: 'List of request type IDs for which the user has permission to administer.',
      }),
    canCreateRequest: z
      .array(z.int32())
      .exactOptional()
      .openapi({ description: 'List of request type IDs for which the user can create requests.' }),
  })
  .openapi({ required: [] })
  .openapi('RequestTypePermissionCheckResponse')

const RequestValidationResultDTOSchema = z
  .strictObject({
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A single, human-readable summary describing why validation failed. Null when valid.',
      }),
    errorMessages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'General validation errors that are not attributable to a single field. Empty when valid.',
      }),
    fieldErrors: z
      .array(RequestFieldValidationErrorDTOSchema)
      .exactOptional()
      .openapi({
        description:
          'Field-level validation errors, keyed by the failing request field id. Empty when valid.',
      }),
    formErrors: z
      .array(FormValidationErrorDTOSchema)
      .exactOptional()
      .openapi({
        description:
          'ProForma form validation errors, if a form was supplied. Empty when valid or no form was present.',
      }),
    reasonKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A machine-readable reason key categorising the overall failure. Null when valid.',
      }),
    valid: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True when the payload is both structurally and semantically valid and safe to create.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RequestValidationResultDTO')

const ServiceDeskCustomerDTOSchema = z
  .strictObject({
    accountIds: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'List of users, specified by account IDs, to add to or remove from a service desk.',
      }),
    usernames: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ServiceDeskCustomerDTO')

const ServiceDeskCustomerInviteDTOSchema = z
  .strictObject({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: "Customer's name for display in the UI." }),
    email: z.string().exactOptional().openapi({ description: "Customer's email address." }),
  })
  .openapi({ required: [] })
  .openapi('ServiceDeskCustomerInviteDTO')

const SoftwareInfoDTOSchema = z
  .strictObject({
    _links: SelfLinkDTOSchema.exactOptional().openapi({
      description: 'REST API URL of the instance.',
    }),
    buildChangeSet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reference of the change set included in the build.' }),
    buildDate: DateDTOSchema.exactOptional().openapi({ description: 'Date of the current build.' }),
    isLicensedForUse: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the instance is licensed (true) or not (false).',
      }),
    platformVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Jira Platform version upon which Service Desk is based.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Jira Service Management version.' }),
  })
  .openapi({ required: [] })
  .openapi('SoftwareInfoDTO')

const UsersOrganizationUpdateDTOSchema = z
  .looseObject({
    accountIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of customers, specific by account IDs, to add to or remove from the organization.',
      }),
    organizationId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The organizationId in which users need to be added' }),
    usernames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. Use `accountIds` instead.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UsersOrganizationUpdateDTO')

const XB3ParentspanidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'B3 parent span ID for distributed tracing. Used internally by jsd-nutmeg for request correlation.',
      explode: false,
      in: 'header',
      name: 'x-b3-parentspanid',
      required: false,
      schema: { type: 'string' },
      style: 'simple',
    },
  })

const XB3SampledParamsSchema = z
  .enum(['0', '1'])
  .exactOptional()
  .openapi({
    param: {
      description:
        'B3 sampling decision for distributed tracing (0 or 1). Used internally by jsd-nutmeg.',
      explode: false,
      in: 'header',
      name: 'x-b3-sampled',
      required: false,
      schema: { enum: ['0', '1'], type: 'string' },
      style: 'simple',
    },
  })

const XB3SpanidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'B3 span ID for distributed tracing. Used internally by jsd-nutmeg for request correlation.',
      explode: false,
      in: 'header',
      name: 'x-b3-spanid',
      required: false,
      schema: { type: 'string' },
      style: 'simple',
    },
  })

const XB3TraceidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'B3 trace ID for distributed tracing. Used internally by jsd-nutmeg for request correlation.',
      explode: false,
      in: 'header',
      name: 'x-b3-traceid',
      required: false,
      schema: { type: 'string' },
      style: 'simple',
    },
  })

const OAuth2SecurityScheme = {
  description: 'OAuth2 scopes for Jira',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://auth.atlassian.com/authorize',
      scopes: {
        'delete:organization.property:jira-service-management':
          'Allows the app to delete organisation entity properties',
        'delete:organization.user:jira-service-management':
          'Allows the app to remove members from organisations',
        'delete:organization:jira-service-management': 'Allows the app to delete organisations',
        'delete:request.feedback:jira-service-management':
          'Allows the app to remove feedback data from requests',
        'delete:request.notification:jira-service-management':
          'Allows the app to remove the subscription status of the user from requests',
        'delete:request.participant:jira-service-management':
          'Allows the app to remove participants (user) data from requests',
        'delete:requesttype.property:jira-service-management':
          'Allows the app to delete request type entity properties',
        'delete:servicedesk.customer:jira-service-management':
          'Allows the app the delete customers from service desks',
        'delete:servicedesk.organization:jira-service-management':
          'Allows the app the delete organisations from service desks',
        'delete:servicedesk.property:jira-service-management':
          'Allows the app to delete service desk entity properties',
        'manage:jira-configuration':
          'Configure Jira settings that require the Jira administrators permission, for example, create projects and custom fields, view workflows, manage issue link types.',
        'manage:jira-project':
          'Create and edit project settings and create new project-level objects, for example, versions, components.',
        'manage:jira-webhook':
          'Manage Jira webhooks. Enables an OAuth app to register and unregister dynamic webhooks in Jira. It also provides for fetching of registered webhooks.',
        'manage:servicedesk-customer':
          'Manage Jira Service Management customers and organizations | Create, manage and delete customers and organizations.<br>Add and remove customers and organizations from service desks.',
        'read:customer:jira-service-management':
          'Allows the app to read customer accounts information',
        'read:jira-user':
          'View user information in Jira that you have access to, including usernames, email addresses, and avatars.',
        'read:jira-work':
          'Read project and issue data. Search for issues and objects associated with issues (such as attachments and worklogs).',
        'read:knowledgebase:jira-service-management':
          'Allows the app to search and list KB articles',
        'read:mail-logs.connectivity:jira-service-management':
          'Allows the app to read email connectivity logs',
        'read:mail-logs.processing:jira-service-management':
          'Allows the app to read incoming email processing logs',
        'read:organization.property:jira-service-management':
          'Allows the app to read organisation entity properties',
        'read:organization.user:jira-service-management':
          'Allows the app to read organisation membership information',
        'read:organization:jira-service-management':
          'Allows the app to read organisation information',
        'read:queue:jira-service-management': 'Allows the app to list queues',
        'read:request.action:jira-service-management':
          'Allows the app to read which actions can be performed on requests',
        'read:request.approval:jira-service-management':
          'Allows the app to read approval data from requests',
        'read:request.attachment:jira-service-management':
          'Allows the app to read attachment data from requests',
        'read:request.comment:jira-service-management':
          'Allows the app to read comment data from requests',
        'read:request.feedback:jira-service-management':
          'Allows the app to read feedback data from requests',
        'read:request.notification:jira-service-management':
          'Allows the app to read the subscription status of the user for requests',
        'read:request.participant:jira-service-management':
          'Allows the app to read participant (user) data from requests',
        'read:request.sla:jira-service-management': 'Allows the app to read SLA data from requests',
        'read:request.status:jira-service-management':
          'Allows the app to read status/transition data from requests',
        'read:request:jira-service-management': 'Allows the app to list & search requests',
        'read:requesttype.property:jira-service-management':
          'Allows the app to read request type desk entity properties',
        'read:requesttype:jira-service-management': 'Allows the app to list & search request types',
        'read:servicedesk-request':
          'Read customer request data, including approvals, attachments, comments, request participants, and status/transitions.<br>Read service desk and request types, including searching for request types and reading request type fields, properties and groups.',
        'read:servicedesk.customer:jira-service-management':
          'Allows the app the list customers of service desks',
        'read:servicedesk.organization:jira-service-management':
          'Allows the app to list organisations to service desks',
        'read:servicedesk.property:jira-service-management':
          'Allows the app to read service desk entity properties',
        'read:servicedesk:jira-service-management': 'Allows the app to list & search service desks',
        'write:customer:jira-service-management':
          'Allows the app to create customer accounts (user)',
        'write:jira-work':
          'Create and edit issues in Jira, post comments, create worklogs, and delete issues.',
        'write:organization.property:jira-service-management':
          'Allows the app to write organisation entity properties',
        'write:organization.user:jira-service-management':
          'Allows the app to add members to organisations',
        'write:organization:jira-service-management': 'Allows the app to create organisations',
        'write:request.approval:jira-service-management':
          'Allows the app to act on approvals of requests (e.g approve, deny, …)',
        'write:request.attachment:jira-service-management':
          'Allows the app to add attachments to requests',
        'write:request.comment:jira-service-management':
          'Allows the app to add comments to requests',
        'write:request.feedback:jira-service-management':
          'Allows the app to write feedback data on requests',
        'write:request.notification:jira-service-management':
          'Allows the app to change the subscription status of the user for requests',
        'write:request.participant:jira-service-management':
          'Allows the app to add participants (user) data from requests',
        'write:request.status:jira-service-management':
          'Allows the app to execute transitions on requests',
        'write:request:jira-service-management': 'Allows the app to create requests',
        'write:requesttype.property:jira-service-management':
          'Allows the app to write request type entity properties',
        'write:requesttype:jira-service-management':
          'Allows the app to create or modify request types',
        'write:servicedesk-request':
          'Create and manage Jira Service Management requests | Create and edit customer requests, including add comments and attachments, approve, share (add request participants), subscribe, and transition.',
        'write:servicedesk.customer:jira-service-management':
          'Allows the app the add customers to service desks',
        'write:servicedesk.organization:jira-service-management':
          'Allows the app the add organisations to service desks',
        'write:servicedesk.property:jira-service-management':
          'Allows the app to write service desk entity properties',
        'write:servicedesk:jira-service-management':
          'Allows the app the add organisations, customers and request types to service desks',
      },
      tokenUrl: 'https://auth.atlassian.com/oauth/token',
    },
  },
  type: 'oauth2',
}

const BasicAuthSecurityScheme = {
  description: 'You can access this resource via basic auth.',
  scheme: 'basic',
  type: 'http',
}

export const getRestServicedeskapiAssetsWorkspaceRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/assets/workspace',
  tags: ['Assets'],
  summary: 'Get assets workspaces',
  description:
    'Returns a list of Assets workspace IDs. Include a workspace ID in the path to access the [Assets REST APIs](https://developer.atlassian.com/cloud/assets/rest).\n\n**[Permissions](#permissions) required**: Any',
  operationId: 'getAssetsWorkspaces',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned workspace IDs. Base index: 0 See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of workspace IDs to return per page. Default: 50 See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { default: 50, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the request is successful.',
      content: {
        'application/json': {
          schema: PagedDTOAssetsWorkspaceDTOSchema,
          example:
            '{"_expands":[],"size":1,"start":1,"limit":1,"isLastPage":true,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/rest/servicedeskapi/assets/workspace?start=2&limit=1","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/rest/servicedeskapi/assets/workspace?start=0&limit=1"},"values":[{"workspaceId":"1060ba0e-178b-4e0e-g0h1-jedb02cccb5f"}]}',
        },
      },
    },
    401: {
      description: 'Returned if the authentication credentials are incorrect or missing.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have the necessary permission.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const postRestServicedeskapiCustomerRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/customer',
  tags: ['Customer'],
  summary: 'Create customer',
  description:
    "This method adds a customer to the Jira Service Management instance by passing a JSON file including an email address and display name. The display name does not need to be unique. The record's identifiers, `name` and `key`, are automatically generated from the request details.\n\n**[Permissions](#permissions) required**: Jira Administrator Global permission",
  operationId: 'createCustomer',
  request: {
    query: z.object({
      strictConflictStatusCode: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional boolean flag to return 409 Conflict status code for duplicate customer creation request',
            in: 'query',
            name: 'strictConflictStatusCode',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CustomerCreateDTOSchema,
          example: { displayName: 'Fred F. User', email: 'fred@example.com' },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the customer details.',
      content: {
        'application/json': {
          schema: UserDTOSchema,
          example:
            '{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}}',
        },
      },
    },
    400: {
      description:
        'Returned if the request is invalid, either because the email address is incorrectly formed or already exists in the database if `strictConflictStatusCode=false` or if `strictConflictStatusCode` parameter is not provided',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description:
        'Returned if the request is invalid because the email address already exists in the database and `strictConflictStatusCode=true`',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const postRestServicedeskapiCustomerSkipPermissionCheckRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/customer/skip-permission-check',
  summary: 'Create customer',
  description:
    'Creates a customer account on behalf of jsd-nutmeg.\n\nThis endpoint is restricted to jsd-nutmeg via ASAP authentication. It provides the same capability as the public \\{@code POST /servicedeskapi/customer\\} endpoint, but does not require a User Context Token (UCT) or Connect app user \\\\u2014 authorization is enforced entirely via the ASAP token.\n\nNo user permission checks are performed; \\{@code null\\} is passed as the acting user to bypass the permission check in the underlying service.',
  operationId: 'createCustomer',
  request: {
    query: z.object({
      strictConflictStatusCode: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional boolean flag; when \\{@code true\\}, returns 409 Conflict for duplicate email instead of the default 400.',
            in: 'query',
            name: 'strictConflictStatusCode',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      description:
        'JSON body containing the email address and display name of the customer to create.',
      content: { 'application/json': { schema: CustomerCreateDTOSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '201 response',
      content: { 'application/json': { schema: UserDTOSchema } },
    },
  },
})

export const putRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccessRoute = createRoute({
  method: 'put',
  path: '/rest/servicedeskapi/customer/user/{accountId}/revoke-portal-only-access',
  tags: ['Customer'],
  summary: 'Revoke portal only access for user',
  description:
    'This method revokes portal-only access for a particular user, removing their ability to log in to the Jira Service Management customer portal as a portal-only user. After revocation, the user cannot submit or view requests through the portal.\n\n**[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).',
  operationId: 'revokePortalOnlyAccessForUser',
  request: {
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'The account ID of the user, which uniquely identifies the portal-only account. For example, *qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b*.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Returned if the request is successful.',
      content: { 'application/json': { schema: z.any() } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the account ID is invalid.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const getRestServicedeskapiInfoRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/info',
  tags: ['Info'],
  summary: 'Get info',
  description:
    'This method retrieves information about the Jira Service Management instance such as software version, builds, and related links.\n\n**[Permissions](#permissions) required**: None, the user does not need to be logged in.',
  operationId: 'getInfo',
  responses: {
    200: {
      description: 'Returns the runtime information for the Jira Service Management instance.',
      content: {
        'application/json': {
          schema: SoftwareInfoDTOSchema,
          example:
            '{"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/info"},"buildChangeSet":"c6679417c550918e7c94a9eaaada133f15dc8ff0","buildDate":{"epochMillis":1442259240000,"friendly":"Monday 02:34 AM","iso8601":"2015-09-15T02:34:00+0700","jira":"2015-09-15T02:34:00.000+0700"},"isLicensedForUse":true,"platformVersion":"7.0.1","version":"3.0.1"}',
        },
      },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: [] }, {}],
})

export const getRestServicedeskapiInsightWorkspaceRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/insight/workspace',
  tags: ['Assets'],
  summary: 'Get insight workspaces',
  description: 'This endpoint is deprecated, please use /assets/workspace/.',
  operationId: 'getInsightWorkspaces',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'start',
            schema: { default: 0, format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .default(50)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 50, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: PagedDTOInsightWorkspaceDTOSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const getRestServicedeskapiKnowledgebaseArticleRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/knowledgebase/article',
  tags: ['Knowledgebase'],
  summary: 'Get articles',
  description:
    'Returns articles which match the given query string across all service desks.\n\n**[Permissions](#permissions) required**: Permission to access the [customer portal](https://confluence.atlassian.com/servicedeskcloud/configuring-the-customer-portal-732528918.html).',
  operationId: 'getArticles',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The string used to filter the articles (required).',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      highlight: z
        .stringbool()
        .default(false)
        .openapi({
          param: {
            description:
              'If set to true matching query term in the title and excerpt will be highlighted using the `@@@hl@@@term@@@endhl@@@` syntax. Default: false.',
            in: 'query',
            name: 'highlight',
            required: true,
            schema: { default: false, type: 'boolean' },
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '(Deprecated) The starting index of the returned objects. Base index: 0.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of items to return per page. Default: 50.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Pointer to a set of search results, returned as part of the next or prev URL from the previous search call.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
      prev: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should navigate to the previous page. Defaulted to false. Set to true as part of prev URL from the previous search call.',
            in: 'query',
            name: 'prev',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the articles, on the specified page of the results.',
      content: {
        'application/json': {
          schema: PagedDTOArticleDTOSchema,
          example:
            '{"_expands":[],"size":2,"start":2,"limit":2,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article?start=4&limit=2","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article?start=0&limit=2"},"values":[{"title":"Stolen computer","excerpt":"assuming your computer was stolen","source":{"type":"confluence","pageId":"8786177","spaceKey":"IT"},"content":{"iframeSrc":"https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article/view/8786177"}},{"title":"Upgrading computer","excerpt":"each computer older then 3 years can be upgraded","source":{"type":"confluence","pageId":"8785228","spaceKey":"IT"},"content":{"iframeSrc":"https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article/view/8785228"}}]}',
        },
      },
    },
    400: {
      description: 'Returned if the request is invalid. For example: missing query parameter.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const getRestServicedeskapiKnowledgebaseArticleViewPageIdRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/knowledgebase/article/view/{pageId}',
  summary: 'View knowledge base article',
  operationId: 'viewArticle',
  request: {
    params: z.object({
      pageId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'pageId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: z.string() } } },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }, {}],
})

export const getRestServicedeskapiOrganizationRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/organization',
  tags: ['Organization'],
  summary: 'Get organizations',
  description:
    'This method returns a list of organizations in the Jira Service Management instance. Use this method when you want to present a list of organizations or want to locate an organization by name.\n\n**[Permissions](#permissions) required**: Any. However, to fetch organizations based on `accountId` the user must have a Service Desk agent license.\n\n**Response limitations**: If the user is a customer, only those organizations of which the customer is a member are listed.',
  operationId: 'getOrganizations',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of organizations to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns paginated list of organizations.',
      content: {
        'application/json': {
          schema: PagedDTOOrganizationDTOSchema,
          example:
            '{"_expands":[],"size":1,"start":1,"limit":1,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/organization?start=2&limit=1","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/organization?start=0&limit=1"},"values":[{"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/organization/1"},"id":"1","name":"Charlie Cakes Franchises","scimManaged":false}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have the necessary permission.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the user is not found.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const postRestServicedeskapiOrganizationRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/organization',
  tags: ['Organization'],
  summary: 'Create organization',
  description:
    'This method creates an organization by passing the name of the organization.\n\n**[Permissions](#permissions) required**: Service desk administrator or agent. Note: Permission to create organizations can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.',
  operationId: 'createOrganization',
  request: {
    body: {
      content: {
        'application/json': {
          schema: OrganizationCreateDTOSchema,
          example: { name: 'Charlie Cakes Franchises' },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        'Returns the created organization or the existing organization if name already exists.',
      content: {
        'application/json': {
          schema: OrganizationDTOSchema,
          example:
            '{"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/organization/1"},"id":"1","name":"Charlie Cakes Franchises","scimManaged":false}',
        },
      },
    },
    400: {
      description: 'Returned if the HTTP request is invalid.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const getRestServicedeskapiOrganizationOrganizationIdRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/organization/{organizationId}',
  tags: ['Organization'],
  summary: 'Get organization',
  description:
    'This method returns details of an organization. Use this method to get organization details whenever your application component is passed an organization ID but needs to display other organization details.\n\nTo get organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).\n\n**[Permissions](#permissions) required**: Any\n\n**Response limitations**: Customers can only retrieve organization of which they are members.',
  operationId: 'getOrganization',
  request: {
    params: z.object({
      organizationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the organization.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the requested organization.',
      content: {
        'application/json': {
          schema: OrganizationDTOSchema,
          example:
            '{"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/organization/1"},"id":"1","name":"Charlie Cakes Franchises","scimManaged":false}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the organization does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const deleteRestServicedeskapiOrganizationOrganizationIdRoute = createRoute({
  method: 'delete',
  path: '/rest/servicedeskapi/organization/{organizationId}',
  tags: ['Organization'],
  summary: 'Delete organization',
  description:
    'This method deletes an organization. Note that the organization is deleted regardless of other associations it may have. For example, associations with service desks.\n\n**[Permissions](#permissions) required**: Jira administrator.',
  operationId: 'deleteOrganization',
  request: {
    params: z.object({
      organizationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the organization.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Returned if the organization was deleted.' },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the organization does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const getRestServicedeskapiOrganizationOrganizationIdPropertyRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/organization/{organizationId}/property',
  tags: ['Organization'],
  summary: 'Get properties keys',
  description:
    'Returns the keys of all organization properties. Organization properties are a type of entity property which are available to the API only, and not shown in Jira Service Management. [Learn more](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).\n\nTo get organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).\n\n**[Permissions](#permissions) required**: Any\n\n**Response limitations**: Customers can only access properties of organizations of which they are members.',
  operationId: 'getPropertiesKeys',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the organization from which keys will be returned.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returned if the organization was found.',
      content: {
        'application/json': {
          schema: PropertyKeysSchema,
          example:
            '{"entityPropertyKeyBeans":[{"key":"organization.attributes","self":"/rest/servicedeskapi/organization/1/property/propertyKey"}]}',
        },
      },
    },
    400: {
      description: 'Returned if the organization ID is invalid.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the organization does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/organization/{organizationId}/property/{propertyKey}',
  tags: ['Organization'],
  summary: 'Get property',
  description:
    "Returns the value of an organization property. Use this method to obtain the JSON content for an organization's property. Organization properties are a type of entity property which are available to the API only, and not shown in Jira Service Management. [Learn more](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).\n\nTo get organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).\n\n**[Permissions](#permissions) required**: Any\n\n**Response limitations**: Customers can only access properties of organizations of which they are members.",
  operationId: 'getProperty',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the organization from which the property will be returned.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      propertyKey: z
        .string()
        .openapi({
          param: {
            description: 'The key of the property to return.',
            in: 'path',
            name: 'propertyKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns the organization's property.",
      content: {
        'application/json': {
          schema: EntityPropertySchema,
          example:
            '{"key":"organization.attributes","value":{"mail":"charlie@example.com","phone":"0800-1233456789"}}',
        },
      },
    },
    400: {
      description: 'Returned if the organization ID is invalid.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the organization or property do not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const putRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyRoute = createRoute({
  method: 'put',
  path: '/rest/servicedeskapi/organization/{organizationId}/property/{propertyKey}',
  tags: ['Organization'],
  summary: 'Set property',
  description:
    'Sets the value of an organization property. Use this resource to store custom data against an organization. Organization properties are a type of entity property which are available to the API only, and not shown in Jira Service Management. [Learn more](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).\n\nTo store organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).\n\n**[Permissions](#permissions) required**: Service Desk Administrator or Agent.\n\nNote: Permission to manage organizations can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.',
  operationId: 'setProperty',
  request: {
    params: z.object({
      organizationId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the organization on which the property will be set.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      propertyKey: z
        .string()
        .openapi({
          param: {
            description:
              "The key of the organization's property. The maximum length of the key is 255 bytes.",
            in: 'path',
            name: 'propertyKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description:
        'The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.',
      content: {
        'application/json': {
          schema: z.any(),
          example: { mail: 'charlie@example.com', phone: '0800-1233456789' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returned if the organization property was updated.',
      content: { 'application/json': { schema: z.any() } },
    },
    201: {
      description: 'Returned if the organization property was created.',
      content: { 'application/json': { schema: z.any() } },
    },
    400: {
      description: 'Returned if the organization ID is invalid.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the organization does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const deleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKeyRoute =
  createRoute({
    method: 'delete',
    path: '/rest/servicedeskapi/organization/{organizationId}/property/{propertyKey}',
    tags: ['Organization'],
    summary: 'Delete property',
    description:
      'Removes an organization property. Organization properties are a type of entity property which are available to the API only, and not shown in Jira Service Management. [Learn more](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/).\n\nFor operations relating to organization detail field values which are visible in Jira Service Management, see the [Customer Service Management REST API](https://developer.atlassian.com/cloud/customer-service-management/rest/v1/api-group-organization/#api-group-organization).\n\n**[Permissions](#permissions) required**: Service Desk Administrator or Agent.\n\nNote: Permission to manage organizations can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.',
    operationId: 'deleteProperty',
    request: {
      params: z.object({
        organizationId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the organization from which the property will be removed.',
              in: 'path',
              name: 'organizationId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        propertyKey: z
          .string()
          .openapi({
            param: {
              description: 'The key of the property to remove.',
              in: 'path',
              name: 'propertyKey',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Returned if the organization property was removed.' },
      400: {
        description: 'Returned if the organization ID is invalid.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      401: {
        description: 'Returned if the user is not logged in.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      403: {
        description: 'Returned if the user does not have permission to complete this request.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      404: {
        description: 'Returned if the organization or property do not exist.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      500: {
        description: 'Internal Server Error.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
    },
    security: [{ OAuth2: ['manage:servicedesk-customer'] }],
  })

export const getRestServicedeskapiOrganizationOrganizationIdUserRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/organization/{organizationId}/user',
  tags: ['Organization'],
  summary: 'Get users in organization',
  description:
    'This method returns all the users associated with an organization. Use this method where you want to provide a list of users for an organization or determine if a user is associated with an organization.\n\n**[Permissions](#permissions) required**: Service desk administrator or agent.',
  operationId: 'getUsersInOrganization',
  request: {
    params: z.object({
      organizationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the organization.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of users to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns a paged list of users associated with the organization, ordered by their accountId.',
      content: {
        'application/json': {
          schema: PagedDTOUserDTOSchema,
          example:
            '{"_expands":[],"size":1,"start":1,"limit":1,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/organization/1/user?start=2&limit=1","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/organization/1/user?start=0&limit=1"},"values":[{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd","emailAddress":"bob@example.com","displayName":"Bob D. Builder","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd"}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the organization does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const postRestServicedeskapiOrganizationOrganizationIdUserRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/organization/{organizationId}/user',
  tags: ['Organization'],
  summary: 'Add users to organization',
  description:
    'This method adds users to an organization.\n\n**[Permissions](#permissions) required**: Service desk administrator or agent. Note: Permission to add users to an organization can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.',
  operationId: 'addUsersToOrganization',
  request: {
    params: z.object({
      organizationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the organization.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: UsersOrganizationUpdateDTOSchema,
          example: {
            accountIds: [
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd',
            ],
            usernames: [],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description:
        'Returned if all the users were valid and added to the organization, no response payload is provided.',
    },
    400: {
      description: 'Returned if one or more usernames are unknown.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the organization does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const deleteRestServicedeskapiOrganizationOrganizationIdUserRoute = createRoute({
  method: 'delete',
  path: '/rest/servicedeskapi/organization/{organizationId}/user',
  tags: ['Organization'],
  summary: 'Remove users from organization',
  description:
    'This method removes users from an organization.\n\n**[Permissions](#permissions) required**: Service desk administrator or agent. Note: Permission to delete users from an organization can be switched to users with the Jira administrator permission, using the **[Organization management](https://confluence.atlassian.com/servicedeskcloud/setting-up-service-desk-users-732528877.html#Settingupservicedeskusers-manageorgsManageorganizations)** feature.',
  operationId: 'removeUsersFromOrganization',
  request: {
    params: z.object({
      organizationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the organization.',
            in: 'path',
            name: 'organizationId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: UsersOrganizationUpdateDTOSchema,
          example: {
            accountIds: [
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd',
            ],
            usernames: [],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description:
        'The request completed successfully. No additional content will be sent in the response.',
    },
    400: {
      description: 'Returned if one or more user names are invalid.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the organization does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const getRestServicedeskapiRequestRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request',
  tags: ['Request'],
  summary: 'Get customer requests',
  description:
    'This method returns all customer requests for the user executing the query.\n\nThe returned customer requests are ordered chronologically by the latest activity on each request. For example, the latest status transition or comment.\n\n**[Permissions](#permissions) required**: Permission to access the specified service desk.\n\n**Response limitations**: For customers, the list returned will include request they created (or were created on their behalf) or are participating in only.',
  operationId: 'getCustomerRequests',
  request: {
    query: z.object({
      searchTerm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters customer requests where the request summary matches the `searchTerm`. [Wildcards](https://confluence.atlassian.com/display/JIRACORECLOUD/Search+syntax+for+text+fields) can be used in the `searchTerm` parameter.',
            in: 'query',
            name: 'searchTerm',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestOwnership: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().default('')),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters customer requests using the following values:\n\n *  `OWNED_REQUESTS` returns customer requests where the user is the creator.\n *  `PARTICIPATED_REQUESTS` returns customer requests where the user is a participant.\n *  `ORGANIZATION` returns customer requests for an organization of which the user is a member when used in conjunction with `organizationId`.\n *  `ALL_ORGANIZATIONS` returns customer requests that belong to all organizations of which the user is a member.\n *  `APPROVER` returns customer requests where the user is an approver. Can be used in conjunction with `approvalStatus` to filter pending or complete approvals.\n *  `ALL_REQUESTS` returns all customer requests. **Deprecated and will be removed, as the returned requests may change if more values are added in the future. Instead, explicitly list the desired filtering strategies.**\n\nMultiple values of the query parameter are supported. For example, `requestOwnership=OWNED_REQUESTS&requestOwnership=PARTICIPATED_REQUESTS` will only return customer requests where the user is the creator or a participant. If not specified, filtering defaults to `OWNED_REQUESTS`, `PARTICIPATED_REQUESTS`, and `ALL_ORGANIZATIONS`.',
            in: 'query',
            name: 'requestOwnership',
            schema: { items: { default: '', type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      requestStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters customer requests where the request is closed, open, or either of the two where:\n\n *  `CLOSED_REQUESTS` returns customer requests that are closed.\n *  `OPEN_REQUESTS` returns customer requests that are open.\n *  `ALL_REQUESTS` returns all customer requests.',
            in: 'query',
            name: 'requestStatus',
            schema: { type: 'string' },
            required: false,
          },
        }),
      approvalStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filters results to customer requests based on their approval status:\n\n *  `MY_PENDING_APPROVAL` returns customer requests pending the user's approval.\n *  `MY_HISTORY_APPROVAL` returns customer requests where the user was an approver.\n\n**Note**: Valid only when used with requestOwnership=APPROVER.",
            in: 'query',
            name: 'approvalStatus',
            schema: { type: 'string' },
            required: false,
          },
        }),
      organizationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters customer requests that belong to a specific organization (note that the user must be a member of that organization). **Note**: Valid only when used with requestOwnership=ORGANIZATION.',
            in: 'query',
            name: 'organizationId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      serviceDeskId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filters customer requests by service desk.',
            in: 'query',
            name: 'serviceDeskId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      requestTypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters customer requests by request type. Note that the `serviceDeskId` must be specified for the service desk in which the request type belongs.',
            in: 'query',
            name: 'requestTypeId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().default('')),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A multi-value parameter indicating which properties of the customer request to expand, where:\n\n *  `serviceDesk` returns additional details for each service desk.\n *  `requestType` returns additional details for each request type.\n *  `participant` returns the participant details, if any, for each customer request.\n *  `sla` returns the SLA information on each customer request.\n *  `status` returns the status transitions, in chronological order, for each customer request.\n *  `attachment` returns the attachments for the customer request.\n *  `action` returns the actions that the user can or cannot perform on this customer request.\n *  `comment` returns the comments, if any, for each customer request.\n *  `comment.attachment` returns the attachment details, if any, for each comment.\n *  `comment.renderedBody` (Experimental) returns the rendered body in HTML format (in addition to the raw body) for each comment.',
            in: 'query',
            name: 'expand',
            schema: { items: { default: '', type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the customer requests, on the specified page of the results.',
      content: {
        'application/json': {
          schema: PagedDTOCustomerRequestDTOSchema,
          example:
            '{"_expands":["participant","status","sla","requestType","serviceDesk","attachment","action","comment"],"size":3,"start":3,"limit":3,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/request?start=6&limit=3","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/request?start=0&limit=3"},"values":[{"_expands":["participant","status","sla","requestType","serviceDesk","attachment","action","comment"],"issueId":"107001","issueKey":"HELPDESK-1","summary":"Request JSD help via REST","requestTypeId":"25","serviceDeskId":"10","createdDate":{"epochMillis":1444290120000,"friendly":"Monday 14:42 PM","iso8601":"2015-10-08T14:42:00+0700","jira":"2015-10-08T14:42:00.000+0700"},"reporter":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"requestFieldValues":[{"fieldId":"summary","label":"What do you need?","value":"Request JSD help via REST"},{"fieldId":"description","label":"Why do you need this?","renderedValue":{"html":"<p>I need a new <b>mouse</b> for my Mac</p>"},"value":"I need a new *mouse* for my Mac"}],"currentStatus":{"status":"Waiting for Support","statusCategory":"NEW","statusDate":{"epochMillis":1444287660000,"friendly":"Today 14:01 PM","iso8601":"2015-10-08T14:01:00+0700","jira":"2015-10-08T14:01:00.000+0700"}},"_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/issue/107001","web":"https://your-domain.atlassian.net/servicedesk/customer/portal/10/HELPDESK-1","agent":"https://your-domain.atlassian.net/browse/HELPDESK-1","self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/107001"}},{"_expands":["participant","status","sla","requestType","serviceDesk","attachment","action","comment"],"issueId":"107002","issueKey":"HELPDESK-2","requestTypeId":"25","serviceDeskId":"10","createdDate":{"epochMillis":1444289400000,"friendly":"Monday 14:30 PM","iso8601":"2015-10-08T14:30:00+0700","jira":"2015-10-08T14:30:00.000+0700"},"reporter":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"requestFieldValues":[{"fieldId":"summary","label":"What do you need?","value":"Request a new account"},{"fieldId":"description","label":"Why do you need this?","value":"Create an account on Jira"}],"currentStatus":{"status":"Waiting for Support","statusCategory":"NEW","statusDate":{"epochMillis":1444287660000,"friendly":"Today 14:01 PM","iso8601":"2015-10-08T14:01:00+0700","jira":"2015-10-08T14:01:00.000+0700"}},"_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/issue/107002","web":"https://your-domain.atlassian.net/servicedesk/customer/portal/10/HELPDESK-2","agent":"https://your-domain.atlassian.net/browse/HELPDESK-2","self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/107002"}},{"_expands":["participant","status","sla","requestType","serviceDesk","attachment","action","comment"],"issueId":"109006","issueKey":"SIMPLEDESK-6","requestTypeId":"33","serviceDeskId":"12","createdDate":{"epochMillis":1444030200000,"friendly":"Monday 14:30 PM","iso8601":"2015-10-05T14:30:00+0700","jira":"2015-10-05T14:30:00.000+0700"},"reporter":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"requestFieldValues":[{"fieldId":"summary","label":"Summarize the problem","value":"Printer on level 3 did not work"},{"fieldId":"description","value":"Ink cartridge is empty"}],"currentStatus":{"status":"Waiting for Support","statusCategory":"NEW","statusDate":{"epochMillis":1444287600000,"friendly":"Today 14:00 PM","iso8601":"2015-10-08T14:00:00+0700","jira":"2015-10-08T14:00:00.000+0700"}},"_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/issue/109006","web":"https://your-domain.atlassian.net/servicedesk/customer/portal/12/SIMPLEDESK-6","agent":"https://your-domain.atlassian.net/browse/SIMPLEDESK-6","self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/109006"}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description:
        'Returned if the user does not have permission to access the service desk, the service desk does not exist, or the service desk does not support the request type.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const postRestServicedeskapiRequestRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/request',
  tags: ['Request'],
  summary: 'Create customer request',
  description:
    "This method creates a customer request in a service desk.\n\nThe JSON request must include the service desk and customer request type, as well as any fields that are required for the request type. A list of the fields required by a customer request type can be obtained using [servicedesk/\\{serviceDeskId\\}/requesttype/\\{requestTypeId\\}/field](#api-servicedesk-serviceDeskId-requesttype-requestTypeId-field-get).\n\nThe fields required for a customer request type depend on the user's permissions:\n\n *  `raiseOnBehalfOf` is not available to Users who have the customer permission only.\n *  `requestParticipants` is not available to Users who have the customer permission only or if the feature is turned off for customers.\n\n`requestFieldValues` is a map of Jira field IDs and their values. See [Field input formats](#fieldformats), for details of each field's JSON semantics and the values they can take.\n\n**[Permissions](#permissions) required**: Permission to create requests in the specified service desk.",
  operationId: 'createCustomerRequest',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RequestCreateDTOSchema,
          example: {
            form: {
              answers: {
                '1': { text: 'Answer to a text form field' },
                '2': { date: '2023-07-06' },
                '3': { time: '14:35' },
                '4': { choices: ['5'] },
                '5': {
                  users: ['qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae'],
                },
              },
            },
            isAdfRequest: false,
            requestFieldValues: {
              description: 'I need a new *mouse* for my Mac',
              summary: 'Request JSD help via REST',
            },
            requestParticipants: [
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae',
            ],
            requestTypeId: '25',
            serviceDeskId: '10',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returned if the customer request was created.',
      content: {
        'application/json': {
          schema: CustomerRequestDTOSchema,
          example:
            '{"_expands":["participant","status","sla","requestType","serviceDesk","attachment","action","comment"],"issueId":"107001","issueKey":"HELPDESK-1","summary":"Request JSD help via REST","requestTypeId":"25","serviceDeskId":"10","createdDate":{"epochMillis":1444290120000,"friendly":"Monday 14:42 PM","iso8601":"2015-10-08T14:42:00+0700","jira":"2015-10-08T14:42:00.000+0700"},"reporter":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"requestFieldValues":[{"fieldId":"summary","label":"What do you need?","value":"Request JSD help via REST"},{"fieldId":"description","label":"Why do you need this?","renderedValue":{"html":"<p>I need a new <b>mouse</b> for my Mac</p>"},"value":"I need a new *mouse* for my Mac"}],"currentStatus":{"status":"Waiting for Support","statusCategory":"NEW","statusDate":{"epochMillis":1444287660000,"friendly":"Today 14:01 PM","iso8601":"2015-10-08T14:01:00+0700","jira":"2015-10-08T14:01:00.000+0700"}},"_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/issue/107001","web":"https://your-domain.atlassian.net/servicedesk/customer/portal/10/HELPDESK-1","agent":"https://your-domain.atlassian.net/browse/HELPDESK-1","self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/107001"}}',
        },
      },
    },
    400: {
      description: 'Returned if the HTTP request call is invalid.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    422: {
      description:
        'Returned if one or more form answers fail validation rules configured by Jira admins.',
      content: {
        'application/json': {
          schema: FormValidationErrorResponseDTOSchema,
          example:
            '{"errorMessage":"Invalid request","errors":[{"code":"VALIDATION_ERROR","context":[{"id":"q123","type":"question"}],"detail":"The field is required","status":422,"title":"Validation failed"}],"i18nErrorMessage":{"i18nKey":"sd.request.create.error.proforma.form.validation.error","parameters":[]}}',
        },
      },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const postRestServicedeskapiRequestValidateRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/request/validate',
  tags: ['Request'],
  summary: 'Validate customer request',
  description:
    'Validates a customer request payload without creating (persisting) a request.\n\nThis endpoint runs exactly the same structural and semantic validations as [Create customer request](#api-request-post) \\\\u2014 including ProForma form validation \\\\u2014 but performs **no mutation**: no issue is created and no side effects (attachments, comments, analytics) run.\n\nThe response is intentionally verbose and structured so that it can be consumed by automated agents (for example an LLM repairing an invalid payload): every failure carries a machine-readable location (field id / form entity) and a human-readable reason. A valid payload returns HTTP 200 with \\{@code valid: true\\}; an invalid payload returns HTTP 400 with \\{@code valid: false\\} together with the field, form and general validation errors.\n\n**[Permissions](#permissions) required**: Permission to create requests in the specified service desk.',
  operationId: 'validateCustomerRequest',
  request: {
    body: { content: { 'application/json': { schema: RequestCreateDTOSchema } }, required: true },
  },
  responses: {
    200: {
      description:
        'Returned with the validation result. \\{@code valid\\} is true when the payload is valid.',
      content: { 'application/json': { schema: RequestValidationResultDTOSchema } },
    },
    400: {
      description:
        'Returned when the payload is invalid; the body describes why validation failed.',
      content: { 'application/json': { schema: RequestValidationResultDTOSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeyRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}',
  tags: ['Request'],
  summary: 'Get customer request by id or key',
  description:
    'This method returns a customer request.\n\n**[Permissions](#permissions) required**: Permission to access the specified service desk.\n\n**Response limitations**: For customers, only a request they created, was created on their behalf, or they are participating in will be returned.\n\n**Note:** `requestFieldValues` does not include hidden fields. To get a list of request type fields that includes hidden fields, see [/rest/servicedeskapi/servicedesk/\\{serviceDeskId\\}/requesttype/\\{requestTypeId\\}/field](https://developer.atlassian.com/cloud/jira/service-desk/rest/api-group-servicedesk/#api-rest-servicedeskapi-servicedesk-servicedeskid-requesttype-requesttypeid-field-get)',
  operationId: 'getCustomerRequestByIdOrKey',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or Key of the customer request to be returned',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().default('')),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A multi-value parameter indicating which properties of the customer request to expand, where:\n\n *  `serviceDesk` returns additional service desk details.\n *  `requestType` returns additional customer request type details.\n *  `participant` returns the participant details.\n *  `sla` returns the SLA information.\n *  `status` returns the status transitions, in chronological order.\n *  `attachment` returns the attachments.\n *  `action` returns the actions that the user can or cannot perform.\n *  `comment` returns the comments.\n *  `comment.attachment` returns the attachment details for each comment.\n *  `comment.renderedBody` (Experimental) return the rendered body in HTML format (in addition to the raw body) for each comment.',
            in: 'query',
            name: 'expand',
            schema: { items: { default: '', type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the customer request.',
      content: {
        'application/json': {
          schema: CustomerRequestDTOSchema,
          example:
            '{"_expands":["participant","status","sla","requestType","serviceDesk","attachment","action","comment"],"issueId":"107001","issueKey":"HELPDESK-1","summary":"Request JSD help via REST","requestTypeId":"25","serviceDeskId":"10","createdDate":{"epochMillis":1444290120000,"friendly":"Monday 14:42 PM","iso8601":"2015-10-08T14:42:00+0700","jira":"2015-10-08T14:42:00.000+0700"},"reporter":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"requestFieldValues":[{"fieldId":"summary","label":"What do you need?","value":"Request JSD help via REST"},{"fieldId":"description","label":"Why do you need this?","renderedValue":{"html":"<p>I need a new <b>mouse</b> for my Mac</p>"},"value":"I need a new *mouse* for my Mac"}],"currentStatus":{"status":"Waiting for Support","statusCategory":"NEW","statusDate":{"epochMillis":1444287660000,"friendly":"Today 14:01 PM","iso8601":"2015-10-08T14:01:00+0700","jira":"2015-10-08T14:01:00.000+0700"}},"_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/issue/107001","web":"https://your-domain.atlassian.net/servicedesk/customer/portal/10/HELPDESK-1","agent":"https://your-domain.atlassian.net/browse/HELPDESK-1","self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/107001"}}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeyApprovalRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/approval',
  tags: ['Request'],
  summary: 'Get approvals',
  description:
    'This method returns all approvals on a customer request.\n\n**[Permissions](#permissions) required**: Permission to view the customer request.',
  operationId: 'getApprovals',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of approvals to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request to be queried for its approvals.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns the customer request's approvals.",
      content: {
        'application/json': {
          schema: PagedDTOApprovalDTOSchema,
          example:
            '{"_expands":[],"size":3,"start":3,"limit":3,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/request/2/approval?start=6&limit=3","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/request/2/approval?start=0&limit=3"},"values":[{"id":"1","name":"Please approve this request","finalDecision":"approved","canAnswerApproval":false,"approvers":[{"approver":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"approverDecision":"approved"}],"createdDate":{"epochMillis":1475046060000,"friendly":"Monday 14:01 PM","iso8601":"2016-09-28T14:01:00+0700","jira":"2016-09-28T14:01:00.000+0700"},"completedDate":{"epochMillis":1475134200000,"friendly":"Today 14:30 PM","iso8601":"2016-09-29T14:30:00+0700","jira":"2016-09-29T14:30:00.000+0700"},"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/2/approval/1"}},{"id":"2","name":"Waiting for approval","finalDecision":"declined","canAnswerApproval":false,"approvers":[{"approver":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"approverDecision":"approved"}],"createdDate":{"epochMillis":1475650860000,"friendly":"Wednesday 14:01 PM","iso8601":"2016-10-05T14:01:00+0700","jira":"2016-10-05T14:01:00.000+0700"},"completedDate":{"epochMillis":1475739000000,"friendly":"Thursday 14:30 PM","iso8601":"2016-10-06T14:30:00+0700","jira":"2016-10-06T14:30:00.000+0700"},"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/2/approval/2"}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/approval/{approvalId}',
  tags: ['Request'],
  summary: 'Get approval by id',
  description:
    'This method returns an approval. Use this method to determine the status of an approval and the list of approvers.\n\n**[Permissions](#permissions) required**: Permission to view the customer request.',
  operationId: 'getApprovalById',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request the approval is on.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      approvalId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the approval to be returned.',
            in: 'path',
            name: 'approvalId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the requested approval.',
      content: {
        'application/json': {
          schema: ApprovalDTOSchema,
          example:
            '{"id":"1","name":"Please approve this request","finalDecision":"approved","canAnswerApproval":false,"approvers":[{"approver":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"approverDecision":"approved"}],"createdDate":{"epochMillis":1475046060000,"friendly":"Monday 14:01 PM","iso8601":"2016-09-28T14:01:00+0700","jira":"2016-09-28T14:01:00.000+0700"},"completedDate":{"epochMillis":1475134200000,"friendly":"Today 14:30 PM","iso8601":"2016-09-29T14:30:00+0700","jira":"2016-09-29T14:30:00.000+0700"},"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/2/approval/1"}}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request or approval do not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const postRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/approval/{approvalId}',
  tags: ['Request'],
  summary: 'Answer approval',
  description:
    'This method enables a user to **Approve** or **Decline** an approval on a customer request. The approval is assumed to be owned by the user making the call.\n\n**[Permissions](#permissions) required**: User is assigned to the approval request.',
  operationId: 'answerApproval',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request to be updated.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      approvalId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'The ID of the approval to be updated.',
            in: 'path',
            name: 'approvalId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApprovalDecisionRequestDTOSchema,
          example: { decision: 'approve' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated approval.',
      content: {
        'application/json': {
          schema: ApprovalDTOSchema,
          example:
            '{"id":"1","name":"Please approve this request","finalDecision":"approved","canAnswerApproval":false,"approvers":[{"approver":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"approverDecision":"approved"}],"createdDate":{"epochMillis":1475046060000,"friendly":"Monday 14:01 PM","iso8601":"2016-09-28T14:01:00+0700","jira":"2016-09-28T14:01:00.000+0700"},"completedDate":{"epochMillis":1475134200000,"friendly":"Today 14:30 PM","iso8601":"2016-09-29T14:30:00+0700","jira":"2016-09-29T14:30:00.000+0700"},"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/2/approval/1"}}',
        },
      },
    },
    400: {
      description: 'Returned if the request is not valid.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request or the approval do not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description:
        'Returned if the customer has already submitted a decision or the approval has already been completed.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeyAttachmentRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/attachment',
  tags: ['Request'],
  summary: 'Get attachments for request',
  description:
    'This method returns all the attachments for a customer requests.\n\n**[Permissions](#permissions) required**: Permission to view the customer request.\n\n**Response limitations**: Customers will only get a list of public attachments.',
  operationId: 'getAttachmentsForRequest',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description:
              'The ID or key of the customer request from which the attachments will be listed.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .openapi({
          param: {
            description:
              'The starting index of the returned attachment. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            required: true,
            schema: { default: 0, format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .default(50)
        .openapi({
          param: {
            description:
              'The maximum number of comments to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            required: true,
            schema: { default: 50, format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the visible attachments from the customer request.',
      content: {
        'application/json': {
          schema: PagedDTOAttachmentDTOSchema,
          example:
            '{"_expands":[],"size":2,"start":2,"limit":2,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/request/IT-15/comment/1001/attachment?start=4&limit=2","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/request/IT-15/comment/1001/attachment?start=0&limit=2"},"values":[{"filename":"screenshot.png","author":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"created":{"epochMillis":1444360920000,"friendly":"Today 10:22 AM","iso8601":"2015-10-09T10:22:00+0700","jira":"2015-10-09T10:22:00.000+0700"},"size":23123,"mimeType":"image/png","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/attachment/10000","content":"https://your-domain.atlassian.net/servicedesk/customershim/secure/attachment/10000/screenshot.png","thumbnail":"https://your-domain.atlassian.net/servicedesk/customershim/secure/thumbnail/10000/_thumb_10000.png"}},{"filename":"log.txt","author":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"created":{"epochMillis":1444360920000,"friendly":"Today 10:22 AM","iso8601":"2015-10-09T10:22:00+0700","jira":"2015-10-09T10:22:00.000+0700"},"size":32132,"mimeType":"text/plain","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/attachment/10001","content":"https://your-domain.atlassian.net/servicedesk/customershim/secure/attachment/10001/log.txt"}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const postRestServicedeskapiRequestIssueIdOrKeyAttachmentRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/attachment',
  tags: ['Request'],
  summary: 'Create comment with attachment',
  description:
    'This method creates a comment on a customer request using one or more attachment files (uploaded using [servicedeskapi/servicedesk/\\{serviceDeskId\\}/attachTemporaryFile](https://developer.atlassian.com/cloud/jira/service-desk/rest/api-group-servicedesk/#api-rest-servicedeskapi-servicedesk-servicedeskid-attachtemporaryfile-post)), with the visibility set by `public`. See\n\n *  GET [servicedeskapi/request/\\{issueIdOrKey\\}/attachment](./#api-rest-servicedeskapi-request-issueidorkey-attachment-get)\n *  GET [servicedeskapi/request/\\{issueIdOrKey\\}/comment/\\{commentId\\}/attachment](./#api-rest-servicedeskapi-request-issueidorkey-comment-commentid-attachment-get)\n\n**[Permissions](#permissions) required**: Permission to add an attachment.\n\n**Request limitations**: Customers can set public visibility only.',
  operationId: 'createCommentWithAttachment',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description:
              'The ID or key of the customer request to which the attachment will be added.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: AttachmentCreateDTOSchema,
          example: {
            additionalComment: { body: 'Please find the screenshot and the log file attached.' },
            public: true,
            temporaryAttachmentIds: ['temp910441317820424274', 'temp3600755449679003114'],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the attachments and comment.',
      content: {
        'application/json': {
          schema: AttachmentCreateResultDTOSchema,
          example:
            '{"comment":{"_expands":["attachment","renderedBody"],"id":"1000","body":"Please find the screenshot and the log file attached. !screenshot.png|thumbnail! [^log.txt] _(32 kB)_","public":true,"author":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"created":{"epochMillis":1444360920000,"friendly":"Today 10:22 AM","iso8601":"2015-10-09T10:22:00+0700","jira":"2015-10-09T10:22:00.000+0700"},"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/2000/comment/1000"}},"attachments":{"_expands":[],"size":2,"start":2,"limit":2,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/request/IT-15/comment/1001/attachment?start=4&limit=2","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/request/IT-15/comment/1001/attachment?start=0&limit=2"},"values":[{"filename":"screenshot.png","author":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"created":{"epochMillis":1444360920000,"friendly":"Today 10:22 AM","iso8601":"2015-10-09T10:22:00+0700","jira":"2015-10-09T10:22:00.000+0700"},"size":23123,"mimeType":"image/png","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/attachment/10000","content":"https://your-domain.atlassian.net/servicedesk/customershim/secure/attachment/10000/screenshot.png","thumbnail":"https://your-domain.atlassian.net/servicedesk/customershim/secure/thumbnail/10000/_thumb_10000.png"}},{"filename":"log.txt","author":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"created":{"epochMillis":1444360920000,"friendly":"Today 10:22 AM","iso8601":"2015-10-09T10:22:00+0700","jira":"2015-10-09T10:22:00.000+0700"},"size":32132,"mimeType":"text/plain","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/attachment/10001","content":"https://your-domain.atlassian.net/servicedesk/customershim/secure/attachment/10001/log.txt"}}]}}',
        },
      },
    },
    400: {
      description:
        'Returned if the HTTP request is invalid, including missing the required `public` field or list of temporary file IDs, or if the temporary files have expired.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/attachment/{attachmentId}',
  tags: ['Request'],
  summary: 'Get attachment content',
  description:
    'Returns the contents of an attachment.\n\nTo return a thumbnail of the attachment, use [servicedeskapi/request/\\{issueIdOrKey\\}/attachment/\\{attachmentId\\}/thumbnail](./#api-rest-servicedeskapi-request-issueidorkey-attachment-attachmentid-thumbnail-get).\n\n**[Permissions](#permissions) required:** For the issue containing the attachment:\n\n *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.\n *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.',
  operationId: 'getAttachmentContent',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key for the customer request the attachment is associated with',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attachmentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The ID for the attachment',
            in: 'path',
            name: 'attachmentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: z.any() } } },
    303: {
      description:
        'Returned if the request is successful. See the `Location` header for the download URL.',
    },
    401: {
      description: 'Returned if the authentication credentials are incorrect.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'The user does not have the necessary permission.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description:
        'Returned if:\n\n *  the attachment is not found.\n *  attachments are disabled in the Jira settings.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailRoute =
  createRoute({
    method: 'get',
    path: '/rest/servicedeskapi/request/{issueIdOrKey}/attachment/{attachmentId}/thumbnail',
    tags: ['Request'],
    summary: 'Get attachment thumbnail',
    description:
      'Returns the thumbnail of an attachment.\n\nTo return the attachment contents, use [servicedeskapi/request/\\{issueIdOrKey\\}/attachment/\\{attachmentId\\}](#api-rest-servicedeskapi-request-issueidorkey-attachment-attachmentid-get).\n\n**[Permissions](#permissions) required:** For the issue containing the attachment:\n\n *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.\n *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.',
    operationId: 'getAttachmentThumbnail',
    request: {
      params: z.object({
        issueIdOrKey: z
          .string()
          .openapi({
            param: {
              description:
                'The ID or key for the customer request the attachment is associated with',
              in: 'path',
              name: 'issueIdOrKey',
              required: true,
              schema: { type: 'string' },
            },
          }),
        attachmentId: z
          .preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, z.int64())
          .openapi({
            param: {
              description: 'The ID of the attachment.',
              in: 'path',
              name: 'attachmentId',
              required: true,
              schema: { format: 'int64', type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: { description: '200 response', content: { 'application/json': { schema: z.any() } } },
      303: {
        description:
          'Returned if the request is successful. See the `Location` header for the download URL.',
      },
      400: {
        description: 'Returned if the request is invalid.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      401: {
        description: 'Returned if the authentication credentials are incorrect.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      403: {
        description: 'The user does not have the necessary permission.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      404: {
        description:
          'Returned if:\n\n *  the attachment is not found.\n *  attachments are disabled in the Jira settings.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      500: {
        description: 'Internal Server Error.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
    },
    security: [{ OAuth2: ['read:servicedesk-request'] }],
  })

export const getRestServicedeskapiRequestIssueIdOrKeyCommentRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/comment',
  tags: ['Request'],
  summary: 'Get request comments',
  description:
    "This method returns all comments on a customer request. No permissions error is provided if, for example, the user doesn't have access to the service desk or request, the method simply returns an empty response.\n\n**[Permissions](#permissions) required**: Permission to view the customer request.\n\n**Response limitations**: Customers are returned public comments only.",
  operationId: 'getRequestComments',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request whose comments will be retrieved.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      public: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies whether to return public comments or not. Default: true.',
            in: 'query',
            name: 'public',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      internal: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies whether to return internal comments or not. Default: true.',
            in: 'query',
            name: 'internal',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().default('')),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A multi-value parameter indicating which properties of the comment to expand:\n\n *  `attachment` returns the attachment details, if any, for each comment. (If you want to get all attachments for a request, use [servicedeskapi/request/\\{issueIdOrKey\\}/attachment](#api-request-issueIdOrKey-attachment-get).)\n *  `renderedBody` (Experimental) returns the rendered body in HTML format (in addition to the raw body) for each comment.',
            in: 'query',
            name: 'expand',
            schema: { items: { default: '', type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned comments. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of comments to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the comments, on the specified page of the results.',
      content: {
        'application/json': {
          schema: PagedDTOCommentDTOSchema,
          example:
            '{"_expands":[],"size":1,"start":1,"limit":1,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/request/2000/comment?start=2&limit=1","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/request/2000/comment?start=0&limit=1"},"values":[{"_expands":["attachment","renderedBody"],"id":"1000","body":"Hello there","public":true,"author":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"created":{"epochMillis":1444360920000,"friendly":"Today 10:22 AM","iso8601":"2015-10-09T10:22:00+0700","jira":"2015-10-09T10:22:00.000+0700"},"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/2000/comment/1000"}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const postRestServicedeskapiRequestIssueIdOrKeyCommentRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/comment',
  tags: ['Request'],
  summary: 'Create request comment',
  description:
    'This method creates a public or private (internal) comment on a customer request, with the comment visibility set by `public`. The user recorded as the author of the comment.\n\n**[Permissions](#permissions) required**: User has Add Comments permission.\n\n**Request limitations**: Customers can set comments to public visibility only.',
  operationId: 'createRequestComment',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description:
              'The ID or key of the customer request to which the comment will be added.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CommentCreateDTOSchema,
          example: { body: 'Hello there', public: true },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the comment.',
      content: {
        'application/json': {
          schema: CommentDTOSchema,
          example:
            '{"_expands":["attachment","renderedBody"],"id":"1000","body":"Hello there","public":true,"author":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"created":{"epochMillis":1444360920000,"friendly":"Today 10:22 AM","iso8601":"2015-10-09T10:22:00+0700","jira":"2015-10-09T10:22:00.000+0700"},"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/2000/comment/1000"}}',
        },
      },
    },
    400: {
      description: 'Returned if the HTTP request is invalid, e.g. missing the required `public`.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/comment/{commentId}',
  tags: ['Request'],
  summary: 'Get request comment by id',
  description:
    "This method returns details of a customer request's comment.\n\n**[Permissions](#permissions) required**: Permission to view the customer request.\n\n**Response limitations**: Customers can only view public comments on requests where they are the reporter or a participant whereas agents can see both internal and public comments.",
  operationId: 'getRequestCommentById',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request that contains the comment.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      commentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The ID of the comment to retrieve.',
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().default('')),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A multi-value parameter indicating which properties of the comment to expand:\n\n *  `attachment` returns the attachment details, if any, for the comment. (If you want to get all attachments for a request, use [servicedeskapi/request/\\{issueIdOrKey\\}/attachment](#api-request-issueIdOrKey-attachment-get).)\n *  `renderedBody` (Experimental) returns the rendered body in HTML format (in addition to the raw body) of the comment.',
            in: 'query',
            name: 'expand',
            schema: { items: { default: '', type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the comment.',
      content: {
        'application/json': {
          schema: CommentDTOSchema,
          example:
            '{"_expands":["attachment","renderedBody"],"id":"1000","body":"Hello there","public":true,"author":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"created":{"epochMillis":1444360920000,"friendly":"Today 10:22 AM","iso8601":"2015-10-09T10:22:00+0700","jira":"2015-10-09T10:22:00.000+0700"},"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/2000/comment/1000"}}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request or comment do not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/comment/{commentId}/attachment',
  tags: ['Request'],
  summary: 'Get comment attachments',
  description:
    'This method returns the attachments referenced in a comment.\n\n**[Permissions](#permissions) required**: Permission to view the customer request.\n\n**Response limitations**: Customers can only view public comments, and retrieve their attachments, on requests where they are the reporter or a participant whereas agents can see both internal and public comments.',
  operationId: 'getCommentAttachments',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request that contains the comment.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      commentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The ID of the comment.',
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned comments. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of comments to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the attachments, on the specified page of the results.',
      content: {
        'application/json': {
          schema: PagedDTOAttachmentDTOSchema,
          example:
            '{"_expands":[],"size":2,"start":2,"limit":2,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/request/IT-15/comment/1001/attachment?start=4&limit=2","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/request/IT-15/comment/1001/attachment?start=0&limit=2"},"values":[{"filename":"screenshot.png","author":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"created":{"epochMillis":1444360920000,"friendly":"Today 10:22 AM","iso8601":"2015-10-09T10:22:00+0700","jira":"2015-10-09T10:22:00.000+0700"},"size":23123,"mimeType":"image/png","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/attachment/10000","content":"https://your-domain.atlassian.net/servicedesk/customershim/secure/attachment/10000/screenshot.png","thumbnail":"https://your-domain.atlassian.net/servicedesk/customershim/secure/thumbnail/10000/_thumb_10000.png"}},{"filename":"log.txt","author":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}},"created":{"epochMillis":1444360920000,"friendly":"Today 10:22 AM","iso8601":"2015-10-09T10:22:00+0700","jira":"2015-10-09T10:22:00.000+0700"},"size":32132,"mimeType":"text/plain","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/attachment/10001","content":"https://your-domain.atlassian.net/servicedesk/customershim/secure/attachment/10001/log.txt"}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request or the comment do not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [
    {
      OAuth2: [
        'read:request.attachment:jira-service-management',
        'read:request.comment:jira-service-management',
        'read:user:jira',
      ],
    },
  ],
})

export const getRestServicedeskapiRequestIssueIdOrKeyNotificationRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/notification',
  tags: ['Request'],
  summary: 'Get subscription status',
  description:
    "This method returns the notification subscription status of the user making the request. Use this method to determine if the user is subscribed to a customer request's notifications.\n\n**[Permissions](#permissions) required**: Permission to view the customer request.",
  operationId: 'getSubscriptionStatus',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description:
              'The ID or key of the customer request to be queried for subscription status.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the status of the notification subscription.',
      content: {
        'application/json': {
          schema: RequestNotificationSubscriptionDTOSchema,
          example: '{"subscribed":true}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const putRestServicedeskapiRequestIssueIdOrKeyNotificationRoute = createRoute({
  method: 'put',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/notification',
  tags: ['Request'],
  summary: 'Subscribe',
  description:
    'This method subscribes the user to receiving notifications from a customer request.\n\n**[Permissions](#permissions) required**: Permission to view the customer request.',
  operationId: 'subscribe',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request to be subscribed to.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Returns if the user was subscribed.' },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const deleteRestServicedeskapiRequestIssueIdOrKeyNotificationRoute = createRoute({
  method: 'delete',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/notification',
  tags: ['Request'],
  summary: 'Unsubscribe',
  description:
    'This method unsubscribes the user from notifications from a customer request.\n\n**[Permissions](#permissions) required**: Permission to view the customer request.',
  operationId: 'unsubscribe',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request to be unsubscribed from.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Returns if the user was unsubscribed.' },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeyParticipantRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/participant',
  tags: ['Request'],
  summary: 'Get request participants',
  description:
    'This method returns a list of all the participants on a customer request.\n\n**[Permissions](#permissions) required**: Permission to view the customer request.',
  operationId: 'getRequestParticipants',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description:
              'The ID or key of the customer request to be queried for its participants.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of request types to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the customer request's participants, on the specified page of the results.",
      content: {
        'application/json': {
          schema: PagedDTOUserDTOSchema,
          example:
            '{"_expands":[],"size":1,"start":1,"limit":1,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/request/1000/participant?start=2&limit=1","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/request/1000/participant?start=0&limit=1"},"values":[{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const postRestServicedeskapiRequestIssueIdOrKeyParticipantRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/participant',
  tags: ['Request'],
  summary: 'Add request participants',
  description:
    'This method adds participants to a customer request.\n\n**[Permissions](#permissions) required**: Permission to manage participants on the customer request.\n\nNote, participants can be added when creating a customer request using the [request](#api-request-post) resource, by defining the participants in the `requestParticipants` field.',
  operationId: 'addRequestParticipants',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request to have participants added.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: RequestParticipantUpdateDTOSchema,
          example: {
            accountIds: [],
            usernames: [
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae',
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the participants added to the customer request.',
      content: {
        'application/json': {
          schema: PagedDTOUserDTOSchema,
          example:
            '{"_expands":[],"size":1,"start":1,"limit":1,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/request/1000/participant?start=2&limit=1","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/request/1000/participant?start=0&limit=1"},"values":[{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}}]}',
        },
      },
    },
    400: {
      description: 'Returned if any user to be added as a participant does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const deleteRestServicedeskapiRequestIssueIdOrKeyParticipantRoute = createRoute({
  method: 'delete',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/participant',
  tags: ['Request'],
  summary: 'Remove request participants',
  description:
    'This method removes participants from a customer request.\n\n**[Permissions](#permissions) required**: Permission to manage participants on the customer request.',
  operationId: 'removeRequestParticipants',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request to have participants removed.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: RequestParticipantUpdateDTOSchema,
          example: {
            accountIds: [],
            usernames: [
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae',
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        "Returns the first page of the customer request's participants (after removal of the users).",
      content: {
        'application/json': {
          schema: PagedDTOUserDTOSchema,
          example:
            '{"_expands":[],"size":1,"start":1,"limit":1,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/request/1000/participant?start=2&limit=1","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/request/1000/participant?start=0&limit=1"},"values":[{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}}]}',
        },
      },
    },
    400: {
      description:
        'Returned if any user to be removed as a participant does not exist, is not a participant in the customer request, or is the reporter of the request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeySlaRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/sla',
  tags: ['Request'],
  summary: 'Get sla information',
  description:
    'This method returns all the SLA records on a customer request. A customer request can have zero or more SLAs. Each SLA can have recordings for zero or more "completed cycles" and zero or 1 "ongoing cycle". Each cycle includes information on when it started and stopped, and whether it breached the SLA goal.\n\n**[Permissions](#permissions) required**:\n\n *  Agent for the Service Desk containing the queried customer request, AND\n *  Browse Projects permission on the project containing the customer request, including any restrictions imposed by issue security schemes or custom permission schemes on the specific issue.',
  operationId: 'getSlaInformation',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request whose SLAs will be retrieved.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of request types to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns the SLA records on the customer request, on the specified page of the results.',
      content: {
        'application/json': {
          schema: PagedDTOSlaInformationDTOSchema,
          example:
            '{"_expands":[],"size":3,"start":3,"limit":3,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/request/101102/sla?start=6&limit=3","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/request/101102/sla?start=0&limit=3"},"values":[{"name":"Time To First Response","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/101102/sla/10030"},"completedCycles":[{"startTime":{"epochMillis":1444362323000,"friendly":"Yesterday 10:45 AM","iso8601":"2015-10-09T10:45:23+0700","jira":"2015-10-09T10:45:23.000+0700"},"stopTime":{"epochMillis":1444362743000,"friendly":"Yesterday 10:52 AM","iso8601":"2015-10-09T10:52:23+0700","jira":"2015-10-09T10:52:23.000+0700"},"breachTime":{"epochMillis":1444362623000,"friendly":"Yesterday 10:50 AM","iso8601":"2015-10-09T10:50:23+0700","jira":"2015-10-09T10:50:23.000+0700"},"breached":false,"goalDuration":{"millis":14400000,"friendly":"4h 240m"},"elapsedTime":{"millis":420000,"friendly":"0h 7m"},"remainingTime":{"millis":13980000,"friendly":"3h 233m"}},{"startTime":{"epochMillis":1444449143000,"friendly":"Today 10:52 AM","iso8601":"2015-10-10T10:52:23+0700","jira":"2015-10-10T10:52:23.000+0700"},"stopTime":{"epochMillis":1444468523000,"friendly":"Today 16:15 PM","iso8601":"2015-10-10T16:15:23+0700","jira":"2015-10-10T16:15:23.000+0700"},"breachTime":{"epochMillis":1444464743000,"friendly":"Today 15:12 PM","iso8601":"2015-10-10T15:12:23+0700","jira":"2015-10-10T15:12:23.000+0700"},"breached":true,"goalDuration":{"millis":14400000,"friendly":"4h 240m"},"elapsedTime":{"millis":19380000,"friendly":"5h 323m"},"remainingTime":{"millis":-4980000,"friendly":"-1h -83m"}}],"ongoingCycle":{"startTime":{"epochMillis":1444479323000,"friendly":"Today 19:15 PM","iso8601":"2015-10-10T19:15:23+0700","jira":"2015-10-10T19:15:23.000+0700"},"breached":false,"paused":false,"withinCalendarHours":false,"goalDuration":{"millis":14400000,"friendly":"4h 240m"},"elapsedTime":{"millis":5640000,"friendly":"1h 94m"},"remainingTime":{"millis":8760000,"friendly":"2h 146m"}}},{"name":"Time To Resolution","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/101102/sla/10040"},"completedCycles":[{"startTime":{"epochMillis":1444362323000,"friendly":"Yesterday 10:45 AM","iso8601":"2015-10-09T10:45:23+0700","jira":"2015-10-09T10:45:23.000+0700"},"stopTime":{"epochMillis":1444398743000,"friendly":"Yesterday 20:52 PM","iso8601":"2015-10-09T20:52:23+0700","jira":"2015-10-09T20:52:23.000+0700"},"breachTime":{"epochMillis":1444398623000,"friendly":"Yesterday 20:50 PM","iso8601":"2015-10-09T20:50:23+0700","jira":"2015-10-09T20:50:23.000+0700"},"breached":false,"goalDuration":{"millis":72000000,"friendly":"20h 1200m"},"elapsedTime":{"millis":36420000,"friendly":"10h 607m"},"remainingTime":{"millis":35580000,"friendly":"9h 593m"}},{"startTime":{"epochMillis":1444485143000,"friendly":"Today 20:52 PM","iso8601":"2015-10-10T20:52:23+0700","jira":"2015-10-10T20:52:23.000+0700"},"stopTime":{"epochMillis":1444504523000,"friendly":"Today 02:15 AM","iso8601":"2015-10-11T02:15:23+0700","jira":"2015-10-11T02:15:23.000+0700"},"breachTime":{"epochMillis":1444500743000,"friendly":"Today 01:12 AM","iso8601":"2015-10-11T01:12:23+0700","jira":"2015-10-11T01:12:23.000+0700"},"breached":true,"goalDuration":{"millis":72000000,"friendly":"20h 1200m"},"elapsedTime":{"millis":19380000,"friendly":"5h 323m"},"remainingTime":{"millis":52620000,"friendly":"14h 877m"}}],"ongoingCycle":{"startTime":{"epochMillis":1444515323000,"friendly":"Today 05:15 AM","iso8601":"2015-10-11T05:15:23+0700","jira":"2015-10-11T05:15:23.000+0700"},"breached":false,"paused":false,"withinCalendarHours":false,"goalDuration":{"millis":72000000,"friendly":"20h 1200m"},"elapsedTime":{"millis":5640000,"friendly":"1h 94m"},"remainingTime":{"millis":66360000,"friendly":"18h 1106m"}}},{"name":"Time To Retrospective","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/101102/sla/10050"},"completedCycles":[{"startTime":{"epochMillis":1444362323000,"friendly":"Yesterday 10:45 AM","iso8601":"2015-10-09T10:45:23+0700","jira":"2015-10-09T10:45:23.000+0700"},"stopTime":{"epochMillis":1444449143000,"friendly":"Yesterday 10:52 AM","iso8601":"2015-10-10T10:52:23+0700","jira":"2015-10-10T10:52:23.000+0700"},"breachTime":{"epochMillis":1444449023000,"friendly":"Yesterday 10:50 AM","iso8601":"2015-10-10T10:50:23+0700","jira":"2015-10-10T10:50:23.000+0700"},"breached":false,"goalDuration":{"millis":144000000,"friendly":"40h 2400m"},"elapsedTime":{"millis":86820000,"friendly":"24h 1447m"},"remainingTime":{"millis":57180000,"friendly":"15h 953m"}},{"startTime":{"epochMillis":1444535543000,"friendly":"Today 10:52 AM","iso8601":"2015-10-11T10:52:23+0700","jira":"2015-10-11T10:52:23.000+0700"},"stopTime":{"epochMillis":1444554923000,"friendly":"Today 16:15 PM","iso8601":"2015-10-11T16:15:23+0700","jira":"2015-10-11T16:15:23.000+0700"},"breachTime":{"epochMillis":1444551143000,"friendly":"Today 15:12 PM","iso8601":"2015-10-11T15:12:23+0700","jira":"2015-10-11T15:12:23.000+0700"},"breached":true,"goalDuration":{"millis":144000000,"friendly":"40h 2400m"},"elapsedTime":{"millis":19380000,"friendly":"5h 323m"},"remainingTime":{"millis":124620000,"friendly":"34h 2077m"}}],"ongoingCycle":{"startTime":{"epochMillis":1444565723000,"friendly":"Today 19:15 PM","iso8601":"2015-10-11T19:15:23+0700","jira":"2015-10-11T19:15:23.000+0700"},"breached":false,"paused":false,"withinCalendarHours":false,"goalDuration":{"millis":144000000,"friendly":"40h 2400m"},"elapsedTime":{"millis":5640000,"friendly":"1h 94m"},"remainingTime":{"millis":138360000,"friendly":"38h 2306m"}}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description:
        'Returned if the user does not have permission to view this customer request. This includes the case where the user is not an agent on the Service Desk, or where the user lacks Browse Projects permission on the issue (for example, due to an issue security scheme or a custom permission scheme).',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:jira-work'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/sla/{slaMetricId}',
  tags: ['Request'],
  summary: 'Get sla information by id',
  description:
    'This method returns the details for an SLA on a customer request.\n\n**[Permissions](#permissions) required**:\n\n *  Agent for the Service Desk containing the queried customer request, AND\n *  Browse Projects permission on the project containing the customer request, including any restrictions imposed by issue security schemes or custom permission schemes on the specific issue.',
  operationId: 'getSlaInformationById',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request whose SLAs will be retrieved.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      slaMetricId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The ID or key of the SLAs metric to be retrieved.',
            in: 'path',
            name: 'slaMetricId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the SLA record, on the specified page of the results.',
      content: {
        'application/json': {
          schema: SlaInformationDTOSchema,
          example:
            '{"name":"Time To First Response","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/request/101102/sla/10030"},"completedCycles":[{"startTime":{"epochMillis":1444362323000,"friendly":"Yesterday 10:45 AM","iso8601":"2015-10-09T10:45:23+0700","jira":"2015-10-09T10:45:23.000+0700"},"stopTime":{"epochMillis":1444362743000,"friendly":"Yesterday 10:52 AM","iso8601":"2015-10-09T10:52:23+0700","jira":"2015-10-09T10:52:23.000+0700"},"breachTime":{"epochMillis":1444362623000,"friendly":"Yesterday 10:50 AM","iso8601":"2015-10-09T10:50:23+0700","jira":"2015-10-09T10:50:23.000+0700"},"breached":false,"goalDuration":{"millis":14400000,"friendly":"4h 240m"},"elapsedTime":{"millis":420000,"friendly":"0h 7m"},"remainingTime":{"millis":13980000,"friendly":"3h 233m"}},{"startTime":{"epochMillis":1444449143000,"friendly":"Today 10:52 AM","iso8601":"2015-10-10T10:52:23+0700","jira":"2015-10-10T10:52:23.000+0700"},"stopTime":{"epochMillis":1444468523000,"friendly":"Today 16:15 PM","iso8601":"2015-10-10T16:15:23+0700","jira":"2015-10-10T16:15:23.000+0700"},"breachTime":{"epochMillis":1444464743000,"friendly":"Today 15:12 PM","iso8601":"2015-10-10T15:12:23+0700","jira":"2015-10-10T15:12:23.000+0700"},"breached":true,"goalDuration":{"millis":14400000,"friendly":"4h 240m"},"elapsedTime":{"millis":19380000,"friendly":"5h 323m"},"remainingTime":{"millis":-4980000,"friendly":"-1h -83m"}}],"ongoingCycle":{"startTime":{"epochMillis":1444479323000,"friendly":"Today 19:15 PM","iso8601":"2015-10-10T19:15:23+0700","jira":"2015-10-10T19:15:23.000+0700"},"breached":false,"paused":false,"withinCalendarHours":false,"goalDuration":{"millis":14400000,"friendly":"4h 240m"},"elapsedTime":{"millis":5640000,"friendly":"1h 94m"},"remainingTime":{"millis":8760000,"friendly":"2h 146m"}}}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description:
        'Returned if the user does not have permission to view this customer request. This includes the case where the user is not an agent on the Service Desk, or where the user lacks Browse Projects permission on the issue (for example, due to an issue security scheme or a custom permission scheme).',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:jira-work'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeyStatusRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/status',
  tags: ['Request'],
  summary: 'Get customer request status',
  description:
    'This method returns a list of all the statuses a customer Request has achieved. A status represents the state of an issue in its workflow. An issue can have one active status only. The list returns the status history in chronological order, most recent (current) status first.\n\n**[Permissions](#permissions) required**: Permission to view the customer request.',
  operationId: 'getCustomerRequestStatus',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The ID or key of the customer request to be retrieved.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the customer request's status history, on the specified page of the results.",
      content: {
        'application/json': {
          schema: PagedDTOCustomerRequestStatusDTOSchema,
          example:
            '{"_expands":[],"size":3,"start":3,"limit":3,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/request/1/status?start=6&limit=3","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/request/1/status?start=0&limit=3"},"values":[{"status":"Waiting for Customer","statusDate":{"epochMillis":1444287900000,"friendly":"Today 14:05 PM","iso8601":"2015-10-08T14:05:00+0700","jira":"2015-10-08T14:05:00.000+0700"}},{"status":"Waiting for Support","statusDate":{"epochMillis":1444287660000,"friendly":"Today 14:01 PM","iso8601":"2015-10-08T14:01:00+0700","jira":"2015-10-08T14:01:00.000+0700"}},{"status":"Waiting for Customer","statusDate":{"epochMillis":1444287600000,"friendly":"Today 14:00 PM","iso8601":"2015-10-08T14:00:00+0700","jira":"2015-10-08T14:00:00.000+0700"}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request is not found.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const getRestServicedeskapiRequestIssueIdOrKeyTransitionRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/transition',
  tags: ['Request'],
  summary: 'Get customer transitions',
  description:
    'This method returns a list of transitions, the workflow processes that moves a customer request from one status to another, that the user can perform on a request. Use this method to provide a user with a list if the actions they can take on a customer request.\n\n**[Permissions](#permissions) required**: Permission to view the customer request.',
  operationId: 'getCustomerTransitions',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description:
              'The ID or key of the customer request whose transitions will be retrieved.',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the transitions available to the user on the customer request.',
      content: {
        'application/json': {
          schema: PagedDTOCustomerTransitionDTOSchema,
          example:
            '{"_expands":[],"size":2,"start":2,"limit":2,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/request/1/transition?start=4&limit=2","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/request/1/transition?start=0&limit=2"},"values":[{"id":"1","name":"Close Request"},{"id":"2","name":"Escalate Request"}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const postRestServicedeskapiRequestIssueIdOrKeyTransitionRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/request/{issueIdOrKey}/transition',
  tags: ['Request'],
  summary: 'Perform customer transition',
  description:
    'This method performs a customer transition for a given request and transition. An optional comment can be included to provide a reason for the transition.\n\n**[Permissions](#permissions) required**: The user must be able to view the request and have the Transition Issues permission. If a comment is passed the user must have the Add Comments permission.',
  operationId: 'performCustomerTransition',
  request: {
    params: z.object({
      issueIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'ID or key of the issue to transition',
            in: 'path',
            name: 'issueIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CustomerTransitionExecutionDTOSchema,
          example: { additionalComment: { body: 'I have fixed the problem.' }, id: '1' },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Returned if the request is transitioned.' },
    400: {
      description: 'Returned if the transition ID is invalid or the comment is too long.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const getRestServicedeskapiRequestRequestIdOrKeyFeedbackRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/request/{requestIdOrKey}/feedback',
  tags: ['Request'],
  summary: 'Get feedback',
  description:
    "This method retrieves a feedback of a request using it's `requestKey` or `requestId`\n\n**[Permissions](#permissions) required**: User has view request permissions.",
  operationId: 'getFeedback',
  request: {
    params: z.object({
      requestIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The id or the key of the request to post the feedback on',
            in: 'path',
            name: 'requestIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the comment.',
      content: {
        'application/json': {
          schema: CSATFeedbackFullDTOSchema,
          example: '{"type":"csat","rating":4,"comment":{"body":"Great work!"}}',
        },
      },
    },
    400: {
      description: 'Returned if the HTTP request is invalid.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if no logged in user/app.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user/app does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const postRestServicedeskapiRequestRequestIdOrKeyFeedbackRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/request/{requestIdOrKey}/feedback',
  tags: ['Request'],
  summary: 'Post feedback',
  description:
    "This method adds a feedback on an request using it's `requestKey` or `requestId`\n\n**[Permissions](#permissions) required**: User must be the reporter or an Atlassian Connect app.",
  operationId: 'postFeedback',
  request: {
    params: z.object({
      requestIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The id or the key of the request to post the feedback on',
            in: 'path',
            name: 'requestIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The feedback to be added on the request',
      content: {
        'application/json': {
          schema: CSATFeedbackFullDTOSchema,
          example: { comment: { body: 'Great work!' }, rating: 4, type: 'csat' },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Returns the comment.',
      content: {
        'application/json': {
          schema: CSATFeedbackFullDTOSchema,
          example: '{"type":"csat","rating":4,"comment":{"body":"Great work!"}}',
        },
      },
    },
    400: {
      description: 'Returned if the HTTP request is invalid.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if no logged in user/app.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user/app does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const deleteRestServicedeskapiRequestRequestIdOrKeyFeedbackRoute = createRoute({
  method: 'delete',
  path: '/rest/servicedeskapi/request/{requestIdOrKey}/feedback',
  tags: ['Request'],
  summary: 'Delete feedback',
  description:
    "This method deletes the feedback of request using it's `requestKey` or `requestId`\n\n**[Permissions](#permissions) required**: User must be the reporter or an Atlassian Connect app.",
  operationId: 'deleteFeedback',
  request: {
    params: z.object({
      requestIdOrKey: z
        .string()
        .openapi({
          param: {
            description: 'The id or the key of the request to post the feedback on',
            in: 'path',
            name: 'requestIdOrKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No content.', content: { 'application/json': { schema: z.any() } } },
    401: {
      description: 'Returned if no logged in user/app.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user/app does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the customer request does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const getRestServicedeskapiRequesttypeRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/requesttype',
  tags: ['Requesttype'],
  summary: 'Get all request types',
  description:
    'This method returns all customer request types used in the Jira Service Management instance, optionally filtered by a query string.\n\nUse [servicedeskapi/servicedesk/\\{serviceDeskId\\}/requesttype](#api-servicedesk-serviceDeskId-requesttype-get) to find the customer request types supported by a specific service desk.\n\nThe returned list of customer request types can be filtered using the `searchQuery` parameter. The parameter is matched against the customer request types\' `name` or `description`. For example, searching for "Install", "Inst", "Equi", or "Equipment" will match a customer request type with the *name* "Equipment Installation Request".\n\n**Note:** This API by default will filter out request types hidden in the portal (i.e. request types without groups and request types where a user doesn\'t have permission) when `searchQuery` is provided, unless `includeHiddenRequestTypesInSearch` is set to true. Restricted request types will not be returned for those who aren\'t admins.\n\n**[Permissions](#permissions) required**: Any',
  operationId: 'getAllRequestTypes',
  request: {
    query: z.object({
      searchQuery: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to be used to filter the results.',
            in: 'query',
            name: 'searchQuery',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceDeskId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter the request types by service desk Ids provided. Multiple values of the query parameter are supported. For example, `serviceDeskId=1&serviceDeskId=2` will return request types only for service desks 1 and 2.',
            in: 'query',
            name: 'serviceDeskId',
            schema: { items: { format: 'int32', type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().default('')),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'expand',
            schema: { items: { default: '', type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      includeHiddenRequestTypesInSearch: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to include hidden request types when searching with `searchQuery`.',
            in: 'query',
            name: 'includeHiddenRequestTypesInSearch',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      restrictionStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request type restriction status (`open` or `restricted`) used to filter the results.',
            in: 'query',
            name: 'restrictionStatus',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the request types, on the specified page of the results.',
      content: {
        'application/json': {
          schema: PagedDTORequestTypeDTOSchema,
          example:
            '{"_expands":[],"size":3,"start":3,"limit":3,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype?start=6&limit=3","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype?start=0&limit=3"},"values":[{"_expands":[],"id":"11001","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11001"},"name":"Get IT Help","description":"Get IT Help","helpText":"Please tell us clearly the problem you have within 100 words.","issueTypeId":"12345","serviceDeskId":"28","portalId":"2","groupIds":["12"],"icon":{"id":"12345","_links":{"iconUrls":{"48x48":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=large","24x24":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=small","16x16":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=xsmall","32x32":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=medium"}}}},{"_expands":[],"id":"11002","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11002"},"name":"Request a new account","description":"Request a new account","issueTypeId":"12345","serviceDeskId":"28","portalId":"2","groupIds":["13","14"],"icon":{"id":"12346","_links":{"iconUrls":{"48x48":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=large","24x24":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=small","16x16":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=xsmall","32x32":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=medium"}}}},{"_expands":[],"id":"11003","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11003"},"name":"Hardware request","description":"Request a hardware support","issueTypeId":"12345","serviceDeskId":"28","portalId":"2","groupIds":["13"],"icon":{"id":"12347","_links":{"iconUrls":{"48x48":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=large","24x24":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=small","16x16":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=xsmall","32x32":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=medium"}}}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const getRestServicedeskapiServicedeskRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/servicedesk',
  tags: ['Servicedesk'],
  summary: 'Get service desks',
  description:
    'This method returns all the service desks in the Jira Service Management instance that the user has permission to access. Use this method where you need a list of service desks or need to locate a service desk by name or keyword.\n\n**Note:** This method will be slow if the instance has hundreds of service desks. If you want to fetch a single service desk by its ID, use [/rest/servicedeskapi/servicedesk/\\{serviceDeskId\\}](./#api-rest-servicedeskapi-servicedesk-servicedeskid-get) instead.\n\n**[Permissions](#permissions) required**: Any',
  operationId: 'getServiceDesks',
  request: {
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the service desks, on the specified page of the results.',
      content: {
        'application/json': {
          schema: PagedDTOServiceDeskDTOSchema,
          example:
            '{"_expands":[],"size":3,"start":3,"limit":3,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk?start=6&limit=3","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk?start=0&limit=3"},"values":[{"id":"10001","projectId":"11001","projectName":"IT Help Desk","projectKey":"ITH","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10001"}},{"id":"10002","projectId":"11002","projectName":"HR Self Serve Desk","projectKey":"HR","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10002"}},{"id":"10003","projectId":"11003","projectName":"Foundation Leave","projectKey":"FL","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10003"}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const getRestServicedeskapiServicedeskServiceDeskIdRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}',
  tags: ['Servicedesk'],
  summary: 'Get service desk by id',
  description:
    "This method returns a service desk. Use this method to get service desk details whenever your application component is passed a service desk ID but needs to display other service desk details.\n\n**[Permissions](#permissions) required**: Permission to access the Service Desk. For example, being the Service Desk's Administrator or one of its Agents or Users.",
  operationId: 'getServiceDeskById',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the service desk to return. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the requested service desk.',
      content: {
        'application/json': {
          schema: ServiceDeskDTOSchema,
          example:
            '{"id":"10001","projectId":"11001","projectName":"IT Help Desk","projectKey":"ITH","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10001"}}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if service desk does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const postRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFileRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/attachTemporaryFile',
  tags: ['Servicedesk'],
  summary: 'Attach temporary file',
  description:
    'This method adds one or more temporary attachments to a service desk, which can then be permanently attached to a customer request using [servicedeskapi/request/\\{issueIdOrKey\\}/attachment](#api-request-issueIdOrKey-attachment-post).\n\n**Note**: It is possible for a service desk administrator to turn off the ability to add attachments to a service desk.\n\nThis method expects a multipart request. The media-type multipart/form-data is defined in RFC 1867. Most client libraries have classes that make dealing with multipart posts simple. For instance, in Java the Apache HTTP Components library provides [MultiPartEntity](http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html).\n\nBecause this method accepts multipart/form-data, it has XSRF protection on it. This means you must submit a header of X-Atlassian-Token: no-check with the request or it will be blocked.\n\nThe name of the multipart/form-data parameter that contains the attachments must be `file`.\n\nFor example, to upload a file called `myfile.txt` in the Service Desk with ID 10001 use\n\n    curl -D- -u customer:customer -X POST -H "X-ExperimentalApi: opt-in" -H "X-Atlassian-Token: no-check" -F "file=@myfile.txt" https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10001/attachTemporaryFile\n\n**[Permissions](#permissions) required**: Permission to add attachments in this Service Desk.',
  operationId: 'attachTemporaryFile',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the Service Desk to which the file will be attached. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z.preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(
              z
                .strictObject({
                  bytes: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()),
                    )
                    .exactOptional(),
                  contentType: z.string().exactOptional(),
                  empty: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  inputStream: z.object({}).exactOptional(),
                  name: z.string().exactOptional(),
                  originalFilename: z.string().exactOptional(),
                  resource: z
                    .strictObject({
                      contentAsByteArray: z
                        .preprocess(
                          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                          z.array(z.string()),
                        )
                        .exactOptional(),
                      description: z.string().exactOptional(),
                      file: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
                      filename: z.string().exactOptional(),
                      inputStream: z.object({}).exactOptional(),
                      open: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                      readable: z
                        .preprocess(
                          ((read) => (val: unknown) => {
                            const result = read.safeParse(val)
                            return result.success ? result.data : val
                          })(z.stringbool()),
                          z.boolean(),
                        )
                        .exactOptional(),
                      uri: z.url().exactOptional(),
                      url: z.url().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  size: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64' }),
                })
                .openapi({ required: [] }),
            ),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Returns if the file(s) were attached.', content: {} },
    400: {
      description:
        'Returned if the attachments are not valid, or exceed the maximum configured attachment size.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    413: {
      description: 'Returned if more than 60 files are requested to be uploaded.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['write:servicedesk-request'] }],
})

export const getRestServicedeskapiServicedeskServiceDeskIdCustomerRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/customer',
  tags: ['Servicedesk'],
  summary: 'Get customers',
  description:
    'This method returns a list of the customers on a service desk.\n\nThe returned list of customers can be filtered using the `query` parameter. The parameter is matched against customers\' `displayName`, `name`, or `email`. For example, searching for "John", "Jo", "Smi", or "Smith" will match a user with display name "John Smith".\n\n**[Permissions](#permissions) required**: Permission to view this Service Desk\'s customers.',
  operationId: 'getCustomers',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the service desk the customer list should be returned from. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The string used to filter the customer list.',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of users to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns the service desk's customer list.",
      content: {
        'application/json': {
          schema: PagedDTOUserDTOSchema,
          example:
            '{"_expands":[],"size":1,"start":1,"limit":1,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/customer?start=2&limit=1","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/customer?start=0&limit=1"},"values":[{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const postRestServicedeskapiServicedeskServiceDeskIdCustomerRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/customer',
  tags: ['Servicedesk'],
  summary: 'Add customers',
  description:
    'Adds one or more customers to a service desk. If any of the passed customers are associated with the service desk, no changes will be made for those customers and the resource returns a 204 success code.\n\n**[Permissions](#permissions) required**: Service desk administrator',
  operationId: 'addCustomers',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the service desk the customer list should be returned from. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ServiceDeskCustomerDTOSchema,
          example: {
            accountIds: [
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae',
            ],
            usernames: [
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae',
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description:
        'Returned if all the customers were added to the service desk or were already associated with the service desk.',
    },
    400: {
      description:
        'Returned if any of the customers do not exist. Note that any valid customers are added, but no confirmation is returned.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const deleteRestServicedeskapiServicedeskServiceDeskIdCustomerRoute = createRoute({
  method: 'delete',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/customer',
  tags: ['Servicedesk'],
  summary: 'Remove customers',
  description:
    'This method removes one or more customers from a service desk. The service desk must have closed access. If any of the passed customers are not associated with the service desk, no changes will be made for those customers and the resource returns a 204 success code.\n\n**[Permissions](#permissions) required**: Services desk administrator',
  operationId: 'removeCustomers',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the service desk the customers should be removed from. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ServiceDeskCustomerDTOSchema,
          example: {
            accountIds: [
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae',
            ],
            usernames: [
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3a01db05e2a66fa80bd',
              'qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d69abfa3980ce712caae',
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description:
        'Returned if the customers were removed from the service desk, or any of the customers were not associated with the service desk.',
    },
    400: {
      description: 'Returned if the service desk has public signup or open access enabled.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const postRestServicedeskapiServicedeskServiceDeskIdCustomerInviteRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/customer/invite',
  tags: ['Servicedesk'],
  summary: 'Invite customer',
  description:
    "This method invites a customer to a specified service desk by sending them an email invitation, creating a new customer account if one does not already exist. The display name does not need to be unique. The record's identifiers, `name` and `key`, are automatically generated from the request details.\n\n**[Permissions](#permissions) required**: Jira Administrator Global permission & Service desk administrator",
  operationId: 'inviteCustomer',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the service desk to which the newly created customer should be added.',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      strictConflictStatusCode: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional boolean flag to return 409 Conflict status code when a customer with the same email already exists.',
            in: 'query',
            name: 'strictConflictStatusCode',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ServiceDeskCustomerInviteDTOSchema,
          example: { displayName: 'Fred F. User', email: 'fred@example.com' },
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Returns the customer details.', content: {} },
    400: {
      description:
        'Returned if the request is invalid, either because the display name is empty, or email address is empty or incorrectly formed or already exists in the database if `strictConflictStatusCode=false` or if `strictConflictStatusCode=false` parameter is not provided.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description:
        'Returned if the servicedesk id does not exist or servicedesk does not belong to a JSM project.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    409: {
      description:
        'Returned if the request is invalid because the email address already exists in the database and `strictConflictStatusCode=true`',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const postRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheckRoute =
  createRoute({
    method: 'post',
    path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/customer/skip-permission-check',
    summary: 'Add customers',
    description:
      'Adds one or more customers to a service desk on behalf of jsd-nutmeg.\n\nThis endpoint is restricted to jsd-nutmeg via ASAP authentication. It provides the same capability as the public \\{@code POST /servicedeskapi/servicedesk/\\{serviceDeskId\\}/customer\\} endpoint, but does not require a User Context Token (UCT) or Connect app user \\\\u2014 authorization is enforced entirely via the ASAP token.\n\nNo user permission checks are performed; \\{@code null\\} is passed as the acting user to bypass the permission check in the underlying service.\n\nIf any of the passed customers are already associated with the service desk, no changes will be made for those customers and the resource returns a 204 success code.',
    operationId: 'addCustomers',
    request: {
      params: z.object({
        serviceDeskId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the service desk to add customers to. This can alternatively be a project identifier.',
              in: 'path',
              name: 'serviceDeskId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        description: 'JSON body containing the account IDs of customers to add.',
        content: { 'application/json': { schema: ServiceDeskCustomerDTOSchema } },
        required: true,
      },
    },
    responses: {
      204: {
        description:
          'The request completed successfully. No additional content will be sent in the response.',
        content: { 'application/json': { schema: z.any() } },
      },
    },
  })

export const getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticleRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/knowledgebase/article',
  tags: ['Servicedesk'],
  summary: 'Get articles',
  description:
    'Returns articles which match the given query and belong to the knowledge base linked to the service desk.\n\n**[Permissions](#permissions) required**: Permission to access the service desk.',
  operationId: 'getArticles',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'serviceDeskId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The string used to filter the articles (required).',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      highlight: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true matching query term in the title and excerpt will be highlighted using the `@@@hl@@@term@@@endhl@@@` syntax. Default: false.',
            in: 'query',
            name: 'highlight',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '(Deprecated) The starting index of the returned objects. Base index: 0.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return per page. Default: 50. See the section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Pointer to a set of search results, returned as part of the next or prev URL from the previous search call.',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
      prev: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Should navigate to the previous page. Defaulted to false. Set to true as part of prev URL from the previous search call.',
            in: 'query',
            name: 'prev',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the articles, on the specified page of the results.',
      content: {
        'application/json': {
          schema: PagedDTOArticleDTOSchema,
          example:
            '{"_expands":[],"size":2,"start":2,"limit":2,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/%7BserviceDeskId%7D/knowledgebase/article?start=4&limit=2","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/%7BserviceDeskId%7D/knowledgebase/article?start=0&limit=2"},"values":[{"title":"Stolen computer","excerpt":"assuming your computer was stolen","source":{"type":"confluence","pageId":"8786177","spaceKey":"IT"},"content":{"iframeSrc":"https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article/view/8786177"}},{"title":"Upgrading computer","excerpt":"each computer older then 3 years can be upgraded","source":{"type":"confluence","pageId":"8785228","spaceKey":"IT"},"content":{"iframeSrc":"https://your-domain.atlassian.net/rest/servicedeskapi/knowledgebase/article/view/8785228"}}]}',
        },
      },
    },
    400: {
      description: 'Returned if the request is invalid, for example: missing query parameter.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:knowledgebase:jira-service-management'] }],
})

export const getRestServicedeskapiServicedeskServiceDeskIdOrganizationRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/organization',
  tags: ['Organization'],
  summary: 'Get organizations',
  description:
    "This method returns a list of all organizations associated with a service desk.\n\n**[Permissions](#permissions) required**: Service desk's agent.",
  operationId: 'getOrganizations',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the service desk from which the organization list will be returned. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the requested organizations list.',
      content: {
        'application/json': {
          schema: PagedDTOOrganizationDTOSchema,
          example:
            '{"_expands":[],"size":3,"start":3,"limit":3,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10001/organization?start=6&limit=3","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/10001/organization?start=0&limit=3"},"values":[{"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/organization/1"},"id":"1","name":"Charlie Cakes Franchises","scimManaged":false},{"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/organization/2"},"id":"2","name":"Atlas Coffee Co","scimManaged":false},{"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/organization/3"},"id":"3","name":"The Adjustment Bureau","scimManaged":false}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if user does not have the necessary permission.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk does not exist or the user is not found.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const postRestServicedeskapiServicedeskServiceDeskIdOrganizationRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/organization',
  tags: ['Organization'],
  summary: 'Add organization',
  description:
    "This method adds an organization to a service desk. If the organization ID is already associated with the service desk, no change is made and the resource returns a 204 success code.\n\n**[Permissions](#permissions) required**: Service desk's agent.",
  operationId: 'addOrganization',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the service desk to which the organization will be added. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: OrganizationServiceDeskUpdateDTOSchema,
          example: { organizationId: 1 },
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description:
        'Returned if the organization was added or the organization was already associated with the service desk.',
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk or organization do not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const deleteRestServicedeskapiServicedeskServiceDeskIdOrganizationRoute = createRoute({
  method: 'delete',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/organization',
  tags: ['Organization'],
  summary: 'Remove organization',
  description:
    "This method removes an organization from a service desk. If the organization ID does not match an organization associated with the service desk, no change is made and the resource returns a 204 success code.\n\n**[Permissions](#permissions) required**: Service desk's agent.",
  operationId: 'removeOrganization',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the service desk from which the organization will be removed. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: OrganizationServiceDeskUpdateDTOSchema,
          example: { organizationId: 1 },
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description:
        'Returned if the organization was removed from the service desk or no such organization was associated with the service desk.',
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk or organization do not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['manage:servicedesk-customer'] }],
})

export const getRestServicedeskapiServicedeskServiceDeskIdQueueRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/queue',
  tags: ['Servicedesk'],
  summary: 'Get queues',
  description:
    "This method returns the queues in a service desk. To include a customer request count for each queue (in the `issueCount` field) in the response, set the query parameter `includeCount` to true (its default is false).\n\n**[Permissions](#permissions) required**: service desk's Agent.",
  operationId: 'getQueues',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the service desk whose queues will be returned. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includeCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies whether to include each queue's customer request (issue) count in the response.",
            in: 'query',
            name: 'includeCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the queues of the service desk, on the specified page of the results.',
      content: {
        'application/json': {
          schema: PagedDTOQueueDTOSchema,
          example:
            '{"_expands":[],"size":2,"start":2,"limit":2,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue?start=4&limit=2","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue?start=0&limit=2"},"values":[{"id":"10","name":"Unassigned issues","jql":"project = SD AND assignee is EMPTY AND resolution = Unresolved ORDER BY \\"Time to resolution\\" ASC","fields":["issuetype","issuekey","summary","created","reporter","duedate"],"issueCount":10,"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue/10"}},{"id":"20","name":"Assigned to me","jql":"project = SD AND assignee = currentUser() AND resolution = Unresolved ORDER BY \\"Time to resolution\\" ASC","fields":["issuetype","issuekey","summary","created","reporter","duedate"],"issueCount":10,"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue/20"}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:jira-work'] }],
})

export const getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/queue/{queueId}',
  tags: ['Servicedesk'],
  summary: 'Get queue',
  description:
    "This method returns a specific queues in a service desk. To include a customer request count for the queue (in the `issueCount` field) in the response, set the query parameter `includeCount` to true (its default is false).\n\n**[Permissions](#permissions) required**: service desk's Agent.",
  operationId: 'getQueue',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the service desk whose queues will be returned. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      queueId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'ID of the required queue.',
            in: 'path',
            name: 'queueId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      includeCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies whether to include each queue's customer request (issue) count in the response.",
            in: 'query',
            name: 'includeCount',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the specific queue of the service desk.',
      content: {
        'application/json': {
          schema: QueueDTOSchema,
          example:
            '{"id":"20","name":"Assigned to me","jql":"project = SD AND assignee = currentUser() AND resolution = Unresolved ORDER BY \\"Time to resolution\\" ASC","fields":["issuetype","issuekey","summary","created","reporter","duedate"],"issueCount":10,"_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue/20"}}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:jira-work'] }],
})

export const getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssueRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/queue/{queueId}/issue',
  tags: ['Servicedesk'],
  summary: 'Get issues in queue',
  description:
    "This method returns the customer requests in a queue. Only fields that the queue is configured to show are returned. For example, if a queue is configured to show description and due date, then only those two fields are returned for each customer request in the queue.\n\n**[Permissions](#permissions) required**: Service desk's agent.",
  operationId: 'getIssuesInQueue',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the service desk containing the queue to be queried. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      queueId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'The ID of the queue whose customer requests will be returned.',
            in: 'path',
            name: 'queueId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns the customer requests belonging to the queue, on the specified page of the results.',
      content: {
        'application/json': {
          schema: PagedDTOIssueBeanSchema,
          example:
            '{"_expands":[],"size":1,"start":1,"limit":1,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue/10/issue?start=2&limit=1","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/1/queue/10/issue?start=0&limit=1"},"values":[{"fields":{"summary":"My keyboard is broken","issuetype":{"avatarId":10002,"description":"For general IT problems and questions. Created by Jira Service Management.","iconUrl":"https://your-domain.atlassian.net/servicedesk/issue-type-icons?icon=it-help","id":"13","name":"IT Help","self":"https://your-domain.atlassian.net/rest/api/2/issuetype/13","subtask":false},"duedate":"2015-11-11T14:17:13.000+0700","created":"2015-11-09T14:17:13.000+0700","reporter":{"accountId":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","name":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","key":"qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","emailAddress":"fred@example.com","displayName":"Fred F. User","active":true,"timeZone":"Australia/Sydney","_links":{"jiraRest":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b","avatarUrls":{"16x16":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue","24x24":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue","32x32":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue","48x48":"https://avatar-cdn.atlassian.com/9bc3b5bcb0db050c6d7660b28a5b86c9?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F9bc3b5bcb0db050c6d7660b28a5b86c9%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue"},"self":"https://your-domain.atlassian.net/rest/api/2/user?username=qm:a713c8ea-1075-4e30-9d96-891a7d181739:5ad6d3581db05e2a66fa80b"}}},"id":"10001","key":"SD-1","self":"https://your-domain.atlassian.net/rest/servicedeskapi/rest/api/2/issue/10001"}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk or the queue do not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:jira-work'] }],
})

export const getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype',
  tags: ['Servicedesk'],
  summary: 'Get request types',
  description:
    'This method returns all customer request types from a service desk. There are two parameters for filtering the returned list:\n\n *  `groupId` which filters the results to items in the customer request type group.\n *  `searchQuery` which is matched against request types\' `name` or `description`. For example, the strings "Install", "Inst", "Equi", or "Equipment" will match a request type with the *name* "Equipment Installation Request".\n\n**Note:** This API by default will filter out request types hidden in the portal (i.e. request types without groups and request types where a user doesn\'t have permission) when `searchQuery` is provided, unless `includeHiddenRequestTypesInSearch` is set to true. Restricted request types will not be returned for those who aren\'t admins.\n\n**[Permissions](#permissions) required**: Permission to access the service desk.',
  operationId: 'getRequestTypes',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the service desk whose customer request types are to be returned. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      groupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filters results to those in a customer request type group.',
            in: 'query',
            name: 'groupId',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      expand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().default('')),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'expand',
            schema: { items: { default: '', type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      searchQuery: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The string to be used to filter the results.',
            in: 'query',
            name: 'searchQuery',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      includeHiddenRequestTypesInSearch: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to include hidden request types when searching with `searchQuery`.',
            in: 'query',
            name: 'includeHiddenRequestTypesInSearch',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      restrictionStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Request type restriction status (`open` or `restricted`) used to filter the results.',
            in: 'query',
            name: 'restrictionStatus',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Returns the requested customer request types, on the specified page of the results.',
      content: {
        'application/json': {
          schema: PagedDTORequestTypeDTOSchema,
          example:
            '{"_expands":[],"size":3,"start":3,"limit":3,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype?start=6&limit=3","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype?start=0&limit=3"},"values":[{"_expands":[],"id":"11001","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11001"},"name":"Get IT Help","description":"Get IT Help","helpText":"Please tell us clearly the problem you have within 100 words.","issueTypeId":"12345","serviceDeskId":"28","portalId":"2","groupIds":["12"],"icon":{"id":"12345","_links":{"iconUrls":{"48x48":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=large","24x24":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=small","16x16":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=xsmall","32x32":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=medium"}}}},{"_expands":[],"id":"11002","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11002"},"name":"Request a new account","description":"Request a new account","issueTypeId":"12345","serviceDeskId":"28","portalId":"2","groupIds":["13","14"],"icon":{"id":"12346","_links":{"iconUrls":{"48x48":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=large","24x24":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=small","16x16":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=xsmall","32x32":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12346?size=medium"}}}},{"_expands":[],"id":"11003","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11003"},"name":"Hardware request","description":"Request a hardware support","issueTypeId":"12345","serviceDeskId":"28","portalId":"2","groupIds":["13"],"icon":{"id":"12347","_links":{"iconUrls":{"48x48":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=large","24x24":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=small","16x16":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=xsmall","32x32":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12347?size=medium"}}}}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})

export const postRestServicedeskapiServicedeskServiceDeskIdRequesttypeRoute = createRoute({
  method: 'post',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype',
  tags: ['Servicedesk'],
  summary: 'Create request type',
  description:
    "This method enables a customer request type to be added to a service desk based on an issue type. Note that not all customer request type fields can be specified in the request and these fields are given the following default values:\n\n *  Request type icon is given the headset icon.\n *  Request type groups is left empty, which means this customer request type will not be visible on the [customer portal](https://confluence.atlassian.com/servicedeskcloud/configuring-the-customer-portal-732528918.html).\n *  Request type status mapping is left empty, so the request type has no custom status mapping but inherits the status map from the issue type upon which it is based.\n *  Request type field mapping is set to show the required fields as specified by the issue type used to create the customer request type.\n\n  \nThese fields can be updated by a service desk administrator using the **Request types** option in **Project settings**.  \nRequest Types are created in next-gen projects by creating Issue Types. Please use the Jira Cloud Platform Create issue type endpoint instead.\n\n**[Permissions](#permissions) required**: Service desk's administrator",
  operationId: 'createRequestType',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the service desk where the customer request type is to be created. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: RequestTypeCreateDTOSchema,
          example: {
            description: 'Get IT Help',
            helpText: 'Please tell us clearly the problem you have within 100 words.',
            issueTypeId: '12345',
            name: 'Get IT Help',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the customer request type created.',
      content: {
        'application/json': {
          schema: RequestTypeDTOSchema,
          example:
            '{"_expands":[],"id":"11001","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11001"},"name":"Get IT Help","description":"Get IT Help","helpText":"Please tell us clearly the problem you have within 100 words.","issueTypeId":"12345","serviceDeskId":"28","portalId":"2","groupIds":["12"],"icon":{"id":"12345","_links":{"iconUrls":{"48x48":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=large","24x24":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=small","16x16":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=xsmall","32x32":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=medium"}}}}',
        },
      },
    },
    400: {
      description: 'Returned if the customer request type name is empty.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk or issue type do not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [
    {
      OAuth2: [
        'read:requesttype:jira-service-management',
        'write:requesttype:jira-service-management',
      ],
    },
  ],
})

export const postRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheckRoute =
  createRoute({
    method: 'post',
    path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/permissions/check',
    tags: ['Servicedesk'],
    summary: 'Check request type permissions',
    description:
      "Returns:\n\n *  a list of request type IDs where the given user has permission to administer.\n *  a list of request type IDs where the given user has permission to submit the request.\n\nIf no account ID is provided, the operation returns details for the logged in user.\n\nNote that:\n\n *  invalid request type IDs are ignored.\n *  a maximum of 50 request types can be checked.\n\n**[Permissions](#permissions) required:**\n\n *  *Administer Jira* or *Project Administrator* to check the permissions for other users.\n\nHowever, Connect apps can make a call from the app server to the product to obtain permission details for any user, without admin permission. This Connect app ability doesn't apply to calls made using AP.request() in a browser.",
    operationId: 'checkRequestTypePermissions',
    request: {
      params: z.object({
        serviceDeskId: z
          .string()
          .openapi({
            param: {
              in: 'path',
              name: 'serviceDeskId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        description: 'Details of the permissions to check.',
        content: { 'application/json': { schema: RequestTypePermissionCheckRequestDTOSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Returned if the request is successful.',
        content: { 'application/json': { schema: RequestTypePermissionCheckResponseSchema } },
      },
      400: {
        description:
          'Returned if:\n\n *  more than 50 request type IDs have been supplied.\n *  an invalid account identifier has been provided.\n *  no permissions have been supplied.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      401: {
        description: 'Returned if the user does not have the necessary permission.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      500: {
        description: 'Internal Server Error.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
    },
    security: [{ OAuth2: ['read:servicedesk-request'] }, {}],
  })

export const getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdRoute =
  createRoute({
    method: 'get',
    path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}',
    tags: ['Servicedesk'],
    summary: 'Get request type by id',
    description:
      'This method returns a customer request type from a service desk.\n\nThis operation can be accessed anonymously.\n\n**[Permissions](#permissions) required**: Permission to access the service desk.',
    operationId: 'getRequestTypeById',
    request: {
      params: z.object({
        serviceDeskId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the service desk whose customer request type is to be returned. This can alternatively be a [project identifier.](#project-identifiers)',
              in: 'path',
              name: 'serviceDeskId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        requestTypeId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the customer request type to be returned.',
              in: 'path',
              name: 'requestTypeId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string().default('')),
          )
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'expand',
              schema: { items: { default: '', type: 'string' }, type: 'array' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Returns the customer request type item.',
        content: {
          'application/json': {
            schema: RequestTypeDTOSchema,
            example:
              '{"_expands":[],"id":"11001","_links":{"self":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/28/requesttype/11001"},"name":"Get IT Help","description":"Get IT Help","helpText":"Please tell us clearly the problem you have within 100 words.","issueTypeId":"12345","serviceDeskId":"28","portalId":"2","groupIds":["12"],"icon":{"id":"12345","_links":{"iconUrls":{"48x48":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=large","24x24":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=small","16x16":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=xsmall","32x32":"https://your-domain.atlassian.net/rest/api/2/universal_avatar/view/type/SD_REQTYPE/avatar/12345?size=medium"}}}}',
          },
        },
      },
      401: {
        description: 'Returned if the user credentials are invalid.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      403: {
        description: 'Returned if the user does not have permission to complete this request.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      404: {
        description: 'Returned if the service desk or customer request type do not exist.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      500: {
        description: 'Internal Server Error.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
    },
    security: [{ OAuth2: ['read:servicedesk-request'] }, {}],
  })

export const deleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdRoute =
  createRoute({
    method: 'delete',
    path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}',
    tags: ['Servicedesk'],
    summary: 'Delete request type',
    description:
      'This method deletes a customer request type from a service desk, and removes it from all customer requests.  \nThis only supports classic projects.\n\n**[Permissions](#permissions) required**: Service desk administrator.',
    operationId: 'deleteRequestType',
    request: {
      params: z.object({
        serviceDeskId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID or [project identifier](#project-identifiers) of the service desk.',
              in: 'path',
              name: 'serviceDeskId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        requestTypeId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The ID of the request type.',
              in: 'path',
              name: 'requestTypeId',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Returned if the request type is deleted.' },
      400: {
        description: 'Returned if the request type ID is not valid.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      401: {
        description: 'Returned if the user is not logged in.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      403: {
        description:
          'Returned if the user does not have the necessary permission to complete this request.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      404: {
        description: 'Returned if the service desk or request type do not exist.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      500: {
        description: 'Internal Server Error.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
    },
    security: [{ OAuth2: ['manage:jira-project'] }],
  })

export const getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdFieldRoute =
  createRoute({
    method: 'get',
    path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/field',
    tags: ['Servicedesk'],
    summary: 'Get request type fields',
    description:
      "This method returns the fields for a service desk's customer request type.\n\nAlso, the following information about the user's permissions for the request type is returned:\n\n *  `canRaiseOnBehalfOf` returns `true` if the user has permission to raise customer requests on behalf of other customers. Otherwise, returns `false`.\n *  `canAddRequestParticipants` returns `true` if the user can add customer request participants. Otherwise, returns `false`.\n\n**[Permissions](#permissions) required**: Permission to view the Service Desk. However, hidden fields would be visible to only Service desk's Administrator.",
    operationId: 'getRequestTypeFields',
    request: {
      params: z.object({
        serviceDeskId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the service desk containing the request types whose fields are to be returned. This can alternatively be a [project identifier.](#project-identifiers)',
              in: 'path',
              name: 'serviceDeskId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        requestTypeId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The ID of the request types whose fields are to be returned.',
              in: 'path',
              name: 'requestTypeId',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
      }),
      query: z.object({
        expand: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string().default('')),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'Use [expand](#expansion) to include additional information in the response. This parameter accepts `hiddenFields` that returns hidden fields associated with the request type.',
              in: 'query',
              name: 'expand',
              schema: { items: { default: '', type: 'string' }, type: 'array' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description:
          "Returns the request type's fields and user permission details, on the specified page of the results.",
        content: {
          'application/json': {
            schema: CustomerRequestCreateMetaDTOSchema,
            example:
              '{"canAddRequestParticipants":true,"canRaiseOnBehalfOf":true,"requestTypeFields":[{"fieldId":"summary","jiraSchema":{"system":"summary","type":"string"},"name":"What do you need?","required":true,"validValues":[],"visible":true},{"fieldId":"customfield_10000","jiraSchema":{"custom":"com.atlassian.jira.plugin.system.customfieldtypes:userpicker","customId":10000,"type":"user"},"name":"Nominee","required":true,"validValues":[],"visible":true},{"fieldId":"customfield_10001","jiraSchema":{"custom":"com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons","customId":10001,"type":"string"},"name":"Gifts","required":true,"validValues":[{"children":[],"label":"Bottle of Wine","value":"10000"},{"children":[],"label":"Threadless Voucher","value":"10001"},{"children":[],"label":"2 Movie Tickets","value":"10002"}],"visible":false}]}',
          },
        },
      },
      401: {
        description: 'Returned if the user is not logged in.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      403: {
        description: 'Returned if the user does not have permission to complete this request.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      404: {
        description: 'Returned if the service desk or request type do not exist.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      500: {
        description: 'Internal Server Error.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
    },
    security: [{ OAuth2: ['read:servicedesk-request'] }],
  })

export const getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyRoute =
  createRoute({
    method: 'get',
    path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property',
    tags: ['Servicedesk'],
    summary: 'Get properties keys',
    description:
      'Returns the keys of all properties for a request type.\n\nProperties for a Request Type in next-gen are stored as Issue Type properties and therefore the keys of all properties for a request type are also available by calling the Jira Cloud Platform [Get issue type property keys](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issuetype-issueTypeId-properties-get) endpoint.\n\n**[Permissions](#permissions) required**: The user must have permission to view the request type.',
    operationId: 'getPropertiesKeys',
    request: {
      params: z.object({
        requestTypeId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The ID of the request type for which keys will be retrieved.',
              in: 'path',
              name: 'requestTypeId',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        serviceDeskId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers)',
              in: 'path',
              name: 'serviceDeskId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Returned if the request type was found.',
        content: {
          'application/json': {
            schema: PropertyKeysSchema,
            example:
              '{"entityPropertyKeyBeans":[{"key":"requestType.attributes","self":"/rest/servicedeskapi/servicedesk/1/requestType/2/property/propertyKey"}]}',
          },
        },
      },
      400: {
        description: 'Returned if the request type ID is invalid.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      401: {
        description: 'Returned if the user is not logged in.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      404: {
        description: 'Returned if the request type does not exist.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      500: {
        description: 'Internal Server Error.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
    },
    security: [{ OAuth2: ['read:servicedesk-request'] }],
  })

export const getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyRoute =
  createRoute({
    method: 'get',
    path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property/{propertyKey}',
    tags: ['Servicedesk'],
    summary: 'Get property',
    description:
      'Returns the value of the property from a request type.\n\nProperties for a Request Type in next-gen are stored as Issue Type properties and therefore also available by calling the Jira Cloud Platform [Get issue type property](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issuetype-issueTypeId-properties-propertyKey-get) endpoint.\n\n**[Permissions](#permissions) required**: User must have permission to view the request type.',
    operationId: 'getProperty',
    request: {
      params: z.object({
        serviceDeskId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers)',
              in: 'path',
              name: 'serviceDeskId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        requestTypeId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The ID of the request type from which the property will be retrieved.',
              in: 'path',
              name: 'requestTypeId',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        propertyKey: z
          .string()
          .openapi({
            param: {
              description: 'The key of the property to return.',
              in: 'path',
              name: 'propertyKey',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Returned if the request type property was returned.',
        content: {
          'application/json': {
            schema: EntityPropertySchema,
            example:
              '{"key":"organization.attributes","value":{"color":"green","priority":"high"}}',
          },
        },
      },
      400: {
        description: 'Returned if the request type ID is invalid.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      401: {
        description: 'Returned if the user is not logged in.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      404: {
        description: 'Returned if the request type or property do not exist.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      500: {
        description: 'Internal Server Error.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
    },
    security: [{ OAuth2: ['read:servicedesk-request'] }],
  })

export const putRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyRoute =
  createRoute({
    method: 'put',
    path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property/{propertyKey}',
    tags: ['Servicedesk'],
    summary: 'Set property',
    description:
      'Sets the value of a request type property. Use this resource to store custom data against a request type.\n\nProperties for a Request Type in next-gen are stored as Issue Type properties and therefore can also be set by calling the Jira Cloud Platform [Set issue type property](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issuetype-issueTypeId-properties-propertyKey-put) endpoint.\n\n**[Permissions](#permissions) required**: Jira project administrator with a Jira Service Management agent license.',
    operationId: 'setProperty',
    request: {
      params: z.object({
        serviceDeskId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers)',
              in: 'path',
              name: 'serviceDeskId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        requestTypeId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The ID of the request type on which the property will be set.',
              in: 'path',
              name: 'requestTypeId',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        propertyKey: z
          .string()
          .openapi({
            param: {
              description:
                'The key of the request type property. The maximum length of the key is 255 bytes.',
              in: 'path',
              name: 'propertyKey',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Returned if the request type property is updated.',
        content: { 'application/json': { schema: z.any() } },
      },
      201: {
        description: 'Returned if the request type property is created.',
        content: { 'application/json': { schema: z.any() } },
      },
      400: {
        description: 'Returned if the request type ID is invalid.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      401: {
        description: 'Returned if the user is not logged in.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      403: {
        description:
          "Returned if the calling user doesn't have permission to complete this request.",
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      404: {
        description: 'Returned if the request type does not exist.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      500: {
        description: 'Internal Server Error.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
    },
    security: [{ OAuth2: ['manage:jira-project'] }],
  })

export const deleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKeyRoute =
  createRoute({
    method: 'delete',
    path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttype/{requestTypeId}/property/{propertyKey}',
    tags: ['Servicedesk'],
    summary: 'Delete property',
    description:
      'Removes a property from a request type.\n\nProperties for a Request Type in next-gen are stored as Issue Type properties and therefore can also be deleted by calling the Jira Cloud Platform [Delete issue type property](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issuetype-issueTypeId-properties-propertyKey-delete) endpoint.\n\n**[Permissions](#permissions) required**: Jira project administrator with a Jira Service Management agent license.',
    operationId: 'deleteProperty',
    request: {
      params: z.object({
        serviceDeskId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the service desk which contains the request type. This can alternatively be a [project identifier.](#project-identifiers)',
              in: 'path',
              name: 'serviceDeskId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        requestTypeId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              description: 'The ID of the request type for which the property will be removed.',
              in: 'path',
              name: 'requestTypeId',
              required: true,
              schema: { format: 'int32', type: 'integer' },
            },
          }),
        propertyKey: z
          .string()
          .openapi({
            param: {
              description: 'The key of the property to remove.',
              in: 'path',
              name: 'propertyKey',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Returned if the request type property was removed.' },
      400: {
        description: 'Returned if the request type ID is invalid.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      401: {
        description: 'Returned if the user is not logged in.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      403: {
        description:
          "Returned if the calling user doesn't have permission to complete this request.",
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      404: {
        description: 'Returned if the request type or property do not exist.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
      500: {
        description: 'Internal Server Error.',
        content: { 'application/json': { schema: ErrorResponseSchema } },
      },
    },
    security: [{ OAuth2: ['manage:jira-project'] }],
  })

export const getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroupRoute = createRoute({
  method: 'get',
  path: '/rest/servicedeskapi/servicedesk/{serviceDeskId}/requesttypegroup',
  tags: ['Servicedesk'],
  summary: 'Get request type groups',
  description:
    "This method returns a service desk's customer request type groups. Jira Service Management administrators can arrange the customer request type groups in an arbitrary order for display on the customer portal; the groups are returned in this order.\n\n**[Permissions](#permissions) required**: Permission to view the service desk.",
  operationId: 'getRequestTypeGroups',
  request: {
    params: z.object({
      serviceDeskId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the service desk whose customer request type groups are to be returned. This can alternatively be a [project identifier.](#project-identifiers)',
            in: 'path',
            name: 'serviceDeskId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'start',
            schema: { format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details.',
            in: 'query',
            name: 'limit',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        "Returns the service desk's customer request type groups, on the specified page of the results.",
      content: {
        'application/json': {
          schema: PagedDTORequestTypeGroupDTOSchema,
          example:
            '{"_expands":[],"size":3,"start":3,"limit":3,"isLastPage":false,"_links":{"base":"https://your-domain.atlassian.net/rest/servicedeskapi","context":"context","next":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/%7BserviceDeskId%7D/requesttypegroup?start=6&limit=3","prev":"https://your-domain.atlassian.net/rest/servicedeskapi/servicedesk/%7BserviceDeskId%7D/requesttypegroup?start=0&limit=3"},"values":[{"id":"12","name":"Common Requests"},{"id":"13","name":"Logins and Accounts"},{"id":"14","name":"Servers and Infrastructure"}]}',
        },
      },
    },
    401: {
      description: 'Returned if the user is not logged in.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    403: {
      description: 'Returned if the user does not have permission to complete this request.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    404: {
      description: 'Returned if the service desk does not exist.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    500: {
      description: 'Internal Server Error.',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ OAuth2: ['read:servicedesk-request'] }],
})
