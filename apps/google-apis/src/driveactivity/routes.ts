import { createRoute, z } from '@hono/zod-openapi'

const DeletedUserSchema = z
  .object({})
  .openapi({ description: 'A user whose account has since been deleted.' })
  .openapi('DeletedUser')

const KnownUserSchema = z
  .object({
    isCurrentUser: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if this is the user making the request.' }),
    personName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier for this user that can be used with the People API to get more information. The format is `people/ACCOUNT_ID`. See https://developers.google.com/people/.',
      }),
  })
  .openapi({ description: 'A known user.', required: [] })
  .openapi('KnownUser')

const UnknownUserSchema = z
  .object({})
  .openapi({ description: 'A user about whom nothing is currently known.' })
  .openapi('UnknownUser')

type UserType = {
  deletedUser?: z.infer<typeof DeletedUserSchema>
  knownUser?: z.infer<typeof KnownUserSchema>
  unknownUser?: z.infer<typeof UnknownUserSchema>
}

const AdministratorSchema = z
  .object({})
  .openapi({ description: 'Empty message representing an administrator.' })
  .openapi('Administrator')

const AnonymousUserSchema = z
  .object({})
  .openapi({
    description:
      'Empty message representing an anonymous user or indicating the authenticated user should be anonymized.',
  })
  .openapi('AnonymousUser')

const UserSchema: z.ZodType<UserType> = z
  .lazy(() =>
    z
      .object({
        deletedUser: DeletedUserSchema.exactOptional().openapi({
          description: 'A user whose account has since been deleted.',
        }),
        knownUser: KnownUserSchema.exactOptional().openapi({ description: 'A known user.' }),
        unknownUser: UnknownUserSchema.exactOptional().openapi({
          description: 'A user about whom nothing is currently known.',
        }),
      })
      .openapi({ description: 'Information about an end user.', required: [] }),
  )
  .openapi('User')

const ImpersonationSchema = z
  .object({
    impersonatedUser: UserSchema.exactOptional().openapi({ description: 'The impersonated user.' }),
  })
  .openapi({
    description:
      'Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available.',
    required: [],
  })
  .openapi('Impersonation')

const SystemEventSchema = z
  .object({
    type: z
      .enum(['TYPE_UNSPECIFIED', 'USER_DELETION', 'TRASH_AUTO_PURGE'])
      .exactOptional()
      .openapi({ description: 'The type of the system event that may triggered activity.' }),
  })
  .openapi({
    description: 'Event triggered by system operations instead of end users.',
    required: [],
  })
  .openapi('SystemEvent')

const ActorSchema = z
  .object({
    administrator: AdministratorSchema.exactOptional().openapi({
      description: 'An administrator.',
    }),
    anonymous: AnonymousUserSchema.exactOptional().openapi({ description: 'An anonymous user.' }),
    impersonation: ImpersonationSchema.exactOptional().openapi({
      description: 'An account acting on behalf of another.',
    }),
    system: SystemEventSchema.exactOptional().openapi({
      description: 'A non-user actor (i.e. system triggered).',
    }),
    user: UserSchema.exactOptional().openapi({ description: 'An end user.' }),
  })
  .openapi({ description: 'The actor of a Drive activity.', required: [] })
  .openapi('Actor')

const DateSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: 'Date value.' }) })
  .openapi({ description: 'Wrapper for Date Field value.', required: [] })
  .openapi('Date')

const IntegerSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: 'Integer value.' }) })
  .openapi({ description: 'Wrapper for Integer Field value.', required: [] })
  .openapi('Integer')

const SelectionSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Selection value as human-readable display string.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Selection value as Field Choice ID.' }),
  })
  .openapi({
    description:
      'Wrapper for Selection Field value as combined value/display_name pair for selected choice.',
    required: [],
  })
  .openapi('Selection')

const SelectionListSchema = z
  .object({
    values: z.array(SelectionSchema).exactOptional().openapi({ description: 'Selection values.' }),
  })
  .openapi({ description: 'Wrapper for SelectionList Field value.', required: [] })
  .openapi('SelectionList')

const TextSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: 'Value of Text Field.' }) })
  .openapi({ description: 'Wrapper for Text Field value.', required: [] })
  .openapi('Text')

const TextListSchema = z
  .object({ values: z.array(TextSchema).exactOptional().openapi({ description: 'Text values.' }) })
  .openapi({ description: 'Wrapper for Text List Field value.', required: [] })
  .openapi('TextList')

const SingleUserSchema = z
  .object({ value: z.string().exactOptional().openapi({ description: 'User value as email.' }) })
  .openapi({ description: 'Wrapper for User Field value.', required: [] })
  .openapi('SingleUser')

const UserListSchema = z
  .object({
    values: z.array(SingleUserSchema).exactOptional().openapi({ description: 'User values.' }),
  })
  .openapi({ description: 'Wrapper for UserList Field value.', required: [] })
  .openapi('UserList')

const FieldValueSchema = z
  .object({
    date: DateSchema.exactOptional().openapi({ description: 'Date Field value.' }),
    integer: IntegerSchema.exactOptional().openapi({ description: 'Integer Field value.' }),
    selection: SelectionSchema.exactOptional().openapi({ description: 'Selection Field value.' }),
    selectionList: SelectionListSchema.exactOptional().openapi({
      description: 'Selection List Field value.',
    }),
    text: TextSchema.exactOptional().openapi({ description: 'Text Field value.' }),
    textList: TextListSchema.exactOptional().openapi({ description: 'Text List Field value.' }),
    user: SingleUserSchema.exactOptional().openapi({ description: 'User Field value.' }),
    userList: UserListSchema.exactOptional().openapi({ description: 'User List Field value.' }),
  })
  .openapi({ description: 'Contains a value of a Field.', required: [] })
  .openapi('FieldValue')

const FieldValueChangeSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable display name for this field.' }),
    fieldId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of this field. Field IDs are unique within a Label.' }),
    newValue: FieldValueSchema.exactOptional().openapi({
      description:
        'The value that is now set on the field. If not present, the field was cleared. At least one of {old_value|new_value} is always set.',
    }),
    oldValue: FieldValueSchema.exactOptional().openapi({
      description:
        'The value that was previously set on the field. If not present, the field was newly set. At least one of {old_value|new_value} is always set.',
    }),
  })
  .openapi({ description: 'Change to a Field value.', required: [] })
  .openapi('FieldValueChange')

