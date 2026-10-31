import { createRoute, z } from '@hono/zod-openapi'

const EntityNotExistsExceptionSchema = z.any().openapi('EntityNotExistsException')

const ProhibitedStateExceptionSchema = z.any().openapi('ProhibitedStateException')

const UnauthorizedOperationExceptionSchema = z.any().openapi('UnauthorizedOperationException')

const UnauthorizedResourceAccessExceptionSchema = z
  .any()
  .openapi('UnauthorizedResourceAccessException')

const FailedDependencyExceptionSchema = z.any().openapi('FailedDependencyException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const IdTypeSchema = z
  .string()
  .regex(/[&\w+-.@]+/)
  .min(1)
  .max(256)
  .openapi('IdType')

const UsernameTypeSchema = z
  .string()
  .regex(/[\w\-+.]+(@[a-zA-Z0-9.\-]+\.[a-zA-Z]+)?/)
  .min(1)
  .max(256)
  .openapi('UsernameType')

const EmailAddressTypeSchema = z
  .string()
  .regex(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
  .min(1)
  .max(256)
  .openapi('EmailAddressType')

const UserAttributeValueTypeSchema = z.string().min(1).max(64).openapi('UserAttributeValueType')

const ResourceIdTypeSchema = z
  .string()
  .regex(/[\w+-.@]+/)
  .min(1)
  .max(128)
  .openapi('ResourceIdType')

const UserStatusTypeSchema = z.enum(['ACTIVE', 'INACTIVE', 'PENDING']).openapi('UserStatusType')

const UserTypeSchema = z
  .enum(['USER', 'ADMIN', 'POWERUSER', 'MINIMALUSER', 'WORKSPACESUSER'])
  .openapi('UserType')

const TimestampTypeSchema = z.iso.datetime({ offset: true }).openapi('TimestampType')

const TimeZoneIdTypeSchema = z.string().min(1).max(256).openapi('TimeZoneIdType')

const LocaleTypeSchema = z
  .enum(['en', 'fr', 'ko', 'de', 'es', 'ja', 'ru', 'zh_CN', 'zh_TW', 'pt_BR', 'default'])
  .openapi('LocaleType')

const SizeTypeSchema = z.int().openapi('SizeType')

const PositiveSizeTypeSchema = z.int().min(0).openapi('PositiveSizeType')

const StorageTypeSchema = z.enum(['UNLIMITED', 'QUOTA']).openapi('StorageType')

const StorageRuleTypeSchema = z
  .object({
    StorageAllocatedInBytes: PositiveSizeTypeSchema.and(
      z.any().openapi({ description: 'The amount of storage allocated, in bytes.' }),
    ).exactOptional(),
    StorageType: StorageTypeSchema.and(
      z.any().openapi({ description: 'The type of storage.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the storage for a user.', required: [] })
  .openapi('StorageRuleType')

const UserStorageMetadataSchema = z
  .object({
    StorageUtilizedInBytes: SizeTypeSchema.and(
      z.any().openapi({ description: 'The amount of storage used, in bytes.' }),
    ).exactOptional(),
    StorageRule: StorageRuleTypeSchema.and(
      z.any().openapi({ description: 'The storage for a user.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the storage for a user.', required: [] })
  .openapi('UserStorageMetadata')

const UserSchema = z
  .object({
    Id: IdTypeSchema.and(z.any().openapi({ description: 'The ID of the user.' })).exactOptional(),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The login name of the user.' }),
    ).exactOptional(),
    EmailAddress: EmailAddressTypeSchema.and(
      z.any().openapi({ description: 'The email address of the user.' }),
    ).exactOptional(),
    GivenName: UserAttributeValueTypeSchema.and(
      z.any().openapi({ description: 'The given name of the user.' }),
    ).exactOptional(),
    Surname: UserAttributeValueTypeSchema.and(
      z.any().openapi({ description: 'The surname of the user.' }),
    ).exactOptional(),
    OrganizationId: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the organization.' }),
    ).exactOptional(),
    RootFolderId: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the root folder.' }),
    ).exactOptional(),
    RecycleBinFolderId: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the recycle bin folder.' }),
    ).exactOptional(),
    Status: UserStatusTypeSchema.and(
      z.any().openapi({ description: 'The status of the user.' }),
    ).exactOptional(),
    Type: UserTypeSchema.and(z.any().openapi({ description: 'The type of user.' })).exactOptional(),
    CreatedTimestamp: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The time when the user was created.' }),
    ).exactOptional(),
    ModifiedTimestamp: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The time when the user was modified.' }),
    ).exactOptional(),
    TimeZoneId: TimeZoneIdTypeSchema.and(
      z.any().openapi({ description: 'The time zone ID of the user.' }),
    ).exactOptional(),
    Locale: LocaleTypeSchema.and(
      z.any().openapi({ description: 'The locale of the user.' }),
    ).exactOptional(),
    Storage: UserStorageMetadataSchema.and(
      z.any().openapi({ description: 'The storage for the user.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a user.', required: [] })
  .openapi('User')

const ActivateUserResponseSchema = z
  .object({
    User: UserSchema.and(z.any().openapi({ description: 'The user information.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActivateUserResponse')

const RoleTypeSchema = z.enum(['VIEWER', 'CONTRIBUTOR', 'OWNER', 'COOWNER']).openapi('RoleType')

const ShareStatusTypeSchema = z.enum(['SUCCESS', 'FAILURE']).openapi('ShareStatusType')

const MessageTypeSchema = z.string().min(0).max(2048).openapi('MessageType')

const ShareResultSchema = z
  .object({
    PrincipalId: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the principal.' }),
    ).exactOptional(),
    InviteePrincipalId: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the invited user.' }),
    ).exactOptional(),
    Role: RoleTypeSchema.and(z.any().openapi({ description: 'The role.' })).exactOptional(),
    Status: ShareStatusTypeSchema.and(
      z.any().openapi({ description: 'The status.' }),
    ).exactOptional(),
    ShareId: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the resource that was shared.' }),
    ).exactOptional(),
    StatusMessage: MessageTypeSchema.and(
      z.any().openapi({ description: 'The status message.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the share results of a resource.', required: [] })
  .openapi('ShareResult')

const ShareResultsListSchema = z.array(ShareResultSchema).openapi('ShareResultsList')

const AddResourcePermissionsResponseSchema = z
  .object({
    ShareResults: ShareResultsListSchema.and(
      z.any().openapi({ description: 'The share results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddResourcePermissionsResponse')

const PrincipalTypeSchema = z
  .enum(['USER', 'GROUP', 'INVITE', 'ANONYMOUS', 'ORGANIZATION'])
  .openapi('PrincipalType')

const SharePrincipalSchema = z
  .object({
    Id: IdTypeSchema.and(z.any().openapi({ description: 'The ID of the recipient.' })),
    Type: PrincipalTypeSchema.and(z.any().openapi({ description: 'The type of the recipient.' })),
    Role: RoleTypeSchema.and(z.any().openapi({ description: 'The role of the recipient.' })),
  })
  .openapi({
    required: ['Id', 'Type', 'Role'],
    description: 'Describes the recipient type and ID, if available.',
  })
  .openapi('SharePrincipal')

const BooleanTypeSchema = z.boolean().openapi('BooleanType')

const CommentIdTypeSchema = z
  .string()
  .regex(/[\w+-.@]+/)
  .min(1)
  .max(128)
  .openapi('CommentIdType')

const CommentTextTypeSchema = z.string().min(1).max(2048).openapi('CommentTextType')

const CommentStatusTypeSchema = z
  .enum(['DRAFT', 'PUBLISHED', 'DELETED'])
  .openapi('CommentStatusType')

const CommentVisibilityTypeSchema = z.enum(['PUBLIC', 'PRIVATE']).openapi('CommentVisibilityType')

const CommentSchema = z
  .object({
    CommentId: CommentIdTypeSchema.and(z.any().openapi({ description: 'The ID of the comment.' })),
    ParentId: CommentIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the parent comment.' }),
    ).exactOptional(),
    ThreadId: CommentIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the root comment in the thread.' }),
    ).exactOptional(),
    Text: CommentTextTypeSchema.and(
      z.any().openapi({ description: 'The text of the comment.' }),
    ).exactOptional(),
    Contributor: UserSchema.and(
      z.any().openapi({ description: 'The details of the user who made the comment.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The time that the comment was created.' }),
    ).exactOptional(),
    Status: CommentStatusTypeSchema.and(
      z.any().openapi({ description: 'The status of the comment.' }),
    ).exactOptional(),
    Visibility: CommentVisibilityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors.',
        }),
    ).exactOptional(),
    RecipientId: IdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the comment is a reply to another user's comment, this field contains the user ID of the user being replied to.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['CommentId'], description: 'Describes a comment.' })
  .openapi('Comment')

const CreateCommentResponseSchema = z
  .object({
    Comment: CommentSchema.and(
      z.any().openapi({ description: 'The comment that has been created.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateCommentResponse')

const DocumentLockedForCommentsExceptionSchema = z
  .any()
  .openapi('DocumentLockedForCommentsException')

const InvalidCommentOperationExceptionSchema = z.any().openapi('InvalidCommentOperationException')

const CreateCustomMetadataResponseSchema = z.object({}).openapi('CreateCustomMetadataResponse')

const CustomMetadataValueTypeSchema = z
  .string()
  .regex(/[a-zA-Z0-9._+-\/=][a-zA-Z0-9 ._+-\/=]*/)
  .min(1)
  .max(256)
  .openapi('CustomMetadataValueType')

const CustomMetadataLimitExceededExceptionSchema = z
  .any()
  .openapi('CustomMetadataLimitExceededException')

const ResourceNameTypeSchema = z
  .string()
  .regex(/[\u0020-\u202D\u202F-\uFFFF]+/)
  .min(1)
  .max(255)
  .openapi('ResourceNameType')

const ResourceStateTypeSchema = z
  .enum(['ACTIVE', 'RESTORING', 'RECYCLING', 'RECYCLED'])
  .openapi('ResourceStateType')

const HashTypeSchema = z
  .string()
  .regex(/[&\w+-.@]+/)
  .min(0)
  .max(128)
  .openapi('HashType')

const SharedLabelSchema = z
  .string()
  .regex(/[a-zA-Z0-9._+-\/=][a-zA-Z0-9 ._+-\/=]*/)
  .min(1)
  .max(32)
  .openapi('SharedLabel')

const SharedLabelsSchema = z.array(SharedLabelSchema).max(20).openapi('SharedLabels')

const FolderMetadataSchema = z
  .object({
    Id: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the folder.' }),
    ).exactOptional(),
    Name: ResourceNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the folder.' }),
    ).exactOptional(),
    CreatorId: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the creator.' }),
    ).exactOptional(),
    ParentFolderId: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the parent folder.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The time when the folder was created.' }),
    ).exactOptional(),
    ModifiedTimestamp: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The time when the folder was updated.' }),
    ).exactOptional(),
    ResourceState: ResourceStateTypeSchema.and(
      z.any().openapi({ description: 'The resource state of the folder.' }),
    ).exactOptional(),
    Signature: HashTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier created from the subfolders and documents of the folder.',
        }),
    ).exactOptional(),
    Labels: SharedLabelsSchema.and(
      z.any().openapi({ description: 'List of labels on the folder.' }),
    ).exactOptional(),
    Size: SizeTypeSchema.and(
      z.any().openapi({ description: 'The size of the folder metadata.' }),
    ).exactOptional(),
    LatestVersionSize: SizeTypeSchema.and(
      z.any().openapi({ description: 'The size of the latest version of the folder metadata.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a folder.', required: [] })
  .openapi('FolderMetadata')

const CreateFolderResponseSchema = z
  .object({
    Metadata: FolderMetadataSchema.and(
      z.any().openapi({ description: 'The metadata of the folder.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFolderResponse')

const EntityAlreadyExistsExceptionSchema = z.any().openapi('EntityAlreadyExistsException')

const ConflictingOperationExceptionSchema = z.any().openapi('ConflictingOperationException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const CreateLabelsResponseSchema = z.object({}).openapi('CreateLabelsResponse')

const TooManyLabelsExceptionSchema = z.any().openapi('TooManyLabelsException')

const SubscriptionEndPointTypeSchema = z
  .string()
  .min(1)
  .max(256)
  .openapi('SubscriptionEndPointType')

const SubscriptionProtocolTypeSchema = z.enum(['HTTPS', 'SQS']).openapi('SubscriptionProtocolType')

const SubscriptionSchema = z
  .object({
    SubscriptionId: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the subscription.' }),
    ).exactOptional(),
    EndPoint: SubscriptionEndPointTypeSchema.and(
      z.any().openapi({ description: 'The endpoint of the subscription.' }),
    ).exactOptional(),
    Protocol: SubscriptionProtocolTypeSchema.and(
      z.any().openapi({ description: 'The protocol of the subscription.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a subscription.', required: [] })
  .openapi('Subscription')

const CreateNotificationSubscriptionResponseSchema = z
  .object({
    Subscription: SubscriptionSchema.and(
      z.any().openapi({ description: 'The subscription.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateNotificationSubscriptionResponse')

const TooManySubscriptionsExceptionSchema = z.any().openapi('TooManySubscriptionsException')

const InvalidArgumentExceptionSchema = z.any().openapi('InvalidArgumentException')

const CreateUserResponseSchema = z
  .object({
    User: UserSchema.and(z.any().openapi({ description: 'The user information.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateUserResponse')

const DeleteCustomMetadataResponseSchema = z.object({}).openapi('DeleteCustomMetadataResponse')

const CustomMetadataKeyTypeSchema = z
  .string()
  .regex(/[a-zA-Z0-9._+-\/=][a-zA-Z0-9 ._+-\/=]*/)
  .min(1)
  .max(56)
  .openapi('CustomMetadataKeyType')

const InvalidOperationExceptionSchema = z.any().openapi('InvalidOperationException')

const DeleteLabelsResponseSchema = z.object({}).openapi('DeleteLabelsResponse')

const ActivityTypeSchema = z
  .enum([
    'DOCUMENT_CHECKED_IN',
    'DOCUMENT_CHECKED_OUT',
    'DOCUMENT_RENAMED',
    'DOCUMENT_VERSION_UPLOADED',
    'DOCUMENT_VERSION_DELETED',
    'DOCUMENT_VERSION_VIEWED',
    'DOCUMENT_VERSION_DOWNLOADED',
    'DOCUMENT_RECYCLED',
    'DOCUMENT_RESTORED',
    'DOCUMENT_REVERTED',
    'DOCUMENT_SHARED',
    'DOCUMENT_UNSHARED',
    'DOCUMENT_SHARE_PERMISSION_CHANGED',
    'DOCUMENT_SHAREABLE_LINK_CREATED',
    'DOCUMENT_SHAREABLE_LINK_REMOVED',
    'DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED',
    'DOCUMENT_MOVED',
    'DOCUMENT_COMMENT_ADDED',
    'DOCUMENT_COMMENT_DELETED',
    'DOCUMENT_ANNOTATION_ADDED',
    'DOCUMENT_ANNOTATION_DELETED',
    'FOLDER_CREATED',
    'FOLDER_DELETED',
    'FOLDER_RENAMED',
    'FOLDER_RECYCLED',
    'FOLDER_RESTORED',
    'FOLDER_SHARED',
    'FOLDER_UNSHARED',
    'FOLDER_SHARE_PERMISSION_CHANGED',
    'FOLDER_SHAREABLE_LINK_CREATED',
    'FOLDER_SHAREABLE_LINK_REMOVED',
    'FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED',
    'FOLDER_MOVED',
  ])
  .openapi('ActivityType')

const UserMetadataSchema = z
  .object({
    Id: IdTypeSchema.and(z.any().openapi({ description: 'The ID of the user.' })).exactOptional(),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The name of the user.' }),
    ).exactOptional(),
    GivenName: UserAttributeValueTypeSchema.and(
      z.any().openapi({ description: 'The given name of the user before a rename operation.' }),
    ).exactOptional(),
    Surname: UserAttributeValueTypeSchema.and(
      z.any().openapi({ description: 'The surname of the user.' }),
    ).exactOptional(),
    EmailAddress: EmailAddressTypeSchema.and(
      z.any().openapi({ description: 'The email address of the user.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the metadata of the user.', required: [] })
  .openapi('UserMetadata')

const UserMetadataListSchema = z.array(UserMetadataSchema).openapi('UserMetadataList')

const GroupNameTypeSchema = z.string().openapi('GroupNameType')

const GroupMetadataSchema = z
  .object({
    Id: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the user group.' }),
    ).exactOptional(),
    Name: GroupNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the metadata of a user group.', required: [] })
  .openapi('GroupMetadata')

const GroupMetadataListSchema = z.array(GroupMetadataSchema).openapi('GroupMetadataList')

const ParticipantsSchema = z
  .object({
    Users: UserMetadataListSchema.and(
      z.any().openapi({ description: 'The list of users.' }),
    ).exactOptional(),
    Groups: GroupMetadataListSchema.and(
      z.any().openapi({ description: 'The list of user groups.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the users or user groups.', required: [] })
  .openapi('Participants')

const ResourceTypeSchema = z.enum(['FOLDER', 'DOCUMENT']).openapi('ResourceType')

const DocumentVersionIdTypeSchema = z
  .string()
  .regex(/[\w+-.@]+/)
  .min(1)
  .max(128)
  .openapi('DocumentVersionIdType')

const ResourceMetadataSchema = z
  .object({
    Type: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of resource.' }),
    ).exactOptional(),
    Name: ResourceNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    OriginalName: ResourceNameTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The original name of the resource before a rename operation.' }),
    ).exactOptional(),
    Id: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the resource.' }),
    ).exactOptional(),
    VersionId: DocumentVersionIdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The version ID of the resource. This is an optional field and is filled for action on document version.',
        }),
    ).exactOptional(),
    Owner: UserMetadataSchema.and(
      z.any().openapi({ description: 'The owner of the resource.' }),
    ).exactOptional(),
    ParentId: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The parent ID of the resource before a rename operation.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the metadata of a resource.', required: [] })
  .openapi('ResourceMetadata')

const CommentMetadataSchema = z
  .object({
    CommentId: CommentIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the comment.' }),
    ).exactOptional(),
    Contributor: UserSchema.and(
      z.any().openapi({ description: 'The user who made the comment.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The timestamp that the comment was created.' }),
    ).exactOptional(),
    CommentStatus: CommentStatusTypeSchema.and(
      z.any().openapi({ description: 'The status of the comment.' }),
    ).exactOptional(),
    RecipientId: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the user being replied to.' }),
    ).exactOptional(),
    ContributorId: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the user who made the comment.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the metadata of a comment.', required: [] })
  .openapi('CommentMetadata')

const ActivitySchema = z
  .object({
    Type: ActivityTypeSchema.and(
      z.any().openapi({ description: 'The activity type.' }),
    ).exactOptional(),
    TimeStamp: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The timestamp when the action was performed.' }),
    ).exactOptional(),
    IsIndirectActivity: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether an activity is indirect or direct. An indirect activity results from a direct activity performed on a parent resource. For example, sharing a parent folder (the direct activity) shares all of the subfolders and documents within the parent folder (the indirect activity).',
        }),
    ).exactOptional(),
    OrganizationId: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the organization.' }),
    ).exactOptional(),
    Initiator: UserMetadataSchema.and(
      z.any().openapi({ description: 'The user who performed the action.' }),
    ).exactOptional(),
    Participants: ParticipantsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of users or groups impacted by this action. This is an optional field and is filled for the following sharing activities: DOCUMENT_SHARED, DOCUMENT_SHARED, DOCUMENT_UNSHARED, FOLDER_SHARED, FOLDER_UNSHARED.',
        }),
    ).exactOptional(),
    ResourceMetadata: ResourceMetadataSchema.and(
      z.any().openapi({ description: 'The metadata of the resource involved in the user action.' }),
    ).exactOptional(),
    OriginalParent: ResourceMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The original parent of the resource. This is an optional field and is filled for move activities.',
        }),
    ).exactOptional(),
    CommentMetadata: CommentMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Metadata of the commenting activity. This is an optional field and is filled for commenting activities.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the activity information.', required: [] })
  .openapi('Activity')

const UserActivitiesSchema = z.array(ActivitySchema).openapi('UserActivities')

const SearchMarkerTypeSchema = z
  .string()
  .regex(/[\u0000-\u00FF]+/)
  .min(1)
  .max(12288)
  .openapi('SearchMarkerType')

const DescribeActivitiesResponseSchema = z
  .object({
    UserActivities: UserActivitiesSchema.and(
      z
        .any()
        .openapi({ description: 'The list of activities for the specified user and time period.' }),
    ).exactOptional(),
    Marker: SearchMarkerTypeSchema.and(
      z.any().openapi({ description: 'The marker for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeActivitiesResponse')

const CommentListSchema = z.array(CommentSchema).openapi('CommentList')

const MarkerTypeSchema = z
  .string()
  .regex(/[\u0000-\u00FF]+/)
  .min(1)
  .max(2048)
  .openapi('MarkerType')

const DescribeCommentsResponseSchema = z
  .object({
    Comments: CommentListSchema.and(
      z.any().openapi({ description: 'The list of comments for the specified document version.' }),
    ).exactOptional(),
    Marker: MarkerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker for the next set of results. This marker was received from a previous call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeCommentsResponse')

const DocumentContentTypeSchema = z.string().min(1).max(128).openapi('DocumentContentType')

const DocumentStatusTypeSchema = z.enum(['INITIALIZED', 'ACTIVE']).openapi('DocumentStatusType')

const UrlTypeSchema = z.string().min(1).max(1024).openapi('UrlType')

const DocumentThumbnailUrlMapSchema = z
  .record(z.string(), UrlTypeSchema)
  .openapi('DocumentThumbnailUrlMap')

const DocumentSourceUrlMapSchema = z
  .record(z.string(), UrlTypeSchema)
  .openapi('DocumentSourceUrlMap')

const DocumentVersionMetadataSchema = z
  .object({
    Id: DocumentVersionIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the version.' }),
    ).exactOptional(),
    Name: ResourceNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the version.' }),
    ).exactOptional(),
    ContentType: DocumentContentTypeSchema.and(
      z.any().openapi({ description: 'The content type of the document.' }),
    ).exactOptional(),
    Size: SizeTypeSchema.and(
      z.any().openapi({ description: 'The size of the document, in bytes.' }),
    ).exactOptional(),
    Signature: HashTypeSchema.and(
      z.any().openapi({ description: 'The signature of the document.' }),
    ).exactOptional(),
    Status: DocumentStatusTypeSchema.and(
      z.any().openapi({ description: 'The status of the document.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The timestamp when the document was first uploaded.' }),
    ).exactOptional(),
    ModifiedTimestamp: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The timestamp when the document was last uploaded.' }),
    ).exactOptional(),
    ContentCreatedTimestamp: TimestampTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp when the content of the document was originally created.',
        }),
    ).exactOptional(),
    ContentModifiedTimestamp: TimestampTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp when the content of the document was modified.' }),
    ).exactOptional(),
    CreatorId: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the creator.' }),
    ).exactOptional(),
    Thumbnail: DocumentThumbnailUrlMapSchema.and(
      z.any().openapi({ description: 'The thumbnail of the document.' }),
    ).exactOptional(),
    Source: DocumentSourceUrlMapSchema.and(
      z.any().openapi({ description: 'The source of the document.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a version of a document.', required: [] })
  .openapi('DocumentVersionMetadata')

const DocumentVersionMetadataListSchema = z
  .array(DocumentVersionMetadataSchema)
  .openapi('DocumentVersionMetadataList')

const PageMarkerTypeSchema = z.string().min(1).max(2048).openapi('PageMarkerType')

const DescribeDocumentVersionsResponseSchema = z
  .object({
    DocumentVersions: DocumentVersionMetadataListSchema.and(
      z.any().openapi({ description: 'The document versions.' }),
    ).exactOptional(),
    Marker: PageMarkerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker to use when requesting the next set of results. If there are no additional results, the string is empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDocumentVersionsResponse')

const InvalidPasswordExceptionSchema = z.any().openapi('InvalidPasswordException')

const FolderMetadataListSchema = z.array(FolderMetadataSchema).openapi('FolderMetadataList')

const DocumentMetadataSchema = z
  .object({
    Id: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the document.' }),
    ).exactOptional(),
    CreatorId: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the creator.' }),
    ).exactOptional(),
    ParentFolderId: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the parent folder.' }),
    ).exactOptional(),
    CreatedTimestamp: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The time when the document was created.' }),
    ).exactOptional(),
    ModifiedTimestamp: TimestampTypeSchema.and(
      z.any().openapi({ description: 'The time when the document was updated.' }),
    ).exactOptional(),
    LatestVersionMetadata: DocumentVersionMetadataSchema.and(
      z.any().openapi({ description: 'The latest version of the document.' }),
    ).exactOptional(),
    ResourceState: ResourceStateTypeSchema.and(
      z.any().openapi({ description: 'The resource state.' }),
    ).exactOptional(),
    Labels: SharedLabelsSchema.and(
      z.any().openapi({ description: 'List of labels on the document.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the document.', required: [] })
  .openapi('DocumentMetadata')

const DocumentMetadataListSchema = z.array(DocumentMetadataSchema).openapi('DocumentMetadataList')

const DescribeFolderContentsResponseSchema = z
  .object({
    Folders: FolderMetadataListSchema.and(
      z.any().openapi({ description: 'The subfolders in the specified folder.' }),
    ).exactOptional(),
    Documents: DocumentMetadataListSchema.and(
      z.any().openapi({ description: 'The documents in the specified folder.' }),
    ).exactOptional(),
    Marker: PageMarkerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker to use when requesting the next set of results. If there are no additional results, the string is empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFolderContentsResponse')

const DescribeGroupsResponseSchema = z
  .object({
    Groups: GroupMetadataListSchema.and(
      z.any().openapi({ description: 'The list of groups.' }),
    ).exactOptional(),
    Marker: MarkerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker to use when requesting the next set of results. If there are no additional results, the string is empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeGroupsResponse')

const SubscriptionListSchema = z.array(SubscriptionSchema).max(256).openapi('SubscriptionList')

const DescribeNotificationSubscriptionsResponseSchema = z
  .object({
    Subscriptions: SubscriptionListSchema.and(
      z.any().openapi({ description: 'The subscriptions.' }),
    ).exactOptional(),
    Marker: PageMarkerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker to use when requesting the next set of results. If there are no additional results, the string is empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeNotificationSubscriptionsResponse')

const RolePermissionTypeSchema = z.enum(['DIRECT', 'INHERITED']).openapi('RolePermissionType')

const PermissionInfoSchema = z
  .object({
    Role: RoleTypeSchema.and(
      z.any().openapi({ description: 'The role of the user.' }),
    ).exactOptional(),
    Type: RolePermissionTypeSchema.and(
      z.any().openapi({ description: 'The type of permissions.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the permissions.', required: [] })
  .openapi('PermissionInfo')

const PermissionInfoListSchema = z.array(PermissionInfoSchema).openapi('PermissionInfoList')

const PrincipalSchema = z
  .object({
    Id: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the resource.' }),
    ).exactOptional(),
    Type: PrincipalTypeSchema.and(
      z.any().openapi({ description: 'The type of resource.' }),
    ).exactOptional(),
    Roles: PermissionInfoListSchema.and(
      z.any().openapi({ description: 'The permission information for the resource.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a resource.', required: [] })
  .openapi('Principal')

const PrincipalListSchema = z.array(PrincipalSchema).openapi('PrincipalList')

const DescribeResourcePermissionsResponseSchema = z
  .object({
    Principals: PrincipalListSchema.and(
      z.any().openapi({ description: 'The principals.' }),
    ).exactOptional(),
    Marker: PageMarkerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker to use when requesting the next set of results. If there are no additional results, the string is empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeResourcePermissionsResponse')

const DescribeRootFoldersResponseSchema = z
  .object({
    Folders: FolderMetadataListSchema.and(
      z.any().openapi({ description: "The user's special folders." }),
    ).exactOptional(),
    Marker: PageMarkerTypeSchema.and(
      z.any().openapi({ description: 'The marker for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRootFoldersResponse')

const OrganizationUserListSchema = z.array(UserSchema).openapi('OrganizationUserList')

const DescribeUsersResponseSchema = z
  .object({
    Users: OrganizationUserListSchema.and(
      z.any().openapi({ description: 'The users.' }),
    ).exactOptional(),
    TotalNumberOfUsers: SizeTypeSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description: 'The total number of users included in the results.',
        }),
    ).exactOptional(),
    Marker: PageMarkerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker to use when requesting the next set of results. If there are no additional results, the string is empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeUsersResponse')

const RequestedEntityTooLargeExceptionSchema = z.any().openapi('RequestedEntityTooLargeException')

const GetCurrentUserResponseSchema = z
  .object({
    User: UserSchema.and(z.any().openapi({ description: 'Metadata of the user.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCurrentUserResponse')

const CustomMetadataMapSchema = z
  .record(z.string(), CustomMetadataValueTypeSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 8)
  .openapi('CustomMetadataMap')

const GetDocumentResponseSchema = z
  .object({
    Metadata: DocumentMetadataSchema.and(
      z.any().openapi({ description: 'The metadata details of the document.' }),
    ).exactOptional(),
    CustomMetadata: CustomMetadataMapSchema.and(
      z.any().openapi({ description: 'The custom metadata on the document.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDocumentResponse')

const ResourcePathComponentSchema = z
  .object({
    Id: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the resource path.' }),
    ).exactOptional(),
    Name: ResourceNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the resource path.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the resource path.', required: [] })
  .openapi('ResourcePathComponent')

const ResourcePathComponentListSchema = z
  .array(ResourcePathComponentSchema)
  .openapi('ResourcePathComponentList')

const ResourcePathSchema = z
  .object({
    Components: ResourcePathComponentListSchema.and(
      z.any().openapi({ description: 'The components of the resource path.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the path information of a resource.', required: [] })
  .openapi('ResourcePath')

const GetDocumentPathResponseSchema = z
  .object({
    Path: ResourcePathSchema.and(
      z.any().openapi({ description: 'The path information.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDocumentPathResponse')

const GetDocumentVersionResponseSchema = z
  .object({
    Metadata: DocumentVersionMetadataSchema.and(
      z.any().openapi({ description: 'The version metadata.' }),
    ).exactOptional(),
    CustomMetadata: CustomMetadataMapSchema.and(
      z.any().openapi({ description: 'The custom metadata on the document version.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDocumentVersionResponse')

const GetFolderResponseSchema = z
  .object({
    Metadata: FolderMetadataSchema.and(
      z.any().openapi({ description: 'The metadata of the folder.' }),
    ).exactOptional(),
    CustomMetadata: CustomMetadataMapSchema.and(
      z.any().openapi({ description: 'The custom metadata on the folder.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFolderResponse')

const GetFolderPathResponseSchema = z
  .object({
    Path: ResourcePathSchema.and(
      z.any().openapi({ description: 'The path information.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFolderPathResponse')

const GetResourcesResponseSchema = z
  .object({
    Folders: FolderMetadataListSchema.and(
      z.any().openapi({ description: 'The folders in the specified folder.' }),
    ).exactOptional(),
    Documents: DocumentMetadataListSchema.and(
      z.any().openapi({ description: 'The documents in the specified collection.' }),
    ).exactOptional(),
    Marker: PageMarkerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker to use when requesting the next set of results. If there are no additional results, the string is empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourcesResponse')

const HeaderValueTypeSchema = z.string().min(1).max(1024).openapi('HeaderValueType')

const SignedHeaderMapSchema = z.record(z.string(), HeaderValueTypeSchema).openapi('SignedHeaderMap')

const UploadMetadataSchema = z
  .object({
    UploadUrl: UrlTypeSchema.and(
      z.any().openapi({ description: 'The URL of the upload.' }),
    ).exactOptional(),
    SignedHeaders: SignedHeaderMapSchema.and(
      z.any().openapi({ description: 'The signed headers.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes the upload.', required: [] })
  .openapi('UploadMetadata')

const InitiateDocumentVersionUploadResponseSchema = z
  .object({
    Metadata: DocumentMetadataSchema.and(
      z.any().openapi({ description: 'The document metadata.' }),
    ).exactOptional(),
    UploadMetadata: UploadMetadataSchema.and(
      z.any().openapi({ description: 'The upload metadata.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InitiateDocumentVersionUploadResponse')

const StorageLimitExceededExceptionSchema = z.any().openapi('StorageLimitExceededException')

const StorageLimitWillExceedExceptionSchema = z.any().openapi('StorageLimitWillExceedException')

const DraftUploadOutOfSyncExceptionSchema = z.any().openapi('DraftUploadOutOfSyncException')

const ResourceAlreadyCheckedOutExceptionSchema = z
  .any()
  .openapi('ResourceAlreadyCheckedOutException')

const ResponseItemTypeSchema = z
  .enum(['DOCUMENT', 'FOLDER', 'COMMENT', 'DOCUMENT_VERSION'])
  .openapi('ResponseItemType')

const ResponseItemWebUrlSchema = z
  .string()
  .regex(/[\u0020-\uFFFF]+/)
  .min(1)
  .max(512)
  .openapi('ResponseItemWebUrl')

const ResponseItemSchema = z
  .object({
    ResourceType: ResponseItemTypeSchema.and(
      z.any().openapi({ description: 'The type of item being returned.' }),
    ).exactOptional(),
    WebUrl: ResponseItemWebUrlSchema.and(
      z.any().openapi({ description: 'The webUrl of the item being returned.' }),
    ).exactOptional(),
    DocumentMetadata: DocumentMetadataSchema.and(
      z.any().openapi({ description: 'The document that matches the query.' }),
    ).exactOptional(),
    FolderMetadata: FolderMetadataSchema.and(
      z.any().openapi({ description: 'The folder that matches the query.' }),
    ).exactOptional(),
    CommentMetadata: CommentMetadataSchema.and(
      z.any().openapi({ description: 'The comment that matches the query.' }),
    ).exactOptional(),
    DocumentVersionMetadata: DocumentVersionMetadataSchema.and(
      z.any().openapi({ description: 'The document version that matches the metadata.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'List of Documents, Folders, Comments, and Document Versions matching the query.',
    required: [],
  })
  .openapi('ResponseItem')

const ResponseItemsListSchema = z.array(ResponseItemSchema).max(100).openapi('ResponseItemsList')

const NextMarkerTypeSchema = z.string().regex(/[\d]+/).min(1).max(2048).openapi('NextMarkerType')

const SearchResourcesResponseSchema = z
  .object({
    Items: ResponseItemsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of Documents, Folders, Comments, and Document Versions matching the query.',
        }),
    ).exactOptional(),
    Marker: NextMarkerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The marker to use when requesting the next set of results. If there are no additional results, the string is empty.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchResourcesResponse')

const SearchQueryScopeTypeSchema = z.enum(['NAME', 'CONTENT']).openapi('SearchQueryScopeType')

const AdditionalResponseFieldTypeSchema = z.literal('WEBURL').openapi('AdditionalResponseFieldType')

const LanguageCodeTypeSchema = z
  .enum([
    'AR',
    'BG',
    'BN',
    'DA',
    'DE',
    'CS',
    'EL',
    'EN',
    'ES',
    'FA',
    'FI',
    'FR',
    'HI',
    'HU',
    'ID',
    'IT',
    'JA',
    'KO',
    'LT',
    'LV',
    'NL',
    'NO',
    'PT',
    'RO',
    'RU',
    'SV',
    'SW',
    'TH',
    'TR',
    'ZH',
    'DEFAULT',
  ])
  .openapi('LanguageCodeType')

const TextLocaleTypeListSchema = z
  .array(LanguageCodeTypeSchema)
  .max(1)
  .openapi('TextLocaleTypeList')

const ContentCategoryTypeSchema = z
  .enum([
    'IMAGE',
    'DOCUMENT',
    'PDF',
    'SPREADSHEET',
    'PRESENTATION',
    'AUDIO',
    'VIDEO',
    'SOURCE_CODE',
    'OTHER',
  ])
  .openapi('ContentCategoryType')

const SearchContentCategoryTypeListSchema = z
  .array(ContentCategoryTypeSchema)
  .max(9)
  .openapi('SearchContentCategoryTypeList')

const SearchResourceTypeSchema = z
  .enum(['FOLDER', 'DOCUMENT', 'COMMENT', 'DOCUMENT_VERSION'])
  .openapi('SearchResourceType')

const SearchResourceTypeListSchema = z
  .array(SearchResourceTypeSchema)
  .max(4)
  .openapi('SearchResourceTypeList')

const SearchLabelSchema = z.string().min(1).max(128).openapi('SearchLabel')

const SearchLabelListSchema = z.array(SearchLabelSchema).max(10).openapi('SearchLabelList')

const PrincipalRoleTypeSchema = z
  .enum(['VIEWER', 'CONTRIBUTOR', 'OWNER', 'COOWNER'])
  .openapi('PrincipalRoleType')

const SearchPrincipalRoleListSchema = z
  .array(PrincipalRoleTypeSchema)
  .max(4)
  .openapi('SearchPrincipalRoleList')

const SearchPrincipalTypeSchema = z
  .object({
    Id: IdTypeSchema.and(z.any().openapi({ description: 'UserIds or GroupIds.' })),
    Roles: SearchPrincipalRoleListSchema.and(
      z.any().openapi({ description: 'The Role of a User or Group.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Id'], description: 'Filter based on UserIds or GroupIds.' })
  .openapi('SearchPrincipalType')

const SearchPrincipalTypeListSchema = z
  .array(SearchPrincipalTypeSchema)
  .max(10)
  .openapi('SearchPrincipalTypeList')

const SearchAncestorIdSchema = z.string().min(1).max(128).openapi('SearchAncestorId')

const SearchAncestorIdListSchema = z
  .array(SearchAncestorIdSchema)
  .max(10)
  .openapi('SearchAncestorIdList')

const SearchCollectionTypeSchema = z
  .enum(['OWNED', 'SHARED_WITH_ME'])
  .openapi('SearchCollectionType')

const SearchCollectionTypeListSchema = z
  .array(SearchCollectionTypeSchema)
  .max(2)
  .openapi('SearchCollectionTypeList')

const LongTypeSchema = z.int().openapi('LongType')

const LongRangeTypeSchema = z
  .object({
    StartValue: LongTypeSchema.and(
      z.any().openapi({ description: 'The size start range (in bytes).' }),
    ).exactOptional(),
    EndValue: LongTypeSchema.and(
      z.any().openapi({ description: 'The size end range (in bytes).' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Filter based on size (in bytes).', required: [] })
  .openapi('LongRangeType')

const DateRangeTypeSchema = z
  .object({
    StartValue: TimestampTypeSchema.and(
      z.any().openapi({ description: 'Timestamp range start value (in epochs)' }),
    ).exactOptional(),
    EndValue: TimestampTypeSchema.and(
      z.any().openapi({ description: 'Timestamp range end value (in epochs).' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Filters results based on timestamp range (in epochs).', required: [] })
  .openapi('DateRangeType')

const OrderByFieldTypeSchema = z
  .enum(['RELEVANCE', 'NAME', 'SIZE', 'CREATED_TIMESTAMP', 'MODIFIED_TIMESTAMP'])
  .openapi('OrderByFieldType')

const SortOrderSchema = z.enum(['ASC', 'DESC']).openapi('SortOrder')

const SearchSortResultSchema = z
  .object({
    Field: OrderByFieldTypeSchema.and(
      z.any().openapi({ description: 'Sort search results based on this field name.' }),
    ).exactOptional(),
    Order: SortOrderSchema.and(z.any().openapi({ description: 'Sort direction.' })).exactOptional(),
  })
  .openapi({ description: 'The result of the sort operation.', required: [] })
  .openapi('SearchSortResult')

const UpdateUserResponseSchema = z
  .object({
    User: UserSchema.and(z.any().openapi({ description: 'The user information.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateUserResponse')

const IllegalUserStateExceptionSchema = z.any().openapi('IllegalUserStateException')

const DeactivatingLastSystemUserExceptionSchema = z
  .any()
  .openapi('DeactivatingLastSystemUserException')

const AuthenticationHeaderTypeSchema = z
  .string()
  .min(1)
  .max(8199)
  .openapi('AuthenticationHeaderType')

const AbortDocumentVersionUploadRequestSchema = z
  .object({})
  .openapi({ title: 'AbortDocumentVersionUploadRequest' })
  .openapi('AbortDocumentVersionUploadRequest')

const ActivateUserRequestSchema = z
  .object({})
  .openapi({ title: 'ActivateUserRequest' })
  .openapi('ActivateUserRequest')

const ActivityNamesFilterTypeSchema = z
  .string()
  .regex(/[\w,]+/)
  .min(1)
  .max(1024)
  .openapi('ActivityNamesFilterType')

const SharePrincipalListSchema = z.array(SharePrincipalSchema).openapi('SharePrincipalList')

const NotificationOptionsSchema = z
  .object({
    SendEmail: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Boolean value to indicate an email notification should be sent to the recipients.',
        }),
    ).exactOptional(),
    EmailMessage: MessageTypeSchema.and(
      z.any().openapi({ description: 'Text value to be included in the email body.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Set of options which defines notification preferences of given action.',
    required: [],
  })
  .openapi('NotificationOptions')

const AddResourcePermissionsRequestSchema = z
  .object({
    Principals: SharePrincipalListSchema.and(
      z
        .any()
        .openapi({ description: 'The users, groups, or organization being granted permission.' }),
    ),
    NotificationOptions: NotificationOptionsSchema.and(
      z.any().openapi({ description: 'The notification options.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Principals'], title: 'AddResourcePermissionsRequest' })
  .openapi('AddResourcePermissionsRequest')

const AdditionalResponseFieldsListSchema = z
  .array(AdditionalResponseFieldTypeSchema)
  .openapi('AdditionalResponseFieldsList')

const BooleanEnumTypeSchema = z.enum(['TRUE', 'FALSE']).openapi('BooleanEnumType')

const CreateCommentRequestSchema = z
  .object({
    ParentId: CommentIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the parent comment.' }),
    ).exactOptional(),
    ThreadId: CommentIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the root comment in the thread.' }),
    ).exactOptional(),
    Text: CommentTextTypeSchema.and(z.any().openapi({ description: 'The text of the comment.' })),
    Visibility: CommentVisibilityTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors.',
        }),
    ).exactOptional(),
    NotifyCollaborators: BooleanTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Set this parameter to TRUE to send an email out to the document collaborators after the comment is created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Text'], title: 'CreateCommentRequest' })
  .openapi('CreateCommentRequest')

const CreateCustomMetadataRequestSchema = z
  .object({
    CustomMetadata: CustomMetadataMapSchema.and(
      z.any().openapi({ description: 'Custom metadata in the form of name-value pairs.' }),
    ),
  })
  .openapi({ required: ['CustomMetadata'], title: 'CreateCustomMetadataRequest' })
  .openapi('CreateCustomMetadataRequest')

const CreateFolderRequestSchema = z
  .object({
    Name: ResourceNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the new folder.' }),
    ).exactOptional(),
    ParentFolderId: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the parent folder.' }),
    ),
  })
  .openapi({ required: ['ParentFolderId'], title: 'CreateFolderRequest' })
  .openapi('CreateFolderRequest')

const CreateLabelsRequestSchema = z
  .object({
    Labels: SharedLabelsSchema.and(
      z.any().openapi({ description: 'List of labels to add to the resource.' }),
    ),
  })
  .openapi({ required: ['Labels'], title: 'CreateLabelsRequest' })
  .openapi('CreateLabelsRequest')

const SubscriptionTypeSchema = z.literal('ALL').openapi('SubscriptionType')

const CreateNotificationSubscriptionRequestSchema = z
  .object({
    Endpoint: SubscriptionEndPointTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint is a URL that begins with <code>https</code>.',
        }),
    ),
    Protocol: SubscriptionProtocolTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol to use. The supported value is https, which delivers JSON-encoded messages using HTTPS POST.',
        }),
    ),
    SubscriptionType: SubscriptionTypeSchema.and(
      z.any().openapi({ description: 'The notification type.' }),
    ),
  })
  .openapi({
    required: ['Endpoint', 'Protocol', 'SubscriptionType'],
    title: 'CreateNotificationSubscriptionRequest',
  })
  .openapi('CreateNotificationSubscriptionRequest')

const PasswordTypeSchema = z
  .string()
  .regex(/[\u0020-\u00FF]+/)
  .min(4)
  .max(32)
  .openapi('PasswordType')

const CreateUserRequestSchema = z
  .object({
    OrganizationId: IdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the organization.' }),
    ).exactOptional(),
    Username: UsernameTypeSchema.and(
      z.any().openapi({ description: 'The login name of the user.' }),
    ),
    EmailAddress: EmailAddressTypeSchema.and(
      z.any().openapi({ description: 'The email address of the user.' }),
    ).exactOptional(),
    GivenName: UserAttributeValueTypeSchema.and(
      z.any().openapi({ description: 'The given name of the user.' }),
    ),
    Surname: UserAttributeValueTypeSchema.and(
      z.any().openapi({ description: 'The surname of the user.' }),
    ),
    Password: PasswordTypeSchema.and(z.any().openapi({ description: 'The password of the user.' })),
    TimeZoneId: TimeZoneIdTypeSchema.and(
      z.any().openapi({ description: 'The time zone ID of the user.' }),
    ).exactOptional(),
    StorageRule: StorageRuleTypeSchema.and(
      z.any().openapi({ description: 'The amount of storage for the user.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Username', 'GivenName', 'Surname', 'Password'],
    title: 'CreateUserRequest',
  })
  .openapi('CreateUserRequest')

const CustomMetadataKeyListSchema = z
  .array(CustomMetadataKeyTypeSchema)
  .max(8)
  .openapi('CustomMetadataKeyList')

const DeactivateUserRequestSchema = z
  .object({})
  .openapi({ title: 'DeactivateUserRequest' })
  .openapi('DeactivateUserRequest')

const DeleteCommentRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteCommentRequest' })
  .openapi('DeleteCommentRequest')

const DeleteCustomMetadataRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteCustomMetadataRequest' })
  .openapi('DeleteCustomMetadataRequest')

const DeleteDocumentRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDocumentRequest' })
  .openapi('DeleteDocumentRequest')

const DeleteDocumentVersionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDocumentVersionRequest' })
  .openapi('DeleteDocumentVersionRequest')

const DeleteFolderContentsRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFolderContentsRequest' })
  .openapi('DeleteFolderContentsRequest')

const DeleteFolderRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteFolderRequest' })
  .openapi('DeleteFolderRequest')

const DeleteLabelsRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteLabelsRequest' })
  .openapi('DeleteLabelsRequest')

const DeleteNotificationSubscriptionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteNotificationSubscriptionRequest' })
  .openapi('DeleteNotificationSubscriptionRequest')

const DeleteUserRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteUserRequest' })
  .openapi('DeleteUserRequest')

const LimitTypeSchema = z.int().min(1).max(999).openapi('LimitType')

const DescribeActivitiesRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeActivitiesRequest' })
  .openapi('DescribeActivitiesRequest')

const DescribeCommentsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeCommentsRequest' })
  .openapi('DescribeCommentsRequest')

const FieldNamesTypeSchema = z
  .string()
  .regex(/[\w,]+/)
  .min(1)
  .max(256)
  .openapi('FieldNamesType')

const DescribeDocumentVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDocumentVersionsRequest' })
  .openapi('DescribeDocumentVersionsRequest')

const ResourceSortTypeSchema = z.enum(['DATE', 'NAME']).openapi('ResourceSortType')

const OrderTypeSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('OrderType')

const FolderContentTypeSchema = z.enum(['ALL', 'DOCUMENT', 'FOLDER']).openapi('FolderContentType')

const DescribeFolderContentsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeFolderContentsRequest' })
  .openapi('DescribeFolderContentsRequest')

const SearchQueryTypeSchema = z
  .string()
  .regex(/[\u0020-\uFFFF]+/)
  .min(1)
  .max(512)
  .openapi('SearchQueryType')

const PositiveIntegerTypeSchema = z.int().min(1).openapi('PositiveIntegerType')

const DescribeGroupsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeGroupsRequest' })
  .openapi('DescribeGroupsRequest')

const DescribeNotificationSubscriptionsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeNotificationSubscriptionsRequest' })
  .openapi('DescribeNotificationSubscriptionsRequest')

const DescribeResourcePermissionsRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeResourcePermissionsRequest' })
  .openapi('DescribeResourcePermissionsRequest')

const DescribeRootFoldersRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeRootFoldersRequest' })
  .openapi('DescribeRootFoldersRequest')

const UserIdsTypeSchema = z
  .string()
  .regex(/[&\w+-.@, ]+/)
  .min(1)
  .max(2000)
  .openapi('UserIdsType')

const UserFilterTypeSchema = z.enum(['ALL', 'ACTIVE_PENDING']).openapi('UserFilterType')

const UserSortTypeSchema = z
  .enum(['USER_NAME', 'FULL_NAME', 'STORAGE_LIMIT', 'USER_STATUS', 'STORAGE_USED'])
  .openapi('UserSortType')

const DescribeUsersRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeUsersRequest' })
  .openapi('DescribeUsersRequest')

const DocumentSourceTypeSchema = z.enum(['ORIGINAL', 'WITH_COMMENTS']).openapi('DocumentSourceType')

const DocumentThumbnailTypeSchema = z
  .enum(['SMALL', 'SMALL_HQ', 'LARGE'])
  .openapi('DocumentThumbnailType')

const DocumentVersionStatusSchema = z.literal('ACTIVE').openapi('DocumentVersionStatus')

const FiltersSchema = z
  .object({
    TextLocales: TextLocaleTypeListSchema.and(
      z.any().openapi({ description: 'Filters by the locale of the content or comment.' }),
    ).exactOptional(),
    ContentCategories: SearchContentCategoryTypeListSchema.and(
      z.any().openapi({ description: 'Filters by content category.' }),
    ).exactOptional(),
    ResourceTypes: SearchResourceTypeListSchema.and(
      z.any().openapi({ description: 'Filters based on entity type.' }),
    ).exactOptional(),
    Labels: SearchLabelListSchema.and(
      z.any().openapi({ description: 'Filter by labels using exact match.' }),
    ).exactOptional(),
    Principals: SearchPrincipalTypeListSchema.and(
      z.any().openapi({ description: 'Filter based on UserIds or GroupIds.' }),
    ).exactOptional(),
    AncestorIds: SearchAncestorIdListSchema.and(
      z.any().openapi({ description: 'Filter based on resource’s path.' }),
    ).exactOptional(),
    SearchCollectionTypes: SearchCollectionTypeListSchema.and(
      z.any().openapi({ description: 'Filter based on file groupings.' }),
    ).exactOptional(),
    SizeRange: LongRangeTypeSchema.and(
      z.any().openapi({ description: 'Filter based on size (in bytes).' }),
    ).exactOptional(),
    CreatedRange: DateRangeTypeSchema.and(
      z.any().openapi({ description: 'Filter based on resource’s creation timestamp.' }),
    ).exactOptional(),
    ModifiedRange: DateRangeTypeSchema.and(
      z.any().openapi({ description: 'Filter based on resource’s modified timestamp.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Filters results based on entity metadata.', required: [] })
  .openapi('Filters')

const GetCurrentUserRequestSchema = z
  .object({})
  .openapi({ title: 'GetCurrentUserRequest' })
  .openapi('GetCurrentUserRequest')

const GetDocumentPathRequestSchema = z
  .object({})
  .openapi({ title: 'GetDocumentPathRequest' })
  .openapi('GetDocumentPathRequest')

const GetDocumentRequestSchema = z
  .object({})
  .openapi({ title: 'GetDocumentRequest' })
  .openapi('GetDocumentRequest')

const GetDocumentVersionRequestSchema = z
  .object({})
  .openapi({ title: 'GetDocumentVersionRequest' })
  .openapi('GetDocumentVersionRequest')

const GetFolderPathRequestSchema = z
  .object({})
  .openapi({ title: 'GetFolderPathRequest' })
  .openapi('GetFolderPathRequest')

const GetFolderRequestSchema = z
  .object({})
  .openapi({ title: 'GetFolderRequest' })
  .openapi('GetFolderRequest')

const ResourceCollectionTypeSchema = z.literal('SHARED_WITH_ME').openapi('ResourceCollectionType')

const GetResourcesRequestSchema = z
  .object({})
  .openapi({ title: 'GetResourcesRequest' })
  .openapi('GetResourcesRequest')

const HeaderNameTypeSchema = z
  .string()
  .regex(/[\w-]+/)
  .min(1)
  .max(256)
  .openapi('HeaderNameType')

const InitiateDocumentVersionUploadRequestSchema = z
  .object({
    Id: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the document.' }),
    ).exactOptional(),
    Name: ResourceNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the document.' }),
    ).exactOptional(),
    ContentCreatedTimestamp: TimestampTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp when the content of the document was originally created.',
        }),
    ).exactOptional(),
    ContentModifiedTimestamp: TimestampTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp when the content of the document was modified.' }),
    ).exactOptional(),
    ContentType: DocumentContentTypeSchema.and(
      z.any().openapi({ description: 'The content type of the document.' }),
    ).exactOptional(),
    DocumentSizeInBytes: SizeTypeSchema.and(
      z.any().openapi({ description: 'The size of the document, in bytes.' }),
    ).exactOptional(),
    ParentFolderId: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the parent folder.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'InitiateDocumentVersionUploadRequest', required: [] })
  .openapi('InitiateDocumentVersionUploadRequest')

const RemoveAllResourcePermissionsRequestSchema = z
  .object({})
  .openapi({ title: 'RemoveAllResourcePermissionsRequest' })
  .openapi('RemoveAllResourcePermissionsRequest')

const RemoveResourcePermissionRequestSchema = z
  .object({})
  .openapi({ title: 'RemoveResourcePermissionRequest' })
  .openapi('RemoveResourcePermissionRequest')

const RestoreDocumentVersionsRequestSchema = z
  .object({})
  .openapi({ title: 'RestoreDocumentVersionsRequest' })
  .openapi('RestoreDocumentVersionsRequest')

const SearchQueryScopeTypeListSchema = z
  .array(SearchQueryScopeTypeSchema)
  .max(2)
  .openapi('SearchQueryScopeTypeList')

const SearchResultSortListSchema = z
  .array(SearchSortResultSchema)
  .max(1)
  .openapi('SearchResultSortList')

const SearchResultsLimitTypeSchema = z.int().min(1).max(100).openapi('SearchResultsLimitType')

const SearchResourcesRequestSchema = z
  .object({
    QueryText: SearchQueryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The String to search for. Searches across different text fields based on request parameters. Use double quotes around the query string for exact phrase matches.',
        }),
    ).exactOptional(),
    QueryScopes: SearchQueryScopeTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filter based on the text field type. A Folder has only a name and no content. A Comment has only content and no name. A Document or Document Version has a name and content',
        }),
    ).exactOptional(),
    OrganizationId: IdTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters based on the resource owner OrgId. This is a mandatory parameter when using Admin SigV4 credentials.',
        }),
    ).exactOptional(),
    AdditionalResponseFields: AdditionalResponseFieldsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of attributes to include in the response. Used to request fields that are not normally returned in a standard response.',
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z.any().openapi({ description: 'Filters results based on entity metadata.' }),
    ).exactOptional(),
    OrderBy: SearchResultSortListSchema.and(
      z.any().openapi({ description: 'Order by results in one or more categories.' }),
    ).exactOptional(),
    Limit: SearchResultsLimitTypeSchema.and(
      z.any().openapi({ description: 'Max results count per page.' }),
    ).exactOptional(),
    Marker: NextMarkerTypeSchema.and(
      z.any().openapi({ description: 'The marker for the next set of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'SearchResourcesRequest', required: [] })
  .openapi('SearchResourcesRequest')

const UpdateDocumentRequestSchema = z
  .object({
    Name: ResourceNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the document.' }),
    ).exactOptional(),
    ParentFolderId: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the parent folder.' }),
    ).exactOptional(),
    ResourceState: ResourceStateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource state of the document. Only ACTIVE and RECYCLED are supported.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDocumentRequest', required: [] })
  .openapi('UpdateDocumentRequest')

const UpdateDocumentVersionRequestSchema = z
  .object({
    VersionStatus: DocumentVersionStatusSchema.and(
      z.any().openapi({ description: 'The status of the version.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDocumentVersionRequest', required: [] })
  .openapi('UpdateDocumentVersionRequest')

const UpdateFolderRequestSchema = z
  .object({
    Name: ResourceNameTypeSchema.and(
      z.any().openapi({ description: 'The name of the folder.' }),
    ).exactOptional(),
    ParentFolderId: ResourceIdTypeSchema.and(
      z.any().openapi({ description: 'The ID of the parent folder.' }),
    ).exactOptional(),
    ResourceState: ResourceStateTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from the API.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateFolderRequest', required: [] })
  .openapi('UpdateFolderRequest')

const UpdateUserRequestSchema = z
  .object({
    GivenName: UserAttributeValueTypeSchema.and(
      z.any().openapi({ description: 'The given name of the user.' }),
    ).exactOptional(),
    Surname: UserAttributeValueTypeSchema.and(
      z.any().openapi({ description: 'The surname of the user.' }),
    ).exactOptional(),
    Type: UserTypeSchema.and(
      z.any().openapi({ description: 'The type of the user.' }),
    ).exactOptional(),
    StorageRule: StorageRuleTypeSchema.and(
      z.any().openapi({ description: 'The amount of storage for the user.' }),
    ).exactOptional(),
    TimeZoneId: TimeZoneIdTypeSchema.and(
      z.any().openapi({ description: 'The time zone ID of the user.' }),
    ).exactOptional(),
    Locale: LocaleTypeSchema.and(
      z.any().openapi({ description: 'The locale of the user.' }),
    ).exactOptional(),
    GrantPoweruserPrivileges: BooleanEnumTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Boolean value to determine whether the user is granted Power user privileges.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateUserRequest', required: [] })
  .openapi('UpdateUserRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getApiV1DocumentsDocumentIdVersionsVersionIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/documents/{DocumentId}/versions/{VersionId}',
  description: 'Retrieves version metadata for the specified document.',
  operationId: 'GetDocumentVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      DocumentId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'DocumentId',
            in: 'path',
            required: true,
            description: 'The ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
      VersionId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'VersionId',
            in: 'path',
            required: true,
            description: 'The version ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .regex(/[\w,]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            required: false,
            description:
              'A comma-separated list of values. Specify "SOURCE" to include a URL for the source document.',
            schema: { type: 'string', pattern: '[\\w,]+', minLength: 1, maxLength: 256 },
          },
        }),
      includeCustomMetadata: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeCustomMetadata',
            in: 'query',
            required: false,
            description: 'Set this to TRUE to include custom metadata in the response.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDocumentVersionResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    486: {
      description: 'InvalidPasswordException',
      content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
    },
  },
})

export const deleteApiV1DocumentsDocumentIdVersionsVersionIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/documents/{DocumentId}/versions/{VersionId}',
  description:
    'Aborts the upload of the specified document version that was previously initiated by <a>InitiateDocumentVersionUpload</a>. The client should make this call only when it no longer intends to upload the document version, or fails to do so.',
  operationId: 'AbortDocumentVersionUpload',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      DocumentId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'DocumentId',
            in: 'path',
            required: true,
            description: 'The ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
      VersionId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'VersionId',
            in: 'path',
            required: true,
            description: 'The ID of the version.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    484: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const patchApiV1DocumentsDocumentIdVersionsVersionIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/documents/{DocumentId}/versions/{VersionId}',
  description:
    '<p>Changes the status of the document version to ACTIVE. </p> <p>Amazon WorkDocs also sets its document container to ACTIVE. This is the last step in a document upload, after the client uploads the document to an S3-presigned URL returned by <a>InitiateDocumentVersionUpload</a>. </p>',
  operationId: 'UpdateDocumentVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      DocumentId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'DocumentId',
            in: 'path',
            required: true,
            description: 'The ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
      VersionId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'VersionId',
            in: 'path',
            required: true,
            description: 'The version ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              VersionStatus: z
                .literal('ACTIVE')
                .exactOptional()
                .openapi({ description: 'The status of the version.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    486: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    487: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postApiV1UsersUserIdActivationRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{UserId}/activation',
  description: 'Activates the specified user. Only active users can access Amazon WorkDocs.',
  operationId: 'ActivateUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      UserId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'UserId',
            in: 'path',
            required: true,
            description: 'The ID of the user.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActivateUserResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteApiV1UsersUserIdActivationRoute = createRoute({
  method: 'delete',
  path: '/api/v1/users/{UserId}/activation',
  description:
    "Deactivates the specified user, which revokes the user's access to Amazon WorkDocs.",
  operationId: 'DeactivateUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      UserId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'UserId',
            in: 'path',
            required: true,
            description: 'The ID of the user.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getApiV1ResourcesResourceIdPermissionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/resources/{ResourceId}/permissions',
  description: 'Describes the permissions of a specified resource.',
  operationId: 'DescribeResourcePermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      ResourceId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description: 'The ID of the resource.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      principalId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'principalId',
            in: 'query',
            required: false,
            description: 'The ID of the principal to filter permissions by.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
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
          z.int().min(1).max(999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of items to return with this call.',
            schema: { type: 'integer', minimum: 1, maximum: 999 },
          },
        }),
      marker: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call)',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeResourcePermissionsResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postApiV1ResourcesResourceIdPermissionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/resources/{ResourceId}/permissions',
  description:
    'Creates a set of permissions for the specified folder or document. The resource permissions are overwritten if the principals already have different permissions.',
  operationId: 'AddResourcePermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      ResourceId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description: 'The ID of the resource.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Principals: z
                .array(SharePrincipalSchema)
                .openapi({
                  description: 'The users, groups, or organization being granted permission.',
                }),
              NotificationOptions: z
                .object({
                  SendEmail: BooleanTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Boolean value to indicate an email notification should be sent to the recipients.',
                      }),
                  ).exactOptional(),
                  EmailMessage: MessageTypeSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Text value to be included in the email body.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Set of options which defines notification preferences of given action.',
                  required: [],
                }),
            })
            .openapi({ required: ['Principals'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: AddResourcePermissionsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    482: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
  },
})

export const deleteApiV1ResourcesResourceIdPermissionsRoute = createRoute({
  method: 'delete',
  path: '/api/v1/resources/{ResourceId}/permissions',
  description: 'Removes all the permissions from the specified resource.',
  operationId: 'RemoveAllResourcePermissions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      ResourceId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description: 'The ID of the resource.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    482: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postApiV1DocumentsDocumentIdVersionsVersionIdCommentRoute = createRoute({
  method: 'post',
  path: '/api/v1/documents/{DocumentId}/versions/{VersionId}/comment',
  description: 'Adds a new comment to the specified document version.',
  operationId: 'CreateComment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      DocumentId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'DocumentId',
            in: 'path',
            required: true,
            description: 'The ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
      VersionId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'VersionId',
            in: 'path',
            required: true,
            description: 'The ID of the document version.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ParentId: z
                .string()
                .regex(/[\w+-.@]+/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'The ID of the parent comment.' }),
              ThreadId: z
                .string()
                .regex(/[\w+-.@]+/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'The ID of the root comment in the thread.' }),
              Text: z
                .string()
                .min(1)
                .max(2048)
                .openapi({ description: 'The text of the comment.' }),
              Visibility: z
                .enum(['PUBLIC', 'PRIVATE'])
                .exactOptional()
                .openapi({
                  description:
                    'The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors.',
                }),
              NotifyCollaborators: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set this parameter to TRUE to send an email out to the document collaborators after the comment is created.',
                }),
            })
            .openapi({ required: ['Text'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCommentResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    484: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'DocumentLockedForCommentsException',
      content: { 'application/json': { schema: DocumentLockedForCommentsExceptionSchema } },
    },
    487: {
      description: 'InvalidCommentOperationException',
      content: { 'application/json': { schema: InvalidCommentOperationExceptionSchema } },
    },
  },
})

export const putApiV1ResourcesResourceIdCustomMetadataRoute = createRoute({
  method: 'put',
  path: '/api/v1/resources/{ResourceId}/customMetadata',
  description:
    'Adds one or more custom properties to the specified resource (a folder, document, or version).',
  operationId: 'CreateCustomMetadata',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      ResourceId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description: 'The ID of the resource.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      versionid: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'versionid',
            in: 'query',
            required: false,
            description:
              'The ID of the version, if the custom metadata is being added to a document version.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              CustomMetadata: z
                .record(z.string(), CustomMetadataValueTypeSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 8)
                .openapi({ description: 'Custom metadata in the form of name-value pairs.' }),
            })
            .openapi({ required: ['CustomMetadata'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateCustomMetadataResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    484: {
      description: 'CustomMetadataLimitExceededException',
      content: { 'application/json': { schema: CustomMetadataLimitExceededExceptionSchema } },
    },
    485: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteApiV1ResourcesResourceIdCustomMetadataRoute = createRoute({
  method: 'delete',
  path: '/api/v1/resources/{ResourceId}/customMetadata',
  description: 'Deletes custom metadata from the specified resource.',
  operationId: 'DeleteCustomMetadata',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      ResourceId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description: 'The ID of the resource, either a document or folder.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      versionId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'versionId',
            in: 'query',
            required: false,
            description:
              'The ID of the version, if the custom metadata is being deleted from a document version.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
      keys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(CustomMetadataKeyTypeSchema).max(8),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'keys',
            in: 'query',
            required: false,
            description: 'List of properties to remove.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/CustomMetadataKeyType' },
              maxItems: 8,
            },
          },
        }),
      deleteAll: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'deleteAll',
            in: 'query',
            required: false,
            description:
              'Flag to indicate removal of all custom metadata properties from the specified resource.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteCustomMetadataResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    484: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postApiV1FoldersRoute = createRoute({
  method: 'post',
  path: '/api/v1/folders',
  description: 'Creates a folder with the specified name and parent folder.',
  operationId: 'CreateFolder',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/[\u0020-\u202D\u202F-\uFFFF]+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the new folder.' }),
              ParentFolderId: z
                .string()
                .regex(/[\w+-.@]+/)
                .min(1)
                .max(128)
                .openapi({ description: 'The ID of the parent folder.' }),
            })
            .openapi({ required: ['ParentFolderId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFolderResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'EntityAlreadyExistsException',
      content: { 'application/json': { schema: EntityAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    483: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    487: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    488: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    489: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const putApiV1ResourcesResourceIdLabelsRoute = createRoute({
  method: 'put',
  path: '/api/v1/resources/{ResourceId}/labels',
  description: 'Adds the specified list of labels to the given resource (a document or folder)',
  operationId: 'CreateLabels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      ResourceId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description: 'The ID of the resource.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Labels: z
                .array(SharedLabelSchema)
                .max(20)
                .openapi({ description: 'List of labels to add to the resource.' }),
            })
            .openapi({ required: ['Labels'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLabelsResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'TooManyLabelsException',
      content: { 'application/json': { schema: TooManyLabelsExceptionSchema } },
    },
  },
})

export const deleteApiV1ResourcesResourceIdLabelsRoute = createRoute({
  method: 'delete',
  path: '/api/v1/resources/{ResourceId}/labels',
  description: 'Deletes the specified list of labels from a resource.',
  operationId: 'DeleteLabels',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      ResourceId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description: 'The ID of the resource.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      labels: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SharedLabelSchema).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'labels',
            in: 'query',
            required: false,
            description: 'List of labels to delete from the resource.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/SharedLabel' },
              maxItems: 20,
            },
          },
        }),
      deleteAll: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'deleteAll',
            in: 'query',
            required: false,
            description: 'Flag to request removal of all labels from the specified resource.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteLabelsResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
  },
})

export const getApiV1OrganizationsOrganizationIdSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/organizations/{OrganizationId}/subscriptions',
  description: 'Lists the specified notification subscriptions.',
  operationId: 'DescribeNotificationSubscriptions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      OrganizationId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'OrganizationId',
            in: 'path',
            required: true,
            description: 'The ID of the organization.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      marker: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
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
          z.int().min(1).max(999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of items to return with this call.',
            schema: { type: 'integer', minimum: 1, maximum: 999 },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeNotificationSubscriptionsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    481: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postApiV1OrganizationsOrganizationIdSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/organizations/{OrganizationId}/subscriptions',
  description:
    '<p>Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a confirmation message, and must confirm the subscription.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/manage-notifications.html">Setting up notifications for an IAM user or role</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>',
  operationId: 'CreateNotificationSubscription',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      OrganizationId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'OrganizationId',
            in: 'path',
            required: true,
            description: 'The ID of the organization.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Endpoint: z
                .string()
                .min(1)
                .max(256)
                .openapi({
                  description:
                    'The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint is a URL that begins with <code>https</code>.',
                }),
              Protocol: z
                .enum(['HTTPS', 'SQS'])
                .openapi({
                  description:
                    'The protocol to use. The supported value is https, which delivers JSON-encoded messages using HTTPS POST.',
                }),
              SubscriptionType: z.literal('ALL').openapi({ description: 'The notification type.' }),
            })
            .openapi({ required: ['Endpoint', 'Protocol', 'SubscriptionType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateNotificationSubscriptionResponseSchema } },
    },
    480: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    481: {
      description: 'TooManySubscriptionsException',
      content: { 'application/json': { schema: TooManySubscriptionsExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const getApiV1UsersRoute = createRoute({
  method: 'get',
  path: '/api/v1/users',
  description:
    '<p>Describes the specified users. You can describe all users or filter the results (for example, by status or organization).</p> <p>By default, Amazon WorkDocs returns the first 24 active or pending users. If there are more results, the response includes a marker that you can use to request the next set of results.</p>',
  operationId: 'DescribeUsers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    query: z.object({
      organizationId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'organizationId',
            in: 'query',
            required: false,
            description: 'The ID of the organization.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
      userIds: z
        .string()
        .regex(/[&\w+-.@, ]+/)
        .min(1)
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'userIds',
            in: 'query',
            required: false,
            description: 'The IDs of the users.',
            schema: { type: 'string', pattern: '[&\\w+-.@, ]+', minLength: 1, maxLength: 2000 },
          },
        }),
      query: z
        .string()
        .regex(/[\u0020-\uFFFF]+/)
        .min(1)
        .max(512)
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            required: false,
            description:
              '<p>A query to filter users by user name. Remember the following about the <code>Userids</code> and <code>Query</code> parameters:</p> <ul> <li> <p>If you don\'t use either parameter, the API returns a paginated list of all users on the site.</p> </li> <li> <p>If you use both parameters, the API ignores the <code>Query</code> parameter.</p> </li> <li> <p>The <code>Userid</code> parameter only returns user names that match a corresponding user ID.</p> </li> <li> <p>The <code>Query</code> parameter runs a "prefix" search for users by the <code>GivenName</code>, <code>SurName</code>, or <code>UserName</code> fields included in a <a href="https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateUser.html">CreateUser</a> API call. For example, querying on <code>Ma</code> returns Márcia Oliveira, María García, and Mateo Jackson. If you use multiple characters, the API only returns data that matches all characters. For example, querying on <code>Ma J</code> only returns Mateo Jackson.</p> </li> </ul>',
            schema: {
              type: 'string',
              pattern: '[\\u0020-\\uFFFF]+',
              minLength: 1,
              maxLength: 512,
              format: 'password',
            },
          },
        }),
      include: z
        .enum(['ALL', 'ACTIVE_PENDING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'include',
            in: 'query',
            required: false,
            description: 'The state of the users. Specify "ALL" to include inactive users.',
            schema: { type: 'string', enum: ['ALL', 'ACTIVE_PENDING'] },
          },
        }),
      order: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            required: false,
            description: 'The order for the results.',
            schema: { type: 'string', enum: ['ASCENDING', 'DESCENDING'] },
          },
        }),
      sort: z
        .enum(['USER_NAME', 'FULL_NAME', 'STORAGE_LIMIT', 'USER_STATUS', 'STORAGE_USED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            required: false,
            description: 'The sorting criteria.',
            schema: {
              type: 'string',
              enum: ['USER_NAME', 'FULL_NAME', 'STORAGE_LIMIT', 'USER_STATUS', 'STORAGE_USED'],
            },
          },
        }),
      marker: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
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
          z.int().min(1).max(999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of items to return.',
            schema: { type: 'integer', minimum: 1, maximum: 999 },
          },
        }),
      fields: z
        .string()
        .regex(/[\w,]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            required: false,
            description:
              'A comma-separated list of values. Specify "STORAGE_METADATA" to include the user storage quota and utilization information.',
            schema: { type: 'string', pattern: '[\\w,]+', minLength: 1, maxLength: 256 },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeUsersResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    486: {
      description: 'RequestedEntityTooLargeException',
      content: { 'application/json': { schema: RequestedEntityTooLargeExceptionSchema } },
    },
  },
})

export const postApiV1UsersRoute = createRoute({
  method: 'post',
  path: '/api/v1/users',
  description:
    'Creates a user in a Simple AD or Microsoft AD directory. The status of a newly created user is "ACTIVE". New users can access Amazon WorkDocs.',
  operationId: 'CreateUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              OrganizationId: z
                .string()
                .regex(/[&\w+-.@]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The ID of the organization.' }),
              Username: z
                .string()
                .regex(/[\w\-+.]+(@[a-zA-Z0-9.\-]+\.[a-zA-Z]+)?/)
                .min(1)
                .max(256)
                .openapi({ description: 'The login name of the user.' }),
              EmailAddress: z
                .string()
                .regex(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The email address of the user.' }),
              GivenName: z
                .string()
                .min(1)
                .max(64)
                .openapi({ description: 'The given name of the user.' }),
              Surname: z
                .string()
                .min(1)
                .max(64)
                .openapi({ description: 'The surname of the user.' }),
              Password: z
                .string()
                .regex(/[\u0020-\u00FF]+/)
                .min(4)
                .max(32)
                .openapi({ description: 'The password of the user.' }),
              TimeZoneId: z
                .string()
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The time zone ID of the user.' }),
              StorageRule: z
                .object({
                  StorageAllocatedInBytes: PositiveSizeTypeSchema.and(
                    z.any().openapi({ description: 'The amount of storage allocated, in bytes.' }),
                  ).exactOptional(),
                  StorageType: StorageTypeSchema.and(
                    z.any().openapi({ description: 'The type of storage.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Describes the storage for a user.', required: [] }),
            })
            .openapi({ required: ['Username', 'GivenName', 'Surname', 'Password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserResponseSchema } },
    },
    480: {
      description: 'EntityAlreadyExistsException',
      content: { 'application/json': { schema: EntityAlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteApiV1DocumentsDocumentIdVersionsVersionIdCommentCommentIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}',
  description: 'Deletes the specified comment from the document version.',
  operationId: 'DeleteComment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      DocumentId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'DocumentId',
            in: 'path',
            required: true,
            description: 'The ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
      VersionId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'VersionId',
            in: 'path',
            required: true,
            description: 'The ID of the document version.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
      CommentId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'CommentId',
            in: 'path',
            required: true,
            description: 'The ID of the comment.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    484: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'DocumentLockedForCommentsException',
      content: { 'application/json': { schema: DocumentLockedForCommentsExceptionSchema } },
    },
  },
})

export const getApiV1DocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/documents/{DocumentId}',
  description: 'Retrieves details of a document.',
  operationId: 'GetDocument',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      DocumentId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'DocumentId',
            in: 'path',
            required: true,
            description: 'The ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      includeCustomMetadata: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeCustomMetadata',
            in: 'query',
            required: false,
            description:
              'Set this to <code>TRUE</code> to include custom metadata in the response.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDocumentResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InvalidPasswordException',
      content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
    },
  },
})

export const deleteApiV1DocumentsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/documents/{DocumentId}',
  description: 'Permanently deletes the specified document and its associated metadata.',
  operationId: 'DeleteDocument',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      DocumentId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'DocumentId',
            in: 'path',
            required: true,
            description: 'The ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    483: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    486: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    487: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    488: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const patchApiV1DocumentsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/documents/{DocumentId}',
  description:
    'Updates the specified attributes of a document. The user must have access to both the document and its parent folder, if applicable.',
  operationId: 'UpdateDocument',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      DocumentId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'DocumentId',
            in: 'path',
            required: true,
            description: 'The ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/[\u0020-\u202D\u202F-\uFFFF]+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the document.' }),
              ParentFolderId: z
                .string()
                .regex(/[\w+-.@]+/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'The ID of the parent folder.' }),
              ResourceState: z
                .enum(['ACTIVE', 'RESTORING', 'RECYCLING', 'RECYCLED'])
                .exactOptional()
                .openapi({
                  description:
                    'The resource state of the document. Only ACTIVE and RECYCLED are supported.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'EntityAlreadyExistsException',
      content: { 'application/json': { schema: EntityAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    484: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    485: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    486: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    487: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    488: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    489: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteApiV1DocumentVersionsDocumentIdVersionsVersionIdDeletePriorVersionsRoute =
  createRoute({
    method: 'delete',
    path: '/api/v1/documentVersions/{DocumentId}/versions/{VersionId}#deletePriorVersions',
    description: 'Deletes a specific version of a document.',
    operationId: 'DeleteDocumentVersion',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        Authentication: z
          .string()
          .min(1)
          .max(8199)
          .exactOptional()
          .openapi({
            param: {
              name: 'Authentication',
              in: 'header',
              required: false,
              description:
                'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
              schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
            },
          }),
      }),
      params: z.object({
        DocumentId: z
          .string()
          .regex(/[\w+-.@]+/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'DocumentId',
              in: 'path',
              required: true,
              description: 'The ID of the document associated with the version being deleted.',
              schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
            },
          }),
        VersionId: z
          .string()
          .regex(/[\w+-.@]+/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'VersionId',
              in: 'path',
              required: true,
              description: 'The ID of the version being deleted.',
              schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
            },
          }),
      }),
      query: z.object({
        deletePriorVersions: z
          .stringbool()
          .openapi({
            param: {
              name: 'deletePriorVersions',
              in: 'query',
              required: true,
              description: 'Deletes all versions of a document prior to the current version.',
              schema: { type: 'boolean' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'EntityNotExistsException',
        content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
      },
      481: {
        description: 'ProhibitedStateException',
        content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
      },
      482: {
        description: 'ConflictingOperationException',
        content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
      },
      483: {
        description: 'ConcurrentModificationException',
        content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
      },
      484: {
        description: 'UnauthorizedResourceAccessException',
        content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
      },
      485: {
        description: 'FailedDependencyException',
        content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
      },
      486: {
        description: 'InvalidOperationException',
        content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
      },
      487: {
        description: 'UnauthorizedOperationException',
        content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
      },
    },
  })

export const getApiV1FoldersFolderIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/folders/{FolderId}',
  description: 'Retrieves the metadata of the specified folder.',
  operationId: 'GetFolder',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      FolderId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'FolderId',
            in: 'path',
            required: true,
            description: 'The ID of the folder.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      includeCustomMetadata: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeCustomMetadata',
            in: 'query',
            required: false,
            description: 'Set to TRUE to include custom metadata in the response.',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFolderResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
  },
})

export const deleteApiV1FoldersFolderIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/folders/{FolderId}',
  description: 'Permanently deletes the specified folder and its contents.',
  operationId: 'DeleteFolder',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      FolderId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'FolderId',
            in: 'path',
            required: true,
            description: 'The ID of the folder.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    483: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    486: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    487: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    488: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const patchApiV1FoldersFolderIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/folders/{FolderId}',
  description:
    'Updates the specified attributes of the specified folder. The user must have access to both the folder and its parent folder, if applicable.',
  operationId: 'UpdateFolder',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      FolderId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'FolderId',
            in: 'path',
            required: true,
            description: 'The ID of the folder.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/[\u0020-\u202D\u202F-\uFFFF]+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the folder.' }),
              ParentFolderId: z
                .string()
                .regex(/[\w+-.@]+/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'The ID of the parent folder.' }),
              ResourceState: z
                .enum(['ACTIVE', 'RESTORING', 'RECYCLING', 'RECYCLED'])
                .exactOptional()
                .openapi({
                  description:
                    'The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from the API.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'EntityAlreadyExistsException',
      content: { 'application/json': { schema: EntityAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    483: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    484: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    487: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    488: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    489: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getApiV1FoldersFolderIdContentsRoute = createRoute({
  method: 'get',
  path: '/api/v1/folders/{FolderId}/contents',
  description:
    '<p>Describes the contents of the specified folder, including its documents and subfolders.</p> <p>By default, Amazon WorkDocs returns the first 100 active document and folder metadata items. If there are more results, the response includes a marker that you can use to request the next set of results. You can also request initialized documents.</p>',
  operationId: 'DescribeFolderContents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      FolderId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'FolderId',
            in: 'path',
            required: true,
            description: 'The ID of the folder.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      sort: z
        .enum(['DATE', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            required: false,
            description: 'The sorting criteria.',
            schema: { type: 'string', enum: ['DATE', 'NAME'] },
          },
        }),
      order: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            name: 'order',
            in: 'query',
            required: false,
            description: 'The order for the contents of the folder.',
            schema: { type: 'string', enum: ['ASCENDING', 'DESCENDING'] },
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
          z.int().min(1).max(999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of items to return with this call.',
            schema: { type: 'integer', minimum: 1, maximum: 999 },
          },
        }),
      marker: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. This marker was received from a previous call.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
      type: z
        .enum(['ALL', 'DOCUMENT', 'FOLDER'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description: 'The type of items.',
            schema: { type: 'string', enum: ['ALL', 'DOCUMENT', 'FOLDER'] },
          },
        }),
      include: z
        .string()
        .regex(/[\w,]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'include',
            in: 'query',
            required: false,
            description:
              'The contents to include. Specify "INITIALIZED" to include initialized documents.',
            schema: { type: 'string', pattern: '[\\w,]+', minLength: 1, maxLength: 256 },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFolderContentsResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
  },
})

export const deleteApiV1FoldersFolderIdContentsRoute = createRoute({
  method: 'delete',
  path: '/api/v1/folders/{FolderId}/contents',
  description: 'Deletes the contents of the specified folder.',
  operationId: 'DeleteFolderContents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      FolderId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'FolderId',
            in: 'path',
            required: true,
            description: 'The ID of the folder.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    482: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    485: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const deleteApiV1OrganizationsOrganizationIdSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}',
  description: 'Deletes the specified subscription from the specified organization.',
  operationId: 'DeleteNotificationSubscription',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      SubscriptionId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'SubscriptionId',
            in: 'path',
            required: true,
            description: 'The ID of the subscription.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
      OrganizationId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'OrganizationId',
            in: 'path',
            required: true,
            description: 'The ID of the organization.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    481: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    482: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    483: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
  },
})

export const deleteApiV1UsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/users/{UserId}',
  description:
    "<p>Deletes the specified user from a Simple AD or Microsoft AD directory.</p> <important> <p>Deleting a user immediately and permanently deletes all content in that user's folder structure. Site retention policies do NOT apply to this type of deletion.</p> </important>",
  operationId: 'DeleteUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Do not set this field when using administrative API actions, as in accessing the API using Amazon Web Services credentials.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      UserId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'UserId',
            in: 'path',
            required: true,
            description: 'The ID of the user.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const patchApiV1UsersUserIdRoute = createRoute({
  method: 'patch',
  path: '/api/v1/users/{UserId}',
  description:
    'Updates the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.',
  operationId: 'UpdateUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      UserId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'UserId',
            in: 'path',
            required: true,
            description: 'The ID of the user.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              GivenName: z
                .string()
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The given name of the user.' }),
              Surname: z
                .string()
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({ description: 'The surname of the user.' }),
              Type: z
                .enum(['USER', 'ADMIN', 'POWERUSER', 'MINIMALUSER', 'WORKSPACESUSER'])
                .exactOptional()
                .openapi({ description: 'The type of the user.' }),
              StorageRule: z
                .object({
                  StorageAllocatedInBytes: PositiveSizeTypeSchema.and(
                    z.any().openapi({ description: 'The amount of storage allocated, in bytes.' }),
                  ).exactOptional(),
                  StorageType: StorageTypeSchema.and(
                    z.any().openapi({ description: 'The type of storage.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Describes the storage for a user.', required: [] }),
              TimeZoneId: z
                .string()
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'The time zone ID of the user.' }),
              Locale: z
                .enum([
                  'en',
                  'fr',
                  'ko',
                  'de',
                  'es',
                  'ja',
                  'ru',
                  'zh_CN',
                  'zh_TW',
                  'pt_BR',
                  'default',
                ])
                .exactOptional()
                .openapi({ description: 'The locale of the user.' }),
              GrantPoweruserPrivileges: z
                .enum(['TRUE', 'FALSE'])
                .exactOptional()
                .openapi({
                  description:
                    'Boolean value to determine whether the user is granted Power user privileges.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateUserResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'IllegalUserStateException',
      content: { 'application/json': { schema: IllegalUserStateExceptionSchema } },
    },
    484: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    485: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    486: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    487: {
      description: 'DeactivatingLastSystemUserException',
      content: { 'application/json': { schema: DeactivatingLastSystemUserExceptionSchema } },
    },
    488: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const getApiV1ActivitiesRoute = createRoute({
  method: 'get',
  path: '/api/v1/activities',
  description: 'Describes the user activities in a specified time period.',
  operationId: 'DescribeActivities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    query: z.object({
      startTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'startTime',
            in: 'query',
            required: false,
            description:
              'The timestamp that determines the starting time of the activities. The response includes the activities performed after the specified timestamp.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      endTime: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'endTime',
            in: 'query',
            required: false,
            description:
              'The timestamp that determines the end time of the activities. The response includes the activities performed before the specified timestamp.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      organizationId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'organizationId',
            in: 'query',
            required: false,
            description:
              'The ID of the organization. This is a mandatory parameter when using administrative API (SigV4) requests.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
      activityTypes: z
        .string()
        .regex(/[\w,]+/)
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'activityTypes',
            in: 'query',
            required: false,
            description:
              'Specifies which activity types to include in the response. If this field is left empty, all activity types are returned.',
            schema: { type: 'string', pattern: '[\\w,]+', minLength: 1, maxLength: 1024 },
          },
        }),
      resourceId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceId',
            in: 'query',
            required: false,
            description: 'The document or folder ID for which to describe activity types.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
      userId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            required: false,
            description:
              'The ID of the user who performed the action. The response includes activities pertaining to this user. This is an optional parameter and is only applicable for administrative API (SigV4) requests.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
      includeIndirectActivities: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeIndirectActivities',
            in: 'query',
            required: false,
            description:
              'Includes indirect activities. An indirect activity results from a direct activity performed on a parent resource. For example, sharing a parent folder (the direct activity) shares all of the subfolders and documents within the parent folder (the indirect activity).',
            schema: { type: 'boolean' },
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
          z.int().min(1).max(999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of items to return.',
            schema: { type: 'integer', minimum: 1, maximum: 999 },
          },
        }),
      marker: z
        .string()
        .regex(/[\u0000-\u00FF]+/)
        .min(1)
        .max(12288)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description: 'The marker for the next set of results.',
            schema: {
              type: 'string',
              pattern: '[\\u0000-\\u00FF]+',
              minLength: 1,
              maxLength: 12288,
            },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeActivitiesResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getApiV1DocumentsDocumentIdVersionsVersionIdCommentsRoute = createRoute({
  method: 'get',
  path: '/api/v1/documents/{DocumentId}/versions/{VersionId}/comments',
  description: 'List all the comments for the specified document version.',
  operationId: 'DescribeComments',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      DocumentId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'DocumentId',
            in: 'path',
            required: true,
            description: 'The ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
      VersionId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'VersionId',
            in: 'path',
            required: true,
            description: 'The ID of the document version.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of items to return.',
            schema: { type: 'integer', minimum: 1, maximum: 999 },
          },
        }),
      marker: z
        .string()
        .regex(/[\u0000-\u00FF]+/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. This marker was received from a previous call.',
            schema: {
              type: 'string',
              pattern: '[\\u0000-\\u00FF]+',
              minLength: 1,
              maxLength: 2048,
            },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCommentsResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    484: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getApiV1DocumentsDocumentIdVersionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/documents/{DocumentId}/versions',
  description:
    '<p>Retrieves the document versions for the specified document.</p> <p>By default, only active versions are returned.</p>',
  operationId: 'DescribeDocumentVersions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      DocumentId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'DocumentId',
            in: 'path',
            required: true,
            description: 'The ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      marker: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
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
          z.int().min(1).max(999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of versions to return with this call.',
            schema: { type: 'integer', minimum: 1, maximum: 999 },
          },
        }),
      include: z
        .string()
        .regex(/[\w,]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'include',
            in: 'query',
            required: false,
            description:
              'A comma-separated list of values. Specify "INITIALIZED" to include incomplete versions.',
            schema: { type: 'string', pattern: '[\\w,]+', minLength: 1, maxLength: 256 },
          },
        }),
      fields: z
        .string()
        .regex(/[\w,]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            required: false,
            description:
              'Specify "SOURCE" to include initialized versions and a URL for the source document.',
            schema: { type: 'string', pattern: '[\\w,]+', minLength: 1, maxLength: 256 },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDocumentVersionsResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    484: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    487: {
      description: 'InvalidPasswordException',
      content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
    },
  },
})

export const getApiV1GroupsSearchQueryRoute = createRoute({
  method: 'get',
  path: '/api/v1/groups#searchQuery',
  description:
    'Describes the groups specified by the query. Groups are defined by the underlying Active Directory.',
  operationId: 'DescribeGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    query: z.object({
      searchQuery: z
        .string()
        .regex(/[\u0020-\uFFFF]+/)
        .min(1)
        .max(512)
        .openapi({
          param: {
            name: 'searchQuery',
            in: 'query',
            required: true,
            description: 'A query to describe groups by group name.',
            schema: {
              type: 'string',
              pattern: '[\\u0020-\\uFFFF]+',
              minLength: 1,
              maxLength: 512,
              format: 'password',
            },
          },
        }),
      organizationId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'organizationId',
            in: 'query',
            required: false,
            description: 'The ID of the organization.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
      marker: z
        .string()
        .regex(/[\u0000-\u00FF]+/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: {
              type: 'string',
              pattern: '[\\u0000-\\u00FF]+',
              minLength: 1,
              maxLength: 2048,
            },
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
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of items to return with this call.',
            schema: { type: 'integer', minimum: 1 },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeGroupsResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    482: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getApiV1MeRootAuthenticationRoute = createRoute({
  method: 'get',
  path: '/api/v1/me/root#Authentication',
  description:
    '<p>Describes the current user\'s special folders; the <code>RootFolder</code> and the <code>RecycleBin</code>. <code>RootFolder</code> is the root of user\'s files and folders and <code>RecycleBin</code> is the root of recycled items. This is not a valid action for SigV4 (administrative API) clients.</p> <p>This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access Control for User Applications</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>',
  operationId: 'DescribeRootFolders',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: true,
            description: 'Amazon WorkDocs authentication token.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of items to return.',
            schema: { type: 'integer', minimum: 1, maximum: 999 },
          },
        }),
      marker: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. (You received this marker from a previous call.)',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRootFoldersResponseSchema } },
    },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getApiV1MeAuthenticationRoute = createRoute({
  method: 'get',
  path: '/api/v1/me#Authentication',
  description:
    '<p>Retrieves details of the current user for whom the authentication token was generated. This is not a valid action for SigV4 (administrative API) clients.</p> <p>This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access Control for User Applications</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>',
  operationId: 'GetCurrentUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: true,
            description: 'Amazon WorkDocs authentication token.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCurrentUserResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getApiV1DocumentsDocumentIdPathRoute = createRoute({
  method: 'get',
  path: '/api/v1/documents/{DocumentId}/path',
  description:
    '<p>Retrieves the path information (the hierarchy from the root folder) for the requested document.</p> <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested document and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the names of the parent folders.</p>',
  operationId: 'GetDocumentPath',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      DocumentId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'DocumentId',
            in: 'path',
            required: true,
            description: 'The ID of the document.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of levels in the hierarchy to return.',
            schema: { type: 'integer', minimum: 1, maximum: 999 },
          },
        }),
      fields: z
        .string()
        .regex(/[\w,]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            required: false,
            description:
              'A comma-separated list of values. Specify <code>NAME</code> to include the names of the parent folders.',
            schema: { type: 'string', pattern: '[\\w,]+', minLength: 1, maxLength: 256 },
          },
        }),
      marker: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description: 'This value is not supported.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDocumentPathResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getApiV1FoldersFolderIdPathRoute = createRoute({
  method: 'get',
  path: '/api/v1/folders/{FolderId}/path',
  description:
    '<p>Retrieves the path information (the hierarchy from the root folder) for the specified folder.</p> <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested folder and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the parent folder names.</p>',
  operationId: 'GetFolderPath',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      FolderId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'FolderId',
            in: 'path',
            required: true,
            description: 'The ID of the folder.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of levels in the hierarchy to return.',
            schema: { type: 'integer', minimum: 1, maximum: 999 },
          },
        }),
      fields: z
        .string()
        .regex(/[\w,]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            required: false,
            description:
              'A comma-separated list of values. Specify "NAME" to include the names of the parent folders.',
            schema: { type: 'string', pattern: '[\\w,]+', minLength: 1, maxLength: 256 },
          },
        }),
      marker: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description: 'This value is not supported.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFolderPathResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const getApiV1ResourcesRoute = createRoute({
  method: 'get',
  path: '/api/v1/resources',
  description:
    'Retrieves a collection of resources, including folders and documents. The only <code>CollectionType</code> supported is <code>SHARED_WITH_ME</code>.',
  operationId: 'GetResources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'The Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    query: z.object({
      userId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            required: false,
            description:
              'The user ID for the resource collection. This is a required field for accessing the API operation using IAM credentials.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
      collectionType: z
        .literal('SHARED_WITH_ME')
        .exactOptional()
        .openapi({
          param: {
            name: 'collectionType',
            in: 'query',
            required: false,
            description: 'The collection type.',
            schema: { type: 'string', enum: ['SHARED_WITH_ME'] },
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
          z.int().min(1).max(999),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description: 'The maximum number of resources to return.',
            schema: { type: 'integer', minimum: 1, maximum: 999 },
          },
        }),
      marker: z
        .string()
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'marker',
            in: 'query',
            required: false,
            description:
              'The marker for the next set of results. This marker was received from a previous call.',
            schema: { type: 'string', minLength: 1, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourcesResponseSchema } },
    },
    480: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    482: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    483: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postApiV1DocumentsRoute = createRoute({
  method: 'post',
  path: '/api/v1/documents',
  description:
    '<p>Creates a new document object and version object.</p> <p>The client specifies the parent folder ID and name of the document to upload. The ID is optionally specified when creating a new version of an existing document. This is the first step to upload a document. Next, upload the document to the URL returned from the call, and then call <a>UpdateDocumentVersion</a>.</p> <p>To cancel the document upload, call <a>AbortDocumentVersionUpload</a>.</p>',
  operationId: 'InitiateDocumentVersionUpload',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Id: z
                .string()
                .regex(/[\w+-.@]+/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'The ID of the document.' }),
              Name: z
                .string()
                .regex(/[\u0020-\u202D\u202F-\uFFFF]+/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the document.' }),
              ContentCreatedTimestamp: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The timestamp when the content of the document was originally created.',
                }),
              ContentModifiedTimestamp: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'The timestamp when the content of the document was modified.',
                }),
              ContentType: z
                .string()
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'The content type of the document.' }),
              DocumentSizeInBytes: z
                .int()
                .exactOptional()
                .openapi({ description: 'The size of the document, in bytes.' }),
              ParentFolderId: z
                .string()
                .regex(/[\w+-.@]+/)
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({ description: 'The ID of the parent folder.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: InitiateDocumentVersionUploadResponseSchema } },
    },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'EntityAlreadyExistsException',
      content: { 'application/json': { schema: EntityAlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'StorageLimitExceededException',
      content: { 'application/json': { schema: StorageLimitExceededExceptionSchema } },
    },
    483: {
      description: 'StorageLimitWillExceedException',
      content: { 'application/json': { schema: StorageLimitWillExceedExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    486: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    487: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    488: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    489: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    490: {
      description: 'DraftUploadOutOfSyncException',
      content: { 'application/json': { schema: DraftUploadOutOfSyncExceptionSchema } },
    },
    491: {
      description: 'ResourceAlreadyCheckedOutException',
      content: { 'application/json': { schema: ResourceAlreadyCheckedOutExceptionSchema } },
    },
    492: {
      description: 'InvalidPasswordException',
      content: { 'application/json': { schema: InvalidPasswordExceptionSchema } },
    },
    493: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
  },
})

export const deleteApiV1ResourcesResourceIdPermissionsPrincipalIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/resources/{ResourceId}/permissions/{PrincipalId}',
  description: 'Removes the permission for the specified principal from the specified resource.',
  operationId: 'RemoveResourcePermission',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      ResourceId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'ResourceId',
            in: 'path',
            required: true,
            description: 'The ID of the resource.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
      PrincipalId: z
        .string()
        .regex(/[&\w+-.@]+/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'PrincipalId',
            in: 'path',
            required: true,
            description: 'The principal ID of the resource.',
            schema: { type: 'string', pattern: '[&\\w+-.@]+', minLength: 1, maxLength: 256 },
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['USER', 'GROUP', 'INVITE', 'ANONYMOUS', 'ORGANIZATION'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description: 'The principal type of the resource.',
            schema: {
              type: 'string',
              enum: ['USER', 'GROUP', 'INVITE', 'ANONYMOUS', 'ORGANIZATION'],
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    482: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})

export const postApiV1DocumentVersionsRestoreDocumentIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/documentVersions/restore/{DocumentId}',
  description: 'Recovers a deleted version of an Amazon WorkDocs document.',
  operationId: 'RestoreDocumentVersions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    params: z.object({
      DocumentId: z
        .string()
        .regex(/[\w+-.@]+/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'DocumentId',
            in: 'path',
            required: true,
            description: 'The ID of the document.',
            schema: { type: 'string', pattern: '[\\w+-.@]+', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'EntityNotExistsException',
      content: { 'application/json': { schema: EntityNotExistsExceptionSchema } },
    },
    481: {
      description: 'ProhibitedStateException',
      content: { 'application/json': { schema: ProhibitedStateExceptionSchema } },
    },
    482: {
      description: 'ConflictingOperationException',
      content: { 'application/json': { schema: ConflictingOperationExceptionSchema } },
    },
    483: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    484: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    485: {
      description: 'FailedDependencyException',
      content: { 'application/json': { schema: FailedDependencyExceptionSchema } },
    },
    486: {
      description: 'InvalidOperationException',
      content: { 'application/json': { schema: InvalidOperationExceptionSchema } },
    },
    487: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
  },
})

export const postApiV1SearchRoute = createRoute({
  method: 'post',
  path: '/api/v1/search',
  description:
    'Searches metadata and the content of folders, documents, document versions, and comments.',
  operationId: 'SearchResources',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      Authentication: z
        .string()
        .min(1)
        .max(8199)
        .exactOptional()
        .openapi({
          param: {
            name: 'Authentication',
            in: 'header',
            required: false,
            description:
              'Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.',
            schema: { type: 'string', minLength: 1, maxLength: 8199, format: 'password' },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      Marker: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Marker',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              QueryText: z
                .string()
                .regex(/[\u0020-\uFFFF]+/)
                .min(1)
                .max(512)
                .exactOptional()
                .openapi({
                  description:
                    'The String to search for. Searches across different text fields based on request parameters. Use double quotes around the query string for exact phrase matches.',
                }),
              QueryScopes: z
                .array(SearchQueryScopeTypeSchema)
                .max(2)
                .exactOptional()
                .openapi({
                  description:
                    'Filter based on the text field type. A Folder has only a name and no content. A Comment has only content and no name. A Document or Document Version has a name and content',
                }),
              OrganizationId: z
                .string()
                .regex(/[&\w+-.@]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'Filters based on the resource owner OrgId. This is a mandatory parameter when using Admin SigV4 credentials.',
                }),
              AdditionalResponseFields: z
                .array(AdditionalResponseFieldTypeSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of attributes to include in the response. Used to request fields that are not normally returned in a standard response.',
                }),
              Filters: z
                .object({
                  TextLocales: TextLocaleTypeListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Filters by the locale of the content or comment.' }),
                  ).exactOptional(),
                  ContentCategories: SearchContentCategoryTypeListSchema.and(
                    z.any().openapi({ description: 'Filters by content category.' }),
                  ).exactOptional(),
                  ResourceTypes: SearchResourceTypeListSchema.and(
                    z.any().openapi({ description: 'Filters based on entity type.' }),
                  ).exactOptional(),
                  Labels: SearchLabelListSchema.and(
                    z.any().openapi({ description: 'Filter by labels using exact match.' }),
                  ).exactOptional(),
                  Principals: SearchPrincipalTypeListSchema.and(
                    z.any().openapi({ description: 'Filter based on UserIds or GroupIds.' }),
                  ).exactOptional(),
                  AncestorIds: SearchAncestorIdListSchema.and(
                    z.any().openapi({ description: 'Filter based on resource’s path.' }),
                  ).exactOptional(),
                  SearchCollectionTypes: SearchCollectionTypeListSchema.and(
                    z.any().openapi({ description: 'Filter based on file groupings.' }),
                  ).exactOptional(),
                  SizeRange: LongRangeTypeSchema.and(
                    z.any().openapi({ description: 'Filter based on size (in bytes).' }),
                  ).exactOptional(),
                  CreatedRange: DateRangeTypeSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Filter based on resource’s creation timestamp.' }),
                  ).exactOptional(),
                  ModifiedRange: DateRangeTypeSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Filter based on resource’s modified timestamp.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Filters results based on entity metadata.',
                  required: [],
                }),
              OrderBy: z
                .array(SearchSortResultSchema)
                .max(1)
                .exactOptional()
                .openapi({ description: 'Order by results in one or more categories.' }),
              Limit: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'Max results count per page.' }),
              Marker: z
                .string()
                .regex(/[\d]+/)
                .min(1)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The marker for the next set of results.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchResourcesResponseSchema } },
    },
    480: {
      description: 'InvalidArgumentException',
      content: { 'application/json': { schema: InvalidArgumentExceptionSchema } },
    },
    481: {
      description: 'UnauthorizedResourceAccessException',
      content: { 'application/json': { schema: UnauthorizedResourceAccessExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedOperationException',
      content: { 'application/json': { schema: UnauthorizedOperationExceptionSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
  },
})