const AppliedLabelChangeDetailSchema = z
  .object({
    fieldChanges: z
      .array(FieldValueChangeSchema)
      .exactOptional()
      .openapi({
        description: 'Field Changes. Only present if `types` contains `LABEL_FIELD_VALUE_CHANGED`.',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Label name representing the Label that changed. This name always contains the revision of the Label that was used when this Action occurred. The format is `labels/id@revision`.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable title of the label that changed.' }),
    types: z
      .array(
        z.enum([
          'TYPE_UNSPECIFIED',
          'LABEL_ADDED',
          'LABEL_REMOVED',
          'LABEL_FIELD_VALUE_CHANGED',
          'LABEL_APPLIED_BY_ITEM_CREATE',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'The types of changes made to the Label on the Target.' }),
  })
  .openapi({ description: 'A change made to a Label on the Target.', required: [] })
  .openapi('AppliedLabelChangeDetail')

const AppliedLabelChangeSchema = z
  .object({
    changes: z
      .array(AppliedLabelChangeDetailSchema)
      .exactOptional()
      .openapi({ description: 'Changes that were made to the Label on the Target.' }),
  })
  .openapi({ description: 'Label changes that were made on the Target.', required: [] })
  .openapi('AppliedLabelChange')

const AssignmentSchema = z
  .object({
    assignedUser: UserSchema.exactOptional().openapi({
      description: 'The user to whom the comment was assigned.',
    }),
    subtype: z
      .enum([
        'SUBTYPE_UNSPECIFIED',
        'ADDED',
        'DELETED',
        'REPLY_ADDED',
        'REPLY_DELETED',
        'RESOLVED',
        'REOPENED',
        'REASSIGNED',
      ])
      .exactOptional()
      .openapi({ description: 'The sub-type of this event.' }),
  })
  .openapi({ description: 'A comment with an assignment.', required: [] })
  .openapi('Assignment')

const PostSchema = z
  .object({
    subtype: z
      .enum([
        'SUBTYPE_UNSPECIFIED',
        'ADDED',
        'DELETED',
        'REPLY_ADDED',
        'REPLY_DELETED',
        'RESOLVED',
        'REOPENED',
      ])
      .exactOptional()
      .openapi({ description: 'The sub-type of this event.' }),
  })
  .openapi({ description: 'A regular posted comment.', required: [] })
  .openapi('Post')

const SuggestionSchema = z
  .object({
    subtype: z
      .enum([
        'SUBTYPE_UNSPECIFIED',
        'ADDED',
        'DELETED',
        'REPLY_ADDED',
        'REPLY_DELETED',
        'ACCEPTED',
        'REJECTED',
        'ACCEPT_DELETED',
        'REJECT_DELETED',
      ])
      .exactOptional()
      .openapi({ description: 'The sub-type of this event.' }),
  })
  .openapi({ description: 'A suggestion.', required: [] })
  .openapi('Suggestion')

const CommentSchema = z
  .object({
    assignment: AssignmentSchema.exactOptional().openapi({
      description: 'A change on an assignment.',
    }),
    mentionedUsers: z
      .array(UserSchema)
      .exactOptional()
      .openapi({ description: 'Users who are mentioned in this comment.' }),
    post: PostSchema.exactOptional().openapi({
      description: 'A change on a regular posted comment.',
    }),
    suggestion: SuggestionSchema.exactOptional().openapi({
      description: 'A change on a suggestion.',
    }),
  })
  .openapi({ description: 'A change about comments on an object.', required: [] })
  .openapi('Comment')

const DriveReferenceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the shared drive. The format is `COLLECTION_ID/DRIVE_ID`. Clients should not assume a specific collection ID for this resource name.',
      }),
    title: z.string().exactOptional().openapi({ description: 'The title of the shared drive.' }),
  })
  .openapi({ description: 'A lightweight reference to a shared drive.', required: [] })
  .openapi('DriveReference')

const DriveFileSchema = z
  .object({})
  .openapi({ description: 'A Drive item which is a file.' })
  .openapi('DriveFile')

const DriveFolderSchema = z
  .object({
    type: z
      .enum(['TYPE_UNSPECIFIED', 'MY_DRIVE_ROOT', 'SHARED_DRIVE_ROOT', 'STANDARD_FOLDER'])
      .exactOptional()
      .openapi({ description: 'The type of Drive folder.' }),
  })
  .openapi({ description: 'A Drive item which is a folder.', required: [] })
  .openapi('DriveFolder')

const FileSchema = z
  .object({})
  .openapi({ description: 'This item is deprecated; please see `DriveFile` instead.' })
  .openapi('File')

const FolderSchema = z
  .object({
    type: z
      .enum(['TYPE_UNSPECIFIED', 'MY_DRIVE_ROOT', 'TEAM_DRIVE_ROOT', 'STANDARD_FOLDER'])
      .exactOptional()
      .openapi({ description: 'This field is deprecated; please see `DriveFolder.type` instead.' }),
  })
  .openapi({
    description: 'This item is deprecated; please see `DriveFolder` instead.',
    required: [],
  })
  .openapi('Folder')

const DriveItemReferenceSchema = z
  .object({
    driveFile: DriveFileSchema.exactOptional().openapi({
      description: 'The Drive item is a file.',
    }),
    driveFolder: DriveFolderSchema.exactOptional().openapi({
      description: 'The Drive item is a folder. Includes information about the type of folder.',
    }),
    file: FileSchema.exactOptional().openapi({
      description: 'This field is deprecated; please use the `driveFile` field instead.',
    }),
    folder: FolderSchema.exactOptional().openapi({
      description: 'This field is deprecated; please use the `driveFolder` field instead.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The target Drive item. The format is `items/ITEM_ID`.' }),
    title: z.string().exactOptional().openapi({ description: 'The title of the Drive item.' }),
  })
  .openapi({
    description: 'A lightweight reference to a Drive item, such as a file or folder.',
    required: [],
  })
  .openapi('DriveItemReference')

const TeamDriveReferenceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'This field is deprecated; please see `DriveReference.name` instead.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'This field is deprecated; please see `DriveReference.title` instead.',
      }),
  })
  .openapi({
    description: 'This item is deprecated; please see `DriveReference` instead.',
    required: [],
  })
  .openapi('TeamDriveReference')

const TargetReferenceSchema = z
  .object({
    drive: DriveReferenceSchema.exactOptional().openapi({
      description: 'The target is a shared drive.',
    }),
    driveItem: DriveItemReferenceSchema.exactOptional().openapi({
      description: 'The target is a Drive item.',
    }),
    teamDrive: TeamDriveReferenceSchema.exactOptional().openapi({
      description: 'This field is deprecated; please use the `drive` field instead.',
    }),
  })
  .openapi({ description: 'A lightweight reference to the target of activity.', required: [] })
  .openapi('TargetReference')

const CopySchema = z
  .object({
    originalObject: TargetReferenceSchema.exactOptional().openapi({
      description: 'The original object.',
    }),
  })
  .openapi({ description: 'An object was created by copying an existing object.', required: [] })
  .openapi('Copy')

const NewSchema = z
  .object({})
  .openapi({ description: 'An object was created from scratch.' })
  .openapi('New')

const UploadSchema = z
  .object({})
  .openapi({ description: 'An object was uploaded into Drive.' })
  .openapi('Upload')

const CreateSchema = z
  .object({
    copy: CopySchema.exactOptional().openapi({
      description:
        'If present, indicates the object was created by copying an existing Drive object.',
    }),
    new: NewSchema.exactOptional().openapi({
      description:
        'If present, indicates the object was newly created (e.g. as a blank document), not derived from a Drive object or external object.',
    }),
    upload: UploadSchema.exactOptional().openapi({
      description:
        'If present, indicates the object originated externally and was uploaded to Drive.',
    }),
  })
  .openapi({ description: 'An object was created.', required: [] })
  .openapi('Create')

const DeleteSchema = z
  .object({
    type: z
      .enum(['TYPE_UNSPECIFIED', 'TRASH', 'PERMANENT_DELETE'])
      .exactOptional()
      .openapi({ description: 'The type of delete action taken.' }),
  })
  .openapi({ description: 'An object was deleted.', required: [] })
  .openapi('Delete')

const DataLeakPreventionChangeSchema = z
  .object({
    type: z
      .enum(['TYPE_UNSPECIFIED', 'FLAGGED', 'CLEARED'])
      .exactOptional()
      .openapi({ description: 'The type of Data Leak Prevention (DLP) change.' }),
  })
  .openapi({ description: "A change in the object's data leak prevention status.", required: [] })
  .openapi('DataLeakPreventionChange')

const EditSchema = z
  .object({})
  .openapi({ description: 'An empty message indicating an object was edited.' })
  .openapi('Edit')

const MoveSchema = z
  .object({
    addedParents: z
      .array(TargetReferenceSchema)
      .exactOptional()
      .openapi({ description: 'The added parent object(s).' }),
    removedParents: z
      .array(TargetReferenceSchema)
      .exactOptional()
      .openapi({ description: 'The removed parent object(s).' }),
  })
  .openapi({ description: 'An object was moved.', required: [] })
  .openapi('Move')

const AnyoneSchema = z
  .object({})
  .openapi({ description: 'Represents any user (including a logged out user).' })
  .openapi('Anyone')

const DomainSchema = z
  .object({
    legacyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'An opaque string used to identify this domain.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the domain, e.g. `google.com`.' }),
  })
  .openapi({ description: 'Information about a domain.', required: [] })
  .openapi('Domain')

const GroupSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'The email address of the group.' }),
    title: z.string().exactOptional().openapi({ description: 'The title of the group.' }),
  })
  .openapi({ description: 'Information about a group.', required: [] })
  .openapi('Group')

const PermissionSchema = z
  .object({
    allowDiscovery: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the item can be discovered (e.g. in the user\'s "Shared with me" collection) without needing a link to the item.',
      }),
    anyone: AnyoneSchema.exactOptional().openapi({
      description: 'If set, this permission applies to anyone, even logged out users.',
    }),
    domain: DomainSchema.exactOptional().openapi({
      description: 'The domain to whom this permission applies.',
    }),
    group: GroupSchema.exactOptional().openapi({
      description: 'The group to whom this permission applies.',
    }),
    role: z
      .enum([
        'ROLE_UNSPECIFIED',
        'OWNER',
        'ORGANIZER',
        'FILE_ORGANIZER',
        'EDITOR',
        'COMMENTER',
        'VIEWER',
        'PUBLISHED_VIEWER',
      ])
      .exactOptional()
      .openapi({
        description:
          "Indicates the [Google Drive permissions role](https://developers.google.com/drive/web/manage-sharing#roles). The role determines a user's ability to read, write, and comment on items.",
      }),
    user: UserSchema.exactOptional().openapi({
      description: 'The user to whom this permission applies.',
    }),
  })
  .openapi({ description: 'The permission setting of an object.', required: [] })
  .openapi('Permission')

const PermissionChangeSchema = z
  .object({
    addedPermissions: z
      .array(PermissionSchema)
      .exactOptional()
      .openapi({ description: 'The set of permissions added by this change.' }),
    removedPermissions: z
      .array(PermissionSchema)
      .exactOptional()
      .openapi({ description: 'The set of permissions removed by this change.' }),
  })
  .openapi({ description: 'A change of the permission setting on an item.', required: [] })
  .openapi('PermissionChange')

const ApplicationReferenceSchema = z
  .object({
    type: z
      .enum(['UNSPECIFIED_REFERENCE_TYPE', 'LINK', 'DISCUSS'])
      .exactOptional()
      .openapi({ description: 'The reference type corresponding to this event.' }),
  })
  .openapi({ description: 'Activity in applications other than Drive.', required: [] })
  .openapi('ApplicationReference')

const RenameSchema = z
  .object({
    newTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The new title of the drive object.' }),
    oldTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The previous title of the drive object.' }),
  })
  .openapi({ description: 'An object was renamed.', required: [] })
  .openapi('Rename')

const RestoreSchema = z
  .object({
    type: z
      .enum(['TYPE_UNSPECIFIED', 'UNTRASH'])
      .exactOptional()
      .openapi({ description: 'The type of restore action taken.' }),
  })
  .openapi({ description: 'A deleted object was restored.', required: [] })
  .openapi('Restore')

const RestrictionChangeSchema = z
  .object({
    feature: z
      .enum([
        'FEATURE_UNSPECIFIED',
        'SHARING_OUTSIDE_DOMAIN',
        'DIRECT_SHARING',
        'ITEM_DUPLICATION',
        'DRIVE_FILE_STREAM',
        'FILE_ORGANIZER_CAN_SHARE_FOLDERS',
      ])
      .exactOptional()
      .openapi({ description: 'The feature which had a change in restriction policy.' }),
    newRestriction: z
      .enum(['RESTRICTION_UNSPECIFIED', 'UNRESTRICTED', 'FULLY_RESTRICTED'])
      .exactOptional()
      .openapi({ description: 'The restriction in place after the change.' }),
  })
  .openapi({
    description: 'Information about restriction policy changes to a feature.',
    required: [],
  })
  .openapi('RestrictionChange')

const SettingsChangeSchema = z
  .object({
    restrictionChanges: z
      .array(RestrictionChangeSchema)
      .exactOptional()
      .openapi({ description: 'The set of changes made to restrictions.' }),
  })
  .openapi({ description: 'Information about settings changes.', required: [] })
  .openapi('SettingsChange')

const ActionDetailSchema = z
  .object({
    appliedLabelChange: AppliedLabelChangeSchema.exactOptional().openapi({
      description: 'Label was changed.',
    }),
    comment: CommentSchema.exactOptional().openapi({
      description: 'A change about comments was made.',
    }),
    create: CreateSchema.exactOptional().openapi({ description: 'An object was created.' }),
    delete: DeleteSchema.exactOptional().openapi({ description: 'An object was deleted.' }),
    dlpChange: DataLeakPreventionChangeSchema.exactOptional().openapi({
      description: 'A change happened in data leak prevention status.',
    }),
    edit: EditSchema.exactOptional().openapi({ description: 'An object was edited.' }),
    move: MoveSchema.exactOptional().openapi({ description: 'An object was moved.' }),
    permissionChange: PermissionChangeSchema.exactOptional().openapi({
      description: 'The permission on an object was changed.',
    }),
    reference: ApplicationReferenceSchema.exactOptional().openapi({
      description: 'An object was referenced in an application outside of Drive/Docs.',
    }),
    rename: RenameSchema.exactOptional().openapi({ description: 'An object was renamed.' }),
    restore: RestoreSchema.exactOptional().openapi({
      description: 'A deleted object was restored.',
    }),
    settingsChange: SettingsChangeSchema.exactOptional().openapi({
      description: 'Settings were changed.',
    }),
  })
  .openapi({
    description: 'Data describing the type and additional information of an action.',
    required: [],
  })
  .openapi('ActionDetail')

const OwnerSchema = z
  .object({
    domain: DomainSchema.exactOptional().openapi({
      description: 'The domain of the Drive item owner.',
    }),
    drive: DriveReferenceSchema.exactOptional().openapi({
      description: 'The drive that owns the item.',
    }),
    teamDrive: TeamDriveReferenceSchema.exactOptional().openapi({
      description: 'This field is deprecated; please use the `drive` field instead.',
    }),
    user: UserSchema.exactOptional().openapi({ description: 'The user that owns the Drive item.' }),
  })
  .openapi({ description: 'Information about the owner of a Drive item.', required: [] })
  .openapi('Owner')

const DriveItemSchema = z
  .object({
    driveFile: DriveFileSchema.exactOptional().openapi({
      description: 'The Drive item is a file.',
    }),
    driveFolder: DriveFolderSchema.exactOptional().openapi({
      description: 'The Drive item is a folder. Includes information about the type of folder.',
    }),
    file: FileSchema.exactOptional().openapi({
      description: 'This field is deprecated; please use the `driveFile` field instead.',
    }),
    folder: FolderSchema.exactOptional().openapi({
      description: 'This field is deprecated; please use the `driveFolder` field instead.',
    }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The MIME type of the Drive item. See https://developers.google.com/drive/v3/web/mime-types.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The target Drive item. The format is `items/ITEM_ID`.' }),
    owner: OwnerSchema.exactOptional().openapi({
      description: 'Information about the owner of this Drive item.',
    }),
    title: z.string().exactOptional().openapi({ description: 'The title of the Drive item.' }),
  })
  .openapi({ description: 'A Drive item, such as a file or folder.', required: [] })
  .openapi('DriveItem')

const DriveSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the shared drive. The format is `COLLECTION_ID/DRIVE_ID`. Clients should not assume a specific collection ID for this resource name.',
      }),
    root: DriveItemSchema.exactOptional().openapi({
      description: 'The root of this shared drive.',
    }),
    title: z.string().exactOptional().openapi({ description: 'The title of the shared drive.' }),
  })
  .openapi({ description: 'Information about a shared drive.', required: [] })
  .openapi('Drive')

const FileCommentSchema = z
  .object({
    legacyCommentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The comment in the discussion thread. This identifier is an opaque string compatible with the Drive API; see https://developers.google.com/drive/v3/reference/comments/get',
      }),
    legacyDiscussionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The discussion thread to which the comment was added. This identifier is an opaque string compatible with the Drive API and references the first comment in a discussion; see https://developers.google.com/drive/v3/reference/comments/get',
      }),
    linkToDiscussion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The link to the discussion thread containing this comment, for example, `https://docs.google.com/DOCUMENT_ID/edit?disco=THREAD_ID`.',
      }),
    parent: DriveItemSchema.exactOptional().openapi({
      description: 'The Drive item containing this comment.',
    }),
  })
  .openapi({ description: 'A comment on a file.', required: [] })
  .openapi('FileComment')

const TeamDriveSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'This field is deprecated; please see `Drive.name` instead.' }),
    root: DriveItemSchema.exactOptional().openapi({
      description: 'This field is deprecated; please see `Drive.root` instead.',
    }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'This field is deprecated; please see `Drive.title` instead.' }),
  })
  .openapi({ description: 'This item is deprecated; please see `Drive` instead.', required: [] })
  .openapi('TeamDrive')

const TargetSchema = z
  .object({
    drive: DriveSchema.exactOptional().openapi({ description: 'The target is a shared drive.' }),
    driveItem: DriveItemSchema.exactOptional().openapi({
      description: 'The target is a Drive item.',
    }),
    fileComment: FileCommentSchema.exactOptional().openapi({
      description: 'The target is a comment on a Drive file.',
    }),
    teamDrive: TeamDriveSchema.exactOptional().openapi({
      description: 'This field is deprecated; please use the `drive` field instead.',
    }),
  })
  .openapi({
    description:
      'Information about the target of activity. For more information on how activity history is shared with users, see [Activity history visibility](https://developers.google.com/drive/activity/v2#activityhistory).',
    required: [],
  })
  .openapi('Target')

const TimeRangeSchema = z
  .object({
    endTime: z.string().exactOptional().openapi({ description: 'The end of the time range.' }),
    startTime: z.string().exactOptional().openapi({ description: 'The start of the time range.' }),
  })
  .openapi({ description: 'Information about time ranges.', required: [] })
  .openapi('TimeRange')

const ActionSchema = z
  .object({
    actor: ActorSchema.exactOptional().openapi({
      description:
        'The actor responsible for this action (or empty if all actors are responsible).',
    }),
    detail: ActionDetailSchema.exactOptional().openapi({
      description: 'The type and detailed information about the action.',
    }),
    target: TargetSchema.exactOptional().openapi({
      description:
        'The target this action affects (or empty if affecting all targets). This represents the state of the target immediately after this action occurred.',
    }),
    timeRange: TimeRangeSchema.exactOptional().openapi({
      description: 'The action occurred over this time range.',
    }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The action occurred at this specific time.' }),
  })
  .openapi({ description: 'Information about the action.', required: [] })
  .openapi('Action')

const LegacySchema = z
  .object({})
  .openapi({
    description:
      'A strategy that consolidates activities using the grouping rules from the legacy V1 Activity API. Similar actions occurring within a window of time can be grouped across multiple targets (such as moving a set of files at once) or multiple actors (such as several users editing the same item). Grouping rules for this strategy are specific to each type of action.',
  })
  .openapi('Legacy')

const NoConsolidationSchema = z
  .object({})
  .openapi({ description: 'A strategy that does no consolidation of individual activities.' })
  .openapi('NoConsolidation')

const ConsolidationStrategySchema = z
  .object({
    legacy: LegacySchema.exactOptional().openapi({
      description: 'The individual activities are consolidated using the legacy strategy.',
    }),
    none: NoConsolidationSchema.exactOptional().openapi({
      description: 'The individual activities are not consolidated.',
    }),
  })
  .openapi({
    description:
      'How the individual activities are consolidated. If a set of activities is related they can be consolidated into one combined activity, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related.',
    required: [],
  })
  .openapi('ConsolidationStrategy')

const DriveActivitySchema = z
  .object({
    actions: z
      .array(ActionSchema)
      .exactOptional()
      .openapi({ description: 'Details on all actions in this activity.' }),
    actors: z
      .array(ActorSchema)
      .exactOptional()
      .openapi({ description: 'All actor(s) responsible for the activity.' }),
    primaryActionDetail: ActionDetailSchema.exactOptional().openapi({
      description:
        'Key information about the primary action for this activity. This is either representative, or the most important, of all actions in the activity, according to the ConsolidationStrategy in the request.',
    }),
    targets: z
      .array(TargetSchema)
      .exactOptional()
      .openapi({
        description:
          'All Google Drive objects this activity is about (e.g. file, folder, drive). This represents the state of the target immediately after the actions occurred.',
      }),
    timeRange: TimeRangeSchema.exactOptional().openapi({
      description: 'The activity occurred over this time range.',
    }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The activity occurred at this specific time.' }),
  })
  .openapi({
    description:
      'A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.',
    required: [],
  })
  .openapi('DriveActivity')

const QueryDriveActivityRequestSchema = z
  .object({
    ancestorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Return activities for this Drive folder, plus all children and descendants. The format is `items/ITEM_ID`.',
      }),
    consolidationStrategy: ConsolidationStrategySchema.exactOptional().openapi({
      description:
        "Details on how to consolidate related actions that make up the activity. If not set, then related actions aren't consolidated.",
    }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The filtering for items returned from this query request. The format of the filter string is a sequence of expressions, joined by an optional "AND", where each expression is of the form "field operator value". Supported fields: - `time`: Uses numerical operators on date values either in terms of milliseconds since Jan 1, 1970 or in RFC 3339 format. Examples: - `time > 1452409200000 AND time <= 1492812924310` - `time >= "2016-01-10T01:02:03-05:00"` - `detail.action_detail_case`: Uses the "has" operator (:) and either a singular value or a list of allowed action types enclosed in parentheses, separated by a space. To exclude a result from the response, prepend a hyphen (`-`) to the beginning of the filter string. Examples: - `detail.action_detail_case:RENAME` - `detail.action_detail_case:(CREATE RESTORE)` - `-detail.action_detail_case:MOVE` ',
      }),
    itemName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Return activities for this Drive item. The format is `items/ITEM_ID`.',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The minimum number of activities desired in the response; the server attempts to return at least this quantity. The server may also return fewer activities if it has a partial response ready before the request times out. If not set, a default value is used.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token identifies which page of results to return. Set this to the next_page_token value returned from a previous query to obtain the following page of results. If not set, the first page of results is returned.',
      }),
  })
  .openapi({ description: 'The request message for querying Drive activity.', required: [] })
  .openapi('QueryDriveActivityRequest')

const QueryDriveActivityResponseSchema = z
  .object({
    activities: z
      .array(DriveActivitySchema)
      .exactOptional()
      .openapi({ description: 'List of activity requested.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'Response message for querying Drive activity.', required: [] })
  .openapi('QueryDriveActivityResponse')

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
        'https://www.googleapis.com/auth/drive.activity':
          'View and add to the activity record of files in your Google Drive',
        'https://www.googleapis.com/auth/drive.activity.readonly':
          'View the activity record of files in your Google Drive',
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
        'https://www.googleapis.com/auth/drive.activity':
          'View and add to the activity record of files in your Google Drive',
        'https://www.googleapis.com/auth/drive.activity.readonly':
          'View the activity record of files in your Google Drive',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV2ActivityQueryRoute = createRoute({
  method: 'post',
  path: '/v2/activity:query',
  tags: ['activity'],
  description: 'Query past activity in Google Drive.',
  operationId: 'driveactivity.activity.query',
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
    body: { content: { 'application/json': { schema: QueryDriveActivityRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QueryDriveActivityResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.activity'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.activity'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive.activity.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/drive.activity.readonly'],
    },
  ],
})
